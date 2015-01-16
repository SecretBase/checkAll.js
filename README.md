<h2>Usage</h2>

<ol>
  <li>Install Jquery 1.11.2 +</li>
  <li>Install jquery.checkall.js</li>
</ol>

<code>

	<script type="text/javascript" src="jquery.js"></script>
	<script src="jquery.checkAll.js" type="text/javascript"></script>

	<form action="#">
		<input type="checkbox" name="" id="" class="check-all">
		<input type="checkbox" name="" id="">
		<input type="checkbox" name="" id="">
		<input type="checkbox" name="" id="">
		<input type="checkbox" name="" id="">
		<input type="checkbox" name="" id="">
	</form>

	<script>

		$(document).ready(function() {
			$(".check-all").checkAll();
		});

	</script>
</code>

<p>By default, The plugin will select closest form element.</p>

<p>You can provide a selector to select specific scope:</p>

<code>

  <form action="#">
		<fieldset>
			<input type="checkbox" name="" id="" class="check-all">
			<input type="checkbox" name="" id="">
			<input type="checkbox" name="" id="">
			<input type="checkbox" name="" id="">
			<input type="checkbox" name="" id="">
			<input type="checkbox" name="" id="">
		</fieldset>
	</form>

	<form action="#">
		<fieldset>
			<input type="checkbox" name="" id="" class="check-all">
			<input type="checkbox" name="" id="">
			<input type="checkbox" name="" id="">
			<input type="checkbox" name="" id="">
			<input type="checkbox" name="" id="">
			<input type="checkbox" name="" id="">
		</fieldset>
	</form>

	<script>

		$(document).ready(function() {
			$(".check-all").checkAll('fieldset');
		});

	</script>
</code>

<p>Also you can provide a Jquery object to select a specific scope</p>

<code>

	<div class="control-panel">
		<input type="checkbox" name="" id="" class="check-all">
	</div>

	<form action="#" id="submit-form">
		<fieldset>
			<label for="">First Name:</label>
			<input type="text" name="" id="">
			<label for="">Last Name</label>
			<input type="text" name="" id="">
		</fieldset>
		<fieldset id="categories">
			<legend>Category</legend>
			<label><input type="checkbox" name="" id=""></label>
			<label><input type="checkbox" name="" id=""></label>
			<label><input type="checkbox" name="" id=""></label>
			<label><input type="checkbox" name="" id=""></label>
			<label><input type="checkbox" name="" id=""></label>
			<label><input type="checkbox" name="" id=""></label>
		</fieldset>
	</form>

	<script>

		$(document).ready(function() {
			$(".check-all").checkAll({
				scope : $('#categories')
			});
		});

	</script>
</code>
