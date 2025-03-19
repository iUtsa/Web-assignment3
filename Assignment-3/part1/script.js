function setIMG() {
    const td = document.getElementById('setPic');
    if (!td) return; // Prevents errors if element is missing

    const imageUrl = td.getAttribute('img-url');
    td.style.backgroundImage = 'url(' + imageUrl + ')';
    td.style.backgroundRepeat = 'repeat';
    td.style.backgroundSize = 'auto';
}

function setBG() {
    const divs = document.querySelectorAll('.setBG'); // Selects all elements with class "setBG"

    divs.forEach(div => {
        const imageUrl = div.getAttribute('get-img-url');
        div.style.backgroundImage = 'url(' + imageUrl + ')';
        div.style.backgroundRepeat = 'no-repeat';
        div.style.backgroundSize = 'contain';
        div.style.backgroundPosition = '50%';
    });
}

window.onload = function() {
    setBG();
    setIMG();
};
