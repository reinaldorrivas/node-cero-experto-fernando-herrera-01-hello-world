/*
 * Understanding ASYNCHRONOUS code:
 *
 * The first time that you see this code, you can think that the code execution order
 * will be:
 *
 * - App Start.
 * - Second setTimeout.
 * - Third setTimeout.
 * - First setTimeout.
 * - App End.
 *
 * BUT setTimeout is an async function, so, in this case, those setTimeout functions
 * will be stored in the Node API stack. In the mean time, the synchronous code will
 * be executed normally in the main thread while the async funcs satisfy its
 * requirements in order to be executed. When those requirements are satisfied, the
 * async funcs are moved to the CALLBACK stack. At the same time, when the main thread
 * are done, the callback stack pass to the main thread and will be executed.
 * If there are some funcs in the Node API stack, the JavaScript engine will wait until
 * the their requirements are satisfied, then they will be passed in order to the callback
 * stack and finally will be passed to the main stack in order to be executed.
 */

console.log('App Start');

setTimeout(() => {
  console.log('First setTimeout');
}, 3000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

setTimeout(() => {
  console.log('Third setTimeout');
}, 0);

console.log('App End');
