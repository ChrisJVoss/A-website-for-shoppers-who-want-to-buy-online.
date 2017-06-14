var items = [
  {id: 0, name: 'Audio-Technica ADTH-AD700' , price: 178.90 , img: "/Users/christophervoss/Desktop/headphone.jpg"},
  {id: 1, name: 'Cowin E-7 w/ Acive Noise Cancelling + Bluetooth', price: 65, img: 'https://images-na.ssl-images-amazon.com/images/I/619jaB5tJZL._SL1001_.jpg'},
  {id: 2, name: 'Bose QuietComfort 25 Acoustic Noise Cancelling Headphones', price: 299, img: 'https://images-na.ssl-images-amazon.com/images/I/71kgntub7mL._SL1500_.jpg'},
  {id: 3, name: 'Sennheiser HD 700', price: 598, img: 'https://images-na.ssl-images-amazon.com/images/I/41XoulU95pL.jpg'}
]

var $row = document.querySelector('#item-holder')

function displayItems(itemList) {
  for (var i = 0; i < itemList.length; i++) {
    var currentProduct = itemList[i]
    var $product = renderItem(currentProduct)
    $row.appendChild($product)
  }
}

function renderItem(product) {
  var $newItem = document.createElement('div')
  var $itemImg = document.createElement('img')
  var $itemName = document.createElement('span')
  var $itemPrice = document.createElement('span')
  var $lineBreak = document.createElement('hr')

  $newItem.classList.add('item-container')
  $newItem.classList.add('col-md-10')
  $newItem.id = product.id

  $itemImg.classList.add('item-img')
  $itemImg.setAttribute('src', product.img)
  $itemImg.classList.add('col-md-4')

  $itemName.classList.add('item-name')
  $itemName.classList.add('col-md-4')
  $itemName.textContent = product.name

  $itemPrice.classList.add('item-stats')
  $itemPrice.classList.add('col-md-4')
  $itemPrice.textContent = '$' + product.price.toFixed(2)

  $lineBreak.classList.add('col-md-12')

  $newItem.appendChild($itemImg)
  $newItem.appendChild($itemName)
  $newItem.appendChild($itemPrice)
  $newItem.appendChild($lineBreak)

  return $newItem
}
displayItems(items)

// Issue-2
var $itemContainer = document.querySelectorAll('div.item-container')
for (var i = 0; i < $itemContainer.length; i++) {
  $itemContainer[i].addEventListener('click', function(event) {
    var target = event.target
    console.log(target.id)
    if (target.id === '') {
      var parent = target.parentElement
      console.log(parent)
    }
  })
}
