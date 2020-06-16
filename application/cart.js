const _cart = {
    store:[],
    counter: 0
}

const changeCart = {
    add: item => _data.store.push(item),
    del: item => _data.store = _data.store.filter(elem => elem.id!==item.id),
    get: id => _data.store.find( d => d.id === id ),
    showAllLang: () => [ ..._data.store ],
    getCounter: () => _data.counter,
    addCounter: (num) => _data.counter += num,
    pushToLockalStore: _cart.store.map(item => localStorage.setItem(item.id, item.number))
}

Object.freeze(changeCart);

export default changeCart;