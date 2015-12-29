define(function (exports) {

    /*****************���ߺ������ж��������Ƿ����ظ���Ԫ��**************/
   function noRepeat(arr){
        var hash = {};
        for(var i in arr) {
            if(hash[arr[i]])
                return true;
            hash[arr[i]] = true;
        }
        return false;
    };

    function parseQueryString(url) {
        var reg_url = /^[^\?]+\?([\w\W]+)$/,
            reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
            arr_url = reg_url.exec(url),
            ret = {};
        if (arr_url && arr_url[1]) {
            var str_para = arr_url[1], result;
            while ((result = reg_para.exec(str_para)) != null) {
                ret[result[1]] = result[2];
            }
        }
        return ret;
    }

    // ��Date����չ���� Date ת��Ϊָ����ʽ��String
    // ��(M)����(d)��Сʱ(h)����(m)����(s)������(q) ������ 1-2 ��ռλ����
    // ��(y)������ 1-4 ��ռλ��������(S)ֻ���� 1 ��ռλ��(�� 1-3 λ������)
    // ���ӣ�
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //�·�
            "d+": this.getDate(), //��
            "h+": this.getHours(), //Сʱ
            "m+": this.getMinutes(), //��
            "s+": this.getSeconds(), //��
            "q+": Math.floor((this.getMonth() + 3) / 3), //����
            "S" : this.getMilliseconds() //����
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    String.prototype.toMac  = function () {
        return this.match( /.{1,2}/g).join(":");
    }
    return {
        parseQueryString : parseQueryString,
        noRepeat            : noRepeat
    };
});



