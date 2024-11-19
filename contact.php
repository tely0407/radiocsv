<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validación básica
    if (!empty($name) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($message)) {
        // Dirección de correo donde quieres recibir los datos
        $to = "info@csvradio.com.ar, csvradioonline@gmail.com";

        
        // Asunto del correo
        $subject = "Nuevo mensaje del formulario de contacto";

        // Contenido del correo
        $body = "Has recibido un nuevo mensaje de contacto:\n\n";
        $body .= "Nombre y Apellido: " . $name . "\n";
        $body .= "Email: " . $email . "\n";
        $body .= "Teléfono: " . $phone . "\n";
        $body .= "Mensaje: " . $message . "\n";

        // Cabeceras del correo
        $headers = "From: no-reply@csvradio.com.ar" . "\r\n" .
                   "Reply-To: " . $email . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();
                   "MIME-Version: 1.0" . "\r\n";
                   "Content-Type: text/plain; charset=UTF-8" . "\r\n";


        // Enviar correo
        if (mail($to, $subject, $body, $headers)) {
            echo "<div class='success'>Gracias por tu mensaje. Te contactaremos pronto.</div>";
        } else {
            echo "<div class='error'>Hubo un error al enviar el formulario. Inténtalo de nuevo más tarde.</div>";
        }
    } else {
        echo "<div class='error'>Por favor, completa todos los campos correctamente.</div>";
    }
} else {
    echo "<div class='error'>Método de solicitud no válido.</div>";
}
?>
