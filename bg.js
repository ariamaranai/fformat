chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  try {
    return item.byExtensionId ||
    suggest({
      filename: item.filename.replace(/\.[^.]+$/, e => {
        let s = e.toLowerCase();
        return s == ".jpeg" || s == ".jfif" ? ".jpg" : s;
      })
    })
  } catch {}
});