
let opened = false;
function showInfo(text, type) {
    let $message =  $('.message');
    $message.removeClass('negative');
    $message.removeClass('yellow');
    
    if (opened) {
        $message.transition('fade');
    }
    
    const header = (type === 'error')? 'Hiba!' : 'Infó';

    $message.find('.header').text(header);
    $message.find('p').text(text);
    $message.addClass((type === 'error')? 'negative': 'yellow');
   

    $message.transition('fade');
    
    $('.message .close').on('click', function() {
            opened = false;
            $(this).closest('.message').transition('fade');
    });
    opened = true;
}
