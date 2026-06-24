import { t as e } from "./utils-MYzXLqpE.js";
import { t } from "./createLucideIcon-C5qdfuE3.js";
import { _ as n, b as r, c as i, d as a, f as o, g as s, h as c, l, m as u, n as d, o as f, p, s as m, t as h, u as g, v as _ } from "./Combination-CTo9CVjQ.js";
import { t as v } from "./chevron-down-C54jMGR6.js";
import { i as y, n as b, o as x, r as S, s as C, t as w } from "./dist-ZP7iWfNQ.js";
import { o as T, r as E, t as D } from "./dist-Dt-KO-jK.js";
import { n as O } from "./dist-C1zeSBRY.js";
import { t as ee } from "./dist-DVI7OL9x.js";
import * as k from "react";
import { Fragment as A, jsx as j, jsxs as M } from "react/jsx-runtime";
import * as N from "react-dom";
var P = t("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), F = t("file-text", [
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
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-use-previou_1bd9b2c23fe3a848cffd2597cfd9040e/node_modules/@radix-ui/react-use-previous/dist/index.mjs
function I(e) {
	let t = k.useRef({
		value: e,
		previous: e
	});
	return k.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-checkbox@1._0b34357e05d086b6b984803207430e6d/node_modules/@radix-ui/react-checkbox/dist/index.mjs
var L = "Checkbox", [te, R] = x(L), [z, B] = te(L);
function V(e) {
	let { __scopeCheckbox: t, checked: n, children: r, defaultChecked: i, disabled: a, form: o, name: s, onCheckedChange: c, required: l, value: u = "on", internal_do_not_use_render: d } = e, [f, p] = _({
		prop: n,
		defaultProp: i ?? !1,
		onChange: c,
		caller: L
	}), [m, h] = k.useState(null), [g, v] = k.useState(null), y = k.useRef(!1), b = m ? !!o || !!m.closest("form") : !0, x = {
		checked: f,
		disabled: a,
		setChecked: p,
		control: m,
		setControl: h,
		name: s,
		form: o,
		value: u,
		hasConsumerStoppedPropagationRef: y,
		required: l,
		defaultChecked: W(i) ? !1 : i,
		isFormControl: b,
		bubbleInput: g,
		setBubbleInput: v
	};
	return /* @__PURE__ */ j(z, {
		scope: t,
		...x,
		children: se(d) ? d(x) : r
	});
}
var H = "CheckboxTrigger", ne = k.forwardRef(({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, i) => {
	let { control: a, value: o, disabled: s, checked: c, required: l, setControl: u, setChecked: d, hasConsumerStoppedPropagationRef: f, isFormControl: p, bubbleInput: m } = B(H, e), h = T(i, u), g = k.useRef(c);
	return k.useEffect(() => {
		let e = a?.form;
		if (e) {
			let t = () => d(g.current);
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [a, d]), /* @__PURE__ */ j(D.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": W(c) ? "mixed" : c,
		"aria-required": l,
		"data-state": ce(c),
		"data-disabled": s ? "" : void 0,
		disabled: s,
		value: o,
		...r,
		ref: h,
		onKeyDown: C(t, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: C(n, (e) => {
			d((e) => W(e) ? !0 : !e), m && p && (f.current = e.isPropagationStopped(), f.current || e.stopPropagation());
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
	return /* @__PURE__ */ j(w, {
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
var oe = "CheckboxBubbleInput", U = k.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
	let { control: r, hasConsumerStoppedPropagationRef: i, checked: a, defaultChecked: s, required: c, disabled: l, name: u, value: d, form: f, bubbleInput: p, setBubbleInput: m } = B(oe, e), h = T(n, m), g = I(a), _ = o(r);
	k.useEffect(() => {
		let e = p;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !i.current;
		if (g !== a && n) {
			let t = new Event("click", { bubbles: r });
			e.indeterminate = W(a), n.call(e, W(a) ? !1 : a), e.dispatchEvent(t);
		}
	}, [
		p,
		g,
		a,
		i
	]);
	let v = k.useRef(W(a) ? !1 : a);
	return /* @__PURE__ */ j(D.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: s ?? v.current,
		required: c,
		disabled: l,
		name: u,
		value: d,
		form: f,
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
var le = k.forwardRef(({ className: t, ...n }, i) => /* @__PURE__ */ j(re, {
	ref: i,
	className: e("peer h-4 w-4 shrink-0 rounded border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-inverse)] shadow-[var(--sdk-shadow-sm)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)] data-[state=checked]:border-[var(--sdk-color-brand-primary)] data-[state=checked]:bg-[var(--sdk-color-brand-primary)] disabled:cursor-not-allowed disabled:opacity-60", t),
	"data-sdk-ui": "checkbox",
	"data-slot": "checkbox",
	...n,
	children: /* @__PURE__ */ j(ae, {
		className: "flex items-center justify-center text-current",
		"data-slot": "checkbox-indicator",
		children: /* @__PURE__ */ j(r, { className: "h-3.5 w-3.5" })
	})
}));
le.displayName = "Checkbox";
//#endregion
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-select@2.3._387e0a405a753182722ac148cc81a556/node_modules/@radix-ui/react-select/dist/index.mjs
var ue = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], de = [" ", "Enter"], G = "Select", [K, q, fe] = n(G), [J, pe] = x(G, [fe, a]), me = a(), [he, Y] = J(G), [ge, _e] = J(G), ve = "SelectProvider";
function ye(e) {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: m, form: h, internal_do_not_use_render: v } = e, y = me(t), [b, x] = k.useState(null), [C, w] = k.useState(null), [T, E] = k.useState(!1), D = S(l), [O, ee] = _({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: G
	}), [A, M] = _({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: G
	}), N = k.useRef(null), P = b ? !!h || !!b.closest("form") : !0, [F, I] = k.useState(/* @__PURE__ */ new Set()), L = p(), te = Array.from(F).map((e) => e.props.value).join(";"), R = k.useCallback((e) => {
		I((t) => new Set(t).add(e));
	}, []), z = k.useCallback((e) => {
		I((t) => {
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), B = {
		required: m,
		trigger: b,
		onTriggerChange: x,
		valueNode: C,
		onValueNodeChange: w,
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
		form: h,
		nativeOptions: F,
		nativeSelectKey: te,
		isFormControl: P
	};
	return /* @__PURE__ */ j(g, {
		...y,
		children: /* @__PURE__ */ j(he, {
			scope: t,
			...B,
			children: /* @__PURE__ */ j(K.Provider, {
				scope: t,
				children: /* @__PURE__ */ j(ge, {
					scope: t,
					onNativeOptionAdd: R,
					onNativeOptionRemove: z,
					children: ht(v) ? v(B) : n
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
var xe = "SelectTrigger", Se = k.forwardRef((e, t) => {
	let { __scopeSelect: n, disabled: r = !1, ...i } = e, a = me(n), o = Y(xe, n), s = o.disabled || r, c = T(t, o.onTriggerChange), l = q(n), u = k.useRef("touch"), [d, f, p] = _t((e) => {
		let t = l().filter((e) => !e.disabled), n = vt(t, e, t.find((e) => e.value === o.value));
		n !== void 0 && o.onValueChange(n.value);
	}), h = (e) => {
		s || (o.onOpenChange(!0), p()), e && (o.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ j(m, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ j(D.button, {
			type: "button",
			role: "combobox",
			"aria-controls": o.open ? o.contentId : void 0,
			"aria-expanded": o.open,
			"aria-required": o.required,
			"aria-autocomplete": "none",
			dir: o.dir,
			"data-state": o.open ? "open" : "closed",
			disabled: s,
			"data-disabled": s ? "" : void 0,
			"data-placeholder": gt(o.value) ? "" : void 0,
			...i,
			ref: c,
			onClick: C(i.onClick, (e) => {
				e.currentTarget.focus(), u.current !== "mouse" && h(e);
			}),
			onPointerDown: C(i.onPointerDown, (e) => {
				u.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (h(e), e.preventDefault());
			}),
			onKeyDown: C(i.onKeyDown, (e) => {
				let t = d.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && f(e.key), !(t && e.key === " ") && ue.includes(e.key) && (h(), e.preventDefault());
			})
		})
	});
});
Se.displayName = xe;
var Ce = "SelectValue", we = k.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = Y(Ce, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = T(t, c.onValueNodeChange);
	y(() => {
		l(u);
	}, [l, u]);
	let f = gt(c.value);
	return /* @__PURE__ */ j(D.span, {
		...s,
		asChild: f ? !1 : s.asChild,
		ref: d,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ j(k.Fragment, { children: f ? o : a }, f ? "placeholder" : "value")
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
		children: /* @__PURE__ */ j(f, {
			asChild: !0,
			...r
		})
	});
};
Ae.displayName = De;
var X = "SelectContent", je = k.forwardRef((e, t) => {
	let n = ke(X, e.__scopeSelect), { forceMount: r = n.forceMount, ...i } = e, a = Y(X, e.__scopeSelect), [o, s] = k.useState();
	return y(() => {
		s(new DocumentFragment());
	}, []), /* @__PURE__ */ j(w, {
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
var Z = 10, [Ne, Q] = J(X), Pe = "SelectContentImpl", Fe = E("SelectContent.RemoveScroll"), Ie = k.forwardRef((e, t) => {
	let { __scopeSelect: n } = e, { position: r = "item-aligned", onCloseAutoFocus: i, onEscapeKeyDown: a, onPointerDownOutside: o, side: l, sideOffset: f, align: p, alignOffset: m, arrowPadding: g, collisionBoundary: _, collisionPadding: v, sticky: y, hideWhenDetached: b, avoidCollisions: x, ...S } = e, w = Y(X, n), [E, D] = k.useState(null), [O, ee] = k.useState(null), A = T(t, (e) => D(e)), [M, N] = k.useState(null), [P, F] = k.useState(null), I = q(n), [L, te] = k.useState(!1), R = k.useRef(!1);
	k.useEffect(() => {
		if (E) return d(E);
	}, [E]), c();
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
	}, [w.value]), U = r === "popper" ? Be : Re, se = U === Be ? {
		side: l,
		sideOffset: f,
		align: p,
		alignOffset: m,
		arrowPadding: g,
		collisionBoundary: _,
		collisionPadding: v,
		sticky: y,
		hideWhenDetached: b,
		avoidCollisions: x
	} : {};
	return /* @__PURE__ */ j(Ne, {
		scope: n,
		content: E,
		viewport: O,
		onViewportChange: ee,
		itemRefCallback: ie,
		selectedItem: M,
		onItemLeave: ae,
		itemTextRefCallback: oe,
		focusSelectedItem: B,
		selectedItemText: P,
		position: r,
		isPositioned: L,
		searchRef: ne,
		children: /* @__PURE__ */ j(h, {
			as: Fe,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ j(u, {
				asChild: !0,
				trapped: w.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: C(i, (e) => {
					w.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ j(s, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: a,
					onPointerDownOutside: o,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => w.onOpenChange(!1),
					children: /* @__PURE__ */ j(U, {
						role: "listbox",
						id: w.contentId,
						"data-state": w.open ? "open" : "closed",
						dir: w.dir,
						onContextMenu: (e) => e.preventDefault(),
						...S,
						...se,
						onPlaced: () => te(!0),
						ref: A,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...S.style
						},
						onKeyDown: C(S.onKeyDown, (e) => {
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
var Le = "SelectItemAlignedPosition", Re = k.forwardRef((e, t) => {
	let { __scopeSelect: n, onPlaced: r, ...i } = e, a = Y(X, n), o = Q(X, n), [s, c] = k.useState(null), [l, u] = k.useState(null), d = T(t, (e) => u(e)), f = q(n), p = k.useRef(!1), m = k.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: _, focusSelectedItem: v } = o, b = k.useCallback(() => {
		if (a.trigger && a.valueNode && s && l && h && g && _) {
			let e = a.trigger.getBoundingClientRect(), t = l.getBoundingClientRect(), n = a.valueNode.getBoundingClientRect(), i = _.getBoundingClientRect();
			if (a.dir !== "rtl") {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - Z, d = ee(a, [Z, Math.max(Z, u - l)]);
				s.style.minWidth = c + "px", s.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - Z, d = ee(a, [Z, Math.max(Z, u - l)]);
				s.style.minWidth = c + "px", s.style.right = d + "px";
			}
			let o = f(), c = window.innerHeight - Z * 2, u = h.scrollHeight, d = window.getComputedStyle(l), m = parseInt(d.borderTopWidth, 10), v = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = m + v + u + b + y, S = Math.min(g.offsetHeight * 5, x), C = window.getComputedStyle(h), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - Z, D = c - E, O = g.offsetHeight / 2, k = g.offsetTop + O, A = m + v + k, j = x - A;
			if (A <= E) {
				let e = o.length > 0 && g === o[o.length - 1].ref.current;
				s.style.bottom = "0px";
				let t = l.clientHeight - h.offsetTop - h.offsetHeight, n = A + Math.max(D, O + (e ? T : 0) + t + y);
				s.style.height = n + "px";
			} else {
				let e = o.length > 0 && g === o[0].ref.current;
				s.style.top = "0px";
				let t = Math.max(E, m + h.offsetTop + (e ? w : 0) + O) + j;
				s.style.height = t + "px", h.scrollTop = A - E + h.offsetTop;
			}
			s.style.margin = `${Z}px 0`, s.style.minHeight = S + "px", s.style.maxHeight = c + "px", r?.(), requestAnimationFrame(() => p.current = !0);
		}
	}, [
		f,
		a.trigger,
		a.valueNode,
		s,
		l,
		h,
		g,
		_,
		a.dir,
		r
	]);
	y(() => b(), [b]);
	let [x, S] = k.useState();
	return y(() => {
		l && S(window.getComputedStyle(l).zIndex);
	}, [l]), /* @__PURE__ */ j(Ve, {
		scope: n,
		contentWrapper: s,
		shouldExpandOnScrollRef: p,
		onScrollButtonChange: k.useCallback((e) => {
			e && m.current === !0 && (b(), v?.(), m.current = !1);
		}, [b, v]),
		children: /* @__PURE__ */ j("div", {
			ref: c,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: x
			},
			children: /* @__PURE__ */ j(D.div, {
				...i,
				ref: d,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...i.style
				}
			})
		})
	});
});
Re.displayName = Le;
var ze = "SelectPopperPosition", Be = k.forwardRef((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = Z, ...a } = e;
	return /* @__PURE__ */ j(l, {
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
var [Ve, He] = J(X, {}), Ue = "SelectViewport", We = k.forwardRef((e, t) => {
	let { __scopeSelect: n, nonce: r, ...i } = e, a = Q(Ue, n), o = He(Ue, n), s = T(t, a.onViewportChange), c = k.useRef(0);
	return /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: r
	}), /* @__PURE__ */ j(K.Slot, {
		scope: n,
		children: /* @__PURE__ */ j(D.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...i,
			ref: s,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...i.style
			},
			onScroll: C(i.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = o;
				if (r?.current && n) {
					let e = Math.abs(c.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - Z * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				c.current = t.scrollTop;
			})
		})
	})] });
});
We.displayName = Ue;
var Ge = "SelectGroup", [Ke, qe] = J(Ge), Je = k.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = p();
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
var Ze = "SelectItem", [Qe, $e] = J(Ze), et = k.forwardRef((e, t) => {
	let { __scopeSelect: n, value: r, disabled: i = !1, textValue: a, ...o } = e, s = Y(Ze, n), c = Q(Ze, n), l = s.value === r, [u, d] = k.useState(a ?? ""), [f, m] = k.useState(!1), h = T(t, (e) => c.itemRefCallback?.(e, r, i)), g = p(), _ = k.useRef("touch"), v = () => {
		i || (s.onValueChange(r), s.onOpenChange(!1));
	};
	if (r === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ j(Qe, {
		scope: n,
		value: r,
		disabled: i,
		textId: g,
		isSelected: l,
		onItemTextChange: k.useCallback((e) => {
			d((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ j(K.ItemSlot, {
			scope: n,
			value: r,
			disabled: i,
			textValue: u,
			children: /* @__PURE__ */ j(D.div, {
				role: "option",
				"aria-labelledby": g,
				"data-highlighted": f ? "" : void 0,
				"aria-selected": l && f,
				"data-state": l ? "checked" : "unchecked",
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				tabIndex: i ? void 0 : -1,
				...o,
				ref: h,
				onFocus: C(o.onFocus, () => m(!0)),
				onBlur: C(o.onBlur, () => m(!1)),
				onClick: C(o.onClick, () => {
					_.current !== "mouse" && v();
				}),
				onPointerUp: C(o.onPointerUp, () => {
					_.current === "mouse" && v();
				}),
				onPointerDown: C(o.onPointerDown, (e) => {
					_.current = e.pointerType;
				}),
				onPointerMove: C(o.onPointerMove, (e) => {
					_.current = e.pointerType, i ? c.onItemLeave?.() : _.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: C(o.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && c.onItemLeave?.();
				}),
				onKeyDown: C(o.onKeyDown, (e) => {
					c.searchRef?.current !== "" && e.key === " " || (de.includes(e.key) && v(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
et.displayName = Ze;
var $ = "SelectItemText", tt = k.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, ...a } = e, o = Y($, n), s = Q($, n), c = $e($, n), l = _e($, n), [u, d] = k.useState(null), f = T(t, (e) => d(e), c.onItemTextChange, (e) => s.itemTextRefCallback?.(e, c.value, c.disabled)), p = u?.textContent, m = k.useMemo(() => /* @__PURE__ */ j("option", {
		value: c.value,
		disabled: c.disabled,
		children: p
	}, c.value), [
		c.disabled,
		c.value,
		p
	]), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
	return y(() => (h(m), () => g(m)), [
		h,
		g,
		m
	]), /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j(D.span, {
		id: c.textId,
		...a,
		ref: f
	}), c.isSelected && o.valueNode && !o.valueNodeHasChildren ? N.createPortal(a.children, o.valueNode) : null] });
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
var it = "SelectScrollUpButton", at = k.forwardRef((e, t) => {
	let n = Q(it, e.__scopeSelect), r = He(it, e.__scopeSelect), [i, a] = k.useState(!1), o = T(t, r.onScrollButtonChange);
	return y(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				a(t.scrollTop > 0);
			}, t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ j(ct, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
at.displayName = it;
var ot = "SelectScrollDownButton", st = k.forwardRef((e, t) => {
	let n = Q(ot, e.__scopeSelect), r = He(ot, e.__scopeSelect), [i, a] = k.useState(!1), o = T(t, r.onScrollButtonChange);
	return y(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				a(Math.ceil(t.scrollTop) < e);
			}, t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ j(ct, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
st.displayName = ot;
var ct = k.forwardRef((e, t) => {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = Q("SelectScrollButton", n), o = k.useRef(null), s = q(n), c = k.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return k.useEffect(() => () => c(), [c]), y(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ j(D.div, {
		"aria-hidden": !0,
		...i,
		ref: t,
		style: {
			flexShrink: 0,
			...i.style
		},
		onPointerDown: C(i.onPointerDown, () => {
			o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerMove: C(i.onPointerMove, () => {
			a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerLeave: C(i.onPointerLeave, () => {
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
	let { __scopeSelect: n, ...r } = e, a = me(n);
	return Q(dt, n).position === "popper" ? /* @__PURE__ */ j(i, {
		...a,
		...r,
		ref: t
	}) : null;
});
ft.displayName = dt;
var pt = "SelectBubbleInput", mt = k.forwardRef(({ __scopeSelect: e, ...t }, n) => {
	let r = Y(pt, e), { value: i, onValueChange: a, required: o, disabled: s, name: c, autoComplete: l, form: u } = r, { nativeOptions: d, nativeSelectKey: f } = r, p = k.useRef(null), m = T(n, p), h = i ?? "", g = I(h);
	return k.useEffect(() => {
		let e = p.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (g !== h && n) {
			let t = new Event("change", { bubbles: !0 });
			n.call(e, h), e.dispatchEvent(t);
		}
	}, [g, h]), /* @__PURE__ */ M(D.select, {
		"aria-hidden": !0,
		required: o,
		tabIndex: -1,
		name: c,
		autoComplete: l,
		disabled: s,
		form: u,
		onChange: (e) => a(e.target.value),
		...t,
		style: {
			...O,
			...t.style
		},
		ref: m,
		defaultValue: h,
		children: [gt(i) ? /* @__PURE__ */ j("option", { value: "" }) : null, Array.from(d)]
	}, f);
});
mt.displayName = pt;
function ht(e) {
	return typeof e == "function";
}
function gt(e) {
	return e === "" || e === void 0;
}
function _t(e) {
	let t = b(e), n = k.useRef(""), r = k.useRef(0), i = k.useCallback((e) => {
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
		children: /* @__PURE__ */ j(v, { className: "h-4 w-4 text-[var(--sdk-color-text-muted)]" })
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
			children: /* @__PURE__ */ j(v, { className: "h-4 w-4" })
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
var Et = k.forwardRef(({ className: t, children: n, ...i }, a) => /* @__PURE__ */ M(et, {
	ref: a,
	className: e("relative flex w-full cursor-default select-none items-center rounded-[var(--sdk-radius-field)] py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
	"data-sdk-ui": "select-item",
	"data-slot": "select-item",
	...i,
	children: [/* @__PURE__ */ j("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ j(rt, { children: /* @__PURE__ */ j(r, { className: "h-4 w-4" }) })
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

//# sourceMappingURL=use-controllable-state-B2HIMogd.js.map