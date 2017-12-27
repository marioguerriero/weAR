// This little library should simulate remote API calls and return data to user

function getCarouselData() {
  return {
    data: [
      { id: 1, asset: '/assets/carousel/1.jpg', alt: 'Ad Banner 1', href: '#'  },
      { id: 2, asset: '/assets/carousel/2.jpg', alt: 'Ad Banner 2', href: '#'  },
      { id: 3, asset: '/assets/carousel/3.jpg', alt: 'Ad Banner 3', href: '#'  },
      { id: 4, asset: '/assets/carousel/4.jpg', alt: 'Ad Banner 4', href: '#'  }
    ]
  }
}

function getShopCartData() {
  return {
    data: [
      { id: 1, name: 'name', asset: '/assets/carousel/1.jpg', price:'10', alt: 'Ad Banner 1', href: '#'  },
      { id: 2, name: 'name', asset: '/assets/carousel/2.jpg', price:'3', alt: 'Ad Banner 2', href: '#'  },
      { id: 3, name: 'name', asset: '/assets/carousel/3.jpg', price:'4', alt: 'Ad Banner 3', href: '#'  },
      { id: 4, name: 'name', asset: '/assets/carousel/4.jpg', price:'5', alt: 'Ad Banner 4', href: '#'  }
    ]
  }
}

function getImageBlockData() {
  return {
    data: [
      { id: 1, asset: '/assets/imageBlock/sweather.jpg', alt: 'Ad Banner 1', href: '#', position: '0', description: 'Sweather 1' },
      { id: 2, asset: '/assets/imageBlock/sweather2.jpg', alt: 'Ad Banner 2', href: '#', position: '1', description: 'Sweather 2' },
      { id: 3, asset: '/assets/imageBlock/skirt.jpg', alt: 'Ad Banner 3', href: '#', position: '0', description: 'Skirt' }
    ]
  }
}

function getLogo() {
  return {
     id: 1, asset: '/assets/logo_wear.png', alt: 'Wear Logo', href: '#'
  }
}

function getTryOnSample() {
  return {
     id: 1, asset: '/assets/try-on_sample.jpg', alt: 'Wear Logo', href: '#'
  }
}

function getCategories() {
  return {
    data: [
      { id: 1, name: 'Man', subcategories: [ { id: 11, name: 'Shirts' }, { id: 12, name: 'Pants' } ] },
      { id: 2, name: 'Woman', subcategories: [ { id: 21, name: 'Skirts' }, { id: 22, name: 'Trousers' } ] },
      { id: 3, name: 'Winter Collection' },
      { id: 4, name: 'Promos' }
    ]
  }
}

function getFilters() {
  return {
    data: [
      { id: 1, name: 'Size', subfilters: [ { id: 11, name: 'S' }, { id: 12, name: 'M' }, { id: 13, name: 'L' }, { id: 14, name: 'XL' } ] },
      { id: 2, name: 'Color', subfilters: [ { id: 21, name: 'Black' }, { id: 22, name: 'Brown' }, { id: 23, name: 'Blue' } ] }
    ]
  }
}

function getClothes() {
  return {
    data: [
      { id: 1, asset: '/assets/try-on_items/shirt.jpg', href: '#' },
      { id: 2, asset: '/assets/try-on_items/trousers.jpg', href: '#' }
    ]
  }
}

function query(params) {
  return {
    data: [
      { id: 1, name: 'Floral Midi Wrap Dress', assets: [ '/assets/items/0001/1.jpg', '/assets/items/0001/2.jpg'  ], sizes: [ 'S', 'M', 'L' ], price: 29.99 },
      { id: 2, name: 'VMCELEB - Blouse', assets: [ '/assets/items/0002/1.jpg', '/assets/items/0002/2.jpg'  ], sizes: [ 'S', 'M', 'L' ], price: 29.99 },
      { id: 3, name: 'mint&berry - Shirt', assets: [ '/assets/items/0003/1.jpg', '/assets/items/0003/2.jpg'  ], sizes: [ 'S', 'M', 'L' ], price: 39.99 },
      { id: 4, name: 'ONLMANDY CHOKER DRESS', assets: [ '/assets/items/0004/1.jpg', '/assets/items/0004/2.jpg'  ], sizes: [ 'S', 'M', 'L' ], price: 31.49 },
      { id: 5, name: 'Summer Dress', assets: [ '/assets/items/0005/1.jpg', '/assets/items/0005/2.jpg'  ], sizes: [ 'S', 'M' ], price: 32.49 },
      { id: 6, name: 'Long Sleeved Shirt', assets: [ '/assets/items/0006/1.jpg', '/assets/items/0006/2.jpg'  ], sizes: [ 'M', 'L' ], price: 14.99 },
      { id: 7, name: 'JDYASH - Jacket', assets: [ '/assets/items/0007/1.jpg', '/assets/items/0007/2.jpg'  ], sizes: [ 'S', 'M', 'L' ], price: 20.00 },
      { id: 8, name: 'Blue T-shirt', assets: [ '/assets/items/0008/1.jpg', '/assets/items/0008/2.jpg'  ], sizes: [ 'S' ], price: 12.99 }
    ]
  }
}

function getColors() {
  return {
    data: [
      { id: 1, name: 'Black', value: '#000000' },
      { id: 2, name: 'Red', value: '#FF4000' },
      { id: 3, name: 'White', value: '#FFFFFF' },
      { id: 4, name: 'Grey', value: '#848484' },
      { id: 5, name: 'Green', value: '#04B404' }
    ]
  }
}

function getBrands() {
  return {
    data: [
      { id: 11, name: 'D&G' },
      { id: 12, name: 'Armani' },
      { id: 13, name: 'Gucci' },
      { id: 14, name: 'Valentino' },
      { id: 15, name: 'Calvin Klein' }
    ]
  }
}
