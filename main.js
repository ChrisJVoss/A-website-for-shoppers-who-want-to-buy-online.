var items = [
  {id: 0, name: 'Audio-Technica ADTH-AD700' , price: 178.90 , img: 'https://zvukovik.by/image/cache/data/Audio-Technica/Audio-Technica%20ATH-AD700%201-1100x1100.jpg', description: '53 mm drivers reproduce clear treble and midrange. Bobbin-wound CCAW voice coils for superior power handling. Full open-air type headphones produce no sense of pressure on the ears, resulting in a completely natural sensation. Lightweight aluminum honeycomb casing with excellent acoustic properties. Self-adjusting 3D Wing Support provides a comfortable listening experience; total ear-fit design minimizes pressure.'},

  {id: 1, name: 'Cowin E-7 w/ Acive Noise Cancelling + Bluetooth', price: 65, img: 'https://images-na.ssl-images-amazon.com/images/I/619jaB5tJZL._SL1001_.jpg', description: 'Significant noise reduction for travel, work and anywhere in between. Active Noise Cancelling technology----turn off the noise cancelling mode by flipping the switch when you needed. Proprietary 40mm large-aperture drivers. Exceptional clarity throughout an extended frequency range, with deep, accurate bass response. Lightweight comfortable around-ear fit you can wear all day long. 90° swiveling earcups, professional protein earpad and headband material delivers more durability and comfort. On-Board Mic pulse remote for taking calls, volume control and switching up playlists. 30 hours playtime at Bluetooth mode. Enjoy music all the time when the battery dead using the 3.5mm audio cable. 18-month warranty and quick response & friendly customer service.'},

  {id: 2, name: 'Bose QuietComfort 25 Acoustic Noise Cancelling Headphones', price: 299, img: 'https://images-na.ssl-images-amazon.com/images/I/71kgntub7mL._SL1500_.jpg', description: 'Significant Noise Reduction For Travel. Deep, Powerful Sound For The Music You Love. Inline Mic/remote For Music And Calls. Designed specifically for use with select iPod, iPhone and iPad models. These headphones are compatible with most Android, Windows and BlackBerry smartphones.'},

  {id: 3, name: 'Sennheiser HD 700', price: 598, img: 'https://images-na.ssl-images-amazon.com/images/I/41XoulU95pL.jpg', description: 'Open, circumaural dynamic stereo headphones for maximum wearing comfort. Outstanding soundstage with a warm and balanced audio reproduction. Specially-tuned, highly efficient drivers capable of delivering high sound pressure levels and a flat frequency response. Highly optimized ventilated magnet system minimizes air turbulence and harmonic, intermodulation distortion. Open-back ear cups facilitate transparent sound while showcasing cutting-edge industrial design'}
]

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
  var $holder = document.getElementById('item-holder')
  for (var i = 0; i < itemList.length; i++) {
    var currentProduct = itemList[i]
    var $product = renderItem(currentProduct)
    $holder.appendChild($product)
  }
  var $itemContainer = document.querySelectorAll('div.item-container')
  $holder.addEventListener('click', function(event) {
    var targetData = event.target.dataset.product
    console.log(targetData)
    //selectedItem(targetData, $itemContainer)
    selectedItem(itemList, targetData, $itemContainer, $holder)
  })
}

displayItems(items)

// Issue-2

function selectedItem(itemList, target, container, row) {
  var $details = document.getElementById('item-details')
  $details.innerHTML=''
  $details.appendChild(container[target])
  row.classList.add('hidden')
  $details.classList.remove('hidden')
  itemDescription(itemList, target, container)
  createReturnButton(target, container, row, $details)
}

function itemDescription(itemList, target, container) {
  var splitDescription = itemList[target].description.split('. ')
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

function createReturnButton(target, container, row, details) {
  var $backButton = document.createElement('button')
  $backButton.setAttribute('type', 'button')
  $backButton.setAttribute('data-button', 'return')
  $backButton.classList.add('btn')
  $backButton.classList.add('btn-elegant')
  $backButton.textContent = 'Return'
  container[target].appendChild($backButton)
  $backButton.addEventListener('click', function(event){
    var targetButton = event.target.dataset
    returnButton(targetButton.return, row, details)
  })

}

function returnButton(target, row, details) {
  console.log('here')
  //ow.style.visibility = 'visibile'
  console.log('here1')
  row.classList.remove('hidden')
  console.log('here2')
  //details.style.visibility = 'hidden'
  details.classList.add('hidden')

}

function view() {

}
