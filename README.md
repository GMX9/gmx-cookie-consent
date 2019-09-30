# gmx-cookie-consent
Cookie Consent JS Library

<!-- COOKIE CONSENT -->
<link rel="stylesheet" type="text/css" href="cookie-consent.css" />
<script src="cookie-consent.js"></script>
<script>
    
    if(getConsentStatus() == true){
       // Consenso dado pelo utilizador.
    }else{
        // Consenso cancelado pelo utilizador ou não escolhido.
    }    
 CookieConsent("<?php echo $cookie_message; ?>","<?php echo geralb("COOKIE_BUTTON"); ?>","<?php echo geralb("COOKIES_DECLINE"); ?>","<?php echo geralb("COOKIES_LINK"); ?>","<?php echo geralb("COOKIES_HREF"); ?>");
</script>
<!-- COOKIE CONSENT -->
