import { t as e } from "./utils-MYzXLqpE.js";
import { n as t } from "./slot-props-BYpl_5uq.js";
import { n, t as r } from "./button-CRJ9tpur.js";
import { t as i } from "./createLucideIcon-C5qdfuE3.js";
import { _ as a, a as o, b as s, f as c, i as l, r as u, v as d, y as f } from "./Combination-CTo9CVjQ.js";
import { t as p } from "./chevron-down-C54jMGR6.js";
import { d as m, f as h, p as g, t as _ } from "./use-controllable-state-B2HIMogd.js";
import { n as v, t as y } from "./inline-alert-CaHvEjzk.js";
import { n as b, t as x } from "./label-5p0M8lx3.js";
import { t as S } from "./x-DU-kKGVx.js";
import { o as C, r as w, s as T, t as E } from "./dist-ZP7iWfNQ.js";
import { o as D, t as O } from "./dist-Dt-KO-jK.js";
import { a as k, i as ee, o as A, r as j, s as M, t as N } from "./command-D_4ssh72.js";
import { useSdkworkShellBridge as P } from "./theme.js";
import { i as F, r as I, t as te } from "./popover-Dt4DIN9o.js";
import { n as L } from "./input-DZdd_-QL.js";
import { t as ne } from "./dist-DVI7OL9x.js";
import * as R from "react";
import z, { createContext as B, createElement as V, useCallback as H, useContext as re, useEffect as ie, useLayoutEffect as ae, useMemo as oe, useRef as se, useState as ce } from "react";
import { Fragment as le, jsx as U, jsxs as W } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var ue = Object.defineProperty, de = (e, t) => {
	let n = {};
	for (var r in e) ue(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || ue(n, Symbol.toStringTag, { value: "Module" }), n;
}, fe = i("calendar-days", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M16 14h.01",
		key: "1gbofw"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M16 18h.01",
		key: "kzsmim"
	}]
]), pe = i("calendar-range", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M17 14h-6",
		key: "bkmgh3"
	}],
	["path", {
		d: "M13 18H7",
		key: "bb0bb7"
	}],
	["path", {
		d: "M7 14h.01",
		key: "1qa3f1"
	}],
	["path", {
		d: "M17 18h.01",
		key: "1bdyru"
	}]
]), me = i("chevrons-up-down", [["path", {
	d: "m7 15 5 5 5-5",
	key: "1hf1tw"
}], ["path", {
	d: "m7 9 5-5 5 5",
	key: "sgt6xg"
}]]), he = i("cloud-upload", [
	["path", {
		d: "M12 13v8",
		key: "1l5pq0"
	}],
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "m8 17 4-4 4 4",
		key: "1quai1"
	}]
]), ge = i("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]), _e = i("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), ve = i("file-archive", [
	["path", {
		d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5",
		key: "4pqfef"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M8 12v-1",
		key: "1ej8lb"
	}],
	["path", {
		d: "M8 18v-2",
		key: "qcmpov"
	}],
	["path", {
		d: "M8 7V6",
		key: "1nbb54"
	}],
	["circle", {
		cx: "8",
		cy: "20",
		r: "2",
		key: "ckkr5m"
	}]
]), ye = i("file-braces", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
		key: "1oajmo"
	}],
	["path", {
		d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
		key: "mpwhp6"
	}]
]), be = i("file-code-corner", [
	["path", {
		d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
		key: "1wthlu"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m5 16-3 3 3 3",
		key: "331omg"
	}],
	["path", {
		d: "m9 22 3-3-3-3",
		key: "lsp7cz"
	}]
]), xe = i("file-headphone", [
	["path", {
		d: "M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343",
		key: "1vfytu"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0",
		key: "1etmh7"
	}]
]), Se = i("file-image", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["circle", {
		cx: "10",
		cy: "12",
		r: "2",
		key: "737tya"
	}],
	["path", {
		d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",
		key: "wt3hpn"
	}]
]), Ce = i("file-play", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z",
		key: "1tzo1f"
	}]
]), we = i("file-spreadsheet", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M8 13h2",
		key: "yr2amv"
	}],
	["path", {
		d: "M14 13h2",
		key: "un5t4a"
	}],
	["path", {
		d: "M8 17h2",
		key: "2yhykz"
	}],
	["path", {
		d: "M14 17h2",
		key: "10kma7"
	}]
]), Te = i("hash", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "9",
		y2: "9",
		key: "4lhtct"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "15",
		y2: "15",
		key: "vyu0kd"
	}],
	["line", {
		x1: "10",
		x2: "8",
		y1: "3",
		y2: "21",
		key: "1ggp8o"
	}],
	["line", {
		x1: "16",
		x2: "14",
		y1: "3",
		y2: "21",
		key: "weycgp"
	}]
]), Ee = i("image-plus", [
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M19 2v6",
		key: "4bpg5p"
	}],
	["path", {
		d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
		key: "1ue2ih"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]), De = i("music-4", [
	["path", {
		d: "M9 18V5l12-2v13",
		key: "1jmyc2"
	}],
	["path", {
		d: "m9 9 12-2",
		key: "1e64n2"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}],
	["circle", {
		cx: "18",
		cy: "16",
		r: "3",
		key: "1hluhg"
	}]
]), Oe = i("video", [["path", {
	d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
	key: "ftymec"
}], ["rect", {
	x: "2",
	y: "6",
	width: "14",
	height: "12",
	rx: "2",
	key: "158x01"
}]]);
//#endregion
//#region src/lib/core/compose-refs.ts
function ke(e, t) {
	if (typeof e == "function") {
		e(t);
		return;
	}
	e && (e.current = t);
}
function Ae(...e) {
	return (t) => {
		e.forEach((e) => ke(e, t));
	};
}
//#endregion
//#region src/components/ui/input-group.tsx
var je = R.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ U("div", {
	ref: r,
	className: e("group/input-group flex w-full items-stretch overflow-hidden rounded-[var(--sdk-radius-field)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] shadow-[var(--sdk-shadow-sm)] [&>[data-slot=input]]:rounded-none [&>[data-slot=input]]:border-0 [&>[data-slot=input]]:shadow-none [&>[data-slot=input]]:focus-visible:ring-0", t),
	"data-sdk-ui": "input-group",
	"data-slot": "input-group",
	...n
})), Me = R.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ U("div", {
	ref: r,
	className: e("inline-flex items-center border-r border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] px-3 text-sm text-[var(--sdk-color-text-secondary)]", t),
	"data-sdk-ui": "input-group-addon",
	"data-slot": "input-group-addon",
	...n
}));
je.displayName = "InputGroup", Me.displayName = "InputGroupAddon";
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-radio-group_c4097b24fef52b6168f026a6b782682b/node_modules/@radix-ui/react-radio-group/dist/index.mjs
var Ne = "Radio", [Pe, Fe] = C(Ne), [Ie, Le] = Pe(Ne);
function Re(e) {
	let { __scopeRadio: t, checked: n = !1, children: r, disabled: i, form: a, name: o, onCheck: s, required: c, value: l = "on", internal_do_not_use_render: u } = e, [d, f] = R.useState(null), [p, m] = R.useState(null), h = {
		checked: n,
		disabled: i,
		required: c,
		name: o,
		form: a,
		value: l,
		control: d,
		setControl: f,
		hasConsumerStoppedPropagationRef: R.useRef(!1),
		isFormControl: d ? !!a || !!d.closest("form") : !0,
		bubbleInput: p,
		setBubbleInput: m,
		onCheck: () => s?.()
	};
	return /* @__PURE__ */ U(Ie, {
		scope: t,
		...h,
		children: Ke(u) ? u(h) : r
	});
}
var ze = "RadioTrigger", Be = R.forwardRef(({ __scopeRadio: e, onClick: t, ...n }, r) => {
	let { checked: i, disabled: a, value: o, setControl: s, onCheck: c, hasConsumerStoppedPropagationRef: l, isFormControl: u, bubbleInput: d } = Le(ze, e), f = D(r, s);
	return /* @__PURE__ */ U(O.button, {
		type: "button",
		role: "radio",
		"aria-checked": i,
		"data-state": qe(i),
		"data-disabled": a ? "" : void 0,
		disabled: a,
		value: o,
		...n,
		ref: f,
		onClick: T(t, (e) => {
			i || c(), d && u && (l.current = e.isPropagationStopped(), l.current || e.stopPropagation());
		})
	});
});
Be.displayName = ze;
var Ve = R.forwardRef((e, t) => {
	let { __scopeRadio: n, name: r, checked: i, required: a, disabled: o, value: s, onCheck: c, form: l, ...u } = e;
	return /* @__PURE__ */ U(Re, {
		__scopeRadio: n,
		checked: i,
		disabled: o,
		required: a,
		onCheck: c,
		name: r,
		form: l,
		value: s,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ W(le, { children: [/* @__PURE__ */ U(Be, {
			...u,
			ref: t,
			__scopeRadio: n
		}), e && /* @__PURE__ */ U(Ge, { __scopeRadio: n })] })
	});
});
Ve.displayName = Ne;
var He = "RadioIndicator", Ue = R.forwardRef((e, t) => {
	let { __scopeRadio: n, forceMount: r, ...i } = e, a = Le(He, n);
	return /* @__PURE__ */ U(E, {
		present: r || a.checked,
		children: /* @__PURE__ */ U(O.span, {
			"data-state": qe(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t
		})
	});
});
Ue.displayName = He;
var We = "RadioBubbleInput", Ge = R.forwardRef(({ __scopeRadio: e, ...t }, n) => {
	let { control: r, checked: i, required: a, disabled: o, name: s, value: l, form: u, bubbleInput: d, setBubbleInput: f, hasConsumerStoppedPropagationRef: p } = Le(We, e), h = D(n, f), g = m(i), _ = c(r);
	R.useEffect(() => {
		let e = d;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !p.current;
		if (g !== i && n) {
			let t = new Event("click", { bubbles: r });
			n.call(e, i), e.dispatchEvent(t);
		}
	}, [
		d,
		g,
		i,
		p
	]);
	let v = R.useRef(i);
	return /* @__PURE__ */ U(O.input, {
		type: "radio",
		"aria-hidden": !0,
		defaultChecked: v.current,
		required: a,
		disabled: o,
		name: s,
		value: l,
		form: u,
		...t,
		tabIndex: -1,
		ref: h,
		style: {
			...t.style,
			..._,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
Ge.displayName = We;
function Ke(e) {
	return typeof e == "function";
}
function qe(e) {
	return e ? "checked" : "unchecked";
}
var Je = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], Ye = "RadioGroup", [Xe, Ze] = C(Ye, [o, Fe]), Qe = o(), $e = Fe(), [et, tt] = Xe(Ye), nt = R.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, name: r, defaultValue: i, value: a, required: o = !1, disabled: s = !1, orientation: c, dir: u, loop: f = !0, onValueChange: p, ...m } = e, h = Qe(n), g = w(u), [_, v] = d({
		prop: a,
		defaultProp: i ?? null,
		onChange: p,
		caller: Ye
	});
	return /* @__PURE__ */ U(et, {
		scope: n,
		name: r,
		required: o,
		disabled: s,
		value: _,
		onValueChange: v,
		children: /* @__PURE__ */ U(l, {
			asChild: !0,
			...h,
			orientation: c,
			dir: g,
			loop: f,
			children: /* @__PURE__ */ U(O.div, {
				role: "radiogroup",
				"aria-required": o,
				"aria-orientation": c,
				"data-disabled": s ? "" : void 0,
				dir: g,
				...m,
				ref: t
			})
		})
	});
});
nt.displayName = Ye;
var rt = "RadioGroupItem", it = "RadioGroupItemProvider", at = "RadioGroupItemTrigger", ot = "RadioGroupItemBubbleInput";
function st(e) {
	let { __scopeRadioGroup: t, value: n, disabled: r, children: i, internal_do_not_use_render: a } = e, o = tt(it, t), s = $e(t), c = o.disabled || r;
	return /* @__PURE__ */ U(Re, {
		...s,
		checked: o.value === n,
		disabled: c,
		required: o.required,
		name: o.name,
		value: n,
		onCheck: () => o.onValueChange(n),
		internal_do_not_use_render: a,
		children: i
	});
}
var ct = R.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, ...r } = e, i = Qe(n), a = $e(n), { checked: o, disabled: s } = Le(at, a.__scopeRadio), c = R.useRef(null), l = D(t, c), d = R.useRef(!1);
	return R.useEffect(() => {
		let e = (e) => {
			Je.includes(e.key) && (d.current = !0);
		}, t = () => d.current = !1;
		return document.addEventListener("keydown", e), document.addEventListener("keyup", t), () => {
			document.removeEventListener("keydown", e), document.removeEventListener("keyup", t);
		};
	}, []), /* @__PURE__ */ U(u, {
		asChild: !0,
		...i,
		focusable: !s,
		active: o,
		children: /* @__PURE__ */ U(Be, {
			...a,
			...r,
			ref: l,
			onKeyDown: T(r.onKeyDown, (e) => {
				e.key === "Enter" && e.preventDefault();
			}),
			onFocus: T(r.onFocus, () => {
				d.current && c.current?.click();
			})
		})
	});
});
ct.displayName = at;
var lt = R.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, value: r, disabled: i, ...a } = e;
	return /* @__PURE__ */ U(st, {
		__scopeRadioGroup: n,
		value: r,
		disabled: i,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ W(le, { children: [/* @__PURE__ */ U(ct, {
			...a,
			ref: t,
			__scopeRadioGroup: n
		}), e && /* @__PURE__ */ U(ut, { __scopeRadioGroup: n })] })
	});
});
lt.displayName = rt;
var ut = R.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, ...r } = e;
	return /* @__PURE__ */ U(Ge, {
		...$e(n),
		...r,
		ref: t
	});
});
ut.displayName = ot;
var dt = "RadioGroupIndicator", ft = R.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, ...r } = e;
	return /* @__PURE__ */ U(Ue, {
		...$e(n),
		...r,
		ref: t
	});
});
ft.displayName = dt;
//#endregion
//#region src/components/ui/radio-group.tsx
var pt = R.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ U(nt, {
	ref: r,
	className: e("grid gap-3", t),
	"data-sdk-ui": "radio-group",
	"data-slot": "radio-group",
	...n
}));
pt.displayName = "RadioGroup";
var mt = R.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ U(lt, {
	ref: r,
	className: e("aspect-square h-4 w-4 rounded-full border border-[var(--sdk-color-border-strong)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-brand-primary)] shadow-[var(--sdk-shadow-sm)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sdk-color-surface-canvas)] disabled:cursor-not-allowed disabled:opacity-50", t),
	"data-sdk-ui": "radio-group-item",
	"data-slot": "radio-group-item",
	...n,
	children: /* @__PURE__ */ U(ft, {
		className: "flex items-center justify-center",
		"data-slot": "radio-group-indicator",
		children: /* @__PURE__ */ U(f, { className: "h-2.5 w-2.5 fill-current text-current" })
	})
}));
mt.displayName = "RadioGroupItem";
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-slider@1.4._058082356c9aaa07e5209444363e84bb/node_modules/@radix-ui/react-slider/dist/index.mjs
var ht = ["PageUp", "PageDown"], gt = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], _t = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageDown",
		"ArrowUp",
		"ArrowLeft"
	]
}, vt = "Slider", [yt, bt, xt] = a(vt), [St, Ct] = C(vt, [xt]), [wt, Tt] = St(vt), Et = R.forwardRef((e, t) => {
	let { name: n, min: r = 0, max: i = 100, step: a = 1, orientation: o = "horizontal", disabled: s = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [r], value: u, onValueChange: f = () => {}, onValueCommit: p = () => {}, inverted: m = !1, form: h, ...g } = e, _ = R.useRef(/* @__PURE__ */ new Set()), v = R.useRef(0), y = R.useRef(!1), b = o === "horizontal" ? kt : At, [x = [], S] = d({
		prop: u,
		defaultProp: l,
		onChange: (e) => {
			[..._.current][v.current]?.focus({
				preventScroll: !0,
				focusVisible: y.current
			}), y.current = !1, f(e);
		}
	}), C = R.useRef(x);
	function w(e) {
		O(e, Yt(x, e));
	}
	function E(e) {
		O(e, v.current);
	}
	function D() {
		let e = C.current[v.current];
		x[v.current] !== e && p(x);
	}
	function O(e, t, { commit: n } = { commit: !1 }) {
		let o = en(a), s = ne(tn(Math.round((e - r) / a) * a + r, o), [r, i]);
		S((e = []) => {
			let r = Kt(e, s, t);
			if (Qt(r, c * a)) {
				v.current = r.indexOf(s);
				let t = String(r) !== String(e);
				return t && n && p(r), t ? r : e;
			} else return e;
		});
	}
	return /* @__PURE__ */ U(wt, {
		scope: e.__scopeSlider,
		name: n,
		disabled: s,
		min: r,
		max: i,
		valueIndexToChangeRef: v,
		thumbs: _.current,
		values: x,
		orientation: o,
		form: h,
		children: /* @__PURE__ */ U(yt.Provider, {
			scope: e.__scopeSlider,
			children: /* @__PURE__ */ U(yt.Slot, {
				scope: e.__scopeSlider,
				children: /* @__PURE__ */ U(b, {
					"aria-disabled": s,
					"data-disabled": s ? "" : void 0,
					...g,
					ref: t,
					onPointerDown: T(g.onPointerDown, () => {
						s || (C.current = x, y.current = !1);
					}),
					min: r,
					max: i,
					inverted: m,
					onSlideStart: s ? void 0 : w,
					onSlideMove: s ? void 0 : E,
					onSlideEnd: s ? void 0 : D,
					onHomeKeyDown: () => {
						s || (y.current = !0, O(r, 0, { commit: !0 }));
					},
					onEndKeyDown: () => {
						s || (y.current = !0, O(i, x.length - 1, { commit: !0 }));
					},
					onStepKeyDown: ({ event: e, direction: t }) => {
						if (!s) {
							y.current = !0;
							let n = ht.includes(e.key) || e.shiftKey && gt.includes(e.key) ? 10 : 1, r = v.current, i = x[r];
							O(i + a * n * t, r, { commit: !0 });
						}
					}
				})
			})
		})
	});
});
Et.displayName = vt;
var [Dt, Ot] = St(vt, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
}), kt = R.forwardRef((e, t) => {
	let { min: n, max: r, dir: i, inverted: a, onSlideStart: o, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, f] = R.useState(null), p = D(t, (e) => f(e)), m = R.useRef(void 0), h = w(i), g = h === "ltr", _ = g && !a || !g && a;
	function v(e) {
		let t = m.current || d.getBoundingClientRect(), i = $t([0, t.width], _ ? [n, r] : [r, n]);
		return m.current = t, i(e - t.left);
	}
	return /* @__PURE__ */ U(Dt, {
		scope: e.__scopeSlider,
		startEdge: _ ? "left" : "right",
		endEdge: _ ? "right" : "left",
		direction: _ ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ U(jt, {
			dir: h,
			"data-orientation": "horizontal",
			...u,
			ref: p,
			style: {
				...u.style,
				"--radix-slider-thumb-transform": "translateX(-50%)"
			},
			onSlideStart: (e) => {
				let t = v(e.clientX);
				o?.(t);
			},
			onSlideMove: (e) => {
				let t = v(e.clientX);
				s?.(t);
			},
			onSlideEnd: () => {
				m.current = void 0, c?.();
			},
			onStepKeyDown: (e) => {
				let t = _t[_ ? "from-left" : "from-right"].includes(e.key);
				l?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}), At = R.forwardRef((e, t) => {
	let { min: n, max: r, inverted: i, onSlideStart: a, onSlideMove: o, onSlideEnd: s, onStepKeyDown: c, ...l } = e, u = R.useRef(null), d = D(t, u), f = R.useRef(void 0), p = !i;
	function m(e) {
		let t = f.current || u.current.getBoundingClientRect(), i = $t([0, t.height], p ? [r, n] : [n, r]);
		return f.current = t, i(e - t.top);
	}
	return /* @__PURE__ */ U(Dt, {
		scope: e.__scopeSlider,
		startEdge: p ? "bottom" : "top",
		endEdge: p ? "top" : "bottom",
		size: "height",
		direction: p ? 1 : -1,
		children: /* @__PURE__ */ U(jt, {
			"data-orientation": "vertical",
			...l,
			ref: d,
			style: {
				...l.style,
				"--radix-slider-thumb-transform": "translateY(50%)"
			},
			onSlideStart: (e) => {
				let t = m(e.clientY);
				a?.(t);
			},
			onSlideMove: (e) => {
				let t = m(e.clientY);
				o?.(t);
			},
			onSlideEnd: () => {
				f.current = void 0, s?.();
			},
			onStepKeyDown: (e) => {
				let t = _t[p ? "from-bottom" : "from-top"].includes(e.key);
				c?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}), jt = R.forwardRef((e, t) => {
	let { __scopeSlider: n, onSlideStart: r, onSlideMove: i, onSlideEnd: a, onHomeKeyDown: o, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = Tt(vt, n);
	return /* @__PURE__ */ U(O.span, {
		...l,
		ref: t,
		onKeyDown: T(e.onKeyDown, (e) => {
			e.key === "Home" ? (o(e), e.preventDefault()) : e.key === "End" ? (s(e), e.preventDefault()) : ht.concat(gt).includes(e.key) && (c(e), e.preventDefault());
		}),
		onPointerDown: T(e.onPointerDown, (e) => {
			let t = e.target;
			t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus({
				preventScroll: !0,
				focusVisible: !1
			}) : r(e);
		}),
		onPointerMove: T(e.onPointerMove, (e) => {
			e.target.hasPointerCapture(e.pointerId) && i(e);
		}),
		onPointerUp: T(e.onPointerUp, (e) => {
			let t = e.target;
			t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e));
		})
	});
}), Mt = "SliderTrack", Nt = R.forwardRef((e, t) => {
	let { __scopeSlider: n, ...r } = e, i = Tt(Mt, n);
	return /* @__PURE__ */ U(O.span, {
		"data-disabled": i.disabled ? "" : void 0,
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
});
Nt.displayName = Mt;
var Pt = "SliderRange", Ft = R.forwardRef((e, t) => {
	let { __scopeSlider: n, ...r } = e, i = Tt(Pt, n), a = Ot(Pt, n), o = D(t, R.useRef(null)), s = i.values.length, c = i.values.map((e) => qt(e, i.min, i.max)), l = s > 1 ? Math.min(...c) : 0, u = 100 - Math.max(...c);
	return /* @__PURE__ */ U(O.span, {
		"data-orientation": i.orientation,
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: o,
		style: {
			...e.style,
			[a.startEdge]: l + "%",
			[a.endEdge]: u + "%"
		}
	});
});
Ft.displayName = Pt;
var It = "SliderThumb", [Lt, Rt] = St(It), zt = "SliderThumbProvider";
function Bt(e) {
	let { __scopeSlider: t, name: n, children: r, internal_do_not_use_render: i } = e, a = Tt(zt, t), o = bt(t), [s, l] = R.useState(null), u = R.useMemo(() => s ? o().findIndex((e) => e.ref.current === s) : -1, [o, s]), d = c(s), f = s ? !!a.form || !!s.closest("form") : !0, p = a.values[u], m = n ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), h = p === void 0 ? 0 : qt(p, a.min, a.max);
	R.useEffect(() => {
		if (s) return a.thumbs.add(s), () => {
			a.thumbs.delete(s);
		};
	}, [s, a.thumbs]);
	let g = {
		value: p,
		name: m,
		form: a.form,
		isFormControl: f,
		index: u,
		thumb: s,
		onThumbChange: l,
		percent: h,
		size: d
	};
	return /* @__PURE__ */ U(Lt, {
		scope: t,
		...g,
		children: nn(i) ? i(g) : r
	});
}
Bt.displayName = zt;
var Vt = "SliderThumbTrigger", Ht = R.forwardRef((e, t) => {
	let { __scopeSlider: n, ...r } = e, i = Tt(Vt, n), a = Ot(Vt, n), { index: o, value: s, percent: c, size: l, onThumbChange: u } = Rt(Vt, n), d = D(t, (e) => u(e)), f = Jt(o, i.values.length), p = l?.[a.size], m = p ? Xt(p, c, a.direction) : 0;
	return /* @__PURE__ */ U("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[a.startEdge]: `calc(${c}% + ${m}px)`
		},
		children: /* @__PURE__ */ U(yt.ItemSlot, {
			scope: n,
			children: /* @__PURE__ */ U(O.span, {
				role: "slider",
				"aria-label": e["aria-label"] || f,
				"aria-valuemin": i.min,
				"aria-valuenow": s,
				"aria-valuemax": i.max,
				"aria-orientation": i.orientation,
				"data-orientation": i.orientation,
				"data-disabled": i.disabled ? "" : void 0,
				tabIndex: i.disabled ? void 0 : 0,
				...r,
				ref: d,
				style: s === void 0 ? { display: "none" } : e.style,
				onFocus: T(e.onFocus, () => {
					i.valueIndexToChangeRef.current = o;
				})
			})
		})
	});
});
Ht.displayName = Vt;
var Ut = R.forwardRef((e, t) => {
	let { __scopeSlider: n, name: r, ...i } = e;
	return /* @__PURE__ */ U(Bt, {
		__scopeSlider: n,
		name: r,
		internal_do_not_use_render: ({ index: e, isFormControl: r }) => /* @__PURE__ */ W(le, { children: [/* @__PURE__ */ U(Ht, {
			...i,
			ref: t,
			__scopeSlider: n
		}), r ? /* @__PURE__ */ U(Gt, { __scopeSlider: n }, e) : null] })
	});
});
Ut.displayName = It;
var Wt = "SliderBubbleInput", Gt = R.forwardRef(({ __scopeSlider: e, ...t }, n) => {
	let { value: r, name: i, form: a } = Rt(Wt, e), o = R.useRef(null), s = D(o, n), c = m(r);
	return R.useEffect(() => {
		let e = o.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (c !== r && n) {
			let t = new Event("input", { bubbles: !0 });
			n.call(e, r), e.dispatchEvent(t);
		}
	}, [c, r]), /* @__PURE__ */ U(O.input, {
		style: { display: "none" },
		name: i,
		form: a,
		...t,
		ref: s,
		defaultValue: r
	});
});
Gt.displayName = Wt;
function Kt(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
function qt(e, t, n) {
	return ne(100 / (n - t) * (e - t), [0, 100]);
}
function Jt(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
function Yt(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
function Xt(e, t, n) {
	let r = e / 2;
	return (r - $t([0, 50], [0, r])(t) * n) * n;
}
function Zt(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function Qt(e, t) {
	if (t > 0) {
		let n = Zt(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
function $t(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function en(e) {
	if (!Number.isFinite(e)) return 0;
	let t = e.toString();
	if (t.includes("e")) {
		let [e, n] = t.split("e"), r = e.split(".")[1] || "", i = Number(n);
		return Math.max(0, r.length - i);
	}
	let n = t.split(".")[1];
	return n ? n.length : 0;
}
function tn(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
function nn(e) {
	return typeof e == "function";
}
//#endregion
//#region src/components/ui/slider.tsx
var rn = R.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ W(Et, {
	ref: r,
	className: e("relative flex w-full touch-none select-none items-center", t),
	"data-sdk-ui": "slider",
	"data-slot": "slider",
	...n,
	children: [/* @__PURE__ */ U(Nt, {
		className: "relative h-2 w-full grow overflow-hidden rounded-full bg-[var(--sdk-color-surface-panel-muted)]",
		"data-slot": "slider-track",
		children: /* @__PURE__ */ U(Ft, {
			className: "absolute h-full bg-[var(--sdk-color-brand-primary)]",
			"data-slot": "slider-range"
		})
	}), /* @__PURE__ */ U(Ut, {
		className: "block h-4 w-4 rounded-full border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] shadow-[var(--sdk-shadow-sm)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sdk-color-surface-canvas)] disabled:pointer-events-none disabled:opacity-50",
		"data-slot": "slider-thumb"
	})]
}));
rn.displayName = "Slider";
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-switch@1.3._e2733ce798c515ddaa32f3c3108b1e2f/node_modules/@radix-ui/react-switch/dist/index.mjs
var an = "Switch", [on, sn] = C(an), [cn, ln] = on(an);
function un(e) {
	let { __scopeSwitch: t, checked: n, children: r, defaultChecked: i, disabled: a, form: o, name: s, onCheckedChange: c, required: l, value: u = "on", internal_do_not_use_render: f } = e, [p, m] = d({
		prop: n,
		defaultProp: i ?? !1,
		onChange: c,
		caller: an
	}), [h, g] = R.useState(null), [_, v] = R.useState(null), y = {
		checked: p,
		setChecked: m,
		disabled: a,
		control: h,
		setControl: g,
		name: s,
		form: o,
		value: u,
		hasConsumerStoppedPropagationRef: R.useRef(!1),
		required: l,
		defaultChecked: i,
		isFormControl: h ? !!o || !!h.closest("form") : !0,
		bubbleInput: _,
		setBubbleInput: v
	};
	return /* @__PURE__ */ U(cn, {
		scope: t,
		...y,
		children: vn(f) ? f(y) : r
	});
}
var dn = "SwitchTrigger", fn = R.forwardRef(({ __scopeSwitch: e, onClick: t, ...n }, r) => {
	let { value: i, disabled: a, checked: o, required: s, setControl: c, setChecked: l, hasConsumerStoppedPropagationRef: u, isFormControl: d, bubbleInput: f } = ln(dn, e), p = D(r, c);
	return /* @__PURE__ */ U(O.button, {
		type: "button",
		role: "switch",
		"aria-checked": o,
		"aria-required": s,
		"data-state": yn(o),
		"data-disabled": a ? "" : void 0,
		disabled: a,
		value: i,
		...n,
		ref: p,
		onClick: T(t, (e) => {
			l((e) => !e), f && d && (u.current = e.isPropagationStopped(), u.current || e.stopPropagation());
		})
	});
});
fn.displayName = dn;
var pn = R.forwardRef((e, t) => {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ U(un, {
		__scopeSwitch: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ W(le, { children: [/* @__PURE__ */ U(fn, {
			...d,
			ref: t,
			__scopeSwitch: n
		}), e && /* @__PURE__ */ U(_n, { __scopeSwitch: n })] })
	});
});
pn.displayName = an;
var mn = "SwitchThumb", hn = R.forwardRef((e, t) => {
	let { __scopeSwitch: n, ...r } = e, i = ln(mn, n);
	return /* @__PURE__ */ U(O.span, {
		"data-state": yn(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
hn.displayName = mn;
var gn = "SwitchBubbleInput", _n = R.forwardRef(({ __scopeSwitch: e, ...t }, n) => {
	let { control: r, hasConsumerStoppedPropagationRef: i, checked: a, defaultChecked: o, required: s, disabled: l, name: u, value: d, form: f, bubbleInput: p, setBubbleInput: h } = ln(gn, e), g = D(n, h), _ = m(a), v = c(r);
	R.useEffect(() => {
		let e = p;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !i.current;
		if (_ !== a && n) {
			let t = new Event("click", { bubbles: r });
			n.call(e, a), e.dispatchEvent(t);
		}
	}, [
		p,
		_,
		a,
		i
	]);
	let y = R.useRef(a);
	return /* @__PURE__ */ U(O.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: o ?? y.current,
		required: s,
		disabled: l,
		name: u,
		value: d,
		form: f,
		...t,
		tabIndex: -1,
		ref: g,
		style: {
			...t.style,
			...v,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
_n.displayName = gn;
function vn(e) {
	return typeof e == "function";
}
function yn(e) {
	return e ? "checked" : "unchecked";
}
//#endregion
//#region src/components/ui/switch.tsx
var bn = R.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ U(pn, {
	ref: r,
	className: e("peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent bg-[var(--sdk-color-border-strong)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)] data-[state=checked]:bg-[var(--sdk-color-brand-primary)] disabled:cursor-not-allowed disabled:opacity-60", t),
	"data-sdk-ui": "switch",
	"data-slot": "switch",
	...n,
	children: /* @__PURE__ */ U(hn, {
		className: "pointer-events-none block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow-lg transition-transform data-[state=checked]:translate-x-5",
		"data-slot": "switch-thumb"
	})
}));
bn.displayName = "Switch";
//#endregion
//#region src/components/ui/textarea.tsx
var xn = R.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ U("textarea", {
	ref: r,
	className: e("flex min-h-24 w-full rounded-[var(--sdk-radius-field)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] px-3 py-2 text-sm text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-sm)] outline-none ring-offset-[var(--sdk-color-surface-canvas)] placeholder:text-[var(--sdk-color-text-muted)] focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)] disabled:cursor-not-allowed disabled:opacity-60", t),
	"data-sdk-ui": "textarea",
	"data-slot": "textarea",
	...n
}));
xn.displayName = "Textarea";
//#endregion
//#region src/components/ui/data-entry/combobox.tsx
var Sn = R.forwardRef(({ className: n, clearable: r = !1, defaultValue: i, disabled: a, emptyText: o = "No options found.", onValueChange: c, options: l, placeholder: u = "Select option", searchPlaceholder: d = "Search option...", slotProps: f, value: p, ...m }, h) => {
	let [g, v] = R.useState(!1), [y, b] = _({
		defaultValue: i ?? "",
		onChange: c,
		value: p
	}), x = l.find((e) => e.value === y);
	function C(e) {
		b(e);
	}
	function w(e) {
		e.preventDefault(), e.stopPropagation(), C(""), v(!1);
	}
	return /* @__PURE__ */ W(te, {
		modal: !0,
		open: g,
		onOpenChange: v,
		children: [/* @__PURE__ */ W("div", {
			...t({
				className: "relative",
				"data-sdk-ui": "combobox",
				"data-slot": "combobox"
			}, f?.root),
			children: [
				/* @__PURE__ */ U(F, {
					asChild: !0,
					children: /* @__PURE__ */ U("button", {
						ref: h,
						"aria-expanded": g,
						"aria-label": x?.label ?? u,
						className: e(L, r && y ? "pr-18" : "pr-10", "justify-between gap-2 text-left", n),
						"data-sdk-ui": "combobox-trigger",
						"data-slot": "combobox-trigger",
						disabled: a,
						role: "combobox",
						type: "button",
						...m,
						children: /* @__PURE__ */ U("span", {
							className: e("truncate", !x && "text-[var(--sdk-color-text-muted)]"),
							"data-slot": "combobox-value",
							children: x?.label ?? u
						})
					})
				}),
				r && y ? /* @__PURE__ */ U("button", {
					"aria-label": "Clear selection",
					...t({
						className: "absolute right-8 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-[var(--sdk-radius-control)] text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)]",
						"data-sdk-ui": "combobox-clear-button",
						"data-slot": "combobox-clear-button"
					}, f?.clearButton),
					disabled: a,
					onClick: (e) => {
						f?.clearButton?.onClick?.(e), e.defaultPrevented || w(e);
					},
					type: "button",
					children: /* @__PURE__ */ U(S, { className: "h-4 w-4" })
				}) : null,
				/* @__PURE__ */ U("span", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute right-3 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center text-[var(--sdk-color-text-muted)]",
					"data-slot": "combobox-indicator",
					children: /* @__PURE__ */ U(me, { className: "h-4 w-4" })
				})
			]
		}), /* @__PURE__ */ U(I, {
			align: "start",
			...t({
				className: "w-[var(--radix-popover-trigger-width)] p-0",
				"data-sdk-ui": "combobox-content",
				"data-slot": "combobox-content",
				sideOffset: 6
			}, f?.content),
			children: /* @__PURE__ */ W(N, { children: [/* @__PURE__ */ U(k, { ...t({
				"data-sdk-ui": "combobox-input",
				"data-slot": "combobox-input",
				placeholder: d
			}, f?.input) }), /* @__PURE__ */ W(M, {
				...t({
					"data-sdk-ui": "combobox-list",
					"data-slot": "combobox-list"
				}, f?.list),
				children: [/* @__PURE__ */ U(j, {
					...t({
						"data-sdk-ui": "combobox-empty",
						"data-slot": "combobox-empty"
					}, f?.empty),
					children: o
				}), /* @__PURE__ */ U(ee, {
					...t({
						"data-sdk-ui": "combobox-group",
						"data-slot": "combobox-group"
					}, f?.group),
					children: l.map((t) => /* @__PURE__ */ W(A, {
						disabled: t.disabled,
						keywords: t.keywords,
						onSelect: () => {
							C(t.value), v(!1);
						},
						value: t.value,
						children: [/* @__PURE__ */ U(s, { className: e("h-4 w-4", y === t.value ? "opacity-100" : "opacity-0") }), /* @__PURE__ */ W("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ U("div", {
								className: "truncate",
								children: t.label
							}), t.description ? /* @__PURE__ */ U("div", {
								className: "truncate text-xs text-[var(--sdk-color-text-muted)]",
								children: t.description
							}) : null]
						})]
					}, t.value))
				})]
			})] })
		})]
	});
});
Sn.displayName = "Combobox";
//#endregion
//#region src/components/ui/data-entry/date-input-interaction.ts
var Cn = new Set(["date", "datetime-local"]);
function wn(e) {
	return !!(e && Cn.has(e.type ?? "") && !e.disabled && !e.readOnly && typeof e.showPicker == "function");
}
function Tn(e) {
	if (!wn(e)) return !1;
	try {
		return e.showPicker(), !0;
	} catch {
		return !1;
	}
}
function En(e) {
	return e === "Enter" || e === " " || e === "ArrowDown";
}
//#endregion
//#region src/components/ui/data-entry/date-input.tsx
var Dn = R.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ U("button", {
	className: e("absolute right-1.5 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[var(--sdk-radius-control)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)]", t),
	"data-sdk-ui": "date-input-calendar-button",
	ref: r,
	type: "button",
	...n,
	children: /* @__PURE__ */ U(fe, { className: "h-4 w-4" })
}));
Dn.displayName = "DateInputCalendarButton";
var On = R.forwardRef(({ calendarLabel: n, className: r, onClick: i, onKeyDown: a, onPointerDown: o, slotProps: s, type: c, ...l }, u) => {
	let d = R.useRef(null), f = R.useRef(!1);
	R.useImperativeHandle(u, () => d.current, []);
	function p(e) {
		if (d.current = e, typeof u == "function") {
			u(e);
			return;
		}
		u && (u.current = e);
	}
	function m(e) {
		o?.(e), f.current = !1, !(e.defaultPrevented || e.button !== 0) && (f.current = Tn(e.currentTarget));
	}
	function h(e) {
		i?.(e), !e.defaultPrevented && !f.current && Tn(e.currentTarget), f.current = !1;
	}
	function g(e) {
		a?.(e), !(e.defaultPrevented || !En(e.key)) && Tn(e.currentTarget) && e.preventDefault();
	}
	function _(e) {
		e.preventDefault();
	}
	function v() {
		let e = d.current;
		!e || e.disabled || e.readOnly || (e.focus({ preventScroll: !0 }), Tn(e) || e.click());
	}
	return /* @__PURE__ */ W("div", {
		...t({
			className: "group relative",
			"data-sdk-ui": c === "datetime-local" ? "date-time-input" : "date-input",
			"data-slot": "date-input"
		}, s?.root),
		children: [/* @__PURE__ */ U("input", {
			...l,
			className: e(L, "rounded-[var(--sdk-radius-field)]", "cursor-pointer pr-14 [appearance:none] [color-scheme:light] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-14 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 dark:[color-scheme:dark]", r),
			"data-sdk-ui": c === "datetime-local" ? "date-time-input-field" : "date-input-field",
			onClick: h,
			onKeyDown: g,
			onPointerDown: m,
			ref: p,
			type: c
		}), /* @__PURE__ */ U(Dn, {
			...t({}, s?.calendarButton),
			"aria-label": n ?? (c === "datetime-local" ? "Open date and time picker" : "Open calendar"),
			onClick: (e) => {
				s?.calendarButton?.onClick?.(e), e.defaultPrevented || v();
			},
			onPointerDown: (e) => {
				s?.calendarButton?.onPointerDown?.(e), e.defaultPrevented || _(e);
			}
		})]
	});
});
On.displayName = "TemporalInput";
var kn = R.forwardRef((e, t) => /* @__PURE__ */ U(On, {
	...e,
	ref: t,
	type: "date"
}));
kn.displayName = "DateInput";
var An = R.forwardRef((e, t) => /* @__PURE__ */ U(On, {
	...e,
	ref: t,
	type: "datetime-local"
}));
An.displayName = "DateTimeInput";
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/tzName/index.js
function jn(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/tzOffset/index.js
var Mn = {}, Nn = {};
function Pn(e, t) {
	try {
		let n = (Mn[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in Nn ? Nn[n] : In(n, n.split(":"));
	} catch {
		if (e in Nn) return Nn[e];
		let t = e?.match(Fn);
		return t ? In(e, t.slice(1)) : NaN;
	}
}
var Fn = /([+-]\d\d):?(\d\d)?/;
function In(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return Nn[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/date/mini.js
var Ln = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Pn(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), Vn(this, e)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -Pn(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), zn(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Rn = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!Rn.test(e)) return;
	let t = e.replace(Rn, "$1UTC");
	Ln.prototype[t] && (e.startsWith("get") ? Ln.prototype[e] = function() {
		return this.internal[t]();
	} : (Ln.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), Bn(this), +this;
	}, Ln.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), zn(this), +this;
	}));
});
function zn(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Pn(e.timeZone, e) * 60));
}
function Bn(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Vn(e);
}
function Vn(e, t) {
	let n = Array.isArray(t) ? Hn(t) : +e.internal, r = Pn(e.timeZone, e), i = r > 0 ? Math.floor(r) : Math.ceil(r), a = /* @__PURE__ */ new Date(+e);
	a.setUTCHours(a.getUTCHours() - 1);
	let o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), c = o - s, l = o;
	if (c && o !== i && Date.prototype.getHours.apply(e) !== (Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours())) {
		let t = /* @__PURE__ */ new Date(+e), n = o - i;
		n && t.setUTCMinutes(t.getUTCMinutes() + n);
		let r = Pn(e.timeZone, t);
		(r > 0 ? Math.floor(r) : Math.ceil(r)) === i && (l = s);
	}
	let u = l - i;
	u && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
	let d = /* @__PURE__ */ new Date(+e);
	d.setUTCSeconds(0);
	let f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, p = Math.round(-(Pn(e.timeZone, e) * 60)) % 60;
	(p || f) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + p + f);
	let m = Pn(e.timeZone, e), h = m > 0 ? Math.floor(m) : Math.ceil(m), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, _ = h !== i, v = g - u, y = h - i, b = n - h * 60 * 1e3, x = y > 0 && Un(e) - n === y * 60 * 1e3 && Un(e, b) !== n;
	if (_ && v && !x) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + v);
		let t = Pn(e.timeZone, e), n = h - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && v < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n);
	}
	zn(e);
	let S = (t ? n : n + p * 1e3) - +e.internal;
	S && Math.abs(S) < 1800 * 1e3 && (Date.prototype.setTime.call(e, +e + S), zn(e));
}
function Hn(e) {
	return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function Un(e, t) {
	let n = new Date(t ?? +e);
	return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-Pn(e.timeZone, n) * 60)), +n;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/date/index.js
var G = class e extends Ln {
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	toISOString() {
		let [e, t, n] = this.tzComponents(), r = `${e}${t}:${n}`;
		return this.internal.toISOString().slice(0, -1) + r;
	}
	toString() {
		return `${this.toDateString()} ${this.toTimeString()}`;
	}
	toDateString() {
		let [e, t, n, r] = this.internal.toUTCString().split(" ");
		return `${e?.slice(0, -1)} ${n} ${t} ${r}`;
	}
	toTimeString() {
		let e = this.internal.toUTCString().split(" ")[4], [t, n, r] = this.tzComponents();
		return `${e} GMT${t}${n}${r} (${jn(this.timeZone, this)})`;
	}
	toLocaleString(e, t) {
		return Date.prototype.toLocaleString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleDateString(e, t) {
		return Date.prototype.toLocaleDateString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleTimeString(e, t) {
		return Date.prototype.toLocaleTimeString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	tzComponents() {
		let e = this.getTimezoneOffset();
		return [
			e > 0 ? "-" : "+",
			String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"),
			String(Math.abs(e) % 60).padStart(2, "0")
		];
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Wn = 365.2425, Gn = 6048e5, Kn = 864e5, qn = 3600 * 24;
qn * 7, qn * Wn / 12 * 3;
var Jn = Symbol.for("constructDateFrom");
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constructFrom.js
function K(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && Jn in e ? e[Jn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/toDate.js
function q(e, t) {
	return K(t || e, e);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addDays.js
function Yn(e, t, n) {
	let r = q(e, n?.in);
	return isNaN(t) ? K(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addMonths.js
function Xn(e, t, n) {
	let r = q(e, n?.in);
	if (isNaN(t)) return K(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = K(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/defaultOptions.js
var Zn = {};
function Qn() {
	return Zn;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeek.js
function $n(e, t) {
	let n = Qn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = q(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeek.js
function er(e, t) {
	return $n(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeekYear.js
function tr(e, t) {
	let n = q(e, t?.in), r = n.getFullYear(), i = K(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = er(i), o = K(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = er(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function nr(e) {
	let t = q(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeDates.js
function rr(e, ...t) {
	let n = K.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfDay.js
function ir(e, t) {
	let n = q(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarDays.js
function ar(e, t, n) {
	let [r, i] = rr(n?.in, e, t), a = ir(r), o = ir(i), s = +a - nr(a), c = +o - nr(o);
	return Math.round((s - c) / Kn);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeekYear.js
function or(e, t) {
	let n = tr(e, t), r = K(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), er(r);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addWeeks.js
function sr(e, t, n) {
	return Yn(e, t * 7, n);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addYears.js
function cr(e, t, n) {
	return Xn(e, t * 12, n);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/max.js
function lr(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = K.bind(null, e));
		let t = q(e, r);
		(!n || n < t || isNaN(+t)) && (n = t);
	}), K(r, n || NaN);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/min.js
function ur(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = K.bind(null, e));
		let t = q(e, r);
		(!n || n > t || isNaN(+t)) && (n = t);
	}), K(r, n || NaN);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isSameDay.js
function dr(e, t, n) {
	let [r, i] = rr(n?.in, e, t);
	return +ir(r) == +ir(i);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isDate.js
function fr(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isValid.js
function pr(e) {
	return !(!fr(e) && typeof e != "number" || isNaN(+q(e)));
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarMonths.js
function mr(e, t, n) {
	let [r, i] = rr(n?.in, e, t), a = r.getFullYear() - i.getFullYear(), o = r.getMonth() - i.getMonth();
	return a * 12 + o;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfMonth.js
function hr(e, t) {
	let n = q(e, t?.in), r = n.getMonth();
	return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeInterval.js
function gr(e, t) {
	let [n, r] = rr(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/eachMonthOfInterval.js
function _r(e, t) {
	let { start: n, end: r } = gr(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setDate(1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(K(n, o)), o.setMonth(o.getMonth() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfMonth.js
function vr(e, t) {
	let n = q(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfYear.js
function yr(e, t) {
	let n = q(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfYear.js
function br(e, t) {
	let n = q(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/eachYearOfInterval.js
function xr(e, t) {
	let { start: n, end: r } = gr(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setMonth(0, 1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(K(n, o)), o.setFullYear(o.getFullYear() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfWeek.js
function Sr(e, t) {
	let n = Qn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = q(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfISOWeek.js
function Cr(e, t) {
	return Sr(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var wr = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, Tr = (e, t, n) => {
	let r, i = wr[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Er(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Dr = {
	date: Er({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Er({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Er({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Or = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, kr = (e, t, n, r) => Or[e];
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function Ar(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var jr = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: Ar({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: Ar({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: Ar({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: Ar({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: Ar({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function Mr(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Pr(s, (e) => e.test(o)) : Nr(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Nr(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Pr(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Fr(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US.js
var Ir = {
	code: "en-US",
	formatDistance: Tr,
	formatLong: Dr,
	formatRelative: kr,
	localize: jr,
	match: {
		ordinalNumber: Fr({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: Mr({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: Mr({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: Mr({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: Mr({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: Mr({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDayOfYear.js
function Lr(e, t) {
	let n = q(e, t?.in);
	return ar(n, br(n)) + 1;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeek.js
function Rr(e, t) {
	let n = q(e, t?.in), r = er(n) - +or(n);
	return Math.round(r / Gn) + 1;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeekYear.js
function zr(e, t) {
	let n = q(e, t?.in), r = n.getFullYear(), i = Qn(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = K(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = $n(o, t), c = K(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = $n(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeekYear.js
function Br(e, t) {
	let n = Qn(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = zr(e, t), a = K(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), $n(a, t);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeek.js
function Vr(e, t) {
	let n = q(e, t?.in), r = $n(n, t) - +Br(n, t);
	return Math.round(r / Gn) + 1;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/addLeadingZeros.js
function J(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/lightFormatters.js
var Hr = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return J(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : J(n + 1, 2);
	},
	d(e, t) {
		return J(e.getDate(), t.length);
	},
	a(e, t) {
		let n = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.toUpperCase();
			case "aaa": return n;
			case "aaaaa": return n[0];
			default: return n === "am" ? "a.m." : "p.m.";
		}
	},
	h(e, t) {
		return J(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return J(e.getHours(), t.length);
	},
	m(e, t) {
		return J(e.getMinutes(), t.length);
	},
	s(e, t) {
		return J(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return J(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, Ur = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Wr = {
	G: function(e, t, n) {
		let r = e.getFullYear() > 0 ? 1 : 0;
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(r, { width: "abbreviated" });
			case "GGGGG": return n.era(r, { width: "narrow" });
			default: return n.era(r, { width: "wide" });
		}
	},
	y: function(e, t, n) {
		if (t === "yo") {
			let t = e.getFullYear(), r = t > 0 ? t : 1 - t;
			return n.ordinalNumber(r, { unit: "year" });
		}
		return Hr.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = zr(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? J(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : J(a, t.length);
	},
	R: function(e, t) {
		return J(tr(e), t.length);
	},
	u: function(e, t) {
		return J(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return J(r, 2);
			case "Qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "QQQ": return n.quarter(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "q": return String(r);
			case "qq": return J(r, 2);
			case "qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "qqq": return n.quarter(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "M":
			case "MM": return Hr.M(e, t);
			case "Mo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "MMM": return n.month(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return n.month(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "L": return String(r + 1);
			case "LL": return J(r + 1, 2);
			case "Lo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "LLL": return n.month(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return n.month(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(e, t, n, r) {
		let i = Vr(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : J(i, t.length);
	},
	I: function(e, t, n) {
		let r = Rr(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : J(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Hr.d(e, t);
	},
	D: function(e, t, n) {
		let r = Lr(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : J(r, t.length);
	},
	E: function(e, t, n) {
		let r = e.getDay();
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "e": return String(a);
			case "ee": return J(a, 2);
			case "eo": return n.ordinalNumber(a, { unit: "day" });
			case "eee": return n.day(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return n.day(i, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(i, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "c": return String(a);
			case "cc": return J(a, t.length);
			case "co": return n.ordinalNumber(a, { unit: "day" });
			case "ccc": return n.day(i, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return n.day(i, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(i, {
				width: "short",
				context: "standalone"
			});
			default: return n.day(i, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(e, t, n) {
		let r = e.getDay(), i = r === 0 ? 7 : r;
		switch (t) {
			case "i": return String(i);
			case "ii": return J(i, t.length);
			case "io": return n.ordinalNumber(i, { unit: "day" });
			case "iii": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(e, t, n) {
		let r = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return n.dayPeriod(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r === 12 ? Ur.noon : r === 0 ? Ur.midnight : r / 12 >= 1 ? "pm" : "am", t) {
			case "b":
			case "bb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r >= 17 ? Ur.evening : r >= 12 ? Ur.afternoon : r >= 4 ? Ur.morning : Ur.night, t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(e, t, n) {
		if (t === "ho") {
			let t = e.getHours() % 12;
			return t === 0 && (t = 12), n.ordinalNumber(t, { unit: "hour" });
		}
		return Hr.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Hr.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : J(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : J(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Hr.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Hr.s(e, t);
	},
	S: function(e, t) {
		return Hr.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Kr(r);
			case "XXXX":
			case "XX": return qr(r);
			default: return qr(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Kr(r);
			case "xxxx":
			case "xx": return qr(r);
			default: return qr(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Gr(r, ":");
			default: return "GMT" + qr(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Gr(r, ":");
			default: return "GMT" + qr(r, ":");
		}
	},
	t: function(e, t, n) {
		return J(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return J(+e, t.length);
	}
};
function Gr(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + J(a, 2);
}
function Kr(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + J(Math.abs(e) / 60, 2) : qr(e, t);
}
function qr(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = J(Math.trunc(r / 60), 2), a = J(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/longFormatters.js
var Jr = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, Yr = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Xr = {
	p: Yr,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Jr(e, t);
		let a;
		switch (r) {
			case "P":
				a = t.dateTime({ width: "short" });
				break;
			case "PP":
				a = t.dateTime({ width: "medium" });
				break;
			case "PPP":
				a = t.dateTime({ width: "long" });
				break;
			default:
				a = t.dateTime({ width: "full" });
				break;
		}
		return a.replace("{{date}}", Jr(r, t)).replace("{{time}}", Yr(i, t));
	}
}, Zr = /^D+$/, Qr = /^Y+$/, $r = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function ei(e) {
	return Zr.test(e);
}
function ti(e) {
	return Qr.test(e);
}
function ni(e, t, n) {
	let r = ri(e, t, n);
	if (console.warn(r), $r.includes(e)) throw RangeError(r);
}
function ri(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/format.js
var ii = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ai = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, oi = /^'([^]*?)'?$/, si = /''/g, ci = /[a-zA-Z]/;
function li(e, t, n) {
	let r = Qn(), i = n?.locale ?? r.locale ?? Ir, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = q(e, n?.in);
	if (!pr(s)) throw RangeError("Invalid time value");
	let c = t.match(ai).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Xr[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(ii).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: ui(e)
		};
		if (Wr[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(ci)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
		return {
			isToken: !1,
			value: e
		};
	});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = {
		firstWeekContainsDate: a,
		weekStartsOn: o,
		locale: i
	};
	return c.map((r) => {
		if (!r.isToken) return r.value;
		let a = r.value;
		(!n?.useAdditionalWeekYearTokens && ti(a) || !n?.useAdditionalDayOfYearTokens && ei(a)) && ni(a, t, String(e));
		let o = Wr[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function ui(e) {
	let t = e.match(oi);
	return t ? t[1].replace(si, "'") : e;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDaysInMonth.js
function di(e, t) {
	let n = q(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = K(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getMonth.js
function fi(e, t) {
	return q(e, t?.in).getMonth();
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getYear.js
function pi(e, t) {
	return q(e, t?.in).getFullYear();
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isAfter.js
function mi(e, t) {
	return +q(e) > +q(t);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isBefore.js
function hi(e, t) {
	return +q(e) < +q(t);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isSameMonth.js
function gi(e, t, n) {
	let [r, i] = rr(n?.in, e, t);
	return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth();
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isSameYear.js
function _i(e, t, n) {
	let [r, i] = rr(n?.in, e, t);
	return r.getFullYear() === i.getFullYear();
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setMonth.js
function vi(e, t, n) {
	let r = q(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = K(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = di(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setYear.js
function yi(e, t, n) {
	let r = q(e, n?.in);
	return isNaN(+r) ? K(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
var bi = 5, xi = 4;
function Si(e, t) {
	let n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, i = t.addDays(e, -r + 1), a = t.addDays(i, bi * 7 - 1);
	return t.getMonth(e) === t.getMonth(a) ? bi : xi;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
function Ci(e, t) {
	let n = t.startOfMonth(e), r = n.getDay();
	return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
function wi(e, t) {
	let n = Ci(e, t), r = Si(e, t);
	return t.addDays(n, r * 7 - 1);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/locale/en-US.js
var Ti = {
	...Ir,
	labels: {
		labelDayButton: (e, t, n, r) => {
			let i;
			i = r && typeof r.format == "function" ? r.format.bind(r) : (e, t) => li(e, t, {
				locale: Ir,
				...n
			});
			let a = i(e, "PPPP");
			return t.today && (a = `Today, ${a}`), t.selected && (a = `${a}, selected`), a;
		},
		labelMonthDropdown: "Choose the Month",
		labelNext: "Go to the Next Month",
		labelPrevious: "Go to the Previous Month",
		labelWeekNumber: (e) => `Week ${e}`,
		labelYearDropdown: "Choose the Year",
		labelGrid: (e, t, n) => {
			let r;
			return r = n && typeof n.format == "function" ? n.format.bind(n) : (e, n) => li(e, n, {
				locale: Ir,
				...t
			}), r(e, "LLLL yyyy");
		},
		labelGridcell: (e, t, n, r) => {
			let i;
			i = r && typeof r.format == "function" ? r.format.bind(r) : (e, t) => li(e, t, {
				locale: Ir,
				...n
			});
			let a = i(e, "PPPP");
			return t?.today && (a = `Today, ${a}`), a;
		},
		labelNav: "Navigation bar",
		labelWeekNumberHeader: "Week Number",
		labelWeekday: (e, t, n) => {
			let r;
			return r = n && typeof n.format == "function" ? n.format.bind(n) : (e, n) => li(e, n, {
				locale: Ir,
				...t
			}), r(e, "cccc");
		}
	}
}, Ei = class e {
	constructor(e, t) {
		this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? G.tz(this.options.timeZone) : new this.Date(), this.newDate = (e, t, n) => this.overrides?.newDate ? this.overrides.newDate(e, t, n) : this.options.timeZone ? new G(e, t, n, this.options.timeZone) : new Date(e, t, n), this.addDays = (e, t) => this.overrides?.addDays ? this.overrides.addDays(e, t) : Yn(e, t), this.addMonths = (e, t) => this.overrides?.addMonths ? this.overrides.addMonths(e, t) : Xn(e, t), this.addWeeks = (e, t) => this.overrides?.addWeeks ? this.overrides.addWeeks(e, t) : sr(e, t), this.addYears = (e, t) => this.overrides?.addYears ? this.overrides.addYears(e, t) : cr(e, t), this.differenceInCalendarDays = (e, t) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(e, t) : ar(e, t), this.differenceInCalendarMonths = (e, t) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(e, t) : mr(e, t), this.eachMonthOfInterval = (e) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(e) : _r(e), this.eachYearOfInterval = (e) => {
			let t = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(e) : xr(e), n = new Set(t.map((e) => this.getYear(e)));
			if (n.size === t.length) return t;
			let r = [];
			return n.forEach((e) => {
				r.push(new Date(e, 0, 1));
			}), r;
		}, this.endOfBroadcastWeek = (e) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(e) : wi(e, this), this.endOfISOWeek = (e) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(e) : Cr(e), this.endOfMonth = (e) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(e) : hr(e), this.endOfWeek = (e, t) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(e, t) : Sr(e, this.options), this.endOfYear = (e) => this.overrides?.endOfYear ? this.overrides.endOfYear(e) : yr(e), this.format = (e, t, n) => {
			let r = this.overrides?.format ? this.overrides.format(e, t, this.options) : li(e, t, this.options);
			return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(r) : r;
		}, this.getISOWeek = (e) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(e) : Rr(e), this.getMonth = (e, t) => this.overrides?.getMonth ? this.overrides.getMonth(e, this.options) : fi(e, this.options), this.getYear = (e, t) => this.overrides?.getYear ? this.overrides.getYear(e, this.options) : pi(e, this.options), this.getWeek = (e, t) => this.overrides?.getWeek ? this.overrides.getWeek(e, this.options) : Vr(e, this.options), this.isAfter = (e, t) => this.overrides?.isAfter ? this.overrides.isAfter(e, t) : mi(e, t), this.isBefore = (e, t) => this.overrides?.isBefore ? this.overrides.isBefore(e, t) : hi(e, t), this.isDate = (e) => this.overrides?.isDate ? this.overrides.isDate(e) : fr(e), this.isSameDay = (e, t) => this.overrides?.isSameDay ? this.overrides.isSameDay(e, t) : dr(e, t), this.isSameMonth = (e, t) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(e, t) : gi(e, t), this.isSameYear = (e, t) => this.overrides?.isSameYear ? this.overrides.isSameYear(e, t) : _i(e, t), this.max = (e) => this.overrides?.max ? this.overrides.max(e) : lr(e), this.min = (e) => this.overrides?.min ? this.overrides.min(e) : ur(e), this.setMonth = (e, t) => this.overrides?.setMonth ? this.overrides.setMonth(e, t) : vi(e, t), this.setYear = (e, t) => this.overrides?.setYear ? this.overrides.setYear(e, t) : yi(e, t), this.startOfBroadcastWeek = (e, t) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(e, this) : Ci(e, this), this.startOfDay = (e) => this.overrides?.startOfDay ? this.overrides.startOfDay(e) : ir(e), this.startOfISOWeek = (e) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(e) : er(e), this.startOfMonth = (e) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(e) : vr(e), this.startOfWeek = (e, t) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(e, this.options) : $n(e, this.options), this.startOfYear = (e) => this.overrides?.startOfYear ? this.overrides.startOfYear(e) : br(e), this.options = {
			locale: Ti,
			...e
		}, this.overrides = t;
	}
	getDigitMap() {
		let { numerals: e = "latn" } = this.options, t = new Intl.NumberFormat("en-US", { numberingSystem: e }), n = {};
		for (let e = 0; e < 10; e++) n[e.toString()] = t.format(e);
		return n;
	}
	replaceDigits(e) {
		let t = this.getDigitMap();
		return e.replace(/\d/g, (e) => t[e] || e);
	}
	formatNumber(e) {
		return this.replaceDigits(e.toString());
	}
	getMonthYearOrder() {
		let t = this.options.locale?.code;
		return t && e.yearFirstLocales.has(t) ? "year-first" : "month-first";
	}
	formatMonthYear(t) {
		let { locale: n, timeZone: r, numerals: i } = this.options, a = n?.code;
		if (a && e.yearFirstLocales.has(a)) try {
			return new Intl.DateTimeFormat(a, {
				month: "long",
				year: "numeric",
				timeZone: r,
				numberingSystem: i
			}).format(t);
		} catch {}
		let o = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
		return this.format(t, o);
	}
};
Ei.yearFirstLocales = new Set([
	"eu",
	"hu",
	"ja",
	"ja-Hira",
	"ja-JP",
	"ko",
	"ko-KR",
	"lt",
	"lt-LT",
	"lv",
	"lv-LV",
	"mn",
	"mn-MN",
	"zh",
	"zh-CN",
	"zh-HK",
	"zh-TW"
]);
var Di = new Ei(), Oi = class {
	constructor(e, t, n = Di) {
		this.date = e, this.displayMonth = t, this.outside = !!(t && !n.isSameMonth(e, t)), this.dateLib = n, this.isoDate = n.format(e, "yyyy-MM-dd"), this.displayMonthId = n.format(t, "yyyy-MM"), this.dateMonthId = n.format(e, "yyyy-MM");
	}
	isEqualTo(e) {
		return this.dateLib.isSameDay(e.date, this.date) && this.dateLib.isSameMonth(e.displayMonth, this.displayMonth);
	}
}, ki = class {
	constructor(e, t) {
		this.date = e, this.weeks = t;
	}
}, Ai = class {
	constructor(e, t) {
		this.days = t, this.weekNumber = e;
	}
};
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Button.js
function ji(e) {
	return z.createElement("button", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
function Mi(e) {
	return z.createElement("span", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Chevron.js
function Ni(e) {
	let { size: t = 24, orientation: n = "left", className: r } = e;
	return z.createElement("svg", {
		className: r,
		width: t,
		height: t,
		viewBox: "0 0 24 24"
	}, n === "up" && z.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }), n === "down" && z.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }), n === "left" && z.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }), n === "right" && z.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" }));
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Day.js
function Pi(e) {
	let { day: t, modifiers: n, ...r } = e;
	return z.createElement("td", { ...r });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/DayButton.js
function Fi(e) {
	let { day: t, modifiers: n, ...r } = e, i = z.useRef(null);
	return z.useEffect(() => {
		n.focused && i.current?.focus();
	}, [n.focused]), z.createElement("button", {
		ref: i,
		...r
	});
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/UI.js
var Y;
(function(e) {
	e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(Y ||= {});
var X;
(function(e) {
	e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(X ||= {});
var Z;
(function(e) {
	e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Z ||= {});
var Q;
(function(e) {
	e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Q ||= {});
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Dropdown.js
function Ii(e) {
	let { options: t, className: n, components: r, classNames: i, ...a } = e, o = [i[Y.Dropdown], n].join(" "), s = t?.find(({ value: e }) => e === a.value);
	return z.createElement("span", {
		"data-disabled": a.disabled,
		className: i[Y.DropdownRoot]
	}, z.createElement(r.Select, {
		className: o,
		...a
	}, t?.map(({ value: e, label: t, disabled: n }) => z.createElement(r.Option, {
		key: e,
		value: e,
		disabled: n
	}, t))), z.createElement("span", {
		className: i[Y.CaptionLabel],
		"aria-hidden": !0
	}, s?.label, z.createElement(r.Chevron, {
		orientation: "down",
		size: 18,
		className: i[Y.Chevron]
	})));
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/DropdownNav.js
function Li(e) {
	return z.createElement("div", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Footer.js
function Ri(e) {
	return z.createElement("div", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Month.js
function zi(e) {
	let { calendarMonth: t, displayIndex: n, ...r } = e;
	return z.createElement("div", { ...r }, e.children);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/MonthCaption.js
function Bi(e) {
	let { calendarMonth: t, displayIndex: n, ...r } = e;
	return z.createElement("div", { ...r });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/MonthGrid.js
function Vi(e) {
	return z.createElement("table", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Months.js
function Hi(e) {
	return z.createElement("div", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/useDayPicker.js
var Ui = B(void 0);
function Wi() {
	let e = re(Ui);
	if (e === void 0) throw Error("useDayPicker() must be used within a custom component.");
	return e;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
function Gi(e) {
	let { components: t } = Wi();
	return z.createElement(t.Dropdown, { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Nav.js
function Ki(e) {
	let { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: i, ...a } = e, { components: o, classNames: s, labels: { labelPrevious: c, labelNext: l } } = Wi(), u = H((e) => {
		i && n?.(e);
	}, [i, n]), d = H((e) => {
		r && t?.(e);
	}, [r, t]);
	return z.createElement("nav", { ...a }, z.createElement(o.PreviousMonthButton, {
		type: "button",
		className: s[Y.PreviousMonthButton],
		tabIndex: r ? void 0 : -1,
		"aria-disabled": r ? void 0 : !0,
		"aria-label": c(r),
		onClick: d
	}, z.createElement(o.Chevron, {
		disabled: r ? void 0 : !0,
		className: s[Y.Chevron],
		orientation: "left"
	})), z.createElement(o.NextMonthButton, {
		type: "button",
		className: s[Y.NextMonthButton],
		tabIndex: i ? void 0 : -1,
		"aria-disabled": i ? void 0 : !0,
		"aria-label": l(i),
		onClick: u
	}, z.createElement(o.Chevron, {
		disabled: i ? void 0 : !0,
		orientation: "right",
		className: s[Y.Chevron]
	})));
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
function qi(e) {
	let { components: t } = Wi();
	return z.createElement(t.Button, { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Option.js
function Ji(e) {
	return z.createElement("option", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
function Yi(e) {
	let { components: t } = Wi();
	return z.createElement(t.Button, { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Root.js
function Xi(e) {
	let { rootRef: t, ...n } = e;
	return z.createElement("div", {
		...n,
		ref: t
	});
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Select.js
function Zi(e) {
	return z.createElement("select", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Week.js
function Qi(e) {
	let { week: t, ...n } = e;
	return z.createElement("tr", { ...n });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Weekday.js
function $i(e) {
	return z.createElement("th", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Weekdays.js
function ea(e) {
	return z.createElement("thead", { "aria-hidden": !0 }, z.createElement("tr", { ...e }));
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/WeekNumber.js
function ta(e) {
	let { week: t, ...n } = e;
	return z.createElement("th", { ...n });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
function na(e) {
	return z.createElement("th", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/Weeks.js
function ra(e) {
	return z.createElement("tbody", { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
function ia(e) {
	let { components: t } = Wi();
	return z.createElement(t.Dropdown, { ...e });
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/components/custom-components.js
var aa = /* @__PURE__ */ de({
	Button: () => ji,
	CaptionLabel: () => Mi,
	Chevron: () => Ni,
	Day: () => Pi,
	DayButton: () => Fi,
	Dropdown: () => Ii,
	DropdownNav: () => Li,
	Footer: () => Ri,
	Month: () => zi,
	MonthCaption: () => Bi,
	MonthGrid: () => Vi,
	Months: () => Hi,
	MonthsDropdown: () => Gi,
	Nav: () => Ki,
	NextMonthButton: () => qi,
	Option: () => Ji,
	PreviousMonthButton: () => Yi,
	Root: () => Xi,
	Select: () => Zi,
	Week: () => Qi,
	WeekNumber: () => ta,
	WeekNumberHeader: () => na,
	Weekday: () => $i,
	Weekdays: () => ea,
	Weeks: () => ra,
	YearsDropdown: () => ia
});
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
function oa(e, t, n = !1, r = Di) {
	let { from: i, to: a } = e, { differenceInCalendarDays: o, isSameDay: s } = r;
	return i && a ? (o(a, i) < 0 && ([i, a] = [a, i]), o(t, i) >= (n ? 1 : 0) && o(a, t) >= (n ? 1 : 0)) : !n && a ? s(a, t) : !n && i ? s(i, t) : !1;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/utils/typeguards.js
function sa(e) {
	return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ca(e) {
	return !!(e && typeof e == "object" && "from" in e);
}
function la(e) {
	return !!(e && typeof e == "object" && "after" in e);
}
function ua(e) {
	return !!(e && typeof e == "object" && "before" in e);
}
function da(e) {
	return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function fa(e, t) {
	return Array.isArray(e) && e.every(t.isDate);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
function pa(e, t, n = Di) {
	let r = Array.isArray(t) ? t : [t], { isSameDay: i, differenceInCalendarDays: a, isAfter: o } = n;
	return r.some((t) => {
		if (typeof t == "boolean") return t;
		if (n.isDate(t)) return i(e, t);
		if (fa(t, n)) return t.some((t) => i(e, t));
		if (ca(t)) return oa(t, e, !1, n);
		if (da(t)) return Array.isArray(t.dayOfWeek) ? t.dayOfWeek.includes(e.getDay()) : t.dayOfWeek === e.getDay();
		if (sa(t)) {
			let n = a(t.before, e), r = a(t.after, e), i = n > 0, s = r < 0;
			return o(t.before, t.after) ? s && i : i || s;
		}
		return la(t) ? a(e, t.after) > 0 : ua(t) ? a(t.before, e) > 0 : typeof t == "function" ? t(e) : !1;
	});
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
function ma(e, t, n, r, i) {
	let { disabled: a, hidden: o, modifiers: s, showOutsideDays: c, broadcastCalendar: l, today: u = i.today() } = t, { isSameDay: d, isSameMonth: f, startOfMonth: p, isBefore: m, endOfMonth: h, isAfter: g } = i, _ = n && p(n), v = r && h(r), y = {
		[X.focused]: [],
		[X.outside]: [],
		[X.disabled]: [],
		[X.hidden]: [],
		[X.today]: []
	}, b = {};
	for (let t of e) {
		let { date: e, displayMonth: n } = t, r = !!(n && !f(e, n)), p = !!(_ && m(e, _)), h = !!(v && g(e, v)), x = !!(a && pa(e, a, i)), S = !!(o && pa(e, o, i)) || p || h || !l && !c && r || l && c === !1 && r, C = d(e, u);
		r && y.outside.push(t), x && y.disabled.push(t), S && y.hidden.push(t), C && y.today.push(t), s && Object.keys(s).forEach((n) => {
			let r = s?.[n];
			r && pa(e, r, i) && (b[n] ? b[n].push(t) : b[n] = [t]);
		});
	}
	return (e) => {
		let t = {
			[X.focused]: !1,
			[X.disabled]: !1,
			[X.hidden]: !1,
			[X.outside]: !1,
			[X.today]: !1
		}, n = {};
		for (let n in y) t[n] = y[n].some((t) => t === e);
		for (let t in b) n[t] = b[t].some((t) => t === e);
		return {
			...t,
			...n
		};
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
function ha(e, t, n = {}) {
	return Object.entries(e).filter(([, e]) => e === !0).reduce((e, [r]) => (n[r] ? e.push(n[r]) : t[X[r]] ? e.push(t[X[r]]) : t[Z[r]] && e.push(t[Z[r]]), e), [t[Y.Day]]);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getComponents.js
function ga(e) {
	return {
		...aa,
		...e
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
function _a(e) {
	let t = {
		"data-mode": e.mode ?? void 0,
		"data-required": "required" in e ? e.required : void 0,
		"data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
		"data-week-numbers": e.showWeekNumber || void 0,
		"data-broadcast-calendar": e.broadcastCalendar || void 0,
		"data-nav-layout": e.navLayout || void 0
	};
	return Object.entries(e).forEach(([e, n]) => {
		e.startsWith("data-") && (t[e] = n);
	}), t;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
function va() {
	let e = {};
	for (let t in Y) e[Y[t]] = `rdp-${Y[t]}`;
	for (let t in X) e[X[t]] = `rdp-${X[t]}`;
	for (let t in Z) e[Z[t]] = `rdp-${Z[t]}`;
	for (let t in Q) e[Q[t]] = `rdp-${Q[t]}`;
	return e;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
function ya(e, t, n) {
	return (n ?? new Ei(t)).formatMonthYear(e);
}
var ba = ya;
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/formatters/formatDay.js
function xa(e, t, n) {
	return (n ?? new Ei(t)).format(e, "d");
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
function Sa(e, t = Di) {
	return t.format(e, "LLLL");
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
function Ca(e, t, n) {
	return (n ?? new Ei(t)).format(e, "cccccc");
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
function wa(e, t = Di) {
	return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
function Ta() {
	return "";
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
function Ea(e, t = Di) {
	return t.format(e, "yyyy");
}
var Da = Ea, Oa = /* @__PURE__ */ de({
	formatCaption: () => ya,
	formatDay: () => xa,
	formatMonthCaption: () => ba,
	formatMonthDropdown: () => Sa,
	formatWeekNumber: () => wa,
	formatWeekNumberHeader: () => Ta,
	formatWeekdayName: () => Ca,
	formatYearCaption: () => Da,
	formatYearDropdown: () => Ea
});
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
function ka(e) {
	return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
		...Oa,
		...e
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
function Aa(e, t, n, r) {
	let i = (r ?? new Ei(n)).format(e, "PPPP");
	return t.today && (i = `Today, ${i}`), t.selected && (i = `${i}, selected`), i;
}
var ja = Aa;
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelGrid.js
function Ma(e, t, n) {
	return (n ?? new Ei(t)).formatMonthYear(e);
}
var Na = Ma;
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
function Pa(e, t, n, r) {
	let i = (r ?? new Ei(n)).format(e, "PPPP");
	return t?.today && (i = `Today, ${i}`), i;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
function Fa(e) {
	return "Choose the Month";
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelNav.js
function Ia() {
	return "";
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelNext.js
var La = "Go to the Next Month";
function Ra(e, t) {
	return La;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
function za(e) {
	return "Go to the Previous Month";
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
function Ba(e, t, n) {
	return (n ?? new Ei(t)).format(e, "cccc");
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
function Va(e, t) {
	return `Week ${e}`;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
function Ha(e) {
	return "Week Number";
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
function Ua(e) {
	return "Choose the Year";
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/labels/index.js
var Wa = /* @__PURE__ */ de({
	labelCaption: () => Na,
	labelDay: () => ja,
	labelDayButton: () => Aa,
	labelGrid: () => Ma,
	labelGridcell: () => Pa,
	labelMonthDropdown: () => Fa,
	labelNav: () => Ia,
	labelNext: () => Ra,
	labelPrevious: () => za,
	labelWeekNumber: () => Va,
	labelWeekNumberHeader: () => Ha,
	labelWeekday: () => Ba,
	labelYearDropdown: () => Ua
}), Ga = (e, t, n) => t || (n ? typeof n == "function" ? n : (...e) => n : e);
function Ka(e, t) {
	let n = t.locale?.labels ?? {};
	return {
		...Wa,
		...e ?? {},
		labelDayButton: Ga(Aa, e?.labelDayButton, n.labelDayButton),
		labelMonthDropdown: Ga(Fa, e?.labelMonthDropdown, n.labelMonthDropdown),
		labelNext: Ga(Ra, e?.labelNext, n.labelNext),
		labelPrevious: Ga(za, e?.labelPrevious, n.labelPrevious),
		labelWeekNumber: Ga(Va, e?.labelWeekNumber, n.labelWeekNumber),
		labelYearDropdown: Ga(Ua, e?.labelYearDropdown, n.labelYearDropdown),
		labelGrid: Ga(Ma, e?.labelGrid, n.labelGrid),
		labelGridcell: Ga(Pa, e?.labelGridcell, n.labelGridcell),
		labelNav: Ga(Ia, e?.labelNav, n.labelNav),
		labelWeekNumberHeader: Ga(Ha, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
		labelWeekday: Ga(Ba, e?.labelWeekday, n.labelWeekday)
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
function qa(e, t, n, r, i) {
	let { startOfMonth: a, startOfYear: o, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = i;
	return c({
		start: o(e),
		end: s(e)
	}).map((e) => {
		let o = r.formatMonthDropdown(e, i);
		return {
			value: l(e),
			label: o,
			disabled: t && e < a(t) || n && e > a(n) || !1
		};
	});
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
function Ja(e, t = {}, n = {}) {
	let r = { ...t?.[Y.Day] };
	return Object.entries(e).filter(([, e]) => e === !0).forEach(([e]) => {
		r = {
			...r,
			...n?.[e]
		};
	}), r;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
function Ya(e, t, n, r) {
	let i = r ?? e.today(), a = n ? e.startOfBroadcastWeek(i, e) : t ? e.startOfISOWeek(i) : e.startOfWeek(i), o = [];
	for (let t = 0; t < 7; t++) {
		let n = e.addDays(a, t);
		o.push(n);
	}
	return o;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
function Xa(e, t, n, r, i = !1) {
	if (!e || !t) return;
	let { startOfYear: a, endOfYear: o, eachYearOfInterval: s, getYear: c } = r, l = s({
		start: a(e),
		end: o(t)
	});
	return i && l.reverse(), l.map((e) => {
		let t = n.formatYearDropdown(e, r);
		return {
			value: c(e),
			label: t,
			disabled: !1
		};
	});
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/noonDateLib.js
function Za(e, t = {}) {
	let { weekStartsOn: n, locale: r } = t, i = n ?? r?.options?.weekStartsOn ?? 0, a = (t) => {
		let n = typeof t == "number" || typeof t == "string" ? new Date(t) : t;
		return new G(n.getFullYear(), n.getMonth(), n.getDate(), 12, 0, 0, e);
	}, o = (e) => {
		let t = a(e);
		return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
	};
	return {
		today: () => a(G.tz(e)),
		newDate: (t, n, r) => new G(t, n, r, 12, 0, 0, e),
		startOfDay: (e) => a(e),
		startOfWeek: (e, t) => {
			let n = a(e), r = t?.weekStartsOn ?? i, o = (n.getDay() - r + 7) % 7;
			return n.setDate(n.getDate() - o), n;
		},
		startOfISOWeek: (e) => {
			let t = a(e), n = (t.getDay() - 1 + 7) % 7;
			return t.setDate(t.getDate() - n), t;
		},
		startOfMonth: (e) => {
			let t = a(e);
			return t.setDate(1), t;
		},
		startOfYear: (e) => {
			let t = a(e);
			return t.setMonth(0, 1), t;
		},
		endOfWeek: (e, t) => {
			let n = a(e), r = (((t?.weekStartsOn ?? i) + 6) % 7 - n.getDay() + 7) % 7;
			return n.setDate(n.getDate() + r), n;
		},
		endOfISOWeek: (e) => {
			let t = a(e), n = (7 - t.getDay()) % 7;
			return t.setDate(t.getDate() + n), t;
		},
		endOfMonth: (e) => {
			let t = a(e);
			return t.setMonth(t.getMonth() + 1, 0), t;
		},
		endOfYear: (e) => {
			let t = a(e);
			return t.setMonth(11, 31), t;
		},
		eachMonthOfInterval: (t) => {
			let n = a(t.start), r = a(t.end), i = [], o = new G(n.getFullYear(), n.getMonth(), 1, 12, 0, 0, e), s = r.getFullYear() * 12 + r.getMonth();
			for (; o.getFullYear() * 12 + o.getMonth() <= s;) i.push(new G(o, e)), o.setMonth(o.getMonth() + 1, 1);
			return i;
		},
		addDays: (e, t) => {
			let n = a(e);
			return n.setDate(n.getDate() + t), n;
		},
		addWeeks: (e, t) => {
			let n = a(e);
			return n.setDate(n.getDate() + t * 7), n;
		},
		addMonths: (e, t) => {
			let n = a(e);
			return n.setMonth(n.getMonth() + t), n;
		},
		addYears: (e, t) => {
			let n = a(e);
			return n.setFullYear(n.getFullYear() + t), n;
		},
		eachYearOfInterval: (t) => {
			let n = a(t.start), r = a(t.end), i = [], o = new G(n.getFullYear(), 0, 1, 12, 0, 0, e);
			for (; o.getFullYear() <= r.getFullYear();) i.push(new G(o, e)), o.setFullYear(o.getFullYear() + 1, 0, 1);
			return i;
		},
		getWeek: (e, t) => Vr(o(e), {
			weekStartsOn: t?.weekStartsOn ?? i,
			firstWeekContainsDate: t?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
		}),
		getISOWeek: (e) => Rr(o(e)),
		differenceInCalendarDays: (e, t) => ar(o(e), o(t)),
		differenceInCalendarMonths: (e, t) => mr(o(e), o(t))
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/useAnimation.js
var Qa = (e) => e instanceof HTMLElement ? e : null, $a = (e) => [...e.querySelectorAll("[data-animated-month]") ?? []], eo = (e) => Qa(e.querySelector("[data-animated-month]")), to = (e) => Qa(e.querySelector("[data-animated-caption]")), no = (e) => Qa(e.querySelector("[data-animated-weeks]")), ro = (e) => Qa(e.querySelector("[data-animated-nav]")), io = (e) => Qa(e.querySelector("[data-animated-weekdays]"));
function ao(e, t, { classNames: n, months: r, focused: i, dateLib: a }) {
	let o = se(null), s = se(r), c = se(!1);
	ae(() => {
		let l = s.current;
		if (s.current = r, !t || !e.current || !(e.current instanceof HTMLElement) || r.length === 0 || l.length === 0 || r.length !== l.length) return;
		let u = a.isSameMonth(r[0].date, l[0].date), d = a.isAfter(r[0].date, l[0].date), f = d ? n[Q.caption_after_enter] : n[Q.caption_before_enter], p = d ? n[Q.weeks_after_enter] : n[Q.weeks_before_enter], m = o.current, h = e.current.cloneNode(!0);
		if (h instanceof HTMLElement ? ($a(h).forEach((e) => {
			if (!(e instanceof HTMLElement)) return;
			let t = eo(e);
			t && e.contains(t) && e.removeChild(t);
			let n = to(e);
			n && n.classList.remove(f);
			let r = no(e);
			r && r.classList.remove(p);
		}), o.current = h) : o.current = null, c.current || u || i) return;
		let g = m instanceof HTMLElement ? $a(m) : [], _ = $a(e.current);
		if (_?.every((e) => e instanceof HTMLElement) && g && g.every((e) => e instanceof HTMLElement)) {
			c.current = !0;
			let t = [];
			e.current.style.isolation = "isolate";
			let r = ro(e.current);
			r && (r.style.zIndex = "1"), _.forEach((i, a) => {
				let o = g[a];
				if (!o) return;
				i.style.position = "relative", i.style.overflow = "hidden";
				let s = to(i);
				s && s.classList.add(f);
				let l = no(i);
				l && l.classList.add(p);
				let u = () => {
					c.current = !1, e.current && (e.current.style.isolation = ""), r && (r.style.zIndex = ""), s && s.classList.remove(f), l && l.classList.remove(p), i.style.position = "", i.style.overflow = "", i.contains(o) && i.removeChild(o);
				};
				t.push(u), o.style.pointerEvents = "none", o.style.position = "absolute", o.style.overflow = "hidden", o.setAttribute("aria-hidden", "true");
				let m = io(o);
				m && (m.style.opacity = "0");
				let h = to(o);
				h && (h.classList.add(d ? n[Q.caption_before_exit] : n[Q.caption_after_exit]), h.addEventListener("animationend", u));
				let _ = no(o);
				_ && _.classList.add(d ? n[Q.weeks_before_exit] : n[Q.weeks_after_exit]), i.insertBefore(o, i.firstChild);
			});
		}
	});
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getDates.js
function oo(e, t, n, r) {
	let i = e[0], a = e[e.length - 1], { ISOWeek: o, fixedWeeks: s, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: d, endOfBroadcastWeek: f, endOfISOWeek: p, endOfMonth: m, endOfWeek: h, isAfter: g, startOfBroadcastWeek: _, startOfISOWeek: v, startOfWeek: y } = r, b = c ? _(i, r) : o ? v(i) : y(i), x = c ? f(a) : o ? p(m(a)) : h(m(a)), S = t && (c ? f(t) : o ? p(t) : h(t)), C = u(S && g(x, S) ? S : x, b), w = d(a, i) + 1, T = [];
	for (let e = 0; e <= C; e++) {
		let t = l(b, e);
		T.push(t);
	}
	let E = (c ? 35 : 42) * w;
	if (s && T.length < E) {
		let e = E - T.length;
		for (let t = 0; t < e; t++) {
			let e = l(T[T.length - 1], 1);
			T.push(e);
		}
	}
	return T;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getDays.js
function so(e) {
	let t = [];
	return e.reduce((e, n) => {
		let r = n.weeks.reduce((e, t) => e.concat(t.days.slice()), t.slice());
		return e.concat(r.slice());
	}, t.slice());
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
function co(e, t, n, r) {
	let { numberOfMonths: i = 1 } = n, a = [];
	for (let n = 0; n < i; n++) {
		let i = r.addMonths(e, n);
		if (t && i > t) break;
		a.push(i);
	}
	return a;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
function lo(e, t, n, r) {
	let { month: i, defaultMonth: a, today: o = r.today(), numberOfMonths: s = 1 } = e, c = i || a || o, { differenceInCalendarMonths: l, addMonths: u, startOfMonth: d } = r;
	return n && l(n, c) < s - 1 && (c = u(n, -1 * (s - 1))), t && l(c, t) < 0 && (c = t), d(c);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getMonths.js
function uo(e, t, n, r) {
	let { addDays: i, endOfBroadcastWeek: a, endOfISOWeek: o, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: d, startOfISOWeek: f, startOfWeek: p } = r, m = e.reduce((e, m) => {
		let h = n.broadcastCalendar ? d(m, r) : n.ISOWeek ? f(m) : p(m), g = n.broadcastCalendar ? a(m) : n.ISOWeek ? o(s(m)) : c(s(m)), _ = t.filter((e) => e >= h && e <= g), v = n.broadcastCalendar ? 35 : 42;
		if (n.fixedWeeks && _.length < v) {
			let e = t.filter((e) => {
				let t = v - _.length;
				return e > g && e <= i(g, t);
			});
			_.push(...e);
		}
		let y = new ki(m, _.reduce((e, t) => {
			let i = n.ISOWeek ? l(t) : u(t), a = e.find((e) => e.weekNumber === i), o = new Oi(t, m, r);
			return a ? a.days.push(o) : e.push(new Ai(i, [o])), e;
		}, []));
		return e.push(y), e;
	}, []);
	return n.reverseMonths ? m.reverse() : m;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
function fo(e, t) {
	let { startMonth: n, endMonth: r } = e, { startOfYear: i, startOfDay: a, startOfMonth: o, endOfMonth: s, addYears: c, endOfYear: l, newDate: u, today: d } = t, { fromYear: f, toYear: p, fromMonth: m, toMonth: h } = e;
	!n && m && (n = m), !n && f && (n = t.newDate(f, 0, 1)), !r && h && (r = h), !r && p && (r = u(p, 11, 31));
	let g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
	return n ? n = o(n) : f ? n = u(f, 0, 1) : !n && g && (n = i(c(e.today ?? d(), -100))), r ? r = s(r) : p ? r = u(p, 11, 31) : !r && g && (r = l(e.today ?? d())), [n && a(n), r && a(r)];
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
function po(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a = 1 } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a : 1, u = o(e);
	if (!t || !(c(t, e) < a)) return s(u, l);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
function mo(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a ?? 1 : 1, u = o(e);
	if (!t || !(c(u, t) <= 0)) return s(u, -l);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
function ho(e) {
	return e.reduce((e, t) => e.concat(t.weeks.slice()), [].slice());
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
function go(e, t) {
	let [n, r] = ce(e);
	return [t === void 0 ? n : t, r];
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/useCalendar.js
function _o(e, t) {
	let [n, r] = fo(e, t), { startOfMonth: i, endOfMonth: a } = t, o = lo(e, n, r, t), [s, c] = go(o, e.month ? o : void 0);
	ie(() => {
		c(lo(e, n, r, t));
	}, [e.timeZone]);
	let { months: l, weeks: u, days: d, previousMonth: f, nextMonth: p } = oe(() => {
		let i = co(s, r, { numberOfMonths: e.numberOfMonths }, t), o = uo(i, oo(i, e.endMonth ? a(e.endMonth) : void 0, {
			ISOWeek: e.ISOWeek,
			fixedWeeks: e.fixedWeeks,
			broadcastCalendar: e.broadcastCalendar
		}, t), {
			broadcastCalendar: e.broadcastCalendar,
			fixedWeeks: e.fixedWeeks,
			ISOWeek: e.ISOWeek,
			reverseMonths: e.reverseMonths
		}, t);
		return {
			months: o,
			weeks: ho(o),
			days: so(o),
			previousMonth: mo(s, n, e, t),
			nextMonth: po(s, r, e, t)
		};
	}, [
		t,
		s.getTime(),
		r?.getTime(),
		n?.getTime(),
		e.disableNavigation,
		e.broadcastCalendar,
		e.endMonth?.getTime(),
		e.fixedWeeks,
		e.ISOWeek,
		e.numberOfMonths,
		e.pagedNavigation,
		e.reverseMonths
	]), { disableNavigation: m, onMonthChange: h } = e, g = (e) => u.some((t) => t.days.some((t) => t.isEqualTo(e))), _ = (e) => {
		if (m) return;
		let t = i(e);
		n && t < i(n) && (t = i(n)), r && t > i(r) && (t = i(r)), c(t), h?.(t);
	};
	return {
		months: l,
		weeks: u,
		days: d,
		navStart: n,
		navEnd: r,
		previousMonth: f,
		nextMonth: p,
		goToMonth: _,
		goToDay: (e) => {
			g(e) || _(e.date);
		}
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var vo;
(function(e) {
	e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(vo ||= {});
function yo(e) {
	return !e[X.disabled] && !e[X.hidden] && !e[X.outside];
}
function bo(e, t, n, r) {
	let i, a = -1;
	for (let o of e) {
		let e = t(o);
		yo(e) && (e[X.focused] && a < vo.FocusedModifier ? (i = o, a = vo.FocusedModifier) : r?.isEqualTo(o) && a < vo.LastFocused ? (i = o, a = vo.LastFocused) : n(o.date) && a < vo.Selected ? (i = o, a = vo.Selected) : e[X.today] && a < vo.Today && (i = o, a = vo.Today));
	}
	return i ||= e.find((e) => yo(t(e))), i;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
function xo(e, t, n, r, i, a, o) {
	let { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: d, addYears: f, endOfBroadcastWeek: p, endOfISOWeek: m, endOfWeek: h, max: g, min: _, startOfBroadcastWeek: v, startOfISOWeek: y, startOfWeek: b } = o, x = {
		day: l,
		week: d,
		month: u,
		year: f,
		startOfWeek: (e) => c ? v(e, o) : s ? y(e) : b(e),
		endOfWeek: (e) => c ? p(e) : s ? m(e) : h(e)
	}[e](n, t === "after" ? 1 : -1);
	return t === "before" && r ? x = g([r, x]) : t === "after" && i && (x = _([i, x])), x;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
function So(e, t, n, r, i, a, o, s = 0) {
	if (s > 365) return;
	let c = xo(e, t, n.date, r, i, a, o), l = !!(a.disabled && pa(c, a.disabled, o)), u = !!(a.hidden && pa(c, a.hidden, o)), d = new Oi(c, c, o);
	return !l && !u ? d : So(e, t, d, r, i, a, o, s + 1);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/useFocus.js
function Co(e, t, n, r, i) {
	let { autoFocus: a } = e, [o, s] = ce(), c = bo(t.days, n, r || (() => !1), o), [l, u] = ce(a ? c : void 0);
	return {
		isFocusTarget: (e) => !!c?.isEqualTo(e),
		setFocused: u,
		focused: l,
		blur: () => {
			s(l), u(void 0);
		},
		moveFocus: (n, r) => {
			if (!l) return;
			let a = So(n, r, l, t.navStart, t.navEnd, e, i);
			a && (e.disableNavigation && !t.days.some((e) => e.isEqualTo(a)) || (t.goToDay(a), u(a)));
		}
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/selection/useMulti.js
function wo(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = go(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t, l = (e) => s?.some((t) => c(t, e)) ?? !1, { min: u, max: d } = e;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = [...s ?? []];
			if (l(e)) {
				if (s?.length === u || r && s?.length === 1) return;
				a = s?.filter((t) => !c(t, e));
			} else a = s?.length === d ? [e] : [...a, e];
			return i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: l
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/utils/addToRange.js
function To(e, t, n = 0, r = 0, i = !1, a = Di) {
	let { from: o, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: u } = a, d;
	if (!o && !s) d = {
		from: e,
		to: n > 0 ? void 0 : e
	};
	else if (o && !s) d = c(o, e) ? n === 0 ? {
		from: o,
		to: e
	} : i ? {
		from: o,
		to: void 0
	} : void 0 : u(e, o) ? {
		from: e,
		to: o
	} : {
		from: o,
		to: e
	};
	else if (o && s) if (c(o, e) && c(s, e)) d = i ? {
		from: o,
		to: s
	} : void 0;
	else if (c(o, e)) d = {
		from: o,
		to: n > 0 ? void 0 : e
	};
	else if (c(s, e)) d = {
		from: e,
		to: n > 0 ? void 0 : e
	};
	else if (u(e, o)) d = {
		from: e,
		to: s
	};
	else if (l(e, o)) d = {
		from: o,
		to: e
	};
	else if (l(e, s)) d = {
		from: o,
		to: e
	};
	else throw Error("Invalid range");
	if (d?.from && d?.to) {
		let t = a.differenceInCalendarDays(d.to, d.from);
		(r > 0 && t > r || n > 1 && t < n) && (d = {
			from: e,
			to: void 0
		});
	}
	return d;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
function Eo(e, t, n = Di) {
	let r = Array.isArray(t) ? t : [t], i = e.from, a = n.differenceInCalendarDays(e.to, e.from), o = Math.min(a, 6);
	for (let e = 0; e <= o; e++) {
		if (r.includes(i.getDay())) return !0;
		i = n.addDays(i, 1);
	}
	return !1;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
function Do(e, t, n = Di) {
	return oa(e, t.from, !1, n) || oa(e, t.to, !1, n) || oa(t, e.from, !1, n) || oa(t, e.to, !1, n);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
function Oo(e, t, n = Di) {
	let r = Array.isArray(t) ? t : [t];
	if (r.filter((e) => typeof e != "function").some((t) => typeof t == "boolean" ? t : n.isDate(t) ? oa(e, t, !1, n) : fa(t, n) ? t.some((t) => oa(e, t, !1, n)) : ca(t) ? t.from && t.to ? Do(e, {
		from: t.from,
		to: t.to
	}, n) : !1 : da(t) ? Eo(e, t.dayOfWeek, n) : sa(t) ? n.isAfter(t.before, t.after) ? Do(e, {
		from: n.addDays(t.after, 1),
		to: n.addDays(t.before, -1)
	}, n) : pa(e.from, t, n) || pa(e.to, t, n) : la(t) || ua(t) ? pa(e.from, t, n) || pa(e.to, t, n) : !1)) return !0;
	let i = r.filter((e) => typeof e == "function");
	if (i.length) {
		let t = e.from, r = n.differenceInCalendarDays(e.to, e.from);
		for (let e = 0; e <= r; e++) {
			if (i.some((e) => e(t))) return !0;
			t = n.addDays(t, 1);
		}
	}
	return !1;
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/selection/useRange.js
function ko(e, t) {
	let { disabled: n, excludeDisabled: r, resetOnSelect: i, selected: a, required: o, onSelect: s } = e, [c, l] = go(a, s ? a : void 0), u = s ? a : c;
	return {
		selected: u,
		select: (a, c, d) => {
			let { min: f, max: p } = e, m;
			if (a) {
				let e = u?.from, n = u?.to, r = !!e && !!n, s = !!e && !!n && t.isSameDay(e, n) && t.isSameDay(a, e);
				m = i && (r || !u?.from) ? !o && s ? void 0 : {
					from: a,
					to: void 0
				} : To(a, u, f, p, o, t);
			}
			return r && n && m?.from && m.to && Oo({
				from: m.from,
				to: m.to
			}, n, t) && (m.from = a, m.to = void 0), s || l(m), s?.(m, a, c, d), m;
		},
		isSelected: (e) => u && oa(u, e, !1, t)
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/selection/useSingle.js
function Ao(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = go(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = e;
			return !r && s && s && c(e, s) && (a = void 0), i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: (e) => s ? c(s, e) : !1
	};
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/useSelection.js
function jo(e, t) {
	let n = Ao(e, t), r = wo(e, t), i = ko(e, t);
	switch (e.mode) {
		case "single": return n;
		case "multiple": return r;
		case "range": return i;
		default: return;
	}
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/utils/toTimeZone.js
function $(e, t) {
	return e instanceof G && e.timeZone === t ? e : new G(e, t);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/utils/convertMatchersToTimeZone.js
function Mo(e, t, n) {
	if (!n) return $(e, t);
	let r = $(e, t), i = new G(r.getFullYear(), r.getMonth(), r.getDate(), 12, 0, 0, t);
	return new Date(i.getTime());
}
function No(e, t, n) {
	return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Mo(e, t, n) : Array.isArray(e) ? e.map((e) => e instanceof Date ? Mo(e, t, n) : e) : ca(e) ? {
		...e,
		from: e.from ? $(e.from, t) : e.from,
		to: e.to ? $(e.to, t) : e.to
	} : sa(e) ? {
		before: Mo(e.before, t, n),
		after: Mo(e.after, t, n)
	} : la(e) ? { after: Mo(e.after, t, n) } : ua(e) ? { before: Mo(e.before, t, n) } : e;
}
function Po(e, t, n) {
	return e && (Array.isArray(e) ? e.map((e) => No(e, t, n)) : No(e, t, n));
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/react-day-picker@9.14.0_react@19.2.4/node_modules/react-day-picker/dist/esm/DayPicker.js
function Fo(e) {
	let t = e, n = t.timeZone;
	if (n && (t = {
		...e,
		timeZone: n
	}, t.today &&= $(t.today, n), t.month &&= $(t.month, n), t.defaultMonth &&= $(t.defaultMonth, n), t.startMonth &&= $(t.startMonth, n), t.endMonth &&= $(t.endMonth, n), t.mode === "single" && t.selected ? t.selected = $(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((e) => $(e, n)) : t.mode === "range" && t.selected && (t.selected = {
		from: t.selected.from ? $(t.selected.from, n) : t.selected.from,
		to: t.selected.to ? $(t.selected.to, n) : t.selected.to
	}), t.disabled !== void 0 && (t.disabled = Po(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Po(t.hidden, n)), t.modifiers)) {
		let e = {};
		Object.keys(t.modifiers).forEach((r) => {
			e[r] = Po(t.modifiers?.[r], n);
		}), t.modifiers = e;
	}
	let { components: r, formatters: i, labels: a, dateLib: o, locale: s, classNames: c } = oe(() => {
		let e = {
			...Ti,
			...t.locale
		}, n = t.broadcastCalendar ? 1 : t.weekStartsOn, r = t.noonSafe && t.timeZone ? Za(t.timeZone, {
			weekStartsOn: n,
			locale: e
		}) : void 0, i = t.dateLib && r ? {
			...r,
			...t.dateLib
		} : t.dateLib ?? r, a = new Ei({
			locale: e,
			weekStartsOn: n,
			firstWeekContainsDate: t.firstWeekContainsDate,
			useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
			useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
			timeZone: t.timeZone,
			numerals: t.numerals
		}, i);
		return {
			dateLib: a,
			components: ga(t.components),
			formatters: ka(t.formatters),
			labels: Ka(t.labels, a.options),
			locale: e,
			classNames: {
				...va(),
				...t.classNames
			}
		};
	}, [
		t.locale,
		t.broadcastCalendar,
		t.weekStartsOn,
		t.firstWeekContainsDate,
		t.useAdditionalWeekYearTokens,
		t.useAdditionalDayOfYearTokens,
		t.timeZone,
		t.numerals,
		t.dateLib,
		t.noonSafe,
		t.components,
		t.formatters,
		t.labels,
		t.classNames
	]);
	t.today || (t = {
		...t,
		today: o.today()
	});
	let { captionLayout: l, mode: u, navLayout: d, numberOfMonths: f = 1, onDayBlur: p, onDayClick: m, onDayFocus: h, onDayKeyDown: g, onDayMouseEnter: _, onDayMouseLeave: v, onNextClick: y, onPrevClick: b, showWeekNumber: x, styles: S } = t, { formatCaption: C, formatDay: w, formatMonthDropdown: T, formatWeekNumber: E, formatWeekNumberHeader: D, formatWeekdayName: O, formatYearDropdown: k } = i, ee = _o(t, o), { days: A, months: j, navStart: M, navEnd: N, previousMonth: P, nextMonth: F, goToMonth: I } = ee, te = ma(A, t, M, N, o), { isSelected: L, select: ne, selected: R } = jo(t, o) ?? {}, { blur: B, focused: V, isFocusTarget: re, moveFocus: ie, setFocused: ae } = Co(t, ee, te, L ?? (() => !1), o), { labelDayButton: ce, labelGridcell: le, labelGrid: U, labelMonthDropdown: W, labelNav: ue, labelPrevious: de, labelNext: fe, labelWeekday: pe, labelWeekNumber: me, labelWeekNumberHeader: he, labelYearDropdown: ge } = a, _e = oe(() => Ya(o, t.ISOWeek, t.broadcastCalendar, t.today), [
		o,
		t.ISOWeek,
		t.broadcastCalendar,
		t.today
	]), ve = u !== void 0 || m !== void 0, ye = H(() => {
		P && (I(P), b?.(P));
	}, [
		P,
		I,
		b
	]), be = H(() => {
		F && (I(F), y?.(F));
	}, [
		I,
		F,
		y
	]), xe = H((e, t) => (n) => {
		n.preventDefault(), n.stopPropagation(), ae(e), !t.disabled && (ne?.(e.date, t, n), m?.(e.date, t, n));
	}, [
		ne,
		m,
		ae
	]), Se = H((e, t) => (n) => {
		ae(e), h?.(e.date, t, n);
	}, [h, ae]), Ce = H((e, t) => (n) => {
		B(), p?.(e.date, t, n);
	}, [B, p]), we = H((e, n) => (r) => {
		let i = {
			ArrowLeft: [r.shiftKey ? "month" : "day", t.dir === "rtl" ? "after" : "before"],
			ArrowRight: [r.shiftKey ? "month" : "day", t.dir === "rtl" ? "before" : "after"],
			ArrowDown: [r.shiftKey ? "year" : "week", "after"],
			ArrowUp: [r.shiftKey ? "year" : "week", "before"],
			PageUp: [r.shiftKey ? "year" : "month", "before"],
			PageDown: [r.shiftKey ? "year" : "month", "after"],
			Home: ["startOfWeek", "before"],
			End: ["endOfWeek", "after"]
		};
		if (i[r.key]) {
			r.preventDefault(), r.stopPropagation();
			let [e, t] = i[r.key];
			ie(e, t);
		}
		g?.(e.date, n, r);
	}, [
		ie,
		g,
		t.dir
	]), Te = H((e, t) => (n) => {
		_?.(e.date, t, n);
	}, [_]), Ee = H((e, t) => (n) => {
		v?.(e.date, t, n);
	}, [v]), De = H((e) => (t) => {
		let n = Number(t.target.value);
		I(o.setMonth(o.startOfMonth(e), n));
	}, [o, I]), Oe = H((e) => (t) => {
		let n = Number(t.target.value);
		I(o.setYear(o.startOfMonth(e), n));
	}, [o, I]), { className: ke, style: Ae } = oe(() => ({
		className: [c[Y.Root], t.className].filter(Boolean).join(" "),
		style: {
			...S?.[Y.Root],
			...t.style
		}
	}), [
		c,
		t.className,
		t.style,
		S
	]), je = _a(t), Me = se(null);
	ao(Me, !!t.animate, {
		classNames: c,
		months: j,
		focused: V,
		dateLib: o
	});
	let Ne = {
		dayPickerProps: t,
		selected: R,
		select: ne,
		isSelected: L,
		months: j,
		nextMonth: F,
		previousMonth: P,
		goToMonth: I,
		getModifiers: te,
		components: r,
		classNames: c,
		styles: S,
		labels: a,
		formatters: i
	};
	return z.createElement(Ui.Provider, { value: Ne }, z.createElement(r.Root, {
		rootRef: t.animate ? Me : void 0,
		className: ke,
		style: Ae,
		dir: t.dir,
		id: t.id,
		lang: t.lang ?? s.code,
		nonce: t.nonce,
		title: t.title,
		role: t.role,
		"aria-label": t["aria-label"],
		"aria-labelledby": t["aria-labelledby"],
		...je
	}, z.createElement(r.Months, {
		className: c[Y.Months],
		style: S?.[Y.Months]
	}, !t.hideNavigation && !d && z.createElement(r.Nav, {
		"data-animated-nav": t.animate ? "true" : void 0,
		className: c[Y.Nav],
		style: S?.[Y.Nav],
		"aria-label": ue(),
		onPreviousClick: ye,
		onNextClick: be,
		previousMonth: P,
		nextMonth: F
	}), j.map((e, n) => z.createElement(r.Month, {
		"data-animated-month": t.animate ? "true" : void 0,
		className: c[Y.Month],
		style: S?.[Y.Month],
		key: n,
		displayIndex: n,
		calendarMonth: e
	}, d === "around" && !t.hideNavigation && n === 0 && z.createElement(r.PreviousMonthButton, {
		type: "button",
		className: c[Y.PreviousMonthButton],
		tabIndex: P ? void 0 : -1,
		"aria-disabled": P ? void 0 : !0,
		"aria-label": de(P),
		onClick: ye,
		"data-animated-button": t.animate ? "true" : void 0
	}, z.createElement(r.Chevron, {
		disabled: P ? void 0 : !0,
		className: c[Y.Chevron],
		orientation: t.dir === "rtl" ? "right" : "left"
	})), z.createElement(r.MonthCaption, {
		"data-animated-caption": t.animate ? "true" : void 0,
		className: c[Y.MonthCaption],
		style: S?.[Y.MonthCaption],
		calendarMonth: e,
		displayIndex: n
	}, l?.startsWith("dropdown") ? z.createElement(r.DropdownNav, {
		className: c[Y.Dropdowns],
		style: S?.[Y.Dropdowns]
	}, (() => {
		let n = l === "dropdown" || l === "dropdown-months" ? z.createElement(r.MonthsDropdown, {
			key: "month",
			className: c[Y.MonthsDropdown],
			"aria-label": W(),
			classNames: c,
			components: r,
			disabled: !!t.disableNavigation,
			onChange: De(e.date),
			options: qa(e.date, M, N, i, o),
			style: S?.[Y.Dropdown],
			value: o.getMonth(e.date)
		}) : z.createElement("span", { key: "month" }, T(e.date, o)), a = l === "dropdown" || l === "dropdown-years" ? z.createElement(r.YearsDropdown, {
			key: "year",
			className: c[Y.YearsDropdown],
			"aria-label": ge(o.options),
			classNames: c,
			components: r,
			disabled: !!t.disableNavigation,
			onChange: Oe(e.date),
			options: Xa(M, N, i, o, !!t.reverseYears),
			style: S?.[Y.Dropdown],
			value: o.getYear(e.date)
		}) : z.createElement("span", { key: "year" }, k(e.date, o));
		return o.getMonthYearOrder() === "year-first" ? [a, n] : [n, a];
	})(), z.createElement("span", {
		role: "status",
		"aria-live": "polite",
		style: {
			border: 0,
			clip: "rect(0 0 0 0)",
			height: "1px",
			margin: "-1px",
			overflow: "hidden",
			padding: 0,
			position: "absolute",
			width: "1px",
			whiteSpace: "nowrap",
			wordWrap: "normal"
		}
	}, C(e.date, o.options, o))) : z.createElement(r.CaptionLabel, {
		className: c[Y.CaptionLabel],
		role: "status",
		"aria-live": "polite"
	}, C(e.date, o.options, o))), d === "around" && !t.hideNavigation && n === f - 1 && z.createElement(r.NextMonthButton, {
		type: "button",
		className: c[Y.NextMonthButton],
		tabIndex: F ? void 0 : -1,
		"aria-disabled": F ? void 0 : !0,
		"aria-label": fe(F),
		onClick: be,
		"data-animated-button": t.animate ? "true" : void 0
	}, z.createElement(r.Chevron, {
		disabled: F ? void 0 : !0,
		className: c[Y.Chevron],
		orientation: t.dir === "rtl" ? "left" : "right"
	})), n === f - 1 && d === "after" && !t.hideNavigation && z.createElement(r.Nav, {
		"data-animated-nav": t.animate ? "true" : void 0,
		className: c[Y.Nav],
		style: S?.[Y.Nav],
		"aria-label": ue(),
		onPreviousClick: ye,
		onNextClick: be,
		previousMonth: P,
		nextMonth: F
	}), z.createElement(r.MonthGrid, {
		role: "grid",
		"aria-multiselectable": u === "multiple" || u === "range",
		"aria-label": U(e.date, o.options, o) || void 0,
		className: c[Y.MonthGrid],
		style: S?.[Y.MonthGrid]
	}, !t.hideWeekdays && z.createElement(r.Weekdays, {
		"data-animated-weekdays": t.animate ? "true" : void 0,
		className: c[Y.Weekdays],
		style: S?.[Y.Weekdays]
	}, x && z.createElement(r.WeekNumberHeader, {
		"aria-label": he(o.options),
		className: c[Y.WeekNumberHeader],
		style: S?.[Y.WeekNumberHeader],
		scope: "col"
	}, D()), _e.map((e) => z.createElement(r.Weekday, {
		"aria-label": pe(e, o.options, o),
		className: c[Y.Weekday],
		key: String(e),
		style: S?.[Y.Weekday],
		scope: "col"
	}, O(e, o.options, o)))), z.createElement(r.Weeks, {
		"data-animated-weeks": t.animate ? "true" : void 0,
		className: c[Y.Weeks],
		style: S?.[Y.Weeks]
	}, e.weeks.map((e) => z.createElement(r.Week, {
		className: c[Y.Week],
		key: e.weekNumber,
		style: S?.[Y.Week],
		week: e
	}, x && z.createElement(r.WeekNumber, {
		week: e,
		style: S?.[Y.WeekNumber],
		"aria-label": me(e.weekNumber, { locale: s }),
		className: c[Y.WeekNumber],
		scope: "row",
		role: "rowheader"
	}, E(e.weekNumber, o)), e.days.map((e) => {
		let { date: n } = e, i = te(e);
		if (i[X.focused] = !i.hidden && !!V?.isEqualTo(e), i[Z.selected] = L?.(n) || i.selected, ca(R)) {
			let { from: e, to: t } = R;
			i[Z.range_start] = !!(e && t && o.isSameDay(n, e)), i[Z.range_end] = !!(e && t && o.isSameDay(n, t)), i[Z.range_middle] = oa(R, n, !0, o);
		}
		let a = Ja(i, S, t.modifiersStyles), s = ha(i, c, t.modifiersClassNames), l = !ve && !i.hidden ? le(n, i, o.options, o) : void 0;
		return z.createElement(r.Day, {
			key: `${e.isoDate}_${e.displayMonthId}`,
			day: e,
			modifiers: i,
			className: s.join(" "),
			style: a,
			role: "gridcell",
			"aria-selected": i.selected || void 0,
			"aria-label": l,
			"data-day": e.isoDate,
			"data-month": e.outside ? e.dateMonthId : void 0,
			"data-selected": i.selected || void 0,
			"data-disabled": i.disabled || void 0,
			"data-hidden": i.hidden || void 0,
			"data-outside": e.outside || void 0,
			"data-focused": i.focused || void 0,
			"data-today": i.today || void 0
		}, !i.hidden && ve ? z.createElement(r.DayButton, {
			className: c[Y.DayButton],
			style: S?.[Y.DayButton],
			type: "button",
			day: e,
			modifiers: i,
			disabled: !i.focused && i.disabled || void 0,
			"aria-disabled": i.focused && i.disabled || void 0,
			tabIndex: re(e) ? 0 : -1,
			"aria-label": ce(n, i, o.options, o),
			onClick: xe(e, i),
			onBlur: Ce(e, i),
			onFocus: Se(e, i),
			onKeyDown: we(e, i),
			onMouseEnter: Te(e, i),
			onMouseLeave: Ee(e, i)
		}, w(n, o.options, o)) : !i.hidden && w(e.date, o.options, o));
	})))))))), t.footer && z.createElement(r.Footer, {
		className: c[Y.Footer],
		style: S?.[Y.Footer],
		role: "status",
		"aria-live": "polite"
	}, t.footer)));
}
//#endregion
//#region src/components/ui/data-entry/segmented-control.tsx
var Io = {
	default: "min-h-9 px-3 text-sm",
	sm: "min-h-8 px-2.5 text-xs"
}, Lo = R.forwardRef(({ className: t, fullWidth: n = !0, onValueChange: r, options: i, orientation: a = "horizontal", size: o = "default", value: s, ...c }, l) => /* @__PURE__ */ U("div", {
	ref: l,
	className: e("inline-flex rounded-[var(--sdk-radius-control)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] p-1", a === "horizontal" ? "flex-row items-center" : "flex-col items-stretch", n ? "w-full" : "w-auto", t),
	"data-orientation": a,
	"data-sdk-ui": "segmented-control",
	"data-slot": "segmented-control",
	role: "group",
	...c,
	children: i.map((t) => {
		let i = t.value === s;
		return /* @__PURE__ */ W("button", {
			"aria-pressed": i,
			className: e("inline-flex items-center justify-center gap-2 rounded-[var(--sdk-radius-field)] font-medium transition-colors disabled:pointer-events-none disabled:opacity-50", Io[o], a === "horizontal" && n ? "flex-1" : null, i ? "bg-[var(--sdk-color-surface-elevated)] text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-sm)]" : "text-[var(--sdk-color-text-secondary)] hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)]"),
			disabled: t.disabled,
			onClick: () => r(t.value),
			"data-slot": "segmented-control-option",
			type: "button",
			children: [t.icon ? /* @__PURE__ */ U("span", {
				className: "shrink-0",
				children: t.icon
			}) : null, /* @__PURE__ */ U("span", {
				className: "truncate",
				children: t.label
			})]
		}, t.value);
	})
}));
Lo.displayName = "SegmentedControl";
//#endregion
//#region src/components/ui/data-entry/date-range-picker.tsx
function Ro(e) {
	return {
		end: e?.end ?? "",
		start: e?.start ?? ""
	};
}
function zo(e, t) {
	return e.start === t.start && e.end === t.end;
}
function Bo(e, t) {
	return e?.find((e) => zo(Ro(e.range), t))?.value ?? null;
}
function Vo(e, t) {
	if (!e) return null;
	let n = t === "date" ? `${e}T00:00` : e, r = new Date(n).getTime();
	return Number.isNaN(r) ? null : r;
}
function Ho(e) {
	if (!e) return;
	let [t, n, r] = e.split("-").map(Number);
	if (!(!t || !n || !r)) return new Date(t, n - 1, r);
}
function Uo(e) {
	return `${e.getFullYear()}-${`${e.getMonth() + 1}`.padStart(2, "0")}-${`${e.getDate()}`.padStart(2, "0")}`;
}
function Wo(e) {
	let t = Ho(e.start), n = Ho(e.end);
	if (!(!t && !n)) return {
		from: t,
		to: n
	};
}
function Go(e) {
	return {
		end: e?.to ? Uo(e.to) : "",
		start: e?.from ? Uo(e.from) : ""
	};
}
function Ko(e, t) {
	return Object.entries(t).reduce((e, [t, n]) => e.replaceAll(`{${t}}`, n), e);
}
function qo(e, t) {
	return Ho(e) ? t(e, {
		day: "numeric",
		month: "short",
		year: "numeric"
	}) : "";
}
function Jo(e, t, n, r) {
	return !e.start && !e.end ? t : e.start && e.end ? `${qo(e.start, n)} - ${qo(e.end, n)}` : e.start ? `${qo(e.start, n)} - ${r}` : t;
}
function Yo(e, t, n, r) {
	return Ho(e.start) ?? t ?? Ho(n ?? "") ?? Ho(r ?? "") ?? /* @__PURE__ */ new Date();
}
function Xo(e, t, n, r, i) {
	if (n && e.start && e.end) {
		let i = Vo(e.start, t), a = Vo(e.end, t);
		if (i !== null && a !== null) {
			let e = n.amount * (n.unit === "day" ? 1440 * 60 * 1e3 : 3600 * 1e3);
			if (Math.abs(a - i) > e) {
				let e = n.unit === "day" ? n.amount === 1 ? r.rangeLimitDay : r.rangeLimitDays : n.amount === 1 ? r.rangeLimitHour : r.rangeLimitHours;
				return Ko(r.rangeLimitExceeded, {
					amount: String(n.amount),
					unit: e
				});
			}
		}
	}
	return i?.(e) ?? null;
}
function Zo(e, t, n, r) {
	let i = {
		...e,
		[t]: n
	};
	return r === "swap" && i.start && i.end && i.start > i.end ? {
		end: i.start,
		start: i.end
	} : i;
}
function Qo({ defaultPresetValue: e, defaultValue: t, onPresetValueChange: n, onValueChange: r, presetValue: i, presets: a, value: o }) {
	let s = R.useMemo(() => Ro(t), [t]), c = o === void 0 ? void 0 : Ro(o), l = R.useRef(!1), [u, d] = _({
		defaultValue: s,
		onChange: r,
		value: c
	}), [f, p] = _({
		defaultValue: e ?? Bo(a, s),
		onChange: (e) => {
			l.current || n?.(e);
		},
		value: i
	});
	return R.useEffect(() => {
		if (i !== void 0 || o === void 0) return;
		let e = Bo(a, u);
		l.current = !0, p(e), l.current = !1;
	}, [
		u,
		i,
		a,
		p,
		o
	]), {
		commitValue: R.useCallback((e, t) => {
			d(e), p(t);
		}, [p, d]),
		currentPresetValue: f,
		currentValue: u
	};
}
function $o({ actions: t, className: n, defaultPresetValue: r, defaultValue: i, disabled: a = !1, endInputProps: o, endLabel: s, forwardedRef: c, invalidBehavior: l = "preserve", max: u, maxSpan: d, min: f, mode: p = "date", onPresetValueChange: m, onValidationChange: h, onValueChange: g, presetLabel: _, presetValue: v, presets: y, startInputProps: b, startLabel: S, validate: C, value: w, ...T }) {
	let E = P().messages.dateRangePicker, D = s ?? E.endDate, O = _ ?? E.presets, k = S ?? E.startDate, { commitValue: ee, currentPresetValue: A, currentValue: j } = Qo({
		defaultPresetValue: r,
		defaultValue: i,
		onPresetValueChange: m,
		onValueChange: g,
		presetValue: v,
		presets: y,
		value: w
	}), M = Xo(j, p, d, E, C), N = R.useId(), F = R.useId(), I = b?.id ?? N, te = o?.id ?? F, L = p === "datetime-local" ? An : kn;
	R.useEffect(() => {
		h?.(M);
	}, [h, M]);
	function ne(e) {
		let t = y?.find((t) => t.value === e);
		t && ee(Ro(t.range), t.value);
	}
	function z(e, t) {
		let n = Zo(j, e, t, l);
		ee(n, Bo(y, n));
	}
	return /* @__PURE__ */ W("div", {
		ref: c,
		className: e("space-y-3", n),
		"data-sdk-ui": "date-range-field",
		"data-slot": "date-range-field",
		...T,
		children: [
			y?.length ? /* @__PURE__ */ W("div", {
				className: "space-y-2",
				"data-slot": "date-range-field-presets",
				children: [/* @__PURE__ */ U("div", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-[var(--sdk-color-text-muted)]",
					children: O
				}), /* @__PURE__ */ U(Lo, {
					fullWidth: !1,
					onValueChange: ne,
					options: y.map((e) => ({
						disabled: a || e.disabled,
						label: e.label,
						value: e.value
					})),
					size: "sm",
					value: A ?? ""
				})]
			}) : null,
			/* @__PURE__ */ W("div", {
				className: "grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-end",
				"data-slot": "date-range-field-inputs",
				children: [
					/* @__PURE__ */ W("div", {
						className: "space-y-2",
						"data-slot": "date-range-field-start",
						children: [/* @__PURE__ */ U(x, {
							htmlFor: I,
							children: k
						}), /* @__PURE__ */ U(L, {
							...b,
							"aria-invalid": M ? "true" : void 0,
							disabled: a || b?.disabled,
							id: I,
							max: u,
							min: f,
							value: j.start,
							onChange: (e) => z("start", e.target.value)
						})]
					}),
					/* @__PURE__ */ U("div", {
						className: "hidden pb-2 text-sm text-[var(--sdk-color-text-muted)] md:block",
						children: E.to
					}),
					/* @__PURE__ */ W("div", {
						className: "space-y-2",
						"data-slot": "date-range-field-end",
						children: [/* @__PURE__ */ U(x, {
							htmlFor: te,
							children: D
						}), /* @__PURE__ */ U(L, {
							...o,
							"aria-invalid": M ? "true" : void 0,
							disabled: a || o?.disabled,
							id: te,
							max: u,
							min: f,
							value: j.end,
							onChange: (e) => z("end", e.target.value)
						})]
					})
				]
			}),
			t ? /* @__PURE__ */ U("div", {
				className: "flex flex-wrap items-center justify-end gap-2",
				"data-slot": "date-range-field-actions",
				children: t
			}) : null,
			M ? /* @__PURE__ */ U("p", {
				className: "text-sm text-[var(--sdk-color-state-danger)]",
				"data-slot": "date-range-field-error",
				role: "alert",
				children: M
			}) : null
		]
	});
}
var es = {
	[X.disabled]: "text-[var(--sdk-color-text-muted)] opacity-40",
	[X.outside]: "text-[var(--sdk-color-text-muted)] opacity-35",
	[X.today]: "text-[var(--sdk-color-brand-primary)]",
	[Z.range_end]: "rounded-[var(--sdk-radius-control)] bg-[var(--sdk-color-brand-primary)] text-[var(--sdk-color-text-inverse)]",
	[Z.range_middle]: "bg-[var(--sdk-color-brand-primary-soft)] text-[var(--sdk-color-text-primary)]",
	[Z.range_start]: "rounded-[var(--sdk-radius-control)] bg-[var(--sdk-color-brand-primary)] text-[var(--sdk-color-text-inverse)]",
	[Z.selected]: "bg-[var(--sdk-color-brand-primary-soft)] text-[var(--sdk-color-text-primary)]",
	[Y.CaptionLabel]: "text-sm font-semibold text-[var(--sdk-color-text-primary)]",
	[Y.Day]: "flex h-10 w-10 items-center justify-center text-sm [&:has([aria-selected=true])]:bg-[var(--sdk-color-brand-primary-soft)] [&:has([aria-selected=true])]:text-[var(--sdk-color-text-primary)]",
	[Y.DayButton]: e(n({
		size: "sm",
		variant: "ghost"
	}), "h-10 w-10 rounded-[var(--sdk-radius-control)] p-0 font-normal aria-selected:opacity-100"),
	[Y.Month]: "space-y-3 rounded-[var(--sdk-radius-field)] border border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel)] p-3",
	[Y.MonthCaption]: "relative flex items-center justify-center pt-1",
	[Y.MonthGrid]: "w-full border-collapse",
	[Y.Months]: "flex flex-col gap-3 md:flex-row",
	[Y.Nav]: "absolute inset-x-0 top-1 flex items-center justify-between",
	[Y.NextMonthButton]: e(n({
		size: "sm",
		variant: "ghost"
	}), "h-8 w-8 rounded-[var(--sdk-radius-control)] p-0"),
	[Y.PreviousMonthButton]: e(n({
		size: "sm",
		variant: "ghost"
	}), "h-8 w-8 rounded-[var(--sdk-radius-control)] p-0"),
	[Y.Week]: "mt-1 flex w-full",
	[Y.Weekday]: "w-10 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--sdk-color-text-muted)]",
	[Y.Weekdays]: "mb-1 flex",
	[Y.Weeks]: "space-y-1"
}, ts = R.forwardRef((e, t) => /* @__PURE__ */ U($o, {
	...e,
	forwardedRef: t,
	mode: "date"
}));
ts.displayName = "DateRangeField";
var ns = R.forwardRef((e, t) => /* @__PURE__ */ U($o, {
	...e,
	"data-sdk-ui": "date-time-range-field",
	forwardedRef: t,
	mode: "datetime-local"
}));
ns.displayName = "DateTimeRangeField";
var rs = R.forwardRef(({ actions: n, className: r, defaultMonth: i, defaultPresetValue: a, defaultValue: o, disabled: s = !1, max: c, maxSpan: l, min: u, numberOfMonths: d = 2, onPresetValueChange: f, onValidationChange: m, onValueChange: h, placeholder: g, presetLabel: _, presetValue: v, presets: y, slotProps: b, validate: x, value: S, ...C }, w) => {
	let T = P(), E = T.messages.dateRangePicker, D = g ?? E.placeholder, O = _ ?? E.presets, { commitValue: k, currentPresetValue: ee, currentValue: A } = Qo({
		defaultPresetValue: a,
		defaultValue: o,
		onPresetValueChange: f,
		onValueChange: h,
		presetValue: v,
		presets: y,
		value: S
	}), [j, M] = R.useState(!1), N = Xo(A, "date", l, E, x), ne = Wo(A), z = R.useMemo(() => Yo(A, i, u, c), [
		A,
		i,
		c,
		u
	]), [B, V] = R.useState(z), H = R.useMemo(() => {
		let e = [], t = Ho(u ?? ""), n = Ho(c ?? "");
		return t && e.push({ before: t }), n && e.push({ after: n }), e.length > 0 ? e : void 0;
	}, [c, u]);
	R.useEffect(() => {
		V(z);
	}, [z]), R.useEffect(() => {
		m?.(N);
	}, [m, N]);
	function re(e) {
		let t = y?.find((t) => t.value === e);
		if (!t) return;
		let n = Ro(t.range);
		k(n, t.value), V(Yo(n, i, u, c)), M(!1);
	}
	function ie(e) {
		let t = Go(e);
		k(t, Bo(y, t)), V(e?.from ?? Yo(t, i, u, c)), e?.from && e?.to && M(!1);
	}
	return /* @__PURE__ */ U("div", {
		ref: w,
		className: e("space-y-2", r),
		"data-sdk-ui": "date-range-picker",
		"data-slot": "date-range-picker",
		...C,
		children: /* @__PURE__ */ W(te, {
			open: j,
			onOpenChange: M,
			children: [/* @__PURE__ */ U(F, {
				asChild: !0,
				children: /* @__PURE__ */ W("button", {
					"aria-expanded": j,
					"aria-invalid": N ? "true" : void 0,
					...t({
						className: e(L, "justify-between gap-3 text-left", N ? "border-[var(--sdk-color-state-danger)]" : void 0),
						"data-sdk-ui": "date-range-picker-trigger",
						"data-slot": "date-range-picker-trigger",
						type: "button"
					}, b?.trigger),
					disabled: s,
					children: [/* @__PURE__ */ W("span", {
						className: "flex min-w-0 items-center gap-3",
						"data-slot": "date-range-picker-trigger-value",
						children: [/* @__PURE__ */ U(pe, { className: "h-4 w-4 shrink-0 text-[var(--sdk-color-text-muted)]" }), /* @__PURE__ */ U("span", {
							className: e("truncate", !A.start && !A.end ? "text-[var(--sdk-color-text-muted)]" : void 0),
							children: Jo(A, D, T.formatters.formatDate, E.selectEndDate)
						})]
					}), /* @__PURE__ */ U(p, { className: "h-4 w-4 shrink-0 text-[var(--sdk-color-text-muted)]" })]
				})
			}), /* @__PURE__ */ W(I, {
				align: "start",
				...t({
					className: "w-auto min-w-[22rem] space-y-4 p-4",
					"data-sdk-ui": "date-range-picker-content",
					"data-slot": "date-range-picker-content",
					sideOffset: 8
				}, b?.content),
				children: [
					y?.length ? /* @__PURE__ */ W("div", {
						...t({
							className: "space-y-2",
							"data-slot": "date-range-picker-presets"
						}, b?.presets),
						children: [/* @__PURE__ */ U("div", {
							className: "text-xs font-medium uppercase tracking-[0.18em] text-[var(--sdk-color-text-muted)]",
							children: O
						}), /* @__PURE__ */ U(Lo, {
							fullWidth: !1,
							onValueChange: re,
							options: y.map((e) => ({
								disabled: s || e.disabled,
								label: e.label,
								value: e.value
							})),
							size: "sm",
							value: ee ?? ""
						})]
					}) : null,
					/* @__PURE__ */ U("div", {
						...t({
							className: "rounded-[var(--sdk-radius-field)] border border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel-muted)] p-3",
							"data-sdk-ui": "date-range-picker-calendar",
							"data-slot": "date-range-picker-calendar"
						}, b?.calendar),
						children: /* @__PURE__ */ U(Fo, {
							animate: !0,
							autoFocus: j,
							classNames: es,
							disabled: H,
							mode: "range",
							month: B,
							numberOfMonths: d,
							onMonthChange: V,
							onSelect: ie,
							selected: ne,
							showOutsideDays: !1
						})
					}),
					(n || N) && /* @__PURE__ */ W("div", {
						...t({
							className: "flex flex-wrap items-center justify-between gap-3",
							"data-slot": "date-range-picker-footer"
						}, b?.footer),
						children: [N ? /* @__PURE__ */ U("p", {
							...t({
								className: "text-sm text-[var(--sdk-color-state-danger)]",
								"data-slot": "date-range-picker-error",
								role: "alert"
							}, b?.error),
							children: N
						}) : /* @__PURE__ */ U("span", {}), n ? /* @__PURE__ */ U("div", {
							className: "flex flex-wrap items-center gap-2",
							children: n
						}) : null]
					})
				]
			})]
		})
	});
});
rs.displayName = "DateRangePicker";
//#endregion
//#region src/components/ui/data-entry/number-input.tsx
function is(e, t, n) {
	return typeof t == "number" && e < t ? t : typeof n == "number" && e > n ? n : e;
}
function as(e) {
	if (typeof e == "number" && Number.isFinite(e)) return e;
	if (typeof e == "string") {
		let t = Number(e);
		if (Number.isFinite(t)) return t;
	}
}
var os = R.forwardRef(({ className: n, defaultValue: r, max: i, min: a, onChange: o, onValueChange: s, slotProps: c, step: l = 1, value: u, ...d }, f) => {
	let m = R.useRef(null), h = as(a), v = as(i), [y, b] = _({
		defaultValue: r ?? null,
		onChange: s,
		value: u === void 0 ? void 0 : u
	}), x = R.useCallback((e) => {
		let t = e.target.value.trim();
		if (o?.(e), t === "") {
			b(null);
			return;
		}
		let n = Number(t);
		Number.isNaN(n) || b(n);
	}, [o, b]), S = R.useCallback((e) => {
		let t = as(l) ?? 1;
		b(is((typeof y == "number" ? y : typeof r == "number" ? r : 0) + t * e, h, v));
	}, [
		y,
		r,
		v,
		h,
		b,
		l
	]);
	return /* @__PURE__ */ W("div", {
		...t({
			className: "relative",
			"data-sdk-ui": "number-input",
			"data-slot": "number-input"
		}, c?.root),
		children: [/* @__PURE__ */ U("input", {
			ref: Ae(f, m),
			className: e(L, "rounded-[var(--sdk-radius-field)] pr-11 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none", n),
			"data-sdk-ui": "number-input-field",
			"data-slot": "number-input-input",
			inputMode: "decimal",
			max: i,
			min: a,
			onChange: x,
			step: l,
			type: "number",
			value: y ?? "",
			...d
		}), /* @__PURE__ */ W("div", {
			...t({
				className: "absolute inset-y-1 right-1 flex w-8 flex-col overflow-hidden rounded-[var(--sdk-radius-control)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)]",
				"data-sdk-ui": "number-input-stepper",
				"data-slot": "number-input-stepper"
			}, c?.stepper),
			children: [/* @__PURE__ */ U("button", {
				"aria-label": "Increase value",
				...t({
					className: "flex flex-1 items-center justify-center text-[var(--sdk-color-text-secondary)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]",
					"data-slot": "number-input-increment"
				}, c?.incrementButton),
				onClick: (e) => {
					c?.incrementButton?.onClick?.(e), e.defaultPrevented || S(1);
				},
				type: "button",
				children: /* @__PURE__ */ U(g, { className: "h-3.5 w-3.5" })
			}), /* @__PURE__ */ U("button", {
				"aria-label": "Decrease value",
				...t({
					className: "flex flex-1 items-center justify-center border-t border-[var(--sdk-color-border-default)] text-[var(--sdk-color-text-secondary)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]",
					"data-slot": "number-input-decrement"
				}, c?.decrementButton),
				onClick: (e) => {
					c?.decrementButton?.onClick?.(e), e.defaultPrevented || S(-1);
				},
				type: "button",
				children: /* @__PURE__ */ U(p, { className: "h-3.5 w-3.5" })
			})]
		})]
	});
});
os.displayName = "NumberInput";
//#endregion
//#region src/components/ui/data-entry/tag-input.tsx
var ss = [
	"Enter",
	"Tab",
	","
];
function cs(e) {
	return e.trim().replace(/^#+/, "");
}
var ls = R.forwardRef(({ allowDuplicates: n = !1, className: r, defaultValue: i, maxTags: a, onValueChange: o, placeholder: s = "Add tag", slotProps: c, value: l, ...u }, d) => {
	let [f, p] = R.useState(""), [m, h] = _({
		defaultValue: i ?? [],
		onChange: o,
		value: l
	}), g = a === void 0 || m.length < a, { "aria-label": v, onChange: y, onKeyDown: b, ...x } = u, C = !!x.disabled;
	function w(e) {
		h(e);
	}
	function T(e) {
		let t = cs(e);
		!t || !g || !n && m.some((e) => e.toLowerCase() === t.toLowerCase()) || (w([...m, t]), p(""));
	}
	function E(e) {
		w(m.filter((t) => t !== e));
	}
	return /* @__PURE__ */ W("div", {
		...t({
			className: e(L, "h-auto min-h-10 flex-wrap items-center gap-2 px-2 py-2", C ? "opacity-60" : void 0, r),
			"data-disabled": C ? "true" : "false",
			"data-sdk-ui": "tag-input",
			"data-slot": "tag-input"
		}, c?.root),
		children: [m.map((e) => /* @__PURE__ */ V("span", {
			...t({
				className: "inline-flex items-center gap-1 rounded-[var(--sdk-radius-pill)] border border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel-muted)] px-2.5 py-1 text-xs font-medium text-[var(--sdk-color-text-secondary)]",
				"data-sdk-ui": "tag-input-tag",
				"data-slot": "tag-input-tag"
			}, c?.tag),
			key: e
		}, /* @__PURE__ */ U(Te, { className: "h-3 w-3" }), /* @__PURE__ */ U("span", { children: e }), /* @__PURE__ */ U("button", {
			"aria-label": `Remove ${e}`,
			...t({
				className: "rounded-[var(--sdk-radius-pill)] p-0.5 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]",
				"data-sdk-ui": "tag-input-remove-button",
				"data-slot": "tag-input-remove"
			}, c?.removeButton),
			onClick: (t) => {
				c?.removeButton?.onClick?.(t), !t.defaultPrevented && !C && E(e);
			},
			disabled: C,
			type: "button",
			children: /* @__PURE__ */ U(S, { className: "h-3 w-3" })
		}))), g ? /* @__PURE__ */ U("input", {
			"aria-label": v,
			className: "min-w-[8rem] flex-1 bg-transparent text-sm text-[var(--sdk-color-text-primary)] outline-none placeholder:text-[var(--sdk-color-text-muted)]",
			"data-sdk-ui": "tag-input-input",
			"data-slot": "tag-input-input",
			onChange: (e) => {
				if (y?.(e), e.defaultPrevented) return;
				let t = e.target.value;
				if (t.includes(",")) {
					let e = t.split(","), n = e.shift();
					n && T(n), p(e.join(","));
					return;
				}
				p(t);
			},
			onKeyDown: (e) => {
				if (b?.(e), !e.defaultPrevented) {
					if (ss.includes(e.key)) {
						f.trim() && (e.preventDefault(), T(f));
						return;
					}
					e.key === "Backspace" && !f && m.length > 0 && (e.preventDefault(), E(m[m.length - 1]));
				}
			},
			placeholder: s,
			ref: d,
			type: "text",
			value: f,
			...x
		}) : null]
	});
});
ls.displayName = "TagInput";
//#endregion
//#region src/components/ui/data-entry/upload/upload-dropzone.tsx
function us(e) {
	return e === "image" ? Ee : e === "video" ? Oe : e === "audio" ? De : e === "document" ? h : he;
}
function ds({ caption: t, description: n, disabled: r = !1, isDragging: i, onBrowse: a, onDragLeave: o, onDragOver: s, onDrop: c, onPaste: l, title: u, variant: d }) {
	let f = us(d);
	return /* @__PURE__ */ U("div", {
		"aria-disabled": r,
		className: e("rounded-[var(--sdk-radius-control)] border border-dashed px-5 py-6 transition-colors", i ? "border-[var(--sdk-color-brand-primary)] bg-[var(--sdk-color-brand-primary-soft)]" : "border-[var(--sdk-color-border-strong)] bg-[var(--sdk-color-surface-panel)]", r && "cursor-not-allowed opacity-60"),
		"data-sdk-ui": "upload-dropzone",
		"data-slot": "upload-dropzone",
		onClick: () => {
			r || a();
		},
		onDragLeave: o,
		onDragOver: s,
		onDrop: c,
		onPaste: l,
		onKeyDown: (e) => {
			r || (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a());
		},
		role: "button",
		tabIndex: r ? -1 : 0,
		children: /* @__PURE__ */ W("div", {
			className: "flex items-start gap-4",
			children: [/* @__PURE__ */ U("div", {
				className: "rounded-[var(--sdk-radius-control)] bg-[var(--sdk-color-brand-primary-soft)] p-3 text-[var(--sdk-color-brand-primary)]",
				"data-slot": "upload-dropzone-icon",
				children: /* @__PURE__ */ U(f, { className: "h-5 w-5" })
			}), /* @__PURE__ */ W("div", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ U("p", {
						className: "text-sm font-medium text-[var(--sdk-color-text-primary)]",
						"data-slot": "upload-dropzone-title",
						children: u
					}),
					/* @__PURE__ */ U("p", {
						className: "text-sm text-[var(--sdk-color-text-secondary)]",
						"data-slot": "upload-dropzone-description",
						children: n
					}),
					t ? /* @__PURE__ */ U("p", {
						className: "text-xs text-[var(--sdk-color-text-muted)]",
						"data-slot": "upload-dropzone-caption",
						children: t
					}) : null
				]
			})]
		})
	});
}
ds.displayName = "UploadDropzone";
//#endregion
//#region src/components/ui/data-entry/upload/upload-utils.ts
var fs = /* @__PURE__ */ ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.md,.json,.zip,.rar,.7z,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain,text/markdown,text/csv,application/json,application/zip,application/x-rar-compressed,application/x-7z-compressed".split(","), ps = {
	file: {
		accept: "*",
		label: "Upload files",
		listType: "list",
		emptyStateTitle: "Click to upload or drag files here",
		helperText: "All file types are supported."
	},
	image: {
		accept: "image/*",
		label: "Upload images",
		listType: "grid",
		emptyStateTitle: "Click to upload or drag images here",
		helperText: "Image formats such as PNG, JPG, GIF, WEBP, and SVG are supported."
	},
	video: {
		accept: "video/*",
		label: "Upload videos",
		listType: "list",
		emptyStateTitle: "Click to upload or drag videos here",
		helperText: "MP4, MOV, WEBM, and other browser-supported video formats are supported."
	},
	audio: {
		accept: "audio/*",
		label: "Upload audio",
		listType: "list",
		emptyStateTitle: "Click to upload or drag audio files here",
		helperText: "MP3, WAV, AAC, FLAC, and other browser-supported audio formats are supported."
	},
	document: {
		accept: fs,
		label: "Upload documents",
		listType: "list",
		emptyStateTitle: "Click to upload or drag documents here",
		helperText: "PDF, Office files, markdown, text, JSON, and archive attachments are supported."
	}
};
function ms(e) {
	let t = e.toLowerCase(), n = t.lastIndexOf(".");
	return n === -1 ? "" : t.slice(n);
}
function hs() {
	return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `sdk-file-${Math.random().toString(36).slice(2, 10)}`;
}
function gs(e) {
	return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : e < 1024 * 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)} MB` : `${(e / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}
function _s(e) {
	return e ? Array.isArray(e) ? e.join(",") : e : "*";
}
function vs(e, t) {
	let n = _s(t);
	return !n || n === "*" ? !0 : n.split(",").map((e) => e.trim()).filter(Boolean).some((t) => t.startsWith(".") ? e.name.toLowerCase().endsWith(t.toLowerCase()) : t.endsWith("/*") ? e.type.startsWith(t.slice(0, -1)) : e.type === t);
}
function ys(e) {
	return ps[e];
}
function bs(e, t) {
	return "kind" in e && e.kind ? e.kind : e.type.startsWith("image/") ? "image" : e.type.startsWith("video/") ? "video" : e.type.startsWith("audio/") ? "audio" : fs.includes(ms(e.name)) ? "document" : t;
}
function xs(e) {
	return e === "image" || e === "video" || e === "audio";
}
function Ss(e, t) {
	return e === "uploading" ? typeof t == "number" ? `Uploading ${Math.round(t)}%` : "Uploading" : e === "success" ? "Uploaded" : e === "error" ? "Failed" : "Ready";
}
function Cs(e, t) {
	let n = [];
	return Number.isFinite(e) && n.push(`Up to ${e} file${e === 1 ? "" : "s"}`), Number.isFinite(t) && n.push(`Max ${gs(t)} each`), n.join(" / ");
}
function ws(e) {
	let t = ms(e);
	return t ? t.replace(".", "").toUpperCase() : "FILE";
}
function Ts(e) {
	return e ? e.files?.length ? Array.from(e.files) : e.items?.length ? Array.from(e.items).map((e) => e.getAsFile()).filter((e) => e instanceof File) : [] : [];
}
//#endregion
//#region src/components/ui/data-entry/upload/use-upload-previews.ts
function Es(e) {
	typeof URL < "u" && typeof URL.revokeObjectURL == "function" && URL.revokeObjectURL(e);
}
function Ds(e, t) {
	let n = R.useRef({}), [r, i] = R.useState({});
	return R.useEffect(() => {
		let r = { ...n.current }, a = !1, o = new Set(e.map((e) => e.id));
		e.forEach((e) => {
			let n = e.previewUrl ?? e.url, i = bs(e, t);
			if (n || !e.file || !xs(i)) {
				r[e.id] && (Es(r[e.id]), delete r[e.id], a = !0);
				return;
			}
			r[e.id] || typeof URL > "u" || typeof URL.createObjectURL != "function" || (r[e.id] = URL.createObjectURL(e.file), a = !0);
		}), Object.entries(r).forEach(([e, t]) => {
			o.has(e) || (Es(t), delete r[e], a = !0);
		}), a && (n.current = r, i(r));
	}, [t, e]), R.useEffect(() => () => {
		Object.values(n.current).forEach((e) => Es(e)), n.current = {};
	}, []), { getPreviewUrl(e) {
		return e.previewUrl ?? e.url ?? r[e.id];
	} };
}
//#endregion
//#region src/components/ui/data-entry/upload/upload-item.tsx
function Os(e) {
	return e.filter(Boolean).join(" / ");
}
function ks(e) {
	typeof window > "u" || typeof window.open != "function" || window.open(e, "_blank", "noopener,noreferrer");
}
function As(e, t) {
	if (typeof document > "u") return;
	let n = document.createElement("a");
	n.href = e, n.download = t, n.rel = "noopener noreferrer", n.target = "_blank", n.click();
}
function js(e) {
	let t = e.toLowerCase();
	return t.endsWith(".zip") || t.endsWith(".rar") || t.endsWith(".7z") ? ve : t.endsWith(".xls") || t.endsWith(".xlsx") || t.endsWith(".csv") ? we : t.endsWith(".json") ? ye : t.endsWith(".md") ? be : h;
}
function Ms(e, t) {
	return t === "image" ? Se : t === "video" ? Ce : t === "audio" ? xe : js(e.name);
}
function Ns(e, t, n, r = !1) {
	return t === "image" && n ? /* @__PURE__ */ U("img", {
		alt: `Preview ${e.name}`,
		className: "h-full w-full object-cover",
		src: n
	}) : t === "video" && n ? /* @__PURE__ */ U("video", {
		"aria-label": `Preview ${e.name}`,
		className: "h-full w-full object-cover",
		controls: !r,
		muted: !0,
		playsInline: !0,
		preload: "metadata",
		src: n
	}) : null;
}
function Ps({ disabled: t = !1, fallbackVariant: n, item: i, listType: a, onDownload: o, onRemove: s, onPreview: c, onRetry: l, previewUrl: u }) {
	let d = bs(i, n), f = Ms(i, d), p = i.status === "uploading" && typeof i.progress == "number", m = i.status === "error" && i.error ? i.error : Ss(i.status, i.progress), h = Ns(i, d, u, a === "grid"), g = a === "grid", _ = u ?? i.previewUrl ?? i.url, y = i.url ?? u ?? i.previewUrl, x = !!(i.previewUrl || i.url), C = !!(i.url || i.previewUrl), w = !!(c || x), T = !!(o || C), E = !!(l && i.status === "error" && !t), D = h || d === "audio" && u ? `Open preview ${i.name}` : `Preview ${i.name}`, O = w || T || E ? /* @__PURE__ */ W("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			w ? /* @__PURE__ */ W(r, {
				"aria-label": D,
				onClick: () => {
					if (c) {
						c(i);
						return;
					}
					_ && ks(_);
				},
				size: "sm",
				type: "button",
				variant: "ghost",
				children: [/* @__PURE__ */ U(_e, { className: "h-4 w-4" }), /* @__PURE__ */ U("span", { children: "Preview" })]
			}) : null,
			T ? /* @__PURE__ */ W(r, {
				"aria-label": `Download ${i.name}`,
				onClick: () => {
					if (o) {
						o(i);
						return;
					}
					y && As(y, i.name);
				},
				size: "sm",
				type: "button",
				variant: "ghost",
				children: [/* @__PURE__ */ U(ge, { className: "h-4 w-4" }), /* @__PURE__ */ U("span", { children: "Download" })]
			}) : null,
			E ? /* @__PURE__ */ W(r, {
				"aria-label": `Retry ${i.name}`,
				onClick: () => l?.(i),
				size: "sm",
				type: "button",
				variant: "outline",
				children: [/* @__PURE__ */ U(b, { className: "h-4 w-4" }), /* @__PURE__ */ U("span", { children: "Retry" })]
			}) : null
		]
	}) : null;
	return g ? /* @__PURE__ */ W("div", {
		className: "rounded-[var(--sdk-radius-control)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] shadow-[var(--sdk-shadow-sm)]",
		"data-sdk-ui": "upload-item",
		"data-sdk-variant": "grid",
		"data-slot": "upload-item",
		children: [/* @__PURE__ */ W("div", {
			className: "relative aspect-square overflow-hidden rounded-t-[var(--sdk-radius-control)] bg-[var(--sdk-color-surface-panel-muted)]",
			"data-slot": "upload-item-preview",
			children: [h || /* @__PURE__ */ U("div", {
				className: "flex h-full w-full items-center justify-center text-[var(--sdk-color-text-secondary)]",
				children: /* @__PURE__ */ U(f, { className: "h-10 w-10" })
			}), t ? null : /* @__PURE__ */ W("button", {
				className: "absolute right-2 top-2 rounded-full bg-[var(--sdk-color-surface-panel)]/90 p-2 text-[var(--sdk-color-text-secondary)] shadow-[var(--sdk-shadow-sm)] transition-colors hover:text-[var(--sdk-color-text-primary)]",
				onClick: () => s(i.id),
				"data-slot": "upload-item-remove-button",
				type: "button",
				children: [/* @__PURE__ */ U(S, { className: "h-4 w-4" }), /* @__PURE__ */ W("span", {
					className: "sr-only",
					children: ["Remove ", i.name]
				})]
			})]
		}), /* @__PURE__ */ W("div", {
			className: "space-y-2 px-4 py-3",
			children: [
				/* @__PURE__ */ W("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ U("p", {
						className: "truncate text-sm font-medium text-[var(--sdk-color-text-primary)]",
						"data-slot": "upload-item-name",
						children: i.name
					}), /* @__PURE__ */ U("p", {
						className: "text-xs text-[var(--sdk-color-text-secondary)]",
						"data-slot": "upload-item-metadata",
						children: Os([gs(i.size), m])
					})]
				}),
				d === "audio" && u ? /* @__PURE__ */ U("audio", {
					"aria-label": `Preview ${i.name}`,
					className: "w-full",
					controls: !0,
					preload: "metadata",
					src: u
				}) : null,
				p ? /* @__PURE__ */ U(v, { value: i.progress }) : null,
				O
			]
		})]
	}) : /* @__PURE__ */ U("div", {
		className: "rounded-[var(--sdk-radius-control)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] px-4 py-3",
		"data-sdk-ui": "upload-item",
		"data-sdk-variant": "list",
		"data-slot": "upload-item",
		children: /* @__PURE__ */ W("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ U("div", {
				className: e("overflow-hidden rounded-[var(--sdk-radius-control)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-secondary)]", d === "video" ? "aspect-video w-28 shrink-0" : "flex h-12 w-12 shrink-0 items-center justify-center"),
				"data-slot": "upload-item-preview",
				children: h || /* @__PURE__ */ U(f, { className: "h-5 w-5" })
			}), /* @__PURE__ */ W("div", {
				className: "min-w-0 flex-1 space-y-2",
				children: [
					/* @__PURE__ */ W("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ W("div", {
							className: "min-w-0 space-y-1",
							children: [/* @__PURE__ */ U("p", {
								className: "truncate text-sm font-medium text-[var(--sdk-color-text-primary)]",
								"data-slot": "upload-item-name",
								children: i.name
							}), /* @__PURE__ */ U("p", {
								className: "text-xs text-[var(--sdk-color-text-secondary)]",
								"data-slot": "upload-item-metadata",
								children: Os([
									gs(i.size),
									ws(i.name),
									m
								])
							})]
						}), t ? null : /* @__PURE__ */ W("button", {
							className: "rounded-full p-2 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)]",
							onClick: () => s(i.id),
							"data-slot": "upload-item-remove-button",
							type: "button",
							children: [/* @__PURE__ */ U(S, { className: "h-4 w-4" }), /* @__PURE__ */ W("span", {
								className: "sr-only",
								children: ["Remove ", i.name]
							})]
						})]
					}),
					d === "audio" && u ? /* @__PURE__ */ U("audio", {
						"aria-label": `Preview ${i.name}`,
						className: "w-full",
						controls: !0,
						preload: "metadata",
						src: u
					}) : null,
					p ? /* @__PURE__ */ U(v, { value: i.progress }) : null,
					O
				]
			})]
		})
	});
}
Ps.displayName = "UploadItem";
//#endregion
//#region src/components/ui/data-entry/upload/file-upload.tsx
function Fs(e, t, n) {
	let [r, i] = R.useState(t), a = e !== void 0;
	return [a ? e : r, R.useCallback((e) => {
		a || i(e), n?.(e);
	}, [a, n])];
}
var Is = R.forwardRef(({ accept: t, allowPaste: n = !1, className: i, clearable: a = !1, defaultValue: o = [], description: s, directory: c = !1, disabled: l = !1, emptyStateDescription: u, emptyStateTitle: d, label: f, listType: p, maxFiles: m = Infinity, maxSize: h = Infinity, multiple: g = !0, onClear: _, onDownloadItem: v, onPreviewItem: b, onReject: S, onRetryItem: C, onValueChange: w, rejectionTitle: T = "Some files could not be added.", replaceOnMax: E, showRejections: D = !0, value: O, variant: k = "file", ...ee }, A) => {
	let j = ys(k), M = t ?? j.accept, N = _s(M), P = p ?? j.listType, F = f ?? j.label, I = d ?? j.emptyStateTitle, te = u ?? (N === _s(j.accept) ? j.helperText : `Accepted: ${N}`), L = E ?? m === 1, ne = Cs(m, h), z = R.useId(), [B, V] = Fs(O, o, w), [H, re] = R.useState(!1), [ie, ae] = R.useState([]), oe = R.useRef(null), { getPreviewUrl: se } = Ds(B, k), ce = l || B.length >= m && !(L && m === 1), le = c ? {
		directory: "",
		webkitdirectory: ""
	} : {}, ue = R.useCallback((e) => {
		if (!e || Array.isArray(e) && !e.length || "length" in e && !e.length) return;
		let t = Array.isArray(e) ? e : Array.from(e), n = L && m === 1 ? [] : [...B], r = [];
		t.slice(0, g ? void 0 : 1).forEach((e) => {
			if (n.length >= m) {
				r.push({
					file: e,
					message: `Maximum ${m} file${m === 1 ? "" : "s"} allowed.`,
					reason: "max-files"
				});
				return;
			}
			if (e.size > h) {
				r.push({
					file: e,
					message: `${e.name} exceeds the ${gs(h)} limit.`,
					reason: "file-too-large"
				});
				return;
			}
			if (!vs(e, M)) {
				r.push({
					file: e,
					message: `${e.name} is not an accepted file type.`,
					reason: "invalid-type"
				});
				return;
			}
			n.push({
				file: e,
				id: hs(),
				kind: bs(e, k),
				name: e.name,
				size: e.size,
				status: "idle",
				type: e.type
			});
		}), V(n), ae(r), r.length && S?.(r), oe.current && (oe.current.value = "");
	}, [
		B,
		m,
		h,
		g,
		S,
		M,
		L,
		V,
		k
	]), de = R.useCallback((e) => {
		V(B.filter((t) => t.id !== e));
	}, [B, V]), fe = R.useCallback(() => {
		V([]), ae([]), _?.(), oe.current && (oe.current.value = "");
	}, [_, V]);
	return /* @__PURE__ */ W("div", {
		ref: A,
		className: e("space-y-3", i),
		"data-sdk-ui": "file-upload",
		"data-slot": "file-upload",
		...ee,
		children: [
			/* @__PURE__ */ W("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ W("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ U(x, {
						"data-slot": "file-upload-label",
						htmlFor: z,
						children: F
					}), s ? /* @__PURE__ */ U("p", {
						className: "text-sm text-[var(--sdk-color-text-secondary)]",
						"data-slot": "file-upload-description",
						children: s
					}) : null]
				}), a && B.length ? /* @__PURE__ */ U(r, {
					"data-slot": "file-upload-clear-button",
					onClick: fe,
					size: "sm",
					type: "button",
					variant: "ghost",
					children: "Clear all files"
				}) : null]
			}),
			/* @__PURE__ */ U("input", {
				...le,
				accept: N === "*" ? void 0 : N,
				"aria-label": F,
				className: "sr-only",
				disabled: ce,
				id: z,
				multiple: g,
				onChange: (e) => ue(e.target.files),
				ref: oe,
				type: "file"
			}),
			/* @__PURE__ */ U(ds, {
				caption: B.length >= m && Number.isFinite(m) ? `Maximum ${m} file${m === 1 ? "" : "s"} selected. Remove one to add another.` : ne,
				description: te,
				disabled: ce,
				isDragging: H,
				onBrowse: () => oe.current?.click(),
				onDragLeave: () => re(!1),
				onDragOver: (e) => {
					e.preventDefault(), ce || re(!0);
				},
				onDrop: (e) => {
					e.preventDefault(), re(!1), ce || ue(e.dataTransfer.files);
				},
				onPaste: (e) => {
					if (!n || ce) return;
					let t = Ts(e.clipboardData);
					t.length && (e.preventDefault(), ue(t));
				},
				title: B.length >= m && Number.isFinite(m) ? L && m === 1 ? "Select a new file to replace the current one" : `Maximum ${m} file${m === 1 ? "" : "s"} selected` : I,
				variant: k
			}),
			D && ie.length ? /* @__PURE__ */ U(y, {
				description: /* @__PURE__ */ U("ul", {
					className: "space-y-1",
					children: ie.map((e) => /* @__PURE__ */ U("li", { children: e.message }, `${e.file.name}-${e.reason}`))
				}),
				title: T,
				tone: "warning"
			}) : null,
			B.length ? /* @__PURE__ */ U("div", {
				className: e(P === "grid" ? "grid gap-3 sm:grid-cols-2 xl:grid-cols-3" : "space-y-2"),
				"data-sdk-region": "file-upload-list",
				"data-slot": "file-upload-list",
				children: B.map((e) => /* @__PURE__ */ U(Ps, {
					disabled: l,
					fallbackVariant: k,
					item: e,
					listType: P,
					onDownload: v,
					onRemove: de,
					onPreview: b,
					onRetry: C,
					previewUrl: se(e)
				}, e.id))
			}) : null
		]
	});
});
Is.displayName = "FileUpload";
//#endregion
//#region src/components/ui/data-entry/upload/upload-presets.tsx
function Ls({ accept: e, listType: t, ...n }) {
	let r = ys("image");
	return /* @__PURE__ */ U(Is, {
		accept: e ?? r.accept,
		"data-sdk-ui": "image-upload",
		"data-slot": "image-upload",
		listType: t ?? r.listType,
		variant: "image",
		...n
	});
}
function Rs({ accept: e, listType: t, ...n }) {
	let r = ys("video");
	return /* @__PURE__ */ U(Is, {
		accept: e ?? r.accept,
		"data-sdk-ui": "video-upload",
		"data-slot": "video-upload",
		listType: t ?? r.listType,
		variant: "video",
		...n
	});
}
function zs({ accept: e, listType: t, ...n }) {
	let r = ys("audio");
	return /* @__PURE__ */ U(Is, {
		accept: e ?? r.accept,
		"data-sdk-ui": "audio-upload",
		"data-slot": "audio-upload",
		listType: t ?? r.listType,
		variant: "audio",
		...n
	});
}
function Bs({ accept: e, listType: t, ...n }) {
	let r = ys("document");
	return /* @__PURE__ */ U(Is, {
		accept: e ?? r.accept,
		"data-sdk-ui": "document-upload",
		"data-slot": "document-upload",
		listType: t ?? r.listType,
		variant: "document",
		...n
	});
}
Ls.displayName = "ImageUpload", Rs.displayName = "VideoUpload", zs.displayName = "AudioUpload", Bs.displayName = "DocumentUpload";
//#endregion
export { Me as S, bn as _, Is as a, mt as b, ts as c, Lo as d, kn as f, xn as g, Sn as h, Rs as i, rs as l, An as m, Bs as n, ls as o, Dn as p, Ls as r, os as s, zs as t, ns as u, rn as v, je as x, pt as y };

//# sourceMappingURL=data-entry-Bo9dpopB.js.map