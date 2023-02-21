<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message']

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$name = urlencode($name);
$email = urlencode($email);
$message = urlencode($message);

$name = trim($name);
$email = trim($email);
$message = trim($message);

if (mail("133nay@gmail.com",
     "Pest Reject",
     "Имя: ".$name."\n".
     "Почта: ".$email,
     "Сообщение: ".$message,
     "From: script@mail.ru \r\n")
){
     header("Location: /thank_you.html");
}

else {
     echo ("Error");
}

?>