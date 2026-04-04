import { a as e, c as t, i as n, n as r, o as i, r as a, s as o, t as s } from "./sdkwork-theme-COqRpx_e.js";
import { createContext as c, useContext as l, useEffect as u, useMemo as d, useState as f } from "react";
import { jsx as p } from "react/jsx-runtime";
//#region src/theme/theme-provider.tsx
var m = c(null);
function h() {
	return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function g({ children: t, className: n, defaultTheme: r = "system", dir: i, locale: a, onThemeSelectionChange: s, overrides: c, themeColor: l = "lobster", themeSelection: g }) {
	let [_, v] = f(r), [y, b] = f(() => h()), x = g ?? _, S = x === "system" ? y : x, C = d(() => e({
		...c,
		colorMode: S,
		themeColor: l
	}), [
		S,
		c,
		l
	]), w = d(() => o(C, l), [C, l]);
	u(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia("(prefers-color-scheme: light)"), t = (e) => {
			b(e.matches ? "light" : "dark");
		};
		return b(e.matches ? "light" : "dark"), e.addEventListener?.("change", t), e.addListener?.(t), () => {
			e.removeEventListener?.("change", t), e.removeListener?.(t);
		};
	}, []), u(() => {
		if (typeof document > "u") return;
		let e = document.documentElement, t = {
			dir: e.getAttribute("dir"),
			lang: e.getAttribute("lang"),
			theme: e.getAttribute("data-theme"),
			sdkColorMode: e.getAttribute("data-sdk-color-mode")
		}, n = e.classList.contains("dark"), r = Object.keys(w).map((t) => [t, e.style.getPropertyValue(t)]);
		return e.setAttribute("data-theme", l), e.setAttribute("data-sdk-color-mode", S), a ? e.setAttribute("lang", a) : e.removeAttribute("lang"), i ? e.setAttribute("dir", i) : e.removeAttribute("dir"), e.classList.toggle("dark", S === "dark"), Object.entries(w).forEach(([t, n]) => {
			e.style.setProperty(t, String(n));
		}), () => {
			e.classList.toggle("dark", n), t.sdkColorMode ? e.setAttribute("data-sdk-color-mode", t.sdkColorMode) : e.removeAttribute("data-sdk-color-mode"), t.theme ? e.setAttribute("data-theme", t.theme) : e.removeAttribute("data-theme"), t.dir ? e.setAttribute("dir", t.dir) : e.removeAttribute("dir"), t.lang ? e.setAttribute("lang", t.lang) : e.removeAttribute("lang"), r.forEach(([t, n]) => {
				n ? e.style.setProperty(t, n) : e.style.removeProperty(t);
			});
		};
	}, [
		S,
		i,
		w,
		a,
		l
	]);
	let T = (e) => {
		g === void 0 && v(e), s?.(e);
	}, E = d(() => ({
		colorMode: S,
		themeColor: l,
		setThemeSelection: T,
		themeSelection: x
	}), [
		S,
		T,
		l,
		x
	]);
	return /* @__PURE__ */ p(m.Provider, {
		value: E,
		children: /* @__PURE__ */ p("div", {
			className: n,
			dir: i,
			"data-sdk-color-mode": S,
			"data-theme": l,
			"data-sdk-theme-provider": "",
			lang: a,
			style: w,
			children: t
		})
	});
}
function _() {
	return l(m) ?? {
		colorMode: "dark",
		themeColor: "lobster",
		setThemeSelection: () => void 0,
		themeSelection: "system"
	};
}
//#endregion
//#region src/theme/shell-bridge-provider.tsx
var v = {
	dateRangePicker: {
		endDate: "End date",
		placeholder: "Select date range",
		presets: "Range presets",
		rangeLimitDay: "day",
		rangeLimitDays: "days",
		rangeLimitExceeded: "Range cannot exceed {amount} {unit}",
		rangeLimitHour: "hour",
		rangeLimitHours: "hours",
		selectEndDate: "Select end date",
		startDate: "Start date",
		to: "to"
	},
	windowControls: {
		close: "Close window",
		maximize: "Maximize window",
		minimize: "Minimize window",
		restore: "Restore window"
	}
};
function y(e) {
	if (e instanceof Date) return Number.isNaN(e.getTime()) ? null : e;
	if (typeof e == "number") {
		let t = new Date(e);
		return Number.isNaN(t.getTime()) ? null : t;
	}
	if (typeof e == "string") {
		let t = e.trim();
		if (!t) return null;
		if (/^\d{4}-\d{2}-\d{2}$/.test(t)) {
			let [e, n, r] = t.split("-").map(Number), i = new Date(e, n - 1, r);
			return Number.isNaN(i.getTime()) ? null : i;
		}
		let n = new Date(t);
		return Number.isNaN(n.getTime()) ? null : n;
	}
	return null;
}
function b(e) {
	return {
		formatDate(t, n) {
			let r = y(t);
			return r ? new Intl.DateTimeFormat(e, n).format(r) : "";
		},
		formatDateTime(t, n) {
			let r = y(t);
			return r ? new Intl.DateTimeFormat(e, n ?? {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(r) : "";
		},
		locale: e
	};
}
function x(e, t) {
	return t ? {
		dateRangePicker: {
			...e.dateRangePicker,
			...t.dateRangePicker
		},
		windowControls: {
			...e.windowControls,
			...t.windowControls
		}
	} : e;
}
var S = c({
	actions: {},
	dir: "ltr",
	formatters: b("en-US"),
	locale: "en-US",
	messages: v,
	preferences: {
		colorMode: "dark",
		themeColor: "lobster",
		themeSelection: "system"
	},
	session: void 0
});
function C({ children: e, className: t, messages: n, overrides: r, value: i }) {
	let a = l(S), o = i?.locale ?? a.locale, s = d(() => b(o), [o]), c = d(() => ({
		...s,
		...i?.formatters,
		locale: i?.formatters?.locale ?? s.locale
	}), [s, i?.formatters]), u = d(() => x(a.messages, n), [a.messages, n]), f = d(() => ({
		colorMode: i?.preferences?.colorMode ?? a.preferences.colorMode,
		themeColor: i?.preferences?.themeColor ?? a.preferences.themeColor,
		themeSelection: i?.preferences?.themeSelection ?? a.preferences.themeSelection
	}), [
		a.preferences.colorMode,
		a.preferences.themeColor,
		a.preferences.themeSelection,
		i?.preferences?.colorMode,
		i?.preferences?.themeColor,
		i?.preferences?.themeSelection
	]), m = d(() => ({
		actions: i?.actions ?? a.actions,
		dir: i?.dir ?? a.dir,
		formatters: c,
		locale: o,
		messages: u,
		preferences: f,
		session: i?.session ?? a.session
	}), [
		a.actions,
		a.dir,
		a.session,
		o,
		c,
		u,
		f,
		i?.actions,
		i?.dir,
		i?.session
	]);
	return /* @__PURE__ */ p(S.Provider, {
		value: m,
		children: /* @__PURE__ */ p(g, {
			className: t,
			dir: m.dir,
			locale: m.locale,
			onThemeSelectionChange: m.actions.setThemeSelection,
			overrides: r,
			themeColor: m.preferences.themeColor,
			themeSelection: m.preferences.themeSelection,
			children: e
		})
	});
}
function w() {
	return l(S);
}
//#endregion
//#region src/theme/surface-recipes.ts
function T(e) {
	return e === "accent" ? "var(--sdk-color-brand-accent)" : e === "brand" ? "var(--sdk-color-brand-primary)" : e === "success" ? "var(--sdk-color-state-success)" : e === "warning" ? "var(--sdk-color-state-warning)" : e === "danger" ? "var(--sdk-color-state-danger)" : "var(--sdk-color-text-muted)";
}
function E(e, t = {}) {
	let n = t.backgroundWeight ?? 14, r = t.borderWeight ?? 28, i = T(e);
	return {
		backgroundColor: `color-mix(in srgb, ${i} ${n}%, transparent)`,
		borderColor: `color-mix(in srgb, ${i} ${r}%, transparent)`,
		color: i
	};
}
function D(e, t = {}) {
	let n = t.backgroundWeight ?? 10, r = t.borderWeight ?? 30, i = t.surfaceColor ?? "var(--sdk-color-surface-panel)", a = t.surfaceWeight ?? 96, o = T(e);
	return {
		backgroundImage: `linear-gradient(180deg, color-mix(in srgb, ${o} ${n}%, transparent), color-mix(in srgb, ${i} ${a}%, white))`,
		borderColor: `color-mix(in srgb, ${o} ${r}%, transparent)`
	};
}
function O(e, t = {}) {
	let n = t.backgroundWeight ?? 14, r = t.borderWeight ?? 28, i = t.surfaceColor ?? "var(--sdk-color-surface-panel)", a = t.surfaceWeight ?? 86, o = T(e);
	return {
		backgroundColor: `color-mix(in srgb, ${i} 18%, transparent)`,
		backgroundImage: `linear-gradient(180deg, color-mix(in srgb, ${o} ${n}%, transparent), color-mix(in srgb, ${i} ${a}%, transparent))`,
		borderColor: `color-mix(in srgb, ${o} ${r}%, transparent)`
	};
}
function k() {
	return { backgroundImage: "radial-gradient(circle at top left, color-mix(in srgb, var(--sdk-color-brand-primary) 14%, transparent), transparent 38%), radial-gradient(circle at top right, color-mix(in srgb, var(--sdk-color-brand-accent) 10%, transparent), transparent 42%)" };
}
function A() {
	return { backgroundImage: "radial-gradient(circle at top right, color-mix(in srgb, var(--sdk-color-brand-accent) 18%, transparent), transparent 34%), radial-gradient(circle at bottom left, color-mix(in srgb, var(--sdk-color-brand-primary) 16%, transparent), transparent 38%), linear-gradient(135deg, color-mix(in srgb, var(--sdk-color-surface-canvas) 42%, black), color-mix(in srgb, var(--sdk-color-surface-panel) 44%, black) 48%, color-mix(in srgb, var(--sdk-color-surface-elevated) 56%, black))" };
}
//#endregion
export { s as CLAW_DARK_THEME, r as CLAW_LIGHT_THEME, a as SDKWORK_DARK_THEME, n as SDKWORK_LIGHT_THEME, C as SdkworkShellBridgeProvider, g as SdkworkThemeProvider, k as createSdkworkBackdropStyle, O as createSdkworkGlassStyle, A as createSdkworkHeroStyle, D as createSdkworkPanelStyle, e as createSdkworkTheme, E as createSdkworkToneStyle, i as createThemeCssVariables, o as createThemeHostCssVariables, t as createThemeStyle, w as useSdkworkShellBridge, _ as useSdkworkTheme };

//# sourceMappingURL=theme.js.map