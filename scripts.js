const slika1 = {
  src: "images/jay-mantri-TFyi0QOx08c-unsplash.jpg",
  header: "Foggy forest",
  location: "Switzerland",
};
const slika2 = {
  src: "images/john-towner-3Kv48NS4WUU-unsplash.jpg",
  header: "Morning spring forest",
  location: "Switzerland",
};
const slika3 = {
  src: "images/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg",
  header: "Lonely road",
  location: "Denmark",
};
const slika4 = {
  src: "images/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg",
  header: "South forest",
  location: "Brasil",
};
const slika5 = {
  src: "images/sergei-a--heLWtuAN3c-unsplash.jpg",
  header: "Mountain forest",
  location: "Canada",
};
const slika6 = {
  src: "images/veeterzy-sMQiL_2v4vs-unsplash.jpg",
  header: "The tree of life",
  location: "Ganna",
};

const mainSlika = document.getElementById("mainSlika");
const h2 = document.getElementsByTagName("h2")[0];
const location1 = document.getElementsByClassName("location")[0];
//const grid_item = document.getElementsByClassName("grid-item");

const arrowBg = document.getElementsByClassName("arrowBg")[0];
const content_1 = document.getElementById("content-1");
const content_2 = document.getElementById("content-2");

const grid_section = document.getElementsByClassName("grid-section")[0];
const grid_item = document.createElement("div")
const grid_image = document.createElement("img")
grid_item.classList.add("grid-item");
grid_image.classList.add("grid-image");

for(i=0; i<5; i++){
  grid_section.appendChild(grid_item);
  grid_item.appendChild(grid_image)
  if(i===0){
    grid_image.src = slika1.src;
  }
  if(i===1){
    grid_image.src = slika2.src;
  }
  if(i===2){
    grid_image.src = slika3.src;
  }
  if(i===3){
    grid_image.src = slika4.src;
  }
  if(i===4){
    grid_image.src = slika5.src;
  }
  if(i===5){
    grid_image.src = slika6.src;
  }
}

const arrow = document.getElementsByClassName("arrow")[0];
const showMoreLess = document.getElementsByClassName("showMoreLess")[0];
const container = document.getElementsByClassName("container")[0];
//const grid_image = document.getElementsByClassName("grid-image");

window.addEventListener("load", () => {
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  grid_image[0].style.transform = "scale(0.85)";
  mainSlika.src = slika1.src;
  h2.innerHTML = slika1.header;
  location1.innerHTML = slika1.location;
});


var n = 0;
arrowBg.addEventListener("click", () => {
  if (n === 0) {
    content_1.style.height = "100%";
    container.style.width = "100%";
    grid_section.style.display = "none";
    showMoreLess.style.marginTop = "-75px";
    arrowBg.style.transform = "rotate(180deg) scale(0.75)";
    content_2.style.outline = "none";
    container.style.padding = "0px";
    n = 1;
    console.log(n);
  } else {
    content_1.style.height = "80%";
    container.style.width = "75%";
    grid_section.style.display = "flex";
    showMoreLess.style.marginTop = "-35px";
    arrowBg.style.transform = "rotate(0deg) scale(0.75)";
    content_2.style.outline = "6px solid white";
    n = 0;
    console.log(n);
  }
});

grid_item[0].addEventListener("click", () => {
  mainSlika.src = slika1.src;
  h2.innerHTML = slika1.header;
  location1.innerHTML = slika1.location;

  grid_image[0].style.transform = "scale(0.85)";
  grid_image[1].style.transform = "scale(1)";
  grid_image[2].style.transform = "scale(1)";
  grid_image[3].style.transform = "scale(1)";
  grid_image[4].style.transform = "scale(1)";
  grid_image[5].style.transform = "scale(1)";
});

grid_item[1].addEventListener("click", () => {
  mainSlika.src = slika2.src;
  h2.innerHTML = slika2.header;
  location1.innerHTML = slika2.location;

  grid_image[1].style.transform = "scale(0.85)";
  grid_image[0].style.transform = "scale(1)";
  grid_image[2].style.transform = "scale(1)";
  grid_image[3].style.transform = "scale(1)";
  grid_image[4].style.transform = "scale(1)";
  grid_image[5].style.transform = "scale(1)";
});

grid_item[2].addEventListener("click", () => {
  mainSlika.src = slika3.src;
  h2.innerHTML = slika3.header;
  location1.innerHTML = slika3.location;

  grid_image[2].style.transform = "scale(0.85)";
  grid_image[1].style.transform = "scale(1)";
  grid_image[0].style.transform = "scale(1)";
  grid_image[3].style.transform = "scale(1)";
  grid_image[4].style.transform = "scale(1)";
  grid_image[5].style.transform = "scale(1)";
});

grid_item[3].addEventListener("click", () => {
  mainSlika.src = slika4.src;
  h2.innerHTML = slika4.header;
  location1.innerHTML = slika4.location;

  grid_image[3].style.transform = "scale(0.85)";
  grid_image[1].style.transform = "scale(1)";
  grid_image[2].style.transform = "scale(1)";
  grid_image[0].style.transform = "scale(1)";
  grid_image[4].style.transform = "scale(1)";
  grid_image[5].style.transform = "scale(1)";
});

grid_item[4].addEventListener("click", () => {
  mainSlika.src = slika5.src;
  h2.innerHTML = slika5.header;
  location1.innerHTML = slika5.location;

  grid_image[4].style.transform = "scale(0.85)";
  grid_image[1].style.transform = "scale(1)";
  grid_image[2].style.transform = "scale(1)";
  grid_image[3].style.transform = "scale(1)";
  grid_image[0].style.transform = "scale(1)";
  grid_image[5].style.transform = "scale(1)";
});

grid_item[5].addEventListener("click", () => {
  mainSlika.src = slika6.src;
  h2.innerHTML = slika6.header;
  location1.innerHTML = slika6.location;

  grid_image[5].style.transform = "scale(0.85)";
  grid_image[1].style.transform = "scale(1)";
  grid_image[2].style.transform = "scale(1)";
  grid_image[3].style.transform = "scale(1)";
  grid_image[4].style.transform = "scale(1)";
  grid_image[0].style.transform = "scale(1)";
});
