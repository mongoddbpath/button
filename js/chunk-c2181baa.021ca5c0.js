(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2181baa"],{1437:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-row",[o("el-tag",{staticStyle:{"font-size":"15px",cursor:"pointer"},attrs:{effect:"plain",type:"danger"},on:{click:t.submitForm}},[t._v("删除")])],1)],1)},a=[],r=(o("99af"),{data:function(){return{}},props:{scope:{default:null},myProps:{default:null}},mounted:function(){},methods:{submitForm:function(){var t=this,e=this.$createElement,o="充值明细【".concat(this.scope.row.ordernum,"】删除取消"),n="充值明细【".concat(this.scope.row.ordernum,"】删除成功"),a="你要删除的单号为：【".concat(this.scope.row.ordernum,"-").concat(this.scope.row.company,"(").concat(this.scope.row.rmb,")】");this.$confirm(a,"删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"error"}).then((function(){console.dir(t.scope.row.ordernum),t.$notify({title:"充值明细删除成功",type:"success",duration:0,message:e("b",{style:"color: teal"},n)})})).catch((function(){t.$notify({title:"充值明细删除取消",type:"info",message:e("b",{style:"color: teal"},o)})}))}}}),l=r,s=(o("ca45"),o("0c7c")),i=Object(s["a"])(l,n,a,!1,null,null,null);e["a"]=i.exports},"2bb5":function(t,e,o){"use strict";var n=o("5f3e"),a=o.n(n);a.a},"2f23":function(t,e,o){},"4cf5":function(t,e,o){"use strict";var n=o("a005"),a=o.n(n);a.a},"50f5":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"name-wrapper",staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[o("div",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.appNameOK))])])},a=[],r=(o("e25e"),{data:function(){return{eltagtype:""}},props:{scope:{default:null},myProps:{default:null}},computed:{appNameOK:function(){switch(parseInt(this.scope.row.qd)){case 1:return"手动";case 2:return"支付宝";case 3:return"微信";case 4:return"余额";default:return"手动"}}},mounted:function(){},methods:{}}),l=r,s=(o("e0b8"),o("0c7c")),i=Object(s["a"])(l,n,a,!1,null,null,null);e["a"]=i.exports},"5f3e":function(t,e,o){},"63df":function(t,e,o){"use strict";var n=o("916c"),a=o.n(n);a.a},"69a5":function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var n=o("9bd2");function a(t){return Object(n["a"])({url:"/site/list?page="+t,method:"post"})}},"916c":function(t,e,o){},"9ded":function(t,e,o){},a005:function(t,e,o){},a9c5:function(t,e,o){"use strict";var n=o("ea24"),a=o.n(n);a.a},afdc:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("d2-container",[o("div",[o("el-dialog",{attrs:{title:t.dialogtitle,visible:t.dialogFormVisible2,"append-to-body":!0},on:{"update:visible":function(e){t.dialogFormVisible2=e}}},[o("el-form",{ref:"rulesForm",staticClass:"demo-rulesForm",attrs:{model:t.rulesForm,rules:t.rules,"status-icon":"","label-width":"100px"}},[o("el-form-item",{attrs:{label:"充值渠道"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:t.rulesForm.qd,callback:function(e){t.$set(t.rulesForm,"qd",e)},expression:"rulesForm.qd"}},t._l(t.status1,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"金额",prop:"rmb"}},[o("el-input",{model:{value:t.rulesForm.rmb,callback:function(e){t.$set(t.rulesForm,"rmb",t._n(e))},expression:"rulesForm.rmb"}})],1),o("el-form-item",{attrs:{label:"备注"}},[o("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:t.rulesForm.note,callback:function(e){t.$set(t.rulesForm,"note",e)},expression:"rulesForm.note"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible2=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("充值")])],1)],1),o("el-dialog",{attrs:{title:t.dialogtitle2,visible:t.dialogFormVisible2j,"append-to-body":!0},on:{"update:visible":function(e){t.dialogFormVisible2j=e}}},[o("el-form",{ref:"rulesFormj",staticClass:"demo-rulesForm",attrs:{model:t.rulesFormj,rules:t.rules2,"status-icon":"","label-width":"100px"}},[o("el-form-item",{attrs:{label:"扣减方式"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:t.rulesFormj.type,callback:function(e){t.$set(t.rulesFormj,"type",e)},expression:"rulesFormj.type"}},t._l(t.status1j,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"扣减渠道"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:t.rulesFormj.qd,callback:function(e){t.$set(t.rulesFormj,"qd",e)},expression:"rulesFormj.qd"}},t._l(t.status1,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"扣减账号",prop:"kjaccount"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:t.rulesFormj.kjaccount,callback:function(e){t.$set(t.rulesFormj,"kjaccount",e)},expression:"rulesFormj.kjaccount"}},t._l(t.status2j,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"金额",prop:"rmb"}},[o("el-input",{model:{value:t.rulesFormj.rmb,callback:function(e){t.$set(t.rulesFormj,"rmb",t._n(e))},expression:"rulesFormj.rmb"}})],1),o("el-form-item",{attrs:{label:"备注"}},[o("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:t.rulesFormj.note,callback:function(e){t.$set(t.rulesFormj,"note",e)},expression:"rulesFormj.note"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible2j=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.submitForm2}},[t._v("手动扣减")])],1)],1)],1),o("el-card",{staticClass:"m-box-card",staticStyle:{padding:"0"},attrs:{shadow:"hover"}},[o("el-row",[o("el-col",{staticStyle:{width:"20%"}},[o("div",{staticClass:"inputok"},[o("div",{staticClass:"input2"},[t._v("公司名：")]),o("el-input",{staticClass:"input3",model:{value:t.formdata.company,callback:function(e){t.$set(t.formdata,"company",e)},expression:"formdata.company"}})],1)]),o("el-col",{staticStyle:{width:"20%"}},[o("div",{staticClass:"inputok"},[o("div",{staticClass:"input2"},[t._v("账号：")]),o("el-input",{staticClass:"input3",model:{value:t.formdata.account,callback:function(e){t.$set(t.formdata,"account",e)},expression:"formdata.account"}})],1)]),o("el-col",{staticStyle:{width:"20%"}},[o("div",{staticClass:"inputok"},[o("div",{staticClass:"input2"},[t._v("关联账号：")]),o("el-input",{staticClass:"input3",model:{value:t.formdata.accountabout,callback:function(e){t.$set(t.formdata,"accountabout",e)},expression:"formdata.accountabout"}})],1)]),o("el-col",{staticStyle:{width:"20%"}},[o("div",{staticClass:"inputok"},[o("div",{staticClass:"input2"},[t._v("收支类型：")]),o("el-select",{staticClass:"input3",attrs:{placeholder:"请选择"},model:{value:t.formdata.type,callback:function(e){t.$set(t.formdata,"type",e)},expression:"formdata.type"}},t._l(t.formok.statusoptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),o("el-col",{staticStyle:{width:"20%"}},[o("div",{staticClass:"inputok"},[o("div",{staticClass:"input2"},[t._v("渠道：")]),o("el-select",{staticClass:"input3",attrs:{placeholder:"请选择"},model:{value:t.formdata.qd,callback:function(e){t.$set(t.formdata,"qd",e)},expression:"formdata.qd"}},t._l(t.formok.typeoptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)])],1),o("el-row",{staticStyle:{"margin-top":"12px"}},[o("el-col",{staticClass:"time"},[o("div",{staticClass:"inputok"},[o("div",{staticClass:"input2 input2j"},[t._v("交易时间：")]),o("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始","end-placeholder":"结束","picker-options":t.pickerOptions},model:{value:t.formdata.time,callback:function(e){t.$set(t.formdata,"time",e)},expression:"formdata.time"}})],1)]),o("el-col",{staticClass:"company"},[o("div",{staticClass:"inputok"},[o("div",{staticClass:"input2"},[t._v("单号：")]),o("el-input",{staticClass:"input3",model:{value:t.formdata.ordernum,callback:function(e){t.$set(t.formdata,"ordernum",e)},expression:"formdata.ordernum"}})],1)]),o("el-col",{staticClass:"searchok"},[o("div",{staticClass:"search"},[o("el-tag",{staticClass:"tagok",attrs:{effect:"plain",type:"success"}},[t._v("交易数："+t._s(t.pagination.total))]),o("el-tag",{staticClass:"tagok",attrs:{effect:"plain",type:"danger"}},[t._v("余额："+t._s(t.balance))]),this.$util.checkjur2(["null",0,2])?o("el-button",{attrs:{type:"success",icon:"el-icon-plus"},on:{click:function(e){t.dialogFormVisible2=!0}}},[t._v("在线充值")]):t._e(),this.$util.checkjur2(["null",0,2])?o("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){t.dialogFormVisible2j=!0}}},[t._v("手动扣减")]):t._e(),o("el-button",{attrs:{type:"primary"},on:{click:t.searchok}},[t._v("查询")]),o("el-button",{on:{click:t.emptysearch}},[t._v("重置")])],1)])],1)],1),o("el-row",{staticStyle:{"margin-top":"12px"}},[o("el-col",{attrs:{span:24}},[o("el-tag",{staticClass:"tag1"},[o("i",{staticClass:"el-icon-warning i1"}),o("div",{staticClass:"el1"},[t._v("已选择")]),o("div",{attrs:{id:"getnumok"}},[t._v("0")]),o("div",{staticClass:"el1"},[t._v("项")]),o("div",{staticClass:"el1 el2",on:{click:t.nullall}},[t._v("删除")])])],1)],1),o("d2-crud",{ref:"d2Crud",attrs:{loading:t.loading,options:t.options,columns:t.columns,pagination:t.pagination,data:t.data.filter((function(e){return!t.search||e.name.toLowerCase().includes(t.search.toLowerCase())||e.domain.toLowerCase().includes(t.search.toLowerCase())||e.styleId.toLowerCase().includes(t.search.toLowerCase())})),"edit-title":"","form-options":t.formOptions,"selection-row":""},on:{"selection-change":t.handleSelectionChange,"row-edit":t.handleRowEdit,"dialog-cancel":t.handleDialogCancel,"row-remove":t.handleRowRemove,"pagination-current-change":t.paginationCurrentChange}})],1)},a=[],r=(o("99af"),o("b64b"),o("e25e"),o("159b"),o("1437")),l=o("dbd1"),s=o("50f5"),i=o("fcf5"),c=o("69a5"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-row",[o("el-tag",{staticStyle:{"font-size":"15px",cursor:"pointer"},attrs:{effect:"plain"},on:{click:function(e){t.dialogFormVisible2=!0}}},[t._v("编辑")])],1),o("el-dialog",{attrs:{title:t.title,visible:t.dialogFormVisible2,"append-to-body":!0},on:{"update:visible":function(e){t.dialogFormVisible2=e}}},[o("el-form",{ref:"rulesForm",staticClass:"demo-rulesForm",attrs:{model:t.rulesForm,rules:t.rules,"status-icon":"","label-width":"100px"}},[o("el-form-item",{attrs:{label:"渠道"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:t.rulesForm.qd,callback:function(e){t.$set(t.rulesForm,"qd",e)},expression:"rulesForm.qd"}},t._l(t.status1,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"类型"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:t.rulesForm.type,callback:function(e){t.$set(t.rulesForm,"type",e)},expression:"rulesForm.type"}},t._l(t.region1,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"金额",prop:"rmb"}},[o("el-input",{model:{value:t.rulesForm.rmb,callback:function(e){t.$set(t.rulesForm,"rmb",t._n(e))},expression:"rulesForm.rmb"}})],1),o("el-form-item",{attrs:{label:"时间",prop:"time"}},[o("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.rulesForm.time,callback:function(e){t.$set(t.rulesForm,"time",e)},expression:"rulesForm.time"}})],1),o("el-form-item",{attrs:{label:"公司名",prop:"company"}},[o("el-input",{model:{value:t.rulesForm.company,callback:function(e){t.$set(t.rulesForm,"company",e)},expression:"rulesForm.company"}})],1),o("el-form-item",{attrs:{label:"备注"}},[o("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:t.rulesForm.note,callback:function(e){t.$set(t.rulesForm,"note",e)},expression:"rulesForm.note"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible2=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("更新")])],1)],1)],1)},m=[],p={data:function(){return{title:"【".concat(this.scope.row.ordernum,"-").concat(this.scope.row.company,"】充值编辑"),dialogFormVisible2:!1,region1:["充值","支出"],status1:["手动","余额","支付宝","微信"],ckey:"",rulesForm:{type:"",qd:"",time:"",rmb:"",company:"",note:""},rules:{time:[{required:!0,message:"必选"}],company:[{required:!0,message:"必填"}],rmb:[{required:!0,type:"number",message:"必须为数字值"}]}}},props:{scope:{default:null},myProps:{default:null}},mounted:function(){this.$util.authen(["null",0,2]),this.rulesForm.ordernum=this.scope.row.ordernum,this.rulesForm.account=this.scope.row.account,this.rulesForm.qd=this.scope.row.qd,this.rulesForm.type=this.scope.row.type,this.rulesForm.time=this.scope.row.time,this.rulesForm.company=this.scope.row.company,this.rulesForm.rmb=this.scope.row.rmb,this.rulesForm.note=this.scope.row.note},computed:{checkw:function(){return document.body.clientWidth>1500?"":"mini"},checkw2:function(){return document.body.clientWidth>1500}},methods:{submitForm:function(){var t=this;this.$refs.rulesForm.validate((function(e){if(e){var o=t.$createElement,n=t.rulesForm,a=n.ordernum,r=n.rmb,l=n.type,s=n.account,i=n.qd,c=n.time,u=n.company,m=n.note,p=["充值明细确认：","单号：".concat(a),"金额：".concat(r),"时间：".concat(c),"账号：".concat(s),"收支类型：".concat(l),"渠道：".concat(i),"公司名：".concat(u),"备注：".concat(m)],d=[];for(var f in p)d.push(o("p",null,p[f]));var h=o("div",null,d),b="充值明细".concat(a,"更新取消"),y="充值明细".concat(a,"更新成功");t.$confirm(h,"请确定你要更新的充值明细参数",{confirmButtonText:"确定更新",cancelButtonText:"取消更新",type:"success"}).then((function(){console.dir(t.rulesForm),t.dialogFormVisible2=!1,t.$notify({title:"充值明细更新成功",type:"success",duration:0,message:o("b",{style:"color: teal"},y)})})).catch((function(){t.$notify({title:"充值明细更新取消",type:"info",message:o("b",{style:"color: teal"},b)})}))}}))}}},d=p,f=(o("2bb5"),o("0c7c")),h=Object(f["a"])(d,u,m,!1,null,null,null),b=h.exports,y={name:"webcontrol",data:function(){return{balance:12e4,value2:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-6048e5),t.$emit("pick",[o,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-2592e6),t.$emit("pick",[o,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-7776e6),t.$emit("pick",[o,e])}}]},rules:{rmb:[{required:!0,type:"number",message:"必须为数字值"}]},dialogFormVisible2:!1,status1:["手动","支付宝","微信"],rulesForm:{type:"充值",qd:"手动",rmb:"",note:""},firstm:"",dialogFormVisible2j:!1,status1j:["充值","支出"],status2j:["代理1","代理2","代理3"],rules2:{rmb:[{required:!0,type:"number",message:"必须为数字值"}],kjaccount:[{required:!0,message:"必选"}]},rulesFormj:{kjaccount:"",type:"充值",qd:"手动",rmb:"",note:""},formdata:{ordernum:"",type:"",account:"",accountabout:"",qd:"",time:"",company:"",note:""},formok:{statusoptions:[{value:"充值",label:"充值"},{value:"支出",label:"支出"}],typeoptions:[{value:"手动",label:"手动"},{value:"余额",label:"余额"},{value:"支付宝",label:"支付宝"},{value:"微信",label:"微信"}]},selection:"",options:{maxHeight:"568"},permission:["admin"],loading:!0,search:"",pagination:{background:!0,currentPage:parseInt(localStorage.getItem("webcontrolcurrentPage"))||1,pageSize:15,total:12},columns:[{title:"渠道",component:{name:s["a"],props:{myProps:""}},key:"qd",fixed:"left",width:"100",filters:[{text:"手动",value:"手动"},{text:"支付宝",value:"支付宝"},{text:"微信",value:"微信"},{text:"余额",value:"余额"}],filterMethod:function(t,e){return e.qd===t},filterPlacement:"bottom-end"},{title:"金额",key:"rmb",sortable:!0},{title:"单号",key:"ordernum",width:168},{title:"公司名",key:"company",width:168},{title:"时间",key:"time",width:200},{title:"收支类型",key:"type",width:168,filters:[{text:"充值",value:"充值"},{text:"支出",value:"支出"}],filterMethod:function(t,e){return e.type===t},filterPlacement:"bottom-end"},{title:"账号",key:"account"},{title:"关联账号",key:"accountabout",width:168},{title:"操作",key:"lang",fixed:"right",component:{name:b,props:{myProps:""}}},{title:"",key:"lang",fixed:"right",component:{name:r["a"],props:{myProps:""}}},{title:"",key:"note",fixed:"right",component:{name:i["a"],props:{myProps:""}}},{title:"",key:"url",fixed:"right",component:{name:l["a"],props:{myProps:""}}}],data:[],formOptions:{labelWidth:"86px",labelPosition:"left",saveLoading:!1}}},mounted:function(){this.data=[{rmb:3e4,ordernum:"7e8e8178aa1",type:"充值",account:"a1",accountabout:"admin",qd:"支付宝",time:"2022-01-26 18:42:29",company:"新起点",note:"新起点A套餐"},{rmb:4e4,ordernum:"7e8e8177aa2",type:"充值",account:"a2",accountabout:"admin",qd:"微信",time:"2022-01-26 18:42:29",company:"东莞天诚技术有限公司",note:"新起点B套餐"},{rmb:5e4,ordernum:"7e8e8179aa3",type:"支出",account:"a3",accountabout:"admin",qd:"手动",time:"2022-01-26 18:42:29",company:"东莞市科华塑胶模具有限公司",note:"新起点C套餐"}],console.dir(this.data),this.loading=!1},computed:{dialogtitle2:function(){return"手动扣减【余额：".concat(this.balance,"】")},dialogtitle:function(){return"在线充值【余额：".concat(this.balance,"】")},checkw:function(){return document.body.clientWidth<1500},checkw2:function(){return document.body.clientWidth>1500}},methods:{getCurrentTime:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1,o=(new Date).getDate(),n=(new Date).getHours(),a=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),r=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();return t+"-"+e+"-"+o+" "+n+":"+a+":"+r},submitForm:function(){var t=this;this.$refs.rulesForm.validate((function(e){if(e){var o=t.$createElement,n=t.rulesForm,a=n.rmb,r=n.qd,l=n.note,s=["充值明细确认：","金额：".concat(a),"渠道：".concat(r),"备注：".concat(l)],i=[];for(var c in s)i.push(o("p",null,s[c]));var u=o("div",null,i),m="在线充值取消",p="在线充值成功";t.$confirm(u,"确定参数",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then((function(){t.rulesForm.time=t.getCurrentTime(),console.dir(t.rulesForm),t.balance=t.balance+t.rulesForm.rmb,t.dialogFormVisible2=!1,t.$notify({title:"充值",type:"success",duration:7e3,message:o("b",{style:"color: teal"},p)})})).catch((function(){t.$notify({title:"充值",type:"info",message:o("b",{style:"color: teal"},m)})}))}}))},submitForm2:function(){var t=this;this.$refs.rulesFormj.validate((function(e){if(e){var o=t.$createElement,n=t.rulesFormj,a=n.kjaccount,r=n.type,l=n.rmb,s=n.qd,i=n.note;t.firstm="充值"===r?"你正在给【".concat(a,"】充值").concat(l,"元,你的余额减少").concat(l,"元"):"你正在给【".concat(a,"】扣减").concat(l,"元,你的余额不变");var c=["充值账户：".concat(a),"扣减方式：".concat(r),"金额：".concat(l),"渠道：".concat(s),"备注：".concat(i)],u=[];for(var m in c)u.push(o("p",null,c[m]));var p=o("div",null,u);t.rulesFormj.rmb>t.balance?t.$notify({title:"余额不足",type:"error",duration:7e3,message:"你的余额不足以为代理充值"}):t.$confirm(p,t.firstm,{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then((function(){t.rulesFormj.time=t.getCurrentTime(),console.dir(t.rulesFormj),"充值"===t.rulesFormj.type&&(t.balance=t.balance-t.rulesFormj.rmb),t.dialogFormVisible2j=!1,t.$notify({title:t.firstm,type:"success",duration:7e3})})).catch((function(){t.$notify({title:"失败",type:"info"})}))}}))},searchok:function(){console.dir(this.formdata)},fetchData:function(){var t=this;this.loading=!0,Object(c["a"])(this.pagination.currentPage).then((function(e){t.data=e.data,t.pagination.total=e.total,t.loading=!1})).catch((function(e){console.log("err",e),t.loading=!1,t.$notify({message:"获取数据失败"})}))},handleRowEdit:function(t,e){var o=this,n=(t.index,t.row);this.formOptions.saveLoading=!0,setTimeout((function(){var t="你确定要修改【".concat(n.url,"】网站吗"),a="【".concat(n.url,"】网站修改成功");o.$confirm(t,"你正在修改网站",{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.$alert(a,"网站修改成功",{dangerouslyUseHTMLString:!0,type:"success"}).catch(),e()})).catch((function(){o.$message({type:"success",message:"网站修改已取消"})})),o.formOptions.saveLoading=!1}),300)},handleDialogCancel:function(t){t()},handleRowRemove:function(t,e){var o=this,n=(t.index,t.row);setTimeout((function(){var t=o.$createElement,a="该网站是否已经停止维护？这个操作后【".concat(n.url,"】\n        该网站记录将会从数据库中删除，网站服务也会停止，这是个危险的操作，你确定要这么做吗？"),r="【".concat(n.url,"】网站已经被删除"),l="【".concat(n.url,"】网站删除取消");o.$confirm(a,"删除【".concat(n.url,"】网站"),{confirmButtonText:"确定删除",cancelButtonText:"取消删除",confirmButtonClass:"confirmType",type:"success"}).then((function(){o.$notify({title:"删除成功",type:"success",duration:0,message:t("b",{style:"color: teal"},r)}),e()})).catch((function(){o.$notify({title:"删除取消",type:"info",message:t("b",{style:"color: teal"},l)})}))}),300)},handleDataChange:function(t){},paginationCurrentChange:function(t){this.pagination.currentPage=t,localStorage.setItem("webcontrolcurrentPage",t),this.fetchData()},gotowebs:function(){},gotosearch:function(){},emptysearch:function(){var t=this;Object.keys(this.formdata).forEach((function(e){t.formdata[e]=""}))},handleSelectionChange:function(t){void 0!==t.length&&(document.getElementById("getnumok").innerHTML=t.length,this.selection=t)},nullall:function(){var t=this.selection.length,e=this.selection;if(0===t);else{for(var o="你正在删除".concat(t,"个订单："),n=[],a=0;a<t;a++)n.push(e[a].ordernum);console.dir(n);var r=[],l=this.$createElement;for(var s in n)r.push(l("p",null,n[s]));this.$confirm(o,{title:o,message:l("div",null,r),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){})).catch((function(){}))}}}},v=y,g=(o("4cf5"),Object(f["a"])(v,n,a,!1,null,"e2003738",null));e["default"]=g.exports},ca45:function(t,e,o){"use strict";var n=o("9ded"),a=o.n(n);a.a},dbd1:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-popover",{attrs:{trigger:"click",placement:"left-end"}},[o("el-row",[this.$util.checkjur2(["null",0,2])?o("el-button",{attrs:{type:"primary"}},[t._v(" 疑惑反馈")]):t._e()],1),o("div",{staticClass:"name-wrapper",staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[o("el-tag",{staticStyle:{"font-size":"15px",cursor:"pointer"},attrs:{effect:"plain",type:"success"}},[t._v("更多")])],1)],1)},a=[],r=(o("99af"),{data:function(){return{message:"通过点击该处按钮可一键登录后台",weburl:""}},props:{value:{type:String},scope:{default:null},myProps:{default:null}},watch:{scope:function(){}},computed:{text:function(){return 1===this.scope.row.status?"状态：启":"状态：停"}},mounted:function(){},methods:{open:function(){var t=this,e=this.$createElement,o="【".concat(this.scope.row.url,"】网站要续费的年份数(请输入一个正整数)");this.$prompt(o,"服务续费",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^(0|[1-9]\d*)$/,inputErrorMessage:"续费年份数格式不正确"}).then((function(o){var n=o.value,a="您的【".concat(t.scope.row.url,"】网站服务要续费的年份数是【").concat(n,"年】,\n        请确定"),r="您的【".concat(t.scope.row.url,"】网站服务要续费的年份数是【").concat(n,"年】,\n        感谢您对我司的信任和支持");t.$confirm(a,"续费确定",{confirmButtonText:"确定续费",cancelButtonText:"取消续费",type:"success"}).then((function(){t.$notify({title:"续费成功",type:"success",duration:0,message:e("b",{style:"color: teal"},r)})})).catch((function(){t.$notify({title:"续费",type:"info",message:e("b",{style:"color: teal"},"续费取消")})}))})).catch((function(){t.$notify({title:"续费",type:"info",message:e("b",{style:"color: teal"},"续费取消")})}))}}}),l=r,s=(o("63df"),o("0c7c")),i=Object(s["a"])(l,n,a,!1,null,null,null);e["a"]=i.exports},e0b8:function(t,e,o){"use strict";var n=o("2f23"),a=o.n(n);a.a},e25e:function(t,e,o){var n=o("23e7"),a=o("e583");n({global:!0,forced:parseInt!=a},{parseInt:a})},e583:function(t,e,o){var n=o("da84"),a=o("58a8").trim,r=o("5899"),l=n.parseInt,s=/^[+-]?0[Xx]/,i=8!==l(r+"08")||22!==l(r+"0x16");t.exports=i?function(t,e){var o=a(String(t));return l(o,e>>>0||(s.test(o)?16:10))}:l},ea24:function(t,e,o){},fcf5:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-popover",{attrs:{placement:"left",width:"200",trigger:"click"}},[o("p",[t._v("单号："+t._s(this.scope.row.ordernum))]),o("p",[t._v("金额："+t._s(this.scope.row.rmb))]),o("p",[t._v("公司名："+t._s(this.scope.row.company))]),o("p",[t._v("收支类型："+t._s(t.type))]),o("p",[t._v("渠道："+t._s(t.qd))]),o("p",[t._v("交易时间："+t._s(this.scope.row.time))]),o("p",[t._v("备注："+t._s(this.scope.row.note))]),o("div",{staticClass:"name-wrapper",staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[o("el-tag",{staticStyle:{"font-size":"15px",cursor:"pointer"},attrs:{effect:"plain",type:"info"}},[t._v("详情")])],1)])},a=[],r=(o("e25e"),{data:function(){return{}},watch:{value:function(){}},props:{value:{type:String},scope:{default:null},myProps:{default:null}},computed:{type:function(){switch(parseInt(this.scope.row.type)){case 1:return"充值";case 2:return"支出";default:return"支出"}},qd:function(){switch(parseInt(this.scope.row.qd)){case 1:return"手动";case 2:return"支付宝";case 3:return"微信";case 4:return"余额";default:return"手动"}}},mounted:function(){},methods:{handleClick:function(){}}}),l=r,s=(o("a9c5"),o("0c7c")),i=Object(s["a"])(l,n,a,!1,null,null,null);e["a"]=i.exports}}]);