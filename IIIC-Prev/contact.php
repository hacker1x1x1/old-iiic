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

	$message = '';
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
			
			$mail->isSMTP();                                    // Set mailer to use SMTP
			$mail->Host = "smtp.gmail.com";  // Specify main and backup SMTP servers
			$mail->SMTPAuth = true;                               // Enable SMTP authentication
			$mail->Username = 'iiic@iiita.ac.in';                 // SMTP username
			$mail->Password = 'ecell@iiic18';                           // SMTP password
			$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 465;                                     // TCP port to connect to

			//Recipients
			$mail->Subject = 'Contact Us query email';
			$mail->setFrom("iiic@iiita.ac.in", $name);
			$mail->addAddress("iiic@iiita.ac.in");  
			// $mail->AddReplyTo($email, $name);   // Add a recipient
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
			$mes = "From: " . $email . "\nName: " . $name . "\n\n" . $message;
			$mail->Body    = $mes;
			
			//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

			$mail->send();
			//echo 'Message has been sent';
			$message = 'Message has been sent';
		}
		catch (Exception $e) {
			$message = 'Message could not be sent. Mailer Error: '. $mail->ErrorInfo;
		}
	}
?>	
	<center><h6 style="color: #f44242;" class="alt-font font-weight-300 letter-spacing-minus-1"><?php echo $message;?></h6></center>
    <section class="wow fadeIn big-section">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-sm-12 col-xs-12 text-center center-col">
					<span class="alt-font text-small text-uppercase">Have an Idea? Want to get Incubated?</span>
					<h2 class="alt-font font-weight-600 letter-spacing-minus-1 text-extra-dark-gray">Contact Us</h2>
					<center>
                    <p style="margin-bottom: 2%;margin-top: 10%; font-size: large">If you need information about the incubation centre, its offerings or if you have any additional requirements, please contact:</p>
                    <p>Dr. Rahul Kala<br>Coordinator, IIIC<br>Email: rkala@iiita.ac.in<br>Ph: +91-7521050744</p>
                </center>
				</div>
			</div>
		</div>
	</section>
	<section class="no-padding one-second-screen sm-height-400px wow fadeIn">
		<div class="mapouter"><div class="gmap_canvas"><a href="https://www.embedgooglemap.net"></a><iframe width="1500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=iiita&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{overflow:hidden;height:500px;width:1500px;}.gmap_canvas {background:none!important;height:500px;width:1500px;}</style></div>
	</section>
	<center><h6 class="alt-font font-weight-300 letter-spacing-minus-1 text-extra-dark-gray">Wanna say something?</h6></center>
	<center><h4 class="alt-font font-weight-400 letter-spacing-minus-1 text-extra-dark-gray">We would love to hear from you</h4></center>
	<section class="wow fadeIn" id="start-your-project">
            <div class="container">
                <form id="project-contact-form" action="./contact.php" method="post" />
                    <div class="row">
                         <div class="col-md-12">
                             <div id="success-project-contact-form" class="no-margin-lr"></div>
                        </div>
                        <div class="col-md-6">
                            <input type="text" name="contact-name" id="name" placeholder="Name *"/>
                        </div>
                        <div class="col-md-6">
                             <input type="text" name="contact-email" id="email" placeholder="E-mail *"/>
                        </div>
                        <div class="col-md-12">
                            <textarea name="contact-message" id="comment" placeholder="Your query, please" rows="6"></textarea>
                        </div>
                        <div class="col-md-12 text-center">
                            <input id="project-contact-us-button" type="submit" class="btn btn-transparent-dark-gray btn-large margin-20px-top"></input>
                        </div>
                    </div>
                </form>
            </div>
        </section>
<?php
include("footer.php");
?>