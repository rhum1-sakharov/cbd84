<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html ng-app="app-front">

<head>
<title>CBD 84 | Comit&#233; Bouliste D&#233;partemental du Vaucluse - www.cbd84.fr</title>
<meta name="description"
	content="La vie associative de la boule lyonnaise en vaucluse. Retrouvez toutes les informations sur les comp&#233;titions et les clubs du sport boule du 84 ... Actualit&#233;, Calendrier, R&#233;sultat, Classement, Asso Sportive, Documentation, Contact" />
<meta name="robots" content="index, follow" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name=viewport content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css"
	href="resources/js/vendor/bootstrap-3.3.5-dist/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="resources/js/vendor/bootstrap-3.3.5-dist/css/bootstrap-theme.min.css" />
<!--  <link rel="stylesheet" type="text/css"
	href="resources/css/ng-animation.css" />-->

<link rel="stylesheet" type="text/css" href="resources/css/screen.css" />

<link rel="stylesheet"
	href="resources/js/vendor/angular-ui-grid/ui-grid${minjs}.css"
	type="text/css">
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
				<a class="navbar-brand" href="#" ng-click="selectMenu(1);"><span
					class="welcome-message"><img
						src="resources/images/logo-boule.png"></span><span>CBD 84</span></a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li ui-sref-active="active"><a ui-sref="actus">Actualit&#233;s</a></li>
					<li ui-sref-active="active"><a ui-sref="events">Calendrier</a></li>
					<li ui-sref-active="active"><a ui-sref="results">R&#233;sultats</a></li>
					<li ui-sref-active="active"><a ui-sref="rankings">Classements</a></li>
					<li ui-sref-active="active"><a ui-sref="assos">Asso sportives</a></li>
					<li ui-sref-active="active"><a ui-sref="cbdfiles">Documentation</a></li>
					<li ui-sref-active="active"><a ui-sref="contacts">Contacts</a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>

	<!-- Main jumbotron for a primary marketing message or call to action -->

	<div class="container">
		<div class="row">
			<div class="col-md-9">
				<div ui-view="main"></div>
			</div>

			<div class="col-md-3">
				<div ui-view="partners"></div>
			</div>
		</div>
	</div>
	<!-- /container -->



	<!-- Angular Vendor JavaScript
    ================================================== -->
	<%--<script type="text/javascript"
		src="resources/js/vendor/angular-1.5.7/angular-locale_fr-fr.js"></script>--%>
	<%--<script type="text/javascript"
		src="resources/js/vendor/angular-1.5.7/angular-animate${minjs}.js"></script>--%>
	<script type="text/javascript"
			src="resources/bower_components/angular/angular${minjs}.js"></script>
	<script type="text/javascript"
			src="resources/bower_components/angular-sanitize/angular-sanitize${minjs}.js"></script>
	<script type="text/javascript"
			src="resources/bower_components/angular-resource/angular-resource${minjs}.js"></script>

	<!-- Angular UI Vendor JavaScript
    ================================================== -->
	<script type="text/javascript"
		src="resources/js/vendor/angular-ui-router/angular-ui-router${minjs}.js"></script>

	<script src="resources/js/vendor/angular-ui-grid/ui-grid${minjs}.js"></script>
	
	<script src="resources/js/vendor/angular-filter/angular-filter${minjs}.js"></script>

	<!-- PdfMake Vendor JavaScript
    ================================================== -->
	<script async type="text/javascript"
		src="resources/js/vendor/pdfmake/pdfmake${minjs}.js"></script>

	<script async src="resources/js/vendor/pdfmake/vfs_fonts.js"></script>


	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="resources/js/vendor/jquery-1.11.3/jquery-1.11.3.min.js"></script>
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
	<script type="text/javascript" src="resources/js/custom/utils.js"></script>
	<script type="text/javascript"
		src="resources/js/custom/front/front.config.js"></script>

</body>

</html>
