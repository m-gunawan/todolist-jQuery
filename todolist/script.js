
$('.inputText').on('keyup', function(e)
{
    if(e.keyCode == 13 && $('.inputText').val() != "" )
    {
        let empty = $('.empty');
        let task = $('<div class="task"></div>').text($('.inputText').val());
        empty.remove();
        let del = $('<i class="fa fa-trash-alt"></i>').click(function(){
            let p = $(this).parent();
            p.fadeOut(function(){                
                p.remove();
                
            });
        });

        let check = $('<i class="fa fa-check"></i>').click(function(){
            let p = $(this).parent();
            p.fadeOut(function(){
                $('.comp').append(p);
                p.fadeIn();
            });
            $(this).remove();
        });

        task.append(del,check);
        $('.notcomp').append(task);
        //to close
    }
});

// console.log(task);