import { t as e } from "./createLucideIcon-C5qdfuE3.js";
import { i as t, n, o as r, r as i, s as a } from "./dist-ZP7iWfNQ.js";
import { n as o, o as s, r as c, t as l } from "./dist-Dt-KO-jK.js";
import * as u from "react";
import { useLayoutEffect as d, useState as f } from "react";
import { jsx as p } from "react/jsx-runtime";
import * as m from "react-dom";
var h = e("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), g = e("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), _ = u.useInsertionEffect || t;
function v({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	let [i, a, o] = y({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0, c = s ? e : i;
	{
		let t = u.useRef(e !== void 0);
		u.useEffect(() => {
			let e = t.current;
			e !== s && console.warn(`${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s;
		}, [s, r]);
	}
	return [c, u.useCallback((t) => {
		if (s) {
			let n = b(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
function y({ defaultProp: e, onChange: t }) {
	let [n, r] = u.useState(e), i = u.useRef(n), a = u.useRef(t);
	return _(() => {
		a.current = t;
	}, [t]), u.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
function b(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-collection@_e688633bd3d45f22d4731832f48e78f7/node_modules/@radix-ui/react-collection/dist/index.mjs
function x(e) {
	let t = e + "CollectionProvider", [n, i] = r(t), [a, o] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), l = (e) => {
		let { scope: t, children: n } = e, r = u.useRef(null), i = u.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ p(a, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	l.displayName = t;
	let d = e + "CollectionSlot", f = c(d), m = u.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ p(f, {
			ref: s(t, o(d, n).collectionRef),
			children: r
		});
	});
	m.displayName = d;
	let h = e + "CollectionItemSlot", g = "data-radix-collection-item", _ = c(h), v = u.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, a = u.useRef(null), c = s(t, a), l = o(h, n);
		return u.useEffect(() => (l.itemMap.set(a, {
			ref: a,
			...i
		}), () => void l.itemMap.delete(a))), /* @__PURE__ */ p(_, {
			[g]: "",
			ref: c,
			children: r
		});
	});
	v.displayName = h;
	function y(t) {
		let n = o(e + "CollectionConsumer", t);
		return u.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${g}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: l,
			Slot: m,
			ItemSlot: v
		},
		y,
		i
	];
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-use-escape-_6b25b701476c890f81bf7729a06c1a7a/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function S(e, t = globalThis?.document) {
	let r = n(e);
	u.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && r(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [r, t]);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-dismissable_d5c7d5469b48563cb554b47e6f160aef/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var C = "DismissableLayer", w = "dismissableLayer.update", T = "dismissableLayer.pointerDownOutside", E = "dismissableLayer.focusOutside", D, O = u.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), k = u.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: o, onInteractOutside: c, onDismiss: d, ...f } = e, m = u.useContext(O), [h, g] = u.useState(null), _ = h?.ownerDocument ?? globalThis?.document, [, v] = u.useState({}), y = s(t, (e) => g(e)), b = Array.from(m.layers), [x] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), C = b.indexOf(x), T = h ? b.indexOf(h) : -1, E = m.layersWithOutsidePointerEventsDisabled.size > 0, k = T >= C, A = M((e) => {
		let t = e.target, n = [...m.branches].some((e) => e.contains(t));
		!k || n || (i?.(e), c?.(e), e.defaultPrevented || d?.());
	}, _), j = N((e) => {
		let t = e.target;
		[...m.branches].some((e) => e.contains(t)) || (o?.(e), c?.(e), e.defaultPrevented || d?.());
	}, _);
	return S((e) => {
		T === m.layers.size - 1 && (r?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()));
	}, _), u.useEffect(() => {
		if (h) return n && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (D = _.body.style.pointerEvents, _.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(h)), m.layers.add(h), P(), () => {
			n && (m.layersWithOutsidePointerEventsDisabled.delete(h), m.layersWithOutsidePointerEventsDisabled.size === 0 && (_.body.style.pointerEvents = D));
		};
	}, [
		h,
		_,
		n,
		m
	]), u.useEffect(() => () => {
		h && (m.layers.delete(h), m.layersWithOutsidePointerEventsDisabled.delete(h), P());
	}, [h, m]), u.useEffect(() => {
		let e = () => v({});
		return document.addEventListener(w, e), () => document.removeEventListener(w, e);
	}, []), /* @__PURE__ */ p(l.div, {
		...f,
		ref: y,
		style: {
			pointerEvents: E ? k ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: a(e.onFocusCapture, j.onFocusCapture),
		onBlurCapture: a(e.onBlurCapture, j.onBlurCapture),
		onPointerDownCapture: a(e.onPointerDownCapture, A.onPointerDownCapture)
	});
});
k.displayName = C;
var A = "DismissableLayerBranch", j = u.forwardRef((e, t) => {
	let n = u.useContext(O), r = u.useRef(null), i = s(t, r);
	return u.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ p(l.div, {
		...e,
		ref: i
	});
});
j.displayName = A;
function M(e, t = globalThis?.document) {
	let r = n(e), i = u.useRef(!1), a = u.useRef(() => {});
	return u.useEffect(() => {
		let e = (e) => {
			if (e.target && !i.current) {
				let n = function() {
					F(T, r, i, { discrete: !0 });
				}, i = { originalEvent: e };
				e.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = n, t.addEventListener("click", a.current, { once: !0 })) : n();
			} else t.removeEventListener("click", a.current);
			i.current = !1;
		}, n = window.setTimeout(() => {
			t.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(n), t.removeEventListener("pointerdown", e), t.removeEventListener("click", a.current);
		};
	}, [t, r]), { onPointerDownCapture: () => i.current = !0 };
}
function N(e, t = globalThis?.document) {
	let r = n(e), i = u.useRef(!1);
	return u.useEffect(() => {
		let e = (e) => {
			e.target && !i.current && F(E, r, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, r]), {
		onFocusCapture: () => i.current = !0,
		onBlurCapture: () => i.current = !1
	};
}
function P() {
	let e = new CustomEvent(w);
	document.dispatchEvent(e);
}
function F(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? o(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-focus-guard_78030b900106b9bb2b519bd73b8e579e/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var ee = 0, I = null;
function te() {
	u.useEffect(() => {
		I ||= {
			start: ne(),
			end: ne()
		};
		let { start: e, end: t } = I;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), ee++, () => {
			ee === 1 && (I?.start.remove(), I?.end.remove(), I = null), ee = Math.max(0, ee - 1);
		};
	}, []);
}
function ne() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-focus-scope_8aad341e518bece285c80448ad25e837/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var L = "focusScope.autoFocusOnMount", re = "focusScope.autoFocusOnUnmount", ie = {
	bubbles: !1,
	cancelable: !0
}, ae = "FocusScope", oe = u.forwardRef((e, t) => {
	let { loop: r = !1, trapped: i = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...c } = e, [d, f] = u.useState(null), m = n(a), h = n(o), g = u.useRef(null), _ = s(t, (e) => f(e)), v = u.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	u.useEffect(() => {
		if (i) {
			let e = function(e) {
				if (v.paused || !d) return;
				let t = e.target;
				d.contains(t) ? g.current = t : R(g.current, { select: !0 });
			}, t = function(e) {
				if (v.paused || !d) return;
				let t = e.relatedTarget;
				t !== null && (d.contains(t) || R(g.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && R(d);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return d && r.observe(d, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		d,
		v.paused
	]), u.useEffect(() => {
		if (d) {
			pe.add(v);
			let e = document.activeElement;
			if (!d.contains(e)) {
				let t = new CustomEvent(L, ie);
				d.addEventListener(L, m), d.dispatchEvent(t), t.defaultPrevented || (se(ge(le(d)), { select: !0 }), document.activeElement === e && R(d));
			}
			return () => {
				d.removeEventListener(L, m), setTimeout(() => {
					let t = new CustomEvent(re, ie);
					d.addEventListener(re, h), d.dispatchEvent(t), t.defaultPrevented || R(e ?? document.body, { select: !0 }), d.removeEventListener(re, h), pe.remove(v);
				}, 0);
			};
		}
	}, [
		d,
		m,
		h,
		v
	]);
	let y = u.useCallback((e) => {
		if (!r && !i || v.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = ce(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && R(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && R(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		v.paused
	]);
	return /* @__PURE__ */ p(l.div, {
		tabIndex: -1,
		...c,
		ref: _,
		onKeyDown: y
	});
});
oe.displayName = ae;
function se(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (R(r, { select: t }), document.activeElement !== n) return;
}
function ce(e) {
	let t = le(e);
	return [ue(t, e), ue(t.reverse(), e)];
}
function le(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function ue(e, t) {
	for (let n of e) if (!de(n, { upTo: t })) return n;
}
function de(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function fe(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function R(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && fe(e) && t && e.select();
	}
}
var pe = me();
function me() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = he(e, t), e.unshift(t);
		},
		remove(t) {
			e = he(e, t), e[0]?.resume();
		}
	};
}
function he(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function ge(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-id@1.1.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-id/dist/index.mjs
var _e = u.useId || (() => void 0), ve = 0;
function ye(e) {
	let [n, r] = u.useState(_e());
	return t(() => {
		e || r((e) => e ?? String(ve++));
	}, [e]), e || (n ? `radix-${n}` : "");
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var be = [
	"top",
	"right",
	"bottom",
	"left"
], z = Math.min, B = Math.max, xe = Math.round, Se = Math.floor, V = (e) => ({
	x: e,
	y: e
}), Ce = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function we(e, t, n) {
	return B(e, z(t, n));
}
function H(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function U(e) {
	return e.split("-")[0];
}
function Te(e) {
	return e.split("-")[1];
}
function Ee(e) {
	return e === "x" ? "y" : "x";
}
function De(e) {
	return e === "y" ? "height" : "width";
}
function W(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Oe(e) {
	return Ee(W(e));
}
function ke(e, t, n) {
	n === void 0 && (n = !1);
	let r = Te(e), i = Oe(e), a = De(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Re(o)), [o, Re(o)];
}
function Ae(e) {
	let t = Re(e);
	return [
		je(e),
		t,
		je(t)
	];
}
function je(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Me = ["left", "right"], Ne = ["right", "left"], Pe = ["top", "bottom"], Fe = ["bottom", "top"];
function Ie(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Ne : Me : t ? Me : Ne;
		case "left":
		case "right": return t ? Pe : Fe;
		default: return [];
	}
}
function Le(e, t, n, r) {
	let i = Te(e), a = Ie(U(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(je)))), a;
}
function Re(e) {
	let t = U(e);
	return Ce[t] + e.slice(t.length);
}
function ze(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Be(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : ze(e);
}
function Ve(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@floating-ui+core@1.7.5/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function He(e, t, n) {
	let { reference: r, floating: i } = e, a = W(t), o = Oe(t), s = De(o), c = U(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Te(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Ue(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = H(t, e), p = Be(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Ve(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = Ve(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var We = 50, Ge = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Ue
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = He(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < We && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = He(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Ke = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = H(e, t) || {};
		if (l == null) return {};
		let d = Be(u), f = {
			x: n,
			y: r
		}, p = Oe(i), m = De(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = z(d[_], T), D = z(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = we(O, A, k), M = !c.arrow && Te(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), qe = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = H(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = U(r), _ = W(o), v = U(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Re(o)] : Ae(o)), x = p !== "none";
			!d && x && b.push(...Le(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = ke(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== W(t)) || T.every((e) => W(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = W(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function Je(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Ye(e) {
	return be.some((t) => e[t] >= 0);
}
var Xe = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = H(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Je(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Ye(e)
					} };
				}
				case "escaped": {
					let e = Je(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Ye(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Ze = /* @__PURE__ */ new Set(["left", "top"]);
async function Qe(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = U(n), s = Te(n), c = W(n) === "y", l = Ze.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = H(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var $e = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Qe(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, et = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = H(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = W(U(i)), p = Ee(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = we(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = we(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, tt = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = H(e, t), u = {
				x: n,
				y: r
			}, d = W(i), f = Ee(d), p = u[f], m = u[d], h = H(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = Ze.has(U(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, nt = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = H(e, t), u = await o.detectOverflow(t, l), d = U(i), f = Te(i), p = W(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = z(h - u[g], v), x = z(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = B(u.left, 0), t = B(u.right, 0), n = B(u.top, 0), r = B(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : B(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : B(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function rt() {
	return typeof window < "u";
}
function it(e) {
	return at(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function G(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function K(e) {
	return ((at(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function at(e) {
	return rt() ? e instanceof Node || e instanceof G(e).Node : !1;
}
function q(e) {
	return rt() ? e instanceof Element || e instanceof G(e).Element : !1;
}
function J(e) {
	return rt() ? e instanceof HTMLElement || e instanceof G(e).HTMLElement : !1;
}
function ot(e) {
	return !rt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof G(e).ShadowRoot;
}
function st(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = X(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function ct(e) {
	return /^(table|td|th)$/.test(it(e));
}
function lt(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var ut = /transform|translate|scale|rotate|perspective|filter/, dt = /paint|layout|strict|content/, Y = (e) => !!e && e !== "none", ft;
function pt(e) {
	let t = q(e) ? X(e) : e;
	return Y(t.transform) || Y(t.translate) || Y(t.scale) || Y(t.rotate) || Y(t.perspective) || !ht() && (Y(t.backdropFilter) || Y(t.filter)) || ut.test(t.willChange || "") || dt.test(t.contain || "");
}
function mt(e) {
	let t = Z(e);
	for (; J(t) && !gt(t);) {
		if (pt(t)) return t;
		if (lt(t)) return null;
		t = Z(t);
	}
	return null;
}
function ht() {
	return ft ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), ft;
}
function gt(e) {
	return /^(html|body|#document)$/.test(it(e));
}
function X(e) {
	return G(e).getComputedStyle(e);
}
function _t(e) {
	return q(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Z(e) {
	if (it(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ot(e) && e.host || K(e);
	return ot(t) ? t.host : t;
}
function vt(e) {
	let t = Z(e);
	return gt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : J(t) && st(t) ? t : vt(t);
}
function yt(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = vt(e), i = r === e.ownerDocument?.body, a = G(r);
	if (i) {
		let e = bt(a);
		return t.concat(a, a.visualViewport || [], st(r) ? r : [], e && n ? yt(e) : []);
	} else return t.concat(r, yt(r, [], n));
}
function bt(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function xt(e) {
	let t = X(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = J(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = xe(n) !== a || xe(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function St(e) {
	return q(e) ? e : e.contextElement;
}
function Ct(e) {
	let t = St(e);
	if (!J(t)) return V(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = xt(t), o = (a ? xe(n.width) : n.width) / r, s = (a ? xe(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var wt = /* @__PURE__ */ V(0);
function Tt(e) {
	let t = G(e);
	return !ht() || !t.visualViewport ? wt : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Et(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== G(e) ? !1 : t;
}
function Q(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = St(e), o = V(1);
	t && (r ? q(r) && (o = Ct(r)) : o = Ct(e));
	let s = Et(a, n, r) ? Tt(a) : V(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = G(a), t = r && q(r) ? G(r) : r, n = e, i = bt(n);
		for (; i && r && t !== n;) {
			let e = Ct(i), t = i.getBoundingClientRect(), r = X(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = G(i), i = bt(n);
		}
	}
	return Ve({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Dt(e, t) {
	let n = _t(e).scrollLeft;
	return t ? t.left + n : Q(K(e)).left + n;
}
function Ot(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Dt(e, n),
		y: n.top + t.scrollTop
	};
}
function kt(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = K(r), s = t ? lt(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = V(1), u = V(0), d = J(r);
	if ((d || !d && !a) && ((it(r) !== "body" || st(o)) && (c = _t(r)), d)) {
		let e = Q(r);
		l = Ct(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Ot(o, c) : V(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function At(e) {
	return Array.from(e.getClientRects());
}
function jt(e) {
	let t = K(e), n = _t(e), r = e.ownerDocument.body, i = B(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = B(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Dt(e), s = -n.scrollTop;
	return X(r).direction === "rtl" && (o += B(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Mt = 25;
function Nt(e, t) {
	let n = G(e), r = K(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = ht();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Dt(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Mt && (a -= o);
	} else l <= Mt && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function Pt(e, t) {
	let n = Q(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = J(e) ? Ct(e) : V(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Ft(e, t, n) {
	let r;
	if (t === "viewport") r = Nt(e, n);
	else if (t === "document") r = jt(K(e));
	else if (q(t)) r = Pt(t, n);
	else {
		let n = Tt(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Ve(r);
}
function It(e, t) {
	let n = Z(e);
	return n === t || !q(n) || gt(n) ? !1 : X(n).position === "fixed" || It(n, t);
}
function Lt(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = yt(e, [], !1).filter((e) => q(e) && it(e) !== "body"), i = null, a = X(e).position === "fixed", o = a ? Z(e) : e;
	for (; q(o) && !gt(o);) {
		let t = X(o), n = pt(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || st(o) && !n && It(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Z(o);
	}
	return t.set(e, r), r;
}
function Rt(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? lt(t) ? [] : Lt(t, this._c) : [].concat(n), r], o = Ft(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Ft(t, a[e], i);
		s = B(n.top, s), c = z(n.right, c), l = z(n.bottom, l), u = B(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function zt(e) {
	let { width: t, height: n } = xt(e);
	return {
		width: t,
		height: n
	};
}
function Bt(e, t, n) {
	let r = J(t), i = K(t), a = n === "fixed", o = Q(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = V(0);
	function l() {
		c.x = Dt(i);
	}
	if (r || !r && !a) if ((it(t) !== "body" || st(i)) && (s = _t(t)), r) {
		let e = Q(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Ot(i, s) : V(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Vt(e) {
	return X(e).position === "static";
}
function Ht(e, t) {
	if (!J(e) || X(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return K(e) === n && (n = n.ownerDocument.body), n;
}
function Ut(e, t) {
	let n = G(e);
	if (lt(e)) return n;
	if (!J(e)) {
		let t = Z(e);
		for (; t && !gt(t);) {
			if (q(t) && !Vt(t)) return t;
			t = Z(t);
		}
		return n;
	}
	let r = Ht(e, t);
	for (; r && ct(r) && Vt(r);) r = Ht(r, t);
	return r && gt(r) && Vt(r) && !pt(r) ? n : r || mt(e) || n;
}
var Wt = async function(e) {
	let t = this.getOffsetParent || Ut, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Bt(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Gt(e) {
	return X(e).direction === "rtl";
}
var Kt = {
	convertOffsetParentRelativeRectToViewportRelativeRect: kt,
	getDocumentElement: K,
	getClippingRect: Rt,
	getOffsetParent: Ut,
	getElementRects: Wt,
	getClientRects: At,
	getDimensions: zt,
	getScale: Ct,
	isElement: q,
	isRTL: Gt
};
function qt(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Jt(e, t) {
	let n = null, r, i = K(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Se(d), h = Se(i.clientWidth - (u + f)), g = Se(i.clientHeight - (d + p)), _ = Se(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: B(0, z(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !qt(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Yt(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = St(e), u = i || a ? [...l ? yt(l) : [], ...t ? yt(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Jt(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Q(e) : null;
	c && g();
	function g() {
		let t = Q(e);
		h && !qt(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Xt = $e, Zt = et, Qt = qe, $t = nt, en = Xe, tn = Ke, nn = tt, rn = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Kt,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Ge(e, t, {
		...i,
		platform: a
	});
}, an = typeof document < "u" ? d : function() {};
function on(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!on(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !on(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function sn(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cn(e, t) {
	let n = sn(e);
	return Math.round(t * n) / n;
}
function ln(e) {
	let t = u.useRef(e);
	return an(() => {
		t.current = e;
	}), t;
}
function un(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [d, f] = u.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [p, h] = u.useState(r);
	on(p, r) || h(r);
	let [g, _] = u.useState(null), [v, y] = u.useState(null), b = u.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), x = u.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = a || g, C = o || v, w = u.useRef(null), T = u.useRef(null), E = u.useRef(d), D = c != null, O = ln(c), k = ln(i), A = ln(l), j = u.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: p
		};
		k.current && (e.platform = k.current), rn(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !on(E.current, t) && (E.current = t, m.flushSync(() => {
				f(t);
			}));
		});
	}, [
		p,
		t,
		n,
		k,
		A
	]);
	an(() => {
		l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let M = u.useRef(!1);
	an(() => (M.current = !0, () => {
		M.current = !1;
	}), []), an(() => {
		if (S && (w.current = S), C && (T.current = C), S && C) {
			if (O.current) return O.current(S, C, j);
			j();
		}
	}, [
		S,
		C,
		j,
		O,
		D
	]);
	let N = u.useMemo(() => ({
		reference: w,
		floating: T,
		setReference: b,
		setFloating: x
	}), [b, x]), P = u.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), F = u.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = cn(P.floating, d.x), r = cn(P.floating, d.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...sn(P.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		P.floating,
		d.x,
		d.y
	]);
	return u.useMemo(() => ({
		...d,
		update: j,
		refs: N,
		elements: P,
		floatingStyles: F
	}), [
		d,
		j,
		N,
		P,
		F
	]);
}
var dn = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : tn({
				element: r.current,
				padding: i
			}).fn(n) : r ? tn({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, fn = (e, t) => {
	let n = Xt(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, pn = (e, t) => {
	let n = Zt(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, mn = (e, t) => ({
	fn: nn(e).fn,
	options: [e, t]
}), hn = (e, t) => {
	let n = Qt(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, gn = (e, t) => {
	let n = $t(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, _n = (e, t) => {
	let n = en(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, vn = (e, t) => {
	let n = dn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, yn = "Arrow", bn = u.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ p(l.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ p("polygon", { points: "0,0 30,0 15,10" })
	});
});
bn.displayName = yn;
var xn = bn;
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-use-size@1._51efd50bb1096f9c0ac03b162fbe37a6/node_modules/@radix-ui/react-use-size/dist/index.mjs
function Sn(e) {
	let [n, r] = u.useState(void 0);
	return t(() => {
		if (e) {
			r({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let n = t[0], i, a;
				if ("borderBoxSize" in n) {
					let e = n.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				r({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		} else r(void 0);
	}, [e]), n;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-popper@1.3._a371cc4f3312d8f92861bfa1fa7c6272/node_modules/@radix-ui/react-popper/dist/index.mjs
var Cn = "Popper", [wn, Tn] = r(Cn), [En, Dn] = wn(Cn), On = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = u.useState(null), [a, o] = u.useState(void 0);
	return /* @__PURE__ */ p(En, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		placementState: a,
		setPlacementState: o,
		children: n
	});
};
On.displayName = Cn;
var kn = "PopperAnchor", An = u.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = Dn(kn, n), o = u.useRef(null), c = a.onAnchorChange, d = s(t, u.useCallback((e) => {
		o.current = e, e && c(e);
	}, [c])), f = u.useRef(null);
	u.useEffect(() => {
		if (!r) return;
		let e = f.current;
		f.current = r.current, e !== f.current && c(f.current);
	});
	let m = a.placementState && Bn(a.placementState), h = m?.[0], g = m?.[1];
	return r ? null : /* @__PURE__ */ p(l.div, {
		"data-radix-popper-side": h,
		"data-radix-popper-align": g,
		...i,
		ref: d
	});
});
An.displayName = kn;
var jn = "PopperContent", [Mn, Nn] = wn(jn), Pn = u.forwardRef((e, r) => {
	let { __scopePopper: i, side: a = "bottom", sideOffset: o = 0, align: c = "center", alignOffset: d = 0, arrowPadding: f = 0, avoidCollisions: m = !0, collisionBoundary: h, collisionPadding: g = 0, sticky: _ = "partial", hideWhenDetached: v = !1, updatePositionStrategy: y = "optimized", onPlaced: b, ...x } = e, S = Dn(jn, i), [C, w] = u.useState(null), T = s(r, (e) => w(e)), [E, D] = u.useState(null), O = Sn(E), k = O?.width ?? 0, A = O?.height ?? 0, j = a + (c === "center" ? "" : "-" + c), M = typeof g == "number" ? g : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...g
	}, N = h ? Array.isArray(h) ? h : [h] : void 0, P = N !== void 0 && N.length > 0, F = {
		padding: M,
		boundary: N?.filter(Rn),
		altBoundary: P
	}, { refs: ee, floatingStyles: I, placement: te, isPositioned: ne, middlewareData: L } = un({
		strategy: "fixed",
		placement: j,
		whileElementsMounted: (...e) => Yt(...e, { animationFrame: y === "always" }),
		elements: { reference: S.anchor },
		middleware: [
			fn({
				mainAxis: o + A,
				alignmentAxis: d
			}),
			m && pn({
				mainAxis: !0,
				crossAxis: !1,
				limiter: _ === "partial" ? mn() : void 0,
				...F
			}),
			m && hn({ ...F }),
			gn({
				...F,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			E && vn({
				element: E,
				padding: f
			}),
			zn({
				arrowWidth: k,
				arrowHeight: A
			}),
			v && _n({
				strategy: "referenceHidden",
				...F
			})
		]
	}), re = S.setPlacementState;
	t(() => (re(te), () => {
		re(void 0);
	}), [te, re]);
	let [ie, ae] = Bn(te), oe = n(b);
	t(() => {
		ne && oe?.();
	}, [ne, oe]);
	let se = L.arrow?.x, ce = L.arrow?.y, le = L.arrow?.centerOffset !== 0, [ue, de] = u.useState();
	return t(() => {
		C && de(window.getComputedStyle(C).zIndex);
	}, [C]), /* @__PURE__ */ p("div", {
		ref: ee.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...I,
			transform: ne ? I.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ue,
			"--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
			...L.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ p(Mn, {
			scope: i,
			placedSide: ie,
			placedAlign: ae,
			onArrowChange: D,
			arrowX: se,
			arrowY: ce,
			shouldHideArrow: le,
			children: /* @__PURE__ */ p(l.div, {
				"data-side": ie,
				"data-align": ae,
				...x,
				ref: T,
				style: {
					...x.style,
					animation: ne ? void 0 : "none"
				}
			})
		})
	});
});
Pn.displayName = jn;
var Fn = "PopperArrow", In = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Ln = u.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = Nn(Fn, n), a = In[i.placedSide];
	return /* @__PURE__ */ p("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ p(xn, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
Ln.displayName = Fn;
function Rn(e) {
	return e !== null;
}
var zn = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Bn(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function Bn(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var Vn = On, Hn = An, Un = Pn, Wn = Ln, Gn = "Portal", Kn = u.forwardRef((e, n) => {
	let { container: r, ...i } = e, [a, o] = u.useState(!1);
	t(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? m.createPortal(/* @__PURE__ */ p(l.div, {
		...i,
		ref: n
	}), s) : null;
});
Kn.displayName = Gn;
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-roving-focu_08c2e0f6f672d79e28443dc3874fd3cd/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var qn = "rovingFocusGroup.onEntryFocus", Jn = {
	bubbles: !1,
	cancelable: !0
}, Yn = "RovingFocusGroup", [Xn, Zn, Qn] = x(Yn), [$n, er] = r(Yn, [Qn]), [tr, nr] = $n(Yn), rr = u.forwardRef((e, t) => /* @__PURE__ */ p(Xn.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ p(Xn.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ p(ir, {
			...e,
			ref: t
		})
	})
}));
rr.displayName = Yn;
var ir = u.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: r, orientation: o, loop: c = !1, dir: d, currentTabStopId: f, defaultCurrentTabStopId: m, onCurrentTabStopIdChange: h, onEntryFocus: g, preventScrollOnEntryFocus: _ = !1, ...y } = e, b = u.useRef(null), x = s(t, b), S = i(d), [C, w] = v({
		prop: f,
		defaultProp: m ?? null,
		onChange: h,
		caller: Yn
	}), [T, E] = u.useState(!1), D = n(g), O = Zn(r), k = u.useRef(!1), [A, j] = u.useState(0);
	return u.useEffect(() => {
		let e = b.current;
		if (e) return e.addEventListener(qn, D), () => e.removeEventListener(qn, D);
	}, [D]), /* @__PURE__ */ p(tr, {
		scope: r,
		orientation: o,
		dir: S,
		loop: c,
		currentTabStopId: C,
		onItemFocus: u.useCallback((e) => w(e), [w]),
		onItemShiftTab: u.useCallback(() => E(!0), []),
		onFocusableItemAdd: u.useCallback(() => j((e) => e + 1), []),
		onFocusableItemRemove: u.useCallback(() => j((e) => e - 1), []),
		children: /* @__PURE__ */ p(l.div, {
			tabIndex: T || A === 0 ? -1 : 0,
			"data-orientation": o,
			...y,
			ref: x,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: a(e.onMouseDown, () => {
				k.current = !0;
			}),
			onFocus: a(e.onFocus, (e) => {
				let t = !k.current;
				if (e.target === e.currentTarget && t && !T) {
					let t = new CustomEvent(qn, Jn);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = O().filter((e) => e.focusable);
						ur([
							e.find((e) => e.active),
							e.find((e) => e.id === C),
							...e
						].filter(Boolean).map((e) => e.ref.current), _);
					}
				}
				k.current = !1;
			}),
			onBlur: a(e.onBlur, () => E(!1))
		})
	});
}), ar = "RovingFocusGroupItem", or = u.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: o, children: s, ...c } = e, d = ye(), f = o || d, m = nr(ar, n), h = m.currentTabStopId === f, g = Zn(n), { onFocusableItemAdd: _, onFocusableItemRemove: v, currentTabStopId: y } = m;
	return u.useEffect(() => {
		if (r) return _(), () => v();
	}, [
		r,
		_,
		v
	]), /* @__PURE__ */ p(Xn.ItemSlot, {
		scope: n,
		id: f,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ p(l.span, {
			tabIndex: h ? 0 : -1,
			"data-orientation": m.orientation,
			...c,
			ref: t,
			onMouseDown: a(e.onMouseDown, (e) => {
				r ? m.onItemFocus(f) : e.preventDefault();
			}),
			onFocus: a(e.onFocus, () => m.onItemFocus(f)),
			onKeyDown: a(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					m.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = lr(e, m.orientation, m.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = g().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = m.loop ? dr(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => ur(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: h,
				hasTabStop: y != null
			}) : s
		})
	});
});
or.displayName = ar;
var sr = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function cr(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function lr(e, t, n) {
	let r = cr(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return sr[r];
}
function ur(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function dr(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var fr = rr, pr = or, mr = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, hr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), _r = {}, vr = 0, yr = function(e) {
	return e && (e.host || yr(e.parentNode));
}, br = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = yr(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, xr = function(e, t, n, r) {
	var i = br(t, Array.isArray(e) ? e : [e]);
	_r[n] || (_r[n] = /* @__PURE__ */ new WeakMap());
	var a = _r[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (hr.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				hr.set(e, c), a.set(e, l), o.push(e), c === 1 && i && gr.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), vr++, function() {
		o.forEach(function(e) {
			var t = hr.get(e) - 1, i = a.get(e) - 1;
			hr.set(e, t), a.set(e, i), t || (gr.has(e) || e.removeAttribute(r), gr.delete(e)), i || e.removeAttribute(n);
		}), vr--, vr || (hr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), _r = {});
	};
}, Sr = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || mr(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), xr(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, $ = function() {
	return $ = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, $.apply(this, arguments);
};
function Cr(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function wr(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-remove-scroll-bar@2.3_25ad6fb9fe75be4391ed3c9752b30d68/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Tr = "right-scroll-bar-position", Er = "width-before-scroll-bar", Dr = "with-scroll-bars-hidden", Or = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/assignRef.js
function kr(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useRef.js
function Ar(e, t) {
	var n = f(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var jr = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Mr = /* @__PURE__ */ new WeakMap();
function Nr(e, t) {
	var n = Ar(t || null, function(t) {
		return e.forEach(function(e) {
			return kr(e, t);
		});
	});
	return jr(function() {
		var t = Mr.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || kr(e, null);
			}), i.forEach(function(e) {
				r.has(e) || kr(e, a);
			});
		}
		Mr.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/medium.js
function Pr(e) {
	return e;
}
function Fr(e, t) {
	t === void 0 && (t = Pr);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function Ir(e) {
	e === void 0 && (e = {});
	var t = Fr(null);
	return t.options = $({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/exports.js
var Lr = function(e) {
	var t = e.sideCar, n = Cr(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return u.createElement(r, $({}, n));
};
Lr.isSideCarExport = !0;
function Rr(e, t) {
	return e.useMedium(t), Lr;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/medium.js
var zr = Ir(), Br = function() {}, Vr = u.forwardRef(function(e, t) {
	var n = u.useRef(null), r = u.useState({
		onScrollCapture: Br,
		onWheelCapture: Br,
		onTouchMoveCapture: Br
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, b = e.gapMode, x = Cr(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = p, C = Nr([n, t]), w = $($({}, x), i);
	return u.createElement(u.Fragment, null, d && u.createElement(S, {
		sideCar: zr,
		removeScrollBar: l,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: a,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: b
	}), o ? u.cloneElement(u.Children.only(s), $($({}, w), { ref: C })) : u.createElement(y, $({}, w, {
		className: c,
		ref: C
	}), s));
});
Vr.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Vr.classNames = {
	fullWidth: Er,
	zeroRight: Tr
};
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Hr, Ur = function() {
	if (Hr) return Hr;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-style-singleton@2.2.3_19dd01ab2b695c353a9afad65534024e/node_modules/react-style-singleton/dist/es2015/singleton.js
function Wr() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Ur();
	return t && e.setAttribute("nonce", t), e;
}
function Gr(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Kr(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var qr = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Wr()) && (Gr(t, n), Kr(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Jr = function() {
	var e = qr();
	return function(t, n) {
		u.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Yr = function() {
	var e = Jr();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Xr = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Zr = function(e) {
	return parseInt(e || "", 10) || 0;
}, Qr = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Zr(n),
		Zr(r),
		Zr(i)
	];
}, $r = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Xr;
	var t = Qr(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, ei = Yr(), ti = "data-scroll-locked", ni = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Dr} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${ti}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${Tr} {
    right: ${s}px ${r};
  }
  
  .${Er} {
    margin-right: ${s}px ${r};
  }
  
  .${Tr} .${Tr} {
    right: 0 ${r};
  }
  
  .${Er} .${Er} {
    margin-right: 0 ${r};
  }
  
  body[${ti}] {
    ${Or}: ${s}px;
  }
`;
}, ri = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, ii = function() {
	u.useEffect(function() {
		return document.body.setAttribute(ti, (ri() + 1).toString()), function() {
			var e = ri() - 1;
			e <= 0 ? document.body.removeAttribute(ti) : document.body.setAttribute(ti, e.toString());
		};
	}, []);
}, ai = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	ii();
	var a = u.useMemo(function() {
		return $r(i);
	}, [i]);
	return u.createElement(ei, { styles: ni(a, !t, i, n ? "" : "!important") });
}, oi = !1;
if (typeof window < "u") try {
	var si = Object.defineProperty({}, "passive", { get: function() {
		return oi = !0, !0;
	} });
	window.addEventListener("test", si, si), window.removeEventListener("test", si, si);
} catch {
	oi = !1;
}
var ci = oi ? { passive: !1 } : !1, li = function(e) {
	return e.tagName === "TEXTAREA";
}, ui = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !li(e) && n[t] === "visible");
}, di = function(e) {
	return ui(e, "overflowY");
}, fi = function(e) {
	return ui(e, "overflowX");
}, pi = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), gi(e, r)) {
			var i = _i(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, mi = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, hi = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, gi = function(e, t) {
	return e === "v" ? di(t) : fi(t);
}, _i = function(e, t) {
	return e === "v" ? mi(t) : hi(t);
}, vi = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, yi = function(e, t, n, r, i) {
	var a = vi(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = _i(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && gi(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, bi = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xi = function(e) {
	return [e.deltaX, e.deltaY];
}, Si = function(e) {
	return e && "current" in e ? e.current : e;
}, Ci = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, wi = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Ti = 0, Ei = [];
function Di(e) {
	var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), i = u.useState(Ti++)[0], a = u.useState(Yr)[0], o = u.useRef(e);
	u.useEffect(function() {
		o.current = e;
	}, [e]), u.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = wr([e.lockRef.current], (e.shards || []).map(Si), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = u.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = bi(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = pi(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = pi(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return yi(h, t, e, h === "h" ? s : c, !0);
	}, []), c = u.useCallback(function(e) {
		var n = e;
		if (!(!Ei.length || Ei[Ei.length - 1] !== a)) {
			var r = "deltaY" in n ? xi(n) : bi(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Ci(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Si).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = u.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Oi(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = u.useCallback(function(e) {
		n.current = bi(e), r.current = void 0;
	}, []), f = u.useCallback(function(t) {
		l(t.type, xi(t), t.target, s(t, e.lockRef.current));
	}, []), p = u.useCallback(function(t) {
		l(t.type, bi(t), t.target, s(t, e.lockRef.current));
	}, []);
	u.useEffect(function() {
		return Ei.push(a), e.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", c, ci), document.addEventListener("touchmove", c, ci), document.addEventListener("touchstart", d, ci), function() {
			Ei = Ei.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, ci), document.removeEventListener("touchmove", c, ci), document.removeEventListener("touchstart", d, ci);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return u.createElement(u.Fragment, null, h ? u.createElement(a, { styles: wi(i) }) : null, m ? u.createElement(ai, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Oi(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var ki = Rr(zr, Di), Ai = u.forwardRef(function(e, t) {
	return u.createElement(Vr, $({}, e, {
		ref: t,
		sideCar: ki
	}));
});
Ai.classNames = Vr.classNames;
//#endregion
export { x as _, er as a, h as b, Wn as c, Tn as d, Sn as f, k as g, te as h, fr as i, Un as l, oe as m, Sr as n, Kn as o, ye as p, pr as r, Hn as s, Ai as t, Vn as u, v, g as y };

//# sourceMappingURL=Combination-CTo9CVjQ.js.map