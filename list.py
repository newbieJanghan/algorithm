n = int(input())
num_list = []

while n != 0:
    num_list.append(n)
    n = int(input())

average = sum(num_list) / len(num_list)
print(average)
