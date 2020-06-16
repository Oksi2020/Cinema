import setPlace from './factory';
let hall = document.querySelector('.hall');


class Hall {
    constructor( config, sum) {
        this.config = config;
        this.sum = sum;
    }

    hallScheme = [];
    generateHall = ( ) => {
        if(typeof this.config == "object") {
            this.hallScheme=[...this.config];
            for(let i = 0;i < this.config.length;i++) {
                let row = document.createElement('div');
                this.hallScheme[i].places = [];
                row.className = `row ${(this.config[i]['type'])?this.config[i]['type']:''}`
                row.id = i+1;
                hall.appendChild(row);
                for(let j = 0; j< this.config[i]['count']; j++) {
                    row.innerHTML+= `<div class='place' id ="${j+1}"></div>`;
                    let obj = {'row':i+1, 'number':j+1, 'type':this.config[i]['type'], 'sum':this.sum}
                    this.hallScheme[i].places.push( setPlace( obj ) );
                }
            }
        }
    }
}

export default Hall;