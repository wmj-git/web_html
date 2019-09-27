var id = Number(window.location.search.substring(4));
console.log(id);
$.get("http://192.168.20.18:1800/api/v1/company/news/queryAll?id=" + id, function (res) {

    if (res.statusCode == 200) {
        var data = res.data[0];
        var htmlStr = '';
        console.log(data);
        htmlStr += ` <div class="details_title">
         <h4>${data.newsTittle}</h4></div>
        <div class="row details_pic">
            <div class="col-md-4 offset-1 details_img">
                <img src="${data.listFiles}">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 details_dec">
                <p>${data.newsContent}</p>
            </div>
        </div>`

        $('#news_details').html(htmlStr);
    } else {
        console.log(res.message)
    }
    console.log(res)
});
