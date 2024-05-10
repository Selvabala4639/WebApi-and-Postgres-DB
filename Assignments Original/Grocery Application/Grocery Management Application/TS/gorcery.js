"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let CurrentUser;
function newUserPagePageFunction() {
    let homePage = document.getElementById("homePage");
    let signUpPage = document.getElementById("signUpPage");
    let signinPage = document.getElementById("signinPage");
    let welcomePage = document.getElementById("welcomePage");
    let showProductList = document.getElementById("showProductList");
    let showPurchase = document.getElementById("showPurchase");
    let showBill = document.getElementById("showBill");
    let showCart = document.getElementById("showCart");
    let showWalletRecharge = document.getElementById("showWalletRecharge");
    let showBalance = document.getElementById("showBalance");
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
    var _a;
    let newUsername = document.getElementById("newUsername").value;
    let newUserProfile = document.getElementById("newUserProfile");
    let newUserEmail = document.getElementById("newUserEmail").value;
    let newUserPassword = document.getElementById("newUserPassword").value;
    let newUserPhone = document.getElementById("newUserPhone").value;
    const file = (_a = newUserProfile.files) === null || _a === void 0 ? void 0 : _a[0];
    let base64String = "";
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            console.log(base64String);
            const user = {
                userID: undefined,
                userName: newUsername,
                userProfile: [base64String],
                userEmail: newUserEmail,
                userPassword: newUserPassword,
                userPhone: newUserPhone,
                userBalance: 0
            };
            AddUserAPI(user);
        };
        reader.readAsDataURL(file);
    }
    ;
}
function homePageFunction() {
    let homePage = document.getElementById("homePage");
    let signUpPage = document.getElementById("signUpPage");
    let signinPage = document.getElementById("signinPage");
    let welcomePage = document.getElementById("welcomePage");
    let showProductList = document.getElementById("showProductList");
    let showPurchase = document.getElementById("showPurchase");
    let showBill = document.getElementById("showBill");
    let showCart = document.getElementById("showCart");
    let showWalletRecharge = document.getElementById("showWalletRecharge");
    let showBalance = document.getElementById("showBalance");
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
    let homePage = document.getElementById("homePage");
    let signUpPage = document.getElementById("signUpPage");
    let signinPage = document.getElementById("signinPage");
    let welcomePage = document.getElementById("welcomePage");
    let showProductList = document.getElementById("showProductList");
    let showPurchase = document.getElementById("showPurchase");
    let showBill = document.getElementById("showBill");
    let showCart = document.getElementById("showCart");
    let showWalletRecharge = document.getElementById("showWalletRecharge");
    let showBalance = document.getElementById("showBalance");
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
function SignIn() {
    return __awaiter(this, void 0, void 0, function* () {
        const userList = yield fetchUsers();
        let checkEmail = document.getElementById("checkEmail").value;
        let checkPassword = document.getElementById("checkPassword").value;
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
    });
}
function welcomePageFunction() {
    let homePage = document.getElementById("homePage");
    let signUpPage = document.getElementById("signUpPage");
    let signinPage = document.getElementById("signinPage");
    let welcomePage = document.getElementById("welcomePage");
    let showProductList = document.getElementById("showProductList");
    let showPurchase = document.getElementById("showPurchase");
    let showBill = document.getElementById("showBill");
    let showCart = document.getElementById("showCart");
    let showWalletRecharge = document.getElementById("showWalletRecharge");
    let showBalance = document.getElementById("showBalance");
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
    let profile = document.getElementById("profile");
    profile.src = CurrentUser.userProfile[0];
    let greet = document.getElementById("greet");
    greet.innerHTML = `Welcome ${CurrentUser.userName}`;
}
function showProductListFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = yield fetchProducts();
        let homePage = document.getElementById("homePage");
        let signUpPage = document.getElementById("signUpPage");
        let signinPage = document.getElementById("signinPage");
        let welcomePage = document.getElementById("welcomePage");
        let showProductList = document.getElementById("showProductList");
        let showPurchase = document.getElementById("showPurchase");
        let showBill = document.getElementById("showBill");
        let showCart = document.getElementById("showCart");
        let showWalletRecharge = document.getElementById("showWalletRecharge");
        let showBalance = document.getElementById("showBalance");
        let addProductForm = document.getElementById("addProductForm");
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
        let productListBody = document.getElementById("productListBody");
        productListBody.innerHTML = "";
        productList.forEach(product => {
            productListBody.innerHTML += `
            <tr>
            <td>${product.productName} </td>
            <td>${product.productAvailableQuantity} </td>
            <td>${product.productUnitPrice} </td>
            <td>${product.productPurchaseDate.toString().substring(0, 10)} </td>
            <td>${product.productExpiryDate.toString().substring(0, 10)} </td>
            <td><img src="${product.productPhoto}"> </td>
            <td><button onclick="return showEditProduct(${product.productID})">Edit</button>
            <button onclick="return deleteProduct(${product.productID})">Delete</button>
            </td>
            </tr>
            `;
        });
    });
}
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        deleteProductAPI(id);
        showProductListFunction();
    });
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
    let addProductForm = document.getElementById("addProductForm");
    addProductForm.style.display = "block";
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
function addProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        let addProductForm = document.getElementById("addProductForm");
        let newProductName = document.getElementById("newProductName").value;
        let newProductQuantity = document.getElementById("newProductQuantity").value;
        let newProductExpiryDate = document.getElementById("newProductExpiryDate").value;
        let newProductPhoto = document.getElementById("newProductPhoto");
        let newProductPrice = document.getElementById("newProductPrice").value;
        const file = (_a = newProductPhoto.files) === null || _a === void 0 ? void 0 : _a[0];
        var reader = new FileReader();
        let base64String = "";
        if (file) {
            reader.onload = function (event) {
                var _a;
                base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                console.log(base64String);
                const product = {
                    productID: undefined,
                    productName: newProductName,
                    productAvailableQuantity: parseInt(newProductQuantity),
                    productUnitPrice: parseInt(newProductPrice),
                    productPurchaseDate: new Date(),
                    productExpiryDate: new Date((newProductExpiryDate).toString().substring(0, 10)),
                    productPhoto: [base64String]
                };
                AddProductAPI(product);
                console.log(product);
                addProductForm.reset();
            };
            reader.readAsDataURL(file);
        }
        return false;
    });
}
function showPurchaseFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = yield fetchProducts();
        let homePage = document.getElementById("homePage");
        let signUpPage = document.getElementById("signUpPage");
        let signinPage = document.getElementById("signinPage");
        let welcomePage = document.getElementById("welcomePage");
        let showProductList = document.getElementById("showProductList");
        let showPurchase = document.getElementById("showPurchase");
        let showBill = document.getElementById("showBill");
        let showCart = document.getElementById("showCart");
        let showWalletRecharge = document.getElementById("showWalletRecharge");
        let showBalance = document.getElementById("showBalance");
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
        let purchaseBody = document.getElementById("cartTableBody");
        purchaseBody.innerHTML = "";
        productList.forEach(product => {
            purchaseBody.innerHTML += `
            <tr>
            <td>${product.productName} </td>
            <td>${product.productAvailableQuantity} </td>
            <td>${product.productUnitPrice} </td>
            <td>${product.productPurchaseDate} </td>
            <td>${product.productExpiryDate} </td>
            <td> <img src="${product.productPhoto}"></td>
            <td><button onclick="showAddToCart(${product.productID})">Add to Cart</button>
            </td>
            </tr>
            `;
        });
    });
}
let selectedProduct;
let localCartItems = [];
let cartIDAutoIncrement = 0;
function showAddToCart(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let askQuantity = document.getElementById("askQuantity");
        askQuantity.style.display = "block";
        let selectedItem = document.getElementById("selectedItem");
        const productList = yield fetchProducts();
        //const products = fetch()
        productList.forEach(product => {
            if (product.productID == id) {
                selectedProduct = product;
            }
        });
        selectedItem.innerHTML = `You Selected ${selectedProduct.productName}`;
    });
}
function addToCart() {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = yield fetchProducts();
        // productList.forEach(product => {
        //     if (product.productID == id) {
        //         selectedProduct = product;
        //     }
        // }
        // );
        let selectedQuantity = document.getElementById("selectedQuantity").value;
        let productPrice = parseInt(selectedQuantity) * selectedProduct.productUnitPrice;
        const cartProduct = {
            cartID: ++cartIDAutoIncrement,
            productID: selectedProduct.productID,
            productName: selectedProduct.productName,
            productQuantity: parseInt(selectedQuantity),
            productUnitPrice: selectedProduct.productUnitPrice,
            productTotalPrice: productPrice
        };
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
    });
}
function showBillFunction() {
    let homePage = document.getElementById("homePage");
    let signUpPage = document.getElementById("signUpPage");
    let signinPage = document.getElementById("signinPage");
    let welcomePage = document.getElementById("welcomePage");
    let showProductList = document.getElementById("showProductList");
    let showPurchase = document.getElementById("showPurchase");
    let showBill = document.getElementById("showBill");
    let showCart = document.getElementById("showCart");
    let showWalletRecharge = document.getElementById("showWalletRecharge");
    let showBalance = document.getElementById("showBalance");
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
}
function showCartFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = yield fetchProducts();
        let homePage = document.getElementById("homePage");
        let signUpPage = document.getElementById("signUpPage");
        let signinPage = document.getElementById("signinPage");
        let welcomePage = document.getElementById("welcomePage");
        let showProductList = document.getElementById("showProductList");
        let showPurchase = document.getElementById("showPurchase");
        let showBill = document.getElementById("showBill");
        let showCart = document.getElementById("showCart");
        let showWalletRecharge = document.getElementById("showWalletRecharge");
        let showBalance = document.getElementById("showBalance");
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
        let showCartBody = document.getElementById("showCartBody");
        showCartBody.innerHTML = "";
        localCartItems.forEach(cart => {
            showCartBody.innerHTML +=
                `
            <tr>
                <td> ${cart.cartID} </td>
                <td> ${cart.productName} </td>
                <td>${cart.productQuantity}</td>
                <td> ${cart.productUnitPrice} </td>
                <td> ${cart.productTotalPrice} </td>
            </tr>
            `;
            //<input type="number" name="" id="${cart.cartID}" placeholder="Enter Quantity " value ="1"> 
            // let quantityInCart = (document.getElementById("quantityInCart")as HTMLInputElement);
            // cart.productQuantity = parseInt(quantityInCart.value);
        });
    });
}
function purchaseCartItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = yield fetchProducts();
        const orderList = yield fetchOrders();
        let finalBillAmount = 0;
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
            });
        });
        let productIDs = [];
        let productNames = [];
        let productQuantities = [];
        let productUnitPrices = [];
        let productAmounts = [];
        if (validPurchase) {
            for (let i = 0; i < localCartItems.length; i++) {
                productIDs.push(localCartItems[i].productID);
                productNames.push(localCartItems[i].productName);
                productQuantities.push(localCartItems[i].productQuantity);
                productUnitPrices.push(localCartItems[i].productUnitPrice);
                productAmounts.push(localCartItems[i].productTotalPrice);
            }
            let finalPurchase = {
                orderID: undefined,
                userID: CurrentUser.userID,
                productID: productIDs,
                productName: productNames,
                productQuantity: productQuantities,
                productUnitPrice: productUnitPrices,
                productAmount: productAmounts,
                billAmount: finalBillAmount,
                purchaseDate: new Date()
            };
            CurrentUser.userBalance -= finalBillAmount;
            updateUserAPI(CurrentUser.userID, CurrentUser);
            AddOrderAPI(finalPurchase);
        }
        // orderID: any;
        // userID: number;
        // productID: number[];
        // productName: string[];
        // productQuantity: number[];
        // productUnitPrice: number[];
        // productAmount: number[];
        // productTotalAmount: number[];
        // billAmount : number[];
        // purchaseDate: Date;
    });
}
function showWalletRechargeFunction() {
    let homePage = document.getElementById("homePage");
    let signUpPage = document.getElementById("signUpPage");
    let signinPage = document.getElementById("signinPage");
    let welcomePage = document.getElementById("welcomePage");
    let showProductList = document.getElementById("showProductList");
    let showPurchase = document.getElementById("showPurchase");
    let showBill = document.getElementById("showBill");
    let showCart = document.getElementById("showCart");
    let showWalletRecharge = document.getElementById("showWalletRecharge");
    let showBalance = document.getElementById("showBalance");
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
    let amount = document.getElementById("amount").value;
    let rechargeForm = document.getElementById("rechargeForm");
    CurrentUser.userBalance += parseInt(amount);
    updateUserAPI(CurrentUser.userID, CurrentUser);
    alert("Amount Added");
    rechargeForm.reset();
    return false;
}
function showBalanceFunction() {
    let homePage = document.getElementById("homePage");
    let signUpPage = document.getElementById("signUpPage");
    let signinPage = document.getElementById("signinPage");
    let welcomePage = document.getElementById("welcomePage");
    let showProductList = document.getElementById("showProductList");
    let showPurchase = document.getElementById("showPurchase");
    let showBill = document.getElementById("showBill");
    let showCart = document.getElementById("showCart");
    let showWalletRecharge = document.getElementById("showWalletRecharge");
    let showBalance = document.getElementById("showBalance");
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
    let checkBalane = document.getElementById("checkBalane");
    checkBalane.innerHTML = `Your Balance is ${CurrentUser.userBalance}`;
}
function logOutFunction() {
    location.reload();
}
function AddUserAPI(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5190/api/UserInfo', {
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
    });
}
function AddProductAPI(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5190/api/ProductInfo', {
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
    });
}
function AddOrderAPI(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5190/api/OrderInfo', {
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
    });
}
function updateUserAPI(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5190/api/UserInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
    });
}
function updateProductAPI(id, product) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5190/api/ProductInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error('Failed to update product');
        }
    });
}
function updateOrderAPI(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5190/api/OrderInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to update order');
        }
    });
}
function deleteProductAPI(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5190/api/ProductInfo/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete product');
        }
    });
}
function deleteOrderAPI(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5190/api/OrderInfo/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete order');
        }
    });
}
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5190/api/UserInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return yield response.json();
    });
}
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5190/api/ProductInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return yield response.json();
    });
}
function fetchOrders() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5190/api/OrderInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch orders');
        }
        return yield response.json();
    });
}
