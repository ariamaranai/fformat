chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  let filename = item.filename;
  let pos = filename.lastIndexOf(".");
  let format = filename.slice(pos).toLowerCase();
  suggest({
    filename: filename.slice(0, pos) + (format == ".jpeg" || format == ".jfif" ? ".jpg" : format)
  });
});