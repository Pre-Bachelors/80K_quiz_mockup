$(document).ready(function() {
    
    // Functions to load & save objects using localStorage, credit to Dan Cruickshank,
    // http://getfishtank.ca/blog/using-html5-localstorage-to-store-json
    function load() {
        return JSON.parse(sessionStorage.getItem("80k_answers"));
    }

    function save(obj) {
            sessionStorage.setItem("80k_answers", JSON.stringify(obj));
    }
    
    // init variables
    var answers = load();
    var questions = ['stem', 'writing', 'impact', 'competition', 'timing', 'contribution'];
    
    console.log(answers);
    
    /*
     * Calculates top 2 jobs, based on the answers object
     * Parameters: Answers (obj)
     */
    function getCareer(obj, index) {
        
    }

});
// if all yes
    // management
    // founder
// else if all no
    // policy
// else if early
    // if  !STEM
        // politics
        // charity
    // else if !PR
        // startup
        // phd
    // else if !risk
        // phd
        // data
    // else if !competitive
        // phd
        // data
    // else if !STEM && !PR
        // policy
    // else if !STEM && !PR && !risk
        // policy
    // else if !STEM && !PR && !competitive
        // policy
    // else if !risk && !competitive
        // phd
        // data
    // else if !risk && !competitive && !PR
        // phd
        // data
    // else if !risk && !competitive && !STEM
        // think
        // marketing

// else if middle
    // if  !STEM
        // politics
        // charity
    // else if !PR
        // startup
        // phd
    // else if !risk
        // management
        // grantmaker
    // else if !competitive
        // grantmaker
        // startup
    // else if !STEM && !PR
        // policy
    // else if !STEM && !PR && !risk
        // policy
    // else if !STEM && !PR && !competitive
        // policy
    // else if !risk && !competitive
        // grantmaker
        // think
    // else if !risk && !competitive && !PR
        // phd
        // data
    // else if !risk && !competitive && !STEM
        // grantmaker
        // think
// else (late)
    // if  !STEM
        // politics
        // grantmaker
    // else if !PR
        // policy
        // trading
    // else if !risk
        // grantmaker
        // policy
    // else if !competitive
        // grantmaker
        // policy
    // else if !STEM && !PR
        // policy
    // else if !STEM && !PR && !risk
        // policy
    // else if !STEM && !PR && !competitive
        // policy
    // else if !risk && !competitive
        // grantmaker
        // policy
    // else if !risk && !competitive && !PR
        // policy
        // phd
    // else if !risk && !competitive && !STEM
        // grantmaker
        // policy