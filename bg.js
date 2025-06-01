chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  try {
    item.byExtensionId ||
    suggest({
      filename: item.filename.replace(/\.[^.]+$/, e => {
        let s = e.toLowerCase();
        return s != ".jpeg" && s != ".jfif" ? s : ".jpg";
      })
    })
  } catch (e) {}
  return !0
});