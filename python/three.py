from itertools import combinations
orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
course = [2, 3, 4]
print(orders)
print(course)
ordertemp = []


print('1----------------------------------')
for i in range(len(orders)):
    for j in range(len(orders[i])):
        ordertemp.append(orders[i][j])

ordertemp.sort()
print(ordertemp)
print('2----------------------------------')

menutemp = set(ordertemp)
menu = list(menutemp)
menu.sort()
print(menu)
print('3----------------------------------')

coursetemp = list(combinations(menu, 2))
print(coursetemp)
coursemap = []
for i in range(len(coursetemp)):
    coursemap.append(''.join(list(coursetemp[i])))


print(coursemap)
count = [0]*len(coursemap)

for i in range(len(orders)):
    for j in range(len(coursemap)):
        if orders[i] in coursemap[j]:
            count[i] += 1
print('4----------------------------------')
print(count)
print('ㅅㅂ 죽어라 수학자들.......')
