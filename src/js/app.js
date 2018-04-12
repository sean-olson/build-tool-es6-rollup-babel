import { greetUser, addressUser } from './modules/module_one';

document.addEventListener('DOMContentLoaded', ()=> {
    greetUser(document.getElementById('greeting'), 'coder');
    addressUser(document.getElementById('address'), 'coder');
});