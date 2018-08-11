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
	$message = "";

    if (isset($_REQUEST['submitBtn'])) {
        $name = $_REQUEST['name'];
		$number = $_REQUEST['number'];
        $email = $_REQUEST['email'];
		$require1 = $_REQUEST['require'];
		$plan = $_REQUEST['plan'];
		$pay_type = $_REQUEST['pay_type'];
		$dev_team = $_REQUEST['dev_team'];
        $recruit = $_REQUEST['recruit'];
        
        $upload_dir = '/data/iiic/uploads/';
        // $upload_dir = 'uploads/';
        $file_name = $_FILES["requirements"]['name'];

        if (empty($_FILES) && empty($_POST)) {
            $message = 'The uploaded zip was too large. You must upload a file smaller than ' . ini_get("upload_max_filesize");
        } else if ($name != "" && $email != "" && $number != "" && $require1 != "" && $plan != "" && $pay_type != "" && $dev_team != "" && $recruit != "" ) {
            $connection = new mysqli("127.0.0.1", "iiicdba", "iiicdb@2018", "iiicdb");
            // $connection = new mysqli("127.0.0.1", "root", "root", "iiic");

            if ($connection->connect_error) {
                die("Connection failed: " . $connection->connect_error);
            }

            $statement = $connection->prepare("INSERT INTO ProductDev (name, phone_number, email, requirements, plan, pay_type, dev_team, recruit, requirements_file, file_hash ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

            $file_hash = hash_file("sha256", $_FILES["requirements"]['tmp_name']);
            $hashed_filename = $file_hash;
            $upload_file = $upload_dir . basename($hashed_filename);
            // move_uploaded_file($_FILES["business-plan"]['tmp_name'], $upload_file);
            if (move_uploaded_file($_FILES["requirements"]['tmp_name'], $upload_file)) {
                $statement->bind_param("sssssss", $name, $number, $email, $require1, $plan, $pay_type, $dev_team,
                                    $recruit, $file_name ,$hashed_filename);

                if ($statement->execute()) {
                    $message = "Submitted Successfully";
                } else {
                    $message = "There was some error";
                }

                $mail = new PHPMailer(true);                             
                try {
                    //Server settings
                    
                    $mail->isSMTP();                                    // Set mailer to use SMTP
                    $mail->Host = "smtp.gmail.com";  // Specify main and backup SMTP servers
                    $mail->SMTPAuth = true;                               // Enable SMTP authentication
                    $mail->Username = 'iiic@iiita.ac.in';                 // SMTP username
                    $mail->Password = 'ecell@iiic18';                           // SMTP password
                    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
                    $mail->Port = 465;                                    // TCP port to connect to

                    //Recipients
                    $mail->Subject = 'Product Development email';
                    $mail->setFrom("iiic@iiita.ac.in", $name);
			        $mail->addAddress("iiic@iiita.ac.in");  
			        // $mail->AddReplyTo($email, $name);   // Add a recipient    // Add a recipient
                    //$mail->addAddress('ellen@example.com');               // Name is optional
                    //$mail->addReplyTo('info@example.com', 'Information');
                    //$mail->addCC('cc@example.com');
                    //$mail->addBCC('bcc@example.com');

                    //Attachments
                    $files_to_attach = $_FILES["requirements"]['tmp_name']; 
                    // $mail->AddAttachment($files_to_attach, $file_name); 
                    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
                       // Optional name

                    //Content
                    $mail->isHTML(false);                                  // Set email format to HTML
                    
                    $mes = 'Name: '.$name.' Number: '.$number.'  Email: '.$email.'  Requirements: '.$require1.'  Summary of company status: '.$plan.'  Payment Type: '.$pay_type.'   Development Team: '.$dev_team.' Development Team Recruitment: '.$recruit;
                    $mail->Body = $mes;
                    
                    
                    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                    $mail->send();
                    //echo 'Message has been sent';
                    $message = "Application Submitted Successfully";
                }
                catch (Exception $e) {
                    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
                }
            } else {
                $message = "There was some error. Please try again";
            }
                       
            $statement->close();
            $connection->close();
        }
    }
?>
	<br><br><br><br><br>
    <center><h4 class="alt-font font-weight-400 letter-spacing-minus-1 text-extra-dark-gray" style="margin-top: 3%">Product Development Cell</h4></center>
    <span class="separator-line-horrizontal-medium-light2 bg-deep-pink display-table margin-auto width-100px"></span>
	<center><p style="margin-top: 3%;margin-left: 3%;margin-right: 3%;margin-bottom: -3%; font-size: 1.1em;">If you are currently running a business and have any specific requirements, our team of highly talented faculty and students can develop customized modules, software or the complete product for a small price or equity. </p></center>
	
	<section class="wow fadeIn" id="start-your-project">
		<div class="container">
			<form id="project-contact-form" action="product-develop.php" method="post" enctype="multipart/form-data"/>
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
						<textarea name="require" id="require" placeholder="Summary of requirements" rows="3"></textarea>
					</div>
					<div class="col-md-12">
						<textarea name="plan" id="plan" placeholder="A brief of the current nature of the company" rows="3"></textarea>
					</div>
					<div class="col-md-12">
						<input type="text" name="pay_type" id="pay_type" placeholder="Whether you prefer to pay by equity (preferred), by cash, or by mix?"/>
					</div>
					<div class="col-md-12">
						<input type="text" name="dev_team" id="dev_team" placeholder="Will your provide your own development team with our mentorship, or you would like us to do the development?"/>
					</div>
					<div class="col-md-12">
						<input type="text" name="recruit" id="recruit" placeholder="In case you would like our team to mentor, will you recruit the students/employees yourself, or would you like us to do so?"/>
					</div>
					<div class="form-group col-md-6">
						<input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
						Upload your detailed requirements in PDF format: <input type="file" name="reqirements" placeholder="Upload your reqirements" class="form-control" id="reqirements">
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
