const downB = document.querySelector('.btn-voltar')
const upB = document.querySelector('.btn-avancar')
const cartao = document.getElementsByClassName('cartao')
let classEdit = `fundo-1`
let index = 0
downB.addEventListener('click', function () {
    if (index === 0) {
        return
    }
    cartao[index]?.classList.remove("selecionado")
    const split = classEdit.split("-")
    classEdit = `fundo-${split[1] - 1}`
    index = index - 1
    cartao[index]?.classList.add("selecionado")
    document.title = classEdit
})
upB.addEventListener('click', function () {
    cartao[index]?.classList.remove("selecionado")
    const split = classEdit.split("-")
    classEdit = `fundo-${Number(split[1]) + 1}`
    index = index + 1
    cartao[index]?.classList.add("selecionado")
    document.title = classEdit
})