var product = [
    {
        'Loại': 'Sữa tắm',
        'Tên': 'Sữa tắm LifeBoy',
        'Giá': 125000,
    },
    {
        'Loại': 'Sữa tắm',
        'Tên': 'Sữa tắm Dove',
        'Giá': 125000,
    },
    {
        'Loại': 'Dầu gội',
        'Tên': 'Dầu gội Sunsilk',
        'Giá': 125000,
    },
    {
        'Loại': 'Dầu gội',
        'Tên': 'Dầu gội Dove',
        'Giá': 125000,
    },
    {
        'Loại': 'Dụng cụ học tập',
        'Tên': 'Bút mực Thiên Long',
        'Giá': 125000,
    },
    {
        'Loại': 'Dụng cụ học tập',
        'Tên': 'Bút chì Thiên Long',
        'Giá': 125000,
    }
]


var typeofProduct = prompt('SPLG')
var nameofProduct = prompt('TSPLG')
var price = prompt('GBN')
 product.push({
    'Loại': typeofProduct,
    'Tên' : nameofProduct,
    'Giá' :price,
 })
 console.log(product)