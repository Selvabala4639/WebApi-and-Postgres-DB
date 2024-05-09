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
let selectedBook;
function addUserAPI(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5096/api/UserInfo', {
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
function addBorrowAPI(borrow) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5096/api/BorrowInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrow)
        });
        if (!response.ok) {
            throw new Error('Failed to add borrow');
        }
        alert("Borrowed successfully");
        showBorrowBook();
        //homePage();
    });
}
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5096/api/UserInfo/${id}`, {
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
function updateBook(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5096/api/BookInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update book');
        }
    });
}
function updateBorrow(id, borrow) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5096/api/BorrowInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrow)
        });
        if (!response.ok) {
            throw new Error('Failed to update borrow');
        }
    });
}
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5096/api/UserInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Users');
        }
        return yield response.json();
    });
}
function fetchBorrows() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5096/api/BorrowInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Borrows');
        }
        return yield response.json();
    });
}
function fetchBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5096/api/BookInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Books');
        }
        return yield response.json();
    });
}
function homePage() {
    let signup = document.getElementById('signup');
    let homepage = document.getElementById('homepage');
    homepage.style.display = "block";
    signup.style.display = "none";
}
function welcomePage() {
    let greet = document.getElementById("greet");
    greet.innerHTML = `Welcome ${CurrentUser.userName}`;
    let welcomePage = document.getElementById("welcomePage");
    welcomePage.style.display = "block";
    let signinpage = document.getElementById("sign-in");
    signinpage.style.display = "none";
}
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
    let newUserGender = document.getElementById("newUserGender").value;
    let newUserDepartment = document.getElementById("newUserDepartment").value;
    console.log(name);
    if (checkNewuserName() && checkEmail() && checkPassword() && checkConfirmPassword() && checkPhone()) {
        // UserList.push(new UserInfo(name.value, newuserEmail, newUserPassword, newuserPhone))
        const user = {
            userID: undefined,
            userName: name,
            gender: newUserGender,
            department: newUserDepartment,
            mailID: newuserEmail,
            password: newUserPassword,
            mobileNumber: newuserPhone,
            walletBalance: 0
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
            if (user.mailID == existingUserMail && user.password == existingUserPassword) {
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
function showBorrowBook() {
    return __awaiter(this, void 0, void 0, function* () {
        const bookList = yield fetchBooks();
        let homepage = document.getElementById('homepage');
        let borrowBook = document.getElementById('borrowBook');
        let showBorrowHistory = document.getElementById('showBorrowHistory');
        let showReturnBooks = document.getElementById('showReturnBooks');
        let showWalletRecharge = document.getElementById('showWalletRecharge');
        let signup = document.getElementById('signup');
        let signinpage = document.getElementById("sign-in");
        let getBorrowBookCount = document.getElementById("getBorrowBookCount");
        getBorrowBookCount.style.display = "none";
        let showBalance = document.getElementById("showBalance");
        showBalance.style.display = "none";
        homepage.style.display = "none";
        borrowBook.style.display = "block";
        showBorrowHistory.style.display = "none";
        showReturnBooks.style.display = "none";
        showWalletRecharge.style.display = "none";
        signup.style.display = "none";
        signinpage.style.display = "none";
        let borrowBookTableBody = document.getElementById("borrowBookTableBody");
        borrowBookTableBody.innerHTML = "";
        bookList.forEach(book => {
            borrowBookTableBody.innerHTML += `
            <tr>
            <td  class="tabelcell">${book.bookName} </td>
            <td class="tabelcell">${book.authorName} </td>
            <td class="tabelcell">${book.bookCount} </td>
            <td class="tabelcell"><button class="borrowButton" onclick="getBorrowBookCount(${book.bookID})"> Borrow </button></td>
            </tr>
            `;
        });
    });
}
function getBorrowBookCount(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookList = yield fetchBooks();
        let getBorrowBookCount = document.getElementById("getBorrowBookCount");
        getBorrowBookCount.style.display = "block";
        bookList.forEach(book => {
            if (id == book.bookID) {
                selectedBook = book;
            }
        });
    });
}
function borrowBook() {
    return __awaiter(this, void 0, void 0, function* () {
        const borrowList = yield fetchBorrows();
        let getBookCount = document.getElementById("getBookCount").value;
        if (parseInt(getBookCount) <= selectedBook.bookCount) {
            let userBookCounts = 0;
            alert("in stock");
            borrowList.forEach(borrow => {
                if (borrow.userID == CurrentUser.userID) {
                    userBookCounts = borrow.borrowBookCount;
                }
            });
            if (userBookCounts > 3) {
                alert("You have already 3 books");
            }
            else {
                selectedBook.bookCount -= parseInt(getBookCount);
                const newBorrow = {
                    borrowID: undefined,
                    bookID: selectedBook.bookID,
                    userID: CurrentUser.userID,
                    borrowDate: new Date,
                    borrowBookCount: parseInt(getBookCount),
                    status: "Borrowed",
                    paidFineAmount: 0
                };
                addBorrowAPI(newBorrow);
                alert("Your return Date is " + addDays(new Date(), 15));
                updateBook(selectedBook.bookID, selectedBook);
                showBorrowBook();
            }
        }
        else {
            let minimumDate = new Date("2090-11-11");
            borrowList.forEach(borrow => {
                if (borrow.bookID == selectedBook.bookID) {
                    let nextAvailableDate = addDays(borrow.borrowDate, 15);
                    //  let nextAvailableDate = new Date(borrow.borrowDate);
                    // nextAvailableDate.setDate(nextAvailableDate.getDate()+15);
                    if (nextAvailableDate < minimumDate) {
                        minimumDate = nextAvailableDate;
                    }
                }
            });
            alert(minimumDate.toISOString().split('T')[0]);
        }
    });
}
function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
function showBorrowHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const borrowList = yield fetchBorrows();
        let homepage = document.getElementById('homepage');
        let borrowBook = document.getElementById('borrowBook');
        let showBorrowHistory = document.getElementById('showBorrowHistory');
        let showReturnBooks = document.getElementById('showReturnBooks');
        let showWalletRecharge = document.getElementById('showWalletRecharge');
        let signup = document.getElementById('signup');
        let signinpage = document.getElementById("sign-in");
        let getBorrowBookCount = document.getElementById("getBorrowBookCount");
        getBorrowBookCount.style.display = "none";
        homepage.style.display = "none";
        borrowBook.style.display = "none";
        showBorrowHistory.style.display = "block";
        showReturnBooks.style.display = "none";
        showWalletRecharge.style.display = "none";
        signup.style.display = "none";
        signinpage.style.display = "none";
        let showBalance = document.getElementById("showBalance");
        showBalance.style.display = "none";
        let borrowHistoryBody = document.getElementById("borrowHistoryBody");
        borrowHistoryBody.innerHTML = "";
        borrowList.forEach(borrow => {
            if (borrow.userID == CurrentUser.userID) {
                borrowHistoryBody.innerHTML += `
                    <tr>
                    <td class="tabelcell">${borrow.bookID} </td>
                    <td class="tabelcell">${borrow.borrowDate.toString().split('T')[0].split('-').reverse().join('-')} </td>
                    <td class="tabelcell">${borrow.borrowBookCount} </td>
                    <td class="tabelcell">${borrow.status} </td>
                    <td class="tabelcell">${borrow.paidFineAmount} </td>
                    </tr>
                    `;
            }
        });
    });
}
function showReturnBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const borrowList = yield fetchBorrows();
        let homepage = document.getElementById('homepage');
        let borrowBook = document.getElementById('borrowBook');
        let showBorrowHistory = document.getElementById('showBorrowHistory');
        let showReturnBooks = document.getElementById('showReturnBooks');
        let showWalletRecharge = document.getElementById('showWalletRecharge');
        let signup = document.getElementById('signup');
        let signinpage = document.getElementById("sign-in");
        let getBorrowBookCount = document.getElementById("getBorrowBookCount");
        getBorrowBookCount.style.display = "none";
        homepage.style.display = "none";
        borrowBook.style.display = "none";
        showBorrowHistory.style.display = "none";
        showReturnBooks.style.display = "block";
        showWalletRecharge.style.display = "none";
        signup.style.display = "none";
        signinpage.style.display = "none";
        let showBalance = document.getElementById("showBalance");
        showBalance.style.display = "none";
        let returnBooksBody = document.getElementById("returnBooksBody");
        returnBooksBody.innerHTML = "";
        borrowList.forEach(borrow => {
            if (borrow.status == "Borrowed" && borrow.userID == CurrentUser.userID) {
                returnBooksBody.innerHTML += `
                    <tr>
                    <td class="tabelcell">${borrow.bookID}</td>
                    <td class="tabelcell">${borrow.borrowDate.toString().split('T')[0].split('-').reverse().join('-')}</td>
                    <td class="tabelcell">${borrow.borrowBookCount}</td>
                    <td class="tabelcell"><button class="borrowButton" onclick="returnBook('${borrow.borrowID}')"> Return </button></td>
                    </tr>
                    `;
            }
        });
    });
}
function returnBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const borrowList = yield fetchBorrows();
        const bookList = yield fetchBooks();
        borrowList.forEach(borrow => {
            if (borrow.borrowID == id) {
                const timeDifference = Math.abs(new Date(borrow.borrowDate).getTime() - new Date().getTime());
                const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
                alert("You returned a book in " + daysDifference + " days");
                if (daysDifference > 0) {
                    if (CurrentUser.walletBalance >= daysDifference - 15) {
                        // borrow.status="Returned";
                        // updateBorrow(borrow.borrowID,borrow);
                        bookList.forEach(book => {
                            if (book.bookID == borrow.bookID) {
                                book.bookCount += borrow.borrowBookCount;
                                updateBook(book.bookID, book);
                                borrow.paidFineAmount = daysDifference - 15;
                                borrow.status = "Returned";
                                updateBorrow(borrow.borrowID, borrow);
                                CurrentUser.walletBalance -= daysDifference - 15;
                                updateUser(CurrentUser.userID, CurrentUser);
                                alert("Returned Successfully");
                                showReturnBooks();
                            }
                        });
                    }
                    else {
                        alert("Your return date is more than 15 days. Please recharge atleast " + daysDifference + " Rs for returning.");
                    }
                }
                else {
                    borrow.status = "Returned";
                    updateBorrow(borrow.borrowID, borrow);
                    bookList.forEach(book => {
                        if (book.bookID == borrow.bookID) {
                            book.bookCount += borrow.borrowBookCount;
                            updateBook(book.bookID, book);
                            alert("Returned Successfully");
                            showReturnBooks();
                        }
                    });
                }
            }
        });
    });
}
function showWalletRecharge() {
    let homepage = document.getElementById('homepage');
    let borrowBook = document.getElementById('borrowBook');
    let showBorrowHistory = document.getElementById('showBorrowHistory');
    let showReturnBooks = document.getElementById('showReturnBooks');
    let showWalletRecharge = document.getElementById('showWalletRecharge');
    let signup = document.getElementById('signup');
    let showBalance = document.getElementById("showBalance");
    let getBorrowBookCount = document.getElementById("getBorrowBookCount");
    getBorrowBookCount.style.display = "none";
    showBalance.style.display = "none";
    let signinpage = document.getElementById("sign-in");
    homepage.style.display = "none";
    borrowBook.style.display = "none";
    showBorrowHistory.style.display = "none";
    showReturnBooks.style.display = "none";
    showWalletRecharge.style.display = "block";
    signup.style.display = "none";
    signinpage.style.display = "none";
}
function showBalance() {
    let showBalance = document.getElementById("showBalance");
    showBalance.style.display = "block";
    let homepage = document.getElementById('homepage');
    let borrowBook = document.getElementById('borrowBook');
    let showBorrowHistory = document.getElementById('showBorrowHistory');
    let showReturnBooks = document.getElementById('showReturnBooks');
    let showWalletRecharge = document.getElementById('showWalletRecharge');
    let signup = document.getElementById('signup');
    let signinpage = document.getElementById("sign-in");
    let getBorrowBookCount = document.getElementById("getBorrowBookCount");
    getBorrowBookCount.style.display = "none";
    homepage.style.display = "none";
    borrowBook.style.display = "none";
    showBorrowHistory.style.display = "none";
    showReturnBooks.style.display = "none";
    showWalletRecharge.style.display = "none";
    signup.style.display = "none";
    signinpage.style.display = "none";
    let currentBalance = document.getElementById("currentBalance");
    currentBalance.innerHTML = `Available Balance: ${CurrentUser.walletBalance}`;
}
function Recharge() {
    return __awaiter(this, void 0, void 0, function* () {
        let amount = document.getElementById("amount");
        if (parseInt(amount.value) <= 0) {
            alert("Recharge amount should be greater than 0");
            showWalletRecharge();
        }
        else {
            CurrentUser.walletBalance += parseInt(amount.value);
            yield updateUser(CurrentUser.userID, CurrentUser);
            alert("Amount added.");
            amount.value = "";
            showWalletRecharge();
        }
    });
}
function logOut() {
    let homepage = document.getElementById('homepage');
    let borrowBook = document.getElementById('borrowBook');
    let showBorrowHistory = document.getElementById('showBorrowHistory');
    let showReturnBooks = document.getElementById('showReturnBooks');
    let showWalletRecharge = document.getElementById('showWalletRecharge');
    let signup = document.getElementById('signup');
    let signinpage = document.getElementById("sign-in");
    let welcomePage = document.getElementById("welcomePage");
    let getBorrowBookCount = document.getElementById("getBorrowBookCount");
    getBorrowBookCount.style.display = "none";
    welcomePage.style.display = "none";
    homepage.style.display = "block";
    borrowBook.style.display = "none";
    showBorrowHistory.style.display = "none";
    showReturnBooks.style.display = "none";
    showWalletRecharge.style.display = "none";
    signup.style.display = "none";
    signinpage.style.display = "none";
    location.reload();
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
