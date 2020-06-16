const _cart = {
    store:[],
    counter: 0
}

const changeCart = {
    add: item => _cart.store.push(item),
    del: item => _cart.store = _data.store.filter(elem => elem.id!==item.id),
    get: id => _cart.store.find( d => d.id === id ),
    showAllLang: () => [ ..._cart.store ],
    getCounter: () => _cart.counter,
    addCounter: (num) => _cart.counter += num,
    pushToLockalStore: _cart.store.map(item => localStorage.setItem(item.id, item.number))
}

Object.freeze(changeCart);

export default changeCart;