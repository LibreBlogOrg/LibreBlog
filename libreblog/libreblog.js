/**
 * Libreblog.org
 * Copyright (c) 2025 Thiago Gomes Quinalia
 * This code is licensed under the MIT License. 
 * License text available at https://opensource.org/license/MIT
 */
 
'use strict';

/* Internal modules */

let libreblog_logo;
let RIS_MAP;

/* Global variables and constants */

const libreblog_version = "1.0.0";
const twig_version = "1.17.1";
const sqlite_version = "3.49.2-build1";
const marked_version = "15.0.12";
//MIME types supported by most browsers in the HTMLCanvasElement interface
const supported_version_formats = ["JPG", "JPEG", "PNG", "WEBP"];
const debug_mode = false; //If false, it will load modules from a CDN (to be implemented)
let conversion_cache = {}; //Used to store previous conversions from Markdown to HTML
let declared_values_cache = {}; //Values that are declared inside the field "contents"
let references_cache = {}; //Used to store all the references of all the articles
let website_settings = {}; //Used in many parts of the code
let opfs_media_urls = {}; //Used to display images in preview mode

/* Classes */

class WebsiteFile {
  constructor(name, contents) {
    this.type = "file";
    this.name = name;
    this.contents = contents;
  }
}

class WebsiteFolder {
  constructor (name) {
    this.type = "folder";
    this.name = name;
    this.children = [];
  }

  folder(name) {
    const fd = new WebsiteFolder(name);
    //There is no need to check if there is already a child with that name
    this.children.push(fd);
    return fd;
  }

  file(name, contents) {
    const fl = new WebsiteFile(name, contents);
    this.children.push(fl);
  }

  getFile(path) {
    const nodes = path.split("/");

    let child = this;
    for (let i = 0; i < nodes.length; i++) {
      if (child && child.children) {
        const children = child.children.filter((item) => item.name === nodes[i]);
        if (!children) return null;
        child = children[0];
      }
    }

    if (child && child.name === nodes[nodes.length - 1] && child.type === "file") return child;
    return null;
  }
}

/* Functions */

const createTables = async function(db) {
  await db.exec({ sql: "CREATE TABLE IF NOT EXISTS sections (" +
    "uri TEXT PRIMARY KEY, " +
    "type TEXT NOT NULL, " +
    "title TEXT NOT NULL, " +
    "description TEXT, " +
    "created TEXT, " +
    "updated TEXT, " +
    "authors_ids TEXT," +
    "keywords TEXT, " +
    "declared_values TEXT, " +
    "contents TEXT" +
    ")"
  });

  await db.exec({ sql: "CREATE TABLE IF NOT EXISTS series ( " +
    "uri TEXT PRIMARY KEY, " +
    "type TEXT NOT NULL, " +
    "highlight_mainpage INTEGER, " +
    "highlight_section INTEGER, " +
    "in_sitemap INTEGER, " +
    "title TEXT NOT NULL, " +
    "subtitle TEXT, " +
    "section_uri TEXT, " +
    "created TEXT NOT NULL, " + 
    "updated TEXT NOT NULL, " +
    "published TEXT, " +
    "authors_ids TEXT, " +
    "contents TEXT, " +
    "photo TEXT, " +
    "photo_info TEXT, " +
    "keywords TEXT, " +
    "declared_values TEXT, " +
    "status TEXT NOT NULL" +      
    ")"
  });

  await db.exec({ sql: "CREATE TABLE IF NOT EXISTS articles ( " +
    "uri TEXT PRIMARY KEY, " +
    "type TEXT NOT NULL, " +
    "label TEXT, " +
    "section_uri TEXT, " +
    "series_uri TEXT, " +
    "highlight_mainpage INTEGER, " +
    "highlight_section INTEGER, " +
    "in_sitemap INTEGER, " +
    "title TEXT NOT NULL, " +
    "subtitle TEXT, " +
    "created TEXT NOT NULL, " + 
    "updated TEXT NOT NULL, " +
    "published TEXT, " +
    "authors_ids TEXT, " +
    "contents TEXT, " +
    "photo TEXT, " +
    "photo_info TEXT, " +
    "notes TEXT, " +
    "summary TEXT, " +
    "geolocation TEXT, " +
    "keywords TEXT, " +
    "language TEXT, " +
    "enable_comments INTEGER, " +
    "video TEXT, " +
    "video_info TEXT, " +
    "audio TEXT, " +
    "audio_info TEXT, " +
    "editorial_notes TEXT, " +
    "declared_values TEXT, " +
    "status TEXT NOT NULL " +
    ")"
  });

  await db.exec({ sql: "CREATE TABLE IF NOT EXISTS relations ( " +
    "uri TEXT PRIMARY KEY, " +
    "type TEXT NOT NULL, " +
    "article1 TEXT NOT NULL, " +
    "article2 TEXT NOT NULL, " +
    "title TEXT, " +
    "place TEXT, " +
    "contents TEXT, " +
    "authors_ids TEXT, " +
    "photo TEXT, " +
    "photo_info TEXT, " +
    "declared_values TEXT, " +
    "created TEXT NOT NULL, " + 
    "updated TEXT NOT NULL " +
    ")"
  });

  await db.exec({ sql: "CREATE TABLE IF NOT EXISTS authors ( " +
    "uri TEXT PRIMARY KEY, " +
    "type TEXT NOT NULL, " +
    "name TEXT NOT NULL, " +
    "email TEXT, " +
    "bio TEXT, " +
    "contact TEXT, " +
    "location TEXT, " +
    "contents TEXT, " +
    "photo TEXT, " +
    "declared_values TEXT, " +    
    "created TEXT NOT NULL, " + 
    "updated TEXT NOT NULL " +
    ")"
  });

  await db.exec({ sql: "CREATE TABLE IF NOT EXISTS navbar_items ( " +
    "uri TEXT PRIMARY KEY, " +
    "label TEXT NOT NULL, " +
    "location TEXT NOT NULL, " +
    "type TEXT NOT NULL, " +
    "reference TEXT NOT NULL, " +
    "created TEXT NOT NULL,  " +
    "updated TEXT NOT NULL " +
    ")"
  });

  await db.exec({ sql: "CREATE TABLE IF NOT EXISTS media ( " +
    "uri TEXT PRIMARY KEY, " +
    "file_extension TEXT NOT NULL, " +
    "type TEXT NOT NULL, " +
    "size INTEGER, " +
    "title TEXT, " +
    "alt_text TEXT, " +
    "info TEXT, " +
    "versions TEXT, " +
    "created TEXT NOT NULL,  " +
    "updated TEXT NOT NULL " +
    ")"
  });

  await db.exec({ sql: "CREATE TABLE IF NOT EXISTS sources ( " +
    "ris_id TEXT PRIMARY KEY, " +
    "ris_ty TEXT, " +
    "ris_a1 TEXT, " +
    "ris_a2 TEXT, " +
    "ris_a3 TEXT, " +
    "ris_a4 TEXT, " +
    "ris_ab TEXT, " +
    "ris_ad TEXT, " +
    "ris_an TEXT, " +
    "ris_au TEXT, " +
    "ris_c1 TEXT, " +
    "ris_c2 TEXT, " +
    "ris_c3 TEXT, " +
    "ris_c4 TEXT, " +
    "ris_c5 TEXT, " +
    "ris_c6 TEXT, " +
    "ris_c7 TEXT, " +
    "ris_c8 TEXT, " +
    "ris_ca TEXT, " +
    "ris_cn TEXT, " +
    "ris_ct TEXT, " +
    "ris_cy TEXT, " +
    "ris_da TEXT, " +
    "ris_db TEXT, " +
    "ris_do TEXT, " +
    "ris_dp TEXT, " +
    "ris_ed TEXT, " +
    "ris_ep TEXT, " +
    "ris_er TEXT, " +
    "ris_et TEXT, " +
    "ris_is TEXT, " +
    "ris_j2 TEXT, " +
    "ris_jo TEXT, " +
    "ris_kw TEXT, " +
    "ris_l1 TEXT, " +
    "ris_l4 TEXT, " +
    "ris_la TEXT, " +
    "ris_lb TEXT, " +
    "ris_m1 TEXT, " +
    "ris_m2 TEXT, " +
    "ris_m3 TEXT, " +
    "ris_n1 TEXT, " +
    "ris_n2 TEXT, " +
    "ris_nv TEXT, " +
    "ris_op TEXT, " +
    "ris_pb TEXT, " +
    "ris_py TEXT, " +
    "ris_ri TEXT, " +
    "ris_rn TEXT, " +
    "ris_rp TEXT, " +
    "ris_se TEXT, " +
    "ris_sn TEXT, " +
    "ris_sp TEXT, " +
    "ris_st TEXT, " +
    "ris_sv TEXT, " +
    "ris_t1 TEXT, " +
    "ris_t2 TEXT, " +
    "ris_t3 TEXT, " +
    "ris_ta TEXT, " +
    "ris_ti TEXT, " +
    "ris_tt TEXT, " +
    "ris_u1 TEXT, " +
    "ris_ur TEXT, " +
    "ris_vl TEXT, " +
    "ris_y1 TEXT, " +
    "ris_y2 TEXT, " +
    "created TEXT NOT NULL, " + 
    "updated TEXT NOT NULL " +
    ")"
  });

  await db.exec({ sql: "CREATE TABLE IF NOT EXISTS templates ( " +
    "theme_uri TEXT, " +
    "template_uri TEXT, " +
    "template_set TEXT, " +
    "template_type TEXT, " +
    "content_type TEXT, " +
    "contents TEXT, " +
    "created TEXT NOT NULL, " + 
    "updated TEXT NOT NULL, " +
    "UNIQUE(theme_uri, template_uri)" +
    ")"
  });

  await db.exec({ sql: "CREATE TABLE IF NOT EXISTS settings ( " +
    "uri TEXT PRIMARY KEY, " +
    "value TEXT" +
    ")"
  });

  globalThis.console.log("Tables created");
}

