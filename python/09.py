for a in range(998, 1, -1):
    for b in range(1000-a-1, 1, -1):
        c = 1000-a-b
        if a*a + b*b == c*c:
            print(a*b*c)
            exit(0)

