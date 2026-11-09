const fotos = document.querySelectorAll(".fotos img");
const visor = document.getElementById("visor");
const fotoGrande = document.getElementById("fotoGrande");

fotos.forEach(function (foto) {
    foto.addEventListener("click", function () {
        fotoGrande.src = foto.src;
        visor.style.display = "flex";
    });
});

visor.addEventListener("click", function () {
    visor.style.display = "none";
});