const setSetting = function(key, value) {
  return new Promise((resolve, _) => {
    useSqlite(async (db) => {
      await db.exec({
        sql: "INSERT INTO settings(uri, value) VALUES(?, ?) ON CONFLICT(uri) DO UPDATE SET value=?",
        bind: [key, value, value]
      });
  
      await updateSettings();
      resolve();
    });
  });
}

const getSetting = function(key) {
  return website_settings[key] ? website_settings[key] : null; //undefined does not work with the forms
}

const updateSettings = async function() {
  const rows = await globalThis.db.exec({
    sql: "SELECT * FROM settings",
    rowMode: 'object'
  });

  if (!rows) {
    globalThis.console.log("The settings could not be loaded.");
    return;
  }
  
  rows.forEach((row) => {
    website_settings[row['uri']] = row['value'];
  })
}
  
const getTemplates = async function(db) {
  const templates = {};

  const rows = await db.exec({
    sql: "SELECT * FROM templates WHERE theme_uri = 'current'",
    rowMode: 'object'
  });

  for (let i = 0; i < rows.length; i++) {
    const templateUri = rows[i]["template_uri"];
    templates[templateUri] = globalThis.Twig.twig({data: rows[i]["contents"]});
  }

  return templates;
}

const getMediaFilesData = async function(db, downloadMode) {
  const filesData = {};
  let resultRows = await db.exec({
    sql: "SELECT * FROM media",
    rowMode: 'object'
  });

  if (resultRows) {
    for (let i = 0; i < resultRows.length; i++) {
      filesData[resultRows[i]['uri']] = resultRows[i];
      filesData[resultRows[i]['uri']]['url'] = getPhotoUrl(resultRows[i]['uri'], downloadMode);
      filesData[resultRows[i]['uri']]['download_mode'] = downloadMode;
    }
  }

  return filesData;
}

const getAllResultRows = async function(table, db, orderBy) {
  let resultRows = await db.exec({
    sql: "SELECT * FROM " + table + (orderBy ? " ORDER BY " + orderBy : ""),
    rowMode: 'object'
  });

  return resultRows;
}

const getAllResultRowsIfPublished = async function(table, db, orderBy) {
  let resultRows = await db.exec({
    sql: "SELECT * FROM " + table + " WHERE status = 'Published'" + (orderBy ? " ORDER BY " + orderBy : ""),
    rowMode: 'object'
  });

  return resultRows;
}

const getArticle = async function(db, uri, relation, downloadMode, mediaFilesData) {
  let resultRows = await db.exec({
    sql: "SELECT * FROM articles WHERE uri = '" + uri + "' AND status = 'Published'",
    rowMode: 'object'
  });

  if (!resultRows || resultRows.length === 0) return {};

  const article = resultRows[0];
  await convertContentsToHTML(article, "articles", mediaFilesData);
  convertNotesToHTML(article, "articles");
  convertSummaryToHTML(article, "articles");
  convertPhotoToObj(article, downloadMode, mediaFilesData);
  
  const rel = structuredClone(relation);
  await convertContentsToHTML(rel, "relations", mediaFilesData);
  convertPhotoToObj(rel, downloadMode, mediaFilesData);

  article["relation"] = rel;
  article["editorial_notes"] = ""; //Not displayed on the website
  
  return article;
}

const getRelationsFromOneSide = async function(db, uri, side, downloadMode, mediaFilesData) {
  let relations = {};
  let resultRows = await db.exec({
    sql: "SELECT * FROM relations WHERE " + side + " = '" + uri + 
      "' ORDER BY place DESC",
    rowMode: 'object'
  });

  for (let i = 0; i < resultRows.length; i++) {
    const row = resultRows[i];
    if (!relations[row["type"]]) relations[row["type"]] = [];
    const otherSide = side === "article1" ? "article2" : "article1";
    const article = await getArticle(db, row[otherSide], row, downloadMode, mediaFilesData);
    relations[row["type"]].push(article);
  }

  return relations;
}

const getRelations = async function(db, uri, downloadMode, mediaFilesData) {
  return {
    first_articles: await getRelationsFromOneSide(db, uri, "article2", downloadMode, mediaFilesData), 
    second_articles: await getRelationsFromOneSide(db, uri, "article1", downloadMode, mediaFilesData)
  };
}

const getOneRow = async function(uri, table, db) {
  let resultRows = await db.exec({
    sql: "SELECT * FROM " + table + " WHERE uri = '" + uri + "'",
    rowMode: 'object'
  });

  if (!resultRows || resultRows.length === 0) return {};
  return resultRows[0];
}

const getResultRowsForSeriesPage = async function(uri, db) {
  let resultRows = await db.exec({
    sql: "SELECT * FROM articles WHERE series_uri = '" + uri + "' AND status = 'Published'",
    rowMode: 'object'
  });

  await addSectionTitles(db, resultRows);
  return resultRows;
}

const getResultRowsForSectionPage = async function(uri, table, db) {
  let resultRows = await db.exec({
    sql: "SELECT * FROM " + table + " WHERE section_uri = '" + uri + 
      "' AND highlight_section = 1 AND status = 'Published' ORDER BY published DESC, created DESC",
    rowMode: 'object'
  });

  return resultRows;
}

const getResultRowsForAuthorPage = async function(uri, table, db) {
  let resultRows = await db.exec({
    sql: "SELECT * FROM " + table + " WHERE authors_ids LIKE '%" + uri + 
      "%' AND status = 'Published' ORDER BY published DESC, created DESC",
    rowMode: 'object'
  });

  await addSectionTitles(db, resultRows);
  return resultRows;
}

const getResultRowsForMainpage = async function(table, db) {
  let resultRows = await db.exec({
    sql: "SELECT * FROM " + table + 
      " WHERE highlight_mainpage = 1 AND status = 'Published' ORDER BY published DESC, created DESC",
    rowMode: 'object'
  });

  await addSectionTitles(db, resultRows);
  return resultRows;
}

const addSectionTitles = async function(db, resultRows) {
  let titlesMap = {};

  for (let i = 0; i < resultRows.length; i++) {
    const row = resultRows[i];
    if (row['section_uri']) {

      if (titlesMap[row['section_uri']]) {
        row['section_title'] = titlesMap[row['section_uri']];
        continue;
      }

      let results = await db.exec({
        sql: "SELECT title FROM sections WHERE uri = '" + row['section_uri'] + "'",
        rowMode: 'object'
      });

      if (results && results[0]) {
        titlesMap[row['section_uri']] = results[0]['title'];
        row['section_title'] = results[0]['title'];
      }
    }
  }
}

const addAuthors = async function(db, resultRows, downloadMode, mediaFilesData) {
  let authorsMap = {}; 

  for (let i = 0; i < resultRows.length; i++) {
    const row = resultRows[i];
    if (row['authors_ids']) {
      const ids = row['authors_ids'].split(",")

      if (!row['authors']) row['authors'] = [];
      await addAuthorsForOneRow(ids, row, authorsMap, db, downloadMode, mediaFilesData);
    }
  }
}

const addAuthorsForOneRow = async function(ids, row, authorsMap, db, downloadMode, mediaFilesData) {  
  for (let i = 0; i < ids.length; i++) {
    if (authorsMap[ids[i]]) {
      row['authors'].push(structuredClone(authorsMap[ids[i]]));
    } else {
      let results = await db.exec({
        sql: "SELECT * FROM authors WHERE uri = '" + ids[i] + "'",
        rowMode: 'object'
      });

      if (results && results[0]) {
        const author = {
          uri: results[0]['uri'],
          type: results[0]['type'],
          name: results[0]['name'],
          email: results[0]['email'],
          bio: results[0]['bio'],
          contact: results[0]['contact'],
          location: results[0]['location'],
          contents: results[0]['contents'],
          photo: results[0]['photo']
        };
        await convertContentsToHTML(author, "authors", mediaFilesData);
        convertBioToHTML(author, "authors");
        convertContactToHTML(author, "authors");
        convertPhotoToObj(author, downloadMode, mediaFilesData);

        authorsMap[ids[i]] = structuredClone(author);
        row['authors'].push(structuredClone(author));
      }
    }
  }
}

const dotHtmlForLinks = function() {
  if (getSetting("remove-dot-html") === "true") {
    return "";
  }    
  return ".html";
}

const formatHTML = function(html) {
  var tab = '\t';
  var result = '';
  var indent= '';

  html.split(/>\s*</).forEach(function(element) {
    if (element.match( /^\/\w/ )) {
      indent = indent.substring(tab.length);
    }

    result += indent + '<' + element + '>\r\n';

    if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) { 
      indent += tab;              
    }
  });

  return result.substring(1, result.length-3);
}

const renderPageAsTemplate = function(uri, contents, mediaFilesData) {
  let declaredValues = {};
  
  if (contents && getSetting("twig-inside-articles") === "true") {
    let rendered = globalThis.Twig.twig({data: contents}).render({global: globalVariables(), a: {uri: uri, counter: 0, media: mediaFilesData, declared_values: declaredValues}});
    if (!rendered) {
      globalThis.console.warn("It was not possible to render the '" +
        uri + "' page because the Twig code inside it is badly formatted.");
      rendered = contents;
    }
    
    return [formatHTML(rendered), declaredValues];
  }
  
  return [contents, declaredValues];
}

