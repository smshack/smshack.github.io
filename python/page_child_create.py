from notion.client import NotionClient
from notion.block import TodoBlock


# Obtain the `token_v2` value by inspecting your browser cookies on a logged-in session on Notion.so
# 로그인 정보인 토근 값을 개발자 도구에서 확인해서 넣어 주세요
client = NotionClient(
    token_v2="7a4e91fcd60e67e44534c4ebd3e1c0768782705974e2f57f6c64acdcb99e9b9b7a6920fa5d05cbc6403b4b7d507956385ac350ef8d5472764bc6c0e9171d500fb3242b8472e2539faaa88c33865c")

# Replace this URL with the URL of the page you want to edit
# 바꿀 페이지의 URL을 넣어 주세요
page = client.get_block(
    "https://www.notion.so/API-dccb432202844d88a22880071ced0cfb")

print("페이지 제목 확인 :", page.title)


newchild1 = page.children.add_new(TodoBlock, title="TodoBlock")
print("자동완성 완료")
