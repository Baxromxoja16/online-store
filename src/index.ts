import './styles/index.sass';
import './styles/galery.sass'
// import home from './scripts/home';
import useRoute from './scripts/route';
import main from './scripts/main';
import cart from './scripts/cart';

const scripts = {
    main,
    cart
}


useRoute.locationHashChanged(scripts);