const updateDeclaredValues = async function(db, table, row, declaredValues) {
  if (!declaredValues) declaredValues = {};
  
  const declaredValuesStr = JSON.stringify(declaredValues);
  row['declared_values'] = structuredClone(declaredValues);
  await db.exec({sql: "UPDATE " + table + " SET declared_values=? WHERE uri = '" + row.uri + "'", bind: [declaredValuesStr]});
}

const convertDVToJSONForEach = function(rows) {
  for (let i = 0; i < rows.length; i++) {
    convertDVToJSON(rows[i]);
  }
}

const convertDVToJSON = function(row) {
  if (row["declared_values"]) {
    try {
      row["declared_values"] = JSON.parse(row["declared_values"]);
    } catch (e) {
      globalThis.console.error("It was not possible to convert the declared values into JSON. Error: ", e);
    }
  }
}

const getComponentsHTML = function (templates, navbar, mediaFilesData) {
  const splitNavbar = {};
  const components = {};

  for (let i = 0; i < navbar.length; i++) {
    const item = structuredClone(navbar[i]);
    if (!splitNavbar[item['location']]) {
      splitNavbar[item['location']] = [];
    }

    splitNavbar[item['location']].push(item);
  }

  const componentsConfig = getThemeConfig()["page_components"];
  componentsConfig.forEach((config) => {
    components[config.name] = formatHTML(templates[config.name + "_html"].render({global: globalVariables(), navbar: splitNavbar[config.name], media: mediaFilesData}));
  });

  return components;
}

const newSearchItem = function(doc, folder, searchItems, downloadMode, mediaFilesData) {
  let sameTitleCounter = 0;
  for (let i = 0; i < searchItems.length; i++) {
    if (doc["title"] === searchItems[i]["title"]) sameTitleCounter++;
  }

  let type = "";
  switch (folder) {
    case "articles":
      type = "Article";
      break;
    case "series":
      type = "Series";
      break;
    default:
  }

  const newDoc = structuredClone(doc);
  convertPhotoToObj(newDoc, downloadMode, mediaFilesData);

  return {
    uri: "/" + folder + "/" + newDoc["uri"] + dotHtmlForLinks(),
    title: newDoc["title"] + (sameTitleCounter > 0 ? " (" + (sameTitleCounter + 1) + ")": ""),
    subtitle: newDoc["subtitle"],
    created: newDoc["created"],
    published: newDoc["published"],
    updated: newDoc["updated"],
    photo: newDoc["photo"],
    searchable: generateSearchableText(newDoc["title"], newDoc["subtitle"]),
    in_sitemap: newDoc["in_sitemap"],
    type: type
  };
}

