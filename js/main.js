// Products Array
const products = [
//    breath
{
    id: 1,
    title: "BREATH <br> logo crash crew neck sweat <br>black",
    price: 25300 ,
    image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/b523941b5534e3b12fce.jpg/fit=cover,w=920,h=920",
      genre: "sweat",
      // "https://pangaia.com/cdn/shop/products/Recycled-Nylon-NW-Flwrdwn-Quilted-Collarless-Jacket-Cerulean-Blue-Female-1_bf4b2a54-8a7f-4174-bc49-8ef22b24bfdd.jpg?v=1666708230&width=1426",
    coment:"tenpleate",
     
  },
  {
    id: 2,
    title: "BREATH <br> logo crash sweat pants<br> black",
    price: 19800,
    image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/a5a22628ab48cba06add.jpg/fit=cover,w=920,h=920",
      genre: "pants",
      // "https://images.undiz.com/on/demandware.static/-/Sites-ZLIN-master/default/dw2264d914/merch/BTS/654206666_x.jpg?sw=1250",
    coment:"tenpleate",
  },
  {
    id: 3,
    title: "BREATH <br> logo crash crew neck sweat <br>grey",
    price: 25300,
    image:
       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/1a793f001409133ee185.jpg/fit=cover,w=920,h=920",
       genre: "sweat",
      //"https://pangaia.com/cdn/shop/products/Recycled-Cashmere-Core-Hoodie-Chestnut-Brown-Male-1.jpg?v=1663947464&width=1426",
    coment:"tenpleate",
  },
  {
      id: 4,
      title: "BREATH <br> logo crash sweat pants <br>grey",
      price: 19800,
      image:
         "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/bed657f7104d00ae912e.jpg/fit=cover,w=920,h=920",
         genre: "pants",
      //"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61734ec7-dad8-40f3-9b95-c7500939150a/sportswear-club-mens-french-terry-crew-neck-sweatshirt-tdFDRc.png",
    coment:"tenple",
  },
  {
      id: 5,
      title: "BREATH <br>  3D mesh cap <br>white",
      price: 8800,
      image:
         "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/3d14d606e954f49b218a.jpg/fit=cover,w=920,h=920",
         genre: "cap",
    coment:"tenpleate",
  },
  {
    id: 6,
    title: "BREATH <br> old english cap<br>black",
    price: 8800,
    image:
       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/a2c1ea8a52ae4ed3d4e8.jpg/fit=cover,w=920,h=920",
       genre: "cap",
    coment:"tenpleate",
  },
  {
    id: 7,
    title: "BREATH <br> crasher hat <br>torico",
    price: 8800,
    image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/0a557157e549a984428e.jpg/fit=cover,w=920,h=920",
      genre: "cap",
    coment:"tenpleate",
  },
  {
    id: 8,
    title: "BREATH <br> leather cap <br>black",
    price: 19800,
    image:
    "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/246539f095fdb0cd1f38.jpg/fit=cover,w=460,h=460",
    genre: "cap",
    coment:"tenpleate",
  },
  {
      id: 9,
      title: "BREATH <br> crack logo tee <br> black",
      price:  8800,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/220d9bd68df68a876bfe.jpeg/fit=cover,w=920,h=920",
      genre: "tee",
        
    coment:"tenpleate",
  },
  {
      id: 10,
      title: "BREATH <br> crack logo tee <br> White",
      price:  8000,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/4eee7558329ad1a48182.jpeg/fit=cover,w=920,h=920",
      genre: "tee",
        
    coment:"tenpleate",
  },
  {
      id: 11,
      title: "BREATH <br> logo maria tee <br>black×silver",
      price:  9900,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/c351d58536984a1a6547.jpeg/fit=cover,w=920,h=920",
      genre: "tee",
        
    coment:"tenpleate",
  },
  {
      id: 12,
      title: "BREATH <br> logo maria tee <br>black×gold",
      price:  9900,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/eed5d2976f9ad23b80dd.jpeg/fit=cover,w=920,h=920",
      genre: "tee",
        
    coment:"tenpleate",
  },
  {
      id: 13,
      title: "BREATH <br> benjamin hoodie <br> black",
      price:  27500,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/a9356dfe6c2bf9f1e307.jpg/fit=cover,w=920,h=920",
      genre: "hoodie",
        
    coment:"tenpleate",
  },
  {
      id: 14,
      title: "BREATH <br> benjamin hoodie <br> grey",
      price:  27500,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/153a4e6bd49f8d95a347.jpg/fit=cover,w=920,h=920",
      genre: "hoodie",
        
    coment:"tenpleate",
  },
  {
      id: 15,
      title: "BREATH <br> letterd hoodie <br>black",
      price:  27500,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/2fd49474dcf73066d3cc.jpg/fit=cover,w=920,h=920",
      genre: "hoodie",
        
    coment:"tenpleate",
  },
  {
      id: 16,
      title: "BREATH <br> letterd hoodie <br> beige",
      price:  27500,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/a9ead667c0591130b6a2.jpg/fit=cover,w=920,h=920",
      genre: "hoodie",
        
    coment:"tenpleate",
  },
  {
      id: 17,
      title: "BREATH <br> eagle logo L/S tee <br> black",
      price:  16500,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/f7d3d57d6428c2bc4e11.jpg/fit=cover,w=920,h=920",
      genre: "tee",
        
    coment:"tenpleate",
  },
  {
      id: 18,
      title: "BREATH <br> eagle logo L/S tee <br>white",
      price:  16500,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/66878e2edb6a77a10471.jpg/fit=cover,w=920,h=920",
      genre: "tee",
        
    coment:"tenpleate",
  },
  {
      id: 19,
      title: "BREATH <br> N2B jacket <br>black",
      price:  55000,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/800c7d13f0914233ad99.jpg/fit=cover,w=920,h=920",
      genre: "jacket",
        
    coment:"tenpleate",
  },
  {
      id: 20,
      title: "BREATH <br> 6 pocket pants <br> black",
      price:  38500,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/af79c63114cb427d9723.jpg/fit=cover,w=920,h=920",
      genre: "pants",
        
    coment:"tenpleate",
  },
  {
      id: 21,
      title: "BREATH <br> lace up MA-1<br> black",
      price:  66000,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/c3e06e13ae698d9cdb56.jpg/fit=cover,w=920,h=920",
      genre: "jacket",
        
    coment:"tenpleate",
  },
  {
      id: 22,
      title: "BREATH <br> old english hoodie<br>BLACK",
      price:  26400,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/c6954d6c650ddd8db85a.jpg/fit=cover,w=920,h=920",
      genre: "hoodie",
        
    coment:"tenpleate",
  },
  {
      id: 23,
      title: "BREATH <br> crack logo sweat crew <br>black",
      price:  24000,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/822cf665069d30abc798.jpg/fit=cover,w=920,h=920",
      genre: "sweat",
        
    coment:"tenpleate",
  },
  {
      id: 24,
      title: "BREATH <br> crack logo sweat pants <br>black",
      price:  22000,
      image:
      "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/9bf4726a9a84ea53c7a9.jpg/original",
      genre: "sweat",
        
    coment:"tenpleate",
  },

//   sugata
{
    id: 25,
    title: "SWEET DREAM T-SHIRT / BLACK",
    price: 8800 ,
    image:
      "https://sugata-online.com/cdn/shop/products/bk1_ebdc108d-4b45-4991-8da4-f44eea133e0b_1080x.jpg?v=1673516536",
      genre: "hoodie",
      
coment:"tenpleate",
      
  },
  {
    id: 26,
    title: "INNER FLAME HOODIE / BLACK",
    price: 13200,
    image:
       "https://sugata-online.com/cdn/shop/products/INNER_360x.jpg?v=1679139209",
       genre: "hoodie",
       
    coment:"tenpleate",
  },
  {
    id: 27,
    title: "MOON HOODIE / BLACK",
    price: 13200,
    image:
      "https://sugata-online.com/cdn/shop/products/moon-1_13f91d46-78de-4539-9175-929062834f90_360x.jpg?v=1676958148",
      genre: "hoodie",
      
coment:"tenpleate",
  },
  {
    id: 28,
    title: "BUTTERFLY EFFECT HOODIE / BLACK LIGTH BLUE",
    price: 14300,
    image:
     "https://sugata-online.com/cdn/shop/products/blue2_360x.jpg?v=1676188558",
     genre: "hoodie",
     
coment:"tenpleate",
  },
  {
    id: 29,
    title: "ACT OF GOD JACKET / GREEN",
    price: 14300,
    image:
       "https://sugata-online.com/cdn/shop/products/actofgod_jacket_360x.jpg?v=1668411946",
       genre: "jacket",
       
    coment:"tenpleate",
  },
  {
    id: 30,
    title: "SWEET DREAM T-SHIRT / WHITE GREEN",
    price: 8800,
    image:
      "https://sugata-online.com/cdn/shop/products/tee-grn-yel-1_360x.jpg?v=1661408318",
      genre: "t-shirt",
      
coment:"tenpleate",
  },
  {
    id: 31,
    title: "WIN & LOSE T-SHIRT / BLACK",
    price: 8800,
    image:
      "https://sugata-online.com/cdn/shop/products/lasvegas_360x.jpg?v=1656398659",
      genre: "t-shirt",
      
coment:"tenpleate",
  },
  {
    id: 32,
    title: "PERSIA PUFFER JACKET / MULTI",
    price: 22000,
    image:
    "https://sugata-online.com/cdn/shop/products/jkt-1_360x.jpg?v=1646986376",
    genre: "jacket",
    
coment:"tenpleate",
  },

//   lastnest
{
    id: 201,
    title: "LEATHER ROSE RIDERS JACKET / BLACK",
    price: 49500 ,
    image:
      "https://lastnest-online.com/cdn/shop/files/leather2.jpg?v=1700909734&width=823",
      genre: "jacket",
    coment:"tenpleate",
      
     
  },
  {
    id: 202,
    title: "FLANNEL OVER LONG SHIRTS / BLACK/RED",
    price: 29700,
    image:
      "https://lastnest-online.com/cdn/shop/files/shirt1_b95aadd9-96c4-44af-939d-be09c98d3fcf.jpg?v=1699759415&width=823",
      genre: "shirts",
    coment:"tenpleate",
      
  },
  {
    id: 203,
    title: "ASKYURSELF fleur de lis SWEATER / BLACK",
    price: 35200,
    image:
       "https://lastnest-online.com/cdn/shop/files/sweater1.jpg?v=1697530426&width=990",
       genre: "sweat",
    coment:"tenpleate",
      
  },
  {
      id: 204,
      title: "PYTHON TRACK JACKET / BLACK",
      price: 26400,
      image:
         "https://lastnest-online.com/cdn/shop/files/LN1-1_a4c9e313-1328-4153-a407-cce8cf42bbaa.jpg?v=1697278799&width=990",
         genre: "jacket",
        coment:"tenpleate",
      
  },
  {
      id: 205,
      title: "LEATHER HALF ZIP JACKET / BLACK",
      price: 8800,
      image:
         "https://lastnest-online.com/cdn/shop/files/LN1-2_67833544-c2b8-4fb3-9b3e-c8b1716a94c5.jpg?v=1697278782&width=990",
         genre: "jacket",
        coment:"tenpleate",
     
  },
  {
    id: 206,
    title: "LEATHER WIDE PANTS / BLACK",
    price: 28800,
    image:
       "https://lastnest-online.com/cdn/shop/files/S__206127128_0.jpg?v=1697276813&width=990",
       genre: "pants",
    coment:"tenpleate",
     
  },
  {
    id: 207,
    title: "EMBROIDERY RAGLAN L/S TEE / BLACK",
    price: 15400,
    image:
      "https://lastnest-online.com/cdn/shop/files/lsblk1.jpg?v=1692895268&width=713",
      genre: "sweatshirt",
    coment:"tee",
     
  },
  {
    id: 208,
    title: "LOGO T-SHIRTS / BLACK",
    price: 11000,
    image:
    "https://lastnest-online.com/cdn/shop/files/TB.png?v=1685682802&width=360",
    genre: "sweatshirt",
    coment:"tee",
      
  },
  {
      id: 209,
      title: "DUSTY CROSS T-SHIRTS / GRAY",
      price:  13200,
      image:
      "https://lastnest-online.com/cdn/shop/files/F_d7cc5972-b351-4d71-aa93-f6f3c1459ab1.png?v=1685772381&width=713",
      genre: "tee",
      coment:"tenpleate",
        
  },
  {
      id: 210,
      title: "ROSARIO T-SHIRTS / BLACK",
      price:  15400,
      image:
      "https://lastnest-online.com/cdn/shop/files/F_74fd411d-1f81-4d9e-8bcf-ffc4ac578d7d.png?v=1685772547&width=713",
      genre: "tee",
      coment:"tenpleate",
        
  },
  {
      id: 212,
      title: "TIE-DYE CARGO PANTS / BLACK",
      price:  30800,
      image:
      "https://lastnest-online.com/cdn/shop/files/cargo1.jpg?v=1702109858&width=493",
      genre: "pants",
      coment:"tenpleate",
        
  },
  {
      id: 213,
      title: "LOGO SILVER NECKLACE / SILVER",
      price:  30800,
      image:
      "https://lastnest-online.com/cdn/shop/files/neck1.jpg?v=1696048694&width=823",
      genre: "NECKLACE",
      coment:"tenpleate",
        
  },
  ];

  //仮のカート内商品
