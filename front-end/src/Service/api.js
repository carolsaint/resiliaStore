import axios from 'axios'

const instancia = axios.create({
    baseUrl: 'http://localhost:3000'
})

export const getProdutos = async()=>{
    const response = await instancia.get('/products')
    const json = response.json()
    return json
}

export const getProdutosPorCategoria = async(categoria) =>{
    const response = await instancia.get(`/products/categoria/${categoria}`)
    const json = response;
    return json;
}

export const postProduto = async (product) => {
const response = await instancia.post('/produtos/novo', product)
const json = await response.data.msg

return json;
}