const generateSearchableText = function(...args) {
  let searchable = "";

  for (let i = 0; i < args.length; i++) {
    if (i > 0) searchable += ";";
    searchable += args[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  return searchable;
}

const getSearchItems = async function(db, downloadMode, mediaFilesData) {
  let searchItems = [];

  const articles = await getAllResultRowsIfPublished("articles", db, "published DESC, created DESC");
  for (let i = 0; i < articles.length; i++) {
    searchItems.push(newSearchItem(articles[i], "articles", searchItems, downloadMode, mediaFilesData));
  }

  const series = await getAllResultRowsIfPublished("series", db, "published DESC, created DESC");
  for (let i = 0; i < series.length; i++) {
    searchItems.push(newSearchItem(series[i], "series", searchItems, downloadMode, mediaFilesData));
  }

  return searchItems;
}

const getCSSFileNames = function(pageType) {
  let files = [];
  //mainpage.css is included in all pages
  files.push("mainpage.css");

  if (pageType !== "mainpage") {
    files.push(pageType + ".css");
  }

  const componentsConfig = getThemeConfig()["page_components"];
  componentsConfig.forEach((config) => {
    files.push(config.name + ".css");
  });

  return files;
}

const sanitizeRef = function(ref) {
  const newRef = {};
  const keys = Object.keys(ref);
  
  keys.forEach((key) => {
    if (!["created", "updated"].includes(key)){
      newRef[key] = ref[key] ? ref[key] : "";
    }
  });

  return newRef;
}

const getArticlesHTML = async function(templates, db, searchJSFile, downloadMode, mediaFilesData) {
  let articlesHTML = [];

  const navbar = await getAllResultRows("navbar_items", db, "uri ASC");
  const references = await getAllResultRows("sources", db, "created DESC");
  const referencesMap = {};
  references.forEach((ref) => {
    referencesMap[ref.ris_id] = sanitizeRef(ref);
  });

  const resultRows = await getAllResultRowsIfPublished("articles", db, "published DESC, created DESC");
  await addSectionTitles(db, resultRows);
  await addAuthors(db, resultRows, downloadMode, mediaFilesData);

  for (let i = 0; i < resultRows.length; i++) {
    let declaredValues;
    const article = resultRows[i];
    await convertContentsToHTML(article, "articles", mediaFilesData);
    convertNotesToHTML(article, "articles");
    convertSummaryToHTML(article, "articles");
    convertPhotoToObj(article, downloadMode, mediaFilesData);

    const relations = await getRelations(db, article["uri"], downloadMode, mediaFilesData);
    const section = await getOneRow(article["section_uri"], "sections", db);
    const series = await getOneRow(article["series_uri"], "series", db);

    articlesHTML[i] = [article["uri"], formatHTML(templates[article["type"] + "_html"].render({article: article, global: globalVariables(), components: getComponentsHTML(templates, navbar, mediaFilesData), css_files: getCSSFileNames(article["type"]), relations: relations, search_js_file: searchJSFile, section: section, series: series, references: referencesMap, media: mediaFilesData}))];
  }

  return articlesHTML;
}

const getAuthorsHTML = async function(templates, db, searchJSFile, downloadMode, mediaFilesData) {
  let authorsHTML = [];

  const navbar = await getAllResultRows("navbar_items", db, "uri ASC");
  const resultRows = await getAllResultRows("authors", db, "created DESC");
  for (let i = 0; i < resultRows.length; i++) {
    let declaredValues;
    const row = resultRows[i];
    await convertContentsToHTML(row, "authors", mediaFilesData);
    convertBioToHTML(row, "authors");
    convertContactToHTML(row, "authors");
    convertPhotoToObj(row, downloadMode, mediaFilesData);

    const uri = row["uri"];
    const articles = await getResultRowsForAuthorPage(uri, "articles", db);
    const series = await getResultRowsForAuthorPage(uri, "series", db);
    convertPhotoToObjForEach(articles, downloadMode, mediaFilesData);
    await convertContentsToHTMLForEach(articles, "articles", mediaFilesData);
    convertNotesToHTMLForEach(articles, "articles");
    convertSummaryToHTMLForEach(articles, "articles");
    //convertDVToJSONForEach(articles);
    convertPhotoToObjForEach(series, downloadMode, mediaFilesData);
    await convertContentsToHTMLForEach(series, "series", mediaFilesData);
    //convertDVToJSONForEach(series);

    const pages = generateAuthorPagesForOneAuthor(articles, series);

    authorsHTML[i] = [];
    for (let j = 0; j < pages.length; j++) {
      authorsHTML[i][j] = [uri, formatHTML(templates[row["type"] + "_html"].render({author: row, articles: pages[j]["articles"], series: pages[j]["series"], global: globalVariables(), components: getComponentsHTML(templates, navbar, mediaFilesData), css_files: getCSSFileNames(row["type"]), search_js_file: searchJSFile, how_many_pages: pages.length, current_page: (j+1), media: mediaFilesData}))];
    }
  }

  return authorsHTML;
}

const getSectionsHTML = async function(templates, db, searchJSFile, downloadMode, mediaFilesData) {
  let sectionsHTML = [], sectionsRSS = [];

  const navbar = await getAllResultRows("navbar_items", db, "uri ASC");
  const resultRows = await getAllResultRows("sections", db, "created DESC");
  await addAuthors(db, resultRows, downloadMode, mediaFilesData);
  
  for (let i = 0; i < resultRows.length; i++) {
    let declaredValues;
    const row = resultRows[i];
    await convertContentsToHTML(row, "sections", mediaFilesData);

    const uri = row["uri"];
    const articles = await getResultRowsForSectionPage(uri, "articles", db);
    const series = await getResultRowsForSectionPage(uri, "series", db);
    convertPhotoToObjForEach(articles, downloadMode, mediaFilesData);
    await convertContentsToHTMLForEach(articles, "articles", mediaFilesData);
    convertNotesToHTMLForEach(articles, "articles");
    convertSummaryToHTMLForEach(articles, "articles");
    //convertDVToJSONForEach(articles);
    convertPhotoToObjForEach(series, downloadMode, mediaFilesData);
    await convertContentsToHTMLForEach(series, "series", mediaFilesData);
    //convertDVToJSONForEach(series);

    const pages = generateSectionPagesForOneSection(articles, series);

    sectionsHTML[i] = [];
    for (let j = 0; j < pages.length; j++) {
      sectionsHTML[i][j] = [uri, formatHTML(templates[row["type"] + "_html"].render({section: row, articles: pages[j]["articles"], series: pages[j]["series"], global: globalVariables(), components: getComponentsHTML(templates, navbar, mediaFilesData), css_files: getCSSFileNames(row["type"]), search_js_file: searchJSFile, how_many_pages: pages.length, current_page: (j+1), media: mediaFilesData}))];
    }

    let items = [...articles, ...series].sort((a, b) =>  b['created'].localeCompare(a['created']));
    const nbrStr = getSetting("number-items-rss");
    const nbr = nbrStr ? parseInt(nbrStr) : 0;
    if (nbr && Number.isInteger(nbr)) {
      items = items.slice(0, nbr);
    } else {
      items = items.slice(0, 15);
    }
    
    sectionsRSS[i] = formatHTML(templates[row["type"] + "_rss"].render({section: row, items: items, global: globalVariables()}));
  }

  return [sectionsHTML, sectionsRSS];
}

const generatePages = function(a, s, maxAKey, maxSKey) {
  let articles = structuredClone(a);
  let series = structuredClone(s);
  let pages = [{articles: [], series: []}];
  let maxArticles = getSetting(maxAKey);
  let maxSeries = getSetting(maxSKey);
  if (maxArticles === 0) articles = [];
  if (maxSeries === 0) series = [];
  if (!maxArticles) maxArticles = 20;
  if (!maxSeries) maxSeries = 10;

  let howManyPages = Math.ceil(articles.length / maxArticles);
  if (howManyPages < Math.ceil(series.length / maxSeries)) {
    howManyPages = Math.ceil(series.length / maxSeries);
  }

  for (let i = 0; i < howManyPages; i++) {
    const firstArticle = i * maxArticles;
    const firstSeries = i * maxSeries;
    let lastArticle = (i+1) * maxArticles;
    let lastSeries = (i+1) * maxSeries;
    if (lastArticle > articles.length) lastArticle = articles.length;
    if (lastSeries > series.length) lastSeries = series.length;

    pages[i] = {
      articles: (firstArticle < lastArticle ? articles.slice(firstArticle, lastArticle) : (firstArticle === lastArticle ? articles.slice(firstArticle) : [])),
      series: (firstSeries > lastSeries ? [] : (firstSeries === lastSeries ? series.slice(firstSeries) : series.slice(firstSeries, lastSeries)))
    };
  }

  return pages;
}

const generatePagesForSeries = function(a, maxAKey) {
  let articles = structuredClone(a);
  let pages = [{articles: []}];
  let maxArticles = getSetting("max-articles-series-page");
  if (maxArticles === 0) articles = [];
  if (!maxArticles) maxArticles = 20;

  let howManyPages = Math.ceil(articles.length / maxArticles);
  for (let i = 0; i < howManyPages; i++) {
    const firstArticle = i * maxArticles;
    let lastArticle = (i+1) * maxArticles;
    if (lastArticle > articles.length) lastArticle = articles.length;

    pages[i] = {
      articles: (firstArticle < lastArticle ? articles.slice(firstArticle, lastArticle) : (firstArticle === lastArticle ? articles.slice(firstArticle) : []))
    };
  }

  return pages;
}

const generateSectionPagesForOneSection = function(articles, series) {
  return generatePages(articles, series, "max-articles-section-page", "max-series-section-page");
}

const generateAuthorPagesForOneAuthor = function(articles, series) {
  return generatePages(articles, series, "max-articles-author-page", "max-series-author-page");
}

const getSeriesHTML = async function(templates, db, searchJSFile, downloadMode, mediaFilesData) {
  let seriesHTML = [];

  const navbar = await getAllResultRows("navbar_items", db, "uri ASC");
  const resultRows = await getAllResultRowsIfPublished("series", db, "published DESC, created DESC");
  await addAuthors(db, resultRows, downloadMode, mediaFilesData);
  
  for (let i = 0; i < resultRows.length; i++) {
    let declaredValues;
    const row = resultRows[i];
    await convertContentsToHTML(row, "series", mediaFilesData);
    convertPhotoToObj(row, downloadMode, mediaFilesData);

    const uri = row["uri"];
    const articles = await getResultRowsForSeriesPage(uri, db);
    convertPhotoToObjForEach(articles, downloadMode, mediaFilesData);
    await convertContentsToHTMLForEach(articles, "articles", mediaFilesData);
    convertNotesToHTMLForEach(articles, "articles");
    convertSummaryToHTMLForEach(articles, "articles");
    //convertDVToJSONForEach(articles);

    const section = await getOneRow(row["section_uri"], "sections", db);

    const pages = generatePagesForSeries(articles);

    seriesHTML[i] = [];
    for (let j = 0; j < pages.length; j++) {
      seriesHTML[i][j] = [uri, formatHTML(templates[row["type"] + "_html"].render({series: row, articles: pages[j]["articles"], global: globalVariables(), components: getComponentsHTML(templates, navbar, mediaFilesData), css_files: getCSSFileNames(row["type"]), search_js_file: searchJSFile, how_many_pages: pages.length, current_page: (j+1), section: section, media: mediaFilesData}))];
    }
  }

  return seriesHTML;
}

const getMainpagesHTML = async function(templates, db, searchJSFile, downloadMode, mediaFilesData) {
  const navbar = await getAllResultRows("navbar_items", db, "uri ASC");
  const articles = await getResultRowsForMainpage("articles", db);
  const series = await getResultRowsForMainpage("series", db);
  convertPhotoToObjForEach(articles, downloadMode, mediaFilesData);
  await convertContentsToHTMLForEach(articles, "articles", mediaFilesData);
  convertNotesToHTMLForEach(articles, "articles");
  convertSummaryToHTMLForEach(articles, "articles");
  //convertDVToJSONForEach(articles);
  convertPhotoToObjForEach(series, downloadMode, mediaFilesData);
  await convertContentsToHTMLForEach(series, "series", mediaFilesData);
  //convertDVToJSONForEach(series);

  const pages = generateMainpagePages(articles, series);

  const mainpagesHTML = [];
  for (let i = 0; i < pages.length; i++) {
    mainpagesHTML[i] = formatHTML(templates["mainpage_html"].render({articles: pages[i]["articles"], series: pages[i]["series"], global: globalVariables(), components: getComponentsHTML(templates, navbar, mediaFilesData), css_files: getCSSFileNames("mainpage"), search_js_file: searchJSFile, how_many_pages: pages.length, current_page: (i+1), media: mediaFilesData}));
  } 
  let items = [...articles, ...series].sort((a, b) =>  b['created'].localeCompare(a['created']));
  const nbrStr = getSetting("number-items-rss");
  const nbr = nbrStr ? parseInt(nbrStr) : 0;
  if (nbr && Number.isInteger(nbr)) {
    items = items.slice(0, nbr);
  } else {
    items = items.slice(0, 15);
  }
    
  const mainpageRSS = formatHTML(templates["mainpage_rss"].render({items: items, global: globalVariables()}));
  return [mainpagesHTML, mainpageRSS];
}

const generateMainpagePages = function(articles, series) {
  return generatePages(articles, series, "max-articles-mainpage", "max-series-mainpage");
}

const convertGenericToHTML = function(specific, row, type) {
  if (!row || !row[specific]) return;
  
  if (conversion_cache[specific + "/" + type + "/" + row["uri"]]) {
    row[specific] = conversion_cache[specific + "/" + type + "/" + row["uri"]];
  }

  try {
    row[specific] = globalThis.marked.parse(row[specific]);
  } catch (e) {
    globalThis.console.error("Error while converting markdown text. ", e);
    row[specific] = "Error while converting markdown text.\n\n" + row[specific];
  }

  conversion_cache[specific + "/" + type + "/" + row["uri"]] = row[specific];
}

const convertContentsToHTML = async function(row, type, mediaFilesData) {
  if (!row || !row["contents"]) return;
  if (conversion_cache["contents/" + type + "/" + row["uri"]]) {
    row["contents"] = conversion_cache["contents/" + type + "/" + row["uri"]];
    row["declared_values"] = structuredClone(declared_values_cache[type + "/" + row["uri"]]);
  } else {
    let declaredValues = {};
    [row["contents"], declaredValues] = renderPageAsTemplate(row["uri"], row["contents"], mediaFilesData);
    declared_values_cache[type + "/" + row["uri"]] = declaredValues;
    await updateDeclaredValues(db, type, row, declaredValues);
    convertGenericToHTML("contents", row, type);
  }
}

const convertNotesToHTML = function(row, type) { //For now, the type is only "article"
   convertGenericToHTML('notes', row, type);
}

const convertSummaryToHTML = function(row, type) { //For now, the type is only "article"
   convertGenericToHTML('summary', row, type);
}

const convertBioToHTML = function(row, type) { //For now, the type is only "author"
   convertGenericToHTML('bio', row, type);
}

const convertContactToHTML = function(row, type) { //For now, the type is only "author"
   convertGenericToHTML('contact', row, type);
}

const getPhotoUrl = function(photo, downloadMode) {
  const imgUrlPrefix = globalVariables()["img_url_prefix"];
  let url = "";

  if (downloadMode) {
    url = imgUrlPrefix ? imgUrlPrefix + "/" + photo : "/media/" + photo;
  } else {
    url = opfs_media_urls[photo];
  }

  return url;
}

const convertPhotoToObj = function(row, downloadMode, mediaFilesData) {
  if (!row || !row['photo']) return;
  const photoStr = row['photo'];

  if (photoStr.startsWith("http://") || photoStr.startsWith("https://")) {
    row['photo'] = {
      url: photoStr, 
      uri: '',
      file_extension: '',
      size: '',
      alt_text: '',
      title: '',
      info: '',
      versions: {small: false, medium: false, large: false},
      download_mode: downloadMode
    };
  } else {
    const p = mediaFilesData[photoStr];
    row['photo'] = {
      url: getPhotoUrl(photoStr, downloadMode),
      uri: photoStr,
      file_extension: p ? p['file_extension'] : '',
      size: p ? p['size'] : '',
      alt_text: p ? p['alt_text'] : '',
      title: p ? p['title'] : '',
      info: p ? p['info'] : '',
      versions: p ? getPhotoVersions(p['versions']) : {small: false, medium: false, large: false},
      download_mode: downloadMode
    };
  }
}

const getPhotoVersions = function(versionsStr) {
  const versions = {small: false, medium: false, large: false};
  if (!versionsStr) return versions;
  
  const versionsArr = versionsStr.split(",");

  if (versionsArr.includes("small")) {
    versions["small"] = true;
  } 
  if (versionsArr.includes("medium")) {
    versions["medium"] = true;
  }
  if (versionsArr.includes("large")) {
    versions["large"] = true;
  }

  return versions;
}

const convertPhotoToObjForEach = function(rows, downloadMode, mediaFilesData) {
  for (let i = 0; i < rows.length; i++) {
    convertPhotoToObj(rows[i], downloadMode, mediaFilesData);
  }
}

const convertNotesToHTMLForEach = function(rows, type) {
  for (let i = 0; i < rows.length; i++) {
    convertNotesToHTML(rows[i], type);
  }
}

const convertSummaryToHTMLForEach = function(rows, type) {
  for (let i = 0; i < rows.length; i++) {
    convertSummaryToHTML(rows[i], type);
  }
}

const convertContentsToHTMLForEach = async function(rows, type, mediaFilesData) {
  for (let i = 0; i < rows.length; i++) {
    await convertContentsToHTML(rows[i], type, mediaFilesData);
  }
}

const generateCSSFiles = function(templates) {
  const cssFiles = [];
  const keys = Object.keys(templates);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].endsWith("_css")) {
      cssFiles.push([keys[i].replace("_css", ""), templates[keys[i]].render({global: globalVariables()})]);
    }
  }

  return cssFiles;
}

