<?php
include("header.php");

?>
<head>
	<style>
		input[type=submit] {
			padding:5px 15px; 
			background:#09c; 
			border:0 none;
			cursor:pointer;
			-webkit-border-radius: 5px;
			border-radius: 5px; 
			width:100%;
			padding-top:10px;
			padding-bottom:10px;
		}
	</style>
</head>
<?php
	
	//Load composer's autoloader
	require 'vendor/autoload.php';
	$name='';
	if(isset($_REQUEST['contact-name']))
	{
			$name=$_REQUEST['contact-name'];
	}
	$email='';
	if(isset($_REQUEST['contact-email']))
	{
			$email=$_REQUEST['contact-email'];
	}
	$message='';
	if(isset($_REQUEST['contact-message']))
	{
			$message=$_REQUEST['contact-message'];
	}
	if($name!='' && $email!='' && $message!='')
	{
		
		$mail = new PHPMailer(true);                             
		try {
			//Server settings
			
			$mail->isSMTP();                                      // Set mailer to use SMTP
			$mail->Host = 'smtp.smtpserver.com';  // Specify main and backup SMTP servers
			$mail->SMTPAuth = true;                               // Enable SMTP authentication
			$mail->Username = 'iiic@iiita.ac.in';                 // SMTP username
			$mail->Password = 'ecell@iiic18';                           // SMTP password
			$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 587;                                    // TCP port to connect to

			//Recipients
			$mail->Subject = 'Contact Us query email';
			$mail->setFrom("iiic@iiita.ac.in", $name);
			$mail->addAddress("iit2016060@iiita.ac.in");  
			$mail->AddReplyTo($email, $name);   // Add a recipient
			//$mail->addAddress('ellen@example.com');               // Name is optional
			//$mail->addReplyTo('info@example.com', 'Information');
			//$mail->addCC('cc@example.com');
			//$mail->addBCC('bcc@example.com');

			//Attachments
			//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
			//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

			//Content
			$mail->isHTML(false);                                  // Set email format to HTML
			$mail->Subject = 'Contact Us query email';
			$message = "From: " . $email . "\nName: " . $name . "\n\n" . $message;
			$mail->Body    = $message;
			
			//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

			$mail->send();
			//echo 'Message has been sent';
			echo '<script type="text/javascript">alert("Message has been sent")</script>';
		}
		catch (Exception $e) {
			echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
		}
	}
?>
<main>
<div class="padding-40"></div>
		<div class="padding-40"></div>
		<div class="padding-40"></div>
		<div class="padding-40"></div>
		<div class="padding-40"></div>
		<div class="padding-40"></div>
		<div class="padding-40"></div>
		
		<!-- Container -->
		<div class="container">
			<!-- Section Title -->
			<div class="section-title">
				<h3>Contact</h3>
			</div><!-- Section Title /- -->
			<div class="map map-layout4">
				<!-- Map Column -->
				<div class="col-lg-12 mb-4">
				  <!-- Embedded Google Map -->
				  <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMczzKq3MmjkRdVL_JWxLjvY&key=AIzaSyDCGQnldzsNTO7HzZo-B2W_9tMgbBGqaVo"></iframe>
				</div>
			</div>
			<div class="padding-50"></div>
			<!-- Contact Form -->
			<div class="contact-form container-fluid no-padding">
				<div class="block-title">
					<h5>Get in touch</h5>
				</div>
				<form class="form-style-3 row" action="contact.php"  method="POST">
					<div class="form-group col-md-6">
						<input type="text" name="contact-name" placeholder="Name"  class="form-control" id="input_name" required="">
					</div>
					<div class="form-group col-md-6">
						<input type="email" name="contact-email" placeholder="Email" class="form-control" id="input_email" required="">
					</div>
					<div class="form-group col-md-12">
						<textarea name="contact-message" placeholder="Message" class="form-control" id="textarea_message" rows="4"></textarea>
					</div>
					<div class="col-md-12">
						<input type="submit" title="Contact Us">
					</div>
					<div id="alert-msg" class="alert-msg"></div>
				</form>
			</div><!-- Contact Form /- -->
		</div><!-- Container /- -->
		<div class="padding-100"></div>
	</main>
    
<?php
include("footer.php");
?>