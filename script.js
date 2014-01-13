var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$about = ("I'm Andreas.  I write stuff");
$programming =('<div id="labs">Programming</div> ');
$design =('<div id="labs">Design</div> ');
$security =('<div id="labs">Security</div> ');
$labs =('<div id="labs">Labs</div> ');

$(document).ready(function () {
    $( "#title" ).animate({
        'color': '#D91E21'
    }, 6000 );

    $('#labs').fadeOut("slow", function(){
        $('#labs').replaceWith($programming);
        $('#labs').delay(1000).fadeOut("slow", function(){
            $(this).replaceWith($design);
            $('#labs').delay(1000).fadeOut("slow",function(){
                $(this).replaceWith($security);
                $('#labs').delay(1000).fadeOut("slow",function(){
                    $(this).replaceWith($labs);
                })
            })
        });
    });






    $('li').hover(function () {
            $(this).stop().animate({
                fontSize: '20px'
            });
        },

        function () {
            $(this).stop().animate({
                fontSize: '16px'
            });
        })
    $('#about').click(function(){
        $('#content').html("I'm Andreas.  I do mad good stuffs.").css("background-color","white").width("600px").css("border-radius","20px");
    })
    $(function () {
        $('img.hover_bar').hover(sourceSwap, sourceSwap);
    });
})