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
let userIDAutoIncrement = 3;
let medicineIDAutoIncrement = 3;
let orderIDAutoIncrement = 3;
let selectedMedicine;
// let OrderList :OrderInfo [] =[];
let CurrentUser;
// UserList.push(new UserInfo("Selva","selva","selva","123"));
// UserList.push(new UserInfo("Avi","avi",'avi',"123"));
//Adding Default data
// MedicineList.push(new MedicineInfo("Paracetomol", 10,50, new Date(2024,5,12)));
// MedicineList.push(new MedicineInfo("Colpal", 25,40, new Date(2024,5,22)));
function AddUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5113/api/UserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add user');
        }
        alert("Success");
        homePage();
    });
}
function AddMedicineAPI(medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5113/api/MedicineInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to add medicine');
        }
        renderMedicineTable();
        alert("Success");
    });
}
function AddOrderAPI(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5113/api/OrderInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to add user');
        }
        alert("Order Added");
    });
}
//Update
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5113/api/UserInfo/${id}`, {
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
function updateMedicine(id, medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5113/api/MedicineInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        renderMedicineTable();
    });
}
function updateOrder(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5113/api/OrderInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
    });
}
//Update ends
//delete
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5113/api/UserInfo/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }
        //renderContacts();
    });
}
function deleteMedicineAPI(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5113/api/MedicineInfo/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete medicine');
        }
        //renderContacts();
        renderMedicineTable();
    });
}
function deleteOrder(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5113/api/OrderInfo/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }
        //renderContacts();
    });
}
//Delete Ends
//Fetch
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5113/api/UserInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
function fetchMedicines() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5113/api/MedicineInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
function fetchOrders() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5113/api/OrderInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
//Fetch ends
function newUserPage() {
    let signup = document.getElementById('signup');
    let homepage = document.getElementById('homepage');
    homepage.style.display = "none";
    signup.style.display = "block";
}
function signUp() {
    let name = document.getElementById("userName").value;
    let newuserEmail = document.getElementById("newUserEmail").value;
    let newUserPassword = document.getElementById("newUserPassword").value;
    let newUserConfirmPassword = document.getElementById("confirm-password").value;
    let newuserPhone = document.getElementById("newUserPhone").value;
    console.log(name);
    if (checkNewuserName() && checkEmail() && checkPassword() && checkConfirmPassword() && checkPhone()) {
        // UserList.push(new UserInfo(name.value, newuserEmail, newUserPassword, newuserPhone))
        const user = {
            userID: userIDAutoIncrement++,
            userName: name,
            userEmail: newuserEmail,
            userPassword: newUserPassword,
            userPhone: newuserPhone,
            userBalance: 0
        };
        alert("Registration Successful");
        AddUser(user);
    }
    else {
        checkNewuserName();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        checkPhone();
        alert("Please enter all details");
        newUserPage();
    }
}
function existingUserPage() {
    let signinpage = document.getElementById("sign-in");
    let homepage = document.getElementById('homepage');
    let signup = document.getElementById('signup');
    signinpage.style.display = "block";
    homepage.style.display = "none";
    signup.style.display = "none";
}
function loginIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let existingUserMail = document.getElementById("existing-user-email").value;
        let existingUserPassword = document.getElementById("existing-user-password").value;
        let validUser = false;
        const users = yield fetchUsers();
        users.forEach(user => {
            if (user.userEmail == existingUserMail && user.userPassword == existingUserPassword) {
                validUser = true;
                CurrentUser = user;
                welcomePage();
                return false;
            }
        });
        if (!validUser) {
            alert("Ivalid User Name or Passord");
        }
    });
}
function welcomePage() {
    let greet = document.getElementById("greet");
    greet.innerHTML = `Welcome ${CurrentUser.userName}`;
    let welcomePage = document.getElementById("welcomePage");
    welcomePage.style.display = "block";
    let signinpage = document.getElementById("sign-in");
    signinpage.style.display = "none";
}
function homePage() {
    let signup = document.getElementById('signup');
    let homepage = document.getElementById('homepage');
    homepage.style.display = "block";
    signup.style.display = "none";
}
//Show Medicine List
function renderMedicineTable() {
    return __awaiter(this, void 0, void 0, function* () {
        let medicineDetails = document.getElementById("medicineDetail");
        let purchase = document.getElementById("purchase");
        let orderHistory = document.getElementById("orderHistory");
        let cancel = document.getElementById("cancel");
        let topUp = document.getElementById("topUp");
        let showBalance = document.getElementById("showBalance");
        medicineDetails.style.display = "block";
        purchase.style.display = "none";
        orderHistory.style.display = "none";
        cancel.style.display = "none";
        topUp.style.display = "none";
        showBalance.style.display = "none";
        let medicineDetailsTable = document.getElementById('medicineDetailsTable');
        let tableHTML = "<table border='1'> ";
        tableHTML += "<tr><th>Medicine Name</th><th>Price</th><th>quantity</th><th>Expiry date</th><td>Action</td></tr>";
        const medicines = yield fetchMedicines();
        medicines.forEach(medicine => {
            tableHTML += `<tr><td>${medicine.medicineName}</td>
            <td>${medicine.medicinePrice}</td>
            <td>${medicine.medicineQuantity}</td>
            <td>${medicine.medicineExpireDate}</td>
            <td><button onclick = "return showEditMedicine(${medicine.medicineID})"> Edit </button> 
            <button onclick="return deleteMedicine('${medicine.medicineID}')"> Delete </button> </td>
            </tr>`;
        });
        tableHTML += "</table>";
        medicineDetailsTable.innerHTML = tableHTML;
    });
}
function ShowAddMedicineForm() {
    let addMedicine = document.getElementById("addMedicine");
    addMedicine.style.display = "block";
}
function AddMedicine() {
    let addMedicine = document.getElementById("addMedicine");
    let addMedicineName = document.getElementById("addMedicineName").value;
    let addPrice = document.getElementById("addPrice").value;
    let addQuantity = document.getElementById("addQuantity").value;
    let addExpiryDate = document.getElementById("addExpiryDate").value;
    // MedicineList.push(new MedicineInfo(addmedicineName, parseInt(addPrice), parseInt(addquantity), new Date(addExpiryDate)))
    let addMedicineForm = document.getElementById("addMedicineForm");
    addMedicine.style.display = "none";
    const medicine = {
        medicineID: medicineIDAutoIncrement++,
        medicineName: addMedicineName,
        medicinePrice: parseInt(addPrice),
        medicineQuantity: parseInt(addQuantity),
        medicineExpireDate: addExpiryDate.toString()
    };
    addMedicineForm.reset();
    AddMedicineAPI(medicine);
    return false;
}
function showEditMedicine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let addMedicine = document.getElementById("addMedicine");
        addMedicine.style.display = "none";
        const medicines = yield fetchMedicines();
        medicines.forEach(medicine => {
            if (medicine.medicineID == id) {
                let editMedicine = document.getElementById("editMedicine");
                editMedicine.style.display = "block";
                editMedicine.innerHTML += `<button onclick="return EditMedincine('${medicine.medicineID}')">Submit</button>`;
                let editmedicineName = document.getElementById("editMedicineName");
                let editPrice = document.getElementById("editPrice");
                let editquantity = document.getElementById("editQuantity");
                let editExpiryDate = document.getElementById("editExpiryDate");
                // medicine.medicineName = editmedicineName.value;
                // medicine.medicinePrice = parseInt(editPrice.value);
                // medicine.medicineQuantity = parseInt(editquantity.value);
                // medicine.medicineExpireDate = new Date(editExpiryDate.value);
                // renderMedicineTable();
                editmedicineName.value = medicine.medicineName;
                (editPrice.value) = medicine.medicinePrice.toString();
                editquantity.value = medicine.medicineQuantity.toString();
                editExpiryDate.value = medicine.medicineExpireDate.toString();
                return false;
            }
        });
    });
}
function EditMedincine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let editmedicineName = document.getElementById("editMedicineName");
        let editPrice = document.getElementById("editPrice");
        let editquantity = document.getElementById("editQuantity");
        let editExpiryDate = document.getElementById("editExpiryDate");
        const medicineList = yield fetchMedicines();
        medicineList.forEach(medicine => {
            if (medicine.medicineID == id) {
                medicine.medicineName = editmedicineName.value;
                medicine.medicinePrice = parseInt(editPrice.value);
                medicine.medicineQuantity = parseInt(editquantity.value);
                medicine.medicineExpireDate = (editExpiryDate.value).substring(0, 10);
                updateMedicine(id, medicine);
            }
        });
        let editMedicineForm = document.getElementById("editMedicineForm");
        editMedicineForm.reset();
        renderMedicineTable();
        return false;
    });
}
function deleteMedicine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const medicinList = yield fetchMedicines();
        medicinList.forEach(medicine => {
            if (id == medicine.medicineID) {
                deleteMedicineAPI(medicine.medicineID);
                return false;
            }
        });
    });
}
//Purchase Function
function purchase() {
    return __awaiter(this, void 0, void 0, function* () {
        const medicineList = yield fetchMedicines();
        let medicineDetails = document.getElementById("medicineDetail");
        let purchase = document.getElementById("purchase");
        let orderHistory = document.getElementById("orderHistory");
        let cancel = document.getElementById("cancel");
        let topUp = document.getElementById("topUp");
        let showBalance = document.getElementById("showBalance");
        purchase.style.display = "block";
        medicineDetails.style.display = "none";
        orderHistory.style.display = "none";
        cancel.style.display = "none";
        topUp.style.display = "none";
        showBalance.style.display = "none";
        // let buyTable = (document.getElementById("buyTable") as HTMLDivElement);
        // let buyTableBody="<table border='1'> ";
        // buyTableBody += "<tr><th>Medicine Name</th><th>Price</th><th>quantity</th><th>Expiry date</th></tr>";
        //  for (let i = 0; i < MedicineList.length; i++) {
        //     if (MedicineList[i].medicineExpireDate > new Date()) {
        //         buyTableBody += `<tr><td>${MedicineList[i].medicineName}</td>
        //         <td>${MedicineList[i].medicinePrice}</td>
        //         <td>${MedicineList[i].medicineQuantity}</td>
        //         <td>${MedicineList[i].medicineExpireDate.toLocaleDateString('en-GB')}</td></tr>`;
        //     }
        // }
        // buyTableBody += "</table>";
        // buyTable.innerHTML = buyTableBody;
        let buyTable = document.getElementById("buyTable");
        let buyTableBody = "<table border='1'>";
        buyTableBody += "<tr> <th> Medicine Name </th> <th> Price </th> <th> Medicine quantity </th> <th> Expire Date </th><th>Option</td> </tr>";
        medicineList.forEach((medicine) => {
            if (new Date(medicine.medicineExpireDate) > new Date()) {
                buyTableBody += `
                <tr><td>${medicine.medicineName}</td>
                <td>${medicine.medicinePrice}</td>
                <td>${medicine.medicineQuantity}</td>
                <td>${medicine.medicineExpireDate.toString()}</td>
                <td><button onclick="ShowbuyMedicine('${medicine.medicineID}')">Buy</button>
                </tr>
                `;
            }
        });
        buyTableBody += "</table>";
        buyTable.innerHTML = buyTableBody;
    });
}
function ShowbuyMedicine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const medicineList = yield fetchMedicines();
        let confirmOrder = document.getElementById("confirmOrder");
        confirmOrder.style.display = "block";
        medicineList.forEach(medicine => {
            if (medicine.medicineID == id) {
                selectedMedicine = medicine;
            }
        });
        let selectedmedicineName = document.getElementById("selectedMedicineName");
        selectedmedicineName.innerHTML = `You Selected ${selectedMedicine.medicineName}`;
    });
}
function buyMedicine() {
    let confirmOrder = document.getElementById("confirmOrder");
    confirmOrder.style.display = "block";
    let buyquantity = document.getElementById("quantity").value;
    if (parseInt(buyquantity) <= 0) {
        alert("Please enter quantity greater than  0");
        purchase();
        return false;
    }
    else {
        if ((selectedMedicine.medicineQuantity) < parseInt(buyquantity)) {
            alert("Out of Stock");
        }
        else {
            let totalPrice = parseInt(buyquantity) * selectedMedicine.medicinePrice;
            if (totalPrice > CurrentUser.userBalance) {
                alert("Insufficient Balance");
            }
            else {
                selectedMedicine.medicineQuantity -= parseInt(buyquantity);
                CurrentUser.userBalance -= totalPrice;
                const order = {
                    orderID: -1,
                    medicineID: selectedMedicine.medicineID,
                    userID: CurrentUser.userID,
                    medicineName: selectedMedicine.medicineName,
                    quantity: parseInt(buyquantity),
                    orderDate: "05/05/2024",
                    totalPrice: selectedMedicine.medicinePrice,
                    orderStatus: "Ordered"
                };
                AddOrderAPI(order);
                updateMedicine(selectedMedicine.medicineID, selectedMedicine);
                updateUser(CurrentUser.userID, CurrentUser);
                purchase();
            }
        }
        confirmOrder.reset();
        return false;
    }
}
function orderHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const orderList = yield fetchOrders();
        let medicineDetails = document.getElementById("medicineDetail");
        let purchase = document.getElementById("purchase");
        let orderHistory = document.getElementById("orderHistory");
        let cancel = document.getElementById("cancel");
        let topUp = document.getElementById("topUp");
        let showBalance = document.getElementById("showBalance");
        orderHistory.style.display = "block";
        purchase.style.display = "none";
        medicineDetails.style.display = "none";
        cancel.style.display = "none";
        topUp.style.display = "none";
        showBalance.style.display = "none";
        let orderTable = document.getElementById("orderTable");
        orderTable.innerHTML = "";
        orderList.forEach(order => {
            orderTable.innerHTML += `   
        <tr>
            <td>${order.medicineName}</td>
            <td>${order.quantity}</td>
            <td>${order.orderDate.toString()}</td>
            <td>${order.orderStatus}</td>
        </tr>
        `;
        });
    });
}
function Showcancel() {
    return __awaiter(this, void 0, void 0, function* () {
        const orderList = yield fetchOrders();
        let medicineDetails = document.getElementById("medicineDetail");
        let purchase = document.getElementById("purchase");
        let orderHistory = document.getElementById("orderHistory");
        let cancel = document.getElementById("cancel");
        let topUp = document.getElementById("topUp");
        let showBalance = document.getElementById("showBalance");
        cancel.style.display = "block";
        purchase.style.display = "none";
        medicineDetails.style.display = "none";
        orderHistory.style.display = "none";
        topUp.style.display = "none";
        showBalance.style.display = "none";
        let orderDetails = document.getElementById("cancelTable");
        orderDetails.innerHTML = "";
        orderList.forEach(order => {
            if (order.userID == CurrentUser.userID && order.orderStatus == "Ordered") {
                orderDetails.innerHTML += `
                    <tr>
                    <td> ${order.medicineName + order.orderID}</td>
                    <td> ${order.quantity}</td>
                    <td> ${order.orderDate.toString()}</td>
                    <td> ${order.orderStatus}</td>
                    <td> <button onclick = "return cancelOrder(${order.orderID})">Cancel </button> </td>
                    </tr>
                    `;
            }
        });
    });
}
function cancelOrder(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const orderList = yield fetchOrders();
        const medicineList = yield fetchMedicines();
        orderList.forEach((order) => __awaiter(this, void 0, void 0, function* () {
            if (order.orderID == id) {
                order.orderStatus = "Cancelled";
                yield updateOrder(order.orderID, order);
                CurrentUser.userBalance += order.totalPrice;
                yield updateUser(CurrentUser.userID, CurrentUser);
                medicineList.forEach(medicine => {
                    if (medicine.medicineID == order.medicineID) {
                        medicine.medicineQuantity += order.quantity;
                        updateMedicine(medicine.medicineID, medicine);
                        alert("Successfully Cancelled");
                        Showcancel();
                    }
                });
            }
        }));
        Showcancel();
    });
}
function topUp() {
    let medicineDetails = document.getElementById("medicineDetail");
    let purchase = document.getElementById("purchase");
    let orderHistory = document.getElementById("orderHistory");
    let cancel = document.getElementById("cancel");
    let topUpOption = document.getElementById("topUp");
    let showBalance = document.getElementById("showBalance");
    topUpOption.style.display = "block";
    purchase.style.display = "none";
    medicineDetails.style.display = "none";
    orderHistory.style.display = "none";
    cancel.style.display = "none";
    showBalance.style.display = "none";
}
function Recharge() {
    return __awaiter(this, void 0, void 0, function* () {
        let amount = document.getElementById("amount");
        if (parseInt(amount.value) <= 0) {
            alert("Recharge amount should be greater than 0");
            topUp();
        }
        else {
            CurrentUser.userBalance += parseInt(amount.value);
            yield updateUser(CurrentUser.userID, CurrentUser);
            alert("Amount added.");
            amount.value = "";
            topUp();
        }
    });
}
function showBalance() {
    let medicineDetails = document.getElementById("medicineDetail");
    let purchase = document.getElementById("purchase");
    let orderHistory = document.getElementById("orderHistory");
    let cancel = document.getElementById("cancel");
    let topUp = document.getElementById("topUp");
    let showBalance = document.getElementById("showBalance");
    showBalance.style.display = "block";
    purchase.style.display = "none";
    medicineDetails.style.display = "none";
    orderHistory.style.display = "none";
    cancel.style.display = "none";
    topUp.style.display = "none";
    // showBalance.innerHTML =`<h2>Available Balance : ${CurrentUser.userBalance} </h2>
    // ` ;
    let currentBalance = document.getElementById("currentBalance");
    currentBalance.innerHTML = `Available Balance: ${CurrentUser.userBalance}`;
}
function logOut() {
    let homepage = document.getElementById('homepage');
    let welcomePage = document.getElementById("welcomePage");
    welcomePage.style.display = "none";
    homepage.style.display = "block";
}
//Validating Inputs for new User Registration
function checkNewuserName() {
    let userName = document.getElementById("userName").value;
    let regx_userName = /^[a-zA-Z]{2,50}$/;
    if (userName == "") {
        document.getElementsByClassName("invalid")[0].style.visibility = "visible";
        document.getElementsByClassName("valid")[0].style.visibility = "hidden";
        return false;
    }
    else {
        if (userName.length > 50) {
            document.getElementsByClassName("userNamelength")[0].style.visibility = "visible";
            document.getElementsByClassName("invalid")[0].style.visibility = "visible";
            document.getElementsByClassName("valid")[0].style.visibility = "hidden";
            return false;
        }
        else {
            if (regx_userName.test(userName)) {
                document.getElementsByClassName("valid")[0].style.visibility = "visible";
                document.getElementsByClassName("specialChar")[0].style.visibility = "hidden";
                document.getElementsByClassName("userNamelength")[0].style.visibility = "hidden";
                document.getElementsByClassName("invalid")[0].style.visibility = "hidden";
                return true;
            }
            else {
                document.getElementsByClassName("specialChar")[0].style.visibility = "visible";
                document.getElementsByClassName("invalid")[0].style.visibility = "visible";
                document.getElementsByClassName("valid")[0].style.visibility = "hidden";
                return false;
            }
        }
    }
}
function checkEmail() {
    let email = document.getElementById("newUserEmail").value;
    let regx_email = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})$/;
    if (email == "") {
        document.getElementsByClassName("invalid")[1].style.visibility = "visible";
        document.getElementsByClassName("valid")[1].style.visibility = "hidden";
        return false;
    }
    else {
        if (regx_email.test(email)) {
            document.getElementsByClassName("valid")[1].style.visibility = "visible";
            document.getElementsByClassName("invalid")[1].style.visibility = "hidden";
            return true;
        }
        else {
            document.getElementsByClassName("invalid")[1].style.visibility = "visible";
            document.getElementsByClassName("valid")[1].style.visibility = "hidden";
            return false;
        }
    }
}
function checkPassword() {
    let newUserPassword = document.getElementById("newUserPassword").value;
    let regx_newUserPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (newUserPassword == "") {
        document.getElementsByClassName("invalid")[2].style.visibility = "visible";
        document.getElementsByClassName("valid")[2].style.visibility = "hidden";
        return false;
    }
    else {
        if (regx_newUserPassword.test(newUserPassword)) {
            document.getElementsByClassName("valid")[2].style.visibility = "visible";
            document.getElementsByClassName("invalid")[2].style.visibility = "hidden";
            return true;
        }
        else {
            document.getElementsByClassName("invalid")[2].style.visibility = "visible";
            document.getElementsByClassName("valid")[2].style.visibility = "hidden";
            return false;
        }
    }
}
function checkConfirmPassword() {
    let confirmPassword = document.getElementById("confirm-password").value;
    let newUserPassword = document.getElementById("newUserPassword").value;
    if (confirmPassword == newUserPassword) {
        document.getElementsByClassName("valid")[3].style.visibility = "visible";
        document.getElementsByClassName("invalid")[3].style.visibility = "hidden";
        return true;
    }
    else {
        document.getElementsByClassName("invalid")[3].style.visibility = "visible";
        document.getElementsByClassName("valid")[3].style.visibility = "hidden";
        return false;
    }
}
function checkPhone() {
    let newuserPhone = document.getElementById("newUserPhone").value;
    let regx_newuserPhone = /^[0-9]{10,10}$/;
    if (newuserPhone == "") {
        document.getElementsByClassName("invalid")[4].style.visibility = "visible";
        document.getElementsByClassName("valid")[4].style.visibility = "hidden";
        return false;
    }
    else {
        if (regx_newuserPhone.test(newuserPhone)) {
            document.getElementsByClassName("valid")[4].style.visibility = "visible";
            document.getElementsByClassName("invalid")[4].style.visibility = "hidden";
            return true;
        }
        else {
            document.getElementsByClassName("invalid")[4].style.visibility = "visible";
            document.getElementsByClassName("valid")[4].style.visibility = "hidden";
            return false;
        }
    }
}
