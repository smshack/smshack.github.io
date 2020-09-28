from urllib.request import urlopen
from bs4 import BeautifulSoup as bs
import urllib.request as req
from selenium import webdriver
from time import sleep

print('크롤링할 유투브 페이지 url 입력')
input_url = input()
# 크롬 웹 드라이버의 경로를 설정
driver = webdriver.Chrome('D:\chromedriver.exe')

# 크롬을 통해 유투브 리스트 페이지에 연결
driver.get(input_url)


# 웹 페이지의 소스코드를 파싱
html = driver.page_source
# print(html)
soup = bs(html, 'html.parser')
# print(soup)
# 리스트를 파싱
title = soup.find(
    class_='yt-simple-endpoint style-scope yt-formatted-string')
lec_lists = soup.find_all(id='video-title')
lec_urls = soup.find_all(
    class_='yt-simple-endpoint style-scope ytd-playlist-video-renderer')

# 제목 파싱
title = title.text

leclists = []
lecurls = []

for lec_list in lec_lists:
    leclists.append(lec_list['aria-label'])

for lec_url in lec_urls:
    lecurls.append('https://www.youtube.com/'+lec_url['href'])
# print(leclists)
i = 1
lec_nums = []
lec_name = []
lec_publishers = []
lec_urls = lecurls

for lec_list in leclists:
    # 강의 번호
    lec_nums.append(i)
    i += 1

    # 강의명
    lec = lec_list.split('게시자:')
    lec_name.append(lec[0])
    # 게시자
    lec_publishers.append(lec[1][:lec[1].index(' 전 ')-3])

for i in range(len(lec_nums)):
    print(lec_nums[i], '번째 강의', '\n강의명: ',
          lec_name[i], '\n강의자: ', lec_publishers[i], '\n강의url: ', lec_urls[i])

# -------------------------------------------------------------------------------------------
