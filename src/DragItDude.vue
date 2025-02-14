<template>
	<div
		class="drag-it-dude"
		@touchstart.stop="hang"
		@touchend.stop="drop"
		@mousedown.stop="hang"
		@mouseup.stop="drop"
		@touchmove.stop="iosMove"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
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
		width(newWidth, oldWidth) {
			if (newWidth < oldWidth) return;
			if (this.left === 0) return;

			this.parent.width =
				this.parentWidth || this.elem.parentNode.offsetWidth;
			this.parent.height =
				this.parentHeight || this.elem.parentNode.offsetHeight;

			if (newWidth > this.parent.width - this.left) {
				const newLeft = this.parent.width - newWidth;
				this.left = newLeft < 0 ? 0 : newLeft;
				this.elem.style.left = `${this.left}px`;
			}
		},
		height(newHeight, oldHeight) {
			if (newHeight < oldHeight) return;
			if (this.top === 0) return;

			this.parent.width =
				this.parentWidth || this.elem.parentNode.offsetWidth;
			this.parent.height =
				this.parentHeight || this.elem.parentNode.offsetHeight;

			if (newHeight > this.parent.height - this.top) {
				const newTop = this.parent.height - this.height;
				this.top = newTop;
				this.elem.style.top = `${this.top}px`;
			}
		}
	},
	data: () => ({
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
	}),
	methods: {
		iosMove(e) {
			if (this.isIos) this.elementMove(e);
		},
		elementMove(e) {
			this.$emit("dragging");
			e.preventDefault();
			if (!e.pageX) {
				document.body.style.overflow = "hidden";
			}
			const x = e.pageX || e.changedTouches[0].pageX;
			const y = e.pageY || e.changedTouches[0].pageY;
			let newLeft = x - this.shiftX;
			let newTop = y - this.shiftY;
			const newRight = x - this.shiftX + this.elem.offsetWidth;
			const newBottom = y - this.shiftY + this.elem.offsetHeight;
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
			this.elem.style.left = `${newLeft}px`;
			this.left = newLeft;
			this.elem.style.top = `${newTop}px`;
			this.top = newTop;
		},
		hang(e) {
			if (typeof this.ignoreDrag === "function" && this.ignoreDrag(e))
				return;
			else if (typeof this.ignoreDrag === "boolean" && this.ignoreDrag)
				return;
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
		drop(ignoreEmit) {
			if (ignoreEmit !== true) this.$emit("dropped");

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
	mounted() {
		this.isIos =
			/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		this.elem = this.$el;
		this.$emit("added", this);
	}
};
</script>

<style>
.drag-it-dude {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
}
</style>
