import { t as e } from "./utils-Bd3-tWic.js";
import { a as t, n } from "./dist-5AX1ca2q.js";
import { g as r, h as i, m as a, n as o, o as s, p as c, t as l, v as u } from "./Combination-CioGxkCi.js";
import { t as d } from "./x-BUT4ee3J.js";
import { a as f, o as p, s as m, t as h } from "./dist-D2r-1rhT.js";
import { t as g } from "./dist-DUsjyQ_S.js";
import * as _ from "react";
import { Fragment as v, jsx as y, jsxs as b } from "react/jsx-runtime";
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-dialog@1.1._94e2fe6677b45c1f45a817094c74b722/node_modules/@radix-ui/react-dialog/dist/index.mjs
var x = "Dialog", [S, ee] = p(x), [te, C] = S(x), ne = (e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = _.useRef(null), l = _.useRef(null), [d, f] = u({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: x
	});
	return /* @__PURE__ */ y(te, {
		scope: t,
		triggerRef: s,
		contentRef: l,
		contentId: c(),
		titleId: c(),
		descriptionId: c(),
		open: d,
		onOpenChange: f,
		onOpenToggle: _.useCallback(() => f((e) => !e), [f]),
		modal: o,
		children: n
	});
};
ne.displayName = x;
var re = "DialogTrigger", ie = _.forwardRef((e, n) => {
	let { __scopeDialog: r, ...i } = e, a = C(re, r), o = t(n, a.triggerRef);
	return /* @__PURE__ */ y(g.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": a.open,
		"aria-controls": a.open ? a.contentId : void 0,
		"data-state": R(a.open),
		...i,
		ref: o,
		onClick: m(e.onClick, a.onOpenToggle)
	});
});
ie.displayName = re;
var w = "DialogPortal", [ae, T] = S(w, { forceMount: void 0 }), E = (e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = C(w, t);
	return /* @__PURE__ */ y(ae, {
		scope: t,
		forceMount: n,
		children: _.Children.map(r, (e) => /* @__PURE__ */ y(h, {
			present: n || a.open,
			children: /* @__PURE__ */ y(s, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
};
E.displayName = w;
var D = "DialogOverlay", O = _.forwardRef((e, t) => {
	let n = T(D, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = C(D, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ y(h, {
		present: r || a.open,
		children: /* @__PURE__ */ y(se, {
			...i,
			ref: t
		})
	}) : null;
});
O.displayName = D;
var oe = n("DialogOverlay.RemoveScroll"), se = _.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = C(D, n);
	return /* @__PURE__ */ y(l, {
		as: oe,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ y(g.div, {
			"data-state": R(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), k = "DialogContent", A = _.forwardRef((e, t) => {
	let n = T(k, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = C(k, e.__scopeDialog);
	return /* @__PURE__ */ y(h, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ y(ce, {
			...i,
			ref: t
		}) : /* @__PURE__ */ y(le, {
			...i,
			ref: t
		})
	});
});
A.displayName = k;
var ce = _.forwardRef((e, n) => {
	let r = C(k, e.__scopeDialog), i = _.useRef(null), a = t(n, r.contentRef, i);
	return _.useEffect(() => {
		let e = i.current;
		if (e) return o(e);
	}, []), /* @__PURE__ */ y(j, {
		...e,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		onCloseAutoFocus: m(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: m(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: m(e.onFocusOutside, (e) => e.preventDefault())
	});
}), le = _.forwardRef((e, t) => {
	let n = C(k, e.__scopeDialog), r = _.useRef(!1), i = _.useRef(!1);
	return /* @__PURE__ */ y(j, {
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
}), j = _.forwardRef((e, n) => {
	let { __scopeDialog: o, trapFocus: s, onOpenAutoFocus: c, onCloseAutoFocus: l, ...u } = e, d = C(k, o), f = _.useRef(null), p = t(n, f);
	return i(), /* @__PURE__ */ b(v, { children: [/* @__PURE__ */ y(a, {
		asChild: !0,
		loop: !0,
		trapped: s,
		onMountAutoFocus: c,
		onUnmountAutoFocus: l,
		children: /* @__PURE__ */ y(r, {
			role: "dialog",
			id: d.contentId,
			"aria-describedby": d.descriptionId,
			"aria-labelledby": d.titleId,
			"data-state": R(d.open),
			...u,
			ref: p,
			onDismiss: () => d.onOpenChange(!1)
		})
	}), /* @__PURE__ */ b(v, { children: [/* @__PURE__ */ y(fe, { titleId: d.titleId }), /* @__PURE__ */ y(me, {
		contentRef: f,
		descriptionId: d.descriptionId
	})] })] });
}), M = "DialogTitle", N = _.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = C(M, n);
	return /* @__PURE__ */ y(g.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
N.displayName = M;
var P = "DialogDescription", F = _.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = C(P, n);
	return /* @__PURE__ */ y(g.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
F.displayName = P;
var I = "DialogClose", L = _.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = C(I, n);
	return /* @__PURE__ */ y(g.button, {
		type: "button",
		...r,
		ref: t,
		onClick: m(e.onClick, () => i.onOpenChange(!1))
	});
});
L.displayName = I;
function R(e) {
	return e ? "open" : "closed";
}
var ue = "DialogTitleWarning", [de, z] = f(ue, {
	contentName: k,
	titleName: M,
	docsSlug: "dialog"
}), fe = ({ titleId: e }) => {
	let t = z(ue), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
	return _.useEffect(() => {
		e && (document.getElementById(e) || console.error(n));
	}, [n, e]), null;
}, pe = "DialogDescriptionWarning", me = ({ contentRef: e, descriptionId: t }) => {
	let n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${z(pe).contentName}}.`;
	return _.useEffect(() => {
		let r = e.current?.getAttribute("aria-describedby");
		t && r && (document.getElementById(t) || console.warn(n));
	}, [
		n,
		e,
		t
	]), null;
}, B = ne, V = ie, H = E, U = O, W = A, G = N, K = F, q = L, J = B, Y = H, he = _.forwardRef(({ ...e }, t) => /* @__PURE__ */ y(V, {
	ref: t,
	"data-sdk-ui": "dialog-trigger",
	"data-slot": "dialog-trigger",
	...e
}));
he.displayName = "DialogTrigger";
var X = _.forwardRef(({ ...e }, t) => /* @__PURE__ */ y(q, {
	ref: t,
	"data-sdk-ui": "dialog-close",
	"data-slot": "dialog-close",
	...e
}));
X.displayName = "DialogClose";
var Z = _.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ y(U, {
	ref: r,
	className: e("fixed inset-0 z-50 bg-[var(--sdk-color-surface-overlay)] backdrop-blur-sm", t),
	"data-sdk-ui": "dialog-overlay",
	"data-slot": "dialog-overlay",
	...n
}));
Z.displayName = "DialogOverlay";
var ge = _.forwardRef(({ className: t, children: n, ...r }, i) => /* @__PURE__ */ b(Y, { children: [/* @__PURE__ */ y(Z, {}), /* @__PURE__ */ b(W, {
	ref: i,
	className: e("fixed left-1/2 top-1/2 z-50 grid w-[min(92vw,40rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-6 text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-lg)]", t),
	"data-sdk-ui": "dialog-content",
	"data-slot": "dialog-content",
	...r,
	children: [n, /* @__PURE__ */ b(X, {
		className: "absolute right-4 top-4 rounded-full p-1.5 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)]",
		children: [/* @__PURE__ */ y(d, { className: "h-4 w-4" }), /* @__PURE__ */ y("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
ge.displayName = "DialogContent";
var _e = _.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ y("div", {
	ref: r,
	className: e("flex flex-col gap-1.5 pr-10", t),
	"data-sdk-ui": "dialog-header",
	"data-slot": "dialog-header",
	...n
})), Q = _.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ y("div", {
	ref: r,
	className: e("flex justify-end gap-3", t),
	"data-sdk-ui": "dialog-footer",
	"data-slot": "dialog-footer",
	...n
})), ve = _.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ y(G, {
	ref: r,
	className: e("text-lg font-semibold", t),
	"data-sdk-ui": "dialog-title",
	"data-slot": "dialog-title",
	...n
}));
ve.displayName = "DialogTitle";
var $ = _.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ y(K, {
	ref: r,
	className: e("text-sm text-[var(--sdk-color-text-secondary)]", t),
	"data-sdk-ui": "dialog-description",
	"data-slot": "dialog-description",
	...n
}));
$.displayName = "DialogDescription", J.displayName = "Dialog", Q.displayName = "DialogFooter", _e.displayName = "DialogHeader", Y.displayName = "DialogPortal";
//#endregion
export { G as _, Q as a, Y as c, q as d, W as f, B as g, H as h, $ as i, ve as l, U as m, X as n, _e as o, K as p, ge as r, Z as s, J as t, he as u, V as v };

//# sourceMappingURL=dialog-DmO7L-mz.js.map