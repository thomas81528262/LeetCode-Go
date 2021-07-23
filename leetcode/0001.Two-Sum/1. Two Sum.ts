function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i+=1) {
        const checkValue = target - nums[i];
        if (map.has(checkValue)) {
           const checkIndex = map.get(checkValue);
           return [checkIndex, i];
        } else {
           map.set(nums[i], i);
        }
    }
    return [-1, -1];
};
