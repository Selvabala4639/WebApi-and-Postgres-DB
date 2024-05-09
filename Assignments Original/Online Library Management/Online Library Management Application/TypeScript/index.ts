let CurrentUser :UserInfo;
let selectedBook :BookInfo;
interface UserInfo{
    userID : any;
    userName :string;
    gender :string;
    department :string;
    mobileNumber :string;
    mailID :string;
    password:string;
    walletBalance :number;
}

interface BookInfo{
    bookID : any;
    bookName: string;
    authorName : string;
    bookCount: number;
}

interface BorrowInfo{
    borrowID : any;
    bookID : number;
    userID: number;
    borrowDate: Date;
    borrowBookCount: number;
    status :string;
    paidFineAmount :number;
}

async function addUserAPI(user:UserInfo):Promise<void> {
    const response = await fetch('http://localhost:5096/api/UserInfo' ,
        {
            method:'POST' ,
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        });
        if(!response.ok){
            throw new Error('Failed to add user');
        }
        alert("Success");
        homePage();
}

async function addBorrowAPI(borrow:BorrowInfo):Promise<void> {
    const response = await fetch('http://localhost:5096/api/BorrowInfo' ,
        {
            method:'POST' ,
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(borrow)
        });
        if(!response.ok){
            throw new Error('Failed to add borrow');
        }
        alert("Borrowed successfully");
        showBorrowBook();
        //homePage();
}

async function updateUser(id: number, user: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5096/api/UserInfo/${id}`, {
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

async function updateBook(id: number, user: BookInfo): Promise<void> {
    const response = await fetch(`http://localhost:5096/api/BookInfo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Failed to update book');
    }
}

