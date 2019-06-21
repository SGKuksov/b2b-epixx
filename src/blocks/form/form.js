export default () => {
  const choices = new Choices('.js-choice', {
    searchEnabled: false,
    placeholderValue: true,
    shouldSort: false,
    placeholderValue: 'Выберите вариант из списка',
  });
}
