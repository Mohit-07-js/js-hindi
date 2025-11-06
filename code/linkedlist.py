class StudentNode:
    def __init__(self,name,roll_no,marks):
        self.name = name
        self.roll_no = roll_no
        self.marks = marks
        self.next =None

class StudentLinkedList:
    def __init__(self):
        self.head = None

    def push_back(self,name,roll_no,marks):
        newNode = StudentNode(name,roll_no,marks)
        if self.head == None:
            self.head = newNode
        else:
            temp = self.head
            while temp.next is not None:
                temp = temp.next
            temp.next = newNode 
        print("New Student data is added.")
    def display(self):
        if self.head == None:
            return
        else:
            temp = self.head
            while temp is not None:
                print("name=",temp.name,"roll_no=",temp.roll_no,"marks=",temp.marks)
                temp = temp.next
    def search(self):
        print("Enter what do you want to search: ")
        print("1. name \n2.roll_no")
        choice = int(input())
        if choice ==1:
            str = input("Enter name you want to search(with corrct cases):")
            temp = self.head
            i = 0
            while temp:
                if temp.name == str:
                    print("Student recor found at index:",i)
                i+=1
                temp = temp.next



li = StudentLinkedList()
li.push_back("yash",36,100) 
li.push_back("mohit",32,101)
li.push_back("Aditya",35,102)
li.display()
# li.search()