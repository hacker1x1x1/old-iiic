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
	require 'vendor/autoload.php';
    $message = "";

    if (isset($_REQUEST['submitBtn'])) {
        $name = $_REQUEST['name'];
        $idea = $_REQUEST['idea'];
        $email = $_REQUEST['email'];
        $current_status = $_REQUEST['current-status'];
        $skills = $_REQUEST['skills'];
        $requirements = $_REQUEST['requirements'];
        
        $upload_dir = '/data/iiic/uploads/';
        // $upload_dir = 'uploads/';
        $file_name = $_FILES["document"]['name'];

        if (empty($_FILES) && empty($_POST)) {
            $message = 'The uploaded zip was too large. You must upload a file smaller than ' . ini_get("upload_max_filesize");
        } else if ($name != "" && $idea != "" && $email != "" && $current_status != "" && $skills != "" && $requirements != "") {
            $connection = new mysqli("127.0.0.1", "iiicdba", "iiicdb@2018", "iiicdb");
            // $connection = new mysqli("127.0.0.1", "root", "root", "iiic");

            if ($connection->connect_error) {
                die("Connection failed: " . $connection->connect_error);
            }

            $statement = $connection->prepare("INSERT INTO Help (name, email, idea, current_status, skills, requirements, document) VALUES (?, ?, ?, ?, ?, ?, ?)");

            $file_hash = hash_file("sha256", $_FILES["document"]['tmp_name']);
            $hashed_filename = $file_hash;
            $upload_file = $upload_dir . basename($hashed_filename);
            // move_uploaded_file($_FILES["business-plan"]['tmp_name'], $upload_file);
            if (move_uploaded_file($_FILES["document"]['tmp_name'], $upload_file)) {
                $statement->bind_param("sssssss", $name, $email, $idea, $current_status, $skills, $requirements,
                                    $hashed_filename);

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
                    $mail->Subject = 'Got problem email';
                    $mail->setFrom("iiic@iiita.ac.in", $name);
			        $mail->addAddress("iiic@iiita.ac.in");  
			        // $mail->AddReplyTo($email, $name);   // Add a recipient    // Add a recipient
                    //$mail->addAddress('ellen@example.com');               // Name is optional
                    //$mail->addReplyTo('info@example.com', 'Information');
                    //$mail->addCC('cc@example.com');
                    //$mail->addBCC('bcc@example.com');

                    //Attachments
                    $files_to_attach = $_FILES["document"]['tmp_name']; 
                    // $mail->AddAttachment($files_to_attach, $file_name); 
                    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
                       // Optional name

                    //Content
                    $mail->isHTML(false);                                  // Set email format to HTML
                    
                    $mes = 'Name: '.$name.'  Email: '.$email.'  Idea: '.$idea.'  Current Status: '.$current_status.'  Skills: '.$skills.'   Requirements: '.$requirements;
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
	<center><h6 style="margin-top: 9%; color: #f44242;" class="alt-font font-weight-300 letter-spacing-minus-1"><?php echo $message;?></h6></center>
	<center><h4 class="alt-font font-weight-400 letter-spacing-minus-1 text-extra-dark-gray">Got a Problem?</h4></center>
    <span class="separator-line-horrizontal-medium-light2 bg-deep-pink display-table margin-auto width-100px"></span>
	<div class="container">
	<center><p style="margin-top: 3%">Have a fantastic idea but do not know the next steps? Have the zeal to change the world but cannot sharpen up the idea? Have wonderful skills but lack teammates? </p></center>
	<center><p>While applying for incubation is a combursome process, IIIC helps young minds to frame an idea, improve upon the idea, network with  other young minds to create cross-skill teams, and to finally develop the business plan.</p></center>
	<center><p>If you have the slightest of inclination, we are happy to help. Please give us as much details as possible, and we will get back to you for help.</p></center>
	</div>
	<section class="wow fadeIn" id="start-your-project">
		<div class="container">
			<form id="project-contact-form" action="got-problem.php" method="post" enctype="multipart/form-data"/>
				<div class="row">
						<div class="col-md-12">
							<div id="success-project-contact-form" class="no-margin-lr"></div>
					</div>
					<div class="col-md-6">
						<input type="text" name="name" id="name" placeholder="Name *"/>
					</div>
					<div class="col-md-6">
							<input type="text" name="email" id="email" placeholder="E-mail *"/>
					</div>
					<div class="col-md-12">
						<textarea name="idea" id="idea" placeholder="Idea" rows="3"></textarea>
					</div>
					<div class="col-md-12">
						<textarea name="current-status" id="current-status" placeholder="Current Status" rows="3"></textarea>
					</div>
					<div class="col-md-12">
						<textarea name="skills" id="skills" placeholder="Skills" rows="2"></textarea>
					</div>
					<div class="col-md-12">
						<textarea name="requirements" id="requirements" placeholder="What are your requirements?" rows="3"></textarea>
					</div>
					<div class="form-group col-md-6">
						<input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
						Upload a document: <input type="file" name="document" placeholder="Upload your document" class="form-control" id="document">
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
