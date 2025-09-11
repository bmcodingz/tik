const serviceModal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = serviceModal.querySelector(".close");
const sliderImages = serviceModal.querySelector(".slider-images");
const prevBtn = serviceModal.querySelector(".prev");
const nextBtn = serviceModal.querySelector(".next");

let currentIndex = 0;
let images = [];

// ------------------------- دکمه‌های جزئیات -------------------------
const detailButtons = document.querySelectorAll(".btn-details");

detailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".section-card");

        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;

        // بارگذاری تصاویر
        images = card.dataset.images ? card.dataset.images.split(",") : [card.querySelector("img").src];

        currentIndex = 0;
        updateSlider();

        serviceModal.classList.add("show");
    });
});

// ------------------------- آپدیت اسلایدر -------------------------
function updateSlider() {
    if (!sliderImages) return;
    sliderImages.innerHTML = `<img src="${images[currentIndex]}" style="width:100%;border-radius:10px;">`;

    // فقط اگر چند عکس داریم، دکمه‌های next/prev را نشان بده
    if (images.length > 1) {
        if (!prevBtn || !nextBtn) return;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    } else {
        if (prevBtn && nextBtn) {
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        }
    }
}

// ------------------------- دکمه‌های اسلایدر -------------------------
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });
}

// ------------------------- بستن مودال -------------------------
closeBtn.addEventListener("click", () => {
    serviceModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
    if (e.target === serviceModal) {
        serviceModal.classList.remove("show");
    }
});