//   let cart = [
//     {
//         id: 1,
//         title: "Autumn Hoodie",
//         price: 264.9,

//         image: "https://pangaia.com/cdn/shop/products/Recycled-Nylon-NW-Flwrdwn-Quilted-Collarless-Jacket-Cerulean-Blue-Female-1_bf4b2a54-8a7f-4174-bc49-8ef22b24bfdd.jpg?v=1666708230&width=1426",
//         quantity: 2 // 仮の数量



//     },
//     {
//         id: 2,
//         title: "FUSION HOODIE",
//         price: 295,

//         image: "https://images.undiz.com/on/demandware.static/-/Sites-ZLIN-master/default/dw2264d914/merch/BTS/654206666_x.jpg?sw=1250",
//         quantity: 1 // 仮の数量



//     }
//     // 他の商品も同様に追加
// ];
  
  //get products list//
  const productList = document.getElementById('productlist');
  const cartItemsElement = document.getElementById('cartItems');
  const cartTotalElement = document.getElementById('cartTotal');

  //store cart items //
  let cart =JSON.parse(localStorage.getItem('cart'))  || [];

  //render products page//
  function renderProducts() {
    productList.innerHTML = products
        .map(
            (product) => `
                <div class="products">
                    <a href="item.html?id=${product.id}"> <!-- item.htmlへのリンク -->
                        <img src="${product.image}" alt="${product.title}" class="product-img">
                    </a>
                    <div class="product-info">
                        <h2 class="product-title">
                            <a href="item.html?id=${product.id}">${product.title}</a> <!-- item.htmlへのリンク -->
                        </h2>
                        <p class="product-price">￥${product.price.toFixed(0)}</p>
                    </div>
                </div>
            `
        )
        .join("");

    const addToCartButtons = document.getElementsByClassName('add-to-cart');
    for (let i = 0; i < addToCartButtons.length; i++) {
        const addToCartButton = addToCartButtons[i];
        addToCartButton.addEventListener('click', addToCart);
    }
}



