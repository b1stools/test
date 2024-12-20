<?php
// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// set your email here
	$to = 'shahidul.islam@baseonesolutions.com';

	$name 	 = strip_tags(trim($_POST['name']));
	$email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
	$phone   = trim($_POST['phone']);
	$subject = trim($_POST['subject']);
	$message = trim($_POST['message']);

	$date1 = date("F d,Y h:i:s a");

	// Check that data was sent to the mailer.
    if ( empty($name) OR empty($email) OR empty($phone) OR empty($subject) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

	// html markup for mail message
	$body="
	<!DOCTYPE html>
	<html>
	<head></head>
	<body>
	<table width='450' border='1px' bordercolor='#B6B6B6' align='center'  cellspacing='0' cellpadding='0' style='border:1px solid #B6B6B6; border-collapse:collapse; background-color:#FFF; margin-top:16px; margin-bottom:10px;'>
	<tr>
	<td width='150' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#6D6D6D; font-weight:bold; background-color:#ECF7FF; padding:6px;'>Name:</td>
	<td width='300' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000; font-weight:normal; padding:6px;'>$name</td>
	</tr>

	<tr>
	<td width='150' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#6D6D6D; font-weight:bold; background-color:#ECF7FF; padding:6px;'>Email:</td>
	<td width='300' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000; font-weight:normal; padding:6px;'>$email</td>
	</tr>

	<tr>
	<td width='150' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#6D6D6D; font-weight:bold; background-color:#ECF7FF; padding:6px;'>Phone:</td>
	<td width='300' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000; font-weight:normal; padding:6px;'>$phone</td>
	</tr>
	<tr>
	<td width='150' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#6D6D6D; font-weight:bold; background-color:#ECF7FF; padding:6px;'>subject:</td>
	<td width='300' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000; font-weight:normal; padding:6px;'>$subject</td>
	</tr>
	<tr>
	<td width='150' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#6D6D6D; font-weight:bold; background-color:#ECF7FF; padding:6px;'>Message:</td>
	<td width='300' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000; font-weight:normal; padding:6px;'>$message</td>
	</tr>
	</table>
	</body>
	</html>";

	// Set the email main subject.
	$phn = $phone;

	// Build the email headers.
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= "From: ".$name." <".$email."> \r\n";

	// Run mail function
	if ( mail($to, $phn, $body, $headers) ) {
		http_response_code(200);
		echo "Thank You! Your message has been sent.";
	} else {
		http_response_code(500);
		echo "Oops! Something went wrong and we couldn't send your message.";
	}

} else {
	http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

?>