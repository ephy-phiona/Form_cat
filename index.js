function myFunction() {
    document.getElementById("container").placeholder = "";
    document.getElementById("subject").placeholder = "";
    document.getElementById("cdate").placeholder = "";
  }

  const call = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(call, 1000);


var hopperLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
hopperLab.func();

  

    