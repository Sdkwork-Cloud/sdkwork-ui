import { t as e } from "./utils-MYzXLqpE.js";
import { n as t } from "./slot-props-BYpl_5uq.js";
import { n } from "./dist-G9OonOp-.js";
import { p as r } from "./Combination-CTo9CVjQ.js";
import { t as i } from "./search-BTwZh045.js";
import { t as a } from "./dist-Dt-KO-jK.js";
import { f as o, g as s, h as c, m as l, r as u, t as d } from "./dialog-BI78tTI7.js";
import * as f from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom_774a6dff9510bebce6a2343405a1ca59/node_modules/cmdk/dist/chunk-NZJY6EH4.mjs
var h = 1, g = .9, _ = .8, v = .17, y = .1, b = .999, x = .9999, ee = .99, S = /[\\\/_+.#"@\[\(\{&]/, C = /[\\\/_+.#"@\[\(\{&]/g, w = /[\s-]/, T = /[\s-]/g;
function E(e, t, n, r, i, a, o) {
	if (a === t.length) return i === e.length ? h : ee;
	var s = `${i},${a}`;
	if (o[s] !== void 0) return o[s];
	for (var c = r.charAt(a), l = n.indexOf(c, i), u = 0, d, f, p, m; l >= 0;) d = E(e, t, n, r, l + 1, a + 1, o), d > u && (l === i ? d *= h : S.test(e.charAt(l - 1)) ? (d *= _, p = e.slice(i, l - 1).match(C), p && i > 0 && (d *= b ** +p.length)) : w.test(e.charAt(l - 1)) ? (d *= g, m = e.slice(i, l - 1).match(T), m && i > 0 && (d *= b ** +m.length)) : (d *= v, i > 0 && (d *= b ** +(l - i))), e.charAt(l) !== t.charAt(a) && (d *= x)), (d < y && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (f = E(e, t, n, r, l + 1, a + 2, o), f * y > d && (d = f * y)), d > u && (u = d), l = n.indexOf(c, l + 1);
	return o[s] = u, u;
}
function D(e) {
	return e.toLowerCase().replace(T, " ");
}
function O(e, t, n) {
	return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, E(e, t, D(e), D(t), 0, 0, {});
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom_774a6dff9510bebce6a2343405a1ca59/node_modules/cmdk/dist/index.mjs
var k = "[cmdk-group=\"\"]", A = "[cmdk-group-items=\"\"]", te = "[cmdk-group-heading=\"\"]", j = "[cmdk-item=\"\"]", M = `${j}:not([aria-disabled="true"])`, N = "cmdk-item-select", P = "data-value", ne = (e, t, n) => O(e, t, n), F = f.createContext(void 0), I = () => f.useContext(F), re = f.createContext(void 0), L = () => f.useContext(re), R = f.createContext(void 0), z = f.forwardRef((e, t) => {
	let n = X(() => ({
		search: "",
		value: e.value ?? e.defaultValue ?? "",
		selectedItemId: void 0,
		filtered: {
			count: 0,
			items: /* @__PURE__ */ new Map(),
			groups: /* @__PURE__ */ new Set()
		}
	})), i = X(() => /* @__PURE__ */ new Set()), o = X(() => /* @__PURE__ */ new Map()), s = X(() => /* @__PURE__ */ new Map()), c = X(() => /* @__PURE__ */ new Set()), l = J(e), { label: u, children: d, value: p, onValueChange: m, filter: h, shouldFilter: g, loop: _, disablePointerSelection: v = !1, vimBindings: y = !0, ...b } = e, x = r(), ee = r(), S = r(), C = f.useRef(null), w = ce();
	Y(() => {
		if (p !== void 0) {
			let e = p.trim();
			n.current.value = e, T.emit();
		}
	}, [p]), Y(() => {
		w(6, R);
	}, []);
	let T = f.useMemo(() => ({
		subscribe: (e) => (c.current.add(e), () => c.current.delete(e)),
		snapshot: () => n.current,
		setState: (e, t, r) => {
			var i, a, o;
			if (!Object.is(n.current[e], t)) {
				if (n.current[e] = t, e === "search") L(), O(), w(1, I);
				else if (e === "value") {
					if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
						let e = document.getElementById(S);
						e ? e.focus() : (i = document.getElementById(x)) == null || i.focus();
					}
					if (w(7, () => {
						n.current.selectedItemId = z()?.id, T.emit();
					}), r || w(5, R), l.current?.value !== void 0) {
						let e = t ?? "";
						(o = (a = l.current).onValueChange) == null || o.call(a, e);
						return;
					}
				}
				T.emit();
			}
		},
		emit: () => {
			c.current.forEach((e) => e());
		}
	}), []), E = f.useMemo(() => ({
		value: (e, t, r) => {
			t !== s.current.get(e)?.value && (s.current.set(e, {
				value: t,
				keywords: r
			}), n.current.filtered.items.set(e, D(t, r)), w(2, () => {
				O(), T.emit();
			}));
		},
		item: (e, t) => (i.current.add(e), t && (o.current.has(t) ? o.current.get(t).add(e) : o.current.set(t, new Set([e]))), w(3, () => {
			L(), O(), n.current.value || I(), T.emit();
		}), () => {
			s.current.delete(e), i.current.delete(e), n.current.filtered.items.delete(e);
			let t = z();
			w(4, () => {
				L(), t?.getAttribute("id") === e && I(), T.emit();
			});
		}),
		group: (e) => (o.current.has(e) || o.current.set(e, /* @__PURE__ */ new Set()), () => {
			s.current.delete(e), o.current.delete(e);
		}),
		filter: () => l.current.shouldFilter,
		label: u || e["aria-label"],
		getDisablePointerSelection: () => l.current.disablePointerSelection,
		listId: x,
		inputId: S,
		labelId: ee,
		listInnerRef: C
	}), []);
	function D(e, t) {
		let r = l.current?.filter ?? ne;
		return e ? r(e, n.current.search, t) : 0;
	}
	function O() {
		if (!n.current.search || l.current.shouldFilter === !1) return;
		let e = n.current.filtered.items, t = [];
		n.current.filtered.groups.forEach((n) => {
			let r = o.current.get(n), i = 0;
			r.forEach((t) => {
				let n = e.get(t);
				i = Math.max(n, i);
			}), t.push([n, i]);
		});
		let r = C.current;
		B().sort((t, n) => {
			let r = t.getAttribute("id"), i = n.getAttribute("id");
			return (e.get(i) ?? 0) - (e.get(r) ?? 0);
		}).forEach((e) => {
			let t = e.closest(A);
			t ? t.appendChild(e.parentElement === t ? e : e.closest(`${A} > *`)) : r.appendChild(e.parentElement === r ? e : e.closest(`${A} > *`));
		}), t.sort((e, t) => t[1] - e[1]).forEach((e) => {
			let t = C.current?.querySelector(`${k}[${P}="${encodeURIComponent(e[0])}"]`);
			t?.parentElement.appendChild(t);
		});
	}
	function I() {
		let e = B().find((e) => e.getAttribute("aria-disabled") !== "true")?.getAttribute(P);
		T.setState("value", e || void 0);
	}
	function L() {
		if (!n.current.search || l.current.shouldFilter === !1) {
			n.current.filtered.count = i.current.size;
			return;
		}
		n.current.filtered.groups = /* @__PURE__ */ new Set();
		let e = 0;
		for (let t of i.current) {
			let r = D(s.current.get(t)?.value ?? "", s.current.get(t)?.keywords ?? []);
			n.current.filtered.items.set(t, r), r > 0 && e++;
		}
		for (let [e, t] of o.current) for (let r of t) if (n.current.filtered.items.get(r) > 0) {
			n.current.filtered.groups.add(e);
			break;
		}
		n.current.filtered.count = e;
	}
	function R() {
		var e;
		let t = z();
		t && (t.parentElement?.firstChild === t && ((e = t.closest(k)?.querySelector(te)) == null || e.scrollIntoView({ block: "nearest" })), t.scrollIntoView({ block: "nearest" }));
	}
	function z() {
		return C.current?.querySelector(`${j}[aria-selected="true"]`);
	}
	function B() {
		return Array.from(C.current?.querySelectorAll(M) || []);
	}
	function V(e) {
		let t = B()[e];
		t && T.setState("value", t.getAttribute(P));
	}
	function H(e) {
		var t;
		let n = z(), r = B(), i = r.findIndex((e) => e === n), a = r[i + e];
		(t = l.current) != null && t.loop && (a = i + e < 0 ? r[r.length - 1] : i + e === r.length ? r[0] : r[i + e]), a && T.setState("value", a.getAttribute(P));
	}
	function U(e) {
		let t = z()?.closest(k), n;
		for (; t && !n;) t = e > 0 ? ae(t, k) : oe(t, k), n = t?.querySelector(M);
		n ? T.setState("value", n.getAttribute(P)) : H(e);
	}
	let W = () => V(B().length - 1), G = (e) => {
		e.preventDefault(), e.metaKey ? W() : e.altKey ? U(1) : H(1);
	}, K = (e) => {
		e.preventDefault(), e.metaKey ? V(0) : e.altKey ? U(-1) : H(-1);
	};
	return f.createElement(a.div, {
		ref: t,
		tabIndex: -1,
		...b,
		"cmdk-root": "",
		onKeyDown: (e) => {
			var t;
			(t = b.onKeyDown) == null || t.call(b, e);
			let n = e.nativeEvent.isComposing || e.keyCode === 229;
			if (!(e.defaultPrevented || n)) switch (e.key) {
				case "n":
				case "j":
					y && e.ctrlKey && G(e);
					break;
				case "ArrowDown":
					G(e);
					break;
				case "p":
				case "k":
					y && e.ctrlKey && K(e);
					break;
				case "ArrowUp":
					K(e);
					break;
				case "Home":
					e.preventDefault(), V(0);
					break;
				case "End":
					e.preventDefault(), W();
					break;
				case "Enter": {
					e.preventDefault();
					let t = z();
					if (t) {
						let e = new Event(N);
						t.dispatchEvent(e);
					}
				}
			}
		}
	}, f.createElement("label", {
		"cmdk-label": "",
		htmlFor: E.inputId,
		id: E.labelId,
		style: ue
	}, u), Q(e, (e) => f.createElement(re.Provider, { value: T }, f.createElement(F.Provider, { value: E }, e))));
}), B = f.forwardRef((e, t) => {
	let i = r(), o = f.useRef(null), s = f.useContext(R), c = I(), l = J(e), u = l.current?.forceMount ?? s?.forceMount;
	Y(() => {
		if (!u) return c.item(i, s?.id);
	}, [u]);
	let d = se(i, o, [
		e.value,
		e.children,
		o
	], e.keywords), p = L(), m = Z((e) => e.value && e.value === d.current), h = Z((e) => u || c.filter() === !1 ? !0 : e.search ? e.filtered.items.get(i) > 0 : !0);
	f.useEffect(() => {
		let t = o.current;
		if (!(!t || e.disabled)) return t.addEventListener(N, g), () => t.removeEventListener(N, g);
	}, [
		h,
		e.onSelect,
		e.disabled
	]);
	function g() {
		var e, t;
		_(), (t = (e = l.current).onSelect) == null || t.call(e, d.current);
	}
	function _() {
		p.setState("value", d.current, !0);
	}
	if (!h) return null;
	let { disabled: v, value: y, onSelect: b, forceMount: x, keywords: ee, ...S } = e;
	return f.createElement(a.div, {
		ref: n(o, t),
		...S,
		id: i,
		"cmdk-item": "",
		role: "option",
		"aria-disabled": !!v,
		"aria-selected": !!m,
		"data-disabled": !!v,
		"data-selected": !!m,
		onPointerMove: v || c.getDisablePointerSelection() ? void 0 : _,
		onClick: v ? void 0 : g
	}, e.children);
}), V = f.forwardRef((e, t) => {
	let { heading: i, children: o, forceMount: s, ...c } = e, l = r(), u = f.useRef(null), d = f.useRef(null), p = r(), m = I(), h = Z((e) => s || m.filter() === !1 ? !0 : e.search ? e.filtered.groups.has(l) : !0);
	Y(() => m.group(l), []), se(l, u, [
		e.value,
		e.heading,
		d
	]);
	let g = f.useMemo(() => ({
		id: l,
		forceMount: s
	}), [s]);
	return f.createElement(a.div, {
		ref: n(u, t),
		...c,
		"cmdk-group": "",
		role: "presentation",
		hidden: h ? void 0 : !0
	}, i && f.createElement("div", {
		ref: d,
		"cmdk-group-heading": "",
		"aria-hidden": !0,
		id: p
	}, i), Q(e, (e) => f.createElement("div", {
		"cmdk-group-items": "",
		role: "group",
		"aria-labelledby": i ? p : void 0
	}, f.createElement(R.Provider, { value: g }, e))));
}), H = f.forwardRef((e, t) => {
	let { alwaysRender: r, ...i } = e, o = f.useRef(null), s = Z((e) => !e.search);
	return !r && !s ? null : f.createElement(a.div, {
		ref: n(o, t),
		...i,
		"cmdk-separator": "",
		role: "separator"
	});
}), U = f.forwardRef((e, t) => {
	let { onValueChange: n, ...r } = e, i = e.value != null, o = L(), s = Z((e) => e.search), c = Z((e) => e.selectedItemId), l = I();
	return f.useEffect(() => {
		e.value != null && o.setState("search", e.value);
	}, [e.value]), f.createElement(a.input, {
		ref: t,
		...r,
		"cmdk-input": "",
		autoComplete: "off",
		autoCorrect: "off",
		spellCheck: !1,
		"aria-autocomplete": "list",
		role: "combobox",
		"aria-expanded": !0,
		"aria-controls": l.listId,
		"aria-labelledby": l.labelId,
		"aria-activedescendant": c,
		id: l.inputId,
		type: "text",
		value: i ? e.value : s,
		onChange: (e) => {
			i || o.setState("search", e.target.value), n?.(e.target.value);
		}
	});
}), W = f.forwardRef((e, t) => {
	let { children: r, label: i = "Suggestions", ...o } = e, s = f.useRef(null), c = f.useRef(null), l = Z((e) => e.selectedItemId), u = I();
	return f.useEffect(() => {
		if (c.current && s.current) {
			let e = c.current, t = s.current, n, r = new ResizeObserver(() => {
				n = requestAnimationFrame(() => {
					let n = e.offsetHeight;
					t.style.setProperty("--cmdk-list-height", n.toFixed(1) + "px");
				});
			});
			return r.observe(e), () => {
				cancelAnimationFrame(n), r.unobserve(e);
			};
		}
	}, []), f.createElement(a.div, {
		ref: n(s, t),
		...o,
		"cmdk-list": "",
		role: "listbox",
		tabIndex: -1,
		"aria-activedescendant": l,
		"aria-label": i,
		id: u.listId
	}, Q(e, (e) => f.createElement("div", {
		ref: n(c, u.listInnerRef),
		"cmdk-list-sizer": ""
	}, e)));
}), G = f.forwardRef((e, t) => {
	let { open: n, onOpenChange: r, overlayClassName: i, contentClassName: a, container: u, ...d } = e;
	return f.createElement(s, {
		open: n,
		onOpenChange: r
	}, f.createElement(c, { container: u }, f.createElement(l, {
		"cmdk-overlay": "",
		className: i
	}), f.createElement(o, {
		"aria-label": e.label,
		"cmdk-dialog": "",
		className: a
	}, f.createElement(z, {
		ref: t,
		...d
	}))));
}), K = f.forwardRef((e, t) => Z((e) => e.filtered.count === 0) ? f.createElement(a.div, {
	ref: t,
	...e,
	"cmdk-empty": "",
	role: "presentation"
}) : null), ie = f.forwardRef((e, t) => {
	let { progress: n, children: r, label: i = "Loading...", ...o } = e;
	return f.createElement(a.div, {
		ref: t,
		...o,
		"cmdk-loading": "",
		role: "progressbar",
		"aria-valuenow": n,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": i
	}, Q(e, (e) => f.createElement("div", { "aria-hidden": !0 }, e)));
}), q = Object.assign(z, {
	List: W,
	Item: B,
	Input: U,
	Group: V,
	Separator: H,
	Dialog: G,
	Empty: K,
	Loading: ie
});
function ae(e, t) {
	let n = e.nextElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.nextElementSibling;
	}
}
function oe(e, t) {
	let n = e.previousElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.previousElementSibling;
	}
}
function J(e) {
	let t = f.useRef(e);
	return Y(() => {
		t.current = e;
	}), t;
}
var Y = typeof window > "u" ? f.useEffect : f.useLayoutEffect;
function X(e) {
	let t = f.useRef();
	return t.current === void 0 && (t.current = e()), t;
}
function Z(e) {
	let t = L(), n = () => e(t.snapshot());
	return f.useSyncExternalStore(t.subscribe, n, n);
}
function se(e, t, n, r = []) {
	let i = f.useRef(), a = I();
	return Y(() => {
		var o;
		let s = (() => {
			for (let e of n) {
				if (typeof e == "string") return e.trim();
				if (typeof e == "object" && "current" in e) return e.current ? e.current.textContent?.trim() : i.current;
			}
		})(), c = r.map((e) => e.trim());
		a.value(e, s, c), (o = t.current) == null || o.setAttribute(P, s), i.current = s;
	}), i;
}
var ce = () => {
	let [e, t] = f.useState(), n = X(() => /* @__PURE__ */ new Map());
	return Y(() => {
		n.current.forEach((e) => e()), n.current = /* @__PURE__ */ new Map();
	}, [e]), (e, r) => {
		n.current.set(e, r), t({});
	};
};
function le(e) {
	let t = e.type;
	return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Q({ asChild: e, children: t }, n) {
	return e && f.isValidElement(t) ? f.cloneElement(le(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var ue = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0"
}, $ = f.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ p(q, {
	ref: r,
	className: e("flex h-full w-full flex-col overflow-hidden rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-primary)]", t),
	"data-sdk-ui": "command",
	"data-slot": "command",
	...n
}));
$.displayName = "Command";
function de({ children: e, slotProps: n, ...r }) {
	return /* @__PURE__ */ p(d, {
		...r,
		children: /* @__PURE__ */ p(u, {
			"data-sdk-ui": "command-dialog",
			...t({
				"aria-describedby": void 0,
				className: "overflow-hidden p-0 [&>button]:hidden"
			}, n?.content),
			children: /* @__PURE__ */ p($, {
				...t({ className: "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.08em] [&_[cmdk-group-heading]]:text-[var(--sdk-color-text-muted)]" }, n?.command),
				children: e
			})
		})
	});
}
var fe = f.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ m("div", {
	className: "flex items-center gap-3 border-b border-[var(--sdk-color-border-default)] px-4 py-3",
	"cmdk-input-wrapper": "",
	"data-sdk-ui": "command-input-wrapper",
	"data-slot": "command-input-wrapper",
	children: [/* @__PURE__ */ p(i, { className: "h-4 w-4 text-[var(--sdk-color-text-muted)]" }), /* @__PURE__ */ p(q.Input, {
		ref: r,
		className: e("flex h-10 w-full bg-transparent text-sm text-[var(--sdk-color-text-primary)] outline-none placeholder:text-[var(--sdk-color-text-muted)] disabled:cursor-not-allowed disabled:opacity-50", t),
		"data-sdk-ui": "command-input",
		"data-slot": "command-input",
		...n
	})]
}));
fe.displayName = "CommandInput";
var pe = f.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ p(q.List, {
	ref: r,
	className: e("max-h-[24rem] overflow-y-auto overflow-x-hidden p-2", t),
	"data-sdk-ui": "command-list",
	"data-slot": "command-list",
	...n
}));
pe.displayName = "CommandList";
var me = f.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ p(q.Empty, {
	ref: r,
	className: e("py-8 text-center text-sm text-[var(--sdk-color-text-secondary)]", t),
	"data-sdk-ui": "command-empty",
	"data-slot": "command-empty",
	...n
}));
me.displayName = "CommandEmpty";
var he = f.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ p(q.Group, {
	ref: r,
	className: e("overflow-hidden p-1 text-[var(--sdk-color-text-primary)]", t),
	"data-sdk-ui": "command-group",
	"data-slot": "command-group",
	...n
}));
he.displayName = "CommandGroup";
var ge = f.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ p(q.Separator, {
	ref: r,
	className: e("-mx-1 my-2 h-px bg-[var(--sdk-color-border-default)]", t),
	"data-sdk-ui": "command-separator",
	"data-slot": "command-separator",
	...n
}));
ge.displayName = "CommandSeparator";
var _e = f.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ p(q.Item, {
	ref: r,
	className: e("relative flex cursor-default items-center gap-2 rounded-[var(--sdk-radius-field)] px-3 py-2 text-sm outline-none transition-colors data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-[var(--sdk-color-brand-primary-soft)] data-[selected=true]:text-[var(--sdk-color-text-primary)]", t),
	"data-sdk-ui": "command-item",
	"data-slot": "command-item",
	...n
}));
_e.displayName = "CommandItem";
var ve = f.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ p("span", {
	ref: r,
	className: e("ml-auto text-[11px] uppercase tracking-[0.12em] text-[var(--sdk-color-text-muted)]", t),
	"data-sdk-ui": "command-shortcut",
	"data-slot": "command-shortcut",
	...n
}));
ve.displayName = "CommandShortcut", de.displayName = "CommandDialog";
//#endregion
export { fe as a, ge as c, he as i, ve as l, de as n, _e as o, me as r, pe as s, $ as t };

//# sourceMappingURL=command-D_4ssh72.js.map