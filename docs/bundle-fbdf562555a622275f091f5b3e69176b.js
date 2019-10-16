!function(t){"use strict";function e(){const t=document.head||document.getElementsByTagName("head")[0],n=e.styles||(e.styles={}),i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,s){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){const o=i?s.media||"default":e,r=n[o]||(n[o]={ids:[],parts:[],element:void 0});if(!r.ids.includes(e)){let n=s.source,a=r.ids.length;if(r.ids.push(e),i&&(r.element=r.element||document.querySelector("style[data-group="+o+"]")),!r.element){const e=r.element=document.createElement("style");e.type="text/css",s.media&&e.setAttribute("media",s.media),i&&(e.setAttribute("data-group",o),e.setAttribute("data-next-index","0")),t.appendChild(e)}if(i&&(a=parseInt(r.element.getAttribute("data-next-index")),r.element.setAttribute("data-next-index",a+1)),r.element.styleSheet)r.parts.push(n),r.element.styleSheet.cssText=r.parts.filter(Boolean).join("\n");else{const t=document.createTextNode(n),e=r.element.childNodes;e[a]&&r.element.removeChild(e[a]),e.length?r.element.insertBefore(t,e[a]):r.element.appendChild(t)}}}}}function n(){const t=document.head||document.getElementsByTagName("head")[0],e=n.styles||(n.styles={}),i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(n,s){if(!document.querySelector('style[data-vue-ssr-id~="'+n+'"]')){const o=i?s.media||"default":n,r=e[o]||(e[o]={ids:[],parts:[],element:void 0});if(!r.ids.includes(n)){let e=s.source,a=r.ids.length;if(r.ids.push(n),i&&(r.element=r.element||document.querySelector("style[data-group="+o+"]")),!r.element){const e=r.element=document.createElement("style");e.type="text/css",s.media&&e.setAttribute("media",s.media),i&&(e.setAttribute("data-group",o),e.setAttribute("data-next-index","0")),t.appendChild(e)}if(i&&(a=parseInt(r.element.getAttribute("data-next-index")),r.element.setAttribute("data-next-index",a+1)),r.element.styleSheet)r.parts.push(e),r.element.styleSheet.cssText=r.parts.filter(Boolean).join("\n");else{const t=document.createTextNode(e),n=r.element.childNodes;n[a]&&r.element.removeChild(n[a]),n.length?r.element.insertBefore(t,n[a]):r.element.appendChild(t)}}}}}t=t&&t.hasOwnProperty("default")?t.default:t;const i={name:"drag-it-dude",props:{width:{type:Number,default:0},height:{type:Number,default:0},parentWidth:{type:Number,default:0},parentHeight:{type:Number,default:0},ignoreDrag:{type:[Boolean,Function],default:!1}},watch:{width(t,e){if(!(t<e)&&0!==this.left&&(this.parent.width=this.parentWidth||this.elem.parentNode.offsetWidth,this.parent.height=this.parentHeight||this.elem.parentNode.offsetHeight,t>this.parent.width-this.left)){const e=this.parent.width-t;this.left=e<0?0:e,this.elem.style.left=`${this.left}px`}},height(t,e){if(!(t<e)&&0!==this.top&&(this.parent.width=this.parentWidth||this.elem.parentNode.offsetWidth,this.parent.height=this.parentHeight||this.elem.parentNode.offsetHeight,t>this.parent.height-this.top)){const t=this.parent.height-this.height;this.top=t,this.elem.style.top=`${this.top}px`}}},data:()=>({shiftY:null,shiftX:null,left:0,top:0,elem:null,isIos:!1,parent:{width:0,height:0}}),methods:{iosMove(t){this.isIos&&this.elementMove(t)},elementMove(t){this.$emit("dragging"),t.preventDefault(),t.pageX||(document.body.style.overflow="hidden");const e=t.pageX||t.changedTouches[0].pageX,n=t.pageY||t.changedTouches[0].pageY;let i=e-this.shiftX,s=n-this.shiftY;const o=e-this.shiftX+this.elem.offsetWidth,r=n-this.shiftY+this.elem.offsetHeight;i=i<0?0:o>this.parent.width?this.parent.width-this.elem.offsetWidth:e-this.shiftX,s=s<0?0:r>this.parent.height?this.parent.height-this.elem.offsetHeight:n-this.shiftY,this.elem.style.left=`${i}px`,this.left=i,this.elem.style.top=`${s}px`,this.top=s},hang(t){"function"==typeof this.ignoreDrag&&this.ignoreDrag(t)||"boolean"==typeof this.ignoreDrag&&this.ignoreDrag||(this.$emit("activated"),this.parent.width=this.parentWidth||this.elem.parentNode.offsetWidth,this.parent.height=this.parentHeight||this.elem.parentNode.offsetHeight,this.shiftX=t.pageX?t.pageX-this.elem.offsetLeft:t.changedTouches[0].pageX-this.elem.offsetLeft,this.shiftY=t.pageY?t.pageY-this.elem.offsetTop:t.changedTouches[0].pageY-this.elem.offsetTop,t.pageX?this.isIos?this.elem.addEventListener("touchmove",this.elementMove):(this.elem.parentElement.addEventListener("mousemove",this.elementMove),this.elem.parentElement.addEventListener("mouseleave",this.drop)):this.elem.addEventListener("touchmove",this.elementMove))},drop(){this.$emit("dropped"),document.body.style.overflow=null,this.elem.parentElement.removeEventListener("mousemove",this.elementMove,!1),this.elem.removeEventListener("touchmove",this.elementMove,!1),this.elem.parentElement.onmouseup=null,this.elem.ontouchend=null}},mounted(){this.isIos=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,this.elem=this.$el}};var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"drag-it-dude",on:{touchstart:function(e){return e.stopPropagation(),t.hang(e)},touchend:function(e){return e.stopPropagation(),t.drop(e)},mousedown:function(e){return e.stopPropagation(),t.hang(e)},mouseup:function(e){return e.stopPropagation(),t.drop(e)},touchmove:function(e){return e.stopPropagation(),t.iosMove(e)}}},[t._t("default")],2)},o=[];s._withStripped=!0;const r={name:"App",components:{DragItDude:function(t,e,n,i,s,o,r,a){const d=("function"==typeof n?n.options:n)||{};d.__file="/Users/cas/Git/vue-drag-it-dude/src/DragItDude.vue",d.render||(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),d._scopeId=i;{let t;if(e&&(t=function(t){e.call(this,r(t))}),void 0!==t)if(d.functional){const e=d.render;d.render=function(n,i){return t.call(i),e(n,i)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,t):[t]}}return d}({render:s,staticRenderFns:o},function(t){t&&t("data-v-8126915e_0",{source:"\n.drag-it-dude {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n}\n",map:{version:3,sources:["/Users/cas/Git/vue-drag-it-dude/src/DragItDude.vue"],names:[],mappings:";AA4KA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CACA",file:"DragItDude.vue",sourcesContent:['<template>\n\t<div\n\t\tclass="drag-it-dude"\n\t\t@touchstart.stop="hang"\n\t\t@touchend.stop="drop"\n\t\t@mousedown.stop="hang"\n\t\t@mouseup.stop="drop"\n\t\t@touchmove.stop="iosMove"\n\t>\n\t\t<slot></slot>\n\t</div>\n</template>\n\n<script>\nexport default {\n\tname: "drag-it-dude",\n\tprops: {\n\t\twidth: {\n\t\t\ttype: Number,\n\t\t\tdefault: 0\n\t\t},\n\t\theight: {\n\t\t\ttype: Number,\n\t\t\tdefault: 0\n\t\t},\n\t\tparentWidth: {\n\t\t\ttype: Number,\n\t\t\tdefault: 0\n\t\t},\n\t\tparentHeight: {\n\t\t\ttype: Number,\n\t\t\tdefault: 0\n\t\t},\n\t\tignoreDrag: {\n\t\t\ttype: [Boolean, Function],\n\t\t\tdefault: false\n\t\t}\n\t},\n\twatch: {\n\t\twidth(newWidth, oldWidth) {\n\t\t\tif (newWidth < oldWidth) return;\n\t\t\tif (this.left === 0) return;\n\n\t\t\tthis.parent.width =\n\t\t\t\tthis.parentWidth || this.elem.parentNode.offsetWidth;\n\t\t\tthis.parent.height =\n\t\t\t\tthis.parentHeight || this.elem.parentNode.offsetHeight;\n\n\t\t\tif (newWidth > this.parent.width - this.left) {\n\t\t\t\tconst newLeft = this.parent.width - newWidth;\n\t\t\t\tthis.left = newLeft < 0 ? 0 : newLeft;\n\t\t\t\tthis.elem.style.left = `${this.left}px`;\n\t\t\t}\n\t\t},\n\t\theight(newHeight, oldHeight) {\n\t\t\tif (newHeight < oldHeight) return;\n\t\t\tif (this.top === 0) return;\n\n\t\t\tthis.parent.width =\n\t\t\t\tthis.parentWidth || this.elem.parentNode.offsetWidth;\n\t\t\tthis.parent.height =\n\t\t\t\tthis.parentHeight || this.elem.parentNode.offsetHeight;\n\n\t\t\tif (newHeight > this.parent.height - this.top) {\n\t\t\t\tconst newTop = this.parent.height - this.height;\n\t\t\t\tthis.top = newTop;\n\t\t\t\tthis.elem.style.top = `${this.top}px`;\n\t\t\t}\n\t\t}\n\t},\n\tdata: () => ({\n\t\tshiftY: null,\n\t\tshiftX: null,\n\t\tleft: 0,\n\t\ttop: 0,\n\t\telem: null,\n\t\tisIos: false,\n\t\tparent: {\n\t\t\twidth: 0,\n\t\t\theight: 0\n\t\t}\n\t}),\n\tmethods: {\n\t\tiosMove(e) {\n\t\t\tif (this.isIos) this.elementMove(e);\n\t\t},\n\t\telementMove(e) {\n\t\t\tthis.$emit("dragging");\n\t\t\te.preventDefault();\n\t\t\tif (!e.pageX) {\n\t\t\t\tdocument.body.style.overflow = "hidden";\n\t\t\t}\n\t\t\tconst x = e.pageX || e.changedTouches[0].pageX;\n\t\t\tconst y = e.pageY || e.changedTouches[0].pageY;\n\t\t\tlet newLeft = x - this.shiftX;\n\t\t\tlet newTop = y - this.shiftY;\n\t\t\tconst newRight = x - this.shiftX + this.elem.offsetWidth;\n\t\t\tconst newBottom = y - this.shiftY + this.elem.offsetHeight;\n\t\t\tif (newLeft < 0) {\n\t\t\t\tnewLeft = 0;\n\t\t\t} else if (newRight > this.parent.width) {\n\t\t\t\tnewLeft = this.parent.width - this.elem.offsetWidth;\n\t\t\t} else {\n\t\t\t\tnewLeft = x - this.shiftX;\n\t\t\t}\n\t\t\tif (newTop < 0) {\n\t\t\t\tnewTop = 0;\n\t\t\t} else if (newBottom > this.parent.height) {\n\t\t\t\tnewTop = this.parent.height - this.elem.offsetHeight;\n\t\t\t} else {\n\t\t\t\tnewTop = y - this.shiftY;\n\t\t\t}\n\t\t\tthis.elem.style.left = `${newLeft}px`;\n\t\t\tthis.left = newLeft;\n\t\t\tthis.elem.style.top = `${newTop}px`;\n\t\t\tthis.top = newTop;\n\t\t},\n\t\thang(e) {\n\t\t\tif (typeof this.ignoreDrag === "function" && this.ignoreDrag(e))\n\t\t\t\treturn;\n\t\t\telse if (typeof this.ignoreDrag === "boolean" && this.ignoreDrag)\n\t\t\t\treturn;\n\t\t\tthis.$emit("activated");\n\t\t\tthis.parent.width =\n\t\t\t\tthis.parentWidth || this.elem.parentNode.offsetWidth;\n\t\t\tthis.parent.height =\n\t\t\t\tthis.parentHeight || this.elem.parentNode.offsetHeight;\n\t\t\tthis.shiftX = e.pageX\n\t\t\t\t? e.pageX - this.elem.offsetLeft\n\t\t\t\t: e.changedTouches[0].pageX - this.elem.offsetLeft;\n\t\t\tthis.shiftY = e.pageY\n\t\t\t\t? e.pageY - this.elem.offsetTop\n\t\t\t\t: e.changedTouches[0].pageY - this.elem.offsetTop;\n\t\t\tif (e.pageX) {\n\t\t\t\tif (this.isIos) {\n\t\t\t\t\tthis.elem.addEventListener("touchmove", this.elementMove);\n\t\t\t\t} else {\n\t\t\t\t\tthis.elem.parentElement.addEventListener(\n\t\t\t\t\t\t"mousemove",\n\t\t\t\t\t\tthis.elementMove\n\t\t\t\t\t);\n\t\t\t\t\tthis.elem.parentElement.addEventListener(\n\t\t\t\t\t\t"mouseleave",\n\t\t\t\t\t\tthis.drop\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tthis.elem.addEventListener("touchmove", this.elementMove);\n\t\t\t}\n\t\t},\n\t\tdrop() {\n\t\t\tthis.$emit("dropped");\n\t\t\tdocument.body.style.overflow = null;\n\t\t\tthis.elem.parentElement.removeEventListener(\n\t\t\t\t"mousemove",\n\t\t\t\tthis.elementMove,\n\t\t\t\tfalse\n\t\t\t);\n\t\t\tthis.elem.removeEventListener("touchmove", this.elementMove, false);\n\t\t\tthis.elem.parentElement.onmouseup = null;\n\t\t\tthis.elem.ontouchend = null;\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.isIos =\n\t\t\t/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;\n\t\tthis.elem = this.$el;\n\t}\n};\n<\/script>\n\n<style>\n.drag-it-dude {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n}\n</style>\n']},media:void 0})},i,void 0,!1,void 0,e,void 0)},data(){return{inputItems:[{text:"Just move me!",isActive:!1,id:0}],ignore:!1}},methods:{onActivated(t){this.inputItems[t].text="I am ready for great things!"},onDragging(t){this.inputItems[t].text="Weeee!"},onDropped(t){this.inputItems[t].text="That's place is awesome!",setTimeout(()=>{this.inputItems[t].text="Just move me!"},3e3)},shouldIgnore(){return this.ignore}}};var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("vue-drag-it-dude")]),t._v(" "),n("div",{staticClass:"wrapper"},[n("h2",[t._v("Disable drag?")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ignore,expression:"ignore"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.ignore)?t._i(t.ignore,null)>-1:t.ignore},on:{change:function(e){var n=t.ignore,i=e.target,s=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.ignore=n.concat([null])):o>-1&&(t.ignore=n.slice(0,o).concat(n.slice(o+1)))}else t.ignore=s}}}),t._v(" "),n("p",[t._v(t._s(t.ignore))]),t._v(" "),t._l(t.inputItems,function(e,i){return n("drag-it-dude",{key:e.id,attrs:{ignoreDrag:t.ignore},on:{activated:function(n){t.onActivated(e.id)},dragging:function(n){t.onDragging(e.id)},dropped:function(n){t.onDropped(e.id)}}},[n("div",{staticClass:"div"},[n("input",{attrs:{type:"text"},domProps:{value:e.text}})])])})],2),t._v(" "),n("div",{staticClass:"wrapper"},[n("h2",[t._v("Disable drag?")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ignore,expression:"ignore"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.ignore)?t._i(t.ignore,null)>-1:t.ignore},on:{change:function(e){var n=t.ignore,i=e.target,s=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.ignore=n.concat([null])):o>-1&&(t.ignore=n.slice(0,o).concat(n.slice(o+1)))}else t.ignore=s}}}),t._v(" "),n("p",[t._v(t._s(t.shouldIgnore()))]),t._v(" "),t._l(t.inputItems,function(e,i){return n("drag-it-dude",{key:e.id,attrs:{ignoreDrag:t.shouldIgnore},on:{activated:function(n){t.onActivated(e.id)},dragging:function(n){t.onDragging(e.id)},dropped:function(n){t.onDropped(e.id)}}},[n("div",{staticClass:"div"},[n("input",{attrs:{type:"text"},domProps:{value:e.text}})])])})],2)])},d=[];a._withStripped=!0;var h=function(t,e,n,i,s,o,r,a){const d=("function"==typeof n?n.options:n)||{};d.__file="/Users/cas/Git/vue-drag-it-dude/docs-src/App.vue",d.render||(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),d._scopeId=i;{let t;if(e&&(t=function(t){e.call(this,r(t))}),void 0!==t)if(d.functional){const e=d.render;d.render=function(n,i){return t.call(i),e(n,i)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,t):[t]}}return d}({render:a,staticRenderFns:d},function(t){t&&t("data-v-7e4b03d3_0",{source:'\n#app {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\tfont-family: sans-serif;\n\talign-items: center;\n}\n.wrapper {\n\twidth: 350px;\n\theight: 350px;\n\tborder: 1px solid #000;\n\tborder-radius: 10px;\n\tposition: relative;\n}\nh1 {\n\ttext-align: center;\n}\n.div {\n\tdisplay: inline-block;\n}\ninput {\n\twidth: 200px;\n\tpadding: 20px 30px;\n\tborder-radius: 10px;\n\tborder: 1px solid #ccc;\n\tfont-size: 16px;\n\ttext-align: center;\n}\ninput[type="checkbox"] {\n\twidth: auto;\n\theight: auto;\n\tdisplay: inline-block;\n}\np {\n\tdisplay: inline-block;\n}\nh2 {\n\tdisplay: inline-block;\n}\n',map:{version:3,sources:["/Users/cas/Git/vue-drag-it-dude/docs-src/App.vue"],names:[],mappings:";AAmFA;CACA,cAAA;CACA,uBAAA;CACA,YAAA;CACA,aAAA;CACA,wBAAA;CACA,oBAAA;CACA;AAEA;CACA,aAAA;CACA,cAAA;CACA,uBAAA;CACA,oBAAA;CACA,mBAAA;CACA;AAEA;CACA,mBAAA;CACA;AAEA;CACA,sBAAA;CACA;AAEA;CACA,aAAA;CACA,mBAAA;CACA,oBAAA;CACA,uBAAA;CACA,gBAAA;CACA,mBAAA;CACA;AAEA;CACA,YAAA;CACA,aAAA;CACA,sBAAA;CACA;AAEA;CACA,sBAAA;CACA;AAEA;CACA,sBAAA;CACA",file:"App.vue",sourcesContent:['<template>\n\t<div id="app">\n\t\t<h1>vue-drag-it-dude</h1>\n\t\t<div class="wrapper">\n\t\t\t<h2>Disable drag?</h2>\n\t\t\t<input type="checkbox" v-model="ignore" />\n\t\t\t<p>{{ignore}}</p>\n\n\t\t\t<drag-it-dude\n\t\t\t\tv-for="item, key in inputItems"\n\t\t\t\t:key="item.id"\n\t\t\t\t:ignoreDrag="ignore"\n\t\t\t\t@activated="onActivated(item.id)"\n\t\t\t\t@dragging="onDragging(item.id)"\n\t\t\t\t@dropped="onDropped(item.id)"\n\t\t\t>\n\t\t\t\t<div class="div">\n\t\t\t\t\t<input type="text" :value="item.text" />\n\t\t\t\t</div>\n\t\t\t</drag-it-dude>\n\t\t</div>\n\t\t<div class="wrapper">\n\t\t\t<h2>Disable drag?</h2>\n\t\t\t<input type="checkbox" v-model="ignore" />\n\t\t\t<p>{{shouldIgnore()}}</p>\n\n\t\t\t<drag-it-dude\n\t\t\t\tv-for="item, key in inputItems"\n\t\t\t\t:key="item.id"\n\t\t\t\t:ignoreDrag="shouldIgnore"\n\t\t\t\t@activated="onActivated(item.id)"\n\t\t\t\t@dragging="onDragging(item.id)"\n\t\t\t\t@dropped="onDropped(item.id)"\n\t\t\t>\n\t\t\t\t<div class="div">\n\t\t\t\t\t<input type="text" :value="item.text" />\n\t\t\t\t</div>\n\t\t\t</drag-it-dude>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport DragItDude from "../src/DragItDude.vue";\n\nexport default {\n\tname: "App",\n\tcomponents: {\n\t\tDragItDude\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tinputItems: [\n\t\t\t\t{\n\t\t\t\t\ttext: "Just move me!",\n\t\t\t\t\tisActive: false,\n\t\t\t\t\tid: 0\n\t\t\t\t}\n\t\t\t],\n\t\t\tignore: false\n\t\t};\n\t},\n\tmethods: {\n\t\tonActivated(key) {\n\t\t\tthis.inputItems[key].text = "I am ready for great things!";\n\t\t},\n\t\tonDragging(key) {\n\t\t\tthis.inputItems[key].text = "Weeee!";\n\t\t},\n\t\tonDropped(key) {\n\t\t\tthis.inputItems[key].text = "That\'s place is awesome!";\n\t\t\tsetTimeout(() => {\n\t\t\t\tthis.inputItems[key].text = "Just move me!";\n\t\t\t}, 3000);\n\t\t},\n\t\tshouldIgnore() {\n\t\t\treturn this.ignore;\n\t\t}\n\t}\n};\n<\/script>\n\n<style>\n#app {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\tfont-family: sans-serif;\n\talign-items: center;\n}\n\n.wrapper {\n\twidth: 350px;\n\theight: 350px;\n\tborder: 1px solid #000;\n\tborder-radius: 10px;\n\tposition: relative;\n}\n\nh1 {\n\ttext-align: center;\n}\n\n.div {\n\tdisplay: inline-block;\n}\n\ninput {\n\twidth: 200px;\n\tpadding: 20px 30px;\n\tborder-radius: 10px;\n\tborder: 1px solid #ccc;\n\tfont-size: 16px;\n\ttext-align: center;\n}\n\ninput[type="checkbox"] {\n\twidth: auto;\n\theight: auto;\n\tdisplay: inline-block;\n}\n\np {\n\tdisplay: inline-block;\n}\n\nh2 {\n\tdisplay: inline-block;\n}\n</style>\n']},media:void 0})},r,void 0,!1,void 0,n,void 0);new t({el:"#app",render:t=>t(h)})}(Vue);
//# sourceMappingURL=bundle-[hash].js.map