const color = [
    {
        name:'pink',
        code:'#FB839E',
        url:'pink.css'
    },
    {
        name:'light blue',
        code:'#3e99f4',
        url:'lightblue.css'
    },
    {
        name:'light green',
        code:'#0dcebd',
        url:'lightgreen.css'
    },
    {
        name:'red',
        code:'#cc3b3b',
        url:'red.css'
    },
    {
        name:'yellow',
        code:'#ff9800',
        url:'yellow.css'
    }
]

$(document).ready(function(){
    setColors();
    function setColors(){
        for(let i=0; i<color.length; i++){
            const span = document.createElement("span");
                span.style.backgroundColor = color[i].code;
                $(".colors").append(span);
        }
    }

    $(".colors span").click(function(){
        const index = $(this).index();
        $(".alternate").attr("href",color[index].url);
    });

    $(".thememode").change(function(){
        if($(this).val() == "light"){
            $("body").removeClass("dark")
        }
        else{
            $("body").addClass("dark")
        }
    })
    $(".settingtogglebtn").click(function(){
        $(".setting").toggleClass("open");
    })
})