function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar- dark.jpg")
  } else {
    img.setAttribute("src", "./assets/assets/avatar-light.jpg")
  }
  //html.classList.remove('light')
  //} else {
  //html.classList.add('light')}

  // substituir a imagem
  // se tiver light mode, adicionar a imagem light
  // se  tiver sem light mod, manter a imagem normal
}
