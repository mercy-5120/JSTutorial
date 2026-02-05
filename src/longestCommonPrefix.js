function longestCommonPrefix(strs) {
    // Handle edge cases
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    
    // Find the shortest string to limit comparisons
    let shortest = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i];
        }
    }
    
    let prefix = "";
    
    // Compare characters at each position
    for (let i = 0; i < shortest.length; i++) {
        let currentChar = shortest[i];
        let isCommon = true;
        
        // Check if this character exists in all strings
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                isCommon = false;
                break;
            }
        }
        
        if (isCommon) {
            prefix += currentChar;
        } else {
            break;
        }
    }
    
    return prefix;
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));     // ""
console.log(longestCommonPrefix(["apple", "app", "apricot"]));   // "ap"
console.log(longestCommonPrefix(["interstellar", "internet", "internal"])); // "inter"
console.log(longestCommonPrefix([""]));                          // ""
console.log(longestCommonPrefix(["a"]));                         // "a"
console.log(longestCommonPrefix(["same", "same", "same"]));      // "same"