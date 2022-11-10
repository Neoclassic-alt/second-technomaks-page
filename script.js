const data = [
    {
        id: 1,
        title: "Asus X515JF-BR240",
        link: "https://tehnomaks.ru/catalog/detail/1f59ec7f08a30d646ef6c20eeb984cc1",
        imageURL: "https://img.tehnomaks.ru/img/prod/small/16463773026.jpg",
        category: "notebooks",
        price: 32980
    },
    {
        id: 2,
        title: "Lenovo IdeaPad 3 15ADA05",
        link: "https://tehnomaks.ru/catalog/detail/0d43f851dc077457cdf1ae29e6641394",
        imageURL: "https://img.tehnomaks.ru/img/prod/small/16639188965325.png",
        category: "notebooks",
        price: 35495
    },
    {
        id: 3,
        title: "Asus E510MA-EJ694T",
        link: "https://tehnomaks.ru/catalog/detail/08d920ab78eee6b8019a4f2d7acf6870",
        imageURL: "https://img.tehnomaks.ru/img/prod/small/16463760369.jpg",
        category: "notebooks",
        price: 34980
    },
    {
        id: 4,
        title: "Xiaomi Redmi 9C 2/32Gb",
        link: "https://tehnomaks.ru/catalog/detail/70e27bbbf8181d4861a6ad10bd46fccf",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/16645147129702.jpg",
        category: "smartphones",
        price: 8480
    },
    {
        id: 5,
        title: "Xiaomi Redmi Note 11 4/64Gb Twilight Blue ",
        link: "https://tehnomaks.ru/catalog/detail/24f28c40a9893b764731b9486e3b61a5",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/16463750253.jpg",
        category: "smartphones",
        price: 14980
    },
    {
        id: 6,
        title: "Xiaomi Redmi Note 9 3/64Gb Onyx Black",
        link: "https://tehnomaks.ru/catalog/detail/d65344aa8c3c358187aa19c2e464bd2c",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/16021532735.jpg",
        category: "smartphones",
        price: 13980
    },
    {
        id: 7,
        title: "Xiaomi Redmi 9A 2/32Gb Granite Gray",
        link: "https://tehnomaks.ru/catalog/detail/0b162bafb83c56d8266b267e26255178",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/16111286548.jpg",
        category: "smartphones",
        price: 5980
    },
    {
        id: 8,
        title: "Epson L805",
        link: "https://tehnomaks.ru/catalog/detail/47863b781c119ca636bd1bc42c3874a8",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/9e639c8e5781a3d3ce3d7ac4d88caeacbbef1d0a.jpg",
        category: "printers",
        price: 34890
    },
    {
        id: 9,
        title: "Kyocera P3145DN",
        link: "https://tehnomaks.ru/catalog/detail/e8fc75138d30e9021d5857f516b8ab19",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/1574042358_1.jpg",
        category: "printers",
        price: 5980
    },
    {
        id: 10,
        title: "Deerma DEM-SH50W",
        link: "https://tehnomaks.ru/catalog/detail/8a7cf55e2dd31d0930fceb0c70cc79e7",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/16343676451.jpg",
        category: "teapots",
        price: 4280
    },
    {
        id: 11,
        title: "Deerma DEM-SH50W",
        link: "https://tehnomaks.ru/catalog/detail/8a7cf55e2dd31d0930fceb0c70cc79e7",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/16343676451.jpg",
        category: "teapots",
        price: 4280
    },
    {
        id: 12,
        title: "Xiaomi Mi Electric Kettle 1A EU White",
        link: "https://tehnomaks.ru/catalog/detail/2dfbcb73bd0ccc377d8760d7b8b96f44",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/16512329694063.jpg",
        category: "teapots",
        price: 4490
    },
    {
        id: 13,
        title: "Xiaomi 70mai Dash Cam M300 Dark Gray",
        link: "https://tehnomaks.ru/catalog/detail/93fe13ed81251164053da51f83e20974",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/16343670642.png",
        category: "videorecorders",
        price: 3590
    },
    {
        id: 14,
        title: "Xiaomi 70mai Dash Cam M300 Rose Gold",
        link: "https://tehnomaks.ru/catalog/detail/288f650a89d9139cebcddab518da3590",
        imageURL: "https://img.tehnomaks.ru/img/prod/full/16436322351.jpg",
        category: "videorecorders",
        price: 3590
    },
]

const results = document.querySelector(".results")
const searchInput = document.querySelector(".search-input")
const categoriesLinks = document.querySelector(".categories")

searchInput.oninput = function() {
    results.innerHTML = ''
    const foundData = data.filter((item) => item.title.toLowerCase().includes(searchInput.value.toLowerCase()))
    const categories = []
    const categoryCount = {}
    let innerHTML = ''
    
    for (let item of foundData) {
        // Заполнение категорий
        if (!categories.includes(item.category)) {
            categories.push(item.category)
        }

        if (!categoryCount[item.category]) {
            categoryCount[item.category] = 1
        } else {
            categoryCount[item.category] += 1
        }

        // Шаблон карточки товара
        innerHTML += `
        <a href="${item.link}" class="product__link">
            <div class="product">
                <h2 class="product__title">${item.title}</h2>
                <img src="${item.imageURL}" height="99" />
                <p class="product__price">${item.price} ₽</p>
            </div>
        </a>`
    }
    if (foundData.length === 0){
        innerHTML = '<p>Товаров не найдено</p>'
    }
    results.innerHTML = innerHTML

    // Скрытие категорий
    for (let category of categoriesLinks.children) {
        category.hidden = true
    }
    // Отображение категорий
    for (let category of categories) {
        const categoryLink = categoriesLinks.querySelector(`[data-category="${category}"]`)
        categoryLink.hidden = false
        categoryLink.children[1].innerHTML = `(${categoryCount[category]})`
    }
}