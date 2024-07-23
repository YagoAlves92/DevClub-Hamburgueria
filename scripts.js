const buttonShowAll = document.querySelector('.show-all')
const list = document.querySelector('ul')
const buttonAddPorcent = document.querySelector('.add-porcent')
const sumAllItens = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')
const filterCombos = document.querySelector('.filter-combos')


function showAllProdcuts(productsArray) {
    let myLi = ''

    productsArray.forEach(products => {
        myLi += `
<li>
        <img src=${products.src}>
        <p>${products.name}</p>
        <p class="price">R$:${products.price}</p>
    </li>

`

    })
    list.innerHTML = myLi

}

function porcentProducts() {
    const newPrice = menuOption.map((products) => ({
        ...products,
        price: products.price * 0.9

    }))

    showAllProdcuts(newPrice)
}

function sumAllProducts(){
    const valueTotal = menuOption.reduce( (acc , curr) => acc + curr.price , 0 )
    list.innerHTML = `
    <li>
        
        <p> O valor total é : ${valueTotal}</p>
    </li>
    `    


}

function filterItens(){
    const veganItens = menuOption.filter( (products) => products.vegan)
    showAllProdcuts (veganItens)
}

function filterCombosItens() {
    const combosItens = menuOption.filter( (products) => products.combo)
    showAllProdcuts (combosItens)
}

buttonAddPorcent.addEventListener('click', porcentProducts)
buttonShowAll.addEventListener('click', () => showAllProdcuts(menuOption))
sumAllItens.addEventListener('click' , sumAllProducts)
filterAll.addEventListener('click' , filterItens)
filterCombos.addEventListener('click' , filterCombosItens)

//Spread Operator --> ( '...' )




