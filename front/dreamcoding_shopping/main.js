//-----------------------------------------------------------------------------------------------------------------------------------

// -1 json 파일에 들어있는 정보를 동적으로 받아오는 함수
//Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json') //fetch('파일경로 or url') 데이터를 받고자 하는 파일 정보를 받아옴 => 성공적으로 받아오면 response 오브젝트를 전달
    .then((response) => response.json()) //reponse 로 받아온 데이터를 json으로 변환
    .then((json) => json.items); //json 안에 있는 items를 리턴해 준다
}
//-----------------------------------------------------------------------------------------------------------------------------------

//-2 아이템인자를 받아와서 items 데이터를 html요소로 변환해서 페이지에 표시하도록 하는 함수
//update the list with the given items

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items //items 안에는 json에 정의한 각각의 오브젝트가 item들이 들어있음 이것을 html요소로 변환해 줌 한가지의 배열형태에서 다른 형태의 배열로 변환하는것 매핑map 사용
    .map((item) => createHTMLString(item))
    .join('');
}
// -2.1 items의 안에 item을 매핑해서 가져온 정보를 li요소에 추가해주는 함수
// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
  `;
}
//-----------------------------------------------------------------------------------------------------------------------------------

// -3. 각 버튼을 클릭했을때 필터링 되서 나오도록 이벤트 리스너를 등록하고 원하는 이벤트를 발생시키는 함수를 사용
// 이벤트 위임
//하나하나의 이벤트 리스트를 반복해서 등록하는 것이 아니라
// 상위 노드에 이벤트를 등록해서 하위 노드의 이벤트를 조절하는 방법
// addEventListener 원하는 노드에 이벤트 리스터를 등록하고 event 객체를 리턴해줌
function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items)); //로고가 클릭이 될 경우 전체 아이템들을 보여준다
  buttons.addEventListener('click', (event) => onButtonClick(event, items)); //버튼을 클릭하면
}

//버튼이 클릭 되었을 때 필터링을 해주는 함수
//event ,items 의 값을 받아서
// 각 html요소에 데이터 키와 데이터의 값을 지정해 줄수 있고 event 객체를 통해 전달 된다
//  data-key="type"             data-value="pants"
//  event.target.dataset.key    event.target.dataset.value
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    // 전달 받은 값이 없으면 함수 종료
    return;
  }
  const filtered = items.filter((item) => item[key] === value);
  displayItems(filtered);
}
//-----------------------------------------------------------------------------------------------------------------------------------
//0. main.js 가 로드가 되면 loadItems 함수를 실행하게 한다
//1. data.json 파일을 읽어와서 아이템의 정보를 전달해줌
//2. 아이템을 받아오는 시간이 걸리므로 Promise를 전달하게 한다.

//main  아이템을 동적으로 받아와서 Promise가 성공적으로 값을 리턴하면
//전달받은 items를 이용해서 아이템들을 보여주고
//3.보여준 아이템들에 이벤트 리스너를 달아서 적절히 필터링을 할 수 있게 기능을 넣어준다
//=============================================================================================
loadItems()
  .then((items) => {
    //2.1Promise가 성공적으로 되면 아이템을 받아온다
    displayItems(items); //2.2.받아온 아이템들을 HTML 문서에서 보여주는 함수
    setEventListeners(items); //받아온 아이템들 이용해서 버튼을 누르면 필터링을 해야한다(적절한 이벤트 리스너 추가)
  })
  .catch(); //실패시 에러 메시지를 보여주거나 경고 문구를 띄우는 식으로 만든다
//=============================================================================================

//-----------------------------------------------------------------------------------------------------------------------------------
