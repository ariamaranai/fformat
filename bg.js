chrome.downloads.onDeterminingFilename.addListener(({filename}, suggest) => {
  let p = filename.lastIndexOf(".");
  let format = filename.slice(p).toLowerCase();
  suggest({ filename: filename.slice(0, p) + (format == ".jpeg" || format == ".jfif" ? ".jpg" : format) });
});