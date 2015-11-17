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
				<a class="navbar-brand" href="#"><span>CBD Vaucluse</span></a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li ng-class="{active:menu.id === 1}"><a href="#"
						ng-click="selectMenu(1);">Accueil</a></li>
					<li ng-class="{active:menu.id === 2}"><a href="#"
						ng-click="selectMenu(2);">Calendrier 2015/2016</a></li>
					<li ng-class="{active:menu.id === 3}"><a href="#"
						ng-click="selectMenu(3);">Contact</a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>

	<!-- Main jumbotron for a primary marketing message or call to action -->

	<div class="container">

		<!-- <div class="row">
			<div class="jumbotron">
				<div class="container">
					<h1>Hello, world!</h1>
					<p>This is a template for a simple marketing or informational
						website. It includes a large callout called a jumbotron and three
						supporting pieces of content. Use it as a starting point to create
						something more unique.</p>
					<p>
						<a class="btn btn-primary btn-lg" href="#" role="button">Learn
							more &raquo;</a>
					</p>
				</div>
			</div>
		</div> -->

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
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">Partenaires</h3>
					</div>
					<div class="panel-body">
						<div>
							<a
								href="http://www.ffsb.asso.fr/page.php?P=fo/public/menu/gestion_front/index&id=50"><div>Le
									site de la FFSB</div> <img class="partners"
								src="<c:url value="/static/resources/images/ffsb.jpg"/>"></a>
						</div>
						<div>
							<a href="http://www.fiboules.org/"><div>Le site de la
									FIB</div> <img class="partners"
								src="<c:url value="/static/resources/images/fib.jpg"/>"></a>
						</div>
						<div>
							<a href="http://cbdvar.blogspot.fr/"><div>Le CBD Var</div> <img
								class="partners"
								src="<c:url value="/static/resources/images/cbd-var.jpg"/>"></a>
						</div>
					</div>
				</div>
			</div>
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
		src="static/resources/js/angular/custom/app-front.js"></script>
	<script type="text/javascript"
		src="static/resources/js/angular/custom/utils.js"></script>	
	<script type="text/javascript"
		src="static/resources/js/angular/custom/front.js"></script>
		
</body>

</html>
