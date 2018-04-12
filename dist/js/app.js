(function () {
'use strict';

function greetUser(node, name) {
    node.innerText = 'Hello ' + name + '!!';
}

// import  jQuery  from '../../node_modules/jquery/dist/jquery'


document.addEventListener('DOMContentLoaded', function () {
    greetUser(document.getElementById('greeting'), 'coder');
    // addressUser(document.getElementById('address'), 'coder');
});

}());
