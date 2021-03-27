//axios
//xhtmlhttprequest : salieron unas nuevas ->ya se usa menos
//fetch : nativo de js 

const getProducts = (searchTerm) => {
    return fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${searchTerm}`)
    .then((response) => response.json())
    .then((products) => products);

}

const getProduct = (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((response) => response.json())
    .then((products) => products);

}

export default {getProducts, getProduct}