const getSeller = (id) => {
    return fetch(`https://api.mercadolibre.com/users/${id}`)
    .then((response) => response.json())
    .then((seller) => seller);

}

export default {getSeller}