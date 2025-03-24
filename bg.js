chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  if (!item.byExtensionId) {
    let filename = item.filename;
    let p = filename.lastIndexOf(".");
    let format = filename.slice(p).toLowerCase();
    suggest({ filename: filename.slice(0, p) + (format == ".jpeg" || format == ".jfif" ? ".jpg" : format) });
  }
  return !0
});
