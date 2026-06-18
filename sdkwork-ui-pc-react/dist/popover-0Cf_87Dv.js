import { t as e } from "./utils-Bd3-tWic.js";
import { a as t, n } from "./dist-5AX1ca2q.js";
import { c as r, d as i, g as a, h as o, l as s, m as c, n as l, o as u, p as d, s as f, t as p, u as m, v as h } from "./Combination-CioGxkCi.js";
import { o as g, s as _, t as v } from "./dist-D2r-1rhT.js";
import { t as y } from "./dist-DUsjyQ_S.js";
import * as b from "react";
import { jsx as x } from "react/jsx-runtime";
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-popover@1.1_ed1201cbdd15e9716c25d5ed3df76d9d/node_modules/@radix-ui/react-popover/dist/index.mjs
var S = "Popover", [C, ee] = g(S, [i]), w = i(), [te, T] = C(S), E = (e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = w(t), c = b.useRef(null), [l, u] = b.useState(!1), [f, p] = h({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: S
	});
	return /* @__PURE__ */ x(m, {
		...s,
		children: /* @__PURE__ */ x(te, {
			scope: t,
			contentId: d(),
			triggerRef: c,
			open: f,
			onOpenChange: p,
			onOpenToggle: b.useCallback(() => p((e) => !e), [p]),
			hasCustomAnchor: l,
			onCustomAnchorAdd: b.useCallback(() => u(!0), []),
			onCustomAnchorRemove: b.useCallback(() => u(!1), []),
			modal: o,
			children: n
		})
	});
};
E.displayName = S;
var D = "PopoverAnchor", O = b.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = T(D, n), a = w(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return b.useEffect(() => (o(), () => s()), [o, s]), /* @__PURE__ */ x(f, {
		...a,
		...r,
		ref: t
	});
});
O.displayName = D;
var k = "PopoverTrigger", A = b.forwardRef((e, n) => {
	let { __scopePopover: r, ...i } = e, a = T(k, r), o = w(r), s = t(n, a.triggerRef), c = /* @__PURE__ */ x(y.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": a.open,
		"aria-controls": a.open ? a.contentId : void 0,
		"data-state": W(a.open),
		...i,
		ref: s,
		onClick: _(e.onClick, a.onOpenToggle)
	});
	return a.hasCustomAnchor ? c : /* @__PURE__ */ x(f, {
		asChild: !0,
		...o,
		children: c
	});
});
A.displayName = k;
var j = "PopoverPortal", [M, N] = C(j, { forceMount: void 0 }), P = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = T(j, t);
	return /* @__PURE__ */ x(M, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ x(v, {
			present: n || a.open,
			children: /* @__PURE__ */ x(u, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
P.displayName = j;
var F = "PopoverContent", I = b.forwardRef((e, t) => {
	let n = N(F, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = T(F, e.__scopePopover);
	return /* @__PURE__ */ x(v, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ x(R, {
			...i,
			ref: t
		}) : /* @__PURE__ */ x(ne, {
			...i,
			ref: t
		})
	});
});
I.displayName = F;
var L = n("PopoverContent.RemoveScroll"), R = b.forwardRef((e, n) => {
	let r = T(F, e.__scopePopover), i = b.useRef(null), a = t(n, i), o = b.useRef(!1);
	return b.useEffect(() => {
		let e = i.current;
		if (e) return l(e);
	}, []), /* @__PURE__ */ x(p, {
		as: L,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ x(z, {
			...e,
			ref: a,
			trapFocus: r.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: _(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), o.current || r.triggerRef.current?.focus();
			}),
			onPointerDownOutside: _(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				o.current = t.button === 2 || n;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: _(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), ne = b.forwardRef((e, t) => {
	let n = T(F, e.__scopePopover), r = b.useRef(!1), i = b.useRef(!1);
	return /* @__PURE__ */ x(z, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}), z = b.forwardRef((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: l, disableOutsidePointerEvents: u, onEscapeKeyDown: d, onPointerDownOutside: f, onFocusOutside: p, onInteractOutside: m, ...h } = e, g = T(F, n), _ = w(n);
	return o(), /* @__PURE__ */ x(c, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: l,
		children: /* @__PURE__ */ x(a, {
			asChild: !0,
			disableOutsidePointerEvents: u,
			onInteractOutside: m,
			onEscapeKeyDown: d,
			onPointerDownOutside: f,
			onFocusOutside: p,
			onDismiss: () => g.onOpenChange(!1),
			children: /* @__PURE__ */ x(s, {
				"data-state": W(g.open),
				role: "dialog",
				id: g.contentId,
				..._,
				...h,
				ref: t,
				style: {
					...h.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), B = "PopoverClose", V = b.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = T(B, n);
	return /* @__PURE__ */ x(y.button, {
		type: "button",
		...r,
		ref: t,
		onClick: _(e.onClick, () => i.onOpenChange(!1))
	});
});
V.displayName = B;
var H = "PopoverArrow", U = b.forwardRef((e, t) => {
	let { __scopePopover: n, ...i } = e;
	return /* @__PURE__ */ x(r, {
		...w(n),
		...i,
		ref: t
	});
});
U.displayName = H;
function W(e) {
	return e ? "open" : "closed";
}
var G = E, K = O, q = A, J = P, Y = I, X = G, Z = b.forwardRef(({ ...e }, t) => /* @__PURE__ */ x(q, {
	ref: t,
	"data-sdk-ui": "popover-trigger",
	"data-slot": "popover-trigger",
	...e
}));
Z.displayName = "PopoverTrigger";
var Q = b.forwardRef(({ ...e }, t) => /* @__PURE__ */ x(K, {
	ref: t,
	"data-sdk-ui": "popover-anchor",
	"data-slot": "popover-anchor",
	...e
}));
Q.displayName = "PopoverAnchor";
var $ = b.forwardRef(({ align: t = "center", className: n, sideOffset: r = 8, ...i }, a) => /* @__PURE__ */ x(J, { children: /* @__PURE__ */ x(Y, {
	ref: a,
	align: t,
	className: e("z-50 w-72 rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-4 text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-md)] outline-none", n),
	"data-sdk-ui": "popover-content",
	"data-slot": "popover-content",
	sideOffset: r,
	...i
}) }));
$.displayName = "PopoverContent", X.displayName = "Popover";
//#endregion
export { Z as i, Q as n, $ as r, X as t };

//# sourceMappingURL=popover-0Cf_87Dv.js.map