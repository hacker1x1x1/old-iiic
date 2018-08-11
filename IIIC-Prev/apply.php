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
    require 'vendor/autoload.php';
    $message = "";

    if (isset($_REQUEST['recruiterBtn'])) {
        $name = $_REQUEST['contact-name'];
        $phone_no = $_REQUEST['contact-number'];
        $email = $_REQUEST['contact-email'];
        $summary = $_REQUEST['summary'];
        $current_position = $_REQUEST['current-position'];
        $current_nature = $_REQUEST['current-nature'];
        $proposal_for = $_REQUEST['proposal-for'];
        $tide_scheme = $_REQUEST['tide-scheme'];
        
        $upload_dir = '/data/iiic/uploads/';
        // $upload_dir = 'uploads/';
        $file_name = $_FILES["business-plan"]['name'];

        if (empty($_FILES) && empty($_POST)) {
            $message = 'The uploaded zip was too large. You must upload a file smaller than ' . ini_get("upload_max_filesize");
        } else if ($name != "" && $phone_no != "" && $email != "" && $summary != "" && $current_position != "" && $current_nature != "" && $file_name != "") {
            $connection = new mysqli("127.0.0.1", "iiicdba", "iiicdb@2018", "iiicdb");
            // $connection = new mysqli("127.0.0.1", "root", "root", "iiic");

            if ($connection->connect_error) {
                die("Connection failed: " . $connection->connect_error);
            }

            $statement = $connection->prepare("INSERT INTO Recruiter (name, email, phone_no, summary, 
                                    current_position, current_nature, proposal_for, tide_scheme, idea_file, file_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

            $file_hash = hash_file("sha256", $_FILES["business-plan"]['tmp_name']);
            $hashed_filename = $file_hash;
            $upload_file = $upload_dir . basename($hashed_filename);
            // move_uploaded_file($_FILES["business-plan"]['tmp_name'], $upload_file);
            if (move_uploaded_file($_FILES["business-plan"]['tmp_name'], $upload_file)) {
                $statement->bind_param("ssssssssss", $name, $email, $phone_no, $summary, $current_position, $current_nature, $proposal_for, $tide_scheme,
                                    $file_name, $hashed_filename);

                if ($statement->execute()) {
                    $message = "Submitted your current_nature Successfully";
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
                    $mail->Subject = 'Contact Us query email';
                    $mail->setFrom("iiic@iiita.ac.in", $name);
			        $mail->addAddress("iiic@iiita.ac.in");  
			        // $mail->AddReplyTo($email, $name);   // Add a recipient    // Add a recipient
                    //$mail->addAddress('ellen@example.com');               // Name is optional
                    //$mail->addReplyTo('info@example.com', 'Information');
                    //$mail->addCC('cc@example.com');
                    //$mail->addBCC('bcc@example.com');

                    //Attachments
                    $files_to_attach = $_FILES["business-plan"]['tmp_name']; 
                    // $mail->AddAttachment($files_to_attach, $file_name); 
                    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
                       // Optional name

                    //Content
                    $mail->isHTML(false);                                  // Set email format to HTML
                    $mail->Subject = 'Application for Incubation';
                    $mes = 'Name: '.$name.'  Email: '.$email.'  Phone: '.$phone_no.'  Executive Summary: '.$summary.'  Brief of current position: '.$current_position.'  Brief of current nature of the company: '.$current_nature.'  Proposal for: '.$proposal_for.'  Applying for tide scheme: '.$tide_scheme;
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
    <div class="container" style="border: 1px solid black; background: black; margin-bottom: -5%;">
        <center>
            <h6 class="alt-font font-weight-200 letter-spacing-minus-1" style="margin-top: 2%; color: white; font-weight: 300;">
                Fill this form to apply for Business Plan Writing Contest
            </h6>
        </center>
    </div>
    <center><h6 style="margin-top: 9%;" class="alt-font font-weight-300 letter-spacing-minus-1 text-extra-dark-gray">Have an idea?</h6></center>
	<center><h4 class="alt-font font-weight-400 letter-spacing-minus-1 text-extra-dark-gray">Get Incubated</h4></center>
    <span class="separator-line-horrizontal-medium-light2 bg-deep-pink display-table margin-auto width-100px"></span>
    <div class="container" style="margin-top: 3%; margin-bottom: -7%;">
        <center>
        <h6 class="alt-font font-weight-200 letter-spacing-minus-1">IIIC is happy to announce that the current round of recruitments are open.<br>
        The application deadline for applying against the current round of recruitments is 12th March, 2018.<br>
        Screening of applications will take place on 13th March, 2018 and final selections at IIIT Allahabad will be done on 16-18th March, 2018.</h6>
        </center>
    </div>
        <!-- Contact Form -->
        <section class="wow fadeIn" id="start-your-project">
            <div class="container">
                <form id="project-contact-form" action="apply.php" method="post" enctype="multipart/form-data"/>
                    <div class="row">
                         <div class="col-md-12">
                             <div id="success-project-contact-form" class="no-margin-lr"></div>
                        </div>
                        <div class="col-md-6">
                            <input type="text" name="contact-name" id="name" placeholder="Name *"/>
                        </div>
                        <div class="col-md-6">
                             <input type="text" name="contact-number" id="contact-number" placeholder="Phone Number"/>
                        </div>
                        <div class="col-md-12">
                             <input type="text" name="contact-email" id="email" placeholder="E-mail *"/>
                        </div>
                        <div class="col-md-12">
                            <textarea name="summary" id="summary" placeholder="Executive Summary" rows="3"></textarea>
                        </div>
                        <div class="col-md-12">
                            <textarea name="current-position" id="current-position" placeholder="A brief of your current position" rows="4"></textarea>
                        </div>
                        <div class="col-md-12">
                            <textarea name="current-nature" id="current-nature" placeholder="A brief of the current nature of the company seeking incubation" rows="4"></textarea>
                        </div>
                        <div class="col-md-12">
                             <input type="text" name="proposal-for" id="proposal-for" placeholder="Is the proposal as an entry for Business Plan writing contest, seeking incubation at IIIC or both?"/>
                        </div>
                        <div class="col-md-12">
                             <input type="text" name="tide-scheme" id="tide-scheme" placeholder="Whether you would like to apply for seed funding under the TIDE scheme?"/>
                        </div>
                        <a href="http://meity.gov.in/content/technology-incubation-and-development-entrepreneurs" target="_blank" style="color: blue;margin-bottom: 2%;">What is TIDE Scheme?</a>
                        <div class="form-group col-md-6">
                            <input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
                            Upload your business plan in pdf format: <input type="file" name="business-plan" placeholder="Upload your detailed current_nature" class="form-control" id="business-plan">
                        </div>
                        <div class="col-md-12 text-center">
                            <input id="recruiterBtn" name="recruiterBtn" type="submit" class="btn btn-dark-gray btn-large margin-20px-top"></input>
                        </div>
                    </div>
                </form>
                <center>
                    <p style="margin-bottom: 2%;margin-top: 10%; font-size: large">If you need information about the incubation centre, its offerings or if you have any additional requirements, please contact:</p>
                    <p>Dr. Rahul Kala<br>Coordinator, IIIC<br>Email: rkala@iiita.ac.in<br>Ph: +91-7521050744</p>
                </center>
            </div>
        </section>
    
<?php
    include("footer.php");
?>