'''
함수 processOrder를 구현하세요.
'''

class orderInfo:
    '''
    이 부분은 수정하지 마세요.
    '''
    def __init__(self, t, d, v):
        self.time = t
        self.duration = d
        self.vip = v


def processOrder(orders) :
    '''
    주문 정보가 주어질 때, 주문이 처리되는 순서를 반환합니다.
    '''
    nm = []
    vip = []
    temp = [0]
    orders = temp + orders
    
    result = [1]
    current = orders[1].duration + orders[1].time
    
    for i in range(2, len(orders)):
        if orders[i].vip == 1:
            vip.append(i)
        else:
            nm.append(i)
    
    print(nm, vip)
    while len(vip) > 0:
        while orders[vip[0]].time > current:
            if len(nm) < 0 or orders[nm[0]].time >= orders[vip[0]].time :
                current = orders[vip[0]].time
            elif orders[nm[0]].time <= current and orders[nm[0]].time < orders[vip[0]].time:
                result.append(nm[0])
                current += orders[nm[0]].duration
                nm = nm[1:]
            elif orders[nm[0]].time > current:
                current = orders[nm[0]].time
        result.append(vip[0])
        current += orders[vip[0]].duration
        vip = vip[1:]
    while len(nm) > 0:
        result.append(nm[0])
        nm = nm[1:]
    
    return result
