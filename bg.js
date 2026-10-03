onunhandledrejection = e => e.preventDefault();
{
  let { downloads } = chrome;
  let f = (item, suggest) =>
    item.byExtensionId
      ? (
        downloads.onDeterminingFilename.removeListener(f1),
        !0
      )
      : suggest({
        filename: item.filename.replace(/\.[^.]+$/, e => {
          let s = e.toLowerCase();
          return s == ".jpeg" || s == ".jfif" ? ".jpg" : s;
        })
      });
  downloads.onDeterminingFilename.addListener(f);
  downloads.onCreated.addListener(item =>
    item.extensionId && downloads.onDeterminingFilename.removeListener(f)
  );
}
