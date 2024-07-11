export default function HandleCreate() {
    return {
        id: document.getElementById("ID").value,
        nome: document.getElementById("Nome").value,
        preco: document.getElementById("Preço").value,
        desc: document.getElementById("Descrição").value,
        qtd: document.getElementById("Quantidade").value,
    }
}