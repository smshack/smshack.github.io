from notion.client import NotionClient
from notion.block import TodoBlock, PageBlock, TextBlock, CodeBlock

client = NotionClient(
    token_v2="7a4e91fcd60e67e44534c4ebd3e1c0768782705974e2f57f6c64acdcb99e9b9b7a6920fa5d05cbc6403b4b7d507956385ac350ef8d5472764bc6c0e9171d500fb3242b8472e2539faaa88c33865c")

page = client.get_block(
    "https://www.notion.so/API-dccb432202844d88a22880071ced0cfb")

print("페이지 제목 확인 :", page.title)

# 텍스트 블록 만들기(TextBlock)
text1 = page.children.add_new(TextBlock)
text1.title = "TextBlock"

# 텍스트 블록 만들기(TodoBlock)
todo1 = page.children.add_new(TodoBlock)
todo1.title = "TodoBlock"
todo2 = page.children.add_new(TodoBlock)
todo2.title = "강의 TodoBlock 작성"
todo3 = page.children.add_new(TodoBlock)
todo3.title = "회의 TodoBlock 여의도"
todo3.checkd = True

# 페이지 블록 만들기(PageBlock)
page1 = page.children.add_new(PageBlock)
page1.title = "생성된 페이지"

# 코드 블록 만들기(CodeBlock)
code1 = page.children.add_new(CodeBlock)
code1.title = "파이썬 코드를 만드는 중입니다"


print("자동완성 완료")
