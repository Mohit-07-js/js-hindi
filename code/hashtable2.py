class Hashfunction:
    def __init__(self,size):
        self.size = size
        self.table = [None]*size
    def hash_function(self,key):
        return key%self.size
    def insert(self,key):
        index = self.hash_function(key)
        start_index = index
        while self.table[index] is not None:
            index = (index+1)%self.size
            if self.table[index]== start_index:
                print("hash table is full cannot insert",key)
                return
        self.table[index] = key
        print(f"key{key}inserted at index {index}")
    def search(self,key):
        index = self.hash_function(key)
        start_index = index
        while self.table[index] is not None:
            if self.table[index] == key:
                print(f"key{key} found at index{index}")
                return True
            index = (index+1)%self.size
            if index == start_index:
                break
        print((f"{key}not found"))
        return False

    def delete(self,key):
        index = self.hash_function(key)
        start_index = index
        while self.table[index] is not None:
            if self.table[index] == key:
                self.table[index] =None
                print(f"key{key} is deleted at inndex{index}")
                return
            index = (index+1)%self.size
            if index == start_index:
                break
        print(f"{key}deleting key not found")
    def display(self):
        print("\n hash table")
        for i,val in enumerate(self.table):
            print(f"{i}:{val}")
                
ht = Hashfunction(7)
keys = [10, 20, 15, 7, 5, 32]
for key in keys:
    ht.insert(key)

ht.display()
ht.search(15)
ht.delete(20)
ht.display()
ht.search(99)