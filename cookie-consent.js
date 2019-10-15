/* 
------------------------------------------
@Package -> Cookie Consent 
------------------------------------------
@Version -> v1.0.2
------------------------------------------
@Author -> GMX
------------------------------------------
@Description -> Cookie Consent by the user
------------------------------------------
*/
class CookieConsent{

    constructor(message,accept_button,decline_button,privacy_btn,privacy_href){ this.setConsent(message,accept_button,decline_button,privacy_btn,privacy_href); }

    setConsent(message,accept_button,decline_button,privacy_btn,privacy_href){
        
        var consent = '<div class="cookie-consent"> <div class="container-consent"> <div class="cookie-consent-text"> '+message+' <p><a  style="color:white; text-decoration:underline;" href="'+privacy_href+'">'+privacy_btn+'</a></p> </div> <div class="cookie-consent-button"> <div class="align-consent-btn"> <button id="decline-consent-cookie-consent" class="consent-btn"> '+decline_button+' </button> <button id="give-consent-cookie-consent" class="consent-btn"> '+accept_button+' </button>  </div> </div> </div> </div>';
        
        $("body").append(consent);
        
        //Check localStorage on each page visit, if it's null, show your div
        if (!window.localStorage.getItem("cookie_accepted") && !window.localStorage.getItem("cookie_declined")) {
            //show the div
            $(".cookie-consent").show();
            console.log("Consent not set.");
            //Set the key
        }
        
        console.log(window.localStorage.getItem("cookie_accepted"));
        
        $( "#give-consent-cookie-consent" ).click(() => {
                $(".cookie-consent").hide();
                window.localStorage.setItem("cookie_accepted", true);
                console.log("Consent set.");
        });
        
        $( "#decline-consent-cookie-consent" ).click(() => {
                $(".cookie-consent").hide();
                window.localStorage.setItem("cookie_declined", true);
                console.log("Consent declined.");
        });
    }   

    // Obtain Cookie Consent Status to set other third party cookies | Uses TRUE or F
    getStatus(){
        
        if (window.localStorage.getItem("cookie_accepted")){
            
            return true;

        }else{
            
            return false;

        }

    }

}
