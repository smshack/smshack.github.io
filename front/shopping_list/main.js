//1. 사용자가 inpuut 박스에서 타이핑할 수 있다
//2. 버튼을 클릭하거나 엔터를 치면 아이템을 등록한다
//3. 등록한 아이템은 스크롤링 되는 리스트에 표기 된다
//4. 쓰레기통 아이콘을 클릭하면 목록에서 삭제 된다.
'use strict';
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  //1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  //2. 새로운 아이템을 만듦(텍스트 + 삭제 버튼)
  const item = createItem(text);
  //3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);
  //4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: 'center' });
  //5. 인풋을 초기화 한다.
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const span = document.createElement('span');
  span.setAttribute('class', 'item__name');
  span.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = ' <i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(span);
  item.appendChild(deleteBtn);
  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}
//add 버튼을 누르면 이벤트가 발생한다
addBtn.addEventListener('click', () => {
  onAdd();
});
// input 박스에서 키보드가 눌리면 이벤트가 발생
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
