function displayProduct(size) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');


    // 商品リストをlocalStorageから取得
    const products = [
        {
            id: 201,
            title: "LEATHER ROSE RIDERS JACKET / BLACK",
            price: 49500 ,
            image:
              "https://lastnest-online.com/cdn/shop/files/leather2.jpg?v=1700909734&width=823",
              coment:"tenpleate",
              // "https://pangaia.com/cdn/shop/products/Recycled-Nylon-NW-Flwrdwn-Quilted-Collarless-Jacket-Cerulean-Blue-Female-1_bf4b2a54-8a7f-4174-bc49-8ef22b24bfdd.jpg?v=1666708230&width=1426",
             
          },
          {
            id: 202,
            title: "FLANNEL OVER LONG SHIRTS / BLACK/RED",
            price: 29700,
            image:
              "https://lastnest-online.com/cdn/shop/files/shirt1_b95aadd9-96c4-44af-939d-be09c98d3fcf.jpg?v=1699759415&width=823",
              coment:"tenpleate",
              // "https://images.undiz.com/on/demandware.static/-/Sites-ZLIN-master/default/dw2264d914/merch/BTS/654206666_x.jpg?sw=1250",
          },
          {
            id: 203,
            title: "ASKYURSELF fleur de lis SWEATER / BLACK",
            price: 35200,
            image:
               "https://lastnest-online.com/cdn/shop/files/sweater1.jpg?v=1697530426&width=990",
               coment:"tenpleate",
              //"https://pangaia.com/cdn/shop/products/Recycled-Cashmere-Core-Hoodie-Chestnut-Brown-Male-1.jpg?v=1663947464&width=1426",
          },
          {
              id: 204,
              title: "PYTHON TRACK JACKET / BLACK",
              price: 26400,
              image:
                 "https://lastnest-online.com/cdn/shop/files/LN1-1_a4c9e313-1328-4153-a407-cce8cf42bbaa.jpg?v=1697278799&width=990",
                 coment:"tenpleate",
              //"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61734ec7-dad8-40f3-9b95-c7500939150a/sportswear-club-mens-french-terry-crew-neck-sweatshirt-tdFDRc.png",
          },
          {
              id: 205,
              title: "LEATHER HALF ZIP JACKET / BLACK",
              price: 8800,
              image:
                 "https://lastnest-online.com/cdn/shop/files/LN1-2_67833544-c2b8-4fb3-9b3e-c8b1716a94c5.jpg?v=1697278782&width=990",
                 coment:"tenpleate",
              //"https://img01.ztat.net/article/spp-media-p1/7067458719b744fe81ffee62d3d0b912/abad421e7d8e47f08a2abc1c6ffe07dc.jpg?imwidth=1800",
          },
          {
            id: 206,
            title: "LEATHER WIDE PANTS / BLACK",
            price: 28800,
            image:
               "https://lastnest-online.com/cdn/shop/files/S__206127128_0.jpg?v=1697276813&width=990",
               coment:"tenpleate",
              //"https://pangaia.com/cdn/shop/files/Reclaim-3.0-Hoodie-Reclaim-Jade-Womens-3.jpg?v=1693398673&width=1426",
          },
          {
            id: 207,
            title: "EMBROIDERY RAGLAN L/S TEE / BLACK",
            price: 15400,
            image:
              "https://lastnest-online.com/cdn/shop/files/lsblk1.jpg?v=1692895268&width=713",
              coment:"tenpleate",
              //"https://img01.ztat.net/article/spp-media-p1/10cea44041564f81ac585fc6c8978907/c4c32dbc45dd4dbc9d15087c846538f2.jpg?imwidth=1800",
          },
          {
            id: 208,
            title: "LOGO T-SHIRTS / BLACK",
            price: 11000,
            image:
            "https://lastnest-online.com/cdn/shop/files/TB.png?v=1685682802&width=360",
            coment:"tenpleate",
              //"https://img01.ztat.net/article/spp-media-p1/d391f90be278469ebfdff731800cfccc/6d2101bd672f4e059501f01fe726f315.jpg?imwidth=1800",
          },
          {
              id: 209,
              title: "DUSTY CROSS T-SHIRTS / GRAY",
              price:  13200,
              image:
              "https://lastnest-online.com/cdn/shop/files/F_d7cc5972-b351-4d71-aa93-f6f3c1459ab1.png?v=1685772381&width=713",
              coment:"tenpleate",
                
          },
          {
              id: 210,
              title: "ROSARIO T-SHIRTS / BLACK",
              price:  15400,
              image:
              "https://lastnest-online.com/cdn/shop/files/F_74fd411d-1f81-4d9e-8bcf-ffc4ac578d7d.png?v=1685772547&width=713",
              coment:"tenpleate",
                
          },
          {
              id: 212,
              title: "TIE-DYE CARGO PANTS / BLACK",
              price:  30800,
              image:
              "https://lastnest-online.com/cdn/shop/files/cargo1.jpg?v=1702109858&width=493",
              coment:"tenpleate",
                
          },
          {
              id: 213,
              title: "LOGO SILVER NECKLACE / SILVER",
              price:  30800,
              image:
              "https://lastnest-online.com/cdn/shop/files/neck1.jpg?v=1696048694&width=823",
              coment:"tenpleate",
                
          },
    ];
    
    // idを元に商品を検索
    const clickedProduct = products.find(product => product.id === parseInt(productId));

    if (clickedProduct) {
        const productInfoElement = document.getElementById('productInfo');
        productInfoElement.innerHTML = `
        <div class="product-details">
            <img src="${clickedProduct.image}" alt="${clickedProduct.title}" />
        </div>    
        <div class="product-info">
                <h2>${clickedProduct.title}</h2>
                <p>Price: ￥${clickedProduct.price.toFixed(0)}</p>
            <div class="size-select">
                <label for="size">Select Size:</label>
                <select id="size">
                    <option value="S" ${size === 'S' ? 'selected' : ''}>S</option>
                    <option value="M" ${size === 'M' ? 'selected' : ''}>M</option>
                    <option value="L" ${size === 'L' ? 'selected' : ''}>L</option>
                </select>
            </div>
                <div class="add-btn">
                   <p><a class="add-to-cart" data-id="${clickedProduct.id}" data-size="${size}">Add to cart</a></p>
                </div>
                <!-- コメントを表示 -->
                <div class="coment">
                <p>coment:${clickedProduct.coment}</p>    
                </div>
        </div>
        
    `;

    const sizeSelect = document.getElementById('size');
    sizeSelect.value = size;

    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', addToCart);
    }
}
displayProduct('');





