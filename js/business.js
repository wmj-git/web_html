var pageMap = {};
var nowTypeId = 5;
var nowIndex = 0;
var pageSize = 5;

init();

function init() {
    click();
    pageMap["categoryId_" + nowTypeId] = 1;
    console.log(pageMap);
    nowIndex = 0;
    loadData(renderHtml);

}

// 渲染页面
function renderHtml(res) {
    var data = res.data;
    var htmlStr = '';
    var item;
    for (var i = 0; i < data.list.length; ++i) {
        item = data.list[i];
        if (item.listFiles == "") {
            var imgUrl = item.listFiles = "img/em_business_page/default.png";
            $("#image").attr("src", imgUrl);
        }
        htmlStr += `<li class="business_item row ">
                                    <div class="col-md-4 item_left">
                                        <img id="image" src="${item.listFiles}">
                                    </div>
                                    <div class="col-md-8 item_right">
                                        <div class="item_title">
                                            <span><a href="details_business.html?id=${item.id}">${item.caseName}</a></span>
                                        </div>
                                        <div class="item_con"><span> 
                                         ${item.caseDescribe}</span></div>
                                        <div class="item_more">
                                            <a href="details_business.html?id=${item.id}">查看详情>></a>
                                        </div>
                                    </div>
                                </li>`
    }

    $("#v-pills-tabContent .tab-pane").eq(nowIndex).find(".am-content").html(htmlStr);
    readerNavigation(res);
}

// 导航渲染
function readerNavigation(res) {
    var data = res.data;
    var navData = data.navigatepageNums;
    var str = '';
    for (var i = 0; i < navData.length; ++i) {
        if (navData[i] === data.pageNum) {
            str += '<li class="page-item pages active"><a class="page-link am-link" href="#">' + navData[i] + '</a></li>'
        } else {
            str += '<li class="page-item pages"><a class="page-link am-link" href="#">' + navData[i] + '</a></li>'
        }
    }
    var firstPage = $("#firstPage").get(0).outerHTML;
    var lastPage = $("#lastPage").get(0).outerHTML;
    var firstStr = $("#firstLi").get(0).outerHTML;
    var lastStr = $("#lastLi").get(0).outerHTML;
    var allStr = firstPage + firstStr + str + lastStr + lastPage;
    $('#navUl').html(allStr);
    navAction(res);
}

/**
 * 分页按钮点击事件
 */
function navAction(res) {
    var data = res.data;
    var pageNum = pageMap['categoryId_' + nowTypeId];
    var privious = $("#previous");
    var next = $("#next");
    var first = $("#first");
    var last = $("#last");
    if (!data.hasPreviousPage) {
        privious.addClass('disabled');
        first.addClass('disabled');
    } else {
        privious.removeClass('disabled');
        first.removeClass('disabled');
        privious.click(function () {
            pageMap['categoryId_' + nowTypeId] = pageNum - 1;
            loadData(renderHtml);
        });
        first.click(function () {
            pageMap['categoryId_' + nowTypeId] = pageNum = 1;
            loadData(renderHtml);
        });
    }
    if (!data.hasNextPage) {
        next.addClass('disabled');
        last.addClass('disabled');
    } else {
        next.removeClass('disabled');
        last.removeClass('disabled');
        next.click(function () {
            pageMap['categoryId_' + nowTypeId] = pageNum + 1;
            loadData(renderHtml)
        });
        last.click(function () {
            const totalPage = parseInt(data.navigateLastPage);
            pageMap['categoryId_' + nowTypeId] = totalPage;
            loadData(renderHtml);
        });
    }

    $('.am-link').click(function () {
        var pageNo = parseInt($(this).html());
        pageMap['categoryId_' + nowTypeId] = pageNo;
        loadData(renderHtml);
    })

}

/**
 * 左边选项卡点击
 */
function click() {
    $('#left_a a').click(function () {
        var dataid = $(this).attr('data-id');
        nowIndex = $(this).index();
        if (!pageMap['categoryId_' + dataid]) pageMap['categoryId_' + dataid] = 1;
        console.log(pageMap);
        nowTypeId = dataid;
        var str = $("#v-pills-tabContent .tab-pane").eq(nowIndex).find(".am-content").html();
        console.log(str);
        loadData(renderHtml);
    })
}

/*
* 限制分页显示数目
*
* */

// 加载分页数据
function loadData(fnSuccess) {
    var pageNum = pageMap["categoryId_" + nowTypeId];
    $.get("http://192.168.20.18:1800/api/v1/company/documentation/queryAllByPage?categoryTypeId=" + nowTypeId + "&pageSize=" + pageSize + "&pageNum=" + pageNum, fnSuccess)
}

