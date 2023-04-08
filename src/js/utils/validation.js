export const valida = (input) =>{
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput])
        validadores[tipoDeInput](input)

    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invadlido')
        input.parentElement.querySelector('input-mensagem-erro').innerHtml = ''
    }
    else{
        input.parentElement.classList.add('input-container--invadlido')
        input.parentElement.querySelector('input-mensagem-erro').innerHtml = ''

    }

} 

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
    'rangeOverflow',
    'rangeUnderflow'
]

const mensagensDeErro = {
    produto:{

        valueMissing:'O campo precisa ser preenchido',
        customError:'Digite um valor válido para o produto.',
        rangeOverflow:'Valor do produto ultrapassa o máximo de caracteres.',
        rangeUnderflow:'O valor do pruduto passado é menor que o minimo.',
    },
    quantidade:{
        valueMissing:'',
        typeMismatch:'',
        rangeUnderflow:'O valor passado é menor que o minimo.',
        rangeOverflow:'Valor ultrapassa o máximo de caracteres.'
    },
    valor:{
        valueMissing:'o campo valor não pode esta vazio',
        patternMismatch:'O valor inserido não é válido',
        customError:''
    },
}