class Singleton {
     constructor() {
          //check if an instance is already exists
          if(Singleton.instance){
               return Singleton.instance //return existing instance
          }

          // if no instance exists , create a new one and stoe it.
          Singleton.instance =this;
          this.value=Math.floor(Math.random()*100) 
     }
     getValue(){
          return this.value
     }
}

const instance1=new Singleton();
console.log("Instance 1 vlaue:",instance1.getValue());
const instance2=new Singleton();
console.log("Instance 2 vlaue:",instance2.getValue()); 
// Verify that both instances are indeed the same
console.log("Are instance1 and instance2 the same?", instance1 === instance2);
