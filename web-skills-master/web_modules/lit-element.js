import {
  i as t,
  p as e,
  r as s,
  t as r,
  m as i,
  T as o,
  a as n,
  b as a,
} from "./common/lit-html-6bb77aec.js";
export { h as html } from "./common/lit-html-6bb77aec.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ function p(t, e) {
  const {
      element: { content: s },
      parts: r,
    } = t,
    i = document.createTreeWalker(s, 133, null, !1);
  let o = d(r),
    n = r[o],
    a = -1,
    p = 0;
  const h = [];
  let c = null;
  for (; i.nextNode(); ) {
    a++;
    const t = i.currentNode;
    for (
      t.previousSibling === c && (c = null),
        e.has(t) && (h.push(t), null === c && (c = t)),
        null !== c && p++;
      void 0 !== n && n.index === a;

    )
      (n.index = null !== c ? -1 : n.index - p), (o = d(r, o)), (n = r[o]);
  }
  h.forEach((t) => t.parentNode.removeChild(t));
}
const c = (t) => {
    let e = 11 === t.nodeType ? 0 : 1;
    const s = document.createTreeWalker(t, 133, null, !1);
    for (; s.nextNode(); ) e++;
    return e;
  },
  d = (e, s = -1) => {
    for (let r = s + 1; r < e.length; r++) {
      const s = e[r];
      if (t(s)) return r;
    }
    return -1;
  };
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const l = (t, e) => `${t}--${e}`;
let u = !0;
void 0 === window.ShadyCSS
  ? (u = !1)
  : void 0 === window.ShadyCSS.prepareTemplateDom &&
    (console.warn(
      "Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."
    ),
    (u = !1));
const y = (t) => (e) => {
    const s = l(e.type, t);
    let n = r.get(s);
    void 0 === n &&
      ((n = { stringsArray: new WeakMap(), keyString: new Map() }),
      r.set(s, n));
    let a = n.stringsArray.get(e.strings);
    if (void 0 !== a) return a;
    const p = e.strings.join(i);
    if (((a = n.keyString.get(p)), void 0 === a)) {
      const s = e.getTemplateElement();
      u && window.ShadyCSS.prepareTemplateDom(s, t),
        (a = new o(e, s)),
        n.keyString.set(p, a);
    }
    return n.stringsArray.set(e.strings, a), a;
  },
  S = ["html", "svg"],
  _ = new Set(),
  f = (t, e, s) => {
    _.add(t);
    const i = s ? s.element : document.createElement("template"),
      o = e.querySelectorAll("style"),
      { length: n } = o;
    if (0 === n) return void window.ShadyCSS.prepareTemplateStyles(i, t);
    const a = document.createElement("style");
    for (let t = 0; t < n; t++) {
      const e = o[t];
      e.parentNode.removeChild(e), (a.textContent += e.textContent);
    }
    ((t) => {
      S.forEach((e) => {
        const s = r.get(l(e, t));
        void 0 !== s &&
          s.keyString.forEach((t) => {
            const {
                element: { content: e },
              } = t,
              s = new Set();
            Array.from(e.querySelectorAll("style")).forEach((t) => {
              s.add(t);
            }),
              p(t, s);
          });
      });
    })(t);
    const h = i.content;
    s
      ? (function (t, e, s = null) {
          const {
            element: { content: r },
            parts: i,
          } = t;
          if (null == s) return void r.appendChild(e);
          const o = document.createTreeWalker(r, 133, null, !1);
          let n = d(i),
            a = 0,
            p = -1;
          for (; o.nextNode(); ) {
            for (
              p++,
                o.currentNode === s &&
                  ((a = c(e)), s.parentNode.insertBefore(e, s));
              -1 !== n && i[n].index === p;

            ) {
              if (a > 0) {
                for (; -1 !== n; ) (i[n].index += a), (n = d(i, n));
                return;
              }
              n = d(i, n);
            }
          }
        })(s, a, h.firstChild)
      : h.insertBefore(a, h.firstChild),
      window.ShadyCSS.prepareTemplateStyles(i, t);
    const u = h.querySelector("style");
    if (window.ShadyCSS.nativeShadow && null !== u)
      e.insertBefore(u.cloneNode(!0), e.firstChild);
    else if (s) {
      h.insertBefore(a, h.firstChild);
      const t = new Set();
      t.add(a), p(s, t);
    }
  };
window.JSCompiler_renameProperty = (t, e) => t;
const m = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          return t ? "" : null;
        case Object:
        case Array:
          return null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      switch (e) {
        case Boolean:
          return null !== t;
        case Number:
          return null === t ? null : Number(t);
        case Object:
        case Array:
          return JSON.parse(t);
      }
      return t;
    },
  },
  g = (t, e) => e !== t && (e == e || t == t),
  w = { attribute: !0, type: String, converter: m, reflect: !1, hasChanged: g };
