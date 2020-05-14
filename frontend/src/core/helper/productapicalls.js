
export const getProducts = () =>{
    return fetch('http://localhost:5001/api/product/getAllProducts', {
        method: 'GET',
        
    })
    .then( response => {
        return response.json()
    })
    .catch( err => console.log(err))
}