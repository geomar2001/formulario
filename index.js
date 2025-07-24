const invisivel = document.querySelector('.invisivel');
const botao = document.querySelector('.botao');
const campos = document.querySelectorAll('.campos');
const aviso = document.querySelectorAll('.obrigatorio');
aviso.forEach((campo) => {
    campo.classList.add('invisivel');
});

function validarCampos() {
    botao.addEventListener('click', (event) => {
        event.preventDefault();

        campos.forEach((campos) => {
            if (campos.value === '') {
                campos.classList.add('invalido');
                campos.nextElementSibling.classList.remove('invisivel');
                console.log('Campo inválido:', campos.id);
            } else {
                campos.classList.remove('invalido')
                campos.classList.add('valido')
                campos.nextElementSibling.classList.add('invisivel')

            }

        });


    })
};
validarCampos();



