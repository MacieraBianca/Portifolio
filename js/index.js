document.addEventListener("DOMContentLoaded", function () {
    const itensMenu = document.querySelectorAll(".menu li");

    itensMenu.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            item.style.color = "#292F36";
        });

        item.addEventListener("mouseout", function () {
            item.style.color = "";
        });
    });
});