//1
class Bank{
    static bank_Name="Canera Bank"
    set_Data(branch,Account_No,Account_Holder,Account_type,bal,Ifsc){
        this.BranchName=branch
        this.Ac_No=Account_No
        this.Ac_Holder=Account_Holder
        this.Ac_Type=Account_type
        this.Balance=bal
        this.IFSC_code=Ifsc
    }
    BankDetails(){
        console.log("BankName is         : ",Bank.bank_Name);
        console.log("BranchName          : ",this.BranchName);
        console.log("Account Number      : ",this.Ac_No);
        console.log("Account Holder Name : ",this.Ac_Holder);
        console.log("Account Type        : ",this.Ac_Type);
        console.log("Balance             : ",this.Balance);
        console.log("IFSC                : ",this.IFSC_code);
    }
}
let user1=new Bank()
user1.set_Data("Hyderabad",1234567890,"sharukh","saving account",50000,"SBIN0001234")
console.log("---user1 Bank Details------");
user1.BankDetails()

let user2=new Bank()
user2.set_Data("Nalgonda",98654321,"Ravi","Salary account",100000,"HDFC00012345")
Bank.bank_Name="HDFC Bank"
console.log("---user2 Bank Details------");
user2.BankDetails()

let user3=new Bank()
user3.set_Data("Vizag",10101010,"Ram","Business account",500000,"00012345")
Bank.bank_Name="ICICI Bank"
console.log("---user3 Bank Details------");
user3.BankDetails()




// 2
class Hotel{
    static Hotel_Name="Taj Hotel"
    set_Data(location,roomnumber,guestname,roomtype,roomprice,check_in,check_out){
        this.hotel_location=location
        this.Room_Number=roomnumber
        this.GuestName=guestname
        this.Room_Type=roomtype
        this.Room_Price=roomprice
        this.check_in=check_in
        this.check_out=check_out
    }
    HotelDetails(){
        console.log("Hotel Name      : ",Hotel.Hotel_Name);
        console.log("Location        : ",this.hotel_location);
        console.log("RoomNumber      : ",this.Room_Number);
        console.log("GuestName       : ",this.GuestName);
        console.log("RoomType        : ",this.Room_Type);
        console.log("RoomPrice       : ",this.Room_Price);
        console.log("check-in        : ",this.check_in);
        console.log("check-out       : ",this.check_out);
    }
}
let person1=new Hotel()
person1.set_Data("Hyderabad",205,"Naushad","Deluxe","₹5,000","28 September 2026","30 September 2026")
console.log("---person 1 details------");
person1.HotelDetails()

let person2=new Hotel()
person2.set_Data("goa",207,"haiz","luxury","₹6000","29 sep","31 september")
Hotel.Hotel_Name="Taj Banjara"
console.log("---person2 details------");
person2.HotelDetails()

// 3
class ShoppingMall {
    static Mall_Name = "Inorbit Mall"
    set_Data(location, shopnumber, customername, product, price, paymentmode, purchasedate) {
        this.mall_location = location
        this.Shop_Number = shopnumber
        this.CustomerName = customername
        this.Product = product
        this.Price = price
        this.Payment_Mode = paymentmode
        this.Purchase_Date = purchasedate
    }
    MallDetails() {
        console.log("Mall Name       : ", ShoppingMall.Mall_Name);
        console.log("Location        : ", this.mall_location);
        console.log("Shop Number     : ", this.Shop_Number);
        console.log("Customer Name   : ", this.CustomerName);
        console.log("Product         : ", this.Product);
        console.log("Price           : ", this.Price);
        console.log("Payment Mode    : ", this.Payment_Mode);
        console.log("Purchase Date   : ", this.Purchase_Date);
    }
}
let shop1 = new ShoppingMall()
shop1.set_Data("Hyderabad", 205, "sai", "T-Shirt", "₹1,500", "UPI", "28 September 2026")
console.log("---1 Shopping Mall Details------");
shop1.MallDetails()

let shop2 = new ShoppingMall()
shop2.set_Data("Goa", 207, "Haiz", "Shoes", "₹6,000", "Cash", "29 September 2026")
ShoppingMall.Mall_Name = "GVK One Mall"
console.log("---2 Shopping Mall Details------");
shop2.MallDetails()