// this will control the events in each link button
document.addEventListener('DOMContentLoaded', function() {  
    var checkPageButton = document.getElementById('checkPage');  
    checkPageButton.addEventListener('click', function() {  
        chrome.tabs.getSelected(null, function(tab) {  
            d = document;  
            // the link you want to have open once button is clicked
            window.open('images/Crickets.mp3', 'blank');  
        });  
    }, false);  
}, false);  