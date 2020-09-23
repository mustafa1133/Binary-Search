var binary= function(nums, target){
let startIndex= 0;
let endIndex = nums.length -1;


for(startIndex; startIndex<= endIndex;)
{
    let midIndex= Math.floor((startIndex + endIndex) / 2);
    if(target === nums[midIndex])
    {
        return midIndex; 
    }

    if(target > nums[midIndex])
    {
        startIndex= midIndex +1;
    }

    if(target < nums[midIndex])
    {
        endIndex= midIndex -1;
    }

}
return 0;
}
