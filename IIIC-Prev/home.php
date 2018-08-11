<?php
//include("index_dep.php");
include("header.php");
?>

<?php
    require 'vendor/autoload.php';
    $message = '';

    if (isset($_REQUEST['subscribeBtn'])) {
        $email = $_REQUEST['email'];

        if ($email != "") {
            $connection = new mysqli("127.0.0.1", "iiicdba", "iiicdb@2018", "iiicdb");
            // $connection = new mysqli("127.0.0.1", "root", "root", "iiic");

            if ($connection->connect_error) {
                die("Connection failed: " . $connection->connect_error);
            }

            $statement = $connection->prepare("INSERT INTO Subscribers (email) VALUES (?)");
            $statement->bind_param("s", $email);

            if ($statement->execute()) {
                $message = "You have subscribed successfully";
            } else {
                $message = "There was some error";
            }

            $statement->close();
            $connection->close();
        }
    }
?>
		
        <div id="home-revslider" class="homeslider-section-7 container-fluid no-padding ">
		<!-- START REVOLUTION SLIDER 5.0 -->
		<div class="rev_slider_wrapper">
			<div id="home-slider7" class="rev_slider" data-version="5.0">
				<ul> 
					<li data-transition="fade" data-slotamount="1"  data-easein="default" data-easeout="default" data-masterspeed="1500"> 
						<!-- MAIN IMAGE -->
						<img src="img/placeholder1.jpg" alt="home1"  width="1220" height="1032">
						<!-- LAYER NR. 1 -->
						<div class="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0" id="slide-1-layer-1" 
							data-x="['left','left','left','left']" data-hoffset="['360','360','360','360']" 
							data-y="['top','top','top','top']"  data-voffset="['530','530','530','530']" 
							data-fontsize="['32','32','32','32']"
							data-lineheight="['30','30','30','30']"
							data-width="none"
							data-height="none"
							data-whitespace="nowrap"
							data-transform_idle="o:1;"
							data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" 
							data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
							data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
							data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
							data-start="1000" 
							data-splitin="chars" 
							data-splitout="none" 
							data-responsive_offset="on"
							data-elementdelay="0.05"							
							style="z-index:6; position:relative; color:#fff; font-weight:400; letter-spacing:0; font-family: 'Montserrat', sans-serif;">IIITA
						</div>
						<!-- LAYER NR. 2 -->
						<div class="tp-caption NotGeneric-SubTitle tp-resizeme rs-parallaxlevel-0"
							id="slide-1-layer-2" 
							data-x="['left','left','left','left']" data-hoffset="['358','358','358','358']" 
							data-y="['top','top','top','top']" data-voffset="['580','420','420','420']" 
							data-fontsize="['56','56','56','56']"
							data-lineheight="['50','50','50','50']"
							data-width="auto"
							data-height="none"
							data-whitespace="noraml"
							data-transform_idle="o:1;"
							data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
							data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
							data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" 
							data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
							data-start="1500" 
							data-splitin="none" 
							data-splitout="none"							
							data-responsive_offset="on"	
							style="z-index: 6; position:relative; font-family: 'Montserrat', sans-serif; text-transform: uppercase; font-weight: bold; color: #fff; letter-spacing:0;">Info Communication Incubation Center
						</div>
					</li>
					<li data-transition="fade" data-slotamount="1"  data-easein="default" data-easeout="default" data-masterspeed="1500"> 
						<!-- MAIN IMAGE -->
						<img src="img/placeholder3.jpg" alt="home1"  width="1920" height="1032"> 
						
						<!-- LAYER NR. 1 -->
						<div class="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0" id="slide-2-layer-1" 
							data-x="['left','left','left','left']" data-hoffset="['360','360','360','360']" 
							data-y="['top','top','top','top']"  data-voffset="['530','530','530','530']" 
							data-fontsize="['32','32','32','32']"
							data-lineheight="['30','30','30','30']"
							data-width="none"
							data-height="none"
							data-whitespace="nowrap"
							data-transform_idle="o:1;"
							data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" 
							data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
							data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
							data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
							data-start="1000" 
							data-splitin="chars" 
							data-splitout="none" 
							data-responsive_offset="on"
							data-elementdelay="0.05"							
							style="z-index:6; position:relative; color:#fff; font-weight:400; letter-spacing:0; font-family: 'Montserrat', sans-serif; text-transform: lowercase;">Got an Idea?
						</div>

						<!-- LAYER NR. 2 -->
						<div class="tp-caption NotGeneric-SubTitle tp-resizeme rs-parallaxlevel-0"
							id="slide-2-layer-2" 
							data-x="['left','left','left','left']" data-hoffset="['358','358','358','358']" 
							data-y="['top','top','top','top']" data-voffset="['580','420','420','420']" 
							data-fontsize="['56','56','56','56']"
							data-lineheight="['50','50','50','50']"
							data-width="auto"
							data-height="none"
							data-whitespace="noraml"
							data-transform_idle="o:1;"
							data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
							data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
							data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" 
							data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
							data-start="1500" 
							data-splitin="none" 
							data-splitout="none"							
							data-responsive_offset="on"	
							style="z-index: 6; position:relative; font-family: 'Montserrat', sans-serif; text-transform: uppercase; font-weight: bold; color: #fff; letter-spacing:0;">Convert it into a product!
						</div>
					</li>
				</ul> 				
			</div><!-- END REVOLUTION SLIDER -->
		</div><!-- END OF SLIDER WRAPPER -->
	</div><!-- Slider Section -->
		
        
        <!-- start about section --> 
        <section class="wow fadeIn cover-background sm-no-background-img bg-medium-light-gray" style="background-image: url('img/back1.jpg')">
            <div class="container">
            <center><img src="./img/iiic2.png" style="max-width: 40%; margin-bottom: 6%"></center>
                <div class="row"> 
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left wow fadeIn">
					<center><h3>Who we are</h3></center>
					<br>
					<div class="col-lg-12 col-md-12 sm-text-center xs-no-padding-lr last-paragraph-no-margin margin-60px-bottom sm-margin-30px-bottom"> 
						<p class="width-90 sm-width-100">IIITA Info-Communication Incubation Center also known as IIIC is a Business Incubator set up under the aegis of IIIT-Allahabad catalyzed and supported by the Department of **Science and Technology** under the Startup India Project of Govt. of India. IIIC seeks to contribute, both to the advancement of knowledge and the practice of Innovation and Entrepreneurship.</p>
						<p class="width-90 sm-width-100">We are a unique collaboration and education space designed to foster innovation and entrepreneurship across the country. We are committed to growing a  collaborative entrepreneurial network by providing a one-stop support system for start-ups and transforming ourselves as a hub for innovation. We believe that entrepreneurship has an unmatched ability to bring about disruptive change in India and engage with ventures across technology. We support and nurture startup companies by providing services such as incubation, mentoring, networking opportunities, seed funding, office spaces and rapid prototyping.  </p>
					</div>
				
				</div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right wow fadeIn">
                        <center><h3>Our Vision</h3></center>                        
                        <!-- star feature box item -->
                        <div class="col-md-6 col-sm-6 xs-margin-30px-bottom last-paragraph-no-margin xs-no-padding-lr sm-text-center">
                            <i class="fa fa-line-chart" style="font-size:48px;color:blue"></i>
                            <div class="feature-content">
                                <div class="alt-font font-weight-500 text-extra-dark-gray margin-5px-bottom">Attract innovative and promising startups and aspiring entrepreneurs</div>
                            </div> 
                        </div>
                        <!-- end feature box item -->
                        <!-- star feature box item -->
                        <div class="col-md-6 col-sm-6 last-paragraph-no-margin xs-no-padding-lr sm-text-center">
                            <i class="fa fa-building-o" style="font-size:48px;color:blue"></i>
                            <div class="feature-content">
                                <div class="alt-font font-weight-500 text-extra-dark-gray margin-5px-bottom">Equip them with the funding, infrastructure and resources to develop their startup</div>
                                <!--<p class="width-80 md-width-90 sm-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>-->
                            </div> 
                        </div>
                        <!-- end feature box item -->
						<!-- star feature box item -->
                        <div class="col-md-6 col-sm-6 last-paragraph-no-margin xs-no-padding-lr sm-text-center">
                            <i class="fa fa-briefcase" style="font-size:48px;color:blue"></i>
                            <div class="feature-content">
                                <div class="alt-font font-weight-500 text-extra-dark-gray margin-5px-bottom">Provide them with the skills, technology, Legal Advisory and Chartered Accountants, Intellectual Property Rights Experts for their business</div>
                                <!--<p class="width-80 md-width-90 sm-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>-->
                            </div> 
                        </div>
                        <!-- end feature box item -->
						<!-- star feature box item -->
                        <div class="col-md-6 col-sm-6 last-paragraph-no-margin xs-no-padding-lr sm-text-center">
                            <i class="fa fa-credit-card" style="font-size:48px;color:blue"></i>
                            <div class="feature-content">
                                <div class="alt-font font-weight-500 text-extra-dark-gray margin-5px-bottom">Create an extensive network of Partners, Incubators, Angel Investors, Venture Capitalists and Industry Experts for the prospective startups</div>
                                <!--<p class="width-80 md-width-90 sm-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>-->
                            </div> 
                        </div>
                        <!-- end feature box item -->
						<!-- star feature box item -->
                        <div class="col-md-6 col-sm-6 last-paragraph-no-margin xs-no-padding-lr sm-text-center">
                            <i class="fa fa-graduation-cap" style="font-size:48px;color:blue"></i>
                            <div class="feature-content">
                                <div class="alt-font font-weight-500 text-extra-dark-gray margin-5px-bottom">Provide recruitment to the students of the Institute as Interns and Part Time Workers</div>
                                <!--<p class="width-80 md-width-90 sm-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>-->
                            </div> 
                        </div>
                        <!-- end feature box item -->
                    </div> 
                </div>
            </div>
        </section>
        <!-- end about section -->

        <!-- end services section -->

        <!-- end section -->
        <!-- start portfolio section --
        <!-- end portfolio section -->
        <!-- start parallax section -->
		<!--
        <section class="parallax" data-stellar-background-ratio="0.6" style="background-image: url(&quot;images/homepage-9-parallax-img5.jpg&quot;)">
            <div class="opacity-medium bg-extra-dark-gray"></div>
            <div class="container-fluid position-relative">
                <div class="row equalize sm-equalize-auto"> 
                    <div class="col-md-6 col-sm-12 col-xs-12 display-table sm-margin-50px-bottom xs-margin-30px-bottom wow fadeIn">
                        <div class="display-table-cell vertical-align-middle text-center">
                            <img src="./images/homepage-option15-image-3.png" alt="" class="width-100" />
                        </div>
                    </div> 
                    <div class="col-md-6 col-sm-12 col-xs-12 display-table wow fadeIn" data-wow-delay="0.2s">
                        <div class="display-table-cell vertical-align-middle">
                            <div class="width-75 md-width-100 padding-three-lr xs-no-padding-lr xs-no-padding-bottom">
                                <h4 class="alt-font text-white font-weight-500">Unique, truly responsive and functional websites </h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text.</p>
                                <ul class="no-padding list-style-4 margin-30px-bottom list-style-color">
                                    <li>Beautiful and easy to understand UI, professional animations</li>
                                    <li>Theme advantages are pixel perfect design &amp; clear code delivered</li>
                                    <li>Present your services with flexible, convenient and multipurpose</li>
                                    <li>Unlimited power and customization possibilities</li> 
                                </ul>
                                <a href="./about-us-modern.html" class="btn btn-white btn-small text-extra-small border-radius-4 margin-20px-tb sm-no-margin-bottom"><i class="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>GET TO KNOW US</a>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>-->
        <!-- end parallax section -->

        <!-- end section -->
        <!-- start advantage section -->

        <!-- end advantage section -->
        <!-- start video section -->
        <!-- end video section -->
        <!-- start clients slider section
        <section class="wow fadeIn">
            <div class="container text-center">
                <div class="row">    
                    <div class="swiper-slider-clients swiper-container black-move wow fadeIn">
                        <div class="swiper-wrapper">
                            <!-- start slide
                            <div class="swiper-slide text-center"><a href="https://www.envato.com"><img src="./images/logo-1.png" alt="" /></a></div>

                            <div class="swiper-slide text-center"><a href="https://www.woocommerce.com"><img src="./images/logo-2.png" alt="" /></a></div>

                            <div class="swiper-slide text-center"><a href="https://www.wordpress.com"><img src="./images/logo-3.png" alt="" /></a></div>

                            <div class="swiper-slide text-center"><a href="https://www.magento.com"><img src="./images/logo-4.png" alt="" /></a></div>
                            
                            
                            <div class="swiper-slide text-center"><a href="https://www.sass-lang.com"><img src="./images/logo-5.png" alt="" /></a></div>
                            
                            
                            <div class="swiper-slide text-center"><a href="https://www.pingdom.com"><img src="./images/logo-6.png" alt="" /></a></div>
                            
                            
                            <div class="swiper-slide text-center"><a href="https://www.lesscss.org"><img src="./images/logo-7.png" alt="" /></a></div>
                            
                            
                            <div class="swiper-slide text-center"><a href="https://www.jquery.com"><img src="./images/logo-8.png" alt="" /></a></div>
                            
                        </div>
                    </div>
                </div>    
            </div>
        </section>
         end clients slider section -->
        <!-- start latest blog section  -->
        
        <!-- end latest blog section -->
        <div style="background-color: #1e1e1e;">
        <center><h5 class="alt-font text-white font-weight-500" style="padding-top: 5%;">Subscribe to get updates directly to your inbox</h5></center>
        <form id="project-contact-form" action="./index.php" method="post" style="padding-bottom: 1%;"/>
            <center><input type="email" name="email" id="email" placeholder="Enter your Email" class="bg-transparent border-color-medium-dark-gray medium-input" style="width: 40%;"/></center>    
            <center><input id="subscribeBtn" name="subscribeBtn" type="submit" class="btn btn-deep-pink btn-rounded btn-large margin-20px-top xs-no-margin-top"></input></center>
            <center><h6 class="alt-font text-white font-weight-300" style="padding-top: 3%;"><?php echo $message;?></h5></center>
        </form>
        
        </div>
        <!-- start footer -->

<?php
include("footer.php");
?>