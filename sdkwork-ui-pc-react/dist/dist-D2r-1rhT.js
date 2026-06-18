import * as e from "react";
import { jsx as t } from "react/jsx-runtime";
typeof window < "u" && window.document && window.document.createElement;
function n(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-context@1.1_16483979bf4b414edb598c00e6fb21c9/node_modules/@radix-ui/react-context/dist/index.mjs
function r(n, r) {
	let i = e.createContext(r);
	i.displayName = n + "Context";
	let a = (n) => {
		let { children: r, ...a } = n, o = e.useMemo(() => a, Object.values(a));
		return /* @__PURE__ */ t(i.Provider, {
			value: o,
			children: r
		});
	};
	a.displayName = n + "Provider";
	function o(t) {
		let a = e.useContext(i);
		if (a) return a;
		if (r !== void 0) return r;
		throw Error(`\`${t}\` must be used within \`${n}\``);
	}
	return [a, o];
}
function i(n, r = []) {
	let i = [];
	function o(r, a) {
		let o = e.createContext(a);
		o.displayName = r + "Context";
		let s = i.length;
		i = [...i, a];
		let c = (r) => {
			let { scope: i, children: a, ...c } = r, l = i?.[n]?.[s] || o, u = e.useMemo(() => c, Object.values(c));
			return /* @__PURE__ */ t(l.Provider, {
				value: u,
				children: a
			});
		};
		c.displayName = r + "Provider";
		function l(t, i) {
			let c = i?.[n]?.[s] || o, l = e.useContext(c);
			if (l) return l;
			if (a !== void 0) return a;
			throw Error(`\`${t}\` must be used within \`${r}\``);
		}
		return [c, l];
	}
	let s = () => {
		let t = i.map((t) => e.createContext(t));
		return function(r) {
			let i = r?.[n] || t;
			return e.useMemo(() => ({ [`__scope${n}`]: {
				...r,
				[n]: i
			} }), [r, i]);
		};
	};
	return s.scopeName = n, [o, a(s, ...r)];
}
function a(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = () => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-use-layout-_98a35b192860c29b095bef8bc85f3550/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var o = globalThis?.document ? e.useLayoutEffect : () => {}, s = e.createContext(void 0);
function c(t) {
	let n = e.useContext(s);
	return t || n || "ltr";
}
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-use-callbac_f4f7e1dcf45503a198f2922f94f55bd0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function l(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-presence@1._a0a5d59c1614fe44c041e07969473343/node_modules/@radix-ui/react-presence/dist/index.mjs
function u(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
var d = (t) => {
	let { present: n, children: r } = t, i = f(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = m(i.ref, g(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
};
d.displayName = "Presence";
function f(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), s = e.useRef("none"), [c, l] = u(t ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return e.useEffect(() => {
		let e = h(i.current);
		s.current = c === "mounted" ? e : "none";
	}, [c]), o(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = s.current, i = h(e);
			t ? l("MOUNT") : i === "none" || e?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, l]), o(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = (r) => {
				let o = h(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (l("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, o = (e) => {
				e.target === n && (s.current = h(i.current));
			};
			return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
				t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
			};
		} else l("ANIMATION_END");
	}, [n, l]), {
		isPresent: ["mounted", "unmountSuspended"].includes(c),
		ref: e.useCallback((e) => {
			i.current = e ? getComputedStyle(e) : null, r(e);
		}, [])
	};
}
function p(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function m(...t) {
	let n = e.useRef(t);
	return n.current = t, e.useCallback((e) => {
		let t = n.current, r = !1, i = t.map((t) => {
			let n = p(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				typeof n == "function" ? n() : p(t[e], null);
			}
		};
	}, []);
}
function h(e) {
	return e?.animationName || "none";
}
function g(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
export { r as a, o as i, l as n, i as o, c as r, n as s, d as t };

//# sourceMappingURL=dist-D2r-1rhT.js.map