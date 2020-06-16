import { Observable, Observer } from './Observer';
import { hallScheme, generateHall } from './generateHall';
let cart = [];

const choosePlace = () => {
    let addBtn = document.querySelector('.addToCart');
    let observable = new Observable();
    let newTicket;
    let sum = 0;

    let placeObs = new Observer( (elem )=>{
        cart.push(elem);
        console.log(cart);
        renderRequest(elem);
    })
    let changeSum = new Observer( (elem) => {
        addBtn.value = `Додати до кошика ${sum} грн`;
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


    let places = document.querySelectorAll('.place');
    places.forEach( item => {
        item.addEventListener( 'click', () => {
            newTicket = hallScheme.find( elem => elem.places.find( place => Number(place.number) === Number(item.id)&&Number(place.row) === Number(item.parentElement.id))).places.find(place => Number(place.number) === Number(item.id)&&Number(place.row) === Number(item.parentElement.id)); 
            if(!newTicket['active']) {
                item.classList.add('active');
                sum+=newTicket['price'];
                item.innerHTML = item.id;
                observable.sendMessage( newTicket );
                newTicket['active'] = true;
            }
        })
    })



    const renderRequest = ( elem ) => {
        let cart = document.querySelector('.cart');
        let ticket = document.createElement('div');
        ticket.id = elem.row;
        ticket.innerHTML = `${elem.number} место ${elem.row} ряд ${elem.price} грн <input type="button" value="&times" class="delTicket">`;
        ticket.className = `ticket ${elem.number}`;
        cart.insertAdjacentElement('afterbegin', ticket);
    }

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

export  { choosePlace, cart };