//Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json') //
    .then((response) => response.json())
    .then((json) => json.items);
}

const login_form = document.querySelector('.login_form');
const list_items = document.querySelector('.items');
// Create HTML list item from the given
function createHTMLString(item) {
  const baseUrl = 'https://smshack.github.io/front/';
  return `
    <li>
    <a class="view"
      href="${baseUrl}${item.url}"
      >로그인폼 ${item.num}</a
    >  <a href="${item.link}">강의링크</a>
    <button class="pre_view">미리보기</button>
  </li>`;
}

function displayItems(items) {
  const container = document.querySelector('.items');
  const html = items.map((item) => createHTMLString(item)).join('');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
  //console.log(html);
}

//main

login_form.addEventListener('click', () => {
  loadItems()
    .then((items) => {
      console.log(items);
      displayItems(items);

      //setEventListeners(items);
    })
    .catch(console.log);
});
async function getBanana() {
  await delay(500);
  return '바나나';
}

//------------------------------------------------------------------
list_items.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const view = event.target.parentNode.querySelector('.view')['href'];
    console.log(view);
    createLecContainer(view);
  }
});

function createLecContainer(view) {
  const lec_container = document.querySelector('.lec_container');
  lec_container.innerHTML = `
  <iframe
    src="${view}"
  ></iframe>`;
}
