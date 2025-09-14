const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const sliderImages = modal.querySelector(".slider-images");
const prevBtn = modal.querySelector(".prev");
const nextBtn = modal.querySelector(".next");
const closeBtn = modal.querySelector(".close");

let currentIndex = 0;
let images = [];

const detailButtons = document.querySelectorAll(".btn-details");

detailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".product-card");
        modalTitle.textContent = card.dataset.name;
        modalPrice.textContent = card.dataset.price;
        modalDesc.textContent = card.dataset.desc;

        // بارگذاری تصاویر
        images = [card.querySelector(".main-img").src];
        const extraImgs = card.querySelectorAll(".extra-images img");
        extraImgs.forEach(img => images.push(img.src));

        currentIndex = 0;
        updateSlider();

        modal.classList.add("show");
    });
});

function updateSlider() {
    sliderImages.innerHTML = `<img src="${images[currentIndex]}" style="width:100%;border-radius:10px;">`;
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});