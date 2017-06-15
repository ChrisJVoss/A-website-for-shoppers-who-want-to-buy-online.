var items = [
  {id: 0, name: 'Audio-Technica ADTH-AD700' , price: 178.90 , img: "https://zvukovik.by/image/cache/data/Audio-Technica/Audio-Technica%20ATH-AD700%201-1100x1100.jpg", description: "53 mm drivers reproduce clear treble and midrange. Bobbin-wound CCAW voice coils for superior power handling. Full open-air type headphones produce no sense of pressure on the ears, resulting in a completely natural sensation. Lightweight aluminum honeycomb casing with excellent acoustic properties. Self-adjusting 3D Wing Support provides a comfortable listening experience; total ear-fit design minimizes pressure."},
  {id: 1, name: 'Cowin E-7 w/ Acive Noise Cancelling + Bluetooth', price: 65, img: 'https://images-na.ssl-images-amazon.com/images/I/619jaB5tJZL._SL1001_.jpg'},
  {id: 2, name: 'Bose QuietComfort 25 Acoustic Noise Cancelling Headphones', price: 299, img: 'https://images-na.ssl-images-amazon.com/images/I/71kgntub7mL._SL1500_.jpg'},
  {id: 3, name: 'Sennheiser HD 700', price: 598, img: 'https://images-na.ssl-images-amazon.com/images/I/41XoulU95pL.jpg'}
]

var $row = document.querySelector('#item-holder')

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

function displayItems(itemList) {
  for (var i = 0; i < itemList.length; i++) {
    var currentProduct = itemList[i]
    var $product = renderItem(currentProduct)
    $row.appendChild($product)
  }
  var $itemContainer = document.querySelectorAll('div.item-container')
  $row.addEventListener('click', function(event) {
    var targetData = event.target.dataset
    //var targetButton = event.target.dataset
    console.log(typeof targetData)
    selectedItem(targetData.product, $itemContainer)
    //returnButton(targetButton)
  })
}

displayItems(items)

// Issue-2

function selectedItem(target, container) {
  for (var i = 0; i < container.length; i++) {
    if (container[i].dataset.product !== target) {
      container[i].style.visibility = 'hidden'
    }
  }
  container[target].classList.add('selected-item')
  scroll(0,0)
  itemDescription(items, target, container)
  createReturnButton(target, container)
  $row.removeEventListener('click', event)
}

function itemDescription(list, target, container) {
  var splitDescription = list[target].description.split('. ')
  var $descriptionList = document.createElement('ul')
  $descriptionList.classList.add('col-md-8')
  $descriptionList.classList.add('item-description')
  for (var i = 0; i < splitDescription.length; i++) {
    var $description = document.createElement('li')
    $description.textContent = splitDescription[i]
    $descriptionList.appendChild($description)
  }
  container[target].appendChild($descriptionList)
}

function createReturnButton(target, container) {
  var $backButton = document.createElement('button')
  $backButton.setAttribute('type', 'button')
  $backButton.setAttribute('data-button', 'return')
  $backButton.classList.add('btn')
  $backButton.classList.add('btn-elegant')
  $backButton.textContent = 'Return'
  container[target].appendChild($backButton)
  $backButton.addEventListener('click', function(event){
    var targetButton = event.target.dataset
    returnButton(targetButton.return, container)
  })
}

function returnButton(target, container) {
  for (var i = 0; i < container.length; i++) {
    container[i].style.visibility = 'visible'
    container[i].classList.remove('selected-item')
  }
  var $descriptionList = document.querySelector('ul')//.item-description')
  $descriptionList.style.visibility = 'hidden'
}
