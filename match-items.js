const products= [
    {name:"Lenovo Phone", price: 10000},
    {name:"Apple Phone", price: 10000},
    {name:"Xiaomi Phone", price: 10000},
    {name:"Lava Phone", price: 10000},
    {name:"Oppo Phone", price: 10000},
    {name:"Lenovo laptop", price: 10000},
    {name:"Asus laptop", price: 10000},
    {name:"Apple laptop", price: 10000},
]

function searchItems(products, searchText){
    const matchProduct = []
    for(const product of products){
        if(product.name.indexOf(searchText) !== -1){
            matchProduct.push(product)
        }
    }
    return matchProduct
}

const matched = searchItems(products, "A")
console.log(matched);