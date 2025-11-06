class hashtable:
    def __init__(self,size):
        self.size = size
        self.table = [[] for _ in range(size)]
    def hash_function(self,key):
        return key%self.size
    def insert(self,key):
        index = self.hash_function(key)
        self.table[index].append(key)
        print(f"key{key} inserted at index {index}")
    def search(self,key):
        index = self.hash_function(key)
        if self.table[index]:
            print(f"key{key} found at index{index}")
            return True
        else:
            print("key not found")
            return False
    def display(self):
        print("\n hash table")
        for i,chain in enumerate(self.table):
            print(f"{i}:{chain}")
    def delete(self,key):
        index = self.hash_function(key)
        if self.table[index]:
            self.table[index].remove(key)
            print(f"key {key} is removed from index{index}")
        

ht = hashtable(7)
keys =[10,20,30,40,50,60]
for key in keys:
    ht.insert(key)
ht.display()
ht.search(50)        
ht.search(90)
ht.delete(30)
ht.display()
