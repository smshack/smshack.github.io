//Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json') //
    .then((response) => response.json())
    .then((json) => json.items);
}

const nav = document.querySelector('nav');
const list_items = document.querySelector('.items');
// Create HTML list item from the given
function createHTMLString(item) {
  const baseUrl = 'https://smshack.github.io/front/';
  return `
    <li>
    <a class="view"
      href="${baseUrl}${item.url}"
      >${item.type} 폼 ${item.num}</a
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

nav.addEventListener('click', () => {
  loadItems()
    .then((items) => {
      console.log(items);
      // displayItems(items);
      setEventListeners(items);
    })
    .catch(console.log);
});
function onButtonClick(event, items) {
  console.log(event.target);
  const dataset = event.target.dataset;
  console.log(dataset);

  const key = dataset.key;
  console.log(key);

  const value = dataset.value;
  console.log(value);

  if (key == null || value == null) {
    return;
  }

  const filtered = items.filter((item) => item[key] === value);
  console.log(filtered);
  displayItems(filtered);
  //updateItems(items, key, value);
}
function setEventListeners(items) {
  // const nav_list = nav.querySelectorAll('li'); //이벤트 위임

  nav.addEventListener('click', (event) => onButtonClick(event, items));
  // nav.addEventListener('click', () => displayItems(items));
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
