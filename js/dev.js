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
    button.style.fontWeight = "bold";
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

  this.addNewsFeed = function(date, title, desc) {
    localStorage.setItem("edit", "off");
    var elem = document.getElementById('feed');

    var header1 = document.createElement("H1");       
    var t1 = document.createTextNode(date);  
    header1.style.fontSize = "12pt";
    header1.style.marginTop = "30px";
    header1.style.color = "white";
    header1.style.fontWeight = "bold";
    header1.style.fontFamily =  "'Quicksand', sans-serif";
    header1.appendChild(t1); 


    var header2 = document.createElement("H1");       
    var t2 = document.createTextNode(title);
    header2.style.fontSize = "24pt";
    header2.style.marginTop = "10px";
    header2.style.color = "black";
    header2.style.fontFamily =  "'Gloria Hallelujah', sans-serif";       
    header2.appendChild(t2); 


    var para = document.createElement("P"); 
    var t3 = document.createTextNode(desc);   
    para.style.fontSize = "12pt";
    para.style.marginTop = "10px";
    para.style.color = "white";
    para.style.fontFamily =  "'Quicksand', sans-serif";  
    para.align = "left";
    para.appendChild(t3);

    var line = document.createElement("P"); 
    var t4 = document.createTextNode("---------");   
    line.style.fontSize = "12pt";
    line.style.marginTop = "10px";
    line.style.color = "white";
    line.style.fontFamily =  "'Quicksand', sans-serif"; 
    line.id = "line" ;     
    line.appendChild(t4);

    var btn2 = document.createElement("BUTTON");
    var t2 = document.createTextNode("edit"); 
    btn2.appendChild(t2); 
    btn2.style.width = "90px";
    btn2.style.marginTop = "20px";
    btn2.style.marginLeft = "10px";
    btn2.style.marginRight = "10px";
    btn2.style.padding = "10px 10px 10px 10px";
    btn2.style.borderRadius = "12px";
    btn2.style.backgroundColor = "white";
    btn2.style.border = "white";
    btn2.style.fontFamily = "Quicksand, sans-serif"; 

    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("delete"); 
    btn.appendChild(t);  
    btn.style.width = "90px";
    btn.style.marginTop = "20px";
    btn.style.marginLeft = "10px";
    btn.style.marginRight = "10px";
    btn.style.padding = "10px 10px 10px 10px";
    btn.style.borderRadius = "12px";
    btn.style.backgroundColor = "white";
    btn.style.border = "white";
    btn.style.fontFamily = "Quicksand, sans-serif"; 

    var space = document.createElement("P"); 


    elem.insertBefore(space, elem.firstChild);
    elem.insertBefore(btn, elem.firstChild);
    elem.insertBefore(btn2, elem.firstChild);
    elem.insertBefore(line, elem.firstChild);
    elem.insertBefore(para, elem.firstChild);
    elem.insertBefore(header2, elem.firstChild);
    elem.insertBefore(header1, elem.firstChild);

    btn.onclick = function() {
        if(confirm("Are you sure you want to delete your post?")){
            elem.removeChild(space);
            elem.removeChild(btn);
            elem.removeChild(btn2);
            elem.removeChild(line);
            elem.removeChild(para);
            elem.removeChild(header2);
            elem.removeChild(header1);
        }

    }; 

        btn2.onclick = function() {
        

            if (typeof(Storage) !== "undefined") {
                 // Code for localStorage/sessionStorage.
                localStorage.setItem("edit", "on");
                 localStorage.setItem("date", date);
                 localStorage.setItem("title", title);
                 localStorage.setItem("description", desc);
                 console.log(typeof(Storage));
            } else {
                 // Sorry! No Web Storage support..
                 console.log("undefined");
                }
           // dev.visitPage("./teacher_Newpost.html");
            window.location = "./teacher_Newpost.html";
             elem.removeChild(space);
            elem.removeChild(btn);
            elem.removeChild(btn2);
            elem.removeChild(line);
            elem.removeChild(para);
            elem.removeChild(header2);
            elem.removeChild(header1);
    };
  }
  
}




