//Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json') //
    .then((response) => response.json())
    .then((json) => json.items);
}

// Create HTML list item from the given
function createHTMLString(item) {
  const baseUrl = 'https://smshack.github.io/front/';
  return `
    <li>
    <a
      href="${baseUrl}${item.url}"
      >로그인폼 ${item.num}</a
    >  <a href="${item.link}">강의링크</a>
  </li>`;
}

function displayItems(items) {
  const container = document.querySelector('.items');
  const html = items.map((item) => createHTMLString(item)).join('');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
  console.log(html);
}

//main
loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
