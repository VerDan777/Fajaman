<?php
  $user_email = $_POST['email'];
  $text_email = $_POST['text'];

  $date = date("l dS F Y h:i:s A");

  $to = "bogdan.yankevich@gmail.com";
  $subject = "Письмо от пользователя с сайта fajaman.ru";
  $message = '<html>
             <head>
               <title>'.$subject.'</title>
             </head>
             <body>
               <p>Почта пользователя: '.$user_email.'</p>
               <p>Сообщение: '.$text_email.'</p>
             </body>
             </html>';

  $headers = "Content-Type: text/html; charset=utf-8\r\n";
  $headers .= "From: fajaman.com\r\n";

  mail($to, $subject, $message, $headers);

  $message_file = fopen("../data/message.txt", "a+");
  fwrite($message_file,"--------------------------------\n\n");
  fwrite($message_file,"($date)\n");
  fwrite($message_file,"Почта пользователя: $user_email\n");
  fwrite($message_file,"Сообщение: $text_email\n");
  fwrite($message_file,"\n");
  fclose($message_file);

  echo 1;
?>
