new p5(function (app) {
    let logica;

    app.setup = function () {
        logica = new Logica(app);
    }


    app.draw = function () {
        logica.pintar();
    }


    app.mousePressed = function () {
        logica.click();
    }

    app.mouseDragged = function () {
        logica.arrastre();
    }

    app.mouseReleased = function () {
        logica.soltar();
    }
});