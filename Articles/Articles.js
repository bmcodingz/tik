const modal = document.getElementById("articleModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const sliderImages = document.querySelector(".slider-images");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll(".btn-details").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".article-card");
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        currentImages = card.dataset.images.split(",");
        currentIndex = 0;
        updateSlider();
        modal.classList.add("show");
    });
});

closeBtn.addEventListener("click", () => modal.classList.remove("show"));
window.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("show"); });

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateSlider();
});

function updateSlider() {
    sliderImages.innerHTML = `<img src="${currentImages[currentIndex]}" alt="Article Image">`;
}
