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
function addUserAPI(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5072/api/UserInfo', {
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
function addTravelAPI(travel) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5072/api/TravelHistory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travel)
        });
        if (!response.ok) {
            throw new Error('Failed to add user');
        }
        alert("Success");
    });
}
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5072/api/UserInfo/${id}`, {
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
function updateTravelHistory(id, travel) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5072/api/TravelHistory/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travel)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
    });
}
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5072/api/UserInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
function fetchTravelHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5072/api/TravelHistory';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
function fetchTicket() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5072/api/TicketFair';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
function DeductBalance(amount) {
    CurrentUser.userBalance -= amount;
}
function WalletRecharge(amount) {
    CurrentUser.userBalance += amount;
}
// Lists
// let UserList :UserInfo []= [];
// UserList.push(new UserInfo("Selvabala","9025976622","selva","selva"));
// UserList.push(new UserInfo("Avi","9626","avi",'avi'));
// let TravelList :TravelHistory [] =[];
// TravelList.push(new TravelHistory("CMRL1001", 	"Airport"	,"Egmore",new Date(2023,10,10) ,55))
// TravelList.push(new TravelHistory("CMRL1001", 	"Alandur"	,"Alandur",new Date(2023,10,10) ,55))
// let TicketFairList :TicketFair [] =[];
// TicketFairList.push(new TicketFair("Airport",	"Egmore",	55))
// TicketFairList.push(new TicketFair(	"Airport",	"Koyambedu"	,25))
// TicketFairList.push(new TicketFair(	"Alandur"	,"Alandur"	,25))
// TicketFairList.push(new TicketFair("Koyambedu"	,"Egmore",	32))
function homePage() {
    let signUp = document.getElementById('signUp');
    let homepage = document.getElementById('homepage');
    homepage.style.display = "block";
    signUp.style.display = "none";
}
function welcomePage() {
    // const byteArray :Uint8Array = CurrentUser.userImage;
    // const base64String = btoa(String.fromCharCode(...byteArray));
    // const imageUrl = `data:image/jpg;base64,${base64String}`;
    const imgElement = document.getElementById("profilePicture");
    imgElement.src = "data:image/png;base64," + CurrentUser.userImage;
    let greet = document.getElementById("greet");
    greet.innerHTML = `Welcome ${CurrentUser.userName} `;
    let welcomePage = document.getElementById("welcomePage");
    welcomePage.style.display = "block";
    let signInpage = document.getElementById("signIn");
    signInpage.style.display = "none";
}
let newUserPage = () => {
    let homepage = document.getElementById("homepage");
    let signUp = document.getElementById("signUp");
    homepage.style.display = "none";
    signUp.style.display = "block";
};
let signUp = () => {
    let homepage = document.getElementById("homepage");
    let signUp = document.getElementById("signUp");
    homepage.style.display = "block";
    signUp.style.display = "none";
    let name = document.getElementById("userName").value;
    let newuserEmail = document.getElementById('newUserEmail').value;
    let newuserPassword = document.getElementById('newUserPassword').value;
    let newUserConfirmPassword = document.getElementById('confirm-password').value;
    let newuserPhone = document.getElementById('newUserPhone').value;
    let newUserProfile = document.getElementById("newUserProfile").value;
    if (checkNewuserName() && checkEmail() && checkPassword() && checkConfirmPassword() && checkPhone()) {
        // UserList.push(new UserInfo(name.value, newuserPhone, newuserEmail, newuserPassword))
        const user = {
            cardNumber: 0,
            userName: name,
            userImage: (newUserProfile),
            userPhone: newuserPhone,
            userEmail: newuserEmail,
            userPassword: newuserPassword,
            userBalance: 0
        };
        alert("Registration Successful");
        addUserAPI(user);
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
};
let existingUserPage = () => {
    let homepage = document.getElementById("homepage");
    let signIn = document.getElementById("signIn");
    homepage.style.display = "none";
    signIn.style.display = "block";
};
let loginIn = () => __awaiter(void 0, void 0, void 0, function* () {
    const userList = yield fetchUsers();
    let signIn = document.getElementById("signIn");
    signIn.style.display = "none";
    let existingUserMail = document.getElementById("existing-user-email").value;
    let existinguserPassword = document.getElementById("existing-user-password").value;
    let validUser = false;
    userList.forEach(user => {
        if (user.userEmail == existingUserMail && user.userPassword == existinguserPassword) {
            validUser = true;
            CurrentUser = user;
            welcomePage();
            return false;
        }
    });
    if (!validUser) {
        alert("Ivalid User Name or Passord");
        homePage();
    }
});
function showBalance() {
    let checkBalance = document.getElementById("checkBalance");
    let recharge = document.getElementById("recharge");
    let viewTravelHistory = document.getElementById("viewTravelHistory");
    let travel = document.getElementById("travel");
    let exit = document.getElementById("exit");
    checkBalance.style.display = "block";
    recharge.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "none";
    checkBalance.innerHTML = "<br><br>";
    checkBalance.innerHTML += `Your Balance is ${CurrentUser.userBalance}`;
}
function showRecharge() {
    let checkBalance = document.getElementById("checkBalance");
    let recharge = document.getElementById("recharge");
    let viewTravelHistory = document.getElementById("viewTravelHistory");
    let travel = document.getElementById("travel");
    let exit = document.getElementById("exit");
    checkBalance.style.display = "none";
    recharge.style.display = "block";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "none";
}
function Recharge() {
    let rechargeForm = document.getElementById("rechargeForm");
    let amount = document.getElementById("amount").value;
    WalletRecharge(parseInt(amount));
    updateUser(CurrentUser.cardNumber, CurrentUser);
    rechargeForm.reset();
    alert("Amount added");
    showRecharge();
    return false;
}
function showtravelHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const travelList = yield fetchTravelHistory();
        let checkBalance = document.getElementById("checkBalance");
        let recharge = document.getElementById("recharge");
        let viewTravelHistory = document.getElementById("viewTravelHistory");
        let travel = document.getElementById("travel");
        let exit = document.getElementById("exit");
        checkBalance.style.display = "none";
        recharge.style.display = "none";
        viewTravelHistory.style.display = "block";
        travel.style.display = "none";
        exit.style.display = "none";
        let travelBodyTable = document.getElementById("travelBodyTable");
        travelBodyTable.innerHTML = "";
        travelList.forEach(travel => {
            if (travel.cardNumber == CurrentUser.cardNumber) {
                travelBodyTable.innerHTML +=
                    `
                <tr>
                    <td class="tabelcell">${travel.travelID}</td>
                    <td class="tabelcell">${travel.cardNumber}</td>
                    <td class="tabelcell">${travel.fromLocation}</td>
                    <td class="tabelcell">${travel.toLocation}</td>
                    <td class="tabelcell">${travel.travelDate.toString().substring(0, 10)}</td>
                    <td class="tabelcell">${travel.travelCost}</td>
                </tr>
                `;
            }
        });
    });
}
function showTravel() {
    return __awaiter(this, void 0, void 0, function* () {
        const ticketFairList = yield fetchTicket();
        let checkBalance = document.getElementById("checkBalance");
        let recharge = document.getElementById("recharge");
        let viewTravelHistory = document.getElementById("viewTravelHistory");
        let travel = document.getElementById("travel");
        let exit = document.getElementById("exit");
        checkBalance.style.display = "none";
        recharge.style.display = "none";
        viewTravelHistory.style.display = "none";
        travel.style.display = "block";
        exit.style.display = "none";
        let ticketFairTable = document.getElementById("ticketFairTable");
        ticketFairTable.innerHTML = "";
        ticketFairList.forEach(ticket => {
            ticketFairTable.innerHTML +=
                `
        <tr>
        <td class="tabelcell">${ticket.ticketID}</td>
        <td class="tabelcell">${ticket.fromLocation}</td>
        <td class="tabelcell">${ticket.toLocation}</td>
        <td class="tabelcell">${ticket.ticketPrice}</td>
        <td class="tabelcell"> <button class="buybutton" onclick="return Travel('${ticket.ticketID}')"> Buy </button>  </td>
        </tr>
        `;
        });
    });
}
function Travel(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const ticketFairList = yield fetchTicket();
        ticketFairList.forEach(ticket => {
            if (ticket.ticketID == id) {
                if (CurrentUser.userBalance >= ticket.ticketPrice) {
                    // travelList.push(new TravelHistory(CurrentUser.cardNumber,ticket.fromLocation,ticket.toLocation,new Date(),ticket.ticketPrice));
                    const travel = {
                        travelID: 0,
                        cardNumber: CurrentUser.cardNumber,
                        fromLocation: ticket.fromLocation,
                        toLocation: ticket.toLocation,
                        travelDate: new Date().toISOString().substring(0, 10),
                        travelCost: ticket.ticketPrice
                    };
                    DeductBalance(ticket.ticketPrice);
                    alert("Ticket Booked.");
                    addTravelAPI(travel);
                    return false;
                }
                else {
                    alert("Insufficinet Balance");
                    return false;
                }
            }
        });
    });
}
function showExit() {
    let checkBalance = document.getElementById("checkBalance");
    let recharge = document.getElementById("recharge");
    let viewTravelHistory = document.getElementById("viewTravelHistory");
    let travel = document.getElementById("travel");
    let exit = document.getElementById("exit");
    checkBalance.style.display = "none";
    recharge.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "block";
}
function logOut() {
    let homepage = document.getElementById('homepage');
    let welcomePage = document.getElementById("welcomePage");
    let checkBalance = document.getElementById("checkBalance");
    let recharge = document.getElementById("recharge");
    let viewTravelHistory = document.getElementById("viewTravelHistory");
    let travel = document.getElementById("travel");
    let exit = document.getElementById("exit");
    checkBalance.style.display = "none";
    recharge.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "none";
    welcomePage.style.display = "none";
    homepage.style.display = "block";
}
//Validating Inputs for new User Registration
let checkNewuserName = () => {
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
};
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
let checkPassword = () => {
    let newuserPassword = document.getElementById("newUserPassword").value;
    let regx_newuserPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (newuserPassword == "") {
        document.getElementsByClassName("invalid")[2].style.visibility = "visible";
        document.getElementsByClassName("valid")[2].style.visibility = "hidden";
        return false;
    }
    else {
        if (regx_newuserPassword.test(newuserPassword)) {
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
};
let checkConfirmPassword = () => {
    let confirmPassword = document.getElementById("confirm-password").value;
    let newuserPassword = document.getElementById("newUserPassword").value;
    if (confirmPassword == newuserPassword) {
        document.getElementsByClassName("valid")[3].style.visibility = "visible";
        document.getElementsByClassName("invalid")[3].style.visibility = "hidden";
        return true;
    }
    else {
        document.getElementsByClassName("invalid")[3].style.visibility = "visible";
        document.getElementsByClassName("valid")[3].style.visibility = "hidden";
        return false;
    }
};
let checkPhone = () => {
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
};
