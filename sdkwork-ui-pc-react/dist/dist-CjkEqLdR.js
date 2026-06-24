import { _ as e, a as t, c as n, d as r, g as i, h as a, i as o, l as s, m as c, n as l, o as u, p as d, r as f, s as p, t as ee, u as m } from "./Combination-CTo9CVjQ.js";
import { n as h, o as te, r as ne, s as g, t as _ } from "./dist-ZP7iWfNQ.js";
import { a as v, n as y, o as b, r as x, t as S } from "./dist-Dt-KO-jK.js";
import * as C from "react";
import { jsx as w } from "react/jsx-runtime";
//#region ../../sdkwork-birdcoder/node_modules/.pnpm/@radix-ui+react-menu@2.1.17_94d1ad1281fe838a8ce1597daa5f7d88/node_modules/@radix-ui/react-menu/dist/index.mjs
var T = ["Enter", " "], re = [
	"ArrowDown",
	"PageUp",
	"Home"
], ie = [
	"ArrowUp",
	"PageDown",
	"End"
], ae = [...re, ...ie], E = {
	ltr: [...T, "ArrowRight"],
	rtl: [...T, "ArrowLeft"]
}, oe = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, D = "Menu", [O, se, ce] = e(D), [k, A] = te(D, [
	ce,
	r,
	t
]), j = r(), le = t(), [M, N] = k(D), [P, F] = k(D), I = (e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e, s = j(t), [c, l] = C.useState(null), u = C.useRef(!1), d = h(a), f = ne(i);
	return C.useEffect(() => {
		let e = () => {
			u.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => u.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ w(m, {
		...s,
		children: /* @__PURE__ */ w(M, {
			scope: t,
			open: n,
			onOpenChange: d,
			content: c,
			onContentChange: l,
			children: /* @__PURE__ */ w(P, {
				scope: t,
				onClose: C.useCallback(() => d(!1), [d]),
				isUsingKeyboardRef: u,
				dir: f,
				modal: o,
				children: r
			})
		})
	});
};
I.displayName = D;
var L = "MenuAnchor", R = C.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ w(p, {
		...j(n),
		...r,
		ref: t
	});
});
R.displayName = L;
var z = "MenuPortal", [ue, B] = k(z, { forceMount: void 0 }), de = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = N(z, t);
	return /* @__PURE__ */ w(ue, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ w(_, {
			present: n || a.open,
			children: /* @__PURE__ */ w(u, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
de.displayName = z;
var V = "MenuContent", [fe, H] = k(V), U = C.forwardRef((e, t) => {
	let n = B(V, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = N(V, e.__scopeMenu), o = F(V, e.__scopeMenu);
	return /* @__PURE__ */ w(O.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ w(_, {
			present: r || a.open,
			children: /* @__PURE__ */ w(O.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ w(pe, {
					...i,
					ref: t
				}) : /* @__PURE__ */ w(me, {
					...i,
					ref: t
				})
			})
		})
	});
}), pe = C.forwardRef((e, t) => {
	let n = N(V, e.__scopeMenu), r = C.useRef(null), i = b(t, r);
	return C.useEffect(() => {
		let e = r.current;
		if (e) return l(e);
	}, []), /* @__PURE__ */ w(W, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: g(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}), me = C.forwardRef((e, t) => {
	let n = N(V, e.__scopeMenu);
	return /* @__PURE__ */ w(W, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), he = x("MenuContent.ScrollLock"), W = C.forwardRef((e, t) => {
	let { __scopeMenu: n, loop: r = !1, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: d, disableOutsidePointerEvents: f, onEntryFocus: p, onEscapeKeyDown: m, onPointerDownOutside: h, onFocusOutside: te, onInteractOutside: ne, onDismiss: _, disableOutsideScroll: v, ...y } = e, x = N(V, n), S = F(V, n), T = j(n), re = le(n), E = se(n), [oe, D] = C.useState(null), O = C.useRef(null), ce = b(t, O, x.onContentChange), k = C.useRef(0), A = C.useRef(""), M = C.useRef(0), P = C.useRef(null), I = C.useRef("right"), L = C.useRef(0), R = v ? ee : C.Fragment, z = v ? {
		as: he,
		allowPinchZoom: !0
	} : void 0, ue = (e) => {
		let t = A.current + e, n = E().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Ge(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			A.current = t, window.clearTimeout(k.current), t !== "" && (k.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	C.useEffect(() => () => window.clearTimeout(k.current), []), a();
	let B = C.useCallback((e) => I.current === P.current?.side && qe(e, P.current?.area), []);
	return /* @__PURE__ */ w(fe, {
		scope: n,
		searchRef: A,
		onItemEnter: C.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		onItemLeave: C.useCallback((e) => {
			B(e) || (O.current?.focus(), D(null));
		}, [B]),
		onTriggerLeave: C.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		pointerGraceTimerRef: M,
		onPointerGraceIntentChange: C.useCallback((e) => {
			P.current = e;
		}, []),
		children: /* @__PURE__ */ w(R, {
			...z,
			children: /* @__PURE__ */ w(c, {
				asChild: !0,
				trapped: l,
				onMountAutoFocus: g(u, (e) => {
					e.preventDefault(), O.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: d,
				children: /* @__PURE__ */ w(i, {
					asChild: !0,
					disableOutsidePointerEvents: f,
					onEscapeKeyDown: m,
					onPointerDownOutside: h,
					onFocusOutside: te,
					onInteractOutside: ne,
					onDismiss: _,
					children: /* @__PURE__ */ w(o, {
						asChild: !0,
						...re,
						dir: S.dir,
						orientation: "vertical",
						loop: r,
						currentTabStopId: oe,
						onCurrentTabStopIdChange: D,
						onEntryFocus: g(p, (e) => {
							S.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ w(s, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": He(x.open),
							"data-radix-menu-content": "",
							dir: S.dir,
							...T,
							...y,
							ref: ce,
							style: {
								outline: "none",
								...y.style
							},
							onKeyDown: g(y.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && ue(e.key));
								let i = O.current;
								if (e.target !== i || !ae.includes(e.key)) return;
								e.preventDefault();
								let a = E().filter((e) => !e.disabled).map((e) => e.ref.current);
								ie.includes(e.key) && a.reverse(), Ue(a);
							}),
							onBlur: g(e.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(k.current), A.current = "");
							}),
							onPointerMove: g(e.onPointerMove, $((e) => {
								let t = e.target, n = L.current !== e.clientX;
								e.currentTarget.contains(t) && n && (I.current = e.clientX > L.current ? "right" : "left", L.current = e.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
U.displayName = V;
var ge = "MenuGroup", G = C.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ w(S.div, {
		role: "group",
		...r,
		ref: t
	});
});
G.displayName = ge;
var _e = "MenuLabel", ve = C.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ w(S.div, {
		...r,
		ref: t
	});
});
ve.displayName = _e;
var K = "MenuItem", ye = "menu.itemSelect", q = C.forwardRef((e, t) => {
	let { disabled: n = !1, onSelect: r, ...i } = e, a = C.useRef(null), o = F(K, e.__scopeMenu), s = H(K, e.__scopeMenu), c = b(t, a), l = C.useRef(!1), u = () => {
		let e = a.current;
		if (!n && e) {
			let t = new CustomEvent(ye, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(ye, (e) => r?.(e), { once: !0 }), y(e, t), t.defaultPrevented ? l.current = !1 : o.onClose();
		}
	};
	return /* @__PURE__ */ w(be, {
		...i,
		ref: c,
		disabled: n,
		onClick: g(e.onClick, u),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), l.current = !0;
		},
		onPointerUp: g(e.onPointerUp, (e) => {
			l.current || e.currentTarget?.click();
		}),
		onKeyDown: g(e.onKeyDown, (e) => {
			let t = s.searchRef.current !== "";
			n || t && e.key === " " || T.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
q.displayName = K;
var be = C.forwardRef((e, t) => {
	let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e, o = H(K, n), s = le(n), c = C.useRef(null), l = b(t, c), [u, d] = C.useState(!1), [p, ee] = C.useState("");
	return C.useEffect(() => {
		let e = c.current;
		e && ee((e.textContent ?? "").trim());
	}, [a.children]), /* @__PURE__ */ w(O.ItemSlot, {
		scope: n,
		disabled: r,
		textValue: i ?? p,
		children: /* @__PURE__ */ w(f, {
			asChild: !0,
			...s,
			focusable: !r,
			children: /* @__PURE__ */ w(S.div, {
				role: "menuitem",
				"data-highlighted": u ? "" : void 0,
				"aria-disabled": r || void 0,
				"data-disabled": r ? "" : void 0,
				...a,
				ref: l,
				onPointerMove: g(e.onPointerMove, $((e) => {
					r ? o.onItemLeave(e) : (o.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: g(e.onPointerLeave, $((e) => o.onItemLeave(e))),
				onFocus: g(e.onFocus, () => d(!0)),
				onBlur: g(e.onBlur, () => d(!1))
			})
		})
	});
}), xe = "MenuCheckboxItem", Se = C.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ w(ke, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ w(q, {
			role: "menuitemcheckbox",
			"aria-checked": Z(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Q(n),
			onSelect: g(i.onSelect, () => r?.(Z(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Se.displayName = xe;
var Ce = "MenuRadioGroup", [we, Te] = k(Ce, {
	value: void 0,
	onValueChange: () => {}
}), Ee = C.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = h(r);
	return /* @__PURE__ */ w(we, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ w(G, {
			...i,
			ref: t
		})
	});
});
Ee.displayName = Ce;
var De = "MenuRadioItem", Oe = C.forwardRef((e, t) => {
	let { value: n, ...r } = e, i = Te(De, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ w(ke, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ w(q, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Q(a),
			onSelect: g(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
Oe.displayName = De;
var J = "MenuItemIndicator", [ke, Ae] = k(J, { checked: !1 }), je = C.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Ae(J, n);
	return /* @__PURE__ */ w(_, {
		present: r || Z(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ w(S.span, {
			...i,
			ref: t,
			"data-state": Q(a.checked)
		})
	});
});
je.displayName = J;
var Me = "MenuSeparator", Ne = C.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ w(S.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
Ne.displayName = Me;
var Pe = "MenuArrow", Fe = C.forwardRef((e, t) => {
	let { __scopeMenu: r, ...i } = e;
	return /* @__PURE__ */ w(n, {
		...j(r),
		...i,
		ref: t
	});
});
Fe.displayName = Pe;
var Y = "MenuSub", [Ie, Le] = k(Y), Re = (e) => {
	let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e, a = N(Y, t), o = j(t), [s, c] = C.useState(null), [l, u] = C.useState(null), f = h(i);
	return C.useEffect(() => (a.open === !1 && f(!1), () => f(!1)), [a.open, f]), /* @__PURE__ */ w(m, {
		...o,
		children: /* @__PURE__ */ w(M, {
			scope: t,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ w(Ie, {
				scope: t,
				contentId: d(),
				triggerId: d(),
				trigger: s,
				onTriggerChange: c,
				children: n
			})
		})
	});
};
Re.displayName = Y;
var X = "MenuSubTrigger", ze = C.forwardRef((e, t) => {
	let n = N(X, e.__scopeMenu), r = F(X, e.__scopeMenu), i = Le(X, e.__scopeMenu), a = H(X, e.__scopeMenu), o = C.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, u = C.useCallback(() => {
		o.current && window.clearTimeout(o.current), o.current = null;
	}, []);
	return C.useEffect(() => u, [u]), C.useEffect(() => {
		let e = s.current;
		return () => {
			window.clearTimeout(e), c(null);
		};
	}, [s, c]), /* @__PURE__ */ w(R, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ w(be, {
			id: i.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": n.open ? i.contentId : void 0,
			"data-state": He(n.open),
			...e,
			ref: v(t, i.onTriggerChange),
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
			},
			onPointerMove: g(e.onPointerMove, $((t) => {
				a.onItemEnter(t), !t.defaultPrevented && !e.disabled && !n.open && !o.current && (a.onPointerGraceIntentChange(null), o.current = window.setTimeout(() => {
					n.onOpenChange(!0), u();
				}, 100));
			})),
			onPointerLeave: g(e.onPointerLeave, $((e) => {
				u();
				let t = n.content?.getBoundingClientRect();
				if (t) {
					let r = n.content?.dataset.side, i = r === "right", o = i ? -5 : 5, c = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					a.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + o,
								y: e.clientY
							},
							{
								x: c,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: c,
								y: t.bottom
							}
						],
						side: r
					}), window.clearTimeout(s.current), s.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300);
				} else {
					if (a.onTriggerLeave(e), e.defaultPrevented) return;
					a.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: g(e.onKeyDown, (t) => {
				let i = a.searchRef.current !== "";
				e.disabled || i && t.key === " " || E[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
});
ze.displayName = X;
var Be = "MenuSubContent", Ve = C.forwardRef((e, t) => {
	let n = B(V, e.__scopeMenu), { forceMount: r = n.forceMount, align: i = "start", ...a } = e, o = N(V, e.__scopeMenu), s = F(V, e.__scopeMenu), c = Le(Be, e.__scopeMenu), l = C.useRef(null), u = b(t, l);
	return /* @__PURE__ */ w(O.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ w(_, {
			present: r || o.open,
			children: /* @__PURE__ */ w(O.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ w(W, {
					id: c.contentId,
					"aria-labelledby": c.triggerId,
					...a,
					ref: u,
					align: i,
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: g(e.onFocusOutside, (e) => {
						e.target !== c.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: g(e.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: g(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = oe[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
Ve.displayName = Be;
function He(e) {
	return e ? "open" : "closed";
}
function Z(e) {
	return e === "indeterminate";
}
function Q(e) {
	return Z(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ue(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function We(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function Ge(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = We(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function Ke(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function qe(e, t) {
	return t ? Ke({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function $(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Je = I, Ye = R, Xe = de, Ze = U, Qe = G, $e = ve, et = q, tt = Se, nt = Ee, rt = Oe, it = je, at = Ne, ot = Fe, st = Re, ct = ze, lt = Ve;
//#endregion
export { A as _, Qe as a, $e as c, rt as d, Je as f, ct as g, lt as h, Ze as i, Xe as l, st as m, ot as n, et as o, at as p, tt as r, it as s, Ye as t, nt as u };

//# sourceMappingURL=dist-CjkEqLdR.js.map