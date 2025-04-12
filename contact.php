<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Make sure PHPMailer is installed

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address!");
    }

    // Setup PHPMailer
    $mail = new PHPMailer(true);
    try {
        // SMTP Settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'jostam54@gmail@gmail.com'; // Your Gmail
        $mail->Password = 'Olumuyiwa'; // App password from Google
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email Content
        $mail->setFrom('jostam54@gmail.com', 'omotosho ayomide'; 
        $mail->addAddress('jostam54@gmail.com'); // Your recipient email

        $mail->Subject = "New Contact Form Message";
        $mail->Body = "Name: $name\nEmail: $email\nMessage:\n$message";

        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "Failed to send message: {$mail->ErrorInfo}";
    }
}
?>
