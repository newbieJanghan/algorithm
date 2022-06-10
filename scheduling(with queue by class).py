'''
Queue 클래스를 구현하세요.
'''

class Queue:
    '''
    List를 이용하여 다음의 method들을 작성하세요.
    '''
    def __init__(self) :
        '''
        큐 myQueue을 만듭니다.
        '''
        self.myQueue = []

    def push(self, n) :
        '''
        queue에 정수 n을 넣습니다.
        '''
        self.myQueue.append(n)

    def pop(self) :
        '''
        queue에서 가장 앞에 있는 정수를 제거합니다. 만약 queue에 들어있는 값이 없을 경우에는 아무 일도 하지 않습니다. 
        '''
        if self.empty() == 1:
            return
        
        del self.myQueue[0]

    def size(self) :
        '''
        queue에 들어 있는 정수의 개수를 return 합니다.
        '''
        return len(self.myQueue)

    def empty(self) :
        '''
        queue이 비어있다면 1, 아니면 0을 return 합니다.
        '''
        if self.size() == 0:
            return 1
        else:
            return 0

    def front(self) :
        '''
        queue의 가장 앞에 있는 정수를 return 합니다. 만약 queue에 들어있는 값이 없을 경우에는 -1을 return 합니다.
        '''
        if self.empty() == 1:
            return -1
        
        return self.myQueue[0]

    def back(self) :
        '''
        queue의 가장 뒤에 있는 정수를 return 합니다. 만약 queue에 들어있는 값이 없을 경우에는 -1을 return 합니다.
        '''
        if self.empty() == 1:
            return -1
        
        return self.myQueue[-1]

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
        
def selectQueue(nmQ, vipQ, time, orders):
    nmIdx = nmQ.front()
    vipIdx = vipQ.front()
    
    if vipIdx == -1:
        return nmQ
        
    if nmIdx == -1:
        return vipQ
        
    if time < orders[nmIdx].time and time < orders[vipIdx].time:
        if orders[nmIdx].time < orders[vipIdx].time:
            return nmQ
        else:
            return vipQ
            
    if time >= orders[nmIdx].time and time < orders[vipIdx].time:
        return nmQ
        
    if time < orders[nmIdx].time and time >= orders[vipIdx].time:
        return vipQ
            
    return vipQ

def processOrder(orders) :
    '''
    주문 정보가 주어질 때, 주문이 처리되는 순서를 반환합니다.
    '''

    result = []
    
    nmQ = Queue()
    vipQ = Queue()
    
    jobEndTime = 0
    curTime = -1 # to have no value
    
    for i in range(len(orders)):
        curTime = orders[i].time
        
        if orders[i].vip == 0:
            nmQ.push(i)
        else:
            vipQ.push(i)
            
        while jobEndTime <= curTime and not(nmQ.empty() == 1 and vipQ.empty() == 1):
            targetQueue = selectQueue(nmQ, vipQ, jobEndTime, orders)
            
            index = targetQueue.front()
            jobEndTime = max(jobEndTime, orders[index].time) + orders[index].duration
            
            result.append(index + 1)
            targetQueue.pop()
            
    while not (nmQ.empty() == 1 and vipQ.empty() == 1):
        targetQueue = selectQueue(nmQ, vipQ, jobEndTime, orders)

        index = targetQueue.front()
        jobEndTime = max(jobEndTime, orders[index].time) + orders[index].duration

        result.append(index + 1)
        targetQueue.pop()
            

    return result
