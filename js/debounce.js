/**
 * Creates a debounced function that delays invoking the provided function
 * until after a specific `delay` in milliseconds has passed since the
 * last time the debounced function was called. This is useful for
 * controlling the rate of execution for events that fire rapidly,
 * such as window resizing, scrolling, or user input in a search field.
 *
 * @param {Function} func The function to debounce.
 * @param {number} delay The number of milliseconds to delay execution.
 * @returns {Function} A new function that will only execute after the specified delay.
 */
const debounce = (func, delay) => {
  let timeoutId;

  // This is the function that will be returned and called by the event listener.
  return function(...args) {
    // `this` and `args` are captured to be applied to the original function.
    const context = this;

    // Clear the previous timeout to reset the delay timer.
    clearTimeout(timeoutId);

    // Set a new timeout.
    timeoutId = setTimeout(() => {
      // When the timeout completes, call the original function with the saved context and arguments.
      func.apply(context, args);
    }, delay);
  };
};

export default debounce;
