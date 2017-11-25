<?php 

$cb_article = $_POST['article'];
$cb_mail = $_POST['user_mail'];
$cb_phone = $_POST['user_tel'];
$cb_user_request = '';

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'al.altukhov@mail.ru';                 // Наш логин
$mail->Password = '123456789';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('al.altukhov@mail.ru', 'Alexey Altukhov');   // От кого письмо 
$mail->addAddress('al.altukhov@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

if ($cb_mail != '') {
	$cb_user_request = 'Пользователь запросил прайс<br>
		Email: ' . $cb_mail . ' <br>';
} elseif ($cb_article != '') {
	$cb_user_request = 'Пользователь запросил цену детали<br>	Артикул детали: ' . $cb_article . ' <br>';
} else {
	$cb_user_request = 'Пользователь попросил перезвонить<br>';
}

$mail->Subject = 'Заявка с сайта Eddies Car';
$mail->Body    = $cb_user_request . 'Телефон: ' . $cb_phone . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>