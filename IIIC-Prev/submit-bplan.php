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
	if(isset($_REQUEST['name']))
	{
			$name=$_REQUEST['name'];
	}
	$email='';
	if(isset($_REQUEST['email']))
	{
			$email=$_REQUEST['email'];
	}
	$message='';
	if(isset($_REQUEST['number']))
	{
			$message=$_REQUEST['number'];
	}
	$plan='';
	if(isset($_REQUEST['plan']))
	{
			$message=$_REQUEST['plan'];
	}
	$is_attach=0;
	if(isset($_FILES['business-plan']['name'])) {
             $UploadName = $_FILES['business-plan']['name'];
             $UploadTmp = $_FILES['business-plan']['tmp_name'];
             $UploadType = $_FILES['business-plan']['type'];
             
            //  $UploadName = preg_replace("#[^a-z0-9.]#i","", $UploadName);
             $is_attach=1;
            //  if(!$UploadTmp) {
            //         die("No File Selected, Please Upload Again");
            //  }else{
            //       $is_attach=1;
			// 	  move_uploaded_file($UploadTmp,"uploads/".$UploadName);
			//  }
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
			$mail->Subject = 'B-plan Submission';
			$mail->setFrom("iiic@iiita.ac.in", $name);
			$mail->addAddress("iiic@iiita.ac.in");  
			$mail->AddReplyTo($email, $name);    // Add a recipient
			//$mail->addAddress('ellen@example.com');               // Name is optional
			//$mail->addReplyTo('info@example.com', 'Information');
			//$mail->addCC('cc@example.com');
			//$mail->addBCC('bcc@example.com');

			//Attachments
			if($is_attach==1)
			// $mail->addAttachment($UploadTmp, $name."_b_plan.pdf");         // Add attachments
			//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

			//Content
			$mail->isHTML(false);                                  // Set email format to HTML
			$mail->Subject = 'B-plan Submission';
			$message = 'From: '.$email.'\n'.$message;
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
	<center><h6 style="margin-top: 9%;" class="alt-font font-weight-300 letter-spacing-minus-1 text-extra-dark-gray">Have a business plan? Not sure if it's viable?</h6></center>
	<center><h4 class="alt-font font-weight-400 letter-spacing-minus-1 text-extra-dark-gray">Get it Reviewed</h4></center>
    <span class="separator-line-horrizontal-medium-light2 bg-deep-pink display-table margin-auto width-100px"></span>
	<center><p style="margin-top: 3%">Our experts will help you in hand crafting a Business Plan that is right for you and offer suggestions.</p></center>
	<section class="wow fadeIn" id="start-your-project">
		<div class="container">
			<form id="project-contact-form" action="submit-blan.php" method="post" enctype="multipart/form-data"/>
				<div class="row">
						<div class="col-md-12">
							<div id="success-project-contact-form" class="no-margin-lr"></div>
					</div>
					<div class="col-md-6">
						<input type="text" name="name" id="name" placeholder="Name *"/>
					</div>
					<div class="col-md-6">
							<input type="text" name="number" id="contact-number" placeholder="Phone Number"/>
					</div>
					<div class="col-md-12">
							<input type="text" name="email" id="email" placeholder="E-mail *"/>
					</div>
					<div class="col-md-12">
						<textarea name="plan" id="plan" placeholder="Overview of your Business Plan" rows="3"></textarea>
					</div>
					<div class="form-group col-md-6">
						<input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
						Upload your business plan in pdf format: <input type="file" name="business-plan" placeholder="Upload your B-plan" class="form-control" id="business-plan">
					</div>
					<div class="col-md-12 text-center">
						<input id="submitBtn" name="submitBtn" type="submit" class="btn btn-dark-gray btn-large margin-20px-top"></input>
					</div>
				</div>
			</form>
		</div>
	</section>
<?php
include("footer.php");
?>