async function updateBorrow(id: number, borrow: BorrowInfo): Promise<void> {
    const response = await fetch(`http://localhost:5096/api/BorrowInfo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(borrow)
    });
    if (!response.ok) {
      throw new Error('Failed to update borrow');
    }
}

async function fetchUsers(): Promise<UserInfo[]> {
    const apiUrl = 'http://localhost:5096/api/UserInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch Users');
    }
    return await response.json();
  }

  async function fetchBorrows(): Promise<BorrowInfo[]> {
    const apiUrl = 'http://localhost:5096/api/BorrowInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch Borrows');
    }
    return await response.json();
  }

  async function fetchBooks(): Promise<BookInfo[]> {
    const apiUrl = 'http://localhost:5096/api/BookInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch Books');
    }
    return await response.json();
  }


  function homePage()
{
    let signup = document.getElementById('signup') as HTMLDivElement;
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    homepage.style.display="block";
    signup.style.display="none";
}

function welcomePage()
{
    let greet = document.getElementById("greet") as HTMLDivElement;
     greet.innerHTML= `Welcome ${CurrentUser.userName}`;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    welcomePage.style.display = "block";
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
    signinpage.style.display="none";
}

  function newUserPage()
  {
      let signup = document.getElementById('signup') as HTMLDivElement;
      let homepage = document.getElementById('homepage') as HTMLDivElement;
  
      homepage.style.display="none";
      signup.style.display="block";
  }
  
  function signUp()
  {
      let name = (document.getElementById("userName") as HTMLInputElement).value;
      let newuserEmail = (document.getElementById("newUserEmail") as HTMLInputElement).value;
      let newUserPassword = (document.getElementById("newUserPassword") as HTMLInputElement).value;
      let newUserConfirmPassword = (document.getElementById("confirm-password") as HTMLInputElement).value;
      let newuserPhone = (document.getElementById("newUserPhone") as HTMLInputElement).value;
      let newUserGender =(document.getElementById("newUserGender")as HTMLInputElement).value;
      let newUserDepartment =(document.getElementById("newUserDepartment")as HTMLInputElement).value;
      
      console.log(name);
      if(checkNewuserName() && checkEmail() && checkPassword() && checkConfirmPassword() && checkPhone())
      {
          // UserList.push(new UserInfo(name.value, newuserEmail, newUserPassword, newuserPhone))
          const user : UserInfo = {
              userID : undefined ,
              userName :name,
              gender: newUserGender,
              department :newUserDepartment,
              mailID: newuserEmail,
              password : newUserPassword,
              mobileNumber: newuserPhone,
              walletBalance : 0
          }
          alert("Registration Successful");
          addUserAPI(user);
      }
      else
      {
          checkNewuserName();
          checkEmail();
          checkPassword();
          checkConfirmPassword();
          checkPhone();
          alert("Please enter all details");
          newUserPage();
      }
  }
  
  function existingUserPage()
  {
      let signinpage = document.getElementById("sign-in") as HTMLDivElement;
      let homepage = document.getElementById('homepage') as HTMLDivElement;
      let signup = document.getElementById('signup') as HTMLDivElement;
  
      signinpage.style.display="block";
      homepage.style.display="none";
      signup.style.display="none";
  }
  
  async function loginIn()
  {
      let existingUserMail = (document.getElementById("existing-user-email") as HTMLInputElement).value;
      let existingUserPassword = (document.getElementById("existing-user-password") as HTMLInputElement).value;
      let validUser = false;
      const users= await fetchUsers()
      
      users.forEach(user => {
          if(user.mailID == existingUserMail && user.password==existingUserPassword)
              {
                  validUser = true;
                  CurrentUser = user;
                  welcomePage();
                  return false;
              }
      });
      if(!validUser)
          {
              alert("Ivalid User Name or Passord");
          }
  }   
  
async function showBorrowBook()
 {
    const bookList = await fetchBooks();
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    let showBorrowHistory = document.getElementById('showBorrowHistory') as HTMLDivElement;
    let showReturnBooks = document.getElementById('showReturnBooks') as HTMLDivElement;
    let showWalletRecharge = document.getElementById('showWalletRecharge') as HTMLDivElement;
    let signup = document.getElementById('signup') as HTMLDivElement;
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
    let getBorrowBookCount = document.getElementById("getBorrowBookCount")as HTMLDivElement;
    getBorrowBookCount.style.display="none";
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    
    showBalance.style.display="none";
      homepage.style.display="none";
      borrowBook.style.display="block";
      showBorrowHistory.style.display="none";
      showReturnBooks.style.display="none";
      showWalletRecharge.style.display="none";
      signup.style.display="none";
      signinpage.style.display="none";

    let borrowBookTableBody = document.getElementById("borrowBookTableBody")as HTMLDivElement;
    borrowBookTableBody.innerHTML = "";
    bookList.forEach(book =>
        {
            borrowBookTableBody.innerHTML += `
            <tr>
            <td  class="tabelcell">${book.bookName} </td>
            <td class="tabelcell">${book.authorName} </td>
            <td class="tabelcell">${book.bookCount} </td>
            <td class="tabelcell"><button class="borrowButton" onclick="getBorrowBookCount(${book.bookID})"> Borrow </button></td>
            </tr>
            `;
        }
    );
 }

async function getBorrowBookCount(id:number)
{
    const bookList = await fetchBooks();
    let getBorrowBookCount = document.getElementById("getBorrowBookCount")as HTMLDivElement;
    getBorrowBookCount.style.display="block";
    bookList.forEach(book =>
        {
            if(id==book.bookID)
                {
                    selectedBook = book;
                }
        }
    );
}

async function borrowBook()
{
    const borrowList = await fetchBorrows();
    let getBookCount = (document.getElementById("getBookCount")as HTMLInputElement).value;

    if(parseInt(getBookCount) <= selectedBook.bookCount)
    {
        let userBookCounts =0;
        alert("in stock");
        borrowList.forEach(borrow =>
            {
                if(borrow.userID == CurrentUser.userID)
                    {
                        userBookCounts = borrow.borrowBookCount;
                    }
            }
            );
        if(userBookCounts>3)
            {
                alert("You have already 3 books");
            }
        else
            {
                selectedBook.bookCount-=parseInt(getBookCount);
                const newBorrow :BorrowInfo ={
                    borrowID : undefined,
                    bookID : selectedBook.bookID,
                    userID: CurrentUser.userID,
                    borrowDate: new Date,
                    borrowBookCount: parseInt(getBookCount),
                    status :"Borrowed",
                    paidFineAmount :0
                } 
                addBorrowAPI(newBorrow);
                alert("Your return Date is "+addDays(new Date(),15));
                updateBook(selectedBook.bookID,selectedBook);
                showBorrowBook();
            }
    }
    else
    {
        let minimumDate :Date = new Date("2090-11-11");
        borrowList.forEach(borrow =>
        {
            
            if(borrow.bookID == selectedBook.bookID)
            {

                let nextAvailableDate = addDays(borrow.borrowDate,15);
                //  let nextAvailableDate = new Date(borrow.borrowDate);
                // nextAvailableDate.setDate(nextAvailableDate.getDate()+15);
                if(nextAvailableDate < minimumDate)
                    {
                        minimumDate = nextAvailableDate;
                    }
            }
        }
        );
        alert(minimumDate.toISOString().split('T')[0]);
    }
}

function addDays(date:Date, days:number) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

async function showBorrowHistory()
{
    const borrowList = await fetchBorrows();
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    let showBorrowHistory = document.getElementById('showBorrowHistory') as HTMLDivElement;
    let showReturnBooks = document.getElementById('showReturnBooks') as HTMLDivElement;
    let showWalletRecharge = document.getElementById('showWalletRecharge') as HTMLDivElement;
    let signup = document.getElementById('signup') as HTMLDivElement;
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
    let getBorrowBookCount = document.getElementById("getBorrowBookCount")as HTMLDivElement;
    getBorrowBookCount.style.display="none";
      homepage.style.display="none";
      borrowBook.style.display="none";
      showBorrowHistory.style.display="block";
      showReturnBooks.style.display="none";
      showWalletRecharge.style.display="none";
      signup.style.display="none";
      signinpage.style.display="none";
      let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    showBalance.style.display="none";

     let borrowHistoryBody  = document.getElementById("borrowHistoryBody")as HTMLDivElement;
     borrowHistoryBody.innerHTML="";
     borrowList.forEach(borrow=>
        {
            if(borrow.userID==CurrentUser.userID)
                {
                    borrowHistoryBody.innerHTML+=`
                    <tr>
                    <td class="tabelcell">${borrow.bookID} </td>
                    <td class="tabelcell">${borrow.borrowDate.toString().split('T')[0].split('-').reverse().join('-')} </td>
                    <td class="tabelcell">${borrow.borrowBookCount} </td>
                    <td class="tabelcell">${borrow.status} </td>
                    <td class="tabelcell">${borrow.paidFineAmount} </td>
                    </tr>
                    `;
                }
        }
     );
}

async function showReturnBooks()
{
    const borrowList = await fetchBorrows();
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    let showBorrowHistory = document.getElementById('showBorrowHistory') as HTMLDivElement;
    let showReturnBooks = document.getElementById('showReturnBooks') as HTMLDivElement;
    let showWalletRecharge = document.getElementById('showWalletRecharge') as HTMLDivElement;
    let signup = document.getElementById('signup') as HTMLDivElement;
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
    let getBorrowBookCount = document.getElementById("getBorrowBookCount")as HTMLDivElement;
    getBorrowBookCount.style.display="none";
      homepage.style.display="none";
      borrowBook.style.display="none";
      showBorrowHistory.style.display="none";
      showReturnBooks.style.display="block";
      showWalletRecharge.style.display="none";
      signup.style.display="none";
      signinpage.style.display="none";
      let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    showBalance.style.display="none";

    let returnBooksBody = document.getElementById("returnBooksBody")as HTMLDivElement;
    returnBooksBody.innerHTML="";

    borrowList.forEach(borrow=>
        {
            if(borrow.status=="Borrowed" && borrow.userID==CurrentUser.userID)
                {
                    returnBooksBody.innerHTML+=`
                    <tr>
                    <td class="tabelcell">${borrow.bookID}</td>
                    <td class="tabelcell">${borrow.borrowDate.toString().split('T')[0].split('-').reverse().join('-')}</td>
                    <td class="tabelcell">${borrow.borrowBookCount}</td>
                    <td class="tabelcell"><button class="borrowButton" onclick="returnBook('${borrow.borrowID}')"> Return </button></td>
                    </tr>
                    `;
                }
        }
    );
}

async function returnBook(id:string)
{
    
    const borrowList = await fetchBorrows();
    const bookList = await fetchBooks();

    borrowList.forEach(borrow =>
        {
            if(borrow.borrowID == id)
                {
                    const timeDifference = Math.abs(new Date(borrow.borrowDate).getTime() - new Date().getTime()) ;
                    const daysDifference = Math.round(timeDifference/(1000*60*60*24)) ;
                    alert("You returned a book in " +daysDifference +" days");
                    if(daysDifference > 0)
                        {
                            if(CurrentUser.walletBalance >= daysDifference - 15)
                                {
                                    // borrow.status="Returned";
                                    // updateBorrow(borrow.borrowID,borrow);
                                    bookList.forEach(book=>
                                        {
                                            if(book.bookID == borrow.bookID)
                                                {
                                                    book.bookCount+=borrow.borrowBookCount;
                                                    updateBook(book.bookID,book);
                                                    borrow.paidFineAmount = daysDifference -15;
                                                    borrow.status="Returned";
                                                    updateBorrow(borrow.borrowID,borrow);
                                                    CurrentUser.walletBalance -= daysDifference-15;
                                                    updateUser(CurrentUser.userID,CurrentUser);
                                                    alert("Returned Successfully");
                                                    showReturnBooks();
                                                }
                                        }
                                    );
                                }
                            else
                            {
                                alert("Your return date is more than 15 days. Please recharge atleast "+ daysDifference +" Rs for returning.");
                            }
                        }
                    else
                    {
                        borrow.status="Returned";
                        updateBorrow(borrow.borrowID,borrow);
                        bookList.forEach(book=>
                            {
                                if(book.bookID== borrow.bookID)
                                    {
                                        book.bookCount+=borrow.borrowBookCount;
                                        updateBook(book.bookID,book);
                                        alert("Returned Successfully");
                                        showReturnBooks();
                                    }
                            }
                        );
                    } 
                }
        }
    );
}

function showWalletRecharge()
{
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    let showBorrowHistory = document.getElementById('showBorrowHistory') as HTMLDivElement;
    let showReturnBooks = document.getElementById('showReturnBooks') as HTMLDivElement;
    let showWalletRecharge = document.getElementById('showWalletRecharge') as HTMLDivElement;
    let signup = document.getElementById('signup') as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    let getBorrowBookCount = document.getElementById("getBorrowBookCount")as HTMLDivElement;
    getBorrowBookCount.style.display="none";
    showBalance.style.display="none";
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
      homepage.style.display="none";
      borrowBook.style.display="none";
      showBorrowHistory.style.display="none";
      showReturnBooks.style.display="none";
      showWalletRecharge.style.display="block";
      signup.style.display="none";
      signinpage.style.display="none";

}

function showBalance()
{
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    showBalance.style.display="block";
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    let showBorrowHistory = document.getElementById('showBorrowHistory') as HTMLDivElement;
    let showReturnBooks = document.getElementById('showReturnBooks') as HTMLDivElement;
    let showWalletRecharge = document.getElementById('showWalletRecharge') as HTMLDivElement;
    let signup = document.getElementById('signup') as HTMLDivElement;
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
    let getBorrowBookCount = document.getElementById("getBorrowBookCount")as HTMLDivElement;
    getBorrowBookCount.style.display="none";
      homepage.style.display="none";
      borrowBook.style.display="none";
      showBorrowHistory.style.display="none";
      showReturnBooks.style.display="none";
      showWalletRecharge.style.display="none";
      signup.style.display="none";
      signinpage.style.display="none";

      let currentBalance = (document.getElementById("currentBalance")as HTMLHeadElement);
     currentBalance.innerHTML = `Available Balance: ${CurrentUser.walletBalance}`;
}

async function Recharge  () {
    let amount = (document.getElementById("amount")as HTMLInputElement);
    if(parseInt(amount.value)<=0)
    {
        alert("Recharge amount should be greater than 0");
        showWalletRecharge();
    }
    else
    {
        CurrentUser.walletBalance+=parseInt(amount.value);
        await updateUser(CurrentUser.userID, CurrentUser);
        alert("Amount added.");
        amount.value="";
        showWalletRecharge();   
    }
}

function logOut()
{
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    let showBorrowHistory = document.getElementById('showBorrowHistory') as HTMLDivElement;
    let showReturnBooks = document.getElementById('showReturnBooks') as HTMLDivElement;
    let showWalletRecharge = document.getElementById('showWalletRecharge') as HTMLDivElement;
    let signup = document.getElementById('signup') as HTMLDivElement;
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let getBorrowBookCount = document.getElementById("getBorrowBookCount")as HTMLDivElement;
    getBorrowBookCount.style.display="none";
    welcomePage.style.display = "none";
      homepage.style.display="block";
      borrowBook.style.display="none";
      showBorrowHistory.style.display="none";
      showReturnBooks.style.display="none";
      showWalletRecharge.style.display="none";
      signup.style.display="none";
      signinpage.style.display="none";
      location.reload();
}

  //Validating Inputs for new User Registration
function checkNewuserName(){
    let userName = (document.getElementById("userName")as HTMLInputElement).value;
    let  regx_userName = /^[a-zA-Z]{2,50}$/;
    if(userName=="")
        {
            (document.getElementsByClassName("invalid")[0]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("valid")[0]as HTMLLabelElement).style.visibility="hidden";
            return false;
        }
        else
        {
            if(userName.length>50)
            {
                (document.getElementsByClassName("userNamelength")[0] as HTMLLabelElement).style.visibility="visible";
                (document.getElementsByClassName("invalid")[0]as HTMLLabelElement).style.visibility="visible";
                (document.getElementsByClassName("valid")[0]as HTMLLabelElement).style.visibility="hidden";
                return false;
            }
            else
            {
                if(regx_userName.test(userName))
                {   
                    (document.getElementsByClassName("valid")[0]as HTMLLabelElement).style.visibility="visible";
                    (document.getElementsByClassName("specialChar")[0]as HTMLSpanElement).style.visibility="hidden";
                    (document.getElementsByClassName("userNamelength")[0] as HTMLLabelElement).style.visibility="hidden";
                    (document.getElementsByClassName("invalid")[0]as HTMLLabelElement).style.visibility="hidden";
                    return true;
                }
                else{
                    (document.getElementsByClassName("specialChar")[0]as HTMLSpanElement).style.visibility="visible";
                    (document.getElementsByClassName("invalid")[0]as HTMLLabelElement).style.visibility="visible";
                    (document.getElementsByClassName("valid")[0]as HTMLLabelElement).style.visibility="hidden";
                    return false;
                }
            }
            
        }
}


function checkEmail()
{
    let email = (document.getElementById("newUserEmail") as HTMLInputElement).value;
    let regx_email = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})$/;
    if(email=="")
    {
        (document.getElementsByClassName("invalid")[1]as HTMLLabelElement).style.visibility="visible";
        (document.getElementsByClassName("valid")[1]as HTMLLabelElement).style.visibility="hidden";
        return false;
    }
    else
    {
        if(regx_email.test(email))
        {
            (document.getElementsByClassName("valid")[1]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("invalid")[1]as HTMLLabelElement).style.visibility="hidden";
            return true;
        }
        else{
            (document.getElementsByClassName("invalid")[1]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("valid")[1]as HTMLLabelElement).style.visibility="hidden";
            return false;
        }
    }
}


function checkPassword () {
    let newUserPassword = (document.getElementById("newUserPassword")as HTMLInputElement).value;
    let regx_newUserPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(newUserPassword=="")
    {
        (document.getElementsByClassName("invalid")[2]as HTMLLabelElement).style.visibility="visible";
        (document.getElementsByClassName("valid")[2]as HTMLLabelElement).style.visibility="hidden";
        return false;
    }
    else
    {
        if(regx_newUserPassword.test(newUserPassword))
        {
            (document.getElementsByClassName("valid")[2]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("invalid")[2]as HTMLLabelElement).style.visibility="hidden";
            return true;
        }
        else
        {
            (document.getElementsByClassName("invalid")[2]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("valid")[2]as HTMLLabelElement).style.visibility="hidden";
            return false;
        }
    }
}


function checkConfirmPassword (){
    let confirmPassword = (document.getElementById("confirm-password")as HTMLInputElement).value;
    let newUserPassword = (document.getElementById("newUserPassword")as HTMLInputElement).value;
    if(confirmPassword==newUserPassword)
    {
        (document.getElementsByClassName("valid")[3]as HTMLLabelElement).style.visibility="visible";
        (document.getElementsByClassName("invalid")[3]as HTMLLabelElement).style.visibility="hidden";
        return true;
    }
    else
    {
        (document.getElementsByClassName("invalid")[3]as HTMLLabelElement).style.visibility="visible";
        (document.getElementsByClassName("valid")[3]as HTMLLabelElement).style.visibility="hidden";
        return false;
    }
}

function checkPhone  (){
    let newuserPhone = (document.getElementById("newUserPhone")as HTMLInputElement).value;
    let regx_newuserPhone = /^[0-9]{10,10}$/;
    if(newuserPhone=="")
        {
            (document.getElementsByClassName("invalid")[4]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("valid")[4]as HTMLLabelElement).style.visibility="hidden";
            return false;
        }

    else
    {
        if(regx_newuserPhone.test(newuserPhone))
            {
                (document.getElementsByClassName("valid")[4]as HTMLLabelElement).style.visibility="visible";
                (document.getElementsByClassName("invalid")[4]as HTMLLabelElement).style.visibility="hidden";
                return true;
            }
            else
            {
                (document.getElementsByClassName("invalid")[4]as HTMLLabelElement).style.visibility="visible";
                (document.getElementsByClassName("valid")[4]as HTMLLabelElement).style.visibility="hidden";
                return false;
            }
    }
}