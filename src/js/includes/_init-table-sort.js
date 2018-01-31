    $('#selling-offers, #buying-offers').DataTable({
        deferRender:    true,
        "paging":       false,
        "info":         false,
        "searching":    false,
        "columnDefs":  [{
            "orderable": false, 
            "targets":   2 
        }],
    });

    $('#trade-history, #profile-trade-history').DataTable({
        deferRender:    true,
        "paging":       false,
        "info":         false,
        "searching":    false,
    });