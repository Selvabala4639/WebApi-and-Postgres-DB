

let selectedMedicine : MedicineInfo;


// let tableBody = document.querySelector("#medicineTable tbody") as HTMLTableSectionElement;
//Lists
// let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();

//User Details Class
interface UserInfo{
    userID :number;
    userName :string;
    userEmail: string;
    userPassword : string;
    userPhone: string;
    userBalance : number;

    // constructor(paramName: string,  paramEmail:string, paramPassword:string, paramPhone:string)
    // {
    //     this.userID ="UID" +(++userIDAutoIncrement);
    //     this.userName =paramName;
    //     this.userEmail = paramEmail;
    //     this.UserPassword = paramPassword;
    //     this.userPhone = paramPhone;
    //     this.userBalance = 10000000;
    // }
}

interface OrderInfo{
    orderID : number;
    medicineID : number;
    userID : number;
    medicineName : string;
    quantity : number;
    orderDate : string;
    totalPrice : number;
    orderStatus : string;
    // constructor(medicineID:string, userID:string, medicineName: string, quantity:number, orderDate:Date, totalPrice:number, orderStatus:string)
    // {
    //     this.orderID = "OID" +(++orderIDAutoIncrement);
    //     this.medicineID = medicineID;
    //     this.userID = userID;
    //     this.medicineName = medicineName;
    //     this.quantity = quantity;
    //     this.orderDate = orderDate;
    //     this.totalPrice = totalPrice;
    //     this.orderStatus = orderStatus;
    // }

}

// let OrderList :OrderInfo [] =[];

let CurrentUser :UserInfo;
// //UserList creation
// let UserList :UserInfo []= [];


interface MedicineInfo{
    medicineID: number;
    medicineName: string;
    medicinePrice: number;
    medicineQuantity: number;
    medicineExpireDate: string;
    // constructor(parammedicineName:string, parammedicinePrice:number, parammedicineQuantity:number,
    //     parammedicineExpireDate:Date)
    // {
    //     medicineIDAutoIncrement++;
    //     this.medicineID = "MD" + medicineIDAutoIncrement;
    //     this.medicineName = parammedicineName;
    //     this.medicinePrice = parammedicinePrice;
    //     this.medicineQuantity = parammedicineQuantity;
    //     this.medicineExpireDate = parammedicineExpireDate;
    // }
}

// UserList.push(new UserInfo("Selva","selva","selva","123"));
// UserList.push(new UserInfo("Avi","avi",'avi',"123"));
//Adding Default data
// MedicineList.push(new MedicineInfo("Paracetomol", 10,50, new Date(2024,5,12)));
// MedicineList.push(new MedicineInfo("Colpal", 25,40, new Date(2024,5,22)));


