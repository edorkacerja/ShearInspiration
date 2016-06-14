<?php

  $fullName = $_POST['fullName'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $to = 'edorkacerja@gmail.com';


  mail($to, $subject, $message,  "From: " . $fullName);
  echo "Your message has been sent";
  
  ?>