let CurrentUser: UserInfo;


interface UserInfo {
    userID: any;
    userName: string;
    userProfile: string[];
    userEmail: string;
    userPassword: string;
    userPhone: string;
    userBalance: number
}


interface ProductInfo {
    productID: any;
    productName: string;
    productAvailableQuantity: number;

    productUnitPrice: number;
    productPurchaseDate: Date;
    productExpiryDate: Date;
    productPhoto: string[];
}


interface CartInfo {
    cartID: any;
    productID: number;
    productName: string;
    productQuantity: number;
    productUnitPrice: number;
    productTotalPrice: number;
}

interface OrderInfo {
    orderID: any;
    userID: number;
    productID: number[];
    productName: string[];
    productQuantity: number[];
    productUnitPrice: number[];
    productAmount: number[];
    billAmount: number;
    purchaseDate: Date;
}


function newUserPagePageFunction() {
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let signinPage = document.getElementById("signinPage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let showProductList = document.getElementById("showProductList") as HTMLDivElement;
    let showPurchase = document.getElementById("showPurchase") as HTMLDivElement;
    let showBill = document.getElementById("showBill") as HTMLDivElement;
    let showCart = document.getElementById("showCart") as HTMLDivElement;
    let showWalletRecharge = document.getElementById("showWalletRecharge") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;

    homePage.style.display = "none";
    signUpPage.style.display = "block";
    signinPage.style.display = "none";
    welcomePage.style.display = "none";
    showProductList.style.display = "none";
    showPurchase.style.display = "none";
    showBill.style.display = "none";
    showCart.style.display = "none";
    showWalletRecharge.style.display = "none";
    showBalance.style.display = "none";
}

function signUp() {
    let newUsername = (document.getElementById("newUsername") as HTMLInputElement).value;
    let newUserProfile = (document.getElementById("newUserProfile") as HTMLInputElement);
    let newUserEmail = (document.getElementById("newUserEmail") as HTMLInputElement).value;
    let newUserPassword = (document.getElementById("newUserPassword") as HTMLInputElement).value;
    let newUserPhone = (document.getElementById("newUserPhone") as HTMLInputElement).value;

    const file = newUserProfile.files?.[0];
    let base64String: any = "";
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            base64String = event.target?.result;
            console.log(base64String);
            const user: UserInfo = {
                userID: undefined,
                userName: newUsername,
                userProfile: [base64String],
                userEmail: newUserEmail,
                userPassword: newUserPassword,
                userPhone: newUserPhone,
                userBalance: 0
            };
            AddUserAPI(user);
        }
        reader.readAsDataURL(file);
    };
}


