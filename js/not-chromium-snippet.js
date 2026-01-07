//Small snippet to warn users to use a Chromium‑based browser
function notChromium() {
  const ua = navigator.userAgent || '';
  const nonChromiumUA = /\b(Firefox|FxiOS|Seamonkey|Gecko\/|PaleMoon|Waterfox)\b/i.test(ua);
  const webkitOnly = /\bAppleWebKit\/(?!.*Chrome|.*CriOS|.*Chromium)/i.test(ua) && !/Chrom(e|ium|iOS)|CriOS|Edg|OPR|Brave/i.test(ua);

  return (nonChromiumUA || webkitOnly);
}

if (notChromium()) {
  const contentElement = document.getElementById('content');
  const warningElement = document.createElement('span');
  warningElement.className = 'not-chromium-warning';
  warningElement.textContent = 'Warning: This editor works best in Chromium-based browsers (e.g., Chrome, Edge, Opera).';
  contentElement.insertBefore(warningElement, contentElement.firstChild);
}