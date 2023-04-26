function hideWeb3Modal() {
  const web3modal = document.querySelector('.web3modal');
  web3modal.classList.add('web3modal-none');
}

function toggleWeb3Modal() {
  const web3modal = document.querySelector('.web3modal');
  web3modal.classList.remove('web3modal-none');

}

document.addEventListener('DOMContentLoaded', function() {
  const web3modal = document.querySelector('.web3modal');
  const web3modalBg = document.querySelector('.web3modalbg');
  const modalConnects = document.querySelectorAll('span, a, button, .connectButton, .menu-item, .eth.connect');

  modalConnects.forEach(function(modalConnect) {
    modalConnect.addEventListener('click', toggleWeb3Modal);
  });



  web3modalBg.addEventListener('click', hideWeb3Modal);
});