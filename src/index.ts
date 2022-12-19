import './styles/index.sass';
import './styles/galery.sass'
import home from './scripts/home'
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
                })  
            }
        }
    }
}