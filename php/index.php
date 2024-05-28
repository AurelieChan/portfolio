<?php

 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: PUT, GET, POST");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/SMTP.php';

  $name = "";
  $email = "";
  $company = "";
  $message = "";
  $body = "";

  if($_POST) {

    if(isset($_POST['name'])) {
      $name = $_POST['name'];
      $body .= "<div>
          <label><b>Name:</b></label>&nbsp;<span>".$name."</span>
        </div>";
    }

    if(isset($_POST['email'])) {
      $email = filter_var($_POST['email']);
      $body .= "<div>
        <label><b>Email:</b></label>&nbsp;<span>".$email."</span>
      </div>";
    }

    if(isset($_POST['company'])) {
      $company = $_POST['company'];
      $body .= "<div>
        <label><b>Company:</b></label>&nbsp;<span>".$company."</span>
      </div>";
    }

    if(isset($_POST['message'])) {
      $message = nl2br($_POST['message']);
      $body .= "<div>
        <label><b>Message:</b></label>
        </br></br>
        <div>".$message."</div>
      </div>";
    }

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
      //Server settings
      // $mail->SMTPDebug = SMTP::DEBUG_SERVER; //Enable verbose debug output
      $mail->isSMTP();  //Send using SMTP
      $mail->Host       = 'smtp.strato.de';  //Set the SMTP server to send through
      $mail->SMTPAuth   = true;  //Enable SMTP authentication
      $mail->Username   = 'erik@enhc.de';  //SMTP username
      $mail->Password   = 'v5C5^SBzjCm@tr8bY';   //SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;   //Enable implicit TLS encryption
      $mail->SMTPSecure = "ssl";
      $mail->Port       = 465;
      $mail->CharSet    = 'utf-8';


      //Recipients
      $mail->addReplyTo($email, $name);
      $mail->setFrom('erik@enhc.de', "Contact form");
      $mail->addAddress('aurelie_marguerite@yahoo.ca'); //Add a recipient


      //Content
      $mail->isHTML(true);   //Set email format to HTML
      $mail->Subject = "Message from {$name}";
      $mail->Body    = $body;

      $mail->send();
      echo 'Your message has been sent successfully.';
      exit;
    }
    catch (Exception $e) {
      echo 'Your message could not be sent. Please check your e-mail address.';
    }
  }

?>
