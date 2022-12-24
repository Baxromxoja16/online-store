import './scripts/cart';
import './styles/index.sass';
// import home from './scripts/home';
import useRoute from './scripts/route';
window.onhashchange = useRoute.locationHashChanged;

const scripts = {
    main: {
        list: null, 
        start(){
            this.getProducts();
        },
        getProducts(){
            if(this.list == null){
                fetch('https://dummyjson.com/products?limit=100',{
                    credentials: "include"
                }).then(req => req.json()).then(res => {
                    this.list = res;
                    this.setList()
                })  
            }
        },
        setList(){
            document.querySelector("#list")
        }
    }
}

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