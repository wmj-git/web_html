var box0 = $("#history_main"), v0 = 1; //这里添加滚动的对象和其速率
Rin(box0, v0);

function Rin($Box, v) {//$Box移动的对象，v对象移动的速率
    var $Box_ul = $Box.find("#scroll"),
        $Box_li = $Box_ul.find(".em_history_list"),
        $Box_li_span = $Box_li.find("dl"),
        left = 0,
        s = 0,
        timer;//定时器
    console.log($Box_ul);
    console.log($Box_li);
    console.log($Box_li_span);
    $Box_li.each(function (index) {
        $($Box_li_span[index]).width($(this).width());//hover

        s += $(this).outerWidth(true); //即要滚动的长度
        console.log("s:" + $($Box_li_span[index]).outerWidth(true));
    })

    window.requestAnimationFrame = window.requestAnimationFrame || function (Tmove) {
        return setTimeout(Tmove, 1000)
    };
    window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

    if (s >= $Box.width()) {//如果滚动长度超出Box长度即开始滚动，没有的话就不执行滚动
        $Box_li.clone(true).appendTo($Box_ul);
        Tmove();

        function Tmove() {
            //运动是移动left  从0到-s;
            left -= v;
            if (left <= -s) {
                left = 0;
                $Box_ul.css("left", left)
            } else {
                $Box_li.css("left", left)
            }
            timer = requestAnimationFrame(Tmove);
        }

        $Box_li.hover(function () {
            cancelAnimationFrame(timer)
        }, function () {
            Tmove()
        })
    }
}

