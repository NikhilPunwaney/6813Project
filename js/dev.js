var Setup = function () {

  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;

  this.initTeacher = function() {

    this.setupHeaderTeacher();
    document.body.style.backgroundColor = "#82C5E5"

  }

  this.initParent = function() {

    this.setupHeaderParent();
    document.body.style.backgroundColor = "#82C5E5"
      
  }

  this.setupHeaderTeacher = function() {

    header = document.getElementById("header");
    header.style.textAlign = "center";
    
    this.addButton(header, "Newsfeed", "./teacher_Newsfeed.html");
    this.addButton(header, "Forum", "./teacher_Forum.html");
    this.addButton(header, "Messages", "./teacher_prelim_inbox.html");
    this.addButton(header, "Profile", "./teacher_Home.html");

    document.getElementById(document.title).style.backgroundColor = "black";
    document.getElementById(document.title).style.color = "white";

  }

  this.setupHeaderParent = function() {

    header = document.getElementById("header");
    header.style.textAlign = "center";
    
    this.addButton(header, "Newsfeed", "./parent_Newsfeed.html");
    this.addButton(header, "Forum", "./parent_Forum.html");
    this.addButton(header, "Messages", "./parent_Inbox.html");
    this.addButton(header, "Profile", "./parent_Home.html");

    document.getElementById(document.title).style.backgroundColor = "black";
    document.getElementById(document.title).style.color = "white";

  }

  this.addButton = function(parentElement, name, link, width) {
    button = document.createElement("button");
    button.innerHTML = name;
    button.id = name;
    button.style.width = width || "80px";
    button.style.marginTop = "20px";
    button.style.marginLeft = "4px";
    button.style.marginRight = "4px";
    button.style.padding = "10px 5px 10px 5px";
    button.style.borderRadius = "12px";
    button.style.backgroundColor = "white";
    button.style.border = "white";
    button.style.fontFamily = "Quicksand, sans-serif";
    button.style.fontSize = "14px";
    button.onclick = function() {
      dev.visitPage(link);
    };
    parentElement.appendChild(button);
  }

  this.addSpecialButton = function(parentElement, name, link, link2, width) {
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
      dev.visitPages(link, link2);
    };
    parentElement.appendChild(button);
  }

  this.visitPage = function(link){
    window.location = link;
  }

  this.visitPages = function(link1, link2){
    if (document.getElementById("username").value === "teacher") {
      window.location = link1;
    } 
    if (document.getElementById("username").value === "parent") {
      window.location = link2;
    } 
  }

  this.addMessage = function(side, backgroundColor, textColor, text) {
    chatbox = document.getElementById("chatbox");
    outsideBox = document.createElement("div");
    outsideBox.style.width = "100%"
    outsideBox.align = side;
    messageBox = document.createElement("div");
    messageBox.style.textAlign = side;
    messageBox.style.margin = "10px 10px 10px 10px"
    messageBox.style.padding = "10px 10px 10px 10px"
    messageBox.style.width = "300px";
    messageBox.style.backgroundColor = backgroundColor;
    messageBox.style.fontSize = "10pt";
    messageBox.style.color = textColor;
    messageBox.innerHTML = text;
    outsideBox.appendChild(messageBox);
    chatbox.appendChild(outsideBox);
    chatbox.style.height = "100%";
  }

  this.addLogoutButton = function(parentElement, name, link, width) {
    button = document.createElement("button");
    button.innerHTML = name;
    button.id = name;
    button.style.width = width || "80px";
    button.style.marginTop = "20px";
    button.style.marginLeft = "4px";
    button.style.marginRight = "4px";
    button.style.padding = "10px 5px 10px 5px";
    button.style.borderRadius = "12px";
    button.style.backgroundColor = "white";
    button.style.border = "white";
    button.style.fontFamily = "Quicksand, sans-serif";
    button.style.fontSize = "14px";
    button.onclick = function() {
      dev.confirmLogout(link);
    };
    parentElement.appendChild(button);
  }

  this.confirmLogout = function(link) {
    if (confirm("Are you sure you want to logout?") == true) {
        dev.visitPage(link);
    } 
  }
  
}




