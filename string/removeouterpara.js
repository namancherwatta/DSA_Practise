var removeOuterParentheses = function(s) {
    let result = "";
    let balance = 0; // Balance counter
    let start = 0;   // Start index of the current primitive string

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            balance++;
        } else {
            balance--;
        }

        // When balance is zero, we've found a primitive valid parentheses string
        if (balance === 0) {
            // Append the current primitive string without the outermost parentheses
            result += s.slice(start + 1, i); // Exclude outermost parentheses
            start = i + 1; // Update start to the next position
        }
    }

    return result;

};

console.log(removeOuterParentheses("(()())(())(()(()))"))