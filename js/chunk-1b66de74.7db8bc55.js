(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b66de74"],{"1fe2":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击修改订单状态",placement:"top"}},[n("el-tag",{staticStyle:{cursor:"pointer"},attrs:{type:e.type},on:{click:function(t){e.dialogVisible=!0}}},[e._v(e._s(this.scope.row.dstatus))])],1),n("el-dialog",{attrs:{title:e.dialogtitle,visible:e.dialogVisible,modal:!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-steps",{staticStyle:{height:"136px"},attrs:{active:e.active,"finish-status":"success"}},[n("el-step",{attrs:{title:"已签单",description:this.scope.row.startTime}}),n("el-step",{attrs:{title:"建站中",description:this.scope.row.jztime}}),n("el-step",{attrs:{title:"建站完成",description:this.scope.row.webtime}}),n("el-step",{attrs:{title:"已交付",description:this.scope.row.donetime}}),n("el-step",{attrs:{title:"优化中",description:this.scope.row.seotime}})],1),n("div",{staticStyle:{"margin-bottom":"26px"}},[n("el-button",{staticStyle:{float:"right"},on:{click:e.next}},[e._v("下一步")])],1)],1)],1)},o=[],s={props:{value:{},scope:{default:null},myProps:{default:null}},data:function(){return{active:this.scope.row.active,dialogVisible:!1,dialogtitle:"【".concat(this.scope.row.domain,"】订单状态修改"),type:"已交付"===this.scope.row.dstatus||"优化中"===this.scope.row.dstatus?"success":"text"}},methods:{next:function(){this.active++>4&&(this.active=0)}}},a=s,r=n("0c7c"),l=Object(r["a"])(a,i,o,!1,null,null,null);t["a"]=l.exports},"3e8a":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-steps",{staticStyle:{"margin-bottom":"16px"},attrs:{active:5,"align-center":""}},[n("el-step",{attrs:{title:"已签单",description:"业务员根据实际需求来开站,\n该订单会生成在订单界面，此时的订单状态会显示为【已签单】"}}),n("el-step",{attrs:{title:"建站中",icon:"el-icon-edit",description:"\n建站人员通过系统查看今天需要处理的网站,\n客户可以根据QQ与建站人员沟通，\n建站人员根据客户需求进行建站，此时的订单状态会显示为【建站中】"}}),n("el-step",{attrs:{title:"建站完成",icon:"el-icon-upload",description:"\n通过与客户沟通和建站人员的努力完成网站的建设与构建并且在网上稳定运行,\n客户查看确认满意,此时的订单状态会显示为【建站完成】"}}),n("el-step",{attrs:{title:"已交付",icon:"el-icon-success",description:"\n客户与业务员对接，\n建站完成并且网站或处于SEO优化状态并且交清尾款,\n此时的订单状态会显示为【已交付】"}}),n("el-step",{attrs:{title:"优化中",icon:"el-icon-success",description:"\n当网站已经交付同时已经或者直接购买SEO套餐的,\n我司会派专业的SEO人员进行网站的优化与维护,\n此时的订单状态会显示为【优化中】"}})],1)},o=[],s={},a=s,r=(n("8f98"),n("0c7c")),l=Object(r["a"])(a,i,o,!1,null,null,null);t["a"]=l.exports},"6e32":function(e,t,n){},"8eee":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[e._v("订单列表"),n("br"),e._v(" 建站过程中有任何问题可以通过QQ与建站人员与客服进行沟通")]),n("step"),n("d2-crud",{ref:"d2Crud",attrs:{loading:e.loading,pagination:e.pagination,columns:e.columns,data:e.data.filter((function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())||t.domain.toLowerCase().includes(e.search.toLowerCase())||t.username.toLowerCase().includes(e.search.toLowerCase())||t.ywy.toLowerCase().includes(e.search.toLowerCase())})),"edit-title":"我的修改","form-options":e.formOptions},on:{"pagination-current-change":e.paginationCurrentChange}},[n("el-input",{staticStyle:{"margin-bottom":"6px"},attrs:{slot:"header",placeholder:"输入关键字搜索(客户名 或 网站名 或 域名 或 时间)"},slot:"header",model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],2)},o=[],s=n("be9f"),a=n("d0d6"),r=n("3e8a"),l=n("1fe2"),c={name:"Userorders",components:{step:r["a"]},data:function(){return{loading:!1,search:"",pagination:{currentPage:1,pageSize:5,total:4},columns:[{title:"客户手机号",key:"uphone",width:"128"},{title:"网址",key:"domain",width:"168"},{title:"网站名",key:"name",width:"236"},{title:"套餐",key:"plan",width:"100",filters:[{text:"A套餐",value:"A套餐"},{text:"B套餐",value:"B套餐"},{text:"C套餐",value:"C套餐"},{text:"D套餐",value:"D套餐"},{text:"其他套餐",value:"其他套餐"}],filterMethod:function(e,t){return t.plan===e},filterPlacement:"bottom-end"},{title:"附件",key:"faddress",width:"128",component:{name:s["a"],props:{myProps:""}}},{title:"需缴金额",key:"money",width:"128"},{title:"已缴金额",key:"cmoney",width:"126"},{title:"合同开启时间",key:"startTime",width:"126"},{title:"合同结束时间",key:"endTime",width:"126"},{title:"费用全缴",key:"money",width:"100",filters:[{text:"是",value:"是"},{text:"否",value:"否"}],filterMethod:function(e,t){var n=t.money===t.cmoney?"是":"否";return n===e},filterPlacement:"bottom-end",component:{name:a["a"],props:{myProps:""}},fixed:"right"},{title:"客户",key:"username",width:"100",fixed:"left"},{title:"业务员",key:"ywy",width:"100",fixed:"right",filters:[{text:"钟总",value:"钟总"},{text:"杨总",value:"杨总"},{text:"陈总",value:"陈总"}],filterMethod:function(e,t){return t.ywy===e},filterPlacement:"bottom-end"},{title:"当前订单状态",key:"dstatus",width:"128",component:{name:l["a"],props:{myProps:""}},fixed:"right",filters:[{text:"已签单",value:"已签单"},{text:"建站中",value:"建站中"},{text:"建站完成",value:"建站完成"},{text:"已交付",value:"已交付"},{text:"优化中",value:"优化中"}],filterMethod:function(e,t){return t.dstatus===e},filterPlacement:"bottom-end"}],data:[{name:"广州飞凡文化传播有限公司1",domain:"www.chuangli.net",domainok:"192.168.0.1:9966",jd:"香港阿里云3",startTime:"2020-04-28",endTime:"2026-04-28",plan:"C套餐",money:1e5,cmoney:1e5,ywy:"钟总",yphone:"1861356168168",yqq:"1467799141",username:"钟总",uphone:"4006-373-020",customer:"海华",dstatus:"已签单",active:1},{name:"广州飞凡文化传播有限公司2",domainok:"192.168.0.1:9966",domain:"www.chuangli.net",jd:"香港阿里云3",plan:"D套餐",startTime:"2020-04-28",endTime:"2026-04-28",money:1e5,cmoney:1e3,ywy:"杨总",yphone:"1861356168168",yqq:"1467799142",username:"钟总",uphone:"4006-373-020",customer:"海华",dstatus:"建站中",active:2,jztime:"2020-04-28"},{name:"广州飞凡文化传播有限公司3",domainok:"192.168.0.1:9966",domain:"www.chuangli.net",jd:"香港阿里云3",plan:"A套餐",startTime:"2020-04-28",endTime:"2026-04-28",money:1e5,cmoney:1e3,ywy:"陈总",yphone:"1861356168168",yqq:"1467799143",username:"钟总",uphone:"4006-373-020",customer:"海华",dstatus:"建站完成",active:3,jztime:"2020-04-28",webtime:"2020-05-01"},{name:"广州飞凡文化传播有限公司6",domainok:"192.168.0.1:9966",domain:"www.chuangli.net",jd:"香港阿里云3",plan:"B套餐",startTime:"2020-04-28",endTime:"2026-04-28",money:1e5,cmoney:1e5,ywy:"杨总",yqq:"1467799144",username:"钟总",uphone:"4006-373-020",customer:"海华",yphone:"1861356168168",dstatus:"已交付",active:4,jztime:"2020-04-28",webtime:"2020-05-01",donetime:"2020-05-02"},{name:"广州飞凡文化传播有限公司8",domainok:"192.168.0.1:9966",domain:"www.chuangli.net",jd:"香港阿里云3",plan:"B套餐",startTime:"2020-04-28",endTime:"2026-04-28",money:1e5,cmoney:1e5,ywy:"杨总",yqq:"1467799144",username:"钟总",uphone:"4006-373-020",customer:"海华",yphone:"1861356168168",dstatus:"优化中",active:5,jztime:"2020-04-28",webtime:"2020-05-01",donetime:"2020-05-02",seotime:"2020-05-03"}],formOptions:{labelWidth:"66px",labelPosition:"left",saveLoading:!1}}},methods:{paginationCurrentChange:function(e){this.pagination.currentPage=e,this.fetchData()}}},u=c,d=n("0c7c"),p=Object(d["a"])(u,i,o,!1,null,null,null);t["default"]=p.exports},"8f98":function(e,t,n){"use strict";var i=n("6e32"),o=n.n(i);o.a},be9f:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-popover",{attrs:{placement:"top",width:"166",title:"点击下载该网站对应的附件,建站完成记得去修改订单状态哟",trigger:"hover"}},[n("div",{staticClass:"name-wrapper",staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{staticStyle:{"font-size":"15px"},attrs:{type:"success"},nativeOn:{click:function(t){return e.handleClick(t)}}},[e._v("点击下载附件")])],1)])},o=[],s={props:{value:{type:String},scope:{default:null},myProps:{default:null}},computed:{},mounted:function(){},methods:{handleClick:function(){window.open("http://"+this.scope.row.faddress,"_blank")}}},a=s,r=n("0c7c"),l=Object(r["a"])(a,i,o,!1,null,"1e933463",null);t["a"]=l.exports},d0d6:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{cursor:"pointer"}},[n("el-tag",{attrs:{type:e.type}},[e._v(e._s(e.text))])],1)},o=[],s=void 0,a={props:{value:{require:!0},scope:{default:null},myProps:{default:null}},mounted:function(){},computed:{type:function(){return this.scope.row.money===this.scope.row.cmoney?"success":"danger"},text:function(){return this.scope.row.money===this.scope.row.cmoney?"是":"否"}},watch:{type:function(){return s.scope.row.money===s.scope.row.cmoney?"success":"danger"},text:function(){return s.scope.row.money===s.scope.row.cmoney?"是":"否"}}},r=a,l=n("0c7c"),c=Object(l["a"])(r,i,o,!1,null,null,null);t["a"]=c.exports}}]);