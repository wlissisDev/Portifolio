const boxContainer = document.querySelector(".boxContainer");
const saluteTextContainer = document.querySelector(".saluteTextContainer");
const saluteImageContainer = document.querySelector(".saluteImageContainer");
const AuthorName = document.querySelector(".name");
const jobTitleContainer = document.querySelector(".jobTitleContainer");
const jobTitle = document.querySelector(".jobTitle");
const projectsTitle = document.querySelector(".projectsTitle");
const phones = document.querySelectorAll(".phone");
const laptops = document.querySelectorAll(".laptop");

// const skillsDir = document.querySelectorAll(".dir");
// const skillsEsq = document.querySelectorAll(".esq");



for (let i = 0; i < 365; i++) {

    const list = [0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
        205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
        211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
        133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
        259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
        260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
        144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
        24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
        270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
        316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
        156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
        79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
        283, 284, 285, 323, 324, 325, 326,]




    const el = document.createElement("div");
    el.classList = list.includes(i) ? 'box active': 'box';

    boxContainer.appendChild(el)
}


// PARALAX

window.addEventListener('scroll',() =>{
    const offSetY = window.scrollY;
    saluteTextContainer.style.transform = `translateY(${offSetY * 0.1}px)`
    saluteImageContainer.style.transform = `translate(${offSetY * 0.4}px, ${offSetY * 0.7}px)`
    AuthorName.style.transform = `translateX(calc(-100vh - ${-offSetY}px))`
    jobTitleContainer.style.backgroundPositionY = `${offSetY*0.5}px`
    jobTitle.style.transform = `translateX(calc(200vh - ${offSetY}px))`
    
    projectsTitle.style.transform = `translateY(calc(300vh - ${offSetY}px))`
    phones[0].style.transform = `translateX(calc(430vh - ${offSetY}px))`
    
    laptops[0].style.transform = `translateX(calc(-550vh + ${offSetY}px))`
    laptops[1].style.transform = `translateX(calc(670vh - ${offSetY}px))`

    // skillsDir[0].style.transform = `translateX(calc(760vh - ${offSetY}px))`
    // skillsDir[1].style.transform = `translateX(calc(760vh - ${offSetY}px))`
    // skillsDir[2].style.transform = `translateX(calc(760vh - ${offSetY}px))`
    // skillsDir[3].style.transform = `translateX(calc(760vh - ${offSetY}px))`

    // skillsEsq[0].style.transform = `translateX(calc(-760vh + ${offSetY}px))`
    // skillsEsq[1].style.transform = `translateX(calc(-760vh + ${offSetY}px))`
    // skillsEsq[2].style.transform = `translateX(calc(-760vh + ${offSetY}px))`
    // skillsEsq[3].style.transform = `translateX(calc(-760vh + ${offSetY}px))`

})