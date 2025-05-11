chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  item.byExtensionId ||
  suggest({
    filename: item.filename.replace(/\.[^.]+$/, e => {
      let s = e.toLowerCase();
      return s != ".jpeg" && s != ".jfif" ? s : ".jpg";
    })
  });
  return !0
});