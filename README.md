# Email Concealer

## Developed by PxO Ink (http://pxoink.net/)

### Preface

The *Email Concealer* is designed to implement simple obfuscation techniques 
to allow the mailto link, in conjunction with JavaScript, for peace of mind 
against pesky email harvesting bots.

### Technologies

There are two methods included to implement email obfuscation:

#### JavaScript

JavaScript obfuscation uses a mixture of encoding and pieced email parts to 
inject an email address into a specific element. This method of obfuscation 
will prevent dumb email harvesters from crawling a website when JavaScript 
is disabled. When JavaScript is enabled, a timer is leveraged to subvert 
harvesters which crawl for immediate rendered content. While intelligent 
harvesting systems will delve into the JavaScript files themselves, the use 
of encoded characters is designed to subvert their attempts. 

For added security, a packed and minified version has been included which 
uses base algorithms to obfuscate the code itself, making it more difficult 
for analysis of the technology. 

#### PHP

For instances where JavaScript cannot, or should not be used, an alternative 
method to simulate a mailto link can be used with a back-end technology, like 
PHP. This method uses the header to redirect the user as if they had clicked a 
mailto link. 

### Demonstration

A demonstration is included showcasing all three methods included.

### License

*Creative Commons Attribution-NoDerivs 3.0 United States (CC BY-ND 3.0 US)*

Software Copyright &copy; 2013 PxO Ink. Most Rights Reserved.

Full License Here: http://creativecommons.org/licenses/by-nd/3.0/legalcode

**You are Free to:**
* Share — to copy, distribute and transmit the work 
* make commercial use of the work

**Under the Following Conditions:**
* Attribution — You must attribute the work in the manner specified by the author or licensor (but not in any way that suggests that they endorse you or your use of the work). 
* No Derivative Works — You may not alter, transform, or build upon this work. **WAIVED**

**With the Understanding that:**
* Any of the above conditions can be waived if you get permission from the copyright holder. 
* Public Domain — Where the work or any of its elements is in the public domain under applicable law, that status is in no way affected by the license. 
* Other Rights — In no way are any of the following rights affected by the license: 
  * Your fair dealing or fair use rights, or other applicable copyright exceptions and limitations;
  * The author's moral rights;
  * Rights other persons may have either in the work itself or in how the work is used, such as publicity or privacy rights. 
* Notice — For any reuse or distribution, you must make clear to others the license terms of this work. The best way to do this is with a link to this web page. 