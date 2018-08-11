<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ========== Meta Tags ========== -->
    <meta charset="UTF-8">
    <meta name="description" content="Evento -Event Html Template">
    <meta name="keywords" content="Evento , Event , Html, Template">
    <meta name="author" content="ColorLib">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!-- ========== Title ========== -->
    <title>IIITA Info Communication Incubation Center</title>
    <!-- ========== Favicon Ico ========== -->
    <!--<link rel="icon" href="fav.ico">-->
    <!-- ========== STYLESHEETS ========== -->
    <!-- Bootstrap CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- Fonts Icon CSS -->
	
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">
    <link href="assets/css/et-line.css" rel="stylesheet">
    <link href="assets/css/ionicons.min.css" rel="stylesheet">
    <!-- Carousel CSS -->
    <link href="assets/css/owl.carousel.min.css" rel="stylesheet">
    <link href="assets/css/owl.theme.default.min.css" rel="stylesheet">
    <!-- Animate CSS -->
    <link rel="stylesheet" href="assets/css/animate.min.css">
    <!-- Custom styles for this template -->
    <link href="assets/css/main.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
</head>

<style media="stylesheet">
  @media (max-width: 767px)
.icon1 {
    max-width: 150px;
}
</style>
<style>
  #team_button:hover{
    background-color: #18181c;
  }
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding-top: 16px;
    font-size: 16px;
    border: none;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #ddd}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>
<body>
<div class="loader">
    <div class="loader-outter"></div>
    <div class="loader-inner"></div>
</div>

<!--header start here -->
<header id="navbar" class="header navbar fixed-top navbar-expand-md" style="background-color:#18181c; padding-top: 15px; padding-bottom:15px;">
    <div class="container" class="head1">
        <a class="navbar-brand logo" href="index.php">
            <img class="icon1" style="padding-top:0px; max-width:270px;" src="assets/img/iiic_white.png" alt="Evento"/>
        </a>
	</div>
	<div style="width:200%" class="container" class="head2">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#headernav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="lnr lnr-text-align-right"></span>
        </button>
        <div class="collapse navbar-collapse flex-sm-row-reverse" id="headernav">
            <ul class=" nav navbar-nav menu">
                <li class="nav-item">
                    <a class="nav-link active" href="index.php">Why IIIC?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="index.php">Our Association</a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link " href="student_team.php">Student Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="faculty_team.php">Faculty Team</a>
                </li> -->

                <li class="nav-item">
                    <a class="nav-link " href="events.php">Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="apply.php">Apply</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="got-a-problem.php">Got A Problem</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="got-a-problem.php">Programs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="product-dev.php">Product Dev</a>
                </li>
				<div class="dropdown">
                <li class="dropdown nav-item"  style="position: relative; top: 10px;">
                    <button class="btn btn-default dropdown-toggle" id="team_button" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      Team
                      <span class="caret"></span>
                    </button>
					<div class="dropdown-content">
					<a href="faculty_team.php">Faculty team</a>
                    <a href="student_team.php">Student team</a>
					</div>
                </li>
				</div>

				        <li class="nav-item">
                    <a class="nav-link " href="contacts.php">Contact Us</a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link " href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">Contact</a>
                </li>
                <li class="search_btn">
                    <a  href="#">
                       <i class="ion-ios-search"></i>
                    </a>
                </li> -->
            </ul>
        </div>
    </div>
</header>
<!--header end here-->
<script>
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
</script>
