interface prs {
  [string : string]: string | number | string[];
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[]; 
}

const cart = {
  start() {
    let list = [{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"]},{"id":3,"title":"Samsung Universe 9","description":"Samsung's new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/3/1.jpg"]},{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/4/1.jpg","https://i.dummyjson.com/data/products/4/2.jpg","https://i.dummyjson.com/data/products/4/3.jpg","https://i.dummyjson.com/data/products/4/4.jpg","https://i.dummyjson.com/data/products/4/thumbnail.jpg"]},{"id":5,"title":"Huawei P30","description":"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.","price":499,"discountPercentage":10.58,"rating":4.09,"stock":32,"brand":"Huawei","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/5/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/5/1.jpg","https://i.dummyjson.com/data/products/5/2.jpg","https://i.dummyjson.com/data/products/5/3.jpg"]},{"id":6,"title":"MacBook Pro","description":"MacBook Pro 2021 with mini-LED display may launch between September, November","price":1749,"discountPercentage":11.02,"rating":4.57,"stock":83,"brand":"APPle","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/6/thumbnail.png","images":["https://i.dummyjson.com/data/products/6/1.png","https://i.dummyjson.com/data/products/6/2.jpg","https://i.dummyjson.com/data/products/6/3.png","https://i.dummyjson.com/data/products/6/4.jpg"]},{"id":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/7/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/7/1.jpg","https://i.dummyjson.com/data/products/7/2.jpg","https://i.dummyjson.com/data/products/7/3.jpg","https://i.dummyjson.com/data/products/7/thumbnail.jpg"]},{"id":8,"title":"Microsoft Surface Laptop 4","description":"Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.","price":1499,"discountPercentage":10.23,"rating":4.43,"stock":68,"brand":"Microsoft Surface","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/8/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/8/1.jpg","https://i.dummyjson.com/data/products/8/2.jpg","https://i.dummyjson.com/data/products/8/3.jpg","https://i.dummyjson.com/data/products/8/4.jpg","https://i.dummyjson.com/data/products/8/thumbnail.jpg"]},{"id":9,"title":"Infinix INBOOK","description":"Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty","price":1099,"discountPercentage":11.83,"rating":4.54,"stock":96,"brand":"Infinix","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/9/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/9/1.jpg","https://i.dummyjson.com/data/products/9/2.png","https://i.dummyjson.com/data/products/9/3.png","https://i.dummyjson.com/data/products/9/4.jpg","https://i.dummyjson.com/data/products/9/thumbnail.jpg"]},{"id":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","price":1099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/10/thumbnail.jpeg","images":["https://i.dummyjson.com/data/products/10/1.jpg","https://i.dummyjson.com/data/products/10/2.jpg","https://i.dummyjson.com/data/products/10/3.jpg","https://i.dummyjson.com/data/products/10/thumbnail.jpeg"]}]
    this.methods.setList();
  },
  methods: {
    setList(){
      let list: prs[] = JSON.parse(localStorage.getItem('cart') + "");
  
      list.forEach((val, idx) => {  
      
        let card = document.createElement('div');
        card.setAttribute('data-id', val.id.toString())
        card.innerHTML = `
        <li class="list-item">
        <span class="lists-count">${idx+1}</span>
          <div class="image">
              <img src="${val.images[0]}">
          </div>
          <a class="list-info" href="">
              <h4 class="info-name">${val.title}</h4>
              <span class="item-price">${val.price}</span>
          </a>
          <div class="list-count">
            <button click="minusCount(${val.id})" class="btn-minus btn">-</button>
            <span class="quantity" id="quantity-${val.id}">1</span>
            <button click="plusCount(${val.id})" class="btn-plus btn">+</button>
          </div>
        </li>
        `
        document.querySelector('.cart-list')?.appendChild(card);
      });
      
      this.paginate()
    },
    buy(e: string) {
      const popUp = document.querySelector('.pop-up_buy');
      popUp?.classList.add('active-modal')
    },
    closeModal() {
      const popUp = document.querySelector('.pop-up_buy');
      popUp?.classList.remove('active-modal')
    },
    minusCount(e: string) {
      let val = document.querySelector("#quantity-"+e)
      val!.innerHTML = (parseInt(val?.innerHTML+"") - 1).toString();
    },
    plusCount(e: string) {
      let val = document.querySelector("#quantity-"+e)
      val!.innerHTML = (parseInt(val?.innerHTML+"") + 1).toString();    
    },
    paginate() {
      console.log("panginate")
      const paginationNumbers = document.getElementById("pagination-numbers");
            let paginatedList = document.getElementById("paginated-list");
            let listItems = paginatedList!.querySelectorAll("li");
            let nextButton = document.getElementById("next-button") as  HTMLElement
            let prevButton : HTMLElement = document.getElementById("prev-button") as  HTMLElement;
          
            let paginationLimit = 4;
            let pageCount = Math.ceil(listItems.length / paginationLimit);
            let currentPage = 1;
            
            const disableButton = (button: HTMLElement) => {
              button?.classList.add("disabled");
              button?.setAttribute("disabled", 'true');
            };
            
            const enableButton = (button: HTMLElement) => {
              button.classList.remove("disabled");
              button.removeAttribute("disabled");
            };
            
            const handlePageButtonsStatus = () => {
              if (currentPage === 1) {
                disableButton(prevButton);
              } else {
                enableButton(prevButton);
              }
            
              if (pageCount === currentPage) {
                disableButton(nextButton);
              } else {
                enableButton(nextButton);
              }
            };
            
            const handleActivePageNumber = () => {
              document.querySelectorAll(".pagination-number").forEach((button) => {
                button.classList.remove("active");
                const pageIndex = Number(button.getAttribute("page-index"));
                if (pageIndex == currentPage) {
                  button.classList.add("active");
                }
              });
            };
            
            const appendPageNumber = (index : string ) => {
              const pageNumber = document.createElement("button");
              pageNumber.className = "pagination-number";
              pageNumber.innerHTML = index;
              pageNumber.setAttribute("page-index", index);
              pageNumber.setAttribute("aria-label", "Page " + index);
            
              paginationNumbers!.appendChild(pageNumber);
            };
            
            const getPaginationNumbers = () => {
              for (let i : number = 1; i <= pageCount; i++) {
                appendPageNumber(i.toString());
              }
            };
            
            const setCurrentPage = (pageNum : number) => {
              currentPage = pageNum;
            
              handleActivePageNumber();
              handlePageButtonsStatus();
              
              const prevRange = (pageNum - 1) * paginationLimit;
              const currRange = pageNum * paginationLimit;
            
              listItems.forEach((item, index) => {
                item.classList.add("hidden");
                if (index >= prevRange && index < currRange) {
                  item.classList.remove("hidden");
                }
              });
            };
            
           
              getPaginationNumbers();
              setCurrentPage(1);
            
              prevButton.addEventListener("click", () => {
                setCurrentPage(currentPage - 1);
              });
            
              nextButton.addEventListener("click", () => {
                setCurrentPage(currentPage + 1);
              });
            
              document.querySelectorAll(".pagination-number").forEach((button) => {
                const pageIndex = Number(button.getAttribute("page-index"));
            
                if (pageIndex) {
                  button.addEventListener("click", () => {
                    setCurrentPage(pageIndex);
                  });
                }
              });
            
    },
  },
};

export default cart;