const generateJSFiles = function(templates, searchItems) {
  const jsFiles = [];
  jsFiles.push(["main", getSetting("main-js")]);

  const searchJSFile = "search-" + generateRandomId();
  //It will be used to display the search results in the iframe
  const libreblogSearch = storeLibreblogSearch(searchItems);
  jsFiles.push([searchJSFile, "var libreblogSearch =" + libreblogSearch + ";"]);

  return [jsFiles, searchJSFile + ".js"];
}

const storeLibreblogSearch = function(searchItems) {
  const libreblogSearch = JSON.stringify(searchItems);
  setSetting("libreblog-search", libreblogSearch);

  return libreblogSearch;
}

const getLibreblogSearch = function() {
  const str = getSetting("libreblog-search");
  if (str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      globalThis.console.error("It was not possible to convert this string into JSON. Error: ", e);
    }
  }

  return {};
}

const doPagination = function(sFolder, pages) {
  sFolder.file(pages[0][0] + ".html", pages[0][1]);
  if (pages.length > 1) {
    const pageFolder = sFolder.folder(pages[0][0]).folder("page");
    for (let i = 1; i < pages.length; i++) {
      pageFolder.file((i+1) + ".html", pages[i][1]);
    }
  }
}

const createSitemap = function(searchItems) {
  if (!searchItems) return "";
  
  const websiteUrl = globalVariables()["website_url"];
  let sitemap = '<?xml version="1.0" encoding="UTF-8" ?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (let i = 0; i < searchItems.length; i++) {
    const updated = searchItems[i]["updated"].split(" ")[0];
    const url = websiteUrl + searchItems[i]["uri"];
    
    if (searchItems[i]["in_sitemap"]) {
      sitemap += "  <url>\n    <loc>" + url + "</loc>\n    <lastmod>" + updated + "</lastmod>\n  </url>\n";
    }
  }
  sitemap += "</urlset>";

  return sitemap;
}

const createWebsiteFolder = async function(db, downloadMode) {
  configTwig();
  conversion_cache = {};
  references_cache = {};
  opfs_media_urls = {};
  
  if (!downloadMode) {
    const response = await listMediaFiles();
    if (response.type !== "error") { 
      response.result.forEach((item) => {
        opfs_media_urls[item['name']] = item['url'];
      });
    }
  }

  const mediaFilesData = await getMediaFilesData(db, downloadMode);
  const searchItems = await getSearchItems(db, downloadMode, mediaFilesData);
  const templates = await getTemplates(db);
  const cssFiles = generateCSSFiles(templates);
  const [jsFiles, searchJSFile] = generateJSFiles(templates, searchItems);
  //The order 1-2-3-4-5 should be respected so that the declared values are inserted into the database before being used
  const articlesHTML = await getArticlesHTML(templates, db, searchJSFile, downloadMode, mediaFilesData); //1
  const seriesHTML = await getSeriesHTML(templates, db, searchJSFile, downloadMode, mediaFilesData); //2
  const authorsHTML = await getAuthorsHTML(templates, db, searchJSFile, downloadMode, mediaFilesData); //3
  const [sectionsHTML, sectionsRSS] = await getSectionsHTML(templates, db, searchJSFile, downloadMode, mediaFilesData); //4
  const [mainpagesHTML, mainpageRSS] = await getMainpagesHTML(templates, db, searchJSFile, downloadMode, mediaFilesData); //5

  const root = new WebsiteFolder("root");

  const articles = root.folder("articles");
  for (let i = 0; i < articlesHTML.length; i++) {
    articles.file(articlesHTML[i][0] + ".html", articlesHTML[i][1]);
  }

  const authors = root.folder("authors");
  for (let i = 0; i < authorsHTML.length; i++) {
    doPagination(authors, authorsHTML[i]);
  }

  const sections = root.folder("sections");
  for (let i = 0; i < sectionsHTML.length; i++) {
    doPagination(sections, sectionsHTML[i]);

    if (getSetting("rss-for-sections") === "true") {
      sections.file(sectionsHTML[i][0][0] + ".rss", sectionsRSS[i]);
    }
  }

  const series = root.folder("series");
  for (let i = 0; i < seriesHTML.length; i++) {
    doPagination(series, seriesHTML[i]);
  }

  const css = root.folder("css");
  for (let i = 0; i < cssFiles.length; i++) {
    css.file(cssFiles[i][0] + ".css", cssFiles[i][1]);
  }

  const js = root.folder("js");
  for (let i = 0; i < jsFiles.length; i++) {
    js.file(jsFiles[i][0] + ".js", jsFiles[i][1]);
  }

  root.file("index.html", mainpagesHTML[0]);
  if (mainpagesHTML.length > 1) {
    const page = root.folder("page");
    for (let i = 1; i < mainpagesHTML.length; i++) {
      page.file((i+1) + ".html", mainpagesHTML[i]);
    }
  }

  if (getSetting("rss-for-mainpage") === "true") {
    root.file("index.rss", mainpageRSS);
  }

  const response = await listMediaFilesWithData();
  if (response.type !== "error") {
    const media = root.folder("media");
    for (let i = 0; i < response.result.length; i++) {
      const item = response.result[i];
      media.file(item['name'], item['data']);
    }
  }

  //for Apache and LiteSpeed servers
  let htaccessFile = getSetting("htaccess");     
  if (getSetting("remove-dot-html") === "true") {
    htaccessFile += "\nRewriteEngine On \n" + 
    "RewriteCond %{THE_REQUEST} \s/([^.]+)\.html[\s?] [NC] \n" + 
    "RewriteRule ^ %1 [R=301,L] \n" + 
    "RewriteCond %{REQUEST_FILENAME} !-d \n" + 
    "RewriteCond %{REQUEST_FILENAME} !-f \n" + 
    "RewriteRule ^(.*)$ $1.html [L] \n";
  } 
  root.file(".htaccess", htaccessFile);
  root.file("sitemap.xml", createSitemap(searchItems));

  const websiteUrl = globalVariables()["website_url"];
  root.file("robots.txt", "Sitemap: " + websiteUrl + "/sitemap.xml");
  
  return root;
}

const lsGetItem = function(item, defaultValue) {
  const value = getSetting(item);
  return value ? value : defaultValue;
}

const globalVariables = function() {
  const strings = {};
  const stringsArr = getThemeConfig()["strings"];
  stringsArr.forEach((item) => {
    strings[item.name.replaceAll("-", "_")] = lsGetItem(item.name, item.default);
  });

  const colors = {};
  const colorsArr = getThemeConfig()["colors"];
  colorsArr.forEach((item) => {
    colors[item.name.replaceAll("-", "_")] = lsGetItem(item.name, item.default);
  });

  let userVars = {};
  let userVarsStr = getSetting("user-variables");
  if (userVarsStr) {
    try {
      userVars = JSON.parse(userVarsStr);
    } catch(e) {
      console.error("Error with the user variables: ", e.message);
      userVars = {};
    }
  }

  return {
    website_name: getSetting("website-name"),
    website_title: getSetting("website-title"),
    website_url: getSetting("website-url"),
    img_url_prefix: getSetting("img-url-prefix"),
    share_button: getSetting("share-button") === "true",
    feedback_uri_prefix: getSetting("feedback-uri-prefix"),
    website_description: getSetting("website-description"),
    website_logo: getSetting("website-logo"),
    website_favicon: getSetting("website-favicon"),
    website_language: getSetting("website-language"),
    website_timezone: getSetting("website-timezone"),
    timezone_abbreviation: getSetting("timezone-abbreviation"),
    head_code_snippets: getSetting("head-code-snippets"),
    comment_box_snippet: getSetting("comment-box-snippet"),
    footer_social_snippet: getSetting("footer-social-snippet"),
    article_in_feedback: getSetting("article-in-feedback") === "true",
    articles_in_author_profile: getSetting("articles-in-author-profile") === "true",
    dot_html_for_links: dotHtmlForLinks(),
    colors: colors,
    strings: strings,
    user: userVars,
    libreblog: {
      logo: libreblog_logo,
      version: libreblog_version
    }
  };
}

