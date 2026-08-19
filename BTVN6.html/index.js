const products = [
    {
        id: 1,
        name: "Laptop",
        price: 2000,
        category: "electronics",
        amount: 20
    },
    {
        id: 2,
        name: "Phone",
        price: 1000,
        category: "electronics",
        amount: 2
    },
    {
        id: 3,
        name: "Book",
        price: 20,
        category: "book",
        amount: 10
    },
    {
        id: 4,
        name: "Keyboard",
        price: 100,
        category: "electronics",
        amount: 0
    },
    {
        id: 5,
        name: "Mouse",
        price: 50,
        category: "accessory",
        amount: 15
    }
];

console.log("===== DANH SÁCH SẢN PHẨM =====");

for (const product of products) {
    console.log(
        `ID: ${product.id} | ${product.name} | $${product.price} | ${product.category} | Số lượng: ${product.amount}`
    );
}

console.log("==== SẢN PHẨM CÒN HÀNG ====");
for(const product of products){
    if(product.amount > 0){
        console.log(product.name);
    }
}

console.log("==== SẢN PHẨM HẾT HÀNG ====");
for(const product of products){
    if(product.amount === 0){
        console.log(product.name);
    }
}

let totalAmount = 0;
for(const product of products){
    totalAmount += product.amount;
}

let totalValue = 0;
for(const product of products){
    totalValue += product.price * product.amount;
}

let totalPrice = 0;
for(const product of products){
    totalPrice += product.price;
}

let giaTrungBinh = totalPrice / products.length;

console.log("==== THỐNG KÊ ====");
console.log("Tổng số lượng: ", totalAmount);
console.log("Tổng giá trị kho: ", totalValue);
console.log("Giá trung bình: ", giaTrungBinh);

console.log("==== SẢN PHẨM ĐẮT NHẤT");
let maxPrice = products[0];
for(const product of products){
    if(products.price > maxPrice.price){
    maxPrice.price = products.price;
    }
}
console.log(`${maxPrice.name} - ${maxPrice.amount} sản phẩm `);

console.log("==== TÌM THEO ID ====");
let productID = 3;
for(const product of products){
    if(product.id === productID){
       console.log(`${product.name} - ${product.price} - ${product.category} - ${product.amount}`); 
    }
}

console.log("==== ELECTRONICS ====");
const category = "electronics";
for(const product of products){
    if(product.category === category){
        console.log(product.name)
    }
}

console.log("==== THỐNG KÊ CATEGORY ====");
let electronics = 0;
let book = 0;
let accessory = 0;
for(const product of products){
    if(product.category === "electronics"){
        electronics++;
    }
    else if(product.category === "book"){
        book++;
    }
    else if(product.category === "accessory"){
        accessory++;
    }
}

console.log(`Electronics: ${electronics}`);
console.log(`Book: ${book}`);
console.log(`Accessory: ${accessory}`);

console.log("==== PHÂN LOẠI ====");
for(const product of products){
    if(product.price >= 1000){
        console.log(`${product.name} -> Cao cấp`);
    }
    else if(product.price >= 100){
        console.log(`${product.name} -> Trung bình`);
    }
    else if(product.price < 100){
        console.log(`${product.name} -> Giá rẻ`);
    }
}