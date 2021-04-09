import { searchEventListener } from './components/Search.js';


const init = () => {
    searchEventListener();
}
document.addEventListener('DOMContentLoaded', init);