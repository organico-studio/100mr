<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "ale.lopeziriarte87@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    $subject = "Nuevo mensaje del formulario de contacto";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $body = "Nombre: $name\n";
    $body .= "Teléfono: $phone\n";
    $body .= "Email: $email\n";
    $body .= "Mensaje:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por contactarnos. Tu mensaje ha sido enviado.";
    } else {
        echo "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.";
    }
}
?>