//add to cart
function addToCart(event) {
    const productID = parseInt(event.target.dataset.id);
    const product = products.find((product) => product.id === productID);

    if (product) {
        const existingItem = cart.find((item) => item.id === productID);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const cartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                
                image: product.image,
                quantity: 1,
                genre: "sweatshirt",

                
            };
            cart.push(cartItem);
        }
        //change add to cart text to aded
        event.target.textContent = "Added";
        updateCartIcon()
        saveToLocalStorage();
        renderCartItems();
        calculateCartTolal();
        
    }
}

//rmeove from cart
function removeFromCart(event){
    const productID = parseInt(event.target.dataset.id);
    cart = cart.filter((item) => item.id !== productID);
    saveToLocalStorage();
    renderCartItems();
    calculateCartTolal();
    updateCartIcon();
}

//quantity change
function changeQuantity(event){
    const productID = parseInt(event.target.dataset.id);
    const quantity = parseInt(event.target.value);

    if(quantity>0){
        const cartItem = cart.find((item) => item.id === productID);
        if(cartItem){
            cartItem.quantity = quantity;
            saveToLocalStorage();
            calculateCartTolal();
            updateCartIcon();
        }
    }
}


//save to local storage
function saveToLocalStorage(){
    localStorage.setItem("cart",JSON.stringify(cart));
}

