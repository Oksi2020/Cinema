export function Observable(){
    const observers = [];
    this.sendMessage = function( msg ){
        observers.map( ( obs ) => {
          obs.notify(msg);
        });
    };
    this.addObserver = function( observer ){
      observers.push( observer );
    };
  }
  
export function Observer( behavior ){
    // Делаем функцию, что бы через callback можно
    // было использовать различные функции внутри
    this.notify = function( msg ){
      behavior( msg );
    };
 }
  