var Body = {
    setColor : function(color){
        $('body').css('color', color);
        // document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function(color){
        $('body').css('background-color', color);
        // document.querySelector('body').style.backgroundColor = color;
    }

}

var Links = {
    setColor: function(color){
        $('a').css('color', color);
    //     var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length) {
    //     alist[i].style.color = color;
    //     i = i + 1;
    //     }
    }
}



function nightDayHandler(self){
    var target = document.querySelector('body');      
    if(self.value == 'day'){
        Body.setColor('rgb(70, 69, 69)');
        Body.setBackgroundColor('rgb(189, 167, 167)');
        Links.setColor('seagreen');
        self.value = 'night';
    } else {
        Body.setColor('white');
        Body.setBackgroundColor('darkslategray');
        Links.setColor('lemonchiffon');
        self.value = 'day';
    }  
}
