import * as e from "react";
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-compose-ref_f0c9d4f17a53371b0598cebffa2f48df/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function t(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function n(...e) {
	return (n) => {
		let r = !1, i = e.map((e) => {
			let i = t(e, n);
			return !r && typeof i == "function" && (r = !0), i;
		});
		if (r) return () => {
			for (let n = 0; n < i.length; n++) {
				let r = i[n];
				typeof r == "function" ? r() : t(e[n], null);
			}
		};
	};
}
function r(...t) {
	return e.useCallback(n(...t), t);
}
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-slot@1.2.5_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function i(t) {
	let n = e.forwardRef((n, i) => {
		let { children: a, ...o } = n, s = null, f = !1, m = [];
		p(a) && typeof _ == "function" && (a = _(a._payload)), e.Children.forEach(a, (e) => {
			if (d(e)) {
				f = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				p(n) && typeof _ == "function" && (n = _(n._payload)), s = c(t, n), m.push(s?.props?.children);
			} else m.push(e);
		}), s ? s = e.cloneElement(s, void 0, m) : !f && e.Children.count(a) === 1 && e.isValidElement(a) && (s = a);
		let v = s ? u(s) : void 0, y = r(i, v);
		if (!s) {
			if (a || a === 0) throw Error(f ? g(t) : h(t));
			return a;
		}
		let b = l(o, s.props ?? {});
		return s.type !== e.Fragment && (b.ref = i ? y : v), e.cloneElement(s, b);
	});
	return n.displayName = `${t}.Slot`, n;
}
var a = /* @__PURE__ */ i("Slot"), o = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function s(e) {
	let t = (e) => "child" in e ? e.children(e.child) : e.children;
	return t.displayName = `${e}.Slottable`, t.__radixId = o, t;
}
var c = (t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
};
function l(e, t) {
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
function u(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function d(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === o;
}
var f = Symbol.for("react.lazy");
function p(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === f && "_payload" in e && m(e._payload);
}
function m(e) {
	return typeof e == "object" && !!e && "then" in e;
}
var h = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, g = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, _ = e.use;
//#endregion
export { r as a, n as i, i as n, s as r, a as t };

//# sourceMappingURL=dist-5AX1ca2q.js.map