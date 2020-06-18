import changeCart from './cart';
let checkSum = new Event('checkSum', () => {})
let addBtn = document.querySelector('.addToCart');

class Seats {
    constructor({row, number, sum, type }) {
        this.id = String(row) + String(number);
        this.row = row;
        this.number = number;
        this.sum = sum;
        this.type = type;
        this.avaliability = true;
        this.active = false;
    }

    addToCart = () => {
        changeCart.add(this);
        let cart = document.querySelector('.cart');
        let ticket = document.createElement('div');
        ticket.id = this.id+'_cart';
        ticket.innerHTML = `${this.number} место ${this.row} ряд ${this.sum} грн`;
        ticket.className = `ticket ${this.number}`;
        cart.insertAdjacentElement('afterbegin', ticket);
        let delBTN = document.createElement('input');
        delBTN.type = 'button';
        delBTN.addEventListener( 'click', this.delFromCart);
        delBTN.value = "x";
        delBTN.className = 'delTicket';
        delBTN.id = 'hi';
        ticket.insertAdjacentElement('beforeend', delBTN);
    }

    delFromCart = () => {
        changeCart.del(this);
        this.active = false;
        let cart = document.querySelector('.cart');
        document.getElementById(`${this.id}`).classList.remove('active');
        let elem = document.getElementById(`${this.id}_cart`);
        elem.parentNode.removeChild(elem);
        addBtn.dispatchEvent(checkSum);
    }
}

class Eco extends Seats{
    constructor({row, number, sum, type }) {
        super({row, number, type});
        this.sum = sum-sum/2;
    }
}
class Premium extends Seats{
    constructor({row, number, sum, type }) {
        super({row, number, type  });
        this.sum = sum+sum/2;
    }
}

const setPlace = ( obj ) => {
    let seatClass = null;

    if(obj.type === 'eco') {
        seatClass = Eco;
    } else if(obj.type === 'premium') {
        seatClass = Premium;
    } else {
        seatClass = Seats;
    }
    return new seatClass( obj );
}

addBtn.addEventListener('checkSum', ()=> {
    addBtn.value = `Додати до кошика ${changeCart.getSum()} грн`;
})
export default setPlace;