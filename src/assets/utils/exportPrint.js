// 打印插件
const exportPrint =function(exportData, options) {
  //this 不指向打印对象，就创建一个打印对象
  if (!(this instanceof exportPrint)) return new exportPrint(exportData, options);
 //配置参数 不打印的样式 处方内容高度
  this.options = this.extend({
    'noPrint': '.no-print',
    'n_height':560
  }, options);
  //设置相应打印对象
  if ((typeof this.exportData) === "undefined") {
    this.exportData = exportData;
  }
  if((typeof this.exportData) === "object"){
    if(this.exportData.type && this.exportData.type == "1"){
      this.init();
    }else{
      this.new_page_print();
    }
  }
};

exportPrint.prototype = {
    init: function () {
        var w, doc, iframe, f;
        //第一步判断是否存在相应的iframe容器
      var iframedom =   document.getElementById("myIframe");
      if(iframedom && typeof iframedom == "object"){
        //有对象 获取相应的doc
        w = iframedom.contentWindow || iframedom.contentDocument;
        doc = iframedom.contentDocument || iframedom.contentWindow.document;
        //清空iframe 中body 下的内容
        iframedom.contentWindow.document.body.innerText = "";
      }else{
        iframedom = document.createElement('iframe'),
        f = document.body.appendChild(iframedom);
        iframedom.id = "myIframe";
        iframedom.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
        w = iframedom.contentWindow || iframedom.contentDocument;
        doc = iframedom.contentDocument || iframedom.contentWindow.document;
      }
      
      doc.open();
      //写入相应的head标签
      //遍历相应的值 循环值
      for(var key in this.exportData){
        var str = this.getContentStr(this.exportData[key]);
        doc.write(str);
      }
      doc.close();
      //写入样式
      var cssString = '@media print{.bl-print-container{page-break-after:always;}}body{margin: 0px;padding: 0px;}.bl-print-container{width: 560px;height: 794px;min-width: 560px;min-height: 794px;}.print-item-container{width: 100%;height: auto;margin-bottom: 30px;}.title span{width: 56px;height: 20px;font-family: PingFangSC-Medium;font-size: 14px;font-weight: normal;font-stretch: normal;letter-spacing: 0px;color: #000000;}.division-line{border: 0.5px solid #000000;}.basic-container .basic-container-item{width: 100%;display: flex;justify-content:flex-start;}.basic-container .basic-container-item span{font-family: PingFangSC-Regular;font-size: 14px;font-weight: normal;font-stretch: normal;letter-spacing: 0px;color: #000000;margin-left: 20px;}.basic-container .basic-container-item span:first-child{margin-left: 0px;}.font-style{font-family: PingFangSC-Regular;font-size: 14px;font-weight: normal;font-stretch: normal;letter-spacing: 0px;color: #000000;}.yf-title{display: flex;justify-content: space-between;}.yp-item-container{display: flex;justify-content: space-between;flex-wrap: wrap;}.yp-item{width: 140px;text-align: center;font-family: PingFangSC-Regular;font-size: 14px;font-weight: normal;font-stretch: normal;letter-spacing: 0px;color: #000000;margin-bottom: 6px;}.yf-item{margin-bottom: 20px;}';
      
      this.addCssByStyle(doc,cssString);
       //让页面渲染一下
       var _that = this;
      setTimeout(function () {
        _that.toPrint(w);
      },100);
    },
    new_page_print:function(){
        var oWin = window.open("print.html","_blank");
        if(oWin) {
          oWin.document.open();
          for(var key in this.exportData){
            var str = this.getContentStr(this.exportData[key]);
            oWin.document.write(str);
          }
          oWin.document.close();
          var cssString = '@media print{.bl-print-container{page-break-after:always;}}body{margin: 0px;padding: 0px;}.bl-print-container{width: 560px;height: 794px;min-width: 560px;min-height: 794px;}.print-item-container{width: 100%;height: auto;margin-bottom: 30px;}.title span{width: 56px;height: 20px;font-family: PingFangSC-Medium;font-size: 14px;font-weight: normal;font-stretch: normal;letter-spacing: 0px;color: #000000;}.division-line{border: 0.5px solid #000000;}.basic-container .basic-container-item{width: 100%;display: flex;justify-content:flex-start;}.basic-container .basic-container-item span{font-family: PingFangSC-Regular;font-size: 14px;font-weight: normal;font-stretch: normal;letter-spacing: 0px;color: #000000;margin-left: 20px;}.basic-container .basic-container-item span:first-child{margin-left: 0px;}.font-style{font-family: PingFangSC-Regular;font-size: 14px;font-weight: normal;font-stretch: normal;letter-spacing: 0px;color: #000000;}.yf-title{display: flex;justify-content: space-between;}.yp-item-container{display: flex;justify-content: space-between;flex-wrap: wrap;}.yp-item{width: 140px;text-align: center;font-family: PingFangSC-Regular;font-size: 14px;font-weight: normal;font-stretch: normal;letter-spacing: 0px;color: #000000;margin-bottom: 6px;}.yf-item{margin-bottom: 20px;}';
      
          this.addCssByStyle(oWin.document,cssString);
          oWin.print();
          setTimeout(function () {
            oWin.close();
          },100);
        }
        else {
        }
    },
    //默认参数值修改
    extend: function (obj, obj2) {
      for (var k in obj2) {
        obj[k] = obj2[k];
      }
      return obj;
    },
    /**
     * 构建病人基本信息字符串
     */
    getBlJbBasicInfoStr:function(obj_data){
        var pName = obj_data.pName ? obj_data.pName:"";
        var age = obj_data.age ? obj_data.age : "";
        var gender = obj_data.gender ? obj_data.gender : "";
        var date = obj_data.date ? obj_data.date : "";
        var address = obj_data.resisdence ? obj_data.resisdence : "";
        var date = obj_data.date ? obj_data.date : "";
        var headStr = '<div class="print-item-container"><div class="title"><span>基本信息</span></div><hr class="division-line" /><div class="basic-container"><div class="basic-container-item"><span>姓名：'+pName+'</span><span>性别：'+gender+'</span><span>年龄：'+age+'</span></div><div class="basic-container-item"><span>来源地：'+address+'</span><span>就诊时间：'+date+'</span></div></div></div>'
        return headStr;
    },
    /**
     * 获取诊断标签字符串
     */
    getZdLabelStr:function(obj_data){
        var diagnoseLabel = obj_data.diagnoseLabel ? obj_data.diagnoseLabel : "";
        var Str = '<div class="print-item-container"><div class="title"><span>诊断标签</span></div><hr class="division-line" /><div class="basic-container"><span class="font-style">'+diagnoseLabel+'</span></div></div>';
        return Str;
    },
    /**
     * 获取病情描述标签
     */
    getBqmsStr:function(obj_data){
        var bqms = obj_data.description ? obj_data.description : '';
        var Str = '<div class="print-item-container"><div class="title"><span>病情描述</span></div><hr class="division-line" /><div class="basic-container"><span class="font-style">'+bqms+'</span></div></div>';
        return Str;
    },
    getYfDateStr:function(obj_data){
        var con_str = '';
        //循环遍历所在药方列表
        if(obj_data.mainReList && JSON.stringify(obj_data.mainReList) != "[]"){
            con_str = con_str +'<div class="yf-info-container">';
            for(var i in obj_data.mainReList){
                //构建主方药物
                var zf_line_num = parseInt(i) + 1;
                var remarks = obj_data.mainReList[i].remarks ? '('+obj_data.mainReList[i].remarks+')' : '';
                var title_str = '<div class="yf-item"><div class="yf-title"><span class="font-style">主方'+zf_line_num+remarks+'</span><span class="font-style">'+obj_data.mainReList[i].amount+'付</span></div><hr class="division-line" />';
                con_str = con_str + title_str;
                if(obj_data.mainReList[i].recipeDetailList&&JSON.stringify(obj_data.mainReList[i].recipeDetailList) != "[]"){
                    var ywStr = '<div class="yp-item-container">';
                    for(var j in obj_data.mainReList[i].recipeDetailList){
                        var yw_temp_str = '<span class="yp-item">'+obj_data.mainReList[i].recipeDetailList[j].medicine+'</span>';
                        ywStr = ywStr +yw_temp_str;
                    }
                    ywStr = ywStr + '</div></div>';
                    con_str = con_str + ywStr;
                }else{
                    con_str =con_str+'</div>';
                }
                //构建副方药物
                if(obj_data.mainReList[i].viceReList && JSON.stringify(obj_data.mainReList[i].viceReList) != "[]"){
                    for(var m in obj_data.mainReList[i].viceReList){
                        var ff_line_num = parseInt(m) + 1;
                        var remarks = obj_data.mainReList[i].viceReList[m].remarks ? '('+obj_data.mainReList[i].viceReList[m].remarks+')' : '';
                        var title_str = '<div class="yf-item"><div class="yf-title"><span class="font-style">副方'+ff_line_num+remarks+'</span><span class="font-style">'+obj_data.mainReList[i].viceReList[m].amount+'付</span></div><hr class="division-line" />';
                        con_str = con_str + title_str;
                        if(obj_data.mainReList[i].viceReList[m].viceRecipeDetailList&&JSON.stringify(obj_data.mainReList[i].viceReList[m].viceRecipeDetailList) != "[]"){
                            var ywStr = '<div class="yp-item-container">';
                            for(var n in obj_data.mainReList[i].viceReList[m].viceRecipeDetailList){
                                var yw_temp_str = '<span class="yp-item">'+obj_data.mainReList[i].viceReList[m].viceRecipeDetailList[n].medicine+'</span>';
                                ywStr = ywStr +yw_temp_str;
                            }
                            ywStr = ywStr + '</div></div>';
                            con_str = con_str + ywStr;
                        }else{
                          con_str = con_str +'</div>'
                        }
                    }
                }
            }
            con_str = con_str + '</div>'
          }
        return con_str;
    },
    /**
     * 获取一个病人的打印内容字符串
     */
    getContentStr:function(obj_data){
        var con_str = '';
        if(obj_data){
            con_str = '<div class="bl-print-container">'+this.getBlJbBasicInfoStr(obj_data)+this.getZdLabelStr(obj_data)+this.getBqmsStr(obj_data)+this.getYfDateStr(obj_data)+'</div>';
            // 构建病人基本信息
        }
        return con_str;
    },

    // writeIframe: function (content) {
    //   var w, doc, iframe = document.createElement('iframe'),
    //     f = document.body.appendChild(iframe);
    //   iframe.id = "myIframe";
    //   iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
  
    //   w = f.contentWindow || f.contentDocument;
    //   doc = f.contentDocument || f.contentWindow.document;
    //   doc.open();
    //   doc.write(content);
    //   doc.close();
      
    //   var _that = this;
    //   //给图片一些加载时间
    //   setTimeout(function () {
    //     _that.toPrint(w);
    //   },1000);
    //   setTimeout(function () {
    //     document.body.removeChild(iframe)
    //   }, 2000);
    // },
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
      if(heads.length){
        heads[0].appendChild(style);
      }else{
        doc.documentElement.appendChild(style);
      }
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
export default exportPrint;
