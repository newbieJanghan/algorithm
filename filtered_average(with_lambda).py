import sys
from functools import reduce

def filtered_average(lst):
    average = reduce(lambda x, y: x + y, lst) / len(lst)
    filtered = list(filter(lambda x: x >= average, lst))
    return reduce(lambda x, y: x + y, filtered) / len(filtered)


average = filtered_average(list(map(int, sys.stdin.readline().split())))

print(int(average))
