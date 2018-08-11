<?php

include("header.php");

?>
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
<main>

<!--contact section -->
<section class="pt100 pb100">
    <div class="container">
		<center><img src="assets/img/contact-us-1194643_1280.png"" height="300" width="600"></center>	
        <!--<img src="assets/img/logo-dark.png" alt="evento">-->
        <div class="row justify-content-center mt100">
            <div class="col-md-6 col-12">
                <div class="contact_info">
                    <h5>
                       We would love to hear from you
                    </h5>
                    <p>
					If you need information about the incubation centre, its offerings or if you have any additional requirements, please contact: </br><h6>Dr. Rahul Kala</h6></p>
                    

                    <ul class="icon_list pt50">
                        <li>
                            <i class="ion-location"></i>
                            <span>
                                        Indian Institute of Information Technology Allahabad</br>
IIIT Rd, Near Boys Hostel, Devghat, Jhalwa,</br> Allahabad, Uttar Pradesh 211015
                            </span>
                        </li>
                        <li>
                            <i class="ion-ios-telephone"></i>
                            <span>
                                       +91-7521050744
                                </span>
                        </li>
                        <li>
                            <i class="ion-email-unread"></i>
                            <span>
                                    rkala@iiita.ac.in
                                </span>
                        </li>

                        <li>
                            <i class="ion-planet"></i>
                            <span>
                                    www.iiic.iiita.ac.in
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="contact_form">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="email">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="subject">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" cols="4" rows="4" placeholder="message"></textarea>
                    </div>
                    <div class="form-group text-right">
                        <button class="btn btn-rounded btn-primary">send message</button>
                    </div>
                </div>
            </div>
            <div class="col-12 mt70">
                <div class="col-lg-12 mb-4">
				  <!-- Embedded Google Map -->
				  <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMczzKq3MmjkRdVL_JWxLjvY&key=AIzaSyDCGQnldzsNTO7HzZo-B2W_9tMgbBGqaVo"></iframe>
				</div>
            </div>
        </div>

    </div>
</section>
<!--contact section end -->


</main>
<?php

include("footer.php");

?>