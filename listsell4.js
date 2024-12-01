const productsData = [
  {
    name: "iPhone 16 Pro Max 256GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
    oldPrice: "33.000.000",
    newPrice: "33.000.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iPhone 15 Pro Max 256GB",
    img: "https://product.hstatic.net/1000356936/product/black_w27897_e__3__b336a5131ed247fda0280aefc602f2b4.jpg",
    oldPrice: "27.000.000",
    newPrice: "27.000.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iPhone 16 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png",
    oldPrice: "21.690.000",
    newPrice: "21.690.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iPhone 13 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png",
    oldPrice: "13.990.000",
    newPrice: "13.990.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iPhone 16 Pro 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    oldPrice: "28.490.000",
    newPrice: "24.392.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 10,
    category: "Điện thoại",
  },
  {
    name: "iPhone 15 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png",
    oldPrice: "19.690.000",
    newPrice: "19.690.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iPhone 14 Pro Max 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png",
    oldPrice: "25.690.000",
    newPrice: "25.690.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iPhone 15 Plus 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png",
    oldPrice: "20.550.000",
    newPrice: "20.550.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "SIR CLASSIC LOAFER - LF17",
    img: "https://bizweb.dktcdn.net/100/044/266/products/balo-the-thao-kingbag-pontus-6.jpg?v=1723009809297",
    oldPrice: "1.750.000",
    newPrice: "1.487.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Giày",
  },
  {
    name: "SAINT PAUL OXFORD - OF08",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf1709.jpg?v=1726570237953",
    oldPrice: "1.750.000",
    newPrice: "1.487.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Giày",
  },
];

const productContainer = document.getElementById("product-container");

// Hàm để hiển thị sản phẩm
function displayProducts(products) {
  productContainer.innerHTML = ""; // Xóa tất cả sản phẩm cũ
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="${product.img}" alt="${product.name}">
                    <p class="old-price">Giá cũ: ${product.oldPrice} VNĐ</p>
                    <p class="new-price">Giá mới: ${product.newPrice} VNĐ</p>
                    <p class="discount">Giảm giá: ${product.discount}%</p>
                    <p class="rating">Đánh giá: ${"⭐".repeat(
                      product.rating
                    )}</p>
                    <p class="additional-info">Đã bán: ${product.sold} chiếc</p>
                    <p class="additional-info">Thương hiệu: ${product.brand}</p>
                    <p class="additional-info">Nguồn gốc: ${product.origin}</p>
                    <a href="thanhtoandonhang.html" class="button-buy">Mua ngay</a>
                `;
    productContainer.appendChild(productElement);
  });
}

// Hàm lọc sản phẩm theo phân loại
function filterProducts(category) {
  if (category === "Tất cả") {
    displayProducts(productsData); // Hiển thị tất cả sản phẩm
  } else {
    const filteredProducts = productsData.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts); // Hiển thị sản phẩm theo phân loại
  }
}

// Hiển thị tất cả sản phẩm khi trang tải
displayProducts(productsData);
