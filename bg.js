chrome.downloads.onDeterminingFilename.addListener((s,f)=>
  f({filename: (s=s.filename).slice(0, ((s=s.slice(f=s.lastIndexOf(".")).toLowerCase()),f)) + (s == ".jpeg" || s == ".jfif" ? ".jpg" : s)})
)
