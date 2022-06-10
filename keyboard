def notepad(s, commands) :
    L = list(s)
    R = []
    
    for line in commands:
        command = line.split()
        action = command[0]
        if action == "P":
            L.append(command[1])
        elif action == "L":
            if len(L) != 0:
                R.append(L.pop())
        elif action == "R":
            if len(R) != 0:
                L.append(R.pop())
        elif action == "D":
            if len(L) != 0:
                L.pop()
    total = L + R[::-1]
    return "".join(total)
