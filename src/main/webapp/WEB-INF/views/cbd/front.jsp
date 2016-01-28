<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<html ng-app="app-front">

<head>
<title>CBD Vaucluse</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css"
	href="resources/js/vendor/bootstrap-3.3.5-dist/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="resources/js/vendor/bootstrap-3.3.5-dist/css/bootstrap-theme.min.css" />
<link rel="stylesheet" type="text/css"
	href="resources/css/ng-animation.css" />
<link rel="stylesheet" type="text/css"
	href="resources/css/screen.css" />


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

<!-- Angular UI Vendor JavaScript
    ================================================== -->
<script type="text/javascript"
	src="resources/js/vendor/angular-ui-router/angular-ui-router${minjs}.js"></script>
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
						src="resources/images/logo-ffsb.png"></span><span><img
						src="resources/images/logo-cbd84-35.png"></span><span>CBD
						Vaucluse</span></a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li ui-sref-active="active"><a ui-sref="actus">Actualit&#233;s</a></li>
					<li ui-sref-active="active"><a ui-sref="calendars">Calendriers</a></li>
					<li ui-sref-active="active"><a ui-sref="results">R&#233;sultats</a></li>
					<li ui-sref-active="active"><a ui-sref="assos">Asso
							sportives</a></li>
					<li ui-sref-active="active"><a ui-sref="contacts">Contacts</a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>

	<!-- Main jumbotron for a primary marketing message or call to action -->

	<div class="container">


		<!--  <div class="row">			
				<div class="container">					
					<span><img src="resources/images/logo-cbd84.png"></span>
					<span><img src="resources/images/avignon-04.jpg"></span>
					</p>
				</div>			
		</div>  -->

		<!-- Example row of columns -->
		<div class="row">
			<div class="col-md-8">
				<div ui-view="main"></div>
			</div>

			<div class="col-md-4">
				<div ui-view="partners"></div>
			</div>
		</div>
		
		<div class="row">
		<hr>
			<span>&copy; r&#233;alisation du site : Romain VERMOREL - pour
				le CBD Vaucluse </span><span><img
				src="resources/images/logo-ffsb.png"></span><span><img
				src="resources/images/logo-cbd84-35.png"></span>
		</div>
	
	</div>
	<!-- /container -->

	


	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script
		src="resources/js/vendor/jquery-1.11.3/jquery-1.11.3.min.js"></script>
	<script
		src="resources/js/vendor/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>

	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script
		src="resources/js/vendor/bootstrap-3.3.5-dist/js/ie10-viewport-bug-workaround.js"></script>

	<!-- Angular Custom JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->

	<script type="text/javascript"
		src="resources/js/custom/front/app-front.js"></script>
	<script type="text/javascript"
		src="resources/js/custom/utils.js"></script>

	<script type="text/javascript"
		src="resources/js/custom/front/front.config.js"></script>

</body>

</html>