const mostAppropriateVersion = function (uri, versions, desiredVersion) {
  if (versions[desiredVersion]) {
    return uri.replace(".", "_" + desiredVersion + ".");
  } else if (desiredVersion === "small" && versions["medium"]) {
    return uri.replace(".", "_medium" + ".");
  } else if ((desiredVersion === "small" || desiredVersion === "medium") && versions["large"]) {
    return uri.replace(".", "_large" + ".");
  }

  return null;
}

const configTwig = function() {
  globalThis.Twig.extendFunction('r', (refId, args) => {
    references_cache[args.uri + "/" + ++args.counter] = refId;
    references_cache[args.uri + "/counter"] = args.counter;
    return "<a href='#ref-" + args.counter + "' class='ref-link' property='dc:relation'>" + args.counter + "</a>";
  });

  globalThis.Twig.extendFunction('note', (noteText, args) => {
    references_cache[args.uri + "/" + ++args.counter] = noteText;
    references_cache[args.uri + "/counter"] = args.counter;
    return "<a href='#ref-" + args.counter + "' class='ref-link'>" + args.counter + "</a>";
  });

  globalThis.Twig.extendFunction('img', (id, args, options) => {
    if (!args.media[id]) return "";
    if (!options) options = {};
    let alt = args.media[id].alt_text;
    let url = args.media[id].url;
    let title;
    let caption;
    let style;
    let height;
    let width;

    if (options.alt) {
      alt = (options.alt === true ? args.media[id].alt_text : options.alt);
    }
    alt = alt.replaceAll("\"", "'");

    if (options.version && args.media[id].versions) {
      const versions = getPhotoVersions(args.media[id].versions);
      const versionUri = mostAppropriateVersion(id, versions, options.version);
      if (versionUri) url = getPhotoUrl(versionUri, args.media[id].download_mode);
    }

    if (options.title) {
      title = (options.title === true ? args.media[id].title : options.title);
      title = title.replaceAll("\"", "'");
    }

    if (options.caption) {
      caption = (options.caption === true ? args.media[id]['photo_info'] : options.caption);
    }

    if (options.style) style = options.style.replaceAll("\"", "'");
    if (options.height) height = options.height.replaceAll("\"", "'");
    if (options.width) width = options.width.replaceAll("\"", "'");
    
    const img = `<img src="${url}" alt="${alt}" ${title ? `title="${title}" ` : ``}${height ? `height="${height}" ` : ``}${width ? `width="${width}" ` : ``}${style ? `style="${style}" ` : ``}/>`;

    if (caption) return `<figure>${img}<figcaption>${caption}</figcaption></figure>`;

    return img;
  });

  globalThis.Twig.extendFunction('photo_version', (photo, version) => {
    if (!photo || !photo.url) return "";
    if (!supported_version_formats.includes(photo["file_extension"])) return photo.url;

    const uri = photo.uri;
    let versionUri = mostAppropriateVersion(uri, photo["versions"], version);

    if (versionUri) return getPhotoUrl(versionUri, photo["download_mode"]);
    return photo.url;
  });
  
  globalThis.Twig.extendFunction('media_url', (mediaId, media) => {
    if (!media[mediaId]) return ""; 
    return media[mediaId].url;
  });

  globalThis.Twig.extendFunction('iso_datetime', (date) => {
    return date.replace(" ", "T");
  });

  globalThis.Twig.extendFunction('rfc822_datetime', (dt, tz) => {
    const dateString = dt.replace(" ", "T") + tz;
   
    const dayStrings = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthStrings = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const timeStamp = Date.parse(dateString);
    const date = new Date(timeStamp);
    
    const day = dayStrings[date.getDay()];
    const dayNumber = addLeadingZero(date.getDate());
    const month = monthStrings[date.getMonth()];
    const year = date.getFullYear();
    const time = `${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}:00`;
    const timezone = date.getTimezoneOffset() === 0 ? "GMT" : "BST";
    
    return `${day}, ${dayNumber} ${month} ${year} ${time} ${timezone}`;
  });

  globalThis.Twig.extendFunction('reference', (articleUri, pos) => {
    return references_cache[articleUri + "/" + pos];
  });

  globalThis.Twig.extendFunction('reference_loc', (articleUri, pos) => {
    if (pos === 0) return "";
    const refId = references_cache[articleUri + "/" + pos];
    
    if (refId === references_cache[articleUri + "/" + (pos-1)]) return "Ibid.";
    for (let i = 0; i < pos; i++) {
      if (refId === references_cache[articleUri + "/" + i]) return "Loc. cit.";
    }

    return "";
  });

  globalThis.Twig.extendFunction('references_length', (articleUri) => {
    if (!references_cache[articleUri + "/counter"]) return 0;
    return references_cache[articleUri + "/counter"];
  });

  globalThis.Twig.extendFunction('get_authors', (ref) => {
    if (!ref) return "";
    let authors = [];
    const nbrStr = getSetting("number-authors-references");
    let nbr = nbrStr ? parseInt(nbrStr) : 0;
    if (!Number.isInteger(nbr)) {
      nbr = 0;
    }
    
    
    if (ref.ris_au) {
      authors = [...ref.ris_au.split('\n')];
    }

    if (ref.ris_a1) {
      authors = [...authors, ...ref.ris_a1.split('\n')];
    }

    if (nbr && nbr < authors.length) return authors.slice(0, nbr).concat(["et al."]);
    return authors;
  });

  globalThis.Twig.extendFunction('get_urls', (ref) => {
    if (!ref) return "";
    let urls = [];
    if (ref.ris_ur) {
      urls = [...ref.ris_ur.split('\n')];
    }

    return urls;
  });

  globalThis.Twig.extendFunction('get_py', (ref) => {
    if (!ref) return "";
    
    let py = ref.ris_py;
    
    if (!py) {
      py = ref.ris_y1;
    }

    return py.trim();
  });

  globalThis.Twig.extendFunction('get_title', (ref) => {
    if (!ref) return "";
     
    let title = ref.ris_st;

    if (!title) {
      title = ref.ris_ti;
    }
    
    if (!title) {
      title = ref.ris_t1;
    }

    return title.trim();
  });

  globalThis.Twig.extendFunction('get_type', (ref) => {
    if (!ref) return "";
    let ty = ref.ris_ty;
    if (RIS_MAP[ty]) return RIS_MAP[ty]["Type"];
    return "";
  });

  const getRefPart = function(ty, ref) {
    if (!ref) return "";
     
    const dbTag = "ris_" + ty.toLowerCase();
    const upTag = ty.toUpperCase();
    if (ref[dbTag]) {
      const label = RIS_MAP[ref['ris_ty']][upTag] ? RIS_MAP[ref['ris_ty']][upTag] : RIS_MAP['GEN'][upTag];
      return [ty, label, ref[dbTag]];
    }

    return null;
  }

  globalThis.Twig.extendFunction('get_tags', (ref, tags) => {
    if (!ref) return [];
    let response = [];
    
    for (let i = 0; i < tags.length; i++) {
      if (typeof tags[i] === 'object') {
        const synonyms = tags[i];
        for (let j = 0; j < synonyms.length; j++) {
          const part = getRefPart(synonyms[j], ref); 
          if (part) {
            response.push(part);
            break;
          }
        }
      } else {
        const part = getRefPart(tags[i], ref); 
        if (part) response.push(part);
      }
    }

    return response;
  });
  
  globalThis.Twig.extendFunction('declare', (key, item, args) => {
    args.declared_values[key] = item;
  });

  globalThis.Twig.extendFunction('format_date', (dateStr, options) => {
    if (!dateStr) return "";
    dateStr = dateStr.replace(" ", "T");

    const countHyphens = (dateStr.match(/-/g) || []).length;
    const countTs = (dateStr.match(/T/g) || []).length;
    const dateObj = new Date(dateStr);
    const lang = globalThis.navigator && globalThis.navigator.language ? globalThis.navigator.language : "en";
    if (!options) options = { year: 'numeric', month: 'short', day: 'numeric' };

    switch (countHyphens) {
      case 0:
        options = { year: 'numeric' };
        break;
      case 1:
        options = { year: 'numeric', month: 'short' };
        break;
      case 2:
        options = { year: 'numeric', month: 'short', day: 'numeric' };
        if (countTs === 1) {
          options['hour'] = 'numeric';
          options['minute'] = 'numeric';
        }
        break;
      default:
    }

    let formattedDate = new Intl.DateTimeFormat(lang, options).format(dateObj);
    if (lang.startsWith("pt")) {
      formattedDate = formattedDate.replaceAll("de ", "");
    }

    return formattedDate;
  });
}

const addLeadingZero = function (num) {
  let numStr = num.toString();
  while (numStr.length < 2) numStr = "0" + numStr;
  return numStr;
}

const generateRandomId = function() {
  return Date.now().toString(36) + Math.floor(Math.random() * 100000).toString(36);
}

