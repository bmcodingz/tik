const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 15);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
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

