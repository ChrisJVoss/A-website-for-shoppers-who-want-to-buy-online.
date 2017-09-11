var items = [
  {id: 0, name: 'Audio-Technica ADTH-AD700', price: 178.90, img: 'https://zvukovik.by/image/cache/data/Audio-Technica/Audio-Technica%20ATH-AD700%201-1100x1100.jpg', description: '53 mm drivers reproduce clear treble and midrange. Bobbin-wound CCAW voice coils for superior power handling. Full open-air type headphones produce no sense of pressure on the ears, resulting in a completely natural sensation. Lightweight aluminum honeycomb casing with excellent acoustic properties. Self-adjusting 3D Wing Support provides a comfortable listening experience; total ear-fit design minimizes pressure'},
  {id: 1, name: 'Cowin E-7 w/ Acive Noise Cancelling + Bluetooth', price: 65, img: 'https://images-na.ssl-images-amazon.com/images/I/619jaB5tJZL._SL1001_.jpg', description: 'Significant noise reduction for travel, work and anywhere in between. Active Noise Cancelling technology----turn off the noise cancelling mode by flipping the switch when you needed. Proprietary 40mm large-aperture drivers. Exceptional clarity throughout an extended frequency range, with deep, accurate bass response. Lightweight comfortable around-ear fit you can wear all day long. 90° swiveling earcups, professional protein earpad and headband material delivers more durability and comfort. On-Board Mic pulse remote for taking calls, volume control and switching up playlists. 30 hours playtime at Bluetooth mode. Enjoy music all the time when the battery dead using the 3.5mm audio cable. 18-month warranty and quick response & friendly customer service'},
  {id: 2, name: 'Bose QuietComfort 25 Acoustic Noise Cancelling Headphones', price: 299, img: 'https://images-na.ssl-images-amazon.com/images/I/71kgntub7mL._SL1500_.jpg', description: 'Significant Noise Reduction For Travel. Deep, Powerful Sound For The Music You Love. Inline Mic/remote For Music And Calls. Designed specifically for use with select iPod, iPhone and iPad models. These headphones are compatible with most Android, Windows and BlackBerry smartphones'},
  {id: 3, name: 'Sennheiser HD 700', price: 598, img: 'https://images-na.ssl-images-amazon.com/images/I/41XoulU95pL.jpg', description: 'Open, circumaural dynamic stereo headphones for maximum wearing comfort. Outstanding soundstage with a warm and balanced audio reproduction. Specially-tuned, highly efficient drivers capable of delivering high sound pressure levels and a flat frequency response. Highly optimized ventilated magnet system minimizes air turbulence and harmonic, intermodulation distortion. Open-back ear cups facilitate transparent sound while showcasing cutting-edge industrial design'},
  {id: 4, name: 'Sennheiser HD 800 S Reference Headphone System', price: 1650.55, img: 'https://images-na.ssl-images-amazon.com/images/I/710Zn2k1hLL._SL1312_.jpg', description: 'Open-back, circum-aural, reference class dynamic stereo headphones. 56mm Ring radiator transducers are the largest drivers ever used in dynamic headphones. Innovative absorber technology reduces unwanted frequency response peaks allowing all the music nuances to become audible. Unique ear cup design directs sound waves to the ear at a slight angle to create an impressively natural and spatial listening experience. Includes two connecting cables: Single ended 1/4" and Balanced 4-pin XLR'},
  {id: 5, name: 'Beyerdynamic DT-990-Pro-250 Professional Acoustically Open Headphones 250 Ohms', price: 160.25, img: 'https://images-na.ssl-images-amazon.com/images/I/81ex%2BM7EmeL._SL1500_.jpg', description: 'Open, diffuse-field studio headphone with single-sided coiled cable and 250 ohm drivers. Extremely lightweight diaphragm for superb impulse performance. Excellent sound reproduction. Comfortable fit due to rugged, adjustable, padded headband construction and soft velour ear pads. 2 year manufacturer warranty only when purchased from an authorized beyerdynamic dealer'},
  {id: 6, name: 'Sennheiser HD 650 Open Back Professional Headphone', price: 315.99, img: 'https://images-na.ssl-images-amazon.com/images/I/81zggHtrqML._SL1500_.jpg', description: 'Specially designed acoustic silk ensures precision damping over the entire frequency range and helps to reduce THD to an incredible 0.05%. Improved frequency response is 10 - 39,500 Hz (-10 dB). Hand-selected matched driver elements. High power neodymium magnets deliver maximum efficiency. Lightweight aluminum voice coils for very fast transient response'},
  {id: 7, name: 'Shure SRH1840 Professional Open Back Headphones (Black)', price: 449, img: 'https://images-na.ssl-images-amazon.com/images/I/71R16D0qENL._SL1500_.jpg', description: 'Individually matched 40 mm neodymium drivers for unparalleled acoustic performance with smooth, extended high-end and accurate bass. Open-back, circumaural design for exceptionally natural sound, wide stereo image, and increased depth of field. Lightweight construction featuring aircraft-grade aluminum alloy yoke and stainless steel grilles for enhanced durability. Steel driver frame with vented center pole piece improves linearity and eliminates internal resonance for consistent performance at all listening levels. Ergonomic dual-frame, padded headband is lightweight and fully adjustable for hours of listening comfort'}
]

