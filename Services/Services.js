const serviceModal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = serviceModal.querySelector(".close");
const sliderImages = serviceModal.querySelector(".slider-images");
const prevBtn = serviceModal.querySelector(".prev");
const nextBtn = serviceModal.querySelector(".next");
const detailButtons = document.querySelectorAll(".btn-details");

let currentIndex = 0;
let images = [];

detailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".section-card");

        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;

        images = card.dataset.images ? card.dataset.images.split(",") : [card.querySelector("img").src];

        currentIndex = 0;
        updateSlider();

        serviceModal.classList.add("show");
    });
});

function updateSlider() {
    if (!sliderImages) return;
    sliderImages.innerHTML = `<img src="${images[currentIndex]}" style="width:100%;border-radius:10px;">`;

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

closeBtn.addEventListener("click", () => {
    serviceModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
    if (e.target === serviceModal) {
        serviceModal.classList.remove("show");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.details a');

    function setActiveLink() {
        const currentPath = window.location.pathname.split('/').pop();
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    setActiveLink();

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
