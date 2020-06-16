let hall = document.querySelector('.hall');
let hallScheme =[];

const generateHall = ( config, sum ) => {
    if(typeof config == "object") {
        hallScheme=[...config];
        for(let i = 0;i < config.length;i++) {
            let row = document.createElement('div');
            hallScheme[i].places = [];
            row.className = `row ${(config[i]['type'])?config[i]['type']:''}`
            row.id = i+1;
            hall.appendChild(row);
            for(let j = 0; j< config[i]['count']; j++) {
                row.innerHTML+= `<div class='place' id ="${j+1}"></div>`;
                hallScheme[i].places.push({'row':i+1, 'number':j+1, 'availability':true, 'active': false, 'price':sum});
            }
        }
    }
}

export { generateHall, hallScheme };