document.write(
'<footer class="bs-footer" role="contentinfo">' +
'  <div class="container">' +
'    <p>Copyright (C) 2013 North Dakota Technical Solutions</p>' +
'  </div>' +
'</footer>'
);

$('a, button.btn-block').click(function() {
	$('body').css('cursor', 'wait');
	var href;
	if ($(this).is('a')) {
		href = $(this).attr('href');
	} else {
		href = $(this).parent().attr('action');
	}
	setInterval(function() {
		window.location = href;
	}, 1500);
	return false;
});
