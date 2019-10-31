# GDPRCOOKIE JS LIBRARY V1.0.1 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
A free Cookie Consent JS Library built according to the RGPD Data Policy.

# How to use

Load this in your header:


````
<!-- COOKIE CONSENT -->
<link rel="stylesheet" type="text/css" href="cookie-consent.css" />
<script src="cookie-consent.js"></script>
<script>
// Fill the variables with your info    
let cookie_consent = new CookieConsent("Your privacy message","Accept","Decline","Privacy Policy Text","#link-to-policy");


if(cookie_consent.getStatus() == true){
   // Consent Given, load all tracking
   
}else{
   // Consent Denied
        
}    
</script>

<!-- COOKIE CONSENT -->
````
