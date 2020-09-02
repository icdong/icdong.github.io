
// 查询VIP会员信息
$('#contact-submit').on('click', function(e){
    $.ajax({
        //请求方式
        type:'GET',
        //文件位置
        url: window.origin + '/components/vipData.json',
        //返回数据格式为json,也可以是其他格式如
        dataType: 'json',
        //请求成功后要执行的函数
        success: function(res){
            if (res.success === "true") {
                let vipData = res.data;
                for (let i = 0; i < vipData.length; i++) {
                    let item = vipData[i];
                    if (item.id === $('#name').val()) {
                        $('#vip_ok_tips').show();
                        $('#vip_no_tips').hide();
                        $('#vip_name').html(item.name);
                        $('#vip_date').html(item.date);
                        $('#vip_score').html(item.score);
                        $('#vip_id').html(item.vipId);
                        return ;
                    } else {
                        $('#vip_no_tips').show();
                        $('#vip_ok_tips').hide();
                    }
                }
            }
        }
    });
});
