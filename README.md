# JavaScript Null/Undefined Handling Error

This repository demonstrates a common error in JavaScript: the failure to explicitly handle null or undefined values passed as function arguments. This often leads to unexpected behavior or runtime errors.

The `bug.js` file contains the problematic code.  `bugSolution.js` provides a corrected version.

**Problem:**
The original code snippet neglects to handle null or undefined values in its parameters.  Depending on how these values are used within the function, unexpected results can follow (e.g., `TypeError`, incorrect calculations, or silent failures).

**Solution:**
The improved version explicitly checks for null or undefined values before using them. This prevents errors and improves the robustness of the function.