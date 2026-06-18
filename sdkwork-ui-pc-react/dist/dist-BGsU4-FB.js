import { a as e, i as t, n } from "./dist-5AX1ca2q.js";
import { _ as r, a as i, c as a, d as o, g as s, h as c, i as l, l as u, m as d, n as f, o as p, p as m, r as ee, s as te, t as ne, u as h } from "./Combination-CioGxkCi.js";
import { n as g, o as re, r as _, s as v, t as y } from "./dist-D2r-1rhT.js";
import { n as b, t as x } from "./dist-DUsjyQ_S.js";
import * as S from "react";
import { jsx as C } from "react/jsx-runtime";
//#region ../../sdkwork-im/apps/sdkwork-im-pc/node_modules/.pnpm-codex-new/@radix-ui+react-menu@2.1.17_94d1ad1281fe838a8ce1597daa5f7d88/node_modules/@radix-ui/react-menu/dist/index.mjs
var w = ["Enter", " "], ie = [
	"ArrowDown",
	"PageUp",
	"Home"
], T = [
	"ArrowUp",
	"PageDown",
	"End"
], ae = [...ie, ...T], E = {
	ltr: [...w, "ArrowRight"],
	rtl: [...w, "ArrowLeft"]
}, oe = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, D = "Menu", [O, se, ce] = r(D), [k, A] = re(D, [
	ce,
	o,
	i
]), j = o(), le = i(), [M, N] = k(D), [P, F] = k(D), I = (e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e, s = j(t), [c, l] = S.useState(null), u = S.useRef(!1), d = g(a), f = _(i);
	return S.useEffect(() => {
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
	}, []), /* @__PURE__ */ C(h, {
		...s,
		children: /* @__PURE__ */ C(M, {
			scope: t,
			open: n,
			onOpenChange: d,
			content: c,
			onContentChange: l,
			children: /* @__PURE__ */ C(P, {
				scope: t,
				onClose: S.useCallback(() => d(!1), [d]),
				isUsingKeyboardRef: u,
				dir: f,
				modal: o,
				children: r
			})
		})
	});
};
I.displayName = D;
var L = "MenuAnchor", R = S.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(te, {
		...j(n),
		...r,
		ref: t
	});
});
R.displayName = L;
var z = "MenuPortal", [ue, B] = k(z, { forceMount: void 0 }), de = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = N(z, t);
	return /* @__PURE__ */ C(ue, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ C(y, {
			present: n || a.open,
			children: /* @__PURE__ */ C(p, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
de.displayName = z;
var V = "MenuContent", [fe, H] = k(V), U = S.forwardRef((e, t) => {
	let n = B(V, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = N(V, e.__scopeMenu), o = F(V, e.__scopeMenu);
	return /* @__PURE__ */ C(O.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ C(y, {
			present: r || a.open,
			children: /* @__PURE__ */ C(O.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ C(pe, {
					...i,
					ref: t
				}) : /* @__PURE__ */ C(me, {
					...i,
					ref: t
				})
			})
		})
	});
}), pe = S.forwardRef((t, n) => {
	let r = N(V, t.__scopeMenu), i = S.useRef(null), a = e(n, i);
	return S.useEffect(() => {
		let e = i.current;
		if (e) return f(e);
	}, []), /* @__PURE__ */ C(W, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: v(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}), me = S.forwardRef((e, t) => {
	let n = N(V, e.__scopeMenu);
	return /* @__PURE__ */ C(W, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), he = n("MenuContent.ScrollLock"), W = S.forwardRef((t, n) => {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: f, disableOutsidePointerEvents: p, onEntryFocus: m, onEscapeKeyDown: ee, onPointerDownOutside: te, onFocusOutside: h, onInteractOutside: g, onDismiss: re, disableOutsideScroll: _, ...y } = t, b = N(V, r), x = F(V, r), w = j(r), ie = le(r), E = se(r), [oe, D] = S.useState(null), O = S.useRef(null), ce = e(n, O, b.onContentChange), k = S.useRef(0), A = S.useRef(""), M = S.useRef(0), P = S.useRef(null), I = S.useRef("right"), L = S.useRef(0), R = _ ? ne : S.Fragment, z = _ ? {
		as: he,
		allowPinchZoom: !0
	} : void 0, ue = (e) => {
		let t = A.current + e, n = E().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Ge(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			A.current = t, window.clearTimeout(k.current), t !== "" && (k.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	S.useEffect(() => () => window.clearTimeout(k.current), []), c();
	let B = S.useCallback((e) => I.current === P.current?.side && qe(e, P.current?.area), []);
	return /* @__PURE__ */ C(fe, {
		scope: r,
		searchRef: A,
		onItemEnter: S.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		onItemLeave: S.useCallback((e) => {
			B(e) || (O.current?.focus(), D(null));
		}, [B]),
		onTriggerLeave: S.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		pointerGraceTimerRef: M,
		onPointerGraceIntentChange: S.useCallback((e) => {
			P.current = e;
		}, []),
		children: /* @__PURE__ */ C(R, {
			...z,
			children: /* @__PURE__ */ C(d, {
				asChild: !0,
				trapped: a,
				onMountAutoFocus: v(o, (e) => {
					e.preventDefault(), O.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: f,
				children: /* @__PURE__ */ C(s, {
					asChild: !0,
					disableOutsidePointerEvents: p,
					onEscapeKeyDown: ee,
					onPointerDownOutside: te,
					onFocusOutside: h,
					onInteractOutside: g,
					onDismiss: re,
					children: /* @__PURE__ */ C(l, {
						asChild: !0,
						...ie,
						dir: x.dir,
						orientation: "vertical",
						loop: i,
						currentTabStopId: oe,
						onCurrentTabStopIdChange: D,
						onEntryFocus: v(m, (e) => {
							x.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ C(u, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": He(b.open),
							"data-radix-menu-content": "",
							dir: x.dir,
							...w,
							...y,
							ref: ce,
							style: {
								outline: "none",
								...y.style
							},
							onKeyDown: v(y.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && ue(e.key));
								let i = O.current;
								if (e.target !== i || !ae.includes(e.key)) return;
								e.preventDefault();
								let a = E().filter((e) => !e.disabled).map((e) => e.ref.current);
								T.includes(e.key) && a.reverse(), Ue(a);
							}),
							onBlur: v(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(k.current), A.current = "");
							}),
							onPointerMove: v(t.onPointerMove, $((e) => {
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
var ge = "MenuGroup", G = S.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(x.div, {
		role: "group",
		...r,
		ref: t
	});
});
G.displayName = ge;
var _e = "MenuLabel", ve = S.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(x.div, {
		...r,
		ref: t
	});
});
ve.displayName = _e;
var K = "MenuItem", ye = "menu.itemSelect", q = S.forwardRef((t, n) => {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = S.useRef(null), s = F(K, t.__scopeMenu), c = H(K, t.__scopeMenu), l = e(n, o), u = S.useRef(!1), d = () => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(ye, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(ye, (e) => i?.(e), { once: !0 }), b(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	};
	return /* @__PURE__ */ C(be, {
		...a,
		ref: l,
		disabled: r,
		onClick: v(t.onClick, d),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), u.current = !0;
		},
		onPointerUp: v(t.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: v(t.onKeyDown, (e) => {
			let t = c.searchRef.current !== "";
			r || t && e.key === " " || w.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
q.displayName = K;
var be = S.forwardRef((t, n) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = H(K, r), c = le(r), l = S.useRef(null), u = e(n, l), [d, f] = S.useState(!1), [p, m] = S.useState("");
	return S.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ C(O.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ C(ee, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ C(x.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: v(t.onPointerMove, $((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: v(t.onPointerLeave, $((e) => s.onItemLeave(e))),
				onFocus: v(t.onFocus, () => f(!0)),
				onBlur: v(t.onBlur, () => f(!1))
			})
		})
	});
}), xe = "MenuCheckboxItem", Se = S.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ C(ke, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ C(q, {
			role: "menuitemcheckbox",
			"aria-checked": Z(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Q(n),
			onSelect: v(i.onSelect, () => r?.(Z(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Se.displayName = xe;
var Ce = "MenuRadioGroup", [we, Te] = k(Ce, {
	value: void 0,
	onValueChange: () => {}
}), Ee = S.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = g(r);
	return /* @__PURE__ */ C(we, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ C(G, {
			...i,
			ref: t
		})
	});
});
Ee.displayName = Ce;
var De = "MenuRadioItem", Oe = S.forwardRef((e, t) => {
	let { value: n, ...r } = e, i = Te(De, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ C(ke, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ C(q, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Q(a),
			onSelect: v(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
Oe.displayName = De;
var J = "MenuItemIndicator", [ke, Ae] = k(J, { checked: !1 }), je = S.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Ae(J, n);
	return /* @__PURE__ */ C(y, {
		present: r || Z(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ C(x.span, {
			...i,
			ref: t,
			"data-state": Q(a.checked)
		})
	});
});
je.displayName = J;
var Me = "MenuSeparator", Ne = S.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(x.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
Ne.displayName = Me;
var Pe = "MenuArrow", Fe = S.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(a, {
		...j(n),
		...r,
		ref: t
	});
});
Fe.displayName = Pe;
var Y = "MenuSub", [Ie, Le] = k(Y), Re = (e) => {
	let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e, a = N(Y, t), o = j(t), [s, c] = S.useState(null), [l, u] = S.useState(null), d = g(i);
	return S.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]), /* @__PURE__ */ C(h, {
		...o,
		children: /* @__PURE__ */ C(M, {
			scope: t,
			open: r,
			onOpenChange: d,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ C(Ie, {
				scope: t,
				contentId: m(),
				triggerId: m(),
				trigger: s,
				onTriggerChange: c,
				children: n
			})
		})
	});
};
Re.displayName = Y;
var X = "MenuSubTrigger", ze = S.forwardRef((e, n) => {
	let r = N(X, e.__scopeMenu), i = F(X, e.__scopeMenu), a = Le(X, e.__scopeMenu), o = H(X, e.__scopeMenu), s = S.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: e.__scopeMenu }, d = S.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	return S.useEffect(() => d, [d]), S.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]), /* @__PURE__ */ C(R, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ C(be, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": r.open ? a.contentId : void 0,
			"data-state": He(r.open),
			...e,
			ref: t(n, a.onTriggerChange),
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: v(e.onPointerMove, $((t) => {
				o.onItemEnter(t), !t.defaultPrevented && !e.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: v(e.onPointerLeave, $((e) => {
				d();
				let t = r.content?.getBoundingClientRect();
				if (t) {
					let n = r.content?.dataset.side, i = n === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
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
								x: s,
								y: t.bottom
							}
						],
						side: n
					}), window.clearTimeout(c.current), c.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: v(e.onKeyDown, (t) => {
				let n = o.searchRef.current !== "";
				e.disabled || n && t.key === " " || E[i.dir].includes(t.key) && (r.onOpenChange(!0), r.content?.focus(), t.preventDefault());
			})
		})
	});
});
ze.displayName = X;
var Be = "MenuSubContent", Ve = S.forwardRef((t, n) => {
	let r = B(V, t.__scopeMenu), { forceMount: i = r.forceMount, align: a = "start", ...o } = t, s = N(V, t.__scopeMenu), c = F(V, t.__scopeMenu), l = Le(Be, t.__scopeMenu), u = S.useRef(null), d = e(n, u);
	return /* @__PURE__ */ C(O.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ C(y, {
			present: i || s.open,
			children: /* @__PURE__ */ C(O.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ C(W, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...o,
					ref: d,
					align: a,
					side: c.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						c.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: v(t.onFocusOutside, (e) => {
						e.target !== l.trigger && s.onOpenChange(!1);
					}),
					onEscapeKeyDown: v(t.onEscapeKeyDown, (e) => {
						c.onClose(), e.preventDefault();
					}),
					onKeyDown: v(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = oe[c.dir].includes(e.key);
						t && n && (s.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
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

//# sourceMappingURL=dist-BGsU4-FB.js.map