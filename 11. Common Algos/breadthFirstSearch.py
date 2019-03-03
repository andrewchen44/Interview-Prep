class Node:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def breadthFirstSearch(root, targetVal):
    queue = [root]
    
    while len(queue) > 0:
        node = queue.pop(0)

        if node.val == targetVal:
            return node
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)