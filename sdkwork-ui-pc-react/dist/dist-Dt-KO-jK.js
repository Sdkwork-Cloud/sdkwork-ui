import * as e from "react";
import { jsx as t } from "react/jsx-runtime";
import * as n from "react-dom";
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-compose-ref_f0c9d4f17a53371b0598cebffa2f48df/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function r(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function i(...e) {
	return (t) => {
		let n = !1, i = e.map((e) => {
			let i = r(e, t);
			return !n && typeof i == "function" && (n = !0), i;
		});
		if (n) return () => {
			for (let t = 0; t < i.length; t++) {
				let n = i[t];
				typeof n == "function" ? n() : r(e[t], null);
			}
		};
	};
}
function a(...t) {
	return e.useCallback(i(...t), t);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-slot@1.2.5_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function o(t) {
	let n = e.forwardRef((n, r) => {
		let { children: i, ...o } = n, s = null, c = !1, p = [];
		m(i) && typeof v == "function" && (i = v(i._payload)), e.Children.forEach(i, (e) => {
			if (f(e)) {
				c = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				m(n) && typeof v == "function" && (n = v(n._payload)), s = l(t, n), p.push(s?.props?.children);
			} else p.push(e);
		}), s ? s = e.cloneElement(s, void 0, p) : !c && e.Children.count(i) === 1 && e.isValidElement(i) && (s = i);
		let h = s ? d(s) : void 0, y = a(r, h);
		if (!s) {
			if (i || i === 0) throw Error(c ? _(t) : g(t));
			return i;
		}
		let b = u(o, s.props ?? {});
		return s.type !== e.Fragment && (b.ref = r ? y : h), e.cloneElement(s, b);
	});
	return n.displayName = `${t}.Slot`, n;
}
var s = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function c(e) {
	let t = (e) => "child" in e ? e.children(e.child) : e.children;
	return t.displayName = `${e}.Slottable`, t.__radixId = s, t;
}
var l = (t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
};
function u(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function d(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function f(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === s;
}
var p = Symbol.for("react.lazy");
function m(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && h(e._payload);
}
function h(e) {
	return typeof e == "object" && !!e && "then" in e;
}
var g = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, _ = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, v = e.use, y = [
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
].reduce((n, r) => {
	let i = /* @__PURE__ */ o(`Primitive.${r}`), a = e.forwardRef((e, n) => {
		let { asChild: a, ...o } = e, s = a ? i : r;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ t(s, {
			...o,
			ref: n
		});
	});
	return a.displayName = `Primitive.${r}`, {
		...n,
		[r]: a
	};
}, {});
function b(e, t) {
	e && n.flushSync(() => e.dispatchEvent(t));
}
//#endregion
export { i as a, c as i, b as n, a as o, o as r, y as t };

//# sourceMappingURL=dist-Dt-KO-jK.js.map