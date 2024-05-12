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

// Cau a
// var typeofProduct = prompt('SPLG')
// var nameofProduct = prompt('TSPLG')
// var price = prompt('GBN')
//  product.push({
//     'Loại': typeofProduct,
//     'Tên' : nameofProduct,
//     'Giá' :price,
//  })
//  console.log(product)

//Cau b
function Showinfor() {
    console.log('Danh sách sản phẩm là;')
    for(let i=0; i<product.length; i++){
        console.log('Tên sản phẩm thứ '+ (i+1)+ ': ' + product[i].Tên)
        console.log('Giá: '+product[i].Giá)
        console.log('Loại sản phẩm: '+ product[i].Loại)
        console.log('')
    }
}
Showinfor()