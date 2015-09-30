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
                                                                                                                                                        console.log(answers);

    var results = getResult(answers, questions);    
    
                                                                                                                                                        console.log(results);
    var jobs = getJobs(results);
    loadJobs(jobs);
      
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
            if (!(answers[2] || answers[3] || answers[0])) { // else if !risk && !competitive && !STEM
                return ['think', 'marketing'];
            } else if (!(answers[2] || answers[3] || answers[1])) { // else if !risk && !competitive && !PR
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
            if (!(answers[2] || answers[3] || answers[0])) { // else if !risk && !competitive && !STEM
                return ['grantmaker', 'think'];
            } else if (!(answers[2] || answers[3] || answers[1])) { // else if !risk && !competitive && !PR
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
        } else if (answers[4] == 'late') { // timing = late
            if (!(answers[2] || answers[3] || answers[0])) { // else if !risk && !competitive && !STEM
                return ['grantmaker', 'policy'];
            } else if (!(answers[2] || answers[3] || answers[1])) { // else if !risk && !competitive && !PR
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
    
    /*
     * Loads the recommended jobs
     * Parameter: jobs, array containing the users answers to the quiz
     */
    function loadJobs(jobs) {
        var jobContainer = $('#final');
        if (typeof jobs[1] !== "undefined") { // if there are 2 suggested jobs
            var flag = [false, false];
            var $tempContainer = $('<div></div>');
            // load new question
            jobContainer.load('results.html #' + jobs[0], function(){ // on content loaded
                flag[0] = true;
                appendJob(flag, $tempContainer);
            });
            $tempContainer.load('results.html #' + jobs[1], function(){ // on content loaded
                flag[1] = true;
                appendJob(flag, $tempContainer);
            });
        } else { // else only 1 suggested job
            jobContainer.load('results.html #' + jobs[0]);
        }
    }
    
    /*
     * Auxiliary call-back function. Appends the second job to the document.
     * Parameters: flag, a boolean array of length 2
     *             container, jQuery container of the second job
     */
    function appendJob(flag, container) {
        if (flag[0] && flag[1]) { // if both jobs are loaded
            // append second job to the first
            var jobContainer = $('#final').parent();
            jobContainer.append(container);
        }
    }
});

