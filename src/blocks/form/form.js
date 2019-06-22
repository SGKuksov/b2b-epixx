// import $ from 'jquery';
// import Inputmask from 'inputmask';
// import 'imports-loader?define=>false,module.exports=>false!jquery-validation';

export default () => {
  new Choices('.js-choice', {
    searchEnabled: false,
    shouldSort: false,
    placeholderValue: 'Выберите вариант из списка'
  });

  // var selector = document.getElementById("phone");
  // var im = new Inputmask("99-9999999");
  // im.mask(selector);

  // $('#phone').inputmask('+7 (999) 999-99-99');

  $('#formBlock').validate({
    rules: {
      name: {},

      email: {
        required: true,
        email: true
      },
      phone: {}
    },

    messages: {
      name: 'Поле обязательно для заполнения',
      phone: 'Поле обязательно для заполнения',
      email: {
        required: 'Поле обязательно для заполнения',
        email: 'e-mail должен быть в формате name@domain.com'
      }
    },

    submitHandler(form) {
      form.submit();
    }
  });
};
