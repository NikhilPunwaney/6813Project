var Setup = function () {

  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;

  this.initTeacher = function() {

    this.setupHeaderTeacher();

  }

  this.initParent = function() {

    this.setupHeaderParent();
      
  }

  this.setupHeaderTeacher = function() {

    header = document.getElementById("header");
    header.style.textAlign = "center";
    
    this.addButton(header, "Home", "./teacher_Home.html");
    this.addButton(header, "Newsfeed", "./teacher_Newsfeed.html")
    this.addButton(header, "Forum", "./teacher_Forum.html")
    this.addButton(header, "Inbox", "./teacher_Inbox.html")

  }

  this.setupHeaderParent = function() {

    header = document.getElementById("header");
    header.style.textAlign = "center";
    
    this.addButton(header, "Home", "./parent_Home.html");
    this.addButton(header, "Newsfeed", "./parent_Newsfeed.html")
    this.addButton(header, "Forum", "./parent_Forum.html")
    this.addButton(header, "Inbox", "./parent_Inbox.html")

  }

  this.addButton = function(parentElement, name, link, width) {
    button = document.createElement("button");
    button.innerHTML = name;
    button.style.width = width || "90px";
    button.style.marginTop = "20px";
    button.style.marginLeft = "10px";
    button.style.marginRight = "10px";
    button.style.padding = "10px 10px 10px 10px";
    button.style.borderRadius = "12px";
    button.style.backgroundColor = "white";
    button.style.border = "white";
    button.style.fontFamily = "Quicksand, sans-serif";
    button.onclick = function() {
      dev.visitPage(link);
    };
    parentElement.appendChild(button);
  }

  this.visitPage = function(link){
    window.location = link;
  }
  
}




