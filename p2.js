//Ask the user to enter a 4 digit code. Ask the user to enter the password again. If the passwords are the same print "Password is set." If the passwords are different print "ERROR, Passwords are different."


var pass1 = parseInt(prompt("enter 4 digit code"));
var pass2 = parseInt(prompt("enter 4 digit code"));

if (pass1 === pass2)
{
    console.log("password is set")



}

else console.log("ERROR, Passwords are different.");
