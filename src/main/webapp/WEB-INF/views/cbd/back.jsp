<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html ng-app="app-back" ng-controller="CbdBackCtrl">

<head>
<title>Administration CBD Vaucluse</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name=viewport content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css"
	href="resources/js/vendor/bootstrap-3.3.5-dist/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="resources/js/vendor/bootstrap-3.3.5-dist/css/bootstrap-theme.min.css" />
<link rel="stylesheet" type="text/css"
	href="resources/js/vendor/angular-ui/ui-bootstrap-csp.css" />
<link rel="stylesheet" type="text/css"
	href="resources/js/vendor/jquery-ui-1.11.4/jquery-ui.min.css" />
<link rel="stylesheet" type="text/css" href="resources/css/screen.css" />
<body role="document" class="bg-admin">

	<!-- Fixed navbar -->
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#"><span>Administration CBD
						Vaucluse</span></a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li ui-sref-active="active"><a ui-sref="actus">Actualit&#233;s</a></li>
					<li ui-sref-active="active"><a ui-sref="calendars">Calendriers</a></li>
					<li ui-sref-active="active"><a ui-sref="events">Evenements</a></li>
					<li ui-sref-active="active"><a ui-sref="results">R&#233;sultats</a></li>
					<li ui-sref-active="active"><a ui-sref="assos">Asso
							sportives</a></li>
					<li ui-sref-active="active"><a ui-sref="contacts">Contacts</a></li>
					<li ui-sref-active="active"><a ui-sref="partners">Partenaires</a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>

	<!-- Main jumbotron for a primary marketing message or call to action -->

	<div class="container">

		<div class="row">
			<div ui-view="main"></div>
			<hr>
			<!-- <footer>
				<span>&copy; r&#233;alisation du site : Romain VERMOREL -
					pour le CBD Vaucluse </span><span><img
					src="resources/images/logo-ffsb.png"></span><span><img
					src="resources/images/logo-cbd84-35.png"></span>
			</footer> -->
		</div>
	</div>
	<!-- /container -->

	<!-- TinyMCE Vendor JavaScript
    ================================================== -->
	<script type="text/javascript"
		src="resources/js/vendor/tinymce-dist/tinymce.js"></script>

	<!-- JQuery Vendor JavaScript
    ================================================== -->
	<script src="resources/js/vendor/jquery-1.11.3/jquery-1.11.3.min.js"></script>
	<script src="resources/js/vendor/jquery-ui-1.11.4/jquery-ui.min.js"></script>


	<!-- Angular Vendor JavaScript
    ================================================== -->
	<script type="text/javascript"
		src="resources/js/vendor/angular-1.4.7/angular${minjs}.js"></script>
	<script type="text/javascript"
		src="resources/js/vendor/angular-1.4.7/angular-animate${minjs}.js"></script>
	<script type="text/javascript"
		src="resources/js/vendor/angular-1.4.7/angular-sanitize${minjs}.js"></script>
	<script type="text/javascript"
		src="resources/js/vendor/angular-1.4.7/angular-resource${minjs}.js"></script>
</head>

<!-- Angular UI  Vendor JavaScript
    ================================================== -->

<script type="text/javascript"
	src="resources/js/vendor/angular-ui/ui-bootstrap-tpls${minjs}.js"></script>
<script type="text/javascript"
	src="resources/js/vendor/angular-ui-router/angular-ui-router${minjs}.js"></script>

<!-- Angular UI TinyMCE Vendor JavaScript
    ================================================== -->

<script type="text/javascript"
	src="resources/js/vendor/angular-ui-tinymce/tinymce.js"></script>


<!-- Angular Custom JavaScript
    ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->

<script type="text/javascript"
	src="resources/js/custom/back/app-back.js"></script>
<script type="text/javascript" src="resources/js/custom/utils.js"></script>
<script type="text/javascript"
	src="resources/js/custom/back/back.controllers.js"></script>
<script type="text/javascript"
	src="resources/js/custom/back/back.config.js"></script>
<script type="text/javascript"
	src="resources/js/custom/back/partners/back.partners.controllers.js"></script>
<script type="text/javascript"
	src="resources/js/custom/back/contacts/back.contacts.controllers.js"></script>
<script type="text/javascript"
	src="resources/js/custom/back/assos/back.assos.controllers.js"></script>
<script type="text/javascript"
	src="resources/js/custom/back/feeds/back.feeds.controllers.js"></script>
<script type="text/javascript"
	src="resources/js/custom/back/results/back.results.controllers.js"></script>
<script type="text/javascript"
	src="resources/js/custom/back/calendars/back.calendars.controllers.js"></script>
	<script type="text/javascript"
	src="resources/js/custom/back/events/back.events.controllers.js"></script>


<!-- Bootstrap core JavaScript
    ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->

<script
	src="resources/js/vendor/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script
	src="resources/js/vendor/bootstrap-3.3.5-dist/js/ie10-viewport-bug-workaround.js"></script>
</body>

</html>
