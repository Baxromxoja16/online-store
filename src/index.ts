import './styles/index.sass';
import home from './scripts/home'
// import files from './scripts/files'
import useRoute from './scripts/route';
window.onhashchange = useRoute.locationHashChanged;
