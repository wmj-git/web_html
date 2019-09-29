var id = Number(window.location.search.substring(4));
console.log(id);
$.get("http://192.168.20.18:1800/api/v1/company/news/queryAll?id=" + id, function (res) {

    if (res.statusCode == 200) {
        var data = res.data[0];
        console.log(data);
        $("#publish_date").html(data.createDate);
        $("#new_title").html(data.newsTittle);
        $("#news_image").attr("src",data.listFiles);
        $("#news_content").html(data.newsContent);
    } else {
        console.log(res.message)
    }
    console.log(res)
});
