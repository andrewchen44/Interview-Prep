// Write a function to check if a tree is symmetric

var isSymmetric = function(root) {
    
    const isMatch = function(tree1, tree2) {
        // if they are both null, you've reached the end of this branch
        if(tree1 === null && tree2 === null) {
            return true;
        }
        // if only one is null, they are not symmetric
        if(tree1 === null || tree2 === null) {
            return false;
        }
        // if the values match and all the branches match, return true
        return tree1.val === tree2.val && isMatch(tree1.left, tree2.right) && isMatch(tree1.right, tree2.left);
    }
    
    return isMatch(root, root);
    
};