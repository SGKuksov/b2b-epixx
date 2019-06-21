export default () => {
  const showModal = modal => {
    const modals = [...document.querySelectorAll('.faq__item-content')];

    modals.forEach(item => {
      hideModal(item);
    });
    modal.classList.remove('faq__item-content--hidden');

    document.addEventListener('click', e => {
      if (!e.target.classList.contains('faq__item-btn')) {
        hideModal(modal);
      }
    });
  };

  const hideModal = modal => {
    modal.classList.add('faq__item-content--hidden');
  };

  const programBtns = [...document.querySelectorAll('.faq__item-btn')];

  programBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const modal = e.target.nextSibling.nextSibling;

      showModal(modal);
    });
  });
};
