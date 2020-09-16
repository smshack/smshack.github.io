from notion.client import NotionClient

# Obtain the `token_v2` value by inspecting your browser cookies on a logged-in session on Notion.so
# 로그인 정보인 토근 값을 개발자 도구에서 확인해서 넣어 주세요
client = NotionClient(
    token_v2="7a4e91fcd60e67e44534c4ebd3e1c0768782705974e2f57f6c64acdcb99e9b9b7a6920fa5d05cbc6403b4b7d507956385ac350ef8d5472764bc6c0e9171d500fb3242b8472e2539faaa88c33865c")

# Replace this URL with the URL of the page you want to edit
# 바꿀 페이지의 URL을 넣어 주세요
page = client.get_block(
    "https://www.notion.so/750c8a5e21c74d9ab2483402d9d890e4")

print("노션 페이지 제목은 :", page.title)

# Note: You can use Markdown! We convert on-the-fly to Notion's internal formatted text data structure.
# 변경할 페이지의 제목을 넣어주세요
#page.title = "The title has now changed, and has *live-updated* in the browser!"

print("부모 페이지의 {} ID 값은 {}" .format(page.id, page.parent.id))

# for child in page.children:
#    print(child.title)
