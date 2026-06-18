import { t as e } from "./utils-Bd3-tWic.js";
import { a as t, r as n } from "./dist-5AX1ca2q.js";
import { i as r, t as i } from "./button-H3P8lcre.js";
import { b as a, c as o, d as s, g as c, l, o as u, p as d, s as f, u as p, v as m, y as h } from "./Combination-CioGxkCi.js";
import { t as g } from "./chevron-right-DC6qY1J1.js";
import { t as _ } from "./triangle-alert-BB2Uy60L.js";
import { t as v } from "./x-BUT4ee3J.js";
import { o as y, s as b, t as x } from "./dist-D2r-1rhT.js";
import { t as S } from "./dist-DUsjyQ_S.js";
import { _ as C, a as w, c as T, d as ee, f as te, g as ne, h as re, i as ie, l as ae, m as oe, n as se, o as ce, p as le, r as ue, s as de, t as fe, u as pe } from "./dist-BGsU4-FB.js";
import { _ as me, d as he, f as ge, g as _e, h as ve, m as ye, p as be, v as xe } from "./dialog-DmO7L-mz.js";
import { t as Se } from "./dist-2hO1HNVn.js";
import * as E from "react";
import { Fragment as Ce, jsx as D, jsxs as O } from "react/jsx-runtime";
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-tooltip@1.2_368b427bd4a446fedecea5c055decde8/node_modules/@radix-ui/react-tooltip/dist/index.mjs
var [k, we] = y("Tooltip", [s]), A = s(), Te = "TooltipProvider", Ee = 700, j = "tooltip.open", [De, M] = k(Te), Oe = (e) => {
	let { __scopeTooltip: t, delayDuration: n = Ee, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e, o = E.useRef(!0), s = E.useRef(!1), c = E.useRef(0);
	return E.useEffect(() => {
		let e = c.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ D(De, {
		scope: t,
		isOpenDelayedRef: o,
		delayDuration: n,
		onOpen: E.useCallback(() => {
			r <= 0 || (window.clearTimeout(c.current), o.current = !1);
		}, [r]),
		onClose: E.useCallback(() => {
			r <= 0 || (window.clearTimeout(c.current), c.current = window.setTimeout(() => o.current = !0, r));
		}, [r]),
		isPointerInTransitRef: s,
		onPointerInTransitChange: E.useCallback((e) => {
			s.current = e;
		}, []),
		disableHoverableContent: i,
		children: a
	});
};
Oe.displayName = Te;
var N = "Tooltip", [ke, P] = k(N), Ae = (e) => {
	let { __scopeTooltip: t, children: n, open: r, defaultOpen: i, onOpenChange: a, disableHoverableContent: o, delayDuration: s } = e, c = M(N, e.__scopeTooltip), l = A(t), [u, f] = E.useState(null), h = d(), g = E.useRef(0), _ = o ?? c.disableHoverableContent, v = s ?? c.delayDuration, y = E.useRef(!1), [b, x] = m({
		prop: r,
		defaultProp: i ?? !1,
		onChange: (e) => {
			e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(j))) : c.onClose(), a?.(e);
		},
		caller: N
	}), S = E.useMemo(() => b ? y.current ? "delayed-open" : "instant-open" : "closed", [b]), C = E.useCallback(() => {
		window.clearTimeout(g.current), g.current = 0, y.current = !1, x(!0);
	}, [x]), w = E.useCallback(() => {
		window.clearTimeout(g.current), g.current = 0, x(!1);
	}, [x]), T = E.useCallback(() => {
		window.clearTimeout(g.current), g.current = window.setTimeout(() => {
			y.current = !0, x(!0), g.current = 0;
		}, v);
	}, [v, x]);
	return E.useEffect(() => () => {
		g.current &&= (window.clearTimeout(g.current), 0);
	}, []), /* @__PURE__ */ D(p, {
		...l,
		children: /* @__PURE__ */ D(ke, {
			scope: t,
			contentId: h,
			open: b,
			stateAttribute: S,
			trigger: u,
			onTriggerChange: f,
			onTriggerEnter: E.useCallback(() => {
				c.isOpenDelayedRef.current ? T() : C();
			}, [
				c.isOpenDelayedRef,
				T,
				C
			]),
			onTriggerLeave: E.useCallback(() => {
				_ ? w() : (window.clearTimeout(g.current), g.current = 0);
			}, [w, _]),
			onOpen: C,
			onClose: w,
			disableHoverableContent: _,
			children: n
		})
	});
};
Ae.displayName = N;
var F = "TooltipTrigger", je = E.forwardRef((e, n) => {
	let { __scopeTooltip: r, ...i } = e, a = P(F, r), o = M(F, r), s = A(r), c = t(n, E.useRef(null), a.onTriggerChange), l = E.useRef(!1), u = E.useRef(!1), d = E.useCallback(() => l.current = !1, []);
	return E.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ D(f, {
		asChild: !0,
		...s,
		children: /* @__PURE__ */ D(S.button, {
			"aria-describedby": a.open ? a.contentId : void 0,
			"data-state": a.stateAttribute,
			...i,
			ref: c,
			onPointerMove: b(e.onPointerMove, (e) => {
				e.pointerType !== "touch" && !u.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), u.current = !0);
			}),
			onPointerLeave: b(e.onPointerLeave, () => {
				a.onTriggerLeave(), u.current = !1;
			}),
			onPointerDown: b(e.onPointerDown, () => {
				a.open && a.onClose(), l.current = !0, document.addEventListener("pointerup", d, { once: !0 });
			}),
			onFocus: b(e.onFocus, () => {
				l.current || a.onOpen();
			}),
			onBlur: b(e.onBlur, a.onClose),
			onClick: b(e.onClick, a.onClose)
		})
	});
});
je.displayName = F;
var I = "TooltipPortal", [Me, Ne] = k(I, { forceMount: void 0 }), Pe = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = P(I, t);
	return /* @__PURE__ */ D(Me, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ D(x, {
			present: n || a.open,
			children: /* @__PURE__ */ D(u, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Pe.displayName = I;
var L = "TooltipContent", Fe = E.forwardRef((e, t) => {
	let n = Ne(L, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = P(L, e.__scopeTooltip);
	return /* @__PURE__ */ D(x, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ D(Be, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ D(Ie, {
			side: i,
			...a,
			ref: t
		})
	});
}), Ie = E.forwardRef((e, n) => {
	let r = P(L, e.__scopeTooltip), i = M(L, e.__scopeTooltip), a = E.useRef(null), o = t(n, a), [s, c] = E.useState(null), { trigger: l, onClose: u } = r, d = a.current, { onPointerInTransitChange: f } = i, p = E.useCallback(() => {
		c(null), f(!1);
	}, [f]), m = E.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = We(r, Ue(r, n.getBoundingClientRect())), a = Ge(t.getBoundingClientRect());
		c(qe([...i, ...a])), f(!0);
	}, [f]);
	return E.useEffect(() => () => p(), [p]), E.useEffect(() => {
		if (l && d) {
			let e = (e) => m(e, d), t = (e) => m(e, l);
			return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
				l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t);
			};
		}
	}, [
		l,
		d,
		m,
		p
	]), E.useEffect(() => {
		if (s) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = l?.contains(t) || d?.contains(t), i = !Ke(n, s);
				r ? p() : i && (p(), u());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		l,
		d,
		s,
		u,
		p
	]), /* @__PURE__ */ D(Be, {
		...e,
		ref: o
	});
}), [Le, Re] = k(N, { isInside: !1 }), ze = n("TooltipContent"), Be = E.forwardRef((e, t) => {
	let { __scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: a, onPointerDownOutside: o, ...s } = e, u = P(L, n), d = A(n), { onClose: f } = u;
	return E.useEffect(() => (document.addEventListener(j, f), () => document.removeEventListener(j, f)), [f]), E.useEffect(() => {
		if (u.trigger) {
			let e = (e) => {
				e.target instanceof Node && e.target.contains(u.trigger) && f();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [u.trigger, f]), /* @__PURE__ */ D(c, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: a,
		onPointerDownOutside: o,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: f,
		children: /* @__PURE__ */ O(l, {
			"data-state": u.stateAttribute,
			...d,
			...s,
			ref: t,
			style: {
				...s.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ D(ze, { children: r }), /* @__PURE__ */ D(Le, {
				scope: n,
				isInside: !0,
				children: /* @__PURE__ */ D(Se, {
					id: u.contentId,
					role: "tooltip",
					children: i || r
				})
			})]
		})
	});
});
Fe.displayName = L;
var Ve = "TooltipArrow", He = E.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = A(n);
	return Re(Ve, n).isInside ? null : /* @__PURE__ */ D(o, {
		...i,
		...r,
		ref: t
	});
});
He.displayName = Ve;
function Ue(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function We(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function Ge(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function Ke(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function qe(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0), Je(t);
}
function Je(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Ye = Oe, Xe = Ae, Ze = je, Qe = Pe, $e = Fe, et = Ye, tt = Xe, nt = E.forwardRef(({ ...e }, t) => /* @__PURE__ */ D(Ze, {
	ref: t,
	"data-sdk-ui": "tooltip-trigger",
	"data-slot": "tooltip-trigger",
	...e
}));
nt.displayName = "TooltipTrigger";
var rt = E.forwardRef(({ className: t, sideOffset: n = 6, ...r }, i) => /* @__PURE__ */ D(Qe, { children: /* @__PURE__ */ D($e, {
	ref: i,
	sideOffset: n,
	className: e("z-50 overflow-hidden rounded-[var(--sdk-radius-control)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] px-3 py-1.5 text-xs text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-md)]", t),
	"data-sdk-ui": "tooltip-content",
	"data-slot": "tooltip-content",
	...r
}) }));
rt.displayName = "TooltipContent", tt.displayName = "Tooltip", et.displayName = "TooltipProvider";
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-context-men_967799dada18215b7efc65bc4ce0db73/node_modules/@radix-ui/react-context-menu/dist/index.mjs
var R = "ContextMenu", [it, at] = y(R, [C]), z = C(), [ot, st] = it(R), ct = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, open: i, dir: a, modal: o = !0 } = e, s = E.useRef(!1);
	{
		let e = E.useRef(!1);
		E.useEffect(() => {
			i === !0 && !s.current && !e.current && (e.current = !0, console.warn("ContextMenu: The `open` prop has been set to `true` before the user has interacted with the trigger, so its position is indeterminate. This is likely unintended and will result in the menu being anchored to the top-left corner of the viewport."));
		}, [i]);
	}
	let [c, l] = m({
		prop: i,
		defaultProp: !1,
		onChange: r,
		caller: R
	});
	return /* @__PURE__ */ D(ot, {
		scope: t,
		open: c,
		onOpenChange: l,
		modal: o,
		hasInteractedRef: s,
		children: /* @__PURE__ */ D(te, {
			...z(t),
			dir: a,
			open: c,
			onOpenChange: l,
			modal: o,
			children: n
		})
	});
};
ct.displayName = R;
var lt = "ContextMenuTrigger", ut = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, disabled: r = !1, ...i } = e, a = st(lt, n), o = z(n), s = E.useRef({
		x: 0,
		y: 0
	}), c = E.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...s.current
	}) }), l = E.useRef(0), u = E.useCallback(() => window.clearTimeout(l.current), []), d = (e) => {
		a.hasInteractedRef.current = !0, s.current = {
			x: e.clientX,
			y: e.clientY
		}, a.onOpenChange(!0);
	};
	return E.useEffect(() => u, [u]), E.useEffect(() => void (r && u()), [r, u]), /* @__PURE__ */ O(Ce, { children: [/* @__PURE__ */ D(fe, {
		...o,
		virtualRef: c
	}), /* @__PURE__ */ D(S.span, {
		"data-state": a.open ? "open" : "closed",
		"data-disabled": r ? "" : void 0,
		...i,
		ref: t,
		style: {
			WebkitTouchCallout: "none",
			...e.style
		},
		onContextMenu: r ? e.onContextMenu : b(e.onContextMenu, (e) => {
			u(), d(e), e.preventDefault();
		}),
		onPointerDown: r ? e.onPointerDown : b(e.onPointerDown, B((e) => {
			u(), a.open && a.onOpenChange(!1), l.current = window.setTimeout(() => d(e), 700);
		})),
		onPointerMove: r ? e.onPointerMove : b(e.onPointerMove, B(u)),
		onPointerCancel: r ? e.onPointerCancel : b(e.onPointerCancel, B(u)),
		onPointerUp: r ? e.onPointerUp : b(e.onPointerUp, B(u))
	})] });
});
ut.displayName = lt;
var dt = "ContextMenuPortal", ft = (e) => {
	let { __scopeContextMenu: t, ...n } = e;
	return /* @__PURE__ */ D(ae, {
		...z(t),
		...n
	});
};
ft.displayName = dt;
var pt = "ContextMenuContent", mt = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = st(pt, n), a = z(n), o = E.useRef(!1);
	return /* @__PURE__ */ D(ie, {
		...a,
		...r,
		ref: t,
		side: "right",
		sideOffset: 2,
		align: "start",
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), !t.defaultPrevented && o.current && t.preventDefault(), o.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), !t.defaultPrevented && !i.modal && (o.current = !0);
		},
		style: {
			...e.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
mt.displayName = pt;
var ht = "ContextMenuGroup", gt = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(w, {
		...z(n),
		...r,
		ref: t
	});
});
gt.displayName = ht;
var _t = "ContextMenuLabel", vt = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(T, {
		...z(n),
		...r,
		ref: t
	});
});
vt.displayName = _t;
var yt = "ContextMenuItem", bt = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(ce, {
		...z(n),
		...r,
		ref: t
	});
});
bt.displayName = yt;
var xt = "ContextMenuCheckboxItem", St = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(ue, {
		...z(n),
		...r,
		ref: t
	});
});
St.displayName = xt;
var Ct = "ContextMenuRadioGroup", wt = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(pe, {
		...z(n),
		...r,
		ref: t
	});
});
wt.displayName = Ct;
var Tt = "ContextMenuRadioItem", Et = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(ee, {
		...z(n),
		...r,
		ref: t
	});
});
Et.displayName = Tt;
var Dt = "ContextMenuItemIndicator", Ot = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(de, {
		...z(n),
		...r,
		ref: t
	});
});
Ot.displayName = Dt;
var kt = "ContextMenuSeparator", At = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(le, {
		...z(n),
		...r,
		ref: t
	});
});
At.displayName = kt;
var jt = "ContextMenuArrow", Mt = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(se, {
		...z(n),
		...r,
		ref: t
	});
});
Mt.displayName = jt;
var Nt = "ContextMenuSub", Pt = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, open: i, defaultOpen: a } = e, o = z(t), [s, c] = m({
		prop: i,
		defaultProp: a ?? !1,
		onChange: r,
		caller: Nt
	});
	return /* @__PURE__ */ D(oe, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
};
Pt.displayName = Nt;
var Ft = "ContextMenuSubTrigger", It = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(ne, {
		...z(n),
		...r,
		ref: t
	});
});
It.displayName = Ft;
var Lt = "ContextMenuSubContent", Rt = E.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ D(re, {
		...z(n),
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Rt.displayName = Lt;
function B(e) {
	return (t) => t.pointerType === "mouse" ? void 0 : e(t);
}
var zt = ct, Bt = ut, Vt = ft, Ht = mt, Ut = gt, Wt = vt, Gt = bt, Kt = St, qt = wt, Jt = Et, Yt = Ot, Xt = At, Zt = Pt, Qt = It, $t = Rt, en = zt, tn = Vt, nn = Zt, rn = E.forwardRef(({ ...e }, t) => /* @__PURE__ */ D(Bt, {
	ref: t,
	"data-sdk-ui": "context-menu-trigger",
	"data-slot": "context-menu-trigger",
	...e
}));
rn.displayName = "ContextMenuTrigger";
var an = E.forwardRef(({ ...e }, t) => /* @__PURE__ */ D(Ut, {
	ref: t,
	"data-sdk-ui": "context-menu-group",
	"data-slot": "context-menu-group",
	...e
}));
an.displayName = "ContextMenuGroup";
var on = E.forwardRef(({ ...e }, t) => /* @__PURE__ */ D(qt, {
	ref: t,
	"data-sdk-ui": "context-menu-radio-group",
	"data-slot": "context-menu-radio-group",
	...e
}));
on.displayName = "ContextMenuRadioGroup";
var sn = E.forwardRef(({ className: t, inset: n, children: r, ...i }, a) => /* @__PURE__ */ O(Qt, {
	className: e("flex cursor-default select-none items-center rounded-[var(--sdk-radius-field)] px-2 py-2 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] data-[state=open]:bg-[var(--sdk-color-brand-primary-soft)]", n && "pl-8", t),
	"data-sdk-ui": "context-menu-sub-trigger",
	"data-slot": "context-menu-sub-trigger",
	ref: a,
	...i,
	children: [r, /* @__PURE__ */ D(g, { className: "ml-auto h-4 w-4" })]
}));
sn.displayName = "ContextMenuSubTrigger";
var cn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D($t, {
	className: e("z-50 min-w-[12rem] overflow-hidden rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-1 text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-lg)]", t),
	"data-sdk-ui": "context-menu-sub-content",
	"data-slot": "context-menu-sub-content",
	ref: r,
	...n
}));
cn.displayName = "ContextMenuSubContent";
var ln = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D(Vt, { children: /* @__PURE__ */ D(Ht, {
	className: e("z-50 min-w-[12rem] overflow-hidden rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-1 text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-lg)]", t),
	"data-sdk-ui": "context-menu-content",
	"data-slot": "context-menu-content",
	ref: r,
	...n
}) }));
ln.displayName = "ContextMenuContent";
var un = E.forwardRef(({ className: t, inset: n, ...r }, i) => /* @__PURE__ */ D(Gt, {
	className: e("relative flex cursor-default select-none items-center rounded-[var(--sdk-radius-field)] px-2 py-2 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n && "pl-8", t),
	"data-sdk-ui": "context-menu-item",
	"data-slot": "context-menu-item",
	ref: i,
	...r
}));
un.displayName = "ContextMenuItem";
var dn = E.forwardRef(({ className: t, children: n, checked: r, ...i }, o) => /* @__PURE__ */ O(Kt, {
	checked: r,
	className: e("relative flex cursor-default select-none items-center rounded-[var(--sdk-radius-field)] py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
	"data-sdk-ui": "context-menu-checkbox-item",
	"data-slot": "context-menu-checkbox-item",
	ref: o,
	...i,
	children: [/* @__PURE__ */ D("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ D(Yt, { children: /* @__PURE__ */ D(a, { className: "h-4 w-4" }) })
	}), n]
}));
dn.displayName = "ContextMenuCheckboxItem";
var fn = E.forwardRef(({ className: t, children: n, ...r }, i) => /* @__PURE__ */ O(Jt, {
	className: e("relative flex cursor-default select-none items-center rounded-[var(--sdk-radius-field)] py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
	"data-sdk-ui": "context-menu-radio-item",
	"data-slot": "context-menu-radio-item",
	ref: i,
	...r,
	children: [/* @__PURE__ */ D("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ D(Yt, { children: /* @__PURE__ */ D(h, { className: "h-2 w-2 fill-current" }) })
	}), n]
}));
fn.displayName = "ContextMenuRadioItem";
var pn = E.forwardRef(({ className: t, inset: n, ...r }, i) => /* @__PURE__ */ D(Wt, {
	className: e("px-2 py-1.5 text-xs font-semibold text-[var(--sdk-color-text-secondary)]", n && "pl-8", t),
	"data-sdk-ui": "context-menu-label",
	"data-slot": "context-menu-label",
	ref: i,
	...r
}));
pn.displayName = "ContextMenuLabel";
var mn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D(Xt, {
	className: e("mx-1 my-1 h-px bg-[var(--sdk-color-border-subtle)]", t),
	"data-sdk-ui": "context-menu-separator",
	"data-slot": "context-menu-separator",
	ref: r,
	...n
}));
mn.displayName = "ContextMenuSeparator";
var hn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D("span", {
	ref: r,
	className: e("ml-auto text-xs tracking-[0.08em] text-[var(--sdk-color-text-muted)]", t),
	"data-sdk-ui": "context-menu-shortcut",
	"data-slot": "context-menu-shortcut",
	...n
}));
hn.displayName = "ContextMenuShortcut", en.displayName = "ContextMenu", tn.displayName = "ContextMenuPortal", nn.displayName = "ContextMenuSub";
//#endregion
//#region src/components/ui/overlays/drawer.tsx
var gn = _e, V = ve, _n = E.forwardRef(({ ...e }, t) => /* @__PURE__ */ D(xe, {
	ref: t,
	"data-sdk-ui": "drawer-trigger",
	"data-slot": "drawer-trigger",
	...e
}));
_n.displayName = "DrawerTrigger";
var H = E.forwardRef(({ ...e }, t) => /* @__PURE__ */ D(he, {
	ref: t,
	"data-sdk-ui": "drawer-close",
	"data-slot": "drawer-close",
	...e
}));
H.displayName = "DrawerClose";
var U = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D(ye, {
	className: e("fixed inset-0 z-50 bg-[var(--sdk-color-surface-overlay)] backdrop-blur-sm", t),
	"data-sdk-ui": "drawer-overlay",
	"data-slot": "drawer-overlay",
	ref: r,
	...n
}));
U.displayName = "DrawerOverlay";
var vn = r("fixed z-50 flex h-full flex-col border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-lg)] outline-none", {
	defaultVariants: {
		side: "right",
		size: "md"
	},
	variants: {
		side: {
			left: "inset-y-0 left-0 rounded-r-[var(--sdk-radius-panel)] border-r data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0",
			right: "inset-y-0 right-0 rounded-l-[var(--sdk-radius-panel)] border-l data-[state=closed]:translate-x-full data-[state=open]:translate-x-0"
		},
		size: {
			sm: "w-[min(92vw,24rem)]",
			md: "w-[min(92vw,32rem)]",
			lg: "w-[min(92vw,40rem)]",
			xl: "w-[min(92vw,48rem)]",
			full: "w-screen rounded-none"
		}
	}
}), yn = E.forwardRef(({ children: t, className: n, side: r, size: i, ...a }, o) => /* @__PURE__ */ O(V, { children: [/* @__PURE__ */ D(U, {}), /* @__PURE__ */ O(ge, {
	className: e(vn({
		side: r,
		size: i
	}), "transition-transform duration-200 ease-out", n),
	"data-sdk-ui": "drawer-content",
	"data-slot": "drawer-content",
	ref: o,
	...a,
	children: [t, /* @__PURE__ */ O(H, {
		className: "absolute right-4 top-4 rounded-full p-2 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)]",
		children: [/* @__PURE__ */ D(v, { className: "h-4 w-4" }), /* @__PURE__ */ D("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
yn.displayName = "DrawerContent";
var bn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D("div", {
	ref: r,
	className: e("flex shrink-0 flex-col gap-1.5 border-b border-[var(--sdk-color-border-default)] px-6 py-5 pr-14", t),
	"data-sdk-ui": "drawer-header",
	"data-slot": "drawer-header",
	...n
})), xn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D("div", {
	ref: r,
	className: e("flex-1 overflow-y-auto px-6 py-5", t),
	"data-sdk-ui": "drawer-body",
	"data-slot": "drawer-body",
	...n
})), Sn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D("div", {
	ref: r,
	className: e("flex shrink-0 items-center justify-end gap-3 border-t border-[var(--sdk-color-border-default)] px-6 py-4", t),
	"data-sdk-ui": "drawer-footer",
	"data-slot": "drawer-footer",
	...n
})), Cn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D(me, {
	className: e("text-lg font-semibold", t),
	"data-sdk-ui": "drawer-title",
	"data-slot": "drawer-title",
	ref: r,
	...n
}));
Cn.displayName = "DrawerTitle";
var wn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D(be, {
	className: e("text-sm text-[var(--sdk-color-text-secondary)]", t),
	"data-sdk-ui": "drawer-description",
	"data-slot": "drawer-description",
	ref: r,
	...n
}));
wn.displayName = "DrawerDescription", gn.displayName = "Drawer", xn.displayName = "DrawerBody", Sn.displayName = "DrawerFooter", bn.displayName = "DrawerHeader", V.displayName = "DrawerPortal";
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-hover-card@_b1dd3a11e0e6025adf724f3de775860e/node_modules/@radix-ui/react-hover-card/dist/index.mjs
var W, G = "HoverCard", [Tn, En] = y(G, [s]), K = s(), [Dn, q] = Tn(G), On = (e) => {
	let { __scopeHoverCard: t, children: n, open: r, defaultOpen: i, onOpenChange: a, openDelay: o = 700, closeDelay: s = 300 } = e, c = K(t), l = E.useRef(0), u = E.useRef(0), d = E.useRef(!1), f = E.useRef(!1), [h, g] = m({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: G
	}), _ = E.useCallback(() => {
		clearTimeout(u.current), l.current = window.setTimeout(() => g(!0), o);
	}, [o, g]), v = E.useCallback(() => {
		clearTimeout(l.current), !d.current && !f.current && (u.current = window.setTimeout(() => g(!1), s));
	}, [s, g]), y = E.useCallback(() => g(!1), [g]);
	return E.useEffect(() => () => {
		clearTimeout(l.current), clearTimeout(u.current);
	}, []), /* @__PURE__ */ D(Dn, {
		scope: t,
		open: h,
		onOpenChange: g,
		onOpen: _,
		onClose: v,
		onDismiss: y,
		hasSelectionRef: d,
		isPointerDownOnContentRef: f,
		children: /* @__PURE__ */ D(p, {
			...c,
			children: n
		})
	});
};
On.displayName = G;
var kn = "HoverCardTrigger", An = E.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = q(kn, n);
	return /* @__PURE__ */ D(f, {
		asChild: !0,
		...K(n),
		children: /* @__PURE__ */ D(S.a, {
			"data-state": i.open ? "open" : "closed",
			...r,
			ref: t,
			onPointerEnter: b(e.onPointerEnter, X(i.onOpen)),
			onPointerLeave: b(e.onPointerLeave, X(i.onClose)),
			onFocus: b(e.onFocus, i.onOpen),
			onBlur: b(e.onBlur, i.onClose),
			onTouchStart: b(e.onTouchStart, (e) => e.preventDefault())
		})
	});
});
An.displayName = kn;
var J = "HoverCardPortal", [jn, Mn] = Tn(J, { forceMount: void 0 }), Nn = (e) => {
	let { __scopeHoverCard: t, forceMount: n, children: r, container: i } = e, a = q(J, t);
	return /* @__PURE__ */ D(jn, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ D(x, {
			present: n || a.open,
			children: /* @__PURE__ */ D(u, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Nn.displayName = J;
var Y = "HoverCardContent", Pn = E.forwardRef((e, t) => {
	let n = Mn(Y, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...i } = e, a = q(Y, e.__scopeHoverCard);
	return /* @__PURE__ */ D(x, {
		present: r || a.open,
		children: /* @__PURE__ */ D(Fn, {
			"data-state": a.open ? "open" : "closed",
			...i,
			onPointerEnter: b(e.onPointerEnter, X(a.onOpen)),
			onPointerLeave: b(e.onPointerLeave, X(a.onClose)),
			ref: t
		})
	});
});
Pn.displayName = Y;
var Fn = E.forwardRef((e, n) => {
	let { __scopeHoverCard: r, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, ...u } = e, d = q(Y, r), f = K(r), p = E.useRef(null), m = t(n, p), [h, g] = E.useState(!1);
	return E.useEffect(() => {
		if (h) {
			let e = document.body;
			return W = e.style.userSelect || e.style.webkitUserSelect, e.style.userSelect = "none", e.style.webkitUserSelect = "none", () => {
				e.style.userSelect = W, e.style.webkitUserSelect = W;
			};
		}
	}, [h]), E.useEffect(() => {
		if (p.current) {
			let e = () => {
				g(!1), d.isPointerDownOnContentRef.current = !1, setTimeout(() => {
					document.getSelection()?.toString() !== "" && (d.hasSelectionRef.current = !0);
				});
			};
			return document.addEventListener("pointerup", e), () => {
				document.removeEventListener("pointerup", e), d.hasSelectionRef.current = !1, d.isPointerDownOnContentRef.current = !1;
			};
		}
	}, [d.isPointerDownOnContentRef, d.hasSelectionRef]), E.useEffect(() => {
		p.current && Rn(p.current).forEach((e) => e.setAttribute("tabindex", "-1"));
	}), /* @__PURE__ */ D(c, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onInteractOutside: s,
		onEscapeKeyDown: i,
		onPointerDownOutside: a,
		onFocusOutside: b(o, (e) => {
			e.preventDefault();
		}),
		onDismiss: d.onDismiss,
		children: /* @__PURE__ */ D(l, {
			...f,
			...u,
			onPointerDown: b(u.onPointerDown, (e) => {
				e.currentTarget.contains(e.target) && g(!0), d.hasSelectionRef.current = !1, d.isPointerDownOnContentRef.current = !0;
			}),
			ref: m,
			style: {
				...u.style,
				userSelect: h ? "text" : void 0,
				WebkitUserSelect: h ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
}), In = "HoverCardArrow", Ln = E.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e;
	return /* @__PURE__ */ D(o, {
		...K(n),
		...r,
		ref: t
	});
});
Ln.displayName = In;
function X(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function Rn(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
var zn = On, Bn = An, Vn = Nn, Hn = Pn, Un = zn, Wn = E.forwardRef(({ ...e }, t) => /* @__PURE__ */ D(Bn, {
	ref: t,
	"data-sdk-ui": "hover-card-trigger",
	"data-slot": "hover-card-trigger",
	...e
}));
Wn.displayName = "HoverCardTrigger";
var Gn = E.forwardRef(({ align: t = "center", className: n, sideOffset: r = 8, ...i }, a) => /* @__PURE__ */ D(Vn, { children: /* @__PURE__ */ D(Hn, {
	align: t,
	className: e("z-50 w-80 rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-4 text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-md)] outline-none", n),
	"data-sdk-ui": "hover-card-content",
	"data-slot": "hover-card-content",
	ref: a,
	sideOffset: r,
	...i
}) }));
Gn.displayName = "HoverCardContent", Un.displayName = "HoverCard";
//#endregion
//#region src/components/ui/overlays/modal.tsx
var Z = _e, Q = ve, Kn = E.forwardRef(({ ...e }, t) => /* @__PURE__ */ D(xe, {
	ref: t,
	"data-sdk-ui": "modal-trigger",
	"data-slot": "modal-trigger",
	...e
}));
Kn.displayName = "ModalTrigger";
var $ = E.forwardRef(({ ...e }, t) => /* @__PURE__ */ D(he, {
	ref: t,
	"data-sdk-ui": "modal-close",
	"data-slot": "modal-close",
	...e
}));
$.displayName = "ModalClose";
var qn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D(ye, {
	ref: r,
	className: e("fixed inset-0 z-50 bg-[var(--sdk-color-surface-overlay)] backdrop-blur-sm", t),
	"data-sdk-ui": "modal-overlay",
	"data-slot": "modal-overlay",
	...n
}));
qn.displayName = "ModalOverlay";
var Jn = r("fixed left-1/2 z-50 grid max-h-[min(88vh,56rem)] w-[min(92vw,40rem)] -translate-x-1/2 overflow-hidden rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-lg)] outline-none", {
	defaultVariants: {
		align: "center",
		size: "md"
	},
	variants: {
		align: {
			center: "top-1/2 -translate-y-1/2",
			top: "top-[max(2rem,8vh)]"
		},
		size: {
			sm: "w-[min(92vw,28rem)]",
			md: "w-[min(92vw,40rem)]",
			lg: "w-[min(92vw,56rem)]",
			xl: "w-[min(94vw,72rem)]",
			full: "h-[min(96vh,64rem)] w-[min(96vw,96rem)]"
		}
	}
}), Yn = E.forwardRef(({ align: t, children: n, className: r, showCloseButton: i = !0, size: a, ...o }, s) => /* @__PURE__ */ O(Q, { children: [/* @__PURE__ */ D(qn, {}), /* @__PURE__ */ O(ge, {
	ref: s,
	className: e(Jn({
		align: t,
		size: a
	}), r),
	"data-sdk-ui": "modal-content",
	"data-slot": "modal-content",
	...o,
	children: [n, i ? /* @__PURE__ */ O($, {
		className: "absolute right-4 top-4 rounded-full p-1.5 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)]",
		children: [/* @__PURE__ */ D(v, { className: "h-4 w-4" }), /* @__PURE__ */ D("span", {
			className: "sr-only",
			children: "Close"
		})]
	}) : null]
})] }));
Yn.displayName = "ModalContent";
var Xn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D("div", {
	ref: r,
	className: e("flex shrink-0 flex-col gap-1.5 border-b border-[var(--sdk-color-border-default)] px-6 py-5 pr-14", t),
	"data-sdk-ui": "modal-header",
	"data-slot": "modal-header",
	...n
})), Zn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D("div", {
	ref: r,
	className: e("min-h-0 flex-1 overflow-y-auto px-6 py-5", t),
	"data-sdk-ui": "modal-body",
	"data-slot": "modal-body",
	...n
})), Qn = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D("div", {
	ref: r,
	className: e("flex shrink-0 items-center justify-end gap-3 border-t border-[var(--sdk-color-border-default)] px-6 py-4", t),
	"data-sdk-ui": "modal-footer",
	"data-slot": "modal-footer",
	...n
})), $n = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D(me, {
	ref: r,
	className: e("text-lg font-semibold", t),
	"data-sdk-ui": "modal-title",
	"data-slot": "modal-title",
	...n
}));
$n.displayName = "ModalTitle";
var er = E.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ D(be, {
	ref: r,
	className: e("text-sm text-[var(--sdk-color-text-secondary)]", t),
	"data-sdk-ui": "modal-description",
	"data-slot": "modal-description",
	...n
}));
er.displayName = "ModalDescription";
var tr = {
	danger: "border-[color-mix(in_srgb,var(--sdk-color-state-danger)_24%,transparent)] bg-[color-mix(in_srgb,var(--sdk-color-state-danger)_16%,transparent)] text-[var(--sdk-color-state-danger)]",
	default: "border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-secondary)]",
	warning: "border-[color-mix(in_srgb,var(--sdk-color-state-warning)_24%,transparent)] bg-[color-mix(in_srgb,var(--sdk-color-state-warning)_16%,transparent)] text-[var(--sdk-color-state-warning)]"
};
function nr({ cancelLabel: t = "Cancel", closeOnConfirm: n = !0, confirmLabel: r = "Confirm", confirmLoading: a = !1, description: o, onConfirm: s, onOpenChange: c, open: l, title: u, tone: d = "default" }) {
	let f = d === "danger" ? "danger" : "primary";
	return /* @__PURE__ */ D(Z, {
		open: l,
		onOpenChange: c,
		children: /* @__PURE__ */ O(Yn, {
			"data-sdk-ui": "confirm-dialog",
			size: "sm",
			children: [/* @__PURE__ */ D(Xn, { children: /* @__PURE__ */ O("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ D("div", {
					className: e("flex h-10 w-10 items-center justify-center rounded-full border", tr[d]),
					children: /* @__PURE__ */ D(_, { className: "h-5 w-5" })
				}), /* @__PURE__ */ O("div", {
					className: "flex min-w-0 flex-1 flex-col gap-1",
					children: [/* @__PURE__ */ D($n, { children: u }), o ? /* @__PURE__ */ D(er, { children: o }) : null]
				})]
			}) }), /* @__PURE__ */ O(Qn, { children: [/* @__PURE__ */ D(i, {
				type: "button",
				variant: "secondary",
				onClick: () => c?.(!1),
				children: t
			}), /* @__PURE__ */ D(i, {
				type: "button",
				variant: f,
				loading: a,
				onClick: () => {
					s(), n && c?.(!1);
				},
				children: r
			})] })]
		})
	});
}
nr.displayName = "ConfirmDialog", Z.displayName = "Modal", Zn.displayName = "ModalBody", Qn.displayName = "ModalFooter", Xn.displayName = "ModalHeader", Q.displayName = "ModalPortal";
//#endregion
export { an as A, sn as B, U as C, en as D, _n as E, fn as F, nt as G, tt as H, mn as I, hn as L, pn as M, tn as N, dn as O, on as P, nn as R, bn as S, Cn as T, rt as U, rn as V, et as W, xn as _, Yn as a, wn as b, Xn as c, $n as d, Kn as f, gn as g, Wn as h, $ as i, un as j, ln as k, qn as l, Gn as m, Z as n, er as o, Un as p, Zn as r, Qn as s, nr as t, Q as u, H as v, V as w, Sn as x, yn as y, cn as z };

//# sourceMappingURL=overlays-XqsUQbXF.js.map