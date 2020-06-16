import changeCart from './cart';

class Seats {
    constructor({row, number, sum, type }) {
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
        ticket.id = this.row;
        ticket.innerHTML = `${this.number} место ${this.row} ряд ${this.sum} грн <input type="button" value="&times" class="delTicket">`;
        ticket.className = `ticket ${this.number}`;
        cart.insertAdjacentElement('afterbegin', ticket);
    }

    delFromCart = () => {
        changeCart.del(this);
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

export default setPlace;