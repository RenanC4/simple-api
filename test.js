const sumUnique = (nums) => {
  let sum = 0;
  nums.forEach(num => {
      if (nums.indexOf(num) === nums.lastIndexOf(num)) sum += num;
  });
  return sum;
}

const sumUniqueOptimized = (nums) => {
  if(!Array.isArray(nums)) {
    throw new TypeError("Input needs to be an Array")
  }

  if(nums.some(num => typeof num !== 'number')) {
    throw new TypeError("Input needs to be an Array of Numbers")
  }

  let counts = {}
  let sum = 0;

  try {
    nums.forEach(num => {
      counts[num] = (counts[num] || 0) + 1
    })

    for(let num in counts ) {
      if (counts[num] === 1) {
        sum += Number(num)
      }
    }

    return sum
  } catch (error) {
    throw new Error(error)
  }

}


