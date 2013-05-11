<!doctype html>
<!--[if lt IE 7]>      <html lang="pt-br" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="pt-br" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="pt-br" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="pt-br" class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Controle</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
	<?php
		echo $this->Html->charset();

		echo $this->Html->meta('icon') . PHP_EOL;

		echo $this->Html->css('main') . PHP_EOL;
		
		echo '<!-- build:js scripts/vendor/modernizr.js -->' . PHP_EOL;
		echo $this->Html->script($this->Html->url('/components/modernizr/modernizr.js', true)) . PHP_EOL;
		echo '<!-- endbuild -->' . PHP_EOL;

		echo $this->fetch('meta') . PHP_EOL;
		echo $this->fetch('css') . PHP_EOL;
		echo $this->fetch('script') . PHP_EOL;
	?>
</head>
<body>

	<div id="wrap">
		<div id="main">
			<div id="content">
				<?php echo $this->Session->flash(); ?>
				<?php echo $this->fetch('content'); ?>
			</div>
		</div>
	</div>
	<footer id="footer"></footer>

    <!--[if lt IE 7]>
        <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
        (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
        s.parentNode.insertBefore(g,s)}(document,'script'));
    </script>

    <?php
    	echo $this->Html->script($this->Html->url('/components/jquery/jquery.min.js', true)) . PHP_EOL;
    	echo $this->Html->script('main') . PHP_EOL;

    	echo $this->Html->script('hello') . PHP_EOL;

    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-affix.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-alert.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-dropdown.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-tooltip.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-modal.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-transition.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-button.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-popover.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-typeahead.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-carousel.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-scrollspy.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-collapse.js', true)) . PHP_EOL;
    	echo $this->Html->script($this->Html->url('/components/sass-bootstrap/js/bootstrap-tab.js', true)) . PHP_EOL;
    ?>
</body>
</html>
