<!DOCTYPE html>
<html>
<head>
	<title>MY VALIDATION PAGE</title>
	<script type="text/javascript">
		function validate() 
		{
			
			var email=document.forms["form"]["email"];
			

			if(email.value=="") 
			{
				window.alert("Enter email");
				email.focus();
				return false;
			}
			if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) 
			{
				window.alert("Enter valid email");
				email.focus();
				return false;
			}
			
			
			return true;
		}

	</script>
</head>
<body>
<form name="form" action="" onsubmit="return validate()" method="post">
	
	Enter email to validate   : <br>
	<input type="text" name="email"><br><br>
	
	<input type="submit" name="button" value="validate">
</form>
</body>
</html>