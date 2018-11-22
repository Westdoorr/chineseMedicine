// table打印插件
const tablePrint =function(dom, options) {
    if (!(this instanceof tablePrint)) return new tablePrint(dom, options);

    this.options = this.extend({
      'noPrint': '.no-print',
      'type' : '1',
      'data' :{}
    }, options);
  
    if ((typeof dom) === "string") {
      this.dom = document.querySelector(dom);
    } else {
      this.dom = dom;
    }
    this.init();
};

tablePrint.prototype = {
    init: function () {
        // var content = this.getStyle() + this.getTableContent();
        var content = "";
        if(this.options.type == "1"){
            content = this.getTableContent();
        }else{
            content = this.getYytjContent();
        }
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
      styles = document.querySelectorAll('style');
      for (var i = 0; i < styles.length; i++) {
        str += styles[i].outerHTML;
      }
      str += "<style>" + (this.options.noPrint ? this.options.noPrint : '.no-print') + "{display:none;}</style>";
      
      return str;
    },
    /**
     * 设置用药统计的数据统计内容
     */
    getYytjContent(){
       var data_obj = this.options.data;
       var headStr = '<div class="header_container">'+data_obj.rangDate+'</div>';
       var content_head = '<div class="table_container"> <table cellspacing="0" cellpadding="0" border="0" width="100%"> <colgroup> <col width="43" /> <col width="66" /> <col width="59" /> <col width="43" /> <col width="66" /> <col width="59" /> <col width="43" /> <col width="66" /> <col width="59" /> </colgroup> <tbody> <tr> <th>序号</th> <th>药名</th> <th>药量(g)</th> <th>序号</th> <th>药名</th> <th>药量(g)</th> <th>序号</th> <th>药名</th> <th>药量(g)</th> </tr>';
       var str = '';
       var list_lenght = 0;
       if(JSON.stringify(data_obj.list1)!="[]"){
           list_lenght = data_obj.list1.length;
       }
       for(var i = 0 ;i < list_lenght; i++){
           var medicine = data_obj.list1[i].medicine ? data_obj.list1[i].medicine : '';
           var dose = data_obj.list1[i].dose ? data_obj.list1[i].dose : '';
           var medicine1 = data_obj.list2[i].medicine ? data_obj.list2[i].medicine : '';
           var dose1 = data_obj.list2[i].dose ? data_obj.list2[i].dose : '';
           var medicine2 = data_obj.list3[i].medicine ? data_obj.list3[i].medicine : '';
           var dose2 = data_obj.list3[i].dose ? data_obj.list3[i].dose : '';
           str = str+ '<tr><td>'+(i+1)+'</td><td>'+medicine+'</td><td>'+dose+'</td><td>'+(i+list_lenght+1)+'</td><td>'+medicine1+'</td><td>'+dose1+'</td><td>'+(i+list_lenght*2+1)+'</td><td>'+medicine2+'</td><td>'+dose2+'</td></tr>';
       }
       str = headStr+content_head+str + '</tbody> </table> </div>';
       return str;
    },
    /**
     * 设置问诊情况的打印内容
     */
    getTableContent(){
       var data_obj = this.options.data;
       var headStr = '<div class="header_container">'+data_obj.rangDate+'</div>';
       var content_head = '<div class="table_container"> <table cellspacing="0" cellpadding="0" border="0" width="100%"><colgroup> <col width="50" /> <col width="137" /> <col width="50" /> <col width="94" /> <col width="72" /> <col width="77" /> </colgroup> <tbody> <tr> <th width="50">序号</th> <th width="137">姓名</th> <th width="50">年龄</th> <th width="94">来源地</th> <th width="72">第几次</th> <th width="77">付数</th> </tr>';
       var str = '';
       var list_lenght = 0;
       if(JSON.stringify(data_obj.list)!="[]"){
           list_lenght = data_obj.list.length;
       }
       for(var i = 0 ;i < list_lenght; i++){
           var pName = data_obj.list[i].pName ? data_obj.list[i].pName : '';
           var age = data_obj.list[i].age ? data_obj.list[i].age : '';
           var sourceArea = data_obj.list[i].residence ? data_obj.list[i].residence :'';
           var times = data_obj.list[i].times ? data_obj.list[i].times :'';
           var amount = data_obj.list[i].amount ? data_obj.list[i].amount :'';
           str = str+ '<tr><td>'+(i+1)+'</td><td>'+pName+'</td><td>'+age+'</td><td>'+sourceArea+'</td><td>'+times+'</td><td>'+amount+'</td></tr>';
       }
       str = headStr+content_head+str + '</tbody> </table> </div>';
       return str;
    },
    /**
     * 创建内嵌样式
     * @param {document} doc 
     * @param {String} cssString 样式内容
     */
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
    getWzqkStyle:function(){
         return '@page :pseudo-class {size: A5; margin:0;} html { font-size: 10px; margin: 0px; padding: 0px; }  body { display: flex; margin: 0px; flex-direction: column; } .header_container{ width:480px; height: 20px; margin-bottom: 5px; font-family: PingFangSC-Regular; font-size: 13px; font-weight: normal; font-stretch: normal; letter-spacing: 0px; color: #1f2d3d; } .table_container{ width:480px; height: auto; } table{table-layout: fixed;word-break: break-all; word-wrap: break-word;}  .table_container th,td{ text-align: left; padding-left: 5px; } tr{ height: 35px; line-height: 35px; } tr:nth-child(odd){ background:#FAFAFA;  } td{ font-family: PingFangSC-Regular; font-size: 14px; font-weight: normal; font-stretch: normal; letter-spacing: 0px; color: #1f2d3d;     overflow: hidden;text-overflow: ellipsis;white-space: nowrap;} tr:first-child{ background-color: #e5e9f2; } tr:first-child th{ font-family: PingFangSC-Medium; font-size: 14px; font-weight: normal; font-stretch: normal; letter-spacing: 0px; color: #475669; }';
    },
    getYytjStyle:function(){
        return '@page :pseudo-class {size: A5; margin:0;} html { font-size: 10px; margin: 0px; padding: 0px; }  body { display: flex; margin: 0px; flex-direction: column; } .header_container{ width:480px; height: 20px; margin-bottom: 5px; font-family: PingFangSC-Regular; font-size: 13px; font-weight: normal; font-stretch: normal; letter-spacing: 0px; color: #1f2d3d; } .table_container{ width:480px; height: auto; } table { table-layout: fixed; word-break: break-all; word-wrap: break-word; } .table_container th,td{ text-align: left; padding-left: 5px; } tr{ height: 25px; line-height: 25px; } tr:nth-child(odd){ background:#FAFAFA;  } td{ font-family: PingFangSC-Regular; font-size: 10px; font-weight: normal; font-stretch: normal; letter-spacing: 0px; color: #1f2d3d;overflow: hidden;text-overflow: ellipsis;white-space: nowrap; } tr:first-child{ background-color: #e5e9f2; } tr:first-child th{ font-family: PingFangSC-Medium; font-size: 10px; font-weight: normal; font-stretch: normal; letter-spacing: 0px; color: #475669; }';
    },
    /**
     * 创建iframe 页面
     */
    writeIframe: function (content) {
        var w, doc, iframe = document.createElement('iframe'),
          f = document.body.appendChild(iframe);
        iframe.id = "myIframe";
        iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
    
        w = f.contentWindow || f.contentDocument;
        doc = f.contentDocument || f.contentWindow.document;
        doc.open();
      //  content = '<div class="container"><div>'+content+'</div></div>';
        doc.write(content);
        doc.close();
        // var cssString = 'html{     font-size:10px;     margin: 0px;     padding: 0px; } body{     display: flex;     align-items: center;     justify-content: center;     margin: 0px; }';
        // this.addCssByStyle(doc,cssString);
        var  cssString = '';
        if(this.options.type == "1"){
            cssString = this.getWzqkStyle();
        }else{
            cssString = this.getYytjStyle();
        }
        //var  cssString = '@page :pseudo-class {size: A5; margin:0;} html { font-size: 10px; margin: 0px; padding: 0px; }  body { display: flex; margin: 0px; flex-direction: column; } .header_container{ width:480px; height: 20px; margin-bottom: 5px; font-family: PingFangSC-Regular; font-size: 13px; font-weight: normal; font-stretch: normal; letter-spacing: 0px; color: #1f2d3d; } .table_container{ width:480px; height: auto; } table{table-layout: fixed;word-break: break-all; word-wrap: break-word;}  .table_container th,td{ text-align: left; padding-left: 5px; } tr{ height: 35px; line-height: 35px; } tr:nth-child(odd){ background:#FAFAFA;  } td{ font-family: PingFangSC-Regular; font-size: 14px; font-weight: normal; font-stretch: normal; letter-spacing: 0px; color: #1f2d3d;     overflow: hidden;text-overflow: ellipsis;white-space: nowrap;} tr:first-child{ background-color: #e5e9f2; } tr:first-child th{ font-family: PingFangSC-Medium; font-size: 14px; font-weight: normal; font-stretch: normal; letter-spacing: 0px; color: #475669; }';
        this.addCssByStyle(doc,cssString);
        var _that = this;
        //给图片一些加载时间
        setTimeout(function () {
          _that.toPrint(w);
        },500);
        setTimeout(function () {
          document.body.removeChild(iframe);
        }, 1000);
      },
      /**
       * 调用打印
       */
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
export default tablePrint;
