import { t as e } from "./utils-MYzXLqpE.js";
import { g as t, h as n, m as r, n as i, o as a, p as o, t as s, v as c } from "./Combination-CTo9CVjQ.js";
import { t as l } from "./x-DU-kKGVx.js";
import { a as u, o as d, s as f, t as p } from "./dist-ZP7iWfNQ.js";
import { o as m, r as ee, t as h } from "./dist-Dt-KO-jK.js";
import * as g from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-dialog@1.1._94e2fe6677b45c1f45a817094c74b722/node_modules/@radix-ui/react-dialog/dist/index.mjs
var b = "Dialog", [x, te] = d(b), [ne, S] = x(b), re = (e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: s = !0 } = e, l = g.useRef(null), u = g.useRef(null), [d, f] = c({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: b
	});
	return /* @__PURE__ */ v(ne, {
		scope: t,
		triggerRef: l,
		contentRef: u,
		contentId: o(),
		titleId: o(),
		descriptionId: o(),
		open: d,
		onOpenChange: f,
		onOpenToggle: g.useCallback(() => f((e) => !e), [f]),
		modal: s,
		children: n
	});
};
re.displayName = b;
var ie = "DialogTrigger", ae = g.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = S(ie, n), a = m(t, i.triggerRef);
	return /* @__PURE__ */ v(h.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": L(i.open),
		...r,
		ref: a,
		onClick: f(e.onClick, i.onOpenToggle)
	});
});
ae.displayName = ie;
var C = "DialogPortal", [oe, w] = x(C, { forceMount: void 0 }), T = (e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, o = S(C, t);
	return /* @__PURE__ */ v(oe, {
		scope: t,
		forceMount: n,
		children: g.Children.map(r, (e) => /* @__PURE__ */ v(p, {
			present: n || o.open,
			children: /* @__PURE__ */ v(a, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
};
T.displayName = C;
var E = "DialogOverlay", D = g.forwardRef((e, t) => {
	let n = w(E, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = S(E, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ v(p, {
		present: r || a.open,
		children: /* @__PURE__ */ v(ce, {
			...i,
			ref: t
		})
	}) : null;
});
D.displayName = E;
var se = ee("DialogOverlay.RemoveScroll"), ce = g.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = S(E, n);
	return /* @__PURE__ */ v(s, {
		as: se,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ v(h.div, {
			"data-state": L(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), O = "DialogContent", k = g.forwardRef((e, t) => {
	let n = w(O, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = S(O, e.__scopeDialog);
	return /* @__PURE__ */ v(p, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ v(le, {
			...i,
			ref: t
		}) : /* @__PURE__ */ v(ue, {
			...i,
			ref: t
		})
	});
});
k.displayName = O;
var le = g.forwardRef((e, t) => {
	let n = S(O, e.__scopeDialog), r = g.useRef(null), a = m(t, n.contentRef, r);
	return g.useEffect(() => {
		let e = r.current;
		if (e) return i(e);
	}, []), /* @__PURE__ */ v(A, {
		...e,
		ref: a,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		onCloseAutoFocus: f(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: f(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: f(e.onFocusOutside, (e) => e.preventDefault())
	});
}), ue = g.forwardRef((e, t) => {
	let n = S(O, e.__scopeDialog), r = g.useRef(!1), i = g.useRef(!1);
	return /* @__PURE__ */ v(A, {
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
}), A = g.forwardRef((e, i) => {
	let { __scopeDialog: a, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: c, ...l } = e, u = S(O, a), d = g.useRef(null), f = m(i, d);
	return n(), /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(r, {
		asChild: !0,
		loop: !0,
		trapped: o,
		onMountAutoFocus: s,
		onUnmountAutoFocus: c,
		children: /* @__PURE__ */ v(t, {
			role: "dialog",
			id: u.contentId,
			"aria-describedby": u.descriptionId,
			"aria-labelledby": u.titleId,
			"data-state": L(u.open),
			...l,
			ref: f,
			onDismiss: () => u.onOpenChange(!1)
		})
	}), /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(pe, { titleId: u.titleId }), /* @__PURE__ */ v(he, {
		contentRef: d,
		descriptionId: u.descriptionId
	})] })] });
}), j = "DialogTitle", M = g.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = S(j, n);
	return /* @__PURE__ */ v(h.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
M.displayName = j;
var N = "DialogDescription", P = g.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = S(N, n);
	return /* @__PURE__ */ v(h.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
P.displayName = N;
var F = "DialogClose", I = g.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = S(F, n);
	return /* @__PURE__ */ v(h.button, {
		type: "button",
		...r,
		ref: t,
		onClick: f(e.onClick, () => i.onOpenChange(!1))
	});
});
I.displayName = F;
function L(e) {
	return e ? "open" : "closed";
}
var de = "DialogTitleWarning", [fe, R] = u(de, {
	contentName: O,
	titleName: j,
	docsSlug: "dialog"
}), pe = ({ titleId: e }) => {
	let t = R(de), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
	return g.useEffect(() => {
		e && (document.getElementById(e) || console.error(n));
	}, [n, e]), null;
}, me = "DialogDescriptionWarning", he = ({ contentRef: e, descriptionId: t }) => {
	let n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${R(me).contentName}}.`;
	return g.useEffect(() => {
		let r = e.current?.getAttribute("aria-describedby");
		t && r && (document.getElementById(t) || console.warn(n));
	}, [
		n,
		e,
		t
	]), null;
}, z = re, B = ae, V = T, H = D, U = k, W = M, G = P, K = I, q = z, J = V, Y = g.forwardRef(({ ...e }, t) => /* @__PURE__ */ v(B, {
	ref: t,
	"data-sdk-ui": "dialog-trigger",
	"data-slot": "dialog-trigger",
	...e
}));
Y.displayName = "DialogTrigger";
var X = g.forwardRef(({ ...e }, t) => /* @__PURE__ */ v(K, {
	ref: t,
	"data-sdk-ui": "dialog-close",
	"data-slot": "dialog-close",
	...e
}));
X.displayName = "DialogClose";
var Z = g.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v(H, {
	ref: r,
	className: e("fixed inset-0 z-50 bg-[var(--sdk-color-surface-overlay)] backdrop-blur-sm", t),
	"data-sdk-ui": "dialog-overlay",
	"data-slot": "dialog-overlay",
	...n
}));
Z.displayName = "DialogOverlay";
var ge = g.forwardRef(({ className: t, children: n, ...r }, i) => /* @__PURE__ */ y(J, { children: [/* @__PURE__ */ v(Z, {}), /* @__PURE__ */ y(U, {
	ref: i,
	className: e("fixed left-1/2 top-1/2 z-50 grid w-[min(92vw,40rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-6 text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-lg)]", t),
	"data-sdk-ui": "dialog-content",
	"data-slot": "dialog-content",
	...r,
	children: [n, /* @__PURE__ */ y(X, {
		className: "absolute right-4 top-4 rounded-full p-1.5 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)]",
		children: [/* @__PURE__ */ v(l, { className: "h-4 w-4" }), /* @__PURE__ */ v("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
ge.displayName = "DialogContent";
var _e = g.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v("div", {
	ref: r,
	className: e("flex flex-col gap-1.5 pr-10", t),
	"data-sdk-ui": "dialog-header",
	"data-slot": "dialog-header",
	...n
})), Q = g.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v("div", {
	ref: r,
	className: e("flex justify-end gap-3", t),
	"data-sdk-ui": "dialog-footer",
	"data-slot": "dialog-footer",
	...n
})), ve = g.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v(W, {
	ref: r,
	className: e("text-lg font-semibold", t),
	"data-sdk-ui": "dialog-title",
	"data-slot": "dialog-title",
	...n
}));
ve.displayName = "DialogTitle";
var $ = g.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v(G, {
	ref: r,
	className: e("text-sm text-[var(--sdk-color-text-secondary)]", t),
	"data-sdk-ui": "dialog-description",
	"data-slot": "dialog-description",
	...n
}));
$.displayName = "DialogDescription", q.displayName = "Dialog", Q.displayName = "DialogFooter", _e.displayName = "DialogHeader", J.displayName = "DialogPortal";
//#endregion
export { W as _, Q as a, J as c, K as d, U as f, z as g, V as h, $ as i, ve as l, H as m, X as n, _e as o, G as p, ge as r, Z as s, q as t, Y as u, B as v };

//# sourceMappingURL=dialog-BI78tTI7.js.map