// Products Array
const products = [
    {
        id: 201,
        title: "LEATHER ROSE RIDERS JACKET / BLACK",
        price: 49500 ,
        image:
          "https://lastnest-online.com/cdn/shop/files/leather2.jpg?v=1700909734&width=823",
          coment:"tenpleate",
          // "https://pangaia.com/cdn/shop/products/Recycled-Nylon-NW-Flwrdwn-Quilted-Collarless-Jacket-Cerulean-Blue-Female-1_bf4b2a54-8a7f-4174-bc49-8ef22b24bfdd.jpg?v=1666708230&width=1426",
         
      },
      {
        id: 202,
        title: "FLANNEL OVER LONG SHIRTS / BLACK/RED",
        price: 29700,
        image:
          "https://lastnest-online.com/cdn/shop/files/shirt1_b95aadd9-96c4-44af-939d-be09c98d3fcf.jpg?v=1699759415&width=823",
          coment:"tenpleate",
          // "https://images.undiz.com/on/demandware.static/-/Sites-ZLIN-master/default/dw2264d914/merch/BTS/654206666_x.jpg?sw=1250",
      },
      {
        id: 203,
        title: "ASKYURSELF fleur de lis SWEATER / BLACK",
        price: 35200,
        image:
           "https://lastnest-online.com/cdn/shop/files/sweater1.jpg?v=1697530426&width=990",
           coment:"tenpleate",
          //"https://pangaia.com/cdn/shop/products/Recycled-Cashmere-Core-Hoodie-Chestnut-Brown-Male-1.jpg?v=1663947464&width=1426",
      },
      {
          id: 204,
          title: "PYTHON TRACK JACKET / BLACK",
          price: 26400,
          image:
             "https://lastnest-online.com/cdn/shop/files/LN1-1_a4c9e313-1328-4153-a407-cce8cf42bbaa.jpg?v=1697278799&width=990",
             coment:"tenpleate",
          //"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61734ec7-dad8-40f3-9b95-c7500939150a/sportswear-club-mens-french-terry-crew-neck-sweatshirt-tdFDRc.png",
      },
      {
          id: 205,
          title: "LEATHER HALF ZIP JACKET / BLACK",
          price: 8800,
          image:
             "https://lastnest-online.com/cdn/shop/files/LN1-2_67833544-c2b8-4fb3-9b3e-c8b1716a94c5.jpg?v=1697278782&width=990",
             coment:"tenpleate",
          //"https://img01.ztat.net/article/spp-media-p1/7067458719b744fe81ffee62d3d0b912/abad421e7d8e47f08a2abc1c6ffe07dc.jpg?imwidth=1800",
      },
      {
        id: 206,
        title: "LEATHER WIDE PANTS / BLACK",
        price: 28800,
        image:
           "https://lastnest-online.com/cdn/shop/files/S__206127128_0.jpg?v=1697276813&width=990",
           coment:"tenpleate",
          //"https://pangaia.com/cdn/shop/files/Reclaim-3.0-Hoodie-Reclaim-Jade-Womens-3.jpg?v=1693398673&width=1426",
      },
      {
        id: 207,
        title: "EMBROIDERY RAGLAN L/S TEE / BLACK",
        price: 15400,
        image:
          "https://lastnest-online.com/cdn/shop/files/lsblk1.jpg?v=1692895268&width=713",
          coment:"tenpleate",
          //"https://img01.ztat.net/article/spp-media-p1/10cea44041564f81ac585fc6c8978907/c4c32dbc45dd4dbc9d15087c846538f2.jpg?imwidth=1800",
      },
      {
        id: 208,
        title: "LOGO T-SHIRTS / BLACK",
        price: 11000,
        image:
        "https://lastnest-online.com/cdn/shop/files/TB.png?v=1685682802&width=360",
        coment:"tenpleate",
          //"https://img01.ztat.net/article/spp-media-p1/d391f90be278469ebfdff731800cfccc/6d2101bd672f4e059501f01fe726f315.jpg?imwidth=1800",
      },
      {
          id: 209,
          title: "DUSTY CROSS T-SHIRTS / GRAY",
          price:  13200,
          image:
          "https://lastnest-online.com/cdn/shop/files/F_d7cc5972-b351-4d71-aa93-f6f3c1459ab1.png?v=1685772381&width=713",
          coment:"tenpleate",
            
      },
      {
          id: 210,
          title: "ROSARIO T-SHIRTS / BLACK",
          price:  15400,
          image:
          "https://lastnest-online.com/cdn/shop/files/F_74fd411d-1f81-4d9e-8bcf-ffc4ac578d7d.png?v=1685772547&width=713",
          coment:"tenpleate",
            
      },
      {
          id: 212,
          title: "TIE-DYE CARGO PANTS / BLACK",
          price:  30800,
          image:
          "https://lastnest-online.com/cdn/shop/files/cargo1.jpg?v=1702109858&width=493",
          coment:"tenpleate",
            
      },
      {
          id: 213,
          title: "LOGO SILVER NECKLACE / SILVER",
          price:  30800,
          image:
          "https://lastnest-online.com/cdn/shop/files/neck1.jpg?v=1696048694&width=823",
          coment:"tenpleate",
            
      },
    //   {
    //       id: 214,
    //       title: "BREATH <br> benjamin hoodie <br> black",
    //       price:  27500,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/a9356dfe6c2bf9f1e307.jpg/fit=cover,w=920,h=920"
   
            
    //   },
    //   {
    //       id: 215,
    //       title: "BREATH <br> benjamin hoodie <br> grey",
    //       price:  27500,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/153a4e6bd49f8d95a347.jpg/fit=cover,w=920,h=920"
   
            
    //   },
    //   {
    //       id: 216,
    //       title: "BREATH <br> letterd hoodie <br>black",
    //       price:  27500,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/2fd49474dcf73066d3cc.jpg/fit=cover,w=920,h=920"
    
            
    //   },
    //   {
    //       id: 217,
    //       title: "BREATH <br> letterd hoodie <br> beige",
    //       price:  27500,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/a9ead667c0591130b6a2.jpg/fit=cover,w=920,h=920"
    
            
    //   },
    //   {
    //       id: 218,
    //       title: "BREATH <br> eagle logo L/S tee <br> black",
    //       price:  16500,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/f7d3d57d6428c2bc4e11.jpg/fit=cover,w=920,h=920"
   
            
    //   },
    //   {
    //       id: 219,
    //       title: "BREATH <br> eagle logo L/S tee <br>white",
    //       price:  16500,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/66878e2edb6a77a10471.jpg/fit=cover,w=920,h=920"
    
            
    //   },
    //   {
    //       id: 220,
    //       title: "BREATH <br> N2B jacket <br>black",
    //       price:  55000,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/800c7d13f0914233ad99.jpg/fit=cover,w=920,h=920"
   
            
    //   },
    //   {
    //       id: 221,
    //       title: "BREATH <br> 6 pocket pants <br> black",
    //       price:  38500,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/af79c63114cb427d9723.jpg/fit=cover,w=920,h=920"
   
            
    //   },
    //   {
    //       id: 222,
    //       title: "BREATH <br> lace up MA-1<br> black",
    //       price:  66000,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/c3e06e13ae698d9cdb56.jpg/fit=cover,w=920,h=920"
   
    //   },
    //   {
    //       id: 223,
    //       title: "BREATH <br> old english hoodie<br>BLACK",
    //       price:  26400,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/c6954d6c650ddd8db85a.jpg/fit=cover,w=920,h=920"
    
            
    //   },
    //   {
    //       id: 224,
    //       title: "BREATH <br> crack logo sweat crew <br>black",
    //       price:  24000,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/822cf665069d30abc798.jpg/fit=cover,w=920,h=920"
   
            
    //   },
    //   {
    //       id: 225,
    //       title: "BREATH <br> crack logo sweat pants <br>black",
    //       price:  22000,
    //       image:
    //       "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/5df096a263538a266e7c5630/9bf4726a9a84ea53c7a9.jpg/original"
    
            
    //   },
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
                <div class="item-products">
                    <a href="Product details-lastnest.html?id=${product.id}"> <!-- Product details-breth.htmlへのリンク -->
                        <img src="${product.image}" alt="${product.title}" class="product-img">
                    </a>
                     <div class="product-info">
                        <h2 class="product-title">
                            <a href="Product details-lastnest.html?id=${product.id}">${product.title}</a> <!-- Product details-breth.htmlへのリンク -->
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



// add to cart
function addToCart(event) {
    const productID = parseInt(event.target.dataset.id);
    const size = document.getElementById('size').value; // サイズを取得
    const product = products.find((product) => product.id === productID);

    if (product) {
        const existingItem = cart.find((item) => item.id === productID && item.size === size);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const cartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                size: size, // サイズを追加
                coment:"tenpleate",
                quantity: 1,
            };
            cart.push(cartItem);
        }
        // change add to cart text to added
        event.target.textContent = "Added";
        updateCartIcon();
        saveToLocalStorage();
        renderCartItems();
        calculateCartTotal();
    }
}

