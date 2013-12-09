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
    $logins = {
        'marshall':'mattingly',
        'michael':'hlas',
        'zachary':'maguire',
        'stephen':'miller'
    };

    // linnks
    if ($(this).is('a')) {
        var href = $(this).attr('href');
        setTimeout(function() {
            window.location = href;
        }, 1500);
    }
    // Login button
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
    // recovery button
    else if ($(this).html() == "Send Email Recovery") { 
        setTimeout(function() {
            // fade in and get the username
            $("#overlay").fadeOut(250);
            $username = $("#usernameInput").val();

            // remove all highlighting and error messages
            $usernameParent = $("#usernameInput").parent().parent(".form-group");
            $usernameParent.removeClass("has-warning has-error");
            if ($("#ucMessage").is(":visible")) {
                $("#ucMessage").hide();
            }
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

    return false;
});
