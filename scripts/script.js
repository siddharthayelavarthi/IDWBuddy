function otpFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "hidden");
    document.body.appendChild(x);
    document.getElementById("otpButton").innerHTML = '<label for="pwd">OTP:</label><input type="password" class="form-control" id="pwd" placeholder="Enter OTP" name="pswd">';
	document.getElementById("otpButtonText").innerText = "Resend OTP";
}	
