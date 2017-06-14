var items = [
  {id: 0, name: 'Audio-Technica ADTH-AD700' , price: 178.90 , img: "/Users/christophervoss/Desktop/headphone.jpg", description: "53 mm drivers reproduce clear treble and midrange. Bobbin-wound CCAW voice coils for superior power handling. Full open-air type headphones produce no sense of pressure on the ears, resulting in a completely natural sensation. Lightweight aluminum honeycomb casing with excellent acoustic properties. Self-adjusting 3D Wing Support provides a comfortable listening experience; total ear-fit design minimizes pressure"},
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
displayItems(items)

// Issue-2
var targetData = 0

document.addEventListener('click', function(event) {
  var targetData = event.target.dataset.product
  console.log(targetData)
  selectedItem(targetData)
})

var $itemContainer = document.querySelectorAll('div.item-container')
var clickedItem = 0

function selectedItem(target) {
  for (var i = 0; i < $itemContainer.length; i++) {
    console.log($itemContainer[i].dataset.product)
    if ($itemContainer[i].dataset.product !== target) {
      $itemContainer[i].style.visibility = 'hidden'
    }
    else {
      clickedItem = target
    }
  }
  $itemContainer[clickedItem].classList.add('selected-item')
  scroll(0,0)
  itemDescription()
  createReturnButton()
}

function itemDescription() {
  var splitDescription = items[targetData].description.split('.')
  var $descriptionList = document.createElement('ul')
  $descriptionList.classList.add('col-md-8')
  $descriptionList.classList.add('item-description')
  for (var i = 0; i < splitDescription.length; i++) {
    var $description = document.createElement('li')
    $description.textContent = splitDescription[i]
    $descriptionList.appendChild($description)
  }
  $itemContainer[clickedItem].appendChild($descriptionList)
}

function createReturnButton() {
  var $backButton = document.createElement('button')
  $backButton.setAttribute('type', 'button')
  $backButton.classList.add('btn')
  $backButton.classList.add('btn-elegant')
  $backButton.textContent = 'Return'
  $itemContainer[clickedItem].appendChild($backButton)
}
