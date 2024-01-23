const colorBtn = document.getElementById('color-btn');

colorBtn.addEventListener('click', function()   {
    const head = document.getElementById("head").value.slice(1)
    const selectColor = document.getElementById("select-color").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${head}&mode=${selectColor.toLowerCase()}&count=5`)
    .then(res => res.json())


})