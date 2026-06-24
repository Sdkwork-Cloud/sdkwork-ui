import { t as e } from "./utils-MYzXLqpE.js";
import { c as t, d as n, g as r, h as i, l as a, m as o, n as s, o as c, p as l, s as u, t as d, u as f, v as p } from "./Combination-CTo9CVjQ.js";
import { o as m, s as h, t as g } from "./dist-ZP7iWfNQ.js";
import { o as _, r as v, t as y } from "./dist-Dt-KO-jK.js";
import * as b from "react";
import { jsx as x } from "react/jsx-runtime";
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-popover@1.1_ed1201cbdd15e9716c25d5ed3df76d9d/node_modules/@radix-ui/react-popover/dist/index.mjs
var S = "Popover", [C, ee] = m(S, [n]), w = n(), [T, E] = C(S), D = (e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = w(t), c = b.useRef(null), [u, d] = b.useState(!1), [m, h] = p({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: S
	});
	return /* @__PURE__ */ x(f, {
		...s,
		children: /* @__PURE__ */ x(T, {
			scope: t,
			contentId: l(),
			triggerRef: c,
			open: m,
			onOpenChange: h,
			onOpenToggle: b.useCallback(() => h((e) => !e), [h]),
			hasCustomAnchor: u,
			onCustomAnchorAdd: b.useCallback(() => d(!0), []),
			onCustomAnchorRemove: b.useCallback(() => d(!1), []),
			modal: o,
			children: n
		})
	});
};
D.displayName = S;
var O = "PopoverAnchor", k = b.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = E(O, n), a = w(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return b.useEffect(() => (o(), () => s()), [o, s]), /* @__PURE__ */ x(u, {
		...a,
		...r,
		ref: t
	});
});
k.displayName = O;
var A = "PopoverTrigger", j = b.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = E(A, n), a = w(n), o = _(t, i.triggerRef), s = /* @__PURE__ */ x(y.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": W(i.open),
		...r,
		ref: o,
		onClick: h(e.onClick, i.onOpenToggle)
	});
	return i.hasCustomAnchor ? s : /* @__PURE__ */ x(u, {
		asChild: !0,
		...a,
		children: s
	});
});
j.displayName = A;
var M = "PopoverPortal", [N, te] = C(M, { forceMount: void 0 }), P = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = E(M, t);
	return /* @__PURE__ */ x(N, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ x(g, {
			present: n || a.open,
			children: /* @__PURE__ */ x(c, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
P.displayName = M;
var F = "PopoverContent", I = b.forwardRef((e, t) => {
	let n = te(F, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = E(F, e.__scopePopover);
	return /* @__PURE__ */ x(g, {
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
var L = v("PopoverContent.RemoveScroll"), R = b.forwardRef((e, t) => {
	let n = E(F, e.__scopePopover), r = b.useRef(null), i = _(t, r), a = b.useRef(!1);
	return b.useEffect(() => {
		let e = r.current;
		if (e) return s(e);
	}, []), /* @__PURE__ */ x(d, {
		as: L,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ x(z, {
			...e,
			ref: i,
			trapFocus: n.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: h(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), a.current || n.triggerRef.current?.focus();
			}),
			onPointerDownOutside: h(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				a.current = t.button === 2 || n;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: h(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), ne = b.forwardRef((e, t) => {
	let n = E(F, e.__scopePopover), r = b.useRef(!1), i = b.useRef(!1);
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
	let { __scopePopover: n, trapFocus: s, onOpenAutoFocus: c, onCloseAutoFocus: l, disableOutsidePointerEvents: u, onEscapeKeyDown: d, onPointerDownOutside: f, onFocusOutside: p, onInteractOutside: m, ...h } = e, g = E(F, n), _ = w(n);
	return i(), /* @__PURE__ */ x(o, {
		asChild: !0,
		loop: !0,
		trapped: s,
		onMountAutoFocus: c,
		onUnmountAutoFocus: l,
		children: /* @__PURE__ */ x(r, {
			asChild: !0,
			disableOutsidePointerEvents: u,
			onInteractOutside: m,
			onEscapeKeyDown: d,
			onPointerDownOutside: f,
			onFocusOutside: p,
			onDismiss: () => g.onOpenChange(!1),
			children: /* @__PURE__ */ x(a, {
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
	let { __scopePopover: n, ...r } = e, i = E(B, n);
	return /* @__PURE__ */ x(y.button, {
		type: "button",
		...r,
		ref: t,
		onClick: h(e.onClick, () => i.onOpenChange(!1))
	});
});
V.displayName = B;
var H = "PopoverArrow", U = b.forwardRef((e, n) => {
	let { __scopePopover: r, ...i } = e;
	return /* @__PURE__ */ x(t, {
		...w(r),
		...i,
		ref: n
	});
});
U.displayName = H;
function W(e) {
	return e ? "open" : "closed";
}
var G = D, K = k, q = j, J = P, Y = I, X = G, Z = b.forwardRef(({ ...e }, t) => /* @__PURE__ */ x(q, {
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

//# sourceMappingURL=popover-Dt4DIN9o.js.map