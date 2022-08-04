const product = document.querySelector('.products');
const productBtn = document.querySelector('.product__show--btn');
const productSpan = document.querySelector('.product__show--span');

const data = [
    {
        id: 1,
        label: 'new',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 2,
        label: 'sale',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 3,
        label: '',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 4,
        label: '',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 5,
        label: '',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 6,
        label: '',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 7,
        label: '',
        img: '',
        cta: '',
        detail: 'At vero eos et accusamus et iusto odio dignissimos',
        price: 'Winnie Harlow'
    },
    {
        id: 8,
        label: '',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 9,
        label: 'new',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 10,
        label: 'sale',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 11,
        label: '',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 12,
        label: 'new',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 13,
        label: 'sale',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 14,
        label: '',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 15,
        label: 'new',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 16,
        label: 'sale',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 17,
        label: '',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 18,
        label: 'new',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 19,
        label: 'sale',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 20,
        label: '',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 21,
        label: 'new',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 22,
        label: 'sale',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
    {
        id: 23,
        label: '',
        img: '../img/product-1.png',
        cta: '+ Quick Shop',
        detail: 'Your Skin But Better CC+ Cream with SPF50 12ml',
        price: '$28.00',
    },
]

let num = 17;
let products = '';

function loadMore(){
    data.map(({id, label, img, cta, detail, price}) => {
        products += id <= num ? `<div key=${id} class=${(id == 7) ? "product__text--rich" : "product__bucket"}>
        <div class=${(id == 7) ? '' : "product__img--wrapper"}>
        <p class=${label ? 'product__label' : ''}>${label}</p>
        <img class=${img ? "product__image" : 'product__hidden'} src='${img}' alt="product">
        <a class=${cta ? "product__cto" : 'product__hidden'} href="#">${cta}</a>
        </div>
        <p class=${(id == 7) ?"product__text--heading":"product__details"}>
        ${detail} 
        <p class=${(id == 7) ? "product__text--desc" : "product__price"}>${price}</p>
        </p></div>` : ''
    })
}

productBtn.addEventListener('click', async() => {
    num = await data.length - num
    loadMore();
    product.innerHTML = products;
})

loadMore();

product.innerHTML = products;