<?php
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $comments = $_POST['comments'];

    echo 'Nombre: ' . $name . "<br>";
    echo 'Teléfono: ' . $phone . "<br>";
    echo 'Correo: ' . $mail . "<br>";
    echo "Comentarios: <br>--------------------------- <br>" . $comments . "<br>--------------------------- <br>";

    /* Es necesario estar hosteada la página para el envío de mails - Revisión Posterior */

    $header = 'From: ' . $mail . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $mensaje = "Este mensaje fue enviado por " . $name . ",\r\n";
    $mensaje .= "Su e-mail es: " . $mail . " \r\n";
    $mensaje .= "Su telefono es: " . $phone . " \r\n";
    $mensaje .= "Comentarios: <br>--------------------------- <br>" . $comments . "<br>--------------------------- <br>";
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    $para = 'joel.growthy@gmail.com';
    $asunto = 'Mensaje de mi sitio web';

    mail($para, $asunto, utf8_decode($mensaje), $header);

    /*header("Location:index.php");*/
?>