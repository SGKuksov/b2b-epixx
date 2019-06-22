import programm from '../../blocks/programm/programm.js';
import form from '../../blocks/form/form.js';
import faq from '../../blocks/faq/faq.js';

function ready() {
  programm();
  form();
  faq();
}

document.addEventListener('DOMContentLoaded', ready);
