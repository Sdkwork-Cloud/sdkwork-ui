import { t as e } from "./utils-Bd3-tWic.js";
import { n as t, t as n } from "./slot-props-CbL7iOod.js";
import { a as r, t as i } from "./dist-5AX1ca2q.js";
import { _ as a, a as o, b as s, i as c, p as l, r as u, v as d, y as f } from "./Combination-CioGxkCi.js";
import { c as p } from "./pagination-CeTLKuAs.js";
import { t as m } from "./chevron-right-DC6qY1J1.js";
import { t as h } from "./x-BUT4ee3J.js";
import { o as g, r as ee, s as _ } from "./dist-D2r-1rhT.js";
import { t as v } from "./dist-DUsjyQ_S.js";
import { _ as te, a as ne, c as re, d as ie, f as ae, g as oe, h as se, i as ce, l as le, m as ue, n as de, o as fe, p as pe, r as me, s as he, t as ge, u as _e } from "./dist-BGsU4-FB.js";
import * as y from "react";
import { createElement as ve } from "react";
import { jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/components/ui/breadcrumb.tsx
var S = y.forwardRef(({ "aria-label": t = "breadcrumb", className: n, ...r }, i) => /* @__PURE__ */ b("nav", {
	ref: i,
	"aria-label": t,
	className: e("w-full", n),
	"data-sdk-ui": "breadcrumb",
	"data-slot": "breadcrumb",
	...r
}));
S.displayName = "Breadcrumb";
var C = y.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ b("ol", {
	ref: r,
	className: e("flex flex-wrap items-center gap-1.5 break-words text-sm text-[var(--sdk-color-text-secondary)]", t),
	"data-sdk-ui": "breadcrumb-list",
	"data-slot": "breadcrumb-list",
	...n
}));
C.displayName = "BreadcrumbList";
var w = y.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ b("li", {
	ref: r,
	className: e("inline-flex items-center gap-1.5", t),
	"data-sdk-ui": "breadcrumb-item",
	"data-slot": "breadcrumb-item",
	...n
}));
w.displayName = "BreadcrumbItem";
var T = y.forwardRef(({ asChild: t = !1, className: n, ...r }, a) => /* @__PURE__ */ b(t ? i : "a", {
	ref: a,
	className: e("transition-colors hover:text-[var(--sdk-color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sdk-color-surface-canvas)]", n),
	"data-sdk-ui": "breadcrumb-link",
	"data-slot": "breadcrumb-link",
	...r
}));
T.displayName = "BreadcrumbLink";
var E = y.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ b("span", {
	ref: r,
	"aria-current": "page",
	"aria-disabled": "true",
	className: e("font-medium text-[var(--sdk-color-text-primary)]", t),
	"data-sdk-ui": "breadcrumb-page",
	"data-slot": "breadcrumb-page",
	...n
}));
E.displayName = "BreadcrumbPage";
var D = y.forwardRef(({ children: t, className: n, ...r }, i) => /* @__PURE__ */ b("li", {
	ref: i,
	"aria-hidden": "true",
	className: e("text-[var(--sdk-color-text-muted)]", n),
	"data-sdk-ui": "breadcrumb-separator",
	"data-slot": "breadcrumb-separator",
	role: "presentation",
	...r,
	children: t ?? /* @__PURE__ */ b(m, { className: "h-3.5 w-3.5" })
}));
D.displayName = "BreadcrumbSeparator";
var O = y.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ x("span", {
	ref: r,
	"aria-hidden": "true",
	className: e("inline-flex h-9 w-9 items-center justify-center", t),
	"data-sdk-ui": "breadcrumb-ellipsis",
	"data-slot": "breadcrumb-ellipsis",
	role: "presentation",
	...n,
	children: [/* @__PURE__ */ b(p, { className: "h-4 w-4" }), /* @__PURE__ */ b("span", {
		className: "sr-only",
		children: "More breadcrumb items"
	})]
}));
O.displayName = "BreadcrumbEllipsis";
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-menubar@1.1_4469cdb730a9394cfd5b7ddf881dc336/node_modules/@radix-ui/react-menubar/dist/index.mjs
var k = "Menubar", [A, ye, be] = a(k), [j, xe] = g(k, [be, o]), M = te(), N = o(), [Se, P] = j(k), F = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, value: r, onValueChange: i, defaultValue: a, loop: o = !0, dir: s, ...l } = e, u = ee(s), f = N(n), [p, m] = d({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: k
	}), [h, g] = y.useState(null);
	return /* @__PURE__ */ b(Se, {
		scope: n,
		value: p,
		onMenuOpen: y.useCallback((e) => {
			m(e), g(e);
		}, [m]),
		onMenuClose: y.useCallback(() => m(""), [m]),
		onMenuToggle: y.useCallback((e) => {
			m((t) => t ? "" : e), g(e);
		}, [m]),
		dir: u,
		loop: o,
		children: /* @__PURE__ */ b(A.Provider, {
			scope: n,
			children: /* @__PURE__ */ b(A.Slot, {
				scope: n,
				children: /* @__PURE__ */ b(c, {
					asChild: !0,
					...f,
					orientation: "horizontal",
					loop: o,
					dir: u,
					currentTabStopId: h,
					onCurrentTabStopIdChange: g,
					children: /* @__PURE__ */ b(v.div, {
						role: "menubar",
						...l,
						ref: t
					})
				})
			})
		})
	});
});
F.displayName = k;
var I = "MenubarMenu", [Ce, L] = j(I), R = (e) => {
	let { __scopeMenubar: t, value: n, ...r } = e, i = l(), a = n || i || "LEGACY_REACT_AUTO_VALUE", o = P(I, t), s = M(t), c = y.useRef(null), u = y.useRef(!1), d = o.value === a;
	return y.useEffect(() => {
		d || (u.current = !1);
	}, [d]), /* @__PURE__ */ b(Ce, {
		scope: t,
		value: a,
		triggerId: l(),
		triggerRef: c,
		contentId: l(),
		wasKeyboardTriggerOpenRef: u,
		children: /* @__PURE__ */ b(ae, {
			...s,
			open: d,
			onOpenChange: (e) => {
				e || o.onMenuClose();
			},
			modal: !1,
			dir: o.dir,
			...r
		})
	});
};
R.displayName = I;
var z = "MenubarTrigger", B = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, disabled: i = !1, ...a } = e, o = N(n), s = M(n), c = P(z, n), l = L(z, n), d = y.useRef(null), f = r(t, d, l.triggerRef), [p, m] = y.useState(!1), h = c.value === l.value;
	return /* @__PURE__ */ b(A.ItemSlot, {
		scope: n,
		value: l.value,
		disabled: i,
		children: /* @__PURE__ */ b(u, {
			asChild: !0,
			...o,
			focusable: !i,
			tabStopId: l.value,
			children: /* @__PURE__ */ b(ge, {
				asChild: !0,
				...s,
				children: /* @__PURE__ */ b(v.button, {
					type: "button",
					role: "menuitem",
					id: l.triggerId,
					"aria-haspopup": "menu",
					"aria-expanded": h,
					"aria-controls": h ? l.contentId : void 0,
					"data-highlighted": p ? "" : void 0,
					"data-state": h ? "open" : "closed",
					"data-disabled": i ? "" : void 0,
					disabled: i,
					...a,
					ref: f,
					onPointerDown: _(e.onPointerDown, (e) => {
						!i && e.button === 0 && e.ctrlKey === !1 && (c.onMenuOpen(l.value), h || e.preventDefault());
					}),
					onPointerEnter: _(e.onPointerEnter, () => {
						c.value && !h && (c.onMenuOpen(l.value), d.current?.focus());
					}),
					onKeyDown: _(e.onKeyDown, (e) => {
						i || (["Enter", " "].includes(e.key) && c.onMenuToggle(l.value), e.key === "ArrowDown" && c.onMenuOpen(l.value), [
							"Enter",
							" ",
							"ArrowDown"
						].includes(e.key) && (l.wasKeyboardTriggerOpenRef.current = !0, e.preventDefault()));
					}),
					onFocus: _(e.onFocus, () => m(!0)),
					onBlur: _(e.onBlur, () => m(!1))
				})
			})
		})
	});
});
B.displayName = z;
var we = "MenubarPortal", V = (e) => {
	let { __scopeMenubar: t, ...n } = e;
	return /* @__PURE__ */ b(le, {
		...M(t),
		...n
	});
};
V.displayName = we;
var H = "MenubarContent", U = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, align: r = "start", ...i } = e, a = M(n), o = P(H, n), s = L(H, n), c = ye(n), l = y.useRef(!1);
	return /* @__PURE__ */ b(ce, {
		id: s.contentId,
		"aria-labelledby": s.triggerId,
		"data-radix-menubar-content": "",
		...a,
		...i,
		ref: t,
		align: r,
		onCloseAutoFocus: _(e.onCloseAutoFocus, (e) => {
			!o.value && !l.current && s.triggerRef.current?.focus(), l.current = !1, e.preventDefault();
		}),
		onFocusOutside: _(e.onFocusOutside, (e) => {
			let t = e.target;
			c().some((e) => e.ref.current?.contains(t)) && e.preventDefault();
		}),
		onInteractOutside: _(e.onInteractOutside, () => {
			l.current = !0;
		}),
		onEntryFocus: (e) => {
			s.wasKeyboardTriggerOpenRef.current || e.preventDefault();
		},
		onKeyDown: _(e.onKeyDown, (e) => {
			if (["ArrowRight", "ArrowLeft"].includes(e.key)) {
				let t = e.target, n = t.hasAttribute("data-radix-menubar-subtrigger"), r = t.closest("[data-radix-menubar-content]") !== e.currentTarget, i = (o.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === e.key;
				if (!i && n || r && i) return;
				let a = c().filter((e) => !e.disabled).map((e) => e.value);
				i && a.reverse();
				let l = a.indexOf(s.value);
				a = o.loop ? Ue(a, l + 1) : a.slice(l + 1);
				let [u] = a;
				u && o.onMenuOpen(u);
			}
		}, { checkForDefaultPrevented: !1 }),
		style: {
			...e.style,
			"--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
			"--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
			"--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
U.displayName = H;
var Te = "MenubarGroup", W = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ b(ne, {
		...M(n),
		...r,
		ref: t
	});
});
W.displayName = Te;
var Ee = "MenubarLabel", G = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ b(re, {
		...M(n),
		...r,
		ref: t
	});
});
G.displayName = Ee;
var De = "MenubarItem", K = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ b(fe, {
		...M(n),
		...r,
		ref: t
	});
});
K.displayName = De;
var Oe = "MenubarCheckboxItem", q = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ b(me, {
		...M(n),
		...r,
		ref: t
	});
});
q.displayName = Oe;
var ke = "MenubarRadioGroup", J = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ b(_e, {
		...M(n),
		...r,
		ref: t
	});
});
J.displayName = ke;
var Ae = "MenubarRadioItem", Y = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ b(ie, {
		...M(n),
		...r,
		ref: t
	});
});
Y.displayName = Ae;
var je = "MenubarItemIndicator", Me = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ b(he, {
		...M(n),
		...r,
		ref: t
	});
});
Me.displayName = je;
var Ne = "MenubarSeparator", Pe = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ b(pe, {
		...M(n),
		...r,
		ref: t
	});
});
Pe.displayName = Ne;
var Fe = "MenubarArrow", Ie = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ b(de, {
		...M(n),
		...r,
		ref: t
	});
});
Ie.displayName = Fe;
var Le = "MenubarSub", Re = (e) => {
	let { __scopeMenubar: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = M(t), [s, c] = d({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: Le
	});
	return /* @__PURE__ */ b(ue, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
};
Re.displayName = Le;
var ze = "MenubarSubTrigger", Be = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e, i = M(n);
	return /* @__PURE__ */ b(oe, {
		"data-radix-menubar-subtrigger": "",
		...i,
		...r,
		ref: t
	});
});
Be.displayName = ze;
var Ve = "MenubarSubContent", He = y.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ b(se, {
		...M(n),
		"data-radix-menubar-content": "",
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
			"--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
			"--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
He.displayName = Ve;
function Ue(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var We = F, Ge = R, Ke = B, qe = V, Je = U, Ye = W, Xe = G, Ze = K, Qe = q, $e = J, et = Y, tt = Me, nt = Pe, rt = Re, it = Be, at = He, ot = y.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ b(We, {
	ref: r,
	className: e("flex min-h-10 items-center gap-1 rounded-[var(--sdk-radius-control)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-1 shadow-[var(--sdk-shadow-sm)]", t),
	"data-sdk-ui": "menubar",
	"data-slot": "menubar",
	...n
}));
ot.displayName = "Menubar";
var st = Ge, ct = qe, lt = rt, ut = y.forwardRef(({ ...e }, t) => /* @__PURE__ */ b(Ye, {
	ref: t,
	"data-sdk-ui": "menubar-group",
	"data-slot": "menubar-group",
	...e
}));
ut.displayName = "MenubarGroup";
var dt = y.forwardRef(({ ...e }, t) => /* @__PURE__ */ b($e, {
	ref: t,
	"data-sdk-ui": "menubar-radio-group",
	"data-slot": "menubar-radio-group",
	...e
}));
dt.displayName = "MenubarRadioGroup";
var ft = y.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ b(Ke, {
	ref: r,
	className: e("inline-flex min-h-8 select-none items-center rounded-[var(--sdk-radius-control)] px-3 text-sm font-medium text-[var(--sdk-color-text-secondary)] outline-none transition-colors hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)] focus:bg-[var(--sdk-color-brand-primary-soft)] data-[state=open]:bg-[var(--sdk-color-brand-primary-soft)] data-[state=open]:text-[var(--sdk-color-text-primary)]", t),
	"data-sdk-ui": "menubar-trigger",
	"data-slot": "menubar-trigger",
	...n
}));
ft.displayName = "MenubarTrigger";
var pt = y.forwardRef(({ className: t, inset: n, children: r, ...i }, a) => /* @__PURE__ */ x(it, {
	ref: a,
	className: e("flex cursor-default select-none items-center gap-2 rounded-[var(--sdk-radius-field)] px-2 py-1.5 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] data-[state=open]:bg-[var(--sdk-color-brand-primary-soft)]", n && "pl-8", t),
	"data-sdk-ui": "menubar-sub-trigger",
	"data-slot": "menubar-sub-trigger",
	...i,
	children: [r, /* @__PURE__ */ b(m, { className: "ml-auto h-4 w-4" })]
}));
pt.displayName = "MenubarSubTrigger";
var mt = "z-50 min-w-[12rem] overflow-hidden rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-1 text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-md)]", X = y.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ b(at, {
	ref: r,
	className: e(mt, t),
	"data-sdk-ui": "menubar-sub-content",
	"data-slot": "menubar-sub-content",
	...n
}));
X.displayName = "MenubarSubContent";
var ht = y.forwardRef(({ align: t = "start", className: n, sideOffset: r = 8, ...i }, a) => /* @__PURE__ */ b(qe, { children: /* @__PURE__ */ b(Je, {
	ref: a,
	align: t,
	sideOffset: r,
	className: e(mt, n),
	"data-sdk-ui": "menubar-content",
	"data-slot": "menubar-content",
	...i
}) }));
ht.displayName = "MenubarContent";
var gt = y.forwardRef(({ className: t, inset: n, ...r }, i) => /* @__PURE__ */ b(Ze, {
	ref: i,
	className: e("relative flex cursor-default select-none items-center gap-2 rounded-[var(--sdk-radius-field)] px-2 py-1.5 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] focus:text-[var(--sdk-color-text-primary)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n && "pl-8", t),
	"data-sdk-ui": "menubar-item",
	"data-slot": "menubar-item",
	...r
}));
gt.displayName = "MenubarItem";
var _t = y.forwardRef(({ checked: t, children: n, className: r, ...i }, a) => /* @__PURE__ */ x(Qe, {
	ref: a,
	checked: t,
	className: e("relative flex cursor-default select-none items-center gap-2 rounded-[var(--sdk-radius-field)] py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
	"data-sdk-ui": "menubar-checkbox-item",
	"data-slot": "menubar-checkbox-item",
	...i,
	children: [/* @__PURE__ */ b("span", {
		className: "absolute left-2 flex h-4 w-4 items-center justify-center",
		children: /* @__PURE__ */ b(tt, { children: /* @__PURE__ */ b(s, { className: "h-4 w-4" }) })
	}), n]
}));
_t.displayName = "MenubarCheckboxItem";
var vt = y.forwardRef(({ children: t, className: n, ...r }, i) => /* @__PURE__ */ x(et, {
	ref: i,
	className: e("relative flex cursor-default select-none items-center gap-2 rounded-[var(--sdk-radius-field)] py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
	"data-sdk-ui": "menubar-radio-item",
	"data-slot": "menubar-radio-item",
	...r,
	children: [/* @__PURE__ */ b("span", {
		className: "absolute left-2 flex h-4 w-4 items-center justify-center",
		children: /* @__PURE__ */ b(tt, { children: /* @__PURE__ */ b(f, { className: "h-2.5 w-2.5 fill-current" }) })
	}), t]
}));
vt.displayName = "MenubarRadioItem";
var yt = y.forwardRef(({ className: t, inset: n, ...r }, i) => /* @__PURE__ */ b(Xe, {
	ref: i,
	className: e("px-2 py-1.5 text-sm font-semibold text-[var(--sdk-color-text-secondary)]", n && "pl-8", t),
	"data-sdk-ui": "menubar-label",
	"data-slot": "menubar-label",
	...r
}));
yt.displayName = "MenubarLabel";
var bt = y.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ b(nt, {
	ref: r,
	className: e("-mx-1 my-1 h-px bg-[var(--sdk-color-border-subtle)]", t),
	"data-sdk-ui": "menubar-separator",
	"data-slot": "menubar-separator",
	...n
}));
bt.displayName = "MenubarSeparator";
var xt = y.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ b("span", {
	ref: r,
	className: e("ml-auto text-xs tracking-[0.14em] text-[var(--sdk-color-text-muted)]", t),
	"data-sdk-ui": "menubar-shortcut",
	"data-slot": "menubar-shortcut",
	...n
}));
xt.displayName = "MenubarShortcut", st.displayName = "MenubarMenu", ct.displayName = "MenubarPortal", lt.displayName = "MenubarSub";
//#endregion
//#region src/components/ui/navigation/stepper.tsx
var St = y.createContext("horizontal"), Ct = {
	complete: "border-[var(--sdk-color-state-success)] bg-[color-mix(in_srgb,var(--sdk-color-state-success)_14%,var(--sdk-color-surface-panel))] text-[var(--sdk-color-state-success)]",
	current: "border-[var(--sdk-color-brand-primary)] bg-[var(--sdk-color-brand-primary-soft)] text-[var(--sdk-color-brand-primary)]",
	error: "border-[var(--sdk-color-state-danger)] bg-[color-mix(in_srgb,var(--sdk-color-state-danger)_14%,var(--sdk-color-surface-panel))] text-[var(--sdk-color-state-danger)]",
	upcoming: "border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-muted)]"
}, Z = {
	complete: "bg-[var(--sdk-color-state-success)]/35",
	current: "bg-[var(--sdk-color-brand-primary)]/25",
	upcoming: "bg-[var(--sdk-color-border-default)]"
};
function wt(e, t) {
	let r = {}, i = n(e?.connector, t?.connector), a = n(e?.content, t?.content), o = n(e?.indicator, t?.indicator);
	return i && (r.connector = i), a && (r.content = a), o && (r.indicator = o), Object.keys(r).length > 0 ? r : void 0;
}
var Tt = y.forwardRef(({ children: t, className: n, getItemProps: r, getItemSlotProps: i, orientation: a = "horizontal", ...o }, s) => {
	let c = y.Children.toArray(t).map((t, n, o) => {
		if (!y.isValidElement(t)) return t;
		let s = t.props, c = {
			index: n,
			last: n === o.length - 1,
			orientation: a,
			status: s.status ?? "upcoming"
		}, l = r?.(c);
		return y.cloneElement(t, {
			...l,
			...s,
			className: e(l?.className, s.className),
			last: c.last,
			slotProps: wt(i?.(c), s.slotProps),
			style: l?.style || s.style ? {
				...l?.style,
				...s.style
			} : void 0,
			stepNumber: n + 1
		});
	});
	return /* @__PURE__ */ b(St.Provider, {
		value: a,
		children: /* @__PURE__ */ b("ol", {
			ref: s,
			className: e(a === "horizontal" ? "flex flex-wrap items-start gap-3" : "space-y-3", n),
			"data-orientation": a,
			"data-sdk-ui": "stepper",
			"data-slot": "stepper",
			...o,
			children: c
		})
	});
});
Tt.displayName = "Stepper";
var Et = y.forwardRef(({ className: n, description: r, icon: i, last: a = !1, meta: o, slotProps: s, status: c = "upcoming", stepNumber: l = 1, title: u, ...d }, f) => {
	let p = y.useContext(St), m = i ?? l;
	return p === "vertical" ? /* @__PURE__ */ x("li", {
		ref: f,
		className: e("grid grid-cols-[auto_minmax(0,1fr)] gap-3", n),
		"data-orientation": p,
		"data-sdk-ui": "stepper-item",
		"data-slot": "stepper-item",
		"data-status": c,
		...d,
		children: [/* @__PURE__ */ x("div", {
			className: "flex flex-col items-center",
			children: [/* @__PURE__ */ b("span", {
				...t({
					className: e("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold shadow-[var(--sdk-shadow-soft)]", Ct[c]),
					"data-sdk-region": "stepper-item-indicator",
					"data-slot": "stepper-item-indicator"
				}, s?.indicator),
				children: m
			}), a ? null : /* @__PURE__ */ b("span", { ...t({
				"aria-hidden": "true",
				className: e("mt-2 w-px flex-1 rounded-full", c === "error" ? Z.upcoming : Z[c]),
				"data-sdk-region": "stepper-item-connector",
				"data-slot": "stepper-item-connector"
			}, s?.connector) })]
		}), /* @__PURE__ */ x("div", {
			...t({
				className: "min-w-0 rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] px-4 py-3 shadow-[var(--sdk-shadow-soft)]",
				"data-sdk-region": "stepper-item-content",
				"data-slot": "stepper-item-content"
			}, s?.content),
			children: [/* @__PURE__ */ x("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ b("div", {
					className: "text-sm font-semibold text-[var(--sdk-color-text-primary)]",
					"data-slot": "stepper-item-title",
					children: u
				}), o ? /* @__PURE__ */ b("div", {
					className: "text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--sdk-color-text-muted)]",
					"data-slot": "stepper-item-meta",
					children: o
				}) : null]
			}), r ? /* @__PURE__ */ b("div", {
				className: "mt-1.5 text-sm text-[var(--sdk-color-text-secondary)]",
				"data-slot": "stepper-item-description",
				children: r
			}) : null]
		})]
	}) : /* @__PURE__ */ x("li", {
		ref: f,
		className: e("flex min-w-[12rem] flex-1 items-start gap-3", n),
		"data-orientation": p,
		"data-sdk-ui": "stepper-item",
		"data-slot": "stepper-item",
		"data-status": c,
		...d,
		children: [/* @__PURE__ */ x("div", {
			className: "flex min-w-0 flex-1 items-start gap-3",
			children: [/* @__PURE__ */ b("span", {
				...t({
					className: e("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold shadow-[var(--sdk-shadow-soft)]", Ct[c]),
					"data-sdk-region": "stepper-item-indicator",
					"data-slot": "stepper-item-indicator"
				}, s?.indicator),
				children: m
			}), /* @__PURE__ */ x("div", {
				...t({
					className: "min-w-0",
					"data-sdk-region": "stepper-item-content",
					"data-slot": "stepper-item-content"
				}, s?.content),
				children: [/* @__PURE__ */ x("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ b("div", {
						className: "text-sm font-semibold text-[var(--sdk-color-text-primary)]",
						"data-slot": "stepper-item-title",
						children: u
					}), o ? /* @__PURE__ */ b("div", {
						className: "text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--sdk-color-text-muted)]",
						"data-slot": "stepper-item-meta",
						children: o
					}) : null]
				}), r ? /* @__PURE__ */ b("div", {
					className: "mt-1.5 text-sm text-[var(--sdk-color-text-secondary)]",
					"data-slot": "stepper-item-description",
					children: r
				}) : null]
			})]
		}), a ? null : /* @__PURE__ */ b("span", { ...t({
			"aria-hidden": "true",
			className: e("mt-[1.125rem] h-px min-w-6 flex-1 rounded-full", c === "error" ? Z.upcoming : Z[c]),
			"data-sdk-region": "stepper-item-connector",
			"data-slot": "stepper-item-connector"
		}, s?.connector) })]
	});
});
Et.displayName = "StepperItem";
//#endregion
//#region src/components/ui/navigation/workspace-tabs.tsx
function Dt(e, t) {
	let r = {}, i = n(e?.closeButton, t?.closeButton), a = n(e?.icon, t?.icon), o = n(e?.label, t?.label), s = n(e?.meta, t?.meta), c = n(e?.modifiedIndicator, t?.modifiedIndicator), l = n(e?.trigger, t?.trigger);
	return i && (r.closeButton = i), a && (r.icon = a), o && (r.label = o), s && (r.meta = s), c && (r.modifiedIndicator = c), l && (r.trigger = l), Object.keys(r).length > 0 ? r : void 0;
}
function Ot(e) {
	return typeof e.label == "string" ? `Close ${e.label}` : e.closeLabel ?? "Close tab";
}
var Q = y.forwardRef(({ className: n, item: r, onCloseTab: i, onValueChange: a, selected: o = !1, slotProps: s, ...c }, l) => /* @__PURE__ */ x("div", {
	ref: l,
	className: e("group inline-flex items-center gap-1 rounded-[var(--sdk-radius-control)] border transition-colors", i ? "pr-1.5" : "pr-2", o ? "border-[var(--sdk-color-brand-primary)]/25 bg-[var(--sdk-color-brand-primary-soft)] text-[var(--sdk-color-text-primary)]" : "border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-secondary)]", n),
	"data-disabled": r.disabled ? "true" : "false",
	"data-sdk-ui": "workspace-tab",
	"data-slot": "workspace-tab",
	"data-state": o ? "active" : "inactive",
	...c,
	children: [/* @__PURE__ */ x("button", {
		...t({
			"aria-selected": o,
			className: e("inline-flex min-w-0 items-center gap-2 rounded-[var(--sdk-radius-control)] px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)]", o ? "text-[var(--sdk-color-text-primary)]" : "hover:text-[var(--sdk-color-text-primary)]"),
			"data-sdk-region": "workspace-tab-trigger",
			"data-slot": "workspace-tab-trigger",
			disabled: r.disabled,
			onClick: () => a?.(r.id),
			role: "tab",
			tabIndex: o ? 0 : -1,
			type: "button"
		}, s?.trigger),
		children: [
			r.icon ? /* @__PURE__ */ b("span", {
				...t({
					className: "shrink-0",
					"data-sdk-region": "workspace-tab-icon",
					"data-slot": "workspace-tab-icon"
				}, s?.icon),
				children: r.icon
			}) : null,
			/* @__PURE__ */ b("span", {
				...t({
					className: "truncate",
					"data-sdk-region": "workspace-tab-label",
					"data-slot": "workspace-tab-label"
				}, s?.label),
				children: r.label
			}),
			r.modified ? /* @__PURE__ */ b("span", { ...t({
				"aria-hidden": "true",
				className: "inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--sdk-color-state-warning)]",
				"data-sdk-region": "workspace-tab-modified-indicator",
				"data-slot": "workspace-tab-modified-indicator"
			}, s?.modifiedIndicator) }) : null,
			r.meta ? /* @__PURE__ */ b("span", {
				...t({
					className: "shrink-0 text-xs text-[var(--sdk-color-text-muted)]",
					"data-sdk-region": "workspace-tab-meta",
					"data-slot": "workspace-tab-meta"
				}, s?.meta),
				children: r.meta
			}) : null
		]
	}), i ? /* @__PURE__ */ b("button", {
		...t({
			"aria-label": r.closeLabel ?? Ot(r),
			className: "rounded-full p-1 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]",
			"data-sdk-region": "workspace-tab-close-button",
			"data-slot": "workspace-tab-close-button",
			onClick: (e) => {
				e.stopPropagation(), i(r.id);
			},
			type: "button"
		}, s?.closeButton),
		children: /* @__PURE__ */ b(h, { className: "h-3.5 w-3.5" })
	}) : null]
}));
Q.displayName = "WorkspaceTab";
var $ = y.forwardRef(({ actions: n, className: r, emptyState: i = "Workspace", getItemProps: a, getItemSlotProps: o, items: s, onCloseTab: c, onValueChange: l, slotProps: u, value: d, ...f }, p) => /* @__PURE__ */ x("div", {
	ref: p,
	className: e("flex items-center gap-3", r),
	"data-sdk-ui": "workspace-tabs",
	"data-slot": "workspace-tabs",
	...f,
	children: [/* @__PURE__ */ b("div", {
		...t({
			"aria-label": "Workspace tabs",
			"aria-orientation": "horizontal",
			className: "flex min-w-0 flex-1 items-center gap-2 overflow-x-auto",
			"data-sdk-region": "workspace-tabs-tablist",
			"data-slot": "workspace-tabs-tablist",
			role: "tablist"
		}, u?.tabList),
		children: s.length === 0 ? /* @__PURE__ */ b("span", {
			...t({
				className: "px-1 text-sm text-[var(--sdk-color-text-muted)]",
				"data-sdk-region": "workspace-tabs-empty",
				"data-slot": "workspace-tabs-empty"
			}, u?.empty),
			children: i
		}) : s.map((e, t) => {
			let n = {
				index: t,
				item: e,
				selected: e.id === d
			};
			return /* @__PURE__ */ ve(Q, {
				...a?.(n),
				item: e,
				key: e.id,
				onCloseTab: c,
				onValueChange: l,
				selected: n.selected,
				slotProps: Dt(o?.(n), void 0)
			});
		})
	}), n ? /* @__PURE__ */ b("div", {
		...t({
			className: "flex shrink-0 items-center gap-2",
			"data-sdk-region": "workspace-tabs-actions",
			"data-slot": "workspace-tabs-actions"
		}, u?.actions),
		children: n
	}) : null]
}));
$.displayName = "WorkspaceTabs";
//#endregion
export { w as C, D, E, O as S, C as T, lt as _, ot as a, ft as b, ut as c, st as d, ct as f, xt as g, bt as h, Et as i, gt as l, vt as m, $ as n, _t as o, dt as p, Tt as r, ht as s, Q as t, yt as u, X as v, T as w, S as x, pt as y };

//# sourceMappingURL=navigation-jGTN_Vg9.js.map