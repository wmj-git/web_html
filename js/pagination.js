$("#Pagination").zPager({
    totalData: 80, //数据总条数
    pageData: 10, //每页数据条数
    pageCount: 0, //总页数
    current: 1, //当前页码数
    active: 'current', //当前页码样式
    prevBtn: 'pg-prev', //上一页按钮
    nextBtn: 'pg-next', //下一页按钮
    btnBool: true, //是否显示上一页下一页
    htmlBox: $('#wraper'),//ajax数据写入容器
    btnShow: true,//是否显示第一页和最后一页按钮
    ajaxSetData: false,//是否使用ajax获取数据 此属性为真时需要url和htmlBox不为空
    rev_text: "前一页",
    next_text: "后一页",
    firstBtn: 'pg-first', //第一页按钮
    lastBtn: 'pg-last', //最后一页按钮
    disabled: true, //按钮失效样式
    url: '', //ajax路由
    dataRender: function(data) {
        console.log(data + '---data-2');
        alert(data);
    },
});
