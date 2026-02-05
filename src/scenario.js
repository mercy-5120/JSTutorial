function findPairsWithSum(arr, target) {
  const pairs = [];
  
  // Outer loop: iterate through each element as the first number
  for (let i = 0; i < arr.length; i++) {
    // Inner loop: check elements after current i to avoid duplicates
    for (let j = i + 1; j < arr.length; j++) {
      // Check if pair sums to target
      if (arr[i] + arr[j] === target) {
        // Create sorted pair to handle uniqueness
        const pair = arr[i] < arr[j] ? [arr[i], arr[j]] : [arr[j], arr[i]];
        
        // Check if this pair already exists
        let isDuplicate = false;
        for (let k = 0; k < pairs.length; k++) {
          if (pairs[k][0] === pair[0] && pairs[k][1] === pair[1]) {
            isDuplicate = true;
            break;
          }
        }
        
        // Add to results if not a duplicate
        if (!isDuplicate) {
          pairs[pairs.length] = pair;
        }
      }
    }
  }
  
  return pairs;
}