const predefinedTimeout = function(round) {
  if (round < 10) return 1;
  if (round < 20) return 5;
  if (round < 30) return 10;
  if (round < 40) return 20;
  if (round < 50) return 40;
  return 50;
}

//In case of an attempt to use the database while Sqlite is being initialized
const useSqlite = async function(callback) {
  if (globalThis.db) {
    callback(globalThis.db)
    return;
  }

  let ok = false;
  for (let counter = 0; !ok && counter < 150; counter++) {
    await new Promise(resolve => setTimeout(resolve, predefinedTimeout(counter)));
    if (globalThis.db) ok = true;
  }

  if (ok) {
    callback(globalThis.db);
  } else {
    globalThis.console.warn("Sqlite is not ready yet.");
    callback(null);
  }
}

const startDb = async function() {
  const options = {print: globalThis.console.log, printErr: globalThis.console.error};
  
  if (inNode()) {
    const sqlite3 = await globalThis.sqlite3InitModule(options);
    const oo1Db = new sqlite3.oo1.DB(); //in-memory db
    createRegularDb(sqlite3, oo1Db);
  } else if (getItemFromLS("use-js-storage-db") !== "true") {
    let worker1Ready;
    createWorker();
    const startWorkerDb = await new Promise((resolve, _) => {
      postMessage({messageId: 'start-sqlite3'}, resolve);
    });

    if (startWorkerDb.type === 'ok') {
      worker1Ready = await new Promise((resolve, _) => {
        postMessage({messageId: 'init-worker-api'}, resolve);
      });

      if (worker1Ready && worker1Ready.result === 'worker1-ready') {
        createWorkerDb();
        globalThis.dbId = await globalThis.db.open();

        if (!globalThis.dbId) {
          await startJsStorageDb(options);
          setItemInLS("use-js-storage-db", "true");
        }
      }
    }
  } else {
    await startJsStorageDb(options);
  }
}

const getItemFromLS = function(key) {
  if (inNode()) {
    return null;
  } else {
    return globalThis.localStorage.getItem(key);
  }
}

const setItemInLS = function(key, value) {
  if (!inNode()) {
    globalThis.localStorage.setItem(key, value);
  }
}

const startJsStorageDb = async function(options) {
  const sqlite3 = await globalThis.sqlite3InitModule(options);
  const oo1Db = new sqlite3.oo1.JsStorageDb('local');
  createRegularDb(sqlite3, oo1Db);
}

const createRegularDb = function(sqlite3, oo1Db) {
  const db = {};
  db['exec'] = (argsObj, options) => {
    let result = [];
    try {
      result = oo1Db.exec(argsObj);
    } catch(e) {
      if (options && options.if_error_do) options.if_error_do(e);
    }

    return result;
  };
  db['close'] = () => oo1Db.close();
  db['restore'] = async (arrayBuffer, format) => {
    if (format === "sqlite3") {
      restoreDbFromSqlite3(sqlite3, arrayBuffer);
    } else if (format === "json") {
      const dec = new TextDecoder("utf-8");
      const jsonDbStr = dec.decode(arrayBuffer);
      await restoreDbFromJson(jsonDbStr);
      await startDb();
    }
  };
  db['export'] = () => sqlite3.capi.sqlite3_js_db_export(oo1Db);
  
  globalThis.db = db;
}

const createWorkerDb = function() {
  const db = {};
  db['exec'] = async (argsObj, options) => {
    if (options && options.cached_select) {
      const cached = cachedSelect(argsObj);
      if (cached) return cached;
    }
   
    let response = await new Promise((resolve, _) => {
      postMessage({
        type: "exec",
        messageId: generateRandomId(),
        dbId: globalThis.dbId,
        args: argsObj
      }, resolve);
    });

    if (response.type === "error" && options && options.if_error_do) options.if_error_do();
    return response.result && response.result.resultRows ? response.result.resultRows : null;
  };
  db['close'] = async () => {
    let response = await new Promise((resolve, _) => {
      postMessage({
        type: "close",
        messageId: generateRandomId(),
        dbId: globalThis.dbId
      }, resolve);
    });

    return response.result;
  };
  db['open'] = async () => {
    let response = await new Promise((resolve, _) => {
      postMessage({
        type: "open",
        messageId: generateRandomId(),
        args: {
          filename: 'main.db',
          vfs: 'opfs'
        }
      }, resolve);
    });

    return response.result && response.result.dbId ? response.result.dbId : null;
  };
  db['restore'] = async (arrayBuffer, format) => {
    if (format === "sqlite3") {
      await restoreWorkerDbFromSqlite3(arrayBuffer);
    } else if (format === "json") {
      const dec = new TextDecoder("utf-8");
      const jsonDbStr = dec.decode(arrayBuffer);
      await restoreDbFromJson(jsonDbStr);
      await startDb();
    }
  };
  db['export'] = async () => {
    let response = await new Promise((resolve, _) => {
      postMessage({
        type: "export",
        messageId: generateRandomId(),
        dbId: globalThis.dbId
      }, resolve);
    });

    return response.result && response.result.byteArray ? response.result.byteArray : null;
  };
  globalThis.db = db;
}

const cachedSelect = function(args) {
  if (inNode()) {
    //Not implemented
  } else {
    const key = JSON.stringify(args);
    const resultRowsStr = getItemFromLS(key);
    if (resultRowsStr) {
      return JSON.parse(resultRowsStr);
    } else {
      const cachedSelectsStr = getItemFromLS("cached-selects");
      const cachedSelects = cachedSelectsStr ? JSON.parse(cachedSelectsStr) : [];
      cachedSelects.push(key);
      setItemInLS("cached-selects", JSON.stringify(cachedSelects));
    }
  }
}

const updateCachedSelects = async function() {
  const cachedSelectsStr = getItemFromLS("cached-selects");
  if (cachedSelectsStr) {
    const cachedSelects = JSON.parse(cachedSelectsStr);
    for (let i = 0; i < cachedSelects.length; i++) {
      const sqlStr = cachedSelects[i];
      const sql = JSON.parse(sqlStr);
      const resultRows = await globalThis.db.exec(sql);
      const resultRowsStr = JSON.stringify(resultRows);
      setItemInLS(sqlStr, resultRowsStr); 
    }
  }
}

const isInitWorkerApiResponse = function(data) {
  return (data.result === 'worker1-ready' && data.type === 'sqlite3-api') 
    || (globalThis.promises['init-worker-api'] && data.type === 'error');
}

const createWorker = function() {
  globalThis.promises = {};
  
  globalThis.workerEvents = new EventTarget();
  globalThis.workerEvents.addEventListener("worker-event", async (event) => {
    const data = event.detail;
    if (isInitWorkerApiResponse(data)) {
      data.messageId = 'init-worker-api';
    }

    if (data.type === 'error') {
      globalThis.console.warn("Error: ", data);
    }
    
    if (data.messageId) {
      globalThis.promises[data.messageId](data);
      delete globalThis.promises[data.messageId];
    } else {
      globalThis.console.log("Unknown worker event: ", event);
    }
  });

  globalThis.worker = new Worker(new URL("worker.js", import.meta.url), { type: "module" });  
  globalThis.worker.onmessage = (event) => {
    const customEvent = new CustomEvent("worker-event", {detail: event.data});
    globalThis.workerEvents.dispatchEvent(customEvent);
  }
  globalThis.worker.onerror = (event) => {
    const customEvent = new CustomEvent("worker-event", {detail: {type: "error"}});
    globalThis.workerEvents.dispatchEvent(customEvent);
    globalThis.console.error("Worker error event: ", event);
  }
}

const postMessage = function(msg, resolve) {
  globalThis.promises[msg.messageId] = resolve;
  globalThis.worker.postMessage(msg);
}

const setThemeConfig = async function(configJSON) {
  const configStr = JSON.stringify(configJSON);
  await setSetting("theme-config", configStr);
}

const getThemeConfig = function() {
  const value = getSetting("theme-config");
  if (value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      globalThis.console.error("It was not possible to convert this string into JSON. Error: ", e);
    }
  }

  return {};
}

const restoreDbFromJson = function(jsonDbStr) {
  let jsonDb;
  try {
    jsonDb = JSON.parse(jsonDbStr);
  } catch(e) {
    globalThis.console.error("It was not possible to process this JSON file. Error: ", e);
    return;
  }

  return new Promise((resolve, _) => {
    useSqlite(async (db) => {
      const keys = Object.keys(jsonDb);
      for (let j = 0; j < keys.length; j++) {
        const table = keys[j];
        globalThis.console.log("Restoring: ", table);
        await db.exec({sql: "DELETE FROM " + table});
        
        const tableItems = jsonDb[table];
        for (let i = 0; i < tableItems.length; i++) {
          const item = tableItems[i];
          const columns = Object.keys(item);
          const values = Object.values(item);
  
          await db.exec({
            sql: "INSERT INTO " + table + "(" + columns.join(", ") + 
              ") VALUES(" + ",?".repeat(columns.length).substring(1) + ")",
            bind: [...values]
          });
        }
      }
      
      resolve();
    });
  });
}

const restoreDbFromSqlite3 = function(sqlite3, arrayBuffer) {
  const p = sqlite3.wasm.allocFromTypedArray(arrayBuffer);
  const newDB = new sqlite3.oo1.DB();
  
  const rc = sqlite3.capi.sqlite3_deserialize(
    newDB.pointer, 'main', p, arrayBuffer.byteLength, arrayBuffer.byteLength,
    sqlite3.capi.SQLITE_DESERIALIZE_RESIZEABLE
  );
  
  newDB.checkRc(rc);
  sqlite3.capi.sqlite3_js_kvvfs_clear('local'); //Only used in the browser
  newDB.exec("VACUUM INTO 'file:local?vfs=kvvfs'");
  newDB.close();
}

