const productAr =[
    {
      iprodt_img: 'DSB.gif',
      iprodt_name: 'DSB logo Reveal',
      iprodt_link: 'product .html',
      iprodt_descrip: 'Here is a gif that might entice a user',
      iprodt_ratings: 4.4,
    },
     {
        iprodt_img: 'lamb.gif',
        iprodt_name: 'Lamborghini Gif',
        iprodt_link: 'product .html',
        iprodt_descrip: 'Here is a gif that might entice a user',
        iprodt_ratings: 4.4,
        
     },
     {
        iprodt_img: 'lamborgini.gif',
        iprodt_name: 'lamborghini Preloader',
        iprodt_link: 'product .html',
        iprodt_descrip: 'Here is a  lamborgini gif that might entice a user',
        iprodt_ratings: 4.4,
        
     },
     {
        iprodt_img: 'starbucks.gif',
        iprodt_name: 'starbucks logo Reveal',
        iprodt_link: 'product .html',
        iprodt_descrip: 'Here is a gif that might entice a user',
        iprodt_ratings: 4.4,
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
      <h3 id="filtername"><a href="${iproducts.iprodt_link}">${iproducts.iprodt_name}</a></h3>
      
      <p>"${iproducts.iprodt_descrip}."</p>
     <dl>
       <dt>Rating</dt>
       <dd>${iproducts.iprodt_ratings} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
     </dl>
      <a href="#"style="color: lightseagreen; text-decoration: underline;">see more</a>
  
     <div class="prodcut-list-cart" >
       <button type="button" id="fav" value="fav" onclick="popup()"><span class="material-icons" >favorite</span></button>
     </div>
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
