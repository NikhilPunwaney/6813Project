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
    
    this.addButton("Home", "./teacher_Home.html");
    this.addButton("Newsfeed", "./teacher_Newsfeed.html")
    this.addButton("Forum", "./teacher_Forum.html")
    this.addButton("Inbox", "./teacher_Inbox.html")
    this.addButton("Settings", "./teacher_Settings.html")

  }

  this.setupHeaderParent = function() {

    header = document.getElementById("header");
    header.style.textAlign = "center";
    
    this.addButton("Home", "./parent_Home.html");
    this.addButton("Newsfeed", "./parent_Newsfeed.html")
    this.addButton("Forum", "./parent_Forum.html")
    this.addButton("Inbox", "./parent_Inbox.html")
    this.addButton("Settings", "./parent_Settings.html")

  }

  this.addButton = function(name, link) {
    header = document.getElementById("header");
    button = document.createElement("button");
    button.innerHTML = name;
    button.style.width = "90px";
    button.style.padding = "10px 10px";
    button.style.borderRadius = "12px";
    button.src = link;
    header.appendChild(button);
  }

  
}




