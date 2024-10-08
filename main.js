const btnEl = document.querySelector(".btn");
const closeiconEl = document.querySelector(".close-icon");
const trailercontainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", ()=>{
    trailercontainerEl.classList.remove("active");
});

closeiconEl.addEventListener("click",()=>{
    trailercontainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime =0;
})
