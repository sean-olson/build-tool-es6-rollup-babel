import { greetUser } from './modules/module_one';

document.addEventListener('DOMContentLoaded', ()=> {
    greetUser(document.getElementById('greeting'), 'coder');
});