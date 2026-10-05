import { n as e } from "./chunk-DiqZc92J.js";
import { _ as t, at as n, dt as r, g as i, n as a, r as o, st as s, t as c, u as l } from "./icons-CwakCZgK.js";
import { l as u, o as d } from "./consts-CSALuSsm.js";
import { a as f, c as p, d as m, i as h, l as g, n as _, o as v, r as y, s as b, t as x } from "./section-panel-ui-state-hOj_RfX_.js";
import { a as S, i as C, n as w, r as T } from "./copilot-ui-state-Dc6l_5DA.js";
import { r as E, t as D } from "./stats-CRkPKCLQ.js";
import { n as O, t as k } from "./base-panel-Fr0D1ZcU.js";
import { n as A, t as j } from "./copilot-message-box-CVAh5PSs.js";
//#region frontend/copilot/plugins/copilot-feedback/copilot-feedback-plugin.ts
var M, N, P, F, I, L, R, z, B;
//#endregion
e((() => {
	b(), O(), h(), o(), n(), j(), i(), u(), S(), a(), x(), D(), T(), v(), M = "https://github.com/vaadin", N = "https://github.com/vaadin/copilot/issues/new", P = "?template=feature_request.md&title=%5BFEATURE%5D", F = "A short, concise description of the bug and why you consider it a bug. Any details like exceptions and logs can be helpful as well.", I = "Please provide as many details as possible, this will help us deliver a fix as soon as possible.%0AThank you!%0A%0A%23%23%23 Description of the Bug%0A%0A{description}%0A%0A%23%23%23 Expected Behavior%0A%0AA description of what you would expect to happen. (Sometimes it is clear what the expected outcome is if something does not work, other times, it is not super clear.)%0A%0A%23%23%23 Minimal Reproducible Example%0A%0AWe would appreciate the minimum code with which we can reproduce the issue.%0A%0A%23%23%23 Versions%0A{versionsInfo}", L = s({
		showForm: !0,
		submitDisabled: !1
	}), R = class extends k {
		constructor() {
			super(), this.description = "", this.types = [
				{
					label: "General feedback",
					value: "feedback",
					ghTitle: ""
				},
				{
					label: "Report a bug",
					value: "bug",
					ghTitle: "[BUG]"
				},
				{
					label: "Ask a question",
					value: "question",
					ghTitle: "[QUESTION]"
				},
				{
					label: "Share an idea",
					value: "idea",
					ghTitle: "[FEATURE]"
				}
			], this.type = this.types[0].value, this.topics = [
				{
					label: "Generic",
					value: "platform"
				},
				{
					label: "Flow",
					value: "flow"
				},
				{
					label: "Hilla",
					value: "hilla"
				},
				{
					label: "Copilot",
					value: "copilot"
				}
			], this.topic = this.topics[0].value;
		}
		connectedCallback() {
			super.connectedCallback(), this.classList.add("contents");
		}
		willUpdate(e) {
			super.willUpdate(e), this.syncFooterState();
		}
		syncFooterState() {
			let e = this.message === void 0, t = this.type === "question" && !this.email;
			(L.showForm !== e || L.submitDisabled !== t) && r(() => {
				L.showForm = e, L.submitDisabled = t;
			});
		}
		getPreferredHeight() {
			return 620;
		}
		render() {
			return l`<div class="flex flex-col gap-4 pb-4 px-4">${this.renderContent()}</div>`;
		}
		renderContent() {
			return this.message === void 0 ? l`
          ${A("info", "Your feedback means a lot to us. Whether you've encountered an issue, have a question, or have ideas to improve our platform, we'd love to hear from you. Feel free to leave your email and we'll get back to you — you can also share a code snippet to help us better understand your experience.", void 0, { icon: c.favorite })}
          <vaadin-radio-group
            label="Type"
            theme="toggle"
            .value="${this.type}"
            @value-changed=${(e) => {
				this.type = e.detail.value;
			}}>
            ${this.types.map((e) => l`<vaadin-radio-button .value="${e.value}" label="${e.label}"></vaadin-radio-button>`)}
          </vaadin-radio-group>
          <vaadin-select
            label="Topic"
            overlay-class="alwaysVisible"
            .items=${this.topics}
            .value="${this.topic}"
            .hidden=${this.type !== "feedback"}
            @value-changed=${(e) => {
				this.topic = e.detail.value;
			}}>
          </vaadin-select>
          <vaadin-text-area
            min-rows="3"
            .value="${this.description}"
            @keydown=${this.keyDown}
            @focus=${() => {
				this.descriptionField.invalid = !1, this.descriptionField.placeholder = "";
			}}
            @value-changed=${(e) => {
				this.description = e.detail.value;
			}}
            label="Your Feedback"
            placeholder="What happened, what you expected, or what you'd change..."></vaadin-text-area>
          <vaadin-email-field
            @keydown=${this.keyDown}
            @value-changed=${(e) => {
				this.email = e.detail.value;
			}}
            .required=${this.type === "question"}
            id="email"
            value="${w.userInfo?.email}"
            label="Email${this.type === "question" ? "" : " (optional)"}"></vaadin-email-field>
        ` : l`<p class="m-0">${this.message}</p>`;
		}
		createGithubIssue() {
			C.emit("system-info-with-callback", {
				callback: (e) => this.openGithub(e, this),
				notify: !1
			});
		}
		close() {
			_.closePanel("copilot-feedback-panel");
		}
		submit() {
			if (E("feedback", {
				github: !1,
				type: this.type,
				topic: this.topic
			}), this.description.trim() === "") {
				this.descriptionField.invalid = !0, this.descriptionField.placeholder = "Please tell us more before sending", this.descriptionField.value = "";
				return;
			}
			let e = {
				description: this.description,
				email: this.email,
				type: this.type,
				topic: this.topic
			};
			C.emit("system-info-with-callback", {
				callback: (n) => t(`${d}feedback`, {
					...e,
					versions: n
				}),
				notify: !1
			}), this.parentNode?.style.setProperty("--section-height", "150px"), this.message = "Thank you for sharing feedback.";
		}
		keyDown(e) {
			(e.key === "Backspace" || e.key === "Delete") && e.stopPropagation();
		}
		openGithub(e, t) {
			if (E("feedback", {
				github: !0,
				type: this.type,
				topic: this.topic
			}), this.type === "idea") {
				window.open(`${N}${P}`);
				return;
			}
			if (this.type === "feedback") {
				window.open(`${M}/${this.topic}/issues/new`);
				return;
			}
			let n = e ? e.replace(/\n/g, "%0A") : "Activate Copilot to include version info.", r = `${t.types.find((e) => e.value === this.type)?.ghTitle}`, i = t.description === "" ? F : t.description, a = I.replace("{description}", i).replace("{versionsInfo}", n);
			window.open(`${N}?title=${r}&body=${a}`, "_blank")?.focus();
		}
	}, f([g()], R.prototype, "description", void 0), f([g()], R.prototype, "type", void 0), f([g()], R.prototype, "topic", void 0), f([g()], R.prototype, "email", void 0), f([g()], R.prototype, "message", void 0), f([g()], R.prototype, "types", void 0), f([g()], R.prototype, "topics", void 0), f([p("vaadin-text-area")], R.prototype, "descriptionField", void 0), R = f([m("copilot-feedback-panel")], R), z = class extends y {
		createRenderRoot() {
			return this;
		}
		connectedCallback() {
			super.connectedCallback(), this.classList.add("contents");
		}
		getPanel() {
			return this.closest("vaadin-dialog")?.querySelector("copilot-feedback-panel") ?? null;
		}
		render() {
			return L.showForm ? l`
      <vaadin-button
        style="margin-inline-end: auto"
        theme="tertiary"
        @click=${() => this.getPanel()?.createGithubIssue()}>
        <vaadin-icon slot="prefix" .svg="${c.github}"></vaadin-icon>
        Create GitHub Issue
      </vaadin-button>
      <vaadin-button theme="tertiary" @click=${() => this.getPanel()?.close()}>Cancel</vaadin-button>
      <vaadin-button
        theme="primary"
        ?disabled=${L.submitDisabled}
        @click=${() => this.getPanel()?.submit()}>
        Submit
      </vaadin-button>
    ` : l`<vaadin-button @click=${() => this.getPanel()?.close()}>Close</vaadin-button>`;
		}
	}, z = f([m("copilot-feedback-footer-actions")], z), B = {
		header: "Help Us Improve!",
		tag: "copilot-feedback-panel",
		footerActionsTag: "copilot-feedback-footer-actions",
		individual: !0
	}, window.Vaadin.copilot.plugins.push({ init(e) {
		e.addPanel(B);
	} }), _.addPanel(B);
}))();
export { z as CopilotFeedbackFooterActions, R as CopilotFeedbackPanel };
