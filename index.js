// HP JS

var main = function(){

    $('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.status-box').val().counter - 140
    $('.counter').text(140);
    $('.btn').addClass('disabled');
    });
    
    
    $('.status-box').keyup(function(){
        var postlength = $(this).val().length;
        var charactersLeft = 140 - postlength;
        $('.counter').text(charactersLeft);
        
        if(charactersLeft<0)
        {
            $('.btn').addClass('disabled')
        } 
        
        else if(charactersLeft==140) 
        { 
            $('.btn').addClass('disabled')
        }
        
        else 
        { 
            $('.btn').removeClass('disabled') 
        }
        
    });
    
    $('.btn').addClass('disabled');
}

$(document).ready(main);
