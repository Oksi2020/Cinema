import { Observable, Observer } from './Observer';
import Hall from './generateHall';
import changeCart from './cart';

const choosePlace = () => {
    let observable = new Observable();
    let newTicket;
    let sum = 0;

    let placeObs = new Observer( (elem )=>{
        cart.push(elem);
        console.log(cart);
        renderRequest(elem);
    })
    let changeSum = new Observer( (elem) => {
    })

    let deleteTicket = new Observer( (elem) => {
        let ticketNodes = document.querySelectorAll('.delTicket');
        ticketNodes.forEach( item => {
            item.addEventListener('click', del);
        })
    })

    observable.addObserver( placeObs );
    observable.addObserver( changeSum );
    observable.addObserver( deleteTicket );

    const del = (e) => {
        let r = /\d+/;
        let makePass;
        let elemForDel = e.target.parentElement;
        for(let i = 0;i<cart.length;i++) {
        if(Number(elemForDel.id)===cart[i].row && Number(elemForDel.className.match(r)[0])=== cart[i].number) {
                makePass = cart[i];
                cart.splice( i, 1 );
            }
        }
        let delTick = hallScheme.find(elem => elem.places.find(elem=>elem===makePass)).places.find(place=>place===makePass);
        delTick.active = false;
        elemForDel.parentElement.removeChild(elemForDel);
        console.log(delTick);
    }
}

export default choosePlace;