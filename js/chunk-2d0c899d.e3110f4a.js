(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c899d"],{5628:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("d2-container",[a("template",{slot:"header"},[t._v("分页")]),a("d2-crud",{attrs:{columns:t.columns,data:t.data,loading:t.loading,pagination:t.pagination},on:{"pagination-current-change":t.paginationCurrentChange}})],2)},i=[],o=a("7ded"),c={data:function(){return{columns:[{title:"卡密",key:"key",width:320},{title:"面值",key:"value"},{title:"管理员",key:"admin"},{title:"创建时间",key:"dateTimeCreat"},{title:"使用时间",key:"dateTimeUse"}],data:[],loading:!1,pagination:{currentPage:1,pageSize:5,total:0}}},mounted:function(){this.fetchData()},methods:{paginationCurrentChange:function(t){this.pagination.currentPage=t,this.fetchData()},fetchData:function(){var t=this;this.loading=!0;var n={username:"test9",password:"admin236"};Object(o["a"])(n).then((function(t){console.log(t)})).catch((function(n){console.log("err",n),t.loading=!1}))}}},r=c,l=a("0c7c"),u=Object(l["a"])(r,e,i,!1,null,null,null);n["default"]=u.exports}}]);