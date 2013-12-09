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
	if ($(this).is('a')) {
		var href = $(this).attr('href');
	    setTimeout(function() {
		    window.location = href;
	    }, 1500);
    } else if ($(this).html() == "Login") {
        setTimeout(function() {
            $("#overlay").fadeOut(250);
            $('body').css('cursor', 'auto');
            $logins = {
                'marshall':'mattingly',
                'michael':'hlas',
                'zachary':'maguire',
                'stephen':'miller'
            };

            $username = $("#usernameInput").val();
            $password = $("#passwordInput").val();

            // see if everything just works
            if ($username && $password && $logins[$username] && $logins[$username] === $password) {
                window.location = "schedule.html";
            } else {
                // show an error message, if needed
                $("#ucMessage").html('Username or password incorrect. Try again or click the <a href="forgot.html">Forgot your password?</a> link.');
                if ($("#ucMessage").is(":visible")) {
                    $("#ucMessage").hide();
                }
                $("#ucMessage").removeClass("alert alert-success alert-info alert-warning alert-danger").addClass("alert alert-danger").fadeIn(400);

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

	return false;
});
