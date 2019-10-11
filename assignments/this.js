/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When called in the global scope, the value for "this" end up being console object
* 2. The object preceding the dot before the function called is "this".
* 3. Allow one to make multiple instances of the same constructor function. 
* 4. The act of calling objects explicitly using the .call or .apply methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayMyName(name){
    console.log(this);
    return name;
}
sayMyName("Walter White");

// Principle 2

// code example for Implicit Binding
const Obj = {
    funFact: "I'm a paleontologist",
    tellUs: function (name) {
        console.log(`Hello my name is ${name} and ${this.funFact}`);
        
    }
};
Obj.tellUs('Ross');
// Principle 3

// code example for New Binding
function newGuy (name){
    this.hello = 'Hello ';
    this.newGuy = name;
    this.talk = function(){
        console.log(this.hello + this.newGuy);
        
    };
}
const Quag = new newGuy('Quagmire');
const Peter = new newGuy ('Peter');
Quag.talk();
Peter.talk();
// Principle 4

// code example for Explicit Binding
Quag.talk.call(Peter); 
Peter.talk.apply(Quag);
