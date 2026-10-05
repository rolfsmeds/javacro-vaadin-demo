import { n as e } from "./chunk-DiqZc92J.js";
import { $ as t, C as n, Q as r, et as i, n as a, o, r as s, t as c, u as l, y as u } from "./icons-CwakCZgK.js";
import { a as d, d as f, i as p, l as m, n as h, o as g, r as _, s as v, t as y } from "./section-panel-ui-state-hOj_RfX_.js";
import { n as b, r as x } from "./copilot-ui-state-Dc6l_5DA.js";
import { r as S, t as C } from "./stats-CRkPKCLQ.js";
import { n as w, t as T } from "./copilot-stored-machine-state-D6qB_Peh.js";
import { n as E, r as D } from "./copilot-notification-CCNJdNg4.js";
import { n as O, t as k } from "./early-project-state-LGwavSyI.js";
import { a as A, i as j, s as M, t as N } from "./copilot-development-setup-user-guide-utils-DzEVQbWO.js";
//#region frontend/copilot/copilot-devtools/copilot-devtools.ts
var P, F, I, L, R;
//#endregion
e((() => {
	v(), s(), p(), x(), a(), M(), i(), y(), C(), O(), T(), E(), n(), g(), P = "bg-[linear-gradient(to_right,var(--amber-3),var(--amber-5),var(--amber-3),var(--amber-6))] dark:bg-[linear-gradient(to_right,var(--amber-5),var(--amber-7),var(--amber-5),var(--amber-8))]", F = "bg-[linear-gradient(to_right,var(--blue-3),var(--blue-5),var(--blue-3),var(--blue-6))] dark:bg-[linear-gradient(to_right,var(--blue-4),var(--blue-6),var(--blue-4),var(--blue-7))]", I = "bg-[linear-gradient(to_right,var(--ruby-3),var(--ruby-5),var(--ruby-3),var(--ruby-6))] dark:bg-[linear-gradient(to_right,var(--ruby-4),var(--ruby-6),var(--ruby-4),var(--ruby-7))]", L = "bg-[linear-gradient(to_right,var(--teal-3),var(--teal-5),var(--teal-3),var(--teal-6))] dark:bg-[linear-gradient(to_right,var(--teal-4),var(--teal-6),var(--teal-4),var(--teal-7))]", R = class extends _ {
		constructor(...e) {
			super(...e), this._helpExpanded = !1;
		}
		createRenderRoot() {
			return this;
		}
		connectedCallback() {
			super.connectedCallback(), this.classList.add("flex", "flex-col");
		}
		render() {
			return l`
      <header class="flex items-center pe-2 ps-4 py-2">
        <h2 class="font-bold gap-1 me-auto my-0 text-xs uppercase">Vaadin Copilot</h2>
        <vaadin-button
          aria-label="Close"
          theme="icon tertiary"
          @click=${() => {
				this.closePopover();
			}}>
          <vaadin-icon .svg="${c.close}"></vaadin-icon>
          <vaadin-tooltip slot="tooltip" text="Close"></vaadin-tooltip>
        </vaadin-button>
      </header>
      <div class="flex flex-col gap-4 pb-4 px-4">
        ${this.renderCopilotServerWarning()} ${this.renderUserButton()} ${this.renderDevelopmentWorkflow()}
        ${this.renderWelcomeToVersion()}
        <div class="bg-gray-3 dark:bg-gray-6 flex flex-col rounded-md">
          <vaadin-button
            @click="${this.handleAppInfoClick}"
            class="border-0 h-auto justify-start py-2"
            theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${c.info}"></vaadin-icon>
            App Info
          </vaadin-button>
          <vaadin-button @click="${this.handleAppLogClick}" class="border-0 h-auto justify-start py-2" theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${c.terminal}"></vaadin-icon>
            App Log
          </vaadin-button>
          <vaadin-button
            @click="${this.handleFeaturesClick}"
            class="border-0 h-auto justify-start py-2"
            theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${c.listAlt}"></vaadin-icon>
            Features
          </vaadin-button>
          ${k.springSecurityEnabled ? l`
                <vaadin-button
                  @click="${this.handleImpersonateAppUserClick}"
                  class="border-0 h-auto justify-start py-2"
                  theme="tertiary">
                  <vaadin-icon slot="prefix" .svg="${c.accountCircle}"></vaadin-icon>
                  Impersonate App User
                </vaadin-button>
              ` : o}
        </div>
        <div class="bg-gray-3 dark:bg-gray-6 flex flex-col rounded-md">
          <vaadin-button
            @click="${this.handleFeedbackClick}"
            class="border-0 h-auto justify-start py-2"
            theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${c.feedback}"></vaadin-icon>
            Feedback
          </vaadin-button>
          <vaadin-button
            @click="${this.toggleHelpAndSupport}"
            class="border-0 h-auto justify-start py-2"
            theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${c.help}"></vaadin-icon>
            Help & Support
            <vaadin-icon
              slot="suffix"
              .svg="${this._helpExpanded ? c.keyboardArrowUp : c.keyboardArrowDown}"></vaadin-icon>
          </vaadin-button>
          ${this._helpExpanded ? this.renderHelpLinks() : o}
          <vaadin-button
            @click="${this.handleSettingsClick}"
            class="border-0 h-auto justify-start py-2"
            theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${c.settings}"></vaadin-icon>
            Settings
          </vaadin-button>
        </div>
      </div>
    `;
		}
		renderUserButton() {
			let e = b.userInfo?.validLicense, t = e ? P : F, n = e ? "text-amber-12 dark:text-amber-11" : "text-blue-12 dark:text-blue-11", r = this.getUserName() !== "Log in";
			return l`
      <vaadin-button
        @click=${this.handleUserLoginClick}
        class="animate-gradient ${t} border-0 h-auto justify-start py-2 text-start ${r ? "gap-3 px-3" : "items-start"}">
        ${r ? this.renderUserImage() : l`<vaadin-icon
              class="text-blue-12 dark:text-blue-11"
              slot="prefix"
              .svg="${c.login}"></vaadin-icon>`}
        <span class="flex flex-col">
          <span>${this.getUserName()}</span>
          <span class="${n} text-xs">${this.getLicenseType()}</span>
        </span>
      </vaadin-button>
    `;
		}
		renderCopilotServerWarning() {
			return b.userInfo?.copilotServerReached === !1 ? l`
      <vaadin-button
        @click=${this.showCopilotServerTroubleshooting}
        class="animate-gradient ${I} border-0 h-auto items-start justify-start py-2 text-start"
        data-test-id="copilot-server-unreachable">
        <vaadin-tooltip slot="tooltip" text="Click here for troubleshooting"></vaadin-tooltip>
        <vaadin-icon class="text-ruby-12 dark:text-ruby-11" slot="prefix" .svg="${c.warning}"></vaadin-icon>
        <span class="flex flex-col">
          <span>Copilot server is unreachable</span>
          <span class="text-ruby-12 dark:text-ruby-11 text-xs">Check your proxy or firewall settings.</span>
        </span>
      </vaadin-button>
    ` : o;
		}
		showCopilotServerTroubleshooting() {
			D({
				type: t.WARNING,
				message: "Copilot server is unreachable",
				details: u(l`
        <p class="m-0">Copilot could not connect to the Copilot server.</p>
        <p class="mb-0 mt-2">To troubleshoot:</p>
        <ol class="mb-0 mt-1 ps-4">
          <li>Verify that this machine can reach the Copilot server and complete its TLS handshake:</li>
          <li class="list-none mt-1">
            <code
              class="bg-gray-3 dark:bg-gray-6 box-border inline-block pe-8 ps-3 py-1.75 relative rounded-md text-xs w-full"
              ><copilot-copy></copilot-copy>curl -Iv https://copilot.vaadin.com</code
            >
          </li>
          <li>Check that your firewall or network policy allows access to <code>copilot.vaadin.com</code>.</li>
          <li>If you use a proxy, verify its settings and that it trusts the server's SSL certificate.</li>
        </ol>
      `),
				delay: 3e4
			});
		}
		renderWelcomeToVersion() {
			let e = b.projectVersionReleaseNoteInfo;
			return e === null || w.getMostRecentReleaseNoteDismissed() || !e.mostRecentVersion || !e.url ? o : l`
      <div class="flex relative">
      <vaadin-button
        id="release-note-btn"
        data-test-id="release-note-btn"
        class="border-0 h-auto items-start justify-start px-3 py-2 text-start w-full"
        @click="${(t) => {
				window.open(e.url, "_blank");
			}}">
        <vaadin-icon class="text-blue-11" slot="prefix" .svg="${c.info}"></vaadin-icon>
        <span class="flex flex-col">
          <span>Welcome to Vaadin ${e.vaadinVersion}</span>
          <span class="text-blue-11 text-xs">Click for release notes</span>
        </span>
      </vaadin-button>
      <vaadin-button
        class="absolute end-0 top-0"
        id="dismiss-release-note-item"
        theme="icon tertiary"
        @click="${(e) => {
				e.stopPropagation(), w.setMostRecentReleaseNoteDismissed(!0);
			}}"
        ><vaadin-icon .svg="${c.close}"></vaadin-icon
        <vaadin-tooltip slot="tooltip" text="Dismiss"></vaadin-tooltip>
      </vaadin-button>
      </div>
    `;
		}
		renderUserImage() {
			return b.userInfo?.portraitUrl ? l`<img
        alt="${this.getUserName()}"
        class="rounded-full size-8 object-cover"
        slot="prefix"
        src="https://vaadin.com${b.userInfo.portraitUrl}" />` : o;
		}
		renderDevelopmentWorkflow() {
			let e = j(), t = A(), n = this.getDevelopmentWorkflowConfig(e, t), r = n?.bgClass ?? "", i = n?.colorClass ?? "", a = this.resolveIcon(n), o = n?.rotateIcon ? `rotate-180 ${i}` : i, s = this.resolveTitle(n), c = n?.displayMessage ?? "";
			return l`
      <vaadin-button
        data-test-id="development-workflow-btn"
        @click="${this.handleDevelopmentWorkflowClick}"
        class="animation-delay-4000 animate-gradient ${r} border-0 h-auto items-start justify-start py-2 text-start">
        <vaadin-icon class="${o}" slot="prefix" .svg="${a}"></vaadin-icon>
        <span class="flex flex-col">
          <span>${s}</span>
          <span class="text-xs ${i}">${c}</span>
        </span>
      </vaadin-button>
    `;
		}
		getDevelopmentWorkflowConfig(e, t) {
			let n = {
				bgClass: L,
				colorClass: "text-teal-11"
			};
			if (e === "warning" && t === "warning") return {
				...n,
				icon: c.wbIncandescent,
				rotateIcon: !0,
				title: "IDE plugin & Hotswap recommended",
				combinedTitle: !0,
				displayMessage: "Enable both for optimal development workflow"
			};
			if (e === "warning") return {
				...n,
				icon: c.wbIncandescent,
				rotateIcon: !0,
				title: "Hotswap recommended",
				displayMessage: "Applies changes without restarting"
			};
			if (t === "warning") return {
				...n,
				icon: c.code,
				getIcon: !0,
				title: "IDE plugin recommended",
				getTitle: !0,
				displayMessage: "Simplifies Hotswap setup & config"
			};
			if (e === "error") return {
				bgClass: I,
				colorClass: "text-ruby-11",
				icon: c.error,
				title: "Hotswap partially enabled",
				displayMessage: "View details"
			};
		}
		resolveIcon(e) {
			return e ? e.getIcon ? this.getIdeIcon() : e.icon : c.bolt;
		}
		resolveTitle(e) {
			return e ? e.combinedTitle ? this.getCombinedTitle() : e.getTitle ? this.getIdePluginName() : e.title : "Development Workflow";
		}
		getUserName() {
			return [b.userInfo?.firstName, b.userInfo?.lastName].filter(Boolean).join(" ") || "Log in";
		}
		getLicenseType() {
			return b.userInfo?.validLicense ? "" : "Unlock all Copilot features, including AI";
		}
		getIdeIcon() {
			switch (b.idePluginState?.ide) {
				case "intellij": return c.intelliJ;
				case "vscode": return c.vsCode;
				case "eclipse": return c.eclipse;
				default: return c.code;
			}
		}
		getIdePluginName() {
			switch (b.idePluginState?.ide) {
				case "intellij": return "Vaadin plugin for IntelliJ";
				case "vscode": return "Vaadin extension for VS Code";
				case "eclipse": return "Vaadin plugin for Eclipse";
				default: return "IDE plugin";
			}
		}
		getCombinedTitle() {
			switch (b.idePluginState?.ide) {
				case "intellij": return "IntelliJ plugin & Hotswap recommended";
				case "vscode": return "VS Code extension & Hotswap recommended";
				case "eclipse": return "Eclipse plugin & Hotswap recommended";
				default: return "IDE plugin & Hotswap recommended";
			}
		}
		closePopover() {
			let e = this.closest("vaadin-popover");
			e && (e.opened = !1);
		}
		handleUserLoginClick() {
			if (b.userInfo?.validLicense) {
				window.open("https://vaadin.com/myaccount", "_blank", "noopener");
				return;
			}
			b.setLoginCheckActive(!0);
		}
		handleDevelopmentWorkflowClick() {
			S("use-dev-workflow-guide"), h.openPanel(N), this.closePopover();
		}
		handleAppInfoClick() {
			h.openPanel(r.INFO), this.closePopover();
		}
		handleAppLogClick() {
			h.openPanel(r.LOG), this.closePopover();
		}
		handleFeaturesClick() {
			h.openPanel(r.FEATURES), this.closePopover();
		}
		handleImpersonateAppUserClick() {
			h.openPanel(r.IMPERSONATOR), this.closePopover();
		}
		handleSettingsClick() {
			h.openPanel(r.SETTINGS), this.closePopover();
		}
		handleFeedbackClick() {
			h.openPanel(r.FEEDBACK), this.closePopover();
		}
		toggleHelpAndSupport() {
			this._helpExpanded = !this._helpExpanded;
		}
		renderHelpLinks() {
			return l`
      <div class="flex flex-col ps-4">
        ${[
				{
					label: "Forum",
					icon: "forum",
					url: "https://vaadin.com/forum"
				},
				{
					label: "Docs",
					icon: "article",
					url: "https://vaadin.com/docs/latest/tools/copilot"
				},
				{
					label: "GitHub Issues",
					icon: "github",
					url: "https://github.com/vaadin/copilot/issues"
				}
			].map(({ label: e, icon: t, url: n }) => l`
            <vaadin-button
              @click="${() => window.open(n, "_blank", "noopener")}"
              class="border-0 h-auto justify-start py-2"
              theme="tertiary">
              <vaadin-icon slot="prefix" .svg="${c[t]}"></vaadin-icon>
              ${e}
            </vaadin-button>
          `)}
      </div>
    `;
		}
	}, d([m()], R.prototype, "_helpExpanded", void 0), R = d([f("copilot-devtools")], R);
}))();
