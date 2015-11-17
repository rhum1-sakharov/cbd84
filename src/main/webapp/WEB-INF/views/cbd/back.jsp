<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<html ng-app="app-back" ng-controller="CbdBackCtrl">

<head>
<title>Administration CBD Vaucluse</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css"
	href="static/resources/bootstrap/bootstrap-3.3.5-dist/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="static/resources/bootstrap/bootstrap-3.3.5-dist/css/bootstrap-theme.min.css" />
<link rel="stylesheet" type="text/css"
	href="static/resources/css/screen.css" />


<!-- Angular Vendor JavaScript
    ================================================== -->
<script type="text/javascript"
	src="static/resources/js/angular/vendor/angular-1.4.7/angular.js"></script>
<script type="text/javascript"
	src="static/resources/js/angular/vendor/angular-1.4.7/angular-animate.js"></script>
<script type="text/javascript"
	src="static/resources/js/angular/vendor/angular-1.4.7/angular-sanitize.js"></script>
<script type="text/javascript"
	src="static/resources/js/angular/vendor/angular-1.4.7/angular-resource.js"></script>
</head>

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
					<li ng-class="{active:menu.id === 1}"><a href="#"
						ng-click="selectMenu(1);">Actualit&#233;s</a></li>
					<li ng-class="{active:menu.id === 2}"><a href="#"
						ng-click="selectMenu(2);">Partenaires</a></li>
					<li ng-class="{active:menu.id === 3}"><a href="#"
						ng-click="selectMenu(3);">Contacts</a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>

	<!-- Main jumbotron for a primary marketing message or call to action -->

	<div class="container">	

		<div class="row">
			<div ng-show="isMenuSelected(1)">
				<admin-feeds></admin-feeds>
			</div>

			<hr>

			<footer>
				<span><img src="static/resources/images/logo.png"></span><span>&copy;
					CBD Vaucluse - r&#233;alisation du site - Romain VERMOREL 2015</span>
			</footer>
		</div>
		<!-- /container -->

		<!-- Facebook SDK JavaScript
    ================================================== -->
		<div id="fb-root"></div>
		<script>
			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id))
					return;
				js = d.createElement(s);
				js.id = id;
				js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.5";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		</script>


		<!-- Bootstrap core JavaScript
    ================================================== -->
		<!-- Placed at the end of the document so the pages load faster -->
		<script
			src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script
			src="static/resources/bootstrap/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>

		<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
		<script
			src="static/resources/bootstrap/bootstrap-3.3.5-dist/js/ie10-viewport-bug-workaround.js"></script>

		<!-- Angular Custom JavaScript
    ================================================== -->
		<!-- Placed at the end of the document so the pages load faster -->

		<script type="text/javascript"
			src="static/resources/js/angular/custom/app-back.js"></script>
		<script type="text/javascript"
			src="static/resources/js/angular/custom/utils.js"></script>
		<script type="text/javascript"
			src="static/resources/js/angular/custom/back.js"></script>
</body>

</html>
