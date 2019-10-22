var date = new Date();
var y = date.getFullYear();
var m= date.getMonth();
var d = date.getDate();
console.log(date.toLocaleDateString());
console.log(y);
console.log(m);//9代表十月
console.log(d);
var id = Number(window.location.search.substring(4));
console.log(id);
$.get("http://192.168.20.18:1800/api/v1/company/news/queryAllByPage", function (res) {
    if (res.statusCode == 200) {
        var data = res.data;
        console.log(data);
        var htmlStr = '';
        var item;
        for (var i = 0; i < 4; ++i) {
            item = data.list[i];
            console.log(item.newsTime);
            htmlStr = '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">\n' +
                ' <span>${item.newsTime}</span>\n' +
                ' <h4>${item.newsTittle}</h4>\n' +
                ' <div class="news_dec">${item.newsConclusion}</div>\n' +
                ' <div class="news_more"><a href="details.html?id=${item.id}"></div>\n' +
                ' </div>'
        }
        $('#now_newsList').html(htmlStr);
    }
})
