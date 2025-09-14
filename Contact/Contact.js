// ارسال فرم با پیام موفقیت ساده
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("پیام شما با موفقیت ارسال شد ✅");
    form.reset();
});
