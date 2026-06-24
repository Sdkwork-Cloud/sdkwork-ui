import * as e from "react";
import { jsx as t } from "react/jsx-runtime";
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-compose-ref_29f07d10044c0f91d4662ac1c244e8f8/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function n(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function r(...e) {
	return (t) => {
		let r = !1, i = e.map((e) => {
			let i = n(e, t);
			return !r && typeof i == "function" && (r = !0), i;
		});
		if (r) return () => {
			for (let t = 0; t < i.length; t++) {
				let r = i[t];
				typeof r == "function" ? r() : n(e[t], null);
			}
		};
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs
var i = Symbol.for("react.lazy"), a = e.use;
function o(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function s(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === i && "_payload" in e && o(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function c(n) {
	let r = /* @__PURE__ */ u(n), i = e.forwardRef((n, i) => {
		let { children: o, ...c } = n;
		s(o) && typeof a == "function" && (o = a(o._payload));
		let l = e.Children.toArray(o), u = l.find(f);
		if (u) {
			let n = u.props.children, a = l.map((t) => t === u ? e.Children.count(n) > 1 ? e.Children.only(null) : e.isValidElement(n) ? n.props.children : null : t);
			return /* @__PURE__ */ t(r, {
				...c,
				ref: i,
				children: e.isValidElement(n) ? e.cloneElement(n, void 0, a) : null
			});
		}
		return /* @__PURE__ */ t(r, {
			...c,
			ref: i,
			children: o
		});
	});
	return i.displayName = `${n}.Slot`, i;
}
var l = /* @__PURE__ */ c("Slot");
/* @__NO_SIDE_EFFECTS__ */
function u(t) {
	let n = e.forwardRef((t, n) => {
		let { children: i, ...o } = t;
		if (s(i) && typeof a == "function" && (i = a(i._payload)), e.isValidElement(i)) {
			let t = m(i), a = p(o, i.props);
			return i.type !== e.Fragment && (a.ref = n ? r(n, t) : t), e.cloneElement(i, a);
		}
		return e.Children.count(i) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var d = Symbol("radix.slottable");
function f(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === d;
}
function p(e, t) {
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
function m(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
export { r as n, l as t };

//# sourceMappingURL=dist-G9OonOp-.js.map