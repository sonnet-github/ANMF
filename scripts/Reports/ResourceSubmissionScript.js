$(document).ready(function() {
    $('#submission-list .submission-tabs .submission-tab-item').click(function(e) {
        e.preventDefault();

        var tabContentName = "submission-tab-content-" + $(this).attr("data-year");

        $('#submission-list .submission-tab-content-wrapper').hide();        
        $('#submission-list .' + tabContentName).show();
    });
});
                                       