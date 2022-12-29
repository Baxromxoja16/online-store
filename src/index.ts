import cart from './scripts/cart';
import './styles/index.sass';
import './styles/galery.sass'
// import home from './scripts/home';
import useRoute from './scripts/route';
import main from './scripts/main';

const scripts = {
    main,
    cart:{
        start(){
            console.log("cart loaded")
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