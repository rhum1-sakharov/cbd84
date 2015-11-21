<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<html ng-app="app-front" ng-controller="FrontCtrl">

<head>
<title>CBD Vaucluse</title>
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

<body role="document">

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
				<a class="navbar-brand" href="#" ng-click="selectMenu(1);"><span><img
						src="static/resources/images/logo-ffsb.png"></span><span><img
						src="static/resources/images/logo-cbd84-35.png"></span><span>CBD
						Vaucluse</span></a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li ng-class="{active:menu.id === 1}"><a href="#"
						ng-click="selectMenu(1);">Actualit&#233;s</a></li>
					<li ng-class="{active:menu.id === 2}"><a href="#"
						ng-click="selectMenu(2);">Calendrier 2015/2016</a></li>
					<li ng-class="{active:menu.id === 3}"><a href="#"
						ng-click="selectMenu(3);">R&#233;sultats</a></li>
					<li ng-class="{active:menu.id === 4}"><a href="#"
						ng-click="selectMenu(4);">Asso sportives</a></li>
					<li ng-class="{active:menu.id === 5}"><a href="#"
						ng-click="selectMenu(5);">Contacts</a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>

	<!-- Main jumbotron for a primary marketing message or call to action -->

	<div class="container">

		<!--  <div class="row">			
				<div class="container">					
					<span><img src="static/resources/images/logo-cbd84.png"></span>
					<span><img src="static/resources/images/avignon-04.jpg"></span>
					</p>
				</div>			
		</div>  -->

		<!-- Example row of columns -->
		<div class="row">
			<div class="col-md-8">
				<div ng-show="isMenuSelected(1)">
					<news></news>
				</div>
				<div ng-show="isMenuSelected(2)">
					<calendar></calendar>
				</div>
				<div ng-show="isMenuSelected(3)">
					<contacts></contacts>
				</div>

			</div>
		
			<div class="col-md-4">
				<partners></partners>				
			</div>
		</div>

		<hr>

		<footer>
			
			<span>&copy; r&#233;alisation du site : Romain VERMOREL - pour
				le CBD Vaucluse </span><span><img src="static/resources/images/logo-ffsb.png"></span><span><img
				src="static/resources/images/logo-cbd84-35.png"></span>
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
		src="static/resources/js/jquery/vendor/jquery-1.11.3/jquery-1.11.3.min.js"></script>
	<script
		src="static/resources/bootstrap/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>

	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script
		src="static/resources/bootstrap/bootstrap-3.3.5-dist/js/ie10-viewport-bug-workaround.js"></script>

	<!-- Angular Custom JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->

	<script type="text/javascript"
		src="static/resources/js/angular/custom/app-front.js"></script>
	<script type="text/javascript"
		src="static/resources/js/angular/custom/utils.js"></script>
	<script type="text/javascript"
		src="static/resources/js/angular/custom/front.controllers.js"></script>
		<script type="text/javascript"
		src="static/resources/js/angular/custom/front.directives.js"></script>

</body>

</html>
