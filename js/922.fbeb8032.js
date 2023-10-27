"use strict";(globalThis["webpackChunkpractichackathonproject"]=globalThis["webpackChunkpractichackathonproject"]||[]).push([[922],{7890:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(9835),o=r(6970);function s(e,t,r,s,i,l){const n=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(n,{class:"settings-page"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"wrapper",style:(0,o.j5)(r.wrapperStyle)},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],4)])),_:3})}const i={name:"AppPagesWrapper",props:{wrapperStyle:{type:Object}}};var l=r(1639),n=r(9885),c=r(9984),d=r.n(c);const p=(0,l.Z)(i,[["render",s],["__scopeId","data-v-784bc385"]]),u=p;d()(i,"components",{QPage:n.Z})},9135:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ue});var a=r(9835);const o={class:"col-wrapper four-cols"},s={class:"blocks_wrapper"},i={class:"col"};function l(e,t,r,l,n,c){const d=(0,a.up)("DashboardProgress"),p=(0,a.up)("DashboardPie"),u=(0,a.up)("DashboardBar"),h=(0,a.up)("DashboardLine"),g=(0,a.up)("AppPagesWrapper"),y=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,{class:"wrapper",wrapperStyle:{padding:"25px"}},{default:(0,a.w5)((()=>[(0,a._)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.progressImages,((t,r)=>((0,a.wg)(),(0,a.j4)(d,{key:t,title:e.$t(`dashboard.progress.${r+1}.title`),description:e.$t(`dashboard.progress.${r+1}.description`),iconName:t,color:c.colors[r],value:Math.random()},null,8,["title","description","iconName","color","value"])))),128))]),(0,a._)("div",s,[(0,a.Wm)(p,{title:e.$t("dashboard.pie.title"),"data-set":c.pieDataSet,colors:c.colors,class:"pie"},null,8,["title","data-set","colors"]),(0,a._)("div",i,[(0,a.Wm)(u,{title:e.$t("dashboard.bar.title"),description:e.$t("dashboard.bar.description"),"data-set":[],color:c.colors[0]},null,8,["title","description","color"]),(0,a.Wm)(h,{title:e.$t("dashboard.line.title"),description:e.$t("dashboard.line.description"),"data-set":[],color:c.colors[0]},null,8,["title","description","color"])])])])),_:1})])),_:1})}var n=r(7890),c=r(6970);const d={class:"progress-wrapper"},p={class:"percentage"};function u(e,t,r,o,s,i){const l=(0,a.up)("q-linear-progress"),n=(0,a.up)("DashboardElementWrapper");return(0,a.wg)(),(0,a.j4)(n,{title:r.title,description:r.description,"icon-name":r.iconName,"icon-color":r.color},{default:(0,a.w5)((()=>[(0,a._)("div",d,[(0,a.Wm)(l,{class:"progress",value:s.progress,color:r.color,style:(0,c.j5)({color:r.color}),"animation-speed":700},null,8,["value","color","style"]),(0,a._)("p",p,(0,c.zw)(Math.floor(100*s.progress)+"%"),1)])])),_:1},8,["title","description","icon-name","icon-color"])}const h={class:"text-wrapper"},g={class:"title"},y={class:"description"},b={class:"content"};function m(e,t,r,o,s,i){const l=(0,a.up)("q-icon");return(0,a.wg)(),(0,a.iD)("div",{class:"dashboard-element_wrapper",style:(0,c.j5)({aspectRatio:r.ratio?r.ratio:"unset"})},[(0,a._)("div",h,[(0,a._)("p",g,(0,c.zw)(r.title),1),(0,a.Wm)(l,{class:"icon",name:r.iconName,color:r.iconColor,style:(0,c.j5)({color:r.iconColor})},null,8,["name","color","style"])]),(0,a._)("p",y,(0,c.zw)(r.description),1),(0,a._)("div",b,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])],4)}const v={name:"DashboardElementWrapper",props:{ratio:{type:Number,default:null},title:{type:String,required:!0},description:{type:String},iconName:{type:String},iconColor:{type:String}}};var _=r(1639),w=r(2857),S=r(9984),f=r.n(S);const D=(0,_.Z)(v,[["render",m],["__scopeId","data-v-72ef9b7c"]]),W=D;f()(v,"components",{QIcon:w.Z});const j={name:"DashboardProgress",components:{DashboardElementWrapper:W},props:{title:{type:String,required:!0},description:{type:String,required:!0},iconName:{type:String},color:{type:String,default:"primary"},value:{type:Number,default:.5}},data(){return setTimeout((()=>{this.progress=this.value}),0),{progress:0}}};var P=r(8289);const q=(0,_.Z)(j,[["render",u],["__scopeId","data-v-8561b41c"]]),k=q;f()(j,"components",{QLinearProgress:P.Z});const C={class:"pie-chart_wrapper"};function I(e,t,r,o,s,i){const l=(0,a.up)("PieChart"),n=(0,a.up)("DashboardElementWrapper");return(0,a.wg)(),(0,a.j4)(n,{class:"dashboard-pie",title:r.title,iconName:"more_vert",color:"grey",ratio:1},{default:(0,a.w5)((()=>[(0,a._)("div",C,[(0,a.Wm)(l,{"data-set":r.dataSet,colors:r.colors,"chart-style":{width:"65%"}},null,8,["data-set","colors"])])])),_:1},8,["title"])}const Z={class:"pie-chart"},$={class:"pie-legend"};function x(e,t,r,o,s,i){const l=(0,a.up)("Pie");return(0,a.wg)(),(0,a.iD)("div",Z,[(0,a.Wm)(l,{"chart-options":s.chartOptions,"chart-data":i.chartData,style:(0,c.j5)(r.chartStyle)},null,8,["chart-options","chart-data","style"]),(0,a._)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.dataSet,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"item",style:(0,c.j5)({"--color":r.colors[t]})},(0,c.zw)(e.label),5)))),128))])])}r(702),r(8080);var A=r(9453);const B={name:"PieChart",components:{Pie:A.by},props:{chartStyle:{type:Object,default:()=>({})},dataSet:{type:Array,required:!0},colors:{type:Array,required:!0}},data(){return{chartOptions:{responsive:!0,plugins:{tooltip:{enabled:!1},legend:{display:!1},datalabels:{formatter:(e,t)=>Math.round(this.values[t.dataIndex]/this.values.reduce(((e,t)=>e+t),0)*100*10)/10+"%",color:"white",font:{weight:"bold",size:16}}}}}},computed:{labels(){return this.dataSet.map((e=>e.label))},values(){return this.dataSet.map((e=>e.value))},chartData(){return{labels:this.labels,datasets:[{data:this.values,backgroundColor:this.colors}]}}}},O=(0,_.Z)(B,[["render",x],["__scopeId","data-v-54f1bf40"]]),N=O,E={name:"DashboardPie",components:{PieChart:N,DashboardElementWrapper:W},props:{title:{type:String,required:!0},description:{type:String},iconName:{type:String},iconColor:{type:String},dataSet:{type:Array,required:!0},colors:{type:Array,required:!0}}},M=(0,_.Z)(E,[["render",I],["__scopeId","data-v-db1564d6"]]),L=M;r(9665);function z(e,t,r){r/=100;const a=t*Math.min(r,1-r)/100,o=t=>{const o=(t+e/30)%12,s=r-a*Math.max(Math.min(o-3,9-o,1),-1);return Math.round(255*s).toString(16).padStart(2,"0")};return`#${o(0)}${o(8)}${o(4)}`}function Q(e){let t=[],r=e;for(let a=0;a<r;a++)t.push(z(360*a/r,75,65));return t.reverse()}const R={class:"dashboard-bar-chart"};function T(e,t,r,o,s,i){const l=(0,a.up)("BarChart"),n=(0,a.up)("DashboardElementWrapper");return(0,a.wg)(),(0,a.j4)(n,{title:r.title,description:r.description,ratio:1,"icon-name":"more_vert"},{default:(0,a.w5)((()=>[(0,a._)("div",R,[(0,a.Wm)(l,{"data-set":[],"chart-style":{width:"70%"},color:r.color},null,8,["color"])])])),_:1},8,["title","description"])}const F={class:"bar-chart"};function H(e,t,r,o,s,i){const l=(0,a.up)("Bar");return(0,a.wg)(),(0,a.iD)("div",F,[(0,a.Wm)(l,{"chart-options":s.chartOptions,"chart-data":s.chartData,style:(0,c.j5)(r.chartStyle)},null,8,["chart-options","chart-data","style"])])}const K={name:"BarChart",components:{Bar:A.$Q},props:{dataSet:{type:Object,required:!0},chartStyle:{type:Object,default:()=>({})},color:{type:String,required:!0}},data(){return{chartData:{labels:[10,2,3,4,5,6,7,8,9,10],datasets:[{label:"Fully Rounded",data:[11,5,1,3,10,18,10,12,1,16],backgroundColor:this.color,borderSkipped:!1,borderRadius:10,barPercentage:.4,categoryPercentage:1}]},chartOptions:{responsive:!0,plugins:{legend:{display:!1},datalabels:{display:!1}},scales:{xAxis:{offset:!0,ticks:{display:!1},grid:{display:!1,drawBorder:!1}},yAxis:{ticks:{display:!1},grid:{display:!1,drawBorder:!1}}}}}}},Y=(0,_.Z)(K,[["render",H],["__scopeId","data-v-6bfa2886"]]),G=Y,J={name:"DashboardBar",components:{BarChart:G,DashboardElementWrapper:W},props:{title:{type:String,required:!0},description:{type:String},dataSet:{type:Array,required:!0},color:{type:String,required:!0}}},U=(0,_.Z)(J,[["render",T],["__scopeId","data-v-b249a766"]]),V=U,X={class:"dashboard-bar-chart"};function ee(e,t,r,o,s,i){const l=(0,a.up)("LineChart"),n=(0,a.up)("DashboardElementWrapper");return(0,a.wg)(),(0,a.j4)(n,{title:r.title,description:r.description,ratio:1,"icon-name":"more_vert"},{default:(0,a.w5)((()=>[(0,a._)("div",X,[(0,a.Wm)(l,{"data-set":[],"chart-style":{width:"70%"},color:r.color},null,8,["color"])])])),_:1},8,["title","description"])}const te={class:"line-chart"};function re(e,t,r,o,s,i){const l=(0,a.up)("Line");return(0,a.wg)(),(0,a.iD)("div",te,[(0,a.Wm)(l,{"chart-options":s.chartOptions,"chart-data":s.chartData,style:(0,c.j5)(r.chartStyle)},null,8,["chart-options","chart-data","style"])])}const ae={name:"PieChart",components:{Line:A.x1},props:{dataSet:{type:Object,required:!0},chartStyle:{type:Object,default:()=>({})},color:{type:String,required:!0}},data(){return{chartData:{labels:[1,2,3,4,5,6,7,8,9,10],datasets:[{label:"Fully Rounded",data:[1,10,101,21,17,18,11,51,11,31],backgroundColor:this.color,borderSkipped:!1,borderRadius:10,barPercentage:.4,categoryPercentage:1}]},chartOptions:{responsive:!0,plugins:{legend:{display:!1},datalabels:{display:!1}},scales:{xAxis:{offset:!0,ticks:{display:!0},grid:{display:!0,drawBorder:!0}},yAxis:{ticks:{display:!0},grid:{display:!0,drawBorder:!0}}}}}},computed:{styles(){return{height:"100px",position:"relative"}}}},oe=(0,_.Z)(ae,[["render",re],["__scopeId","data-v-77843c55"]]),se=oe,ie={name:"DashboardBar",components:{LineChart:se,DashboardElementWrapper:W},props:{title:{type:String,required:!0},description:{type:String},dataSet:{type:Array,required:!0},color:{type:String,required:!0}}},le=(0,_.Z)(ie,[["render",ee]]),ne=le,ce={name:"DashboardPage",components:{DashboardBar:V,DashboardPie:L,DashboardLine:ne,AppPagesWrapper:n.Z,DashboardProgress:k},computed:{colors(){return Q(Math.max(this.progressImages.length,this.pieDataSet.length))},progressImages(){return["payments","maps_home_work","data_thresholding","data_thresholding"]},pieDataSet(){return[{label:"1",value:10},{label:"2",value:20},{label:"3",value:30},{label:"4",value:40}]}}};var de=r(9885);const pe=(0,_.Z)(ce,[["render",l],["__scopeId","data-v-417c7e0e"]]),ue=pe;f()(ce,"components",{QPage:de.Z})}}]);