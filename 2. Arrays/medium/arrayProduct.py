def productExceptSelf(nums):
  results = []
  for i in range(len(nums)):
    results.append(1)

  for i in range(1, len(nums)):
    results[i] = nums[i - 1] * results[i - 1]

  right = 1
  for i in range(len(nums) - 1, -1, -1):
    results[i] *= right
    print(nums[i])
    right *= nums[i]

  return results

productExceptSelf([1,2,3,4])