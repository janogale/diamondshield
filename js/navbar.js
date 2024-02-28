window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add("bg-light");
        document.getElementById("navbar-font").classList.remove("navbar-font-color");
        document.getElementById("navbar").classList.remove("navbar-bg-1");
        document.getElementById("navbar-btn").classList.add("navbar-btn-scroll");
        document.getElementById("navbar-icon").classList.remove("custom-toggler");
    } else {
        document.getElementById("navbar").classList.remove("bg-light");
        document.getElementById("navbar-font").classList.add("navbar-font-color");
        document.getElementById("navbar").classList.add("navbar-bg-1");
        document.getElementById("navbar-btn").classList.remove("navbar-btn-scroll");
        document.getElementById("navbar-icon").classList.add("custom-toggler");
    }
}