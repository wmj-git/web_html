var id = Number(window.location.search.substring(4));
console.log(id);
$.get(window.baseUrl+"/news/queryAll?id=" + id, function (res) {

    if (res.statusCode == 200) {
        var data = res.data[0];
        console.log(data);
        $("#publish_date").html(data.createDate);
        $("#new_title").html(data.newsTittle);
        $("#news_image").attr("src",data.listFiles);
        $("#news_content").html(data.newsContent);
        if(data.listFiles ==""){
           document.getElementById("details_pic").style.display="none";
            console.log("，没有图片");
        }
    } else {
        console.log(res.message)
    }
    console.log(res)
});
