const productAr =[
  {
       iprodt_video: 'kinetic-typography.mp4',
       iprodt_name: 'kinetic Typography',
       iprodt_descrip: 'Here is a video of starbucks that might entice a user',
       iprodt_ratings: 4.4,
       
    },
    {
        iprodt_video: 'DSB.mp4',
        iprodt_name: 'DSB Logo Reveal',
        iprodt_descrip: 'Here is a video of DSB that might entice a user',
        iprodt_ratings: 4.4,
     },
     {
        iprodt_video: 'logo-reveal.mp4',
        iprodt_name: 'Starbucks Logo Reveal',
        iprodt_descrip: 'Here is a video of starbucks that might entice a user',
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
    `<video controls src="video/${iproducts.iprodt_video}" alt="${iproducts.iprodt_name}">
  
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