const restoreWorkerDbFromSqlite3 = async function(arrayBuffer) {
  globalThis.worker.terminate();
  createWorker();

  let response = await new Promise((resolve, _) => {
    postMessage({
      messageId: 'restore-db',
      args: {
        arrayBuffer: arrayBuffer
      }
    }, resolve);
  });
  
  if (response.type !== "ok") globalThis.console.warn("The database could not be restored");
}

/** Media Worker **/

const createMediaWorker = function() {
  globalThis.mediaPromises = {};

  globalThis.mediaWorkerEvents = new EventTarget();
  globalThis.mediaWorkerEvents.addEventListener("media-worker-event", async (event) => {
    const data = event.detail;
    if (data.messageId) {
      globalThis.mediaPromises[data.messageId](data);
      delete globalThis.mediaPromises[data.messageId];
    } else {
      globalThis.console.log("Unknown worker event: ", event);
    }
  });

  globalThis.mediaWorker = new Worker(new URL("media-worker.js", import.meta.url), { type: "module" });  
  globalThis.mediaWorker.onmessage = (event) => {
    const customEvent = new CustomEvent("media-worker-event", {detail: event.data});
    globalThis.mediaWorkerEvents.dispatchEvent(customEvent);
  }
  globalThis.mediaWorker.onerror = (event) => {
    const customEvent = new CustomEvent("media-worker-event", {detail: {type: "error"}});
    globalThis.mediaWorkerEvents.dispatchEvent(customEvent);
    globalThis.console.error("Worker error event: ", event);
  }
}

const postMediaMessage = function(msg, resolve) {
  globalThis.mediaPromises[msg.messageId] = resolve;
  globalThis.mediaWorker.postMessage(msg);
}

const listMediaFiles = function () {
  if (inNode()) return listMediaFilesInNode();
  
  return new Promise((resolve,_) => {
    postMediaMessage({
      messageId: generateRandomId(), 
      type: 'list-files'
    }, resolve);
  });
}

const listMediaFilesWithData = function () {
  if (inNode()) return listMediaFilesInNode(); //always contains the data property
  
  return new Promise((resolve,_) => {
    postMediaMessage({
      messageId: generateRandomId(), 
      type: 'list-files-with-data'
    }, resolve);
  });
}

const listMediaFilesWithSize = function () {
  if (inNode()) return null; //only used in the dashboard
  
  return new Promise((resolve,_) => {
    postMediaMessage({
      messageId: generateRandomId(), 
      type: 'list-files-with-size'
    }, resolve);
  });
}

const saveMediaFile = function(filename, filedata) {
  if (inNode()) return saveMediaFileInNode(filename, filedata);

  return new Promise((resolve, _) => {
    postMediaMessage({
      messageId: generateRandomId(), 
      filename: filename, 
      filedata: filedata, 
      type: 'save-file'
    }, resolve);
  });
}

const deleteMediaFile = function(filename) {
  if (inNode()) return deleteMediaFileInNode(filename);

  return new Promise((resolve,_) => { 
    postMediaMessage({
      messageId: generateRandomId(), 
      filename: filename, 
      type: 'delete-file'
    }, resolve);
  });
}

const getMediaFile = function(filename) {
  if (inNode()) return getMediaFileInNode(filename);
  
  return new Promise((resolve,_) => {
    postMediaMessage({
      messageId: generateRandomId(), 
      filename: filename, 
      type: 'get-file'
    }, resolve);
  });
}

/** end **/

/** Dealing with media files in Node.js **/

const saveMediaFileInNode = async function(filename, filedata) {
  try {
    await globalThis.fs.mkdir('./media', { recursive: true });
    await globalThis.fs.writeFile('./media/' + filename, filedata);
    
    return { messageId: '', result: "ok", type: "response" };
  } catch (e) {
    return { messageId: '', result: e.message, type: "error" };
  }
};

const deleteMediaFileInNode = async function(filename) {
  try {
    await globalThis.fs.unlink('./media/' + filename);

    return { messageId: '', result: "ok", type: "response" };
  } catch (e) {
    return { messageId: '', result: e.message, type: "error" };
  }
};

const listMediaFilesInNode = async function() {
  try {
    const files = await globalThis.fs.readdir('./media');

    let result = [];
    for (const name of files) {
      const stats = await globalThis.fs.stat('./media/' + name);

      const fileSizeKB = stats.size / 1024;
      const sizeStr = (Math.round(fileSizeKB * 100) / 100).toFixed(2);
      const fileData = await globalThis.fs.readFile('./media/' + name);

      const imgUrlPrefix = globalVariables()["img_url_prefix"];
      const url = imgUrlPrefix ? imgUrlPrefix + "/" + name : "/media/" + name;

      result.push({ name: name, url: url, size: sizeStr + " KB", data: fileData });
    }

    return { messageId: '', result: result, type: "response" };
  } catch (e) {
    return { messageId: '', result: e.message, type: "error" };
  }
};

const getMediaFileInNode = async function(filename) {
  try {
    const fileData = await globalThis.fs.readFile('./media/' + filename);
    const imgUrlPrefix = globalVariables()["img_url_prefix"];
    const url = imgUrlPrefix ? imgUrlPrefix + "/" + filename : "/media/" + filename;

    return { messageId: '', result: { data: fileData.buffer, url: url }, type: "response" };
  } catch (e) {
    return { messageId: '', result: e.message, type: "error" };
  }
};

/** end **/

/** Internal modules **/

const risMap = function() {
  return RIS_MAP;
}

const libreblogLogo = function() {
  return libreblog_logo;
}

/** end **/

/** Main **/

const inNode = function() {
  return typeof process !== 'undefined' && process.versions && process.versions.node;
}

const extensionEnvironment = function() {
  if (typeof browser !== 'undefined' && typeof browser.runtime !== 'undefined') {
    return "Firefox extension";
  } else if (typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined') {
    return "Chrome extension";
  } else {
    return null;
  }
}

const importFromCDN = async function(cdn, local) {
  if (!cdn) return await import(local);
  
  try {
    return await import(cdn);
  } catch (error) {
    console.error('Failed to load module from this URL: ', cdn);
    return await import(local);
  }
}

const importOwnModules = async function() {
  const {default: logo} = await import ('./libreblog-logo.js');
  const {default: map} = await import ('./rismap.js');

  libreblog_logo = logo;
  RIS_MAP = map;
}

const importModules = async function() {
  await importOwnModules();
  
  if (inNode()) {
    const {default: sqlite3InitModule} = await import ("@sqlite.org/sqlite-wasm");
    const {default: Twig} = await import ("twig"); 
    const {marked} = await import ("marked");
    const { default: fs } = await import('fs/promises');
    globalThis.sqlite3InitModule = sqlite3InitModule;
    globalThis.Twig = Twig;
    globalThis.marked = marked;
    globalThis.fs = fs;
  } else {
    if (debug_mode === true || extensionEnvironment()) {
      const {default: sqlite3InitModule} = await import ("../dependencies/sqlite3/sqlite3.mjs");
      globalThis.sqlite3InitModule = sqlite3InitModule;
      await import ("../dependencies/twig/twig.min.js")
      globalThis.Twig = Twig;
      const {marked} = await import ("../dependencies/marked/marked.esm.js")
      globalThis.marked = marked;
    } else {
      const {default: sqlite3InitModule} = await importFromCDN("https://cdn.jsdelivr.net/npm/@sqlite.org/sqlite-wasm@" + sqlite_version + "/sqlite-wasm/jswasm/sqlite3.mjs", "../dependencies/sqlite3/sqlite3.mjs");
      globalThis.sqlite3InitModule = sqlite3InitModule;
      await importFromCDN("https://cdn.jsdelivr.net/npm/twig@" + twig_version + "/twig.min.js", "../dependencies/twig/twig.min.js")
      globalThis.Twig = Twig;
      const {marked} = await importFromCDN("https://cdn.jsdelivr.net/npm/marked@" + marked_version + "/lib/marked.esm.js", "../dependencies/marked/marked.esm.js")
      globalThis.marked = marked;
    }
  }
}

export default {
  createTables: createTables,
  setSetting: setSetting,
  getSetting: getSetting,
  updateSettings: updateSettings,
  getAllResultRows: getAllResultRows,
  dotHtmlForLinks: dotHtmlForLinks,
  generateSearchableText: generateSearchableText,
  getLibreblogSearch: getLibreblogSearch,
  createWebsiteFolder: createWebsiteFolder,
  globalVariables: globalVariables,
  generateRandomId: generateRandomId,
  useSqlite: useSqlite,
  startDb: startDb,
  getThemeConfig: getThemeConfig,
  setThemeConfig: setThemeConfig,
  restoreDbFromJson: restoreDbFromJson,
  importModules: importModules,
  updateCachedSelects: updateCachedSelects,
  createMediaWorker: createMediaWorker,
  postMediaMessage: postMediaMessage,
  listMediaFiles: listMediaFiles,
  listMediaFilesWithSize: listMediaFilesWithSize,
  saveMediaFile: saveMediaFile,
  deleteMediaFile: deleteMediaFile,
  getMediaFile: getMediaFile,
  risMap: risMap,
  libreblogLogo: libreblogLogo
}
