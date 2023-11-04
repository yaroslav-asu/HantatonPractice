"use strict";(globalThis["webpackChunkpractichackathonproject"]=globalThis["webpackChunkpractichackathonproject"]||[]).push([[818],{9460:(t,e,r)=>{r.d(e,{Z:()=>u});var a=r(9835),o=r(6970);function s(t,e,r,s,i,l){const n=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(n,{class:"app-page"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"wrapper",style:(0,o.j5)(r.wrapperStyle)},[(0,a.WI)(t.$slots,"default",{},void 0,!0)],4)])),_:3})}const i={name:"AppPagesWrapper",props:{wrapperStyle:{type:Object}}};var l=r(1639),n=r(9885),c=r(9984),d=r.n(c);const p=(0,l.Z)(i,[["render",s],["__scopeId","data-v-5a978107"]]),u=p;d()(i,"components",{QPage:n.Z})},6818:(t,e,r)=>{r.r(e),r.d(e,{default:()=>ht});var a=r(9835);const o={class:"content"},s={class:"col-wrapper four-cols"},i={class:"blocks-wrapper"},l={class:"blocks-col blocks-col--first"},n={class:"blocks-col blocks-col--second"};function c(t,e,r,c,d,p){const u=(0,a.up)("DashboardProgress"),h=(0,a.up)("DashboardPie"),g=(0,a.up)("DashboardBar"),b=(0,a.up)("DashboardLine"),y=(0,a.up)("AppPagesWrapper");return(0,a.wg)(),(0,a.j4)(y,null,{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("div",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.progressImages,((e,r)=>((0,a.wg)(),(0,a.j4)(u,{key:e,title:t.$t(`dashboard.progress.${r+1}.title`),description:t.$t(`dashboard.progress.${r+1}.description`),iconName:e,color:p.colors[r],value:Math.random()},null,8,["title","description","iconName","color","value"])))),128))]),(0,a._)("div",i,[(0,a._)("div",l,[(0,a.Wm)(h,{title:t.$t("dashboard.pie.title"),"data-set":p.pieDataSet,colors:p.colors,class:"pie"},null,8,["title","data-set","colors"]),(0,a.Wm)(u,{title:t.$t("dashboard.progress.additional.title"),description:t.$t("dashboard.progress.additional.description"),color:p.colors[0],class:"additional-progress","icon-name":"select_all",value:Math.random()},null,8,["title","description","color","value"])]),(0,a._)("div",n,[(0,a.Wm)(g,{title:t.$t("dashboard.bar.title"),description:t.$t("dashboard.bar.description"),"data-set":[],color:p.colors[0]},null,8,["title","description","color"]),(0,a.Wm)(b,{title:t.$t("dashboard.line.title"),description:t.$t("dashboard.line.description"),"data-set":[],color:p.colors[0]},null,8,["title","description","color"])])])])])),_:1})}var d=r(9460),p=r(6970);const u={class:"progress-wrapper"},h={class:"percentage"};function g(t,e,r,o,s,i){const l=(0,a.up)("q-linear-progress"),n=(0,a.up)("DashboardElementWrapper");return(0,a.wg)(),(0,a.j4)(n,{title:r.title,description:r.description,"icon-name":r.iconName,"icon-color":r.color},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(l,{class:"progress",value:s.progress,color:r.color,style:(0,p.j5)({color:r.color}),"animation-speed":700},null,8,["value","color","style"]),(0,a._)("p",h,(0,p.zw)(Math.floor(100*s.progress)+"%"),1)])])),_:1},8,["title","description","icon-name","icon-color"])}const b={class:"text-wrapper"},y={class:"title"},m={class:"description"},v={class:"content"};function _(t,e,r,o,s,i){const l=(0,a.up)("q-icon");return(0,a.wg)(),(0,a.iD)("div",{class:"dashboard-element_wrapper",style:(0,p.j5)({aspectRatio:r.ratio?r.ratio:"unset"})},[(0,a._)("div",b,[(0,a._)("p",y,(0,p.zw)(r.title),1),(0,a.Wm)(l,{class:"icon",name:r.iconName,color:r.iconColor,style:(0,p.j5)({color:r.iconColor})},null,8,["name","color","style"])]),(0,a._)("p",m,(0,p.zw)(r.description),1),(0,a._)("div",v,[(0,a.WI)(t.$slots,"default",{},void 0,!0)])],4)}const w={name:"DashboardElementWrapper",props:{ratio:{type:Number,default:null},title:{type:String,required:!0},description:{type:String},iconName:{type:String},iconColor:{type:String}}};var S=r(1639),f=r(2857),D=r(9984),W=r.n(D);const j=(0,S.Z)(w,[["render",_],["__scopeId","data-v-d867bec8"]]),k=j;W()(w,"components",{QIcon:f.Z});const P={name:"DashboardProgress",components:{DashboardElementWrapper:k},props:{title:{type:String,required:!0},description:{type:String,required:!0},iconName:{type:String},color:{type:String,default:"primary"},value:{type:Number,default:.5}},data(){return setTimeout((()=>{this.progress=this.value}),0),{progress:0}}};var q=r(8289);const C=(0,S.Z)(P,[["render",g],["__scopeId","data-v-50f70457"]]),I=C;W()(P,"components",{QLinearProgress:q.Z});const $={class:"pie-chart_wrapper"};function Z(t,e,r,o,s,i){const l=(0,a.up)("PieChart"),n=(0,a.up)("DashboardElementWrapper");return(0,a.wg)(),(0,a.j4)(n,{class:"dashboard-pie",title:r.title,iconName:"more_vert",color:"grey",ratio:1},{default:(0,a.w5)((()=>[(0,a._)("div",$,[(0,a.Wm)(l,{"data-set":r.dataSet,colors:r.colors,"chart-style":{width:"65%"}},null,8,["data-set","colors"])])])),_:1},8,["title"])}const A={class:"pie-chart"},B={class:"pie-legend"};function x(t,e,r,o,s,i){const l=(0,a.up)("Pie");return(0,a.wg)(),(0,a.iD)("div",A,[(0,a.Wm)(l,{"chart-options":s.chartOptions,"chart-data":i.chartData,style:(0,p.j5)(r.chartStyle)},null,8,["chart-options","chart-data","style"]),(0,a._)("div",B,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.dataSet,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"item",style:(0,p.j5)({"--color":r.colors[e]})},(0,p.zw)(t.label),5)))),128))])])}r(702),r(8080);var O=r(9453);const N={name:"PieChart",components:{Pie:O.by},props:{chartStyle:{type:Object,default:()=>({})},dataSet:{type:Array,required:!0},colors:{type:Array,required:!0}},data(){return{chartOptions:{responsive:!0,plugins:{tooltip:{enabled:!1},legend:{display:!1},datalabels:{formatter:(t,e)=>Math.round(this.values[e.dataIndex]/this.values.reduce(((t,e)=>t+e),0)*100*10)/10+"%",color:"white",font:{weight:"bold",size:16}}}}}},computed:{labels(){return this.dataSet.map((t=>t.label))},values(){return this.dataSet.map((t=>t.value))},chartData(){return{labels:this.labels,datasets:[{data:this.values,backgroundColor:this.colors}]}}}},E=(0,S.Z)(N,[["render",x],["__scopeId","data-v-54f1bf40"]]),M=E,L={name:"DashboardPie",components:{PieChart:M,DashboardElementWrapper:k},props:{title:{type:String,required:!0},description:{type:String},iconName:{type:String},iconColor:{type:String},dataSet:{type:Array,required:!0},colors:{type:Array,required:!0}}},z=(0,S.Z)(L,[["render",Z],["__scopeId","data-v-db1564d6"]]),R=z;r(9665);function Q(t,e,r){r/=100;const a=e*Math.min(r,1-r)/100,o=e=>{const o=(e+t/30)%12,s=r-a*Math.max(Math.min(o-3,9-o,1),-1);return Math.round(255*s).toString(16).padStart(2,"0")};return`#${o(0)}${o(8)}${o(4)}`}function T(t){let e=[];for(let r=0;r<t;r++)e.push(Q(360*r/t,91,69));return e[t-1]="#6f6af8",e.reverse()}const F={class:"dashboard-bar-chart"};function H(t,e,r,o,s,i){const l=(0,a.up)("BarChart"),n=(0,a.up)("DashboardElementWrapper");return(0,a.wg)(),(0,a.j4)(n,{title:r.title,description:r.description,ratio:1,"icon-name":"more_vert"},{default:(0,a.w5)((()=>[(0,a._)("div",F,[(0,a.Wm)(l,{"data-set":[],"chart-style":{width:"70%"},color:r.color},null,8,["color"])])])),_:1},8,["title","description"])}const K={class:"bar-chart"};function Y(t,e,r,o,s,i){const l=(0,a.up)("Bar");return(0,a.wg)(),(0,a.iD)("div",K,[(0,a.Wm)(l,{"chart-options":s.chartOptions,"chart-data":s.chartData,style:(0,p.j5)(r.chartStyle)},null,8,["chart-options","chart-data","style"])])}const G={name:"BarChart",components:{Bar:O.$Q},props:{dataSet:{type:Object,required:!0},chartStyle:{type:Object,default:()=>({})},color:{type:String,required:!0}},data(){return{chartData:{labels:[10,2,3,4,5,6,7,8,9,10],datasets:[{label:"Fully Rounded",data:[11,5,1,3,10,18,10,12,1,16],backgroundColor:this.color,borderSkipped:!1,borderRadius:10,barPercentage:.4,categoryPercentage:1}]},chartOptions:{responsive:!0,plugins:{legend:{display:!1},datalabels:{display:!1}},scales:{xAxis:{offset:!0,ticks:{display:!1},grid:{display:!1,drawBorder:!1}},yAxis:{ticks:{display:!1},grid:{display:!1,drawBorder:!1}}}}}}},J=(0,S.Z)(G,[["render",Y],["__scopeId","data-v-6bfa2886"]]),U=J,V={name:"DashboardBar",components:{BarChart:U,DashboardElementWrapper:k},props:{title:{type:String,required:!0},description:{type:String},dataSet:{type:Array,required:!0},color:{type:String,required:!0}}},X=(0,S.Z)(V,[["render",H],["__scopeId","data-v-43e60c9e"]]),tt=X,et={class:"dashboard-bar-chart"};function rt(t,e,r,o,s,i){const l=(0,a.up)("LineChart"),n=(0,a.up)("DashboardElementWrapper");return(0,a.wg)(),(0,a.j4)(n,{title:r.title,description:r.description,ratio:1,"icon-name":"more_vert"},{default:(0,a.w5)((()=>[(0,a._)("div",et,[(0,a.Wm)(l,{"data-set":[],"chart-style":{width:"70%"},color:r.color},null,8,["color"])])])),_:1},8,["title","description"])}const at={class:"line-chart"};function ot(t,e,r,o,s,i){const l=(0,a.up)("Line");return(0,a.wg)(),(0,a.iD)("div",at,[(0,a.Wm)(l,{"chart-options":s.chartOptions,"chart-data":s.chartData,style:(0,p.j5)(r.chartStyle)},null,8,["chart-options","chart-data","style"])])}const st={name:"PieChart",components:{Line:O.x1},props:{dataSet:{type:Object,required:!0},chartStyle:{type:Object,default:()=>({})},color:{type:String,required:!0}},data(){return{chartData:{labels:[1,2,3,4,5,6,7,8,9,10],datasets:[{label:"Fully Rounded",data:[1,10,101,21,17,18,11,51,11,31],backgroundColor:this.color,borderSkipped:!1,borderRadius:10,barPercentage:.4,categoryPercentage:1}]},chartOptions:{responsive:!0,plugins:{legend:{display:!1},datalabels:{display:!1}},scales:{xAxis:{offset:!0,ticks:{display:!0},grid:{display:!0,drawBorder:!0}},yAxis:{ticks:{display:!0},grid:{display:!0,drawBorder:!0}}}}}},computed:{styles(){return{height:"100px",position:"relative"}}}},it=(0,S.Z)(st,[["render",ot],["__scopeId","data-v-77843c55"]]),lt=it,nt={name:"DashboardBar",components:{LineChart:lt,DashboardElementWrapper:k},props:{title:{type:String,required:!0},description:{type:String},dataSet:{type:Array,required:!0},color:{type:String,required:!0}}},ct=(0,S.Z)(nt,[["render",rt],["__scopeId","data-v-5deb4a60"]]),dt=ct,pt={name:"DashboardPage",components:{DashboardBar:tt,DashboardPie:R,DashboardLine:dt,AppPagesWrapper:d.Z,DashboardProgress:I},computed:{colors(){return T(Math.max(this.progressImages.length,this.pieDataSet.length))},progressImages(){return["payments","maps_home_work","data_thresholding","data_usage"]},pieDataSet(){return[{label:"1",value:10},{label:"2",value:20},{label:"3",value:30},{label:"4",value:40}]}}},ut=(0,S.Z)(pt,[["render",c],["__scopeId","data-v-7f6526d8"]]),ht=ut}}]);