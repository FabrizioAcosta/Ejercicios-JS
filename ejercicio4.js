// 1. Tu primera función
// 1.1
function despedir() {
    console.log("Adiós");
}

// 1.2
function multiplicarPorDos(numero) {
    return numero * 2;
}

// 1.3
function esMayorDeEdad(edad) {
    return edad > 18;
}

// 2. Parámetros
// 2.1
function multiplicar(a, b) {
    return a * b;
}

// 2.2
function saludarPersonalizado(nombre, apellido) {
    return `Hola, ${nombre} ${apellido}`;
}

// 2.3
function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
}

// 2.4
function restar(a, b) {
    return a - b;
}

// 2.5
function dividir(a, b) {
    return a / b;
}

// 3. Function Expression
// 3.1
const multiplicarDOS = function(a, b) {
    return a * b;
};

// 3.2
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
};

// 3.3
const esPar = function(numero) {
    return numero % 2 === 0;
};

// 4. Funciones Flecha
// 4.1
const multiplicarFlecha = (a, b) => a * b;

// 4.2
const saludarFlecha = nombre => `Hola ${nombre}`;

// 4.3
const calcularArea = radio => Math.PI * Math.pow(radio, 2);

// 5. Recursividad
// 5.1
function suma(n) {
    if (n === 0) {
        return 0;
    }
    return n + suma(n - 1);
}

// 5.2
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 5.3
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 5.4
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};
