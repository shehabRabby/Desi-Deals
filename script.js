// common function
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// document.getElementById("card-btn-1").addEventListener("click", function () {
//   const title = getElement("card-title-1").innerText;
//   const price = getElement("price-title-1").innerText;

//   //tota price
//   const totalPrice = getElement("total-price").innerText;
//   //Add price
//   let currentTotal = Number(price) + Number(totalPrice);
//   //update price
//   getElement("total-price").innerText = currentTotal.toFixed(2);

//   // card container k dhoro
//   const cardContainer = getElement("cart-container");

// loop
//     const newCart = document.createElement("div");
//     newCart.innerHTML = `
//                 <div class=" bg-gray-200 flex justify-between items-center pr-7 pl-2 py-2 my-2">
//                   <img src="${productImg}" alt="" class="w-12">
//                   <div>
//                     <h2 class="font-bold">${productTitle}</h2>
//                     <p class="text-sm">${productPrice}TK</p>
//                   </div>
//                 </div>
//   `;
//     cardContainer.append(newCart);
// });



const cardBtns = document.getElementsByClassName("card-btn");
for (let cardbutton of cardBtns) {
  cardbutton.addEventListener("click", function () {
//     const productImg =
//       cardbutton.parentNode.parentNode.parentNode.children[0].children[0].src;
//     // title dhorlam
//     const productTitle = cardbutton.parentNode.parentNode.children[0].innerText;
//     // price dhorlam
//     const productPrice =
//       cardbutton.parentNode.parentNode.children[2].children[0].innerText;
//     //total price
//     const totalPrice = getElement("total-price").innerText;
//     let currentTotal = Number(productPrice) + Number(totalPrice);
//     getElement("total-price").innerText = currentTotal.toFixed(2);
//     // card container k dhoro
//     const cardContainer = getElement("cart-container");
//     // loop
//     const newCart = document.createElement("div");
//     newCart.innerHTML = `
//                 <div class=" bg-gray-200 flex justify-between items-center pr-7 pl-2 py-2 my-2">
//                   <img src="${productImg}" alt="" class="w-12">
//                   <div>
//                     <h2 class="font-bold">${productTitle}</h2>
//                     <p class="text-sm">${productPrice}TK</p>
//                   </div>
//                 </div>
//   `;
//     cardContainer.append(newCart);

//     const quantity = getElement("total-quantity").innerText;
//     const currentQuantity = Number(quantity) + 1;
//     getElement("total-quantity").innerText = currentQuantity;
  });
}



//document clear
document.getElementById('btn-clear').addEventListener('click', function(){
    const cardContainer = getElement('cart-container');
    cardContainer.innerHTML = '';
    getElement("total-quantity").innerText = 0;
    getElement("total-price").innerText = 0;
})


//delegation
getElement('product-box')
.addEventListener('click', function(e){
    if(e.target.className.includes('card-btn')){
    const cardbutton = e.target;


     const productImg =
      cardbutton.parentNode.parentNode.parentNode.children[0].children[0].src;
    // title dhorlam
    const productTitle = cardbutton.parentNode.parentNode.children[0].innerText;
    // price dhorlam
    const productPrice =
      cardbutton.parentNode.parentNode.children[2].children[0].innerText;
    //total price
    const totalPrice = getElement("total-price").innerText;
    let currentTotal = Number(productPrice) + Number(totalPrice);
    getElement("total-price").innerText = currentTotal.toFixed(2);
    // card container k dhoro
    const cardContainer = getElement("cart-container");
    // loop
    const newCart = document.createElement("div");
    newCart.innerHTML = `
                <div class=" bg-gray-200 flex justify-between items-center pr-7 pl-2 py-2 my-2">
                  <img src="${productImg}" alt="" class="w-12">
                  <div>
                    <h2 class="font-bold">${productTitle}</h2>
                    <p class="text-sm">${productPrice}TK</p>
                  </div>
                </div>
  `;
    cardContainer.append(newCart);

    const quantity = getElement("total-quantity").innerText;
    const currentQuantity = Number(quantity) + 1;
    getElement("total-quantity").innerText = currentQuantity;
    }
})