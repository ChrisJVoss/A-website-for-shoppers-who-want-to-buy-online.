var items = [
  {id: 0, name: 'Audio-Technica ADTH-AD700' , price: 178.90 , img: 'https://zvukovik.by/image/cache/data/Audio-Technica/Audio-Technica%20ATH-AD700%201-1100x1100.jpg', description: '53 mm drivers reproduce clear treble and midrange. Bobbin-wound CCAW voice coils for superior power handling. Full open-air type headphones produce no sense of pressure on the ears, resulting in a completely natural sensation. Lightweight aluminum honeycomb casing with excellent acoustic properties. Self-adjusting 3D Wing Support provides a comfortable listening experience; total ear-fit design minimizes pressure'},
  {id: 1, name: 'Cowin E-7 w/ Acive Noise Cancelling + Bluetooth', price: 65, img: 'https://images-na.ssl-images-amazon.com/images/I/619jaB5tJZL._SL1001_.jpg', description: 'Significant noise reduction for travel, work and anywhere in between. Active Noise Cancelling technology----turn off the noise cancelling mode by flipping the switch when you needed. Proprietary 40mm large-aperture drivers. Exceptional clarity throughout an extended frequency range, with deep, accurate bass response. Lightweight comfortable around-ear fit you can wear all day long. 90° swiveling earcups, professional protein earpad and headband material delivers more durability and comfort. On-Board Mic pulse remote for taking calls, volume control and switching up playlists. 30 hours playtime at Bluetooth mode. Enjoy music all the time when the battery dead using the 3.5mm audio cable. 18-month warranty and quick response & friendly customer service'},
  {id: 2, name: 'Bose QuietComfort 25 Acoustic Noise Cancelling Headphones', price: 299, img: 'https://images-na.ssl-images-amazon.com/images/I/71kgntub7mL._SL1500_.jpg', description: 'Significant Noise Reduction For Travel. Deep, Powerful Sound For The Music You Love. Inline Mic/remote For Music And Calls. Designed specifically for use with select iPod, iPhone and iPad models. These headphones are compatible with most Android, Windows and BlackBerry smartphones'},
  {id: 3, name: 'Sennheiser HD 700', price: 598, img: 'https://images-na.ssl-images-amazon.com/images/I/41XoulU95pL.jpg', description: 'Open, circumaural dynamic stereo headphones for maximum wearing comfort. Outstanding soundstage with a warm and balanced audio reproduction. Specially-tuned, highly efficient drivers capable of delivering high sound pressure levels and a flat frequency response. Highly optimized ventilated magnet system minimizes air turbulence and harmonic, intermodulation distortion. Open-back ear cups facilitate transparent sound while showcasing cutting-edge industrial design'},
  {id: 4, name: 'Sennheiser HD 800 S Reference Headphone System', price: 1650.55, img: 'https://images-na.ssl-images-amazon.com/images/I/710Zn2k1hLL._SL1312_.jpg', description: 'Open-back, circum-aural, reference class dynamic stereo headphones. 56mm Ring radiator transducers are the largest drivers ever used in dynamic headphones. Innovative absorber technology reduces unwanted frequency response peaks allowing all the music nuances to become audible. Unique ear cup design directs sound waves to the ear at a slight angle to create an impressively natural and spatial listening experience. Includes two connecting cables: Single ended 1/4" and Balanced 4-pin XLR'},
  {id: 5, name: 'Beyerdynamic DT-990-Pro-250 Professional Acoustically Open Headphones 250 Ohms' , price: 160.25, img: 'https://images-na.ssl-images-amazon.com/images/I/81ex%2BM7EmeL._SL1500_.jpg', description: 'Open, diffuse-field studio headphone with single-sided coiled cable and 250 ohm drivers. Extremely lightweight diaphragm for superb impulse performance. Excellent sound reproduction. Comfortable fit due to rugged, adjustable, padded headband construction and soft velour ear pads. 2 year manufacturer warranty only when purchased from an authorized beyerdynamic dealer'},
  {id: 6, name: 'Sennheiser HD 650 Open Back Professional Headphone', price: 315.99, img: 'https://images-na.ssl-images-amazon.com/images/I/81zggHtrqML._SL1500_.jpg', description: 'Specially designed acoustic silk ensures precision damping over the entire frequency range and helps to reduce THD to an incredible 0.05%. Improved frequency response is 10 - 39,500 Hz (-10 dB). Hand-selected matched driver elements. High power neodymium magnets deliver maximum efficiency. Lightweight aluminum voice coils for very fast transient response'},
  {id: 7, name: 'Shure SRH1840 Professional Open Back Headphones (Black)', price: 449, img: 'https://images-na.ssl-images-amazon.com/images/I/71R16D0qENL._SL1500_.jpg', description: 'Individually matched 40 mm neodymium drivers for unparalleled acoustic performance with smooth, extended high-end and accurate bass. Open-back, circumaural design for exceptionally natural sound, wide stereo image, and increased depth of field. Lightweight construction featuring aircraft-grade aluminum alloy yoke and stainless steel grilles for enhanced durability. Steel driver frame with vented center pole piece improves linearity and eliminates internal resonance for consistent performance at all listening levels. Ergonomic dual-frame, padded headband is lightweight and fully adjustable for hours of listening comfort'}
]