// product cart page
function renderCartItems() {
    cartItemsElement.innerHTML = cart
    .map(
        (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}"/>
                <div class="cart-item-info">
                    <h2 class="cart-item-title">${item.title}</h2>
                    <input
                        class="cart-item-quantity"  
                        type="number"
                        name=""
                        min="1"
                        value="${item.quantity}"
                        data-id="${item.id}"
                    />
                </div>
                <h2 class="cart-item-price">￥${item.price}</h2>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            </div>
        `
        )
        .join("");
        //remove from cart
        const removetButtons = document.getElementsByClassName('remove-from-cart');
    for (let i = 0; i < removetButtons.length; i++) {
        const removetButton =removetButtons[i];
        removetButton.addEventListener('click', removeFromCart);
    }
    //quantity change
        const quantityInputs = document.querySelectorAll('.cart-item-quantity')
        quantityInputs.forEach((input) => {
            input.addEventListener("change",changeQuantity);
        });
}

//cloulate total
function calculateCartTolal(){
    const total = cart.reduce((sum,item) => sum+item.price * item.quantity, 0);
    cartTotalElement.textContent = `合計: ￥${total.toFixed(0)}`;
}

// check cart
if(window.location.pathname.includes('cart.html')) {
    renderCartItems();
    calculateCartTolal();
} else {    
    renderProducts();
}

//cart icon quantity
const cartIcon = document.getElementsByClassName('cart-icon')

function updateCartIcon(){
    const totalQuantity = cart.reduce((sum,item) => sum + iyem.quantity,0)
    cartIcon.setAttribute('data-quantity',totalQuantity)
}

updateCartIcon();

function updateCartIconcartChange(){
    updateCartIcon();
}

window.addEventListener('storage',updateCartIconcartChange);

function updateCartIcon(){
    const totalQuantity = cart.reduce((sum,item) => sum + item.quantity,0);
    const cartIcon = document.getElementById("cart-icon");
    cartIcon.setAttribute("data-quantity",totalQuantity);
}


renderProducts();
renderCartItems();
calculateCartTolal();






