<html>
<body>

<?php
// code obtained from w3schools tutorials

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>
// define variables and set to empty values
$nameErr = $emailErr = "";
$name = $email = "";

// validating name
$subscribers = array("Mac", "Jose", "Tai", "Robert");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 if (empty($_POST["name"])) {
   $nameErr = "Name is required";
 } else {
   $name = test_input($_POST["name"]);
   // check if name only contains letters and whitespace
   if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
     $nameErr = "Only letters and white space allowed";
   else if (in_array($name, $subscribers)) {
     echo "Welcome back " . $_POST["name"] . ", You are already subscribed."
   }
 }
}

// validating email
 if (empty($_POST["email"])) {
   $emailErr = "Email is required";
 } else {
   $email = test_input($_POST["email"]);
   // check if e-mail address is well-formed
   if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
     $emailErr = "Invalid email format";
   }
 }
}

?>

</body>
</html>
