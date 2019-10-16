//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
	name: "drag-it-dude",
	props: {
		width: {
			type: Number,
			default: 0
		},
		height: {
			type: Number,
			default: 0
		},
		parentWidth: {
			type: Number,
			default: 0
		},
		parentHeight: {
			type: Number,
			default: 0
		},
		ignoreDrag: {
			type: [Boolean, Function],
			default: false
		}
	},
	watch: {
		width: function width(newWidth, oldWidth) {
			if (newWidth < oldWidth) { return; }
			if (this.left === 0) { return; }

			this.parent.width =
				this.parentWidth || this.elem.parentNode.offsetWidth;
			this.parent.height =
				this.parentHeight || this.elem.parentNode.offsetHeight;

			if (newWidth > this.parent.width - this.left) {
				var newLeft = this.parent.width - newWidth;
				this.left = newLeft < 0 ? 0 : newLeft;
				this.elem.style.left = (this.left) + "px";
			}
		},
		height: function height(newHeight, oldHeight) {
			if (newHeight < oldHeight) { return; }
			if (this.top === 0) { return; }

			this.parent.width =
				this.parentWidth || this.elem.parentNode.offsetWidth;
			this.parent.height =
				this.parentHeight || this.elem.parentNode.offsetHeight;

			if (newHeight > this.parent.height - this.top) {
				var newTop = this.parent.height - this.height;
				this.top = newTop;
				this.elem.style.top = (this.top) + "px";
			}
		}
	},
	data: function () { return ({
		shiftY: null,
		shiftX: null,
		left: 0,
		top: 0,
		elem: null,
		isIos: false,
		parent: {
			width: 0,
			height: 0
		}
	}); },
	methods: {
		iosMove: function iosMove(e) {
			if (this.isIos) { this.elementMove(e); }
		},
		elementMove: function elementMove(e) {
			this.$emit("dragging");
			e.preventDefault();
			if (!e.pageX) {
				document.body.style.overflow = "hidden";
			}
			var x = e.pageX || e.changedTouches[0].pageX;
			var y = e.pageY || e.changedTouches[0].pageY;
			var newLeft = x - this.shiftX;
			var newTop = y - this.shiftY;
			var newRight = x - this.shiftX + this.elem.offsetWidth;
			var newBottom = y - this.shiftY + this.elem.offsetHeight;
			if (newLeft < 0) {
				newLeft = 0;
			} else if (newRight > this.parent.width) {
				newLeft = this.parent.width - this.elem.offsetWidth;
			} else {
				newLeft = x - this.shiftX;
			}
			if (newTop < 0) {
				newTop = 0;
			} else if (newBottom > this.parent.height) {
				newTop = this.parent.height - this.elem.offsetHeight;
			} else {
				newTop = y - this.shiftY;
			}
			this.elem.style.left = newLeft + "px";
			this.left = newLeft;
			this.elem.style.top = newTop + "px";
			this.top = newTop;
		},
		hang: function hang(e) {
			if (typeof this.ignoreDrag === "function" && this.ignoreDrag(e))
				{ return; }
			else if (typeof this.ignoreDrag === "boolean" && this.ignoreDrag)
				{ return; }
			this.$emit("activated");
			this.parent.width =
				this.parentWidth || this.elem.parentNode.offsetWidth;
			this.parent.height =
				this.parentHeight || this.elem.parentNode.offsetHeight;
			this.shiftX = e.pageX
				? e.pageX - this.elem.offsetLeft
				: e.changedTouches[0].pageX - this.elem.offsetLeft;
			this.shiftY = e.pageY
				? e.pageY - this.elem.offsetTop
				: e.changedTouches[0].pageY - this.elem.offsetTop;
			if (e.pageX) {
				if (this.isIos) {
					this.elem.addEventListener("touchmove", this.elementMove);
				} else {
					this.elem.parentElement.addEventListener(
						"mousemove",
						this.elementMove
					);
					this.elem.parentElement.addEventListener(
						"mouseleave",
						this.drop
					);
				}
			} else {
				this.elem.addEventListener("touchmove", this.elementMove);
			}
		},
		drop: function drop() {
			this.$emit("dropped");
			document.body.style.overflow = null;
			this.elem.parentElement.removeEventListener(
				"mousemove",
				this.elementMove,
				false
			);
			this.elem.removeEventListener("touchmove", this.elementMove, false);
			this.elem.parentElement.onmouseup = null;
			this.elem.ontouchend = null;
		}
	},
	mounted: function mounted() {
		this.isIos =
			/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		this.elem = this.$el;
	}
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "drag-it-dude",
      on: {
        touchstart: function($event) {
          $event.stopPropagation();
          return _vm.hang($event)
        },
        touchend: function($event) {
          $event.stopPropagation();
          return _vm.drop($event)
        },
        mousedown: function($event) {
          $event.stopPropagation();
          return _vm.hang($event)
        },
        mouseup: function($event) {
          $event.stopPropagation();
          return _vm.drop($event)
        },
        touchmove: function($event) {
          $event.stopPropagation();
          return _vm.iosMove($event)
        }
      }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-8126915e_0", { source: "\n.drag-it-dude {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n}\n", map: {"version":3,"sources":["/Users/cas/Git/vue-drag-it-dude/src/DragItDude.vue"],"names":[],"mappings":";AA4KA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CACA","file":"DragItDude.vue","sourcesContent":["<template>\n\t<div\n\t\tclass=\"drag-it-dude\"\n\t\t@touchstart.stop=\"hang\"\n\t\t@touchend.stop=\"drop\"\n\t\t@mousedown.stop=\"hang\"\n\t\t@mouseup.stop=\"drop\"\n\t\t@touchmove.stop=\"iosMove\"\n\t>\n\t\t<slot></slot>\n\t</div>\n</template>\n\n<script>\nexport default {\n\tname: \"drag-it-dude\",\n\tprops: {\n\t\twidth: {\n\t\t\ttype: Number,\n\t\t\tdefault: 0\n\t\t},\n\t\theight: {\n\t\t\ttype: Number,\n\t\t\tdefault: 0\n\t\t},\n\t\tparentWidth: {\n\t\t\ttype: Number,\n\t\t\tdefault: 0\n\t\t},\n\t\tparentHeight: {\n\t\t\ttype: Number,\n\t\t\tdefault: 0\n\t\t},\n\t\tignoreDrag: {\n\t\t\ttype: [Boolean, Function],\n\t\t\tdefault: false\n\t\t}\n\t},\n\twatch: {\n\t\twidth(newWidth, oldWidth) {\n\t\t\tif (newWidth < oldWidth) return;\n\t\t\tif (this.left === 0) return;\n\n\t\t\tthis.parent.width =\n\t\t\t\tthis.parentWidth || this.elem.parentNode.offsetWidth;\n\t\t\tthis.parent.height =\n\t\t\t\tthis.parentHeight || this.elem.parentNode.offsetHeight;\n\n\t\t\tif (newWidth > this.parent.width - this.left) {\n\t\t\t\tconst newLeft = this.parent.width - newWidth;\n\t\t\t\tthis.left = newLeft < 0 ? 0 : newLeft;\n\t\t\t\tthis.elem.style.left = `${this.left}px`;\n\t\t\t}\n\t\t},\n\t\theight(newHeight, oldHeight) {\n\t\t\tif (newHeight < oldHeight) return;\n\t\t\tif (this.top === 0) return;\n\n\t\t\tthis.parent.width =\n\t\t\t\tthis.parentWidth || this.elem.parentNode.offsetWidth;\n\t\t\tthis.parent.height =\n\t\t\t\tthis.parentHeight || this.elem.parentNode.offsetHeight;\n\n\t\t\tif (newHeight > this.parent.height - this.top) {\n\t\t\t\tconst newTop = this.parent.height - this.height;\n\t\t\t\tthis.top = newTop;\n\t\t\t\tthis.elem.style.top = `${this.top}px`;\n\t\t\t}\n\t\t}\n\t},\n\tdata: () => ({\n\t\tshiftY: null,\n\t\tshiftX: null,\n\t\tleft: 0,\n\t\ttop: 0,\n\t\telem: null,\n\t\tisIos: false,\n\t\tparent: {\n\t\t\twidth: 0,\n\t\t\theight: 0\n\t\t}\n\t}),\n\tmethods: {\n\t\tiosMove(e) {\n\t\t\tif (this.isIos) this.elementMove(e);\n\t\t},\n\t\telementMove(e) {\n\t\t\tthis.$emit(\"dragging\");\n\t\t\te.preventDefault();\n\t\t\tif (!e.pageX) {\n\t\t\t\tdocument.body.style.overflow = \"hidden\";\n\t\t\t}\n\t\t\tconst x = e.pageX || e.changedTouches[0].pageX;\n\t\t\tconst y = e.pageY || e.changedTouches[0].pageY;\n\t\t\tlet newLeft = x - this.shiftX;\n\t\t\tlet newTop = y - this.shiftY;\n\t\t\tconst newRight = x - this.shiftX + this.elem.offsetWidth;\n\t\t\tconst newBottom = y - this.shiftY + this.elem.offsetHeight;\n\t\t\tif (newLeft < 0) {\n\t\t\t\tnewLeft = 0;\n\t\t\t} else if (newRight > this.parent.width) {\n\t\t\t\tnewLeft = this.parent.width - this.elem.offsetWidth;\n\t\t\t} else {\n\t\t\t\tnewLeft = x - this.shiftX;\n\t\t\t}\n\t\t\tif (newTop < 0) {\n\t\t\t\tnewTop = 0;\n\t\t\t} else if (newBottom > this.parent.height) {\n\t\t\t\tnewTop = this.parent.height - this.elem.offsetHeight;\n\t\t\t} else {\n\t\t\t\tnewTop = y - this.shiftY;\n\t\t\t}\n\t\t\tthis.elem.style.left = `${newLeft}px`;\n\t\t\tthis.left = newLeft;\n\t\t\tthis.elem.style.top = `${newTop}px`;\n\t\t\tthis.top = newTop;\n\t\t},\n\t\thang(e) {\n\t\t\tif (typeof this.ignoreDrag === \"function\" && this.ignoreDrag(e))\n\t\t\t\treturn;\n\t\t\telse if (typeof this.ignoreDrag === \"boolean\" && this.ignoreDrag)\n\t\t\t\treturn;\n\t\t\tthis.$emit(\"activated\");\n\t\t\tthis.parent.width =\n\t\t\t\tthis.parentWidth || this.elem.parentNode.offsetWidth;\n\t\t\tthis.parent.height =\n\t\t\t\tthis.parentHeight || this.elem.parentNode.offsetHeight;\n\t\t\tthis.shiftX = e.pageX\n\t\t\t\t? e.pageX - this.elem.offsetLeft\n\t\t\t\t: e.changedTouches[0].pageX - this.elem.offsetLeft;\n\t\t\tthis.shiftY = e.pageY\n\t\t\t\t? e.pageY - this.elem.offsetTop\n\t\t\t\t: e.changedTouches[0].pageY - this.elem.offsetTop;\n\t\t\tif (e.pageX) {\n\t\t\t\tif (this.isIos) {\n\t\t\t\t\tthis.elem.addEventListener(\"touchmove\", this.elementMove);\n\t\t\t\t} else {\n\t\t\t\t\tthis.elem.parentElement.addEventListener(\n\t\t\t\t\t\t\"mousemove\",\n\t\t\t\t\t\tthis.elementMove\n\t\t\t\t\t);\n\t\t\t\t\tthis.elem.parentElement.addEventListener(\n\t\t\t\t\t\t\"mouseleave\",\n\t\t\t\t\t\tthis.drop\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tthis.elem.addEventListener(\"touchmove\", this.elementMove);\n\t\t\t}\n\t\t},\n\t\tdrop() {\n\t\t\tthis.$emit(\"dropped\");\n\t\t\tdocument.body.style.overflow = null;\n\t\t\tthis.elem.parentElement.removeEventListener(\n\t\t\t\t\"mousemove\",\n\t\t\t\tthis.elementMove,\n\t\t\t\tfalse\n\t\t\t);\n\t\t\tthis.elem.removeEventListener(\"touchmove\", this.elementMove, false);\n\t\t\tthis.elem.parentElement.onmouseup = null;\n\t\t\tthis.elem.ontouchend = null;\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.isIos =\n\t\t\t/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;\n\t\tthis.elem = this.$el;\n\t}\n};\n</script>\n\n<style>\n.drag-it-dude {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/cas/Git/vue-drag-it-dude/src/DragItDude.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('DragItDude', component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
