def bubble(b):
    n = len(b)
    for i in range(n):
        for j in range(0,n-i-1):
            if b[j]>b[j+1]:
                b[j],b[j+1] = b[j+1],b[j]
    print("sorted using bubble",b)
def selection(b):
    n = len(b)
    for i in range(n):
        min_i = i
        for j in range(i+1,n):
            if b[j]<b[min_i]:
                min_i = j
        b[i],b[min_i] = b[min_i],b[i]
    print("sorted using selectioinn sort" , b)
a = list(map(int,input("enter list:").split()))
c = int(input("select 1 for bubble and 2 fofr selection:"))
if c ==1:
    bubble(a)
else:
    selection(a)

top = a[-5:]
top1 = top[::-1]
print("top salaried are",top1)