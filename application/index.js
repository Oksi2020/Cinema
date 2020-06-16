import Hall from './generateHall';
import choosePlace  from './choosePlace';
import hallConfig from './hallConfig.json';

window.addEventListener('DOMContentLoaded', () => {
    let hall = document.querySelector('.hall');
    // generateHall( hallConfig, 50 );
    let ourHall = new Hall( hallConfig, 50);
    ourHall.generateHall();
    console.log(ourHall)
    choosePlace();  
})