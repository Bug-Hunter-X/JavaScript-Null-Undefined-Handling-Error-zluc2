function foo(a, b) {
  // Explicitly check for null or undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error, or handle appropriately
  }
  // ... rest of the function using a and b safely
  return a + b; // Example operation 
}