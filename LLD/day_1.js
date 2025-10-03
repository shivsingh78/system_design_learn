console.log("listing");
//SOLID principles
//S- single responsibility principle says that a function or a method do only one work.
//O- open close principle says that a method open for change or extension but close for modification from it inherit.
//L- liskov subsituion principle says that parent object colud replace by child object without breaking system.
//I-interface segrigation principle says that No class should be forced to depend on methods it doesn't use.
//D- dependency inversion principle says that high-level modules should not depend on low-level modules. Both should depend on abstractions.

//base class
class LibrayItem {
     constructor(id,title,price) {
          this.id=id;
          this.title=title;
          this.price=price;
          this.isCheckedOut=false
          
     }
     checkOut(){
        if(!this.isCheckedOut) {
            this.isCheckedOut=true;
            console.log(`${this.title} has been checked out.`);
            
        } else {
         console.log(`${this.title} is already checked out.`);
          
        }
     }
     returnItem(){
         if(this.isCheckedOut) {
            this.isCheckedOut=false;
            console.log(`${this.title} has been returned.`);
            
        } else {
         console.log(`${this.title} was not checked out `);
          
        }
     }
     calculateLateFee(daysLate){
          return daysLate*1
     }
     
}
//subclass Book

class Book extends LibrayItem {
     constructor(id,title,price,author) {
          super(id,title,price)
          this.author = author
     }
     calculateLateFee(daysLate) {
          return daysLate * 0.5;
     }
}

//subclass CD

class CD extends LibrayItem{
     constructor(id,title,price,artist){
          super(id,title,price)
          this.artist=artist
     }
     calculateLateFee(daysLate) {
          return daysLate * 1.5;
     }

}
//subclass dvD

class DVD extends LibrayItem{
     constructor(id,title,price,director){
          super(id,title,price)
          this.artist=director
     }
     calculateLateFee(daysLate) {
          return daysLate * 2;
     }

}

//library class 

class Library {
     constructor (){
          this.items =[]
          console.log(this.items);
          
     }
     addItem(item) {
          this.items.push(item)
     }
     totalValue(){
         
          
     return this.items.reduce((sum,item)=>sum+item.price,0)
}
}


//example usage

const library = new Library()

//Add items
const book1 = new Book(1,"Javascript Guide",500,"Jhon Doe")
const cd1 = new CD(2,"Best Hits",200,"Famous artist")
const dvd1 = new DVD(3,"Inception",500,"Christopher Nolan")

library.addItem(book1)
library.addItem(cd1)
library.addItem(dvd1)

book1.checkOut()
cd1.checkOut()
book1.returnItem()
cd1.returnItem()
console.log(book1.calculateLateFee(3));
console.log(cd1.calculateLateFee(3));
console.log(library.items);
console.log("Total value:", library.totalValue());



