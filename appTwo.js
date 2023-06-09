/*
 * Understanding SYNCHRONOUS code:
 *
 * This code will be read first by the JavaScript interpreter and it'll store all the functions
 * and vars in memory, then, the interpreter will execute, line by line, this code in sequential
 * order.
 */

const saludar = (nombre) => `Saludos ${nombre}`;

console.log(saludar('Rene'));


