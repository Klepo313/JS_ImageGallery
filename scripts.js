const slika1 = {
    src: "images/jay-mantri-TFyi0QOx08c-unsplash.jpg",
    header: "Foggy forest",
    location: "Switzerland"
}
const slika2 = {
    src: "images/john-towner-3Kv48NS4WUU-unsplash.jpg",
    header: "Morning spring forest",
    location: "Switzerland"
}
const slika3 = {
    src: "images/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg",
    header: "Lonely road",
    location: "Denmark"
}
const slika4 = {
    src: "images/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg",
    header: "South forest",
    location: "Brasil"
}
const slika5 = {
    src: "images/sergei-a--heLWtuAN3c-unsplash.jpg",
    header: "Mountain forest",
    location: "Canada"
}
const slika6 = {
    src: "images/veeterzy-sMQiL_2v4vs-unsplash.jpg",
    header: "The tree of life",
    location: "Ganna"
}

const mainSlika = document.getElementById("mainSlika")
const h2 = document.getElementsByTagName("h2")[0]
const location1 = document.getElementsByClassName("location")[0]
const grid_item = document.getElementsByClassName("grid-item")

const arrowBg = document.getElementsByClassName("arrowBg")[0]
const content_1 = document.getElementById("content-1")
const content_2 = document.getElementById("content-2")
const grid_section = document.getElementsByClassName("grid-section")[0]
const arrow = document.getElementsByClassName("arrow")[0]
const showMoreLess = document.getElementsByClassName("showMoreLess")[0]

window.addEventListener("load", () => {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden"
    mainSlika.src = slika1.src;
    h2.innerHTML = slika1.header;
    location1.innerHTML = slika1.location;
})

var n = 0;
arrowBg.addEventListener("click", () => {
    if(n === 0) {
        content_1.style.height = "100%"
        grid_section.style.display = "none"
        showMoreLess.style.marginTop = "-75px"
        arrowBg.style.transform = "rotate(180deg) scale(0.75)"
        n = 1;
        console.log(n)
    } else{
        content_1.style.height = "80%"
        grid_section.style.display = "flex"
        showMoreLess.style.marginTop = "-35px"
        arrowBg.style.transform = "rotate(0deg) scale(0.75)"
        n = 0;
        console.log(n)
    }
})

grid_item[0].addEventListener("click", () => {
    mainSlika.src = slika1.src;
    h2.innerHTML = slika1.header;
    location1.innerHTML = slika1.location;
})

grid_item[1].addEventListener("click", () => {
    mainSlika.src = slika2.src;
    h2.innerHTML = slika2.header;
    location1.innerHTML = slika2.location;
})

grid_item[2].addEventListener("click", () => {
    mainSlika.src = slika3.src;
    h2.innerHTML = slika3.header;
    location1.innerHTML = slika3.location;
})

grid_item[3].addEventListener("click", () => {
    mainSlika.src = slika4.src;
    h2.innerHTML = slika4.header;
    location1.innerHTML = slika4.location;
})

grid_item[4].addEventListener("click", () => {
    mainSlika.src = slika5.src;
    h2.innerHTML = slika5.header;
    location1.innerHTML = slika5.location;
})

grid_item[5].addEventListener("click", () => {
    mainSlika.src = slika6.src;
    h2.innerHTML = slika6.header;
    location1.innerHTML = slika6.location;
})
