// npm init
// npm install --save-dev webpack
// ./node_modules/.bin/webpack assets/js/app.js --output dist/bundle.js --mode development
// ./node_modules/.bin/webpack assets/js/app.js --output dist/bundle.js --mode development --watch


// const log = require('./log.js')

// log('Salut')

// ./node_modules/.bin/webpack à remplacer dans package.json

import { log, log2 } from './log.js';
// import config from '../../config.json';
import config from '../../config';
// import $ from 'jquery'; //(npm installed)

let importJqueryToggle = false;
document.getElementById('button').addEventListener('click', () => {
    // jQuery needs to be loaded only here for performance purposes
    // We need to use lazyloading
    import('jquery').then((jquery) => {
        if(!importJqueryToggle){
            const $ = jquery.default;
            $('body').append(`<p id="FirstAddedElement">jQuery loaded successfully via <b>Webpack</b></p>`)
            $('body').css('background-color', 'lightblue')
            importJqueryToggle = !importJqueryToggle;
        }
    })
})


let [c,,d] = [1,2,3,4]
log('Let\'s console.log WEBPACK !!!')
log2('Let\'s double console.log WEBPACK')
log(d)
log(config)

// TRI CHECKING POSSIBLE DEPUIS V2 (webpack ne gère que les imports effectifs, sinon non;)
// il suffit d'ajouter --optimize-minimize