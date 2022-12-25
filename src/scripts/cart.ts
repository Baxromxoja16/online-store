import { ProductItem } from "..";
const app = <HTMLElement>document.querySelector("#app")!;
const navScore = <HTMLElement>document.querySelector(".nav-score .sum")!;
const addCard: ProductItem[] = [
  {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 5,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
    ],
    total: 100,
    skip: 1,
    limit: 1,
  },
  {
    products: [
      {
        id: 2,
        title: "iPhone 12",
        description: "An apple mobile which is nothing like apple",
        price: 6,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
    ],
    total: 100,
    skip: 1,
    limit: 2,
  },
  {
    products: [
      {
        id: 3,
        title: "iPhone 12",
        description: "An apple mobile which is nothing like apple",
        price: 7,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
    ],
    total: 100,
    skip: 1,
    limit: 2,
  },
  {
    products: [
      {
        id: 4,
        title: "iPhone 12",
        description: "An apple mobile which is nothing like apple",
        price: 8,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
    ],
    total: 100,
    skip: 1,
    limit: 2,
  },
  {
    products: [
      {
        id: 5,
        title: "iPhone 12",
        description: "An apple mobile which is nothing like apple",
        price: 9,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
    ],
    total: 100,
    skip: 1,
    limit: 2,
  },
  {
    products: [
      {
        id: 6,
        title: "iPhone 12",
        description: "An apple mobile which is nothing like apple",
        price: 10,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
    ],
    total: 100,
    skip: 1,
    limit: 2,
  }
];

const cart = {
  popUp(): void {
    app.addEventListener("click", (e: Event) => {
      const popUpModal = <HTMLElement>app.children[3];
      const HtmlElem = <HTMLElement>e.target;
      if (HtmlElem.className === "buy") {
        popUpModal.classList.add("active-modal");
      }
      if (HtmlElem.className === "overlay") {
        popUpModal.classList.remove("active-modal");
      }
    });
  },
  createLists(data: ProductItem[], val: number): void {
    const cartList = <HTMLElement>document.querySelector('.cart-list');
    cartList.innerHTML = '';
    data.map((x, i) => {
      if(i < val && x.skip > 0) {
        cartList.appendChild(createListElement(x, i));
      }
      cart.totalPrice()
    })
    cart.addSkip()
    cart.showItems();
  },
  addSkip(): void {
    const addOne = <NodeListOf<Element>>document.querySelectorAll('.btn-plus');
    const removeOne = <NodeListOf<Element>>document.querySelectorAll('.btn-minus');
    const listCount = <NodeListOf<HTMLSpanElement>>document.querySelectorAll('.list-count span');
    const listItem = <NodeListOf<HTMLSpanElement>>document.querySelectorAll('.list-item');
    
    addOne.forEach((elem, index: number) => {
      elem?.addEventListener('click', (e) => {
        if (Number(elem.parentNode?.parentElement?.dataset.id) === Number(addCard[index].products[0].id)) {
          addCard[index].skip = Number(addCard[index].skip) + 1
          listCount[index].innerText = `${addCard[index].skip}`
        }
        cart.totalPrice();
      })
    })
    removeOne.forEach((elem, index) => {
        elem?.addEventListener('click', (e: Event) => {
          if (Number(elem.parentNode?.parentElement?.dataset.id) === Number(addCard[index].products[0].id)) {
            addCard[index].skip = Number(addCard[index].skip) - 1
            addCard[index].skip < 0 ? listItem[index].remove() : listCount[index].innerText = `${addCard[index].skip}`
            cart.totalPrice();
          }
        })
    })
  },
  totalPrice(): void {
    const totalSum = <HTMLElement>app.children[2].querySelector('.total-sum span')!;
    let sum = 0
    for (let i = 0; i < addCard.length; i++) {
      sum += addCard[i].products[0].price * addCard[i].skip
      navScore.innerText = `${sum}`
      totalSum.innerText = `${sum}`
    }
  },
  showItems() {
    const showItems = <HTMLInputElement>app.children[1].querySelector('.items-count input')
    showItems.addEventListener('input', (e: Event) => {
      let targetVal: string = (e.target as HTMLInputElement).value
      let val: number =  !targetVal ? Number(showItems.value) : Number(targetVal);
      cart.createLists(addCard, val)
    })
  },
  setLocalHost(key: string, val: string): void {
    localStorage.setItem(key, val)
  },
  getLocalHost(key: string): number {
    return Number(localStorage.getItem(key));
  }
};
cart.popUp();
window.addEventListener('load', () => {
  cart.createLists(addCard, 3)
})





function createListElement(data: ProductItem, i: number): HTMLElement {
    // Create elements
    const listItem = document.createElement('div') as HTMLElement;
    const listsCount = document.createElement('span') as HTMLElement;
    const imageDiv = document.createElement('div') as HTMLElement;
    const image = document.createElement('img') as HTMLImageElement;
    const adress = document.createElement('a') as HTMLElement;
    const infoName = document.createElement('h4') as HTMLElement;
    const itemPrice = document.createElement('span') as HTMLElement;
    const listCount = document.createElement('div') as HTMLElement;
    const btnPlus = document.createElement('button') as HTMLElement;
    const btnMinus = document.createElement('button') as HTMLElement;
    const span = document.createElement('span') as HTMLElement;

    // Add classes
    listItem.classList.add('list-item');
    listsCount.classList.add('lists-count');
    imageDiv.classList.add('image');
    adress.classList.add('list-info');
    infoName.classList.add('info-name');
    itemPrice.classList.add('item-price');
    listCount.classList.add('list-count');
    btnPlus.classList.add('btn-plus');
    btnMinus.classList.add('btn-minus');
    btnMinus.classList.add('btn');
    btnPlus.classList.add('btn');

    listItem.setAttribute('data-id', `${data.products[0].id}`)
    image.setAttribute('src', data.products[0].images[1]);
    adress.setAttribute('href', '');
    infoName.innerText = data.products[0].title
    itemPrice.innerText = `${data.products[0].price}`
    span.innerText = `${data.skip}`
    listsCount.innerText = `${i+1}`
    btnPlus.innerText = '+'
    btnMinus.innerText = '-'

    listCount.appendChild(btnMinus);
    listCount.appendChild(span);
    listCount.appendChild(btnPlus);
    adress.appendChild(infoName);
    adress.appendChild(itemPrice);
    imageDiv.appendChild(image);

    listItem.appendChild(listsCount);
    listItem.appendChild(imageDiv);
    listItem.appendChild(adress);
    listItem.appendChild(listCount);

    return listItem;
}

export default cart;