var views = ['products', 'details', 'cart', 'checkout']

var buttons = [
  {name: 'returnButton', idName: 'return-button', text: 'Return', color: 'btn-primary', destination: 'products'},
  {name: 'checkoutButton', idName: 'checkout-button', text: 'Checkout', color: 'btn-success', destination: 'checkout'}
]

var shoppingCart = {}

var formList = [
  {name: 'address', inputs: ['Full name:', 'Address:', 'City:', 'State/Province/Region:', 'ZIP:', 'Country:']},
  {name: 'billing', inputs: ['Card number:', 'Name on card:', 'Expiration date:']}
]

function renderItem(product) {
  var $newItem = document.createElement('div')
  var $itemImg = document.createElement('img')
  var $itemName = document.createElement('span')
  var $itemPrice = document.createElement('span')
  var $lineBreak = document.createElement('hr')

  $newItem.classList.add('item-item-container')
  $newItem.classList.add('row')
  $newItem.setAttribute('data-product', product.id)
  $newItem.id = product.id

  $itemImg.classList.add('item-img')
  $itemImg.setAttribute('src', product.img)
  $itemImg.setAttribute('data-product', product.id)
  $itemImg.classList.add('col-md-4')

  $itemName.classList.add('item-name')
  $itemName.classList.add('col-md-5')
  $itemName.setAttribute('data-product', product.id)
  $itemName.textContent = product.name

  $itemPrice.classList.add('item-price')
  $itemPrice.classList.add('col-md-3')
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
  var $items = document.querySelectorAll('div.item-item-container')
  $products.addEventListener('click', function (event) {
    var productId = event.target.dataset.product
    displayItemDetails(itemList, productId, $items, $products)
  })
}

displayItems(items)

function displayItemDetails(itemList, productId, itemContainer, row) {
  var product = renderItem(items[productId])
  var $details = document.getElementById('details')
  $details.innerHTML = ''
  $details.appendChild(product)
  var $id = document.getElementById('details').id
  var id = getView(views, $id)
  swapToView(views[id], views)
  itemDescription(itemList, productId, product)
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
  createGenericButton($descriptionList, buttons, 'returnButton')
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
  addToCartButton.setAttribute('id', 'add-to-cart')
  addToCartButton.classList.add('btn')
  addToCartButton.classList.add('btn-danger')
  addToCartButton.textContent = 'Add to Cart'
  product.appendChild(addToCartButton)
  addToCartButton.addEventListener('click', function (event) {
    addToCart(product, shoppingCart, items)
    updateCartButton(shoppingCart)
    createCart(getCartItems(shoppingCart, items))
  })
}

function updateCartButton(cartSize) {
  var count = 0
  for (var key in cartSize) {
    count += cartSize[key].quantity
  }
  document.getElementById('count').textContent = count
}

function configureCartButton() {
  var $cartButton = document.getElementById('cart-icon')
  $cartButton.addEventListener('click', function (event) {
    var $id = document.getElementById('cart').id
    var id = getView(views, $id)
    swapToView(views[id], views)
  })
}

configureCartButton()

function createCart(cartList) {
  var $shoppingCart = document.getElementById('shopping-cart')
  $shoppingCart.innerHTML = ''
  for (var i = 0; i < cartList.length; i++) {
    var currentProduct = cartList[i]
    var $product = renderItem(currentProduct)
    $product.appendChild(addSelector(shoppingCart, $product))
    $product.appendChild(removeItemButton(shoppingCart, $product))
    $shoppingCart.appendChild($product)
  }
  totalPrice(shoppingCart)
  createGenericButton($shoppingCart, buttons, 'returnButton')
}

