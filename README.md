# gmx-cookie-consent
Cookie Consent JS Library

# How to use

Load this in your header:


````
<!-- COOKIE CONSENT -->
<link rel="stylesheet" type="text/css" href="cookie-consent.css" />
<script src="cookie-consent.js"></script>
<script>
// Fill the variables with your info    
let cookie_consent = new CookieConsent(message,accept_button,decline_button,privacy_btn,privacy_href);

if(cookie_consent.getStatus() == true){
   // Consent Given, load all tracking
   
}else{
   // Consent Denied
        
}    
</script>

<!-- COOKIE CONSENT -->
````
