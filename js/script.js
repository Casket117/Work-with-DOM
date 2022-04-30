window.addEventListener('DOMContentLoaded', () => {
    
    const tabs = require('./modules/tabs'),
          calc = require('./modules/calc'),
          modal = require('./modules/modal'),
          slider = require('./modules/slider'),
          timer = require('./modules/timer'),
          forms = require('./modules/forms'),
          cards = require('./modules/cards');

    tabs();
    calc();
    modal();
    slider();
    timer();
    forms();
    cards();

});