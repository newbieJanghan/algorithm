import sys
from functools import reduce

N = int(input())

def filtered_average(lst, N):
    average = reduce(lambda x, y: x + y, lst) / N
    filtered = list(filter(lambda x: x >= average, lst))
    return reduce(lambda x, y: x + y, filtered) / len(filtered)


average = filtered_average(list(map(int, sys.stdin.readline().split())), N)

print(int(average))