//rmeove from cart
function removeFromCart(event) {
    const productID = parseInt(event.target.dataset.id);
    const size = cart.find((item) => item.id === productID).size;

    // カートからIDとサイズが一致する商品のみを削除
    cart = cart.filter((item) => item.id !== productID || item.size !== size);

    saveToLocalStorage();
    renderCartItems();
    calculateCartTotal();
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
                    <img src="${item.image}" alt="${item.title}" />
                    <div class="cart-item-info">
                        <h2 class="cart-item-title">${item.title}</h2>
                        <p>Size: ${item.size}</p> <!-- サイズを表示 -->
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









//背景
particlesJS("particles-js", {
    "particles":{
      "number":{
        "value":946000,//この数値を変更すると星の数が増減できる
        "density":{
          "enable":true,
          "value_area":800
        }
      },
      "color":{
        "value":"#000000"
      },
      "shape":{
        "type":"circle",//形状はcircleを指定
        "stroke":{
          "width":0
        },
        },
      "opacity":{
        "value":1,//シェイプの透明度
        "random":true,//シェイプの透明度をランダムにする
        "anim":{
          "enable":true,//シェイプの透明度をアニメーションさせる
          "speed":3,//シェイプの透明度をアニメーションさせる
          "opacity_min":0,//透明度の最小値０
          "sync":false//全てを同時にアニメーションさせない
        }
      },
      "size":{
        "value":2,
        "random":true,
        "anim":{
          "enable":false,
          "speed":400,
          "size_min":0.3,
          "sync":false
        }
      },
      "line_linked":{
        "enable":false,
      },
      "move":{
        "enable":true,
        "speed":1000,//この数値を小さくするとゆっくりな動きになる
      "direction":"none",//方向指定なし
      "random":true,//動きはランダムに
      "straight":true,//動きをとどめる
        "out_mode":"out",
        "bounce":false,
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":600
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
        },
        "onclick":{
          "enable":false,
        },
        "resize":true
      }
    },
    "retina_detect":true
  });



