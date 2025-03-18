document.addEventListener("DOMContentLoaded", function () {
    let headings = document.querySelectorAll(".page-heading");

    headings.forEach(heading => {
        if (document.title.includes(heading.textContent)) {
            heading.classList.add("active-heading");
        }
    });
});
