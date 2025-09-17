const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const sliderImages = modal.querySelector(".slider-images");
const prevBtn = modal.querySelector(".prev");
const nextBtn = modal.querySelector(".next");
const closeBtn = modal.querySelector(".close");
const detailButtons = document.querySelectorAll(".btn-details");
const searchInput = document.querySelector(".search-input");
const sortSelect = document.querySelector(".sort-select");
const filterBtn = document.querySelector(".btn-filter");
const productsContainer = document.querySelector(".products");
const productCards = Array.from(document.querySelectorAll(".product-card"));

let currentIndex = 0;
let images = [];

detailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".product-card");
        modalTitle.textContent = card.dataset.name;
        modalPrice.textContent = card.dataset.price;
        modalDesc.textContent = card.dataset.desc;

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

function applyFilter() {
    const searchText = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;

    productCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(searchText) ? "block" : "none";
    });

    let visibleCards = productCards.filter(card => card.style.display !== "none");

    if (sortValue === "asc") {
        visibleCards.sort((a, b) => parseInt(a.dataset.price.replace(/,/g, '')) - parseInt(b.dataset.price.replace(/,/g, '')));
    } else if (sortValue === "desc") {
        visibleCards.sort((a, b) => parseInt(b.dataset.price.replace(/,/g, '')) - parseInt(a.dataset.price.replace(/,/g, '')));
    } else {
        visibleCards.reverse();
    }

    visibleCards.forEach(card => productsContainer.appendChild(card));
}

filterBtn.addEventListener("click", applyFilter);

window.addEventListener("DOMContentLoaded", () => {
    sortSelect.value = "default";
    applyFilter();
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
