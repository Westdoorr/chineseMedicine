import titleImg from '@/assets/img/print/title.png';
import Logo from '@/assets/img/print/logo2.png'
import qrcode from '@/assets/img/print/qr_code.png'
// 打印插件
const Print =function(YfData, options) {
  //this 不指向打印对象，就创建一个打印对象
  if (!(this instanceof Print)) return new Print(YfData, options);
 //配置参数 不打印的样式 处方内容高度
  this.options = this.extend({
    'noPrint': '.no-print',
    'n_height':950
  }, options);
  //设置相应打印对象
  if ((typeof this.YfData) === "undefined") {
    this.YfData = YfData;
  }
  if((typeof this.YfData) === "object"){
    this.init();
  }
};

Print.prototype = {
    init: function () {
      var content = this.getStyle();
      var mainReList = this.YfData.mainReList;
      if(JSON.stringify(mainReList)!='[]'){
        for(var i = 0; i<mainReList.length; i++){
          content += this.getyfContent(mainReList[i],i);
        }
      }
      console.log(content);
      this.writeIframe(content);
    },
    //默认参数值修改
    extend: function (obj, obj2) {
      for (var k in obj2) {
        obj[k] = obj2[k];
      }
      return obj;
    },
    //引入打印样式
    getStyle: function (path) {
      var str = "",
      styles = document.querySelectorAll('style,link');
      for (var i = 0; i < styles.length; i++) {
        str += styles[i].outerHTML;
      }
      str += "<style>" + (this.options.noPrint ? this.options.noPrint : '.no-print') + "{display:none;}</style>";
      return str;
    },
    //单页的打印内容拼接
    getPrintHtml: function (content_str,obj) {
        return '<div class="print-container">'+this.getPrintHeader()+'<div class="print-info-container">'+content_str+'</div>'+this.getPrintFoot(obj)+"</div>";
    },

    //获取打印样式头部
    getPrintHeader:function(){

        var pName = this.YfData.pName ? this.YfData.pName:"";
        var age = this.YfData.age ? this.YfData.age : "";
        var gender = this.YfData.gender ? this.YfData.gender : "";
        var date = this.YfData.inquiryDate.slice(0,10) ? this.YfData.inquiryDate.slice(0,10) : "";
        var address = this.YfData.resisdence ? this.YfData.resisdence : "";
        var date_arry = new Array();
        if(date == ""){
          datae_arry[0]="";
          datae_arry[1]="";
          datae_arry[2]="";
        }else{
          date_arry = date.split("-");
        }
        let printHeadStr = '<div class="print-header-container"><div class="print-img-container"><img src="'+titleImg+'" width="441" height="44"/></div><div class="print-br-info"><div class="br-info-item"><span class="label-tag">姓名</span><span class="font-content">'+pName+'</span></div><div class="br-info-item"><span class="label-tag">性别</span> <span class="font-content">'+gender+'</span> </div> <div class="br-info-item"> <span class="label-tag">年龄</span> <span class="font-content">'+age+'</span> </div> <div class="br-info-item"> <span class="font-content">'+address+'</span> </div> <div class="br-info-item"> <span class="font-content">'+date_arry[0]+'</span> <span class="font-color-red">年</span> <span class="font-content">'+date_arry[1]+'</span> <span class="font-color-red">月</span> <span class="font-content">'+date_arry[2]+'</span> <span class="font-color-red">日</span> </div> </div> </div>';
        return printHeadStr;
    },
    //打印样式尾部
    getPrintFoot:function(obj){
        let printFoot = '<div class="print-foot-container"> <div class="frist-foot-item"> <div> <span class="label-tag">处方医师</span> <span class="underline"></span> </div> <div> <span class="label-tag">调配</span> <span class="yf-underline">'+obj.amount+'</span> <span class="font-color-red">付</span> </div> </div> <div class="seconed-foot-item"> <div class="logo-img-container"> <img src="'+qrcode+'" width="126" height="125" /> <img src="'+Logo+'" width="135" height="135" /> </div> <div class="attention"> <div class="attention-frist"> <div class="attention-li">1、每张处方仅限患者本人用药；</div> <div class="attention-li">2、一天一副药，一天三次，服用时请加热；</div> <div class="attention-li">3、服药期间如有任何疑问，请及时咨询医师；</div> <div class="attention-li">4、药物服用完后，请勿自行继续服用原方；</div> </div> <div class="attention-li attention-address"> 地址：成都市武侯区丽都路2号附17号  短信预约电话：18010601111 </div> </div> </div> </div>';
        return printFoot;
    },
    //生成方子的对应Str
    createYwListStr:function(obj){
        var amount = " ";
        if(obj.amount && obj.amount!=""){
          amount=amount+obj.amount+"付"
        }
        var title_str ='',ywStr = '';
        if(obj.type == 1){
          var remarks = obj.remarks && obj.remarks!="" ? "（"+obj.remarks+"）":"";
            title_str = '<div class="yf-item"><div class="yw-title">主方'+remarks+amount+'</div><div class="yw-list">';
        }else{
            var index= '零一二三四五六七八九'.charAt(obj.index+1);
            var remarks = obj.remarks && obj.remarks!="" ? "（"+obj.remarks+"）":"";
            //副方标题
            title_str = '<div class="yf-item"><div class="yw-title">副方'+index+remarks+amount+'</div><div class="yw-list">';
        }
        if(JSON.stringify(obj.arry)=="[]"){
            return '';
        }else{
            for(var i = 0; i < obj.arry.length;i++){
              var ywobj = obj.arry[i];
              if(ywobj.medicine == "" &&( i == 4 || i == 8 )) break;
              var remarks = ywobj.remark && ywobj.remark!="" ? "（"+ywobj.remark+"）":"";
              var medicine =ywobj.medicine && ywobj.medicine!="" ?  ywobj.medicine+'g':"";
                ywStr += '<div class="yw-item"><span class="yw-bz">'+remarks+'</span><span class="yw-name">'+medicine+'</span></div>';
            }
            ywStr = ywStr+'</div></div>';
            return title_str+ywStr
        }
    },
    //自动计算列表高度
    autoTableHeight:function(t_arry){
      var new_length;
      var line_count;
      line_count = t_arry.length/4;
      if(JSON.stringify(t_arry)!='[]'){
        for(let i =0;i<line_count;i++){
          if(t_arry[4*i].medicine == "" || t_arry[4*i].medicine == null){
            new_length = t_arry.length-(line_count-i)*4
          }else {
            new_length = t_arry.length
          }
        }
        //添加间距以及标题高度
        var tmp_height = 50;
        var line_num = Math.ceil(new_length/4);
        return tmp_height + line_num*50;
      }else{
        return 0;
      }

    },
    //封装参数
    createdYwParams:function(type,index,t_arry,remarks,amount){
      var obj = new Object();
      obj.remarks = remarks;
      obj.type=type;
      obj.index = index;
      obj.amount = amount;
      obj.arry = t_arry;
      return obj;
    },
    createTable:function(type,index,t_arry,y_str,height,remarks,amount,mainRe) {
        var r_obj = new Object();
        r_obj.ywStr = y_str;
        r_obj.content_str = '';
        r_obj.tmp_height = height;
        console.log("r_obj.tmp_height++"+r_obj.tmp_height)
        if(JSON.stringify(t_arry) != '[]'){
          var tmp_height = r_obj.tmp_height + this.autoTableHeight(t_arry);
          console.log("tmp_height++"+tmp_height)
          if(tmp_height <= this.options.n_height){
              //不需分页 封装参数生成Str
              var obj= this.createdYwParams(type,index,t_arry,remarks,amount);
              var str = this.createYwListStr(obj);
              r_obj.tmp_height = tmp_height;
              r_obj.ywStr = r_obj.ywStr + str;
          }else{
              //需要分页  拆分主方的药物列表
              //第一步 拆分药物列表
              var a_height = tmp_height-this.options.n_height;
              var num = Math.ceil(a_height/50);
              var s_index = num*4;
              var f_arry = t_arry.slice(0,t_arry.length - s_index);
              var new_arry = t_arry.slice(t_arry.length - s_index,t_arry.length);
              var o_obj= this.createdYwParams(type,index,f_arry,remarks,amount);
              var y_str = this.createYwListStr(o_obj);
              r_obj.ywStr = r_obj.ywStr + y_str;
              //生成第一页的打印内容
              r_obj.content_str = r_obj.content_str + this.getPrintHtml(r_obj.ywStr,mainRe);
              //重置 条件以及内容
              r_obj.tmp_height = this.autoTableHeight(new_arry);
              var n_obj= this.createdYwParams(type,index,new_arry,remarks,amount);
              r_obj.ywStr = this.createYwListStr(n_obj);
          }
          return r_obj;
          }
      },
    /**
    打印内容 高度计算 自动分页 */
    getyfContent:function(mainRe,i){
        //循环数据内容生成打印内容，计算高度是否需要分页就在创建一个打印容器
        var content_str='',
              ywStr = '',
              tmp_height = 0;
        //主方列表
        // if(JSON.stringify(mainReList)!='[]'){
        //     for(var i = 0; i<mainReList.length; i++){
              //循环生成主方样式
              if(JSON.stringify(mainRe.recipeDetailList)!='[]'){
                console.log("zhelishi1")
                  var t_obj = this.createTable(1,i,mainRe.recipeDetailList,ywStr,tmp_height,mainRe.remarks,mainRe.amount,null);
                  content_str = content_str + t_obj.content_str;
                  ywStr = t_obj.ywStr;
                  tmp_height = t_obj.tmp_height;
              }
              if(JSON.stringify(mainRe.viceReList)!='[]'){
              //第二步再来生成字符串
                console.log("zhelishi2")
                  for(var j=0;j<mainRe.viceReList.length;j++){
                       if(JSON.stringify(mainRe.viceReList[j].viceRecipeDetailList)!='[]'){
                           var t_obj = this.createTable(2,j,mainRe.viceReList[j].viceRecipeDetailList,ywStr,tmp_height,mainRe.viceReList[j].remarks,mainRe.viceReList[j].amount,mainRe);
                          content_str = content_str + t_obj.content_str;
                          ywStr = t_obj.ywStr;
                          tmp_height = t_obj.tmp_height;
                       }
                  }
              }
            // }
            if(ywStr!=""){
              ywStr = this.getPrintHtml(ywStr,mainRe);
            }
            content_str = content_str + ywStr;
            return content_str;
        // }
    },
    writeIframe: function (content) {
      var w, doc, iframe = document.createElement('iframe'),
        f = document.body.appendChild(iframe);
      iframe.id = "myIframe";
      iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";

      w = f.contentWindow || f.contentDocument;
      doc = f.contentDocument || f.contentWindow.document;
      doc.open();
      content = '<div class="container"><div>'+content+'</div></div>';
      doc.write(content);
      doc.close();
      var cssString = 'html{     font-size:10px;     margin: 0px;     padding: 0px; } body{     display: flex;     align-items: center;     justify-content: center;     margin: 0px; }';
      this.addCssByStyle(doc,cssString);
      var _that = this;
      //给图片一些加载时间
      setTimeout(function () {
        _that.toPrint(w);
      },1000);
      setTimeout(function () {
        document.body.removeChild(iframe)
      }, 2000);
    },
    addCssByStyle(doc,cssString){
      var style=doc.createElement("style");
      style.setAttribute("type", "text/css");
      if(style.styleSheet){// IE
        style.styleSheet.cssText = cssString;
      } else {// w3c
        var cssText = doc.createTextNode(cssString);
        style.appendChild(cssText);
      }

      var heads = doc.getElementsByTagName("head");
      if(heads.length)
        heads[0].appendChild(style);
      else
        doc.documentElement.appendChild(style);
    },
    toPrint: function (frameWindow) {
      try {
        setTimeout(function () {
          frameWindow.focus();
          try {
            if (!frameWindow.document.execCommand('print', false, null)) {
              frameWindow.print();
            }
          } catch (e) {
            frameWindow.print();
          }
          frameWindow.close();
        }, 10);
      } catch (err) {
        console.log('err', err);
      }
    }
  };
export default Print;
