(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{162:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMxIiBoZWlnaHQ9IjMzMSIgdmlld0JveD0iMCAwIDMzMSAzMzEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMjguOTQyIDIwMy4wMTNDMjMwLjU5NyAyNDYuMDQzIDE2NS41IDMxNC40NSAxNjUuNSAzMTQuNDVDMTY1LjUgMzE0LjQ1IDE1OC41OTUgMjkzLjY5IDEzOS4wMiAyNjkuNzY1QzExOS4xNiAyNDUuNDkyIDQ3Ljk5OTEgMTYxLjg0MiA0MC4yNzE3IDk3LjY0NTFDMzMuMSAzOC4wNjUxIDUyLjk2IDcuNzIzMzkgNTIuOTYgNy43MjMzOUM1Mi45NiA3LjcyMzM5IDgzLjI3NTUgODEuMzcyMyAxMjQuMTI1IDExMy42NDNDMTc5LjI5MiAxNTcuMjI1IDIyNy4zNTIgMTYxLjY2OSAyMjguOTQyIDIwMy4wMTNaIiBmaWxsPSIjOTk4RkM3Ii8+CjxwYXRoIGQ9Ik0yNjguMTEgMTQ3Ljg0N0MyNjguMTEgMTQ3Ljg0NyAyNDMuODM3IDE0My40MzMgMjI2LjE4MyAxMzUuMTU4QzIwOC4wMDEgMTI2LjYzNSAxODguNjcgMTExLjk4OCAxODguNjcgMTExLjk4OEMxODguNjcgMTExLjk4OCAyMTQuMDQ3IDEwNy4wMjMgMjM5LjQyMyA3MS4xNjVDMjU4LjE2MyA0NC42ODUgMjcwLjMxNyA3LjcyMzM0IDI3MC4zMTcgNy43MjMzNEMyNzAuMzE3IDcuNzIzMzQgMjg1Ljk3NCAzNC43NTUgMjg1LjIxMiA4Ni42MTE3QzI4NC42NiAxMjQuMTI1IDI2OC4xMSAxNDcuODQ3IDI2OC4xMSAxNDcuODQ3WiIgZmlsbD0iI0Q0QzJGQyIvPgo8L3N2Zz4K"},163:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(44);function o(t){var n=t.breakpoint.name;return"xs"==n||"sm"==n}},205:function(t,n,e){"use strict";n.a=function(t){t.$vuetify.theme.dark="true"==localStorage.getItem("dark-mode")}},257:function(t,n,e){var content=e(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("26e4b604",content,!0,{sourceMap:!1})},268:function(t,n,e){var content=e(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("d37bf5ce",content,!0,{sourceMap:!1})},269:function(t,n,e){var content=e(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("79e7cbcd",content,!0,{sourceMap:!1})},280:function(t,n,e){"use strict";var o=e(455),r=e(459),c=e(456),l=e(450),d=e(461),h=e(276),f=e(462),m=e(133),x=e(282),M=e(458),v=e(457),w=e(460),y=e(0),_=e(163),j=y.default.extend({name:"AdminLayout",data:function(){return{drawer:!1}},computed:{isMobile:function(){return Object(_.a)(this.$vuetify)},height:function(){return this.drawer?275:this.isMobile?160:80}},methods:{changeDarkMode:function(){localStorage.setItem("dark-mode",this.$vuetify.theme.dark+"")}}}),N=(e(420),e(75)),component=Object(N.a)(j,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n(o.a,[n(r.a,{attrs:{app:!t.isMobile,flat:"",color:"app-background",height:t.height,elevation:t.isMobile?1:0}},[n("div",{staticClass:"px-12 d-flex flex-column justify-center justify-md-start flex-md-row align-center gap-3 py-4",staticStyle:{width:"100%"}},[t.isMobile?n("div",{staticClass:"d-flex justify-space-between width-100"},[n(x.a,{attrs:{src:e(162),"max-height":"50","max-width":"50"}}),t._v(" "),n(c.a,{on:{click:function(n){t.drawer=!t.drawer}}})],1):[n(x.a,{attrs:{src:e(162),"max-height":"50","max-width":"50"}})],t._v(" "),!t.isMobile||t.drawer?[n(h.a,{staticClass:"f-18 w-700",attrs:{outlined:t.isMobile,width:"100",text:"",to:"/home"}},[t._v(" Home ")]),t._v(" "),n(h.a,{staticClass:"f-18 w-700",attrs:{outlined:t.isMobile,width:"100",text:"",to:"/design"}},[t._v(" Manage ")]),t._v(" "),n(v.a)]:t._e(),t._v(" "),n("div",{staticClass:"d-flex gap-3 align-center"},[n("div",{staticClass:"d-flex align-center gap-2"},[t.$vuetify.theme.dark?n(m.a,[t._v("mdi-weather-night")]):n(m.a,[t._v("mdi-white-balance-sunny")]),t._v(" "),n(w.a,{attrs:{dense:"",dark:!1,inset:"","hide-details":""},on:{change:t.changeDarkMode},model:{value:t.$vuetify.theme.dark,callback:function(n){t.$set(t.$vuetify.theme,"dark",n)},expression:"$vuetify.theme.dark"}})],1),t._v(" "),n(h.a,{attrs:{icon:"",height:"24",width:"24"}},[n(m.a,{attrs:{color:"text",size:"20"}},[t._v("mdi-bell-outline")])],1),t._v(" "),n(d.a,{attrs:{bordered:"",bottom:"",color:"secondary",dot:"","offset-x":"10","offset-y":"45"}},[n(l.a,{attrs:{size:"50"}},[n(x.a,{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/2.jpg"}})],1)],1),t._v(" "),n(h.a,{staticClass:"background",attrs:{icon:"",height:"24",width:"24"}},[n(m.a,{attrs:{color:"black",size:"20"}},[t._v("mdi-chevron-down")])],1)],1)],2)]),t._v(" "),n(M.a,{staticClass:"text--text app-background",class:{"main-mobile":t.isMobile,"main-drawer":t.drawer}},[n(M.a,[n(f.a,[n("Nuxt")],1)],1)],1)],1)}),[],!1,null,"2f971640",null);n.a=component.exports},281:function(t,n,e){"use strict";var o=e(455),r=e(459),c=e(456),l=e(450),d=e(461),h=e(276),f=e(462),m=e(133),x=e(282),M=e(458),v=e(457),w=e(460),y=e(0),_=e(163),j=y.default.extend({name:"AdminLayout",data:function(){return{drawer:!1}},computed:{isMobile:function(){return Object(_.a)(this.$vuetify)},height:function(){return this.drawer?275:this.isMobile?160:80}},methods:{changeDarkMode:function(){localStorage.setItem("dark-mode",this.$vuetify.theme.dark+"")}}}),N=(e(422),e(75)),component=Object(N.a)(j,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n(o.a,[n(r.a,{attrs:{app:!t.isMobile,flat:"",color:"app-background",height:t.height,elevation:t.isMobile?1:0}},[n("div",{staticClass:"px-12 d-flex flex-column justify-center justify-md-start flex-md-row align-center gap-3 py-4",staticStyle:{width:"100%"}},[t.isMobile?n("div",{staticClass:"d-flex justify-space-between width-100"},[n(x.a,{attrs:{src:e(162),"max-height":"50","max-width":"50"}}),t._v(" "),n(c.a,{on:{click:function(n){t.drawer=!t.drawer}}})],1):[n(x.a,{attrs:{src:e(162),"max-height":"50","max-width":"50"}})],t._v(" "),!t.isMobile||t.drawer?[n(h.a,{staticClass:"f-18 w-700",attrs:{outlined:t.isMobile,width:"100",text:"",to:"/home"}},[t._v(" Home ")]),t._v(" "),n(h.a,{staticClass:"f-18 w-700",attrs:{outlined:t.isMobile,width:"100",text:"",to:"/design"}},[t._v(" Manage ")]),t._v(" "),n(v.a)]:t._e(),t._v(" "),n("div",{staticClass:"d-flex gap-3 align-center"},[n("div",{staticClass:"d-flex align-center gap-2"},[t.$vuetify.theme.dark?n(m.a,[t._v("mdi-weather-night")]):n(m.a,[t._v("mdi-white-balance-sunny")]),t._v(" "),n(w.a,{attrs:{dense:"",dark:!1,inset:"","hide-details":""},on:{change:t.changeDarkMode},model:{value:t.$vuetify.theme.dark,callback:function(n){t.$set(t.$vuetify.theme,"dark",n)},expression:"$vuetify.theme.dark"}})],1),t._v(" "),n(h.a,{attrs:{icon:"",height:"24",width:"24"}},[n(m.a,{attrs:{color:"text",size:"20"}},[t._v("mdi-bell-outline")])],1),t._v(" "),n(d.a,{attrs:{bordered:"",bottom:"",color:"secondary",dot:"","offset-x":"10","offset-y":"45"}},[n(l.a,{attrs:{size:"50"}},[n(x.a,{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/2.jpg"}})],1)],1),t._v(" "),n(h.a,{staticClass:"background",attrs:{icon:"",height:"24",width:"24"}},[n(m.a,{attrs:{color:"black",size:"20"}},[t._v("mdi-chevron-down")])],1)],1)],2)]),t._v(" "),n(M.a,{staticClass:"text--text app-background",class:{"main-mobile":t.isMobile,"main-drawer":t.drawer}},[n(M.a,[n(f.a,[n("Nuxt")],1)],1)],1)],1)}),[],!1,null,"6ba0b72e",null);n.a=component.exports},312:function(t,n,e){e(313),e(314),t.exports=e(318)},360:function(t,n,e){"use strict";e(257)},361:function(t,n,e){var o=e(23)(!1);o.push([t.i,"\nh1[data-v-bac174f6] {\n\tfont-size: 20px;\n}\n",""]),t.exports=o},364:function(t,n,e){var content=e(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("77bd1b4b",content,!0,{sourceMap:!1})},365:function(t,n,e){var o=e(23)(!1);o.push([t.i,".gap-1 {\n    gap: 4px;\n}\n\n.gap-2 {\n    gap: 8px;\n}\n\n.gap-3 {\n    gap: 12px;\n}\n\n.gap-4 {\n    gap: 16px;\n}\n\n.gap-5 {\n    gap: 20px;\n}\n\n.gap-6 {\n    gap: 24px;\n}\n\n.gap-row-1 {\n    row-gap: 4px;\n}\n\n.gap-row-2 {\n    row-gap: 8px;\n}\n\n.gap-row-3 {\n    row-gap: 12px;\n}\n.gap-row-4 {\n    row-gap: 16px;\n}\n\n.gap-row-5 {\n    row-gap: 20px;\n}\n\n.gap-row-6 {\n    row-gap: 24px;\n}\n\n.gap-col-1 {\n    column-gap: 4px;\n}\n\n.gap-col-2 {\n    column-gap: 8px;\n}\n\n.gap-col-3 {\n    column-gap: 12px;\n}\n\n.gap-col-4 {\n    column-gap: 16px;\n}\n\n.gap-col-5 {\n    column-gap: 20px;\n}\n\n.gap-col-6 {\n    column-gap: 24px;\n}\n\n.gap-col-7 {\n    column-gap: 28px;\n}\n\n.gap-col-8 {\n    column-gap: 32px;\n}\n\n\n\n.height-100 {\n    height: 100%;\n}\n\n.width-100 {\n    width: 100%;\n}\n\n.br-10 {\n    border-radius: 10px;\n}\n\n.mpt-2  {\n    padding-top: 4px;\n}\n\n.v-btn:not(.v-btn--icon) {\n    box-shadow: none !important;\n    padding-left: 23px !important;\n    padding-right: 23px !important;\n}\n\n.v-input--selection-controls__ripple {\n    display: none;\n}\n\n.v-main {\n    padding-top: 40px !important;\n}\n\n\n.v-ripple__container {\n\tcolor: var(--v-primary-base) !important;\n}\n\n.wfc {\n\twidth: fit-content;\n}\n\n.pointer {\n    cursor: pointer;\n}\n\n.no-click {\n    pointer-events: none !important;\n}",""]),t.exports=o},366:function(t,n,e){var content=e(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("3397b977",content,!0,{sourceMap:!1})},367:function(t,n,e){var o=e(23)(!1);o.push([t.i,".f-8 {\n    font-size: 8px !important;\n}\n\n.f-10 {\n    font-size: 10px !important;\n}\n\n.f-12 {\n    font-size: 12px !important;\n}\n\n.f-14 {\n    font-size: 14px !important;\n}\n\n.f-16 {\n    font-size: 16px;\n}\n\n.f-18 {\n    font-size: 18px !important;\n}\n\n.f-20 {\n    font-size: 20px !important;\n}\n\n.f-28 {\n    font-size: 28px !important;\n}\n\n.w-400 {\n    font-weight: 400   !important;\n}\n\n.w-500 {\n    font-weight: 500 !important;\n}\n\n.w-600 {\n    font-weight: 600   !important;\n}\n\n.w-700 {\n    font-weight: 700   !important;\n}\n\n.lh-16 {\n    line-height: 16px !important;\n}\n\n\n.lh-18 {\n    line-height: 18px !important;\n}\n\n.lh-20 {\n    line-height: 20px !important;\n}\n\n.v-input--switch.v-input--switch--inset {\n    margin-top: 0px !important;\n    padding-top: 0px !important;\n    padding-left: 3px !important;\n    height: 22px;\n}\n\n.v-input--switch--inset .v-input--switch__track {\n\topacity: 0.2 !important;\n}\n\n.v-input--is-label-active.v-input--switch--inset .v-input--switch__track {\n\topacity: 1 !important;\n}\n.v-input--is-label-active.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track {\n\tcolor: var(--v-primary-base) !important;\n}\n\n.v-input--is-label-active.v-input--switch.v-input--dense .v-input--switch__thumb {\n\tcolor: white !important;\n}\n\n.v-input--is-label-active.v-input--switch .v-input--switch__thumb {\n\tcolor: white !important;\n}\n\n\n.v-label {\n    color: var(--v-text-base) !important;\n    font-weight: 600 !important;\n    font-size: 12px !important;\n }",""]),t.exports=o},420:function(t,n,e){"use strict";e(268)},421:function(t,n,e){var o=e(23)(!1);o.push([t.i,"\n.main-mobile[data-v-2f971640] {\n    margin-top: 0px !important;\n    padding-top: 0px !important;\n}\n.main-drawer[data-v-2f971640] {\n    margin-top: 170px !important;\n}\n",""]),t.exports=o},422:function(t,n,e){"use strict";e(269)},423:function(t,n,e){var o=e(23)(!1);o.push([t.i,"\n.main-mobile[data-v-6ba0b72e] {\n    margin-top: 0px !important;\n    padding-top: 0px !important;\n}\n.main-drawer[data-v-6ba0b72e] {\n    margin-top: 170px !important;\n}\n",""]),t.exports=o},85:function(t,n,e){"use strict";var o=e(455),r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(e(360),e(75)),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n(o.a,{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n\t\t"+t._s(t.pageNotFound)+"\n\t")]):n("h1",[t._v("\n\t\t"+t._s(t.otherError)+"\n\t")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"bac174f6",null);n.a=component.exports}},[[312,29,4,30]]]);