const createFrequencyMap = (nums) => {
  const frequencyMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (frequencyMap.has(nums[i]))
      frequencyMap.set(nums[i], frequencyMap.get(nums[i]) + 1);
    else frequencyMap.set(nums[i], 1);
  }

  return frequencyMap;
};

const findMode = (nums) => {
  const frequencyMap = createFrequencyMap(nums);
  let mostFrequentKey = 0;
  let maxCount = 0;

  frequencyMap.forEach((value, key) => {
    if (value > maxCount) {
      maxCount = value;
      mostFrequentKey = key;
    }
  });

  return +mostFrequentKey;
};

const validateNumsArray = (nums) => {
  const validatedArray = [];

  for (let i = 0; i < nums.length; i++) {
    const numValue = Number(nums[i]);

    if (Number.isNaN(numValue)) {
      return new Error(
        `The value ${nums[i]} at index ${i} is not a valid number.`
      );
    }

    validatedArray.push(numValue);
  }

  return validatedArray;
};

const findMedian = (nums) => {
  nums.sort((a, b) => a - b);

  const middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }
  return median;
};

const findMean = (nums) => {
  if (nums.length === 0) return 0;
  return (
    nums.reduce((acc, cur) => {
      return acc + cur;
    }) / nums.length
  );
};

export { validateNumsArray, findMode, findMean, findMedian };
