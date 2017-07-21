Date.prototype.Format = function(fmt) { //author: meizz 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
const appId = 'G6wculYbfr0PoDxdg3kpiR63-gzGzoHsz';
const appKey = 'OEk9gcdYlvAx3MbwvKHfmFMM';
AV.init({
	appId,
	appKey
});


const rules = {
      name: [
        { required: true, message: '请输入活动名称', trigger: 'blur' }
      ],
      type: [
        { required: true, message: '请选择类型', trigger: 'change' }
      ],
      point: [
        {  required: true, message: '请输入坐标', trigger: 'blur' }
      ],
      cardName: [
        {  required: true, message: '请输入优惠券名称', trigger: 'blur' }
      ],
      address: [
        { required: true, message: '请输入店铺地址', trigger: 'blur' }
      ],
      logo: [
        { required: true, message: '请上传店铺logo', trigger: 'blur' }
      ],
}
Vue.prototype.rules= rules;

function deepCopy(obj){
    if(typeof obj != 'object'){
        return obj;
    }
    var newobj = {};
    for ( var attr in obj) {
        newobj[attr] = deepCopy(obj[attr]);
    }
    return newobj;
}