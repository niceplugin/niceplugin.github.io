(function(t){function e(e){for(var i,n,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={app:0},o=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/image-minify/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1f55":function(t,e,s){},2975:function(t,e,s){"use strict";s("e5cb")},3721:function(t,e,s){},5020:function(t,e,s){"use strict";s("8cc4")},5129:function(t,e,s){"use strict";s("b557")},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("d797"),a=s("ed4c"),o=s("16b0"),n=function(){var t=this,e=t._self._c;return e(a["a"],[e(o["a"],[e("router-view")],1),e("app-footer")],1)},r=[],l=(s("1f55"),s("5d3f")),c=s("bde14"),d=s("fc63"),u=s("7dd1"),p=s("729f"),h=s("974e"),m=function(){var t=this,e=t._self._c;return e(d["a"],{attrs:{id:"footer",color:"light-green",dark:""}},[e(c["a"],{staticClass:"d-flex flex-wrap align-center justify-end pa-0"},[e(p["a"],{attrs:{src:s("9b19"),alt:"Image Minify Website Logo",width:"180",height:"48",position:"left center",contain:""}}),e(h["a"]),e(l["a"],{staticClass:"px-2 text-capitalize",attrs:{href:"https://github.com/niceplugin/image-minify-client",target:"_blank",text:""}},[e(u["a"],{staticClass:"mr-1"},[t._v("mdi-github")]),t._v(" Source on Github ")],1)],1)],1)},f=[],g={name:"AppFooter"},b=g,v=(s("7b1c"),s("8619")),y=Object(v["a"])(b,m,f,!1,null,"5826c776",null),x=y.exports,w={name:"App",components:{appFooter:x},created(){document.addEventListener("drop",t=>t.preventDefault()),document.addEventListener("dragover",t=>t.preventDefault()),document.addEventListener("dragenter",this.onDragenter),window.matchMedia("(display-mode: standalone)").matches&&this.analytics("pwa_view")},methods:{onDragenter(t){var e;t.preventDefault();const s=t.dataTransfer.items,i=0===s.length,a="file"!==(null===(e=s[0])||void 0===e?void 0:e.kind);if(i||a)return this.$store.commit("dragState",!1);this.$store.commit("dragState",!0)}}},_=w,C=Object(v["a"])(_,n,r,!1,null,null,null),k=C.exports,$=s("fb74");Object($["a"])("/image-minify/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var S=s("b8ff"),z=function(){var t=this,e=t._self._c;return e(c["a"],{staticClass:"py-4 py-sm-8"},[e("options"),e("upload-button"),e("process-button"),e("table-list"),e("table-result"),e("text-contents"),e("drop-zone")],1)},j=[],M=s("e318"),O=s("fff6"),F=s("fbb1"),L=s("c1ff"),A=s("d478"),T=s("93d1"),W=s("c560"),q=s("99ef"),B=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"options-wrap"}},[e("install-app"),e(L["a"],{attrs:{attach:"#options-wrap","close-on-content-click":!1,"offset-x":"",left:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:i}){return[e(l["a"],t._g(t._b({attrs:{color:"light-green",dark:"",fab:""}},"v-btn",i,!1),s),[e(u["a"],{attrs:{large:""}},[t._v(t._s(t.menu?"mdi-close":"mdi-cog"))])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[e(M["a"],{attrs:{"max-width":"300"}},[e(O["c"],{staticClass:"py-2"},[t._v(" Options ")]),e(F["a"]),e(O["b"],[e(A["a"],{staticClass:"my-2",attrs:{items:["jpeg","webp"],"item-color":"light-green",color:"light-green",label:"File type","hide-details":"",outlined:"",dense:""},model:{value:t.options.outputType,callback:function(e){t.$set(t.options,"outputType",e)},expression:"options.outputType"}}),e(T["a"],{staticClass:"my-2",attrs:{color:"light-green","track-color":"grey lighten-3",label:"Quality",step:1,max:100,min:1,"thumb-label":"","hide-details":"",dense:""},model:{value:t.options.quality,callback:function(e){t.$set(t.options,"quality",e)},expression:"options.quality"}}),e(q["a"],{attrs:{label:"Max width",type:"number",color:"light-green",step:"1",max:"16383",min:"1",disabled:!t.options.enableMaxWidth,"hide-details":"",outlined:"",dense:""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e(W["a"],{staticClass:"ma-0 mr-n4 pa-0 force-enable",attrs:{color:"light-green","hide-details":"",dense:"",inset:""},model:{value:t.options.enableMaxWidth,callback:function(e){t.$set(t.options,"enableMaxWidth",e)},expression:"options.enableMaxWidth"}})]},proxy:!0}]),model:{value:t.options.maxWidth,callback:function(e){t.$set(t.options,"maxWidth",e)},expression:"options.maxWidth"}}),e(q["a"],{staticClass:"my-4",attrs:{label:"Max height",type:"number",color:"light-green",step:"1",max:"16383",min:"1",disabled:!t.options.enableMaxHeight,"hide-details":"",outlined:"",dense:""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e(W["a"],{staticClass:"ma-0 mr-n4 pa-0 force-enable",attrs:{color:"light-green","hide-details":"",dense:"",inset:""},model:{value:t.options.enableMaxHeight,callback:function(e){t.$set(t.options,"enableMaxHeight",e)},expression:"options.enableMaxHeight"}})]},proxy:!0}]),model:{value:t.options.maxHeight,callback:function(e){t.$set(t.options,"maxHeight",e)},expression:"options.maxHeight"}})],1),e(O["a"],{staticClass:"pa-4 flex-column align-stretch"},[e("div",{staticClass:"d-flex"},[e(l["a"],{staticClass:"text-capitalize flex-grow-1",attrs:{disabled:t.disabledResetBtn,depressed:""},on:{click:t.onClickReset}},[t._v("reset")]),e(l["a"],{staticClass:"text-capitalize ml-4 flex-grow-1",attrs:{color:"light-green",disabled:t.disabledApplyBtn,dark:!t.disabledApplyBtn,depressed:""},on:{click:t.onClickApply}},[t._v("Apply")])],1),t.$store.state.resultList.length?e(l["a"],{staticClass:"text-capitalize mt-4",attrs:{color:"light-green",disabled:t.disabledApplyBtn,dark:!t.disabledApplyBtn,block:""},on:{click:t.onClickApplyWithResult}},[t._v("Apply with result")]):t._e()],1)],1)],1)],1)},R=[],D=(s("1884"),s("98f1"),function(){var t=this,e=t._self._c;return e(l["a"],{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"text-capitalize mb-8 px-6",attrs:{color:"light-blue",dark:""},on:{click:t.installPWA}},[t._v("Install App")])}),P=[],H={name:"InstallApp",created(){const t=this;window.onbeforeinstallprompt=e=>{e.preventDefault(),t.show=!0,t.deferredPrompt=e}},data:()=>({show:!1,deferredPrompt:null}),methods:{async installPWA(){if(!this.deferredPrompt)return;this.deferredPrompt.prompt();const{outcome:t}=await this.deferredPrompt.userChoice,e="dismissed"===t;this.deferredPrompt=e?this.deferredPrompt:null,this.show=e}}},N=H,E=Object(v["a"])(N,D,P,!1,null,"40505554",null),I=E.exports,G={name:"Options",components:{installApp:I},computed:{disabledResetBtn(){const t=this.options;return 75===t.quality&&"jpeg"===t.outputType&&!t.enableMaxWidth&&!t.enableMaxHeight},disabledApplyBtn(){const t=this.$store.state.options,e=this.options;return t.quality===Number((e.quality/100).toFixed(2))&&t.maxWidth===Number(e.maxWidth)&&t.maxHeight===Number(e.maxHeight)&&t.outputType===e.outputType}},watch:{quality(t){this.$store.state.options.quality=Number((t/100).toFixed(2))},"options.enableMaxWidth"(t){t||(this.options.maxWidth="")},"options.enableMaxHeight"(t){t||(this.options.maxHeight="")}},data:()=>({menu:!1,options:{quality:75,maxWidth:"",enableMaxWidth:!1,maxHeight:"",enableMaxHeight:!1,outputType:"jpeg"}}),methods:{onClickReset(){this.options.quality=75,this.options.maxWidth="",this.options.enableMaxWidth=!1,this.options.maxHeight="",this.options.enableMaxHeight=!1,this.options.outputType="jpeg"},onClickApply(){const t=this.$store.state.options,e=this.options;t.quality=Number((e.quality/100).toFixed(2)),t.maxWidth=Number(e.maxWidth),t.maxHeight=Number(e.maxHeight),t.outputType=e.outputType},onClickApplyWithResult(){this.onClickApply();const t=this.$store.state.resultList,e=this.$store.state.requestList,s=[];while(t.length){const e=t.shift();e.state="wait",e.newFile=null,s.push(e)}e.unshift(...s)}}},Z=G,K=(s("5020"),Object(v["a"])(Z,B,R,!1,null,"6c850af5",null)),J=K.exports,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-center"},[e(l["a"],{attrs:{color:"light-green",width:"36vh",height:"36vh",dark:"",fab:""},on:{click:function(e){return t.$refs.input.click()}}},[e("span",{staticClass:"dash-round"}),e("span",{staticClass:"d-flex flex-column pt-vh"},[e("span",{staticClass:"icon-wrap"},[e(u["a"],{attrs:{size:"15vh"}},[t._v("mdi-file-image-plus-outline")])],1),e("span",{staticClass:"text-main"},[t._v("Click to select")]),e("span",{staticClass:"text-sub"},[t._v("or")]),e("span",{staticClass:"text-main"},[t._v("Drag files")])])]),e("input",{ref:"input",attrs:{type:"file",accept:"image/bmp,image/gif,image/jpeg,image/png,image/webp",multiple:"",hidden:""},on:{change:t.onChange}})],1)},Y=[],U={name:"UploadButton",watch:{"$store.state.requestList"(){if(this.$store.state.zipping)return;const t=!this.$store.state.minifyWorking,e=this.$store.state.minifyStop;t&&(e&&this.$store.commit("stopState",!1),!e&&this.$store.commit("workingState",!0),!e&&this.minify())}},methods:{onChange(t){const e=this.$store.commit,s=[...t.target.files];s.forEach(t=>e("addRequestList",{oldFile:t,newFile:null,state:"wait"}))}}},V=U,X=(s("b40f"),Object(v["a"])(V,Q,Y,!1,null,"05448a45",null)),tt=X.exports,et=s("1a3e"),st=function(){var t=this,e=t._self._c;return t.showComponent?e("div",{staticClass:"d-flex justify-center my-6"},[t.$store.state.minifyWorking?e(l["a"],{staticClass:"p-relative",attrs:{color:"red",width:"35vh",loading:t.$store.state.minifyStop,large:"",dark:""},on:{click:function(e){return t.$store.commit("stopState",!0)}},scopedSlots:t._u([{key:"loader",fn:function(){return[e(u["a"],{staticClass:"mr-1"},[t._v("mdi-stop-circle-outline")]),t._v(" Stop "),e(et["a"],{attrs:{color:"white",indeterminate:"",absolute:"",bottom:""}})]},proxy:!0}],null,!1,2610136469)},[e(u["a"],{staticClass:"mr-1"},[t._v("mdi-stop-circle-outline")]),t._v(" Stop ")],1):t.hasOneResult?e(l["a"],{attrs:{color:"light-blue",width:"35vh",large:"",dark:""},on:{click:t.downloadOne}},[e(u["a"],{staticClass:"mr-1"},[t._v("mdi-file-download-outline")]),t._v(" Download ")],1):t.hasResults?e(l["a"],{attrs:{color:"light-blue",width:"35vh",loading:t.$store.state.zipping,large:"",dark:""},on:{click:t.downloadAll},scopedSlots:t._u([{key:"loader",fn:function(){return[e(u["a"],{staticClass:"mr-1"},[t._v("mdi-download-box-outline")]),t._v(" Download All "),e(et["a"],{attrs:{color:"white",indeterminate:"",absolute:"",bottom:""}})]},proxy:!0}],null,!1,3334891091)},[e(u["a"],{staticClass:"mr-1"},[t._v("mdi-download-box-outline")]),t._v(" Download All ")],1):t._e()],1):t._e()},it=[],at=s("e7dc"),ot=s("708f"),nt=s.n(ot),rt={name:"ProcessButton",computed:{showComponent(){const t=this.$store.state.minifyWorking,e=this.hasOneResult,s=this.hasResults;return t||e||s},hasOneResult(){let t=0;return this.$store.state.resultList.forEach(e=>t+=e.newFile?1:0),1===t},hasResults(){let t=0;return this.$store.state.resultList.forEach(e=>t+=e.newFile?1:0),t>1}},methods:{downloadOne(){const t=this.$store.state.resultList.find(t=>Boolean(t.newFile)),e=t.newFile;Object(at["saveAs"])(e,e.name)},downloadAll(){const t=new nt.a,e=this.$store.commit,s=this.$store.state.resultList.filter(t=>t.newFile);e("zippingState",!0),s.forEach(e=>{const s=e.newFile;s&&t.file(s.name,s)}),t.generateAsync({type:"blob"}).then(t=>Object(at["saveAs"])(t,"images.zip")).catch(()=>alert("Failed to convert files to zip.")).finally(()=>e("zippingState",!1))}}},lt=rt,ct=(s("2975"),Object(v["a"])(lt,st,it,!1,null,"a9d5bb32",null)),dt=ct.exports,ut=function(){var t=this,e=t._self._c;return t.showComponent?e("div",{staticClass:"dot-border"},[e("table",[e("thead",[e("tr",[e("th",{staticClass:"ti-1"},[t._v("Name")]),e("th",{staticClass:"ti-2"},[t._v("Before")]),e("th",{staticClass:"ti-3"},[t._v("State")]),e("th",{staticClass:"ti-4"},[t._v("After")]),e("th",{staticClass:"ti-5",attrs:{"aria-label":t.mobile?"Download":""}},[t.mobile?t._e():e("span",[t._v("Download")])]),e("th",{staticClass:"ti-6"},[t._v("Saved")])])]),e("tbody",[t._l(t.$store.state.resultList,(function(s,i){return e("tr",{key:"resultList-"+i},[e("td",{staticClass:"ti-1"},[t._v(t._s(s.oldFile.name))]),e("td",[t._v(t._s(t.byteToString(s.oldFile.size)))]),e("td",[e(et["a"],{staticClass:"rounded",attrs:{height:"24",value:"100",color:"done"===s.state?"light-green":"deep-orange"}},[e("strong",[t._v(t._s("done"===s.state?"success":"fail"))])])],1),e("td",[t._v(t._s(s.newFile?t.byteToString(s.newFile.size):""))]),e("td",["done"===s.state?e(l["a"],{attrs:{small:"",text:!t.mobile,icon:t.mobile},on:{click:function(e){return t.download(s.newFile)}}},[t.mobile?e(u["a"],[t._v("mdi-download")]):e("span",{staticClass:"text-lowercase"},[t._v("download")])],1):t._e()],1),e("td",[t._v(t._s(s.newFile?t.howMuchSave(s):""))])])})),t.needContinue?e("tr",[e("td",{staticClass:"text-center pa-4 transparent",attrs:{colspan:"9"}},[e(l["a"],{staticClass:"ma-auto",attrs:{width:"240",color:"deep-orange",disabled:t.$store.state.zipping,depressed:"",dark:!t.$store.state.zipping},on:{click:t.continueMinify}},[e(u["a"],{staticClass:"mr-1"},[t._v("mdi-play-box-outline")]),t._v(" Continue ")],1)],1)]):t._e(),t._l(t.$store.state.requestList,(function(s,i){return e("tr",{key:"requestList-"+i},[e("td",{staticClass:"ti-1"},[t._v(t._s(s.oldFile.name))]),e("td",[t._v(t._s(t.byteToString(s.oldFile.size)))]),e("td",[e(et["a"],{staticClass:"rounded",attrs:{height:"24",value:"0",color:"wait"===s.state?"grey":"deep-orange",indeterminate:"working"===s.state}},[e("strong",[t._v(t._s("wait"===s.state?"wait":"progressing"))])])],1),e("td"),e("td"),e("td")])}))],2)])]):t._e()},pt=[],ht={name:"TableList",computed:{showComponent(){const t=this.$store.state.requestList.length,e=this.$store.state.resultList.length;return t+e},mobile(){return this.$vuetify.breakpoint.width<720},needContinue(){const t=this.$store.state.requestList.length,e=!this.$store.state.minifyWorking;return t&&e}},methods:{download(t){Object(at["saveAs"])(t,t.name)},howMuchSave(t){const e=t.oldFile.size,s=t.newFile.size-e,i=s/e*100;return(i>0?Math.floor(i):Math.ceil(i))+" %"},continueMinify(){this.$store.commit("workingState",!0),this.minify()}}},mt=ht,ft=(s("5129"),Object(v["a"])(mt,ut,pt,!1,null,"72b41a32",null)),gt=ft.exports,bt=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showComponent,expression:"showComponent"}],staticClass:"table-result"},[e("div",{staticClass:"content-box"},[e("div",{staticClass:"main-content"},[e("span",{staticClass:"px-4"},[t._v("saved")]),e("span",{staticClass:"text-h4"},[t._v(t._s(t.savedText))])]),e("div",[e("span",{staticClass:"text-right pr-2"},[t._v("Total:")]),e("span",{staticClass:"text-left"},[t._v(t._s(t.footerText))])])])])},vt=[],yt={name:"TableResult",computed:{showComponent(){const t=!this.$store.state.minifyWorking;let e=0;return this.$store.state.resultList.forEach(t=>{"done"===t.state&&e++}),e>1&&t},savedText(){const t=this.totalSize("old"),e=this.totalSize("new")-t,s=e/t*100;return(s>0?Math.floor(s):Math.ceil(s))+" %"},footerText(){let t=this.totalSize("old");t=this.byteToString(t);let e=this.totalSize("new");return e=this.byteToString(e),`${t} → ${e}`}},methods:{totalSize(t){let e=0;return this.$store.state.resultList.forEach(s=>{var i;"done"===s.state&&(e+=(null===(i=s[t+"File"])||void 0===i?void 0:i.size)||0)}),e}}},xt=yt,wt=(s("9cf5"),Object(v["a"])(xt,bt,vt,!1,null,"b0e8143e",null)),_t=wt.exports,Ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-wrap"},[t.$store.state.resultList.length?t._e():e("div",{staticClass:"text-center"},[e("h1",{staticClass:"text-h2 font-weight-bold my-4 mt-md-8 text-decoration-underline"},[t._v(" Image Minify ")]),e("p",[t._v("Minify the filesize of your images so easy.")])]),e("section",[t._m(0),e("div",{staticClass:"d-flex align-center justify-center justify-sm-end"},[e(u["a"],{staticClass:"mt-n6 mt-sm-0",attrs:{size:"180",color:"light-green"},domProps:{textContent:t._s("mdi-image-size-select-large")}})],1)]),e("section",[e("div",{staticClass:"d-flex align-center justify-center justify-sm-start reverse-order"},[e(u["a"],{staticClass:"mt-n6 mt-sm-0",attrs:{size:"180",color:"light-green"},domProps:{textContent:t._s("mdi-cloud-off-outline")}})],1),t._m(1)])])},kt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center text-sm-left"},[e("div",{staticClass:"text-box"},[e("h2",{staticClass:"text-h3 font-weight-bold light-green--text mb-2"},[t._v("Smaller")]),e("p",{staticClass:"text-h5"},[t._v(" Makes the images filesize smaller and lighter. You can custom the quality. ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center text-sm-right"},[e("div",{staticClass:"text-box"},[e("h2",{staticClass:"text-h3 font-weight-bold light-green--text mb-2"},[t._v("Secure")]),e("p",{staticClass:"text-h5"},[t._v(" Image Minify does all the work locally. Not sent to server. So can use offline. ")])])])}],$t={name:"TextContents"},St=$t,zt=(s("8bfe"),Object(v["a"])(St,Ct,kt,!1,null,"c7751642",null)),jt=zt.exports,Mt=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.dragOn,expression:"$store.state.dragOn"}],staticClass:"drop-zone"},[e("div",[e(u["a"],{attrs:{color:"white",size:"25vmin"},domProps:{textContent:t._s("mdi-archive-arrow-down-outline")}}),e("div",{staticClass:"text-center text-h5 font-weight-bold white--text",domProps:{textContent:t._s("Drop images here.")}})],1),e("div",{staticClass:"drag-area",on:{drop:function(e){return e.preventDefault(),t.onDrop.apply(null,arguments)},dragleave:t.onDragleave,dragover:function(t){t.preventDefault()}}})])},Ot=[],Ft={name:"DropZone",methods:{onDrop(t){const e=this.$store.commit,s=[...t.dataTransfer.files];s.forEach(t=>e("addRequestList",{oldFile:t,newFile:null,state:"wait"})),this.$store.commit("dragState",!1)},onDragleave(){this.$store.commit("dragState",!1)}}},Lt=Ft,At=(s("701e"),Object(v["a"])(Lt,Mt,Ot,!1,null,"d5abb4ee",null)),Tt=At.exports,Wt={name:"Main",components:{options:J,uploadButton:tt,processButton:dt,tableList:gt,tableResult:_t,textContents:jt,dropZone:Tt}},qt=Wt,Bt=Object(v["a"])(qt,z,j,!1,null,null,null),Rt=Bt.exports,Dt=[{path:"/",name:"Home",component:Rt},{path:"*",beforeEnter(t,e,s){s("/")}}];i["a"].use(S["a"]);const Pt=new S["a"]({mode:"history",base:"/image-minify/",routes:Dt});var Ht=Pt,Nt=s("19d6"),Et={dragOn:!1,options:{quality:.75,maxWidth:0,maxHeight:0,outputType:"jpeg"},resultList:[],requestList:[],minifyWorking:!1,minifyStop:!1,zipping:!1},It={workingState(t,e=!1){t.minifyWorking=e},stopState(t,e=!1){t.minifyStop=e},dragState(t,e=!1){t.dragOn=e},zippingState(t,e=!1){t.zipping=e},addResultList(t,e){t.resultList.push(e)},addRequestList(t,e){t.requestList.push(e)},subRequestList(t){t.requestList.shift()}};i["a"].use(Nt["a"]);var Gt=new Nt["a"].Store({state:Et,mutations:It,actions:{},modules:{}}),Zt=s("aabc");i["a"].use(Zt["a"]);var Kt=new Zt["a"]({}),Jt=s("96a7"),Qt=s("4d6a");const Yt={apiKey:"AIzaSyDTrBFmIiPn81BFzHpx60Wl8hBZaA5EKZE",authDomain:"imageminify.firebaseapp.com",projectId:"imageminify",storageBucket:"imageminify.appspot.com",messagingSenderId:"823892436245",appId:"1:823892436245:web:18668926866816ae28351c",measurementId:"G-6Q6YG6DHTT"},Ut=Object(Jt["a"])(Yt),Vt=Object(Qt["a"])(Ut);i["a"].prototype.analytics=function(t="",e={}){t&&"string"===typeof t&&(e?Object(Qt["b"])(Vt,t,e):Object(Qt["b"])(Vt,t))};var Xt={BP(){return this.$vuetify.breakpoint}},te=s("15f3"),ee={minify(){const t=!Gt.state.requestList.length,e=Gt.state.minifyStop;if(t||e)return Gt.commit("workingState",!1);const s=this,i=Gt.state.requestList[0],a={...Gt.state.options};i.state="working",Object(te["a"])(i.oldFile,a).then(t=>{const e=t[0],a=t[1];i.newFile=e.size<a.size||e.type!==a.type?e:a,i.state="done",s.analyticsResult(i)}).catch(t=>{i.state="error",s.analyticsReject(t.code,i.oldFile.type)}).finally(()=>{Gt.commit("subRequestList"),Gt.commit("addResultList",i),s.minify()})},byteToString(t){const e=["byte","KB","MB","GB"];let s=0;while(t>999&&e[s+1])t/=1024,s++;return`${+t.toFixed(1)} ${e[s]}`},analyticsResult(t){const e=this.sizeRange(t.oldFile.size),s=this.sizeRange(t.newFile.size);this.analytics("minify_result",{old_type:t.oldFile.type,new_type:t.newFile.type,old_size:e,new_size:s})},analyticsReject(t,e){this.analytics("minify_error",{file_type:e,error_code:t})},sizeRange(t){return t<1048576?"~ 1MB":t<5242880?"1MB ~ 5MB":t<10485760?"5MB ~ 10MB":t<26214400?"10MB ~ 25MB":"25MB ~"}};i["a"].mixin({computed:Xt,methods:ee}),i["a"].config.productionTip=!1,new i["a"]({router:Ht,store:Gt,vuetify:Kt,render:t=>t(k)}).$mount("#app")},"650a":function(t,e,s){},"701e":function(t,e,s){"use strict";s("650a")},7832:function(t,e,s){},"7b1c":function(t,e,s){"use strict";s("9c74")},"8bfe":function(t,e,s){"use strict";s("3721")},"8cc4":function(t,e,s){},"9b19":function(t,e,s){t.exports=s.p+"img/logo.9cd13b86.svg"},"9c74":function(t,e,s){},"9cf5":function(t,e,s){"use strict";s("c4c5")},b40f:function(t,e,s){"use strict";s("7832")},b557:function(t,e,s){},c4c5:function(t,e,s){},e5cb:function(t,e,s){}});
//# sourceMappingURL=app.b071b2d2.js.map