function totalPrice(cartList) {
  var $totalPrice = document.getElementById('total-price')
  var total = 0
  for (var i in cartList) {
    total += (cartList[i].price * cartList[i].quantity)
  }
  document.getElementById('total-price').textContent = 'Total: $' + total.toFixed(2)
  createGenericButton($totalPrice, buttons, 'checkoutButton')
}

function createGenericButton(location, buttonList, button) {
  var theButton = {}
  for (var i = 0; i < buttonList.length; i++) {
    if (buttonList[i].name === button) {
      theButton = buttonList[i]
    }
  }
  var genericButton = document.createElement('button')
  genericButton.setAttribute('type', 'button')
  genericButton.setAttribute('id', theButton.idName)
  genericButton.classList.add('btn')
  genericButton.classList.add(theButton.color)
  genericButton.textContent = theButton.text
  location.appendChild(genericButton)
  genericButton.addEventListener('click', function (event) {
    var $id = document.getElementById(theButton.destination).id
    var id = getView(views, $id)
    swapToView(views[id], views)
  })
}

function addressForm(creatorList, selector, destination) {
  var chosenOne = {}
  var $destination = document.getElementById(destination)
  for (var i = 0; i < creatorList.length; i++) {
    if (creatorList[i].name === selector) {
      chosenOne = creatorList[i]
      for (var j = 0; j < chosenOne.inputs.length; j++) {
        var $divShipping = document.createElement('div')
        var $label = document.createElement('label')
        var $divSize = document.createElement('div')
        var $input = document.createElement('input')

        $divShipping.classList.add('form-group')

        $divShipping.classList.add('row')
        $label.classList.add('col-md-2')
        $label.classList.add('col-form-label')
        $label.textContent = chosenOne.inputs[j]
        $divSize.classList.add('col-md-8')
        $input.classList.add('form-control')
        $input.setAttribute('type', 'text')

        $divSize.appendChild($input)
        $divShipping.appendChild($label)
        $divShipping.appendChild($divSize)

        $destination.appendChild($divShipping)
      }
    }
  }
}
function submitButton(destination) {
  var $destination = document.getElementById(destination)
  var $button = document.createElement('button')
  $button.setAttribute('type', 'submit')
  $button.classList.add('btn')
  $button.classList.add('btn-warning')
  $button.textContent = 'Submit'

  $destination.appendChild($button)
}
addressForm(formList, 'address', 'step1')
submitButton('step1')
addressForm(formList, 'billing', 'step2')
submitButton('step2')

function addSelector(cart, product) {
  var $select = document.createElement('select')
  $select.setAttribute('id', 'selector' + product.id)
  for (var i = 1; i < 11; i++) {
    var $option = document.createElement('option')
    $option.setAttribute('value', i)
    if (cart[product.id].quantity === i) {
      $option.selected = true
    }
    $option.textContent = i
    $select.appendChild($option)
  }
  $select.addEventListener('change', function (event) {
    var qty = parseInt(event.target.value, 10)
    cart[product.id].quantity = qty

    totalPrice(cart)
    updateCartButton(cart)
  })
  return $select
}

function addToCart(product, cart, itemList) {
  var inCart = cart[product.id]
  if (inCart === undefined) {
    cart[product.id] = {
      quantity: 1,
      id: product.id,
      price: itemList[product.id].price
    }
  }
  else {
    cart[product.id].quantity += 1
  }
}

function getCartItems(cart, itemList) {
  var cartItems = []
  for (var itemId in cart) {
    cartItems.push(itemList[itemId])
  }
  return cartItems
}

function removeItemButton(cart, product) {
  var $removeButton = document.createElement('button')
  $removeButton.setAttribute('type', 'button')
  $removeButton.setAttribute('id', 'remove')
  $removeButton.classList.add('btn')
  $removeButton.classList.add('btn-danger')
  $removeButton.textContent = 'Remove'
  $removeButton.addEventListener('click', function (event) {
    var id = product.id
    delete cart[id]
    createCart(getCartItems(cart, items))
    updateCartButton(cart)
  })
  return $removeButton
}
