// npm install @faker-js/faker 
import { faker } from "@faker-js/faker"

export default function HandleList() {
    const lista = new Array(10).fill(0).map((_, i) => {
        return {
            id: i,
            nome: faker.commerce.product(),
            preco: faker.commerce.price(),
            desc: faker.commerce.productAdjective(),
            qtd: faker.number.int({ min: 10, max: 100 })
        }
    })

    return JSON.stringify(lista)
}