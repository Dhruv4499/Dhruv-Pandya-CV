$(document).ready(function(){
    
    $('.about_section .tab_links').on('click',function(){
        $('.about_section .tab_links').removeClass('active');
        $(this).addClass('active')

        // Get the data-tab attribute value of the clicked tab link
        const tabId = $(this).data("tab");
    
        // Hide all tab contents
        $(".tab-content").removeClass("active-tab");
    
        // Remove 'active' class from all tab links
        $(".tab_link").removeClass("active");
    
        // Show the corresponding tab content and add 'active' class to the clicked tab link
        $("#" + tabId).addClass("active-tab");
        $(this).addClass("active");
    })

    $('.header .burger_nav .fa-solid.fa-bars').on('click',function(){
        $(this).prev().addClass('open_menu');
    })
    $('.header .burger_menu .fa-solid.fa-xmark').on('click',function(){
        $(this).parent().removeClass('open_menu');
    })
})