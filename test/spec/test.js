const index = require("../../app/assets/js/index.js");

test("Debe devolver la cadena correcta: Hola Mundo", () => {
    expect(index.holaMundo().toBe("Hola Mundo"))
});

test("Debe devolver la cadena correcta: Hasta Luego", () => {
    expect(index.hastaLuego().toBe("Hasta Luego"))
});

