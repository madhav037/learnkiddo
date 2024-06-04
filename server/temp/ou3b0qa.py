def sum(n,m):
    return n+m

def sub(n,m):
    return abs(n-m)

def multi(n,m):
    return n*m

def div(n,m):
    return float(n/m)


def main():
    x = (int)(input("Enter first value :"))
    y = (int)(input("Enter second value :"))

    ope = input("Enter operation : ")

    match ope:
        case "sum":
            print(sum(x,y))
        case "sub":
            print(sub(x,y))
        case "multi":
            print(multi(x,y))
        case "div":
            print(div(x,y))

main()

