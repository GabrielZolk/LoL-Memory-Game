const input = document.querySelector('.login__input');
const loginButton = document.querySelector('.login__button');
const validate = document.querySelector('.validation');
const form = document.querySelector('.login-form')

const validadeInput = () => {
    input.value && input.value.length >= 2 ? (
        loginButton.removeAttribute('disabled'),
        input.style.border = '2px solid #333',
        validate.style.display = 'none'
      ) : (
        loginButton.setAttribute('disabled', ''),
        input.style.border = '2px solid red',
        validate.style.display = 'block'
      );
      
}

function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}



input.addEventListener('input', validadeInput)
form.addEventListener('submit', handleSubmit)

