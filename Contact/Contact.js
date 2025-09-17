const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("پیام شما با موفقیت ارسال شد ✅");
    form.reset();
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
