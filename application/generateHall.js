import setPlace from './factory';
import changeCart from './cart';
let hall = document.querySelector('.hall');

let checkSum = new Event('checkSum', () => {})
let cart = document.querySelector('.cart');

let setTimmer = new Event('setTimmer');
cart.timmer = null;
let addBtn = document.querySelector('.addToCart');
let divForTime = document.querySelector('.divForTime');
let timerBack;
let time;

class Hall {
    constructor( config, sum) {
        this.config = config;
        this.sum = sum;
    }

    hallScheme = [];
    generateHall = () => {
        if(typeof this.config == "object") {
            this.hallScheme=[...this.config];
            for(let i = 0;i < this.config.length;i++) {
                let row = document.createElement('div');
                this.hallScheme[i].places = [];
                row.className = `row ${(this.config[i]['type'])?this.config[i]['type']:''}`
                row.id = i+1;
                hall.appendChild(row);
                for(let j = 0; j< this.config[i]['count']; j++) {
                    let id = String(i+1)+String(j+1);
                    row.innerHTML+= `<div class='place {}' id ="${id}"></div>`;
                    let obj = setPlace({'row':i+1, 'number':j+1, 'type':this.config[i]['type'], 'sum':this.sum});
                    this.hallScheme[i].places.push( obj );
                }
            }
        }

        this.hallScheme.forEach(item=> item.places.forEach(place=>
            {if(localStorage.getItem(place.id)!==null){
                document.getElementById(`${place.id}`).classList.add('passive');
                place.avaliability=false;
            }
        }))

        let places = document.querySelectorAll('.place');
        let newTicket;
        places.forEach( item => {
            item.addEventListener( 'click', () => {
                newTicket = this.hallScheme.find(elem=>elem.places.find(place=>place.id==item.id)).places.find(place=>place.id==item.id);
                console.log(newTicket)
                if(!newTicket['active'] && newTicket['avaliability']) {
                    console.log(changeCart.showAllLang());
                    item.classList.add('active');
                    sum+=newTicket['sum'];
                    item.innerHTML = newTicket.number;
                    newTicket['active'] = true;
                    newTicket.addToCart(this);
                    addBtn.dispatchEvent(checkSum);
                    cart.dispatchEvent(setTimmer);
                }
            })
        })

        addBtn.addEventListener('checkSum', ()=> {
            addBtn.value = `Додати до кошика ${changeCart.getSum()} грн`;
        })
        addBtn.addEventListener('click', () =>{
            let ticketArr = document.querySelectorAll('.ticket');
            ticketArr.forEach(item => {let act = this.hallScheme.find(elem=>elem.places.find(place=>place.id==parseInt(item.id))).places.find(place=>place.id==parseInt(item.id));act.active=false;act.avaliability=false});
            changeCart.addToLockalStorage();
            changeCart.cleanCart();
            addBtn.dispatchEvent(checkSum);
            clearInterval(cart.timmer);
            divForTime.innerHTML = '';
            clearInterval(timerBack);
            time = 60;
        });
        cart.addEventListener('setTimmer', ()=>{
            time = 60;
            clearInterval(timerBack);
            timerBack = setInterval(()=>{time--;divForTime.innerHTML=`Час до очищення корзини: ${time} секунд`},1000);
            clearInterval(cart.timmer);
            cart.timmer = setTimeout(()=>{
                let ticketArr = document.querySelectorAll('.ticket');
                ticketArr.forEach(item => {
                    let act = this.hallScheme.find(elem=>elem.places.find(place=>place.id==parseInt(item.id))).places.find(place=>place.id==parseInt(item.id));
                    act.active = false;act.avaliability=true; 
                    changeCart.clearSum();   
                    addBtn.dispatchEvent(checkSum);
                    clearInterval(timerBack);
                    divForTime.innerHTML = '';
                    time = 60;
                });
                changeCart.cleanCart();
            }, Number(`${time}000`));
        })
    }
}

export default Hall;