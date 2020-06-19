const _cart = {
    store:[],
    counter: 0,
    sum:0
}

const changeCart = {
    add: item => {_cart.store.push(item);_cart.sum+=item.sum},
    del: item => {_cart.store = _cart.store.filter(elem => elem.id!==item.id);_cart.sum-=item.sum},
    get: id => _cart.store.find( d => d.id === id ),
    showAllLang: () => [ ..._cart.store ],
    getCounter: () => _cart.counter,
    addCounter: (num) => _cart.counter += num,
    getSum: () => _cart.sum,
    addToLockalStorage: ()=> {
        let ticketArr = document.querySelectorAll('.ticket');
        console.log(ticketArr);

        ticketArr.forEach(item => {
            let place = document.getElementById(`${parseInt(item.id)}`);
            place.classList.add('passive');
            localStorage.setItem(`${parseInt(item.id)}`,'id')
        });
    },
    pushToLockalStore: _cart.store.map(item => localStorage.setItem(item.id, item.number)),
    cleanCart: () => {
        _cart.sum = 0;
        let ticketArr = document.querySelectorAll('.ticket');
        ticketArr.forEach(item => {
            let place = document.getElementById(`${parseInt(item.id)}`);
            item.parentElement.removeChild(item);
            place.innerHTML = '';
            place.classList.remove('active');
        });
        _cart.store=[];
    },
    clearSum:() => {
        _cart.sum = 0;
    }
}

Object.freeze(changeCart);

export default changeCart;