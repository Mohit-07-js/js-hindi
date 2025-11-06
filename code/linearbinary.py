def linear(y,n):
    if n in y:
        print("id found in linear search")
    else:
        print("id not found in  linear search")

def binary(y,n):
    y.sort()
    print("sorted list is",y)
    left = 0
    right = len(y) -1 
    while left <= right:
        mid = (left+right)//2
        if y[mid] == n:
            return mid
        elif y[mid]<n:
            mid = left+1
        else:
            mid = right -1
        return -1
cs = list(map(int,input("Enter a list:").split()))
x = int(input("enter element to search: "))
print("the given list is",cs)
a = int(input("Select 1 for linear and 2 for binay"))
if a == 1:
    linear(cs,x)
else:
    b = binary(cs,x)
    if b != -1:
        print("element found un binaery search")
    else:
        print("element not found in binary search")