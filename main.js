const container = document.querySelector(".container");
const nav = container.querySelector(".nav");
const temaBtn = nav.querySelector("#tema");
const imgTema = temaBtn.querySelector("#imageTema")

console.log(nav, container, imgTema);

let dark = true

temaBtn.addEventListener("click", () => {
    container.classList.toggle('dark',dark )
    nav.classList.toggle('dark-nav',dark)

    if(imgTema.getAttribute('src') == './images/tema.png'){
        imgTema.setAttribute('src', './images/lua.png')
    }
    else if (imgTema.getAttribute('src') == './images/lua.png'){
        imgTema.setAttribute('src', './images/tema.png')
    }
    
    dark = !dark;
});