class P extends HTMLElement {
  constructor() {
    super(),
      (this._updateState = 0),
      (this._instanceProperties = void 0),
      (this._updatePromise = new Promise(
        (t) => (this._enableUpdatingResolver = t)
      )),
      (this._changedProperties = new Map()),
      (this._reflectingProperties = void 0),
      this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this._classProperties.forEach((e, s) => {
        const r = this._attributeNameForProperty(s, e);
        void 0 !== r && (this._attributeToPropertyMap.set(r, s), t.push(r));
      }),
      t
    );
  }
  static _ensureClassProperties() {
    if (
      !this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))
    ) {
      this._classProperties = new Map();
      const t = Object.getPrototypeOf(this)._classProperties;
      void 0 !== t && t.forEach((t, e) => this._classProperties.set(e, t));
    }
  }
  static createProperty(t, e = w) {
    if (
      (this._ensureClassProperties(),
      this._classProperties.set(t, e),
      e.noAccessor || this.prototype.hasOwnProperty(t))
    )
      return;
    const s = "symbol" == typeof t ? Symbol() : `__${t}`,
      r = this.getPropertyDescriptor(t, s, e);
    void 0 !== r && Object.defineProperty(this.prototype, t, r);
  }
  static getPropertyDescriptor(t, e, s) {
    return {
      get() {
        return this[e];
      },
      set(s) {
        const r = this[t];
        (this[e] = s), this._requestUpdate(t, r);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return (this._classProperties && this._classProperties.get(t)) || w;
  }
  static finalize() {
    const t = Object.getPrototypeOf(this);
    if (
      (t.hasOwnProperty("finalized") || t.finalize(),
      (this.finalized = !0),
      this._ensureClassProperties(),
      (this._attributeToPropertyMap = new Map()),
      this.hasOwnProperty(JSCompiler_renameProperty("properties", this)))
    ) {
      const t = this.properties,
        e = [
          ...Object.getOwnPropertyNames(t),
          ...("function" == typeof Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(t)
            : []),
        ];
      for (const s of e) this.createProperty(s, t[s]);
    }
  }
  static _attributeNameForProperty(t, e) {
    const s = e.attribute;
    return !1 === s
      ? void 0
      : "string" == typeof s
      ? s
      : "string" == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  static _valueHasChanged(t, e, s = g) {
    return s(t, e);
  }
  static _propertyValueFromAttribute(t, e) {
    const s = e.type,
      r = e.converter || m,
      i = "function" == typeof r ? r : r.fromAttribute;
    return i ? i(t, s) : t;
  }
  static _propertyValueToAttribute(t, e) {
    if (void 0 === e.reflect) return;
    const s = e.type,
      r = e.converter;
    return ((r && r.toAttribute) || m.toAttribute)(t, s);
  }
  initialize() {
    this._saveInstanceProperties(), this._requestUpdate();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((t, e) => {
      if (this.hasOwnProperty(e)) {
        const t = this[e];
        delete this[e],
          this._instanceProperties || (this._instanceProperties = new Map()),
          this._instanceProperties.set(e, t);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((t, e) => (this[e] = t)),
      (this._instanceProperties = void 0);
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    void 0 !== this._enableUpdatingResolver &&
      (this._enableUpdatingResolver(), (this._enableUpdatingResolver = void 0));
  }
  disconnectedCallback() {}
  attributeChangedCallback(t, e, s) {
    e !== s && this._attributeToProperty(t, s);
  }
  _propertyToAttribute(t, e, s = w) {
    const r = this.constructor,
      i = r._attributeNameForProperty(t, s);
    if (void 0 !== i) {
      const t = r._propertyValueToAttribute(e, s);
      if (void 0 === t) return;
      (this._updateState = 8 | this._updateState),
        null == t ? this.removeAttribute(i) : this.setAttribute(i, t),
        (this._updateState = -9 & this._updateState);
    }
  }
  _attributeToProperty(t, e) {
    if (8 & this._updateState) return;
    const s = this.constructor,
      r = s._attributeToPropertyMap.get(t);
    if (void 0 !== r) {
      const t = s.getPropertyOptions(r);
      (this._updateState = 16 | this._updateState),
        (this[r] = s._propertyValueFromAttribute(e, t)),
        (this._updateState = -17 & this._updateState);
    }
  }
  _requestUpdate(t, e) {
    let s = !0;
    if (void 0 !== t) {
      const r = this.constructor,
        i = r.getPropertyOptions(t);
      r._valueHasChanged(this[t], e, i.hasChanged)
        ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
          !0 !== i.reflect ||
            16 & this._updateState ||
            (void 0 === this._reflectingProperties &&
              (this._reflectingProperties = new Map()),
            this._reflectingProperties.set(t, i)))
        : (s = !1);
    }
    !this._hasRequestedUpdate &&
      s &&
      (this._updatePromise = this._enqueueUpdate());
  }
  requestUpdate(t, e) {
    return this._requestUpdate(t, e), this.updateComplete;
  }
  async _enqueueUpdate() {
    this._updateState = 4 | this._updateState;
    try {
      await this._updatePromise;
    } catch (t) {}
    const t = this.performUpdate();
    return null != t && (await t), !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return 4 & this._updateState;
  }
  get hasUpdated() {
    return 1 & this._updateState;
  }
  performUpdate() {
    this._instanceProperties && this._applyInstanceProperties();
    let t = !1;
    const e = this._changedProperties;
    try {
      (t = this.shouldUpdate(e)), t ? this.update(e) : this._markUpdated();
    } catch (e) {
      throw ((t = !1), this._markUpdated(), e);
    }
    t &&
      (1 & this._updateState ||
        ((this._updateState = 1 | this._updateState), this.firstUpdated(e)),
      this.updated(e));
  }
  _markUpdated() {
    (this._changedProperties = new Map()),
      (this._updateState = -5 & this._updateState);
  }
  get updateComplete() {
    return this._getUpdateComplete();
  }
  _getUpdateComplete() {
    return this._updatePromise;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._reflectingProperties &&
      this._reflectingProperties.size > 0 &&
      (this._reflectingProperties.forEach((t, e) =>
        this._propertyToAttribute(e, this[e], t)
      ),
      (this._reflectingProperties = void 0)),
      this._markUpdated();
  }
  updated(t) {}
  firstUpdated(t) {}
}
P.finalized = !0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const b =
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  v = Symbol();
class C {
  constructor(t, e) {
    if (e !== v)
      throw new Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = t;
  }
  get styleSheet() {
    return (
      void 0 === this._styleSheet &&
        (b
          ? ((this._styleSheet = new CSSStyleSheet()),
            this._styleSheet.replaceSync(this.cssText))
          : (this._styleSheet = null)),
      this._styleSheet
    );
  }
  toString() {
    return this.cssText;
  }
}
const U = (t, ...e) => {
  const s = e.reduce(
    (e, s, r) =>
      e +
      ((t) => {
        if (t instanceof C) return t.cssText;
        if ("number" == typeof t) return t;
        throw new Error(
          `Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`
        );
      })(s) +
      t[r + 1],
    t[0]
  );
  return new C(s, v);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions || (window.litElementVersions = [])).push("2.3.1");
const A = {};
class T extends P {
  static getStyles() {
    return this.styles;
  }
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
    const t = this.getStyles();
    if (void 0 === t) this._styles = [];
    else if (Array.isArray(t)) {
      const e = (t, s) =>
          t.reduceRight(
            (t, s) => (Array.isArray(s) ? e(s, t) : (t.add(s), t)),
            s
          ),
        s = e(t, new Set()),
        r = [];
      s.forEach((t) => r.unshift(t)), (this._styles = r);
    } else this._styles = [t];
  }
  initialize() {
    super.initialize(),
      this.constructor._getUniqueStyles(),
      (this.renderRoot = this.createRenderRoot()),
      window.ShadowRoot &&
        this.renderRoot instanceof window.ShadowRoot &&
        this.adoptStyles();
  }
  createRenderRoot() {
    return this.attachShadow({ mode: "open" });
  }
  adoptStyles() {
    const t = this.constructor._styles;
    0 !== t.length &&
      (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
        ? b
          ? (this.renderRoot.adoptedStyleSheets = t.map((t) => t.styleSheet))
          : (this._needsShimAdoptedStyleSheets = !0)
        : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
            t.map((t) => t.cssText),
            this.localName
          ));
  }
  connectedCallback() {
    super.connectedCallback(),
      this.hasUpdated &&
        void 0 !== window.ShadyCSS &&
        window.ShadyCSS.styleElement(this);
  }
  update(t) {
    const e = this.render();
    super.update(t),
      e !== A &&
        this.constructor.render(e, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this,
        }),
      this._needsShimAdoptedStyleSheets &&
        ((this._needsShimAdoptedStyleSheets = !1),
        this.constructor._styles.forEach((t) => {
          const e = document.createElement("style");
          (e.textContent = t.cssText), this.renderRoot.appendChild(e);
        }));
  }
  render() {
    return A;
  }
}
(T.finalized = !0),
  (T.render = (t, r, i) => {
    if (!i || "object" != typeof i || !i.scopeName)
      throw new Error("The `scopeName` option is required.");
    const o = i.scopeName,
      p = e.has(r),
      h = u && 11 === r.nodeType && !!r.host,
      c = h && !_.has(o),
      d = c ? document.createDocumentFragment() : r;
    if ((s(t, d, Object.assign({ templateFactory: y(o) }, i)), c)) {
      const t = e.get(d);
      e.delete(d);
      const s = t.value instanceof n ? t.value.template : void 0;
      f(o, d, s), a(r, r.firstChild), r.appendChild(d), e.set(r, t);
    }
    !p && h && window.ShadyCSS.styleElement(r.host);
  });
export { T as LitElement, U as css };
//# sourceMappingURL=lit-element.js.map
