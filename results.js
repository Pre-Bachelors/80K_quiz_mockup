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
    var questions = ['stem', 'writing', 'impact', 'competition', 'timing'];
    
    var results = getResult(answers, questions);
    var jobs = getJobs(results);
    
                                                                                                console.log(results);
                                                                                                console.log(jobs);
    
    
    /*
     * create an array to store the answers (same order as the index array)
     * Parameters: the answer obj
     *             an array containing the questions name, used to order the returned array
     */
    function getResult(answers, index) {
        // create new array
        var results = [];
        
        // iterate through answers
        for (var i in index) {
            // if not timing
            if (index[i] == 'timing') {
                results[i] = answers[index[i]].answer;
            } else {
                // see if answer was positive
                if (answers[index[i]].answer.indexOf('no') == -1) {
                    results[i] = true;
                } else { // answer as negative
                    results[i] = false;
                }
            }
        }
        return results;
    }
    
    /*
     * Returns an array withthe top 2 recommended jobs, based on the answers to the quiz
     * Parameters: array containing the answers
     */
    function getJobs(answers) {
        // if all yes
        if (answers[0] && answers[1] && answers[2] && answers[3]) {
            return ['management', 'founder'];
        } else if (!(answers[0] || answers[1] || answers[2] || answers[3])) { // else if all no
            return ['policy'];
        } else if (answers[4] == 'early') { // else if early
            if (!(answers[2] || answers[3] || answers[1])) { // else if !risk && !competitive && !STEM
                return ['think', 'marketing'];
            } else if (!(answers[2] || answers[3] || answers[0])) { // else if !risk && !competitive && !PR
                return ['phd', 'data'];
            } else if (!(answers[2] || answers[3])) { // else if !risk && !competitive
                return ['phd', 'data'];
            } else if (!(answers[0] || answers[1] || answers[3])) { // else if !STEM && !PR && !competitive
                return ['policy'];
            } else if (!(answers[0] || answers[1] || answers[2])) { // else if !STEM && !PR && !risk
                return ['policy'];
            } else if (!(answers[0] || answers[1])) { // else if !STEM && !PR
                return ['policy'];
            } else if (!(answers[3])) { // else if !competitive
                return ['startup', 'phd'];
            } else if (!(answers[2])) { // else if !risk
                return ['phd', 'data'];
            } else if (!(answers[1])) { // if !PR
                return ['startup', 'phd'];
            } else if (!(answers[0])) { // if !STEM
                return ['politics', 'charity'];
            }
        } else if (answers[4] == 'middle') { // else if middle
            if (!(answers[2] || answers[3] || answers[1])) { // else if !risk && !competitive && !STEM
                return ['grantmaker', 'think'];
            } else if (!(answers[2] || answers[3] || answers[0])) { // else if !risk && !competitive && !PR
                return ['phd', 'data'];
            } else if (!(answers[2] || answers[3])) { // else if !risk && !competitive
                return ['grantmaker', 'think'];
            } else if (!(answers[0] || answers[1] || answers[3])) { // else if !STEM && !PR && !competitive
                return ['policy'];
            } else if (!(answers[0] || answers[1] || answers[2])) { // else if !STEM && !PR && !risk
                return ['policy'];
            } else if (!(answers[0] || answers[1])) { // else if !STEM && !PR
                return ['policy'];
            } else if (!(answers[3])) { // else if !competitive
                return ['grantmaker', 'startup'];
            } else if (!(answers[2])) { // else if !risk
                return ['management', 'grantmaker'];
            } else if (!(answers[1])) { // if !PR
                return ['startup', 'phd'];
            } else if (!(answers[0])) { // if !STEM
                return ['politics', 'charity'];
            }
        } else { // timing = late
            if (!(answers[2] || answers[3] || answers[1])) { // else if !risk && !competitive && !STEM
                return ['grantmaker', 'policy'];
            } else if (!(answers[2] || answers[3] || answers[0])) { // else if !risk && !competitive && !PR
                return ['policy', 'phd'];
            } else if (!(answers[2] || answers[3])) { // else if !risk && !competitive
                return ['grantmaker', 'policy'];
            } else if (!(answers[0] || answers[1] || answers[3])) { // else if !STEM && !PR && !competitive
                return ['policy'];
            } else if (!(answers[0] || answers[1] || answers[2])) { // else if !STEM && !PR && !risk
                return ['policy'];
            } else if (!(answers[0] || answers[1])) { // else if !STEM && !PR
                return ['policy'];
            } else if (!(answers[3])) { // else if !competitive
                return ['grantmaker', 'policy'];
            } else if (!(answers[2])) { // else if !risk
                return ['grantmaker', 'policy'];
            } else if (!(answers[1])) { // if !PR
                return ['policy', 'trading'];
            } else if (!(answers[0])) { // if !STEM
                return ['politics', 'grantmaker'];
            }
        }
    }
});

