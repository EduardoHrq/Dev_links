function toggle() {
  const html = document.documentElement;

  html.classList.toggle('light')

  if(html.classList.contains('light')){
    document.getElementById('img-curriculo').src = "https://img.icons8.com/ios-glyphs/1024/000000/resume.png"
  } else {
    document.getElementById('img-curriculo').src = "https://img.icons8.com/ios-glyphs/1024/ffffff/resume.png"
  }
}