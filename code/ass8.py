class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None


class BST:
    def __init__(self):
        self.root = None

    # Insert a key
    def insert(self, root, key):
        if root is None:
            return Node(key)
        if key < root.key:
            root.left = self.insert(root.left, key)
        elif key > root.key:
            root.right = self.insert(root.right, key)
        return root

    # Search a key
    def search(self, root, key):
        if root is None or root.key == key:
            return root
        if key < root.key:
            return self.search(root.left, key)
        else:
            return self.search(root.right, key)

    # Find the node with minimum key value
    def minValueNode(self, node):
        current = node
        while current.left:
            current = current.left
        return current

    # Delete a key
    def delete(self, root, key):
        if root is None:
            return root

        # Traverse to find the node
        if key < root.key:
            root.left = self.delete(root.left, key)
        elif key > root.key:
            root.right = self.delete(root.right, key)
        else:
            # Node with one or no child
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left

            # Node with two children:
            # Get the inorder successor (smallest in right subtree)
            temp = self.minValueNode(root.right)
            root.key = temp.key
            root.right = self.delete(root.right, temp.key)

        return root

    # Inorder traversal
    def inorder(self, root):
        if root is None:
            return []
        return self.inorder(root.left) + [root.key] + self.inorder(root.right)


# ---------------------------
# Example Usage
# ---------------------------
if __name__ == "__main__":
    tree = BST()
    root = None

    # Insert nodes
    for key in [50, 30, 20, 40, 70, 60, 80]:
        root = tree.insert(root, key)

    print("Inorder traversal:", tree.inorder(root))

    # Search example
    key_to_search = 40
    found = tree.search(root, key_to_search)
    print(f"Search for {key_to_search}:", "Found" if found else "Not Found")

    # Delete a node
    key_to_delete = 20
    root = tree.delete(root, key_to_delete)
    print(f"After deleting {key_to_delete}:", tree.inorder(root))