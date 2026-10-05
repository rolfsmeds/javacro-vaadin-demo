import { n as e } from "./chunk-DiqZc92J.js";
import { a as t, c as n, d as r, n as i, o as a, t as o } from "./dom-utils-Cuv93-tQ.js";
import { a as s, i as c, n as l, r as u } from "./copilot-ui-state-Dc6l_5DA.js";
import { i as d, n as f } from "./copilot-modes-wJyMqHUb.js";
import { n as p, t as m } from "./copilot-stored-machine-state-D6qB_Peh.js";
import { n as h, t as g } from "./track-active-mode-event-DkX0nsC6.js";
//#region frontend/copilot/shared/os-utils.ts
function _() {
	let e = window.navigator.userAgent;
	return e.indexOf("Windows") === -1 ? e.indexOf("Mac") === -1 ? e.indexOf("Linux") === -1 ? null : "Linux" : "Mac" : "Windows";
}
function v() {
	return _() === "Mac";
}
function y() {
	return v() ? "⌘" : "Ctrl";
}
var b = e((() => {}));
//#endregion
//#region frontend/copilot/copilot-shortcuts.ts
function x(e) {
	if ((e.ctrlKey || e.metaKey) && e.key === "c" && !e.shiftKey) {
		let e = document.querySelector("copilot-main")?.shadowRoot, t;
		if (t = typeof e?.getSelection == "function" ? e?.getSelection() : document.getSelection() ?? void 0, t && t.rangeCount === 1) {
			let e = t.getRangeAt(0).commonAncestorContainer;
			if (e.nodeType === Node.TEXT_NODE) return r(e);
		}
	}
	return !1;
}
function S(e) {
	let t = i(e, "vaadin-context-menu-overlay");
	if (!t) return !1;
	let n = t.owner;
	return n ? !!i(n, "copilot-component-overlay") : !1;
}
function C() {
	return l.idePluginState?.supportedActions?.find((e) => e === "undo");
}
function w(e) {
	let t = e;
	if (o(e)) return !0;
	let n = a(t);
	for (let e of n) if (o(e)) return !0;
	return !1;
}
var T, E, D, O, k, A, j, M, N, P, F = e((() => {
	s(), u(), b(), m(), n(), d(), g(), T = !1, E = 0, D = (e) => {
		if (p.isActivationShortcut() && p.getToolbarExpandMode() !== "never") if (e.key === "Shift" && !e.ctrlKey && !e.altKey && !e.metaKey) T = !0;
		else if (T && e.shiftKey && (e.key === "Control" || e.key === "Meta")) {
			if (E++, E === 2) return l.activeMode === "play" ? l.lastNonPlayMode === void 0 ? l.setActiveMode("edit", !0) : l.setActiveMode(l.lastNonPlayMode, !0) : l.setActiveMode("play", !0), h(), E = 0, !0;
			setTimeout(() => {
				E = 0;
			}, 500);
		} else E = 0;
		return !1;
	}, O = (e) => {
		if (D(e)) {
			e.stopPropagation();
			return;
		}
		if (f()?.appInteractable) return;
		let n = t();
		if (!n) return;
		let r = S(n), a = i(n, "vaadin-dialog") ?? (n.localName === "vaadin-dialog" ? n : null), o = a !== null && a.hasAttribute("panel-container"), s = n.localName === "copilot-main", u = i(n, "copilot-outline-panel") !== null, d = i(n, "copilot-toolbar") !== null;
		if (!s && !r && e.key !== "Escape" && !u && !d) {
			e.stopPropagation();
			return;
		}
		let p = !0, m = !1;
		if (x(e)) p = !1;
		else if (e.key === "Escape") {
			if (l.loginCheckActive && l.setLoginCheckActive(!1), w(n)) {
				e.stopPropagation();
				return;
			}
			c.emit("escape-key-pressed", { event: e });
		} else j(e) && l.activeMode === "edit" && (!o || u) ? (c.emit("delete-selected", {}), m = !0) : (e.ctrlKey || e.metaKey) && e.key === "d" && l.activeMode === "edit" && (!o || u) ? (c.emit("duplicate-selected", {}), m = !0) : (e.ctrlKey || e.metaKey) && e.key === "b" && (!o || u) ? (c.emit("show-selected-in-ide", { attach: e.shiftKey }), m = !0) : (e.ctrlKey || e.metaKey) && e.key === "z" && C() && (!o || u) ? (c.emit("undoRedo", { undo: !e.shiftKey }), m = !0) : x(e) || c.emit("keyboard-event", { event: e });
		l.setMultiSelectionOn(A(e)), p && e.stopPropagation(), m && e.preventDefault();
	}, k = (e) => {
		f()?.appInteractable || t() && A(e) && l.setMultiSelectionOn(!1);
	}, A = (e) => (e.key === "Control" || e.key === "Meta") && !e.shiftKey && !e.altKey, j = (e) => (e.key === "Backspace" || e.key === "Delete") && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey, M = y(), N = "⇧", P = {
		toggleCopilot: `<kbd>${N} + ${M} ${M}</kbd>`,
		openAiPopover: `<kbd>${N} + Space</kbd>`,
		undo: `<kbd>${M} + Z</kbd>`,
		redo: `<kbd>${M} + ${N} + Z</kbd>`,
		duplicate: `<kbd>${M} + D</kbd>`,
		goToSource: `<kbd>${M} + B</kbd>`,
		goToAttachSource: `<kbd>${M} + ${N} + B</kbd>`,
		selectParent: "<kbd>←</kbd>",
		selectPreviousSibling: "<kbd>↑</kbd>",
		selectNextSibling: "<kbd>↓</kbd>",
		delete: "<kbd>DEL</kbd>",
		copy: `<kbd>${M} + C</kbd>`,
		paste: `<kbd>${M} + V</kbd>`
	};
}));
//#endregion
export { P as a, F as i, k as n, O as r, D as t };
