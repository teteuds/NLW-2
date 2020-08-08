//Procurando o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField () {
    console.log("Cheguei aqui")
    //Duplicar os campos. Que campos ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Prgar os campos . Que campos ?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo limpar
    fields.forEach(function(field) {
        //Pegar o field e limpa ele, o field e o campo
        field.value = ""
    })

    //Colocar na pagina. Onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}