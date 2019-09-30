# gmx-cookie-consent
Cookie Consent JS Library

````
<!-- COOKIE CONSENT -->
<link rel="stylesheet" type="text/css" href="cookie-consent.css" />
<script src="cookie-consent.js"></script>
<script>
    
    if(getConsentStatus() == true){
       // Consent Given, load all tracking
    }else{
        // Consent Denied
    }    
    
// Fill the variables with your info    
CookieConsent(message,accept_button,decline_button,privacy_btn,privacy_href);
</script>

<!-- COOKIE CONSENT -->
````
