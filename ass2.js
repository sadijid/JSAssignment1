let largestArray = (nums) => {
    let largest = nums[0]
    for (let i =0;i<nums.length;i++)
    {
        if (nums[i]>largest)
        {
            largest = nums[i]
        }
    }
    return largest
 }
console.log(largestArray([2,9,6,7]))
