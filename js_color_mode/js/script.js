document.querySelector(".bx-moon").addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    document.querySelector(".bx-moon").classList.toggle("active");
    document.querySelector(".bx-sun").classList.toggle("active");
})
document.querySelector(".bx-sun").addEventListener("click", () => {
    document.querySelector(".bx-moon").classList.toggle("active");
    document.querySelector(".bx-sun").classList.toggle("active");
    document.body.classList.toggle('dark-theme')
});
document.querySelector(".menu-icon").addEventListener("click" ,()=> {
    document.querySelector(".mobile-menu").classList.toggle("active");
    document.querySelector(".close").classList.toggle("active");
    document.querySelector(".menu-icon").classList.toggle("active");
    document.querySelector("#spotlight").classList.toggle("active");
});
console.log("hello");
document.querySelector(".close").addEventListener("click", ()=> {
    document.querySelector(".mobile-menu").classList.toggle("active");
    document.querySelector(".close").classList.toggle("active");
    document.querySelector(".menu-icon").classList.toggle("active");
    document.querySelector("#spotlight").classList.toggle("active");
});

