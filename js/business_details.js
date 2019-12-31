var id = Number(window.location.search.substring(4));
console.log(id);
$.get(window.baseUrl+"/documentation/getOne/" + id, function (res) {

    if (res.statusCode == 200) {
        var data = res.data;
        console.log(data);
        $("#details_title").html(data.caseName);
        $("#details_dec").html(data.caseDescribe);
    } else {
        console.log(res.message);
    }
    console.log(res);
});
