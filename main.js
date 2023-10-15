import './style.css'

window.addEventListener('load', showProducts);

async function showProducts() 
{
  console.log('Page fully loaded');
  var response = await fetch (
  'https://652bdb78d0d1df5273eecec8.mockapi.io/products');
  var products = await response.json();
  // console.log(products);

  var productsDiv = document.getElementById('products')
  var productsHTML = "";

  for (var i=1; i<=products.length - 1; i++)
  {
    productsHTML += `<div class="card">
      <img src=${products[i].imageURL}/>
    </div>`;
  }
  productsDiv.innerHTML = productsHTML;
}