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

        div#alert-msg {
            text-align: center;
            color: cadetblue;
            font-size: 1.5em;
        }
	</style>
</head>

<?php
    $message = "";

    if (isset($_REQUEST['recruitedBtn'])) {
        $name = $_REQUEST['contact-name'];
        $phone_no = $_REQUEST['contact-number'];
        $email = $_REQUEST['contact-email'];
        $skills_known = $_REQUEST['skills-known'];
        $resume = $_REQUEST['resume'];

        if ($name != "" && $phone_no != "" && $email != "" && $skills_known != "" && $resume != "") {
            $connection = new mysqli("127.0.0.1", "iiicdba", "iiicdb@2018", "iiicdb");

            if ($connection->connect_error) {
                die("Connection failed: " . $connection->connect_error);
            }

            // mysqli_select_db($connection, "iiic");

            $statement = $connection->prepare("INSERT INTO Recruited (name, email, phone_no, skills_known, 
                                            resume_link) VALUES (?, ?, ?, ?, ?)");
            $statement->bind_param("sssss", $name, $email, $phone_no, $skills_known, $resume);

            if ($statement->execute()) {
                $message = "Submitted your Idea Successfully";
            } else {
                $message = "There was some error";
            }

            $statement->close();
            $connection->close();
        }
    } else if (isset($_REQUEST['recruiterBtn'])) {
        $name = $_REQUEST['contact-name'];
        $phone_no = $_REQUEST['contact-number'];
        $email = $_REQUEST['contact-email'];
        $skills_required = $_REQUEST['skills-required'];
        $company_name = $_REQUEST['company-name'];
        $idea = $_REQUEST['idea'];
        $upload_dir = '/data/iiic';
        $file_name = $_FILES["ideafile"]['name'];

        if ($name != "" && $phone_no != "" && $email != "" && $skills_required != "" && $company_name != "" && $idea != "" && $file_name != "") {
            $connection = new mysqli("127.0.0.1", "iiicdba", "iiicdb@2018", "iiicdb");

            if ($connection->connect_error) {
                die("Connection failed: " . $connection->connect_error);
            }

            $statement = $connection->prepare("INSERT INTO Recruiter (name, email, phone_no, skills_required, 
                                    company_name, idea, idea_file, file_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

            $file_hash = hash_file("sha256", $_FILES["ideafile"]['tmp_name']);
            $hashed_filename = $file_hash;
            $upload_file = $upload_dir . basename($hashed_filename);

            if (move_uploaded_file($_FILES["ideafile"]['tmp_name'], $upload_file)) {
                $statement->bind_param("ssssssss", $name, $email, $phone_no, $skills_required, $company_name, $idea,
                                    $file_name, $upload_file);

                if ($statement->execute()) {
                    $message = "Submitted your Idea Successfully";
                } else {
                    $message = "There was some error";
                }

                $mail = new PHPMailer(true);                             
                try {
                    //Server settings
                    
                    $mail->isSMTP();                                    // Set mailer to use SMTP
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
			        $mail->AddReplyTo($email, $name);   // Add a recipient    // Add a recipient
                    //$mail->addAddress('ellen@example.com');               // Name is optional
                    //$mail->addReplyTo('info@example.com', 'Information');
                    //$mail->addCC('cc@example.com');
                    //$mail->addBCC('bcc@example.com');

                    //Attachments
                    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
                    $mail->addAttachment($_FILES["ideafile"]['tmp_name'], $file_name);    // Optional name

                    //Content
                    $mail->isHTML(false);                                  // Set email format to HTML
                    $mail->Subject = 'Contact Us query email';
                    $message = 'From: '.$email.'     '.$name."\n".$idea;
                    $mail->Body    = $message;
                    
                    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                    $mail->send();
                    //echo 'Message has been sent';
                    echo '<script type="text/javascript">alert("Message has been sent")</script>';
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

<main>
    
    <div class="padding-100"></div>
    <div class="padding-100"></div>
    
    <!-- Container -->
    <div class="container">
        <!-- Section Title -->
        <div class="section-title">
            <h3>Apply</h3>
        </div><!-- Section Title /- -->
        
        <center><div id="alert-msg" class="alert-msg"><?php echo $message; ?></div></center>

        <div class="row">
            <div class="col-md-6">
                <button class="btn btn-primary recruit" type="button" id="recruit-btn">Recruit</button>
            </div>
            <div class="col-md-6">
                <button class="btn btn-primary recruit" type="button" id="be-recruited">Be Recruited</button>
            </div>
        </div>
        <!-- Contact Form -->
        <div class="contact-form container-fluid no-padding" id="apply-form">
        <center><h2 style="margin-bottom: 5%;">RECRUIT</h2></center>
        <form class="form-style-3 row" action="apply.php" method="post" enctype="multipart/form-data">
            <div class="form-group col-md-6" action="apply.php" method="post" enctype="multipart/form-data">
                <input type="text" name="contact-name" placeholder="Name"  class="form-control" id="input_name" required="">
            </div>
            <div class="form-group col-md-6">
                <input type="text" name="company-name" placeholder="Company Name"  class="form-control" id="input_name">
            </div>
            <div class="form-group col-md-6">
                <input type="number" name="contact-number" placeholder="Phone No"  class="form-control" id="input_name" required="">
            </div>
            <div class="form-group col-md-6">
                <input type="email" name="contact-email" placeholder="Email" class="form-control" id="input_email" required="">
            </div>
            <div class="form-group col-md-12">
                <textarea name="idea" placeholder="Your Idea" class="form-control" id="textarea_message" rows="4"></textarea>
            </div>
            <div class="form-group col-md-12">
                <textarea name="skills-required" placeholder="Skills Required" class="form-control" id="textarea_skills" rows="2"></textarea>
            </div>
            <div class="form-group col-md-6">
                <input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
                Upload your idea file in pdf format: <input type="file" name="ideafile" placeholder="Upload your detailed idea" class="form-control" id="ideafile">
            </div>
            <div class="col-md-12">
                <input name="recruiterBtn" id="btn_submit_recruiter" type="submit" title="Contact Us"></input>
            </div>
        </form>
        </div><!-- Contact Form /- -->
    </div><!-- Container /- -->
    <div class="padding-100"></div>
</main>
    
<?php
    include("footer.php");
?>