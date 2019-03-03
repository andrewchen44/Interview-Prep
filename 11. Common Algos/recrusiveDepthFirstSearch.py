class Node:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def depthFirstSearch(node, targetVal):
    if not node:
        return

    if node.val == targetVal:
        return node

    return depthFirstSearch(node.left, targetVal) or depthFirstSearch(node.right, targetVal)