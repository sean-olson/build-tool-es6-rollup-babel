(function () {
'use strict';

function greetUser(node, name) {
    node.innerText = 'Hello ' + name + '!!';
}

function addressUser(node, name) {
    node.innerText = 'Are you still there, ' + name + '?';
}

document.addEventListener('DOMContentLoaded', function () {
    greetUser(document.getElementById('greeting'), 'coder');
    addressUser(document.getElementById('address'), 'coder');
});

}());
//# sourceMappingURL=app.js.map
