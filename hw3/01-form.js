function form_enter() {
    // I could use getElementsByName or getElementsByClassname 
    // but both would be a poor way of doing this, 
    // because then I'd have to either assume 
    // only one exists on the page (and thus grab the first one) 
    // or pick an arbitray index into the resulting array 
   // (supposing there are mutliple elements by that class name
    let username = document.getElementById("username").value;
    let stat = document.getElementById("reg_status").value;
    let cs410 = document.getElementById("cs410").value;
    let cs510 = document.getElementById("cs510").value;
    let sec = (cs410 == "") ? "cs510" : "cs410";
    let classes_taken = Array.from(document.getElementsByClassName("classes_taken")).filter(element => element.checked == true ).map(item => item.value ); 
    console.group("form input data"); 
    let email = document.getElementById("email").value;
    console.log("username: " + username);
    console.log("email: " + email);
    console.log("registration status: " + stat);
    console.log("section: " + sec);
    console.log("classes taken: " + classes_taken); 
}

console.log('Enter your code here');
