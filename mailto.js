/** @Name		Mailto Concealer
 ** @URI		http://www.pxoink.net/
 ** @Author		PxO Ink
 ** @AuthorURI	http://www.pxoink.net/
 ** @License	Creative Commons Attribution-NoDerivs 3.0 Unported License
 ** @Copyright	© 2013 PxO Ink. Some Rights Reserved.
 **/

//Mailto function. 
function cmailto(id, domain, handle, tld, subject, content) {
	//Declare variables.
	var	a		=	'<' + String.fromCharCode(97,32,104) + 'ref="m&#97;il&#116;o:';
	var	b		=	'">';
	var	c		=	'</' + String.fromCharCode(97) + '>';
	var	content	=	(!content) ? handle + '&#64;' + domain + '&#46;' + tld : content;
	
	//String building.
	var	string	=	a + handle + '&#64;' + domain + '&#46;' + tld + '?s&#117;bject=' + subject + b + content + c;

	//Set a timer to inject content.
	setTimeout(function() {
		//Write to the document.
		document.getElementById(id).innerHTML = string;
	}, 850);
}

//Launch the mailto. 
cmailto('email', 'example', 'me', 'com', 'I%20Would%20Like%20to%20Hire%20You!', 'Contact Us');