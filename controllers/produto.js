const produtos = [
    {
        'id': '1',
        'nome': 'produto 1',
    },
    {
        'id':'2',
        'nome':'produto 2',
    },
];

module.exports = {
    

    add: (produto) => {
        produtos.push(produto);
        return JSON.stringify(produtos);
    },

    list: () => {
        return JSON.stringify(produtos);
    },

    update: () => {
        return 'Atualizar produto';
    },

    delete: (produto_id) => {
        const filtrados = produtos.filter((prod) => prod.id != produto_id)
        return JSON.stringify(filtrados)
    }
}