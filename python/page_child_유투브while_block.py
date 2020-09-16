from notion.client import NotionClient
from notion.block import TodoBlock, PageBlock, TextBlock, CodeBlock, VideoBlock

client = NotionClient(
    token_v2="7a4e91fcd60e67e44534c4ebd3e1c0768782705974e2f57f6c64acdcb99e9b9b7a6920fa5d05cbc6403b4b7d507956385ac350ef8d5472764bc6c0e9171d500fb3242b8472e2539faaa88c33865c")

page = client.get_block(
    "https://www.notion.so/API-dccb432202844d88a22880071ced0cfb")

print("페이지 제목 확인 :", page.title)

answer = "예"
text = page.children.add_new(TextBlock)
text.title = "파이썬 API 프로그램 유튜브 강의"
while answer == "예":
    video1 = page.children.add_new(VideoBlock)
    video1.width = 600
    video1.height = 400
    input_url = input("유투브 URL 주소를 입력:")
    video1.set_source_url(input_url)
    answer = input("추가로 비디오 블록을 생성하시겠습니까??")


print("자동완성 완료")