function homePageFunction() {
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let signinPage = document.getElementById("signinPage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let showProductList = document.getElementById("showProductList") as HTMLDivElement;
    let showPurchase = document.getElementById("showPurchase") as HTMLDivElement;
    let showBill = document.getElementById("showBill") as HTMLDivElement;
    let showCart = document.getElementById("showCart") as HTMLDivElement;
    let showWalletRecharge = document.getElementById("showWalletRecharge") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;

    homePage.style.display = "block";
    signUpPage.style.display = "none";
    signinPage.style.display = "none";
    welcomePage.style.display = "none";
    showProductList.style.display = "none";
    showPurchase.style.display = "none";
    showBill.style.display = "none";
    showCart.style.display = "none";
    showWalletRecharge.style.display = "none";
    showBalance.style.display = "none";
}

function showSignInPage() {
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let signinPage = document.getElementById("signinPage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let showProductList = document.getElementById("showProductList") as HTMLDivElement;
    let showPurchase = document.getElementById("showPurchase") as HTMLDivElement;
    let showBill = document.getElementById("showBill") as HTMLDivElement;
    let showCart = document.getElementById("showCart") as HTMLDivElement;
    let showWalletRecharge = document.getElementById("showWalletRecharge") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;

    homePage.style.display = "none";
    signUpPage.style.display = "none";
    signinPage.style.display = "block";
    welcomePage.style.display = "none";
    showProductList.style.display = "none";
    showPurchase.style.display = "none";
    showBill.style.display = "none";
    showCart.style.display = "none";
    showWalletRecharge.style.display = "none";
    showBalance.style.display = "none";
}

async function SignIn() {
    const userList = await fetchUsers();
    let checkEmail = (document.getElementById("checkEmail") as HTMLInputElement).value;
    let checkPassword = (document.getElementById("checkPassword") as HTMLInputElement).value;
    let validUser = false;
    userList.forEach(user => {
        if (user.userEmail == checkEmail && user.userPassword == checkPassword) {
            validUser = true;
            CurrentUser = user;
            welcomePageFunction();
            return false;
        }
    });
    if (!validUser) {
        alert("Ivalid User Name or Passord");
        homePageFunction();
    }
}

function welcomePageFunction() {
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let signinPage = document.getElementById("signinPage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let showProductList = document.getElementById("showProductList") as HTMLDivElement;
    let showPurchase = document.getElementById("showPurchase") as HTMLDivElement;
    let showBill = document.getElementById("showBill") as HTMLDivElement;
    let showCart = document.getElementById("showCart") as HTMLDivElement;
    let showWalletRecharge = document.getElementById("showWalletRecharge") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;

    homePage.style.display = "none";
    signUpPage.style.display = "none";
    signinPage.style.display = "none";
    welcomePage.style.display = "block";
    showProductList.style.display = "none";
    showPurchase.style.display = "none";
    showBill.style.display = "none";
    showCart.style.display = "none";
    showWalletRecharge.style.display = "none";
    showBalance.style.display = "none";

    let profile = document.getElementById("profile") as HTMLImageElement;
    profile.src = CurrentUser.userProfile[0];
    let greet = document.getElementById("greet") as HTMLHeadElement;
    greet.innerHTML = `Welcome ${CurrentUser.userName}`;
}



async function showProductListFunction() {
    const productList = await fetchProducts();
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let signinPage = document.getElementById("signinPage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let showProductList = document.getElementById("showProductList") as HTMLDivElement;
    let showPurchase = document.getElementById("showPurchase") as HTMLDivElement;
    let showBill = document.getElementById("showBill") as HTMLDivElement;
    let showCart = document.getElementById("showCart") as HTMLDivElement;
    let showWalletRecharge = document.getElementById("showWalletRecharge") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    let addProductForm = document.getElementById("addProductForm") as HTMLDivElement;
    let hideFormBtn = (document.getElementById("hideFormBtn") as HTMLDivElement);
    hideFormBtn.style.display="block";
    homePage.style.display = "none";
    signUpPage.style.display = "none";
    signinPage.style.display = "none";
    welcomePage.style.display = "block";
    showProductList.style.display = "block";
    showPurchase.style.display = "none";
    showBill.style.display = "none";
    showCart.style.display = "none";
    showWalletRecharge.style.display = "none";
    showBalance.style.display = "none";
    addProductForm.style.display = "none";


    let productListBody = document.getElementById("productListBody") as HTMLDivElement;
    productListBody.innerHTML = "";
    productList.forEach(product => {
        productListBody.innerHTML += `
            <tr>
            <td>${product.productName} </td>
            <td>${product.productAvailableQuantity} </td>
            <td>${product.productUnitPrice} </td>
            <td>${product.productPurchaseDate.toString().substring(0, 10)} </td>
            <td>${product.productExpiryDate.toString().substring(0, 10)} </td>
            <td><img src="${product.productPhoto}" class="productPhoto"> </td>
            <td><button onclick="return showEditProduct(${product.productID})">Edit</button>
            <button onclick="return deleteProduct(${product.productID})">Delete</button>
            </td>
            </tr>
            `;
    }
    );
}

async function deleteProduct(id: number) {

    deleteProductAPI(id);
    showProductListFunction();
}

// async function showEditProduct(id:number) {
//     let addProductForm = document.getElementById("addProductForm") as HTMLDivElement;
//     addProductForm.style.display = "block";

//     const productList = await fetchProducts();
//     productList.forEach(product =>
//         {
//             if(product.productID == id)
//                 {
//                     let addProductForm = document.getElementById("addProductForm") as HTMLFormElement;
//                     let newProductName = (document.getElementById("newProductName") as HTMLInputElement).value;
//                     let newProductQuantity = (document.getElementById("newProductQuantity") as HTMLInputElement).value;
//                     let newProductExpiryDate = (document.getElementById("newProductExpiryDate") as HTMLInputElement).value;
//                     let newProductPhoto = (document.getElementById("newProductPhoto") as HTMLInputElement);
//                     let newProductPrice = (document.getElementById("newProductPrice") as HTMLInputElement).value;

//                     newProductName = product.productName;
//                     newProductQuantity = product.productAvailableQuantity.toString();
//                     newProductExpiryDate = product.productExpiryDate.toString();
//                     //newProductPhoto = product.productPhoto[0];
//                     newProductPrice = product.productUnitPrice.toString();
//                 }
//         }
//     )

// }

function showAddProductForm() {
    let addProductForm = document.getElementById("addProductForm") as HTMLFormElement;
    addProductForm.style.display = "block";
    let hideFormBtn = (document.getElementById("hideFormBtn") as HTMLDivElement);
    hideFormBtn.style.display="block";
    // let addProductForm = document.getElementById("addProductForm") as HTMLFormElement;
    // let newProductName = (document.getElementById("newProductName") as HTMLInputElement).value;
    // let newProductQuantity = (document.getElementById("newProductQuantity") as HTMLInputElement).value;
    // let newProductExpiryDate = (document.getElementById("newProductExpiryDate") as HTMLInputElement).value;
    // let newProductPhoto = (document.getElementById("newProductPhoto") as HTMLInputElement);
    // let newProductPrice = (document.getElementById("newProductPrice") as HTMLInputElement).value;
    // addProductForm.addEventListener("submit", (event) => {
    //     event.preventDefault();
    //     const file = newProductPhoto.files?.[0];
    //     let base64String: any = "";
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = function (event) {
    //             base64String = event.target?.result;
    //             console.log(base64String);
    //             const product: ProductInfo = {
    //                 productID: undefined,
    //                 productName: newProductName,
    //                 productAvailableQuantity: parseInt(newProductQuantity),
    //                 productUnitPrice: parseInt(newProductPrice),
    //                 productPurchaseDate: new Date(),
    //                 productExpiryDate: new Date((newProductExpiryDate).toString().substring(0,10)),
    //                 productPhoto: ["base64String"]
    //             };
    //             AddProductAPI(product);
    //         }
    //         reader.readAsDataURL(file);
    //         showProductListFunction();
    //     };

    // })
}

async function addProduct() {

    let addform = document.getElementById("addform") as HTMLFormElement;
    let newProductName = (document.getElementById("newProductName") as HTMLInputElement).value;
    let newProductQuantity = (document.getElementById("newProductQuantity") as HTMLInputElement).value;
    let newProductExpiryDate = (document.getElementById("newProductExpiryDate") as HTMLInputElement).value;
    let newProductPhoto = (document.getElementById("newProductPhoto") as HTMLInputElement);
    let newProductPrice = (document.getElementById("newProductPrice") as HTMLInputElement).value;

    const file = newProductPhoto.files?.[0];
    var reader = new FileReader();
    let base64String: any = "";
    if (file) {

        reader.onload = function (event) {
            base64String = event.target?.result;
            console.log(base64String);

            const product: ProductInfo =
            {
                productID: undefined,
                productName: newProductName,
                productAvailableQuantity: parseInt(newProductQuantity),
                productUnitPrice: parseInt(newProductPrice),
                productPurchaseDate: new Date(),
                productExpiryDate: new Date((newProductExpiryDate).toString().substring(0, 10)),
                productPhoto: [base64String]
            }
            AddProductAPI(product);
            console.log(product);
            addform.reset();

        };
        reader.readAsDataURL(file);
    }
    return false;
}

async function showPurchaseFunction() {
    const productList = await fetchProducts();
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let signinPage = document.getElementById("signinPage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let showProductList = document.getElementById("showProductList") as HTMLDivElement;
    let showPurchase = document.getElementById("showPurchase") as HTMLDivElement;
    let showBill = document.getElementById("showBill") as HTMLDivElement;
    let showCart = document.getElementById("showCart") as HTMLDivElement;
    let showWalletRecharge = document.getElementById("showWalletRecharge") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;

    homePage.style.display = "none";
    signUpPage.style.display = "none";
    signinPage.style.display = "none";
    welcomePage.style.display = "block";
    showProductList.style.display = "none";
    showPurchase.style.display = "block";
    showBill.style.display = "none";
    showCart.style.display = "none";
    showWalletRecharge.style.display = "none";
    showBalance.style.display = "none";

    let mainBox = document.getElementById("mainBox") as HTMLDivElement;
    mainBox.innerHTML = "";
    productList.forEach(product => {
        mainBox.innerHTML += `
            <div class="cartBox">
            <img src="${product.productPhoto}" class="productImage">
            <p class="pName">${product.productName}</p>
            <p class="pName">${product.productUnitPrice}</p>
            <button class="buttons" onclick="showAddToCart(${product.productID})">Add to Cart</button>
            </div>
            `;
    }
    );
    // <tr>
    //         <td>${product.productName} </td>
    //         <td>${product.productAvailableQuantity} </td>
    //         <td>${product.productUnitPrice} </td>
    //         <td>${product.productPurchaseDate} </td>
    //         <td>${product.productExpiryDate} </td>
    //         <td> <img src="${product.productPhoto}"></td>
    //         <td><button onclick="showAddToCart(${product.productID})">Add to Cart</button>
    //         </td>
    //         </tr>
}
let selectedProduct: ProductInfo;
let localCartItems: CartInfo[] = [];
let cartIDAutoIncrement = 0;

async function showAddToCart(id: string) {
    let askQuantity = document.getElementById("askQuantity") as HTMLDivElement;
    askQuantity.style.display = "block";
    let selectedItem = document.getElementById("selectedItem") as HTMLDivElement;

    const productList = await fetchProducts()
    //const products = fetch()
    productList.forEach(product => {
        if (product.productID == id) {
            selectedProduct = product;
        }
    }
    )
    selectedItem.innerHTML = `You Selected ${selectedProduct.productName}`;
}
async function addToCart() {
    const productList = await fetchProducts();
    // productList.forEach(product => {
    //     if (product.productID == id) {
    //         selectedProduct = product;
    //     }
    // }
    // );

    let selectedQuantity = (document.getElementById("selectedQuantity") as HTMLInputElement).value;
    let productPrice = parseInt(selectedQuantity) * selectedProduct.productUnitPrice;
    const cartProduct: CartInfo = {
        cartID: ++cartIDAutoIncrement,
        productID: selectedProduct.productID,
        productName: selectedProduct.productName,
        productQuantity: parseInt(selectedQuantity),
        productUnitPrice: selectedProduct.productUnitPrice,
        productTotalPrice: productPrice
    }

    localCartItems.push(cartProduct);
    // let cartTableBody = document.getElementById("cartTableBody")as HTMLDivElement;
    // cartTableBody.innerHTML += 
    // `
    // <tr>
    // <td> ${cartProduct.productName} </td>
    // <td> <input type="text" name="" id="quantityInCart" placeholder="Enter Quantity"></td>
    // <td> ${cartProduct.productUnitPrice} </td>
    // </tr>
    // `;

}

async function showCartFunction() {
    const productList = await fetchProducts()
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let signinPage = document.getElementById("signinPage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let showProductList = document.getElementById("showProductList") as HTMLDivElement;
    let showPurchase = document.getElementById("showPurchase") as HTMLDivElement;
    let showBill = document.getElementById("showBill") as HTMLDivElement;
    let showCart = document.getElementById("showCart") as HTMLDivElement;
    let showWalletRecharge = document.getElementById("showWalletRecharge") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;

    homePage.style.display = "none";
    signUpPage.style.display = "none";
    signinPage.style.display = "none";
    welcomePage.style.display = "block";
    showProductList.style.display = "none";
    showPurchase.style.display = "none";
    showBill.style.display = "none";
    showCart.style.display = "block";
    showWalletRecharge.style.display = "none";
    showBalance.style.display = "none";

    let showCartBody = (document.getElementById("showCartBody") as HTMLDivElement);

    showCartBody.innerHTML = "";
    localCartItems.forEach(cart => {
        showCartBody.innerHTML +=
            `
            <tr>
                <td> ${cart.cartID} </td>
                <td> ${cart.productName} </td>
                <td> ${cart.productQuantity}</td>
                <td> ${cart.productUnitPrice} </td>
                <td> ${cart.productTotalPrice} </td>
                <td> <button onclick="deleteCartItem(${cart.cartID})"> Delete </button></td>
            </tr>
            `;
        //<input type="number" name="" id="${cart.cartID}" placeholder="Enter Quantity " value ="1"> 
        // let quantityInCart = (document.getElementById("quantityInCart")as HTMLInputElement);
        // cart.productQuantity = parseInt(quantityInCart.value);
    }
    )
}

function deleteCartItem(id: string) {
    localCartItems.forEach(cartItem => {
        if (cartItem.cartID == id) {
            localCartItems = localCartItems.filter(cart=>
                cart.cartID != id
            );
        }
    }
    )
    showCartFunction();
}

async function purchaseCartItems() {
    const productList = await fetchProducts();
    const orderList = await fetchOrders();
    let finalBillAmount: number = 0;
    let validPurchase = false;
    localCartItems.forEach(cartItem => {
        productList.forEach(product => {
            if (cartItem.productID == product.productID) {
                if (product.productAvailableQuantity >= cartItem.productQuantity) {
                    finalBillAmount += cartItem.productTotalPrice;
                    if (CurrentUser.userBalance >= finalBillAmount) {
                        validPurchase = true;
                    }
                    else {
                        alert("Insuffiecient Balance");
                    }
                }
                else {
                    alert(product.productName + " is out of Stock");
                }
            }
        }
        );
    }
    );
    let productIDs: number[] = [];
    let productNames: string[] = [];
    let productQuantities: number[] = [];
    let productUnitPrices: number[] = [];
    let productAmounts: number[] = [];
    if (validPurchase) {
        for (let i = 0; i < localCartItems.length; i++) {
            productIDs.push(localCartItems[i].productID);
            productNames.push(localCartItems[i].productName);
            productQuantities.push(localCartItems[i].productQuantity);
            productUnitPrices.push(localCartItems[i].productUnitPrice);
            productAmounts.push(localCartItems[i].productTotalPrice);

            productList.forEach(product =>
                {
                    if(product.productID == localCartItems[i].productID)
                        {
                            product.productAvailableQuantity -= localCartItems[i].productQuantity;
                        }
                    updateProductAPI(product.productID,product);
                }
            )
        }

        let finalPurchase: OrderInfo = {
            orderID: undefined,
            userID: CurrentUser.userID,
            productID: productIDs,
            productName: productNames,
            productQuantity: productQuantities,
            productUnitPrice: productUnitPrices,
            productAmount: productAmounts,
            billAmount: finalBillAmount,
            purchaseDate: new Date()
        }
        CurrentUser.userBalance -= finalBillAmount;
        updateUserAPI(CurrentUser.userID, CurrentUser);
        AddOrderAPI(finalPurchase);
        localCartItems =[];
    }
}


async function showBillFunction() {
    let orderList = await fetchOrders();
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let signinPage = document.getElementById("signinPage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let showProductList = document.getElementById("showProductList") as HTMLDivElement;
    let showPurchase = document.getElementById("showPurchase") as HTMLDivElement;
    let showBill = document.getElementById("showBill") as HTMLDivElement;
    let showCart = document.getElementById("showCart") as HTMLDivElement;
    let showWalletRecharge = document.getElementById("showWalletRecharge") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;

    homePage.style.display = "none";
    signUpPage.style.display = "none";
    signinPage.style.display = "none";
    welcomePage.style.display = "block";
    showProductList.style.display = "none";
    showPurchase.style.display = "none";
    showBill.style.display = "block";
    showCart.style.display = "none";
    showWalletRecharge.style.display = "none";
    showBalance.style.display = "none";


    let billTable = document.getElementById("billTable") as HTMLDivElement;
    billTable.innerHTML = "";
    //let productCount = -1;
    orderList.forEach(order => {
         {
            billTable.innerHTML +=
            `
            <h4 id="orderID${order.orderID}">
            </h4>
            <button onclick="downloadOrderHistory('#orderTable${order.orderID} tr',${order.orderID}, ${order.billAmount})">Download Bill</button>

            <table border="1" class="billTableCard" id ="orderTable${order.orderID}">
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                </tr>
                <tbody id="orderItem${order.orderID}">
                </tbody>
            </table>
            <h4 id="billAmount${order.orderID}"> 
            </h4>

            `;
            let singleOrderTable = document.getElementById("orderItem"+order.orderID)as HTMLDivElement;
            // singleOrderTable.innerHTML= "";
            let singleOrderID = document.getElementById("orderID"+order.orderID)as HTMLDivElement;
            singleOrderID.innerHTML = `Order ID : ${order.orderID}`;
            for (let i =0; i<order.productID.length; i++)
                {
                    singleOrderTable.innerHTML +=
                    `
                    <tr>
                    <td>${order.productName[i]}</td>
                    <td>${order.productQuantity[i]}</td>
                    <td>${order.productUnitPrice[i]}</td>
                    <td>${order.productAmount[i]}</td>
                    </tr>
                    `;
                }
                let singleBillAmount = document.getElementById("billAmount"+order.orderID) as HTMLHeadElement;
                singleBillAmount.innerHTML =`Bill Amount : ${order.billAmount}<br><br>`;
        }
    }
    )
}

function downloadOrderHistory(tableID:string, orderID:number, billAmount:number)
{
    
    let csv_data :any = [];

    
    let rows = document.querySelectorAll(tableID);
    for(let i =0; i<rows.length; i++)
        {
            let cols = rows[i].querySelectorAll('td,th');
            let csvrow:any = [];
            for(let j=0; j<cols.length;j++)
                {
                    csvrow.push(cols[j].innerHTML);
                }
                csv_data += (csvrow.join(",")  + "\n");
        }
        csv_data+=(",,Total Bill Amount,"+billAmount + ",\n");
        downloadCSVFile(csv_data , orderID);
        alert("Downloaded");
}
function downloadCSVFile(csvData:any, orderID:number)
{
    let CSVFile = new Blob([csvData], {type:"text//csv"});
    let temp_link = document.createElement('a');

    temp_link.download = "Bill "+orderID+".csv";
    let url = window.URL.createObjectURL(CSVFile);

    temp_link.href = url;
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    temp_link.click();
    document.body.removeChild(temp_link);
}


function showWalletRechargeFunction() {
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let signinPage = document.getElementById("signinPage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let showProductList = document.getElementById("showProductList") as HTMLDivElement;
    let showPurchase = document.getElementById("showPurchase") as HTMLDivElement;
    let showBill = document.getElementById("showBill") as HTMLDivElement;
    let showCart = document.getElementById("showCart") as HTMLDivElement;
    let showWalletRecharge = document.getElementById("showWalletRecharge") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;

    homePage.style.display = "none";
    signUpPage.style.display = "none";
    signinPage.style.display = "none";
    welcomePage.style.display = "block";
    showProductList.style.display = "none";
    showPurchase.style.display = "none";
    showBill.style.display = "none";
    showCart.style.display = "none";
    showWalletRecharge.style.display = "block";
    showBalance.style.display = "none";

}

function recharge() {
    let amount = (document.getElementById("amount") as HTMLInputElement).value;
    let rechargeForm = (document.getElementById("rechargeForm") as HTMLFormElement);
    CurrentUser.userBalance += parseInt(amount);
    updateUserAPI(CurrentUser.userID, CurrentUser);
    alert("Amount Added")
    rechargeForm.reset();
    return false;
}

function showBalanceFunction() {
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let signinPage = document.getElementById("signinPage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let showProductList = document.getElementById("showProductList") as HTMLDivElement;
    let showPurchase = document.getElementById("showPurchase") as HTMLDivElement;
    let showBill = document.getElementById("showBill") as HTMLDivElement;
    let showCart = document.getElementById("showCart") as HTMLDivElement;
    let showWalletRecharge = document.getElementById("showWalletRecharge") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;

    homePage.style.display = "none";
    signUpPage.style.display = "none";
    signinPage.style.display = "none";
    welcomePage.style.display = "block";
    showProductList.style.display = "none";
    showPurchase.style.display = "none";
    showBill.style.display = "none";
    showCart.style.display = "none";
    showWalletRecharge.style.display = "none";
    showBalance.style.display = "block";

    let checkBalane = document.getElementById("checkBalane") as HTMLDivElement;
    checkBalane.innerHTML = `Your Balance is ${CurrentUser.userBalance}`;
}
function logOutFunction() {
    location.reload();
}











async function AddUserAPI(user: UserInfo): Promise<void> {
    const response = await fetch('http://localhost:5190/api/UserInfo',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    if (!response.ok) {
        throw new Error('Failed to add user');
    }
    alert("Registration Sussessful");
    homePageFunction();
}

async function AddProductAPI(product: ProductInfo): Promise<void> {
    const response = await fetch('http://localhost:5190/api/ProductInfo',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
    if (!response.ok) {
        throw new Error('Failed to add product');
    }
    alert("Product Added");
    showProductListFunction();
}

async function AddOrderAPI(order: OrderInfo): Promise<void> {
    const response = await fetch('http://localhost:5190/api/OrderInfo',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
    if (!response.ok) {
        throw new Error('Failed to add order');
    }
    alert("Order Confirmed");
}


async function updateUserAPI(id: number, user: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5190/api/UserInfo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update user');
    }

}


async function updateProductAPI(id: number, product: ProductInfo): Promise<void> {
    const response = await fetch(`http://localhost:5190/api/ProductInfo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    if (!response.ok) {
        throw new Error('Failed to update product');
    }
    //alert("Product updated")
}

async function updateOrderAPI(id: number, order: OrderInfo): Promise<void> {
    const response = await fetch(`http://localhost:5190/api/OrderInfo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error('Failed to update order');
    }
}

async function deleteProductAPI(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5190/api/ProductInfo/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete product');
    }
    
}

async function deleteOrderAPI(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5190/api/OrderInfo/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete order');
    }
    showProductListFunction();
}

async function fetchUsers(): Promise<UserInfo[]> {
    const apiUrl = 'http://localhost:5190/api/UserInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
}

async function fetchProducts(): Promise<ProductInfo[]> {
    const apiUrl = 'http://localhost:5190/api/ProductInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return await response.json();
}

async function fetchOrders(): Promise<OrderInfo[]> {
    const apiUrl = 'http://localhost:5190/api/OrderInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }
    return await response.json();
}