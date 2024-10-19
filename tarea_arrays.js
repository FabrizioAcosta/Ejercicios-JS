// 1. Qué son los Arrays
// 1.1
function procesarPedido(pedido) {
    const cliente = pedido.shift(); 
    pedido.unshift("bebida"); 
    pedido.push(cliente); l
}

// 2. Iteración de Arrays en Javascript
// 2.1
function sumarPares(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            suma += numero; 
        }
    }
    return suma;
}

// 3. Buscar en Arrays
// 3.1
function palabrasTerminanConA(palabras) {
    return palabras.every(palabra => palabra.endsWith('a')); 
}

const palabras = ['casa', 'silla', 'mesa'];
console.log(palabrasTerminanConA(palabras)); 

// 4. Transformar Arrays
// 4.1
function buscaPalabras(words, word) {
    const index = words.indexOf(word); 
    return index !== -1 ? words.slice(index + 1) : []; 
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')); 

// 5. Matrices
// 5.1
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const index = matrix[i].indexOf("JavaScript");
        if (index !== -1) {
            return [i, index]; 
        }
    }
    return [-1, -1]; 
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];

const position = findJavaScript(matrix);
console.log(position); 
// 6. Algoritmos con Arrays
// 6.1
function findMinMaxPages(books) {
    const minIndex = books.indexOf(Math.min(...books)); 
    const maxIndex = books.indexOf(Math.max(...books)); 
    return [minIndex, maxIndex]; 
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); 

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
