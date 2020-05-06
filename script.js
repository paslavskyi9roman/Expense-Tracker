const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransaction = [
  { id: 1, text: 'Book', amount: -20 },
  { id: 2, text: 'Salary', amount: 400 },
  { id: 3, text: 'Pub', amount: -70 },
  { id: 4, text: 'Money Transfer', amount: 110 },
];

let transaction = dummyTransaction;

// Add transaction to DOM list
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span><button class='delete-btn'></button>
    `;

  list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
  const amounts = transaction.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  moneyPlus.innerText = `$${income}`;
  moneyMinus.innerText = `$${expense}`;
}

// Init app
function init() {
  list.innerHTML = '';

  transaction.forEach(addTransactionDOM);
  updateValues();
}

init();
