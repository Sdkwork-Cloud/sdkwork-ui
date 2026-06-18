import { n as e } from "./dist-5AX1ca2q.js";
import * as t from "react";
import { jsx as n } from "react/jsx-runtime";
import * as r from "react-dom";
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-primitive@2_a6d34771b24d0b6f2448bc991c09fdeb/node_modules/@radix-ui/react-primitive/dist/index.mjs
var i = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((r, i) => {
	let a = e(`Primitive.${i}`), o = t.forwardRef((e, t) => {
		let { asChild: r, ...o } = e, s = r ? a : i;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ n(s, {
			...o,
			ref: t
		});
	});
	return o.displayName = `Primitive.${i}`, {
		...r,
		[i]: o
	};
}, {});
function a(e, t) {
	e && r.flushSync(() => e.dispatchEvent(t));
}
//#endregion
export { a as n, i as t };

//# sourceMappingURL=dist-DUsjyQ_S.js.map