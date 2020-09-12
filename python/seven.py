new_id = input()

print(new_id)
# 1. 소문자 변환
new_id = new_id.lower()
print(new_id)
print(len(new_id))
print('1----------------------------------')
# 2. 소문자. 숫자, 빼기 밑줄 마침표를 제외한 모든 문자열 제거
list = []
for i in range(len(new_id)):

    if new_id[i] in '-':
        list.append(new_id[i])
    elif new_id[i] in '_':
        list.append(new_id[i])
    elif new_id[i] in '.':
        list.append(new_id[i])
    elif new_id[i].isalpha():
        list.append(new_id[i])

print(list)
new_id = list
print(new_id)
print('2----------------------------------')

list = []
# 3. 마침표2번 이상 연속된 부분을 하나의 마침표로 치환
for i in range(0, len(new_id)):

    if new_id[i] in '.':
        if new_id[i+1] in '.':
            i = i-1
            continue

    list.append(new_id[i])

print(list)
new_id = list
print(new_id)

print('3----------------------------------')
# 4. 마침표가 처음이나 끝에 위치하면 마침표 제거
if new_id[0] == '.':
    del new_id[0]

if new_id[len(new_id)-1] == '.':
    del new_id[len(new_id)-1]

print(new_id)
print('4----------------------------------')
# 5. 빈문자열이라면 a를 대입
for i in range(len(new_id)):
    if new_id[i] == ' ':
        new_id[i] = 'a'

print(new_id)
print('5----------------------------------')
# 6 길이가 16자 이상이면 앞에 15자 를 제외한 나머지 문자는 제거
# 만약 제거 후 마침표가 끝에 위치하면 마침표를 제거
if len(new_id) >= 16:
    del new_id[15:len(new_id)]

if new_id[0] == '.':
    del new_id[0]

if new_id[len(new_id)-1] == '.':
    del new_id[len(new_id)-1]

print(new_id)

# 아이디의 길이가 2자 이하라면 마지막 문자를 길이가 3이 될때까지 반복
if len(new_id) <= 2:
    while(True):
        new_id.append(new_id[len(new_id)-1])
        if len(new_id) == 3:
            break
print(new_id)

answer = ''
answer = ''.join(new_id)
print('----------------')
print(answer)
