import { t as e } from "./utils-Bd3-tWic.js";
import { n as t } from "./slot-props-CbL7iOod.js";
import { i as n, r, t as i } from "./button-H3P8lcre.js";
import { t as a } from "./createLucideIcon-19v64F-t.js";
import { i as o, n as s, t as c } from "./states-DX7geNOA.js";
import { a as l, i as u, p as d, r as f, v as p } from "./Combination-CioGxkCi.js";
import { i as m, n as h, r as g, t as ee } from "./pagination-CeTLKuAs.js";
import { t as te } from "./chevron-right-DC6qY1J1.js";
import { a as _, c as ne, f as re, l as v, n as ie, r as ae, t as y, u as oe } from "./use-controllable-state-CU8uiH3u.js";
import { t as se } from "./circle-check-C8DSYpaw.js";
import { t as b } from "./triangle-alert-BB2Uy60L.js";
import { i as x, n as S, o as C, r as ce, s as w, t as T } from "./dist-D2r-1rhT.js";
import { t as E } from "./dist-DUsjyQ_S.js";
import { BulkActionBar as le } from "./ui-actions.js";
import { a as ue, n as de, o as D, r as fe, t as pe } from "./card-1E4JaxeV.js";
import * as O from "react";
import { createElement as me } from "react";
import { Fragment as k, jsx as A, jsxs as j } from "react/jsx-runtime";
var M = a("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), he = a("arrow-up-down", [
	["path", {
		d: "m21 16-4 4-4-4",
		key: "f6ql7i"
	}],
	["path", {
		d: "M17 20V4",
		key: "1ejh1v"
	}],
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}]
]), N = a("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), P = a("circle-pause", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "10",
		x2: "10",
		y1: "15",
		y2: "9",
		key: "c1nkhi"
	}],
	["line", {
		x1: "14",
		x2: "14",
		y1: "15",
		y2: "9",
		key: "h65svq"
	}]
]), F = a("circle-x", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), ge = a("folder-open", [["path", {
	d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
	key: "usdka0"
}]]), I = a("folder", [["path", {
	d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
	key: "1kt360"
}]]), L = !1;
function R() {
	let [e, t] = O.useState(L);
	return O.useEffect(() => {
		L || (L = !0, t(!0));
	}, []), e;
}
var z = O.useSyncExternalStore;
function _e() {
	return () => {};
}
function ve() {
	return z(_e, () => !0, () => !1);
}
var ye = typeof z == "function" ? ve : R, B = "Avatar", [be, xe] = C(B), [V, H] = be(B), U = O.forwardRef((e, t) => {
	let { __scopeAvatar: n, ...r } = e, [i, a] = O.useState("idle");
	return /* @__PURE__ */ A(V, {
		scope: n,
		imageLoadingStatus: i,
		onImageLoadingStatusChange: a,
		children: /* @__PURE__ */ A(E.span, {
			...r,
			ref: t
		})
	});
});
U.displayName = B;
var Se = "AvatarImage", W = O.forwardRef((e, t) => {
	let { __scopeAvatar: n, src: r, onLoadingStatusChange: i = () => {}, ...a } = e, o = H(Se, n), s = Ee(r, a), c = S((e) => {
		i(e), o.onImageLoadingStatusChange(e);
	});
	return x(() => {
		s !== "idle" && c(s);
	}, [s, c]), s === "loaded" ? /* @__PURE__ */ A(E.img, {
		...a,
		ref: t,
		src: r
	}) : null;
});
W.displayName = Se;
var Ce = "AvatarFallback", we = O.forwardRef((e, t) => {
	let { __scopeAvatar: n, delayMs: r, ...i } = e, a = H(Ce, n), [o, s] = O.useState(r === void 0);
	return O.useEffect(() => {
		if (r !== void 0) {
			let e = window.setTimeout(() => s(!0), r);
			return () => window.clearTimeout(e);
		}
	}, [r]), o && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ A(E.span, {
		...i,
		ref: t
	}) : null;
});
we.displayName = Ce;
function Te(e, t) {
	return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function Ee(e, { referrerPolicy: t, crossOrigin: n }) {
	let r = ye(), i = O.useRef(null), a = r ? (i.current ||= new window.Image(), i.current) : null, [o, s] = O.useState(() => Te(a, e));
	return x(() => {
		s(Te(a, e));
	}, [a, e]), x(() => {
		let e = (e) => () => {
			s(e);
		};
		if (!a) return;
		let r = e("loaded"), i = e("error");
		return a.addEventListener("load", r), a.addEventListener("error", i), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
			a.removeEventListener("load", r), a.removeEventListener("error", i);
		};
	}, [
		a,
		n,
		t
	]), o;
}
var De = U, Oe = W, ke = we, G = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A(De, {
	ref: r,
	className: e("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-primary)]", t),
	"data-sdk-ui": "avatar",
	"data-slot": "avatar",
	...n
}));
G.displayName = "Avatar";
var Ae = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A(Oe, {
	ref: r,
	className: e("aspect-square h-full w-full object-cover", t),
	"data-sdk-ui": "avatar-image",
	"data-slot": "avatar-image",
	...n
}));
Ae.displayName = "AvatarImage";
var je = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A(ke, {
	ref: r,
	className: e("flex h-full w-full items-center justify-center rounded-full bg-[var(--sdk-color-brand-primary-soft)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--sdk-color-text-primary)]", t),
	"data-sdk-ui": "avatar-fallback",
	"data-slot": "avatar-fallback",
	...n
}));
je.displayName = "AvatarFallback";
//#endregion
//#region src/components/ui/badge.tsx
var Me = n("inline-flex items-center rounded-[var(--sdk-radius-pill)] px-2.5 py-1 text-xs font-medium transition-colors", {
	variants: { variant: {
		default: "bg-[var(--sdk-color-brand-primary-soft)] text-[var(--sdk-color-brand-primary)]",
		secondary: "bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-secondary)]",
		success: "bg-[color-mix(in_srgb,var(--sdk-color-state-success)_16%,transparent)] text-[var(--sdk-color-state-success)]",
		warning: "bg-[color-mix(in_srgb,var(--sdk-color-state-warning)_16%,transparent)] text-[var(--sdk-color-state-warning)]",
		danger: "bg-[color-mix(in_srgb,var(--sdk-color-state-danger)_16%,transparent)] text-[var(--sdk-color-state-danger)]",
		outline: "border border-[var(--sdk-color-border-default)] text-[var(--sdk-color-text-secondary)]"
	} },
	defaultVariants: { variant: "default" }
}), Ne = O.forwardRef(({ className: t, variant: n, ...r }, i) => /* @__PURE__ */ A("div", {
	ref: i,
	className: e(Me({ variant: n }), t),
	"data-sdk-ui": "badge",
	"data-slot": "badge",
	...r
}));
Ne.displayName = "Badge";
//#endregion
//#region src/components/ui/stat-card.tsx
var Pe = {
	default: "text-[var(--sdk-color-text-secondary)]",
	success: "text-[var(--sdk-color-state-success)]",
	warning: "text-[var(--sdk-color-state-warning)]",
	danger: "text-[var(--sdk-color-state-danger)]"
};
function Fe({ change: t, changeTone: n = "default", className: r, description: i, icon: a, label: o, value: s, ...c }) {
	return /* @__PURE__ */ j(pe, {
		className: e("h-full", r),
		"data-sdk-ui": "stat-card",
		"data-slot": "stat-card",
		...c,
		children: [/* @__PURE__ */ j(ue, {
			className: "flex flex-row items-start justify-between gap-4 space-y-0",
			"data-slot": "stat-card-header",
			children: [/* @__PURE__ */ j("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ A(fe, {
					"data-slot": "stat-card-label",
					children: o
				}), /* @__PURE__ */ A(D, {
					className: "text-3xl",
					"data-slot": "stat-card-value",
					children: s
				})]
			}), a ? /* @__PURE__ */ A("div", {
				className: "text-[var(--sdk-color-text-secondary)]",
				"data-slot": "stat-card-icon",
				children: a
			}) : null]
		}), i || t ? /* @__PURE__ */ j(de, {
			className: "flex items-center gap-4",
			"data-slot": "stat-card-body",
			children: [i ? /* @__PURE__ */ A("p", {
				className: "flex-1 text-sm text-[var(--sdk-color-text-secondary)]",
				"data-slot": "stat-card-description",
				children: i
			}) : null, t ? /* @__PURE__ */ A("span", {
				className: e("ml-auto text-sm font-medium", Pe[n]),
				"data-slot": "stat-card-change",
				children: t
			}) : null]
		}) : null]
	});
}
Fe.displayName = "StatCard";
//#endregion
//#region src/components/ui/status-badge.tsx
var Ie = {
	active: "success",
	completed: "success",
	connected: "success",
	enabled: "success",
	healthy: "success",
	live: "success",
	online: "success",
	success: "success",
	paused: "warning",
	pending: "warning",
	processing: "warning",
	queued: "warning",
	syncing: "warning",
	warning: "warning",
	archived: "secondary",
	disabled: "secondary",
	draft: "secondary",
	idle: "secondary",
	inactive: "secondary",
	rejected: "danger",
	error: "danger",
	failed: "danger",
	offline: "danger"
}, Le = {
	success: se,
	warning: b,
	danger: F,
	default: o,
	secondary: P
};
function Re(e, t) {
	return t || (Ie[e.trim().toLowerCase()] ?? "default");
}
function ze({ className: t, label: n, showIcon: r = !1, status: i, variant: a, ...o }) {
	let s = Re(i, a), c = Le[s];
	return /* @__PURE__ */ j(Ne, {
		className: e("gap-1.5 capitalize", t),
		"data-sdk-ui": "status-badge",
		"data-slot": "status-badge",
		"data-variant": s,
		variant: s,
		...o,
		children: [r ? /* @__PURE__ */ A("span", {
			className: "inline-flex",
			"data-slot": "status-badge-icon",
			children: /* @__PURE__ */ A(c, { className: "h-3.5 w-3.5" })
		}) : null, /* @__PURE__ */ A("span", {
			"data-slot": "status-badge-label",
			children: n ?? i
		})]
	});
}
ze.displayName = "StatusBadge";
//#endregion
//#region src/components/ui/table.tsx
var Be = "relative w-full overflow-auto", Ve = "w-full caption-bottom text-sm", He = "[&_tr]:border-b [&_tr]:border-[var(--sdk-color-border-default)]", Ue = "[&_tr:last-child]:border-0", We = "border-t border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] font-medium [&>tr]:last:border-b-0", Ge = "border-b border-[var(--sdk-color-border-subtle)] transition-colors data-[state=selected]:bg-[var(--sdk-color-brand-primary-soft)]", Ke = "h-11 px-4 text-left align-middle text-sm font-medium text-[var(--sdk-color-text-secondary)]", qe = "p-4 align-middle text-[var(--sdk-color-text-primary)]", Je = "mt-4 text-sm text-[var(--sdk-color-text-secondary)]", Ye = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("div", {
	className: Be,
	"data-slot": "table-viewport",
	children: /* @__PURE__ */ A("table", {
		ref: r,
		className: e(Ve, t),
		"data-sdk-ui": "table",
		"data-slot": "table",
		...n
	})
}));
Ye.displayName = "Table";
var Xe = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("thead", {
	ref: r,
	className: e(He, t),
	"data-sdk-ui": "table-header",
	"data-slot": "table-header",
	...n
}));
Xe.displayName = "TableHeader";
var Ze = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("tbody", {
	ref: r,
	className: e(Ue, t),
	"data-sdk-ui": "table-body",
	"data-slot": "table-body",
	...n
}));
Ze.displayName = "TableBody";
var Qe = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("tfoot", {
	ref: r,
	className: e(We, t),
	"data-sdk-ui": "table-footer",
	"data-slot": "table-footer",
	...n
}));
Qe.displayName = "TableFooter";
var $e = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("tr", {
	ref: r,
	className: e(Ge, t),
	"data-sdk-ui": "table-row",
	"data-slot": "table-row",
	...n
}));
$e.displayName = "TableRow";
var et = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("th", {
	ref: r,
	className: e(Ke, t),
	"data-sdk-ui": "table-head",
	"data-slot": "table-head",
	...n
}));
et.displayName = "TableHead";
var tt = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("td", {
	ref: r,
	className: e(qe, t),
	"data-sdk-ui": "table-cell",
	"data-slot": "table-cell",
	...n
}));
tt.displayName = "TableCell";
var nt = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("caption", {
	ref: r,
	className: e(Je, t),
	"data-sdk-ui": "table-caption",
	"data-slot": "table-caption",
	...n
}));
nt.displayName = "TableCaption";
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-tabs@1.1.14_977946fdda377d2101ce74cb5247fe89/node_modules/@radix-ui/react-tabs/dist/index.mjs
var rt = "Tabs", [it, at] = C(rt, [l]), ot = l(), [st, ct] = it(rt), lt = O.forwardRef((e, t) => {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, u = ce(s), [f, m] = p({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: rt
	});
	return /* @__PURE__ */ A(st, {
		scope: n,
		baseId: d(),
		value: f,
		onValueChange: m,
		orientation: o,
		dir: u,
		activationMode: c,
		children: /* @__PURE__ */ A(E.div, {
			dir: u,
			"data-orientation": o,
			...l,
			ref: t
		})
	});
});
lt.displayName = rt;
var ut = "TabsList", dt = O.forwardRef((e, t) => {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, a = ct(ut, n);
	return /* @__PURE__ */ A(u, {
		asChild: !0,
		...ot(n),
		orientation: a.orientation,
		dir: a.dir,
		loop: r,
		children: /* @__PURE__ */ A(E.div, {
			role: "tablist",
			"aria-orientation": a.orientation,
			...i,
			ref: t
		})
	});
});
dt.displayName = ut;
var ft = "TabsTrigger", pt = O.forwardRef((e, t) => {
	let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e, o = ct(ft, n), s = ot(n), c = gt(o.baseId, r), l = _t(o.baseId, r), u = r === o.value;
	return /* @__PURE__ */ A(f, {
		asChild: !0,
		...s,
		focusable: !i,
		active: u,
		children: /* @__PURE__ */ A(E.button, {
			type: "button",
			role: "tab",
			"aria-selected": u,
			"aria-controls": l,
			"data-state": u ? "active" : "inactive",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			id: c,
			...a,
			ref: t,
			onMouseDown: w(e.onMouseDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 ? o.onValueChange(r) : e.preventDefault();
			}),
			onKeyDown: w(e.onKeyDown, (e) => {
				[" ", "Enter"].includes(e.key) && o.onValueChange(r);
			}),
			onFocus: w(e.onFocus, () => {
				let e = o.activationMode !== "manual";
				!u && !i && e && o.onValueChange(r);
			})
		})
	});
});
pt.displayName = ft;
var mt = "TabsContent", ht = O.forwardRef((e, t) => {
	let { __scopeTabs: n, value: r, forceMount: i, children: a, ...o } = e, s = ct(mt, n), c = gt(s.baseId, r), l = _t(s.baseId, r), u = r === s.value, d = O.useRef(u);
	return O.useEffect(() => {
		let e = requestAnimationFrame(() => d.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ A(T, {
		present: i || u,
		children: ({ present: n }) => /* @__PURE__ */ A(E.div, {
			"data-state": u ? "active" : "inactive",
			"data-orientation": s.orientation,
			role: "tabpanel",
			"aria-labelledby": c,
			hidden: !n,
			id: l,
			tabIndex: 0,
			...o,
			ref: t,
			style: {
				...e.style,
				animationDuration: d.current ? "0s" : void 0
			},
			children: n && a
		})
	});
});
ht.displayName = mt;
function gt(e, t) {
	return `${e}-trigger-${t}`;
}
function _t(e, t) {
	return `${e}-content-${t}`;
}
var vt = lt, yt = dt, bt = pt, xt = ht, St = O.forwardRef(({ ...e }, t) => /* @__PURE__ */ A(vt, {
	ref: t,
	"data-sdk-ui": "tabs",
	"data-slot": "tabs",
	...e
})), Ct = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A(yt, {
	ref: r,
	className: e("inline-flex h-10 items-center gap-1 rounded-[var(--sdk-radius-control)] bg-[var(--sdk-color-surface-panel-muted)] p-1 text-[var(--sdk-color-text-secondary)]", t),
	"data-sdk-ui": "tabs-list",
	"data-slot": "tabs-list",
	...n
}));
Ct.displayName = "TabsList";
var wt = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A(bt, {
	ref: r,
	className: e("inline-flex min-w-[6rem] items-center justify-center rounded-[var(--sdk-radius-control)] px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sdk-color-surface-canvas)] data-[state=active]:bg-[var(--sdk-color-surface-panel)] data-[state=active]:text-[var(--sdk-color-text-primary)] data-[state=active]:shadow-[var(--sdk-shadow-sm)]", t),
	"data-sdk-ui": "tabs-trigger",
	"data-slot": "tabs-trigger",
	...n
}));
wt.displayName = "TabsTrigger";
var Tt = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A(xt, {
	ref: r,
	className: e("mt-4 rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-5 text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)]", t),
	"data-sdk-ui": "tabs-content",
	"data-slot": "tabs-content",
	...n
}));
Tt.displayName = "TabsContent", St.displayName = "Tabs";
//#endregion
//#region src/components/ui/data-display/collection-grid.tsx
var Et = O.forwardRef(({ className: n, emptyActions: r, emptyDescription: i, emptyTitle: a = "No items", getItemKey: o, items: l, loading: u = !1, loadingLabel: d, pagination: f, renderItem: p, slotProps: m, ...h }, g) => /* @__PURE__ */ A("div", {
	ref: g,
	className: e("flex flex-col gap-6", n),
	"data-sdk-ui": "collection-grid",
	"data-slot": "collection-grid",
	...h,
	children: u ? /* @__PURE__ */ A(s, { label: d }) : l.length === 0 ? /* @__PURE__ */ A(c, {
		actions: r,
		description: i,
		title: a
	}) : /* @__PURE__ */ j(k, { children: [/* @__PURE__ */ A("div", {
		...t({ className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" }, m?.grid),
		"data-sdk-region": "collection-grid-grid",
		children: l.map((e, t) => /* @__PURE__ */ A(O.Fragment, { children: p(e, t) }, o?.(e, t) ?? e.id ?? t))
	}), f ? /* @__PURE__ */ A("div", {
		...t({}, m?.pagination),
		"data-sdk-region": "collection-grid-pagination",
		children: f
	}) : null] })
}));
Et.displayName = "CollectionGrid";
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@tanstack+table-core@8.21.3/node_modules/@tanstack/table-core/build/lib/index.mjs
function K(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function q(e, t) {
	return (n) => {
		t.setState((t) => ({
			...t,
			[e]: K(n, t[e])
		}));
	};
}
function Dt(e) {
	return e instanceof Function;
}
function Ot(e) {
	return Array.isArray(e) && e.every((e) => typeof e == "number");
}
function kt(e, t) {
	let n = [], r = (e) => {
		e.forEach((e) => {
			n.push(e);
			let i = t(e);
			i != null && i.length && r(i);
		});
	};
	return r(e), n;
}
function J(e, t, n) {
	let r = [], i;
	return (a) => {
		let o;
		n.key && n.debug && (o = Date.now());
		let s = e(a);
		if (!(s.length !== r.length || s.some((e, t) => r[t] !== e))) return i;
		r = s;
		let c;
		if (n.key && n.debug && (c = Date.now()), i = t(...s), n == null || n.onChange == null || n.onChange(i), n.key && n.debug && n != null && n.debug()) {
			let e = Math.round((Date.now() - o) * 100) / 100, t = Math.round((Date.now() - c) * 100) / 100, r = t / 16, i = (e, t) => {
				for (e = String(e); e.length < t;) e = " " + e;
				return e;
			};
			console.info(`%c⏱ ${i(t, 5)} /${i(e, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`, n?.key);
		}
		return i;
	};
}
function Y(e, t, n, r) {
	return {
		debug: () => e?.debugAll ?? e[t],
		key: process.env.NODE_ENV === "development" && n,
		onChange: r
	};
}
function At(e, t, n, r) {
	let i = {
		id: `${t.id}_${n.id}`,
		row: t,
		column: n,
		getValue: () => t.getValue(r),
		renderValue: () => i.getValue() ?? e.options.renderFallbackValue,
		getContext: J(() => [
			e,
			n,
			t,
			i
		], (e, t, n, r) => ({
			table: e,
			column: t,
			row: n,
			cell: r,
			getValue: r.getValue,
			renderValue: r.renderValue
		}), Y(e.options, "debugCells", "cell.getContext"))
	};
	return e._features.forEach((r) => {
		r.createCell == null || r.createCell(i, n, t, e);
	}, {}), i;
}
function jt(e, t, n, r) {
	let i = {
		...e._getDefaultColumnDef(),
		...t
	}, a = i.accessorKey, o = i.id ?? (a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) ?? (typeof i.header == "string" ? i.header : void 0), s;
	if (i.accessorFn ? s = i.accessorFn : a && (s = a.includes(".") ? (e) => {
		let t = e;
		for (let e of a.split(".")) t = t?.[e], process.env.NODE_ENV !== "production" && t === void 0 && console.warn(`"${e}" in deeply nested key "${a}" returned undefined.`);
		return t;
	} : (e) => e[i.accessorKey]), !o) throw process.env.NODE_ENV === "production" ? Error() : Error(i.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header");
	let c = {
		id: `${String(o)}`,
		accessorFn: s,
		parent: r,
		depth: n,
		columnDef: i,
		columns: [],
		getFlatColumns: J(() => [!0], () => [c, ...c.columns?.flatMap((e) => e.getFlatColumns())], Y(e.options, "debugColumns", "column.getFlatColumns")),
		getLeafColumns: J(() => [e._getOrderColumnsFn()], (e) => {
			var t;
			return (t = c.columns) != null && t.length ? e(c.columns.flatMap((e) => e.getLeafColumns())) : [c];
		}, Y(e.options, "debugColumns", "column.getLeafColumns"))
	};
	for (let t of e._features) t.createColumn == null || t.createColumn(c, e);
	return c;
}
var X = "debugHeaders";
function Mt(e, t, n) {
	let r = {
		id: n.id ?? t.id,
		column: t,
		index: n.index,
		isPlaceholder: !!n.isPlaceholder,
		placeholderId: n.placeholderId,
		depth: n.depth,
		subHeaders: [],
		colSpan: 0,
		rowSpan: 0,
		headerGroup: null,
		getLeafHeaders: () => {
			let e = [], t = (n) => {
				n.subHeaders && n.subHeaders.length && n.subHeaders.map(t), e.push(n);
			};
			return t(r), e;
		},
		getContext: () => ({
			table: e,
			header: r,
			column: t
		})
	};
	return e._features.forEach((t) => {
		t.createHeader == null || t.createHeader(r, e);
	}), r;
}
var Nt = { createTable: (e) => {
	e.getHeaderGroups = J(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left,
		e.getState().columnPinning.right
	], (t, n, r, i) => {
		let a = r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], o = i?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], s = n.filter((e) => !(r != null && r.includes(e.id)) && !(i != null && i.includes(e.id)));
		return Pt(t, [
			...a,
			...s,
			...o
		], e);
	}, Y(e.options, X, "getHeaderGroups")), e.getCenterHeaderGroups = J(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left,
		e.getState().columnPinning.right
	], (t, n, r, i) => (n = n.filter((e) => !(r != null && r.includes(e.id)) && !(i != null && i.includes(e.id))), Pt(t, n, e, "center")), Y(e.options, X, "getCenterHeaderGroups")), e.getLeftHeaderGroups = J(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left
	], (t, n, r) => Pt(t, r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], e, "left"), Y(e.options, X, "getLeftHeaderGroups")), e.getRightHeaderGroups = J(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.right
	], (t, n, r) => Pt(t, r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], e, "right"), Y(e.options, X, "getRightHeaderGroups")), e.getFooterGroups = J(() => [e.getHeaderGroups()], (e) => [...e].reverse(), Y(e.options, X, "getFooterGroups")), e.getLeftFooterGroups = J(() => [e.getLeftHeaderGroups()], (e) => [...e].reverse(), Y(e.options, X, "getLeftFooterGroups")), e.getCenterFooterGroups = J(() => [e.getCenterHeaderGroups()], (e) => [...e].reverse(), Y(e.options, X, "getCenterFooterGroups")), e.getRightFooterGroups = J(() => [e.getRightHeaderGroups()], (e) => [...e].reverse(), Y(e.options, X, "getRightFooterGroups")), e.getFlatHeaders = J(() => [e.getHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Y(e.options, X, "getFlatHeaders")), e.getLeftFlatHeaders = J(() => [e.getLeftHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Y(e.options, X, "getLeftFlatHeaders")), e.getCenterFlatHeaders = J(() => [e.getCenterHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Y(e.options, X, "getCenterFlatHeaders")), e.getRightFlatHeaders = J(() => [e.getRightHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Y(e.options, X, "getRightFlatHeaders")), e.getCenterLeafHeaders = J(() => [e.getCenterFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), Y(e.options, X, "getCenterLeafHeaders")), e.getLeftLeafHeaders = J(() => [e.getLeftFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), Y(e.options, X, "getLeftLeafHeaders")), e.getRightLeafHeaders = J(() => [e.getRightFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), Y(e.options, X, "getRightLeafHeaders")), e.getLeafHeaders = J(() => [
		e.getLeftHeaderGroups(),
		e.getCenterHeaderGroups(),
		e.getRightHeaderGroups()
	], (e, t, n) => [
		...e[0]?.headers ?? [],
		...t[0]?.headers ?? [],
		...n[0]?.headers ?? []
	].map((e) => e.getLeafHeaders()).flat(), Y(e.options, X, "getLeafHeaders"));
} };
function Pt(e, t, n, r) {
	let i = 0, a = function(e, t) {
		t === void 0 && (t = 1), i = Math.max(i, t), e.filter((e) => e.getIsVisible()).forEach((e) => {
			var n;
			(n = e.columns) != null && n.length && a(e.columns, t + 1);
		}, 0);
	};
	a(e);
	let o = [], s = (e, t) => {
		let i = {
			depth: t,
			id: [r, `${t}`].filter(Boolean).join("_"),
			headers: []
		}, a = [];
		e.forEach((e) => {
			let o = [...a].reverse()[0], s = e.column.depth === i.depth, c, l = !1;
			if (s && e.column.parent ? c = e.column.parent : (c = e.column, l = !0), o && o?.column === c) o.subHeaders.push(e);
			else {
				let i = Mt(n, c, {
					id: [
						r,
						t,
						c.id,
						e?.id
					].filter(Boolean).join("_"),
					isPlaceholder: l,
					placeholderId: l ? `${a.filter((e) => e.column === c).length}` : void 0,
					depth: t,
					index: a.length
				});
				i.subHeaders.push(e), a.push(i);
			}
			i.headers.push(e), e.headerGroup = i;
		}), o.push(i), t > 0 && s(a, t - 1);
	};
	s(t.map((e, t) => Mt(n, e, {
		depth: i,
		index: t
	})), i - 1), o.reverse();
	let c = (e) => e.filter((e) => e.column.getIsVisible()).map((e) => {
		let t = 0, n = 0, r = [0];
		e.subHeaders && e.subHeaders.length ? (r = [], c(e.subHeaders).forEach((e) => {
			let { colSpan: n, rowSpan: i } = e;
			t += n, r.push(i);
		})) : t = 1;
		let i = Math.min(...r);
		return n += i, e.colSpan = t, e.rowSpan = n, {
			colSpan: t,
			rowSpan: n
		};
	});
	return c(o[0]?.headers ?? []), o;
}
var Ft = (e, t, n, r, i, a, o) => {
	let s = {
		id: t,
		index: r,
		original: n,
		depth: i,
		parentId: o,
		_valuesCache: {},
		_uniqueValuesCache: {},
		getValue: (t) => {
			if (s._valuesCache.hasOwnProperty(t)) return s._valuesCache[t];
			let n = e.getColumn(t);
			if (n != null && n.accessorFn) return s._valuesCache[t] = n.accessorFn(s.original, r), s._valuesCache[t];
		},
		getUniqueValues: (t) => {
			if (s._uniqueValuesCache.hasOwnProperty(t)) return s._uniqueValuesCache[t];
			let n = e.getColumn(t);
			if (n != null && n.accessorFn) return n.columnDef.getUniqueValues ? (s._uniqueValuesCache[t] = n.columnDef.getUniqueValues(s.original, r), s._uniqueValuesCache[t]) : (s._uniqueValuesCache[t] = [s.getValue(t)], s._uniqueValuesCache[t]);
		},
		renderValue: (t) => s.getValue(t) ?? e.options.renderFallbackValue,
		subRows: a ?? [],
		getLeafRows: () => kt(s.subRows, (e) => e.subRows),
		getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
		getParentRows: () => {
			let e = [], t = s;
			for (;;) {
				let n = t.getParentRow();
				if (!n) break;
				e.push(n), t = n;
			}
			return e.reverse();
		},
		getAllCells: J(() => [e.getAllLeafColumns()], (t) => t.map((t) => At(e, s, t, t.id)), Y(e.options, "debugRows", "getAllCells")),
		_getAllCellsByColumnId: J(() => [s.getAllCells()], (e) => e.reduce((e, t) => (e[t.column.id] = t, e), {}), Y(e.options, "debugRows", "getAllCellsByColumnId"))
	};
	for (let t = 0; t < e._features.length; t++) {
		let n = e._features[t];
		n == null || n.createRow == null || n.createRow(s, e);
	}
	return s;
}, It = { createColumn: (e, t) => {
	e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
		if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
	};
} }, Lt = (e, t, n) => {
	var r, i;
	let a = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
	return !!(!((i = e.getValue(t)) == null || (i = i.toString()) == null || (i = i.toLowerCase()) == null) && i.includes(a));
};
Lt.autoRemove = (e) => Q(e);
var Rt = (e, t, n) => {
	var r;
	return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Rt.autoRemove = (e) => Q(e);
var zt = (e, t, n) => {
	var r;
	return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === n?.toLowerCase();
};
zt.autoRemove = (e) => Q(e);
var Bt = (e, t, n) => e.getValue(t)?.includes(n);
Bt.autoRemove = (e) => Q(e);
var Vt = (e, t, n) => !n.some((n) => {
	var r;
	return !((r = e.getValue(t)) != null && r.includes(n));
});
Vt.autoRemove = (e) => Q(e) || !(e != null && e.length);
var Ht = (e, t, n) => n.some((n) => e.getValue(t)?.includes(n));
Ht.autoRemove = (e) => Q(e) || !(e != null && e.length);
var Ut = (e, t, n) => e.getValue(t) === n;
Ut.autoRemove = (e) => Q(e);
var Wt = (e, t, n) => e.getValue(t) == n;
Wt.autoRemove = (e) => Q(e);
var Gt = (e, t, n) => {
	let [r, i] = n, a = e.getValue(t);
	return a >= r && a <= i;
};
Gt.resolveFilterValue = (e) => {
	let [t, n] = e, r = typeof t == "number" ? t : parseFloat(t), i = typeof n == "number" ? n : parseFloat(n), a = t === null || Number.isNaN(r) ? -Infinity : r, o = n === null || Number.isNaN(i) ? Infinity : i;
	if (a > o) {
		let e = a;
		a = o, o = e;
	}
	return [a, o];
}, Gt.autoRemove = (e) => Q(e) || Q(e[0]) && Q(e[1]);
var Z = {
	includesString: Lt,
	includesStringSensitive: Rt,
	equalsString: zt,
	arrIncludes: Bt,
	arrIncludesAll: Vt,
	arrIncludesSome: Ht,
	equals: Ut,
	weakEquals: Wt,
	inNumberRange: Gt
};
function Q(e) {
	return e == null || e === "";
}
var Kt = {
	getDefaultColumnDef: () => ({ filterFn: "auto" }),
	getInitialState: (e) => ({
		columnFilters: [],
		...e
	}),
	getDefaultOptions: (e) => ({
		onColumnFiltersChange: q("columnFilters", e),
		filterFromLeafRows: !1,
		maxLeafRowFilterDepth: 100
	}),
	createColumn: (e, t) => {
		e.getAutoFilterFn = () => {
			let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
			return typeof n == "string" ? Z.includesString : typeof n == "number" ? Z.inNumberRange : typeof n == "boolean" || typeof n == "object" && n ? Z.equals : Array.isArray(n) ? Z.arrIncludes : Z.weakEquals;
		}, e.getFilterFn = () => Dt(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : t.options.filterFns?.[e.columnDef.filterFn] ?? Z[e.columnDef.filterFn], e.getCanFilter = () => (e.columnDef.enableColumnFilter ?? !0) && (t.options.enableColumnFilters ?? !0) && (t.options.enableFilters ?? !0) && !!e.accessorFn, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
			var n;
			return (n = t.getState().columnFilters) == null || (n = n.find((t) => t.id === e.id)) == null ? void 0 : n.value;
		}, e.getFilterIndex = () => t.getState().columnFilters?.findIndex((t) => t.id === e.id) ?? -1, e.setFilterValue = (n) => {
			t.setColumnFilters((t) => {
				let r = e.getFilterFn(), i = t?.find((t) => t.id === e.id), a = K(n, i ? i.value : void 0);
				if (qt(r, a, e)) return t?.filter((t) => t.id !== e.id) ?? [];
				let o = {
					id: e.id,
					value: a
				};
				return i ? t?.map((t) => t.id === e.id ? o : t) ?? [] : t != null && t.length ? [...t, o] : [o];
			});
		};
	},
	createRow: (e, t) => {
		e.columnFilters = {}, e.columnFiltersMeta = {};
	},
	createTable: (e) => {
		e.setColumnFilters = (t) => {
			let n = e.getAllLeafColumns();
			e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange((e) => K(t, e)?.filter((e) => {
				let t = n.find((t) => t.id === e.id);
				return !(t && qt(t.getFilterFn(), e.value, t));
			}));
		}, e.resetColumnFilters = (t) => {
			e.setColumnFilters(t ? [] : e.initialState?.columnFilters ?? []);
		}, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
	}
};
function qt(e, t, n) {
	return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || t === void 0 || typeof t == "string" && !t;
}
var Jt = {
	sum: (e, t, n) => n.reduce((t, n) => {
		let r = n.getValue(e);
		return t + (typeof r == "number" ? r : 0);
	}, 0),
	min: (e, t, n) => {
		let r;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r > n || r === void 0 && n >= n) && (r = n);
		}), r;
	},
	max: (e, t, n) => {
		let r;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r < n || r === void 0 && n >= n) && (r = n);
		}), r;
	},
	extent: (e, t, n) => {
		let r, i;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r === void 0 ? n >= n && (r = i = n) : (r > n && (r = n), i < n && (i = n)));
		}), [r, i];
	},
	mean: (e, t) => {
		let n = 0, r = 0;
		if (t.forEach((t) => {
			let i = t.getValue(e);
			i != null && (i = +i) >= i && (++n, r += i);
		}), n) return r / n;
	},
	median: (e, t) => {
		if (!t.length) return;
		let n = t.map((t) => t.getValue(e));
		if (!Ot(n)) return;
		if (n.length === 1) return n[0];
		let r = Math.floor(n.length / 2), i = n.sort((e, t) => e - t);
		return n.length % 2 == 0 ? (i[r - 1] + i[r]) / 2 : i[r];
	},
	unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
	uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
	count: (e, t) => t.length
}, Yt = {
	getDefaultColumnDef: () => ({
		aggregatedCell: (e) => {
			var t;
			return ((t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) ?? null;
		},
		aggregationFn: "auto"
	}),
	getInitialState: (e) => ({
		grouping: [],
		...e
	}),
	getDefaultOptions: (e) => ({
		onGroupingChange: q("grouping", e),
		groupedColumnMode: "reorder"
	}),
	createColumn: (e, t) => {
		e.toggleGrouping = () => {
			t.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((t) => t !== e.id) : [...t ?? [], e.id]);
		}, e.getCanGroup = () => (e.columnDef.enableGrouping ?? !0) && (t.options.enableGrouping ?? !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue), e.getIsGrouped = () => t.getState().grouping?.includes(e.id), e.getGroupedIndex = () => t.getState().grouping?.indexOf(e.id), e.getToggleGroupingHandler = () => {
			let t = e.getCanGroup();
			return () => {
				t && e.toggleGrouping();
			};
		}, e.getAutoAggregationFn = () => {
			let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
			if (typeof n == "number") return Jt.sum;
			if (Object.prototype.toString.call(n) === "[object Date]") return Jt.extent;
		}, e.getAggregationFn = () => {
			if (!e) throw Error();
			return Dt(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : t.options.aggregationFns?.[e.columnDef.aggregationFn] ?? Jt[e.columnDef.aggregationFn];
		};
	},
	createTable: (e) => {
		e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
			e.setGrouping(t ? [] : e.initialState?.grouping ?? []);
		}, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
	},
	createRow: (e, t) => {
		e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
			if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
			let r = t.getColumn(n);
			return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
		}, e._groupingValuesCache = {};
	},
	createCell: (e, t, n, r) => {
		e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
			var t;
			return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((t = n.subRows) != null && t.length);
		};
	}
};
function Xt(e, t, n) {
	if (!(t != null && t.length) || !n) return e;
	let r = e.filter((e) => !t.includes(e.id));
	return n === "remove" ? r : [...t.map((t) => e.find((e) => e.id === t)).filter(Boolean), ...r];
}
var Zt = {
	getInitialState: (e) => ({
		columnOrder: [],
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnOrderChange: q("columnOrder", e) }),
	createColumn: (e, t) => {
		e.getIndex = J((e) => [ln(t, e)], (t) => t.findIndex((t) => t.id === e.id), Y(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => ln(t, n)[0]?.id === e.id, e.getIsLastColumn = (n) => {
			let r = ln(t, n);
			return r[r.length - 1]?.id === e.id;
		};
	},
	createTable: (e) => {
		e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
			e.setColumnOrder(t ? [] : e.initialState.columnOrder ?? []);
		}, e._getOrderColumnsFn = J(() => [
			e.getState().columnOrder,
			e.getState().grouping,
			e.options.groupedColumnMode
		], (e, t, n) => (r) => {
			let i = [];
			if (!(e != null && e.length)) i = r;
			else {
				let t = [...e], n = [...r];
				for (; n.length && t.length;) {
					let e = t.shift(), r = n.findIndex((t) => t.id === e);
					r > -1 && i.push(n.splice(r, 1)[0]);
				}
				i = [...i, ...n];
			}
			return Xt(i, t, n);
		}, Y(e.options, "debugTable", "_getOrderColumnsFn"));
	}
}, Qt = () => ({
	left: [],
	right: []
}), $t = {
	getInitialState: (e) => ({
		columnPinning: Qt(),
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnPinningChange: q("columnPinning", e) }),
	createColumn: (e, t) => {
		e.pin = (n) => {
			let r = e.getLeafColumns().map((e) => e.id).filter(Boolean);
			t.setColumnPinning((e) => n === "right" ? {
				left: (e?.left ?? []).filter((e) => !(r != null && r.includes(e))),
				right: [...(e?.right ?? []).filter((e) => !(r != null && r.includes(e))), ...r]
			} : n === "left" ? {
				left: [...(e?.left ?? []).filter((e) => !(r != null && r.includes(e))), ...r],
				right: (e?.right ?? []).filter((e) => !(r != null && r.includes(e)))
			} : {
				left: (e?.left ?? []).filter((e) => !(r != null && r.includes(e))),
				right: (e?.right ?? []).filter((e) => !(r != null && r.includes(e)))
			});
		}, e.getCanPin = () => e.getLeafColumns().some((e) => (e.columnDef.enablePinning ?? !0) && (t.options.enableColumnPinning ?? t.options.enablePinning ?? !0)), e.getIsPinned = () => {
			let n = e.getLeafColumns().map((e) => e.id), { left: r, right: i } = t.getState().columnPinning, a = n.some((e) => r?.includes(e)), o = n.some((e) => i?.includes(e));
			return a ? "left" : o ? "right" : !1;
		}, e.getPinnedIndex = () => {
			var n;
			let r = e.getIsPinned();
			return r ? ((n = t.getState().columnPinning) == null || (n = n[r]) == null ? void 0 : n.indexOf(e.id)) ?? -1 : 0;
		};
	},
	createRow: (e, t) => {
		e.getCenterVisibleCells = J(() => [
			e._getAllVisibleCells(),
			t.getState().columnPinning.left,
			t.getState().columnPinning.right
		], (e, t, n) => {
			let r = [...t ?? [], ...n ?? []];
			return e.filter((e) => !r.includes(e.column.id));
		}, Y(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = J(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (e, t) => (t ?? []).map((t) => e.find((e) => e.column.id === t)).filter(Boolean).map((e) => ({
			...e,
			position: "left"
		})), Y(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = J(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (e, t) => (t ?? []).map((t) => e.find((e) => e.column.id === t)).filter(Boolean).map((e) => ({
			...e,
			position: "right"
		})), Y(t.options, "debugRows", "getRightVisibleCells"));
	},
	createTable: (e) => {
		e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => e.setColumnPinning(t ? Qt() : e.initialState?.columnPinning ?? Qt()), e.getIsSomeColumnsPinned = (t) => {
			let n = e.getState().columnPinning;
			return t ? !!n[t]?.length : !!(n.left?.length || n.right?.length);
		}, e.getLeftLeafColumns = J(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (e, t) => (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean), Y(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = J(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (e, t) => (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean), Y(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = J(() => [
			e.getAllLeafColumns(),
			e.getState().columnPinning.left,
			e.getState().columnPinning.right
		], (e, t, n) => {
			let r = [...t ?? [], ...n ?? []];
			return e.filter((e) => !r.includes(e.id));
		}, Y(e.options, "debugColumns", "getCenterLeafColumns"));
	}
};
function en(e) {
	return e || (typeof document < "u" ? document : null);
}
var tn = {
	size: 150,
	minSize: 20,
	maxSize: 2 ** 53 - 1
}, nn = () => ({
	startOffset: null,
	startSize: null,
	deltaOffset: null,
	deltaPercentage: null,
	isResizingColumn: !1,
	columnSizingStart: []
}), rn = {
	getDefaultColumnDef: () => tn,
	getInitialState: (e) => ({
		columnSizing: {},
		columnSizingInfo: nn(),
		...e
	}),
	getDefaultOptions: (e) => ({
		columnResizeMode: "onEnd",
		columnResizeDirection: "ltr",
		onColumnSizingChange: q("columnSizing", e),
		onColumnSizingInfoChange: q("columnSizingInfo", e)
	}),
	createColumn: (e, t) => {
		e.getSize = () => {
			let n = t.getState().columnSizing[e.id];
			return Math.min(Math.max(e.columnDef.minSize ?? tn.minSize, n ?? e.columnDef.size ?? tn.size), e.columnDef.maxSize ?? tn.maxSize);
		}, e.getStart = J((e) => [
			e,
			ln(t, e),
			t.getState().columnSizing
		], (t, n) => n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0), Y(t.options, "debugColumns", "getStart")), e.getAfter = J((e) => [
			e,
			ln(t, e),
			t.getState().columnSizing
		], (t, n) => n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0), Y(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
			t.setColumnSizing((t) => {
				let { [e.id]: n, ...r } = t;
				return r;
			});
		}, e.getCanResize = () => (e.columnDef.enableResizing ?? !0) && (t.options.enableColumnResizing ?? !0), e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
	},
	createHeader: (e, t) => {
		e.getSize = () => {
			let t = 0, n = (e) => {
				e.subHeaders.length ? e.subHeaders.forEach(n) : t += e.column.getSize() ?? 0;
			};
			return n(e), t;
		}, e.getStart = () => {
			if (e.index > 0) {
				let t = e.headerGroup.headers[e.index - 1];
				return t.getStart() + t.getSize();
			}
			return 0;
		}, e.getResizeHandler = (n) => {
			let r = t.getColumn(e.column.id), i = r?.getCanResize();
			return (a) => {
				if (!r || !i || (a.persist == null || a.persist(), sn(a) && a.touches && a.touches.length > 1)) return;
				let o = e.getSize(), s = e ? e.getLeafHeaders().map((e) => [e.column.id, e.column.getSize()]) : [[r.id, r.getSize()]], c = sn(a) ? Math.round(a.touches[0].clientX) : a.clientX, l = {}, u = (e, n) => {
					typeof n == "number" && (t.setColumnSizingInfo((e) => {
						let r = t.options.columnResizeDirection === "rtl" ? -1 : 1, i = (n - (e?.startOffset ?? 0)) * r, a = Math.max(i / (e?.startSize ?? 0), -.999999);
						return e.columnSizingStart.forEach((e) => {
							let [t, n] = e;
							l[t] = Math.round(Math.max(n + n * a, 0) * 100) / 100;
						}), {
							...e,
							deltaOffset: i,
							deltaPercentage: a
						};
					}), (t.options.columnResizeMode === "onChange" || e === "end") && t.setColumnSizing((e) => ({
						...e,
						...l
					})));
				}, d = (e) => u("move", e), f = (e) => {
					u("end", e), t.setColumnSizingInfo((e) => ({
						...e,
						isResizingColumn: !1,
						startOffset: null,
						startSize: null,
						deltaOffset: null,
						deltaPercentage: null,
						columnSizingStart: []
					}));
				}, p = en(n), m = {
					moveHandler: (e) => d(e.clientX),
					upHandler: (e) => {
						p?.removeEventListener("mousemove", m.moveHandler), p?.removeEventListener("mouseup", m.upHandler), f(e.clientX);
					}
				}, h = {
					moveHandler: (e) => (e.cancelable && (e.preventDefault(), e.stopPropagation()), d(e.touches[0].clientX), !1),
					upHandler: (e) => {
						p?.removeEventListener("touchmove", h.moveHandler), p?.removeEventListener("touchend", h.upHandler), e.cancelable && (e.preventDefault(), e.stopPropagation()), f(e.touches[0]?.clientX);
					}
				}, g = on() ? { passive: !1 } : !1;
				sn(a) ? (p?.addEventListener("touchmove", h.moveHandler, g), p?.addEventListener("touchend", h.upHandler, g)) : (p?.addEventListener("mousemove", m.moveHandler, g), p?.addEventListener("mouseup", m.upHandler, g)), t.setColumnSizingInfo((e) => ({
					...e,
					startOffset: c,
					startSize: o,
					deltaOffset: 0,
					deltaPercentage: 0,
					columnSizingStart: s,
					isResizingColumn: r.id
				}));
			};
		};
	},
	createTable: (e) => {
		e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
			e.setColumnSizing(t ? {} : e.initialState.columnSizing ?? {});
		}, e.resetHeaderSizeInfo = (t) => {
			e.setColumnSizingInfo(t ? nn() : e.initialState.columnSizingInfo ?? nn());
		}, e.getTotalSize = () => e.getHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getLeftTotalSize = () => e.getLeftHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getCenterTotalSize = () => e.getCenterHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getRightTotalSize = () => e.getRightHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0;
	}
}, an = null;
function on() {
	if (typeof an == "boolean") return an;
	let e = !1;
	try {
		let t = { get passive() {
			return e = !0, !1;
		} }, n = () => {};
		window.addEventListener("test", n, t), window.removeEventListener("test", n);
	} catch {
		e = !1;
	}
	return an = e, an;
}
function sn(e) {
	return e.type === "touchstart";
}
var cn = {
	getInitialState: (e) => ({
		columnVisibility: {},
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnVisibilityChange: q("columnVisibility", e) }),
	createColumn: (e, t) => {
		e.toggleVisibility = (n) => {
			e.getCanHide() && t.setColumnVisibility((t) => ({
				...t,
				[e.id]: n ?? !e.getIsVisible()
			}));
		}, e.getIsVisible = () => {
			let n = e.columns;
			return (n.length ? n.some((e) => e.getIsVisible()) : t.getState().columnVisibility?.[e.id]) ?? !0;
		}, e.getCanHide = () => (e.columnDef.enableHiding ?? !0) && (t.options.enableHiding ?? !0), e.getToggleVisibilityHandler = () => (t) => {
			e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
		};
	},
	createRow: (e, t) => {
		e._getAllVisibleCells = J(() => [e.getAllCells(), t.getState().columnVisibility], (e) => e.filter((e) => e.column.getIsVisible()), Y(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = J(() => [
			e.getLeftVisibleCells(),
			e.getCenterVisibleCells(),
			e.getRightVisibleCells()
		], (e, t, n) => [
			...e,
			...t,
			...n
		], Y(t.options, "debugRows", "getVisibleCells"));
	},
	createTable: (e) => {
		let t = (t, n) => J(() => [n(), n().filter((e) => e.getIsVisible()).map((e) => e.id).join("_")], (e) => e.filter((e) => e.getIsVisible == null ? void 0 : e.getIsVisible()), Y(e.options, "debugColumns", t));
		e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
			e.setColumnVisibility(t ? {} : e.initialState.columnVisibility ?? {});
		}, e.toggleAllColumnsVisible = (t) => {
			t ??= !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((e, n) => ({
				...e,
				[n.id]: t || !(n.getCanHide != null && n.getCanHide())
			}), {}));
		}, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((e) => !(e.getIsVisible != null && e.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((e) => e.getIsVisible == null ? void 0 : e.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
			e.toggleAllColumnsVisible(t.target?.checked);
		};
	}
};
function ln(e, t) {
	return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
var un = { createTable: (e) => {
	e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
		if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
	};
} }, dn = {
	getInitialState: (e) => ({
		globalFilter: void 0,
		...e
	}),
	getDefaultOptions: (e) => ({
		onGlobalFilterChange: q("globalFilter", e),
		globalFilterFn: "auto",
		getColumnCanGlobalFilter: (t) => {
			var n;
			let r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
			return typeof r == "string" || typeof r == "number";
		}
	}),
	createColumn: (e, t) => {
		e.getCanGlobalFilter = () => (e.columnDef.enableGlobalFilter ?? !0) && (t.options.enableGlobalFilter ?? !0) && (t.options.enableFilters ?? !0) && ((t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) ?? !0) && !!e.accessorFn;
	},
	createTable: (e) => {
		e.getGlobalAutoFilterFn = () => Z.includesString, e.getGlobalFilterFn = () => {
			let { globalFilterFn: t } = e.options;
			return Dt(t) ? t : t === "auto" ? e.getGlobalAutoFilterFn() : e.options.filterFns?.[t] ?? Z[t];
		}, e.setGlobalFilter = (t) => {
			e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
		}, e.resetGlobalFilter = (t) => {
			e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
		};
	}
}, fn = {
	getInitialState: (e) => ({
		expanded: {},
		...e
	}),
	getDefaultOptions: (e) => ({
		onExpandedChange: q("expanded", e),
		paginateExpandedRows: !0
	}),
	createTable: (e) => {
		let t = !1, n = !1;
		e._autoResetExpanded = () => {
			if (!t) {
				e._queue(() => {
					t = !0;
				});
				return;
			}
			if (e.options.autoResetAll ?? e.options.autoResetExpanded ?? !e.options.manualExpanding) {
				if (n) return;
				n = !0, e._queue(() => {
					e.resetExpanded(), n = !1;
				});
			}
		}, e.setExpanded = (t) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(t), e.toggleAllRowsExpanded = (t) => {
			t ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
		}, e.resetExpanded = (t) => {
			e.setExpanded(t ? {} : e.initialState?.expanded ?? {});
		}, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((e) => e.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (t) => {
			t.persist == null || t.persist(), e.toggleAllRowsExpanded();
		}, e.getIsSomeRowsExpanded = () => {
			let t = e.getState().expanded;
			return t === !0 || Object.values(t).some(Boolean);
		}, e.getIsAllRowsExpanded = () => {
			let t = e.getState().expanded;
			return typeof t == "boolean" ? t === !0 : !(!Object.keys(t).length || e.getRowModel().flatRows.some((e) => !e.getIsExpanded()));
		}, e.getExpandedDepth = () => {
			let t = 0;
			return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((e) => {
				let n = e.split(".");
				t = Math.max(t, n.length);
			}), t;
		}, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
	},
	createRow: (e, t) => {
		e.toggleExpanded = (n) => {
			t.setExpanded((r) => {
				let i = r === !0 ? !0 : !!(r != null && r[e.id]), a = {};
				if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
					a[e] = !0;
				}) : a = r, n ??= !i, !i && n) return {
					...a,
					[e.id]: !0
				};
				if (i && !n) {
					let { [e.id]: t, ...n } = a;
					return n;
				}
				return r;
			});
		}, e.getIsExpanded = () => {
			let n = t.getState().expanded;
			return !!((t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) ?? (n === !0 || n?.[e.id]));
		}, e.getCanExpand = () => {
			var n;
			return (t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) ?? ((t.options.enableExpanding ?? !0) && !!((n = e.subRows) != null && n.length));
		}, e.getIsAllParentsExpanded = () => {
			let n = !0, r = e;
			for (; n && r.parentId;) r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
			return n;
		}, e.getToggleExpandedHandler = () => {
			let t = e.getCanExpand();
			return () => {
				t && e.toggleExpanded();
			};
		};
	}
}, pn = 0, mn = 10, hn = () => ({
	pageIndex: pn,
	pageSize: mn
}), gn = {
	getInitialState: (e) => ({
		...e,
		pagination: {
			...hn(),
			...e?.pagination
		}
	}),
	getDefaultOptions: (e) => ({ onPaginationChange: q("pagination", e) }),
	createTable: (e) => {
		let t = !1, n = !1;
		e._autoResetPageIndex = () => {
			if (!t) {
				e._queue(() => {
					t = !0;
				});
				return;
			}
			if (e.options.autoResetAll ?? e.options.autoResetPageIndex ?? !e.options.manualPagination) {
				if (n) return;
				n = !0, e._queue(() => {
					e.resetPageIndex(), n = !1;
				});
			}
		}, e.setPagination = (t) => e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange((e) => K(t, e)), e.resetPagination = (t) => {
			e.setPagination(t ? hn() : e.initialState.pagination ?? hn());
		}, e.setPageIndex = (t) => {
			e.setPagination((n) => {
				let r = K(t, n.pageIndex), i = e.options.pageCount === void 0 || e.options.pageCount === -1 ? 2 ** 53 - 1 : e.options.pageCount - 1;
				return r = Math.max(0, Math.min(r, i)), {
					...n,
					pageIndex: r
				};
			});
		}, e.resetPageIndex = (t) => {
			var n;
			e.setPageIndex(t ? pn : ((n = e.initialState) == null || (n = n.pagination) == null ? void 0 : n.pageIndex) ?? pn);
		}, e.resetPageSize = (t) => {
			var n;
			e.setPageSize(t ? mn : ((n = e.initialState) == null || (n = n.pagination) == null ? void 0 : n.pageSize) ?? mn);
		}, e.setPageSize = (t) => {
			e.setPagination((e) => {
				let n = Math.max(1, K(t, e.pageSize)), r = e.pageSize * e.pageIndex, i = Math.floor(r / n);
				return {
					...e,
					pageIndex: i,
					pageSize: n
				};
			});
		}, e.setPageCount = (t) => e.setPagination((n) => {
			let r = K(t, e.options.pageCount ?? -1);
			return typeof r == "number" && (r = Math.max(-1, r)), {
				...n,
				pageCount: r
			};
		}), e.getPageOptions = J(() => [e.getPageCount()], (e) => {
			let t = [];
			return e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t;
		}, Y(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
			let { pageIndex: t } = e.getState().pagination, n = e.getPageCount();
			return n === -1 ? !0 : n === 0 ? !1 : t < n - 1;
		}, e.previousPage = () => e.setPageIndex((e) => e - 1), e.nextPage = () => e.setPageIndex((e) => e + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => e.options.pageCount ?? Math.ceil(e.getRowCount() / e.getState().pagination.pageSize), e.getRowCount = () => e.options.rowCount ?? e.getPrePaginationRowModel().rows.length;
	}
}, _n = () => ({
	top: [],
	bottom: []
}), vn = {
	getInitialState: (e) => ({
		rowPinning: _n(),
		...e
	}),
	getDefaultOptions: (e) => ({ onRowPinningChange: q("rowPinning", e) }),
	createRow: (e, t) => {
		e.pin = (n, r, i) => {
			let a = r ? e.getLeafRows().map((e) => {
				let { id: t } = e;
				return t;
			}) : [], o = i ? e.getParentRows().map((e) => {
				let { id: t } = e;
				return t;
			}) : [], s = new Set([
				...o,
				e.id,
				...a
			]);
			t.setRowPinning((e) => n === "bottom" ? {
				top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
				bottom: [...(e?.bottom ?? []).filter((e) => !(s != null && s.has(e))), ...Array.from(s)]
			} : n === "top" ? {
				top: [...(e?.top ?? []).filter((e) => !(s != null && s.has(e))), ...Array.from(s)],
				bottom: (e?.bottom ?? []).filter((e) => !(s != null && s.has(e)))
			} : {
				top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
				bottom: (e?.bottom ?? []).filter((e) => !(s != null && s.has(e)))
			});
		}, e.getCanPin = () => {
			let { enableRowPinning: n, enablePinning: r } = t.options;
			return typeof n == "function" ? n(e) : n ?? r ?? !0;
		}, e.getIsPinned = () => {
			let n = [e.id], { top: r, bottom: i } = t.getState().rowPinning, a = n.some((e) => r?.includes(e)), o = n.some((e) => i?.includes(e));
			return a ? "top" : o ? "bottom" : !1;
		}, e.getPinnedIndex = () => {
			let n = e.getIsPinned();
			return n ? ((n === "top" ? t.getTopRows() : t.getBottomRows())?.map((e) => {
				let { id: t } = e;
				return t;
			}))?.indexOf(e.id) ?? -1 : -1;
		};
	},
	createTable: (e) => {
		e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => e.setRowPinning(t ? _n() : e.initialState?.rowPinning ?? _n()), e.getIsSomeRowsPinned = (t) => {
			let n = e.getState().rowPinning;
			return t ? !!n[t]?.length : !!(n.top?.length || n.bottom?.length);
		}, e._getPinnedRows = (t, n, r) => (e.options.keepPinnedRows ?? !0 ? (n ?? []).map((t) => {
			let n = e.getRow(t, !0);
			return n.getIsAllParentsExpanded() ? n : null;
		}) : (n ?? []).map((e) => t.find((t) => t.id === e))).filter(Boolean).map((e) => ({
			...e,
			position: r
		})), e.getTopRows = J(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), Y(e.options, "debugRows", "getTopRows")), e.getBottomRows = J(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), Y(e.options, "debugRows", "getBottomRows")), e.getCenterRows = J(() => [
			e.getRowModel().rows,
			e.getState().rowPinning.top,
			e.getState().rowPinning.bottom
		], (e, t, n) => {
			let r = new Set([...t ?? [], ...n ?? []]);
			return e.filter((e) => !r.has(e.id));
		}, Y(e.options, "debugRows", "getCenterRows"));
	}
}, yn = {
	getInitialState: (e) => ({
		rowSelection: {},
		...e
	}),
	getDefaultOptions: (e) => ({
		onRowSelectionChange: q("rowSelection", e),
		enableRowSelection: !0,
		enableMultiRowSelection: !0,
		enableSubRowSelection: !0
	}),
	createTable: (e) => {
		e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => e.setRowSelection(t ? {} : e.initialState.rowSelection ?? {}), e.toggleAllRowsSelected = (t) => {
			e.setRowSelection((n) => {
				t = t === void 0 ? !e.getIsAllRowsSelected() : t;
				let r = { ...n }, i = e.getPreGroupedRowModel().flatRows;
				return t ? i.forEach((e) => {
					e.getCanSelect() && (r[e.id] = !0);
				}) : i.forEach((e) => {
					delete r[e.id];
				}), r;
			});
		}, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
			let r = t === void 0 ? !e.getIsAllPageRowsSelected() : t, i = { ...n };
			return e.getRowModel().rows.forEach((t) => {
				bn(i, t.id, r, !0, e);
			}), i;
		}), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = J(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? xn(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, Y(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = J(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? xn(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, Y(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = J(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? xn(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, Y(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
			let t = e.getFilteredRowModel().flatRows, { rowSelection: n } = e.getState(), r = !!(t.length && Object.keys(n).length);
			return r && t.some((e) => e.getCanSelect() && !n[e.id]) && (r = !1), r;
		}, e.getIsAllPageRowsSelected = () => {
			let t = e.getPaginationRowModel().flatRows.filter((e) => e.getCanSelect()), { rowSelection: n } = e.getState(), r = !!t.length;
			return r && t.some((e) => !n[e.id]) && (r = !1), r;
		}, e.getIsSomeRowsSelected = () => {
			let t = Object.keys(e.getState().rowSelection ?? {}).length;
			return t > 0 && t < e.getFilteredRowModel().flatRows.length;
		}, e.getIsSomePageRowsSelected = () => {
			let t = e.getPaginationRowModel().flatRows;
			return e.getIsAllPageRowsSelected() ? !1 : t.filter((e) => e.getCanSelect()).some((e) => e.getIsSelected() || e.getIsSomeSelected());
		}, e.getToggleAllRowsSelectedHandler = () => (t) => {
			e.toggleAllRowsSelected(t.target.checked);
		}, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
			e.toggleAllPageRowsSelected(t.target.checked);
		};
	},
	createRow: (e, t) => {
		e.toggleSelected = (n, r) => {
			let i = e.getIsSelected();
			t.setRowSelection((a) => {
				if (n = n === void 0 ? !i : n, e.getCanSelect() && i === n) return a;
				let o = { ...a };
				return bn(o, e.id, n, r?.selectChildren ?? !0, t), o;
			});
		}, e.getIsSelected = () => {
			let { rowSelection: n } = t.getState();
			return Sn(e, n);
		}, e.getIsSomeSelected = () => {
			let { rowSelection: n } = t.getState();
			return Cn(e, n) === "some";
		}, e.getIsAllSubRowsSelected = () => {
			let { rowSelection: n } = t.getState();
			return Cn(e, n) === "all";
		}, e.getCanSelect = () => typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : t.options.enableRowSelection ?? !0, e.getCanSelectSubRows = () => typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : t.options.enableSubRowSelection ?? !0, e.getCanMultiSelect = () => typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : t.options.enableMultiRowSelection ?? !0, e.getToggleSelectedHandler = () => {
			let t = e.getCanSelect();
			return (n) => {
				t && e.toggleSelected(n.target?.checked);
			};
		};
	}
}, bn = (e, t, n, r, i) => {
	var a;
	let o = i.getRow(t, !0);
	n ? (o.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]), o.getCanSelect() && (e[t] = !0)) : delete e[t], r && (a = o.subRows) != null && a.length && o.getCanSelectSubRows() && o.subRows.forEach((t) => bn(e, t.id, n, r, i));
};
function xn(e, t) {
	let n = e.getState().rowSelection, r = [], i = {}, a = function(e, t) {
		return e.map((e) => {
			var t;
			let o = Sn(e, n);
			if (o && (r.push(e), i[e.id] = e), (t = e.subRows) != null && t.length && (e = {
				...e,
				subRows: a(e.subRows)
			}), o) return e;
		}).filter(Boolean);
	};
	return {
		rows: a(t.rows),
		flatRows: r,
		rowsById: i
	};
}
function Sn(e, t) {
	return t[e.id] ?? !1;
}
function Cn(e, t, n) {
	var r;
	if (!((r = e.subRows) != null && r.length)) return !1;
	let i = !0, a = !1;
	return e.subRows.forEach((e) => {
		if (!(a && !i) && (e.getCanSelect() && (Sn(e, t) ? a = !0 : i = !1), e.subRows && e.subRows.length)) {
			let n = Cn(e, t);
			n === "all" ? a = !0 : (n === "some" && (a = !0), i = !1);
		}
	}), i ? "all" : a ? "some" : !1;
}
var wn = /([0-9]+)/gm, Tn = (e, t, n) => Mn($(e.getValue(n)).toLowerCase(), $(t.getValue(n)).toLowerCase()), En = (e, t, n) => Mn($(e.getValue(n)), $(t.getValue(n))), Dn = (e, t, n) => jn($(e.getValue(n)).toLowerCase(), $(t.getValue(n)).toLowerCase()), On = (e, t, n) => jn($(e.getValue(n)), $(t.getValue(n))), kn = (e, t, n) => {
	let r = e.getValue(n), i = t.getValue(n);
	return r > i ? 1 : r < i ? -1 : 0;
}, An = (e, t, n) => jn(e.getValue(n), t.getValue(n));
function jn(e, t) {
	return e === t ? 0 : e > t ? 1 : -1;
}
function $(e) {
	return typeof e == "number" ? isNaN(e) || e === Infinity || e === -Infinity ? "" : String(e) : typeof e == "string" ? e : "";
}
function Mn(e, t) {
	let n = e.split(wn).filter(Boolean), r = t.split(wn).filter(Boolean);
	for (; n.length && r.length;) {
		let e = n.shift(), t = r.shift(), i = parseInt(e, 10), a = parseInt(t, 10), o = [i, a].sort();
		if (isNaN(o[0])) {
			if (e > t) return 1;
			if (t > e) return -1;
			continue;
		}
		if (isNaN(o[1])) return isNaN(i) ? -1 : 1;
		if (i > a) return 1;
		if (a > i) return -1;
	}
	return n.length - r.length;
}
var Nn = {
	alphanumeric: Tn,
	alphanumericCaseSensitive: En,
	text: Dn,
	textCaseSensitive: On,
	datetime: kn,
	basic: An
}, Pn = [
	Nt,
	cn,
	Zt,
	$t,
	It,
	Kt,
	un,
	dn,
	{
		getInitialState: (e) => ({
			sorting: [],
			...e
		}),
		getDefaultColumnDef: () => ({
			sortingFn: "auto",
			sortUndefined: 1
		}),
		getDefaultOptions: (e) => ({
			onSortingChange: q("sorting", e),
			isMultiSortEvent: (e) => e.shiftKey
		}),
		createColumn: (e, t) => {
			e.getAutoSortingFn = () => {
				let n = t.getFilteredRowModel().flatRows.slice(10), r = !1;
				for (let t of n) {
					let n = t?.getValue(e.id);
					if (Object.prototype.toString.call(n) === "[object Date]") return Nn.datetime;
					if (typeof n == "string" && (r = !0, n.split(wn).length > 1)) return Nn.alphanumeric;
				}
				return r ? Nn.text : Nn.basic;
			}, e.getAutoSortDir = () => typeof t.getFilteredRowModel().flatRows[0]?.getValue(e.id) == "string" ? "asc" : "desc", e.getSortingFn = () => {
				if (!e) throw Error();
				return Dt(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : t.options.sortingFns?.[e.columnDef.sortingFn] ?? Nn[e.columnDef.sortingFn];
			}, e.toggleSorting = (n, r) => {
				let i = e.getNextSortingOrder(), a = n != null;
				t.setSorting((o) => {
					let s = o?.find((t) => t.id === e.id), c = o?.findIndex((t) => t.id === e.id), l = [], u, d = a ? n : i === "desc";
					return u = o != null && o.length && e.getCanMultiSort() && r ? s ? "toggle" : "add" : o != null && o.length && c !== o.length - 1 ? "replace" : s ? "toggle" : "replace", u === "toggle" && (a || i || (u = "remove")), u === "add" ? (l = [...o, {
						id: e.id,
						desc: d
					}], l.splice(0, l.length - (t.options.maxMultiSortColCount ?? 2 ** 53 - 1))) : l = u === "toggle" ? o.map((t) => t.id === e.id ? {
						...t,
						desc: d
					} : t) : u === "remove" ? o.filter((t) => t.id !== e.id) : [{
						id: e.id,
						desc: d
					}], l;
				});
			}, e.getFirstSortDir = () => e.columnDef.sortDescFirst ?? t.options.sortDescFirst ?? e.getAutoSortDir() === "desc" ? "desc" : "asc", e.getNextSortingOrder = (n) => {
				let r = e.getFirstSortDir(), i = e.getIsSorted();
				return i ? i !== r && (t.options.enableSortingRemoval ?? !0) && (!n || (t.options.enableMultiRemove ?? !0)) ? !1 : i === "desc" ? "asc" : "desc" : r;
			}, e.getCanSort = () => (e.columnDef.enableSorting ?? !0) && (t.options.enableSorting ?? !0) && !!e.accessorFn, e.getCanMultiSort = () => e.columnDef.enableMultiSort ?? t.options.enableMultiSort ?? !!e.accessorFn, e.getIsSorted = () => {
				let n = t.getState().sorting?.find((t) => t.id === e.id);
				return n ? n.desc ? "desc" : "asc" : !1;
			}, e.getSortIndex = () => t.getState().sorting?.findIndex((t) => t.id === e.id) ?? -1, e.clearSorting = () => {
				t.setSorting((t) => t != null && t.length ? t.filter((t) => t.id !== e.id) : []);
			}, e.getToggleSortingHandler = () => {
				let n = e.getCanSort();
				return (r) => {
					n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
				};
			};
		},
		createTable: (e) => {
			e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
				e.setSorting(t ? [] : e.initialState?.sorting ?? []);
			}, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
		}
	},
	Yt,
	fn,
	gn,
	vn,
	yn,
	rn
];
function Fn(e) {
	process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
	let t = [...Pn, ...e._features ?? []], n = { _features: t }, r = n._features.reduce((e, t) => Object.assign(e, t.getDefaultOptions == null ? void 0 : t.getDefaultOptions(n)), {}), i = (e) => n.options.mergeOptions ? n.options.mergeOptions(r, e) : {
		...r,
		...e
	}, a = { ...e.initialState ?? {} };
	n._features.forEach((e) => {
		a = (e.getInitialState == null ? void 0 : e.getInitialState(a)) ?? a;
	});
	let o = [], s = !1, c = {
		_features: t,
		options: {
			...r,
			...e
		},
		initialState: a,
		_queue: (e) => {
			o.push(e), s || (s = !0, Promise.resolve().then(() => {
				for (; o.length;) o.shift()();
				s = !1;
			}).catch((e) => setTimeout(() => {
				throw e;
			})));
		},
		reset: () => {
			n.setState(n.initialState);
		},
		setOptions: (e) => {
			n.options = i(K(e, n.options));
		},
		getState: () => n.options.state,
		setState: (e) => {
			n.options.onStateChange == null || n.options.onStateChange(e);
		},
		_getRowId: (e, t, r) => (n.options.getRowId == null ? void 0 : n.options.getRowId(e, t, r)) ?? `${r ? [r.id, t].join(".") : t}`,
		getCoreRowModel: () => (n._getCoreRowModel ||= n.options.getCoreRowModel(n), n._getCoreRowModel()),
		getRowModel: () => n.getPaginationRowModel(),
		getRow: (e, t) => {
			let r = (t ? n.getPrePaginationRowModel() : n.getRowModel()).rowsById[e];
			if (!r && (r = n.getCoreRowModel().rowsById[e], !r)) throw process.env.NODE_ENV === "production" ? Error() : Error(`getRow could not find row with ID: ${e}`);
			return r;
		},
		_getDefaultColumnDef: J(() => [n.options.defaultColumn], (e) => (e ??= {}, {
			header: (e) => {
				let t = e.header.column.columnDef;
				return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
			},
			cell: (e) => {
				var t;
				return ((t = e.renderValue()) == null || t.toString == null ? void 0 : t.toString()) ?? null;
			},
			...n._features.reduce((e, t) => Object.assign(e, t.getDefaultColumnDef == null ? void 0 : t.getDefaultColumnDef()), {}),
			...e
		}), Y(e, "debugColumns", "_getDefaultColumnDef")),
		_getColumnDefs: () => n.options.columns,
		getAllColumns: J(() => [n._getColumnDefs()], (e) => {
			let t = function(e, r, i) {
				return i === void 0 && (i = 0), e.map((e) => {
					let a = jt(n, e, i, r), o = e;
					return a.columns = o.columns ? t(o.columns, a, i + 1) : [], a;
				});
			};
			return t(e);
		}, Y(e, "debugColumns", "getAllColumns")),
		getAllFlatColumns: J(() => [n.getAllColumns()], (e) => e.flatMap((e) => e.getFlatColumns()), Y(e, "debugColumns", "getAllFlatColumns")),
		_getAllFlatColumnsById: J(() => [n.getAllFlatColumns()], (e) => e.reduce((e, t) => (e[t.id] = t, e), {}), Y(e, "debugColumns", "getAllFlatColumnsById")),
		getAllLeafColumns: J(() => [n.getAllColumns(), n._getOrderColumnsFn()], (e, t) => t(e.flatMap((e) => e.getLeafColumns())), Y(e, "debugColumns", "getAllLeafColumns")),
		getColumn: (e) => {
			let t = n._getAllFlatColumnsById()[e];
			return process.env.NODE_ENV !== "production" && !t && console.error(`[Table] Column with id '${e}' does not exist.`), t;
		}
	};
	Object.assign(n, c);
	for (let e = 0; e < n._features.length; e++) {
		let t = n._features[e];
		t == null || t.createTable == null || t.createTable(n);
	}
	return n;
}
function In() {
	return (e) => J(() => [e.options.data], (t) => {
		let n = {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, r = function(t, i, a) {
			i === void 0 && (i = 0);
			let o = [];
			for (let c = 0; c < t.length; c++) {
				let l = Ft(e, e._getRowId(t[c], c, a), t[c], c, i, void 0, a?.id);
				if (n.flatRows.push(l), n.rowsById[l.id] = l, o.push(l), e.options.getSubRows) {
					var s;
					l.originalSubRows = e.options.getSubRows(t[c], c), (s = l.originalSubRows) != null && s.length && (l.subRows = r(l.originalSubRows, i + 1, l));
				}
			}
			return o;
		};
		return n.rows = r(t), n;
	}, Y(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function Ln(e) {
	let t = [], n = (e) => {
		var r;
		t.push(e), (r = e.subRows) != null && r.length && e.getIsExpanded() && e.subRows.forEach(n);
	};
	return e.rows.forEach(n), {
		rows: t,
		flatRows: e.flatRows,
		rowsById: e.rowsById
	};
}
function Rn(e) {
	return (e) => J(() => [
		e.getState().pagination,
		e.getPrePaginationRowModel(),
		e.options.paginateExpandedRows ? void 0 : e.getState().expanded
	], (t, n) => {
		if (!n.rows.length) return n;
		let { pageSize: r, pageIndex: i } = t, { rows: a, flatRows: o, rowsById: s } = n, c = r * i, l = c + r;
		a = a.slice(c, l);
		let u;
		u = e.options.paginateExpandedRows ? {
			rows: a,
			flatRows: o,
			rowsById: s
		} : Ln({
			rows: a,
			flatRows: o,
			rowsById: s
		}), u.flatRows = [];
		let d = (e) => {
			u.flatRows.push(e), e.subRows.length && e.subRows.forEach(d);
		};
		return u.rows.forEach(d), u;
	}, Y(e.options, "debugTable", "getPaginationRowModel"));
}
function zn() {
	return (e) => J(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
		if (!n.rows.length || !(t != null && t.length)) return n;
		let r = e.getState().sorting, i = [], a = r.filter((t) => e.getColumn(t.id)?.getCanSort()), o = {};
		a.forEach((t) => {
			let n = e.getColumn(t.id);
			n && (o[t.id] = {
				sortUndefined: n.columnDef.sortUndefined,
				invertSorting: n.columnDef.invertSorting,
				sortingFn: n.getSortingFn()
			});
		});
		let s = (e) => {
			let t = e.map((e) => ({ ...e }));
			return t.sort((e, t) => {
				for (let n = 0; n < a.length; n += 1) {
					let r = a[n], i = o[r.id], s = i.sortUndefined, c = r?.desc ?? !1, l = 0;
					if (s) {
						let n = e.getValue(r.id), i = t.getValue(r.id), a = n === void 0, o = i === void 0;
						if (a || o) {
							if (s === "first") return a ? -1 : 1;
							if (s === "last") return a ? 1 : -1;
							l = a && o ? 0 : a ? s : -s;
						}
					}
					if (l === 0 && (l = i.sortingFn(e, t, r.id)), l !== 0) return c && (l *= -1), i.invertSorting && (l *= -1), l;
				}
				return e.index - t.index;
			}), t.forEach((e) => {
				var t;
				i.push(e), (t = e.subRows) != null && t.length && (e.subRows = s(e.subRows));
			}), t;
		};
		return {
			rows: s(n.rows),
			flatRows: i,
			rowsById: n.rowsById
		};
	}, Y(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@tanstack+react-table@8.21._87e93dde7311c9ac233092aa7b957df5/node_modules/@tanstack/react-table/build/lib/index.mjs
function Bn(e) {
	let t = {
		state: {},
		onStateChange: () => {},
		renderFallbackValue: null,
		...e
	}, [n] = O.useState(() => ({ current: Fn(t) })), [r, i] = O.useState(() => n.current.initialState);
	return n.current.setOptions((t) => ({
		...t,
		...e,
		state: {
			...r,
			...e.state
		},
		onStateChange: (t) => {
			i(t), e.onStateChange == null || e.onStateChange(t);
		}
	})), n.current;
}
//#endregion
//#region src/components/ui/data-display/data-table/styles.ts
var Vn = "overflow-hidden rounded-[var(--sdk-radius-field)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] shadow-[var(--sdk-shadow-sm)]", Hn = "flex flex-col gap-3 border-t border-[var(--sdk-color-border-default)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between", Un = "flex min-w-0 flex-1 flex-wrap items-center gap-3 text-sm text-[var(--sdk-color-text-secondary)]", Wn = "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end", Gn = "flex items-center gap-2 text-sm text-[var(--sdk-color-text-secondary)]", Kn = "h-9 rounded-[var(--sdk-radius-field)] px-3", qn = "group -mx-2 inline-flex w-[calc(100%+1rem)] items-center justify-between gap-2 rounded-[var(--sdk-radius-field)] px-2 py-1.5 text-left text-[inherit] outline-none transition-colors hover:bg-[var(--sdk-color-surface-panel-muted)] focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)]", Jn = "h-4 w-4 shrink-0 text-[var(--sdk-color-text-muted)]";
//#endregion
//#region src/components/ui/data-display/data-table/header-cell.tsx
function Yn(e) {
	if (e !== void 0) return typeof e == "number" ? `${e}px` : e;
}
function Xn(e) {
	return e.sortLabel ? e.sortLabel : typeof e.header == "string" ? `Sort by ${e.header}` : `Sort by ${e.id}`;
}
function Zn(e) {
	return e === "asc" ? "ascending" : e === "desc" ? "descending" : "none";
}
function Qn({ sortState: e }) {
	return A(e === "asc" ? N : e === "desc" ? M : he, { className: Jn });
}
function $n({ column: n, sortColumn: r, stickyHeader: i = !1 }) {
	let a = r?.getIsSorted() ?? !1, o = !!r?.getCanSort();
	return /* @__PURE__ */ A(et, {
		...t({
			"aria-sort": o ? Zn(a) : void 0,
			className: e(n.align === "center" ? "text-center" : n.align === "right" ? "text-right" : "text-left", i ? "sticky top-0 z-10 bg-[var(--sdk-color-surface-panel)]" : null),
			"data-sdk-region": "data-table-header-cell",
			"data-slot": "data-table-header-cell",
			style: { width: Yn(n.width) }
		}, n.headerProps),
		children: o ? /* @__PURE__ */ j("button", {
			"aria-label": Xn(n),
			className: e(qn, n.align === "center" ? "justify-center" : n.align === "right" ? "justify-end" : "justify-between"),
			"data-sdk-region": "data-table-sort-trigger",
			"data-slot": "data-table-sort-trigger",
			onClick: () => r?.toggleSorting(a === "asc"),
			type: "button",
			children: [/* @__PURE__ */ A("span", {
				className: "truncate",
				children: n.header
			}), /* @__PURE__ */ A(Qn, { sortState: a })]
		}) : n.header
	});
}
//#endregion
//#region src/components/ui/data-display/data-table/pagination-controls.tsx
function er({ currentPage: e, hasPageSizeSelector: t, onPageChange: n, onPageSizeChange: r, pageCount: a, paginationItems: o, pageSizeOptions: s, resolvedPageSize: c }) {
	return /* @__PURE__ */ j("div", {
		className: Wn,
		"data-sdk-region": "data-table-pagination-controls",
		"data-slot": "data-table-pagination-controls",
		children: [t ? /* @__PURE__ */ j("div", {
			className: Gn,
			"data-sdk-region": "data-table-page-size",
			"data-slot": "data-table-page-size",
			children: [/* @__PURE__ */ A("span", {
				className: "whitespace-nowrap",
				children: "Rows per page"
			}), /* @__PURE__ */ j(ie, {
				value: String(c),
				onValueChange: r,
				children: [/* @__PURE__ */ A(ne, {
					"aria-label": "Rows per page",
					className: "h-9 w-[5.5rem] bg-[var(--sdk-color-surface-panel-muted)] shadow-none",
					children: /* @__PURE__ */ A(v, {})
				}), /* @__PURE__ */ A(ae, {
					className: "min-w-[5.5rem]",
					children: s.map((e) => /* @__PURE__ */ A(_, {
						value: String(e),
						children: e
					}, e))
				})]
			})]
		}) : null, /* @__PURE__ */ A(ee, {
			className: "justify-start sm:justify-end",
			children: /* @__PURE__ */ j(h, { children: [
				/* @__PURE__ */ A(m, { children: /* @__PURE__ */ A(i, {
					"aria-label": "Previous page",
					className: Kn,
					disabled: e <= 1,
					onClick: () => n(e - 1),
					size: "sm",
					type: "button",
					variant: "outline",
					children: "Previous"
				}) }),
				o.map((t, r) => /* @__PURE__ */ A(m, { children: typeof t == "number" ? /* @__PURE__ */ A(i, {
					"aria-current": t === e ? "page" : void 0,
					"aria-label": `Page ${t}`,
					className: Kn,
					onClick: () => n(t),
					size: "sm",
					type: "button",
					variant: t === e ? "secondary" : "ghost",
					children: t
				}) : /* @__PURE__ */ A(g, {}) }, `${t}-${r}`)),
				/* @__PURE__ */ A(m, { children: /* @__PURE__ */ A(i, {
					"aria-label": "Next page",
					className: Kn,
					disabled: e >= a,
					onClick: () => n(e + 1),
					size: "sm",
					type: "button",
					variant: "outline",
					children: "Next"
				}) })
			] })
		})]
	});
}
//#endregion
//#region src/components/ui/data-display/data-table/state.ts
function tr(e, t) {
	return Math.min(Math.max(e, 1), t);
}
function nr(e) {
	return Math.max(1, Math.trunc(e) || 1);
}
function rr(e, t) {
	return e?.length === 0 ? [] : Array.from(new Set([...e ?? [
		10,
		20,
		50
	], t])).map(nr).sort((e, t) => e - t);
}
function ir(e, t) {
	return t <= 7 ? Array.from({ length: t }, (e, t) => t + 1) : e <= 4 ? [
		1,
		2,
		3,
		4,
		5,
		"end-ellipsis",
		t
	] : e >= t - 3 ? [
		1,
		"start-ellipsis",
		t - 4,
		t - 3,
		t - 2,
		t - 1,
		t
	] : [
		1,
		"start-ellipsis",
		e - 1,
		e,
		e + 1,
		"end-ellipsis",
		t
	];
}
function ar(e) {
	return e?.length ? e.filter((e) => e.id).map((e) => ({
		desc: !!e.desc,
		id: e.id
	})) : [];
}
function or(e) {
	return e.map((e) => ({
		desc: !!e.desc,
		id: e.id
	}));
}
function sr(e, t) {
	return e.length === t.length ? e.every((e, n) => e.id === t[n]?.id && e.desc === t[n]?.desc) : !1;
}
//#endregion
//#region src/components/ui/data-display/data-table.tsx
var cr = {
	comfortable: "p-4",
	compact: "px-4 py-2.5"
}, lr = {
	center: "text-center",
	left: "text-left",
	right: "text-right"
};
function ur(e, t) {
	return e.id ?? t;
}
function dr(e) {
	return e.accessorFn ? e.accessorFn : e.accessorKey ? (t) => t[e.accessorKey] : (t) => t[e.id];
}
function fr(e) {
	return Object.fromEntries(Object.entries(e ?? {}).filter((e) => e[1] !== void 0));
}
function pr(e, t) {
	let n = new Set(e.map((e) => String(e))), r = [...e];
	return t.forEach((e) => {
		let t = String(e);
		n.has(t) || (n.add(t), r.push(e));
	}), r;
}
var mr = O.forwardRef(({ className: n, columnVisibility: r, columns: i, defaultSorting: a, density: o = "comfortable", description: l, emptyDescription: u, emptyState: d, emptyTitle: f = "No rows", footer: p, getRowId: m = ur, getRowProps: h, getRowSelectionLabel: g, loading: ee = !1, loadingLabel: te, onRowClick: _, onSelectedRowIdsChange: ne, onSortingChange: re, pagination: v, rowActions: ie, rowActionsLabel: ae = "Actions", rows: y, selectable: se = !1, selectedRowIds: b = [], selectionBar: x, slotProps: S, sorting: C, sortingMode: ce = "client", stickyHeader: w = !1, title: T, toolbar: E, ...ue }, de) => {
	let [D, fe] = O.useState(v?.defaultPage ?? 1), [pe, k] = O.useState(nr(v?.defaultPageSize ?? 10)), [M, he] = O.useState(() => ar(a)), N = nr(v?.pageSize ?? pe), P = v?.mode === "server" ? v.rowCount ?? y.length : y.length, F = v ? Math.max(1, Math.ceil(Math.max(P, 1) / N)) : 1, ge = v ? v.page ?? D : 1, I = v ? tr(ge, F) : 1, L = v ? rr(v.pageSizeOptions, N) : [], R = O.useMemo(() => fr(r), [r]), z = C === void 0 ? M : ar(C), _e = O.useMemo(() => i.some((e) => e.sortable), [i]), ve = O.useMemo(() => new Map(i.map((e) => [e.id, e])), [i]), ye = O.useMemo(() => i.map((e) => ({
		accessorFn: dr(e),
		enableHiding: !0,
		enableSorting: !!e.sortable,
		id: e.id
	})), [i]);
	function B(e) {
		if (!v) return;
		let t = tr(e, F);
		v.page === void 0 && fe(t), v.onPageChange?.(t);
	}
	function be(e) {
		let t = typeof e == "function" ? e(z) : e;
		C === void 0 && !sr(M, t) && he(t), re?.(or(t)), v && I !== 1 && B(1);
	}
	function xe(e) {
		if (!v) return;
		let t = nr(Number(e));
		t === N && I === 1 || (v.pageSize === void 0 && k(t), v.page === void 0 && fe(1), v.onPageSizeChange?.(t), I !== 1 && v.onPageChange?.(1));
	}
	let V = Bn({
		columns: ye,
		data: y,
		getCoreRowModel: In(),
		...v && v.mode !== "server" ? { getPaginationRowModel: Rn() } : {},
		..._e && ce !== "server" ? { getSortedRowModel: zn() } : {},
		getRowId: (e, t) => String(m(e, t)),
		manualPagination: v?.mode === "server",
		manualSorting: ce === "server",
		onSortingChange: be,
		rowCount: P,
		state: {
			...v ? { pagination: {
				pageIndex: I - 1,
				pageSize: N
			} } : {},
			columnVisibility: R,
			sorting: z
		}
	}), H = V.getRowModel().rows, U = new Set(b.map((e) => String(e))), Se = y.map((e, t) => m(e, t)), W = H.map((e) => m(e.original, e.index)), Ce = Se.filter((e) => U.has(String(e))).length, we = W.length > 0 && W.every((e) => U.has(String(e))), Te = !we && W.some((e) => U.has(String(e))), Ee = H.length > 0 ? `Showing ${(I - 1) * N + 1}-${(I - 1) * N + H.length} of ${P}` : `Showing 0-0 of ${P}`;
	O.useEffect(() => {
		!v || v.page !== void 0 || D !== I && fe(I);
	}, [
		I,
		v,
		D
	]), O.useEffect(() => {
		!v || v.pageSize !== void 0 || pe !== N && k(N);
	}, [
		v,
		N,
		pe
	]);
	function De(e) {
		ne?.(e);
	}
	function Oe(e) {
		if (e) {
			De(pr(b, W));
			return;
		}
		let t = new Set(W.map((e) => String(e)));
		De(b.filter((e) => !t.has(String(e))));
	}
	function ke(e, t) {
		if (t) {
			De(pr(b, [e]));
			return;
		}
		De(b.filter((t) => String(t) !== String(e)));
	}
	let G = !!v && P > 0, Ae = !!p || G, je = G && L.length > 1, Me = G ? ir(I, F) : [], Ne = V.getHeaderGroups()[0];
	return /* @__PURE__ */ j("div", {
		ref: de,
		className: e("flex flex-col gap-4", n),
		"data-sdk-ui": "data-table",
		"data-slot": "data-table",
		...ue,
		children: [
			T || l || E ? /* @__PURE__ */ j("div", {
				"data-sdk-region": "data-table-header",
				...t({
					className: "flex flex-wrap items-start justify-between gap-3",
					"data-slot": "data-table-header"
				}, S?.header),
				children: [/* @__PURE__ */ j("div", {
					className: "min-w-0",
					children: [T ? /* @__PURE__ */ A("div", {
						className: "text-base font-semibold text-[var(--sdk-color-text-primary)]",
						"data-slot": "data-table-title",
						children: T
					}) : null, l ? /* @__PURE__ */ A("div", {
						className: "mt-1 text-sm text-[var(--sdk-color-text-secondary)]",
						"data-slot": "data-table-description",
						children: l
					}) : null]
				}), E ? /* @__PURE__ */ A("div", {
					"data-sdk-region": "data-table-toolbar",
					...t({ "data-slot": "data-table-toolbar" }, S?.toolbar),
					children: E
				}) : null]
			}) : null,
			Ce > 0 ? /* @__PURE__ */ A(le, {
				actions: x?.actions,
				clearLabel: x?.clearLabel,
				count: Ce,
				description: x?.description,
				meta: x?.meta,
				onClear: ne ? () => De([]) : void 0,
				sticky: x?.sticky,
				title: x?.title ?? "Selected rows",
				tone: x?.tone
			}) : null,
			/* @__PURE__ */ j("div", {
				"data-sdk-region": "data-table-surface",
				...t({
					className: Vn,
					"data-slot": "data-table-surface"
				}, S?.surface),
				children: [ee ? /* @__PURE__ */ A("div", {
					className: "px-4 py-6",
					children: /* @__PURE__ */ A(s, { label: te })
				}) : y.length === 0 ? /* @__PURE__ */ A("div", {
					className: "px-4 py-6",
					children: d ?? /* @__PURE__ */ A(c, {
						description: u,
						title: f
					})
				}) : /* @__PURE__ */ j(Ye, {
					...t({}, S?.table),
					children: [/* @__PURE__ */ A(Xe, { children: /* @__PURE__ */ j($e, { children: [
						se ? /* @__PURE__ */ A(et, {
							className: "w-12",
							children: /* @__PURE__ */ A(oe, {
								"aria-label": "Select all rows",
								checked: we ? !0 : Te ? "indeterminate" : !1,
								onCheckedChange: Oe
							})
						}) : null,
						Ne?.headers.filter((e) => !e.isPlaceholder).map((e) => {
							let t = ve.get(e.column.id);
							return t ? /* @__PURE__ */ A($n, {
								column: t,
								sortColumn: e.column,
								stickyHeader: w
							}, e.id) : null;
						}),
						ie ? /* @__PURE__ */ A(et, {
							className: e("w-1 whitespace-nowrap text-right", w ? "sticky top-0 z-10 bg-[var(--sdk-color-surface-panel)]" : null),
							children: ae
						}) : null
					] }) }), /* @__PURE__ */ A(Ze, { children: H.map((n) => {
						let r = n.original, i = n.index, a = m(r, i), s = U.has(String(a)), c = g?.(r, i) ?? String(a), l = h?.(r, i);
						return /* @__PURE__ */ me($e, {
							...t({
								className: e("hover:bg-[var(--sdk-color-brand-primary-soft)]", _ ? "cursor-pointer" : null),
								"data-sdk-row-id": String(a),
								"data-state": s ? "selected" : "unselected"
							}, l),
							key: String(a),
							onClick: _ ? () => _(r, i) : void 0
						}, se ? /* @__PURE__ */ A(tt, {
							className: cr[o],
							children: /* @__PURE__ */ A(oe, {
								"aria-label": `Select row ${c}`,
								checked: s,
								onCheckedChange: (e) => ke(a, e),
								onClick: (e) => e.stopPropagation()
							})
						}) : null, n.getVisibleCells().map((n) => {
							let a = ve.get(n.column.id);
							if (!a) return null;
							let s = typeof a.cellProps == "function" ? a.cellProps(r, i) : a.cellProps;
							return /* @__PURE__ */ me(tt, {
								...t({ className: e(cr[o], lr[a.align ?? "left"]) }, s),
								key: n.id
							}, a.cell(r, i));
						}), ie ? /* @__PURE__ */ A(tt, {
							className: e(cr[o], "text-right"),
							children: /* @__PURE__ */ A("div", {
								className: "flex justify-end",
								onClick: (e) => e.stopPropagation(),
								children: ie(r, i)
							})
						}) : null);
					}) })]
				}), Ae ? /* @__PURE__ */ j("div", {
					"data-sdk-region": "data-table-footer",
					...t({
						className: Hn,
						"data-slot": "data-table-footer"
					}, S?.footer),
					children: [/* @__PURE__ */ j("div", {
						className: Un,
						children: [p, G ? /* @__PURE__ */ A("span", { children: Ee }) : null]
					}), G ? /* @__PURE__ */ A("div", {
						"data-sdk-region": "data-table-pagination",
						...t({ "data-slot": "data-table-pagination" }, S?.pagination),
						children: /* @__PURE__ */ A(er, {
							currentPage: I,
							hasPageSizeSelector: je,
							onPageChange: B,
							onPageSizeChange: xe,
							pageCount: F,
							pageSizeOptions: L,
							paginationItems: Me,
							resolvedPageSize: N
						})
					}) : null]
				}) : null]
			})
		]
	});
});
mr.displayName = "DataTable";
//#endregion
//#region src/components/ui/data-display/description-list.tsx
var hr = {
	1: "grid-cols-1",
	2: "grid-cols-1 xl:grid-cols-2",
	3: "grid-cols-1 xl:grid-cols-3"
}, gr = O.forwardRef(({ className: t, columns: n = 1, ...r }, i) => /* @__PURE__ */ A("dl", {
	ref: i,
	className: e("grid gap-3", hr[n], t),
	"data-sdk-ui": "description-list",
	"data-slot": "description-list",
	...r
}));
gr.displayName = "DescriptionList";
var _r = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("div", {
	ref: r,
	className: e("space-y-1.5 rounded-[var(--sdk-radius-control)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] px-3 py-3", t),
	"data-sdk-ui": "description-item",
	"data-slot": "description-item",
	...n
}));
_r.displayName = "DescriptionItem";
var vr = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("dt", {
	ref: r,
	className: e("text-xs font-medium uppercase tracking-[0.12em] text-[var(--sdk-color-text-muted)]", t),
	"data-sdk-ui": "description-term",
	"data-slot": "description-term",
	...n
}));
vr.displayName = "DescriptionTerm";
var yr = O.forwardRef(({ className: t, mono: n = !1, ...r }, i) => /* @__PURE__ */ A("dd", {
	ref: i,
	className: e("m-0 text-sm text-[var(--sdk-color-text-primary)]", n ? "font-mono" : void 0, t),
	"data-sdk-ui": "description-details",
	"data-slot": "description-details",
	...r
}));
yr.displayName = "DescriptionDetails";
//#endregion
//#region src/components/ui/data-display/key-value-table.tsx
var br = O.createContext(!1), xr = {
	default: "text-[var(--sdk-color-text-primary)]",
	success: "text-[var(--sdk-color-state-success)]",
	warning: "text-[var(--sdk-color-state-warning)]",
	danger: "text-[var(--sdk-color-state-danger)]"
}, Sr = {
	default: "font-normal",
	strong: "font-semibold"
}, Cr = O.forwardRef(({ className: t, dense: n = !1, rows: r, children: i, ...a }, o) => /* @__PURE__ */ A(br.Provider, {
	value: n,
	children: /* @__PURE__ */ A("table", {
		ref: o,
		className: e("w-full table-fixed border-collapse", t),
		"data-density": n ? "dense" : "default",
		"data-sdk-ui": "key-value-table",
		"data-slot": "key-value-table",
		...a,
		children: /* @__PURE__ */ j("tbody", { children: [r?.map((e, t) => /* @__PURE__ */ j(wr, {
			emphasis: e.emphasis,
			tone: e.tone,
			children: [/* @__PURE__ */ A(Tr, { children: e.label }), /* @__PURE__ */ A(Er, {
				emphasis: e.emphasis,
				mono: e.mono,
				tone: e.tone,
				children: e.value
			})]
		}, e.id ?? t)), i] })
	})
}));
Cr.displayName = "KeyValueTable";
var wr = O.forwardRef(({ className: t, tone: n = "default", emphasis: r = "default", ...i }, a) => /* @__PURE__ */ A("tr", {
	ref: a,
	className: e("border-b border-[var(--sdk-color-border-default)] last:border-b-0", t),
	"data-emphasis": r,
	"data-sdk-ui": "key-value-table-row",
	"data-slot": "key-value-table-row",
	"data-tone": n,
	...i
}));
wr.displayName = "KeyValueTableRow";
var Tr = O.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ A("th", {
	ref: r,
	className: e("w-56 pr-6 text-left align-top text-xs font-medium uppercase tracking-[0.12em] text-[var(--sdk-color-text-muted)]", O.useContext(br) ? "py-1.5" : "py-2.5", t),
	"data-sdk-ui": "key-value-table-label",
	"data-slot": "key-value-table-label",
	scope: "row",
	...n
}));
Tr.displayName = "KeyValueTableLabel";
var Er = O.forwardRef(({ className: t, mono: n = !1, tone: r = "default", emphasis: i = "default", ...a }, o) => {
	let s = O.useContext(br);
	return /* @__PURE__ */ A("td", {
		ref: o,
		className: e("align-top text-sm break-words", xr[r], Sr[i], n ? "font-mono" : void 0, s ? "py-1.5" : "py-2.5", t),
		"data-sdk-ui": "key-value-table-value",
		"data-slot": "key-value-table-value",
		...a
	});
});
Er.displayName = "KeyValueTableValue";
//#endregion
//#region src/components/ui/data-display/markdown-viewer.tsx
var Dr = O.forwardRef(({ children: t = "No markdown content", className: n, ...r }, i) => /* @__PURE__ */ A("div", {
	ref: i,
	className: e("text-sm text-[var(--sdk-color-text-muted)]", n),
	"data-sdk-ui": "markdown-viewer-empty",
	"data-slot": "markdown-viewer-empty",
	...r,
	children: t
}));
Dr.displayName = "MarkdownViewerEmpty";
function Or(e) {
	let t = e.replace(/\r\n/g, "\n").split("\n"), n = [], r = 0;
	for (; r < t.length;) {
		let e = t[r].trim();
		if (!e) {
			r += 1;
			continue;
		}
		if (e.startsWith("```")) {
			let i = e.slice(3).trim() || null, a = [];
			for (r += 1; r < t.length && !t[r].trim().startsWith("```");) a.push(t[r]), r += 1;
			r < t.length && t[r].trim().startsWith("```") && (r += 1), n.push({
				type: "code",
				language: i,
				content: a.join("\n")
			});
			continue;
		}
		let i = /^(#{1,6})\s+(.+)$/.exec(e);
		if (i) {
			n.push({
				type: "heading",
				level: i[1].length,
				content: i[2].trim()
			}), r += 1;
			continue;
		}
		if (/^\s{0,3}([-*_])(\s*\1){2,}\s*$/.test(e)) {
			n.push({ type: "divider" }), r += 1;
			continue;
		}
		if (/^>\s?/.test(e)) {
			let e = [];
			for (; r < t.length && /^>\s?/.test(t[r].trim());) e.push(t[r].trim().replace(/^>\s?/, "")), r += 1;
			n.push({
				type: "quote",
				content: e.join(" ")
			});
			continue;
		}
		if (/^[-*+]\s+/.test(e)) {
			let e = [];
			for (; r < t.length && /^[-*+]\s+/.test(t[r].trim());) e.push(t[r].trim().replace(/^[-*+]\s+/, "")), r += 1;
			n.push({
				type: "unordered-list",
				items: e
			});
			continue;
		}
		if (/^\d+\.\s+/.test(e)) {
			let e = [];
			for (; r < t.length && /^\d+\.\s+/.test(t[r].trim());) e.push(t[r].trim().replace(/^\d+\.\s+/, "")), r += 1;
			n.push({
				type: "ordered-list",
				items: e
			});
			continue;
		}
		let a = [];
		for (; r < t.length && t[r].trim() && !t[r].trim().startsWith("```") && !/^(#{1,6})\s+/.test(t[r].trim()) && !/^[-*+]\s+/.test(t[r].trim()) && !/^\d+\.\s+/.test(t[r].trim()) && !/^>\s?/.test(t[r].trim()) && !/^\s{0,3}([-*_])(\s*\1){2,}\s*$/.test(t[r].trim());) a.push(t[r].trim()), r += 1;
		n.push({
			type: "paragraph",
			content: a.join(" ")
		});
	}
	return n;
}
function kr(t, n) {
	return t.type === "heading" ? /* @__PURE__ */ A(`h${t.level}`, {
		className: e("font-semibold text-[var(--sdk-color-text-primary)]", {
			1: "text-2xl",
			2: "text-xl",
			3: "text-lg",
			4: "text-base",
			5: "text-sm",
			6: "text-sm"
		}[t.level], t.level >= 5 && "uppercase tracking-wide text-[var(--sdk-color-text-secondary)]"),
		children: t.content
	}, n) : t.type === "paragraph" ? /* @__PURE__ */ A("p", {
		className: "text-sm leading-6 text-[var(--sdk-color-text-secondary)]",
		children: t.content
	}, n) : t.type === "unordered-list" || t.type === "ordered-list" ? /* @__PURE__ */ A(t.type === "ordered-list" ? "ol" : "ul", {
		className: e("ml-5 space-y-1 text-sm leading-6 text-[var(--sdk-color-text-secondary)]", t.type === "ordered-list" ? "list-decimal" : "list-disc"),
		children: t.items.map((e, t) => /* @__PURE__ */ A("li", { children: e }, `${n}-item-${t}`))
	}, n) : t.type === "quote" ? /* @__PURE__ */ A("blockquote", {
		className: "border-l-2 border-[var(--sdk-color-border-default)] pl-3 text-sm italic leading-6 text-[var(--sdk-color-text-secondary)]",
		children: t.content
	}, n) : t.type === "divider" ? /* @__PURE__ */ A("hr", { className: "border-[var(--sdk-color-border-default)]" }, n) : t.type === "code" ? /* @__PURE__ */ j("div", {
		className: "overflow-hidden rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)]",
		"data-sdk-ui": "markdown-viewer-code-block",
		"data-slot": "markdown-viewer-code-block",
		children: [t.language ? /* @__PURE__ */ A("div", {
			className: "border-b border-[var(--sdk-color-border-default)] px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-[var(--sdk-color-text-muted)]",
			children: t.language
		}) : null, /* @__PURE__ */ A("pre", {
			className: "overflow-x-auto px-3 py-2 text-xs leading-5 text-[var(--sdk-color-text-primary)]",
			children: /* @__PURE__ */ A("code", { children: t.content })
		})]
	}, n) : null;
}
var Ar = O.forwardRef(({ className: t, content: n, emptyContent: r, ...i }, a) => {
	let o = n?.trim() ?? "", s = o ? Or(o) : [];
	return /* @__PURE__ */ A("div", {
		ref: a,
		className: e("rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-4 shadow-[var(--sdk-shadow-soft)]", t),
		"data-sdk-ui": "markdown-viewer",
		"data-slot": "markdown-viewer",
		...i,
		children: s.length > 0 ? /* @__PURE__ */ A("div", {
			className: "space-y-3",
			children: s.map((e, t) => kr(e, `markdown-block-${t}`))
		}) : /* @__PURE__ */ A(Dr, { children: r })
	});
});
Ar.displayName = "MarkdownViewer";
//#endregion
//#region src/components/ui/data-display/timeline.tsx
var jr = {
	current: "warning",
	done: "success",
	error: "danger"
}, Mr = {
	default: "border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-muted)]",
	success: "border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-state-success)]",
	warning: "border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-state-warning)]",
	danger: "border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-state-danger)]",
	pending: "border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-brand-primary)]"
}, Nr = {
	default: "bg-[var(--sdk-color-text-muted)]",
	success: "bg-[var(--sdk-color-state-success)]",
	warning: "bg-[var(--sdk-color-state-warning)]",
	danger: "bg-[var(--sdk-color-state-danger)]",
	pending: "bg-[var(--sdk-color-brand-primary)]"
};
function Pr(e) {
	return Object.prototype.hasOwnProperty.call(jr, e);
}
function Fr(e) {
	return e ? Pr(e) ? jr[e] : e : "default";
}
var Ir = O.forwardRef(({ className: n, getItemProps: r, getItemSlotProps: i, items: a, ...o }, s) => /* @__PURE__ */ A("ol", {
	ref: s,
	className: e("space-y-0", n),
	"data-sdk-ui": "timeline",
	"data-slot": "timeline",
	...o,
	children: a.map((n, o) => {
		let s = Fr(n.status), c = r?.(n, o), l = i?.(n, o);
		return /* @__PURE__ */ me("li", {
			...t({
				className: "grid grid-cols-[auto_minmax(0,1fr)] gap-4 pb-5 last:pb-0",
				"data-sdk-ui": "timeline-item",
				"data-slot": "timeline-item",
				"data-status": s
			}, c),
			key: n.id ?? o
		}, /* @__PURE__ */ j("div", {
			className: "flex flex-col items-center",
			children: [/* @__PURE__ */ A("span", {
				...t({
					className: e("flex h-8 w-8 shrink-0 items-center justify-center rounded-full border", Mr[s]),
					"data-sdk-region": "timeline-item-indicator",
					"data-slot": "timeline-item-indicator"
				}, l?.indicator),
				children: n.icon ? n.icon : /* @__PURE__ */ A("span", {
					"aria-hidden": "true",
					className: e("h-2.5 w-2.5 rounded-full", Nr[s])
				})
			}), o < a.length - 1 ? /* @__PURE__ */ A("span", { ...t({
				"aria-hidden": "true",
				className: "mt-2 w-px flex-1 rounded-full bg-[var(--sdk-color-border-default)]",
				"data-sdk-region": "timeline-item-connector",
				"data-slot": "timeline-item-connector"
			}, l?.connector) }) : null]
		}), /* @__PURE__ */ j("div", {
			...t({
				className: "min-w-0 rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] px-4 py-3 shadow-[var(--sdk-shadow-soft)]",
				"data-sdk-region": "timeline-item-content",
				"data-slot": "timeline-item-content"
			}, l?.content),
			children: [
				/* @__PURE__ */ j("div", {
					className: "flex flex-wrap items-start justify-between gap-2",
					children: [/* @__PURE__ */ A("div", {
						className: "text-sm font-semibold text-[var(--sdk-color-text-primary)]",
						"data-slot": "timeline-item-title",
						children: n.title
					}), n.timestamp ? /* @__PURE__ */ A("div", {
						className: "text-xs font-medium text-[var(--sdk-color-text-muted)]",
						"data-slot": "timeline-item-timestamp",
						children: n.timestamp
					}) : null]
				}),
				n.description ? /* @__PURE__ */ A("div", {
					className: "mt-1.5 text-sm text-[var(--sdk-color-text-secondary)]",
					"data-slot": "timeline-item-description",
					children: n.description
				}) : null,
				n.content ? /* @__PURE__ */ A("div", {
					className: "mt-3",
					"data-slot": "timeline-item-body",
					children: n.content
				}) : null
			]
		}));
	})
}));
Ir.displayName = "Timeline";
//#endregion
//#region src/components/ui/data-display/tree.tsx
function Lr(e) {
	return Array.from(new Set(e.filter(Boolean)));
}
function Rr(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
	function r(e, i) {
		e.forEach((e) => {
			n.set(e.id, i), t.set(e.id, (e.children ?? []).map((e) => e.id)), e.children?.length && r(e.children, e.id);
		});
	}
	return r(e, null), {
		childrenById: t,
		parentById: n
	};
}
function zr(e, t, n = 1, r = null, i = []) {
	return e.forEach((e) => {
		i.push({
			depth: n,
			id: e.id,
			parentId: r
		}), e.children?.length && t.has(e.id) && zr(e.children, t, n + 1, e.id, i);
	}), i;
}
function Br(e, t) {
	let n = t.get(e) ?? [];
	return n.length === 0 ? [e] : n.flatMap((e) => Br(e, t));
}
function Vr(e) {
	return typeof e.label == "string" || typeof e.label == "number" ? String(e.label) : e.id;
}
function Hr(e, t, n, r, i) {
	let a = i.get(e);
	if (a) return a;
	let o = n.get(e) ?? [];
	if (!r || o.length === 0) {
		let n = {
			checked: t.has(e),
			indeterminate: !1
		};
		return i.set(e, n), n;
	}
	let s = o.length > 0, c = !1;
	o.forEach((e) => {
		let a = Hr(e, t, n, r, i);
		(a.checked || a.indeterminate) && (c = !0), (!a.checked || a.indeterminate) && (s = !1);
	});
	let l = {
		checked: s,
		indeterminate: !s && c
	};
	return i.set(e, l), l;
}
function Ur(e) {
	return /* @__PURE__ */ j("div", {
		className: "min-w-0 flex-1",
		children: [/* @__PURE__ */ j("div", {
			className: "flex min-w-0 items-center gap-2",
			children: [/* @__PURE__ */ A("span", {
				className: "truncate",
				children: e.label
			}), e.badge ? /* @__PURE__ */ A("span", {
				className: "shrink-0",
				children: e.badge
			}) : null]
		}), e.description ? /* @__PURE__ */ A("div", {
			className: "truncate text-xs text-[var(--sdk-color-text-muted)]",
			children: e.description
		}) : null]
	});
}
var Wr = O.forwardRef(({ cascadeCheck: n = !0, checkable: i = !1, checkedIds: a, className: o, defaultCheckedIds: s = [], defaultExpandedIds: l = [], defaultSelectedIds: u = [], emptyDescription: d, emptyState: f, emptyTitle: p = "No items", expandOnSelect: m = !1, expandedIds: h, getItemProps: g, getItemSlotProps: ee, items: _, loadChildren: ne, onCheckedIdsChange: v, onExpandedIdsChange: ie, onSelectedIdsChange: ae, renderActions: se, renderLabel: b, selectedIds: x, selectionMode: S = "single", slotProps: C, ...ce }, w) => {
	let [T, E] = y({
		defaultValue: Lr(u),
		onChange: ae,
		value: x
	}), [le, ue] = y({
		defaultValue: Lr(l),
		onChange: ie,
		value: h
	}), [de, D] = y({
		defaultValue: Lr(s),
		onChange: v,
		value: a
	}), [fe, pe] = O.useState([]), [me, k] = O.useState(null), M = O.useMemo(() => new Set(le), [le]), he = O.useMemo(() => new Set(T), [T]), N = O.useMemo(() => new Set(de), [de]), P = O.useMemo(() => new Set(fe), [fe]), { childrenById: F, parentById: L } = O.useMemo(() => Rr(_), [_]), R = O.useMemo(() => zr(_, M), [M, _]), z = O.useMemo(() => new Map(R.map((e, t) => [e.id, t])), [R]), _e = O.useMemo(() => /* @__PURE__ */ new Map(), [de, _]), ve = O.useRef(/* @__PURE__ */ new Map());
	O.useEffect(() => {
		if (R.length === 0) {
			k(null);
			return;
		}
		k((e) => e && z.has(e) ? e : T[0] ?? R[0]?.id ?? null);
	}, [
		T,
		z,
		R
	]);
	let ye = O.useCallback((e, t) => {
		if (!t) {
			ve.current.delete(e);
			return;
		}
		ve.current.set(e, t);
	}, []), B = O.useCallback((e) => {
		if (!e) return;
		let t = ve.current.get(e);
		t && (t.focus(), k(e));
	}, []), be = O.useCallback(async (e) => {
		let t = F.get(e.id) ?? [];
		if (!(!ne || e.loading || !e.hasChildren || t.length > 0 || P.has(e.id))) {
			pe((t) => t.includes(e.id) ? t : [...t, e.id]);
			try {
				await ne(e);
			} finally {
				pe((t) => t.filter((t) => t !== e.id));
			}
		}
	}, [
		F,
		ne,
		P
	]), xe = O.useCallback((e, t) => {
		ue(t ? Lr([...le, e.id]) : le.filter((t) => t !== e.id)), t && be(e);
	}, [
		le,
		ue,
		be
	]), V = O.useCallback((e) => {
		((F.get(e.id) ?? []).length > 0 || e.hasChildren) && xe(e, !M.has(e.id));
	}, [
		F,
		M,
		xe
	]), H = O.useCallback((e) => {
		if (e.disabled) return;
		let t = (F.get(e.id) ?? []).length > 0 || e.hasChildren, n = he.has(e.id);
		E(Lr(S === "multiple" ? n ? T.filter((t) => t !== e.id) : [...T, e.id] : [e.id])), m && t && V(e);
	}, [
		F,
		m,
		he,
		T,
		S,
		E,
		V
	]), U = O.useCallback((e, t) => {
		if (e.disabled) return;
		let r = t === !0, i = n ? Br(e.id, F) : [e.id], a = new Set(N);
		i.forEach((e) => {
			if (r) {
				a.add(e);
				return;
			}
			a.delete(e);
		}), D(Lr([...a]));
	}, [
		n,
		F,
		N,
		D
	]), Se = O.useCallback((e, t) => {
		let n = z.get(t.id) ?? -1, r = F.get(t.id) ?? [], i = r.length > 0 || t.hasChildren, a = M.has(t.id);
		switch (e.key) {
			case "ArrowDown": {
				e.preventDefault();
				let t = R[n + 1];
				B(t?.id ?? null);
				return;
			}
			case "ArrowUp": {
				e.preventDefault();
				let t = R[n - 1];
				B(t?.id ?? null);
				return;
			}
			case "ArrowRight":
				if (e.preventDefault(), i && !a) {
					xe(t, !0);
					return;
				}
				i && a && r.length > 0 && B(r[0]);
				return;
			case "ArrowLeft":
				if (e.preventDefault(), i && a) {
					xe(t, !1);
					return;
				}
				B(L.get(t.id) ?? null);
				return;
			case "Home":
				e.preventDefault(), B(R[0]?.id ?? null);
				return;
			case "End":
				e.preventDefault(), B(R[R.length - 1]?.id ?? null);
				return;
			case "Enter":
			case " ":
				e.preventDefault(), H(t);
				return;
			default: return;
		}
	}, [
		F,
		M,
		B,
		H,
		L,
		xe,
		z,
		R
	]), W = O.useCallback((a, o) => /* @__PURE__ */ A("ul", {
		className: "space-y-1",
		"data-slot": o === 1 ? "rich-tree-tree" : "rich-tree-group",
		role: o === 1 ? "tree" : "group",
		children: a.map((a) => {
			let s = (F.get(a.id) ?? []).length > 0 || !!a.hasChildren, c = s ? M.has(a.id) : !1, l = Hr(a.id, N, F, n, _e), u = {
				checked: l.checked,
				depth: o,
				disabled: !!a.disabled,
				expanded: c,
				indeterminate: l.indeterminate,
				isBranch: s,
				isLeaf: !s,
				loading: !!a.loading || P.has(a.id),
				selected: he.has(a.id)
			}, d = u.loading ? /* @__PURE__ */ A(r, { className: "h-4 w-4 animate-spin" }) : A(s ? c ? ge : I : re, { className: "h-4 w-4" }), f = se?.(a, u), p = g?.(a, u), m = ee?.(a, u);
			return /* @__PURE__ */ j("li", {
				className: "space-y-1",
				role: "none",
				children: [/* @__PURE__ */ j("div", {
					...t({
						"aria-checked": i ? u.indeterminate ? "mixed" : u.checked : void 0,
						"aria-disabled": a.disabled ? "true" : void 0,
						"aria-expanded": s ? c : void 0,
						"aria-level": o,
						"aria-selected": u.selected,
						className: e("group flex min-h-10 items-center gap-2 rounded-[var(--sdk-radius-field)] px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sdk-color-surface-panel)]", u.selected ? "bg-[var(--sdk-color-brand-primary-soft)] text-[var(--sdk-color-text-primary)]" : "text-[var(--sdk-color-text-secondary)] hover:bg-[var(--sdk-color-surface-panel-muted)] hover:text-[var(--sdk-color-text-primary)]", u.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"),
						"data-depth": o,
						"data-expanded": u.expanded ? "true" : "false",
						"data-selected": u.selected ? "true" : "false",
						"data-slot": "rich-tree-item",
						onClick: () => H(a),
						onFocus: () => k(a.id),
						onKeyDown: (e) => Se(e, a),
						role: "treeitem",
						style: { paddingLeft: `${o * .75}rem` },
						tabIndex: me === a.id ? 0 : -1
					}, p),
					ref: (e) => ye(a.id, e),
					children: [
						s ? /* @__PURE__ */ A("button", {
							...t({
								"aria-label": c ? `Collapse ${Vr(a)}` : `Expand ${Vr(a)}`,
								className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-sm text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-surface-panel-muted)]",
								"data-sdk-region": "rich-tree-item-toggle",
								"data-slot": "rich-tree-item-toggle",
								onClick: (e) => {
									e.stopPropagation(), V(a);
								},
								type: "button"
							}, m?.toggle),
							children: /* @__PURE__ */ A(te, { className: e("h-4 w-4 transition-transform", c && "rotate-90") })
						}) : /* @__PURE__ */ A("span", { className: "h-5 w-5 shrink-0" }),
						i ? /* @__PURE__ */ A(oe, { ...t({
							"aria-label": `Check item ${Vr(a)}`,
							checked: u.indeterminate ? "indeterminate" : u.checked,
							className: "shrink-0",
							"data-sdk-region": "rich-tree-item-checkbox",
							"data-slot": "rich-tree-item-checkbox",
							onCheckedChange: (e) => U(a, e),
							onClick: (e) => e.stopPropagation()
						}, m?.checkbox) }) : null,
						/* @__PURE__ */ A("span", {
							...t({
								className: "shrink-0 text-[var(--sdk-color-text-muted)]",
								"data-sdk-region": "rich-tree-item-icon",
								"data-slot": "rich-tree-item-icon"
							}, m?.icon),
							children: a.icon ?? d
						}),
						/* @__PURE__ */ A("div", {
							...t({
								className: "min-w-0 flex-1",
								"data-sdk-region": "rich-tree-item-content",
								"data-slot": "rich-tree-item-content"
							}, m?.content),
							children: b ? b(a, u) : Ur(a)
						}),
						a.endContent ? /* @__PURE__ */ A("div", {
							...t({
								className: "shrink-0 text-[var(--sdk-color-text-muted)]",
								"data-sdk-region": "rich-tree-item-end-content"
							}, m?.endContent),
							children: a.endContent
						}) : null,
						f ? /* @__PURE__ */ A("div", {
							...t({
								className: "shrink-0",
								"data-sdk-region": "rich-tree-item-actions",
								onClick: (e) => e.stopPropagation()
							}, m?.actions),
							children: f
						}) : null
					]
				}), s && c && a.children?.length ? W(a.children, o + 1) : null]
			}, a.id);
		})
	}), [
		n,
		_e,
		i,
		F,
		N,
		M,
		me,
		g,
		ee,
		U,
		Se,
		H,
		P,
		ye,
		se,
		b,
		he,
		V
	]);
	return _.length === 0 ? /* @__PURE__ */ A("div", {
		ref: w,
		className: e("rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-2", o),
		"data-sdk-ui": "rich-tree",
		"data-slot": "rich-tree",
		...ce,
		children: /* @__PURE__ */ A("div", {
			...t({
				"data-sdk-region": "rich-tree-empty",
				"data-slot": "rich-tree-empty"
			}, C?.empty),
			children: f ?? /* @__PURE__ */ A(c, {
				description: d,
				title: p
			})
		})
	}) : /* @__PURE__ */ A("div", {
		ref: w,
		className: e("rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-2", o),
		"data-sdk-ui": "rich-tree",
		"data-slot": "rich-tree",
		...ce,
		children: /* @__PURE__ */ A("div", {
			...t({
				"aria-multiselectable": S === "multiple" ? "true" : void 0,
				"data-sdk-region": "rich-tree-tree",
				"data-slot": "rich-tree-tree"
			}, C?.tree),
			children: W(_, 1)
		})
	});
});
function Gr({ data: e, defaultSelectedId: t = null, onSelectedIdChange: n, onSelectedIdsChange: r, selectedId: i, selectedIds: a, ...o }) {
	let s = a ?? (i === void 0 ? void 0 : i ? [i] : []), c = o.defaultSelectedIds ?? (t ? [t] : []), l = O.useCallback((e) => {
		r?.(e);
		let t = e[0];
		t && n?.(t);
	}, [n, r]);
	return /* @__PURE__ */ A(Wr, {
		...o,
		"data-sdk-ui": "tree",
		"data-slot": "tree",
		defaultSelectedIds: c,
		expandOnSelect: o.expandOnSelect ?? !0,
		items: e,
		onSelectedIdsChange: l,
		selectedIds: s
	});
}
Wr.displayName = "RichTree", Gr.displayName = "Tree";
//#endregion
export { Je as A, Me as B, tt as C, $e as D, Xe as E, Ge as F, je as H, Be as I, ze as L, We as M, Ke as N, Ve as O, He as P, Fe as R, nt as S, et as T, Ae as U, G as V, Tt as _, Dr as a, Ye as b, wr as c, _r as d, gr as f, St as g, Et as h, Ar as i, qe as j, Ue as k, Er as l, mr as m, Gr as n, Cr as o, vr as p, Ir as r, Tr as s, Wr as t, yr as u, Ct as v, Qe as w, Ze as x, wt as y, Ne as z };

//# sourceMappingURL=data-display-BmGY-nBQ.js.map