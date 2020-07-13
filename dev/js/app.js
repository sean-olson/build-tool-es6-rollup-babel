(function () {
    'use strict';

    function greetUser(node, name) {
      node.innerText = "Hello ".concat(name, "!");
    }

    document.addEventListener('DOMContentLoaded', function () {
      greetUser(document.getElementById('greeting'), 'Coder');
    });

}());
//# sourceMappingURL=app.js.map