var views = ['products', 'details', 'cart']

var shoppingCart = []

var cartCount = 0

function renderItem(product) {
  var $newItem = document.createElement('div')
  var $itemImg = document.createElement('img')
  var $itemName = document.createElement('span')
  var $itemPrice = document.createElement('span')
  var $lineBreak = document.createElement('hr')

  $newItem.classList.add('item-itemContainer')
  $newItem.classList.add('col-md-10')
  $newItem.setAttribute('data-product', product.id)
  $newItem.id = product.id

  $itemImg.classList.add('item-img')
  $itemImg.setAttribute('src', product.img)
  $itemImg.setAttribute('data-product', product.id)
  $itemImg.classList.add('col-md-4')

  $itemName.classList.add('item-name')
  $itemName.classList.add('col-md-4')
  $itemName.setAttribute('data-product', product.id)
  $itemName.textContent = product.name

  $itemPrice.classList.add('item-stats')
  $itemPrice.classList.add('col-md-4')
  $itemPrice.setAttribute('data-product', product.id)
  $itemPrice.textContent = '$' + product.price.toFixed(2)

  $lineBreak.classList.add('col-md-12')

  $newItem.appendChild($itemImg)
  $newItem.appendChild($itemName)
  $newItem.appendChild($itemPrice)
  $newItem.appendChild($lineBreak)

  return $newItem
}

function displayItems(itemList) {
  var $products = document.getElementById('products')
  for (var i = 0; i < itemList.length; i++) {
    var currentProduct = itemList[i]
    var $product = renderItem(currentProduct)
    $products.appendChild($product)
  }
  var $items = document.querySelectorAll('div.item-itemContainer')
  $products.addEventListener('click', function(event) {
    var productId = event.target.dataset.product
    displayItemDetails(itemList, productId, $items, $products)
  })
}

displayItems(items)

function displayItemDetails(itemList, productId, itemContainer, row) {
  var product = renderItem(items[productId])
  var $details = document.getElementById('details')
  $details.innerHTML=''
  $details.appendChild(product)
  var $id = document.getElementById('details').id
  var id = getView(views, $id)
  swapToView(views[id], views)
  itemDescription(itemList, productId, product)
  createReturnButton(product)
  addToCartButton(product, itemList)
}

function itemDescription(itemList, productId, product) {
  var splitDescription = itemList[productId].description.split('. ')
  var $descriptionList = document.createElement('ul')
  $descriptionList.classList.add('col-md-8')
  $descriptionList.classList.add('item-description')
  for (var i = 0; i < splitDescription.length; i++) {
    var $description = document.createElement('li')
    $description.textContent = splitDescription[i]
    $descriptionList.appendChild($description)
  }
  product.appendChild($descriptionList)
}

function createReturnButton(product) {
  var $backButton = document.createElement('button')
  $backButton.setAttribute('type', 'button')
  $backButton.setAttribute('data-button', 'return')
  $backButton.classList.add('btn')
  $backButton.classList.add('btn-elegant')
  $backButton.textContent = 'Return'
  product.appendChild($backButton)
  $backButton.addEventListener('click', function(event){
    var $id = document.getElementById('products').id
    var id = getView(views, $id)
    swapToView(views[id], views)
  })
}

function swapToView(view, views) {
  for (var i = 0; i < views.length; i++) {
    if (views[i] === view) {
        var $view = document.getElementById(views[i])
        $view.classList.remove('hidden')
    }
    else {
      var $view = document.getElementById(views[i])
      $view.classList.add('hidden')
    }
  }
}

function getView(views, id) {
  for (var i = 0; i < views.length; i++) {
    if (views[i] === id) {
      return i
    }
  }
}

function addToCartButton(product, itemList) {
  var addToCartButton = document.createElement('button')
  addToCartButton.setAttribute('type', 'button')
  addToCartButton.setAttribute('data-button', 'return')
  addToCartButton.classList.add('btn')
  addToCartButton.classList.add('btn-elegant')
  addToCartButton.textContent = 'Add to Cart'
  product.appendChild(addToCartButton)
  addToCartButton.addEventListener('click', function(event){
    addToCart(product, shoppingCart, itemList)
    updateCartButton(shoppingCart)
  })
}

function addToCart(product, cart, itemList) {
  var cartId = product.id
  cart.unshift(itemList[cartId]);
}

function updateCartButton(cartSize) {
  count = cartSize.length
  document.getElementById('count').textContent = count
}
