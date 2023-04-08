<?php

$name = $_POST['name'];
$number = $_POST['number'];
$mail = $_POST['mail'];
$motivo = $_POST['asunto'];
$message = $_POST['message'];

$header = "Content-Type: text/plain";

$message = "Este mensaje fue enviado por " . $name . ",\r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Su numero es: " . $number . " \r\n";
$message .= "Motivo: " . $motivo . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el" . date('d/m/Y', time());

$mailContacto = 'contact@twentydev.com';
$asunto = 'Mensaje enviado desde TwentyDev';

mail($mailContacto, $asunto, utf8_decode($message), $header);

header('Location:exito.html');

?>

