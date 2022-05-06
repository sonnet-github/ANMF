$(document).ready(function() {
    $('#staff-list .staff-tabs .staff-tab-item').click(function(e) {
        e.preventDefault();

        var tabContentName = "staff-list-category-" + $(this).attr("data-category");

        $('#staff-list .staff-list-category-container').hide();        
        $('#staff-list .' + tabContentName).show();
    });
});
                        
                        
                        