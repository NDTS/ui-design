document.write(
'<div id="overlay"></div>' +
'<footer class="bs-footer" role="contentinfo">' +
'  <div class="container">' +
'    <p>Copyright (C) 2013 North Dakota Technical Solutions</p>' +
'  </div>' +
'</footer>'
);

$('a, button.btn-block').click(function() {
    $('body').css('cursor', 'wait');
    $("#overlay").fadeIn(250);

    // possible logins
    $logins = {
        "marshall":"mattingly",
        "michael":"hlas",
        "zachary":"maguire",
        "stephen":"miller"
    };

    // links
    if ($(this).is('a')) {
        var href = $(this).attr('href');
        setTimeout(function() {
            $("#overlay").fadeOut(250);
            $('body').css('cursor', 'auto');

            // don't redirect to this very page
            if (href != window.location && href != "#") {
                window.location = href;
            }
        }, 1500);
    }
    // login button
    else if ($(this).html() == "Login") {
        setTimeout(function() {
            $("#overlay").fadeOut(250);
            $('body').css('cursor', 'auto');

            $username = $("#usernameInput").val();
            $password = $("#passwordInput").val();

            // see if everything just works
            if ($username && $password && $logins[$username] && $logins[$username] === $password) {
                window.location = "schedule.html";
            } else {
                // show an error message, if needed
                $("#ucMessage").hide().html('Username or password incorrect. Try again or click the <a href="forgot.html">Forgot your password?</a> link.').removeClass("alert alert-success alert-info alert-warning alert-danger").addClass("alert alert-danger").fadeIn(400);

                // highlight fields that did not have any information
                $usernameParent = $("#usernameInput").parent().parent(".form-group");
                $passwordParent = $("#passwordInput").parent().parent(".form-group");
                $usernameParent.removeClass("has-warning has-error");
                $passwordParent.removeClass("has-warning has-error");
                if (!$username) {
                    $usernameParent.addClass("has-error");
                }
                if (!$password) {
                    $passwordParent.addClass("has-error");
                }
            }
        }, 1500);
    }
    // recovery button
    else if ($(this).html() == "Send Email Recovery") { 
        setTimeout(function() {
            // fade in and get the username
            $("#overlay").fadeOut(250);
            $('body').css('cursor', 'auto');
            $username = $("#usernameInput").val();

            // remove all highlighting and error messages
            $usernameParent = $("#usernameInput").parent().parent(".form-group");
            $usernameParent.removeClass("has-warning has-error");
            $("#ucMessage").hide();
            $("#ucMessage").removeClass("alert alert-success alert-info alert-warning alert-danger").addClass("alert");

            // check success
            if ($username && $logins[$username]) {
                $("#ucMessage").html('An email has been sent to your school and personal address. Please follow the instructions to reset your password.');
                $("#ucMessage").addClass("alert-success").fadeIn(400);
            }
            // show errors 
            else {
                $usernameParent.addClass("has-error");
                $("#ucMessage").html('Username not found. Please call UND Tech Support for further assistance.');
                $("#ucMessage").addClass("alert-danger").fadeIn(400);
            }
        }, 1500);
    }
    // register button
    else if ($(this).html() == "Register") {
		$("#ucMessage").fadeOut(400);
		setTimeout(function() {
			$("#overlay").fadeOut(250);
            $("body").css("cursor", "auto");
			
			$idInput = $("#idInput").val();
			$usernameInput = $("#usernameInput").val();
			$passwordInput = $("#passwordInput").val();
			$confirmPasswordInput = $("#passwordConfirmInput").val();
			$("#ucMessage").removeClass("alert alert-success alert-info alert-warning alert-danger").addClass("alert").hide();
			
			if ($idInput && $usernameInput && $passwordInput && $confirmPasswordInput && $passwordInput === $confirmPasswordInput && !($usernameInput in $logins)) {	
				$("#ucMessage").html("You have claimed your account! An email will be sent to verify your email address").addClass("alert-success");
			} else {
				$idParent = $("#idInput").parent().parent(".form-group");
				$usernameParent = $("#usernameInput").parent().parent(".form-group");
                $passwordParent = $("#passwordInput").parent().parent(".form-group");
				$passwordConfirmParent = $("#passwordConfirmInput").parent().parent(".form-group");
				$idParent.removeClass("has-warning has-error");
				$usernameParent.removeClass("has-warning has-error");
                $passwordParent.removeClass("has-warning has-error");
				$passwordConfirmParent.removeClass("has-warning has-error");
				
				$errors = "";
				if (!$idInput) {
					$errors += ", id number";
					$idParent.addClass("has-error");
				}
				if (!$usernameInput) {
					$errors += ", username";
					$usernameParent.addClass("has-error");
				}
				if (!$passwordInput) {
					$errors += ", password";
					$passwordParent.addClass("has-error");
				}
				if ($errors) {
					$errors = "You must enter your" + $errors;
				}
				if ($usernameInput in $logins) {
					if ($errors) {
						$errors += "<br />";
					}
					$errors += "That username is already taken. Plese select a new username";
				}
				if ($passwordInput !== $confirmPasswordInput) {
					if ($errors) {
						$errors += "<br />";
					}
					$errors += "Your passwords do not match";
					$passwordParent.addClass("has-error");
					$passwordConfirmParent.addClass("has-error");
				}
				$("#ucMessage").html($errors).addClass("alert-danger");
			}
			$("#ucMessage").fadeIn(400);
		}, 1500);
	}
    // all other buttons
    else {
        setTimeout(function() {
            $("#overlay").fadeOut(250);
            $('body').css('cursor', 'auto');
        }, 1500);
    }

    return false;
});
