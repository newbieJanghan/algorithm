def is_stack_sequence(nums) :
    N = map(int, nums)
    stack = []
    for n in N:
        if len(stack) == 0:
            for i in range(1, n):
                stack.append(i)
        elif stack[-1] < n:
            for i in range(stack[-1]+1, n):
                stack.append(i)
        elif stack[-1] == n:
            stack.pop()
        else:
            return "No"
    return "Yes"
