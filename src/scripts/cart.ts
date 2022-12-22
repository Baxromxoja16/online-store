import { ProductItem } from "..";
const app = <HTMLElement>document.querySelector("#app")!;
const addCard: ProductItem[] = [
  {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
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
    skip: 0,
    limit: 1,
  },
  {
    products: [
      {
        id: 2,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 5549,
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
    skip: 0,
    limit: 2,
  },
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
  createLists(data: ProductItem[]): void {
      window.addEventListener('load', (e) => {
        const cartList = <HTMLElement>document.querySelector('.cart-list');

        data.map((x, i) => {
            cartList.appendChild(createListElement(x, i))
        })
    })
  },
 
};
cart.popUp();
cart.createLists(addCard);

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