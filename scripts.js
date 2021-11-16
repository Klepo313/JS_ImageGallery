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

var mainSlika = document.getElementById("mainSlika")
var h2 = document.getElementsByTagName("h2")[0]
var location = document.getElementsByClassName("location")[0]

mainSlika.src = slika1.src;
h2.innerHTML = slika1.header;
location.innerHTML = slika1.location;

