const productAr =[
  {
    iprodt_img: 'owner.jpg',
    iprodt_name: ' Ishita Raval',
    iprodt_tagline: ' YOU DRAW, WE ANIMATE',
    iprodt_descrip: ' We make professional animation and graphics affordable for any company',
    
    
 }
]

const productsTable= document.querySelector('#iproducts')


let prevProductsAr = []

const setProductsTable = function(product_array){

  productsTable.innerHTML = ``
 
  product_array.forEach((iproducts) => {
    const article_pro = document.createElement('article')
    

    article_pro.classList.add('product')

    article_pro.innerHTML = 
    `<img src="img/${iproducts.iprodt_img}" alt="${iproducts.iprodt_name}">
  
    <div class="prod-details">
      <h3 id="filtername" style="color: lightblue;">Owner:  ${iproducts.iprodt_name}</a></h3>
      <p style="color: yellow;">Tagline: " ${iproducts.iprodt_tagline}."</p>
      <p style="color: lightblue;">Description:  ${iproducts.iprodt_descrip}.</p>
     </div>
    `
     productsTable.appendChild(article_pro)
  })

}
setProductsTable(productAr)


function popup(){
  alert("Added to Favourite");
}

function reviewpop(){
  alert("Ratings are Submitted");
}



