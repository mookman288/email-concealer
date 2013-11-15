<?php 
	/**
	 * Mailto Concealment and Simulation.
	 * 
	 * @author PxO Ink. 
	 * @copyright 2013
	 * @license Creative Commons Attribution-NoDerivs 3.0 Unported License
	 */
	
	//Declare variables.
	$email		=	'me@example.com';
	$subject	=	rawurlencode('I Would Like To Hire You!');
	$mailto		=	sprintf('Location: mailto:%s?Subject=%s', $email, $subject);

	//Sleep.
	sleep(0.850);
	
	//Redirect the user.
	header($mailto);
?>