import './styles/index.sass';
import home from './scripts/home'
import useRoute from './scripts/route';
window.onhashchange = useRoute.locationHashChanged;
console.log("route")