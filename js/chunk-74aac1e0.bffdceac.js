(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74aac1e0"],{"1cfb":function(t,e,n){},"2a47":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",[n("template",{slot:"header"},[t._v("网站列表"),n("br"),t._v(" 建站状态可以通过订单管理列表来进行查看")]),n("d2-crud",{ref:"d2Crud",attrs:{loading:t.loading,columns:t.columns,pagination:t.pagination,data:t.data.filter((function(e){return!t.search||e.name.toLowerCase().includes(t.search.toLowerCase())||e.domain.toLowerCase().includes(t.search.toLowerCase())})),"edit-title":"我的修改","form-options":t.formOptions},on:{"pagination-current-change":t.paginationCurrentChange}},[n("el-input",{staticStyle:{"margin-bottom":"6px"},attrs:{slot:"header",placeholder:"输入关键字搜索(网站名 或 域名)"},slot:"header",model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2)},a=[],s=n("7429"),i=n("ccaf"),c=n("5fc5"),r=n("abf1"),l=n("69a5"),p={name:"CheckWeb",components:{},data:function(){return{loading:!0,search:"",pagination:{currentPage:1,pageSize:15,total:3},columns:[{title:"站点类型",component:{name:c["a"],props:{myProps:""}},key:"appName",width:"100",filters:[{text:"企业站",value:"site"},{text:"竞价站",value:"dirSite"}],filterMethod:function(t,e){return e.appName===t},filterPlacement:"bottom-end"},{title:"域名",key:"url",width:"226",component:{name:i["a"],props:{myProps:""}}},{title:"前往后台",key:"lang",width:"168",component:{name:s["a"],props:{myProps:""}}},{title:"套餐",key:"plan",width:"",filters:[{text:"外语套餐",value:"外语套餐"},{text:"A套餐",value:"A套餐"},{text:"B套餐",value:"B套餐"},{text:"C套餐",vClue:"C套餐"},{text:"单词套餐",value:"单词套餐"}],filterMethod:function(t,e){return e.plan===t},filterPlacement:"bottom-end"},{title:"业务员",key:"ywy",fixed:"right",width:"",filters:[{text:"钟总",value:"钟总"},{text:"杨总",value:"杨总"},{text:"陈总",value:"陈总"}],filterMethod:function(t,e){return e.ywy===t},filterPlacement:"bottom-end"},{title:"开始时间",key:"startTime",sortable:!0,width:"100"},{title:"到期时间",key:"endTime",sortable:!0,width:"100"},{title:"备注",key:"note",width:"100",component:{name:r["a"],props:{myProps:""}}},{title:"客户",key:"user",width:"100"},{title:"公司名",key:"company"},{title:"客服",key:"customer",fixed:"right",width:"",filters:[{text:"海华",value:"海华"},{text:"小闲",value:"小闲"},{text:"丽欣",value:"丽欣"}],filterMethod:function(t,e){return e.customer===t},filterPlacement:"bottom-end"}],data:[],formOptions:{labelWidth:"66px",labelPosition:"left",saveLoading:!1}}},mounted:function(){var t=this;Object(l["a"])(1).then((function(e){t.data=e.data,t.pagination.total=e.total,t.loading=!1,console.log(e)})).catch((function(e){console.log("err",e),t.loading=!1,t.$notify({message:"获取数据失败"})}))},methods:{fetchData:function(){var t=this;this.loading=!0,Object(l["a"])(this.pagination.currentPage).then((function(e){t.data=e.data,t.pagination.total=e.total,t.loading=!1})).catch((function(e){console.log("err",e),t.loading=!1,t.$notify({message:"获取数据失败"})}))},handleDataChange:function(t){console.log("Mytag"+t)},paginationCurrentChange:function(t){this.pagination.currentPage=t,this.fetchData()}}},u=p,h=n("0c7c"),f=Object(h["a"])(u,o,a,!1,null,null,null);e["default"]=f.exports},"46c9":function(t,e,n){},"5fc5":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"name-wrapper",staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{staticStyle:{"font-size":"15px"},attrs:{type:t.eltagtype,effect:"plain"},on:{click:t.https}},[t._v(t._s(t.appNameOK))])],1)},a=[],s=(n("e25e"),n("9bd2"));function i(t){return Object(s["a"])({url:"/site/addSsl/"+t,method:"post"})}function c(t){return Object(s["a"])({url:"/site/delSsl/"+t,method:"post"})}var r={data:function(){return{appNameOK:"",eltagtype:""}},props:{value:{type:String},scope:{default:null},myProps:{default:null}},computed:{},watch:{scope:function(){1===parseInt(this.scope.row.isTest)?this.appNameOK="测试站":"site"===this.scope.row.appName?this.appNameOK="企业站":this.appNameOK="竞价站",1===parseInt(this.scope.row.isSsl)?this.eltagtype="success":this.eltagtype=""}},mounted:function(){1===parseInt(this.scope.row.isTest)?this.appNameOK="测试站":"site"===this.scope.row.appName?this.appNameOK="企业站":this.appNameOK="竞价站",1===parseInt(this.scope.row.isSsl)&&(this.eltagtype="success")},methods:{https:function(){var t=this,e=this.$createElement;this.$util.checkjur2(["null",0,2])&&0===parseInt(this.scope.row.isSsl)&&"site"===this.scope.row.appName?this.$confirm("",{title:this.scope.row.url,message:"你的网站正在从【HTTP】转为强制【HTTPS】",showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i(t.scope.row.id).then((function(n){var o="你已成功开启【".concat(t.scope.row.url,"】的强制HTTPS");0===n.code?(t.scope.row.isSsl=1,t.$notify({title:"强制HTTPS",duration:6e3,type:"success",message:e("b",{style:"color: teal"},o)})):t.$notify({message:"强制HTTPS失败"})})).catch((function(){t.$notify({message:"强制HTTPS失败"})})),t.eltagtype="success"})).catch((function(){})):this.$util.checkjur2(["null",0,2])&&1===parseInt(this.scope.row.isSsl)&&"site"===this.scope.row.appName&&this.$confirm("",{title:this.scope.row.url,message:"你的网站正在关闭强制【HTTPS】",showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c(t.scope.row.id).then((function(n){var o="你已成功关闭【".concat(t.scope.row.url,"】的强制HTTPS");0===n.code?(t.scope.row.isSsl=0,t.$notify({title:"关闭强制HTTPS",duration:6e3,type:"success",message:e("b",{style:"color: teal"},o)})):t.$notify({message:"关闭强制HTTPS失败"})})).catch((function(){t.$notify({message:"关闭强制HTTPS失败"})})),t.eltagtype=""})).catch((function(){}))},mountedOK:function(){"site"===this.scope.row.appName?this.appNameOK="企业站":this.appNameOK="竞价站",1===parseInt(this.scope.row.isSsl)&&(this.eltagtype="success")}}},l=r,p=(n("87e3"),n("0c7c")),u=Object(p["a"])(l,o,a,!1,null,null,null);e["a"]=u.exports},6129:function(t,e,n){},"69a5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("9bd2");function a(t){return Object(o["a"])({url:"/site/list?page="+t,method:"post"})}},7429:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-tag",{staticStyle:{"font-size":"15px",cursor:"pointer"},attrs:{effect:"plain",type:"success"},on:{click:t.toHotTai}},[t._v("登录")])],1)},a=[],s=n("aabe"),i={data:function(){return{}},props:{value:{type:String},scope:{default:null},myProps:{default:null}},watch:{value:function(){}},computed:{},mounted:function(){},methods:{toHotTai:function(){var t=this,e=this.$createElement,n=this.scope.row.id;Object(s["a"])(n).then((function(t){window.open(t)})).catch((function(){t.$notify({title:"登录后台失败",type:"error",message:e("b",{style:"color: teal"},"请稍后再试")})}))}}},c=i,r=(n("eb67"),n("0c7c")),l=Object(r["a"])(c,o,a,!1,null,null,null);e["a"]=l.exports},8117:function(t,e,n){"use strict";var o=n("46c9"),a=n.n(o);a.a},"87e3":function(t,e,n){"use strict";var o=n("1cfb"),a=n.n(o);a.a},"9ba5":function(t,e,n){},a765:function(t,e,n){"use strict";var o=n("9ba5"),a=n.n(o);a.a},aabe:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("9bd2");function a(t){return Object(o["a"])({url:"/site/login/".concat(t),method:"post"})}},abf1:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popover",{attrs:{placement:"left",width:"200",trigger:"click"}},[n("p",[t._v("域名："+t._s(this.scope.row.url))]),n("p",[t._v("公司名："+t._s(this.scope.row.company))]),n("p",[t._v("套餐："+t._s(!1===this.scope.row.planName?this.scope.row.plan:this.scope.row.planName))]),n("p",[t._v("所属："+t._s(this.scope.row.user))]),n("p",[t._v("维护："+t._s(""))]),n("p",[t._v("业务员："+t._s(this.scope.row.ywy))]),n("p",[t._v("开站时间："+t._s(this.scope.row.startTime))]),n("p",[t._v("到期时间："+t._s(this.scope.row.endTime))]),this.$util.checkjur2(["null",0])?n("p",{attrs:{prop:"customer"}},[t._v("初始账号：admin")]):t._e(),this.$util.checkjur2(["null",0])?n("p",{attrs:{prop:"customer"}},[t._v("初始密码："+t._s(this.scope.row.db_pass))]):t._e(),n("div",{staticClass:"name-wrapper",staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{staticStyle:{"font-size":"15px",cursor:"pointer"},attrs:{effect:"plain",type:"success"}},[t._v("详情")])],1)])},a=[],s={data:function(){return{}},watch:{value:function(){}},props:{value:{type:String},scope:{default:null},myProps:{default:null}},computed:{},mounted:function(){},methods:{handleClick:function(){}}},i=s,c=(n("8117"),n("0c7c")),r=Object(c["a"])(i,o,a,!1,null,null,null);e["a"]=r.exports},ccaf:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-tag",{staticStyle:{"font-size":"15px",cursor:"pointer"},attrs:{type:"info"},nativeOn:{click:function(e){return t.handleClick(e)}}},[t._v(t._s(t.weburl))])},a=[],s=(n("b0c0"),n("aabe")),i={data:function(){return{tipmessage:"后台初始账号：admin 密码：".concat(this.scope.row.db_pass),message:"通过点击该处按钮可一键登录后台",weburl:""}},props:{value:{type:String},scope:{default:null},myProps:{default:null}},watch:{value:function(){this.mountedOK()}},computed:{},mounted:function(){"site"===this.scope.row.appName?this.weburl=this.scope.row.url:this.weburl="ztb.net/".concat(this.scope.row.name)},methods:{CheckPaiming:function(){this.$router.push({name:"paiming",path:"paiming",params:{url:this.scope.row.url}})},CheckPhone:function(){this.$router.push({name:"phone",path:"phone",params:{note:this.scope.row.note,name:this.scope.row.name}})},handleClick:function(){"site"===this.scope.row.appName?window.open("http://".concat(this.scope.row.url)):window.open("http://ztb.net/".concat(this.scope.row.name))},mountedOK:function(){"site"===this.scope.row.appName?this.weburl=this.scope.row.url:this.weburl="ztb.net/".concat(this.scope.row.name)},toIndex:function(){"site"===this.scope.row.appName?window.open("http://".concat(this.scope.row.url)):window.open("http://ztb.net/".concat(this.scope.row.name))},toHotTai:function(){var t=this,e=this.$createElement,n=this.scope.row.id;Object(s["a"])(n).then((function(n){"error"===n.status?t.$notify({title:"登录后台失败",type:"error",message:e("b",{style:"color: teal"},"请稍后再试")}):window.open(n[n.length-1])})).catch((function(){t.$notify({title:"登录后台失败",type:"error",message:e("b",{style:"color: teal"},"请稍后再试")})}))},tochangefile:function(){this.$router.push({name:"changefile",path:"changefile",params:{url:this.scope.row.url,id:this.scope.row.id}})}}},c=i,r=(n("a765"),n("0c7c")),l=Object(r["a"])(c,o,a,!1,null,null,null);e["a"]=l.exports},e25e:function(t,e,n){var o=n("23e7"),a=n("e583");o({global:!0,forced:parseInt!=a},{parseInt:a})},e583:function(t,e,n){var o=n("da84"),a=n("58a8").trim,s=n("5899"),i=o.parseInt,c=/^[+-]?0[Xx]/,r=8!==i(s+"08")||22!==i(s+"0x16");t.exports=r?function(t,e){var n=a(String(t));return i(n,e>>>0||(c.test(n)?16:10))}:i},eb67:function(t,e,n){"use strict";var o=n("6129"),a=n.n(o);a.a}}]);