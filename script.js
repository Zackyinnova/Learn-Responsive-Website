const buttonNav = document.getElementById("Button-navbar");
const overlaynav = document.getElementById("overlay-navbar");

buttonNav.addEventListener("click", () =>{
    overlaynav.style.display = "flex";
});

// klik area luar → close
overlaynav.addEventListener("click", (e) => {
    if (e.target === overlaynav) {
        overlaynav.style.display = "none";
    }
});
