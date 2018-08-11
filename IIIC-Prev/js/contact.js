		$('#contact-form').validate({
			rules: {
				newsletter_email: {
					required: true,
					email: true
				}
			},
			messages: {
				newsletter_email: {
					required: 'Email address is required',
					email: 'Email address is not valid'
				}
			},
			errorElement: 'span',
			errorPlacement: function(error, element){
				error.appendTo(element.parent());
			},
			submitHandler: function(form){
				if ( $('#newsletter_extra').val() == '' ) {
					$(form).hide();
					$('#newsletter-response').html('<span class="bounce1"></span><span class="bounce2"></span><span class="bounce3"></span>').show().animate({ opacity: 1 });
					$.post($(form).attr('action'), $(form).serialize(), function(data){
						// if(data['success'] == true){
						
						// 	$('#newsletter-response').html('<p>Thank you for subscribing!</p>');
						// }
						// else{
						// 	$('#newsletter-response').html('<p>Some error occured try again or contact us.</p>');	
						// }
						$('#newsletter-response').html(data);
					});
				}
				return false;
			}
		});