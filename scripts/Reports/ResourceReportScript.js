$(document).ready(function() {
    $('#report-list .report-tabs .report-tab-item').click(function(e) {
        e.preventDefault();

        var tabContentName = "report-tab-content-" + $(this).attr("data-year");

        $('#report-list .report-tab-content-wrapper').hide();        
        $('#report-list .' + tabContentName).show();
    });
});
                        