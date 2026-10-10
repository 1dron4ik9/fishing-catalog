const products = [
  { id: 1, title: "Спінінг Golden Catch Inquisitor INS-762ML 2.29 м 4-18 г", price: "3 250 ГРН", category: "rods", image: "img/product_image/rod.png" },
  { id: 2, title: "Воблер TsuYoki Chef 32F", price: "262 ГРН", category: "baits", image: "img/product_image/vobler.png" },
  { id: 3, title: "Спінінг Daiwa Fuego 902MLFS 2.74 м 5-25 г", price: "4 279 ГРН", category: "rods", image: "img/product_image/daiwa.png" },
  { id: 4, title: "Котушка Trabucco Oceanic Pro Surf 8000 з волосінню", price: "1 057 ГРН", category: "reels", image: "img/product_image/reel1.png" },
  { id: 5, title: "Котушка Salmo Diamond Feeder 5 5000FD", price: "1 827 ГРН", category: "reels", image: "img/product_image/reel2.png" },
  { id: 6, title: "Волосінь Shimano Aspire Silk Shock Ice 50 м", price: "147 ГРН", category: "line", image: "img/product_image/line.png" },
  { id: 7, title: "Подвійний крючок Select DH-22L", price: "104 ГРН", category: "gear", image: "img/product_image/hook.png" },
  { id: 8, title: "Блесна цикада Strike Pro Cyber Vibe 40 мм 6.6 г", price: "290 ГРН", category: "baits", image: "img/product_image/bless.png" },
  { id: 9, title: "Ехолот Lowrance HOOK2-4x Bullet (000-14013-001)", price: "6 000 ГРН", category: "gear", image: "img/product_image/echo.png" },
  { id: 10, title: "Поплавок бомбарда GOSS Floating", price: "29 ГРН", category: "gear", image: "img/product_image/poplavok.png" },
  { id: 11, title: "Волосінь Golden Catch Verte-X Flat True Orange 300 м", price: "390 ГРН", category: "line", image: "img/product_image/line2.png" },
  { id: 12, title: "Монтаж для силікону Dragon A.F.W. 1x7 трійник № 2 Surfstrand", price: "120 ГРН", category: "gear", image: "img/product_image/montaj.png" },
  { id: 13, title: "Спінінг Golden Catch Inquisitor INS-762ML 2.29 м 4-18 г", price: "3 250 ГРН", category: "rods", image: "img/product_image/rod.png" },
  { id: 14, title: "Воблер TsuYoki Chef 32F", price: "262 ГРН", category: "baits", image: "img/product_image/vobler.png" },
  { id: 15, title: "Спінінг Daiwa Fuego 902MLFS 2.74 м 5-25 г", price: "4 279 ГРН", category: "rods", image: "img/product_image/daiwa.png" },
  { id: 16, title: "Котушка Trabucco Oceanic Pro Surf 8000 з волосінню", price: "1 057 ГРН", category: "reels", image: "img/product_image/reel1.png" },
  { id: 17, title: "Котушка Salmo Diamond Feeder 5 5000FD", price: "1 827 ГРН", category: "reels", image: "img/product_image/reel2.png" },
  { id: 18, title: "Волосінь Shimano Aspire Silk Shock Ice 50 м", price: "147 ГРН", category: "line", image: "img/product_image/line.png" },
  { id: 19, title: "Подвійний крючок Select DH-22L", price: "104 ГРН", category: "gear", image: "img/product_image/hook.png" },
  { id: 20, title: "Блесна цикада Strike Pro Cyber Vibe 40 мм 6.6 г", price: "290 ГРН", category: "baits", image: "img/product_image/bless.png" },
  { id: 21, title: "Ехолот Lowrance HOOK2-4x Bullet (000-14013-001)", price: "6 000 ГРН", category: "gear", image: "img/product_image/echo.png" },
  { id: 22, title: "Поплавок бомбарда GOSS Floating", price: "29 ГРН", category: "gear", image: "img/product_image/poplavok.png" },
  { id: 23, title: "Волосінь Golden Catch Verte-X Flat True Orange 300 м", price: "390 ГРН", category: "line", image: "img/product_image/line2.png" },
  { id: 24, title: "Монтаж для силікону Dragon A.F.W. 1x7 трійник № 2 Surfstrand", price: "120 ГРН", category: "gear", image: "img/product_image/montaj.png" }
];

const grid = document.querySelector('.products-grid');
const buttons = document.querySelectorAll('.cat-btn');

const scrollArrow = document.querySelector('.scroll-arrow');
const categoriesList = document.querySelector('.categories-list');

scrollArrow.addEventListener('click', () => {
  let activeIndex = Array.from(buttons).findIndex(btn => btn.classList.contains('active'));
  
  if (activeIndex === -1) {
    buttons[0].click();
    buttons[0].scrollIntoView({ 
      behavior: 'smooth', 
      inline: 'nearest', 
      block: 'nearest' 
    });
  } else {
    buttons[activeIndex].classList.remove('active');
    let nextIndex = activeIndex + 1;
    
    if (nextIndex < buttons.length) {
      buttons[nextIndex].click();
      buttons[nextIndex].scrollIntoView({ 
        behavior: 'smooth', 
        inline: 'nearest', 
        block: 'nearest' 
      });
    } else {
      renderProducts(products);
    }
  }
});

function renderProducts(items) {
  grid.innerHTML = '';
  items.forEach(product => {
    grid.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.title}">
        <div class="price__cont">
        <h3>${product.title}</h3>
        <div class="price-row">
          <span class="price">${product.price}</span>
          <button class="cart-icon">
            <img src="./img/icon/vector.svg" alt="Кошик">
          </button>
        </div>
        </div>
        <button class="detail-btn">ДЕТАЛЬНІШЕ</button>
      </div>
    `;
  });
}

renderProducts(products);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (isActive) {
      renderProducts(products);
    } else {
      button.classList.add('active');
      const category = button.getAttribute('data-f');

      if (category === 'all') {
        renderProducts(products);
      } else {
        const filtered = products.filter(item => item.category === category);
        renderProducts(filtered);
      }
    }
  });
});

const modal = document.getElementById('productModal');
const modalClose = document.querySelector('.modal-close');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');

grid.addEventListener('click', (e) => {
  const detailBtn = e.target.closest('.detail-btn');
  if (detailBtn) {
    const card = detailBtn.closest('.card');
    const title = card.querySelector('h3').textContent;
    const price = card.querySelector('.price').textContent;
    const image = card.querySelector('img').src;

    modalImg.src = image;
    modalTitle.textContent = title;
    modalPrice.textContent = price;
    modal.classList.add('active');
  }
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});