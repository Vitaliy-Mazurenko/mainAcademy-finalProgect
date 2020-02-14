<?php /* Здесь проверяется существование переменных */ 


if(isset($_POST['name']) && !empty($_POST['name'])) {$name = $_POST['name'];}
if(isset($_POST['phone']) && !empty($_POST['phone'])) {$phone = $_POST['phone'];}
if(isset($_POST['address']) && !empty($_POST['address'])) {$address = $_POST['address'];}
if(isset($_POST['link']) && !empty($_POST['link'])) {$link = $_POST['link'];}
if(isset($_POST['message']) && !empty($_POST['message'])) {$message = $_POST['message'];}

 /* Сюда впишите свою эл. почту */ 
 $address = "vintelemetrolog@meta.ua";  
 /* А здесь прописывается текст сообщения, \n - перенос строки */ 
 $mes = "$name\n$phone\n$address\n$link\n$message"; 
 /* А эта функция как раз занимается отправкой письма на указанный вами email */
 $sub="Заявка с сайта"; //сабж 
 $domain = $_SERVER['SERVER_NAME'];
 $email="admin@$domain"; // от кого
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email"); 
 ini_set('short_open_tag', 'On'); 
 header('Location: http://texnocity.by/success.html');
?>
