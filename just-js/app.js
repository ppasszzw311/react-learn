// 進行點擊彈窗的設計
const button = document.querySelector('button');

let modal;
let backdrop;

button.addEventListener('click', showModalHandler);

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement('div');
  modal.className = 'modal';

  const modalText = document.createElement('p');
  modalText.textContent = 'Are you sure?';

  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancel';
  modalCancelAction.className = 'btn btn--alt';
  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Confirm';
  modalConfirmAction.className = 'btn';
  modalConfirmAction.addEventListener('click', closeModalHandler);

  modal.appendChild(modalText);
  modal.appendChild(modalCancelAction);
  modal.appendChild(modalConfirmAction);

  document.body.appendChild(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  backdrop.addEventListener('click', closeModalHandler);

  document.body.appendChild(backdrop);
}

function closeModalHandler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}