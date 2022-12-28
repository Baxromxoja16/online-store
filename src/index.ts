import cart from './scripts/cart';
import './styles/index.sass';
import './styles/galery.sass'
// import home from './scripts/home';
import useRoute from './scripts/route';


const scripts = {
    main: {
        list: {"products":[{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]}],"total":100,"skip":0,"limit":1}, 
        start(){
            console.log("started")
            this.getProducts();
        },
        getProducts(){
                fetch('https://dummyjson.com/products?limit=30',{
                }).then(req => req.json()).then(res => {
                    this.list = res;
                    this.setList()
                })   
        },
        setList(){
            this.list.products.forEach(e => {
                let card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = ` <img src="${e.images[0]}" alt="">
                <p class="title">${e.title}</p>
                <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum!</p>`
                document.querySelector(".grid")!.appendChild(card);
            });
            
            
        }
    }
}

useRoute.locationHashChanged(scripts);
window.addEventListener('hashchange', () => {
    useRoute.locationHashChanged(scripts);
      // cart
})

// types
interface ProductItem {
    products: [
        {
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
    ];
    total: number;
    skip: number;
    limit: number;
}[]
export type {ProductItem}