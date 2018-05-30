// Given a binary tree, return all root-to-leaf paths.

var binaryTreePaths = function(root) {
  let results = [];
  if(root === null) {
      return results;
  }
  if(!root.left && !root.right) {
      return [root.val + '']
  }
  
  const traverse = (node, str) => {
      if(node === null) return;
      let newStr = str + '->' + node.val;
      if(!node.right && !node.left) {
          results.push(newStr);
          return;
      }
      traverse(node.right, newStr);
      traverse(node.left, newStr);
  }
  traverse(root.left, "" + root.val);
  traverse(root.right, "" + root.val);
  return results;
};