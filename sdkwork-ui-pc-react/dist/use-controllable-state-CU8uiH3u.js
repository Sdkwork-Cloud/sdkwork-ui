import { t as e } from "./utils-Bd3-tWic.js";
import { a as t, n } from "./dist-5AX1ca2q.js";
import { t as r } from "./createLucideIcon-19v64F-t.js";
import { _ as i, b as a, c as o, d as s, f as c, g as l, h as u, l as d, m as f, n as p, o as m, p as h, s as g, t as _, u as v, v as y } from "./Combination-CioGxkCi.js";
import { t as b } from "./chevron-down-C9517Mzf.js";
import { i as x, n as S, o as C, r as w, s as T, t as E } from "./dist-D2r-1rhT.js";
import { t as D } from "./dist-DUsjyQ_S.js";
import { n as O } from "./dist-2hO1HNVn.js";
import { t as ee } from "./dist-BbhFjM_W.js";
import * as k from "react";
import { Fragment as A, jsx as j, jsxs as M } from "react/jsx-runtime";
import * as N from "react-dom";
var P = r("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), F = r("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]);
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-use-previou_1bd9b2c23fe3a848cffd2597cfd9040e/node_modules/@radix-ui/react-use-previous/dist/index.mjs
function I(e) {
	let t = k.useRef({
		value: e,
		previous: e
	});
	return k.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-checkbox@1._0b34357e05d086b6b984803207430e6d/node_modules/@radix-ui/react-checkbox/dist/index.mjs
var L = "Checkbox", [te, R] = C(L), [z, B] = te(L);
function V(e) {
	let { __scopeCheckbox: t, checked: n, children: r, defaultChecked: i, disabled: a, form: o, name: s, onCheckedChange: c, required: l, value: u = "on", internal_do_not_use_render: d } = e, [f, p] = y({
		prop: n,
		defaultProp: i ?? !1,
		onChange: c,
		caller: L
	}), [m, h] = k.useState(null), [g, _] = k.useState(null), v = k.useRef(!1), b = m ? !!o || !!m.closest("form") : !0, x = {
		checked: f,
		disabled: a,
		setChecked: p,
		control: m,
		setControl: h,
		name: s,
		form: o,
		value: u,
		hasConsumerStoppedPropagationRef: v,
		required: l,
		defaultChecked: W(i) ? !1 : i,
		isFormControl: b,
		bubbleInput: g,
		setBubbleInput: _
	};
	return /* @__PURE__ */ j(z, {
		scope: t,
		...x,
		children: se(d) ? d(x) : r
	});
}
var H = "CheckboxTrigger", ne = k.forwardRef(({ __scopeCheckbox: e, onKeyDown: n, onClick: r, ...i }, a) => {
	let { control: o, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: p, isFormControl: m, bubbleInput: h } = B(H, e), g = t(a, d), _ = k.useRef(l);
	return k.useEffect(() => {
		let e = o?.form;
		if (e) {
			let t = () => f(_.current);
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [o, f]), /* @__PURE__ */ j(D.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": W(l) ? "mixed" : l,
		"aria-required": u,
		"data-state": ce(l),
		"data-disabled": c ? "" : void 0,
		disabled: c,
		value: s,
		...i,
		ref: g,
		onKeyDown: T(n, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: T(r, (e) => {
			f((e) => W(e) ? !0 : !e), h && m && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
});
ne.displayName = H;
var re = k.forwardRef((e, t) => {
	let { __scopeCheckbox: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ j(V, {
		__scopeCheckbox: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j(ne, {
			...d,
			ref: t,
			__scopeCheckbox: n
		}), e && /* @__PURE__ */ j(U, { __scopeCheckbox: n })] })
	});
});
re.displayName = L;
var ie = "CheckboxIndicator", ae = k.forwardRef((e, t) => {
	let { __scopeCheckbox: n, forceMount: r, ...i } = e, a = B(ie, n);
	return /* @__PURE__ */ j(E, {
		present: r || W(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ j(D.span, {
			"data-state": ce(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t,
			style: {
				pointerEvents: "none",
				...e.style
			}
		})
	});
});
ae.displayName = ie;
var oe = "CheckboxBubbleInput", U = k.forwardRef(({ __scopeCheckbox: e, ...n }, r) => {
	let { control: i, hasConsumerStoppedPropagationRef: a, checked: o, defaultChecked: s, required: l, disabled: u, name: d, value: f, form: p, bubbleInput: m, setBubbleInput: h } = B(oe, e), g = t(r, h), _ = I(o), v = c(i);
	k.useEffect(() => {
		let e = m;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !a.current;
		if (_ !== o && n) {
			let t = new Event("click", { bubbles: r });
			e.indeterminate = W(o), n.call(e, W(o) ? !1 : o), e.dispatchEvent(t);
		}
	}, [
		m,
		_,
		o,
		a
	]);
	let y = k.useRef(W(o) ? !1 : o);
	return /* @__PURE__ */ j(D.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: s ?? y.current,
		required: l,
		disabled: u,
		name: d,
		value: f,
		form: p,
		...n,
		tabIndex: -1,
		ref: g,
		style: {
			...n.style,
			...v,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
U.displayName = oe;
function se(e) {
	return typeof e == "function";
}
function W(e) {
	return e === "indeterminate";
}
function ce(e) {
	return W(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region src/components/ui/checkbox.tsx
var le = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ j(re, {
	ref: r,
	className: e("peer h-4 w-4 shrink-0 rounded border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-inverse)] shadow-[var(--sdk-shadow-sm)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)] data-[state=checked]:border-[var(--sdk-color-brand-primary)] data-[state=checked]:bg-[var(--sdk-color-brand-primary)] disabled:cursor-not-allowed disabled:opacity-60", t),
	"data-sdk-ui": "checkbox",
	"data-slot": "checkbox",
	...n,
	children: /* @__PURE__ */ j(ae, {
		className: "flex items-center justify-center text-current",
		"data-slot": "checkbox-indicator",
		children: /* @__PURE__ */ j(a, { className: "h-3.5 w-3.5" })
	})
}));
le.displayName = "Checkbox";
//#endregion
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-select@2.3._387e0a405a753182722ac148cc81a556/node_modules/@radix-ui/react-select/dist/index.mjs
var ue = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], de = [" ", "Enter"], G = "Select", [K, q, fe] = i(G), [J, pe] = C(G, [fe, s]), me = s(), [he, Y] = J(G), [ge, _e] = J(G), ve = "SelectProvider";
function ye(e) {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p, form: m, internal_do_not_use_render: g } = e, _ = me(t), [b, x] = k.useState(null), [S, C] = k.useState(null), [T, E] = k.useState(!1), D = w(l), [O, ee] = y({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: G
	}), [A, M] = y({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: G
	}), N = k.useRef(null), P = b ? !!m || !!b.closest("form") : !0, [F, I] = k.useState(/* @__PURE__ */ new Set()), L = h(), te = Array.from(F).map((e) => e.props.value).join(";"), R = k.useCallback((e) => {
		I((t) => new Set(t).add(e));
	}, []), z = k.useCallback((e) => {
		I((t) => {
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), B = {
		required: p,
		trigger: b,
		onTriggerChange: x,
		valueNode: S,
		onValueNodeChange: C,
		valueNodeHasChildren: T,
		onValueNodeHasChildrenChange: E,
		contentId: L,
		value: A,
		onValueChange: M,
		open: O,
		onOpenChange: ee,
		dir: D,
		triggerPointerDownPosRef: N,
		disabled: f,
		name: u,
		autoComplete: d,
		form: m,
		nativeOptions: F,
		nativeSelectKey: te,
		isFormControl: P
	};
	return /* @__PURE__ */ j(v, {
		..._,
		children: /* @__PURE__ */ j(he, {
			scope: t,
			...B,
			children: /* @__PURE__ */ j(K.Provider, {
				scope: t,
				children: /* @__PURE__ */ j(ge, {
					scope: t,
					onNativeOptionAdd: R,
					onNativeOptionRemove: z,
					children: ht(g) ? g(B) : n
				})
			})
		})
	});
}
ye.displayName = ve;
var be = (e) => {
	let { __scopeSelect: t, children: n, ...r } = e;
	return /* @__PURE__ */ j(ye, {
		__scopeSelect: t,
		...r,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ M(A, { children: [n, e ? /* @__PURE__ */ j(mt, { __scopeSelect: t }) : null] })
	});
};
be.displayName = G;
var xe = "SelectTrigger", Se = k.forwardRef((e, n) => {
	let { __scopeSelect: r, disabled: i = !1, ...a } = e, o = me(r), s = Y(xe, r), c = s.disabled || i, l = t(n, s.onTriggerChange), u = q(r), d = k.useRef("touch"), [f, p, m] = _t((e) => {
		let t = u().filter((e) => !e.disabled), n = vt(t, e, t.find((e) => e.value === s.value));
		n !== void 0 && s.onValueChange(n.value);
	}), h = (e) => {
		c || (s.onOpenChange(!0), m()), e && (s.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ j(g, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ j(D.button, {
			type: "button",
			role: "combobox",
			"aria-controls": s.open ? s.contentId : void 0,
			"aria-expanded": s.open,
			"aria-required": s.required,
			"aria-autocomplete": "none",
			dir: s.dir,
			"data-state": s.open ? "open" : "closed",
			disabled: c,
			"data-disabled": c ? "" : void 0,
			"data-placeholder": gt(s.value) ? "" : void 0,
			...a,
			ref: l,
			onClick: T(a.onClick, (e) => {
				e.currentTarget.focus(), d.current !== "mouse" && h(e);
			}),
			onPointerDown: T(a.onPointerDown, (e) => {
				d.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (h(e), e.preventDefault());
			}),
			onKeyDown: T(a.onKeyDown, (e) => {
				let t = f.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && p(e.key), !(t && e.key === " ") && ue.includes(e.key) && (h(), e.preventDefault());
			})
		})
	});
});
Se.displayName = xe;
var Ce = "SelectValue", we = k.forwardRef((e, n) => {
	let { __scopeSelect: r, className: i, style: a, children: o, placeholder: s = "", ...c } = e, l = Y(Ce, r), { onValueNodeHasChildrenChange: u } = l, d = o !== void 0, f = t(n, l.onValueNodeChange);
	x(() => {
		u(d);
	}, [u, d]);
	let p = gt(l.value);
	return /* @__PURE__ */ j(D.span, {
		...c,
		asChild: p ? !1 : c.asChild,
		ref: f,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ j(k.Fragment, { children: p ? s : o }, p ? "placeholder" : "value")
	});
});
we.displayName = Ce;
var Te = "SelectIcon", Ee = k.forwardRef((e, t) => {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ j(D.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
});
Ee.displayName = Te;
var De = "SelectPortal", [Oe, ke] = J(De, { forceMount: void 0 }), Ae = (e) => {
	let { __scopeSelect: t, forceMount: n, ...r } = e;
	return /* @__PURE__ */ j(Oe, {
		scope: e.__scopeSelect,
		forceMount: n,
		children: /* @__PURE__ */ j(m, {
			asChild: !0,
			...r
		})
	});
};
Ae.displayName = De;
var X = "SelectContent", je = k.forwardRef((e, t) => {
	let n = ke(X, e.__scopeSelect), { forceMount: r = n.forceMount, ...i } = e, a = Y(X, e.__scopeSelect), [o, s] = k.useState();
	return x(() => {
		s(new DocumentFragment());
	}, []), /* @__PURE__ */ j(E, {
		present: r || a.open,
		children: ({ present: e }) => e ? /* @__PURE__ */ j(Ie, {
			...i,
			ref: t
		}) : /* @__PURE__ */ j(Me, {
			...i,
			fragment: o
		})
	});
});
je.displayName = X;
var Me = k.forwardRef((e, t) => {
	let { __scopeSelect: n, children: r, fragment: i } = e;
	return i ? N.createPortal(/* @__PURE__ */ j(Ne, {
		scope: n,
		children: /* @__PURE__ */ j(K.Slot, {
			scope: n,
			children: /* @__PURE__ */ j("div", {
				ref: t,
				children: r
			})
		})
	}), i) : null;
});
Me.displayName = "SelectContentFragment";
var Z = 10, [Ne, Q] = J(X), Pe = "SelectContentImpl", Fe = n("SelectContent.RemoveScroll"), Ie = k.forwardRef((e, n) => {
	let { __scopeSelect: r } = e, { position: i = "item-aligned", onCloseAutoFocus: a, onEscapeKeyDown: o, onPointerDownOutside: s, side: c, sideOffset: d, align: m, alignOffset: h, arrowPadding: g, collisionBoundary: v, collisionPadding: y, sticky: b, hideWhenDetached: x, avoidCollisions: S, ...C } = e, w = Y(X, r), [E, D] = k.useState(null), [O, ee] = k.useState(null), A = t(n, (e) => D(e)), [M, N] = k.useState(null), [P, F] = k.useState(null), I = q(r), [L, te] = k.useState(!1), R = k.useRef(!1);
	k.useEffect(() => {
		if (E) return p(E);
	}, [E]), u();
	let z = k.useCallback((e) => {
		let [t, ...n] = I().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && O && (O.scrollTop = 0), n === r && O && (O.scrollTop = O.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [I, O]), B = k.useCallback(() => z([M, E]), [
		z,
		M,
		E
	]);
	k.useEffect(() => {
		L && B();
	}, [L, B]);
	let { onOpenChange: V, triggerPointerDownPosRef: H } = w;
	k.useEffect(() => {
		if (E) {
			let e = {
				x: 0,
				y: 0
			}, t = (t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (H.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (H.current?.y ?? 0))
				};
			}, n = (n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(E) || V(!1), document.removeEventListener("pointermove", t), H.current = null;
			};
			return H.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		E,
		V,
		H
	]), k.useEffect(() => {
		let e = () => V(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [V]);
	let [ne, re] = _t((e) => {
		let t = I().filter((e) => !e.disabled), n = vt(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), ie = k.useCallback((e, t, n) => {
		let r = !R.current && !n;
		(w.value !== void 0 && w.value === t || r) && (N(e), r && (R.current = !0));
	}, [w.value]), ae = k.useCallback(() => E?.focus(), [E]), oe = k.useCallback((e, t, n) => {
		let r = !R.current && !n;
		(w.value !== void 0 && w.value === t || r) && F(e);
	}, [w.value]), U = i === "popper" ? Be : Re, se = U === Be ? {
		side: c,
		sideOffset: d,
		align: m,
		alignOffset: h,
		arrowPadding: g,
		collisionBoundary: v,
		collisionPadding: y,
		sticky: b,
		hideWhenDetached: x,
		avoidCollisions: S
	} : {};
	return /* @__PURE__ */ j(Ne, {
		scope: r,
		content: E,
		viewport: O,
		onViewportChange: ee,
		itemRefCallback: ie,
		selectedItem: M,
		onItemLeave: ae,
		itemTextRefCallback: oe,
		focusSelectedItem: B,
		selectedItemText: P,
		position: i,
		isPositioned: L,
		searchRef: ne,
		children: /* @__PURE__ */ j(_, {
			as: Fe,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ j(f, {
				asChild: !0,
				trapped: w.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: T(a, (e) => {
					w.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ j(l, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: o,
					onPointerDownOutside: s,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => w.onOpenChange(!1),
					children: /* @__PURE__ */ j(U, {
						role: "listbox",
						id: w.contentId,
						"data-state": w.open ? "open" : "closed",
						dir: w.dir,
						onContextMenu: (e) => e.preventDefault(),
						...C,
						...se,
						onPlaced: () => te(!0),
						ref: A,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...C.style
						},
						onKeyDown: T(C.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && re(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = I().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => z(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
Ie.displayName = Pe;
var Le = "SelectItemAlignedPosition", Re = k.forwardRef((e, n) => {
	let { __scopeSelect: r, onPlaced: i, ...a } = e, o = Y(X, r), s = Q(X, r), [c, l] = k.useState(null), [u, d] = k.useState(null), f = t(n, (e) => d(e)), p = q(r), m = k.useRef(!1), h = k.useRef(!0), { viewport: g, selectedItem: _, selectedItemText: v, focusSelectedItem: y } = s, b = k.useCallback(() => {
		if (o.trigger && o.valueNode && c && u && g && _ && v) {
			let e = o.trigger.getBoundingClientRect(), t = u.getBoundingClientRect(), n = o.valueNode.getBoundingClientRect(), r = v.getBoundingClientRect();
			if (o.dir !== "rtl") {
				let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - Z, d = ee(a, [Z, Math.max(Z, u - l)]);
				c.style.minWidth = s + "px", c.style.left = d + "px";
			} else {
				let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - Z, d = ee(a, [Z, Math.max(Z, u - l)]);
				c.style.minWidth = s + "px", c.style.right = d + "px";
			}
			let a = p(), s = window.innerHeight - Z * 2, l = g.scrollHeight, d = window.getComputedStyle(u), f = parseInt(d.borderTopWidth, 10), h = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = f + h + l + b + y, S = Math.min(_.offsetHeight * 5, x), C = window.getComputedStyle(g), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - Z, D = s - E, O = _.offsetHeight / 2, k = _.offsetTop + O, A = f + h + k, j = x - A;
			if (A <= E) {
				let e = a.length > 0 && _ === a[a.length - 1].ref.current;
				c.style.bottom = "0px";
				let t = u.clientHeight - g.offsetTop - g.offsetHeight, n = A + Math.max(D, O + (e ? T : 0) + t + y);
				c.style.height = n + "px";
			} else {
				let e = a.length > 0 && _ === a[0].ref.current;
				c.style.top = "0px";
				let t = Math.max(E, f + g.offsetTop + (e ? w : 0) + O) + j;
				c.style.height = t + "px", g.scrollTop = A - E + g.offsetTop;
			}
			c.style.margin = `${Z}px 0`, c.style.minHeight = S + "px", c.style.maxHeight = s + "px", i?.(), requestAnimationFrame(() => m.current = !0);
		}
	}, [
		p,
		o.trigger,
		o.valueNode,
		c,
		u,
		g,
		_,
		v,
		o.dir,
		i
	]);
	x(() => b(), [b]);
	let [S, C] = k.useState();
	return x(() => {
		u && C(window.getComputedStyle(u).zIndex);
	}, [u]), /* @__PURE__ */ j(Ve, {
		scope: r,
		contentWrapper: c,
		shouldExpandOnScrollRef: m,
		onScrollButtonChange: k.useCallback((e) => {
			e && h.current === !0 && (b(), y?.(), h.current = !1);
		}, [b, y]),
		children: /* @__PURE__ */ j("div", {
			ref: l,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: S
			},
			children: /* @__PURE__ */ j(D.div, {
				...a,
				ref: f,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...a.style
				}
			})
		})
	});
});
Re.displayName = Le;
var ze = "SelectPopperPosition", Be = k.forwardRef((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = Z, ...a } = e;
	return /* @__PURE__ */ j(d, {
		...me(n),
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Be.displayName = ze;
var [Ve, He] = J(X, {}), Ue = "SelectViewport", We = k.forwardRef((e, n) => {
	let { __scopeSelect: r, nonce: i, ...a } = e, o = Q(Ue, r), s = He(Ue, r), c = t(n, o.onViewportChange), l = k.useRef(0);
	return /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ j(K.Slot, {
		scope: r,
		children: /* @__PURE__ */ j(D.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...a,
			ref: c,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...a.style
			},
			onScroll: T(a.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
				if (r?.current && n) {
					let e = Math.abs(l.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - Z * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				l.current = t.scrollTop;
			})
		})
	})] });
});
We.displayName = Ue;
var Ge = "SelectGroup", [Ke, qe] = J(Ge), Je = k.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = h();
	return /* @__PURE__ */ j(Ke, {
		scope: n,
		id: i,
		children: /* @__PURE__ */ j(D.div, {
			role: "group",
			"aria-labelledby": i,
			...r,
			ref: t
		})
	});
});
Je.displayName = Ge;
var Ye = "SelectLabel", Xe = k.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = qe(Ye, n);
	return /* @__PURE__ */ j(D.div, {
		id: i.id,
		...r,
		ref: t
	});
});
Xe.displayName = Ye;
var Ze = "SelectItem", [Qe, $e] = J(Ze), et = k.forwardRef((e, n) => {
	let { __scopeSelect: r, value: i, disabled: a = !1, textValue: o, ...s } = e, c = Y(Ze, r), l = Q(Ze, r), u = c.value === i, [d, f] = k.useState(o ?? ""), [p, m] = k.useState(!1), g = t(n, (e) => l.itemRefCallback?.(e, i, a)), _ = h(), v = k.useRef("touch"), y = () => {
		a || (c.onValueChange(i), c.onOpenChange(!1));
	};
	if (i === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ j(Qe, {
		scope: r,
		value: i,
		disabled: a,
		textId: _,
		isSelected: u,
		onItemTextChange: k.useCallback((e) => {
			f((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ j(K.ItemSlot, {
			scope: r,
			value: i,
			disabled: a,
			textValue: d,
			children: /* @__PURE__ */ j(D.div, {
				role: "option",
				"aria-labelledby": _,
				"data-highlighted": p ? "" : void 0,
				"aria-selected": u && p,
				"data-state": u ? "checked" : "unchecked",
				"aria-disabled": a || void 0,
				"data-disabled": a ? "" : void 0,
				tabIndex: a ? void 0 : -1,
				...s,
				ref: g,
				onFocus: T(s.onFocus, () => m(!0)),
				onBlur: T(s.onBlur, () => m(!1)),
				onClick: T(s.onClick, () => {
					v.current !== "mouse" && y();
				}),
				onPointerUp: T(s.onPointerUp, () => {
					v.current === "mouse" && y();
				}),
				onPointerDown: T(s.onPointerDown, (e) => {
					v.current = e.pointerType;
				}),
				onPointerMove: T(s.onPointerMove, (e) => {
					v.current = e.pointerType, a ? l.onItemLeave?.() : v.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: T(s.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && l.onItemLeave?.();
				}),
				onKeyDown: T(s.onKeyDown, (e) => {
					l.searchRef?.current !== "" && e.key === " " || (de.includes(e.key) && y(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
et.displayName = Ze;
var $ = "SelectItemText", tt = k.forwardRef((e, n) => {
	let { __scopeSelect: r, className: i, style: a, ...o } = e, s = Y($, r), c = Q($, r), l = $e($, r), u = _e($, r), [d, f] = k.useState(null), p = t(n, (e) => f(e), l.onItemTextChange, (e) => c.itemTextRefCallback?.(e, l.value, l.disabled)), m = d?.textContent, h = k.useMemo(() => /* @__PURE__ */ j("option", {
		value: l.value,
		disabled: l.disabled,
		children: m
	}, l.value), [
		l.disabled,
		l.value,
		m
	]), { onNativeOptionAdd: g, onNativeOptionRemove: _ } = u;
	return x(() => (g(h), () => _(h)), [
		g,
		_,
		h
	]), /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j(D.span, {
		id: l.textId,
		...o,
		ref: p
	}), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? N.createPortal(o.children, s.valueNode) : null] });
});
tt.displayName = $;
var nt = "SelectItemIndicator", rt = k.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return $e(nt, n).isSelected ? /* @__PURE__ */ j(D.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
});
rt.displayName = nt;
var it = "SelectScrollUpButton", at = k.forwardRef((e, n) => {
	let r = Q(it, e.__scopeSelect), i = He(it, e.__scopeSelect), [a, o] = k.useState(!1), s = t(n, i.onScrollButtonChange);
	return x(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				o(t.scrollTop > 0);
			}, t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ j(ct, {
		...e,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
at.displayName = it;
var ot = "SelectScrollDownButton", st = k.forwardRef((e, n) => {
	let r = Q(ot, e.__scopeSelect), i = He(ot, e.__scopeSelect), [a, o] = k.useState(!1), s = t(n, i.onScrollButtonChange);
	return x(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				o(Math.ceil(t.scrollTop) < e);
			}, t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ j(ct, {
		...e,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
st.displayName = ot;
var ct = k.forwardRef((e, t) => {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = Q("SelectScrollButton", n), o = k.useRef(null), s = q(n), c = k.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return k.useEffect(() => () => c(), [c]), x(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ j(D.div, {
		"aria-hidden": !0,
		...i,
		ref: t,
		style: {
			flexShrink: 0,
			...i.style
		},
		onPointerDown: T(i.onPointerDown, () => {
			o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerMove: T(i.onPointerMove, () => {
			a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerLeave: T(i.onPointerLeave, () => {
			c();
		})
	});
}), lt = "SelectSeparator", ut = k.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ j(D.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
});
ut.displayName = lt;
var dt = "SelectArrow", ft = k.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = me(n);
	return Q(dt, n).position === "popper" ? /* @__PURE__ */ j(o, {
		...i,
		...r,
		ref: t
	}) : null;
});
ft.displayName = dt;
var pt = "SelectBubbleInput", mt = k.forwardRef(({ __scopeSelect: e, ...n }, r) => {
	let i = Y(pt, e), { value: a, onValueChange: o, required: s, disabled: c, name: l, autoComplete: u, form: d } = i, { nativeOptions: f, nativeSelectKey: p } = i, m = k.useRef(null), h = t(r, m), g = a ?? "", _ = I(g);
	return k.useEffect(() => {
		let e = m.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (_ !== g && n) {
			let t = new Event("change", { bubbles: !0 });
			n.call(e, g), e.dispatchEvent(t);
		}
	}, [_, g]), /* @__PURE__ */ M(D.select, {
		"aria-hidden": !0,
		required: s,
		tabIndex: -1,
		name: l,
		autoComplete: u,
		disabled: c,
		form: d,
		onChange: (e) => o(e.target.value),
		...n,
		style: {
			...O,
			...n.style
		},
		ref: h,
		defaultValue: g,
		children: [gt(a) ? /* @__PURE__ */ j("option", { value: "" }) : null, Array.from(f)]
	}, p);
});
mt.displayName = pt;
function ht(e) {
	return typeof e == "function";
}
function gt(e) {
	return e === "" || e === void 0;
}
function _t(e) {
	let t = S(e), n = k.useRef(""), r = k.useRef(0), i = k.useCallback((e) => {
		let i = n.current + e;
		t(i), (function e(t) {
			n.current = t, window.clearTimeout(r.current), t !== "" && (r.current = window.setTimeout(() => e(""), 1e3));
		})(i);
	}, [t]), a = k.useCallback(() => {
		n.current = "", window.clearTimeout(r.current);
	}, []);
	return k.useEffect(() => () => window.clearTimeout(r.current), []), [
		n,
		i,
		a
	];
}
function vt(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = yt(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function yt(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
//#endregion
//#region src/components/ui/select.tsx
var bt = be, xt = k.forwardRef(({ ...e }, t) => /* @__PURE__ */ j(Je, {
	ref: t,
	"data-sdk-ui": "select-group",
	"data-slot": "select-group",
	...e
}));
xt.displayName = "SelectGroup";
var St = k.forwardRef(({ ...e }, t) => /* @__PURE__ */ j(we, {
	ref: t,
	"data-sdk-ui": "select-value",
	"data-slot": "select-value",
	...e
}));
St.displayName = "SelectValue";
var Ct = k.forwardRef(({ className: t, children: n, ...r }, i) => /* @__PURE__ */ M(Se, {
	ref: i,
	className: e("flex h-10 w-full items-center justify-between gap-2 rounded-[var(--sdk-radius-field)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] px-3 py-2 text-sm text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-sm)] outline-none ring-offset-[var(--sdk-color-surface-canvas)] placeholder:text-[var(--sdk-color-text-muted)] focus:ring-2 focus:ring-[var(--sdk-color-border-focus)] disabled:cursor-not-allowed disabled:opacity-60", t),
	"data-sdk-ui": "select-trigger",
	"data-slot": "select-trigger",
	...r,
	children: [n, /* @__PURE__ */ j(Ee, {
		asChild: !0,
		children: /* @__PURE__ */ j(b, { className: "h-4 w-4 text-[var(--sdk-color-text-muted)]" })
	})]
}));
Ct.displayName = "SelectTrigger";
var wt = k.forwardRef(({ className: t, children: n, position: r = "popper", ...i }, a) => /* @__PURE__ */ j(Ae, { children: /* @__PURE__ */ M(je, {
	ref: a,
	position: r,
	className: e("relative z-50 min-w-[10rem] overflow-hidden rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-lg)]", t),
	"data-sdk-ui": "select-content",
	"data-slot": "select-content",
	...i,
	children: [
		/* @__PURE__ */ j(at, {
			className: "flex cursor-default items-center justify-center py-1",
			children: /* @__PURE__ */ j(P, { className: "h-4 w-4" })
		}),
		/* @__PURE__ */ j(We, {
			className: "p-1",
			children: n
		}),
		/* @__PURE__ */ j(st, {
			className: "flex cursor-default items-center justify-center py-1",
			children: /* @__PURE__ */ j(b, { className: "h-4 w-4" })
		})
	]
}) }));
wt.displayName = "SelectContent";
var Tt = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ j(Xe, {
	ref: r,
	className: e("px-2 py-1.5 text-xs font-semibold text-[var(--sdk-color-text-secondary)]", t),
	"data-sdk-ui": "select-label",
	"data-slot": "select-label",
	...n
}));
Tt.displayName = "SelectLabel";
var Et = k.forwardRef(({ className: t, children: n, ...r }, i) => /* @__PURE__ */ M(et, {
	ref: i,
	className: e("relative flex w-full cursor-default select-none items-center rounded-[var(--sdk-radius-field)] py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
	"data-sdk-ui": "select-item",
	"data-slot": "select-item",
	...r,
	children: [/* @__PURE__ */ j("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ j(rt, { children: /* @__PURE__ */ j(a, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ j(tt, { children: n })]
}));
Et.displayName = "SelectItem";
var Dt = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ j(ut, {
	ref: r,
	className: e("mx-1 my-1 h-px bg-[var(--sdk-color-border-subtle)]", t),
	"data-sdk-ui": "select-separator",
	"data-slot": "select-separator",
	...n
}));
Dt.displayName = "SelectSeparator", bt.displayName = "Select";
//#endregion
//#region src/lib/core/use-controllable-state.ts
function Ot({ defaultValue: e, onChange: t, value: n }) {
	let [r, i] = k.useState(e), a = n !== void 0, o = a ? n : r;
	return [o, k.useCallback((e) => {
		let n = typeof e == "function" ? e(o) : e;
		Object.is(n, o) || (a || i(n), t?.(n));
	}, [
		o,
		a,
		t
	])];
}
//#endregion
export { Et as a, Ct as c, I as d, F as f, xt as i, St as l, bt as n, Tt as o, P as p, wt as r, Dt as s, Ot as t, le as u };

//# sourceMappingURL=use-controllable-state-CU8uiH3u.js.map