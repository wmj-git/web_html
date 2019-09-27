$.get("http://192.168.20.18:1800/api/v1/company/news/queryAllByPage?categoryTypeId=2", function(res){
    //$("div").html(result);

    if(res.statusCode == 200){
        var data = res.data;
        var htmlStr = '';
        var item;
        for(var i=0; i<data.list.length; ++i){
            item = data.list[i]
            htmlStr += `<li class="news_item row ">
                                <div class="col-md-4 item_left">
                                    <img src="${item.listFiles}">
                                </div>
                                <div class="col-md-8 item_right">
                                    <div class="item_title">
                                        <span><a href="details.html?id=${item.id}">${item.newsTittle}</a></span>
                                        <span class="news_date">${item.newsTime}</span>
                                    </div>
                                    <div class="item_con"><span>${item.newsConclusion}</span></div>
                                    <div class="item_more">
                                        <a href="#">more>></a>
                                    </div>
                                </div>
                            </li>`
        }

        $('#news_company').html(htmlStr);
    }else{
        alert(res.message)
    }
    console.log(res)
});
$.get("http://192.168.20.18:1800/api/v1/company/news/queryAllByPage?categoryTypeId=3", function(res){
    //$("div").html(result);

    if(res.statusCode == 200){
        var data = res.data;
        var htmlStr = '';
        var item;
        for(var i=0; i<data.list.length; ++i){
            item = data.list[i]
            htmlStr += `<li class="news_item row ">
                                <div class="col-md-4 item_left">
                                    <img src="${item.listFiles}">
                                </div>
                                <div class="col-md-8 item_right">
                                    <div class="item_title">
                                        <span><a href="details.html?id=${item.id}">${item.newsTittle}</a></span>
                                        <span class="news_date">${item.newsTime}</span>
                                    </div>
                                    <div class="item_con"><span>${item.newsConclusion}</span></div>
                                    <div class="item_more">
                                        <a href="details.html?id=1">more>></a>
                                    </div>
                                </div>
                            </li>`
        }

        $('#news_industry').html(htmlStr);
    }else{
        alert(res.message)
    }
    console.log(res)
});
$.get("http://192.168.20.18:1800/api/v1/company/news/queryAllByPage?categoryTypeId=4", function(res){
    //$("div").html(result);

    if(res.statusCode == 200){
        var data = res.data;
        var htmlStr = '';
        var item;
        for(var i=0; i<data.list.length; ++i){
            item = data.list[i]
            htmlStr += `<li class="news_item row ">
                                <div class="col-md-4 item_left">
                                    <img src="${item.listFiles}">
                                </div>
                                <div class="col-md-8 item_right">
                                    <div class="item_title">
                                        <span><a href="details.html?id=${item.id}">${item.newsTittle}</a></span>
                                        <span class="news_date">${item.newsTime}</span>
                                    </div>
                                    <div class="item_con"><span>${item.newsConclusion}</span></div>
                                    <div class="item_more">
                                        <a href="details.html">more>></a>
                                    </div>
                                </div>
                            </li>`
        }

        $('#news_media').html(htmlStr);
    }else{
        alert(res.message)
    }
    console.log(res)
});


