 $(document).ready(function() {
    $('#contact-form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'ion-ios-checkmark-empty',
            invalid: 'ion-ios-close-empty',
            validating: 'ion-ios-refresh-empty'
        },
        fields: {
             name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter your name.'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your email.'
                    },
                    emailAddress: {
                        message: 'Please enter a valid email address.'
                    }
                }
            },
						subject: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter your subject.'
                    }
                }
            },
            message: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 1000,
                        message:'Please enter a message with at least 10 and maximum 1000 characters.'
                    },
                    notEmpty: {
                        message: 'Please enter your message.'
                    }
                    }
                }
            }
        })
				
        $('#contact-form').submit(function(e) {
            $('#success_message').slideDown("slow").delay(3000).queue(function(n) {
						$(this).slideUp("slow"); n();
					}); // Do something ...
						
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');
						
            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
						
						$( "[name='name']" ).val("");
						$( "[name='email']" ).val("");
						$( "[name='subject']" ).val("");
						$( "[name='message']" ).val("");
						
						$('#contact-form').bootstrapValidator('resetForm', true);
												
        });
});
