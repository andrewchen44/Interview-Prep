// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

var sortedArrayToBST = function(nums) {
    if(nums === null) {
        return null;
    }
    const build = function(low, high) {
        if(low > high) {
            return null;
        }
        let mid = Math.ceil((low + high) / 2);
        const node = new TreeNode(nums[mid]);
        node.left = build(low, mid - 1);
        node.right = build(mid + 1, high);
        return node;
    }
    return build(0, nums.length - 1)
};

// let the middle of the array be the root node, then the middle of the left half will be the left node and the middle of the right will be the right node. Recurse down until there are no more nodes. This has a time complexity of O(n), where n is the number of integers in the nums array, as you need to create a new node for each integer. This has a space complexity of O(n) as there is a call for each node.