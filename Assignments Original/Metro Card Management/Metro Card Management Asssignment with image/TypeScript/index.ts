
let CurrentUser:UserInfo;

async function addUserAPI(user:UserInfo):Promise<void> {
    const response = await fetch('http://localhost:5072/api/UserInfo' ,
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

async function addTravelAPI(travel:TravelHistory):Promise<void> {
    const response = await fetch('http://localhost:5072/api/TravelHistory' ,
        {
            method:'POST' ,
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(travel)
        });
        if(!response.ok){
            throw new Error('Failed to add user');
        }
        alert("Success");
}

async function updateUser(id: number, user: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5072/api/UserInfo/${id}`, {
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

async function updateTravelHistory(id: number, travel: TravelHistory): Promise<void> {
    const response = await fetch(`http://localhost:5072/api/TravelHistory/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(travel)
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
}

async function fetchUsers(): Promise<UserInfo[]> {
    const apiUrl = 'http://localhost:5072/api/UserInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    return await response.json();
  }

  async function fetchTravelHistory(): Promise<TravelHistory[]> {
    const apiUrl = 'http://localhost:5072/api/TravelHistory';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    return await response.json();
  }

  async function fetchTicket(): Promise<TicketFair[]> {
    const apiUrl = 'http://localhost:5072/api/TicketFair';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    return await response.json();
  }

// async function AddticketAPI(user:UserInfo):Promise<void> {
//     const response = await fetch('http://localhost:5072/api/UserInfo' ,
//         {
//             method:'POST' ,
//             headers:{
//                 'Content-Type' : 'application/json'
//             },
//             body: JSON.stringify(user)
//         });
//         if(!response.ok){
//             throw new Error('Failed to add user');
//         }
//         alert("Success");
//         homePage();
// }

interface UserInfo 
{
    cardNumber :any;
    userName: string;
    userImage : any;
    userPhone: string;
    userEmail: string;
    userPassword : string;
    userBalance : number;

    // constructor(paramuserName:string, paramuserPhone:string, paramEmail:string, paramPassword:string, )
    // {
    //     this.userName  = paramuserName;
    //     this.userPhone = paramuserPhone;
    //     this.cardNumber =(++UserIdAutoIncrement);
    //     this.userEmail = paramEmail;
    //     this.userPassword = paramPassword;
    //     this.userBalance = 100000;
    // }
}

function DeductBalance(amount: number): void {
    CurrentUser.userBalance-=amount;
}

function WalletRecharge(amount: number)
{
    CurrentUser.userBalance+=amount;
}

interface TravelHistory{
    travelID :any;
    cardNumber :number;
    fromLocation :String;
    toLocation :String;
    travelDate :string;
    travelCost :number;
    // constructor(paramcardNumber:string, paramfromLocation: string, paramtoLocation:string, paramtravelDate: Date, paramTravelCost:number)
    // {
    //     this.travelID = "TID" +(++travelIDAutoIncrement);
    //     this.cardNumber = paramcardNumber;
    //     this.fromLocation = paramfromLocation;
    //     this.toLocation = paramtoLocation;
    //     this.travelDate = paramtravelDate;
    //     this.travelCost = paramTravelCost
    // }
}

interface TicketFair{
    ticketID :any;
    fromLocation: string;
    toLocation : string;
    ticketPrice : number;
    // constructor(paramFrom:string, paramTo :string, paramPrice:number)
    // {
    //     this.ticketID = "MR" +(++ticketIDAutoIncremen);
    //     this.fromLocation = paramFrom;
    //     this.toLocation = paramTo;
    //     this.ticketPrice = paramPrice;
    // }
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

function homePage()
{
    let signUp = document.getElementById('signUp') as HTMLDivElement;
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    homepage.style.display="block";
    signUp.style.display="none";
}

function welcomePage()
{
    // const byteArray :Uint8Array = CurrentUser.userImage;
    // const base64String = btoa(String.fromCharCode(...byteArray));
    // const imageUrl = `data:image/jpg;base64,${base64String}`;
    const imgElement = document.getElementById("profilePicture") as HTMLImageElement;
    imgElement.src = "data:image/png;base64," + CurrentUser.userImage;
    

    let greet = document.getElementById("greet") as HTMLDivElement;
    greet.innerHTML= `Welcome ${CurrentUser.userName} `;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    welcomePage.style.display = "block";
    let signInpage = document.getElementById("signIn") as HTMLDivElement;
    signInpage.style.display="none";
}

let newUserPage = ()=>
{
    let homepage = (document.getElementById("homepage")as HTMLDivElement);
    let signUp  = (document.getElementById("signUp")as HTMLDivElement);
    homepage.style.display= "none";
    signUp.style.display= "block";
}

let signUp = () =>
{
    let homepage = (document.getElementById("homepage")as HTMLDivElement);
    let signUp  = (document.getElementById("signUp")as HTMLDivElement);
    homepage.style.display= "block";
    signUp.style.display= "none";
    let name = (document.getElementById("userName") as HTMLInputElement).value;
    let newuserEmail = (document.getElementById('newUserEmail') as HTMLInputElement).value;
    let newuserPassword = (document.getElementById('newUserPassword') as HTMLInputElement).value;
    let newUserConfirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;
    let newuserPhone = (document.getElementById('newUserPhone') as HTMLInputElement).value;
    let newUserProfile = (document.getElementById("newUserProfile")as HTMLInputElement).value;

function handleImageUpload(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        const file = inputElement.files?.[0]; // Get the selected file
    
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const base64String = e.target?.result as string;
                // Now you have the base64-encoded image data
                console.log(base64String);
            };
            reader.readAsDataURL(file);
        }
}

// async function loadImageAsByteArray(url: string): Promise<Uint8Array> {
//     const response = await fetch(url);
//     const buffer = await response.arrayBuffer();
//     return new Uint8Array(buffer);
// }

// // Usage:
// const imageUrl = 'https://example.com/image.png'; // Replace with your image URL
// const imageByteArray = await loadImageAsByteArray(imageUrl);
// console.log(imageByteArray);


    if(checkNewuserName() && checkEmail() && checkPassword() && checkConfirmPassword() && checkPhone())
    {
        // UserList.push(new UserInfo(name.value, newuserPhone, newuserEmail, newuserPassword))
        const user:UserInfo = {
            cardNumber:0,
            userName: name,
            userImage :(newUserProfile),
            userPhone: newuserPhone,
            userEmail: newuserEmail,
            userPassword : newuserPassword,
            userBalance : 0
        };
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

let existingUserPage = () =>
{
    let homepage = (document.getElementById("homepage")as HTMLDivElement);
    let signIn  = (document.getElementById("signIn")as HTMLDivElement);
    homepage.style.display= "none";
    signIn.style.display= "block";
}

let loginIn = async() =>
{
    const userList = await fetchUsers();
    let signIn  = (document.getElementById("signIn")as HTMLDivElement);
    signIn.style.display= "none";
    
    let existingUserMail = (document.getElementById("existing-user-email") as HTMLInputElement).value;
    let existinguserPassword = (document.getElementById("existing-user-password") as HTMLInputElement).value;
    let validUser = false;
    userList.forEach(user => {
        if(user.userEmail == existingUserMail && user.userPassword==existinguserPassword)
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
            homePage();
        }
}

function showBalance()
{
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory = (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="block";
    recharge.style.display="none";
    viewTravelHistory.style.display="none";
    travel.style.display="none";
    exit.style.display="none";
    checkBalance.innerHTML="<br><br>";
    checkBalance.innerHTML+= `Your Balance is ${CurrentUser.userBalance}`;
}

function showRecharge()
{
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory = (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="none";
    recharge.style.display="block";
    viewTravelHistory.style.display="none";
    travel.style.display="none";
    exit.style.display="none";

}

function Recharge()
{
    let rechargeForm = document.getElementById("rechargeForm")as HTMLFormElement;
    let amount = (document.getElementById("amount")as HTMLInputElement).value;
    WalletRecharge(parseInt(amount));
    updateUser(CurrentUser.cardNumber,CurrentUser);
    rechargeForm.reset();
    alert("Amount added");
    showRecharge();
    return false;
}

async function showtravelHistory()
{
    const travelList = await fetchTravelHistory();
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory= (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="none";
    recharge.style.display="none";
    viewTravelHistory.style.display="block";
    travel.style.display="none";
    exit.style.display="none";

    let travelBodyTable = document.getElementById("travelBodyTable")as HTMLDivElement;
    travelBodyTable.innerHTML="";
    travelList.forEach(travel =>
        {
            if(travel.cardNumber == CurrentUser.cardNumber)
            {
                travelBodyTable.innerHTML +=
                `
                <tr>
                    <td class="tabelcell">${travel.travelID}</td>
                    <td class="tabelcell">${travel.cardNumber}</td>
                    <td class="tabelcell">${travel.fromLocation}</td>
                    <td class="tabelcell">${travel.toLocation}</td>
                    <td class="tabelcell">${travel.travelDate.toString().substring(0,10)}</td>
                    <td class="tabelcell">${travel.travelCost}</td>
                </tr>
                `
            }
        });
}

async function showTravel()
{
    const ticketFairList = await fetchTicket();
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory = (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="none";
    recharge.style.display="none";
    viewTravelHistory.style.display="none";
    travel.style.display="block";
    exit.style.display="none";
    let ticketFairTable = (document.getElementById("ticketFairTable")as HTMLDivElement);
    ticketFairTable.innerHTML="";
    ticketFairList.forEach(ticket =>{
        ticketFairTable.innerHTML += 
        `
        <tr>
        <td class="tabelcell">${ticket.ticketID}</td>
        <td class="tabelcell">${ticket.fromLocation}</td>
        <td class="tabelcell">${ticket.toLocation}</td>
        <td class="tabelcell">${ticket.ticketPrice}</td>
        <td class="tabelcell"> <button class="buybutton" onclick="return Travel('${ticket.ticketID}')"> Buy </button>  </td>
        </tr>
        `
    });
}

async function Travel(id:string)
{
    const ticketFairList = await fetchTicket();
    ticketFairList.forEach(ticket =>
        {
           if(ticket.ticketID==id)
            {
                if(CurrentUser.userBalance>=ticket.ticketPrice)
                    {
                        // travelList.push(new TravelHistory(CurrentUser.cardNumber,ticket.fromLocation,ticket.toLocation,new Date(),ticket.ticketPrice));
                        const travel : TravelHistory = {
                            travelID :0,
                            cardNumber :CurrentUser.cardNumber,
                            fromLocation :ticket.fromLocation,
                            toLocation :ticket.toLocation,
                            travelDate :new Date().toISOString().substring(0,10),
                            travelCost :ticket.ticketPrice
                        };
                        DeductBalance(ticket.ticketPrice);
                        alert("Ticket Booked.");
                        addTravelAPI(travel);
                        return false;
                    }
                    else
                    {
                        alert("Insufficinet Balance");
                        return false;
                    }
            } 
            
        });
}

function showExit()
{
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory = (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="none";
    recharge.style.display="none";
    viewTravelHistory.style.display="none";
    travel.style.display="none";
    exit.style.display="block";
}



function logOut()
{
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory = (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="none";
    recharge.style.display="none";
    viewTravelHistory.style.display="none";
    travel.style.display="none";
    exit.style.display="none";
    welcomePage.style.display = "none";
    homepage.style.display="block";
}
//Validating Inputs for new User Registration
let checkNewuserName = () =>{
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


let checkPassword = () =>{
    let newuserPassword = (document.getElementById("newUserPassword")as HTMLInputElement).value;
    let regx_newuserPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(newuserPassword=="")
    {
        (document.getElementsByClassName("invalid")[2]as HTMLLabelElement).style.visibility="visible";
        (document.getElementsByClassName("valid")[2]as HTMLLabelElement).style.visibility="hidden";
        return false;
    }
    else
    {
        if(regx_newuserPassword.test(newuserPassword))
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


let checkConfirmPassword = () =>{
    let confirmPassword = (document.getElementById("confirm-password")as HTMLInputElement).value;
    let newuserPassword = (document.getElementById("newUserPassword")as HTMLInputElement).value;
    if(confirmPassword==newuserPassword)
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

let checkPhone = () =>
{
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