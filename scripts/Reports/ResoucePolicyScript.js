$(document).ready(function() {
    $('#policy-list .policy-tabs .policy-tab-item').click(function(e) {
        e.preventDefault();

        var tabContentName = "policy-tab-content-" + $(this).attr("data-year");

        $('#policy-list .policy-tab-content-wrapper').hide();        
        $('#policy-list .' + tabContentName).show();
    });
});
                        
                        