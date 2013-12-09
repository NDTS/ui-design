document.write(
'<header class="navbar navbar-inverse navbar-fixed-top" role="banner">' +
'  <div class="container">' +
'    <div class="navbar-header">' +
'      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">' +
'        <span class="sr-only">Toggle navigation</span>' +
'        <span class="icon-bar"></span>' +
'        <span class="icon-bar"></span>' +
'        <span class="icon-bar"></span>' +
'      </button>' +
'      <a href="index.html" class="navbar-brand">Campus Connection</a>' +
'    </div>'
);

// see if we want to show the nav on this page
if (typeof $nonav === 'undefined' || !$nonav) {
    document.write(
'    <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">' +
'      <ul class="nav navbar-nav">' +
'        <li><a href="schedule.html">Schedule</a></li>' +
'        <li><a href="manage.html">Manage Classes</a></li>' +
'        <li><a href="finances.html">Finances</a></li>' +
'        <li><a href="transcript.html">Transcript</a></li>' +
'        <li><a href="info.html">Info</a></li>' +
'        <li><a href="index.html">Logout</a></li>' +
'      </ul>' +
'    </nav>'
    );
}

document.write(
'  </div>' +
'</header>'
);
