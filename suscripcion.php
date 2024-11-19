<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));

    // Validación básica
    if (!empty($name) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Dirección de correo donde quieres recibir los datos
                $to = "info@csvradio.com.ar, csvradioonline@gmail.com";

        
        // Asunto del correo
        $subject = "Nueva suscripción a la radio";

        // Contenido del correo
        $message = "Has recibido una nueva suscripción:\n\n";
        $message .= "Nombre: " . $name . "\n";
        $message .= "Email: " . $email . "\n";

        // Cabeceras del correo
        $headers = "From: no-reply@csvradio.com.ar" . "\r\n" .
                   "Reply-To: " . $email . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();
                   "MIME-Version: 1.0" . "\r\n";
                   "Content-Type: text/plain; charset=UTF-8" . "\r\n";
                              

        // Enviar correo
        if (mail($to, $subject, $message, $headers)) {
            echo "Gracias por suscribirte. Te contactaremos pronto.";
        } else {
            echo "Error al enviar el formulario. Inténtalo de nuevo más tarde.";
        }
    } else {
        echo "Por favor, ingresa un nombre y un correo electrónico válidos.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
