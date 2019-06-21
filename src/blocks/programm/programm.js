import axios from 'axios';

export default () => {
  // const getProgram = (url, modal) => {
  //   axios
  //     .get(url)
  //     .then(res => {
  //       const content = modal.querySelector('.programm__modal-content');
  //       const title = modal.querySelector('.programm__modal-title');
  //       content.innerHTML = res.data.content;
  //       title.innerHTML = res.data.title;
  //     })
  //     .catch(e => {
  //       console.warn(e);
  //     });
  // };

  const showModal = modal => {
    const modals = [...document.querySelectorAll('.programm__modal')];

    modals.forEach(item => {
      hideModal(item);
    });

    modal.classList.remove('programm__modal--hidden');
    const close = modal.querySelector('.programm__modal-close');

    close.addEventListener('click', e => {
      hideModal(modal);
    });

    document.addEventListener('click', e => {
      if (!e.target.classList.contains('programm__modal-btn')) {
        hideModal(modal);
      }
    });
  };

  const hideModal = modal => {
    modal.classList.add('programm__modal--hidden');
  };

  const programBtns = [...document.querySelectorAll('.programm__modal-btn')];

  programBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      // const url = e.target.dataset.url;
      const parent = e.target.parentNode;
      const modal = parent.querySelector('.programm__modal');

      showModal(modal);
    });

    // getProgram(url, modal);
  });
};
