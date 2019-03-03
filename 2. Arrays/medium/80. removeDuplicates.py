def removeDuplicates(nums):
    if nums == None or not len(nums):
        return 0

    for x in range(len(nums)):
        curr = nums[x]
        prev = nums[x-1]
        next = nums[x+1]

        if prev == curr and next == curr:
            nums.pop(x)
        if x >= len(nums) - 2:
            break

    return nums

removeDuplicates([1,1,1,2,2,2,2,3,3,4,5])