async function AddUser(user:UserInfo):Promise<void> {
    const response = await fetch('http://localhost:5113/api/UserInfo' ,
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

async function AddMedicineAPI(medicine:MedicineInfo):Promise<void> {
    const response = await fetch('http://localhost:5113/api/MedicineInfo' ,
        {
            method:'POST' ,
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if(!response.ok){
            throw new Error('Failed to add medicine');
        }
        renderMedicineTable();
        alert("Success");
}

async function AddOrderAPI(order:OrderInfo):Promise<void> {
    const response = await fetch('http://localhost:5113/api/OrderInfo' ,
        {
            method:'POST' ,
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(order)
        });
        if(!response.ok){
            throw new Error('Failed to add user');
        }
        alert("Order Added");
}

//Update
async function updateUser(id: number, user: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5113/api/UserInfo/${id}`, {
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

async function updateMedicine(id: number, medicine: MedicineInfo): Promise<void> {
    const response = await fetch(`http://localhost:5113/api/MedicineInfo/${id}`, {
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
}

async function updateOrder(id: number, order: OrderInfo): Promise<void> {
    const response = await fetch(`http://localhost:5113/api/OrderInfo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
}
//Update ends

//delete
async function deleteUser(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5113/api/UserInfo/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete contact');
    }
    //renderContacts();
  }

  async function deleteMedicineAPI(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5113/api/MedicineInfo/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete medicine');
    }
    //renderContacts();
    renderMedicineTable();
  }

  async function deleteOrder(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5113/api/OrderInfo/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete contact');
    }
    //renderContacts();
  }

//Delete Ends

//Fetch

async function fetchUsers(): Promise<UserInfo[]> {
    const apiUrl = 'http://localhost:5113/api/UserInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    return await response.json();
  }

async function fetchMedicines(): Promise<MedicineInfo[]> {
    const apiUrl = 'http://localhost:5113/api/MedicineInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    return await response.json();
  }

  async function fetchOrders(): Promise<OrderInfo[]> {
    const apiUrl = 'http://localhost:5113/api/OrderInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    return await response.json();
  }
//Fetch ends

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
    console.log(name);
    if(checkNewuserName() && checkEmail() && checkPassword() && checkConfirmPassword() && checkPhone())
    {
        // UserList.push(new UserInfo(name.value, newuserEmail, newUserPassword, newuserPhone))
        const user : UserInfo = {
            userID :0,
            userName :name,
            userEmail: newuserEmail,
            userPassword : newUserPassword,
            userPhone: newuserPhone,
            userBalance : 0
        }
        alert("Registration Successful");
        AddUser(user);
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
        if(user.userEmail == existingUserMail && user.userPassword==existingUserPassword)
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

function welcomePage()
{
    let greet = document.getElementById("greet") as HTMLDivElement;
     greet.innerHTML= `Welcome ${CurrentUser.userName}`;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    welcomePage.style.display = "block";
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
    signinpage.style.display="none";
}

function homePage()
{
    let signup = document.getElementById('signup') as HTMLDivElement;
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    homepage.style.display="block";
    signup.style.display="none";
}

//Show Medicine List

async function renderMedicineTable(){
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    medicineDetails.style.display="block";
    purchase.style.display = "none";
    orderHistory.style.display="none";
    cancel.style.display="none";
    topUp.style.display="none";
    showBalance.style.display="none";


     let medicineDetailsTable = document.getElementById('medicineDetailsTable') as HTMLDivElement;
     let tableHTML="<table border='1' class='travelTable'> ";
     tableHTML += "<tr><th>Medicine Name</th><th>Price</th><th>quantity</th><th>Expiry date</th><th>Action</th></tr>";

    const medicines = await fetchMedicines();
    medicines.forEach(medicine =>
        {
            tableHTML += `<tr><td>${medicine.medicineName}</td>
            <td>${medicine.medicinePrice}</td>
            <td>${medicine.medicineQuantity}</td>
            <td>${medicine.medicineExpireDate.toString().substring(0,10)}</td>
            <td><button onclick = "return showEditMedicine(${medicine.medicineID})"> Edit </button> 
            <button onclick="return deleteMedicine('${medicine.medicineID}')"> Delete </button> </td>
            </tr>`;
        }
    );
    tableHTML += "</table>";
    medicineDetailsTable.innerHTML = tableHTML;
    
}

function ShowAddMedicineForm()
{
    let addMedicine = document.getElementById("addMedicine") as HTMLDivElement;
    addMedicine.style.display ="block";
}

 function AddMedicine() 
{
    let addMedicine = document.getElementById("addMedicine") as HTMLDivElement;

    let addMedicineName = (document.getElementById("addMedicineName")as HTMLInputElement).value;
    let addPrice = (document.getElementById("addPrice")as HTMLInputElement).value;
    let addQuantity = (document.getElementById("addQuantity")as HTMLInputElement).value;
    let addExpiryDate = (document.getElementById("addExpiryDate")as HTMLInputElement).value;

    // MedicineList.push(new MedicineInfo(addmedicineName, parseInt(addPrice), parseInt(addquantity), new Date(addExpiryDate)))
    let addMedicineForm = document.getElementById("addMedicineForm") as HTMLFormElement;
    
    addMedicine.style.display ="none";
    
    const medicine:MedicineInfo = {
        medicineID: 0,
        medicineName: addMedicineName,
        medicinePrice: parseInt(addPrice),
        medicineQuantity: parseInt(addQuantity),
        medicineExpireDate: addExpiryDate.toString()
    };
    addMedicineForm.reset();
    AddMedicineAPI(medicine);
    return false;
}


async function showEditMedicine (id:number){
    let addMedicine = document.getElementById("addMedicine") as HTMLDivElement;
    addMedicine.style.display ="none";
    const medicines = await fetchMedicines();

    medicines.forEach(medicine =>{
        if(medicine.medicineID == id)
            {
                let editMedicine = document.getElementById("editMedicine")as HTMLDivElement;
                editMedicine.style.display="block";
                
                editMedicine.innerHTML += `<button onclick="return EditMedincine('${medicine.medicineID}')">Submit</button>`
                let editmedicineName = document.getElementById("editMedicineName")as HTMLInputElement;
                let editPrice = document.getElementById("editPrice")as HTMLInputElement;
                let editquantity = document.getElementById("editQuantity")as HTMLInputElement;
                let editExpiryDate = document.getElementById("editExpiryDate")as HTMLInputElement;

                // medicine.medicineName = editmedicineName.value;
                // medicine.medicinePrice = parseInt(editPrice.value);
                // medicine.medicineQuantity = parseInt(editquantity.value);
                // medicine.medicineExpireDate = new Date(editExpiryDate.value);
                // renderMedicineTable();
                editmedicineName.value = medicine.medicineName;
                (editPrice.value) =  medicine.medicinePrice.toString();
                editquantity.value = medicine.medicineQuantity.toString();
                editExpiryDate.value = medicine.medicineExpireDate.toString();
                
                return false;
            }
    });
}

async function EditMedincine (id:number)
{
    let editmedicineName = document.getElementById("editMedicineName")as HTMLInputElement;
    let editPrice = document.getElementById("editPrice")as HTMLInputElement;
    let editquantity = document.getElementById("editQuantity")as HTMLInputElement;
    let editExpiryDate = document.getElementById("editExpiryDate")as HTMLInputElement;
    const medicineList = await fetchMedicines();

    medicineList.forEach(medicine =>{
        if(medicine.medicineID == id)
            {
                medicine.medicineName = editmedicineName.value;
                medicine.medicinePrice = parseInt(editPrice.value);
                medicine.medicineQuantity = parseInt(editquantity.value);
                medicine.medicineExpireDate = (editExpiryDate.value).substring(0,10);
                updateMedicine(id,medicine);
            }
            
    });
    let editMedicineForm = document.getElementById("editMedicineForm")as HTMLFormElement;
    editMedicineForm.reset();
    renderMedicineTable();
    return false;
}

async function deleteMedicine (id:number) 
    {
        const medicinList = await fetchMedicines();

        medicinList.forEach(medicine =>{
            if(id == medicine.medicineID)
                {
                    deleteMedicineAPI(medicine.medicineID)
                    return false;
                }
        });
        
    }

//Purchase Function
async function purchase()
{
    const medicineList = await fetchMedicines();
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    purchase.style.display = "block";
    medicineDetails.style.display="none";
    orderHistory.style.display="none";
    cancel.style.display="none";
    topUp.style.display="none";
    showBalance.style.display="none";

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


    let buyTable = (document.getElementById("buyTable") as HTMLDivElement);
    let buyTableBody = "<table border='1' class='travelTable'>";
    buyTableBody += "<tr> <th> Medicine Name </th> <th> Price </th> <th> Medicine quantity </th> <th> Expire Date </th><th>Option</td> </tr>";

    medicineList.forEach((medicine) => {
        if(new Date(medicine.medicineExpireDate)  > new Date())
            {
                buyTableBody +=`
                <tr><td>${medicine.medicineName}</td>
                <td>${medicine.medicinePrice}</td>
                <td>${medicine.medicineQuantity}</td>
                <td>${medicine.medicineExpireDate.toString().substring(0,10)}</td>
                <td><button onclick="ShowbuyMedicine('${medicine.medicineID}')">Buy</button>
                </tr>
                `;
            }
    });
    buyTableBody += "</table>";
    buyTable.innerHTML = buyTableBody;
}

async function ShowbuyMedicine (id:number)  {
    const medicineList = await fetchMedicines();
    let confirmOrder = (document.getElementById("confirmOrder") as HTMLDivElement);
    confirmOrder.style.display="block";

    medicineList.forEach(medicine => {
        if(medicine.medicineID==id)
            {
                selectedMedicine = medicine;
            }
    });
    let selectedmedicineName = (document.getElementById("selectedMedicineName")as HTMLHeadElement);
    selectedmedicineName.innerHTML=`You Selected ${selectedMedicine.medicineName}`;
}

function buyMedicine()
{
    let confirmOrder = (document.getElementById("confirmOrder") as HTMLFormElement);
    confirmOrder.style.display="block"
    let buyquantity = (document.getElementById("quantity") as HTMLInputElement).value;

    if(parseInt(buyquantity)<=0)
    {
        alert("Please enter quantity greater than  0");
        purchase();
        return false;
    }
    else
    {
        if((selectedMedicine.medicineQuantity) < parseInt(buyquantity))
            {
                alert("Out of Stock");
            }
        else
        {
            let totalPrice = parseInt(buyquantity) * selectedMedicine.medicinePrice;
            if(totalPrice > CurrentUser.userBalance)
                {
                    alert("Insufficient Balance");
                }
            else
            {
                selectedMedicine.medicineQuantity -= parseInt(buyquantity);
                CurrentUser.userBalance -= totalPrice;
                
                const order:OrderInfo ={
                    orderID : 0,
                    medicineID : selectedMedicine.medicineID,
                    userID : CurrentUser.userID,
                    medicineName : selectedMedicine.medicineName,
                    quantity : parseInt(buyquantity),
                    orderDate : new Date().toISOString().substring(0,10),
                    totalPrice : selectedMedicine.medicinePrice,
                    orderStatus : "Ordered"
                }
                AddOrderAPI(order);
                updateMedicine(selectedMedicine.medicineID,selectedMedicine);
                updateUser(CurrentUser.userID,CurrentUser);
                
                purchase();
            }
        }
        confirmOrder.reset();
        return false;
    }
    
}


async function orderHistory()
{
    const orderList = await fetchOrders();
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    orderHistory.style.display="block";
    purchase.style.display = "none";
    medicineDetails.style.display="none";
    cancel.style.display="none";
    topUp.style.display="none";
    showBalance.style.display="none";

    let orderTable = document.getElementById("orderTable") as HTMLDivElement;
    orderTable.innerHTML ="";

    orderList.forEach(order => {
        orderTable.innerHTML += `   
        <tr>
            <td>${order.medicineName}</td>
            <td>${order.quantity}</td>
            <td>${order.orderDate.toString().substring(0,10)}</td>
            <td>${order.orderStatus}</td>
        </tr>
        `;
    });
}
async function Showcancel()
{
    const orderList = await fetchOrders();
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    cancel.style.display="block";
    purchase.style.display = "none";
    medicineDetails.style.display="none";
    orderHistory.style.display="none";
    topUp.style.display="none";
    showBalance.style.display="none";

    let orderDetails = document.getElementById("cancelTable") as HTMLTableElement;
    orderDetails.innerHTML ="";
    
    orderList.forEach(order =>
        {
            if (order.userID == CurrentUser.userID && order.orderStatus == "Ordered")
                {
                    orderDetails.innerHTML += `
                    <tr>
                    <td> ${order.medicineName + order.orderID}</td>
                    <td> ${order.quantity}</td>
                    <td> ${order.orderDate.toString().substring(0,10)}</td>
                    <td> ${order.orderStatus}</td>
                    <td> <button onclick = "return cancelOrder(${order.orderID})">Cancel </button> </td>
                    </tr>
                    `
                }
        }
    );
}


async function cancelOrder  (id:number) {
    const orderList = await fetchOrders();
    const medicineList = await fetchMedicines();
    
    orderList.forEach(async order =>
        {
            if(order.orderID == id)
                {
                    order.orderStatus = "Cancelled";
                    await updateOrder(order.orderID, order);
                    CurrentUser.userBalance += order.totalPrice;
                    await updateUser(CurrentUser.userID,CurrentUser);
                    medicineList.forEach(medicine =>
                        {
                            if(medicine.medicineID==order.medicineID)
                                {
                                    medicine.medicineQuantity += order.quantity;
                                    updateMedicine(medicine.medicineID,medicine);
                                    alert("Successfully Cancelled");
                                    Showcancel();
                                }
                        }
                    )
                }
        }
    );
    Showcancel();
}


function topUp()
{
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUpOption = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    topUpOption.style.display="block";
    purchase.style.display = "none";
    medicineDetails.style.display="none";
    orderHistory.style.display="none";
    cancel.style.display="none";
    showBalance.style.display="none";
    
}

async function Recharge  () {
    let amount = (document.getElementById("amount")as HTMLInputElement);
    if(parseInt(amount.value)<=0)
    {
        alert("Recharge amount should be greater than 0");
        topUp();
    }
    else
    {
        CurrentUser.userBalance+=parseInt(amount.value);
        await updateUser(CurrentUser.userID, CurrentUser);
        alert("Amount added.");
        amount.value="";
        topUp();   
    }
}

function showBalance()
{
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    showBalance.style.display="block";
    purchase.style.display = "none";
    medicineDetails.style.display="none";
    orderHistory.style.display="none";
    cancel.style.display="none";
    topUp.style.display="none";
    
    // showBalance.innerHTML =`<h2>Available Balance : ${CurrentUser.userBalance} </h2>
    // ` ;
    let currentBalance = (document.getElementById("currentBalance")as HTMLHeadElement);
     currentBalance.innerHTML = `Available Balance: ${CurrentUser.userBalance}`;
}

function logOut()
{
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    welcomePage.style.display = "none";
    homepage.style.display="block";
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    showBalance.style.display="none";
    purchase.style.display = "none";
    medicineDetails.style.display="none";
    orderHistory.style.display="none";
    cancel.style.display="none";
    topUp.style.display="none";
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
    
    let signup = document.getElementById('signup') as HTMLDivElement;

    signinpage.style.display="none";
    signup.style.display="none";
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