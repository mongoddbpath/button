(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51175323"],{1148:function(t,e,o){"use strict";var s=o("a691"),n=o("1d80");t.exports="".repeat||function(t){var e=String(n(this)),o="",a=s(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(o+=e);return o}},"1cc5":function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var s=o("9bd2");function n(t){return Object(s["a"])({url:"/node/list",method:"get",params:t,withCredentials:!0})}},3273:function(t,e,o){},"408a":function(t,e,o){var s=o("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},"8d2d":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("d2-container",[o("el-card",{staticClass:"m-box-card",staticStyle:{padding:"0"},attrs:{shadow:"hover"}},[o("el-row",[o("el-col",{staticStyle:{width:"auto","margin-right":"28px"}},[this.$util.checkjur2(["null",0])?o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("添加服务器")]):t._e()],1),o("el-col",{staticStyle:{width:"20%"}},[o("div",{staticClass:"inputok"},[o("div",{staticClass:"input2"},[t._v("状态：")]),o("el-select",{staticClass:"input3",attrs:{placeholder:"请选择"},model:{value:t.searchdata.status,callback:function(e){t.$set(t.searchdata,"status",e)},expression:"searchdata.status"}},t._l(t.options,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),o("el-col",{staticStyle:{width:"20%"}},[o("div",{staticClass:"inputok"},[o("div",{staticClass:"input2"},[t._v("区域：")]),o("el-select",{staticClass:"input3",attrs:{placeholder:"请选择"},model:{value:t.searchdata.address,callback:function(e){t.$set(t.searchdata,"address",e)},expression:"searchdata.address"}},t._l(t.options2,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),o("el-col",{staticStyle:{width:"20%"}},[o("div",{staticClass:"inputok"},[o("div",{staticClass:"input2"},[t._v("IP：")]),o("el-input",{staticClass:"input3",staticStyle:{"margin-left":"-12px"},model:{value:t.searchdata.ip,callback:function(e){t.$set(t.searchdata,"ip",e)},expression:"searchdata.ip"}})],1)]),o("el-col",{staticStyle:{width:"20%"}},[o("div",{staticClass:"inputok"},[o("el-col",{staticStyle:{width:"auto","margin-left":"28px"}},[o("el-button",{attrs:{type:"success"}},[t._v("搜索")]),o("el-button",{attrs:{type:"warning"},on:{click:t.resetsearch}},[t._v("重置")])],1)],1)])],1)],1),o("d2-crud",{ref:"d2Crud",attrs:{pagination:t.pagination,columns:t.columns,data:t.data.filter((function(e){return!t.search||e.ip.toLowerCase().includes(t.search.toLowerCase())})),"edit-title":"用户列表修改","form-options":t.formOptions},on:{"dialog-open":t.handleDialogOpen,"row-edit":t.handleRowEdit,"dialog-cancel":t.handleDialogCancel,"row-remove":t.handleRowRemove,"pagination-current-change":t.paginationCurrentChange}}),o("el-dialog",{attrs:{title:"添加服务器",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("el-form",{ref:"rulesForm",staticClass:"demo-rulesForm",attrs:{model:t.rulesForm,"status-icon":"",rules:t.rules,"label-width":"100px"}},[o("el-form-item",{staticStyle:{"margin-top":"16px"},attrs:{label:"服务器IP",prop:"ip",required:""}},[o("el-input",{attrs:{placeholder:"输入服务器IP(格式：2.3.6.8)"},model:{value:t.rulesForm.ip,callback:function(e){t.$set(t.rulesForm,"ip",e)},expression:"rulesForm.ip"}})],1),o("el-form-item",{attrs:{label:"区域"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择服务器所在的区域"},model:{value:t.rulesForm.region,callback:function(e){t.$set(t.rulesForm,"region",e)},expression:"rulesForm.region"}},t._l(t.region1,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"密码",required:""}},[o("el-input",{attrs:{type:"password","show-password":"",placeholder:"这里填写购买服务器时候设定的密码",autocomplete:"off"},model:{value:t.rulesForm.auth,callback:function(e){t.$set(t.rulesForm,"auth",e)},expression:"rulesForm.auth"}})],1),o("el-form-item",{attrs:{label:"确认密码",prop:"ckey"}},[o("el-input",{attrs:{type:"password","show-password":"",placeholder:"请再次输入购买服务器时候设定的密码",autocomplete:"off"},model:{value:t.ckey,callback:function(e){t.ckey=e},expression:"ckey"}})],1),o("el-form-item",{attrs:{label:"备注",prop:"note"}},[o("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:t.rulesForm.note,callback:function(e){t.$set(t.rulesForm,"note",e)},expression:"rulesForm.note"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),o("el-button",{on:{click:t.reset}},[t._v("重置")]),o("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("提交")])],1)],1)],1)},n=[],a=(o("b64b"),o("159b"),o("d6df")),i=o("1cc5"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{cursor:"pointer"}},[o("el-tag",{attrs:{type:t.type}},[t._v(t._s(t.text))])],1)},l=[],c={data:function(){return{type:"",value:!0,statusok:this.scope.row.status,text:""}},props:{scope:{default:null},myProps:{default:null}},computed:{},watch:{scope:function(){0===this.scope.row.status?(this.text="配置中",this.type="info"):1===this.scope.row.status?(this.text="使用中",this.type="success"):2===this.scope.row.status?(this.text="存档",this.type="danger"):3===this.scope.row.status&&(this.text="废弃",this.type="danger")}},mounted:function(){this.ok()},methods:{ok:function(){0===this.statusok?(this.text="配置中",this.type="info"):1===this.statusok?(this.text="使用中",this.type="success"):2===this.statusok?(this.text="存档",this.type="danger"):3===this.statusok&&(this.text="废弃",this.type="danger")}}},u=c,p=o("0c7c"),d=Object(p["a"])(u,r,l,!1,null,null,null),h=d.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-tooltip",{attrs:{placement:"left"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 磁盘总量："+t._s(t.total)),o("br"),o("br"),t._v(" 剩余总量："+t._s(t.free)),o("br"),o("br"),t._v(" 剩余磁盘："+t._s(t.used)+"%")]),o("div",{staticStyle:{cursor:"pointer"}},[o("el-tag",{attrs:{type:t.type}},[t._v("磁盘:"+t._s((100-t.used).toFixed(2))+"% cpu: 10%")])],1)])},m=[],g=(o("b680"),o("e25e"),o("cebe")),v=o.n(g),y={data:function(){return{type:"",total:"",free:"",used:"",text:""}},props:{scope:{default:null},myProps:{default:null}},computed:{},watch:{scope:function(){}},mounted:function(){this.ok()},methods:{ok:function(){var t="http://".concat(this.scope.row.ip,"/DiskCheck.php"),e={url:t},o="http://api.21cl.cn/getdata.php",s=this;v.a.post(o,e).then((function(t){var e=t.data.disk1,o=t.data.disk2,n=(parseInt(o)/parseInt(e)*100).toFixed(2);s.text=n+"%",s.type=n<20?"danger":"success",s.total=e,s.free=o,s.used=n})).catch((function(t){console.log(t)}))}}},b=y,w=Object(p["a"])(b,f,m,!1,null,null,null),k=w.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",[this.$util.checkjur2(["null",0])?o("el-button",{attrs:{type:t.type},nativeOn:{click:function(e){return t.handleClick(e)}}},[t._v(t._s(t.text))]):t._e()],1)},F=[],$={data:function(){return{isSsl:!0}},props:{scope:{default:null},myProps:{default:null}},computed:{type:function(){return this.isSsl?"success":"danger"},text:function(){return this.isSsl?"启":"停"}},mounted:function(){},methods:{handleClick:function(){var t=this,e=this.$createElement,o=this.type;if("success"===o){var s="你正在停用【".concat(this.scope.row.ip,"】服务器，你确定要这么做吗？"),n="你已成功停用【".concat(this.scope.row.ip,"】服务器");this.$confirm(s,"停用服务器",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$notify({title:"停用服务器",duration:6e3,type:"success",message:e("b",{style:"color: teal"},n)}),t.isSsl=!t.isSsl})).catch((function(){}))}else{var a="你正在开启【".concat(this.scope.row.ip,"】服务器，你确定要这么做吗？"),i="你已成功开启【".concat(this.scope.row.ip,"】服务器");this.$confirm(a,"开启服务器",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then((function(){t.$notify({title:"开启服务器",duration:6e3,type:"success",message:e("b",{style:"color: teal"},i)}),t.isSsl=!t.isSsl})).catch((function(){}))}}}},_=$,C=Object(p["a"])(_,x,F,!1,null,null,null),S=C.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-row",[this.$util.checkjur2(["null",0])?o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible2=!0}}},[t._v("编辑")]):t._e()],1),o("el-dialog",{attrs:{title:t.title,visible:t.dialogFormVisible2,"append-to-body":!0},on:{"update:visible":function(e){t.dialogFormVisible2=e}}},[o("el-form",{ref:"rulesForm",staticClass:"demo-rulesForm",attrs:{model:t.rulesForm,"status-icon":"","label-width":"100px"}},[o("el-form-item",{attrs:{label:"状态"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择服务器所在的区域"},model:{value:t.rulesForm.status,callback:function(e){t.$set(t.rulesForm,"status",e)},expression:"rulesForm.status"}},t._l(t.status1,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"区域"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择服务器所在的区域"},model:{value:t.rulesForm.region,callback:function(e){t.$set(t.rulesForm,"region",e)},expression:"rulesForm.region"}},t._l(t.region1,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"备注",prop:"note"}},[o("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:t.rulesForm.note,callback:function(e){t.$set(t.rulesForm,"note",e)},expression:"rulesForm.note"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible2=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("提交")])],1)],1)],1)},E=[],O={data:function(){return{title:"【".concat(this.scope.row.ip,"】服务器编辑"),dialogFormVisible2:!1,region1:["大陆","香港","其他国家"],status1:["使用中","满载","归档停用"],ckey:"",rulesForm:{ip:"",auth:"",note:"",region:"",status:""}}},props:{scope:{default:null},myProps:{default:null}},mounted:function(){this.$util.authen(["null",0,2]),1===this.scope.row.status?this.rulesForm.status="使用中":this.rulesForm.status="归档停用",this.rulesForm.region=this.scope.row.region,this.rulesForm.note=this.scope.row.note},methods:{submitForm:function(){var t=this;if(this.rulesForm.auth!==this.ckey)this.$alert("两者的服务器密码不一致，还请修改","服务器密码不一致",{confirmButtonText:"确定",callback:function(e){t.$message({type:"warning",message:"请检查服务器密码"})}});else{var e=this.$createElement,o=this.rulesForm,s=o.region,n=o.ip,a=o.auth,i=o.note,r=["网站参数确认：","服务器IP地址：".concat(n),"服务器所属区域：".concat(s),"服务器密码：".concat(a),"所有者：".concat(this.$util.cookies.get("name")),"备注：".concat(i)],l=[];for(var c in r)l.push(e("p",null,r[c]));var u=e("div",null,l),p="服务器".concat(this.rulesForm.ip,"添加取消"),d="服务器".concat(this.rulesForm.ip,"添加成功");this.$confirm(u,"请确定你要添加的服务器参数",{confirmButtonText:"确定添加",cancelButtonText:"取消添加",type:"success"}).then((function(){t.rulesForm.owner=t.$util.cookies.get("name"),t.$notify({title:"服务器添加成功",type:"success",duration:0,message:e("b",{style:"color: teal"},d)})})).catch((function(){t.$notify({title:"服务器添加取消",type:"info",message:e("b",{style:"color: teal"},p)})}))}}}},T=O,j=(o("cf1a"),Object(p["a"])(T,P,E,!1,null,null,null)),I=j.exports,B={name:"webcontrol",components:{},data:function(){var t=this,e=function(t,e,o){""===e&&o(new Error("请输入服务器密码"))},o=function(e,o,s){""===o?s(new Error("请再次输入服务器密码")):t.ckey!==t.rulesForm.auth?s(new Error("两次输入服务器密码不一致!")):s()};return{region1:["大陆","香港","其他区域"],ckey:"",rulesForm:{ip:"",auth:"",note:"",region:""},rules:{auth:[{validator:e,trigger:"blur"}],ckey:[{validator:o,trigger:"blur"}]},dialogFormVisible:!1,options:[{value:"全部",label:"全部"},{value:"使用中",label:"使用中"},{value:"满载",label:"满载"},{value:"归档停用",label:"归档停用"}],options2:[{value:"全部",label:"全部"},{value:"香港",label:"香港"},{value:"大陆",label:"大陆"},{value:"其他国家",label:"其他国家"}],search:"",searchdata:{status:"",address:"",ip:""},pagination:{currentPage:1,pageSize:15,total:3},columns:[{title:"服务器名",key:"hostId"},{title:"站点数",key:"id",width:"78"},{title:"IP",key:"ip"},{title:"状态",key:"status",width:88,component:{name:h,props:{myProps:""}},filters:[{text:"使用中",value:1},{text:"配置中",value:0},{text:"存档",value:2},{text:"废弃",value:3}],filterMethod:function(t,e){return e.status===t},filterPlacement:"bottom-end"},{title:"负载",key:"disk_free",width:228,component:{name:k,props:{myProps:""}}},{title:"区域",key:"region",filters:[{text:"中国大陆",value:"中国大陆"},{text:"香港",value:"香港"},{text:"其他国家",value:"其他国家"}],filterMethod:function(t,e){return e.region===t},filterPlacement:"bottom-end"},{title:"备注",key:"note"},{title:"操作",key:"lang",width:"78",fixed:"right",component:{name:S,props:{myProps:""}}},{title:"",key:"lang",fixed:"right",component:{name:I,props:{myProps:""}}}],data:[],formOptions:{labelWidth:"100px",labelPosition:"left",saveLoading:!1}}},created:function(){this.$util.authen(["null",0,2])},mounted:function(){var t=this;Object(i["a"])().then((function(e){t.data=e.data,t.pagination.total=e.total,t.loading=!1})).catch((function(e){console.log("err",e),t.loading=!1,t.$notify({message:"获取数据失败"})}))},methods:{submitForm:function(){var t=this;if(this.rulesForm.auth!==this.ckey)this.$alert("两者的服务器密码不一致，还请修改","服务器密码不一致",{confirmButtonText:"确定",callback:function(e){t.$message({type:"warning",message:"请检查服务器密码"})}});else{var e=this.$createElement,o=this.rulesForm,s=o.region,n=o.ip,i=o.auth,r=o.note,l=["网站参数确认：","服务器IP地址：".concat(n),"服务器所属区域：".concat(s),"服务器密码：".concat(i),"所有者：".concat(this.$util.cookies.get("name")),"备注：".concat(r)],c=[];for(var u in l)c.push(e("p",null,l[u]));var p=e("div",null,c),d="".concat(this.rulesForm.ip,"添加失败"),h="服务器".concat(this.rulesForm.ip,"添加取消"),f="服务器".concat(this.rulesForm.ip,"添加成功");this.$confirm(p,"请确定你要添加的服务器参数",{confirmButtonText:"确定添加",cancelButtonText:"取消添加",type:"success"}).then((function(){t.rulesForm.owner=t.$util.cookies.get("name"),Object(a["a"])(t.rulesForm).then((function(){t.$notify({title:"服务器添加成功",type:"success",duration:0,message:e("b",{style:"color: teal"},f)})})).catch((function(){t.$notify({title:"服务器添加失败",type:"error",message:e("b",{style:"color: teal"},d)})}))})).catch((function(){t.$notify({title:"服务器添加取消",type:"info",message:e("b",{style:"color: teal"},h)})}))}},reset:function(){var t=this;Object.keys(this.rulesForm).forEach((function(e){t.rulesForm[e]=""})),this.ckey="",this.region1=["大陆","香港","其他区域"]},resetsearch:function(){var t=this;Object.keys(this.searchdata).forEach((function(e){t.searchdata[e]=""}))},handleDialogOpen:function(t){var e=t.mode;t.row;this.$message({message:"打开模态框，模式为："+e,type:"success"})},handleRowEdit:function(t,e){var o=this,s=(t.index,t.row);this.formOptions.saveLoading=!0,setTimeout((function(){o.$confirm("用户的信息正在被修改，请问您确定要这么做吗？","您正在修改用户",{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t="用户".concat(s.username,"修改成功！");o.$alert(t,"用户修改",{dangerouslyUseHTMLString:!0,type:"success"}).catch(),e()})).catch((function(){o.$message({type:"success",message:"用户修改已取消"})})),o.formOptions.saveLoading=!1}),300)},handleDialogCancel:function(t){this.$message({message:"取消编辑",type:"warning"}),t()},handleRowRemove:function(t,e){var o=this,s=t.index,n=t.row;setTimeout((function(){console.log(s),console.log(n),o.$message({message:"删除成功",type:"error",duration:"5000"}),e()}),300)},handleDataChange:function(t){console.log("Mytag"+t)},paginationCurrentChange:function(t){this.pagination.currentPage=t,this.fetchData()}}},V=B,R=(o("a799"),Object(p["a"])(V,s,n,!1,null,"5c70f4b9",null));e["default"]=R.exports},a799:function(t,e,o){"use strict";var s=o("eba7"),n=o.n(s);n.a},b680:function(t,e,o){"use strict";var s=o("23e7"),n=o("a691"),a=o("408a"),i=o("1148"),r=o("d039"),l=1..toFixed,c=Math.floor,u=function(t,e,o){return 0===e?o:e%2===1?u(t,e-1,o*t):u(t*t,e/2,o)},p=function(t){var e=0,o=t;while(o>=4096)e+=12,o/=4096;while(o>=2)e+=1,o/=2;return e},d=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){l.call({})}));s({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,o,s,r,l=a(this),d=n(t),h=[0,0,0,0,0,0],f="",m="0",g=function(t,e){var o=-1,s=e;while(++o<6)s+=t*h[o],h[o]=s%1e7,s=c(s/1e7)},v=function(t){var e=6,o=0;while(--e>=0)o+=h[e],h[e]=c(o/t),o=o%t*1e7},y=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var o=String(h[t]);e=""===e?o:e+i.call("0",7-o.length)+o}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(f="-",l=-l),l>1e-21)if(e=p(l*u(2,69,1))-69,o=e<0?l*u(2,-e,1):l/u(2,e,1),o*=4503599627370496,e=52-e,e>0){g(0,o),s=d;while(s>=7)g(1e7,0),s-=7;g(u(10,s,1),0),s=e-1;while(s>=23)v(1<<23),s-=23;v(1<<s),g(1,1),v(2),m=y()}else g(0,o),g(1<<-e,0),m=y()+i.call("0",d);return d>0?(r=m.length,m=f+(r<=d?"0."+i.call("0",d-r)+m:m.slice(0,r-d)+"."+m.slice(r-d))):m=f+m,m}})},cf1a:function(t,e,o){"use strict";var s=o("3273"),n=o.n(s);n.a},d6df:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var s=o("9bd2");function n(t){return Object(s["a"])({url:"/node/addNode",method:"post",data:t})}},e25e:function(t,e,o){var s=o("23e7"),n=o("e583");s({global:!0,forced:parseInt!=n},{parseInt:n})},e583:function(t,e,o){var s=o("da84"),n=o("58a8").trim,a=o("5899"),i=s.parseInt,r=/^[+-]?0[Xx]/,l=8!==i(a+"08")||22!==i(a+"0x16");t.exports=l?function(t,e){var o=n(String(t));return i(o,e>>>0||(r.test(o)?16:10))}:i},eba7:function(t,e,o){}}]);