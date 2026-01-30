/**
 * Libreblog.org
 * Copyright (c) 2025 Thiago Gomes Quinalia
 * This code is licensed under the MIT License. 
 * License text available at https://opensource.org/license/MIT
 */
 
'use strict';
(function(){
  
  /* Constants and default values */

  const thumbnail_column = "Thumbnail";
  const supported_formats = ["JPG", "JPEG", "PNG", "APNG", "GIF", "SVG", "WEBP", "AVIF", "ICO"]; 
  const supported_version_formats = ["JPG", "JPEG", "PNG", "WEBP"];
  const default_footer_social_snippet = `<a href="PASTE YOUR NEWSLETTER URL HERE" id="subscribe-button" target="_blank"> Subscribe </a>

<!-- Simply enter the URLs of your social media pages in the segments marked in capital letters. You can delete any unused platform sections, which are indicated by the comments: "[Platform]:start" and "[Platform]:end". For SVGs of other social media platforms, visit svgrepo.com . -->

<div id="footer-social-icons">
<div id="first-icons-section">

<!-- Facebook:start -->
<a href="PASTE YOUR FACEBOOK URL HERE" target="_blank" title="Follow us on Facebook">
<svg version="1.1" id="layer_facebook" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 54 54" xml:space="preserve">
<g>
	<rect class="social-icon-rect" x="0" y="0" width="54" height="54"/>
	<path d="M40,4.8c2.2,0,4.1,0.8,5.7,2.4c1.6,1.6,2.4,3.5,2.4,5.7v26.8c0,2.2-0.8,4.1-2.4,5.7c-1.6,1.6-3.5,2.4-5.7,2.4h-5.2V31.1
		h5.6l0.8-6.5h-6.4v-4.1c0-1,0.2-1.8,0.7-2.3c0.4-0.5,1.3-0.8,2.6-0.8l3.4,0v-5.8c-1.2-0.2-2.8-0.3-5-0.3c-2.5,0-4.6,0.7-6.1,2.2
		c-1.5,1.5-2.3,3.6-2.3,6.3v4.8h-5.6v6.5h5.6v16.6H13.3c-2.2,0-4.1-0.8-5.7-2.4c-1.6-1.6-2.4-3.5-2.4-5.7V12.9
		c0-2.2,0.8-4.1,2.4-5.7c1.6-1.6,3.5-2.4,5.7-2.4H40z"/>
</g>
</svg>
</a>
<!-- Facebook:end -->

<!-- X/Twitter:start -->
<a href="PASTE YOUR X/TWITTER URL HERE" target="_blank" title="Follow us on X/Twitter">
<svg version="1.1" id="layer_x" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect class="social-icon-rect" x="0" y="0" width="512" height="512"/>
  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
</svg>
</a>
<!-- X/Twitter:end -->

<!-- Instagram:start -->
<a href="PASTE YOUR INSTAGRAM URL HERE" target="_blank" title="Follow us on Instagram">
<svg version="1.1" id="layer_instagram" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" xml:space="preserve">
<g>
	<rect class="social-icon-rect" x="0" y="0" width="20" height="20"/>
	<path d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7zm1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10 7.7 5.9 10 5.9s4.1 1.8 4.1 4.1zm1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .5 1 1zM10 3.4c-1.2 0-3.7-.1-4.7.3-.7.3-1.3.9-1.5 1.6-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5 1 .4 3.6.3 4.7.3s3.7.1 4.7-.3c.7-.3 1.2-.8 1.5-1.5.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5-1-.5-3.5-.4-4.7-.4zm8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3-.8-.9-1.3-2.1-1.3-3.4V10 6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3.8.9 1.3 2.1 1.3 3.4V10z"/>
</g>
</svg>
</a>
<!-- Instagram:end -->

<!-- YouTube:start -->
<a href="PASTE YOUR YOUTUBE URL HERE" target="_blank" title="Subscribe to our channel on YouTube">
<svg version="1.1" id="layer_youtube" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
  <rect class="social-icon-rect" x="0" y="0" width="600" height="600"/>
  <path transform="translate(12, 44)" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
</svg>
</a>
<!-- YouTube:end -->
</div>

<!-- "See more" button -->
<details id="more-icons-section">
<summary><span id="more-icons-btn">+</span></summary>
<div id="more-icons-div">

<!-- Keep below the icons that will be hidden and only displayed if the user clicks on the "See more" button -->

<!-- LinkedIn:start -->
<a href="PASTE YOUR LINKEDIN URL HERE" target="_blank" title="Connect with us on LinkedIn">
<svg version="1.1" id="layer_linkedin" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 54 54" xml:space="preserve">
<g>
	<rect class="social-icon-rect" x="0" y="0" width="54" height="54"/>
	<path d="M48.1,12.9v26.8c0,2.2-0.8,4.1-2.4,5.7c-1.6,1.6-3.5,2.4-5.7,2.4H13.3c-2.2,0-4.1-0.8-5.7-2.4c-1.6-1.6-2.4-3.5-2.4-5.7
		V12.9c0-2.2,0.8-4.1,2.4-5.7c1.6-1.6,3.5-2.4,5.7-2.4H40c2.2,0,4.1,0.8,5.7,2.4C47.3,8.8,48.1,10.7,48.1,12.9z M18.7,15.4
		c0-1-0.4-1.8-1-2.4C17,12.3,16.2,12,15.1,12c-1.1,0-2,0.3-2.6,0.9c-0.7,0.6-1,1.4-1,2.4c0,0.9,0.3,1.7,1,2.4c0.7,0.6,1.5,1,2.6,1h0
		c1.1,0,2-0.3,2.7-1C18.4,17.1,18.7,16.3,18.7,15.4z M11.8,40.7h6.4V21.3h-6.4V40.7z M35,40.7h6.4V29.6c0-2.9-0.7-5-2-6.5
		c-1.4-1.5-3.2-2.2-5.4-2.2c-2.5,0-4.5,1.1-5.8,3.3h0.1v-2.8h-6.4c0.1,1.2,0.1,7.7,0,19.4h6.4V29.9c0-0.7,0.1-1.2,0.2-1.6
		c0.3-0.7,0.7-1.2,1.3-1.7c0.6-0.5,1.2-0.7,2.1-0.7c2.2,0,3.2,1.5,3.2,4.4V40.7z"/>
</g>
</svg>
</a>
<!-- LinkedIn:end -->

<!-- Tiktok:start -->
<a href="PASTE YOUR TIKTOK URL HERE" target="_blank" title="Follow us on Tiktok">
<svg version="1.1" id="layer_tiktok" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <rect class="social-icon-rect" x="0" y="0" width="24" height="24"/>
  <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Zm-3.281,8.725h0c-.109.011-.219.016-.328.017A3.571,3.571,0,0,1,14.4,9.129v5.493a4.061,4.061,0,1,1-4.06-4.06c.085,0,.167.008.251.013v2a2.067,2.067,0,1,0-.251,4.119A2.123,2.123,0,0,0,12.5,14.649l.02-9.331h1.914A3.564,3.564,0,0,0,17.719,8.5Z"/>
</svg>
</a>
<!-- Tiktok:end -->

<!-- WhatsApp:start -->
<a href="PASTE YOUR WHATSAPP URL HERE" target="_blank" title="Join us on WhatsApp">
<svg version="1.1" id="layer_whatsapp" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">
  <rect class="social-icon-rect" x="0" y="0" width="54" height="54"/>
  <path d="M18.9,6.3c2.6-1.1,5.3-1.7,8.2-1.7c2.8,0,5.6,0.6,8.2,1.7c2.6,1.1,4.8,2.6,6.7,4.5c1.9,1.9,3.4,4.1,4.5,6.7
		c1.1,2.6,1.7,5.3,1.7,8.2c0,2.8-0.6,5.6-1.7,8.2s-2.6,4.8-4.5,6.7c-1.9,1.9-4.1,3.4-6.7,4.5s-5.3,1.7-8.2,1.7
		c-3.6,0-7-0.9-10.2-2.6L5.2,47.9L9,36.6c-2-3.3-3-6.9-3-10.9c0-2.8,0.6-5.6,1.7-8.2c1.1-2.6,2.6-4.8,4.5-6.7
		C14,8.9,16.3,7.5,18.9,6.3z M27,43.2c2.4,0,4.6-0.5,6.8-1.4c2.2-0.9,4-2.2,5.6-3.7s2.8-3.4,3.7-5.6s1.4-4.4,1.4-6.8
		s-0.5-4.6-1.4-6.8c-0.9-2.2-2.2-4-3.7-5.6s-3.4-2.8-5.6-3.7c-2.2-0.9-4.4-1.4-6.8-1.4c-2.4,0-4.6,0.5-6.8,1.4
		c-2.2,0.9-4,2.2-5.6,3.7s-2.8,3.4-3.7,5.6c-0.9,2.2-1.4,4.4-1.4,6.8c0,3.8,1.1,7.2,3.3,10.3l-2.2,6.5l6.8-2.1
		C20.3,42.3,23.6,43.2,27,43.2z M31.2,29.8c0.7-0.9,1.2-1.4,1.5-1.4c0.2,0,1.1,0.4,2.7,1.2c1.6,0.8,2.4,1.3,2.5,1.5
		c0,0.1,0.1,0.2,0.1,0.4c0,0.6-0.2,1.3-0.5,2.1c-0.3,0.7-1,1.3-2,1.8c-1,0.5-2,0.7-2.8,0.7c-1.1,0-2.8-0.6-5.3-1.7
		c-1.8-0.8-3.4-1.9-4.7-3.3c-1.3-1.4-2.7-3.1-4.1-5.2c-1.3-2-2-3.8-2-5.4v-0.2c0.1-1.7,0.7-3.2,2.1-4.4c0.4-0.4,0.9-0.6,1.5-0.6
		c0.1,0,0.3,0,0.5,0c0.2,0,0.4,0,0.5,0c0.4,0,0.6,0.1,0.7,0.2c0.1,0.1,0.3,0.4,0.4,0.8c0.1,0.4,0.5,1.2,0.9,2.5
		c0.5,1.3,0.7,2,0.7,2.1c0,0.4-0.3,0.9-1,1.6c-0.6,0.7-1,1.1-1,1.3c0,0.1,0,0.3,0.1,0.4c0.6,1.4,1.6,2.6,2.8,3.8
		c1,1,2.4,1.9,4.2,2.8c0.2,0.1,0.4,0.2,0.6,0.2C30,31.1,30.5,30.7,31.2,29.8z"/>
</svg>
</a>
<!-- WhatsApp:end -->

<!-- Threads:start -->
<a href="PASTE YOUR THREADS URL HERE" target="_blank" title="Follow us on Threads">
<svg version="1.1" id="layer_threads" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960">
  <rect class="social-icon-rect" x="0" y="0" width="960" height="960"/>
  <path d="M404.63 392.13c-11.92-7.93-51.53-35.49-51.53-35.49 33.4-47.88 77.46-66.52 138.36-66.52 43.07 0 79.64 14.52 105.75 42 26.12 27.49 41.02 66.8 44.41 117.07 14.48 6.07 27.85 13.22 39.99 21.4 48.96 33 75.92 82.34 75.92 138.91 0 120.23-98.34 224.67-276.35 224.67-152.84 0-311.63-89.11-311.63-354.45 0-263.83 153.81-353.92 311.2-353.92 72.68 0 243.16 10.76 307.27 222.94l-60.12 15.63C678.33 213.2 574.4 189.14 479.11 189.14c-157.52 0-246.62 96.13-246.62 300.65 0 183.38 99.59 280.8 248.71 280.8 122.68 0 214.15-63.9 214.15-157.44 0-63.66-53.37-94.14-56.1-94.14-10.42 54.62-38.36 146.5-161.01 146.5-71.46 0-133.07-49.47-133.07-114.29 0-92.56 87.61-126.06 156.8-126.06 25.91 0 57.18 1.75 73.46 5.07 0-28.21-23.81-76.49-83.96-76.49-55.15-.01-69.14 17.92-86.84 38.39zm105.8 96.25c-90.13 0-101.79 38.51-101.79 62.7 0 38.86 46.07 51.74 70.65 51.74 45.06 0 91.35-12.52 98.63-107.31-22.85-5.14-39.88-7.13-67.49-7.13z"/>
</svg>
</a>
<!-- Threads:end -->

<!-- Telegram:start -->
<a href="PASTE YOUR TELEGRAM URL HERE" target="_blank" title="Join us on Telegram">
<svg version="1.1" id="layer_telegram" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
  <rect class="social-icon-rect" x="0" y="0" width="58" height="58"/>
  <path transform="translate(2, 2)" 
  d="M49.7,16.5c1.3,3.1,2,6.3,2,9.7s-0.7,6.6-2,9.7c-1.3,3.1-3.1,5.7-5.3,8c-2.2,2.2-4.9,4-8,5.3c-3.1,1.3-6.3,2-9.7,2
		c-3.4,0-6.6-0.7-9.7-2s-5.7-3.1-8-5.3c-2.2-2.2-4-4.9-5.3-8c-1.3-3.1-2-6.3-2-9.7s0.7-6.6,2-9.7c1.3-3.1,3.1-5.7,5.3-8
		c2.2-2.2,4.9-4,8-5.3s6.3-2,9.7-2c3.4,0,6.6,0.7,9.7,2c3.1,1.3,5.7,3.1,8,5.3C46.6,10.8,48.3,13.5,49.7,16.5z M34.8,37.7l4.1-19.3
		c0.2-0.8,0.1-1.4-0.3-1.8c-0.4-0.4-0.8-0.4-1.4-0.2l-24.1,9.3c-0.5,0.2-0.9,0.4-1.1,0.7c-0.2,0.3-0.2,0.5-0.1,0.7
		c0.1,0.2,0.4,0.4,0.9,0.5l6.2,1.9l14.3-9c0.4-0.3,0.7-0.3,0.9-0.2c0.1,0.1,0.1,0.2-0.1,0.4L22.5,31.3L22,37.7
		c0.4,0,0.8-0.2,1.3-0.6l3-2.9l6.2,4.6C33.8,39.5,34.5,39.1,34.8,37.7z"/>
</svg>
</a>
<!-- Telegram:end -->

<!-- Bluesky:start -->
<a href="PASTE YOUR BLUESKY URL HERE" target="_blank" title="Follow us on Bluesky">
<svg version="1.1" id="layer_bluesky" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect class="social-icon-rect" x="0" y="0" width="512" height="512"/>
  <path transform="translate(32, 0)" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 247.4c14.5-30 54-85.8 90.7-113.3c26.5-19.9 69.3-35.2 69.3 13.7c0 9.8-5.6 82.1-8.9 93.8c-11.4 40.8-53 51.2-90 44.9c64.7 11 81.2 47.5 45.6 84c-67.5 69.3-97-17.4-104.6-39.6c0 0 0 0 0 0l-.3-.9c-.9-2.6-1.4-4.1-1.8-4.1s-.9 1.5-1.8 4.1c-.1 .3-.2 .6-.3 .9c0 0 0 0 0 0c-7.6 22.2-37.1 108.8-104.6 39.6c-35.5-36.5-19.1-73 45.6-84c-37 6.3-78.6-4.1-90-44.9c-3.3-11.7-8.9-84-8.9-93.8c0-48.9 42.9-33.5 69.3-13.7c36.7 27.5 76.2 83.4 90.7 113.3z"/>
</svg>
</a>
<!-- Bluesky:end -->

<!-- Mastodon:start -->
<a href="PASTE YOUR MASTODON URL HERE" target="_blank" title="Follow us on Mastodon">
<svg version="1.1" id="layer_mastodon" class="social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <rect class="social-icon-rect" x="0" y="0" width="24" height="24"/>
  <path d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.546-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.409 2.405 1.228l.518.869.519-.869c.533-.819 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z"/>
</svg>
</a>
<!-- Mastodon:end -->

<!-- Github:start -->
<a href="PASTE YOUR GITHUB URL HERE" target="_blank" title="Star our repository on Github">
<svg id="layer_github" class="social-icon-svg" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect class="social-icon-rect" x="0" y="0" width="24" height="24"/>
    <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"/>
</svg>
</a>
<!-- Github:end -->

</div>
</details>
</div>`;

  const default_main_js = 
`/** Libreblog's core features **/

const searchInput = document.getElementById("search-input");
const searchBoxWrapper = document.getElementById("search-box-wrapper");
const shareButton = document.getElementById("share-button");
const itemDates = document.getElementsByClassName("item-date");

const formatDate = function(dateStr, options) {
  const dateObj = new Date(dateStr);
  const lang = navigator && navigator.language ? navigator.language : "en";
  let formattedDate = new Intl.DateTimeFormat(lang, options).format(dateObj);
  if (lang.startsWith("pt")) {
    formattedDate = formattedDate.replaceAll("de ", "");
  }

  return formattedDate;
}

if (itemDates && itemDates.length > 0) {
  for (let i = 0; i < itemDates.length; i++) {
    const itemDate = itemDates[i];
    if (itemDate.dateTime.split("T")[0] === new Date().toISOString().split("T")[0]) {
      itemDate.innerText = formatDate(itemDate.dateTime, { hour: 'numeric', minute: 'numeric' }) + " " + itemDate.attributes["timezone-abbreviation"].value;
    } else {
      itemDate.innerText = formatDate(itemDate.dateTime, { year: 'numeric', month: 'short', day: 'numeric' });
    }
  }
}

if (shareButton) {
  const url = shareButton.attributes["data-url"].value;
  const title = shareButton.attributes["data-title"].value;
  const data = {url: url, title: title};
  
  if (navigator.canShare && navigator.canShare(data)) {
    shareButton.addEventListener("click", async (event) => {
      try {
        await navigator.share(data);
      } catch (e) {
        console.log(e);
      }
    });
  } else {
    shareButton.style.display = "none";
  }
}

if (searchInput && searchBoxWrapper) searchInput.addEventListener("input", (event) => {
  let value = event.target.value;

  if (value) {
    value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    let innerHTML = "<section id='search-results-box'>";
    
    const filtered = libreblogSearch.filter((item) => {
      //Simple search function (exact match) 
      if (item.searchable && item.searchable.includes(value) && item['in_sitemap']) return true;
      return false;
    });

    if (filtered.length === 0) {
      innerHTML = "";
    } else {
      filtered.forEach((item) => {
        const p = item.published ? item.published : item.created;
        const d = new Date(p.replace(" ", "T"));
        const lang = navigator && navigator.language ? navigator.language : "en";
        const published = new Intl.DateTimeFormat(lang, {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}).format(d);
        
        innerHTML += "<article class='search-card'>" +
          "<a class='search-link' href='" + item.uri + "'>" +
          "<div class='search-title'>" + item.title + "</div>" +
          "<div class='search-published'>" + published + "</div>" +
          "<div class='search-subtitle'>" + item.subtitle + "</div>" +
          "</a>" +
          "</article>";
      });
      innerHTML += "</section>";
    }

    searchBoxWrapper.innerHTML = innerHTML;
  } else {
    searchBoxWrapper.innerHTML = "";
  }
});

/** Insert custom code below **/
`;

const default_htaccess = `DirectoryIndex index.html
Options -Indexes
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-XSS-Protection "1; mode=block"
  Header set X-Frame-Options "DENY"
  Header set X-Permitted-Cross-Domain-Policies "none"
  Header set Permissions-Policy "geolocation=(), camera=(), microphone=()"
</IfModule>
`;
  
  /* Funtions */
  
  const generateJsonDb = function() {
    globalThis.lb.useSqlite(async (db) => {
      const jsonDb = {
        sections: await globalThis.lb.getAllResultRows("sections", db, null),
        series: await globalThis.lb.getAllResultRows("series", db, null),
        articles: await globalThis.lb.getAllResultRows("articles", db, null),
        relations: await globalThis.lb.getAllResultRows("relations", db, null),
        authors: await globalThis.lb.getAllResultRows("authors", db, null),
        navbar_items: await globalThis.lb.getAllResultRows("navbar_items", db, null),
        media: await globalThis.lb.getAllResultRows("media", db, null),
        sources: await globalThis.lb.getAllResultRows("sources", db, null),
        templates: await globalThis.lb.getAllResultRows("templates", db, null),
        settings: await globalThis.lb.getAllResultRows("settings", db, null)
      };

      const jsonDbStr = JSON.stringify(jsonDb, null, 2);
      const blob = new Blob([jsonDbStr], {type: "text/plain;charset=utf-8"});
      saveFile(blob, "mydb.json");
    });
  }

  const insertThemeFromObject = async function(db, theme, themeUri) {
    let templates = structuredClone(theme.templates);
    templates.push({
      template_uri: "image",
      template_set: "",
      template_type: "",
      content_type: "cdata",
      contents: theme["image"] ? theme["image"] : ""
    });

    templates.push({
      template_uri: "config",
      template_set: "",
      template_type: "",
      content_type: "json",
      contents: JSON.stringify(theme["config"])
    });

    for (let i = 0; i < templates.length; i++) {
      const template = templates[i];
      
      await db.exec({
        sql: "INSERT INTO templates ( " +
          "theme_uri, " +
          "template_uri, " +
          "template_set, " +
          "template_type, " +
          "content_type, " +
          "contents, " +
          "created, " +
          "updated " +
          ") VALUES ('" + themeUri + "', ?, ?, ?, ?, ?, " +
          "STRFTIME('%Y-%m-%d %H:%M', DATETIME('now','localtime')), " +
          "STRFTIME('%Y-%m-%d %H:%M', DATETIME('now','localtime')))",
        bind: [
          template['template_uri'], 
          template['template_set'], 
          template['template_type'], 
          template['content_type'], 
          template['contents']
        ] 
      });
    }
  };

  const createThemeObjectFromDb = async function(db, themeUri) {
    const theme = {theme_uri: themeUri, config: "{}", templates: [], image: ""};
    const resultRows = await db.exec({
      sql: "SELECT * FROM templates WHERE theme_uri = '" + themeUri + "'",
      rowMode: 'object'
    });

    for (let i = 0; i < resultRows.length; i++) {
      if (resultRows[i]["template_uri"] === "image") {
        theme["image"] = resultRows[i]["contents"];
      } else if (resultRows[i]["template_uri"] === "config") {
        try {
          theme["config"] = JSON.parse(resultRows[i]["contents"]);
        } catch (e) {
          globalThis.console.error("It was not possible to load this configuration. Error: ", e);
        }
      } else {
        theme["templates"].push({
          template_uri: resultRows[i]["template_uri"],
          template_set: resultRows[i]["template_set"],
          template_type: resultRows[i]["template_type"],
          content_type: resultRows[i]["content_type"],
          contents: resultRows[i]["contents"]
        });
      }
    }

    return theme;
  }

  const addDisabledOption = function(selectFilter) {
    let option = globalThis.document.createElement("option");
    option.innerText = "Filter by...";
    option.value = "none";
    selectFilter.appendChild(option);
  }

  const generateHeaderStr = function(id, args) {
    let header = "<tr style='display:run-in' class='checkbox-td'><th><input id='th-checkbox' type='checkbox'></th>";

    for (let i = 0; i < args.length; i++) {
      const column = args[i][1];
      header += "<th class='" + getTdClass(id, column)[0] + "'><div>" + column + (column !== thumbnail_column ? " <span><img class='data-table-icon' src='images/chevron-down.svg' /></span>" : "") + "</div></th>";
    }    
    header += "</tr>";

    return header;
  }
  
  const generateHeader = function(id, args) {
    let selectFilter = globalThis.document.getElementById('select-filter');
    while (selectFilter.firstChild) {
      selectFilter.removeChild(selectFilter.lastChild);
    }
    addDisabledOption(selectFilter);
    
    const header = generateHeaderStr(id, args);
    let columns = [];
    for (let i = 0; i < args.length; i++) {
      columns.push(args[i][0]);

      if (args[i][1] !== thumbnail_column) {
        let option = globalThis.document.createElement("option");
        option.innerText = args[i][1];
        option.value = args[i][1];
        selectFilter.appendChild(option);
      }
    }

    return [header, columns];
  }

  const titleIfBig = function(text, size) {
    if (text && text.length > size) return text;

    return "";
  }

  const mobileScreen = function() {
    return window.innerWidth <= 1024;
  }
  
  const smallScreen = function() {
    return window.innerWidth < 1360;
  }

  const bigScreen = function() {
    return window.innerWidth > 1530;
  }

  const veryBigScreen = function() {
    return window.innerWidth > 1900;
  }

  const bigTd = function(tableId, columnName) {
    let big = false;

    switch (tableId) {
      case "sources-table":
        if (["Title"].includes(columnName)) {
          big = true;
        } else if (["Author"].includes(columnName) && bigScreen()) {
          big = true;
        }
        break;
      case "authors-table":
        if (["Email", "Name"].includes(columnName) && bigScreen()) big = true;
        break;
      case "media-table":
        if (["Alt Text"].includes(columnName) && bigScreen()) big = true;
        break;
      case "navbar-table":
        if (["Label", "ID or URL"].includes(columnName) && bigScreen()) big = true;
        break;
      case "series-table":
        if (["Title"].includes(columnName) && bigScreen()) big = true;
        break;
      case "sections-table":
        if (["Title"].includes(columnName) && bigScreen()) big = true;
        break;
      case "articles-table":
        if (["Title"].includes(columnName) && veryBigScreen()) big = true;
        break;
      default:
    }
    
    return big;
  }

  const smallTd = function(tableId, columnName) {
    let small = false;

    switch (tableId) {
      case "modal-references-table":
        if (["Year", "Type"].includes(columnName)) small = true;
        break;
      case "articles-table":
        if (["Type", "Status"].includes(columnName)) {
          small = true;
        } else if (["Section", "Series", "Author(s)"].includes(columnName) && !bigScreen()) {
          small = true;
        }
        break;
      case "series-table":
        if (["Status"].includes(columnName)) small = true;
        break;
      case "relations-table":
        if (["Type"].includes(columnName)) small = true;
        break;
      case "sources-table":
        if (["Type", "Year"].includes(columnName)) small = true;
        break;
      case "media-table":
        if (["File Ext."].includes(columnName)) small = true;
        break;
      default:
    }
    
    return small;
  }

  const modestTd = function(tableId, columnName) {
    let modest = false;
    
    switch (tableId) {
      case "articles-table":
        if (["Title"].includes(columnName) && !bigScreen()) {
          modest = true;
        } else if (["Section", "Series", "Author(s)"].includes(columnName) && !veryBigScreen()) {
          modest = true;
        }
        break;
      case "series-table":
        if (["Section"].includes(columnName) && !veryBigScreen()) modest = true;
        break;
      case "relations-table":
        if (["Article 1", "Article 2"].includes(columnName) && !veryBigScreen()) modest = true;
        break;
      case "media-table":
        if (["Size (bytes)"].includes(columnName)) modest = true;
        break;        
      default:
        if (["ID"].includes(columnName) && !veryBigScreen()) modest = true;
    }

    return modest;
  }

  const escapeHTML = function(text) {
    if (typeof text !== "string") return text;
    
    return text.replace(
      /[&<>'"]/g,
      tag =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;'
        }[tag] || tag)
    );
  }

  const makeALink = function(table, id, uri, text) {
    if(!["navbar_items", "sources"].includes(table)) {
      return "<a href='/" + getEditPageFromTable(table) + ".html?uri=" +
        uri + "'><div>" + escapeHTML(text) + "</div></a>";
    } else if (id === "sources-table") {
      return "<a source-uri='" + uri + "' href='#source-modal'><div source-uri='" + uri + "'>" + escapeHTML(text) + "</div></a>"
    }

    return "<div>" + escapeHTML(text) + "</div>";
  }

  const getTdClass = function(id, column) {
    let tdClass = "";
    const lines = 2;
    let titleSize = 16 * lines;
    if (mobileScreen() && id === 'modal-references-table') {
      tdClass = "mobile-td-in-modal";
    } else if (mobileScreen()) {
      tdClass = "mobile-td";
    } else if (smallTd(id, column)) {
      tdClass = "small-td";
      titleSize = 10 * lines;
    } else if (modestTd(id, column)) {
      tdClass = "modest-td";
      titleSize = 13 * lines;
    } else if (bigTd(id, column)) {
      tdClass = "big-td";
      titleSize = 33 * lines;
    } else {
      tdClass = "normal-td";
    }

    if (["Title", "Author", "Label", "Alt Text", "Name", "Location"].includes(column)) {
      tdClass += " hyphen-td";
    }

    return [tdClass, titleSize];
  }

  const generateTrStr = function(id, table, row, uri, columns, counter, args){
    let tr = "<tr id='tr-" + counter + "' style='display:run-in'><td class='checkbox-td'><input type='checkbox' id='checkbox-"
      + counter + "' value='" + uri + "'></td>";

    for (let i = 0; i < args.length; i++) {
      const [tdClass, titleSize] = getTdClass(id, args[i][1]);

      if (["media-table"].includes(id) && args[i][1] === thumbnail_column) {
        tr += "<td id='thumbnail-" + i + "' uri='" + uri + "' class='thumbnail-td' name='" + args[i][1] + "'><div>&nbsp;</div></td>";
      } else {
        tr += "<td class='" + tdClass + "' name='" + args[i][1] + "' title='" + titleIfBig(row[columns[i]], titleSize) +
          "'>" + makeALink(table, id, uri, row[columns[i]]) + "</td>";
      }
    }
    tr += "</tr>";

    return tr;
  }

  const setCheckboxHandler = function(){
    const thCheckbox = globalThis.document.getElementById("th-checkbox");
    if (thCheckbox) {
      thCheckbox.addEventListener("change", thCheckboxHandler);
    }
  }

  const addOrderByIcons = function(dataTable, db, id, table, ...args) {
    let ths = dataTable.getElementsByTagName("th");
    ths = [].slice.call(ths).slice(1);

    for (let i = 0; i < ths.length; i++) {
      if (args[i][1] === thumbnail_column) continue;
      
      const div = ths[i].getElementsByTagName("div")[0];
      div.innerHTML = args[i][1] + " <span id='th-" + i + "'><img class='data-table-icon' src='images/chevron-down.svg' /></span>";
      
      const span = globalThis.document.getElementById("th-" + i);
      span.addEventListener("click", async (event) => {
        let newSpan;
        const src = event.target.attributes["src"];
        if (src && src.value && src.value.includes('chevron-down.svg')) { 
          await fillDOM(db, id, table, args[i][0] + " ASC", ...args);
          newSpan = globalThis.document.getElementById("th-" + i);
          newSpan.innerHTML = "<img class='data-table-icon' src='images/chevron-up.svg' />";
        } else {
          await fillDOM(db, id, table, args[i][0] + " DESC", ...args);
          newSpan = globalThis.document.getElementById("th-" + i);
          newSpan.innerHTML = "<img class='data-table-icon' src='images/chevron-down.svg' />";
        }
        if (newSpan) newSpan.style.cssText = "filter: brightness(0) saturate(100%) invert(7%) sepia(95%) saturate(6909%) hue-rotate(247deg) brightness(128%) contrast(146%);";

        if (["media-table"].includes(id)) addThumbnails();
      });
    }
  }

  const preFormatThead = function() {
    let page = thisPage();
    let header;
    let body;
    let id;
    
    switch (page) {
      case "index":
        break;
      case "articles":
        id = "articles-table";
        if (smallScreen()) {
          header = generateHeaderStr(id, [["", "ID"], ["", "Type"], ["", "Status"], ["", "Title"], ["", "Author(s)"], ["", "Section"], ["", "Series"], ["", "Created"]]);
          body = "<td><div>&nbsp;</div></td>".repeat(9);
        } else {
          header = generateHeaderStr(id, [["", "ID"], ["", "Type"], ["", "Status"], ["", "Title"], ["", "Author(s)"], ["", "Section"], ["", "Series"], ["", "Created"], ["", "Updated"]]);
        }
        break;
      case "series":
        id = "series-table";
        header = generateHeaderStr(id, [["", "ID"], ["", "Status"], ["", "Section"], ["", "Title"], ["", "Author(s)"], ["", "Created"], ["", "Updated"]]);
        break;
      case "sections":
        id = "sections-table";
        header = generateHeaderStr(id, [["", "ID"], ["", "Title"], ["", "Author(s)"], ["", "Created"], ["", "Updated"]]);
        break;
      case "relations":
        id = "relations-table";
        header = generateHeaderStr(id, [["", "ID"], ["", "Article 1"], ["", "Type"], ["", "Article 2"], ["", "Place"], ["", "Author(s)"], ["", "Created"], ["", "Updated"]]);
        break;
      case "sources":
        id = "sources-table";
        header = generateHeaderStr(id, [["", "ID"], ["", "Type"], ["", "Author"], ["", "Year"], ["", "Title"]]);
        break;
      case "article-edit":
        id = "modal-references-table";
        header = generateHeaderStr(id, [["", "ID"], ["", "Author"], ["", "Title"], ["", "Type"], ["", "Year"]]);
        break;
      case "navbar":
        id = "navbar-table";
        header = generateHeaderStr(id, [["", "ID"], ["", "Label"], ["", "Location"], ["", "Type of Ref."], ["", "ID or URL"], ["", "Created"]]);
        break;
      case "media":
        id = "media-table";
        header = generateHeaderStr(id, [["", "ID"], ["", "File Ext."], ["", "Alt Text"], ["", "Size (bytes)"], ["", "Created"], ["", "Updated"], ["", thumbnail_column]]);
        break;
      case "authors":
        id = "authors-table";
        header = generateHeaderStr(id, [["", "ID"], ["", "Name"], ["", "Email"], ["", "Location"], ["", "Created"], ["", "Updated"]]);
        break;
      default:
    }

    if (id) {
      const dataTable = globalThis.document.getElementById(id);
      const thead = dataTable.getElementsByTagName('thead')[0];
      thead.innerHTML = header;

      if (body) {
        const tbody = dataTable.getElementsByTagName('tbody')[0];
        tbody.innerHTML = body;
        const tfoot = dataTable.getElementsByTagName('tfoot')[0];
        tfoot.innerHTML = tfoot.innerHTML.replace("colspan=\"5\" id=\"tfoot-right-td\"", "colspan=\"4\" id=\"tfoot-right-td\"");
      }
    }
  }

  const fillDOM = async function(db, id, table, orderBy, ...args){
    let [header, columns] = generateHeader(id, args);
    const dataTable = globalThis.document.getElementById(id);
    const thead = dataTable.getElementsByTagName('thead')[0];
    const tbody = dataTable.getElementsByTagName('tbody')[0];
    thead.innerHTML = header;

    const uriField = table === 'sources' ? 'ris_id' : 'uri';
    const completeCols = columns.slice(0);
    if (!completeCols.includes(uriField)) completeCols.push(uriField);
    
    let resultRows = await db.exec({
      sql: "SELECT " + completeCols.join(',') + " FROM " + table + (orderBy ? " ORDER BY " + orderBy : ""),
      rowMode: 'object'
    });

    tbody.innerHTML = "";
    for (let i = 0, counter = 0; i < resultRows.length; i++) {
      let row = resultRows[i];
      tbody.innerHTML += generateTrStr(id, table, row, row[uriField], columns, counter++, args);
    }

    setCheckboxHandler();
    addOrderByIcons(thead, db, id, table, ...args);

    if (tbody.rows.length === 0) {
      addEmptyTr();
    } 

    setEntriesPerPage();
  }

  const fetchData = function(db){
    let page = thisPage();

    if (mobileScreen()) {
      switch (page) {
        case "index":
          break;
        case "articles":
          fillDOM(db, "articles-table", "articles", "created ASC", ["uri", "ID"], ["title", "Title"]);
          break;
        case "series":
          fillDOM(db, "series-table", "series", "created ASC", ["uri", "ID"], ["title", "Title"]);
          break;
        case "sections":
          fillDOM(db, "sections-table", "sections", "created ASC", ["uri", "ID"], ["title", "Title"]);
          break;
        case "relations":
          fillDOM(db, "relations-table", "relations", "created ASC", ["article1", "Article 1"], ["article2", "Article 2"]);
          break;
        case "sources":
          fillDOM(db, "sources-table", "sources", "", ["IIF(ris_a1 = '', ris_au, ris_a1)", "Author"], ["IIF(ris_t1 = '', IIF(ris_ti = '', ris_st, ris_ti), ris_t1)", "Title"]);
          break;
        case "article-edit":
          fillDOM(db, "modal-references-table", "sources", "", ["IIF(ris_a1 = '', ris_au, ris_a1)", "Author"], ["IIF(ris_t1 = '', IIF(ris_ti = '', ris_st, ris_ti), ris_t1)", "Title"]);
          break;
        case "navbar":
          fillDOM(db, "navbar-table", "navbar_items", "created ASC", ["uri", "ID"], ["label", "Label"]);
          break;
        case "media":
          fillDOM(db, "media-table", "media", "created ASC", ["uri", "ID"], ["''", thumbnail_column])
            .then(addThumbnails);
          break;
        case "authors":
          fillDOM(db, "authors-table", "authors", "created ASC", ["uri", "ID"], ["name", "Name"]);
          break;
        default:
      }
    } else {
      switch (page) {
        case "index":
          break;
        case "articles":
          if (smallScreen()) {
            fillDOM(db, "articles-table", "articles", "created ASC", ["uri", "ID"], ["type", "Type"], 
                    ["status", "Status"], ["title", "Title"], ["authors_ids", "Author(s)"], ["section_uri", "Section"], 
                    ["series_uri", "Series"], ["created", "Created"]);
          } else {
            fillDOM(db, "articles-table", "articles", "created ASC", ["uri", "ID"], ["type", "Type"], 
                    ["status", "Status"], ["title", "Title"], ["authors_ids", "Author(s)"], ["section_uri", "Section"], 
                    ["series_uri", "Series"], ["created", "Created"], ["updated", "Updated"]);
          }
          break;
        case "series":
          fillDOM(db, "series-table", "series", "created ASC", ["uri", "ID"], ["status", "Status"], ["section_uri", "Section"],
                  ["title", "Title"], ["authors_ids", "Author(s)"], ["created", "Created"], ["updated", "Updated"]);
          break;
        case "sections":
          fillDOM(db, "sections-table", "sections", "created ASC", ["uri", "ID"], ["title", "Title"], 
                  ["authors_ids", "Author(s)"], ["created", "Created"], ["updated", "Updated"]);
          break;
        case "relations":
          fillDOM(db, "relations-table", "relations", "created ASC", ["uri", "ID"], ["article1", "Article 1"], 
                  ["type", "Type"], ["article2", "Article 2"], ["place", "Place"], ["authors_ids", "Author(s)"], 
                  ["created", "Created"], ["updated", "Updated"]);
          break;
        case "sources":
          fillDOM(db, "sources-table", "sources", "", ["ris_id", "ID"], ["ris_ty", "Type"], 
                  ["IIF(ris_a1 = '', ris_au, ris_a1)", "Author"], ["IIF(ris_y1 = '', ris_py, ris_y1)", "Year"], 
                  ["IIF(ris_t1 = '', IIF(ris_ti = '', ris_st, ris_ti), ris_t1)", "Title"]);
          break;
        case "article-edit":
          fillDOM(db, "modal-references-table", "sources", "", ["ris_id", "ID"], 
                  ["IIF(ris_a1 = '', ris_au, ris_a1)", "Author"], ["IIF(ris_t1 = '', IIF(ris_ti = '', ris_st, ris_ti), ris_t1)", "Title"],
                  ["ris_ty", "Type"], ["IIF(ris_y1 = '', ris_py, ris_y1)", "Year"]);
          break;
        case "navbar":
          fillDOM(db, "navbar-table", "navbar_items", "created ASC", ["uri", "ID"], ["label", "Label"], 
                  ["location", "Location"], ["type", "Type of Ref."], ["reference", "ID or URL"], ["created", "Created"]);
          break;
        case "media":
          fillDOM(db, "media-table", "media", "created ASC", ["uri", "ID"], ["file_extension", "File Ext."], ["alt_text", "Alt Text"], 
                  ["size", "Size (bytes)"], ["created", "Created"], ["updated", "Updated"], ["''", thumbnail_column])
            .then(addThumbnails);
          break;
        case "authors":
          fillDOM(db, "authors-table", "authors", "created ASC", ["uri", "ID"], ["name", "Name"], 
                  ["email", "Email"], ["location", "Location"], ["created", "Created"], ["updated", "Updated"]);
          break;
        default:
      }
    }
  }

  const addThumbnails = async function() {
    if (!globalThis.mediaUrls) {
      globalThis.mediaUrls = {};
      
      const response = await globalThis.lb.listMediaFiles();
      if (response.type !== "error") { 
        response.result.forEach((item) => {
          globalThis.mediaUrls[item['name']] = item['url'];
        });
      }
    }
    
    const tdsCollection = globalThis.document.getElementsByClassName("thumbnail-td");
    const tds = Array.from(tdsCollection); 
    tds.forEach((td) => {
      td.innerHTML = "<img class='thumbnail-img' src='" + globalThis.mediaUrls[td.attributes['uri'].value] + "' />";     
    });
  }

  const reloadPage = function() {
    let href = globalThis.location.href;
    const hashtagPos = href.indexOf("#");
    if (hashtagPos !== -1) href = href.substring(0, hashtagPos);
    
    globalThis.location.href = href;
  }

  const deleteItems = function(items, sql) {
    let itemsStr = "'" + items.join("','") + "'";

    globalThis.lb.useSqlite(async (db) => {
      await db.exec({
        sql: sql(itemsStr)
      });
      
      reloadPage();
    });
  }

  const deleteArticles = function(items) {
    deleteItems(items, (a) => "DELETE FROM articles WHERE uri IN (" + a + ");" +
            "DELETE FROM relations WHERE article1 IN (" + a + ") OR article2 IN (" + a + ");");
  }

  const deleteSeries = function(items){
    deleteItems(items, (a) => "DELETE FROM series WHERE uri IN (" + a + ");" +
            "UPDATE articles SET series_uri='' WHERE series_uri IN (" + a + ");"); 
  }

  const deleteSections = function(items){
    deleteItems(items, (a) => "DELETE FROM sections WHERE uri IN (" + a + ");" +
            "UPDATE articles SET section_uri='' WHERE section_uri IN (" + a + ");");
  }

  const deleteRelations = function(items){
    deleteItems(items, (a) => "DELETE FROM relations WHERE uri IN (" + a + ");");
  }

  const deleteSources = function(items){
    deleteItems(items, (a) => "DELETE FROM sources WHERE ris_id IN (" + a + ");");
  }

  const deleteNavbarItems = function(items){
    deleteItems(items, (a) => "DELETE FROM navbar_items WHERE uri IN (" + a + ");");
  }

  const deleteMediaFiles = function(items) {
    let itemsStr = "'" + items.join("','") + "'";
    globalThis.lb.useSqlite(async (db) => {
      await db.exec({
        sql: "DELETE FROM media WHERE uri IN (" + itemsStr + ");"
      });

      for (let i = 0; i < items.length; i++) {
        await deleteMediaFileAndVersions(items[i]);
      }

      reloadPage();
    });
  }

  const deleteAuthors = function(items){
    deleteItems(items, (a) => "DELETE FROM authors WHERE uri IN (" + a + ");");
  }
  
  const changeStatus = function(table, items, status){
    let itemsStr = "'" + items.join("','") + "'";

    globalThis.lb.useSqlite(async (db) => {
      await db.exec({
        sql: "UPDATE " + table + " SET status='" + status + "' WHERE uri IN (" + itemsStr + ");"
      });

      reloadPage();
    });
  }

  const thisTable = function(){
    switch (thisPage()) {
        case "articles":
          return "articles";
        case "series":
          return "series";
        case "sections":
          return "sections";
        case "relations":
          return "relations";
        case "sources":
          return "sources";
        case "navbar":
          return "navbar_items";
        case "media":
          return "media";
        case "authors":
          return "authors";
        default:
          return "";
      }
  }

  const actionFormHandler = function(event) {
    event.preventDefault();
    
    const selectAction = globalThis.document.getElementById("select-action");
    const action = selectAction.value;

    if (action === "none"){
      event.preventDefault();
      return;
    }

    let selectedItems = [];
    const checkboxes = getAllVisibleCheckboxes();
    for (let checkbox in checkboxes) {
      if (checkboxes[checkbox].checked) {
        selectedItems.push(checkboxes[checkbox].value);
      }
    }

    if (selectedItems.length === 0){
      event.preventDefault();
      return;
    }
    
    if (action === "delete"){
      switch (thisPage()) {
        case "articles":
          deleteArticles(selectedItems);
          break;
        case "series":
          deleteSeries(selectedItems);
          break;
        case "sections":
          deleteSections(selectedItems);
          break;
        case "relations":
          deleteRelations(selectedItems);
          break;
        case "sources":
          deleteSources(selectedItems);
          break;
        case "navbar":
          deleteNavbarItems(selectedItems);
          break;
        case "media":
          deleteMediaFiles(selectedItems);
          break;
        case "authors":
          deleteAuthors(selectedItems);
          break;
        default:
      }
    } else if (action === "publish" || action === "unpublish") {
      changeStatus(thisTable(), selectedItems, action === "publish" ? "Published" : "Unpublished");
    }
  }

  const strFromSelectValues = function(select) {
    let result = "";
    
    for (let i = 0, len = select.options.length; i < len; i++) {
      const option = select.options[i];

      if (option.selected) {
        result += option.value + ",";
      }
    }

    if (result.length > 0) return result.slice(0, -1);
    
    return result;
  }

  const insertOrUpdateRecord = async function(db, table, columns, fieldValues) {
    const columnsStr = columns.join(", ");
    
    //Using UPSERT in order not to update the field 'created'
    let sqlStr = "INSERT INTO " + table + "(" + columnsStr + ", created, updated) VALUES " +
      "(" + "?, ".repeat(fieldValues.length) + "STRFTIME('%Y-%m-%d %H:%M', DATETIME('now','localtime')), " +   
      "STRFTIME('%Y-%m-%d %H:%M', DATETIME('now','localtime'))) ON CONFLICT(uri) DO UPDATE SET " 
      + columns.join("=?, ") + "=?, updated=STRFTIME('%Y-%m-%d %H:%M', DATETIME('now','localtime'));";

    await db.exec({
      sql: sqlStr,
      bind: [...fieldValues, ...fieldValues]
    }, {if_error_do: (e) => globalThis.window.alert("Error: " + e)});
  }

  const formHandler = function(table, fields){
    const fieldValues = [];
    let columns = [];
    let uri = "";

    for (let i = 0; i < fields.length; i++) {
      columns[i] = fields[i][1];
      switch (fields[i][2]) {
        case "select":
          const select = globalThis.document.getElementById(fields[i][0]);
          fieldValues[i] = select.options[select.selectedIndex].value;
          break;
        case "fix-datetime-format":
          let value = globalThis.document.getElementById(fields[i][0]).value;
          if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) value.replace("T", " ");
          fieldValues[i] = value;
          break;
        case "checkbox":
          fieldValues[i] = globalThis.document.getElementById(fields[i][0]).checked ? 1 : 0;
          break;
        case "select-multiple":
          fieldValues[i] = strFromSelectValues(globalThis.document.getElementById(fields[i][0]));
          break;
        default:
          fieldValues[i] = globalThis.document.getElementById(fields[i][0]).value;
      }

      if (fields[i][1] === 'uri') uri = fieldValues[i];
    } 
    
    const textarea = globalThis.document.getElementById("editor");
    if (textarea) {
      const contents = globalThis.thisEditor.getValue();     
      fieldValues.push(contents);
      columns.push("contents");
    }

    globalThis.lb.useSqlite(async (db) => {
      await insertOrUpdateRecord(db, table, columns, fieldValues);

      if (table === "relations") {
        uri = await getRelationURI(fields, fieldValues, db);
      } else if (table === "media") {
        const versions = getVersions(columns, fieldValues);
        await saveFileInMediaFolder(versions);
      }
      
      if (findParameter(globalThis.location.href, "uri") === uri 
          || table === "navbar_items" || table === "templates") {
        reloadPage();
      } else {
        addURItoURL(uri);
      }
    });
  }

  const getVersions = function(columns, fieldValues) {
    let versions = [];
    
    for (let i = 0; i < columns.length; i++) {
      if (columns[i] === 'versions') {
        versions = fieldValues[i].split(",");
      }
    }

    return versions;
  }

  const addURItoURL = function(uri) {
    const encodedUri = encodeURIComponent(uri);
    globalThis.location.href = globalThis.location.href.split("?uri=")[0] + "?uri=" + encodedUri;
  }

  const getRelationURI = async function(fields, fieldValues, db) {
    let article1, article2, type = "";
    for (let i = 0; i < fields.length; i++) {
      if (fields[i][1] === 'article1') {
        article1 = fieldValues[i];
      } else if(fields[i][1] === 'article2') {
        article2 = fieldValues[i];
      } else if(fields[i][1] === 'type') {
        type = fieldValues[i];
      }
    }

    let resultRows = await db.exec({
      sql: "SELECT uri FROM relations WHERE article1 = '" + article1 + 
        "' AND article2 = '" + article2 + "' AND type = '" + type + "'",
      rowMode: 'object'
    });

    if (resultRows && resultRows[0]) return resultRows[0]["uri"];
    
    return "";
  }

  const articleFormHandler = function(event) {
    event.preventDefault();
    formHandler("articles", [["uri", "uri"], ["type", "type", "select"], ["section-uri", "section_uri", "select"], 
    ["series-uri", "series_uri", "select"], ["highlight-mainpage", "highlight_mainpage", "checkbox"], 
    ["highlight-section", "highlight_section", "checkbox"], ["in-sitemap", "in_sitemap", "checkbox"],
    ["title", "title"], ["notes", "notes"], ["summary", "summary"], ["geolocation", "geolocation"], 
    ["authors", "authors_ids", "select-multiple"], ["subtitle", "subtitle"], ["label", "label"],
    ["keywords", "keywords"], ["photo", "photo"], ["photo-info", "photo_info"], ["language", "language"], 
    ["enable-comments", "enable_comments", "checkbox"], ["video", "video"], ["video-info", "video_info"], ["audio", "audio"],
    ["audio-info", "audio_info"], ["editorial-notes", "editorial_notes"], ["published", "published", "fix-datetime-format"], 
    ["status", "status", "select"]]);
  }

  const seriesFormHandler = function(event) {
    event.preventDefault();
    formHandler("series", [["uri", "uri"], ["type", "type", "select"], ["highlight-mainpage", "highlight_mainpage", "checkbox"], 
    ["highlight-section", "highlight_section", "checkbox"], ["in-sitemap", "in_sitemap", "checkbox"], ["title", "title"], 
    ["authors", "authors_ids", "select-multiple"], ["subtitle", "subtitle"], ["photo", "photo"], 
    ["photo-info", "photo_info"], ["keywords", "keywords"], ["published", "published", "fix-datetime-format"], 
    ["status", "status", "select"], ["section-uri", "section_uri", "select"]]);
  }

  const sectionFormHandler = function(event) {
    event.preventDefault();
    formHandler("sections", [["uri", "uri"], ["type", "type", "select"], ["title", "title"], ["description", "description"], 
    ["keywords", "keywords"], ["authors", "authors_ids", "select-multiple"]]);
  }

  const relationFormHandler = function(event) {
    event.preventDefault();
    const uriInput = globalThis.document.getElementById("uri");
    if (!uriInput.value) uriInput.value = globalThis.lb.generateRandomId();
    
    formHandler("relations", [["uri", "uri"], ["article1", "article1", "select"], 
    ["article2", "article2", "select"], ["relation-type", "type", "select"], ["place", "place", "fix-datetime-format"], 
    ["title", "title"], ["photo", "photo"], ["photo-info", "photo_info"], ["authors", "authors_ids", "select-multiple"]]);
  }

  const authorFormHandler = function(event) {
    event.preventDefault();
    formHandler("authors", [["uri", "uri"], ["type", "type", "select"], ["name", "name"], ["contact", "contact"], 
    ["location", "location"], ["photo", "photo"], ["bio", "bio"], ["email", "email"]]);
  }

  const navbarFormHandler = function(event) {
    event.preventDefault();
    formHandler("navbar_items", [["uri", "uri"], ["label", "label"], ["location", "location"], 
    ["reference-type", "type"], ["reference", "reference"]]);
  }

  const mediaFormHandler = function(event) {
    event.preventDefault();

    if (!globalThis.mediaFile) {
      globalThis.window.alert("Please select a file first.");
      return;
    }

    const uriInput = globalThis.document.getElementById("uri");
    const uri = uriInput.value;
    const fileExt = getFileExtension(uri);
    if (!supported_version_formats.includes(fileExt)) {
      const versionsSelect = globalThis.document.getElementById("versions");
      if (versionsSelect.value) {
        globalThis.window.alert("It is not possible to add versions for this file format: " + fileExt + ".");
        return;
      }
    }
    
    formHandler("media", [["uri", "uri"], ["file-extension", "file_extension"], ["type", "type"], ["size", "size"], ["title", "title"], ["alt-text", "alt_text"], ["info", "info"], ["versions", "versions", "select-multiple"]]);
  }

  const rssFormHandler = function(event) {
    event.preventDefault();

    const mainpageStr = globalThis.thisEditorMRSS.getValue();
    const sectionStr = globalThis.thisEditorSRSS.getValue();

    globalThis.lb.useSqlite(async (db) => {
      await db.exec({sql: "UPDATE templates SET contents=? WHERE theme_uri = 'current' AND template_uri = 'section_rss'", bind: [sectionStr]});
      await db.exec({sql: "UPDATE templates SET contents=? WHERE theme_uri = 'current' AND template_uri = 'mainpage_rss'", bind: [mainpageStr]});
      
      const span = globalThis.document.getElementById("close-rss-modal");
      span.click();
    });
  }

  const saveTemplate = function() {
    let css = "", html = "", js = "";

    const htmlElement = globalThis.document.getElementById("editor-html");
    if (htmlElement) {
      html = globalThis.thisEditorHTML.getValue();
    }

    const cssElement = globalThis.document.getElementById("editor-css");
    if (cssElement) {
      css = globalThis.thisEditorCSS.getValue();
    }

    const templateOption = globalThis.document.getElementById("select-page-type").value;

    globalThis.lb.useSqlite(async (db) => {
      const sqlStr = "UPDATE templates SET contents=? WHERE theme_uri = 'current' AND template_uri = '" + templateOption;

      let ok = true, err= "";
      await db.exec({sql: sqlStr + "_html'", bind: [html]}, {if_error_do: (e) => {ok = false; err = e.message;}});      
      await db.exec({sql: sqlStr + "_css'", bind: [css]}, {if_error_do: (e) => {ok = false; err = e.message;}});

      if (ok) {
        globalThis.window.alert("Templates were saved successfully!");
      } else {
        globalThis.window.alert("Error:" + err);
      }
    });
  }

  const exportTheme = function() {
    globalThis.lb.useSqlite(async (db) => {
      const resultRows = await db.exec({
        sql: "SELECT template_uri, template_set, template_type, content_type, contents FROM templates WHERE theme_uri = 'current'",
        rowMode: 'object'
      });

      let templates = [];
      let image = globalThis.window.prompt("If you want, insert a new screenshot of this theme in data URI code [data:image...]");
      
      for (let i = 0; i < resultRows.length; i++) {
        if (resultRows[i]["template_uri"] === "config") continue;
        if (resultRows[i]["template_uri"] === "image" && !image) {
          image = resultRows[i]["contents"];
          continue;
        }
        
        templates.push({
          "template_uri": resultRows[i]["template_uri"] ? resultRows[i]["template_uri"] : "", 
          "template_set": resultRows[i]["template_set"] ? resultRows[i]["template_set"] : "", 
          "template_type": resultRows[i]["template_type"] ? resultRows[i]["template_type"] : "", 
          "content_type": resultRows[i]["content_type"] ? resultRows[i]["content_type"] : "", 
          "contents": resultRows[i]["contents"] ? resultRows[i]["contents"] : ""
        });
      }

      const randomUri = globalThis.lb.generateRandomId();
      let theme = {
        "theme_uri": "theme_" + randomUri, 
        "config": globalThis.lb.getThemeConfig(),
        "templates": templates,
        "image": image ? image : ""
      };
      
      const themeStr = JSON.stringify(theme, null, 2);
      const blob = new Blob([themeStr], {type: "text/plain;charset=utf-8"});
      saveFile(blob, "theme_" + randomUri + ".json");
    });
  }

  const exportThemeAsZipFolder = function(event) {
    event.preventDefault();
    
    globalThis.lb.useSqlite(async (db) => {
      const resultRows = await db.exec({
        sql: "SELECT template_uri, template_set, template_type, content_type, contents FROM templates WHERE theme_uri = 'current'",
        rowMode: 'object'
      });
      let image = globalThis.window.prompt("If you want, insert a new screenshot of this theme in data URI code [data:image...]");

      const zip = new JSZip();
      const templatesFolder = zip.folder("templates");
      
      for (let i = 0; i < resultRows.length; i++) {
        if (resultRows[i]["template_uri"] === "config") continue;
        if (resultRows[i]["template_uri"] === "image" && !image) {
          image = resultRows[i]["contents"];
          continue;
        }

        const t = resultRows[i];
        const folder = templatesFolder.folder(t["template_type"]).folder(t["template_set"]).folder(t["content_type"]);
        folder.file(t["template_uri"] + "." + t["content_type"], t["contents"]);
      }

      const configData = JSON.stringify(globalThis.lb.getThemeConfig(), null, 2);
      const randomUri = globalThis.lb.generateRandomId();
      
      zip.file("theme_uri.txt", "theme_" + randomUri);
      zip.file("config.json", configData);
      zip.file("image.txt", image);
      zip.generateAsync({type:"blob"}).then(function(content) {
        saveFile(content, "theme_" + randomUri + ".zip");
      });
    });
  }

  const templatesFormHandler = function (event) {
    if (event) event.preventDefault();
    
    if (event && event.submitter && event.submitter.value === "Export Theme") {
      exportTheme();
    } else {
      saveTemplate();
    }
  }

  const getAllVisibleCheckboxes = function() {
    let checkboxes = [];
    let i = 0;
    while (i < 100000) { //while(true)
      const checkbox = globalThis.document.getElementById("checkbox-" + i);
      const tr = globalThis.document.getElementById("tr-" + i);
      if (checkbox && tr) {
        if (tr.style.display !== 'none') checkboxes.push(checkbox);
      } else {
        break;
      }
      i++;
    }

    return checkboxes;
  }

  const setCurrentPage = function() {
    const currentPage = globalThis.document.getElementById("current-page");
    const page = currentPage.value ? parseInt(currentPage.value) : 1;

    if (page < 1) {
      globalThis.console.log("Table entry limit exceeded");
      return;
    }
    
    const tbody = globalThis.document.getElementsByTagName('tbody')[0];
    const trs = tbody.getElementsByTagName("tr");
    
    const eppStr = globalThis.sessionStorage.getItem("entries-per-page");
    const epp = eppStr ? parseInt(eppStr) : 10;
    const start = (page - 1) * epp;
    const length = trs.length;
    const end = start + epp > length ? length : start + epp;
    const maxPages = Math.ceil(length / epp);

    if (page > maxPages) {
      globalThis.console.log("Table entry limit exceeded");
      return;
    }
    
    for (let i = 0; i < length; i++) {;
      if (i >= start && i < end){
        trs[i].style.cssText = "display:run-in";
      } else {
        trs[i].style.cssText = "display:none";
      }
    }

    const dataTableFrom = globalThis.document.getElementById("data-table-from");
    const dataTableTo = globalThis.document.getElementById("data-table-to");
    const dataTableOf = globalThis.document.getElementById("data-table-of");
    const entriesLabelSpan = globalThis.document.getElementById("entries-label-span");
    
    if (length === 1 && trs[0].id === "empty-tr") {
      dataTableFrom.innerText = 0;
      dataTableTo.innerText = 0;
      dataTableOf.innerText = 0;
      entriesLabelSpan.innerText = "entries";
    } else {
      dataTableFrom.innerText = start + 1;
      dataTableTo.innerText = end;
      dataTableOf.innerText = length;
  
      if (length === 1) {
        entriesLabelSpan.innerText = "entry";
      } else {
        entriesLabelSpan.innerText = "entries";
      }
    }
  }

  const setEntriesPerPage = function() {
    const entriesPerPage = globalThis.document.getElementById("entries-per-page");
    const epp = entriesPerPage.value ? parseInt(entriesPerPage.value) : 10;
    globalThis.sessionStorage.setItem("entries-per-page", epp);

    const tbody = globalThis.document.getElementsByTagName('tbody')[0];
    const trs = tbody.getElementsByTagName("tr");
    const length = trs.length;
    const maxPages = Math.ceil(length / epp);
    const currentPage = globalThis.document.getElementById("current-page");
    currentPage.max = maxPages;
    
    goToFirstPage();
  }

  const goToFirstPage = function() {
    const currentPage = globalThis.document.getElementById("current-page");
    currentPage.value = 1;
    setCurrentPage();
  }

  const goToPreviousPage = function() {
    const currentPage = globalThis.document.getElementById("current-page");
    const currentPageValue = currentPage.value ? parseInt(currentPage.value) : 1;
    
    if (currentPageValue > 1) {
      currentPage.value = currentPageValue - 1;
      setCurrentPage();
    } else {
      globalThis.console.log("Page limit reached");
    }
  }

  const goToNextPage = function() {
    const eppStr = globalThis.sessionStorage.getItem("entries-per-page");
    const epp = eppStr ? parseInt(eppStr) : 10;
    const tbody = globalThis.document.getElementsByTagName('tbody')[0];
    const trs = tbody.getElementsByTagName("tr");
    const length = trs.length;
    const currentPage = globalThis.document.getElementById("current-page");
    const currentPageValue = currentPage.value ? parseInt(currentPage.value) : 1;
    const maxPages = Math.ceil(length / epp);
    
    if (currentPageValue < maxPages) {
      currentPage.value = currentPageValue + 1;
      setCurrentPage();
    } else {
      globalThis.console.log("Page limit reached");
    }
  }

  const goToLastPage = function() {
    const eppStr = globalThis.sessionStorage.getItem("entries-per-page");
    const epp = eppStr ? parseInt(eppStr) : 10;
    const tbody = globalThis.document.getElementsByTagName('tbody')[0];
    const trs = tbody.getElementsByTagName("tr");
    const length = trs.length;
    const maxPages = Math.ceil(length / epp);
    const currentPage = globalThis.document.getElementById("current-page");
    
    currentPage.value = maxPages;
    setCurrentPage();
  }

  const thCheckboxHandler = function(event) {
    const thCheckbox = event.currentTarget;
    const checked = thCheckbox.checked;

    const checkboxes = getAllVisibleCheckboxes();
    for (let checkbox in checkboxes) {
      checkboxes[checkbox].checked = checked;
    }
  }

  const uncheckCheckboxes = function() {
    let checkboxes = getAllVisibleCheckboxes();
    for (let checkbox in checkboxes) {
      checkboxes[checkbox].checked = false;
    }

    const headerCheckbox = globalThis.document.getElementById("th-checkbox");
    headerCheckbox.checked = false;
  }

  const thisDataTable = function() {
    switch (thisPage()) {
      case "articles":
        return "articles-table";
      case "article-edit":
        return "modal-references-table";
      case "series":
        return "series-table";
      case "sections":
        return "sections-table";
      case "relations":
        return "relations-table";
      case "sources":
        return "sources-table";
      case "navbar":
        return "navbar-table";
      case "media":
        return "media-table";
      case "authors":
        return "authors-table";
      default:
        return "";
    }
  }

  const addEmptyTr = function() {
    const emptyTr = globalThis.document.getElementById("empty-tr");
    if (!emptyTr){
      const id = thisDataTable();
      const table = globalThis.document.getElementById(id);
      const tbody = table.getElementsByTagName('tbody')[0];
      const thead = table.getElementsByTagName('thead')[0];
      const ths = thead.getElementsByTagName("th").length;
      const tr = globalThis.document.createElement("tr");
      tr.id = "empty-tr";

      for (let i = 0; i < ths; i++) {
        const td = globalThis.document.createElement("td");
        td.title = "Empty";
        td.innerHTML = "&nbsp;";
        tr.appendChild(td);
      }
      
      tbody.appendChild(tr);
    }
  }

  const removeEmptyTr = function() {
    const id = thisDataTable();
    const table = globalThis.document.getElementById(id);
    const tbody = table.getElementsByTagName('tbody')[0];
    const emptyTr = globalThis.document.getElementById("empty-tr");

    if (emptyTr) tbody.removeChild(emptyTr);
  }

  const filterHandler = function() {
    const filterType = globalThis.document.getElementById("select-filter").value;
    const entriesPerPage = globalThis.document.getElementById("entries-per-page").value;
    let filterText = globalThis.document.getElementById("filter").value;
    const tbody = globalThis.document.getElementsByTagName("tbody")[0];
    const trs = tbody.getElementsByTagName("tr");
    filterText = filterText.toLowerCase();
        
    let countVisible = 0;
    let countValid = 0
    for (let i = 0; i < trs.length; i++) {
      if (trs[i].attributes["id"].value !== 'empty-tr') countValid++;
      
      if (!filterText || filterType === 'none') {
        if (i < entriesPerPage) {
          trs[i].style.cssText = "display:run-in";
          countVisible++;
        } else {
          trs[i].style.cssText = "display:none";
        }
      } else {
        let tds = trs[i].getElementsByTagName("td");
        for (let j = 0; j < tds.length; j++) {
          if (tds[j].attributes["name"] && tds[j].attributes["name"].value === filterType) {
            if (tds[j].innerText.toLowerCase().includes(filterText)) {
              trs[i].style.cssText = "display:run-in";
              countVisible++;
            } else {
              trs[i].style.cssText = "display:none";
            }
            break;
          }
        }
      }
    }

    const tfootPagination = globalThis.document.getElementById("data-pagination-span");
    const tfootEntries = globalThis.document.getElementById("entries-per-page-span");
    const dataTableFrom = globalThis.document.getElementById("data-table-from");
    const dataTableTo = globalThis.document.getElementById("data-table-to");
    const dataTableOf = globalThis.document.getElementById("data-table-of");
    if (!filterText || filterType === 'none') {
      tfootPagination.style.cssText = "display:run-in";
      tfootEntries.style.cssText = "display:run-in";
      dataTableTo.innerText = entriesPerPage < countValid ? entriesPerPage : countValid; 
      dataTableOf.innerText = countValid;
    } else {
      tfootPagination.style.cssText = "display:none";
      tfootEntries.style.cssText = "display:none";
      dataTableTo.innerText = countVisible;
      dataTableOf.innerText = countVisible;
    }


    if (countVisible === 0) {
      dataTableFrom.innerText = "0";
      addEmptyTr();
    } else {
      dataTableFrom.innerText = "1";
      removeEmptyTr();
    }   
  }

  const selectFilterHandler = function() {
    globalThis.document.getElementById("filter").value = "";
    filterHandler();
  }

  const fillRefList = function(table) {
    globalThis.document.getElementById("reference-list").innerHTML = "";
    globalThis.lb.useSqlite(async (db) => {
      let resultRows = await db.exec({
        sql: "SELECT uri FROM " + table,
        rowMode: 'array'
      }, {cached_select: true});

      for (let i = 0; i < resultRows.length; i++) {
        let row = resultRows[i];
        const option = globalThis.document.createElement("option");
        option.value = row[0];
        option.innerText = row[0];
        globalThis.document.getElementById("reference-list").appendChild(option);
      }
    });
  }

  const refTypeSelectHandler = function(event) {
    const refInput = globalThis.document.getElementById("reference");
    const value = event.currentTarget.options[event.currentTarget.selectedIndex].value;
    const refReqLab = globalThis.document.getElementById("reference-required-label");
    refReqLab.style.display = "inline";
    let table = "";

    refInput.readOnly = false;
    refInput.required = true;
    switch (value) {
      case "section":
        refInput.placeholder = "Section ID";
        table = "sections";
        break;
      case "series":
        refInput.placeholder = "Series ID";
        table = "series";
        break;
      case "article":
        refInput.placeholder = "Article ID";
        table = "articles";
        break;
      case "author":
        refInput.placeholder = "Author ID";
        table = "authors";
      case "external":
        refInput.placeholder = "https://www.myurl.com";
        break;
      case "label":
        refReqLab.style.display = "none";
        refInput.readOnly = true;
        refInput.required = false;
        refInput.value = "";
        refInput.placeholder = "";
        break;
      default:
    }
    refInput.value = "";

    if (value === "external") {
      refInput.removeAttribute("pattern");
      refInput.attributes["type"].value = "url"; 
      globalThis.document.getElementById("reference-list").innerHTML = "";
    } else if (value !== "label" && value !== ""){
      refInput.pattern = "^[a-z0-9\-]+$";
      refInput.attributes["type"].value = "text";
      if (table) fillRefList(table);
    }
  }

  const loadPageComponents = function() {
    const locationSelect = globalThis.document.getElementById("location");
    const pageComponents = globalThis.lb.getThemeConfig()["page_components"];

    if (!pageComponents || pageComponents.length === 0) {
      globalThis.console.warn("Theme improperly configured");
      return;
    }

    locationSelect.innerHTML = "<option value='' selected disabled>Choose one</option>";
    pageComponents.forEach((c) => {
      locationSelect.innerHTML += `<option name='${c.name}' value='${c.name}'>${c.label}</option>`;
    });
  }

  const dealWithNavbarModal = function() {
    const refTypeSelect = globalThis.document.getElementById("reference-type");
    refTypeSelect.addEventListener("change", refTypeSelectHandler);

    loadPageComponents();

    const modal = globalThis.document.getElementById("navbar-modal");
    const openModalBtn = globalThis.document.getElementById("open-navbar-modal");
    openModalBtn.addEventListener("click", (event) => {
      modal.style.display = "flex";
    });

    const resetModal = () => {
      globalThis.document.getElementById("navbar-form").reset();
      globalThis.document.getElementById("reference").placeholder = "Section ID";
    }
    
    const span = globalThis.document.getElementById("close-navbar-modal");
    span.addEventListener("click", (event) => {
      modal.style.display = "none";
      resetModal();
    });

    globalThis.window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        resetModal();
      }
    });

    const positionInput = globalThis.document.getElementById("position");
    positionInput.addEventListener("change",updateNavbarUri);
    const locationInput = globalThis.document.getElementById("location");
    locationInput.addEventListener("change",updateNavbarUri);
  }

  const updateNavbarUri = function() {
    const positionInput = globalThis.document.getElementById("position");
    const locationInput = globalThis.document.getElementById("location");
    const uriInput = globalThis.document.getElementById("uri");
    const position = positionInput.value;
    const location = locationInput.value;

    if (position && location) {
      uriInput.value = location + "-" + position.toString().padStart(2, '0');
    } 
  }

  const dealWithRSSModal = function() {
    const modal = globalThis.document.getElementById("rss-modal");
    const openModalBtn = globalThis.document.getElementById("open-rss-modal");
    openModalBtn.addEventListener("click", (event) => {
      event.preventDefault();
      modal.style.display = "flex";
    });

    const span = globalThis.document.getElementById("close-rss-modal");
    span.addEventListener("click", (event) => {
      modal.style.display = "none";
      globalThis.document.getElementById("rss-form").reset();
      fillRSS();
    });

    globalThis.window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        globalThis.document.getElementById("rss-form").reset();
        fillRSS();
      }
    });

    fillRSS();
  }

  const dealWithSourceModal = function() {
    const importRisInput = globalThis.document.getElementById("import-ris-input");
    importRisInput.addEventListener("change", selectRisFiles);
    
    const sourcesTable = globalThis.document.getElementById("sources-table");
    const tbody = sourcesTable.getElementsByTagName('tbody')[0];
    tbody.addEventListener("click", fillSourceModal);
    
    const modal = globalThis.document.getElementById("source-modal");
    globalThis.window.addEventListener("click", (event) => {
      if (event.target === modal) {
        globalThis.window.location = "/sources.html#";
      }
    });
  }

  const fillSourceModal = function(event) {
    if (!event.target.attributes["source-uri"]) return;
    
    const uri = event.target.attributes["source-uri"].value;
    if (uri) {
      globalThis.lb.useSqlite(async (db) => {
        const resultRows = await db.exec({
          sql: "SELECT * FROM sources WHERE ris_id = '" + uri + "'",
          rowMode: 'object'
        });

        const record = resultRows[0];
        const printableRec = printableRecord(record);
        const sourceForm = globalThis.document.getElementById("source-form");
        sourceForm.innerHTML = "";
        let counter = 0;
        for (let label in printableRec) {
          sourceForm.innerHTML += "<label for='ta-" + counter + "'>" + label + "</label>" +
            "<textarea id='ta-" + counter++ + "' rows=1 readonly>" + printableRec[label] + "</textarea>";
        }
      });
    }
  }

  const printableRecord = function(record) {
    let printable = {};
    const genericRec = globalThis.lb.risMap()["GEN"];
    const specificRec = globalThis.lb.risMap()[record["ris_ty"]];

    for (let key in record) {
      if(record[key]){
        if (!key.startsWith("ris_")) continue; //created, updated
        const tag = key.replace("ris_", "").toUpperCase();
        const label = tag === "TY" ? "Type" : specificRec[tag] ? specificRec[tag] : genericRec[tag];
        printable[label] = record[key]; 
      }
    }

    return printable;
  }

  const fillRSS = function() {
    globalThis.lb.useSqlite(async (db) => {
      const resultRows = await db.exec({
        sql: "SELECT * FROM templates WHERE theme_uri = 'current' AND content_type = 'rss'",
        rowMode: 'object'
      });

      for (let i = 0; i < resultRows.length; i++) {
        const row = resultRows[i];

        if (row["template_uri"] === "mainpage_rss") {
          const editorMRSS = ace.edit('mainpage-rss', {
            mode: "ace/mode/xml",
            selectionStyle: "text",
            fontSize: "15px",
            showLineNumbers: !mobileScreen(),
            showGutter: !mobileScreen()
          });
          editorMRSS.setTheme("ace/theme/github_light_default");
          editorMRSS.session.setTabSize(2);
          editorMRSS.session.setUseWrapMode(true);
          globalThis.thisEditorMRSS = editorMRSS;
          editorMRSS.setValue(row["contents"]);
          editorMRSS.session.setUndoManager(new ace.UndoManager());
        } else if (row["template_uri"] === "section_rss") {
          const editorSRSS = ace.edit('section-rss', {
            mode: "ace/mode/xml",
            selectionStyle: "text",
            fontSize: "15px",
            showLineNumbers: !mobileScreen(),
            showGutter: !mobileScreen()
          });
          editorSRSS.setTheme("ace/theme/github_light_default");
          editorSRSS.session.setTabSize(2);
          editorSRSS.session.setUseWrapMode(true);
          globalThis.thisEditorSRSS = editorSRSS;
          editorSRSS.setValue(row["contents"]);
          editorSRSS.session.setUndoManager(new ace.UndoManager());
        }
      }
    });
  }

  const dashboardHandler = function(event) {
    event.preventDefault();

    if (event.submitter.id === 'restore-db') {
      const restoreDbInput = globalThis.document.getElementById("restore-db-input");
      restoreDbInput.onchange = (event) => selectDbFile(event);
      restoreDbInput.click();
    } else if (event.submitter.id === 'preview-website') {
      showLoader();
      previewWebsite("content", "index.html", () => {
        if (!mobileScreen()) {
          contractNavbar("Dashboard");
        } else {
          removeLogo();
        }
      });
    } else if (event.submitter.id === 'generate-website') {
      showLoader();
      generateWebsite(true, (_) => {hideLoader()});
    } else if (event.submitter.id === 'dump-db') {
      showLoader();
      dumpDB();
      hideLoader();
    }    
  }

  const dumpDB = function() {
    globalThis.lb.useSqlite(async (db) => {
      const byteArray = await db.export();
      const blob = new Blob([byteArray.buffer], {type:"application/x-sqlite3"});
      saveFile(blob, "mydb.sqlite3");
    });
  }

  const selectDbFile = function(event) {
    let file = event.target.files[0];
    if (!file) {
      globalThis.console.log("No file found.");
      return;
    }
    
    const extension = file.name.split('.').pop().toLowerCase();
    if (!["json", "sqlite3"].includes(extension)) {
      globalThis.window.alert("The only file extensions accepted are: .sqlite3 and .json.");
      return;
    }

    showLoader();
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      globalThis.lb.useSqlite(async (db) => {
        const ok = globalThis.window.confirm("This will delete all the data from your database and replace it with the data from this file. Are you sure?");
        if (ok) {
          await db.restore(reader.result, extension);
          await globalThis.lb.startDb();
          await globalThis.lb.updateCachedSelects();
          reloadPage();
          return;
        }
        hideLoader();
      });
    });
    reader.readAsArrayBuffer(file);
  }

  const clickCameFromA = function(element) {
    if (!element) return false;
    if (element.tagName && element.tagName.toUpperCase() === 'A') return true;

    while (element.parentElement) {
      if (element.parentElement.tagName && element.parentElement.tagName.toUpperCase() === 'A') return true;
      element = element.parentElement;
    }

    return false;
  }
  
  const previewWebsite = function(container, page, callback) {
    generateWebsite(false, (wFolder) => {
      const content = globalThis.document.getElementById(container);
      content.innerHTML = "<iframe id='preview-iframe' sandbox='allow-same-origin' referrerpolicy='no-referrer'></iframe>";
      
      const iframe = globalThis.document.getElementById("preview-iframe");
      iframe.contentDocument.addEventListener("click", (event) => {
        if (!event.srcElement) return;
        
        if (clickCameFromA(event.srcElement)) {
          event.preventDefault();
          let href = event.srcElement.attributes['href'];
          if (!href) href = event.srcElement.parentElement.attributes['href']; 
          let hrefValue = fixHrefValue(href.value);
          if (hrefValue.startsWith("http")) {
            return;
          }
          
          generateWebsite(false, (wf) => loadFileIntoIframe(wf, hrefValue, iframe));
        }
      });
  
      iframe.contentDocument.addEventListener("submit", (event) => {
        event.preventDefault();
      });
      
      loadFileIntoIframe(wFolder, page, iframe);

      if (callback) callback();
    });
  }

  const fixHrefValue = function(hrefValue) {
    if (hrefValue === globalThis.lb.globalVariables()['website_url'] || hrefValue === "/") {
      hrefValue = "/index.html";
    } else {
      hrefValue += globalThis.lb.dotHtmlForLinks() ? "" : ".html";
      if (hrefValue.startsWith(globalThis.lb.globalVariables()['website_url'])) {
        hrefValue = hrefValue.replace(globalThis.lb.globalVariables()['website_url'], "");
      }
    }

    return hrefValue;
  }

  const removeLogo = function() {
    const horizontalBarLogo = globalThis.document.getElementById("horizontal-bar-logo");
    horizontalBarLogo.innerHTML = "<img id='close-preview-icon' class='icon' src='images/close.svg' />";
    horizontalBarLogo.addEventListener("click", reloadPage);
    horizontalBarLogo.style['cursor'] = 'pointer';
    horizontalBarLogo.style['margin'] = '8px 0 0 20px';
  }

  const contractNavbar = function(active) {
    const navbar = globalThis.document.getElementById("vertical-navbar");
    let innerHTML = `
      <ul>
        <li class="active"><a title="Dashboard" href="index.html"><img class="icon" src="images/dashboard.svg"/></a></li>
        <li><a title="Articles" href="articles.html"><img class="icon" src="images/articles.svg"/></a></li>
        <li><a title="Series" href="series.html"><img class="icon" src="images/series.svg"/></a></li>
        <li><a title="Sections" href="sections.html"><img class="icon" src="images/sections.svg"/></a></li>
        <li><a title="Relations" href="relations.html"><img class="icon" src="images/relations.svg"/></a></li>
        <li><a title="Sources" href="sources.html"><img class="icon" src="images/sources.svg"/></a></li>
        <li><a title="Navigation" href="navbar.html"><img class="icon" src="images/navbar.svg"/></a></li>
        <li><a title="Media" href="media.html"><img class="icon" src="images/media.svg"/></a></li>
        <li><a title="Authors" href="authors.html"><img class="icon" src="images/authors.svg"/></a></li>
        <li><a title="Appearance" href="appearance.html"><img class="icon" src="images/appearance.svg"/></a></li>
        <li><a title="Templates" href="templates.html"><img class="icon" src="images/templates.svg"/></a></li>
        <li><a title="Settings" href="settings.html"><img class="icon" src="images/settings.svg"/></a></li>
      </ul>
      <a id="logo-bottom" href="https://libreblog.org"><img src="images/short-logo.svg" width="20px" /></a>
    `;
    navbar.innerHTML = innerHTML;

    const ul = navbar.getElementsByTagName("ul")[0];
    ul.style.width = "50px";
    const content = globalThis.document.getElementById("content");
    content.style['margin-left'] = "50px";
  }

  const loadFileIntoIframe = function(wFolder, path, iframe) {
    const [xmlDoc, styles] = preparePageForPreview(wFolder, path);

    const doc = iframe.contentDocument;
    doc.documentElement.innerHTML = xmlDoc.getElementsByTagName("html")[0].innerHTML;
    doc.documentElement.getElementsByTagName("head")[0].innerHTML += styles; 
    enableSearch(doc);
    enableShareButton(doc);
    formatDates(doc);
  }

  const preparePageForPreview = function(wFolder, path) {
    if (path.startsWith("/")) path = path.substring(1);
    
    let file = wFolder.getFile(path);
    if (!file) return;
    let data = file.contents;
    if (!data) return;

    const parser = new DOMParser();
    let xmlDoc = parser.parseFromString(data, "text/html");

    let styles = "";
    let cssFile = "";
    const links = xmlDoc.getElementsByTagName("link");
    for (let i = 0; i < links.length; i++) {
      if (links[i].attributes['rel'] && links[i].attributes['rel'].value === "stylesheet" &&
          links[i].attributes['href'] && links[i].attributes['href'].value.indexOf("css/") <= 1) {
        cssFile = links[i].attributes['href'].value;
        cssFile = cssFile.substring(cssFile.indexOf("css/"));
        file = wFolder.getFile(cssFile);
        if (!file) continue; // External stylesheet 
        
        data = file.contents;
        styles += createElementStr(data, "style");
      }
    }
    for (let i = links.length - 1; i >= 0; i--) {
      if (links[i].attributes['rel'] && links[i].attributes['rel'].value === "stylesheet") {
        links[i].remove();
      }
    }

    return [xmlDoc, styles];
  }

  const createElementStr = function(data, tag) {
    if (data) {
      return "<" + tag + ">" + data + "</" + tag + ">\n"; 
    }

    return "";
  }

  const formatDates = function(doc) {
    if (!doc) return;

    const itemDates = doc.getElementsByClassName("item-date");
    if (!itemDates || itemDates.length === 0) return;

    const formatDate = function(dateStr, options) {
      const dateObj = new Date(dateStr);
      const lang = globalThis.navigator && globalThis.navigator.language ? globalThis.navigator.language : "en";
      let formattedDate = new Intl.DateTimeFormat(lang, options).format(dateObj);
      if (lang.startsWith("pt")) {
        formattedDate = formattedDate.replaceAll("de ", "");
      }

      return formattedDate;
    } 

    for (let i = 0; i < itemDates.length; i++) {
      const itemDate = itemDates[i];
      if (itemDate.dateTime.split("T")[0] === new Date().toISOString().split("T")[0]) {
        itemDate.innerText = formatDate(itemDate.dateTime, { hour: 'numeric', minute: 'numeric' })  + " " + itemDate.attributes["timezone-abbreviation"].value;
      } else {
        itemDate.innerText = formatDate(itemDate.dateTime, { year: 'numeric', month: 'short', day: 'numeric' });
      }
    }
  }

  const enableSearch = function(doc) {
    if (!doc) return;
    const libreblogSearch = globalThis.lb.getLibreblogSearch();
    const searchInput = doc.getElementById("search-input");
    if (!searchInput) return;

    searchInput.addEventListener("input", (event) => {
      const wrapper = doc.getElementById("search-box-wrapper");
      if (!wrapper) return;
      let value = event.target.value;

      if (value) {
        value = globalThis.lb.generateSearchableText(value);
        let innerHTML = "<section id='search-results-box'>";
        const filtered = libreblogSearch.filter((item) => {
          //Simple search function (exact match) 
          if (item.searchable && item.searchable.includes(value) && item['in_sitemap']) return true;
          return false;
        });

        if (filtered.length === 0) {
          innerHTML = "";
        } else {
          filtered.forEach((item) => {
            const p = item.published ? item.published : item.created;
            const d = new Date(p.replace(" ", "T"));
            const lang = globalThis.navigator && globalThis.navigator.language ? globalThis.navigator.language : "en";
            const published = new Intl.DateTimeFormat(lang, {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}).format(d);
            
            innerHTML += "<article class='search-card'>" +
              "<a class='search-link' href='" + item.uri + "'>" +
              "<div class='search-title'>" + item.title + "</div>" +
              "<div class='search-published'>" + published + "</div>" +
              "<div class='search-subtitle'>" + item.subtitle + "</div>" +
              "</a>" +
              "</article>";
          });
          innerHTML += "</section>";
        }

        wrapper.innerHTML = innerHTML;
      } else {
        wrapper.innerHTML = "";
      }
    });
  }

  const enableShareButton = function(doc) {
    if (!doc) return;
    const shareButton = doc.getElementById("share-button");
    if (!shareButton) return;

    const url = shareButton.attributes["data-url"].value;
    const title = shareButton.attributes["data-title"].value;
    const data = {url: url, title: title};    
    if (globalThis.navigator.canShare && globalThis.navigator.canShare(data)) { 
      shareButton.addEventListener("click", async (event) => {
        try {
          await globalThis.navigator.share(data);
        } catch (e) {
          globalThis.console.error(e);
        }
      });
    } else {
      shareButton.style.display = "none";
    }
  }

  const showLoader = function() {
    const loaderDiv = globalThis.document.getElementById("gw-loader");
    if (!loaderDiv || loaderDiv.style.display === "flex"){
      return;
    }
    loaderDiv.style.display = "flex";
  }

  const hideLoader = function() {
    const loaderDiv = globalThis.document.getElementById("gw-loader");
    if (loaderDiv) loaderDiv.style.display = "none";
  }

  const putFolderIntoZip = function(folder, zip) {
    for (let i = 0; i < folder.children.length; i++) {
      if (folder.children[i].type === "folder") {
        const zipFolder = zip.folder(folder.children[i].name);
        putFolderIntoZip(folder.children[i], zipFolder);
      } else {
        const file = folder.getFile(folder.children[i].name);
        zip.file(file.name, file.contents);
      }
    }
  }
  
  const generateWebsite = function(downloadMode, callback) {
    if (!downloadMode && callback && globalThis.wFolder) {
      callback(globalThis.wFolder);
      return;
    }

    globalThis.lb.useSqlite(async (db) => {
      const folder = await globalThis.lb.createWebsiteFolder(db, downloadMode);

      if (downloadMode === true) {
        const zip = new JSZip();
        putFolderIntoZip(folder, zip);
        zip.generateAsync({type:"blob"}).then(function(content) {
          saveFile(content, "public_html.zip");
        });
      }

      globalThis.wFolder = folder;
      if (callback) callback(folder);
    });
  }

  const selectPageTypeHandler = function(event) {
    loadTemplates();
  }

  const selectRelationTypeHandler = function(event) {
    const type = event.currentTarget.value;
    const text = globalThis.document.getElementById("place").value;
    changePlaceInputType(type, text);
  }

  const changePlaceInputTypeFormat = function(type) {
    const option = globalThis.document.getElementById("select-datetime-format").value;

    switch (option) {
      case "year":
        globalThis.document.getElementById("place").attributes["type"].value = "number";
        break;
      case "year-month":
        globalThis.document.getElementById("place").attributes["type"].value = "month";
        break;
      case "year-month-day":
        globalThis.document.getElementById("place").attributes["type"].value = "date";
        break;
      case "complete":
        globalThis.document.getElementById("place").attributes["type"].value = "datetime-local";
        break;
      default:
    }
  }

  const detectInputType = function(text) {
    if (text.toUpperCase().indexOf("T") !== -1) {
      return "datetime-local";
    } else {
      const parts = text.split("-");
      if (parts.length === 3) {
        return "date";
      } else if (parts.length === 2) {
        return "month";
      }
    }

    return "number";
  }
  
  const changePlaceInputType = function(type, text) {
    let placeType = "number";
    let themeConfig = globalThis.lb.getThemeConfig();
    if (themeConfig && themeConfig.relations) {
      const filtered = themeConfig.relations.filter((item) => item["name"] === type);
      if (filtered.length > 0) placeType = filtered[0]["place_type"];
    }
    
    switch (placeType) {
      case "number":
        globalThis.document.getElementById("select-datetime-format-container").style.display = "none";
        globalThis.document.getElementById("place").attributes["type"].value = "number";
        globalThis.document.getElementById("place").placeholder = "A number representing the position of Article 1";
        break;
      case "date":
        globalThis.document.getElementById("select-datetime-format-container").style.display = "block";
        globalThis.document.getElementById("place").attributes["type"].value = detectInputType(text);
        globalThis.document.getElementById("place").placeholder = "Year";
        break;
      case "text":
        globalThis.document.getElementById("select-datetime-format-container").style.display = "none";
        globalThis.document.getElementById("place").attributes["type"].value = "text";
        break;
      default:
    }
  }

  const processSettingsFormField = function(id, eventType, defaultValue) {
    if (eventType === "change") {
      const element = globalThis.document.getElementById(id);
      if (element) {
        element.checked = globalThis.lb.getSetting(id) === "true";
        element.addEventListener("change", (e) => {
          globalThis.lb.setSetting(id, e.currentTarget.checked.toString());
        });
      }
    } else if (eventType === "input") {
      const element = globalThis.document.getElementById(id);
      if (element) {
        element.value = globalThis.lb.getSetting(id);
        if (!element.placeholder) element.placeholder = defaultValue;
        element.addEventListener("input", (e) => {
          globalThis.lb.setSetting(id, e.currentTarget.value);
        });
      }
    } else if (eventType === "select") {
      const element = globalThis.document.getElementById(id);
      if (element) {
        element.value = globalThis.lb.getSetting(id) ? globalThis.lb.getSetting(id) : defaultValue;
        element.addEventListener("change", (e) => {
          globalThis.lb.setSetting(id, e.currentTarget.value);
        });
      }
    } else if (eventType === "color") {
      const element = globalThis.document.getElementById(id);
      if (element) {
        element.value = globalThis.lb.getSetting(id) ? globalThis.lb.getSetting(id) : defaultValue;
        element.addEventListener("input", (e) => {
          globalThis.lb.setSetting(id, e.currentTarget.value);
        });
      }
    }
  }

  const initAppearanceFormHandlers = function() {
    const colorsArr = globalThis.lb.getThemeConfig()["colors"];
    if (colorsArr) {
      colorsArr.forEach((item) => {
        processSettingsFormField(item.name, "color", item.default);
      });
    }
  }
  
  const initSettingsFormHandlers = function() {
    processSettingsFormField("twig-inside-articles", "change", null);
    processSettingsFormField("preview-in-new-tab", "change", null);
    processSettingsFormField("rss-for-mainpage", "change", null);
    processSettingsFormField("rss-for-sections", "change", null);
    processSettingsFormField("remove-dot-html", "change", null);
    processSettingsFormField("share-button", "change", null);
    processSettingsFormField("article-in-feedback", "change", null);
    processSettingsFormField("articles-in-author-profile", "change", null);
    processSettingsFormField("website-name", "input", "");
    processSettingsFormField("website-title", "input", "");
    processSettingsFormField("website-url", "input", "");
    processSettingsFormField("img-url-prefix", "input", "");
    processSettingsFormField("feedback-uri-prefix", "input", "");
    processSettingsFormField("website-description", "input", "");
    processSettingsFormField("website-logo", "input", "");
    processSettingsFormField("website-favicon", "input", "");
    processSettingsFormField("website-language", "select", "en");
    processSettingsFormField("website-timezone", "select", "");
    processSettingsFormField("timezone-abbreviation", "input", "");
    processSettingsFormField("number-authors-references", "input", 0);
    processSettingsFormField("number-items-rss", "input", 15);
    processSettingsFormField("max-articles-mainpage", "input", 20);
    processSettingsFormField("max-articles-section-page", "input", 20);
    processSettingsFormField("max-articles-series-page", "input", 20);
    processSettingsFormField("max-articles-author-page", "input", 20);
    processSettingsFormField("max-series-mainpage", "input", 10);
    processSettingsFormField("max-series-section-page", "input", 10);
    processSettingsFormField("max-series-author-page", "input", 10);
    processSettingsFormField("head-code-snippets", "input", "");
    processSettingsFormField("footer-social-snippet", "input", "");
    processSettingsFormField("comment-box-snippet", "input", "");
    processSettingsFormField("htaccess", "input", "");

    const stringsArr = globalThis.lb.getThemeConfig()["strings"];
    if (stringsArr) {
      stringsArr.forEach((item) => {
        processSettingsFormField(item.name, "input", item.default);
      });
    }

    initSettingsEditor('user-variables', 'json', '');
    initSettingsEditor('main-js', 'javascript');
  }

  const initSettingsEditor = function(id, mode) {
    const editor = ace.edit(id, {
      mode: "ace/mode/" + mode,
      selectionStyle: "text",
      fontSize: "15px",
      showLineNumbers: !mobileScreen(),
      showGutter: !mobileScreen()
    });
    editor.setTheme("ace/theme/github_light_default");
    editor.session.setTabSize(2);
    editor.session.setUseWrapMode(true);
    editor.session.on('change', function(delta) {
      globalThis.lb.setSetting(id, editor.getValue());
    });

    const item = globalThis.lb.getSetting(id);
    if (item) {
      editor.setValue(item);
      editor.session.setUndoManager(new ace.UndoManager());
    }
  }

  const dealWithSettingsForm = function() {
    const stringsDiv = globalThis.document.getElementById("strings-div");
    const stringsArr = globalThis.lb.getThemeConfig()["strings"];
    if (!stringsArr || stringsArr.length === 0) return;

    let innerHTML = "";
    stringsArr.forEach((item) => {
      innerHTML += "<label for='" + item.name + "'>" + item.label + "</label>" +
        "<input type='text' id='" + item.name + "'><br/>";
    });

    stringsDiv.innerHTML += innerHTML;
  }

  const dealWithAppearanceForm = function() {
    const colorsDiv = globalThis.document.getElementById("colors-div");
    const colorsArr = globalThis.lb.getThemeConfig()["colors"];
    if (!colorsArr || colorsArr.length === 0) return;

    let innerHTML = "";
    colorsArr.forEach((item) => {
      innerHTML += "<div><span>" + item.label + "</span>" +
        "<input type='color' id='" + item.name + "'></div>";
    });

    colorsDiv.innerHTML += innerHTML;
  }

  const initEventHandlers = function() {
    const actionForm = globalThis.document.getElementById("action-form");
    if (actionForm) actionForm.addEventListener("submit", actionFormHandler);

    const articleForm = globalThis.document.getElementById("article-form");
    if (articleForm) {
      dealWithArticleForm();
      articleForm.addEventListener("submit", articleFormHandler);
    }

    const seriesForm = globalThis.document.getElementById("series-form");
    if (seriesForm) {
      dealWithSeriesForm();
      seriesForm.addEventListener("submit", seriesFormHandler);
    }

    const sectionForm = globalThis.document.getElementById("section-form");
    if (sectionForm) {
      dealWithSectionForm();
      sectionForm.addEventListener("submit", sectionFormHandler);
    }

    const relationForm = globalThis.document.getElementById("relation-form");
    if (relationForm) relationForm.addEventListener("submit", relationFormHandler);

    const authorForm = globalThis.document.getElementById("author-form");
    if (authorForm) {
      dealWithAuthorForm();
      authorForm.addEventListener("submit", authorFormHandler);
    }

    const navbarForm = globalThis.document.getElementById("navbar-form");
    if (navbarForm) {
      dealWithNavbarModal();
      navbarForm.addEventListener("submit", navbarFormHandler);
    }

    const mediaForm = globalThis.document.getElementById("media-form");
    if (mediaForm) {
      mediaForm.addEventListener("submit", mediaFormHandler);
    }

    const importMediaFilesInput = globalThis.document.getElementById("import-media-files-input");
    if (importMediaFilesInput) {
      importMediaFilesInput.addEventListener("change", selectMediaFiles);

      const insertMediaFilesButton = globalThis.document.getElementById("insert-media-files-btn");
      insertMediaFilesButton.addEventListener("click", insertMediaFilesButtonHandler);
    }

    const dropdownMenuIcon = globalThis.document.getElementById("dropdown-menu-icon");
    if (dropdownMenuIcon) {
      dropdownMenuIcon.addEventListener("click", dropdownMenuIconHandler);
    }

    const dropZone = globalThis.document.getElementById("drop-zone");
    if (dropZone) {
      const selectMediaFile = globalThis.document.getElementById("select-media-file");
      const mediaFileBtn = globalThis.document.getElementById("media-file-btn");
      selectMediaFile.addEventListener("change", selectMediaFileHandler);
      mediaFileBtn.addEventListener("click", mediaFileBtnHandler);
      
      dropZone.addEventListener("dragenter", dropZoneDragEnterHandler);
      dropZone.addEventListener("dragleave", dropZoneDragLeaveHandler);
      dropZone.addEventListener("dragover", dropZoneDragOverHandler);
      dropZone.addEventListener("drop", dropZoneDropHandler);
    }
    
    const filter = globalThis.document.getElementById("filter");
    if (filter) filter.addEventListener("input", filterHandler);

    const selectFilter = globalThis.document.getElementById("select-filter");
    if (selectFilter) selectFilter.addEventListener("change", selectFilterHandler);

    const dashboard = globalThis.document.getElementById("dashboard-form");
    if (dashboard) {
      fillDashboardTable();
      dashboard.addEventListener("submit", dashboardHandler);
    }

    const selectPageType = globalThis.document.getElementById("select-page-type");
    if (selectPageType) {
      dealWithSelectPageType(selectPageType);
      selectPageType.addEventListener("change", selectPageTypeHandler);
    }

    const templatesForm = globalThis.document.getElementById("templates-form");
    if (templatesForm) templatesForm.addEventListener("submit", templatesFormHandler);

    const selectRelationType = globalThis.document.getElementById("relation-type");
    if (selectRelationType) {
      dealWithSelectRelationType(selectRelationType);
      selectRelationType.addEventListener("change", selectRelationTypeHandler);
    }

    const importRisButton = globalThis.document.getElementById("import-ris-button");
    if (importRisButton) {
      dealWithSourceModal();
      importRisButton.addEventListener("click", importRisButtonHandler);
    }

    const importThemeButton = globalThis.document.getElementById("import-theme-button");
    if (importThemeButton) {
      importThemeButton.addEventListener("click", importThemeButtonHandler);
      const importThemeInput = globalThis.document.getElementById("import-theme-input");
      importThemeInput.addEventListener("change", importThemeHandler);
    }

    const referencesModal = globalThis.document.getElementById("references-modal");
    if (referencesModal) dealWithReferencesModal(referencesModal);

    const previewModal = globalThis.document.getElementById("preview-modal");
    if (previewModal) dealWithPreviewModal(previewModal);

    const mediaModal = globalThis.document.getElementById("media-modal");
    if (mediaModal) dealWithMediaModal(mediaModal);

    const addPhotoButton = globalThis.document.getElementById("add-photo");
    if (addPhotoButton) addPhotoButton.addEventListener("click", addPhotoHandler);

    const submitReferencesButton = globalThis.document.getElementById("submit-references");
    if (submitReferencesButton) {
      submitReferencesButton.addEventListener("click", insertRefSelection);
    }

    const selectDatetimeFormat = globalThis.document.getElementById("select-datetime-format");
    if (selectDatetimeFormat) {
      selectDatetimeFormat.addEventListener("change", changePlaceInputTypeFormat);
    }

    const appearanceForm = globalThis.document.getElementById("appearance-form");
    if (appearanceForm) {
      dealWithAppearanceForm();
      initAppearanceFormHandlers();
    }

    const settingsForm = globalThis.document.getElementById("settings-form");
    if (settingsForm) {
      dealWithSettingsForm();
      initSettingsFormHandlers();
      
      const rssForm = globalThis.document.getElementById("rss-form");
      dealWithRSSModal();//Call this after calling dealWithSettingsForm
      rssForm.addEventListener("submit", rssFormHandler);

      const jsonDbBtn = globalThis.document.getElementById("download-json-db");
      jsonDbBtn.addEventListener("click", jsonDbBtnHandler);

      const exportThemeZip = globalThis.document.getElementById("export-theme-zip");
      exportThemeZip.addEventListener("click", exportThemeAsZipFolder);

      const persistentStorage = globalThis.document.getElementById("persistent-storage");
      persistentStorage.addEventListener("click", persistentStorageHandler);

      const resetDefaultTheme = globalThis.document.getElementById("reset-default-theme");
      resetDefaultTheme.addEventListener("click", resetDefaultThemeHandler);
    }

    const currentPage = globalThis.document.getElementById("current-page");
    if (currentPage) {
      currentPage.addEventListener("input", setCurrentPage);

      const goToFirstPageSpan = globalThis.document.getElementById("go-to-first-page");
      const goToPreviousPageSpan = globalThis.document.getElementById("go-to-previous-page");
      const goToNextPageSpan = globalThis.document.getElementById("go-to-next-page");
      const goToLastPageSpan = globalThis.document.getElementById("go-to-last-page");
      const entriesPerPage = globalThis.document.getElementById("entries-per-page");
      goToFirstPageSpan.addEventListener("click", goToFirstPage);
      goToPreviousPageSpan.addEventListener("click", goToPreviousPage);
      goToNextPageSpan.addEventListener("click", goToNextPage);
      goToLastPageSpan.addEventListener("click", goToLastPage);
      entriesPerPage.addEventListener("change", setEntriesPerPage);
    }
  }

  const addPhotoHandler = function(event) {
    event.preventDefault();
    openMediaModal("image", (filename) => {
      const photoInput = globalThis.document.getElementById("photo");
      photoInput.value = filename;
      closeMediaModal();
    })
  }

  const dropdownMenuIconHandler = function(event) {
    event.preventDefault();
    const dropdownMenuList = globalThis.document.getElementById("dropdown-menu-list");
    if (dropdownMenuList.style['display'] === 'block') {
      dropdownMenuList.style['display'] = 'none';
      event.currentTarget.src = "images/menu.svg";
    } else {
      dropdownMenuList.style['display'] = 'block';
      event.currentTarget.src = "images/close.svg";
    }
  }

  const dropZoneDragEnterHandler = function(event) {
    event.preventDefault();
      
    const dropZone = globalThis.document.getElementById("drop-zone");
    dropZone.style.background = "LightGrey";
  }

  const dropZoneDragLeaveHandler = function(event) {
    event.preventDefault();

    const dropZone = globalThis.document.getElementById("drop-zone");
    dropZone.style.background = "";
  }

  const dropZoneDragOverHandler = function(event) {
    event.preventDefault();
  }

  const dropZoneDropHandler = function(event) {
    const dropZone = globalThis.document.getElementById("drop-zone");
    event.preventDefault();

    let file;
    if (event.dataTransfer.items) {
      const item = event.dataTransfer.items[0];
      if (item.kind === "file") {
        file = item.getAsFile();
      }
    } else if (event.dataTransfer.files) {
      file = event.dataTransfer.files[0];
    }
    
    if (file) {
      processMediaFile(file);
    }
    dropZone.style.background = "";
  }

  const currentExtension = function() {
    let fileExt;
    const uri = findParameter(globalThis.location.href, "uri");
    if (uri) fileExt = getFileExtension(uri);
    return fileExt;
  }
  
  const processMediaFile = function(file) {
    const fileExt = getFileExtension(file.name);
    if (!validateFileExtension(fileExt)) {
      globalThis.window.alert("Only supported file extensions: JPG (JPEG), PNG, APNG, GIF, SVG, ICO, WebP and AVIF.");
      return;
    }

    const currentExt = currentExtension();
    if (currentExt && fileExt !== currentExt) {
      globalThis.window.alert("When editing a media resource, you cannot change the file format.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      globalThis.mediaFile = reader.result;
    };
    reader.onerror = error => {
      globalThis.console.error(error);
      removeMediaFileHandler(null);
    }
    reader.readAsArrayBuffer(file);
        
    const sizeInput = globalThis.document.getElementById("size");
    sizeInput.value = file.size;
    const fileExtensionInput = globalThis.document.getElementById("file-extension");
    fileExtensionInput.value = fileExt;
    const selectedFile = globalThis.document.getElementById("selected-media-file");
    selectedFile.innerHTML = "<div id='selected-file-text'>Selected file:</div> <div id='filename'>" + escapeHTML(file.name) + "</div><a id='remove-media-file' class='slim-button'>Remove it</a>";
    const removeMediaFile = globalThis.document.getElementById("remove-media-file");
    removeMediaFile.addEventListener("click", removeMediaFileHandler);
    const dropZoneText = globalThis.document.getElementById("drop-zone-text");
    dropZoneText.innerHTML = "To change it, drag and drop a file here or&nbsp;&nbsp;";
    const uri = globalThis.document.getElementById("uri");
    uri.pattern = "^[a-z0-9\\-]+\\." + fileExt.toLowerCase() + "$";

    const convertBtnWrapper = globalThis.document.getElementById("convert-btn-wrapper");
    if (["JPG", "JPEG", "PNG"].includes(fileExt)) { 
      convertBtnWrapper.innerHTML = "<a id='convert-to-webp' class='slim-button'>Convert to WebP</a>";
      const convertToWebp = globalThis.document.getElementById("convert-to-webp");
      convertBtnWrapper.addEventListener("click", convertToWebpHandler);
    } else {
      convertBtnWrapper.innerHTML = "";
    }
  }

  const removeMediaFileHandler = function(event) {
    if (event) event.preventDefault();
    const sizeInput = globalThis.document.getElementById("size");
    sizeInput.value = "0";
    const fileExtensionInput = globalThis.document.getElementById("file-extension");
    fileExtensionInput.value = "";
    const selectedFile = globalThis.document.getElementById("selected-media-file");
    selectedFile.innerHTML = "";
    const dropZoneText = globalThis.document.getElementById("drop-zone-text");
    dropZoneText.innerHTML = "Drag and drop a file here or&nbsp;&nbsp;";
    const uri = globalThis.document.getElementById("uri");
    uri.pattern = "^[a-z0-9\\-]+\\.[a-z0-9]+$";
    const selectFile = globalThis.document.getElementById("select-media-file")
    selectFile.value = "";
    const convertBtnWrapper = globalThis.document.getElementById("convert-btn-wrapper");
    if (convertBtnWrapper) convertBtnWrapper.innerHTML = "";
    
    globalThis.mediaFile = null;
  }

  const validateFileExtension = function(fileExt) {
    return supported_formats.includes(fileExt);
  }

  const validateVersions = function(fileExt, versionsStr) {
    return !versionsStr || supported_version_formats.includes(fileExt);
  }

  const getFileExtension = function(filename) {
    if (!filename) return null;

    const parts = filename.split(".");
    return parts[parts.length - 1].toUpperCase();
  }

  const saveFileInMediaFolder = async function(versions) {
    if (!globalThis.mediaFile) return;
    
    const uriInput = globalThis.document.getElementById("uri");
    const uri = uriInput.value;

    await deleteMediaFileAndVersions(uri);
    await globalThis.lb.saveMediaFile(uri, globalThis.mediaFile);
    await saveMediaVersions(uri, globalThis.mediaFile, versions);
  }

  const addVersion = function(uri, version) {
    return uri.replace(".", "_" + version + ".");
  }

  const deleteMediaFileAndVersions = async function(uri) {
    const fileExt = getFileExtension(uri);

    await globalThis.lb.deleteMediaFile(uri);
    //Delete versions (if they exist)
    if (supported_version_formats.includes(fileExt)) {
      await globalThis.lb.deleteMediaFile(addVersion(uri, 'small'));
      await globalThis.lb.deleteMediaFile(addVersion(uri, 'medium'));
      await globalThis.lb.deleteMediaFile(addVersion(uri, 'large'));
    }
  }

  const saveMediaVersions = async function(uri, originalData, versions) {
    const fileExt = getFileExtension(uri);
    
    if (supported_version_formats.includes(fileExt)) {
      for (let i = 0; i < versions.length; i++) {
        const data = await createImageVersion(originalData, versions[i], uri);
        if (data) await globalThis.lb.saveMediaFile(addVersion(uri, versions[i]), data);
      }
    }
  }

  const createImageVersion = function(originalData, version, uri) {
    const img = new Image();
    const blob = new Blob([originalData], { type: getImageMimeType(uri) });
    
    let width = 400;
    if (version === "medium") {
      width = 800;
    } else if (version === "large") {
      width = 1200;  
    }

    return new Promise((resolve, _) => {
      const imageUrl = URL.createObjectURL(blob);
      img.src = imageUrl;
      
      img.onload = () => {
        const height = Math.round((img.height / img.width) * width);

        const canvas = globalThis.document.getElementById('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((versionBlob) => {
          const fileReader = new FileReader();
          fileReader.onload = function(event) {
            resolve(event.target.result);
          };
          fileReader.onerror = function(event) {
            globalThis.console.warn("Error: ", event);
            resolve(null);
          };
          fileReader.readAsArrayBuffer(versionBlob);
        }, getImageMimeType(uri));
      };

      img.onerror = (event) => {
        globalThis.console.warn("Error: ", event);
        resolve(null);
      }
    });
  }

  const convertToWebpHandler = function(event) {
    event.preventDefault();
    convertMediaFileToFormat("image/webp");
  }

  const convertMediaFileToFormat = function(format) {
    const img = new Image();
    const filenameDiv = globalThis.document.getElementById("filename");
    const oldName = filenameDiv.innerText;
    const blob = new Blob([globalThis.mediaFile], { type: getImageMimeType(oldName) });

    const imageUrl = URL.createObjectURL(blob);
    img.src = imageUrl;

    img.onload = () => {
      const canvas = globalThis.document.getElementById('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const dataURL = canvas.toDataURL(format);
      canvas.toBlob((newBlob) => {
        const fileReader = new FileReader();
        
        fileReader.onload = function(event) {
          const pos = oldName.lastIndexOf(".");
          const newName = oldName.substring(0, pos) + ".webp";
          const newBlob = new Blob([event.target.result], { type: format });
          const newFile = new File([newBlob], newName, { type: format });
          processMediaFile(newFile);
        };
        fileReader.onerror = function(event) {
          globalThis.console.warn("Error: ", event);
        };
        fileReader.readAsArrayBuffer(newBlob);
      }, format);
    };

    img.onerror = (event) => {
      globalThis.console.warn("Error: ", event);
    }
  }

  const getImageMimeType = function(uri) {
    const fileExt = getFileExtension(uri);
    if (fileExt === 'JPG' || fileExt === 'JPEG') return "image/jpeg";
    if (fileExt === 'PNG') return "image/png";
    if (fileExt === 'WEBP') return "image/webp";
    if (fileExt === 'SVG') return "image/svg+xml";
    if (fileExt === 'GIF') return "image/gif";
    if (fileExt === 'AVIF') return "image/avif";
    if (fileExt === 'BMP') return "image/bmp";
    if (fileExt === 'APNG') return "image/apng";
    if (fileExt === 'ICO') return "image/vnd.microsoft.icon";
    return "";    
  }

  const selectMediaFileHandler = function(event) {
    event.preventDefault();
    
    var file = event.target.files[0];
    if (file) processMediaFile(file);
  }

  const mediaFileBtnHandler = function(event) {
    event.preventDefault();
    
    const selectMediaFile = globalThis.document.getElementById("select-media-file");
    selectMediaFile.click();
  }

  const loadMediaFile = async function(filename) {
    const response =  await globalThis.lb.getMediaFile(filename);
    if (response.type === "error") return;
    
    const url = response.result.url;
    globalThis.mediaFile = response.result.data;
    
    const storedFile = globalThis.document.getElementById("selected-media-file");
    storedFile.innerHTML = "<div id='selected-file-text'>Stored file:</div> <div id='filename'><a href='" + url + "' target='_blank'>" + filename + "</a></div><a id='remove-media-file' class='slim-button'>Remove it</a>";
    const removeMediaFile = globalThis.document.getElementById("remove-media-file");
    removeMediaFile.addEventListener("click", removeMediaFileHandler);
    const dropZoneText = globalThis.document.getElementById("drop-zone-text");
    dropZoneText.innerHTML = "To change it, drag and drop a file here or&nbsp;&nbsp;";
  }

  const fillDashboardTable = function() {
    const articlesCell = globalThis.document.getElementById("articles-cell");
    const seriesCell = globalThis.document.getElementById("series-cell");
    const sectionsCell = globalThis.document.getElementById("sections-cell");
    const relationsCell = globalThis.document.getElementById("relations-cell");
    const sourcesCell = globalThis.document.getElementById("sources-cell");
    const navbarCell = globalThis.document.getElementById("navbar-cell");
    const authorsCell = globalThis.document.getElementById("authors-cell");
    const themesCell = globalThis.document.getElementById("themes-cell");
    const mediaFilesCell = globalThis.document.getElementById("media-files-cell");
    const filesSizeCell = globalThis.document.getElementById("files-size-cell");
    
    const articlesLabel = globalThis.document.getElementById("articles-label");
    const seriesLabel = globalThis.document.getElementById("series-label");
    const sectionsLabel = globalThis.document.getElementById("sections-label");
    const relationsLabel = globalThis.document.getElementById("relations-label");
    const sourcesLabel = globalThis.document.getElementById("sources-label");
    const navbarLabel = globalThis.document.getElementById("navbar-label");
    const authorsLabel = globalThis.document.getElementById("authors-label");
    const themesLabel = globalThis.document.getElementById("themes-label");
    const mediaFilesLabel = globalThis.document.getElementById("media-files-label");
    const filesSizeLabel = globalThis.document.getElementById("files-size-label");

    insertRowCount("articles", "*", articlesCell, articlesLabel);
    insertRowCount("series", "*", seriesCell, seriesLabel);
    insertRowCount("sections", "*", sectionsCell, sectionsLabel);
    insertRowCount("relations", "*", relationsCell, relationsLabel);
    insertRowCount("sources", "*", sourcesCell, sourcesLabel);
    insertRowCount("navbar_items", "*", navbarCell, navbarLabel);
    insertRowCount("authors", "*", authorsCell, authorsLabel);
    insertRowCount("templates", "DISTINCT theme_uri", themesCell, themesLabel);
    insertMediaFilesInfo(mediaFilesCell, mediaFilesLabel, filesSizeCell);
  }

  const insertRowCount = function (table, fields, element, label) {
    globalThis.lb.useSqlite(async (db) => {
      let resultRows = await db.exec({
        sql: "SELECT COUNT(" + fields + ") FROM " + table,
        rowMode: 'array'
      }, {cached_select: true});

      if (!resultRows || !resultRows[0]) {
        globalThis.console.error("Database error");
        return;
      }

      const count = resultRows[0][0];
      element.innerText = count;
      
      if (count === 1 && label.innerText !== "series") {
        label.innerText = label.innerText.slice(0, -1); 
      }
    });
  }

  const insertMediaFilesInfo = async function (mediaFilesCell, mediaFilesLabel, filesSizeCell) {
    let count = 0;
    let sum = 0;
    
    const response = await globalThis.lb.listMediaFilesWithSize();
    if (response.type !== "error") { 
      for (let i = 0; i < response.result.length; i++) {
        const file = response.result[i];
        sum += file.size;
        count++;
      }

      mediaFilesCell.innerText = count;
      filesSizeCell.innerText = Math.round(sum / (1024*1024));
      if (count === 1) {
        mediaFilesLabel.innerText = mediaFilesLabel.innerText.slice(0, -1); 
      }
    } else {
      mediaFilesCell.innerText = "-";
      filesSizeCell.innerText = "-";
    }
  }

  const dealWithSelectPageType = function(selectPageType) {
    const config = globalThis.lb.getThemeConfig();
    const pages = config["pages"];
    const pageComponents = config["page_components"];
    if (!pages || !pageComponents) {
      globalThis.console.warn("Theme improperly configured");
      return;
    }
    
    const articles = pages.filter((item) => item["type"] === "article");
    const other = pages.filter((item) => item["type"] !== "article");

    other.forEach((item) => {
      selectPageType.innerHTML += "<option value='" + item["name"] + "'>" + item["label"] + "</option>"
    }); 

    selectPageType.innerHTML += "<option disabled>Type: Article</option>";

    articles.forEach((item) => {
      selectPageType.innerHTML += "<option value='" + item["name"] + "'>" + item["label"] + "</option>"
    });

    selectPageType.innerHTML += "<option disabled>Components</option>";

    pageComponents.forEach((item) => {
      selectPageType.innerHTML += "<option value='" + item["name"] + "'>" + item["label"] + "</option>"
    });
  }

  const dealWithType = function(ty) {
    const pages = globalThis.lb.getThemeConfig()["pages"];
    if (!pages) {
      globalThis.console.warn("Theme improperly configured");
      return;
    }
    
    const types = pages.filter((item) => item["type"] === ty);
    const typeSelect = globalThis.document.getElementById("type");

    let counter = 0;
    for (let i = 0; i < types.length; i++, counter++) {
      typeSelect.innerHTML += "<option value='" + types[i]["name"] +"'>" 
        + types[i]["label"] + "</option>";
    }

    const typeLabel = globalThis.document.getElementById("type-label");
    if (counter <= 1) {
      typeSelect.style.display = "none";
      typeLabel.style.display = "none";

      if (counter === 1) {
        const elements = typeSelect.getElementsByTagName("option");
        elements[elements.length - 1].selected = true;
      }
    } else {
      typeSelect.style.display = "block";
      typeLabel.style.display = "block";
    }
  }

  const dealWithArticleForm = function() {
    dealWithType("article");

    if (globalThis.lb.getSetting("comment-box-snippet")) {
      const enableComments = globalThis.document.getElementById("enable-comments");
      const enableCommentsLabel = globalThis.document.getElementById("enable-comments-label");
      enableComments.style.display = "inline";
      enableCommentsLabel.style.display = "inline";
    }
  }
  
  const dealWithSeriesForm = function() {
    dealWithType("series");
  }
  
  const dealWithSectionForm = function() {
    dealWithType("section");
  }
  
  const dealWithAuthorForm = function() {
    dealWithType("author");
  }
  
  const dealWithSelectRelationType = function(selectRelationType) {
    const themeConfig = globalThis.lb.getThemeConfig();
    if (!themeConfig.relations) {
      globalThis.console.warn("Theme configuration file without the field 'relations'");
      return;
    }
    
    const relations = themeConfig.relations;
    for (let i = 0; i < relations.length; i++) {
      selectRelationType.innerHTML += "<option value='" + relations[i]["name"] + "'>" + 
        relations[i]['label'] + "</option>";
    }
  }
  
  const openReferencesModal = function() {
    const modal = globalThis.document.getElementById("references-modal");
    modal.style.display = "flex";
  }

  const openPreviewModal = function(pagePath) {
    const modal = globalThis.document.getElementById("preview-modal");
    modal.style.display = "flex";
    
    previewWebsite('preview-container', pagePath, null);
  }

  const openPreviewWindow = function(pagePath) {
    const newTab = window.open();
    const doc = newTab.document;
    
    const loadPage = (d, pP) => generateWebsite(false, (wF) => {
      const [xmlDoc, styles] = preparePageForPreview(wF, pP);
      d.documentElement.innerHTML = xmlDoc.getElementsByTagName("html")[0].innerHTML;
      d.documentElement.getElementsByTagName("head")[0].innerHTML += styles;
      enableSearch(d);
      enableShareButton(d);
      formatDates(d);
    });

    loadPage(doc, pagePath);

    doc.addEventListener("click", (event) => {
      if (!event.target) return;
      
      if (clickCameFromA(event.target)) {
        event.preventDefault();
        let href = event.target.attributes['href'];
        if (!href) href = event.target.parentElement.attributes['href']; 
        let hrefValue = fixHrefValue(href.value);
        if (hrefValue.startsWith("http")) {
          return;
        }
        
        loadPage(doc, hrefValue);
      }
    });

    doc.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }

  const openMediaModal = function(type, callback) { //the type is always "image" for now
    const modal = globalThis.document.getElementById("media-modal");
    modal.style.display = "flex";
    
    fillMediaContainer(callback);
  }

  const fillMediaContainer = async function(callback) {
    const mediaContainer = globalThis.document.getElementById("media-container");
    const response = await globalThis.lb.listMediaFiles();
    if (response.type !== "error") { 
      response.result.forEach((item) => {
        if (!item.name.includes("_")) {
          mediaContainer.innerHTML += `
          <div class="media-item" filename="${item['name']}">
            <div class="media-item-content">
              <div class="img-container">
                <img src="${item['url']}" alt="${item['name']}" loading="lazy">
              </div>
              <div class="media-item-name">${item['name']}</div>
            </div>
          </div>`;
        }
      });
    } else {
      mediaContainer.innerHTML = "<em>An error occurred while loading the files</em>";
    }

    const elements = mediaContainer.getElementsByClassName("media-item");
    const items = Array.from(elements); 
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("click", (event) => {
        callback(items[i].attributes['filename'].value);
      });
    }
  }

  const insertRefSelection = function(event) {
    event.preventDefault();
    
    let refsStr = "";
    const checkboxes = getAllVisibleCheckboxes();
    for (let checkbox in checkboxes) {
      if (checkboxes[checkbox].checked) {
        refsStr += "{{r('" + checkboxes[checkbox].value + "',a)}}";
      }
    }

    const modal = globalThis.document.getElementById("references-modal");
    modal.style.display = "none";
    uncheckCheckboxes();

    globalThis.thisEditor.insert(refsStr);
    globalThis.thisEditor.focus();
  }

  const dealWithReferencesModal = function(modal) {
    const closeReferecesModal = globalThis.document.getElementById("close-references-modal");
    closeReferecesModal.addEventListener("click", (event) => {
      modal.style.display = "none";
      uncheckCheckboxes();
    });

    globalThis.window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        uncheckCheckboxes();
      }
    });
  }

  const dealWithPreviewModal = function(modal) {
    const closePreviewModal = globalThis.document.getElementById("close-preview-modal");
    const previewContainer = globalThis.document.getElementById("preview-container");
    const loaderDiv = globalThis.document.getElementById("gw-loader");
    loaderDiv.style.display = "flex";
    loaderDiv.style.width = "100%";
    loaderDiv.style.height = "80vh";
    
    const loaderHTML = `<div id="gw-loader" class="loader-container-wrapper">
        <div class="loader-container">
          <span>Wait...</span>
          <span class="loader"></span>
        </div>
      </div>`;
      
    closePreviewModal.addEventListener("click", (event) => {
      modal.style.display = "none";
      previewContainer.innerHTML = loaderHTML;
    });

    globalThis.window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        previewContainer.innerHTML = loaderHTML;
      }
    });
  }

  const closeMediaModal = function() {
    const mediaModal = globalThis.document.getElementById("media-modal");
    const mediaContainer = globalThis.document.getElementById("media-container");
    mediaModal.style.display = "none";
    mediaContainer.innerHTML = "";
  }

  const dealWithMediaModal = function(modal) {
    const closeButton = globalThis.document.getElementById("close-media-modal");
    const mediaContainer = globalThis.document.getElementById("media-container");
    const filenameFilter = globalThis.document.getElementById("filename-filter");
      
    closeButton.addEventListener("click", closeMediaModal);

    globalThis.window.addEventListener("click", (event) => {
      if (event.target === modal) closeMediaModal();
    });

    filenameFilter.addEventListener("input", (event) => {
      const text = event.currentTarget.value;
      const elements = mediaContainer.getElementsByClassName("media-item");
      const items = Array.from(elements); 
      items.forEach((item) => {
        if (!text) {
          item.style.display = "grid";
        } else if (item.attributes['filename'].value.includes(text)) {
          item.style.display = "grid";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

  const importRisButtonHandler = function(event) {
    event.preventDefault();
    
    const importRisInput = globalThis.document.getElementById("import-ris-input");
    importRisInput.click();
  }
  
  const loadSelects = async function(table, db) {
    let resultRows;
    switch (table) {
      case "articles":
        resultRows = await db.exec({
          sql: "SELECT uri FROM series",
          rowMode: 'array'
        }, {cached_select: true});

        if (resultRows.length === 0) {
          const createOneSeries = globalThis.document.getElementById("create-one-series");
          createOneSeries.style.display = "inline";
        }

        for (let i = 0; i < resultRows.length; i++) {
          let row = resultRows[i];
          const option = globalThis.document.createElement("option");
          option.value = row[0];
          option.innerText = row[0];
          globalThis.document.getElementById("series-uri").appendChild(option);
        } //Without break
      case "series":
        resultRows = await db.exec({
          sql: "SELECT uri FROM sections",
          rowMode: 'array'
        }, {cached_select: true});

        if (resultRows.length === 0) {
          const createOneSection = globalThis.document.getElementById("create-one-section");
          createOneSection.style.display = "inline";
        }

        for (let i = 0; i < resultRows.length; i++) {
          let row = resultRows[i];
          const option = globalThis.document.createElement("option");
          option.value = row[0];
          option.innerText = row[0];
          globalThis.document.getElementById("section-uri").appendChild(option);
        }
        break;
      case "relations":
        resultRows = await db.exec({
          sql: "SELECT uri, type FROM articles",
          rowMode: 'array'
        }, {cached_select: true});

        for (let i = 0; i < resultRows.length; i++) {
          let row = resultRows[i];
          
          const option1 = globalThis.document.createElement("option");
          option1.value = row[0];
          option1.innerText = row[0];
          globalThis.document.getElementById("article1").appendChild(option1);

          const option2 = globalThis.document.createElement("option");
          option2.value = row[0];
          option2.innerText = row[0];
          globalThis.document.getElementById("article2").appendChild(option2);
        }
        break;
      default:
    }

    if (["articles", "series", "sections", "relations"].includes(table)) {
      resultRows = await db.exec({
        sql: "SELECT uri FROM authors",
        rowMode: 'array'
      }, {cached_select: true});

      if (resultRows.length === 0) {
        const addOneAuthor = globalThis.document.getElementById("add-one-author");
        addOneAuthor.style.display = "inline";
      }

      for (let i = 0; i < resultRows.length; i++) {
        let row = resultRows[i];
        const option = globalThis.document.createElement("option");
        option.value = row[0];
        option.innerText = row[0];
        globalThis.document.getElementById("authors").appendChild(option);
      }
    }
  }
  
  const getContents = function (table, callback) {
    const uri = findParameter(globalThis.location.href, "uri");
    
    globalThis.lb.useSqlite(async (db) => {
      await loadSelects(table, db);

      if (uri) {
        let resultRows = await db.exec({
          sql: "SELECT * FROM " + table + " WHERE uri = '" + uri + "'",
          rowMode: 'object'
        });

        callback(resultRows[0]);        
      } else {
        callback();
      }
    });
  }

  const findParameter = function(url, parameterName) {
    let tmp = [];
    let parameters = url.split("?");

    if (parameters[1]) {
      let items = parameters[1].split("&");
      for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) {
          return decodeURIComponent(tmp[1]);
        }
      }
    }
    return null;
  }

  const getTableFromEditPage = function(page) {
    switch (page) {
      case "article-edit":
        return "articles";
      case "series-edit":
        return "series";
      case "section-edit":
        return "sections";
      case "relation-edit":
        return "relations";
      case "author-edit":
        return "authors";
      case "media-edit":
        return "media";
      default:
        return null;
    }
  }

  const getEditPageFromTable = function(table) {
    switch (table) {
      case "articles":
        return "article-edit";
      case "series":
        return "series-edit";
      case "sections":
        return "section-edit";
      case "relations":
        return "relation-edit";
      case "authors":
        return "author-edit";
      case "media":
        return "media-edit";  
      default:
        return null;
    }
  }

  const setFormFields = function(...args) {
    for (let arg in args) {
      if (args[arg][2] === "checkbox") {
        globalThis.document.getElementById(args[arg][0]).checked = args[arg][1] === 1;
      } else if (args[arg][2] === "select-multiple" && args[arg][1] && args[arg][1].length > 0) {
        const select = globalThis.document.getElementById(args[arg][0]);
        const selectedValues = args[arg][1].split(",");
        for (let i = 0; i < select.options.length; i++) {
          select.options[i].selected = selectedValues.indexOf(select.options[i].value) >= 0;
        }
      } else {
        globalThis.document.getElementById(args[arg][0]).value = args[arg][1];
      }
    }
  }

  const thisPage = function() {
    const url = globalThis.location.href;
    const parts = url.split('/');
	if (parts[parts.length - 1] === '') {
	  return "index";
	}	
	  
    return parts[parts.length - 1].split(".html")[0];
  }

  const loadTemplates = function(){
    const templateOption = globalThis.document.getElementById("select-page-type").value;
    if (!templateOption) return;
    
    globalThis.lb.useSqlite(async (db) => {
      let resultRows = await db.exec({
        sql: "SELECT template_uri, contents FROM templates WHERE theme_uri = 'current' and template_uri LIKE '" + templateOption + "_%'",
        rowMode: 'object'
      });

      if (resultRows && resultRows.length >= 2){
        const editorCSS = globalThis.thisEditorCSS;
        const editorHTML = globalThis.thisEditorHTML;

        for (let i = 0; i < resultRows.length; i++) {
          if (resultRows[i]["template_uri"] === templateOption + "_css") {
            editorCSS.setValue(resultRows[i]["contents"]);
            editorCSS.session.setUndoManager(new ace.UndoManager());
          } else if (resultRows[i]["template_uri"] === templateOption + "_html") {
            editorHTML.setValue(resultRows[i]["contents"]);
            editorHTML.session.setUndoManager(new ace.UndoManager());
          }
        }
      }
    });
  }

  const initEditorsForTemplatesPage = function() {
    const editorHTML = ace.edit('editor-html', {
        mode: "ace/mode/twig",
        selectionStyle: "text",
        fontSize: "15px",
        showLineNumbers: !mobileScreen(),
        showGutter: !mobileScreen()
    });
    editorHTML.setTheme("ace/theme/github_light_default");
    editorHTML.session.setTabSize(2);
    editorHTML.session.setUseWrapMode(true);
    globalThis.thisEditorHTML = editorHTML;
    
    const editorCSS = ace.edit('editor-css', {
        mode: "ace/mode/css",
        selectionStyle: "text",
        fontSize: "15px",
        showLineNumbers: !mobileScreen(),
        showGutter: !mobileScreen()
    });
    editorCSS.setTheme("ace/theme/github_light_default");
    editorCSS.session.setTabSize(2);
    editorCSS.session.setUseWrapMode(true);
    globalThis.thisEditorCSS = editorCSS;

    editorHTML.commands.addCommand({
      name: 'save_template',
      bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
      exec: (editor) => templatesFormHandler()
    });

    editorCSS.commands.addCommand({
      name: 'save_template',
      bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
      exec: (editor) => templatesFormHandler()
    });
    
    loadTemplates();
  }

  const capitalizeFirstLetter = function(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  const loadThemes = function() {
    const themesDiv = globalThis.document.getElementById("themes");
    if (!themesDiv) return;
    
    globalThis.lb.useSqlite(async (db) => {
      let resultRows = await db.exec({
        sql: "SELECT theme_uri, contents FROM templates WHERE template_uri = 'image'",
        rowMode: 'object'
      });

      if (resultRows && resultRows.length > 0) {
        let themes = [];
        for (let i = 0; i < resultRows.length; i++) {
          const theme = resultRows[i]['theme_uri'];
          const image = resultRows[i]['contents'];
          if (theme === "current") continue;
          
          themesDiv.innerHTML += "<div class='theme-card'><span>" + capitalizeFirstLetter(theme) + "</span>" + 
          "<image src='" + image + "' /><div class='theme-buttons-div'>" + 
          "<button id='bn-" + theme + "' value='" + theme + "'>Use this one </button>" +
          (theme === "default" ? "" : " <button id='del-" + theme + "' value='" +
          theme + "'>Remove</button>") +
          "</div></div>";

          themes.push(theme);
        }

        for (let i = 0; i < themes.length; i++) {
          const bn = globalThis.document.getElementById("bn-" + themes[i]);
          bn.addEventListener("click", useThemeHandler);
          
          if (themes[i] === "default") continue; 
          
          const bn2 = globalThis.document.getElementById("del-" + themes[i]);
          bn2.addEventListener("click", deleteThemeHandler);
        }
      }
    });
  }

  const jsonDbBtnHandler = function(event) {
    event.preventDefault();
    generateJsonDb();
  }

  const persistentStorageHandler = function(event) {
    event.preventDefault();
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().then((persistent) => {
        if (persistent) {
          globalThis.window.alert("Persistent storage enabled.");
        } else {
          globalThis.window.alert("Persistent storage could not be enabled in this browser.");
        }
      });
    }
  }

  const resetDefaultThemeHandler = function(event) {
    event.preventDefault();
    deleteTheme("default", () => {
      globalThis.lb.useSqlite(async (db) => {
        await insertThemeFromObject(db, default_theme, "default");
        globalThis.window.alert("Default theme successfully reset.");
      });
    });
  }

  const importThemeButtonHandler = function(event) {
    event.preventDefault();
    const importThemeInput = globalThis.document.getElementById("import-theme-input");
    importThemeInput.click();
  }

  const loadTheme = function(theme) {
    const themeUri = globalThis.window.prompt("Choose a name for the theme.", theme["theme_uri"]);
    globalThis.lb.useSqlite(async (db) => {
      await insertThemeFromObject(db, theme, themeUri ? themeUri : theme["theme_uri"]);
      reloadPage();
    });
  }

  const importThemeHandler = function(event) {
    let file = event.target.files[0];
    if (!file | !file.name) return;
    
    if (file.name.toUpperCase().endsWith('.JSON')) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (reader.result) {
          try {
            const theme = JSON.parse(reader.result);
            loadTheme(theme);
          } catch (e) {
            globalThis.window.alert("It was not possible to load this JSON file.");
          }
        }
      });

      reader.readAsText(file);
    } else {
      globalThis.window.alert('The only supported file extension is JSON.');
    }
  }

  const deleteThemeHandler = function(e) {
    e.preventDefault();
    const ok = globalThis.window.confirm("Are you sure?");
    if (!ok) return;
    
    const uri = e.currentTarget.value;
    deleteTheme(uri, reloadPage)
  }

  const deleteTheme = function(uri, callback) {
    globalThis.lb.useSqlite(async (db) => {
      await db.exec({
        sql: "DELETE FROM templates WHERE theme_uri = '" + uri + "'"
      });

      if (callback) callback();
    });
  }

  const useThemeHandler = function(e) {
    e.preventDefault();
    const ok = globalThis.window.confirm("All your changes to the current theme (including RSS templates) will be deleted.");
    if (!ok) return;
    const themeUri = e.currentTarget.value;

    deleteTheme("current", () => {
      globalThis.lb.useSqlite(async (db) => {
        const theme = await createThemeObjectFromDb(db, themeUri);
        await insertThemeFromObject(db, theme, "current");
        await globalThis.lb.setThemeConfig(theme["config"]);
        reloadPage();
      });
    });
  }

  const loadContents = function(row) {
    if (!row) return;
    const page = thisPage();

    if (page !== "media-edit") {
      globalThis.thisEditor.setValue(row["contents"]);
      globalThis.thisEditor.session.setUndoManager(new ace.UndoManager());
    } else {
      loadMediaFile(row["uri"]);
    }

    switch (page) {
      case "article-edit":
        setFormFields(["uri", row["uri"]], ["title", row["title"]], ["subtitle", row["subtitle"]], ["label", row["label"]], ["type", row["type"]],["section-uri", row["section_uri"]], ["series-uri", row["series_uri"]], ["highlight-mainpage", row["highlight_mainpage"], "checkbox"], ["highlight-section", row["highlight_section"], "checkbox"], ["in-sitemap", row["in_sitemap"], "checkbox"], ["authors", row["authors_ids"], "select-multiple"], ["photo", row["photo"]], ["photo-info", row["photo_info"]], ["geolocation", row["geolocation"]], ["keywords", row["keywords"]], ["notes", row["notes"]], ["summary", row["summary"]], ["language", row["language"]], ["enable-comments", row["enable_comments"], "checkbox"], ["video", row["video"]], ["video-info", row["video_info"]], ["audio", row["audio"]], ["audio-info", row["audio_info"]], ["editorial-notes", row["editorial_notes"]], ["published", row["published"]], ["status", row["status"]]);
        break;
      case "series-edit":
        setFormFields(["uri", row["uri"]], ["title", row["title"]], ["subtitle", row["subtitle"]], ["highlight-mainpage", row["highlight_mainpage"], "checkbox"], ["section-uri", row["section_uri"]], ["highlight-section", row["highlight_section"], "checkbox"], ["in-sitemap", row["in_sitemap"], "checkbox"], ["authors", row["authors_ids"], "select-multiple"], ["photo", row["photo"]], ["photo-info", row["photo_info"]], ["keywords", row["keywords"]], ["published", row["published"]], ["status", row["status"]]);
        break;
      case "section-edit":
        setFormFields(["uri", row["uri"]], ["title", row["title"]], ["description", row["description"]], ["keywords", row["keywords"]], ["authors", row["authors_ids"], "select-multiple"]);
        break;
      case "relation-edit":
        changePlaceInputType(row["type"], row["place"]);
        setFormFields(["uri", row["uri"]], ["article1", row["article1"]], ["article2", row["article2"]], ["relation-type", row["type"]], ["place", row["place"]], ["title", row["title"]], ["photo", row["photo"]], ["photo-info", row["photo_info"]], ["authors", row["authors_ids"], "select-multiple"]);
        break;
      case "author-edit":
        setFormFields(["uri", row["uri"]], ["name", row["name"]], ["contact", row["contact"]], ["location", row["location"]], ["photo", row["photo"]], ["bio", row["bio"]], ["email", row["email"]]);
        break;
      case "media-edit":
        setFormFields(["uri", row["uri"]], ["file-extension", row["file_extension"]], ["size", row["size"]], ["type", row["type"]], ["title", row["title"]], ["alt-text", row["alt_text"]], ["info", row["info"]], ["versions", row["versions"], "select-multiple"]);
        break;  
      default:
    }

    globalThis.document.getElementById("uri").disabled = true;
    globalThis.document.getElementById("updated-div").innerHTML = "<img src='images/info.svg'/> Last updated on " + row["updated"];
    globalThis.document.getElementById("updated-div").style.display = "block";
  }

  const currentPagePath = function() {
    const page = thisPage();
    let folder = "";
    switch(page) {
      case "article-edit":
        folder = "articles/";
        break;
      case "series-edit":
        folder = "series/";
        break;
      case "section-edit":
        folder = "sections/";
        break;
      case "author-edit":
        folder = "authors/";
        break;
      default:
    }
    
    const uri = findParameter(globalThis.location.href, "uri");
    const path = uri ? folder + uri + ".html" : null;

    return [page, path];
  }

  const addToolbar = function(editor) {
    const buildDom = ace.require("ace/lib/dom").buildDom;
    const [page, pagePath] = currentPagePath();
    let hasRef = false, hasPrev = false;
    let refs = {};

    const buttons = [["button", {
                ref: "boldButton",
                onclick: () => {
                  editor.insertSnippet("**${1:$SELECTION}**");
                  editor.renderer.scrollCursorIntoView();
                  editor.focus();
                }
              }, ""],
              ["button", {
                ref: "italicButton",
                onclick: () => {
                  editor.insertSnippet("*${1:$SELECTION}*");
                  editor.renderer.scrollCursorIntoView();
                  editor.focus();
                }
              }, ""],
              ["button", {
                ref: "headingButton",
                onclick: () => {
                  const cursorPosition = editor.getCursorPosition();
                  const line = editor.getSession().getLine(cursorPosition.row);
                  const lineText = editor.getSession().getLine(cursorPosition.row);
                  if (lineText.startsWith("###### ")) {
                    editor.getSession().replace({
                      start: { row: cursorPosition.row, column: 0 },
                      end: { row: cursorPosition.row, column: 7 }
                    }, "");
                  } else if (lineText.startsWith("#")) {
                    editor.getSession().insert({ row: cursorPosition.row, column: 0 }, "#");
                  } else {
                    editor.getSession().insert({ row: cursorPosition.row, column: 0 }, "# ");
                  }

                  editor.focus();
                }
              }, ""],
              ["button", {
                ref: "undoButton",
                onclick: () => {
                  editor.undo();
                }
              }, ""],
              ["button", {
                ref: "imageButton",
                onclick: () => openMediaModal("image", (filename) => {
                  editor.insert("{{img('" + filename + "',a)}}");
                  closeMediaModal();
                  editor.focus();
                })
              }, ""]];
              
    if (page === 'article-edit') {
      buttons.push(["button", {
                ref: "referenceButton",
                onclick: openReferencesModal
              }, ""]);
      hasRef = true;
    }

    if (page !== 'relation-edit' && pagePath) {
      buttons.push(["button", {
                ref: "previewButton",
                onclick: () => {
                  if (globalThis.lb.getSetting("preview-in-new-tab") === 'true') {
                    openPreviewWindow(pagePath);
                  } else {
                    openPreviewModal(pagePath);
                  }
                }
              }, ""]);
      hasPrev = true;
    }

    buttons.push(["button", {
                ref: "saveButton",
                onclick: () => {
                  globalThis.document.getElementById("save").click();
                }
              }, ""]);

    const disposableToolbar = globalThis.document.getElementById("disposable-toolbar");
    disposableToolbar.remove();          
    
    buildDom(["div", { class: "toolbar" }, ...buttons], globalThis.document.getElementById('editor-toolbar'), refs);

    refs.boldButton.innerHTML = "<img src='images/bold.svg'/>";
    refs.italicButton.innerHTML = "<img src='images/italic.svg'/>";
    refs.headingButton.innerHTML = "<img src='images/heading.svg'/>";
    refs.undoButton.innerHTML = "<img src='images/undo.svg'/>";
    if (hasRef) refs.referenceButton.innerHTML = "<img src='images/reference.svg'/>";
    refs.imageButton.innerHTML = "<img src='images/image.svg'/>";
    if (hasPrev) refs.previewButton.innerHTML = "<img src='images/preview.svg'/>";
    refs.saveButton.innerHTML = "<img src='images/save.svg'/>";
  }

  const initEditor = function() {
    const page = thisPage();
    if (page === "templates") {
      initEditorsForTemplatesPage();
      return;
    } else if (page === "appearance") {
      loadThemes();
      return;
    }

    const table = getTableFromEditPage(page);
    if (!table) return;

    if (table === "media") {
      getContents(table, loadContents);
      return;
    }

    const twig = globalThis.lb.getSetting("twig-inside-articles") === 'true';
    if (twig) createCustomMode();
    
    const editor = ace.edit('editor', {
        mode: twig ? "ace/mode/custom" : "ace/mode/markdown",
        selectionStyle: "text",
        enableSnippets: true,
        fontSize: "15px",
        showLineNumbers: !mobileScreen(),
        showGutter: !mobileScreen()
    });
    editor.session.setTabSize(2);
    editor.session.setUseWrapMode(true);
    editor.setTheme("ace/theme/github_light_default");

    editor.commands.addCommand({
      name: 'Save Article',
      bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
      exec: (cm) => {
        globalThis.document.getElementById("save").click();
      }
    });

    editor.commands.addCommand({
      name: 'Bold',
      bindKey: {win: 'Ctrl-B',  mac: 'Command-B'},
      exec: (cm) => {
        editor.insertSnippet("**${1:$SELECTION}**");
        editor.renderer.scrollCursorIntoView();
        editor.focus();
      }
    });

    editor.commands.addCommand({
      name: 'Italic',
      bindKey: {win: 'Ctrl-I',  mac: 'Command-I'},
      exec: (cm) => {
        const range = editor.getSelectionRange();
        editor.insertSnippet("*${1:$SELECTION}*");
        editor.renderer.scrollCursorIntoView();
        editor.focus();
      }
    });

    if (page === 'article-edit') {
      editor.commands.addCommand({
        name: 'Insert Reference',
        bindKey: {win: 'Ctrl-R',  mac: 'Command-R'},
        exec: openReferencesModal
      });
    }

    addToolbar(editor);
    globalThis.thisEditor = editor;
    getContents(table, loadContents);
  }

  const createCustomMode = function() {
    ace.define('ace/mode/custom', function(require, exports, module) {
      const oop = ace.require("ace/lib/oop");
      const MarkdownMode = ace.require("ace/mode/markdown").Mode;
      const CustomHighlightRules = ace.require("ace/mode/custom_highlight_rules").CustomHighlightRules;

      const Mode = function() {
        this.HighlightRules = CustomHighlightRules;
      };
      oop.inherits(Mode, MarkdownMode);

      (function() {}).call(Mode.prototype);

      exports.Mode = Mode;
    });

    ace.define('ace/mode/custom_highlight_rules', function(require, exports, module) {
      const oop = ace.require("ace/lib/oop");
      const MarkdownHighlightRules = ace.require("ace/mode/markdown_highlight_rules").MarkdownHighlightRules;

      const CustomHighlightRules = function() {
        const customRules = {
          "start": [
            {
              token: "keyword",
              regex: /\{\{|\{%/,
              next: "twig-end"
            }
          ],
          "twig-end": [
            {
              token: "keyword",
              regex: /\}\}|\%\}/,
              next: "start"
            }
          ]
        };
        this.$rules = new MarkdownHighlightRules().getRules();
        this.$rules["start"] = this.$rules["start"].concat(customRules.start);
        this.$rules["twig-end"] = customRules["twig-end"];
      }

      oop.inherits(CustomHighlightRules, MarkdownHighlightRules);
      exports.CustomHighlightRules = CustomHighlightRules;
    }); 
  }

  const doAfterDbIsOpen = function() {
    return new Promise((resolve, _) => {
      globalThis.lb.useSqlite(async (db) => {  
        if (globalThis.localStorage.getItem("tables-created") !== "true") {
          await globalThis.lb.createTables(db);          
          await insertThemeFromObject(db, default_theme, "current");
          await insertThemeFromObject(db, default_theme, "default");
          await globalThis.lb.setThemeConfig(default_theme["config"]);
          
          await globalThis.lb.setSetting("footer-social-snippet", default_footer_social_snippet);
          await globalThis.lb.setSetting("htaccess", default_htaccess);
          await globalThis.lb.setSetting("main-js", default_main_js);
          await globalThis.lb.setSetting("twig-inside-articles", "true");
          await globalThis.lb.setSetting("rss-for-mainpage", "true");
          await globalThis.lb.setSetting("preview-in-new-tab", "true");
          await globalThis.lb.setSetting("share-button", "true");
          await globalThis.lb.setSetting("articles-in-author-profile", "true");
          await globalThis.lb.setSetting("article-in-feedback", "false");
          await globalThis.lb.setSetting("website-language", "en");
          
          globalThis.localStorage.setItem("tables-created", "true");
          hideLoader();
        } else {
          await globalThis.lb.updateSettings();
          fetchData(db);
        }

        globalThis.lb.updateCachedSelects();
        resolve();
      });
    });
  }

  /* Media file functions */

  const getFileType = function(fileExt) {
    if (supported_formats.includes(fileExt)) return "image";
    return "unknown";
  }

  const getMediaFileData = async function(db, uri) {
    const resultRows = await db.exec({
      sql: "SELECT * FROM media WHERE uri = '" + uri + "'",
      rowMode: 'object'
    });

    if (!resultRows) return null;
    return resultRows[0];
  }

  const importMediaFile = function(file) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();

      const filename = file.name.toLowerCase();
      reader.addEventListener('load', async () => {
        globalThis.lb.useSqlite(async (db) => {
          await deleteMediaFileAndVersions(filename);
          const response = await globalThis.lb.saveMediaFile(filename, reader.result);

          if (response.type !== "error") {
            const fileExt = getFileExtension(filename);
            const fileType = getFileType(fileExt);
            const size = file.size;
            await insertOrUpdateRecord(db, "media", ["uri", "file_extension", "type", "size"], [filename, fileExt, fileType, size]);
            
            const record = await getMediaFileData(db, filename);
            const versions = record["versions"] ? record["versions"].split(",") : [];
            await saveMediaVersions(filename, reader.result, versions);
          } else {
            globalThis.console.error("An error occurred while storing the file: ", file.name, "\nError: ", response.result);
          }
          
          resolve();
        });        
      });
      
      reader.addEventListener("error", () => {
        globalThis.console.error("An error occurred while reading the file: ", file.name);
        resolve();
      });
      
      reader.readAsArrayBuffer(file);
    });
  }

  const selectMediaFiles = async function(event) {
    const files = event.target.files;
    if (!files | !files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      let name = files[i].name;
      if (!/^[a-zA-Z0-9\-]+\.[a-zA-Z0-9]+$/.test(name)) {
        globalThis.window.alert("This file name is invalid: " + name);
        return;
      }

      const fileExt = getFileExtension(name.toLowerCase());
      if (!validateFileExtension(fileExt)) {
        globalThis.window.alert("This file extension is not supported: " + fileExt);
        return;
      }
    }

    for (let j = 0; j < files.length; j++) {
      await importMediaFile(files[j]);
    }

    reloadPage();
  }

  const insertMediaFilesButtonHandler = function(event) {
    event.preventDefault();
    
    const importMediaFilesInput = globalThis.document.getElementById("import-media-files-input");
    importMediaFilesInput.click();
  }


  /* RIS file functions */

  const importRisFile = function(file) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      
      reader.addEventListener('load', async () => {
        await loadRIS(reader.result);
        resolve();
      });
      
      reader.addEventListener("error", () => {
        globalThis.console.error("An error occurred while reading the file: ", file.name);
        resolve();
      });
      
      reader.readAsText(file);
    });
  }

  const selectRisFiles = async function(event) {
    const files = event.target.files;
    if (!files | !files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      if (!files[i].name || !files[i].name.toUpperCase().endsWith('.RIS')) {
        globalThis.window.alert('The only supported file extension is RIS');
        return;
      }
    }

    for (let j = 0; j < files.length; j++) {
      await importRisFile(files[j]);
    }

    reloadPage();
  }

  const hashCode = function(str) {
    var hash = 0, i, chr;
      
    if (str.length === 0) return hash;
    
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    
    return Math.abs(hash).toString().padStart(10, '0');
  }

  const getRecordAuthor = function(record) {
    return  record["AU"] ? record["AU"] : record["A1"];
  }

  const getRecordTitle = function(record) {
    return  (record["TI"] ? record["TI"] : (record["T1"] ? record["T1"] : record["ST"]));
  }

  const getRecordYear = function(record) {
    return  record["PY"] ? record["PY"] : record["Y1"];
  }  

  const getRecordAbstract = function(record) {
    return  record["AB"] ? record["AB"] : record["N2"];
  }  
  
  const generateRisId = function(record) {
    const type = record["TY"];
    const author = getRecordAuthor(record).join(";");
    const title = getRecordTitle(record);
    const year = getRecordYear(record);

    return "lb-" + hashCode(type + "-" + author + "-" + title + "-" + year);
  }

  const loadRIS = function(text) {
    return new Promise((resolve, _) => {
      globalThis.lb.useSqlite(async (db) => {
        const template = {"ID": "", "TY": "", "A1": [], "A2": [], "A3": [], "A4": [], "AB": "", "AD": "", "AN": "", "AU": [], "C1": "", "C2": "", "C3": "", "C4": "", "C5": "", "C6": "", "C7": "", "C8": "", "CA": "", "CN": "", "CT": "", "CY": "", "DA": "", "DB": "", "DO": "", "DP": "", "ED": [], "EP": "", "ER": "", "ET": "", "IS": "", "J2": "", "JO": "", "KW": "", "L1": "", "L4": "", "LA": "", "LB": "", "M1": "", "M2": "", "M3": "", "N1": "", "N2": "", "NV": "", "OP": "", "PB": "", "PY": "", "RI": "", "RN": "", "RP": "", "SE": "", "SN": "", "SP": "", "ST": "", "SV": "", "T1": "", "T2": "", "T3": "", "TA": "", "TI": "", "TT": "", "U1": "", "UR": [], "VL": "", "Y1": "", "Y2": ""};
    
        let record = {};
        const lines = text.split("\n");
        for (let i = 0; i < lines.length; i++) {
          let line = lines[i];
          if (line.length === 0) continue;
    
          let tag = line.substring(0,2);
          let info = tag === "ER" ? "" : line.substring(line.indexOf("-") + 1).trim();
          
          if (tag === "TY") record = structuredClone(template);
          if (tag === "AU" || tag === "A1" || tag === "A2" || tag === "A3" || tag === "A4" || tag === "UR" || tag === "ED") {
            record[tag].push(info);
          } else if (template[tag] !== undefined){
            record[tag] = info;
          }
    
          if (tag === "ER") {
            if (!record["ID"]) record["ID"] = generateRisId(record);
            await db.exec({ sql: "INSERT INTO sources (" +
              "ris_id, ris_ty, ris_a1, ris_a2, ris_a3, ris_a4, ris_ab, ris_ad, ris_an, ris_au, ris_c1, ris_c2, ris_c3, ris_c4, ris_c5, ris_c6, ris_c7, ris_c8, ris_ca, ris_cn, ris_ct, ris_cy, ris_da, ris_db, ris_do, ris_dp, ris_ed, ris_ep, ris_er, ris_et, ris_is, ris_j2, ris_jo, ris_kw, ris_l1, ris_l4, ris_la, ris_lb, ris_m1, ris_m2, ris_m3, ris_n1, ris_n2, ris_nv, ris_op, ris_pb, ris_py, ris_ri, ris_rn, ris_rp, ris_se, ris_sn, ris_sp, ris_st, ris_sv, ris_t1, ris_t2, ris_t3, ris_ta, ris_ti, ris_tt, ris_u1, ris_ur, ris_vl, ris_y1, ris_y2, created, updated) VALUES( " +
              "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " + 
              "STRFTIME('%Y-%m-%d %H:%M', DATETIME('now','localtime')), " +
              "STRFTIME('%Y-%m-%d %H:%M', DATETIME('now','localtime')))" +
              "ON CONFLICT(ris_id) DO UPDATE SET " +
              "ris_ty = ?, ris_a1 = ?, ris_a2 = ?, ris_a3 = ?, ris_a4 = ?, ris_ab = ?, ris_ad = ?, ris_an = ?, ris_au = ?, ris_c1 = ?, ris_c2 = ?, ris_c3 = ?, ris_c4 = ?, ris_c5 = ?, ris_c6 = ?, ris_c7 = ?, ris_c8 = ?, ris_ca = ?, ris_cn = ?, ris_ct = ?, ris_cy = ?, ris_da = ?, ris_db = ?, ris_do = ?, ris_dp = ?, ris_ed = ?, ris_ep = ?, ris_er = ?, ris_et = ?, ris_is = ?, ris_j2 = ?, ris_jo = ?, ris_kw = ?, ris_l1 = ?, ris_l4 = ?, ris_la = ?, ris_lb = ?, ris_m1 = ?, ris_m2 = ?, ris_m3 = ?, ris_n1 = ?, ris_n2 = ?, ris_nv = ?, ris_op = ?, ris_pb = ?, ris_py = ?, ris_ri = ?, ris_rn = ?, ris_rp = ?, ris_se = ?, ris_sn = ?, ris_sp = ?, ris_st = ?, ris_sv = ?, ris_t1 = ?, ris_t2 = ?, ris_t3 = ?, ris_ta = ?, ris_ti = ?, ris_tt = ?, ris_u1 = ?, ris_ur = ?, ris_vl = ?, ris_y1 = ?, ris_y2 = ?, updated = STRFTIME('%Y-%m-%d %H:%M', DATETIME('now','localtime'))", 
                           bind: [record["ID"].toString(), record["TY"], arrayToText(record["A1"]), arrayToText(record["A2"]), arrayToText(record["A3"]), arrayToText(record["A4"]), record["AB"], record["AD"], record["AN"], arrayToText(record["AU"]), record["C1"], record["C2"], record["C3"], record["C4"], record["C5"], record["C6"], record["C7"], record["C8"], record["CA"], record["CN"], record["CT"], record["CY"], record["DA"], record["DB"], record["DO"], record["DP"], arrayToText(record["ED"]), record["EP"], record["ER"], record["ET"], record["IS"], record["J2"], record["JO"], record["KW"], record["L1"], record["L4"], record["LA"], record["LB"], record["M1"], record["M2"], record["M3"], record["N1"], record["N2"], record["NV"], record["OP"], record["PB"], record["PY"], record["RI"], record["RN"], record["RP"], record["SE"], record["SN"], record["SP"], record["ST"], record["SV"], record["T1"], record["T2"], record["T3"], record["TA"], record["TI"], record["TT"], record["U1"], arrayToText(record["UR"]), record["VL"], record["Y1"], record["Y2"], record["TY"], arrayToText(record["A1"]), arrayToText(record["A2"]), arrayToText(record["A3"]), arrayToText(record["A4"]), record["AB"], record["AD"], record["AN"], arrayToText(record["AU"]), record["C1"], record["C2"], record["C3"], record["C4"], record["C5"], record["C6"], record["C7"], record["C8"], record["CA"], record["CN"], record["CT"], record["CY"], record["DA"], record["DB"], record["DO"], record["DP"], arrayToText(record["ED"]), record["EP"], record["ER"], record["ET"], record["IS"], record["J2"], record["JO"], record["KW"], record["L1"], record["L4"], record["LA"], record["LB"], record["M1"], record["M2"], record["M3"], record["N1"], record["N2"], record["NV"], record["OP"], record["PB"], record["PY"], record["RI"], record["RN"], record["RP"], record["SE"], record["SN"], record["SP"], record["ST"], record["SV"], record["T1"], record["T2"], record["T3"], record["TA"], record["TI"], record["TT"], record["U1"], arrayToText(record["UR"]), record["VL"], record["Y1"], record["Y2"]]});
          }
        }

        resolve();
      });
    });
  }

  const arrayToText = function(arr) {
    return arr.join('\n');
  }

  /** Alternative to FileSaver **/

  function saveFile(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /** Main **/

  const loadWebsiteDependencies = async function() {
    const page = thisPage();
    
    if (["index", "settings"].includes(page)) {
      await import ("../dependencies/jszip/jszip.min.js");
    }
    
    if (["article-edit", "series-edit", "section-edit", "relation-edit", "author-edit", "settings", "templates"].includes(page)) {
      await import ("../dependencies/ace/ace.js");
      await import ("../dependencies/ace/ext-language_tools.js");
      await import ("../dependencies/ace/mode-markdown.js");
      await import ("../dependencies/ace/mode-twig.js");
      await import ("../dependencies/ace/mode-html.js");
      await import ("../dependencies/ace/mode-css.js");
      await import ("../dependencies/ace/mode-javascript.js");
      await import ("../dependencies/ace/mode-xml.js");
      await import ("../dependencies/ace/theme-github_light_default.js");
      ace.config.set('basePath', '../dependencies/ace');
    }
  }

  const start = async function() {
    if (globalThis.localStorage.getItem("tables-created") !== "true") showLoader();
    preFormatThead();

	await loadWebsiteDependencies();
    const {default: libreblog} = await import ("../libreblog/libreblog.js");
    globalThis.lb = libreblog;
    const {default: defaultTheme} = await import ("../themes/default-theme.js");
    globalThis.default_theme = defaultTheme;
    
    await globalThis.lb.createMediaWorker();
    await globalThis.lb.importModules();
    await globalThis.lb.startDb();
    await doAfterDbIsOpen();
    initEventHandlers(); //1
    initEditor(); //2
  }

  start();
})();
