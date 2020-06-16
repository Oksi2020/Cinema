import { hallScheme, generateHall} from '../application/generateHall';
import { choosePlace, cart} from '../application/choosePlace';
import hallConfig from '../application/hallConfig.json';
let hall = document.querySelector('.hall');

window.addEventListener('DOMContentLoaded', () => {
    generateHall( hallConfig, 50 );
    choosePlace();  
})