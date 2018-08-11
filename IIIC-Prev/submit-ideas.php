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
	$is_attach=0;
	if(isset($_FILES['UploadFileField']['name'])) {
             $UploadName = $_FILES['UploadFileField']['name'];
             $UploadTmp = $_FILES['UploadFileField']['tmp_name'];
             $UploadType = $_FILES['UploadFileField']['type'];
             
             $UploadName = preg_replace("#[^a-z0-9.]#i","", $UploadName);
             $is_attach=1;
             if(!$UploadTmp) {
                    die("No File Selected, Please Upload Again");
             }else{
                  $is_attach=1;
				  move_uploaded_file($UploadTmp,"uploads/".$UploadName);
			 }
	}
	if($name!='' && $email!='' && $message!='')
	{
		
		$mail = new PHPMailer(true);                             
		try {
			//Server settings
			
			$mail->isSMTP();                                    // Set mailer to use SMTP
			$mail->Host = 'smtp.smtpserver.com';  // Specify main and backup SMTP servers
			$mail->SMTPAuth = true;                               // Enable SMTP authentication
			$mail->Username = 'iiic@iiita.ac.in';                 // SMTP username
			$mail->Password = 'ecell@iiic18';                           // SMTP password
			$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 587;                                     // TCP port to connect to

			//Recipients
			$mail->Subject = 'Contact Us query email';
			$mail->setFrom("iiic@iiita.ac.in", $name);
			$mail->addAddress("iiic@iiita.ac.in");  
			$mail->AddReplyTo($email, $name);    // Add a recipient
			//$mail->addAddress('ellen@example.com');               // Name is optional
			//$mail->addReplyTo('info@example.com', 'Information');
			//$mail->addCC('cc@example.com');
			//$mail->addBCC('bcc@example.com');

			//Attachments
			if($is_attach==1)
			$mail->addAttachment('uploads/'.$UploadName, $name."_idea.pdf");         // Add attachments
			//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

			//Content
			$mail->isHTML(false);                                  // Set email format to HTML
			$mail->Subject = 'Idea Submission';
			$message = 'From: '.$email.'     '.$message;
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
		
    <div class="padding-100px-all"></div>
		
		<!-- Container -->
		<div class="container">
			<!-- Section Title -->
			<div class="section-title">
				<h3>Submit Idea</h3>
			</div><!-- Section Title /- -->
			
			<!-- Contact Form -->
			<div class="contact-form container-fluid no-padding">
				
				<form class="form-style-3 row" action="submit-ideas.php" method="post" enctype="multipart/form-data">
					<div class="form-group col-md-6">
						<input type="text" name="contact-name" placeholder="Name"  class="form-control" id="input_name" required="">
					</div>
					<div class="form-group col-md-6">
						<input type="email" name="contact-email" placeholder="Email" class="form-control" id="input_email" required="">
					</div>
					<div class="form-group col-md-12">
						<textarea name="contact-message" placeholder="Your Idea" class="form-control" id="textarea_message" rows="4"></textarea>
					</div>
					<div class="form-group col-md-12">
						<input type="file" class="form-control" name="UploadFileField" id="UploadFileField">
					</div>
					<div class="col-md-12">
						<input type="submit" title="Submit">
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
