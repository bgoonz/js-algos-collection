import { t } from "../../../common/index.esm-7362d277.js";
(function () {
  var n,
    e =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (t, n, e) {
            t != Array.prototype && t != Object.prototype && (t[n] = e.value);
          };
  var i = (function (t) {
    t = [
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
      t,
    ];
    for (var n = 0; n < t.length; ++n) {
      var e = t[n];
      if (e && e.Math == Math) return e;
    }
    return globalThis;
  })(this);
  function r(t) {
    var n = 0;
    return function () {
      return n < t.length ? { done: !1, value: t[n++] } : { done: !0 };
    };
  }
  function o(t) {
    var n =
      "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
    return n ? n.call(t) : { next: r(t) };
  }
  !(function (t, n) {
    if (n) {
      var r = i;
      t = t.split(".");
      for (var o = 0; o < t.length - 1; o++) {
        var a = t[o];
        a in r || (r[a] = {}), (r = r[a]);
      }
      (n = n((o = r[(t = t[t.length - 1])]))) != o &&
        null != n &&
        e(r, t, { configurable: !0, writable: !0, value: n });
    }
  })("Promise", function (t) {
    function n(t) {
      (this.b = 0), (this.c = void 0), (this.a = []);
      var n = this.f();
      try {
        t(n.resolve, n.reject);
      } catch (t) {
        n.reject(t);
      }
    }
    function e() {
      this.a = null;
    }
    function r(t) {
      return t instanceof n
        ? t
        : new n(function (n) {
            n(t);
          });
    }
    if (t) return t;
    e.prototype.b = function (t) {
      if (null == this.a) {
        this.a = [];
        var n = this;
        this.c(function () {
          n.g();
        });
      }
      this.a.push(t);
    };
    var a = i.setTimeout;
    (e.prototype.c = function (t) {
      a(t, 0);
    }),
      (e.prototype.g = function () {
        for (; this.a && this.a.length; ) {
          var t = this.a;
          this.a = [];
          for (var n = 0; n < t.length; ++n) {
            var e = t[n];
            t[n] = null;
            try {
              e();
            } catch (t) {
              this.f(t);
            }
          }
        }
        this.a = null;
      }),
      (e.prototype.f = function (t) {
        this.c(function () {
          throw t;
        });
      }),
      (n.prototype.f = function () {
        function t(t) {
          return function (i) {
            e || ((e = !0), t.call(n, i));
          };
        }
        var n = this,
          e = !1;
        return { resolve: t(this.m), reject: t(this.g) };
      }),
      (n.prototype.m = function (t) {
        if (t === this)
          this.g(new TypeError("A Promise cannot resolve to itself"));
        else if (t instanceof n) this.s(t);
        else {
          t: switch (typeof t) {
            case "object":
              var e = null != t;
              break t;
            case "function":
              e = !0;
              break t;
            default:
              e = !1;
          }
          e ? this.u(t) : this.h(t);
        }
      }),
      (n.prototype.u = function (t) {
        var n = void 0;
        try {
          n = t.then;
        } catch (t) {
          return void this.g(t);
        }
        "function" == typeof n ? this.w(n, t) : this.h(t);
      }),
      (n.prototype.g = function (t) {
        this.i(2, t);
      }),
      (n.prototype.h = function (t) {
        this.i(1, t);
      }),
      (n.prototype.i = function (t, n) {
        if (0 != this.b)
          throw Error(
            "Cannot settle(" +
              t +
              ", " +
              n +
              "): Promise already settled in state" +
              this.b
          );
        (this.b = t), (this.c = n), this.l();
      }),
      (n.prototype.l = function () {
        if (null != this.a) {
          for (var t = 0; t < this.a.length; ++t) s.b(this.a[t]);
          this.a = null;
        }
      });
    var s = new e();
    return (
      (n.prototype.s = function (t) {
        var n = this.f();
        t.Oa(n.resolve, n.reject);
      }),
      (n.prototype.w = function (t, n) {
        var e = this.f();
        try {
          t.call(n, e.resolve, e.reject);
        } catch (t) {
          e.reject(t);
        }
      }),
      (n.prototype.then = function (t, e) {
        function i(t, n) {
          return "function" == typeof t
            ? function (n) {
                try {
                  r(t(n));
                } catch (t) {
                  o(t);
                }
              }
            : n;
        }
        var r,
          o,
          a = new n(function (t, n) {
            (r = t), (o = n);
          });
        return this.Oa(i(t, r), i(e, o)), a;
      }),
      (n.prototype.catch = function (t) {
        return this.then(void 0, t);
      }),
      (n.prototype.Oa = function (t, n) {
        function e() {
          switch (i.b) {
            case 1:
              t(i.c);
              break;
            case 2:
              n(i.c);
              break;
            default:
              throw Error("Unexpected state: " + i.b);
          }
        }
        var i = this;
        null == this.a ? s.b(e) : this.a.push(e);
      }),
      (n.resolve = r),
      (n.reject = function (t) {
        return new n(function (n, e) {
          e(t);
        });
      }),
      (n.race = function (t) {
        return new n(function (n, e) {
          for (var i = o(t), a = i.next(); !a.done; a = i.next())
            r(a.value).Oa(n, e);
        });
      }),
      (n.all = function (t) {
        var e = o(t),
          i = e.next();
        return i.done
          ? r([])
          : new n(function (t, n) {
              function o(n) {
                return function (e) {
                  (a[n] = e), 0 == --s && t(a);
                };
              }
              var a = [],
                s = 0;
              do {
                a.push(void 0),
                  s++,
                  r(i.value).Oa(o(a.length - 1), n),
                  (i = e.next());
              } while (!i.done);
            });
      }),
      n
    );
  });
  var a = a || {},
    s = this || self,
    u = /^[\w+/_-]+[=]{0,2}$/,
    c = null;
  function h() {}
  function l(t) {
    var n = typeof t;
    if ("object" == n) {
      if (!t) return "null";
      if (t instanceof Array) return "array";
      if (t instanceof Object) return n;
      var e = Object.prototype.toString.call(t);
      if ("[object Window]" == e) return "object";
      if (
        "[object Array]" == e ||
        ("number" == typeof t.length &&
          void 0 !== t.splice &&
          void 0 !== t.propertyIsEnumerable &&
          !t.propertyIsEnumerable("splice"))
      )
        return "array";
      if (
        "[object Function]" == e ||
        (void 0 !== t.call &&
          void 0 !== t.propertyIsEnumerable &&
          !t.propertyIsEnumerable("call"))
      )
        return "function";
    } else if ("function" == n && void 0 === t.call) return "object";
    return n;
  }
  function f(t) {
    var n = l(t);
    return "array" == n || ("object" == n && "number" == typeof t.length);
  }
  function d(t) {
    return "function" == l(t);
  }
  function p(t) {
    var n = typeof t;
    return ("object" == n && null != t) || "function" == n;
  }
  var v = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    m = 0;
  function g(t, n, e) {
    return t.call.apply(t.bind, arguments);
  }
  function b(t, n, e) {
    if (!t) throw Error();
    if (2 < arguments.length) {
      var i = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(e, i), t.apply(n, e);
      };
    }
    return function () {
      return t.apply(n, arguments);
    };
  }
  function y(t, n, e) {
    return (y =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? g
        : b).apply(null, arguments);
  }
  function w(t, n) {
    var e = Array.prototype.slice.call(arguments, 1);
    return function () {
      var n = e.slice();
      return n.push.apply(n, arguments), t.apply(this, n);
    };
  }
  var I =
    Date.now ||
    function () {
      return +new Date();
    };
  function T(t, n) {
    function e() {}
    (e.prototype = n.prototype),
      (t.Za = n.prototype),
      (t.prototype = new e()),
      (t.prototype.constructor = t);
  }
  function E(t, n, e) {
    (this.code = S + t), (this.message = n || N[t] || ""), (this.a = e || null);
  }
  function A(t) {
    var n = t && t.code;
    return n ? new E(n.substring(S.length), t.message, t.serverResponse) : null;
  }
  T(E, Error),
    (E.prototype.v = function () {
      var t = { code: this.code, message: this.message };
      return this.a && (t.serverResponse = this.a), t;
    }),
    (E.prototype.toJSON = function () {
      return this.v();
    });
  var k,
    S = "auth/",
    N = {
      "admin-restricted-operation":
        "This operation is restricted to administrators only.",
      "argument-error": "",
      "app-not-authorized":
        "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
      "app-not-installed":
        "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
      "captcha-check-failed":
        "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
      "code-expired":
        "The SMS code has expired. Please re-send the verification code to try again.",
      "cordova-not-ready": "Cordova framework is not ready.",
      "cors-unsupported": "This browser is not supported.",
      "credential-already-in-use":
        "This credential is already associated with a different user account.",
      "custom-token-mismatch":
        "The custom token corresponds to a different audience.",
      "requires-recent-login":
        "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
      "dynamic-link-not-activated":
        "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
      "email-change-needs-verification":
        "Multi-factor users must always have a verified email.",
      "email-already-in-use":
        "The email address is already in use by another account.",
      "expired-action-code": "The action code has expired. ",
      "cancelled-popup-request":
        "This operation has been cancelled due to another conflicting popup being opened.",
      "internal-error": "An internal error has occurred.",
      "invalid-app-credential":
        "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
      "invalid-app-id":
        "The mobile app identifier is not registed for the current project.",
      "invalid-user-token":
        "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
      "invalid-auth-event": "An internal error has occurred.",
      "invalid-verification-code":
        "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
      "invalid-continue-uri":
        "The continue URL provided in the request is invalid.",
      "invalid-cordova-configuration":
        "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
      "invalid-custom-token":
        "The custom token format is incorrect. Please check the documentation.",
      "invalid-dynamic-link-domain":
        "The provided dynamic link domain is not configured or authorized for the current project.",
      "invalid-email": "The email address is badly formatted.",
      "invalid-api-key":
        "Your API key is invalid, please check you have copied it correctly.",
      "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
      "invalid-credential":
        "The supplied auth credential is malformed or has expired.",
      "invalid-message-payload":
        "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
      "invalid-multi-factor-session":
        "The request does not contain a valid proof of first factor successful sign-in.",
      "invalid-oauth-provider":
        "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
      "invalid-oauth-client-id":
        "The OAuth client ID provided is either invalid or does not match the specified API key.",
      "unauthorized-domain":
        "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
      "invalid-action-code":
        "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
      "wrong-password":
        "The password is invalid or the user does not have a password.",
      "invalid-persistence-type":
        "The specified persistence type is invalid. It can only be local, session or none.",
      "invalid-phone-number":
        "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
      "invalid-provider-id": "The specified provider ID is invalid.",
      "invalid-recipient-email":
        "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
      "invalid-sender":
        "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
      "invalid-verification-id":
        "The verification ID used to create the phone auth credential is invalid.",
      "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
      "multi-factor-info-not-found":
        "The user does not have a second factor matching the identifier provided.",
      "multi-factor-auth-required":
        "Proof of ownership of a second factor is required to complete sign-in.",
      "missing-android-pkg-name":
        "An Android Package Name must be provided if the Android App is required to be installed.",
      "auth-domain-config-required":
        "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
      "missing-app-credential":
        "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
      "missing-verification-code":
        "The phone auth credential was created with an empty SMS verification code.",
      "missing-continue-uri": "A continue URL must be provided in the request.",
      "missing-iframe-start": "An internal error has occurred.",
      "missing-ios-bundle-id":
        "An iOS Bundle ID must be provided if an App Store ID is provided.",
      "missing-multi-factor-info": "No second factor identifier is provided.",
      "missing-multi-factor-session":
        "The request is missing proof of first factor successful sign-in.",
      "missing-or-invalid-nonce":
        "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
      "missing-phone-number":
        "To send verification codes, provide a phone number for the recipient.",
      "missing-verification-id":
        "The phone auth credential was created with an empty verification ID.",
      "app-deleted": "This instance of FirebaseApp has been deleted.",
      "account-exists-with-different-credential":
        "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
      "network-request-failed":
        "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
      "no-auth-event": "An internal error has occurred.",
      "no-such-provider":
        "User was not linked to an account with the given provider.",
      "null-user":
        "A null user object was provided as the argument for an operation which requires a non-null user object.",
      "operation-not-allowed":
        "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
      "operation-not-supported-in-this-environment":
        'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
      "popup-blocked":
        "Unable to establish a connection with the popup. It may have been blocked by the browser.",
      "popup-closed-by-user":
        "The popup has been closed by the user before finalizing the operation.",
      "provider-already-linked":
        "User can only be linked to one identity for the given provider.",
      "quota-exceeded":
        "The project's quota for this operation has been exceeded.",
      "redirect-cancelled-by-user":
        "The redirect operation has been cancelled by the user before finalizing.",
      "redirect-operation-pending":
        "A redirect sign-in operation is already pending.",
      "rejected-credential":
        "The request contains malformed or mismatching credentials.",
      "second-factor-already-in-use":
        "The second factor is already enrolled on this account.",
      "maximum-second-factor-count-exceeded":
        "The maximum allowed number of second factors on a user has been exceeded.",
      "tenant-id-mismatch":
        "The provided tenant ID does not match the Auth instance's tenant ID",
      timeout: "The operation has timed out.",
      "user-token-expired":
        "The user's credential is no longer valid. The user must sign in again.",
      "too-many-requests":
        "We have blocked all requests from this device due to unusual activity. Try again later.",
      "unauthorized-continue-uri":
        "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
      "unsupported-first-factor":
        "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
      "unsupported-persistence-type":
        "The current environment does not support the specified persistence type.",
      "unsupported-tenant-operation":
        "This operation is not supported in a multi-tenant context.",
      "unverified-email": "The operation requires a verified email.",
      "user-cancelled":
        "The user did not grant your application the permissions it requested.",
      "user-not-found":
        "There is no user record corresponding to this identifier. The user may have been deleted.",
      "user-disabled":
        "The user account has been disabled by an administrator.",
      "user-mismatch":
        "The supplied credentials do not correspond to the previously signed in user.",
      "user-signed-out": "",
      "weak-password": "The password must be 6 characters long or more.",
      "web-storage-unsupported":
        "This browser is not supported or 3rd party cookies and data may be disabled.",
    },
    _ = {
      hd: {
        Ra: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
        Xa: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
        Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
        id: "b",
      },
      pd: {
        Ra: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
        Xa: "https://securetoken.googleapis.com/v1/token",
        Ua: "https://identitytoolkit.googleapis.com/v2/",
        id: "p",
      },
      rd: {
        Ra: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
        Xa: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
        Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
        id: "s",
      },
      sd: {
        Ra: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
        Xa: "https://test-securetoken.sandbox.googleapis.com/v1/token",
        Ua: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
        id: "t",
      },
    };
  function O(t) {
    for (var n in _)
      if (_[n].id === t)
        return {
          firebaseEndpoint: (t = _[n]).Ra,
          secureTokenEndpoint: t.Xa,
          identityPlatformEndpoint: t.Ua,
        };
    return null;
  }
  function R(t) {
    if (!t) return !1;
    try {
      return !!t.$goog_Thenable;
    } catch (t) {
      return !1;
    }
  }
  function P(t) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, P);
    else {
      var n = Error().stack;
      n && (this.stack = n);
    }
    t && (this.message = String(t));
  }
  function C(t, n) {
    for (var e = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++)
      e += t[r] + (r < n.length ? n[r] : "%s");
    P.call(this, e + t[i]);
  }
  function D(t, n) {
    throw new C(
      "Failure" + (t ? ": " + t : ""),
      Array.prototype.slice.call(arguments, 1)
    );
  }
  function L(t, n) {
    (this.c = t), (this.f = n), (this.b = 0), (this.a = null);
  }
  function M(t, n) {
    t.f(n), 100 > t.b && (t.b++, (n.next = t.a), (t.a = n));
  }
  function x() {
    this.b = this.a = null;
  }
  (k = O("__EID__") ? "__EID__" : void 0),
    T(P, Error),
    (P.prototype.name = "CustomError"),
    T(C, P),
    (C.prototype.name = "AssertionError"),
    (L.prototype.get = function () {
      if (0 < this.b) {
        this.b--;
        var t = this.a;
        (this.a = t.next), (t.next = null);
      } else t = this.c();
      return t;
    });
  var j = new L(
    function () {
      return new V();
    },
    function (t) {
      t.reset();
    }
  );
  function U() {
    var t = gn,
      n = null;
    return (
      t.a &&
        ((n = t.a), (t.a = t.a.next), t.a || (t.b = null), (n.next = null)),
      n
    );
  }
  function V() {
    this.next = this.b = this.a = null;
  }
  (x.prototype.add = function (t, n) {
    var e = j.get();
    e.set(t, n), this.b ? (this.b.next = e) : (this.a = e), (this.b = e);
  }),
    (V.prototype.set = function (t, n) {
      (this.a = t), (this.b = n), (this.next = null);
    }),
    (V.prototype.reset = function () {
      this.next = this.b = this.a = null;
    });
  var F = Array.prototype.indexOf
      ? function (t, n) {
          return Array.prototype.indexOf.call(t, n, void 0);
        }
      : function (t, n) {
          if ("string" == typeof t)
            return "string" != typeof n || 1 != n.length ? -1 : t.indexOf(n, 0);
          for (var e = 0; e < t.length; e++) if (e in t && t[e] === n) return e;
          return -1;
        },
    q = Array.prototype.forEach
      ? function (t, n, e) {
          Array.prototype.forEach.call(t, n, e);
        }
      : function (t, n, e) {
          for (
            var i = t.length, r = "string" == typeof t ? t.split("") : t, o = 0;
            o < i;
            o++
          )
            o in r && n.call(e, r[o], o, t);
        };
  var K = Array.prototype.filter
      ? function (t, n) {
          return Array.prototype.filter.call(t, n, void 0);
        }
      : function (t, n) {
          for (
            var e = t.length,
              i = [],
              r = 0,
              o = "string" == typeof t ? t.split("") : t,
              a = 0;
            a < e;
            a++
          )
            if (a in o) {
              var s = o[a];
              n.call(void 0, s, a, t) && (i[r++] = s);
            }
          return i;
        },
    H = Array.prototype.map
      ? function (t, n) {
          return Array.prototype.map.call(t, n, void 0);
        }
      : function (t, n) {
          for (
            var e = t.length,
              i = Array(e),
              r = "string" == typeof t ? t.split("") : t,
              o = 0;
            o < e;
            o++
          )
            o in r && (i[o] = n.call(void 0, r[o], o, t));
          return i;
        },
    G = Array.prototype.some
      ? function (t, n) {
          return Array.prototype.some.call(t, n, void 0);
        }
      : function (t, n) {
          for (
            var e = t.length, i = "string" == typeof t ? t.split("") : t, r = 0;
            r < e;
            r++
          )
            if (r in i && n.call(void 0, i[r], r, t)) return !0;
          return !1;
        };
  function B(t, n) {
    return 0 <= F(t, n);
  }
  function W(t, n) {
    var e;
    return (e = 0 <= (n = F(t, n))) && Array.prototype.splice.call(t, n, 1), e;
  }
  function X(t, n) {
    !(function (t, n) {
      for (
        var e = "string" == typeof t ? t.split("") : t, i = t.length - 1;
        0 <= i;
        --i
      )
        i in e && n.call(void 0, e[i], i, t);
    })(t, function (e, i) {
      n.call(void 0, e, i, t) &&
        1 == Array.prototype.splice.call(t, i, 1).length &&
        0;
    });
  }
  function J(t) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Y(t) {
    var n = t.length;
    if (0 < n) {
      for (var e = Array(n), i = 0; i < n; i++) e[i] = t[i];
      return e;
    }
    return [];
  }
  var z,
    $ = String.prototype.trim
      ? function (t) {
          return t.trim();
        }
      : function (t) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
        },
    Z = /&/g,
    Q = /</g,
    tt = />/g,
    nt = /"/g,
    et = /'/g,
    it = /\x00/g,
    rt = /[\x00&<>"']/;
  function ot(t, n) {
    return -1 != t.indexOf(n);
  }
  function at(t, n) {
    return t < n ? -1 : t > n ? 1 : 0;
  }
  t: {
    var st = s.navigator;
    if (st) {
      var ut = st.userAgent;
      if (ut) {
        z = ut;
        break t;
      }
    }
    z = "";
  }
  function ct(t) {
    return ot(z, t);
  }
  function ht(t, n) {
    for (var e in t) n.call(void 0, t[e], e, t);
  }
  function lt(t) {
    for (var n in t) return !1;
    return !0;
  }
  function ft(t) {
    var n,
      e = {};
    for (n in t) e[n] = t[n];
    return e;
  }
  var dt =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function pt(t, n) {
    for (var e, i, r = 1; r < arguments.length; r++) {
      for (e in (i = arguments[r])) t[e] = i[e];
      for (var o = 0; o < dt.length; o++)
        (e = dt[o]),
          Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
    }
  }
  function vt(t, n) {
    t: {
      try {
        var e = t && t.ownerDocument,
          i = e && (e.defaultView || e.parentWindow);
        if ((i = i || s).Element && i.Location) {
          var r = i;
          break t;
        }
      } catch (t) {}
      r = null;
    }
    if (
      r &&
      void 0 !== r[n] &&
      (!t ||
        (!(t instanceof r[n]) &&
          (t instanceof r.Location || t instanceof r.Element)))
    ) {
      if (p(t))
        try {
          var o =
            t.constructor.displayName ||
            t.constructor.name ||
            Object.prototype.toString.call(t);
        } catch (t) {
          o = "<object could not be stringified>";
        }
      else o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
      D(
        "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
        n,
        o
      );
    }
  }
  function mt(t, n) {
    (this.a = (t === yt && n) || ""), (this.b = bt);
  }
  function gt(t) {
    return t instanceof mt && t.constructor === mt && t.b === bt
      ? t.a
      : (D("expected object of type Const, got '" + t + "'"),
        "type_error:Const");
  }
  (mt.prototype.ra = !0),
    (mt.prototype.qa = function () {
      return this.a;
    }),
    (mt.prototype.toString = function () {
      return "Const{" + this.a + "}";
    });
  var bt = {},
    yt = {},
    wt = new mt(yt, "");
  function It(t, n) {
    (this.a = (t === Nt && n) || ""), (this.b = St);
  }
  function Tt(t) {
    return t instanceof It && t.constructor === It && t.b === St
      ? t.a
      : (D(
          "expected object of type TrustedResourceUrl, got '" +
            t +
            "' of type " +
            l(t)
        ),
        "type_error:TrustedResourceUrl");
  }
  function Et(t, n) {
    var e = gt(t);
    if (!kt.test(e)) throw Error("Invalid TrustedResourceUrl format: " + e);
    return (
      (t = e.replace(At, function (t, i) {
        if (!Object.prototype.hasOwnProperty.call(n, i))
          throw Error(
            'Found marker, "' +
              i +
              '", in format string, "' +
              e +
              '", but no valid label mapping found in args: ' +
              JSON.stringify(n)
          );
        return (t = n[i]) instanceof mt ? gt(t) : encodeURIComponent(String(t));
      })),
      new It(Nt, t)
    );
  }
  (It.prototype.ra = !0),
    (It.prototype.qa = function () {
      return this.a.toString();
    }),
    (It.prototype.toString = function () {
      return "TrustedResourceUrl{" + this.a + "}";
    });
  var At = /%{(\w+)}/g,
    kt =
      /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
    St = {},
    Nt = {};
  function _t(t, n) {
    (this.a = (t === Dt && n) || ""), (this.b = Ct);
  }
  function Ot(t) {
    return t instanceof _t && t.constructor === _t && t.b === Ct
      ? t.a
      : (D("expected object of type SafeUrl, got '" + t + "' of type " + l(t)),
        "type_error:SafeUrl");
  }
  (_t.prototype.ra = !0),
    (_t.prototype.qa = function () {
      return this.a.toString();
    }),
    (_t.prototype.toString = function () {
      return "SafeUrl{" + this.a + "}";
    });
  var Rt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Pt(t) {
    return t instanceof _t
      ? t
      : ((t = "object" == typeof t && t.ra ? t.qa() : String(t)),
        Rt.test(t) || (t = "about:invalid#zClosurez"),
        new _t(Dt, t));
  }
  var Ct = {},
    Dt = {};
  function Lt() {
    (this.a = ""), (this.b = xt);
  }
  function Mt(t) {
    return t instanceof Lt && t.constructor === Lt && t.b === xt
      ? t.a
      : (D("expected object of type SafeHtml, got '" + t + "' of type " + l(t)),
        "type_error:SafeHtml");
  }
  (Lt.prototype.ra = !0),
    (Lt.prototype.qa = function () {
      return this.a.toString();
    }),
    (Lt.prototype.toString = function () {
      return "SafeHtml{" + this.a + "}";
    });
  var xt = {};
  function jt(t) {
    var n = new Lt();
    return (n.a = t), n;
  }
  jt("<!DOCTYPE html>");
  var Ut = jt("");
  function Vt(t, n) {
    for (
      var e = t.split("%s"),
        i = "",
        r = Array.prototype.slice.call(arguments, 1);
      r.length && 1 < e.length;

    )
      i += e.shift() + r.shift();
    return i + e.join("%s");
  }
  function Ft(t) {
    return (
      rt.test(t) &&
        (-1 != t.indexOf("&") && (t = t.replace(Z, "&amp;")),
        -1 != t.indexOf("<") && (t = t.replace(Q, "&lt;")),
        -1 != t.indexOf(">") && (t = t.replace(tt, "&gt;")),
        -1 != t.indexOf('"') && (t = t.replace(nt, "&quot;")),
        -1 != t.indexOf("'") && (t = t.replace(et, "&#39;")),
        -1 != t.indexOf("\0") && (t = t.replace(it, "&#0;"))),
      t
    );
  }
  function qt(t) {
    return qt[" "](t), t;
  }
  jt("<br>"), (qt[" "] = h);
  var Kt,
    Ht,
    Gt = ct("Opera"),
    Bt = ct("Trident") || ct("MSIE"),
    Wt = ct("Edge"),
    Xt = Wt || Bt,
    Jt =
      ct("Gecko") &&
      !(ot(z.toLowerCase(), "webkit") && !ct("Edge")) &&
      !(ct("Trident") || ct("MSIE")) &&
      !ct("Edge"),
    Yt = ot(z.toLowerCase(), "webkit") && !ct("Edge");
  function zt() {
    var t = s.document;
    return t ? t.documentMode : void 0;
  }
  t: {
    var $t = "",
      Zt =
        ((Ht = z),
        Jt
          ? /rv:([^\);]+)(\)|;)/.exec(Ht)
          : Wt
          ? /Edge\/([\d\.]+)/.exec(Ht)
          : Bt
          ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ht)
          : Yt
          ? /WebKit\/(\S+)/.exec(Ht)
          : Gt
          ? /(?:Version)[ \/]?(\S+)/.exec(Ht)
          : void 0);
    if ((Zt && ($t = Zt ? Zt[1] : ""), Bt)) {
      var Qt = zt();
      if (null != Qt && Qt > parseFloat($t)) {
        Kt = String(Qt);
        break t;
      }
    }
    Kt = $t;
  }
  var tn,
    nn = {};
  function en(t) {
    return (function (t, n) {
      var e = nn;
      return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : (e[t] = n(t));
    })(t, function () {
      for (
        var n = 0,
          e = $(String(Kt)).split("."),
          i = $(String(t)).split("."),
          r = Math.max(e.length, i.length),
          o = 0;
        0 == n && o < r;
        o++
      ) {
        var a = e[o] || "",
          s = i[o] || "";
        do {
          if (
            ((a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""]),
            (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
            0 == a[0].length && 0 == s[0].length)
          )
            break;
          (n =
            at(
              0 == a[1].length ? 0 : parseInt(a[1], 10),
              0 == s[1].length ? 0 : parseInt(s[1], 10)
            ) ||
            at(0 == a[2].length, 0 == s[2].length) ||
            at(a[2], s[2])),
            (a = a[3]),
            (s = s[3]);
        } while (0 == n);
      }
      return 0 <= n;
    });
  }
  tn = s.document && Bt ? zt() : void 0;
  try {
    new self.OffscreenCanvas(0, 0).getContext("2d");
  } catch (Ht) {}
  var rn = !Bt || 9 <= Number(tn);
  function on(t) {
    var n = document;
    return "string" == typeof t ? n.getElementById(t) : t;
  }
  function an(t, n) {
    ht(n, function (n, e) {
      n && "object" == typeof n && n.ra && (n = n.qa()),
        "style" == e
          ? (t.style.cssText = n)
          : "class" == e
          ? (t.className = n)
          : "for" == e
          ? (t.htmlFor = n)
          : cn.hasOwnProperty(e)
          ? t.setAttribute(cn[e], n)
          : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0)
          ? t.setAttribute(e, n)
          : (t[e] = n);
    });
  }
  var sn,
    un,
    cn = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width",
    };
  function hn(t, n, e) {
    function i(e) {
      e && n.appendChild("string" == typeof e ? t.createTextNode(e) : e);
    }
    for (var r = 2; r < e.length; r++) {
      var o = e[r];
      !f(o) || (p(o) && 0 < o.nodeType) ? i(o) : q(fn(o) ? Y(o) : o, i);
    }
  }
  function ln(t, n) {
    return (
      (n = String(n)),
      "application/xhtml+xml" === t.contentType && (n = n.toLowerCase()),
      t.createElement(n)
    );
  }
  function fn(t) {
    if (t && "number" == typeof t.length) {
      if (p(t)) return "function" == typeof t.item || "string" == typeof t.item;
      if (d(t)) return "function" == typeof t.item;
    }
    return !1;
  }
  function dn(t) {
    s.setTimeout(function () {
      throw t;
    }, 0);
  }
  function pn() {
    var t = s.MessageChannel;
    if (
      (void 0 === t &&
        "undefined" != typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !ct("Presto") &&
        (t = function () {
          var t = ln(document, "IFRAME");
          (t.style.display = "none"),
            (function (t) {
              var n = new It(Nt, gt(wt));
              vt(t, "HTMLIFrameElement"), (t.src = Tt(n).toString());
            })(t),
            document.documentElement.appendChild(t);
          var n = t.contentWindow;
          (t = n.document).open(), t.write(Mt(Ut)), t.close();
          var e = "callImmediate" + Math.random(),
            i =
              "file:" == n.location.protocol
                ? "*"
                : n.location.protocol + "//" + n.location.host;
          (t = y(function (t) {
            ("*" != i && t.origin != i) ||
              t.data != e ||
              this.port1.onmessage();
          }, this)),
            n.addEventListener("message", t, !1),
            (this.port1 = {}),
            (this.port2 = {
              postMessage: function () {
                n.postMessage(e, i);
              },
            });
        }),
      void 0 !== t && !ct("Trident") && !ct("MSIE"))
    ) {
      var n = new t(),
        e = {},
        i = e;
      return (
        (n.port1.onmessage = function () {
          if (void 0 !== e.next) {
            var t = (e = e.next).Db;
            (e.Db = null), t();
          }
        }),
        function (t) {
          (i.next = { Db: t }), (i = i.next), n.port2.postMessage(0);
        }
      );
    }
    return function (t) {
      s.setTimeout(t, 0);
    };
  }
  function vn(t, n) {
    un ||
      (function () {
        if (s.Promise && s.Promise.resolve) {
          var t = s.Promise.resolve(void 0);
          un = function () {
            t.then(bn);
          };
        } else
          un = function () {
            var t = bn;
            !d(s.setImmediate) ||
            (s.Window &&
              s.Window.prototype &&
              !ct("Edge") &&
              s.Window.prototype.setImmediate == s.setImmediate)
              ? (sn || (sn = pn()), sn(t))
              : s.setImmediate(t);
          };
      })(),
      mn || (un(), (mn = !0)),
      gn.add(t, n);
  }
  var mn = !1,
    gn = new x();
  function bn() {
    for (var t; (t = U()); ) {
      try {
        t.a.call(t.b);
      } catch (t) {
        dn(t);
      }
      M(j, t);
    }
    mn = !1;
  }
  function yn(t, n) {
    if (
      ((this.a = wn),
      (this.i = void 0),
      (this.f = this.b = this.c = null),
      (this.g = this.h = !1),
      t != h)
    )
      try {
        var e = this;
        t.call(
          n,
          function (t) {
            Cn(e, In, t);
          },
          function (t) {
            if (!(t instanceof Vn))
              try {
                if (t instanceof Error) throw t;
                throw Error("Promise rejected.");
              } catch (t) {}
            Cn(e, Tn, t);
          }
        );
      } catch (t) {
        Cn(this, Tn, t);
      }
  }
  var wn = 0,
    In = 2,
    Tn = 3;
  function En() {
    (this.next = this.f = this.b = this.g = this.a = null), (this.c = !1);
  }
  En.prototype.reset = function () {
    (this.f = this.b = this.g = this.a = null), (this.c = !1);
  };
  var An = new L(
    function () {
      return new En();
    },
    function (t) {
      t.reset();
    }
  );
  function kn(t, n, e) {
    var i = An.get();
    return (i.g = t), (i.b = n), (i.f = e), i;
  }
  function Sn(t) {
    if (t instanceof yn) return t;
    var n = new yn(h);
    return Cn(n, In, t), n;
  }
  function Nn(t) {
    return new yn(function (n, e) {
      e(t);
    });
  }
  function _n(t, n, e) {
    Dn(t, n, e, null) || vn(w(n, t));
  }
  function On(t) {
    return new yn(function (n) {
      var e = t.length,
        i = [];
      if (e)
        for (
          var r = function (t, r, o) {
              e--,
                (i[t] = r ? { Mb: !0, value: o } : { Mb: !1, reason: o }),
                0 == e && n(i);
            },
            o = 0;
          o < t.length;
          o++
        )
          _n(t[o], w(r, o, !0), w(r, o, !1));
      else n(i);
    });
  }
  function Rn(t, n) {
    t.b || (t.a != In && t.a != Tn) || Ln(t),
      t.f ? (t.f.next = n) : (t.b = n),
      (t.f = n);
  }
  function Pn(t, n, e, i) {
    var r = kn(null, null, null);
    return (
      (r.a = new yn(function (t, o) {
        (r.g = n
          ? function (e) {
              try {
                var r = n.call(i, e);
                t(r);
              } catch (t) {
                o(t);
              }
            }
          : t),
          (r.b = e
            ? function (n) {
                try {
                  var r = e.call(i, n);
                  void 0 === r && n instanceof Vn ? o(n) : t(r);
                } catch (t) {
                  o(t);
                }
              }
            : o);
      })),
      (r.a.c = t),
      Rn(t, r),
      r.a
    );
  }
  function Cn(t, n, e) {
    t.a == wn &&
      (t === e &&
        ((n = Tn), (e = new TypeError("Promise cannot resolve to itself"))),
      (t.a = 1),
      Dn(e, t.Yc, t.Zc, t) ||
        ((t.i = e),
        (t.a = n),
        (t.c = null),
        Ln(t),
        n != Tn ||
          e instanceof Vn ||
          (function (t, n) {
            (t.g = !0),
              vn(function () {
                t.g && Un.call(null, n);
              });
          })(t, e)));
  }
  function Dn(t, n, e, i) {
    if (t instanceof yn) return Rn(t, kn(n || h, e || null, i)), !0;
    if (R(t)) return t.then(n, e, i), !0;
    if (p(t))
      try {
        var r = t.then;
        if (d(r))
          return (
            (function (t, n, e, i, r) {
              function o(t) {
                a || ((a = !0), i.call(r, t));
              }
              var a = !1;
              try {
                n.call(
                  t,
                  function (t) {
                    a || ((a = !0), e.call(r, t));
                  },
                  o
                );
              } catch (t) {
                o(t);
              }
            })(t, r, n, e, i),
            !0
          );
      } catch (t) {
        return e.call(i, t), !0;
      }
    return !1;
  }
  function Ln(t) {
    t.h || ((t.h = !0), vn(t.ec, t));
  }
  function Mn(t) {
    var n = null;
    return (
      t.b && ((n = t.b), (t.b = n.next), (n.next = null)),
      t.b || (t.f = null),
      n
    );
  }
  function xn(t, n, e, i) {
    if (e == Tn && n.b && !n.c) for (; t && t.g; t = t.c) t.g = !1;
    if (n.a) (n.a.c = null), jn(n, e, i);
    else
      try {
        n.c ? n.g.call(n.f) : jn(n, e, i);
      } catch (t) {
        Un.call(null, t);
      }
    M(An, n);
  }
  function jn(t, n, e) {
    n == In ? t.g.call(t.f, e) : t.b && t.b.call(t.f, e);
  }
  (yn.prototype.then = function (t, n, e) {
    return Pn(this, d(t) ? t : null, d(n) ? n : null, e);
  }),
    (yn.prototype.$goog_Thenable = !0),
    ((n = yn.prototype).ma = function (t, n) {
      return ((t = kn(t, t, n)).c = !0), Rn(this, t), this;
    }),
    (n.o = function (t, n) {
      return Pn(this, null, t, n);
    }),
    (n.cancel = function (t) {
      if (this.a == wn) {
        var n = new Vn(t);
        vn(function () {
          !(function t(n, e) {
            if (n.a == wn)
              if (n.c) {
                var i = n.c;
                if (i.b) {
                  for (
                    var r = 0, o = null, a = null, s = i.b;
                    s && (s.c || (r++, s.a == n && (o = s), !(o && 1 < r)));
                    s = s.next
                  )
                    o || (a = s);
                  o &&
                    (i.a == wn && 1 == r
                      ? t(i, e)
                      : (a
                          ? ((r = a).next == i.f && (i.f = r),
                            (r.next = r.next.next))
                          : Mn(i),
                        xn(i, o, Tn, e)));
                }
                n.c = null;
              } else Cn(n, Tn, e);
          })(this, n);
        }, this);
      }
    }),
    (n.Yc = function (t) {
      (this.a = wn), Cn(this, In, t);
    }),
    (n.Zc = function (t) {
      (this.a = wn), Cn(this, Tn, t);
    }),
    (n.ec = function () {
      for (var t; (t = Mn(this)); ) xn(this, t, this.a, this.i);
      this.h = !1;
    });
  var Un = dn;
  function Vn(t) {
    P.call(this, t);
  }
  function Fn() {
    (this.wa = this.wa), (this.na = this.na);
  }
  T(Vn, P), (Vn.prototype.name = "cancel");
  function qn(t) {
    if (!t.wa && ((t.wa = !0), t.Ba(), 0))
      (function (t) {
        (Object.prototype.hasOwnProperty.call(t, v) && t[v]) || (t[v] = ++m);
      })(t);
  }
  (Fn.prototype.wa = !1),
    (Fn.prototype.Ba = function () {
      if (this.na) for (; this.na.length; ) this.na.shift()();
    });
  var Kn =
      Object.freeze ||
      function (t) {
        return t;
      },
    Hn = !Bt || 9 <= Number(tn),
    Gn = Bt && !en("9"),
    Bn = (function () {
      if (!s.addEventListener || !Object.defineProperty) return !1;
      var t = !1,
        n = Object.defineProperty({}, "passive", {
          get: function () {
            t = !0;
          },
        });
      try {
        s.addEventListener("test", h, n), s.removeEventListener("test", h, n);
      } catch (t) {}
      return t;
    })();
  function Wn(t, n) {
    (this.type = t), (this.b = this.target = n), (this.defaultPrevented = !1);
  }
  function Xn(t, n) {
    if (
      (Wn.call(this, t ? t.type : ""),
      (this.relatedTarget = this.b = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ""),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.pointerId = 0),
      (this.pointerType = ""),
      (this.a = null),
      t)
    ) {
      var e = (this.type = t.type),
        i =
          t.changedTouches && t.changedTouches.length
            ? t.changedTouches[0]
            : null;
      if (
        ((this.target = t.target || t.srcElement),
        (this.b = n),
        (n = t.relatedTarget))
      ) {
        if (Jt) {
          t: {
            try {
              qt(n.nodeName);
              var r = !0;
              break t;
            } catch (t) {}
            r = !1;
          }
          r || (n = null);
        }
      } else
        "mouseover" == e
          ? (n = t.fromElement)
          : "mouseout" == e && (n = t.toElement);
      (this.relatedTarget = n),
        i
          ? ((this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX),
            (this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY),
            (this.screenX = i.screenX || 0),
            (this.screenY = i.screenY || 0))
          : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
            (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
            (this.screenX = t.screenX || 0),
            (this.screenY = t.screenY || 0)),
        (this.button = t.button),
        (this.key = t.key || ""),
        (this.ctrlKey = t.ctrlKey),
        (this.altKey = t.altKey),
        (this.shiftKey = t.shiftKey),
        (this.metaKey = t.metaKey),
        (this.pointerId = t.pointerId || 0),
        (this.pointerType =
          "string" == typeof t.pointerType
            ? t.pointerType
            : Jn[t.pointerType] || ""),
        (this.a = t),
        t.defaultPrevented && this.preventDefault();
    }
  }
  (Wn.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  }),
    T(Xn, Wn);
  var Jn = Kn({ 2: "touch", 3: "pen", 4: "mouse" });
  (Xn.prototype.preventDefault = function () {
    Xn.Za.preventDefault.call(this);
    var t = this.a;
    if (t.preventDefault) t.preventDefault();
    else if (((t.returnValue = !1), Gn))
      try {
        (t.ctrlKey || (112 <= t.keyCode && 123 >= t.keyCode)) &&
          (t.keyCode = -1);
      } catch (t) {}
  }),
    (Xn.prototype.f = function () {
      return this.a;
    });
  var Yn = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    zn = 0;
  function $n(t, n, e, i, r) {
    (this.listener = t),
      (this.proxy = null),
      (this.src = n),
      (this.type = e),
      (this.capture = !!i),
      (this.Ta = r),
      (this.key = ++zn),
      (this.ua = this.Na = !1);
  }
  function Zn(t) {
    (t.ua = !0),
      (t.listener = null),
      (t.proxy = null),
      (t.src = null),
      (t.Ta = null);
  }
  function Qn(t) {
    (this.src = t), (this.a = {}), (this.b = 0);
  }
  function te(t, n) {
    var e = n.type;
    e in t.a &&
      W(t.a[e], n) &&
      (Zn(n), 0 == t.a[e].length && (delete t.a[e], t.b--));
  }
  function ne(t, n, e, i) {
    for (var r = 0; r < t.length; ++r) {
      var o = t[r];
      if (!o.ua && o.listener == n && o.capture == !!e && o.Ta == i) return r;
    }
    return -1;
  }
  Qn.prototype.add = function (t, n, e, i, r) {
    var o = t.toString();
    (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
    var a = ne(t, n, i, r);
    return (
      -1 < a
        ? ((n = t[a]), e || (n.Na = !1))
        : (((n = new $n(n, this.src, o, !!i, r)).Na = e), t.push(n)),
      n
    );
  };
  var ee = "closure_lm_" + ((1e6 * Math.random()) | 0),
    ie = {};
  function re(t, n, e, i, r) {
    if (i && i.once) ae(t, n, e, i, r);
    else if (Array.isArray(n))
      for (var o = 0; o < n.length; o++) re(t, n[o], e, i, r);
    else
      (e = ve(e)),
        t && t[Yn]
          ? ge(t, n, e, p(i) ? !!i.capture : !!i, r)
          : oe(t, n, e, !1, i, r);
  }
  function oe(t, n, e, i, r, o) {
    if (!n) throw Error("Invalid event type");
    var a = p(r) ? !!r.capture : !!r,
      s = de(t);
    if ((s || (t[ee] = s = new Qn(t)), !(e = s.add(n, e, i, a, o)).proxy))
      if (
        ((i = (function () {
          var t = fe,
            n = Hn
              ? function (e) {
                  return t.call(n.src, n.listener, e);
                }
              : function (e) {
                  if (!(e = t.call(n.src, n.listener, e))) return e;
                };
          return n;
        })()),
        (e.proxy = i),
        (i.src = t),
        (i.listener = e),
        t.addEventListener)
      )
        Bn || (r = a),
          void 0 === r && (r = !1),
          t.addEventListener(n.toString(), i, r);
      else if (t.attachEvent) t.attachEvent(ce(n.toString()), i);
      else {
        if (!t.addListener || !t.removeListener)
          throw Error("addEventListener and attachEvent are unavailable.");
        t.addListener(i);
      }
  }
  function ae(t, n, e, i, r) {
    if (Array.isArray(n))
      for (var o = 0; o < n.length; o++) ae(t, n[o], e, i, r);
    else
      (e = ve(e)),
        t && t[Yn]
          ? be(t, n, e, p(i) ? !!i.capture : !!i, r)
          : oe(t, n, e, !0, i, r);
  }
  function se(t, n, e, i, r) {
    if (Array.isArray(n))
      for (var o = 0; o < n.length; o++) se(t, n[o], e, i, r);
    else
      (i = p(i) ? !!i.capture : !!i),
        (e = ve(e)),
        t && t[Yn]
          ? ((t = t.u),
            (n = String(n).toString()) in t.a &&
              -1 < (e = ne((o = t.a[n]), e, i, r)) &&
              (Zn(o[e]),
              Array.prototype.splice.call(o, e, 1),
              0 == o.length && (delete t.a[n], t.b--)))
          : t &&
            (t = de(t)) &&
            ((n = t.a[n.toString()]),
            (t = -1),
            n && (t = ne(n, e, i, r)),
            (e = -1 < t ? n[t] : null) && ue(e));
  }
  function ue(t) {
    if ("number" != typeof t && t && !t.ua) {
      var n = t.src;
      if (n && n[Yn]) te(n.u, t);
      else {
        var e = t.type,
          i = t.proxy;
        n.removeEventListener
          ? n.removeEventListener(e, i, t.capture)
          : n.detachEvent
          ? n.detachEvent(ce(e), i)
          : n.addListener && n.removeListener && n.removeListener(i),
          (e = de(n))
            ? (te(e, t), 0 == e.b && ((e.src = null), (n[ee] = null)))
            : Zn(t);
      }
    }
  }
  function ce(t) {
    return t in ie ? ie[t] : (ie[t] = "on" + t);
  }
  function he(t, n, e, i) {
    var r = !0;
    if ((t = de(t)) && (n = t.a[n.toString()]))
      for (n = n.concat(), t = 0; t < n.length; t++) {
        var o = n[t];
        o && o.capture == e && !o.ua && ((o = le(o, i)), (r = r && !1 !== o));
      }
    return r;
  }
  function le(t, n) {
    var e = t.listener,
      i = t.Ta || t.src;
    return t.Na && ue(t), e.call(i, n);
  }
  function fe(t, n) {
    if (t.ua) return !0;
    if (!Hn) {
      if (!n)
        t: {
          n = ["window", "event"];
          for (var e = s, i = 0; i < n.length; i++)
            if (null == (e = e[n[i]])) {
              n = null;
              break t;
            }
          n = e;
        }
      if (
        ((n = new Xn((i = n), this)),
        (e = !0),
        !(0 > i.keyCode || null != i.returnValue))
      ) {
        t: {
          var r = !1;
          if (0 == i.keyCode)
            try {
              i.keyCode = -1;
              break t;
            } catch (t) {
              r = !0;
            }
          (r || null == i.returnValue) && (i.returnValue = !0);
        }
        for (i = [], r = n.b; r; r = r.parentNode) i.push(r);
        for (t = t.type, r = i.length - 1; 0 <= r; r--) {
          n.b = i[r];
          var o = he(i[r], t, !0, n);
          e = e && o;
        }
        for (r = 0; r < i.length; r++)
          (n.b = i[r]), (o = he(i[r], t, !1, n)), (e = e && o);
      }
      return e;
    }
    return le(t, new Xn(n, this));
  }
  function de(t) {
    return (t = t[ee]) instanceof Qn ? t : null;
  }
  var pe = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function ve(t) {
    return d(t)
      ? t
      : (t[pe] ||
          (t[pe] = function (n) {
            return t.handleEvent(n);
          }),
        t[pe]);
  }
  function me() {
    Fn.call(this), (this.u = new Qn(this)), (this.Yb = this), (this.eb = null);
  }
  function ge(t, n, e, i, r) {
    t.u.add(String(n), e, !1, i, r);
  }
  function be(t, n, e, i, r) {
    t.u.add(String(n), e, !0, i, r);
  }
  function ye(t, n, e, i) {
    if (!(n = t.u.a[String(n)])) return !0;
    n = n.concat();
    for (var r = !0, o = 0; o < n.length; ++o) {
      var a = n[o];
      if (a && !a.ua && a.capture == e) {
        var s = a.listener,
          u = a.Ta || a.src;
        a.Na && te(t.u, a), (r = !1 !== s.call(u, i) && r);
      }
    }
    return r && !i.defaultPrevented;
  }
  function we(t, n, e) {
    if (d(t)) e && (t = y(t, e));
    else {
      if (!t || "function" != typeof t.handleEvent)
        throw Error("Invalid listener argument");
      t = y(t.handleEvent, t);
    }
    return 2147483647 < Number(n) ? -1 : s.setTimeout(t, n || 0);
  }
  function Ie(t) {
    var n = null;
    return new yn(function (e, i) {
      -1 ==
        (n = we(function () {
          e(void 0);
        }, t)) && i(Error("Failed to schedule timer."));
    }).o(function (t) {
      throw (s.clearTimeout(n), t);
    });
  }
  function Te(t) {
    if (t.V && "function" == typeof t.V) return t.V();
    if ("string" == typeof t) return t.split("");
    if (f(t)) {
      for (var n = [], e = t.length, i = 0; i < e; i++) n.push(t[i]);
      return n;
    }
    for (i in ((n = []), (e = 0), t)) n[e++] = t[i];
    return n;
  }
  function Ee(t) {
    if (t.X && "function" == typeof t.X) return t.X();
    if (!t.V || "function" != typeof t.V) {
      if (f(t) || "string" == typeof t) {
        var n = [];
        t = t.length;
        for (var e = 0; e < t; e++) n.push(e);
        return n;
      }
      for (var i in ((n = []), (e = 0), t)) n[e++] = i;
      return n;
    }
  }
  function Ae(t, n) {
    (this.b = {}), (this.a = []), (this.c = 0);
    var e = arguments.length;
    if (1 < e) {
      if (e % 2) throw Error("Uneven number of arguments");
      for (var i = 0; i < e; i += 2) this.set(arguments[i], arguments[i + 1]);
    } else if (t)
      if (t instanceof Ae)
        for (e = t.X(), i = 0; i < e.length; i++) this.set(e[i], t.get(e[i]));
      else for (i in t) this.set(i, t[i]);
  }
  function ke(t) {
    if (t.c != t.a.length) {
      for (var n = 0, e = 0; n < t.a.length; ) {
        var i = t.a[n];
        Se(t.b, i) && (t.a[e++] = i), n++;
      }
      t.a.length = e;
    }
    if (t.c != t.a.length) {
      var r = {};
      for (e = n = 0; n < t.a.length; )
        Se(r, (i = t.a[n])) || ((t.a[e++] = i), (r[i] = 1)), n++;
      t.a.length = e;
    }
  }
  function Se(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }
  T(me, Fn),
    (me.prototype[Yn] = !0),
    (me.prototype.addEventListener = function (t, n, e, i) {
      re(this, t, n, e, i);
    }),
    (me.prototype.removeEventListener = function (t, n, e, i) {
      se(this, t, n, e, i);
    }),
    (me.prototype.dispatchEvent = function (t) {
      var n,
        e = this.eb;
      if (e) for (n = []; e; e = e.eb) n.push(e);
      e = this.Yb;
      var i = t.type || t;
      if ("string" == typeof t) t = new Wn(t, e);
      else if (t instanceof Wn) t.target = t.target || e;
      else {
        var r = t;
        pt((t = new Wn(i, e)), r);
      }
      if (((r = !0), n))
        for (var o = n.length - 1; 0 <= o; o--) {
          var a = (t.b = n[o]);
          r = ye(a, i, !0, t) && r;
        }
      if (
        ((r = ye((a = t.b = e), i, !0, t) && r), (r = ye(a, i, !1, t) && r), n)
      )
        for (o = 0; o < n.length; o++) r = ye((a = t.b = n[o]), i, !1, t) && r;
      return r;
    }),
    (me.prototype.Ba = function () {
      if ((me.Za.Ba.call(this), this.u)) {
        var t,
          n = this.u;
        for (t in n.a) {
          for (var e = n.a[t], i = 0; i < e.length; i++) Zn(e[i]);
          delete n.a[t], n.b--;
        }
      }
      this.eb = null;
    }),
    ((n = Ae.prototype).V = function () {
      ke(this);
      for (var t = [], n = 0; n < this.a.length; n++) t.push(this.b[this.a[n]]);
      return t;
    }),
    (n.X = function () {
      return ke(this), this.a.concat();
    }),
    (n.clear = function () {
      (this.b = {}), (this.c = this.a.length = 0);
    }),
    (n.get = function (t, n) {
      return Se(this.b, t) ? this.b[t] : n;
    }),
    (n.set = function (t, n) {
      Se(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = n);
    }),
    (n.forEach = function (t, n) {
      for (var e = this.X(), i = 0; i < e.length; i++) {
        var r = e[i],
          o = this.get(r);
        t.call(n, o, r, this);
      }
    });
  var Ne =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function _e(t, n) {
    var e;
    (this.b = this.i = this.f = ""),
      (this.l = null),
      (this.g = this.c = ""),
      (this.h = !1),
      t instanceof _e
        ? ((this.h = void 0 !== n ? n : t.h),
          Oe(this, t.f),
          (this.i = t.i),
          (this.b = t.b),
          Re(this, t.l),
          (this.c = t.c),
          Pe(this, ze(t.a)),
          (this.g = t.g))
        : t && (e = String(t).match(Ne))
        ? ((this.h = !!n),
          Oe(this, e[1] || "", !0),
          (this.i = xe(e[2] || "")),
          (this.b = xe(e[3] || "", !0)),
          Re(this, e[4]),
          (this.c = xe(e[5] || "", !0)),
          Pe(this, e[6] || "", !0),
          (this.g = xe(e[7] || "")))
        : ((this.h = !!n), (this.a = new Ge(null, this.h)));
  }
  function Oe(t, n, e) {
    (t.f = e ? xe(n, !0) : n), t.f && (t.f = t.f.replace(/:$/, ""));
  }
  function Re(t, n) {
    if (n) {
      if (((n = Number(n)), isNaN(n) || 0 > n))
        throw Error("Bad port number " + n);
      t.l = n;
    } else t.l = null;
  }
  function Pe(t, n, e) {
    n instanceof Ge
      ? ((t.a = n),
        (function (t, n) {
          n &&
            !t.f &&
            (Be(t),
            (t.c = null),
            t.a.forEach(function (t, n) {
              var e = n.toLowerCase();
              n != e && (Xe(this, n), Ye(this, e, t));
            }, t)),
            (t.f = n);
        })(t.a, t.h))
      : (e || (n = je(n, Ke)), (t.a = new Ge(n, t.h)));
  }
  function Ce(t, n, e) {
    t.a.set(n, e);
  }
  function De(t, n) {
    return t.a.get(n);
  }
  function Le(t) {
    return t instanceof _e ? new _e(t) : new _e(t, void 0);
  }
  function Me(t, n) {
    var e = new _e(null, void 0);
    return Oe(e, "https"), t && (e.b = t), n && (e.c = n), e;
  }
  function xe(t, n) {
    return t
      ? n
        ? decodeURI(t.replace(/%25/g, "%2525"))
        : decodeURIComponent(t)
      : "";
  }
  function je(t, n, e) {
    return "string" == typeof t
      ? ((t = encodeURI(t).replace(n, Ue)),
        e && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        t)
      : null;
  }
  function Ue(t) {
    return (
      "%" +
      (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
      (15 & t).toString(16)
    );
  }
  (_e.prototype.toString = function () {
    var t = [],
      n = this.f;
    n && t.push(je(n, Ve, !0), ":");
    var e = this.b;
    return (
      (e || "file" == n) &&
        (t.push("//"),
        (n = this.i) && t.push(je(n, Ve, !0), "@"),
        t.push(
          encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        null != (e = this.l) && t.push(":", String(e))),
      (e = this.c) &&
        (this.b && "/" != e.charAt(0) && t.push("/"),
        t.push(je(e, "/" == e.charAt(0) ? qe : Fe, !0))),
      (e = this.a.toString()) && t.push("?", e),
      (e = this.g) && t.push("#", je(e, He)),
      t.join("")
    );
  }),
    (_e.prototype.resolve = function (t) {
      var n = new _e(this),
        e = !!t.f;
      e ? Oe(n, t.f) : (e = !!t.i),
        e ? (n.i = t.i) : (e = !!t.b),
        e ? (n.b = t.b) : (e = null != t.l);
      var i = t.c;
      if (e) Re(n, t.l);
      else if ((e = !!t.c)) {
        if ("/" != i.charAt(0))
          if (this.b && !this.c) i = "/" + i;
          else {
            var r = n.c.lastIndexOf("/");
            -1 != r && (i = n.c.substr(0, r + 1) + i);
          }
        if (".." == (r = i) || "." == r) i = "";
        else if (ot(r, "./") || ot(r, "/.")) {
          (i = 0 == r.lastIndexOf("/", 0)), (r = r.split("/"));
          for (var o = [], a = 0; a < r.length; ) {
            var s = r[a++];
            "." == s
              ? i && a == r.length && o.push("")
              : ".." == s
              ? ((1 < o.length || (1 == o.length && "" != o[0])) && o.pop(),
                i && a == r.length && o.push(""))
              : (o.push(s), (i = !0));
          }
          i = o.join("/");
        } else i = r;
      }
      return (
        e ? (n.c = i) : (e = "" !== t.a.toString()),
        e ? Pe(n, ze(t.a)) : (e = !!t.g),
        e && (n.g = t.g),
        n
      );
    });
  var Ve = /[#\/\?@]/g,
    Fe = /[#\?:]/g,
    qe = /[#\?]/g,
    Ke = /[#\?@]/g,
    He = /#/g;
  function Ge(t, n) {
    (this.b = this.a = null), (this.c = t || null), (this.f = !!n);
  }
  function Be(t) {
    t.a ||
      ((t.a = new Ae()),
      (t.b = 0),
      t.c &&
        (function (t, n) {
          if (t) {
            t = t.split("&");
            for (var e = 0; e < t.length; e++) {
              var i = t[e].indexOf("="),
                r = null;
              if (0 <= i) {
                var o = t[e].substring(0, i);
                r = t[e].substring(i + 1);
              } else o = t[e];
              n(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "");
            }
          }
        })(t.c, function (n, e) {
          t.add(decodeURIComponent(n.replace(/\+/g, " ")), e);
        }));
  }
  function We(t) {
    var n = Ee(t);
    if (void 0 === n) throw Error("Keys are undefined");
    var e = new Ge(null, void 0);
    t = Te(t);
    for (var i = 0; i < n.length; i++) {
      var r = n[i],
        o = t[i];
      Array.isArray(o) ? Ye(e, r, o) : e.add(r, o);
    }
    return e;
  }
  function Xe(t, n) {
    Be(t),
      (n = $e(t, n)),
      Se(t.a.b, n) &&
        ((t.c = null),
        (t.b -= t.a.get(n).length),
        Se((t = t.a).b, n) &&
          (delete t.b[n], t.c--, t.a.length > 2 * t.c && ke(t)));
  }
  function Je(t, n) {
    return Be(t), (n = $e(t, n)), Se(t.a.b, n);
  }
  function Ye(t, n, e) {
    Xe(t, n),
      0 < e.length &&
        ((t.c = null), t.a.set($e(t, n), Y(e)), (t.b += e.length));
  }
  function ze(t) {
    var n = new Ge();
    return (n.c = t.c), t.a && ((n.a = new Ae(t.a)), (n.b = t.b)), n;
  }
  function $e(t, n) {
    return (n = String(n)), t.f && (n = n.toLowerCase()), n;
  }
  function Ze(t) {
    var n = [];
    return (
      (function t(n, e, i) {
        if (null == e) i.push("null");
        else {
          if ("object" == typeof e) {
            if (Array.isArray(e)) {
              var r = e;
              (e = r.length), i.push("[");
              for (var o = "", a = 0; a < e; a++)
                i.push(o), t(n, r[a], i), (o = ",");
              return void i.push("]");
            }
            if (
              !(
                e instanceof String ||
                e instanceof Number ||
                e instanceof Boolean
              )
            ) {
              for (r in (i.push("{"), (o = ""), e))
                Object.prototype.hasOwnProperty.call(e, r) &&
                  "function" != typeof (a = e[r]) &&
                  (i.push(o), ei(r, i), i.push(":"), t(n, a, i), (o = ","));
              return void i.push("}");
            }
            e = e.valueOf();
          }
          switch (typeof e) {
            case "string":
              ei(e, i);
              break;
            case "number":
              i.push(isFinite(e) && !isNaN(e) ? String(e) : "null");
              break;
            case "boolean":
              i.push(String(e));
              break;
            case "function":
              i.push("null");
              break;
            default:
              throw Error("Unknown type: " + typeof e);
          }
        }
      })(new Qe(), t, n),
      n.join("")
    );
  }
  function Qe() {}
  ((n = Ge.prototype).add = function (t, n) {
    Be(this), (this.c = null), (t = $e(this, t));
    var e = this.a.get(t);
    return e || this.a.set(t, (e = [])), e.push(n), (this.b += 1), this;
  }),
    (n.clear = function () {
      (this.a = this.c = null), (this.b = 0);
    }),
    (n.forEach = function (t, n) {
      Be(this),
        this.a.forEach(function (e, i) {
          q(
            e,
            function (e) {
              t.call(n, e, i, this);
            },
            this
          );
        }, this);
    }),
    (n.X = function () {
      Be(this);
      for (var t = this.a.V(), n = this.a.X(), e = [], i = 0; i < n.length; i++)
        for (var r = t[i], o = 0; o < r.length; o++) e.push(n[i]);
      return e;
    }),
    (n.V = function (t) {
      Be(this);
      var n = [];
      if ("string" == typeof t)
        Je(this, t) && (n = J(n, this.a.get($e(this, t))));
      else {
        t = this.a.V();
        for (var e = 0; e < t.length; e++) n = J(n, t[e]);
      }
      return n;
    }),
    (n.set = function (t, n) {
      return (
        Be(this),
        (this.c = null),
        Je(this, (t = $e(this, t))) && (this.b -= this.a.get(t).length),
        this.a.set(t, [n]),
        (this.b += 1),
        this
      );
    }),
    (n.get = function (t, n) {
      return t && 0 < (t = this.V(t)).length ? String(t[0]) : n;
    }),
    (n.toString = function () {
      if (this.c) return this.c;
      if (!this.a) return "";
      for (var t = [], n = this.a.X(), e = 0; e < n.length; e++) {
        var i = n[e],
          r = encodeURIComponent(String(i));
        i = this.V(i);
        for (var o = 0; o < i.length; o++) {
          var a = r;
          "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))),
            t.push(a);
        }
      }
      return (this.c = t.join("&"));
    });
  var ti = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\u000b",
    },
    ni = /\uffff/.test("￿")
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g;
  function ei(t, n) {
    n.push(
      '"',
      t.replace(ni, function (t) {
        var n = ti[t];
        return (
          n ||
            ((n = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1)),
            (ti[t] = n)),
          n
        );
      }),
      '"'
    );
  }
  function ii() {
    var t = Ti();
    return (Bt && !!tn && 11 == tn) || /Edge\/\d+/.test(t);
  }
  function ri() {
    return (
      (s.window && s.window.location.href) ||
      (self && self.location && self.location.href) ||
      ""
    );
  }
  function oi(t, n) {
    n = n || s.window;
    var e = "about:blank";
    t && (e = Ot(Pt(t))), (n.location.href = e);
  }
  function ai(t) {
    return !!(
      (t = (t || Ti()).toLowerCase()).match(/android/) ||
      t.match(/webos/) ||
      t.match(/iphone|ipad|ipod/) ||
      t.match(/blackberry/) ||
      t.match(/windows phone/) ||
      t.match(/iemobile/)
    );
  }
  function si(t) {
    t = t || s.window;
    try {
      t.close();
    } catch (t) {}
  }
  function ui(t, n, e) {
    var i = Math.floor(1e9 * Math.random()).toString();
    (n = n || 500), (e = e || 600);
    var r = (window.screen.availHeight - e) / 2,
      o = (window.screen.availWidth - n) / 2;
    for (a in ((n = {
      width: n,
      height: e,
      top: 0 < r ? r : 0,
      left: 0 < o ? o : 0,
      location: !0,
      resizable: !0,
      statusbar: !0,
      toolbar: !1,
    }),
    (e = Ti().toLowerCase()),
    i && ((n.target = i), ot(e, "crios/") && (n.target = "_blank")),
    yi(Ti()) == gi && ((t = t || "http://localhost"), (n.scrollbars = !0)),
    (e = t || ""),
    (t = n) || (t = {}),
    (i = window),
    (n = e instanceof _t ? e : Pt(void 0 !== e.href ? e.href : String(e))),
    (e = t.target || e.target),
    (r = []),
    t))
      switch (a) {
        case "width":
        case "height":
        case "top":
        case "left":
          r.push(a + "=" + t[a]);
          break;
        case "target":
        case "noopener":
        case "noreferrer":
          break;
        default:
          r.push(a + "=" + (t[a] ? 1 : 0));
      }
    var a = r.join(",");
    if (
      (((ct("iPhone") && !ct("iPod") && !ct("iPad")) ||
        ct("iPad") ||
        ct("iPod")) &&
      i.navigator &&
      i.navigator.standalone &&
      e &&
      "_self" != e
        ? (vt((a = ln(document, "A")), "HTMLAnchorElement"),
          n instanceof _t ||
            n instanceof _t ||
            ((n = "object" == typeof n && n.ra ? n.qa() : String(n)),
            Rt.test(n) || (n = "about:invalid#zClosurez"),
            (n = new _t(Dt, n))),
          (a.href = Ot(n)),
          a.setAttribute("target", e),
          t.noreferrer && a.setAttribute("rel", "noreferrer"),
          (t = document.createEvent("MouseEvent")).initMouseEvent(
            "click",
            !0,
            !0,
            i,
            1
          ),
          a.dispatchEvent(t),
          (a = {}))
        : t.noreferrer
        ? ((a = i.open("", e, a)),
          (t = Ot(n)),
          a &&
            (Xt && ot(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"),
            (a.opener = null),
            (t = jt(
              '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                Ft(t) +
                '">'
            )),
            (i = a.document)) &&
            (i.write(Mt(t)), i.close()))
        : (a = i.open(Ot(n), e, a)) && t.noopener && (a.opener = null),
      a)
    )
      try {
        a.focus();
      } catch (t) {}
    return a;
  }
  var ci = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    hi = /^[^@]+@[^@]+$/;
  function li() {
    var t = null;
    return new yn(function (n) {
      "complete" == s.document.readyState
        ? n()
        : ((t = function () {
            n();
          }),
          ae(window, "load", t));
    }).o(function (n) {
      throw (se(window, "load", t), n);
    });
  }
  function fi(t) {
    return (
      (t = t || Ti()),
      !(
        ("file:" !== Ni() && "ionic:" !== Ni()) ||
        !t.toLowerCase().match(/iphone|ipad|ipod|android/)
      )
    );
  }
  function di() {
    var t = s.window;
    try {
      return !(!t || t == t.top);
    } catch (t) {
      return !1;
    }
  }
  function pi() {
    return (
      void 0 !== s.WorkerGlobalScope && "function" == typeof s.importScripts
    );
  }
  function vi() {
    return t.INTERNAL.hasOwnProperty("reactNative")
      ? "ReactNative"
      : t.INTERNAL.hasOwnProperty("node")
      ? "Node"
      : pi()
      ? "Worker"
      : "Browser";
  }
  function mi() {
    var t = vi();
    return "ReactNative" === t || "Node" === t;
  }
  var gi = "Firefox",
    bi = "Chrome";
  function yi(t) {
    var n = t.toLowerCase();
    return ot(n, "opera/") || ot(n, "opr/") || ot(n, "opios/")
      ? "Opera"
      : ot(n, "iemobile")
      ? "IEMobile"
      : ot(n, "msie") || ot(n, "trident/")
      ? "IE"
      : ot(n, "edge/")
      ? "Edge"
      : ot(n, "firefox/")
      ? gi
      : ot(n, "silk/")
      ? "Silk"
      : ot(n, "blackberry")
      ? "Blackberry"
      : ot(n, "webos")
      ? "Webos"
      : !ot(n, "safari/") ||
        ot(n, "chrome/") ||
        ot(n, "crios/") ||
        ot(n, "android")
      ? (!ot(n, "chrome/") && !ot(n, "crios/")) || ot(n, "edge/")
        ? ot(n, "android")
          ? "Android"
          : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length
          ? t[1]
          : "Other"
        : bi
      : "Safari";
  }
  var wi = { jd: "FirebaseCore-web", ld: "FirebaseUI-web" };
  function Ii(t, n) {
    n = n || [];
    var e,
      i = [],
      r = {};
    for (e in wi) r[wi[e]] = !0;
    for (e = 0; e < n.length; e++)
      void 0 !== r[n[e]] && (delete r[n[e]], i.push(n[e]));
    return (
      i.sort(),
      (n = i).length || (n = ["FirebaseCore-web"]),
      "Browser" === (i = vi())
        ? (i = yi((r = Ti())))
        : "Worker" === i && (i = yi((r = Ti())) + "-" + i),
      i + "/JsCore/" + t + "/" + n.join(",")
    );
  }
  function Ti() {
    return (s.navigator && s.navigator.userAgent) || "";
  }
  function Ei(t, n) {
    (t = t.split(".")), (n = n || s);
    for (var e = 0; e < t.length && "object" == typeof n && null != n; e++)
      n = n[t[e]];
    return e != t.length && (n = void 0), n;
  }
  function Ai() {
    try {
      var t = s.localStorage,
        n = Ci();
      if (t) return t.setItem(n, "1"), t.removeItem(n), !ii() || !!s.indexedDB;
    } catch (t) {
      return pi() && !!s.indexedDB;
    }
    return !1;
  }
  function ki() {
    return (
      (Si() || "chrome-extension:" === Ni() || fi()) && !mi() && Ai() && !pi()
    );
  }
  function Si() {
    return "http:" === Ni() || "https:" === Ni();
  }
  function Ni() {
    return (s.location && s.location.protocol) || null;
  }
  function _i(t) {
    return !ai((t = t || Ti())) && yi(t) != gi;
  }
  function Oi(t) {
    return void 0 === t ? null : Ze(t);
  }
  function Ri(t) {
    var n,
      e = {};
    for (n in t)
      t.hasOwnProperty(n) && null !== t[n] && void 0 !== t[n] && (e[n] = t[n]);
    return e;
  }
  function Pi(t) {
    if (null !== t) return JSON.parse(t);
  }
  function Ci(t) {
    return t || Math.floor(1e9 * Math.random()).toString();
  }
  function Di(t) {
    return (
      "Safari" != yi((t = t || Ti())) &&
      !t.toLowerCase().match(/iphone|ipad|ipod/)
    );
  }
  function Li() {
    var t = s.___jsl;
    if (t && t.H)
      for (var n in t.H)
        if (
          ((t.H[n].r = t.H[n].r || []),
          (t.H[n].L = t.H[n].L || []),
          (t.H[n].r = t.H[n].L.concat()),
          t.CP)
        )
          for (var e = 0; e < t.CP.length; e++) t.CP[e] = null;
  }
  function Mi(t, n) {
    if (t > n) throw Error("Short delay should be less than long delay!");
    (this.a = t),
      (this.c = n),
      (t = Ti()),
      (n = vi()),
      (this.b = ai(t) || "ReactNative" === n);
  }
  function xi() {
    var t = s.document;
    return !t || void 0 === t.visibilityState || "visible" == t.visibilityState;
  }
  function ji(t) {
    try {
      var n = new Date(parseInt(t, 10));
      if (!isNaN(n.getTime()) && !/[^0-9]/.test(t)) return n.toUTCString();
    } catch (t) {}
    return null;
  }
  function Ui() {
    return !(!Ei("fireauth.oauthhelper", s) && !Ei("fireauth.iframe", s));
  }
  Mi.prototype.get = function () {
    var t = s.navigator;
    return !t ||
      "boolean" != typeof t.onLine ||
      (!Si() && "chrome-extension:" !== Ni() && void 0 === t.connection) ||
      t.onLine
      ? this.b
        ? this.c
        : this.a
      : Math.min(5e3, this.a);
  };
  var Vi,
    Fi = {};
  function qi(t) {
    Fi[t] ||
      ((Fi[t] = !0),
      "undefined" != typeof console &&
        "function" == typeof console.warn &&
        console.warn(t));
  }
  try {
    var Ki = {};
    Object.defineProperty(Ki, "abcd", {
      configurable: !0,
      enumerable: !0,
      value: 1,
    }),
      Object.defineProperty(Ki, "abcd", {
        configurable: !0,
        enumerable: !0,
        value: 2,
      }),
      (Vi = 2 == Ki.abcd);
  } catch (Ht) {
    Vi = !1;
  }
  function Hi(t, n, e) {
    Vi
      ? Object.defineProperty(t, n, {
          configurable: !0,
          enumerable: !0,
          value: e,
        })
      : (t[n] = e);
  }
  function Gi(t, n) {
    if (n) for (var e in n) n.hasOwnProperty(e) && Hi(t, e, n[e]);
  }
  function Bi(t) {
    var n = {};
    return Gi(n, t), n;
  }
  function Wi(t) {
    var n = t;
    if ("object" == typeof t && null != t)
      for (var e in ((n = "length" in t ? [] : {}), t)) Hi(n, e, Wi(t[e]));
    return n;
  }
  function Xi(t) {
    var n = t && (t[Zi] ? "phone" : null);
    if (!(n && t && t[$i]))
      throw new E(
        "internal-error",
        "Internal assert: invalid MultiFactorInfo object"
      );
    Hi(this, "uid", t[$i]), Hi(this, "displayName", t[Yi] || null);
    var e = null;
    t[zi] && (e = new Date(t[zi]).toUTCString()),
      Hi(this, "enrollmentTime", e),
      Hi(this, "factorId", n);
  }
  function Ji(t) {
    try {
      var n = new Qi(t);
    } catch (t) {
      n = null;
    }
    return n;
  }
  Xi.prototype.v = function () {
    return {
      uid: this.uid,
      displayName: this.displayName,
      factorId: this.factorId,
      enrollmentTime: this.enrollmentTime,
    };
  };
  var Yi = "displayName",
    zi = "enrolledAt",
    $i = "mfaEnrollmentId",
    Zi = "phoneInfo";
  function Qi(t) {
    Xi.call(this, t), Hi(this, "phoneNumber", t[Zi]);
  }
  function tr(t) {
    var n = {},
      e = t[rr],
      i = t[ar],
      r = t[sr];
    if (
      ((t = Ji(t[or])),
      !r || (r != er && r != ir && !e) || (r == ir && !i) || (r == nr && !t))
    )
      throw Error("Invalid checkActionCode response!");
    r == ir
      ? ((n[cr] = e || null), (n[lr] = e || null), (n[ur] = i))
      : ((n[cr] = i || null), (n[lr] = i || null), (n[ur] = e || null)),
      (n[hr] = t || null),
      Hi(this, dr, r),
      Hi(this, fr, Wi(n));
  }
  T(Qi, Xi),
    (Qi.prototype.v = function () {
      var t = Qi.Za.v.call(this);
      return (t.phoneNumber = this.phoneNumber), t;
    });
  var nr = "REVERT_SECOND_FACTOR_ADDITION",
    er = "EMAIL_SIGNIN",
    ir = "VERIFY_AND_CHANGE_EMAIL",
    rr = "email",
    or = "mfaInfo",
    ar = "newEmail",
    sr = "requestType",
    ur = "email",
    cr = "fromEmail",
    hr = "multiFactorInfo",
    lr = "previousEmail",
    fr = "data",
    dr = "operation";
  function pr(t) {
    var n = De((t = Le(t)), vr) || null,
      e = De(t, mr) || null,
      i = De(t, yr) || null;
    if (((i = (i && Ir[i]) || null), !n || !e || !i))
      throw new E(
        "argument-error",
        vr +
          ", " +
          mr +
          "and " +
          yr +
          " are required in a valid action code URL."
      );
    Gi(this, {
      apiKey: n,
      operation: i,
      code: e,
      continueUrl: De(t, gr) || null,
      languageCode: De(t, br) || null,
      tenantId: De(t, wr) || null,
    });
  }
  var vr = "apiKey",
    mr = "oobCode",
    gr = "continueUrl",
    br = "languageCode",
    yr = "mode",
    wr = "tenantId",
    Ir = {
      recoverEmail: "RECOVER_EMAIL",
      resetPassword: "PASSWORD_RESET",
      revertSecondFactorAddition: nr,
      signIn: er,
      verifyAndChangeEmail: ir,
      verifyEmail: "VERIFY_EMAIL",
    };
  function Tr(t) {
    try {
      return new pr(t);
    } catch (t) {
      return null;
    }
  }
  function Er(t) {
    var n = t[_r];
    if (void 0 === n) throw new E("missing-continue-uri");
    if ("string" != typeof n || ("string" == typeof n && !n.length))
      throw new E("invalid-continue-uri");
    (this.h = n), (this.b = this.a = null), (this.g = !1);
    var e = t[Ar];
    if (e && "object" == typeof e) {
      n = e[Pr];
      var i = e[Or];
      if (((e = e[Rr]), "string" == typeof n && n.length)) {
        if (((this.a = n), void 0 !== i && "boolean" != typeof i))
          throw new E(
            "argument-error",
            Or + " property must be a boolean when specified."
          );
        if (
          ((this.g = !!i),
          void 0 !== e &&
            ("string" != typeof e || ("string" == typeof e && !e.length)))
        )
          throw new E(
            "argument-error",
            Rr + " property must be a non empty string when specified."
          );
        this.b = e || null;
      } else {
        if (void 0 !== n)
          throw new E(
            "argument-error",
            Pr + " property must be a non empty string when specified."
          );
        if (void 0 !== i || void 0 !== e)
          throw new E("missing-android-pkg-name");
      }
    } else if (void 0 !== e)
      throw new E(
        "argument-error",
        Ar + " property must be a non null object when specified."
      );
    if (((this.f = null), (n = t[Nr]) && "object" == typeof n)) {
      if ("string" == typeof (n = n[Cr]) && n.length) this.f = n;
      else if (void 0 !== n)
        throw new E(
          "argument-error",
          Cr + " property must be a non empty string when specified."
        );
    } else if (void 0 !== n)
      throw new E(
        "argument-error",
        Nr + " property must be a non null object when specified."
      );
    if (void 0 !== (n = t[Sr]) && "boolean" != typeof n)
      throw new E(
        "argument-error",
        Sr + " property must be a boolean when specified."
      );
    if (
      ((this.c = !!n),
      void 0 !== (t = t[kr]) &&
        ("string" != typeof t || ("string" == typeof t && !t.length)))
    )
      throw new E(
        "argument-error",
        kr + " property must be a non empty string when specified."
      );
    this.i = t || null;
  }
  var Ar = "android",
    kr = "dynamicLinkDomain",
    Sr = "handleCodeInApp",
    Nr = "iOS",
    _r = "url",
    Or = "installApp",
    Rr = "minimumVersion",
    Pr = "packageName",
    Cr = "bundleId";
  function Dr(t) {
    var n = {};
    for (var e in ((n.continueUrl = t.h),
    (n.canHandleCodeInApp = t.c),
    (n.androidPackageName = t.a) &&
      ((n.androidMinimumVersion = t.b), (n.androidInstallApp = t.g)),
    (n.iOSBundleId = t.f),
    (n.dynamicLinkDomain = t.i),
    n))
      null === n[e] && delete n[e];
    return n;
  }
  var Lr = null;
  function Mr(t) {
    var n = "";
    return (
      (function (t, n) {
        function e(n) {
          for (; i < t.length; ) {
            var e = t.charAt(i++),
              r = Lr[e];
            if (null != r) return r;
            if (!/^[\s\xa0]*$/.test(e))
              throw Error("Unknown base64 encoding at char: " + e);
          }
          return n;
        }
        !(function () {
          if (!Lr) {
            Lr = {};
            for (
              var t =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                    ""
                  ),
                n = ["+/=", "+/", "-_=", "-_.", "-_"],
                e = 0;
              5 > e;
              e++
            )
              for (var i = t.concat(n[e].split("")), r = 0; r < i.length; r++) {
                var o = i[r];
                void 0 === Lr[o] && (Lr[o] = r);
              }
          }
        })();
        for (var i = 0; ; ) {
          var r = e(-1),
            o = e(0),
            a = e(64),
            s = e(64);
          if (64 === s && -1 === r) break;
          n((r << 2) | (o >> 4)),
            64 != a &&
              (n(((o << 4) & 240) | (a >> 2)),
              64 != s && n(((a << 6) & 192) | s));
        }
      })(t, function (t) {
        n += String.fromCharCode(t);
      }),
      n
    );
  }
  function xr(t) {
    var n = Ur(t);
    if (!(n && n.sub && n.iss && n.aud && n.exp)) throw Error("Invalid JWT");
    (this.g = t),
      (this.c = n.exp),
      (this.h = n.sub),
      (this.a =
        n.provider_id || (n.firebase && n.firebase.sign_in_provider) || null),
      (this.f = (n.firebase && n.firebase.tenant) || null),
      (this.b = !!n.is_anonymous || "anonymous" == this.a);
  }
  function jr(t) {
    try {
      return new xr(t);
    } catch (t) {
      return null;
    }
  }
  function Ur(t) {
    if (!t) return null;
    if (3 != (t = t.split(".")).length) return null;
    for (var n = (4 - ((t = t[1]).length % 4)) % 4, e = 0; e < n; e++) t += ".";
    try {
      return JSON.parse(Mr(t));
    } catch (t) {}
    return null;
  }
  (xr.prototype.S = function () {
    return this.f;
  }),
    (xr.prototype.i = function () {
      return this.b;
    }),
    (xr.prototype.toString = function () {
      return this.g;
    });
  var Vr =
      "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(
        " "
      ),
    Fr = ["client_id", "response_type", "scope", "redirect_uri", "state"],
    qr = {
      kd: { Ha: "locale", ta: 700, sa: 600, ea: "facebook.com", Va: Fr },
      md: { Ha: null, ta: 500, sa: 750, ea: "github.com", Va: Fr },
      nd: { Ha: "hl", ta: 515, sa: 680, ea: "google.com", Va: Fr },
      td: { Ha: "lang", ta: 485, sa: 705, ea: "twitter.com", Va: Vr },
      gd: { Ha: "locale", ta: 600, sa: 600, ea: "apple.com", Va: [] },
    };
  function Kr(t) {
    for (var n in qr) if (qr[n].ea == t) return qr[n];
    return null;
  }
  function Hr(t) {
    var n = {};
    (n["facebook.com"] = Jr),
      (n["google.com"] = zr),
      (n["github.com"] = Yr),
      (n["twitter.com"] = $r);
    var e = t && t[Br];
    try {
      if (e) return n[e] ? new n[e](t) : new Xr(t);
      if (void 0 !== t[Gr]) return new Wr(t);
    } catch (t) {}
    return null;
  }
  var Gr = "idToken",
    Br = "providerId";
  function Wr(t) {
    var n = t[Br];
    if (!n && t[Gr]) {
      var e = jr(t[Gr]);
      e && e.a && (n = e.a);
    }
    if (!n) throw Error("Invalid additional user info!");
    ("anonymous" != n && "custom" != n) || (n = null),
      (e = !1),
      void 0 !== t.isNewUser
        ? (e = !!t.isNewUser)
        : "identitytoolkit#SignupNewUserResponse" === t.kind && (e = !0),
      Hi(this, "providerId", n),
      Hi(this, "isNewUser", e);
  }
  function Xr(t) {
    Wr.call(this, t),
      Hi(this, "profile", Wi((t = Pi(t.rawUserInfo || "{}")) || {}));
  }
  function Jr(t) {
    if ((Xr.call(this, t), "facebook.com" != this.providerId))
      throw Error("Invalid provider ID!");
  }
  function Yr(t) {
    if ((Xr.call(this, t), "github.com" != this.providerId))
      throw Error("Invalid provider ID!");
    Hi(this, "username", (this.profile && this.profile.login) || null);
  }
  function zr(t) {
    if ((Xr.call(this, t), "google.com" != this.providerId))
      throw Error("Invalid provider ID!");
  }
  function $r(t) {
    if ((Xr.call(this, t), "twitter.com" != this.providerId))
      throw Error("Invalid provider ID!");
    Hi(this, "username", t.screenName || null);
  }
  function Zr(t) {
    var n = Le(t),
      e = De(n, "link"),
      i = De(Le(e), "link");
    return (n = De(n, "deep_link_id")), De(Le(n), "link") || n || i || e || t;
  }
  function Qr(t, n) {
    if (!t && !n)
      throw new E(
        "internal-error",
        "Internal assert: no raw session string available"
      );
    if (t && n)
      throw new E(
        "internal-error",
        "Internal assert: unable to determine the session type"
      );
    (this.a = t || null), (this.b = n || null), (this.type = this.a ? to : no);
  }
  T(Xr, Wr), T(Jr, Xr), T(Yr, Xr), T(zr, Xr), T($r, Xr);
  var to = "enroll",
    no = "signin";
  function eo() {}
  function io(t, n) {
    return t
      .then(function (t) {
        if (t[Ba]) {
          var e = jr(t[Ba]);
          if (!e || n != e.h) throw new E("user-mismatch");
          return t;
        }
        throw new E("user-mismatch");
      })
      .o(function (t) {
        throw t && t.code && t.code == S + "user-not-found"
          ? new E("user-mismatch")
          : t;
      });
  }
  function ro(t, n) {
    if (!n) throw new E("internal-error", "failed to construct a credential");
    (this.a = n), Hi(this, "providerId", t), Hi(this, "signInMethod", t);
  }
  function oo(t) {
    return { pendingToken: t.a, requestUri: "http://localhost" };
  }
  function ao(t) {
    if (
      t &&
      t.providerId &&
      t.signInMethod &&
      0 == t.providerId.indexOf("saml.") &&
      t.pendingToken
    )
      try {
        return new ro(t.providerId, t.pendingToken);
      } catch (t) {}
    return null;
  }
  function so(t, n, e) {
    if (((this.a = null), n.idToken || n.accessToken))
      n.idToken && Hi(this, "idToken", n.idToken),
        n.accessToken && Hi(this, "accessToken", n.accessToken),
        n.nonce && !n.pendingToken && Hi(this, "nonce", n.nonce),
        n.pendingToken && (this.a = n.pendingToken);
    else {
      if (!n.oauthToken || !n.oauthTokenSecret)
        throw new E("internal-error", "failed to construct a credential");
      Hi(this, "accessToken", n.oauthToken),
        Hi(this, "secret", n.oauthTokenSecret);
    }
    Hi(this, "providerId", t), Hi(this, "signInMethod", e);
  }
  function uo(t) {
    var n = {};
    return (
      t.idToken && (n.id_token = t.idToken),
      t.accessToken && (n.access_token = t.accessToken),
      t.secret && (n.oauth_token_secret = t.secret),
      (n.providerId = t.providerId),
      t.nonce && !t.a && (n.nonce = t.nonce),
      (n = { postBody: We(n).toString(), requestUri: "http://localhost" }),
      t.a && (delete n.postBody, (n.pendingToken = t.a)),
      n
    );
  }
  function co(t) {
    if (t && t.providerId && t.signInMethod) {
      var n = {
        idToken: t.oauthIdToken,
        accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
        oauthTokenSecret: t.oauthTokenSecret,
        oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
        nonce: t.nonce,
        pendingToken: t.pendingToken,
      };
      try {
        return new so(t.providerId, n, t.signInMethod);
      } catch (t) {}
    }
    return null;
  }
  function ho(t, n) {
    (this.Oc = n || []),
      Gi(this, { providerId: t, isOAuthProvider: !0 }),
      (this.Fb = {}),
      (this.lb = (Kr(t) || {}).Ha || null),
      (this.kb = null);
  }
  function lo(t) {
    if ("string" != typeof t || 0 != t.indexOf("saml."))
      throw new E(
        "argument-error",
        'SAML provider IDs must be prefixed with "saml."'
      );
    ho.call(this, t, []);
  }
  function fo(t) {
    ho.call(this, t, Fr), (this.a = []);
  }
  function po() {
    fo.call(this, "facebook.com");
  }
  function vo(t) {
    if (!t)
      throw new E(
        "argument-error",
        "credential failed: expected 1 argument (the OAuth access token)."
      );
    var n = t;
    return p(t) && (n = t.accessToken), new po().credential({ accessToken: n });
  }
  function mo() {
    fo.call(this, "github.com");
  }
  function go(t) {
    if (!t)
      throw new E(
        "argument-error",
        "credential failed: expected 1 argument (the OAuth access token)."
      );
    var n = t;
    return p(t) && (n = t.accessToken), new mo().credential({ accessToken: n });
  }
  function bo() {
    fo.call(this, "google.com"), this.Aa("profile");
  }
  function yo(t, n) {
    var e = t;
    return (
      p(t) && ((e = t.idToken), (n = t.accessToken)),
      new bo().credential({ idToken: e, accessToken: n })
    );
  }
  function wo() {
    ho.call(this, "twitter.com", Vr);
  }
  function Io(t, n) {
    var e = t;
    if (
      (p(e) || (e = { oauthToken: t, oauthTokenSecret: n }),
      !e.oauthToken || !e.oauthTokenSecret)
    )
      throw new E(
        "argument-error",
        "credential failed: expected 2 arguments (the OAuth access token and secret)."
      );
    return new so("twitter.com", e, "twitter.com");
  }
  function To(t, n, e) {
    (this.a = t),
      (this.f = n),
      Hi(this, "providerId", "password"),
      Hi(
        this,
        "signInMethod",
        e === Ao.EMAIL_LINK_SIGN_IN_METHOD
          ? Ao.EMAIL_LINK_SIGN_IN_METHOD
          : Ao.EMAIL_PASSWORD_SIGN_IN_METHOD
      );
  }
  function Eo(t) {
    return t && t.email && t.password
      ? new To(t.email, t.password, t.signInMethod)
      : null;
  }
  function Ao() {
    Gi(this, { providerId: "password", isOAuthProvider: !1 });
  }
  function ko(t, n) {
    if (!(n = So(n))) throw new E("argument-error", "Invalid email link!");
    return new To(t, n.code, Ao.EMAIL_LINK_SIGN_IN_METHOD);
  }
  function So(t) {
    return (t = Tr((t = Zr(t)))) && t.operation === er ? t : null;
  }
  function No(t) {
    if (!((t.bb && t.ab) || (t.Ja && t.da))) throw new E("internal-error");
    (this.a = t),
      Hi(this, "providerId", "phone"),
      (this.ea = "phone"),
      Hi(this, "signInMethod", "phone");
  }
  function _o(t) {
    if (
      t &&
      "phone" === t.providerId &&
      ((t.verificationId && t.verificationCode) ||
        (t.temporaryProof && t.phoneNumber))
    ) {
      var n = {};
      return (
        q(
          [
            "verificationId",
            "verificationCode",
            "temporaryProof",
            "phoneNumber",
          ],
          function (e) {
            t[e] && (n[e] = t[e]);
          }
        ),
        new No(n)
      );
    }
    return null;
  }
  function Oo(t) {
    return t.a.Ja && t.a.da
      ? { temporaryProof: t.a.Ja, phoneNumber: t.a.da }
      : { sessionInfo: t.a.bb, code: t.a.ab };
  }
  function Ro(n) {
    try {
      this.a = n || t.auth();
    } catch (t) {
      throw new E(
        "argument-error",
        "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp()."
      );
    }
    Gi(this, { providerId: "phone", isOAuthProvider: !1 });
  }
  function Po(t, n) {
    if (!t) throw new E("missing-verification-id");
    if (!n) throw new E("missing-verification-code");
    return new No({ bb: t, ab: n });
  }
  function Co(t) {
    if (t.temporaryProof && t.phoneNumber)
      return new No({ Ja: t.temporaryProof, da: t.phoneNumber });
    var n = t && t.providerId;
    if (!n || "password" === n) return null;
    var e = t && t.oauthAccessToken,
      i = t && t.oauthTokenSecret,
      r = t && t.nonce,
      o = t && t.oauthIdToken,
      a = t && t.pendingToken;
    try {
      switch (n) {
        case "google.com":
          return yo(o, e);
        case "facebook.com":
          return vo(e);
        case "github.com":
          return go(e);
        case "twitter.com":
          return Io(e, i);
        default:
          return e || i || o || a
            ? a
              ? 0 == n.indexOf("saml.")
                ? new ro(n, a)
                : new so(
                    n,
                    {
                      pendingToken: a,
                      idToken: t.oauthIdToken,
                      accessToken: t.oauthAccessToken,
                    },
                    n
                  )
              : new fo(n).credential({
                  idToken: o,
                  accessToken: e,
                  rawNonce: r,
                })
            : null;
      }
    } catch (t) {
      return null;
    }
  }
  function Do(t) {
    if (!t.isOAuthProvider) throw new E("invalid-oauth-provider");
  }
  function Lo(t, n, e, i, r, o, a) {
    if (
      ((this.c = t),
      (this.b = n || null),
      (this.g = e || null),
      (this.f = i || null),
      (this.i = o || null),
      (this.h = a || null),
      (this.a = r || null),
      !this.g && !this.a)
    )
      throw new E("invalid-auth-event");
    if (this.g && this.a) throw new E("invalid-auth-event");
    if (this.g && !this.f) throw new E("invalid-auth-event");
  }
  function Mo(t) {
    return (t = t || {}).type
      ? new Lo(
          t.type,
          t.eventId,
          t.urlResponse,
          t.sessionId,
          t.error && A(t.error),
          t.postBody,
          t.tenantId
        )
      : null;
  }
  function xo() {
    (this.b = null), (this.a = []);
  }
  (Qr.prototype.Fa = function () {
    return this.a ? Sn(this.a) : Sn(this.b);
  }),
    (Qr.prototype.v = function () {
      return this.type == to
        ? { multiFactorSession: { idToken: this.a } }
        : { multiFactorSession: { pendingCredential: this.b } };
    }),
    (eo.prototype.ia = function () {}),
    (eo.prototype.b = function () {}),
    (eo.prototype.c = function () {}),
    (eo.prototype.v = function () {}),
    (ro.prototype.ia = function (t) {
      return ls(t, oo(this));
    }),
    (ro.prototype.b = function (t, n) {
      var e = oo(this);
      return (e.idToken = n), fs(t, e);
    }),
    (ro.prototype.c = function (t, n) {
      return io(ds(t, oo(this)), n);
    }),
    (ro.prototype.v = function () {
      return {
        providerId: this.providerId,
        signInMethod: this.signInMethod,
        pendingToken: this.a,
      };
    }),
    (so.prototype.ia = function (t) {
      return ls(t, uo(this));
    }),
    (so.prototype.b = function (t, n) {
      var e = uo(this);
      return (e.idToken = n), fs(t, e);
    }),
    (so.prototype.c = function (t, n) {
      return io(ds(t, uo(this)), n);
    }),
    (so.prototype.v = function () {
      var t = { providerId: this.providerId, signInMethod: this.signInMethod };
      return (
        this.idToken && (t.oauthIdToken = this.idToken),
        this.accessToken && (t.oauthAccessToken = this.accessToken),
        this.secret && (t.oauthTokenSecret = this.secret),
        this.nonce && (t.nonce = this.nonce),
        this.a && (t.pendingToken = this.a),
        t
      );
    }),
    (ho.prototype.Ia = function (t) {
      return (this.Fb = ft(t)), this;
    }),
    T(lo, ho),
    T(fo, ho),
    (fo.prototype.Aa = function (t) {
      return B(this.a, t) || this.a.push(t), this;
    }),
    (fo.prototype.Nb = function () {
      return Y(this.a);
    }),
    (fo.prototype.credential = function (t, n) {
      var e;
      if (
        !(e = p(t)
          ? {
              idToken: t.idToken || null,
              accessToken: t.accessToken || null,
              nonce: t.rawNonce || null,
            }
          : { idToken: t || null, accessToken: n || null }).idToken &&
        !e.accessToken
      )
        throw new E(
          "argument-error",
          "credential failed: must provide the ID token and/or the access token."
        );
      return new so(this.providerId, e, this.providerId);
    }),
    T(po, fo),
    Hi(po, "PROVIDER_ID", "facebook.com"),
    Hi(po, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"),
    T(mo, fo),
    Hi(mo, "PROVIDER_ID", "github.com"),
    Hi(mo, "GITHUB_SIGN_IN_METHOD", "github.com"),
    T(bo, fo),
    Hi(bo, "PROVIDER_ID", "google.com"),
    Hi(bo, "GOOGLE_SIGN_IN_METHOD", "google.com"),
    T(wo, ho),
    Hi(wo, "PROVIDER_ID", "twitter.com"),
    Hi(wo, "TWITTER_SIGN_IN_METHOD", "twitter.com"),
    (To.prototype.ia = function (t) {
      return this.signInMethod == Ao.EMAIL_LINK_SIGN_IN_METHOD
        ? Js(t, Is, { email: this.a, oobCode: this.f })
        : Js(t, Hs, { email: this.a, password: this.f });
    }),
    (To.prototype.b = function (t, n) {
      return this.signInMethod == Ao.EMAIL_LINK_SIGN_IN_METHOD
        ? Js(t, Ts, { idToken: n, email: this.a, oobCode: this.f })
        : Js(t, Ms, { idToken: n, email: this.a, password: this.f });
    }),
    (To.prototype.c = function (t, n) {
      return io(this.ia(t), n);
    }),
    (To.prototype.v = function () {
      return {
        email: this.a,
        password: this.f,
        signInMethod: this.signInMethod,
      };
    }),
    Gi(Ao, { PROVIDER_ID: "password" }),
    Gi(Ao, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" }),
    Gi(Ao, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" }),
    (No.prototype.ia = function (t) {
      return t.cb(Oo(this));
    }),
    (No.prototype.b = function (t, n) {
      var e = Oo(this);
      return (e.idToken = n), Js(t, Bs, e);
    }),
    (No.prototype.c = function (t, n) {
      var e = Oo(this);
      return (e.operation = "REAUTH"), io((t = Js(t, Ws, e)), n);
    }),
    (No.prototype.v = function () {
      var t = { providerId: "phone" };
      return (
        this.a.bb && (t.verificationId = this.a.bb),
        this.a.ab && (t.verificationCode = this.a.ab),
        this.a.Ja && (t.temporaryProof = this.a.Ja),
        this.a.da && (t.phoneNumber = this.a.da),
        t
      );
    }),
    (Ro.prototype.cb = function (t, n) {
      var e = this.a.b;
      return Sn(n.verify()).then(function (i) {
        if ("string" != typeof i)
          throw new E(
            "argument-error",
            "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string."
          );
        switch (n.type) {
          case "recaptcha":
            var r = p(t) ? t.session : null,
              o = p(t) ? t.phoneNumber : t;
            return (
              r && r.type == to
                ? r.Fa().then(function (t) {
                    return (function (t, n) {
                      return Js(t, js, n).then(function (t) {
                        return t.phoneSessionInfo.sessionInfo;
                      });
                    })(e, {
                      idToken: t,
                      phoneEnrollmentInfo: {
                        phoneNumber: o,
                        recaptchaToken: i,
                      },
                    });
                  })
                : r && r.type == no
                ? r.Fa().then(function (n) {
                    return (function (t, n) {
                      return Js(t, Us, n).then(function (t) {
                        return t.phoneResponseInfo.sessionInfo;
                      });
                    })(e, {
                      mfaPendingCredential: n,
                      mfaEnrollmentId:
                        (t.multiFactorHint && t.multiFactorHint.uid) ||
                        t.multiFactorUid,
                      phoneSignInInfo: { recaptchaToken: i },
                    });
                  })
                : (function (t, n) {
                    return Js(t, Ds, n);
                  })(e, { phoneNumber: o, recaptchaToken: i })
            ).then(
              function (t) {
                return "function" == typeof n.reset && n.reset(), t;
              },
              function (t) {
                throw ("function" == typeof n.reset && n.reset(), t);
              }
            );
          default:
            throw new E(
              "argument-error",
              'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
            );
        }
      });
    }),
    Gi(Ro, { PROVIDER_ID: "phone" }),
    Gi(Ro, { PHONE_SIGN_IN_METHOD: "phone" }),
    (Lo.prototype.getUid = function () {
      var t = [];
      return (
        t.push(this.c),
        this.b && t.push(this.b),
        this.f && t.push(this.f),
        this.h && t.push(this.h),
        t.join("-")
      );
    }),
    (Lo.prototype.S = function () {
      return this.h;
    }),
    (Lo.prototype.v = function () {
      return {
        type: this.c,
        eventId: this.b,
        urlResponse: this.g,
        sessionId: this.f,
        postBody: this.i,
        tenantId: this.h,
        error: this.a && this.a.v(),
      };
    });
  var jo,
    Uo = null;
  function Vo(t) {
    var n = "unauthorized-domain",
      e = void 0,
      i = Le(t);
    (t = i.b),
      "chrome-extension" == (i = i.f)
        ? (e = Vt(
            "This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
            t
          ))
        : "http" == i || "https" == i
        ? (e = Vt(
            "This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
            t
          ))
        : (n = "operation-not-supported-in-this-environment"),
      E.call(this, n, e);
  }
  function Fo(t, n, e) {
    E.call(this, t, e),
      (t = n || {}).Gb && Hi(this, "email", t.Gb),
      t.da && Hi(this, "phoneNumber", t.da),
      t.credential && Hi(this, "credential", t.credential),
      t.Wb && Hi(this, "tenantId", t.Wb);
  }
  function qo(t) {
    if (t.code) {
      var n = t.code || "";
      0 == n.indexOf(S) && (n = n.substring(S.length));
      var e = { credential: Co(t), Wb: t.tenantId };
      if (t.email) e.Gb = t.email;
      else if (t.phoneNumber) e.da = t.phoneNumber;
      else if (!e.credential) return new E(n, t.message || void 0);
      return new Fo(n, e, t.message);
    }
    return null;
  }
  function Ko() {}
  function Ho(t) {
    return t.c || (t.c = t.b());
  }
  function Go() {}
  function Bo(t) {
    if (
      !t.f &&
      "undefined" == typeof XMLHttpRequest &&
      "undefined" != typeof ActiveXObject
    ) {
      for (
        var n = [
            "MSXML2.XMLHTTP.6.0",
            "MSXML2.XMLHTTP.3.0",
            "MSXML2.XMLHTTP",
            "Microsoft.XMLHTTP",
          ],
          e = 0;
        e < n.length;
        e++
      ) {
        var i = n[e];
        try {
          return new ActiveXObject(i), (t.f = i);
        } catch (t) {}
      }
      throw Error(
        "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
      );
    }
    return t.f;
  }
  function Wo() {}
  function Xo() {
    (this.a = new XDomainRequest()),
      (this.readyState = 0),
      (this.onreadystatechange = null),
      (this.responseType = this.responseText = this.response = ""),
      (this.status = -1),
      (this.statusText = ""),
      (this.a.onload = y(this.oc, this)),
      (this.a.onerror = y(this.Pb, this)),
      (this.a.onprogress = y(this.pc, this)),
      (this.a.ontimeout = y(this.tc, this));
  }
  function Jo(t, n) {
    (t.readyState = n), t.onreadystatechange && t.onreadystatechange();
  }
  function Yo(t, n, e) {
    this.reset(t, n, e, void 0, void 0);
  }
  function zo(t) {
    (this.f = t), (this.b = this.c = this.a = null);
  }
  function $o(t, n) {
    (this.name = t), (this.value = n);
  }
  T(Vo, E),
    T(Fo, E),
    (Fo.prototype.v = function () {
      var t = { code: this.code, message: this.message };
      this.email && (t.email = this.email),
        this.phoneNumber && (t.phoneNumber = this.phoneNumber),
        this.tenantId && (t.tenantId = this.tenantId);
      var n = this.credential && this.credential.v();
      return n && pt(t, n), t;
    }),
    (Fo.prototype.toJSON = function () {
      return this.v();
    }),
    (Ko.prototype.c = null),
    T(Go, Ko),
    (Go.prototype.a = function () {
      var t = Bo(this);
      return t ? new ActiveXObject(t) : new XMLHttpRequest();
    }),
    (Go.prototype.b = function () {
      var t = {};
      return Bo(this) && ((t[0] = !0), (t[1] = !0)), t;
    }),
    (jo = new Go()),
    T(Wo, Ko),
    (Wo.prototype.a = function () {
      var t = new XMLHttpRequest();
      if ("withCredentials" in t) return t;
      if ("undefined" != typeof XDomainRequest) return new Xo();
      throw Error("Unsupported browser");
    }),
    (Wo.prototype.b = function () {
      return {};
    }),
    ((n = Xo.prototype).open = function (t, n, e) {
      if (null != e && !e) throw Error("Only async requests are supported.");
      this.a.open(t, n);
    }),
    (n.send = function (t) {
      if (t) {
        if ("string" != typeof t) throw Error("Only string data is supported");
        this.a.send(t);
      } else this.a.send();
    }),
    (n.abort = function () {
      this.a.abort();
    }),
    (n.setRequestHeader = function () {}),
    (n.getResponseHeader = function (t) {
      return "content-type" == t.toLowerCase() ? this.a.contentType : "";
    }),
    (n.oc = function () {
      (this.status = 200),
        (this.response = this.responseText = this.a.responseText),
        Jo(this, 4);
    }),
    (n.Pb = function () {
      (this.status = 500),
        (this.response = this.responseText = ""),
        Jo(this, 4);
    }),
    (n.tc = function () {
      this.Pb();
    }),
    (n.pc = function () {
      (this.status = 200), Jo(this, 1);
    }),
    (n.getAllResponseHeaders = function () {
      return "content-type: " + this.a.contentType;
    }),
    (Yo.prototype.a = null),
    (Yo.prototype.reset = function (t, n, e, i, r) {
      delete this.a;
    }),
    ($o.prototype.toString = function () {
      return this.name;
    });
  var Zo = new $o("SEVERE", 1e3),
    Qo = new $o("WARNING", 900),
    ta = new $o("CONFIG", 700),
    na = new $o("FINE", 500);
  zo.prototype.log = function (t, n, e) {
    if (
      t.value >=
      (function t(n) {
        return n.c
          ? n.c
          : n.a
          ? t(n.a)
          : (D("Root logger has no level set."), null);
      })(this).value
    )
      for (
        d(n) && (n = n()),
          t = new Yo(t, String(n), this.f),
          e && (t.a = e),
          e = this;
        e;

      )
        e = e.a;
  };
  var ea = {},
    ia = null;
  function ra(t) {
    var n;
    if ((ia || ((ia = new zo("")), (ea[""] = ia), (ia.c = ta)), !(n = ea[t]))) {
      n = new zo(t);
      var e = t.lastIndexOf("."),
        i = t.substr(e + 1);
      (e = ra(t.substr(0, e))).b || (e.b = {}),
        (e.b[i] = n),
        (n.a = e),
        (ea[t] = n);
    }
    return n;
  }
  function oa(t, n) {
    t && t.log(na, n, void 0);
  }
  function aa(t) {
    this.f = t;
  }
  function sa(t) {
    me.call(this),
      (this.s = t),
      (this.readyState = ua),
      (this.status = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ""),
      (this.onreadystatechange = null),
      (this.i = new Headers()),
      (this.b = null),
      (this.m = "GET"),
      (this.g = ""),
      (this.a = !1),
      (this.h = ra("goog.net.FetchXmlHttp")),
      (this.l = this.c = this.f = null);
  }
  T(aa, Ko),
    (aa.prototype.a = function () {
      return new sa(this.f);
    }),
    (aa.prototype.b = (function (t) {
      return function () {
        return t;
      };
    })({})),
    T(sa, me);
  var ua = 0;
  function ca(t) {
    t.c.read().then(t.nc.bind(t)).catch(t.Sa.bind(t));
  }
  function ha(t, n) {
    n && t.f && ((t.status = t.f.status), (t.statusText = t.f.statusText)),
      (t.readyState = 4),
      (t.f = null),
      (t.c = null),
      (t.l = null),
      la(t);
  }
  function la(t) {
    t.onreadystatechange && t.onreadystatechange.call(t);
  }
  function fa(t) {
    me.call(this),
      (this.headers = new Ae()),
      (this.D = t || null),
      (this.c = !1),
      (this.B = this.a = null),
      (this.h = this.P = this.l = ""),
      (this.f = this.O = this.i = this.N = !1),
      (this.g = 0),
      (this.s = null),
      (this.m = da),
      (this.w = this.R = !1);
  }
  ((n = sa.prototype).open = function (t, n) {
    if (this.readyState != ua)
      throw (this.abort(), Error("Error reopening a connection"));
    (this.m = t), (this.g = n), (this.readyState = 1), la(this);
  }),
    (n.send = function (t) {
      if (1 != this.readyState)
        throw (this.abort(), Error("need to call open() first. "));
      this.a = !0;
      var n = {
        headers: this.i,
        method: this.m,
        credentials: void 0,
        cache: void 0,
      };
      t && (n.body = t),
        this.s
          .fetch(new Request(this.g, n))
          .then(this.sc.bind(this), this.Sa.bind(this));
    }),
    (n.abort = function () {
      (this.response = this.responseText = ""),
        (this.i = new Headers()),
        (this.status = 0),
        this.c && this.c.cancel("Request was aborted."),
        1 <= this.readyState &&
          this.a &&
          4 != this.readyState &&
          ((this.a = !1), ha(this, !1)),
        (this.readyState = ua);
    }),
    (n.sc = function (t) {
      this.a &&
        ((this.f = t),
        this.b || ((this.b = t.headers), (this.readyState = 2), la(this)),
        this.a &&
          ((this.readyState = 3),
          la(this),
          this.a &&
            ("arraybuffer" === this.responseType
              ? t.arrayBuffer().then(this.qc.bind(this), this.Sa.bind(this))
              : void 0 !== s.ReadableStream && "body" in t
              ? ((this.response = this.responseText = ""),
                (this.c = t.body.getReader()),
                (this.l = new TextDecoder()),
                ca(this))
              : t.text().then(this.rc.bind(this), this.Sa.bind(this)))));
    }),
    (n.nc = function (t) {
      if (this.a) {
        var n = this.l.decode(t.value ? t.value : new Uint8Array(0), {
          stream: !t.done,
        });
        n && (this.response = this.responseText += n),
          t.done ? ha(this, !0) : la(this),
          3 == this.readyState && ca(this);
      }
    }),
    (n.rc = function (t) {
      this.a && ((this.response = this.responseText = t), ha(this, !0));
    }),
    (n.qc = function (t) {
      this.a && ((this.response = t), ha(this, !0));
    }),
    (n.Sa = function (t) {
      var n = this.h;
      n &&
        n.log(
          Qo,
          "Failed to fetch url " + this.g,
          t instanceof Error ? t : Error(t)
        ),
        this.a && ha(this, !0);
    }),
    (n.setRequestHeader = function (t, n) {
      this.i.append(t, n);
    }),
    (n.getResponseHeader = function (t) {
      return this.b
        ? this.b.get(t.toLowerCase()) || ""
        : ((t = this.h) &&
            t.log(
              Qo,
              "Attempting to get response header but no headers have been received for url: " +
                this.g,
              void 0
            ),
          "");
    }),
    (n.getAllResponseHeaders = function () {
      if (!this.b) {
        var t = this.h;
        return (
          t &&
            t.log(
              Qo,
              "Attempting to get all response headers but no headers have been received for url: " +
                this.g,
              void 0
            ),
          ""
        );
      }
      t = [];
      for (var n = this.b.entries(), e = n.next(); !e.done; )
        (e = e.value), t.push(e[0] + ": " + e[1]), (e = n.next());
      return t.join("\r\n");
    }),
    T(fa, me);
  var da = "";
  fa.prototype.b = ra("goog.net.XhrIo");
  var pa = /^https?$/i,
    va = ["POST", "PUT"];
  function ma(t, n, e, i, r) {
    if (t.a)
      throw Error(
        "[goog.net.XhrIo] Object is active with another request=" +
          t.l +
          "; newUri=" +
          n
      );
    (e = e ? e.toUpperCase() : "GET"),
      (t.l = n),
      (t.h = ""),
      (t.P = e),
      (t.N = !1),
      (t.c = !0),
      (t.a = t.D ? t.D.a() : jo.a()),
      (t.B = t.D ? Ho(t.D) : Ho(jo)),
      (t.a.onreadystatechange = y(t.Sb, t));
    try {
      oa(t.b, ka(t, "Opening Xhr")),
        (t.O = !0),
        t.a.open(e, String(n), !0),
        (t.O = !1);
    } catch (n) {
      return oa(t.b, ka(t, "Error opening Xhr: " + n.message)), void ba(t, n);
    }
    n = i || "";
    var o = new Ae(t.headers);
    r &&
      (function (t, n) {
        if (t.forEach && "function" == typeof t.forEach) t.forEach(n, void 0);
        else if (f(t) || "string" == typeof t) q(t, n, void 0);
        else
          for (var e = Ee(t), i = Te(t), r = i.length, o = 0; o < r; o++)
            n.call(void 0, i[o], e && e[o], t);
      })(r, function (t, n) {
        o.set(n, t);
      }),
      (r = (function (t) {
        t: {
          for (
            var n = ga,
              e = t.length,
              i = "string" == typeof t ? t.split("") : t,
              r = 0;
            r < e;
            r++
          )
            if (r in i && n.call(void 0, i[r], r, t)) {
              n = r;
              break t;
            }
          n = -1;
        }
        return 0 > n ? null : "string" == typeof t ? t.charAt(n) : t[n];
      })(o.X())),
      (i = s.FormData && n instanceof s.FormData),
      !B(va, e) ||
        r ||
        i ||
        o.set(
          "Content-Type",
          "application/x-www-form-urlencoded;charset=utf-8"
        ),
      o.forEach(function (t, n) {
        this.a.setRequestHeader(n, t);
      }, t),
      t.m && (t.a.responseType = t.m),
      "withCredentials" in t.a &&
        t.a.withCredentials !== t.R &&
        (t.a.withCredentials = t.R);
    try {
      Ta(t),
        0 < t.g &&
          ((t.w = (function (t) {
            return (
              Bt &&
              en(9) &&
              "number" == typeof t.timeout &&
              void 0 !== t.ontimeout
            );
          })(t.a)),
          oa(
            t.b,
            ka(t, "Will abort after " + t.g + "ms if incomplete, xhr2 " + t.w)
          ),
          t.w
            ? ((t.a.timeout = t.g), (t.a.ontimeout = y(t.Ka, t)))
            : (t.s = we(t.Ka, t.g, t))),
        oa(t.b, ka(t, "Sending request")),
        (t.i = !0),
        t.a.send(n),
        (t.i = !1);
    } catch (n) {
      oa(t.b, ka(t, "Send error: " + n.message)), ba(t, n);
    }
  }
  function ga(t) {
    return "content-type" == t.toLowerCase();
  }
  function ba(t, n) {
    (t.c = !1),
      t.a && ((t.f = !0), t.a.abort(), (t.f = !1)),
      (t.h = n),
      ya(t),
      Ia(t);
  }
  function ya(t) {
    t.N || ((t.N = !0), t.dispatchEvent("complete"), t.dispatchEvent("error"));
  }
  function wa(t) {
    if (t.c && void 0 !== a)
      if (t.B[1] && 4 == Ea(t) && 2 == Aa(t))
        oa(t.b, ka(t, "Local request error detected and ignored"));
      else if (t.i && 4 == Ea(t)) we(t.Sb, 0, t);
      else if ((t.dispatchEvent("readystatechange"), 4 == Ea(t))) {
        oa(t.b, ka(t, "Request complete")), (t.c = !1);
        try {
          var n,
            e = Aa(t);
          t: switch (e) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var i = !0;
              break t;
            default:
              i = !1;
          }
          if (!(n = i)) {
            var r;
            if ((r = 0 === e)) {
              var o = String(t.l).match(Ne)[1] || null;
              if (!o && s.self && s.self.location) {
                var u = s.self.location.protocol;
                o = u.substr(0, u.length - 1);
              }
              r = !pa.test(o ? o.toLowerCase() : "");
            }
            n = r;
          }
          if (n) t.dispatchEvent("complete"), t.dispatchEvent("success");
          else {
            try {
              var c = 2 < Ea(t) ? t.a.statusText : "";
            } catch (n) {
              oa(t.b, "Can not get status: " + n.message), (c = "");
            }
            (t.h = c + " [" + Aa(t) + "]"), ya(t);
          }
        } finally {
          Ia(t);
        }
      }
  }
  function Ia(t, n) {
    if (t.a) {
      Ta(t);
      var e = t.a,
        i = t.B[0] ? h : null;
      (t.a = null), (t.B = null), n || t.dispatchEvent("ready");
      try {
        e.onreadystatechange = i;
      } catch (n) {
        (t = t.b) &&
          t.log(
            Zo,
            "Problem encountered resetting onreadystatechange: " + n.message,
            void 0
          );
      }
    }
  }
  function Ta(t) {
    t.a && t.w && (t.a.ontimeout = null),
      t.s && (s.clearTimeout(t.s), (t.s = null));
  }
  function Ea(t) {
    return t.a ? t.a.readyState : 0;
  }
  function Aa(t) {
    try {
      return 2 < Ea(t) ? t.a.status : -1;
    } catch (t) {
      return -1;
    }
  }
  function ka(t, n) {
    return n + " [" + t.P + " " + t.l + " " + Aa(t) + "]";
  }
  function Sa(t) {
    var n = ja;
    (this.g = []),
      (this.w = n),
      (this.s = t || null),
      (this.f = this.a = !1),
      (this.c = void 0),
      (this.u = this.B = this.i = !1),
      (this.h = 0),
      (this.b = null),
      (this.l = 0);
  }
  function Na(t, n, e) {
    (t.a = !0), (t.c = e), (t.f = !n), Pa(t);
  }
  function _a(t) {
    if (t.a) {
      if (!t.u) throw new Ca(t);
      t.u = !1;
    }
  }
  function Oa(t, n, e, i) {
    t.g.push([n, e, i]), t.a && Pa(t);
  }
  function Ra(t) {
    return G(t.g, function (t) {
      return d(t[1]);
    });
  }
  function Pa(t) {
    if (t.h && t.a && Ra(t)) {
      var n = t.h,
        e = Ma[n];
      e && (s.clearTimeout(e.a), delete Ma[n]), (t.h = 0);
    }
    t.b && (t.b.l--, delete t.b), (n = t.c);
    for (var i = (e = !1); t.g.length && !t.i; ) {
      var r = t.g.shift(),
        o = r[0],
        a = r[1];
      if (((r = r[2]), (o = t.f ? a : o)))
        try {
          var u = o.call(r || t.s, n);
          void 0 !== u &&
            ((t.f = t.f && (u == n || u instanceof Error)), (t.c = n = u)),
            (R(n) ||
              ("function" == typeof s.Promise && n instanceof s.Promise)) &&
              ((i = !0), (t.i = !0));
        } catch (i) {
          (n = i), (t.f = !0), Ra(t) || (e = !0);
        }
    }
    (t.c = n),
      i &&
        ((u = y(t.m, t, !0)),
        (i = y(t.m, t, !1)),
        n instanceof Sa ? (Oa(n, u, i), (n.B = !0)) : n.then(u, i)),
      e && ((n = new La(n)), (Ma[n.a] = n), (t.h = n.a));
  }
  function Ca() {
    P.call(this);
  }
  function Da() {
    P.call(this);
  }
  function La(t) {
    (this.a = s.setTimeout(y(this.c, this), 0)), (this.b = t);
  }
  ((n = fa.prototype).Ka = function () {
    void 0 !== a &&
      this.a &&
      ((this.h = "Timed out after " + this.g + "ms, aborting"),
      oa(this.b, ka(this, this.h)),
      this.dispatchEvent("timeout"),
      this.abort(8));
  }),
    (n.abort = function () {
      this.a &&
        this.c &&
        (oa(this.b, ka(this, "Aborting")),
        (this.c = !1),
        (this.f = !0),
        this.a.abort(),
        (this.f = !1),
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        Ia(this));
    }),
    (n.Ba = function () {
      this.a &&
        (this.c &&
          ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)),
        Ia(this, !0)),
        fa.Za.Ba.call(this);
    }),
    (n.Sb = function () {
      this.wa || (this.O || this.i || this.f ? wa(this) : this.Hc());
    }),
    (n.Hc = function () {
      wa(this);
    }),
    (n.getResponse = function () {
      try {
        if (!this.a) return null;
        if ("response" in this.a) return this.a.response;
        switch (this.m) {
          case da:
          case "text":
            return this.a.responseText;
          case "arraybuffer":
            if ("mozResponseArrayBuffer" in this.a)
              return this.a.mozResponseArrayBuffer;
        }
        var t = this.b;
        return (
          t &&
            t.log(
              Zo,
              "Response type " + this.m + " is not supported on this browser",
              void 0
            ),
          null
        );
      } catch (t) {
        return oa(this.b, "Can not get response: " + t.message), null;
      }
    }),
    (Sa.prototype.cancel = function (t) {
      if (this.a) this.c instanceof Sa && this.c.cancel();
      else {
        if (this.b) {
          var n = this.b;
          delete this.b, t ? n.cancel(t) : (n.l--, 0 >= n.l && n.cancel());
        }
        this.w ? this.w.call(this.s, this) : (this.u = !0),
          this.a || ((t = new Da(this)), _a(this), Na(this, !1, t));
      }
    }),
    (Sa.prototype.m = function (t, n) {
      (this.i = !1), Na(this, t, n);
    }),
    (Sa.prototype.then = function (t, n, e) {
      var i,
        r,
        o = new yn(function (t, n) {
          (i = t), (r = n);
        });
      return (
        Oa(this, i, function (t) {
          t instanceof Da ? o.cancel() : r(t);
        }),
        o.then(t, n, e)
      );
    }),
    (Sa.prototype.$goog_Thenable = !0),
    T(Ca, P),
    (Ca.prototype.message = "Deferred has already fired"),
    (Ca.prototype.name = "AlreadyCalledError"),
    T(Da, P),
    (Da.prototype.message = "Deferred was canceled"),
    (Da.prototype.name = "CanceledError"),
    (La.prototype.c = function () {
      throw (delete Ma[this.a], this.b);
    });
  var Ma = {};
  function xa(t) {
    var n,
      e = document,
      i = Tt(t).toString(),
      r = ln(document, "SCRIPT"),
      o = { Tb: r, Ka: void 0 },
      a = new Sa(o);
    return (
      (n = window.setTimeout(function () {
        Ua(r, !0);
        var t = new qa(Fa, "Timeout reached for loading script " + i);
        _a(a), Na(a, !1, t);
      }, 5e3)),
      (o.Ka = n),
      (r.onload = r.onreadystatechange =
        function () {
          (r.readyState &&
            "loaded" != r.readyState &&
            "complete" != r.readyState) ||
            (Ua(r, !1, n), _a(a), Na(a, !0, null));
        }),
      (r.onerror = function () {
        Ua(r, !0, n);
        var t = new qa(Va, "Error while loading script " + i);
        _a(a), Na(a, !1, t);
      }),
      pt((o = {}), { type: "text/javascript", charset: "UTF-8" }),
      an(r, o),
      (function (t, n) {
        vt(t, "HTMLScriptElement"),
          (t.src = Tt(n)),
          null === c &&
            (c =
              (n =
                (n = s.document).querySelector &&
                n.querySelector("script[nonce]")) &&
              (n = n.nonce || n.getAttribute("nonce")) &&
              u.test(n)
                ? n
                : ""),
          (n = c) && t.setAttribute("nonce", n);
      })(r, t),
      (function (t) {
        var n;
        return (n = (t || document).getElementsByTagName("HEAD")) &&
          0 != n.length
          ? n[0]
          : t.documentElement;
      })(e).appendChild(r),
      a
    );
  }
  function ja() {
    if (this && this.Tb) {
      var t = this.Tb;
      t && "SCRIPT" == t.tagName && Ua(t, !0, this.Ka);
    }
  }
  function Ua(t, n, e) {
    null != e && s.clearTimeout(e),
      (t.onload = h),
      (t.onerror = h),
      (t.onreadystatechange = h),
      n &&
        window.setTimeout(function () {
          t && t.parentNode && t.parentNode.removeChild(t);
        }, 0);
  }
  var Va = 0,
    Fa = 1;
  function qa(t, n) {
    var e = "Jsloader error (code #" + t + ")";
    n && (e += ": " + n), P.call(this, e), (this.code = t);
  }
  function Ka(t) {
    this.f = t;
  }
  function Ha(n, e, i) {
    if (
      ((this.c = n),
      (n = e || {}),
      (this.u =
        n.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token"),
      (this.m = n.secureTokenTimeout || Wa),
      (this.g = ft(n.secureTokenHeaders || Xa)),
      (this.h =
        n.firebaseEndpoint ||
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/"),
      (this.l =
        n.identityPlatformEndpoint ||
        "https://identitytoolkit.googleapis.com/v2/"),
      (this.i = n.firebaseTimeout || Ja),
      (this.a = ft(n.firebaseHeaders || Ya)),
      i && ((this.a["X-Client-Version"] = i), (this.g["X-Client-Version"] = i)),
      (i = "Node" == vi()),
      !(i =
        s.XMLHttpRequest ||
        (i && t.INTERNAL.node && t.INTERNAL.node.XMLHttpRequest)) && !pi())
    )
      throw new E(
        "internal-error",
        "The XMLHttpRequest compatibility library was not found."
      );
    (this.f = void 0),
      pi()
        ? (this.f = new aa(self))
        : mi()
        ? (this.f = new Ka(i))
        : (this.f = new Wo()),
      (this.b = null);
  }
  T(qa, P),
    T(Ka, Ko),
    (Ka.prototype.a = function () {
      return new this.f();
    }),
    (Ka.prototype.b = function () {
      return {};
    });
  var Ga,
    Ba = "idToken",
    Wa = new Mi(3e4, 6e4),
    Xa = { "Content-Type": "application/x-www-form-urlencoded" },
    Ja = new Mi(3e4, 6e4),
    Ya = { "Content-Type": "application/json" };
  function za(t, n) {
    n ? (t.a["X-Firebase-Locale"] = n) : delete t.a["X-Firebase-Locale"];
  }
  function $a(t, n) {
    n
      ? ((t.a["X-Client-Version"] = n), (t.g["X-Client-Version"] = n))
      : (delete t.a["X-Client-Version"], delete t.g["X-Client-Version"]);
  }
  function Za(t, n, e, i, r, o, a) {
    (function () {
      var t = Ti();
      return (
        !(
          (t =
            yi(t) != bi
              ? null
              : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length
              ? parseInt(t[1], 10)
              : null) && 30 > t
        ) &&
        (!Bt || !tn || 9 < tn)
      );
    })() || pi()
      ? (t = y(t.w, t))
      : (Ga ||
          (Ga = new yn(function (t, n) {
            !(function (t, n) {
              if (((window.gapi || {}).client || {}).request) t();
              else {
                (s[ts] = function () {
                  ((window.gapi || {}).client || {}).request
                    ? t()
                    : n(Error("CORS_UNSUPPORTED"));
                }),
                  (function (t, n) {
                    Oa(t, null, n, void 0);
                  })(xa(Et(Qa, { onload: ts })), function () {
                    n(Error("CORS_UNSUPPORTED"));
                  });
              }
            })(t, n);
          })),
        (t = y(t.s, t))),
      t(n, e, i, r, o, a);
  }
  (Ha.prototype.S = function () {
    return this.b;
  }),
    (Ha.prototype.w = function (t, n, e, i, r, o) {
      if (
        pi() &&
        (void 0 === s.fetch || void 0 === s.Headers || void 0 === s.Request)
      )
        throw new E(
          "operation-not-supported-in-this-environment",
          "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment."
        );
      var a = new fa(this.f);
      if (o) {
        a.g = Math.max(0, o);
        var u = setTimeout(function () {
          a.dispatchEvent("timeout");
        }, o);
      }
      ge(a, "complete", function () {
        u && clearTimeout(u);
        var t = null;
        try {
          t =
            JSON.parse(
              (function (t) {
                try {
                  return t.a ? t.a.responseText : "";
                } catch (n) {
                  return oa(t.b, "Can not get responseText: " + n.message), "";
                }
              })(this)
            ) || null;
        } catch (n) {
          t = null;
        }
        n && n(t);
      }),
        be(a, "ready", function () {
          u && clearTimeout(u), qn(this);
        }),
        be(a, "timeout", function () {
          u && clearTimeout(u), qn(this), n && n(null);
        }),
        ma(a, t, e, i, r);
    });
  var Qa = new mt(yt, "https://apis.google.com/js/client.js?onload=%{onload}"),
    ts = "__fcb" + Math.floor(1e6 * Math.random()).toString();
  function ns(t, n, e, i, r, o, a) {
    var s = Le(n + e);
    Ce(s, "key", t.c), a && Ce(s, "cb", I().toString());
    var u = "GET" == i;
    if (u) for (var c in r) r.hasOwnProperty(c) && Ce(s, c, r[c]);
    return new yn(function (n, e) {
      Za(
        t,
        s.toString(),
        function (t) {
          t
            ? t.error
              ? e(zs(t, o || {}))
              : n(t)
            : e(new E("network-request-failed"));
        },
        i,
        u ? void 0 : Ze(Ri(r)),
        t.a,
        t.i.get()
      );
    });
  }
  function es(t) {
    if ("string" != typeof (t = t.email) || !hi.test(t))
      throw new E("invalid-email");
  }
  function is(t) {
    "email" in t && es(t);
  }
  function rs(t) {
    if (!t[Ba]) {
      if (t.mfaPendingCredential)
        throw new E("multi-factor-auth-required", null, ft(t));
      throw new E("internal-error");
    }
  }
  function os(t) {
    if (t.phoneNumber || t.temporaryProof) {
      if (!t.phoneNumber || !t.temporaryProof) throw new E("internal-error");
    } else {
      if (!t.sessionInfo) throw new E("missing-verification-id");
      if (!t.code) throw new E("missing-verification-code");
    }
  }
  (Ha.prototype.s = function (t, n, e, i, r) {
    var o = this;
    Ga.then(function () {
      window.gapi.client.setApiKey(o.c);
      var a = window.gapi.auth.getToken();
      window.gapi.auth.setToken(null),
        window.gapi.client.request({
          path: t,
          method: e,
          body: i,
          headers: r,
          authType: "none",
          callback: function (t) {
            window.gapi.auth.setToken(a), n && n(t);
          },
        });
    }).o(function (t) {
      n && n({ error: { message: (t && t.message) || "CORS_UNSUPPORTED" } });
    });
  }),
    (Ha.prototype.vb = function () {
      return Js(this, xs, {});
    }),
    (Ha.prototype.xb = function (t, n) {
      return Js(this, Ls, { idToken: t, email: n });
    }),
    (Ha.prototype.yb = function (t, n) {
      return Js(this, Ms, { idToken: t, password: n });
    });
  var as = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
  function ss(t) {
    if (!t.phoneVerificationInfo) throw new E("internal-error");
    if (!t.phoneVerificationInfo.sessionInfo)
      throw new E("missing-verification-id");
    if (!t.phoneVerificationInfo.code) throw new E("missing-verification-code");
  }
  function us(t) {
    if (!t.requestUri || (!t.sessionId && !t.postBody && !t.pendingToken))
      throw new E("internal-error");
  }
  function cs(t, n) {
    return (
      n.oauthIdToken &&
        n.providerId &&
        0 == n.providerId.indexOf("oidc.") &&
        !n.pendingToken &&
        (t.sessionId
          ? (n.nonce = t.sessionId)
          : t.postBody &&
            Je((t = new Ge(t.postBody)), "nonce") &&
            (n.nonce = t.get("nonce"))),
      n
    );
  }
  function hs(t) {
    var n = null;
    if (
      (t.needConfirmation
        ? ((t.code = "account-exists-with-different-credential"), (n = qo(t)))
        : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage
        ? ((t.code = "credential-already-in-use"), (n = qo(t)))
        : "EMAIL_EXISTS" == t.errorMessage
        ? ((t.code = "email-already-in-use"), (n = qo(t)))
        : t.errorMessage && (n = Ys(t.errorMessage)),
      n)
    )
      throw n;
    rs(t);
  }
  function ls(t, n) {
    return (n.returnIdpCredential = !0), Js(t, Vs, n);
  }
  function fs(t, n) {
    return (n.returnIdpCredential = !0), Js(t, qs, n);
  }
  function ds(t, n) {
    return (n.returnIdpCredential = !0), (n.autoCreate = !1), Js(t, Fs, n);
  }
  function ps(t) {
    if (!t.oobCode) throw new E("invalid-action-code");
  }
  ((n = Ha.prototype).zb = function (t, n) {
    var e = { idToken: t },
      i = [];
    return (
      ht(as, function (t, r) {
        var o = n[r];
        null === o ? i.push(t) : r in n && (e[r] = o);
      }),
      i.length && (e.deleteAttribute = i),
      Js(this, Ls, e)
    );
  }),
    (n.rb = function (t, n) {
      return (
        pt((t = { requestType: "PASSWORD_RESET", email: t }), n),
        Js(this, Os, t)
      );
    }),
    (n.sb = function (t, n) {
      return (
        pt((t = { requestType: "EMAIL_SIGNIN", email: t }), n), Js(this, Ss, t)
      );
    }),
    (n.qb = function (t, n) {
      return (
        pt((t = { requestType: "VERIFY_EMAIL", idToken: t }), n),
        Js(this, Ns, t)
      );
    }),
    (n.Ab = function (t, n, e) {
      return (
        pt(
          (t = {
            requestType: "VERIFY_AND_CHANGE_EMAIL",
            idToken: t,
            newEmail: n,
          }),
          e
        ),
        Js(this, _s, t)
      );
    }),
    (n.cb = function (t) {
      return Js(this, Gs, t);
    }),
    (n.jb = function (t, n) {
      return Js(this, Cs, { oobCode: t, newPassword: n });
    }),
    (n.Pa = function (t) {
      return Js(this, ms, { oobCode: t });
    }),
    (n.fb = function (t) {
      return Js(this, vs, { oobCode: t });
    });
  var vs = { endpoint: "setAccountInfo", A: ps, Y: "email", C: !0 },
    ms = {
      endpoint: "resetPassword",
      A: ps,
      G: function (t) {
        var n = t.requestType;
        if (
          !n ||
          (!t.email && "EMAIL_SIGNIN" != n && "VERIFY_AND_CHANGE_EMAIL" != n)
        )
          throw new E("internal-error");
      },
      C: !0,
    },
    gs = {
      endpoint: "signupNewUser",
      A: function (t) {
        if ((es(t), !t.password)) throw new E("weak-password");
      },
      G: rs,
      U: !0,
      C: !0,
    },
    bs = { endpoint: "createAuthUri", C: !0 },
    ys = { endpoint: "deleteAccount", M: ["idToken"] },
    ws = {
      endpoint: "setAccountInfo",
      M: ["idToken", "deleteProvider"],
      A: function (t) {
        if ("array" != l(t.deleteProvider)) throw new E("internal-error");
      },
    },
    Is = {
      endpoint: "emailLinkSignin",
      M: ["email", "oobCode"],
      A: es,
      G: rs,
      U: !0,
      C: !0,
    },
    Ts = {
      endpoint: "emailLinkSignin",
      M: ["idToken", "email", "oobCode"],
      A: es,
      G: rs,
      U: !0,
    },
    Es = {
      endpoint: "accounts/mfaEnrollment:finalize",
      M: ["idToken", "phoneVerificationInfo"],
      A: ss,
      G: rs,
      C: !0,
      La: !0,
    },
    As = {
      endpoint: "accounts/mfaSignIn:finalize",
      M: ["mfaPendingCredential", "phoneVerificationInfo"],
      A: ss,
      G: rs,
      C: !0,
      La: !0,
    },
    ks = { endpoint: "getAccountInfo" },
    Ss = {
      endpoint: "getOobConfirmationCode",
      M: ["requestType"],
      A: function (t) {
        if ("EMAIL_SIGNIN" != t.requestType) throw new E("internal-error");
        es(t);
      },
      Y: "email",
      C: !0,
    },
    Ns = {
      endpoint: "getOobConfirmationCode",
      M: ["idToken", "requestType"],
      A: function (t) {
        if ("VERIFY_EMAIL" != t.requestType) throw new E("internal-error");
      },
      Y: "email",
      C: !0,
    },
    _s = {
      endpoint: "getOobConfirmationCode",
      M: ["idToken", "newEmail", "requestType"],
      A: function (t) {
        if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType)
          throw new E("internal-error");
      },
      Y: "email",
      C: !0,
    },
    Os = {
      endpoint: "getOobConfirmationCode",
      M: ["requestType"],
      A: function (t) {
        if ("PASSWORD_RESET" != t.requestType) throw new E("internal-error");
        es(t);
      },
      Y: "email",
      C: !0,
    },
    Rs = { hb: !0, endpoint: "getProjectConfig", Rb: "GET" },
    Ps = {
      hb: !0,
      endpoint: "getRecaptchaParam",
      Rb: "GET",
      G: function (t) {
        if (!t.recaptchaSiteKey) throw new E("internal-error");
      },
    },
    Cs = { endpoint: "resetPassword", A: ps, Y: "email", C: !0 },
    Ds = {
      endpoint: "sendVerificationCode",
      M: ["phoneNumber", "recaptchaToken"],
      Y: "sessionInfo",
      C: !0,
    },
    Ls = { endpoint: "setAccountInfo", M: ["idToken"], A: is, U: !0 },
    Ms = {
      endpoint: "setAccountInfo",
      M: ["idToken"],
      A: function (t) {
        if ((is(t), !t.password)) throw new E("weak-password");
      },
      G: rs,
      U: !0,
    },
    xs = { endpoint: "signupNewUser", G: rs, U: !0, C: !0 },
    js = {
      endpoint: "accounts/mfaEnrollment:start",
      M: ["idToken", "phoneEnrollmentInfo"],
      A: function (t) {
        if (!t.phoneEnrollmentInfo) throw new E("internal-error");
        if (!t.phoneEnrollmentInfo.phoneNumber)
          throw new E("missing-phone-number");
        if (!t.phoneEnrollmentInfo.recaptchaToken)
          throw new E("missing-app-credential");
      },
      G: function (t) {
        if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo)
          throw new E("internal-error");
      },
      C: !0,
      La: !0,
    },
    Us = {
      endpoint: "accounts/mfaSignIn:start",
      M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
      A: function (t) {
        if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken)
          throw new E("missing-app-credential");
      },
      G: function (t) {
        if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo)
          throw new E("internal-error");
      },
      C: !0,
      La: !0,
    },
    Vs = { endpoint: "verifyAssertion", A: us, Wa: cs, G: hs, U: !0, C: !0 },
    Fs = {
      endpoint: "verifyAssertion",
      A: us,
      Wa: cs,
      G: function (t) {
        if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage)
          throw new E("user-not-found");
        if (t.errorMessage) throw Ys(t.errorMessage);
        rs(t);
      },
      U: !0,
      C: !0,
    },
    qs = {
      endpoint: "verifyAssertion",
      A: function (t) {
        if ((us(t), !t.idToken)) throw new E("internal-error");
      },
      Wa: cs,
      G: hs,
      U: !0,
    },
    Ks = {
      endpoint: "verifyCustomToken",
      A: function (t) {
        if (!t.token) throw new E("invalid-custom-token");
      },
      G: rs,
      U: !0,
      C: !0,
    },
    Hs = {
      endpoint: "verifyPassword",
      A: function (t) {
        if ((es(t), !t.password)) throw new E("wrong-password");
      },
      G: rs,
      U: !0,
      C: !0,
    },
    Gs = { endpoint: "verifyPhoneNumber", A: os, G: rs, C: !0 },
    Bs = {
      endpoint: "verifyPhoneNumber",
      A: function (t) {
        if (!t.idToken) throw new E("internal-error");
        os(t);
      },
      G: function (t) {
        if (t.temporaryProof)
          throw ((t.code = "credential-already-in-use"), qo(t));
        rs(t);
      },
    },
    Ws = {
      Eb: { USER_NOT_FOUND: "user-not-found" },
      endpoint: "verifyPhoneNumber",
      A: os,
      G: rs,
      C: !0,
    },
    Xs = {
      endpoint: "accounts/mfaEnrollment:withdraw",
      M: ["idToken", "mfaEnrollmentId"],
      G: function (t) {
        if (!!t[Ba] ^ !!t.refreshToken) throw new E("internal-error");
      },
      C: !0,
      La: !0,
    };
  function Js(t, n, e) {
    if (
      !(function (t, n) {
        if (!n || !n.length) return !0;
        if (!t) return !1;
        for (var e = 0; e < n.length; e++) {
          var i = t[n[e]];
          if (null == i || "" === i) return !1;
        }
        return !0;
      })(e, n.M)
    )
      return Nn(new E("internal-error"));
    var i,
      r = !!n.La,
      o = n.Rb || "POST";
    return Sn(e)
      .then(n.A)
      .then(function () {
        return (
          n.U && (e.returnSecureToken = !0),
          n.C && t.b && void 0 === e.tenantId && (e.tenantId = t.b),
          ns(t, r ? t.l : t.h, n.endpoint, o, e, n.Eb, n.hb || !1)
        );
      })
      .then(function (t) {
        return (i = t), n.Wa ? n.Wa(e, i) : i;
      })
      .then(n.G)
      .then(function () {
        if (!n.Y) return i;
        if (!(n.Y in i)) throw new E("internal-error");
        return i[n.Y];
      });
  }
  function Ys(t) {
    return zs({ error: { errors: [{ message: t }], code: 400, message: t } });
  }
  function zs(t, n) {
    var e =
        ((t.error && t.error.errors && t.error.errors[0]) || {}).reason || "",
      i = {
        keyInvalid: "invalid-api-key",
        ipRefererBlocked: "app-not-authorized",
      };
    if ((e = i[e] ? new E(i[e]) : null)) return e;
    for (var r in ((e = (t.error && t.error.message) || ""),
    pt(
      (i = {
        INVALID_CUSTOM_TOKEN: "invalid-custom-token",
        CREDENTIAL_MISMATCH: "custom-token-mismatch",
        MISSING_CUSTOM_TOKEN: "internal-error",
        INVALID_IDENTIFIER: "invalid-email",
        MISSING_CONTINUE_URI: "internal-error",
        INVALID_EMAIL: "invalid-email",
        INVALID_PASSWORD: "wrong-password",
        USER_DISABLED: "user-disabled",
        MISSING_PASSWORD: "internal-error",
        EMAIL_EXISTS: "email-already-in-use",
        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
        INVALID_IDP_RESPONSE: "invalid-credential",
        INVALID_PENDING_TOKEN: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
        MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
        INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
        INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
        INVALID_SENDER: "invalid-sender",
        EMAIL_NOT_FOUND: "user-not-found",
        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
        EXPIRED_OOB_CODE: "expired-action-code",
        INVALID_OOB_CODE: "invalid-action-code",
        MISSING_OOB_CODE: "internal-error",
        INVALID_PROVIDER_ID: "invalid-provider-id",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token",
        TOKEN_EXPIRED: "user-token-expired",
        USER_NOT_FOUND: "user-token-expired",
        CORS_UNSUPPORTED: "cors-unsupported",
        DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
        INVALID_APP_ID: "invalid-app-id",
        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
        WEAK_PASSWORD: "weak-password",
        OPERATION_NOT_ALLOWED: "operation-not-allowed",
        USER_CANCELLED: "user-cancelled",
        CAPTCHA_CHECK_FAILED: "captcha-check-failed",
        INVALID_APP_CREDENTIAL: "invalid-app-credential",
        INVALID_CODE: "invalid-verification-code",
        INVALID_PHONE_NUMBER: "invalid-phone-number",
        INVALID_SESSION_INFO: "invalid-verification-id",
        INVALID_TEMPORARY_PROOF: "invalid-credential",
        MISSING_APP_CREDENTIAL: "missing-app-credential",
        MISSING_CODE: "missing-verification-code",
        MISSING_PHONE_NUMBER: "missing-phone-number",
        MISSING_SESSION_INFO: "missing-verification-id",
        QUOTA_EXCEEDED: "quota-exceeded",
        SESSION_EXPIRED: "code-expired",
        REJECTED_CREDENTIAL: "rejected-credential",
        INVALID_CONTINUE_URI: "invalid-continue-uri",
        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
        MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
        INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
        INVALID_CERT_HASH: "invalid-cert-hash",
        UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
        INVALID_TENANT_ID: "invalid-tenant-id",
        TENANT_ID_MISMATCH: "tenant-id-mismatch",
        ADMIN_ONLY_OPERATION: "admin-restricted-operation",
        INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
        MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
        MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
        MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
        EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
        SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
        UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
        UNVERIFIED_EMAIL: "unverified-email",
      }),
      n || {}
    ),
    (n =
      (n = e.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < n.length
        ? n[1]
        : void 0),
    i))
      if (0 === e.indexOf(r)) return new E(i[r], n);
    return !n && t && (n = Oi(t)), new E("internal-error", n);
  }
  function $s(t) {
    (this.b = t),
      (this.a = null),
      (this.nb = (function (t) {
        return (
          nu ||
          (nu = new yn(function (t, n) {
            function e() {
              Li(),
                Ei("gapi.load")("gapi.iframes", {
                  callback: t,
                  ontimeout: function () {
                    Li(), n(Error("Network Error"));
                  },
                  timeout: Qs.get(),
                });
            }
            if (Ei("gapi.iframes.Iframe")) t();
            else if (Ei("gapi.load")) e();
            else {
              var i =
                "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
              (s[i] = function () {
                Ei("gapi.load") ? e() : n(Error("Network Error"));
              }),
                Sn(xa((i = Et(Zs, { onload: i })))).o(function () {
                  n(Error("Network Error"));
                });
            }
          }).o(function (t) {
            throw ((nu = null), t);
          }))
        ).then(function () {
          return new yn(function (n, e) {
            Ei("gapi.iframes.getContext")().open(
              {
                where: document.body,
                url: t.b,
                messageHandlersFilter: Ei(
                  "gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"
                ),
                attributes: {
                  style: {
                    position: "absolute",
                    top: "-100px",
                    width: "1px",
                    height: "1px",
                  },
                },
                dontclear: !0,
              },
              function (i) {
                function r() {
                  clearTimeout(o), n();
                }
                (t.a = i), t.a.restyle({ setHideOnLeave: !1 });
                var o = setTimeout(function () {
                  e(Error("Network Error"));
                }, tu.get());
                i.ping(r).then(r, function () {
                  e(Error("Network Error"));
                });
              }
            );
          });
        });
      })(this));
  }
  var Zs = new mt(yt, "https://apis.google.com/js/api.js?onload=%{onload}"),
    Qs = new Mi(3e4, 6e4),
    tu = new Mi(5e3, 15e3),
    nu = null;
  function eu(t, n, e) {
    (this.i = t),
      (this.g = n),
      (this.h = e),
      (this.f = null),
      (this.a = Me(this.i, "/__/auth/iframe")),
      Ce(this.a, "apiKey", this.g),
      Ce(this.a, "appName", this.h),
      (this.b = null),
      (this.c = []);
  }
  function iu(t, n, e, i, r) {
    (this.s = t),
      (this.m = n),
      (this.c = e),
      (this.u = i),
      (this.i = this.g = this.l = null),
      (this.a = r),
      (this.h = this.f = null);
  }
  function ru(n) {
    try {
      return t.app(n).auth().Ea();
    } catch (t) {
      return [];
    }
  }
  function ou(t, n, e, i, r) {
    (this.u = t),
      (this.f = n),
      (this.b = e),
      (this.c = i || null),
      (this.h = r || null),
      (this.m = this.s = this.w = null),
      (this.g = []),
      (this.l = this.a = null);
  }
  function au(t) {
    var n = ri();
    return (function (t) {
      return Js(t, Rs, {}).then(function (t) {
        return t.authorizedDomains || [];
      });
    })(t).then(function (t) {
      t: {
        var e = Le(n),
          i = e.f;
        e = e.b;
        for (var r = 0; r < t.length; r++) {
          var o = t[r],
            a = e,
            s = i;
          if (
            (0 == o.indexOf("chrome-extension://")
              ? (a = Le(o).b == a && "chrome-extension" == s)
              : "http" != s && "https" != s
              ? (a = !1)
              : ci.test(o)
              ? (a = a == o)
              : ((o = o.split(".").join("\\.")),
                (a = new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(a))),
            a)
          ) {
            t = !0;
            break t;
          }
        }
        t = !1;
      }
      if (!t) throw new Vo(ri());
    });
  }
  function su(t) {
    return (
      t.l ||
        (t.l = li().then(function () {
          if (!t.s) {
            var n = t.c,
              e = t.h,
              i = ru(t.b),
              r = new eu(t.u, t.f, t.b);
            (r.f = n), (r.b = e), (r.c = Y(i || [])), (t.s = r.toString());
          }
          (t.i = new $s(t.s)),
            (function (t) {
              if (!t.i) throw Error("IfcHandler must be initialized!");
              !(function (t, n) {
                t.nb.then(function () {
                  t.a.register(
                    "authEvent",
                    n,
                    Ei("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
                  );
                });
              })(t.i, function (n) {
                var e = {};
                if (n && n.authEvent) {
                  var i = !1;
                  for (n = Mo(n.authEvent), e = 0; e < t.g.length; e++)
                    i = t.g[e](n) || i;
                  return ((e = {}).status = i ? "ACK" : "ERROR"), Sn(e);
                }
                return (e.status = "ERROR"), Sn(e);
              });
            })(t);
        })),
      t.l
    );
  }
  function uu(t) {
    return (
      t.m ||
        ((t.w = t.c ? Ii(t.c, ru(t.b)) : null),
        (t.m = new Ha(t.f, O(t.h), t.w))),
      t.m
    );
  }
  function cu(t, n, e, i, r, o, a, s, u, c, h) {
    return (
      ((t = new iu(t, n, e, i, r)).l = o),
      (t.g = a),
      (t.i = s),
      (t.b = ft(u || null)),
      (t.f = c),
      t.ub(h).toString()
    );
  }
  function hu(n) {
    if (
      ((this.a =
        n || (t.INTERNAL.reactNative && t.INTERNAL.reactNative.AsyncStorage)),
      !this.a)
    )
      throw new E(
        "internal-error",
        "The React Native compatibility library was not found."
      );
    this.type = "asyncStorage";
  }
  function lu(t) {
    (this.b = t), (this.a = {}), (this.f = y(this.c, this));
  }
  (eu.prototype.toString = function () {
    return (
      this.f ? Ce(this.a, "v", this.f) : Xe(this.a.a, "v"),
      this.b ? Ce(this.a, "eid", this.b) : Xe(this.a.a, "eid"),
      this.c.length ? Ce(this.a, "fw", this.c.join(",")) : Xe(this.a.a, "fw"),
      this.a.toString()
    );
  }),
    (iu.prototype.ub = function (t) {
      return (this.h = t), this;
    }),
    (iu.prototype.toString = function () {
      var n = Me(this.s, "/__/auth/handler");
      if (
        (Ce(n, "apiKey", this.m),
        Ce(n, "appName", this.c),
        Ce(n, "authType", this.u),
        this.a.isOAuthProvider)
      ) {
        var e = this.a;
        try {
          var i = t.app(this.c).auth().ja();
        } catch (t) {
          i = null;
        }
        for (var r in ((e.kb = i),
        Ce(n, "providerId", this.a.providerId),
        (i = Ri((e = this.a).Fb))))
          i[r] = i[r].toString();
        (r = e.Oc), (i = ft(i));
        for (var o = 0; o < r.length; o++) {
          var a = r[o];
          a in i && delete i[a];
        }
        e.lb && e.kb && !i[e.lb] && (i[e.lb] = e.kb),
          lt(i) || Ce(n, "customParameters", Oi(i));
      }
      if (
        ("function" == typeof this.a.Nb &&
          (e = this.a.Nb()).length &&
          Ce(n, "scopes", e.join(",")),
        this.l ? Ce(n, "redirectUrl", this.l) : Xe(n.a, "redirectUrl"),
        this.g ? Ce(n, "eventId", this.g) : Xe(n.a, "eventId"),
        this.i ? Ce(n, "v", this.i) : Xe(n.a, "v"),
        this.b)
      )
        for (var s in this.b)
          this.b.hasOwnProperty(s) && !De(n, s) && Ce(n, s, this.b[s]);
      return (
        this.h ? Ce(n, "tid", this.h) : Xe(n.a, "tid"),
        this.f ? Ce(n, "eid", this.f) : Xe(n.a, "eid"),
        (s = ru(this.c)).length && Ce(n, "fw", s.join(",")),
        n.toString()
      );
    }),
    ((n = ou.prototype).Lb = function (t, n, e) {
      var i = new E("popup-closed-by-user"),
        r = new E("web-storage-unsupported"),
        o = this,
        a = !1;
      return this.ka()
        .then(function () {
          (function (t) {
            var n = { type: "webStorageSupport" };
            return su(t)
              .then(function () {
                return (function (t, n) {
                  return t.nb.then(function () {
                    return new yn(function (e) {
                      t.a.send(
                        n.type,
                        n,
                        e,
                        Ei("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
                      );
                    });
                  });
                })(t.i, n);
              })
              .then(function (t) {
                if (t && t.length && void 0 !== t[0].webStorageSupport)
                  return t[0].webStorageSupport;
                throw Error();
              });
          })(o).then(function (e) {
            e || (t && si(t), n(r), (a = !0));
          });
        })
        .o(function () {})
        .then(function () {
          if (!a)
            return (function (t) {
              return new yn(function (n) {
                return (function e() {
                  Ie(2e3).then(function () {
                    if (t && !t.closed) return e();
                    n();
                  });
                })();
              });
            })(t);
        })
        .then(function () {
          if (!a)
            return Ie(e).then(function () {
              n(i);
            });
        });
    }),
    (n.Ub = function () {
      var t = Ti();
      return !_i(t) && !Di(t);
    }),
    (n.Qb = function () {
      return !1;
    }),
    (n.Jb = function (t, n, e, i, r, o, a, s) {
      if (!t) return Nn(new E("popup-blocked"));
      if (a && !_i())
        return (
          this.ka().o(function (n) {
            si(t), r(n);
          }),
          i(),
          Sn()
        );
      this.a || (this.a = au(uu(this)));
      var u = this;
      return this.a
        .then(function () {
          var n = u.ka().o(function (n) {
            throw (si(t), r(n), n);
          });
          return i(), n;
        })
        .then(function () {
          (Do(e), a) ||
            oi(cu(u.u, u.f, u.b, n, e, null, o, u.c, void 0, u.h, s), t);
        })
        .o(function (t) {
          throw ("auth/network-request-failed" == t.code && (u.a = null), t);
        });
    }),
    (n.Kb = function (t, n, e, i) {
      this.a || (this.a = au(uu(this)));
      var r = this;
      return this.a
        .then(function () {
          Do(n), oi(cu(r.u, r.f, r.b, t, n, ri(), e, r.c, void 0, r.h, i));
        })
        .o(function (t) {
          throw ("auth/network-request-failed" == t.code && (r.a = null), t);
        });
    }),
    (n.ka = function () {
      var t = this;
      return su(this)
        .then(function () {
          return t.i.nb;
        })
        .o(function () {
          throw ((t.a = null), new E("network-request-failed"));
        });
    }),
    (n.Xb = function () {
      return !0;
    }),
    (n.Ca = function (t) {
      this.g.push(t);
    }),
    (n.Qa = function (t) {
      X(this.g, function (n) {
        return n == t;
      });
    }),
    ((n = hu.prototype).get = function (t) {
      return Sn(this.a.getItem(t)).then(function (t) {
        return t && Pi(t);
      });
    }),
    (n.set = function (t, n) {
      return Sn(this.a.setItem(t, Oi(n)));
    }),
    (n.T = function (t) {
      return Sn(this.a.removeItem(t));
    }),
    (n.ba = function () {}),
    (n.ha = function () {});
  var fu,
    du = [];
  function pu(t, n, e) {
    lt(t.a) && t.b.addEventListener("message", t.f),
      void 0 === t.a[n] && (t.a[n] = []),
      t.a[n].push(e);
  }
  function vu(t) {
    this.a = t;
  }
  function mu(t) {
    (this.c = t), (this.b = !1), (this.a = []);
  }
  function gu(t, n, e, i) {
    var r,
      o,
      a,
      s,
      u = e || {},
      c = null;
    if (t.b) return Nn(Error("connection_unavailable"));
    var h = i ? 800 : 50,
      l = "undefined" != typeof MessageChannel ? new MessageChannel() : null;
    return new yn(function (e, i) {
      l
        ? ((r = Math.floor(Math.random() * Math.pow(10, 20)).toString()),
          l.port1.start(),
          (a = setTimeout(function () {
            i(Error("unsupported_event"));
          }, h)),
          (c = {
            messageChannel: l,
            onMessage: (o = function (t) {
              t.data.eventId === r &&
                ("ack" === t.data.status
                  ? (clearTimeout(a),
                    (s = setTimeout(function () {
                      i(Error("timeout"));
                    }, 3e3)))
                  : "done" === t.data.status
                  ? (clearTimeout(s),
                    void 0 !== t.data.response
                      ? e(t.data.response)
                      : i(Error("unknown_error")))
                  : (clearTimeout(a),
                    clearTimeout(s),
                    i(Error("invalid_response"))));
            }),
          }),
          t.a.push(c),
          l.port1.addEventListener("message", o),
          t.c.postMessage({ eventType: n, eventId: r, data: u }, [l.port2]))
        : i(Error("connection_unavailable"));
    })
      .then(function (n) {
        return bu(t, c), n;
      })
      .o(function (n) {
        throw (bu(t, c), n);
      });
  }
  function bu(t, n) {
    if (n) {
      var e = n.messageChannel,
        i = n.onMessage;
      e && (e.port1.removeEventListener("message", i), e.port1.close()),
        X(t.a, function (t) {
          return t == n;
        });
    }
  }
  function yu() {
    if (!Tu()) throw new E("web-storage-unsupported");
    (this.c = {}),
      (this.a = []),
      (this.b = 0),
      (this.u = s.indexedDB),
      (this.type = "indexedDB"),
      (this.g = this.l = this.f = this.i = null),
      (this.s = !1),
      (this.h = null);
    var t = this;
    pi() && self
      ? ((this.l = (function () {
          var t = pi() ? self : null;
          if (
            (q(du, function (e) {
              e.b == t && (n = e);
            }),
            !n)
          ) {
            var n = new lu(t);
            du.push(n);
          }
          return n;
        })()),
        pu(this.l, "keyChanged", function (n, e) {
          return Nu(t).then(function (n) {
            return (
              0 < n.length &&
                q(t.a, function (t) {
                  t(n);
                }),
              { keyProcessed: B(n, e.key) }
            );
          });
        }),
        pu(this.l, "ping", function () {
          return Sn(["keyChanged"]);
        }))
      : (function () {
          var t = s.navigator;
          return t && t.serviceWorker
            ? Sn()
                .then(function () {
                  return t.serviceWorker.ready;
                })
                .then(function (t) {
                  return t.active || null;
                })
                .o(function () {
                  return null;
                })
            : Sn(null);
        })().then(function (n) {
          (t.h = n) &&
            ((t.g = new mu(new vu(n))),
            gu(t.g, "ping", null, !0)
              .then(function (n) {
                n[0].fulfilled && B(n[0].value, "keyChanged") && (t.s = !0);
              })
              .o(function () {}));
        });
  }
  function wu(t) {
    return new yn(function (n, e) {
      var i = t.u.open("firebaseLocalStorageDb", 1);
      (i.onerror = function (t) {
        try {
          t.preventDefault();
        } catch (t) {}
        e(Error(t.target.error));
      }),
        (i.onupgradeneeded = function (t) {
          t = t.target.result;
          try {
            t.createObjectStore("firebaseLocalStorage", {
              keyPath: "fbase_key",
            });
          } catch (t) {
            e(t);
          }
        }),
        (i.onsuccess = function (i) {
          (i = i.target.result).objectStoreNames.contains(
            "firebaseLocalStorage"
          )
            ? n(i)
            : (function (t) {
                return new yn(function (n, e) {
                  var i = t.u.deleteDatabase("firebaseLocalStorageDb");
                  (i.onsuccess = function () {
                    n();
                  }),
                    (i.onerror = function (t) {
                      e(Error(t.target.error));
                    });
                });
              })(t)
                .then(function () {
                  return wu(t);
                })
                .then(function (t) {
                  n(t);
                })
                .o(function (t) {
                  e(t);
                });
        });
    });
  }
  function Iu(t) {
    return t.m || (t.m = wu(t)), t.m;
  }
  function Tu() {
    try {
      return !!s.indexedDB;
    } catch (t) {
      return !1;
    }
  }
  function Eu(t) {
    return t.objectStore("firebaseLocalStorage");
  }
  function Au(t, n) {
    return t.transaction(
      ["firebaseLocalStorage"],
      n ? "readwrite" : "readonly"
    );
  }
  function ku(t) {
    return new yn(function (n, e) {
      (t.onsuccess = function (t) {
        t && t.target ? n(t.target.result) : n();
      }),
        (t.onerror = function (t) {
          e(t.target.error);
        });
    });
  }
  function Su(t, n) {
    return t.g &&
      t.h &&
      (function () {
        var t = s.navigator;
        return (t && t.serviceWorker && t.serviceWorker.controller) || null;
      })() === t.h
      ? gu(t.g, "keyChanged", { key: n }, t.s)
          .then(function () {})
          .o(function () {})
      : Sn();
  }
  function Nu(t) {
    return Iu(t)
      .then(function (t) {
        var n = Eu(Au(t, !1));
        return n.getAll
          ? ku(n.getAll())
          : new yn(function (t, e) {
              var i = [],
                r = n.openCursor();
              (r.onsuccess = function (n) {
                (n = n.target.result) ? (i.push(n.value), n.continue()) : t(i);
              }),
                (r.onerror = function (t) {
                  e(t.target.error);
                });
            });
      })
      .then(function (n) {
        var e = {},
          i = [];
        if (0 == t.b) {
          for (i = 0; i < n.length; i++) e[n[i].fbase_key] = n[i].value;
          (i = (function t(n, e) {
            var i,
              r = [];
            for (i in n)
              i in e
                ? typeof n[i] != typeof e[i]
                  ? r.push(i)
                  : "object" == typeof n[i] && null != n[i] && null != e[i]
                  ? 0 < t(n[i], e[i]).length && r.push(i)
                  : n[i] !== e[i] && r.push(i)
                : r.push(i);
            for (i in e) i in n || r.push(i);
            return r;
          })(t.c, e)),
            (t.c = e);
        }
        return i;
      });
  }
  function _u(t) {
    t.i && t.i.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), (t.f = null));
  }
  function Ou(t) {
    var n = this,
      e = null;
    (this.a = []),
      (this.type = "indexedDB"),
      (this.c = t),
      (this.b = Sn()
        .then(function () {
          if (Tu()) {
            var t = Ci(),
              i = "__sak" + t;
            return (
              fu || (fu = new yu()),
              (e = fu)
                .set(i, t)
                .then(function () {
                  return e.get(i);
                })
                .then(function (n) {
                  if (n !== t) throw Error("indexedDB not supported!");
                  return e.T(i);
                })
                .then(function () {
                  return e;
                })
                .o(function () {
                  return n.c;
                })
            );
          }
          return n.c;
        })
        .then(function (t) {
          return (
            (n.type = t.type),
            t.ba(function (t) {
              q(n.a, function (n) {
                n(t);
              });
            }),
            t
          );
        }));
  }
  function Ru() {
    (this.a = {}), (this.type = "inMemory");
  }
  function Pu() {
    if (
      !(function () {
        var n = "Node" == vi();
        if (
          !(n = Cu() || (n && t.INTERNAL.node && t.INTERNAL.node.localStorage))
        )
          return !1;
        try {
          return n.setItem("__sak", "1"), n.removeItem("__sak"), !0;
        } catch (t) {
          return !1;
        }
      })()
    ) {
      if ("Node" == vi())
        throw new E(
          "internal-error",
          "The LocalStorage compatibility library was not found."
        );
      throw new E("web-storage-unsupported");
    }
    (this.a = Cu() || t.INTERNAL.node.localStorage),
      (this.type = "localStorage");
  }
  function Cu() {
    try {
      var t = s.localStorage,
        n = Ci();
      return t && (t.setItem(n, "1"), t.removeItem(n)), t;
    } catch (t) {
      return null;
    }
  }
  function Du() {
    this.type = "nullStorage";
  }
  function Lu() {
    if (
      !(function () {
        var n = "Node" == vi();
        if (
          !(n =
            Mu() || (n && t.INTERNAL.node && t.INTERNAL.node.sessionStorage))
        )
          return !1;
        try {
          return n.setItem("__sak", "1"), n.removeItem("__sak"), !0;
        } catch (t) {
          return !1;
        }
      })()
    ) {
      if ("Node" == vi())
        throw new E(
          "internal-error",
          "The SessionStorage compatibility library was not found."
        );
      throw new E("web-storage-unsupported");
    }
    (this.a = Mu() || t.INTERNAL.node.sessionStorage),
      (this.type = "sessionStorage");
  }
  function Mu() {
    try {
      var t = s.sessionStorage,
        n = Ci();
      return t && (t.setItem(n, "1"), t.removeItem(n)), t;
    } catch (t) {
      return null;
    }
  }
  function xu() {
    var t = {};
    (t.Browser = Vu),
      (t.Node = Fu),
      (t.ReactNative = qu),
      (t.Worker = Ku),
      (this.a = t[vi()]);
  }
  (lu.prototype.c = function (t) {
    var n = t.data.eventType,
      e = t.data.eventId,
      i = this.a[n];
    if (i && 0 < i.length) {
      t.ports[0].postMessage({
        status: "ack",
        eventId: e,
        eventType: n,
        response: null,
      });
      var r = [];
      q(i, function (n) {
        r.push(
          Sn().then(function () {
            return n(t.origin, t.data.data);
          })
        );
      }),
        On(r).then(function (i) {
          var r = [];
          q(i, function (t) {
            r.push({
              fulfilled: t.Mb,
              value: t.value,
              reason: t.reason ? t.reason.message : void 0,
            });
          }),
            q(r, function (t) {
              for (var n in t) void 0 === t[n] && delete t[n];
            }),
            t.ports[0].postMessage({
              status: "done",
              eventId: e,
              eventType: n,
              response: r,
            });
        });
    }
  }),
    (vu.prototype.postMessage = function (t, n) {
      this.a.postMessage(t, n);
    }),
    (mu.prototype.close = function () {
      for (; 0 < this.a.length; ) bu(this, this.a[0]);
      this.b = !0;
    }),
    ((n = yu.prototype).set = function (t, n) {
      var e,
        i = !1,
        r = this;
      return Iu(this)
        .then(function (n) {
          return ku((n = Eu(Au((e = n), !0))).get(t));
        })
        .then(function (o) {
          var a = Eu(Au(e, !0));
          return o
            ? ((o.value = n), ku(a.put(o)))
            : (r.b++,
              (i = !0),
              ((o = {}).fbase_key = t),
              (o.value = n),
              ku(a.add(o)));
        })
        .then(function () {
          return (r.c[t] = n), Su(r, t);
        })
        .ma(function () {
          i && r.b--;
        });
    }),
    (n.get = function (t) {
      return Iu(this)
        .then(function (n) {
          return ku(Eu(Au(n, !1)).get(t));
        })
        .then(function (t) {
          return t && t.value;
        });
    }),
    (n.T = function (t) {
      var n = !1,
        e = this;
      return Iu(this)
        .then(function (i) {
          return (n = !0), e.b++, ku(Eu(Au(i, !0)).delete(t));
        })
        .then(function () {
          return delete e.c[t], Su(e, t);
        })
        .ma(function () {
          n && e.b--;
        });
    }),
    (n.ba = function (t) {
      0 == this.a.length &&
        (function (t) {
          _u(t),
            (function n() {
              t.f = setTimeout(function () {
                t.i = Nu(t)
                  .then(function (n) {
                    0 < n.length &&
                      q(t.a, function (t) {
                        t(n);
                      });
                  })
                  .then(function () {
                    n();
                  })
                  .o(function (t) {
                    "STOP_EVENT" != t.message && n();
                  });
              }, 800);
            })();
        })(this),
        this.a.push(t);
    }),
    (n.ha = function (t) {
      X(this.a, function (n) {
        return n == t;
      }),
        0 == this.a.length && _u(this);
    }),
    ((n = Ou.prototype).get = function (t) {
      return this.b.then(function (n) {
        return n.get(t);
      });
    }),
    (n.set = function (t, n) {
      return this.b.then(function (e) {
        return e.set(t, n);
      });
    }),
    (n.T = function (t) {
      return this.b.then(function (n) {
        return n.T(t);
      });
    }),
    (n.ba = function (t) {
      this.a.push(t);
    }),
    (n.ha = function (t) {
      X(this.a, function (n) {
        return n == t;
      });
    }),
    ((n = Ru.prototype).get = function (t) {
      return Sn(this.a[t]);
    }),
    (n.set = function (t, n) {
      return (this.a[t] = n), Sn();
    }),
    (n.T = function (t) {
      return delete this.a[t], Sn();
    }),
    (n.ba = function () {}),
    (n.ha = function () {}),
    ((n = Pu.prototype).get = function (t) {
      var n = this;
      return Sn().then(function () {
        return Pi(n.a.getItem(t));
      });
    }),
    (n.set = function (t, n) {
      var e = this;
      return Sn().then(function () {
        var i = Oi(n);
        null === i ? e.T(t) : e.a.setItem(t, i);
      });
    }),
    (n.T = function (t) {
      var n = this;
      return Sn().then(function () {
        n.a.removeItem(t);
      });
    }),
    (n.ba = function (t) {
      s.window && re(s.window, "storage", t);
    }),
    (n.ha = function (t) {
      s.window && se(s.window, "storage", t);
    }),
    ((n = Du.prototype).get = function () {
      return Sn(null);
    }),
    (n.set = function () {
      return Sn();
    }),
    (n.T = function () {
      return Sn();
    }),
    (n.ba = function () {}),
    (n.ha = function () {}),
    ((n = Lu.prototype).get = function (t) {
      var n = this;
      return Sn().then(function () {
        return Pi(n.a.getItem(t));
      });
    }),
    (n.set = function (t, n) {
      var e = this;
      return Sn().then(function () {
        var i = Oi(n);
        null === i ? e.T(t) : e.a.setItem(t, i);
      });
    }),
    (n.T = function (t) {
      var n = this;
      return Sn().then(function () {
        n.a.removeItem(t);
      });
    }),
    (n.ba = function () {}),
    (n.ha = function () {});
  var ju,
    Uu,
    Vu = { F: Pu, $a: Lu },
    Fu = { F: Pu, $a: Lu },
    qu = { F: hu, $a: Du },
    Ku = { F: Pu, $a: Du },
    Hu = { od: "local", NONE: "none", qd: "session" };
  function Gu() {
    var t = !(Di(Ti()) || !di()),
      n = _i(),
      e = Ai();
    (this.m = t),
      (this.h = n),
      (this.l = e),
      (this.a = {}),
      ju || (ju = new xu()),
      (t = ju);
    try {
      this.g =
        (!ii() && Ui()) || !s.indexedDB
          ? new t.a.F()
          : new Ou(pi() ? new Ru() : new t.a.F());
    } catch (t) {
      (this.g = new Ru()), (this.h = !0);
    }
    try {
      this.i = new t.a.$a();
    } catch (t) {
      this.i = new Ru();
    }
    (this.u = new Ru()), (this.f = y(this.Vb, this)), (this.b = {});
  }
  function Bu() {
    return Uu || (Uu = new Gu()), Uu;
  }
  function Wu(t, n) {
    switch (n) {
      case "session":
        return t.i;
      case "none":
        return t.u;
      default:
        return t.g;
    }
  }
  function Xu(t, n) {
    return "firebase:" + t.name + (n ? ":" + n : "");
  }
  function Ju(t, n, e) {
    return (e = Xu(n, e)), "local" == n.F && (t.b[e] = null), Wu(t, n.F).T(e);
  }
  function Yu(t) {
    t.c && (clearInterval(t.c), (t.c = null));
  }
  function zu(t) {
    (this.a = t), (this.b = Bu());
  }
  ((n = Gu.prototype).get = function (t, n) {
    return Wu(this, t.F).get(Xu(t, n));
  }),
    (n.set = function (t, n, e) {
      var i = Xu(t, e),
        r = this,
        o = Wu(this, t.F);
      return o
        .set(i, n)
        .then(function () {
          return o.get(i);
        })
        .then(function (n) {
          "local" == t.F && (r.b[i] = n);
        });
    }),
    (n.addListener = function (t, n, e) {
      (t = Xu(t, n)),
        this.l && (this.b[t] = s.localStorage.getItem(t)),
        lt(this.a) &&
          (Wu(this, "local").ba(this.f),
          this.h ||
            ((ii() || !Ui()) && s.indexedDB) ||
            !this.l ||
            (function (t) {
              Yu(t),
                (t.c = setInterval(function () {
                  for (var n in t.a) {
                    var e = s.localStorage.getItem(n),
                      i = t.b[n];
                    e != i &&
                      ((t.b[n] = e),
                      (e = new Xn({
                        type: "storage",
                        key: n,
                        target: window,
                        oldValue: i,
                        newValue: e,
                        a: !0,
                      })),
                      t.Vb(e));
                  }
                }, 1e3));
            })(this)),
        this.a[t] || (this.a[t] = []),
        this.a[t].push(e);
    }),
    (n.removeListener = function (t, n, e) {
      (t = Xu(t, n)),
        this.a[t] &&
          (X(this.a[t], function (t) {
            return t == e;
          }),
          0 == this.a[t].length && delete this.a[t]),
        lt(this.a) && (Wu(this, "local").ha(this.f), Yu(this));
    }),
    (n.Vb = function (t) {
      if (t && t.f) {
        var n = t.a.key;
        if (null == n)
          for (var e in this.a) {
            var i = this.b[e];
            void 0 === i && (i = null);
            var r = s.localStorage.getItem(e);
            r !== i && ((this.b[e] = r), this.ib(e));
          }
        else if (0 == n.indexOf("firebase:") && this.a[n]) {
          if (
            (void 0 !== t.a.a ? Wu(this, "local").ha(this.f) : Yu(this), this.m)
          )
            if (((e = s.localStorage.getItem(n)), (i = t.a.newValue) !== e))
              null !== i
                ? s.localStorage.setItem(n, i)
                : s.localStorage.removeItem(n);
            else if (this.b[n] === i && void 0 === t.a.a) return;
          var o = this;
          (e = function () {
            (void 0 === t.a.a && o.b[n] === s.localStorage.getItem(n)) ||
              ((o.b[n] = s.localStorage.getItem(n)), o.ib(n));
          }),
            Bt &&
            tn &&
            10 == tn &&
            s.localStorage.getItem(n) !== t.a.newValue &&
            t.a.newValue !== t.a.oldValue
              ? setTimeout(e, 10)
              : e();
        }
      } else q(t, y(this.ib, this));
    }),
    (n.ib = function (t) {
      this.a[t] &&
        q(this.a[t], function (t) {
          t();
        });
    });
  var $u,
    Zu = { name: "authEvent", F: "local" };
  function Qu() {
    this.a = Bu();
  }
  function tc(t, n) {
    (this.b = nc),
      (this.f = s.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
      (this.g = this.c = 0),
      (this.a = []),
      (this.i = t),
      (this.h = n),
      (this.l = s.Int32Array ? new Int32Array(64) : Array(64)),
      void 0 === $u && ($u = s.Int32Array ? new Int32Array(uc) : uc),
      this.reset();
  }
  T(tc, function () {
    this.b = -1;
  });
  for (var nc = 64, ec = nc - 1, ic = [], rc = 0; rc < ec; rc++) ic[rc] = 0;
  var oc = J(128, ic);
  function ac(t) {
    for (var n = t.f, e = t.l, i = 0, r = 0; r < n.length; )
      (e[i++] = (n[r] << 24) | (n[r + 1] << 16) | (n[r + 2] << 8) | n[r + 3]),
        (r = 4 * i);
    for (n = 16; 64 > n; n++) {
      (r = 0 | e[n - 15]), (i = 0 | e[n - 2]);
      var o =
          ((0 | e[n - 16]) +
            (((r >>> 7) | (r << 25)) ^ ((r >>> 18) | (r << 14)) ^ (r >>> 3))) |
          0,
        a =
          ((0 | e[n - 7]) +
            (((i >>> 17) | (i << 15)) ^
              ((i >>> 19) | (i << 13)) ^
              (i >>> 10))) |
          0;
      e[n] = (o + a) | 0;
    }
    (i = 0 | t.a[0]), (r = 0 | t.a[1]);
    var s = 0 | t.a[2],
      u = 0 | t.a[3],
      c = 0 | t.a[4],
      h = 0 | t.a[5],
      l = 0 | t.a[6];
    for (o = 0 | t.a[7], n = 0; 64 > n; n++) {
      var f =
        ((((i >>> 2) | (i << 30)) ^
          ((i >>> 13) | (i << 19)) ^
          ((i >>> 22) | (i << 10))) +
          ((i & r) ^ (i & s) ^ (r & s))) |
        0;
      (a =
        ((o =
          (o +
            (((c >>> 6) | (c << 26)) ^
              ((c >>> 11) | (c << 21)) ^
              ((c >>> 25) | (c << 7)))) |
          0) +
          (((a = ((a = (c & h) ^ (~c & l)) + (0 | $u[n])) | 0) + (0 | e[n])) |
            0)) |
        0),
        (o = l),
        (l = h),
        (h = c),
        (c = (u + a) | 0),
        (u = s),
        (s = r),
        (r = i),
        (i = (a + f) | 0);
    }
    (t.a[0] = (t.a[0] + i) | 0),
      (t.a[1] = (t.a[1] + r) | 0),
      (t.a[2] = (t.a[2] + s) | 0),
      (t.a[3] = (t.a[3] + u) | 0),
      (t.a[4] = (t.a[4] + c) | 0),
      (t.a[5] = (t.a[5] + h) | 0),
      (t.a[6] = (t.a[6] + l) | 0),
      (t.a[7] = (t.a[7] + o) | 0);
  }
  function sc(t, n, e) {
    void 0 === e && (e = n.length);
    var i = 0,
      r = t.c;
    if ("string" == typeof n)
      for (; i < e; )
        (t.f[r++] = n.charCodeAt(i++)), r == t.b && (ac(t), (r = 0));
    else {
      if (!f(n)) throw Error("message must be string or array");
      for (; i < e; ) {
        var o = n[i++];
        if (!("number" == typeof o && 0 <= o && 255 >= o && o == (0 | o)))
          throw Error("message must be a byte array");
        (t.f[r++] = o), r == t.b && (ac(t), (r = 0));
      }
    }
    (t.c = r), (t.g += e);
  }
  tc.prototype.reset = function () {
    (this.g = this.c = 0),
      (this.a = s.Int32Array ? new Int32Array(this.h) : Y(this.h));
  };
  var uc = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ];
  function cc() {
    tc.call(this, 8, hc);
  }
  T(cc, tc);
  var hc = [
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ];
  function lc(t, n, e, i, r) {
    (this.u = t),
      (this.i = n),
      (this.l = e),
      (this.m = i || null),
      (this.s = r || null),
      (this.h = n + ":" + e),
      (this.w = new Qu()),
      (this.g = new zu(this.h)),
      (this.f = null),
      (this.b = []),
      (this.a = this.c = null);
  }
  function fc(t) {
    return new E("invalid-cordova-configuration", t);
  }
  function dc(t) {
    var n = new cc();
    sc(n, t), (t = []);
    var e = 8 * n.g;
    56 > n.c ? sc(n, oc, 56 - n.c) : sc(n, oc, n.b - (n.c - 56));
    for (var i = 63; 56 <= i; i--) (n.f[i] = 255 & e), (e /= 256);
    for (ac(n), i = e = 0; i < n.i; i++)
      for (var r = 24; 0 <= r; r -= 8) t[e++] = (n.a[i] >> r) & 255;
    return (function (t) {
      return H(t, function (t) {
        return 1 < (t = t.toString(16)).length ? t : "0" + t;
      }).join("");
    })(t);
  }
  function pc(t, n) {
    for (var e = 0; e < t.b.length; e++)
      try {
        t.b[e](n);
      } catch (t) {}
  }
  function vc(t) {
    return (
      t.f ||
        (t.f = t.ka().then(function () {
          return new yn(function (n) {
            t.Ca(function e(i) {
              return n(i), t.Qa(e), !1;
            }),
              (function (t) {
                function n(n) {
                  (i = !0),
                    r && r.cancel(),
                    mc(t).then(function (i) {
                      var r = e;
                      if (i && n && n.url) {
                        var o = null;
                        -1 != (r = Zr(n.url)).indexOf("/__/auth/callback") &&
                          (o = (o =
                            "object" ==
                            typeof (o = Pi(
                              De((o = Le(r)), "firebaseError") || null
                            ))
                              ? A(o)
                              : null)
                            ? new Lo(i.c, i.b, null, null, o, null, i.S())
                            : new Lo(i.c, i.b, r, i.f, null, null, i.S())),
                          (r = o || e);
                      }
                      pc(t, r);
                    });
                }
                var e = new Lo(
                    "unknown",
                    null,
                    null,
                    null,
                    new E("no-auth-event")
                  ),
                  i = !1,
                  r = Ie(500).then(function () {
                    return mc(t).then(function () {
                      i || pc(t, e);
                    });
                  }),
                  o = s.handleOpenURL;
                (s.handleOpenURL = function (t) {
                  if (
                    (0 ==
                      t
                        .toLowerCase()
                        .indexOf(
                          Ei("BuildInfo.packageName", s).toLowerCase() + "://"
                        ) && n({ url: t }),
                    "function" == typeof o)
                  )
                    try {
                      o(t);
                    } catch (t) {
                      console.error(t);
                    }
                }),
                  Uo || (Uo = new xo()),
                  (function (t) {
                    var n = Uo;
                    n.a.push(t),
                      n.b ||
                        ((n.b = function (t) {
                          for (var e = 0; e < n.a.length; e++) n.a[e](t);
                        }),
                        "function" ==
                          typeof (t = Ei("universalLinks.subscribe", s)) &&
                          t(null, n.b));
                  })(n);
              })(t);
          });
        })),
      t.f
    );
  }
  function mc(t) {
    var n = null;
    return (function (t) {
      return t.b.get(Zu, t.a).then(function (t) {
        return Mo(t);
      });
    })(t.g)
      .then(function (e) {
        return (n = e), Ju((e = t.g).b, Zu, e.a);
      })
      .then(function () {
        return n;
      });
  }
  function gc(t) {
    (this.a = t), (this.b = Bu());
  }
  ((n = lc.prototype).ka = function () {
    return this.Ga
      ? this.Ga
      : (this.Ga = (
          fi(void 0)
            ? li().then(function () {
                return new yn(function (t, n) {
                  var e = s.document,
                    i = setTimeout(function () {
                      n(Error("Cordova framework is not ready."));
                    }, 1e3);
                  e.addEventListener(
                    "deviceready",
                    function () {
                      clearTimeout(i), t();
                    },
                    !1
                  );
                });
              })
            : Nn(Error("Cordova must run in an Android or iOS file scheme."))
        ).then(
          function () {
            if ("function" != typeof Ei("universalLinks.subscribe", s))
              throw fc("cordova-universal-links-plugin-fix is not installed");
            if (void 0 === Ei("BuildInfo.packageName", s))
              throw fc("cordova-plugin-buildinfo is not installed");
            if (
              "function" != typeof Ei("cordova.plugins.browsertab.openUrl", s)
            )
              throw fc("cordova-plugin-browsertab is not installed");
            if ("function" != typeof Ei("cordova.InAppBrowser.open", s))
              throw fc("cordova-plugin-inappbrowser is not installed");
          },
          function () {
            throw new E("cordova-not-ready");
          }
        ));
  }),
    (n.Lb = function (t, n) {
      return n(new E("operation-not-supported-in-this-environment")), Sn();
    }),
    (n.Jb = function () {
      return Nn(new E("operation-not-supported-in-this-environment"));
    }),
    (n.Xb = function () {
      return !1;
    }),
    (n.Ub = function () {
      return !0;
    }),
    (n.Qb = function () {
      return !0;
    }),
    (n.Kb = function (t, n, e, i) {
      if (this.c) return Nn(new E("redirect-operation-pending"));
      var r = this,
        o = s.document,
        a = null,
        u = null,
        c = null,
        h = null;
      return (this.c = Sn()
        .then(function () {
          return Do(n), vc(r);
        })
        .then(function () {
          return (function (t, n, e, i, r) {
            var o = (function () {
                for (var t = 20, n = []; 0 < t; )
                  n.push(
                    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                      Math.floor(62 * Math.random())
                    )
                  ),
                    t--;
                return n.join("");
              })(),
              a = new Lo(n, i, null, o, new E("no-auth-event"), null, r),
              u = Ei("BuildInfo.packageName", s);
            if ("string" != typeof u)
              throw new E("invalid-cordova-configuration");
            var c = Ei("BuildInfo.displayName", s),
              h = {};
            if (
              Ti()
                .toLowerCase()
                .match(/iphone|ipad|ipod/)
            )
              h.ibi = u;
            else {
              if (
                !Ti()
                  .toLowerCase()
                  .match(/android/)
              )
                return Nn(new E("operation-not-supported-in-this-environment"));
              h.apn = u;
            }
            c && (h.appDisplayName = c), (o = dc(o)), (h.sessionId = o);
            var l = cu(t.u, t.i, t.l, n, e, null, i, t.m, h, t.s, r);
            return t
              .ka()
              .then(function () {
                var n = t.h;
                return t.w.a.set(Zu, a.v(), n);
              })
              .then(function () {
                var n = Ei("cordova.plugins.browsertab.isAvailable", s);
                if ("function" != typeof n)
                  throw new E("invalid-cordova-configuration");
                var e = null;
                n(function (n) {
                  if (n) {
                    if (
                      "function" !=
                      typeof (e = Ei("cordova.plugins.browsertab.openUrl", s))
                    )
                      throw new E("invalid-cordova-configuration");
                    e(l);
                  } else {
                    if (
                      "function" !=
                      typeof (e = Ei("cordova.InAppBrowser.open", s))
                    )
                      throw new E("invalid-cordova-configuration");
                    (n = Ti()),
                      (t.a = e(
                        l,
                        n.match(/(iPad|iPhone|iPod).*OS 7_\d/i) ||
                          n.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                          ? "_blank"
                          : "_system",
                        "location=yes"
                      ));
                  }
                });
              });
          })(r, t, n, e, i);
        })
        .then(function () {
          return new yn(function (t, n) {
            (u = function () {
              var n = Ei("cordova.plugins.browsertab.close", s);
              return (
                t(),
                "function" == typeof n && n(),
                r.a &&
                  "function" == typeof r.a.close &&
                  (r.a.close(), (r.a = null)),
                !1
              );
            }),
              r.Ca(u),
              (c = function () {
                a ||
                  (a = Ie(2e3).then(function () {
                    n(new E("redirect-cancelled-by-user"));
                  }));
              }),
              (h = function () {
                xi() && c();
              }),
              o.addEventListener("resume", c, !1),
              Ti()
                .toLowerCase()
                .match(/android/) ||
                o.addEventListener("visibilitychange", h, !1);
          }).o(function (t) {
            return mc(r).then(function () {
              throw t;
            });
          });
        })
        .ma(function () {
          c && o.removeEventListener("resume", c, !1),
            h && o.removeEventListener("visibilitychange", h, !1),
            a && a.cancel(),
            u && r.Qa(u),
            (r.c = null);
        }));
    }),
    (n.Ca = function (t) {
      this.b.push(t),
        vc(this).o(function (n) {
          "auth/invalid-cordova-configuration" === n.code &&
            ((n = new Lo("unknown", null, null, null, new E("no-auth-event"))),
            t(n));
        });
    }),
    (n.Qa = function (t) {
      X(this.b, function (n) {
        return n == t;
      });
    });
  var bc = { name: "pendingRedirect", F: "session" };
  function yc(t) {
    return Ju(t.b, bc, t.a);
  }
  function wc(t, n, e) {
    (this.i = {}),
      (this.w = 0),
      (this.D = t),
      (this.u = n),
      (this.m = e),
      (this.h = []),
      (this.f = !1),
      (this.l = y(this.s, this)),
      (this.b = new Lc()),
      (this.B = new Vc()),
      (this.g = new gc(this.u + ":" + this.m)),
      (this.c = {}),
      (this.c.unknown = this.b),
      (this.c.signInViaRedirect = this.b),
      (this.c.linkViaRedirect = this.b),
      (this.c.reauthViaRedirect = this.b),
      (this.c.signInViaPopup = this.B),
      (this.c.linkViaPopup = this.B),
      (this.c.reauthViaPopup = this.B),
      (this.a = Ic(this.D, this.u, this.m, k));
  }
  function Ic(n, e, i, r) {
    var o = t.SDK_VERSION || null;
    return fi() ? new lc(n, e, i, o, r) : new ou(n, e, i, o, r);
  }
  function Tc(t) {
    t.f || ((t.f = !0), t.a.Ca(t.l));
    var n = t.a;
    return t.a.ka().o(function (e) {
      throw (t.a == n && t.reset(), e);
    });
  }
  function Ec(t) {
    t.a.Ub() &&
      Tc(t).o(function (n) {
        var e = new Lo(
          "unknown",
          null,
          null,
          null,
          new E("operation-not-supported-in-this-environment")
        );
        Oc(n) && t.s(e);
      }),
      t.a.Qb() || Mc(t.b);
  }
  function Ac(t, n) {
    B(t.h, n) || t.h.push(n),
      t.f ||
        (function (t) {
          return t.b.get(bc, t.a).then(function (t) {
            return "pending" == t;
          });
        })(t.g)
          .then(function (n) {
            n
              ? yc(t.g).then(function () {
                  Tc(t).o(function (n) {
                    var e = new Lo(
                      "unknown",
                      null,
                      null,
                      null,
                      new E("operation-not-supported-in-this-environment")
                    );
                    Oc(n) && t.s(e);
                  });
                })
              : Ec(t);
          })
          .o(function () {
            Ec(t);
          });
  }
  function kc(t, n) {
    X(t.h, function (t) {
      return t == n;
    });
  }
  (wc.prototype.reset = function () {
    (this.f = !1),
      this.a.Qa(this.l),
      (this.a = Ic(this.D, this.u, this.m)),
      (this.i = {});
  }),
    (wc.prototype.s = function (t) {
      if (!t) throw new E("invalid-auth-event");
      if (
        (6e5 <= I() - this.w && ((this.i = {}), (this.w = 0)),
        t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
      )
        return !1;
      for (var n = !1, e = 0; e < this.h.length; e++) {
        var i = this.h[e];
        if (i.Cb(t.c, t.b)) {
          (n = this.c[t.c]) &&
            (n.h(t, i),
            t && (t.f || t.b) && ((this.i[t.getUid()] = !0), (this.w = I()))),
            (n = !0);
          break;
        }
      }
      return Mc(this.b), n;
    });
  var Sc = new Mi(2e3, 1e4),
    Nc = new Mi(3e4, 6e4);
  function _c(t, n, e, i, r, o, a) {
    return t.a.Jb(
      n,
      e,
      i,
      function () {
        t.f || ((t.f = !0), t.a.Ca(t.l));
      },
      function () {
        t.reset();
      },
      r,
      o,
      a
    );
  }
  function Oc(t) {
    return !(!t || "auth/cordova-not-ready" != t.code);
  }
  function Rc(t, n, e, i, r) {
    var o;
    return (function (t) {
      return t.b.set(bc, "pending", t.a);
    })(t.g).then(function () {
      return t.a
        .Kb(n, e, i, r)
        .o(function (n) {
          if (Oc(n)) throw new E("operation-not-supported-in-this-environment");
          return (
            (o = n),
            yc(t.g).then(function () {
              throw o;
            })
          );
        })
        .then(function () {
          return t.a.Xb()
            ? new yn(function () {})
            : yc(t.g)
                .then(function () {
                  return t.pa();
                })
                .then(function () {})
                .o(function () {});
        });
    });
  }
  function Pc(t, n, e, i, r) {
    return t.a.Lb(
      i,
      function (t) {
        n.la(e, null, t, r);
      },
      Sc.get()
    );
  }
  wc.prototype.pa = function () {
    return this.b.pa();
  };
  var Cc = {};
  function Dc(t, n, e) {
    var i = n + ":" + e;
    return Cc[i] || (Cc[i] = new wc(t, n, e)), Cc[i];
  }
  function Lc() {
    (this.b = null),
      (this.f = []),
      (this.c = []),
      (this.a = null),
      (this.i = this.g = !1);
  }
  function Mc(t) {
    t.g || ((t.g = !0), Uc(t, !1, null, null));
  }
  function xc(t) {
    t.g && !t.i && Uc(t, !1, null, null);
  }
  function jc(t, n) {
    if (
      ((t.b = function () {
        return Sn(n);
      }),
      t.f.length)
    )
      for (var e = 0; e < t.f.length; e++) t.f[e](n);
  }
  function Uc(t, n, e, i) {
    n
      ? i
        ? (function (t, n) {
            if (
              ((t.b = function () {
                return Nn(n);
              }),
              t.c.length)
            )
              for (var e = 0; e < t.c.length; e++) t.c[e](n);
          })(t, i)
        : jc(t, e)
      : jc(t, { user: null }),
      (t.f = []),
      (t.c = []);
  }
  function Vc() {}
  function Fc() {
    (this.Bb = !1),
      Object.defineProperty(this, "appVerificationDisabled", {
        get: function () {
          return this.Bb;
        },
        set: function (t) {
          this.Bb = t;
        },
        enumerable: !1,
      });
  }
  function qc(t, n) {
    (this.a = n), Hi(this, "verificationId", t);
  }
  function Kc(t, n, e, i) {
    return new Ro(t).cb(n, e).then(function (t) {
      return new qc(t, i);
    });
  }
  function Hc(t) {
    var n = Ur(t);
    if (!(n && n.exp && n.auth_time && n.iat))
      throw new E(
        "internal-error",
        "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation."
      );
    Gi(this, {
      token: t,
      expirationTime: ji(1e3 * n.exp),
      authTime: ji(1e3 * n.auth_time),
      issuedAtTime: ji(1e3 * n.iat),
      signInProvider:
        n.firebase && n.firebase.sign_in_provider
          ? n.firebase.sign_in_provider
          : null,
      signInSecondFactor:
        n.firebase && n.firebase.sign_in_second_factor
          ? n.firebase.sign_in_second_factor
          : null,
      claims: n,
    });
  }
  function Gc(t, n, e) {
    var i = n && n[Wc];
    if (!i)
      throw new E(
        "argument-error",
        "Internal assert: Invalid MultiFactorResolver"
      );
    (this.a = t),
      (this.f = ft(n)),
      (this.g = e),
      (this.c = new Qr(null, i)),
      (this.b = []);
    var r = this;
    q(n[Bc] || [], function (t) {
      (t = Ji(t)) && r.b.push(t);
    }),
      Hi(this, "auth", this.a),
      Hi(this, "session", this.c),
      Hi(this, "hints", this.b);
  }
  (Lc.prototype.reset = function () {
    (this.b = null), this.a && (this.a.cancel(), (this.a = null));
  }),
    (Lc.prototype.h = function (t, n) {
      if (t) {
        this.reset(), (this.g = !0);
        var e = t.c,
          i = t.b,
          r = t.a && "auth/web-storage-unsupported" == t.a.code,
          o =
            t.a &&
            "auth/operation-not-supported-in-this-environment" == t.a.code;
        (this.i = !(!r && !o)),
          "unknown" != e || r || o
            ? t.a
              ? (Uc(this, !0, null, t.a), Sn())
              : n.Da(e, i)
              ? (function (t, n, e) {
                  e = e.Da(n.c, n.b);
                  var i = n.g,
                    r = n.f,
                    o = n.i,
                    a = n.S(),
                    s = !!n.c.match(/Redirect$/);
                  e(i, r, a, o)
                    .then(function (n) {
                      Uc(t, s, n, null);
                    })
                    .o(function (n) {
                      Uc(t, s, null, n);
                    });
                })(this, t, n)
              : Nn(new E("invalid-auth-event"))
            : (Uc(this, !1, null, null), Sn());
      } else Nn(new E("invalid-auth-event"));
    }),
    (Lc.prototype.pa = function () {
      var t = this;
      return new yn(function (n, e) {
        t.b
          ? t.b().then(n, e)
          : (t.f.push(n),
            t.c.push(e),
            (function (t) {
              var n = new E("timeout");
              t.a && t.a.cancel(),
                (t.a = Ie(Nc.get()).then(function () {
                  t.b || ((t.g = !0), Uc(t, !0, null, n));
                }));
            })(t));
      });
    }),
    (Vc.prototype.h = function (t, n) {
      if (t) {
        var e = t.c,
          i = t.b;
        t.a
          ? (n.la(t.c, null, t.a, t.b), Sn())
          : n.Da(e, i)
          ? (function (t, n) {
              var e = t.b,
                i = t.c;
              n.Da(i, e)(t.g, t.f, t.S(), t.i)
                .then(function (t) {
                  n.la(i, t, null, e);
                })
                .o(function (t) {
                  n.la(i, null, t, e);
                });
            })(t, n)
          : Nn(new E("invalid-auth-event"));
      } else Nn(new E("invalid-auth-event"));
    }),
    (qc.prototype.confirm = function (t) {
      return (t = Po(this.verificationId, t)), this.a(t);
    });
  var Bc = "mfaInfo",
    Wc = "mfaPendingCredential";
  function Xc(t, n, e, i) {
    E.call(this, "multi-factor-auth-required", i, n),
      (this.b = new Gc(t, n, e)),
      Hi(this, "resolver", this.b);
  }
  function Jc(t, n, e) {
    if (
      t &&
      p(t.serverResponse) &&
      "auth/multi-factor-auth-required" === t.code
    )
      try {
        return new Xc(n, t.serverResponse, e, t.message);
      } catch (t) {}
    return null;
  }
  function Yc() {}
  function zc(t) {
    Hi(this, "factorId", t.ea), (this.a = t);
  }
  function $c(t) {
    if ((zc.call(this, t), this.a.ea != Ro.PROVIDER_ID))
      throw new E(
        "argument-error",
        "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential"
      );
  }
  function Zc(t, n) {
    for (var e in (Wn.call(this, t), n)) this[e] = n[e];
  }
  function Qc(t, n) {
    (this.a = t),
      (this.b = []),
      (this.c = y(this.wc, this)),
      re(this.a, "userReloaded", this.c);
    var e = [];
    n &&
      n.multiFactor &&
      n.multiFactor.enrolledFactors &&
      q(n.multiFactor.enrolledFactors, function (t) {
        var n = null,
          i = {};
        if (t) {
          t.uid && (i[$i] = t.uid),
            t.displayName && (i[Yi] = t.displayName),
            t.enrollmentTime &&
              (i[zi] = new Date(t.enrollmentTime).toISOString()),
            t.phoneNumber && (i[Zi] = t.phoneNumber);
          try {
            n = new Qi(i);
          } catch (t) {}
          t = n;
        } else t = null;
        t && e.push(t);
      }),
      th(this, e);
  }
  function th(t, n) {
    (t.b = n), Hi(t, "enrolledFactors", n);
  }
  function nh(t, n, e) {
    if (
      ((this.h = t),
      (this.i = n),
      (this.g = e),
      (this.c = 3e4),
      (this.f = 96e4),
      (this.b = null),
      (this.a = this.c),
      this.f < this.c)
    )
      throw Error("Proactive refresh lower bound greater than upper bound!");
  }
  function eh(t) {
    (this.c = t), (this.b = this.a = null);
  }
  function ih(t) {
    return (t.b && 1e3 * t.b.c) || 0;
  }
  function rh(t, n) {
    var e = n.refreshToken;
    (t.b = jr(n[Ba] || "")), (t.a = e);
  }
  function oh(t, n) {
    return (function (t, n) {
      return new yn(function (e, i) {
        ("refresh_token" == n.grant_type && n.refresh_token) ||
        ("authorization_code" == n.grant_type && n.code)
          ? Za(
              t,
              t.u + "?key=" + encodeURIComponent(t.c),
              function (t) {
                t
                  ? t.error
                    ? i(zs(t))
                    : t.access_token && t.refresh_token
                    ? e(t)
                    : i(new E("internal-error"))
                  : i(new E("network-request-failed"));
              },
              "POST",
              We(n).toString(),
              t.g,
              t.m.get()
            )
          : i(new E("internal-error"));
      });
    })(t.c, n)
      .then(function (n) {
        return (
          (t.b = jr(n.access_token)),
          (t.a = n.refresh_token),
          { accessToken: t.b.toString(), refreshToken: t.a }
        );
      })
      .o(function (n) {
        throw ("auth/user-token-expired" == n.code && (t.a = null), n);
      });
  }
  function ah(t, n) {
    (this.a = t || null),
      (this.b = n || null),
      Gi(this, { lastSignInTime: ji(n || null), creationTime: ji(t || null) });
  }
  function sh(t, n, e, i, r, o) {
    Gi(this, {
      uid: t,
      displayName: i || null,
      photoURL: r || null,
      email: e || null,
      phoneNumber: o || null,
      providerId: n,
    });
  }
  function uh(n, e, i) {
    (this.N = []),
      (this.l = n.apiKey),
      (this.m = n.appName),
      (this.s = n.authDomain || null),
      (n = t.SDK_VERSION ? Ii(t.SDK_VERSION) : null),
      (this.a = new Ha(this.l, O(k), n)),
      (this.b = new eh(this.a)),
      vh(this, e[Ba]),
      rh(this.b, e),
      Hi(this, "refreshToken", this.b.a),
      bh(this, i || {}),
      me.call(this),
      (this.P = !1),
      this.s && ki() && (this.i = Dc(this.s, this.l, this.m)),
      (this.R = []),
      (this.h = null),
      (this.B = (function (t) {
        return new nh(
          function () {
            return t.I(!0);
          },
          function (t) {
            return !(!t || "auth/network-request-failed" != t.code);
          },
          function () {
            var n = ih(t.b) - I() - 3e5;
            return 0 < n ? n : 0;
          }
        );
      })(this)),
      (this.Z = y(this.Ma, this));
    var r = this;
    (this.oa = null),
      (this.za = function (t) {
        r.va(t.g);
      }),
      (this.aa = null),
      (this.W = []),
      (this.ya = function (t) {
        hh(r, t.c);
      }),
      (this.$ = null),
      (this.O = new Qc(this, i)),
      Hi(this, "multiFactor", this.O);
  }
  function ch(t, n) {
    t.aa && se(t.aa, "languageCodeChanged", t.za),
      (t.aa = n) && re(n, "languageCodeChanged", t.za);
  }
  function hh(n, e) {
    (n.W = e), $a(n.a, t.SDK_VERSION ? Ii(t.SDK_VERSION, n.W) : null);
  }
  function lh(t, n) {
    t.$ && se(t.$, "frameworkChanged", t.ya),
      (t.$ = n) && re(n, "frameworkChanged", t.ya);
  }
  function fh(n) {
    try {
      return t.app(n.m).auth();
    } catch (t) {
      throw new E(
        "internal-error",
        "No firebase.auth.Auth instance is available for the Firebase App '" +
          n.m +
          "'!"
      );
    }
  }
  function dh(t) {
    t.D ||
      t.B.b ||
      (t.B.start(), se(t, "tokenChanged", t.Z), re(t, "tokenChanged", t.Z));
  }
  function ph(t) {
    se(t, "tokenChanged", t.Z), t.B.stop();
  }
  function vh(t, n) {
    (t.xa = n), Hi(t, "_lat", n);
  }
  function mh(t) {
    for (var n = [], e = 0; e < t.R.length; e++) n.push(t.R[e](t));
    return On(n).then(function () {
      return t;
    });
  }
  function gh(t) {
    t.i && !t.P && ((t.P = !0), Ac(t.i, t));
  }
  function bh(t, n) {
    Gi(t, {
      uid: n.uid,
      displayName: n.displayName || null,
      photoURL: n.photoURL || null,
      email: n.email || null,
      emailVerified: n.emailVerified || !1,
      phoneNumber: n.phoneNumber || null,
      isAnonymous: n.isAnonymous || !1,
      tenantId: n.tenantId || null,
      metadata: new ah(n.createdAt, n.lastLoginAt),
      providerData: [],
    }),
      (t.a.b = t.tenantId);
  }
  function yh() {}
  function wh(t) {
    return Sn().then(function () {
      if (t.D) throw new E("app-deleted");
    });
  }
  function Ih(t) {
    return H(t.providerData, function (t) {
      return t.providerId;
    });
  }
  function Th(t, n) {
    n && (Eh(t, n.providerId), t.providerData.push(n));
  }
  function Eh(t, n) {
    X(t.providerData, function (t) {
      return t.providerId == n;
    });
  }
  function Ah(t, n, e) {
    ("uid" != n || e) && t.hasOwnProperty(n) && Hi(t, n, e);
  }
  function kh(t, n) {
    t != n &&
      (Gi(t, {
        uid: n.uid,
        displayName: n.displayName,
        photoURL: n.photoURL,
        email: n.email,
        emailVerified: n.emailVerified,
        phoneNumber: n.phoneNumber,
        isAnonymous: n.isAnonymous,
        tenantId: n.tenantId,
        providerData: [],
      }),
      n.metadata
        ? Hi(
            t,
            "metadata",
            (function (t) {
              return new ah(t.a, t.b);
            })(n.metadata)
          )
        : Hi(t, "metadata", new ah()),
      q(n.providerData, function (n) {
        Th(t, n);
      }),
      (function (t, n) {
        (t.b = n.b), (t.a = n.a);
      })(t.b, n.b),
      Hi(t, "refreshToken", t.b.a),
      th(t.O, n.O.b));
  }
  function Sh(t) {
    return t.I().then(function (n) {
      var e = t.isAnonymous;
      return (function (t, n) {
        return Js(t.a, ks, { idToken: n }).then(y(t.Ic, t));
      })(t, n).then(function () {
        return e || Ah(t, "isAnonymous", !1), n;
      });
    });
  }
  function Nh(t, n) {
    n[Ba] &&
      t.xa != n[Ba] &&
      (rh(t.b, n),
      t.dispatchEvent(new Zc("tokenChanged")),
      vh(t, n[Ba]),
      Ah(t, "refreshToken", t.b.a));
  }
  function _h(t, n) {
    return Sh(t).then(function () {
      if (B(Ih(t), n))
        return mh(t).then(function () {
          throw new E("provider-already-linked");
        });
    });
  }
  function Oh(t, n, e) {
    return Bi({
      user: t,
      credential: Co(n),
      additionalUserInfo: (n = Hr(n)),
      operationType: e,
    });
  }
  function Rh(t, n) {
    return (
      Nh(t, n),
      t.reload().then(function () {
        return t;
      })
    );
  }
  function Ph(n, e, i, r, o) {
    if (!ki()) return Nn(new E("operation-not-supported-in-this-environment"));
    if (n.h && !o) return Nn(n.h);
    var a = Kr(i.providerId),
      s = Ci(n.uid + ":::"),
      u = null;
    (!_i() || di()) &&
      n.s &&
      i.isOAuthProvider &&
      (u = cu(
        n.s,
        n.l,
        n.m,
        e,
        i,
        null,
        s,
        t.SDK_VERSION || null,
        null,
        null,
        n.tenantId
      ));
    var c = ui(u, a && a.ta, a && a.sa);
    return (
      (r = r()
        .then(function () {
          if ((Dh(n), !o)) return n.I().then(function () {});
        })
        .then(function () {
          return _c(n.i, c, e, i, s, !!u, n.tenantId);
        })
        .then(function () {
          return new yn(function (t, i) {
            n.la(e, null, new E("cancelled-popup-request"), n.g || null),
              (n.f = t),
              (n.w = i),
              (n.g = s),
              (n.c = Pc(n.i, n, e, c, s));
          });
        })
        .then(function (t) {
          return c && si(c), t ? Bi(t) : null;
        })
        .o(function (t) {
          throw (c && si(c), t);
        })),
      Lh(n, r, o)
    );
  }
  function Ch(t, n, e, i, r) {
    if (!ki()) return Nn(new E("operation-not-supported-in-this-environment"));
    if (t.h && !r) return Nn(t.h);
    var o = null,
      a = Ci(t.uid + ":::");
    return (
      (i = i()
        .then(function () {
          if ((Dh(t), !r)) return t.I().then(function () {});
        })
        .then(function () {
          return (t.fa = a), mh(t);
        })
        .then(function (n) {
          return t.ga && (n = (n = t.ga).b.set(jh, t.v(), n.a)), n;
        })
        .then(function () {
          return Rc(t.i, n, e, a, t.tenantId);
        })
        .o(function (n) {
          if (((o = n), t.ga)) return Uh(t.ga);
          throw o;
        })
        .then(function () {
          if (o) throw o;
        })),
      Lh(t, i, r)
    );
  }
  function Dh(t) {
    if (!t.i || !t.P) {
      if (t.i && !t.P) throw new E("internal-error");
      throw new E("auth-domain-config-required");
    }
  }
  function Lh(t, n, e) {
    var i = (function (t, n, e) {
      return t.h && !e
        ? (n.cancel(), Nn(t.h))
        : n.o(function (n) {
            throw (
              (!n ||
                ("auth/user-disabled" != n.code &&
                  "auth/user-token-expired" != n.code) ||
                (t.h || t.dispatchEvent(new Zc("userInvalidated")), (t.h = n)),
              n)
            );
          });
    })(t, n, e);
    return (
      t.N.push(i),
      i.ma(function () {
        W(t.N, i);
      }),
      i.o(function (n) {
        var e = null;
        throw (
          (n &&
            "auth/multi-factor-auth-required" === n.code &&
            (e = Jc(n.v(), fh(t), y(t.hc, t))),
          e || n)
        );
      })
    );
  }
  function Mh(t) {
    if (!t.apiKey) return null;
    var n = { apiKey: t.apiKey, authDomain: t.authDomain, appName: t.appName },
      e = {};
    if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
    (e[Ba] = t.stsTokenManager.accessToken),
      (e.refreshToken = t.stsTokenManager.refreshToken || null);
    var i = new uh(n, e, t);
    return (
      t.providerData &&
        q(t.providerData, function (t) {
          t && Th(i, Bi(t));
        }),
      t.redirectEventId && (i.fa = t.redirectEventId),
      i
    );
  }
  function xh(t) {
    (this.a = t), (this.b = Bu());
  }
  (Gc.prototype.Pc = function (t) {
    var n = this;
    return t.ob(this.a.b, this.c).then(function (t) {
      var e = ft(n.f);
      return delete e[Bc], delete e[Wc], pt(e, t), n.g(e);
    });
  }),
    T(Xc, E),
    (Yc.prototype.ob = function (t, n, e) {
      return n.type == to
        ? (function (t, n, e, i) {
            return e.Fa().then(function (e) {
              return (
                (e = { idToken: e }),
                void 0 !== i && (e.displayName = i),
                pt(e, { phoneVerificationInfo: Oo(t.a) }),
                Js(n, Es, e)
              );
            });
          })(this, t, n, e)
        : (function (t, n, e) {
            return e.Fa().then(function (e) {
              return (
                pt((e = { mfaPendingCredential: e }), {
                  phoneVerificationInfo: Oo(t.a),
                }),
                Js(n, As, e)
              );
            });
          })(this, t, n);
    }),
    T(zc, Yc),
    T($c, zc),
    T(Zc, Wn),
    ((n = Qc.prototype).wc = function (t) {
      th(
        this,
        (function (t) {
          var n = [];
          return (
            q(t.mfaInfo || [], function (t) {
              (t = Ji(t)) && n.push(t);
            }),
            n
          );
        })(t.ed)
      );
    }),
    (n.Ob = function () {
      return this.a.I().then(function (t) {
        return new Qr(t, null);
      });
    }),
    (n.dc = function (t, n) {
      var e = this,
        i = this.a.a;
      return this.Ob()
        .then(function (e) {
          return t.ob(i, e, n);
        })
        .then(function (t) {
          return Nh(e.a, t), e.a.reload();
        });
    }),
    (n.$c = function (t) {
      var n = this,
        e = "string" == typeof t ? t : t.uid,
        i = this.a.a;
      return this.a
        .I()
        .then(function (t) {
          return Js(i, Xs, { idToken: t, mfaEnrollmentId: e });
        })
        .then(function (t) {
          var i = K(n.b, function (t) {
            return t.uid != e;
          });
          return (
            th(n, i),
            Nh(n.a, t),
            n.a.reload().o(function (t) {
              if ("auth/user-token-expired" != t.code) throw t;
            })
          );
        });
    }),
    (n.v = function () {
      return {
        multiFactor: {
          enrolledFactors: H(this.b, function (t) {
            return t.v();
          }),
        },
      };
    }),
    (nh.prototype.start = function () {
      (this.a = this.c),
        (function t(n, e) {
          n.stop(),
            (n.b = Ie(
              (function (t, n) {
                return n
                  ? ((t.a = t.c), t.g())
                  : ((n = t.a), (t.a *= 2), t.a > t.f && (t.a = t.f), n);
              })(n, e)
            )
              .then(function () {
                return (function () {
                  var t = s.document,
                    n = null;
                  return xi() || !t
                    ? Sn()
                    : new yn(function (e) {
                        (n = function () {
                          xi() &&
                            (t.removeEventListener("visibilitychange", n, !1),
                            e());
                        }),
                          t.addEventListener("visibilitychange", n, !1);
                      }).o(function (e) {
                        throw (
                          (t.removeEventListener("visibilitychange", n, !1), e)
                        );
                      });
                })();
              })
              .then(function () {
                return n.h();
              })
              .then(function () {
                t(n, !0);
              })
              .o(function (e) {
                n.i(e) && t(n, !1);
              }));
        })(this, !0);
    }),
    (nh.prototype.stop = function () {
      this.b && (this.b.cancel(), (this.b = null));
    }),
    (eh.prototype.v = function () {
      return {
        apiKey: this.c.c,
        refreshToken: this.a,
        accessToken: this.b && this.b.toString(),
        expirationTime: ih(this),
      };
    }),
    (eh.prototype.getToken = function (t) {
      return (
        (t = !!t),
        this.b && !this.a
          ? Nn(new E("user-token-expired"))
          : t || !this.b || I() > ih(this) - 3e4
          ? this.a
            ? oh(this, { grant_type: "refresh_token", refresh_token: this.a })
            : Sn(null)
          : Sn({ accessToken: this.b.toString(), refreshToken: this.a })
      );
    }),
    (ah.prototype.v = function () {
      return { lastLoginAt: this.b, createdAt: this.a };
    }),
    T(uh, me),
    (uh.prototype.va = function (t) {
      (this.oa = t), za(this.a, t);
    }),
    (uh.prototype.ja = function () {
      return this.oa;
    }),
    (uh.prototype.Ea = function () {
      return Y(this.W);
    }),
    (uh.prototype.Ma = function () {
      this.B.b && (this.B.stop(), this.B.start());
    }),
    Hi(uh.prototype, "providerId", "firebase"),
    ((n = uh.prototype).reload = function () {
      var t = this;
      return Lh(
        this,
        wh(this).then(function () {
          return Sh(t)
            .then(function () {
              return mh(t);
            })
            .then(yh);
        })
      );
    }),
    (n.mc = function (t) {
      return this.I(t).then(function (t) {
        return new Hc(t);
      });
    }),
    (n.I = function (t) {
      var n = this;
      return Lh(
        this,
        wh(this)
          .then(function () {
            return n.b.getToken(t);
          })
          .then(function (t) {
            if (!t) throw new E("internal-error");
            return (
              t.accessToken != n.xa &&
                (vh(n, t.accessToken), n.dispatchEvent(new Zc("tokenChanged"))),
              Ah(n, "refreshToken", t.refreshToken),
              t.accessToken
            );
          })
      );
    }),
    (n.Ic = function (t) {
      if (!(t = t.users) || !t.length) throw new E("internal-error");
      bh(this, {
        uid: (t = t[0]).localId,
        displayName: t.displayName,
        photoURL: t.photoUrl,
        email: t.email,
        emailVerified: !!t.emailVerified,
        phoneNumber: t.phoneNumber,
        lastLoginAt: t.lastLoginAt,
        createdAt: t.createdAt,
        tenantId: t.tenantId,
      });
      for (
        var n = (function (t) {
            return (t = t.providerUserInfo) && t.length
              ? H(t, function (t) {
                  return new sh(
                    t.rawId,
                    t.providerId,
                    t.email,
                    t.displayName,
                    t.photoUrl,
                    t.phoneNumber
                  );
                })
              : [];
          })(t),
          e = 0;
        e < n.length;
        e++
      )
        Th(this, n[e]);
      Ah(
        this,
        "isAnonymous",
        !(
          (this.email && t.passwordHash) ||
          (this.providerData && this.providerData.length)
        )
      ),
        this.dispatchEvent(new Zc("userReloaded", { ed: t }));
    }),
    (n.Jc = function (t) {
      return (
        qi(
          "firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."
        ),
        this.pb(t)
      );
    }),
    (n.pb = function (t) {
      var n = this,
        e = null;
      return Lh(
        this,
        t
          .c(this.a, this.uid)
          .then(function (t) {
            return (
              Nh(n, t),
              (e = Oh(n, t, "reauthenticate")),
              (n.h = null),
              n.reload()
            );
          })
          .then(function () {
            return e;
          }),
        !0
      );
    }),
    (n.Ac = function (t) {
      return (
        qi(
          "firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."
        ),
        this.mb(t)
      );
    }),
    (n.mb = function (t) {
      var n = this,
        e = null;
      return Lh(
        this,
        _h(this, t.providerId)
          .then(function () {
            return n.I();
          })
          .then(function (e) {
            return t.b(n.a, e);
          })
          .then(function (t) {
            return (e = Oh(n, t, "link")), Rh(n, t);
          })
          .then(function () {
            return e;
          })
      );
    }),
    (n.Bc = function (t, n) {
      var e = this;
      return Lh(
        this,
        _h(this, "phone").then(function () {
          return Kc(fh(e), t, n, y(e.mb, e));
        })
      );
    }),
    (n.Kc = function (t, n) {
      var e = this;
      return Lh(
        this,
        Sn().then(function () {
          return Kc(fh(e), t, n, y(e.pb, e));
        }),
        !0
      );
    }),
    (n.xb = function (t) {
      var n = this;
      return Lh(
        this,
        this.I()
          .then(function (e) {
            return n.a.xb(e, t);
          })
          .then(function (t) {
            return Nh(n, t), n.reload();
          })
      );
    }),
    (n.cd = function (t) {
      var n = this;
      return Lh(
        this,
        this.I()
          .then(function (e) {
            return t.b(n.a, e);
          })
          .then(function (t) {
            return Nh(n, t), n.reload();
          })
      );
    }),
    (n.yb = function (t) {
      var n = this;
      return Lh(
        this,
        this.I()
          .then(function (e) {
            return n.a.yb(e, t);
          })
          .then(function (t) {
            return Nh(n, t), n.reload();
          })
      );
    }),
    (n.zb = function (t) {
      if (void 0 === t.displayName && void 0 === t.photoURL) return wh(this);
      var n = this;
      return Lh(
        this,
        this.I()
          .then(function (e) {
            return n.a.zb(e, {
              displayName: t.displayName,
              photoUrl: t.photoURL,
            });
          })
          .then(function (t) {
            return (
              Nh(n, t),
              Ah(n, "displayName", t.displayName || null),
              Ah(n, "photoURL", t.photoUrl || null),
              q(n.providerData, function (t) {
                "password" === t.providerId &&
                  (Hi(t, "displayName", n.displayName),
                  Hi(t, "photoURL", n.photoURL));
              }),
              mh(n)
            );
          })
          .then(yh)
      );
    }),
    (n.ad = function (t) {
      var n = this;
      return Lh(
        this,
        Sh(this).then(function (e) {
          return B(Ih(n), t)
            ? (function (t, n, e) {
                return Js(t, ws, { idToken: n, deleteProvider: e });
              })(n.a, e, [t]).then(function (t) {
                var e = {};
                return (
                  q(t.providerUserInfo || [], function (t) {
                    e[t.providerId] = !0;
                  }),
                  q(Ih(n), function (t) {
                    e[t] || Eh(n, t);
                  }),
                  e[Ro.PROVIDER_ID] || Hi(n, "phoneNumber", null),
                  mh(n)
                );
              })
            : mh(n).then(function () {
                throw new E("no-such-provider");
              });
        })
      );
    }),
    (n.delete = function () {
      var t = this;
      return Lh(
        this,
        this.I()
          .then(function (n) {
            return Js(t.a, ys, { idToken: n });
          })
          .then(function () {
            t.dispatchEvent(new Zc("userDeleted"));
          })
      ).then(function () {
        for (var n = 0; n < t.N.length; n++) t.N[n].cancel("app-deleted");
        ch(t, null),
          lh(t, null),
          (t.N = []),
          (t.D = !0),
          ph(t),
          Hi(t, "refreshToken", null),
          t.i && kc(t.i, t);
      });
    }),
    (n.Cb = function (t, n) {
      return !!(
        ("linkViaPopup" == t && (this.g || null) == n && this.f) ||
        ("reauthViaPopup" == t && (this.g || null) == n && this.f) ||
        ("linkViaRedirect" == t && (this.fa || null) == n) ||
        ("reauthViaRedirect" == t && (this.fa || null) == n)
      );
    }),
    (n.la = function (t, n, e, i) {
      ("linkViaPopup" != t && "reauthViaPopup" != t) ||
        i != (this.g || null) ||
        (e && this.w ? this.w(e) : n && !e && this.f && this.f(n),
        this.c && (this.c.cancel(), (this.c = null)),
        delete this.f,
        delete this.w);
    }),
    (n.Da = function (t, n) {
      return "linkViaPopup" == t && n == (this.g || null)
        ? y(this.Hb, this)
        : "reauthViaPopup" == t && n == (this.g || null)
        ? y(this.Ib, this)
        : "linkViaRedirect" == t && (this.fa || null) == n
        ? y(this.Hb, this)
        : "reauthViaRedirect" == t && (this.fa || null) == n
        ? y(this.Ib, this)
        : null;
    }),
    (n.Cc = function (t) {
      var n = this;
      return Ph(
        this,
        "linkViaPopup",
        t,
        function () {
          return _h(n, t.providerId).then(function () {
            return mh(n);
          });
        },
        !1
      );
    }),
    (n.Lc = function (t) {
      return Ph(
        this,
        "reauthViaPopup",
        t,
        function () {
          return Sn();
        },
        !0
      );
    }),
    (n.Dc = function (t) {
      var n = this;
      return Ch(
        this,
        "linkViaRedirect",
        t,
        function () {
          return _h(n, t.providerId);
        },
        !1
      );
    }),
    (n.Mc = function (t) {
      return Ch(
        this,
        "reauthViaRedirect",
        t,
        function () {
          return Sn();
        },
        !0
      );
    }),
    (n.Hb = function (t, n, e, i) {
      var r = this;
      this.c && (this.c.cancel(), (this.c = null));
      var o = null;
      return Lh(
        this,
        this.I()
          .then(function (e) {
            return fs(r.a, {
              requestUri: t,
              postBody: i,
              sessionId: n,
              idToken: e,
            });
          })
          .then(function (t) {
            return (o = Oh(r, t, "link")), Rh(r, t);
          })
          .then(function () {
            return o;
          })
      );
    }),
    (n.Ib = function (t, n, e, i) {
      var r = this;
      this.c && (this.c.cancel(), (this.c = null));
      var o = null;
      return Lh(
        this,
        Sn()
          .then(function () {
            return io(
              ds(r.a, {
                requestUri: t,
                sessionId: n,
                postBody: i,
                tenantId: e,
              }),
              r.uid
            );
          })
          .then(function (t) {
            return (
              (o = Oh(r, t, "reauthenticate")),
              Nh(r, t),
              (r.h = null),
              r.reload()
            );
          })
          .then(function () {
            return o;
          }),
        !0
      );
    }),
    (n.qb = function (t) {
      var n = this,
        e = null;
      return Lh(
        this,
        this.I()
          .then(function (n) {
            return (e = n), void 0 === t || lt(t) ? {} : Dr(new Er(t));
          })
          .then(function (t) {
            return n.a.qb(e, t);
          })
          .then(function (t) {
            if (n.email != t) return n.reload();
          })
          .then(function () {})
      );
    }),
    (n.Ab = function (t, n) {
      var e = this,
        i = null;
      return Lh(
        this,
        this.I()
          .then(function (t) {
            return (i = t), void 0 === n || lt(n) ? {} : Dr(new Er(n));
          })
          .then(function (n) {
            return e.a.Ab(i, t, n);
          })
          .then(function (t) {
            if (e.email != t) return e.reload();
          })
          .then(function () {})
      );
    }),
    (n.hc = function (t) {
      var n = null,
        e = this;
      return Lh(
        this,
        (t = io(Sn(t), e.uid)
          .then(function (t) {
            return (
              (n = Oh(e, t, "reauthenticate")),
              Nh(e, t),
              (e.h = null),
              e.reload()
            );
          })
          .then(function () {
            return n;
          })),
        !0
      );
    }),
    (n.toJSON = function () {
      return this.v();
    }),
    (n.v = function () {
      var t = {
        uid: this.uid,
        displayName: this.displayName,
        photoURL: this.photoURL,
        email: this.email,
        emailVerified: this.emailVerified,
        phoneNumber: this.phoneNumber,
        isAnonymous: this.isAnonymous,
        tenantId: this.tenantId,
        providerData: [],
        apiKey: this.l,
        appName: this.m,
        authDomain: this.s,
        stsTokenManager: this.b.v(),
        redirectEventId: this.fa || null,
      };
      return (
        this.metadata && pt(t, this.metadata.v()),
        q(this.providerData, function (n) {
          t.providerData.push(
            (function (t) {
              var n,
                e = {};
              for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              return e;
            })(n)
          );
        }),
        pt(t, this.O.v()),
        t
      );
    });
  var jh = { name: "redirectUser", F: "session" };
  function Uh(t) {
    return Ju(t.b, jh, t.a);
  }
  function Vh(t) {
    (this.a = t),
      (this.b = Bu()),
      (this.c = null),
      (this.f = (function (t) {
        var n = Kh("local"),
          e = Kh("session"),
          i = Kh("none");
        return (function (t, n, e) {
          var i = Xu(n, e),
            r = Wu(t, n.F);
          return t.get(n, e).then(function (o) {
            var a = null;
            try {
              a = Pi(s.localStorage.getItem(i));
            } catch (t) {}
            if (a && !o) return s.localStorage.removeItem(i), t.set(n, a, e);
            a && o && "localStorage" != r.type && s.localStorage.removeItem(i);
          });
        })(t.b, n, t.a)
          .then(function () {
            return t.b.get(e, t.a);
          })
          .then(function (r) {
            return r
              ? e
              : t.b.get(i, t.a).then(function (e) {
                  return e
                    ? i
                    : t.b.get(n, t.a).then(function (e) {
                        return e
                          ? n
                          : t.b.get(qh, t.a).then(function (t) {
                              return t ? Kh(t) : n;
                            });
                      });
                });
          })
          .then(function (n) {
            return (t.c = n), Fh(t, n.F);
          })
          .o(function () {
            t.c || (t.c = n);
          });
      })(this)),
      this.b.addListener(Kh("local"), this.a, y(this.g, this));
  }
  function Fh(t, n) {
    var e,
      i = [];
    for (e in Hu) Hu[e] !== n && i.push(Ju(t.b, Kh(Hu[e]), t.a));
    return (
      i.push(Ju(t.b, qh, t.a)),
      (function (t) {
        return new yn(function (n, e) {
          var i = t.length,
            r = [];
          if (i)
            for (
              var o = function (t, e) {
                  i--, (r[t] = e), 0 == i && n(r);
                },
                a = function (t) {
                  e(t);
                },
                s = 0;
              s < t.length;
              s++
            )
              _n(t[s], w(o, s), a);
          else n(r);
        });
      })(i)
    );
  }
  Vh.prototype.g = function () {
    var t = this,
      n = Kh("local");
    Wh(this, function () {
      return Sn()
        .then(function () {
          return t.c && "local" != t.c.F ? t.b.get(n, t.a) : null;
        })
        .then(function (e) {
          if (e)
            return Fh(t, "local").then(function () {
              t.c = n;
            });
        });
    });
  };
  var qh = { name: "persistence", F: "session" };
  function Kh(t) {
    return { name: "authUser", F: t };
  }
  function Hh(t, n) {
    return Wh(t, function () {
      return t.b.set(t.c, n.v(), t.a);
    });
  }
  function Gh(t) {
    return Wh(t, function () {
      return Ju(t.b, t.c, t.a);
    });
  }
  function Bh(t, n) {
    return Wh(t, function () {
      return t.b.get(t.c, t.a).then(function (t) {
        return t && n && (t.authDomain = n), Mh(t || {});
      });
    });
  }
  function Wh(t, n) {
    return (t.f = t.f.then(n, n)), t.f;
  }
  function Xh(n) {
    if (
      ((this.l = !1),
      Hi(this, "settings", new Fc()),
      Hi(this, "app", n),
      !nl(this).options || !nl(this).options.apiKey)
    )
      throw new E("invalid-api-key");
    (n = t.SDK_VERSION ? Ii(t.SDK_VERSION) : null),
      (this.b = new Ha(nl(this).options && nl(this).options.apiKey, O(k), n)),
      (this.P = []),
      (this.m = []),
      (this.O = []),
      (this.$b = t.INTERNAL.createSubscribe(y(this.xc, this))),
      (this.W = void 0),
      (this.ac = t.INTERNAL.createSubscribe(y(this.yc, this))),
      Qh(this, null),
      (this.i = new Vh(nl(this).options.apiKey + ":" + nl(this).name)),
      (this.B = new xh(nl(this).options.apiKey + ":" + nl(this).name)),
      (this.Z = ol(
        this,
        (function (t) {
          var n = nl(t).options.authDomain,
            e = (function (t) {
              var n = (function (t, n) {
                return t.b.get(jh, t.a).then(function (t) {
                  return t && n && (t.authDomain = n), Mh(t || {});
                });
              })(t.B, nl(t).options.authDomain).then(function (n) {
                return (t.D = n) && (n.ga = t.B), Uh(t.B);
              });
              return ol(t, n);
            })(t)
              .then(function () {
                return Bh(t.i, n);
              })
              .then(function (n) {
                return n
                  ? ((n.ga = t.B),
                    t.D && (t.D.fa || null) == (n.fa || null)
                      ? n
                      : n
                          .reload()
                          .then(function () {
                            return Hh(t.i, n).then(function () {
                              return n;
                            });
                          })
                          .o(function (e) {
                            return "auth/network-request-failed" == e.code
                              ? n
                              : Gh(t.i);
                          }))
                  : null;
              })
              .then(function (n) {
                Qh(t, n || null);
              });
          return ol(t, e);
        })(this)
      )),
      (this.h = ol(
        this,
        (function (t) {
          return t.Z.then(function () {
            return $h(t);
          })
            .o(function () {})
            .then(function () {
              if (!t.l) return t.oa();
            })
            .o(function () {})
            .then(function () {
              if (!t.l) {
                t.aa = !0;
                var n = t.i;
                n.b.addListener(Kh("local"), n.a, t.oa);
              }
            });
        })(this)
      )),
      (this.aa = !1),
      (this.oa = y(this.Xc, this)),
      (this.Ma = y(this.ca, this)),
      (this.xa = y(this.jc, this)),
      (this.ya = y(this.uc, this)),
      (this.za = y(this.vc, this)),
      (this.a = null),
      (function (t) {
        var n = nl(t).options.authDomain,
          e = nl(t).options.apiKey;
        n &&
          ki() &&
          (t.Zb = t.Z.then(function () {
            if (!t.l) {
              if (
                ((t.a = Dc(n, e, nl(t).name)),
                Ac(t.a, t),
                el(t) && gh(el(t)),
                t.D)
              ) {
                gh(t.D);
                var i = t.D;
                i.va(t.ja()),
                  ch(i, t),
                  hh((i = t.D), t.N),
                  lh(i, t),
                  (t.D = null);
              }
              return t.a;
            }
          }));
      })(this),
      (this.INTERNAL = {}),
      (this.INTERNAL.delete = y(this.delete, this)),
      (this.INTERNAL.logFramework = y(this.Ec, this)),
      (this.s = 0),
      me.call(this),
      (function (t) {
        Object.defineProperty(t, "lc", {
          get: function () {
            return this.ja();
          },
          set: function (t) {
            this.va(t);
          },
          enumerable: !1,
        }),
          (t.$ = null),
          Object.defineProperty(t, "ti", {
            get: function () {
              return this.S();
            },
            set: function (t) {
              this.ub(t);
            },
            enumerable: !1,
          }),
          (t.R = null);
      })(this),
      (this.N = []);
  }
  function Jh(t) {
    Wn.call(this, "languageCodeChanged"), (this.g = t);
  }
  function Yh(t) {
    Wn.call(this, "frameworkChanged"), (this.c = t);
  }
  function zh(t) {
    return t.Zb || Nn(new E("auth-domain-config-required"));
  }
  function $h(t) {
    if (!ki()) return Nn(new E("operation-not-supported-in-this-environment"));
    var n = zh(t)
      .then(function () {
        return t.a.pa();
      })
      .then(function (t) {
        return t ? Bi(t) : null;
      });
    return ol(t, n);
  }
  function Zh(t, n) {
    var e = {};
    return (
      (e.apiKey = nl(t).options.apiKey),
      (e.authDomain = nl(t).options.authDomain),
      (e.appName = nl(t).name),
      t.Z.then(function () {
        return (function (t, n, e, i) {
          var r = new uh(t, n);
          return (
            e && (r.ga = e),
            i && hh(r, i),
            r.reload().then(function () {
              return r;
            })
          );
        })(e, n, t.B, t.Ea());
      })
        .then(function (n) {
          return el(t) && n.uid == el(t).uid
            ? (kh(el(t), n), t.ca(n))
            : (Qh(t, n), gh(n), t.ca(n));
        })
        .then(function () {
          rl(t);
        })
    );
  }
  function Qh(t, n) {
    el(t) &&
      ((function (t, n) {
        X(t.R, function (t) {
          return t == n;
        });
      })(el(t), t.Ma),
      se(el(t), "tokenChanged", t.xa),
      se(el(t), "userDeleted", t.ya),
      se(el(t), "userInvalidated", t.za),
      ph(el(t))),
      n &&
        (n.R.push(t.Ma),
        re(n, "tokenChanged", t.xa),
        re(n, "userDeleted", t.ya),
        re(n, "userInvalidated", t.za),
        0 < t.s && dh(n)),
      Hi(t, "currentUser", n),
      n && (n.va(t.ja()), ch(n, t), hh(n, t.N), lh(n, t));
  }
  function tl(t, n) {
    var e = null,
      i = null;
    return ol(
      t,
      n
        .then(
          function (n) {
            return (e = Co(n)), (i = Hr(n)), Zh(t, n);
          },
          function (n) {
            var e = null;
            throw (
              (n &&
                "auth/multi-factor-auth-required" === n.code &&
                (e = Jc(n.v(), t, y(t.ic, t))),
              e || n)
            );
          }
        )
        .then(function () {
          return Bi({
            user: el(t),
            credential: e,
            additionalUserInfo: i,
            operationType: "signIn",
          });
        })
    );
  }
  function nl(t) {
    return t.app;
  }
  function el(t) {
    return t.currentUser;
  }
  function il(t) {
    return (el(t) && el(t)._lat) || null;
  }
  function rl(t) {
    if (t.aa) {
      for (var n = 0; n < t.m.length; n++) t.m[n] && t.m[n](il(t));
      if (t.W !== t.getUid() && t.O.length)
        for (t.W = t.getUid(), n = 0; n < t.O.length; n++)
          t.O[n] && t.O[n](il(t));
    }
  }
  function ol(t, n) {
    return (
      t.P.push(n),
      n.ma(function () {
        W(t.P, n);
      }),
      n
    );
  }
  function al() {}
  function sl() {
    (this.a = {}), (this.b = 1e12);
  }
  (Vh.prototype.tb = function (t) {
    var n = null,
      e = this;
    return (
      (function (t) {
        var n = new E("invalid-persistence-type"),
          e = new E("unsupported-persistence-type");
        t: {
          for (i in Hu)
            if (Hu[i] == t) {
              var i = !0;
              break t;
            }
          i = !1;
        }
        if (!i || "string" != typeof t) throw n;
        switch (vi()) {
          case "ReactNative":
            if ("session" === t) throw e;
            break;
          case "Node":
            if ("none" !== t) throw e;
            break;
          default:
            if (!Ai() && "none" !== t) throw e;
        }
      })(t),
      Wh(this, function () {
        return t != e.c.F
          ? e.b
              .get(e.c, e.a)
              .then(function (i) {
                return (n = i), Fh(e, t);
              })
              .then(function () {
                if (((e.c = Kh(t)), n)) return e.b.set(e.c, n, e.a);
              })
          : Sn();
      })
    );
  }),
    T(Xh, me),
    T(Jh, Wn),
    T(Yh, Wn),
    ((n = Xh.prototype).tb = function (t) {
      return ol(this, (t = this.i.tb(t)));
    }),
    (n.va = function (t) {
      this.$ === t ||
        this.l ||
        ((this.$ = t),
        za(this.b, this.$),
        this.dispatchEvent(new Jh(this.ja())));
    }),
    (n.ja = function () {
      return this.$;
    }),
    (n.dd = function () {
      var t = s.navigator;
      this.va(
        (t &&
          ((t.languages && t.languages[0]) || t.language || t.userLanguage)) ||
          null
      );
    }),
    (n.Ec = function (n) {
      this.N.push(n),
        $a(this.b, t.SDK_VERSION ? Ii(t.SDK_VERSION, this.N) : null),
        this.dispatchEvent(new Yh(this.N));
    }),
    (n.Ea = function () {
      return Y(this.N);
    }),
    (n.ub = function (t) {
      this.R === t || this.l || ((this.R = t), (this.b.b = this.R));
    }),
    (n.S = function () {
      return this.R;
    }),
    (n.toJSON = function () {
      return {
        apiKey: nl(this).options.apiKey,
        authDomain: nl(this).options.authDomain,
        appName: nl(this).name,
        currentUser: el(this) && el(this).v(),
      };
    }),
    (n.Cb = function (t, n) {
      switch (t) {
        case "unknown":
        case "signInViaRedirect":
          return !0;
        case "signInViaPopup":
          return this.g == n && !!this.f;
        default:
          return !1;
      }
    }),
    (n.la = function (t, n, e, i) {
      "signInViaPopup" == t &&
        this.g == i &&
        (e && this.w ? this.w(e) : n && !e && this.f && this.f(n),
        this.c && (this.c.cancel(), (this.c = null)),
        delete this.f,
        delete this.w);
    }),
    (n.Da = function (t, n) {
      return "signInViaRedirect" == t ||
        ("signInViaPopup" == t && this.g == n && this.f)
        ? y(this.gc, this)
        : null;
    }),
    (n.gc = function (t, n, e, i) {
      var r = this,
        o = { requestUri: t, postBody: i, sessionId: n, tenantId: e };
      return (
        this.c && (this.c.cancel(), (this.c = null)),
        r.Z.then(function () {
          return tl(r, ls(r.b, o));
        })
      );
    }),
    (n.Vc = function (n) {
      if (!ki())
        return Nn(new E("operation-not-supported-in-this-environment"));
      var e = this,
        i = Kr(n.providerId),
        r = Ci(),
        o = null;
      (!_i() || di()) &&
        nl(this).options.authDomain &&
        n.isOAuthProvider &&
        (o = cu(
          nl(this).options.authDomain,
          nl(this).options.apiKey,
          nl(this).name,
          "signInViaPopup",
          n,
          null,
          r,
          t.SDK_VERSION || null,
          null,
          null,
          this.S()
        ));
      var a = ui(o, i && i.ta, i && i.sa);
      return ol(
        this,
        (i = zh(this)
          .then(function (t) {
            return _c(t, a, "signInViaPopup", n, r, !!o, e.S());
          })
          .then(function () {
            return new yn(function (t, n) {
              e.la(
                "signInViaPopup",
                null,
                new E("cancelled-popup-request"),
                e.g
              ),
                (e.f = t),
                (e.w = n),
                (e.g = r),
                (e.c = Pc(e.a, e, "signInViaPopup", a, r));
            });
          })
          .then(function (t) {
            return a && si(a), t ? Bi(t) : null;
          })
          .o(function (t) {
            throw (a && si(a), t);
          }))
      );
    }),
    (n.Wc = function (t) {
      if (!ki())
        return Nn(new E("operation-not-supported-in-this-environment"));
      var n = this;
      return ol(
        this,
        zh(this)
          .then(function () {
            return (function (t) {
              return Wh(t, function () {
                return t.b.set(qh, t.c.F, t.a);
              });
            })(n.i);
          })
          .then(function () {
            return Rc(n.a, "signInViaRedirect", t, void 0, n.S());
          })
      );
    }),
    (n.pa = function () {
      var t = this;
      return $h(this)
        .then(function (n) {
          return t.a && xc(t.a.b), n;
        })
        .o(function (n) {
          throw (t.a && xc(t.a.b), n);
        });
    }),
    (n.bd = function (t) {
      if (!t) return Nn(new E("null-user"));
      if (this.R != t.tenantId) return Nn(new E("tenant-id-mismatch"));
      var n = this,
        e = {};
      (e.apiKey = nl(this).options.apiKey),
        (e.authDomain = nl(this).options.authDomain),
        (e.appName = nl(this).name);
      var i = (function (t, n, e, i) {
        var r = t.b,
          o = {};
        return (
          (o[Ba] = r.b && r.b.toString()),
          (o.refreshToken = r.a),
          (n = new uh(n || { apiKey: t.l, authDomain: t.s, appName: t.m }, o)),
          e && (n.ga = e),
          i && hh(n, i),
          kh(n, t),
          n
        );
      })(t, e, n.B, n.Ea());
      return ol(
        this,
        this.h
          .then(function () {
            if (nl(n).options.apiKey != t.l) return i.reload();
          })
          .then(function () {
            return el(n) && t.uid == el(n).uid
              ? (kh(el(n), t), n.ca(t))
              : (Qh(n, i), gh(i), n.ca(i));
          })
          .then(function () {
            rl(n);
          })
      );
    }),
    (n.wb = function () {
      var t = this;
      return ol(
        this,
        this.h.then(function () {
          return (
            t.a && xc(t.a.b),
            el(t)
              ? (Qh(t, null),
                Gh(t.i).then(function () {
                  rl(t);
                }))
              : Sn()
          );
        })
      );
    }),
    (n.Xc = function () {
      var t = this;
      return Bh(this.i, nl(this).options.authDomain).then(function (n) {
        if (!t.l) {
          var e;
          if ((e = el(t) && n)) {
            e = el(t).uid;
            var i = n.uid;
            e = null != e && "" !== e && null != i && "" !== i && e == i;
          }
          if (e) return kh(el(t), n), el(t).I();
          (el(t) || n) &&
            (Qh(t, n), n && (gh(n), (n.ga = t.B)), t.a && Ac(t.a, t), rl(t));
        }
      });
    }),
    (n.ca = function (t) {
      return Hh(this.i, t);
    }),
    (n.jc = function () {
      rl(this), this.ca(el(this));
    }),
    (n.uc = function () {
      this.wb();
    }),
    (n.vc = function () {
      this.wb();
    }),
    (n.ic = function (t) {
      var n = this;
      return this.h.then(function () {
        return tl(n, Sn(t));
      });
    }),
    (n.xc = function (t) {
      var n = this;
      this.addAuthTokenListener(function () {
        t.next(el(n));
      });
    }),
    (n.yc = function (t) {
      var n = this;
      !(function (t, n) {
        t.O.push(n),
          ol(
            t,
            t.h.then(function () {
              !t.l &&
                B(t.O, n) &&
                t.W !== t.getUid() &&
                ((t.W = t.getUid()), n(il(t)));
            })
          );
      })(this, function () {
        t.next(el(n));
      });
    }),
    (n.Gc = function (t, n, e) {
      var i = this;
      return (
        this.aa &&
          Promise.resolve().then(function () {
            d(t) ? t(el(i)) : d(t.next) && t.next(el(i));
          }),
        this.$b(t, n, e)
      );
    }),
    (n.Fc = function (t, n, e) {
      var i = this;
      return (
        this.aa &&
          Promise.resolve().then(function () {
            (i.W = i.getUid()), d(t) ? t(el(i)) : d(t.next) && t.next(el(i));
          }),
        this.ac(t, n, e)
      );
    }),
    (n.kc = function (t) {
      var n = this;
      return ol(
        this,
        this.h.then(function () {
          return el(n)
            ? el(n)
                .I(t)
                .then(function (t) {
                  return { accessToken: t };
                })
            : null;
        })
      );
    }),
    (n.Rc = function (t) {
      var n = this;
      return this.h
        .then(function () {
          return tl(n, Js(n.b, Ks, { token: t }));
        })
        .then(function (t) {
          var e = t.user;
          return Ah(e, "isAnonymous", !1), n.ca(e), t;
        });
    }),
    (n.Sc = function (t, n) {
      var e = this;
      return this.h.then(function () {
        return tl(e, Js(e.b, Hs, { email: t, password: n }));
      });
    }),
    (n.cc = function (t, n) {
      var e = this;
      return this.h.then(function () {
        return tl(e, Js(e.b, gs, { email: t, password: n }));
      });
    }),
    (n.Ya = function (t) {
      var n = this;
      return this.h.then(function () {
        return tl(n, t.ia(n.b));
      });
    }),
    (n.Qc = function (t) {
      return (
        qi(
          "firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."
        ),
        this.Ya(t)
      );
    }),
    (n.vb = function () {
      var t = this;
      return this.h.then(function () {
        var n = el(t);
        if (n && n.isAnonymous) {
          var e = Bi({ providerId: null, isNewUser: !1 });
          return Bi({
            user: n,
            credential: null,
            additionalUserInfo: e,
            operationType: "signIn",
          });
        }
        return tl(t, t.b.vb()).then(function (n) {
          var e = n.user;
          return Ah(e, "isAnonymous", !0), t.ca(e), n;
        });
      });
    }),
    (n.getUid = function () {
      return (el(this) && el(this).uid) || null;
    }),
    (n.bc = function (t) {
      this.addAuthTokenListener(t),
        this.s++,
        0 < this.s && el(this) && dh(el(this));
    }),
    (n.Nc = function (t) {
      var n = this;
      q(this.m, function (e) {
        e == t && n.s--;
      }),
        0 > this.s && (this.s = 0),
        0 == this.s && el(this) && ph(el(this)),
        this.removeAuthTokenListener(t);
    }),
    (n.addAuthTokenListener = function (t) {
      var n = this;
      this.m.push(t),
        ol(
          this,
          this.h.then(function () {
            n.l || (B(n.m, t) && t(il(n)));
          })
        );
    }),
    (n.removeAuthTokenListener = function (t) {
      X(this.m, function (n) {
        return n == t;
      });
    }),
    (n.delete = function () {
      this.l = !0;
      for (var t = 0; t < this.P.length; t++) this.P[t].cancel("app-deleted");
      return (
        (this.P = []),
        this.i && (t = this.i).b.removeListener(Kh("local"), t.a, this.oa),
        this.a && (kc(this.a, this), xc(this.a.b)),
        Promise.resolve()
      );
    }),
    (n.fc = function (t) {
      return ol(
        this,
        (function (t, n) {
          return Js(t, bs, {
            identifier: n,
            continueUri: Si() ? ri() : "http://localhost",
          }).then(function (t) {
            return t.signinMethods || [];
          });
        })(this.b, t)
      );
    }),
    (n.zc = function (t) {
      return !!So(t);
    }),
    (n.sb = function (t, n) {
      var e = this;
      return ol(
        this,
        Sn()
          .then(function () {
            var t = new Er(n);
            if (!t.c)
              throw new E(
                "argument-error",
                Sr + " must be true when sending sign in link to email"
              );
            return Dr(t);
          })
          .then(function (n) {
            return e.b.sb(t, n);
          })
          .then(function () {})
      );
    }),
    (n.fd = function (t) {
      return this.Pa(t).then(function (t) {
        return t.data.email;
      });
    }),
    (n.jb = function (t, n) {
      return ol(
        this,
        this.b.jb(t, n).then(function () {})
      );
    }),
    (n.Pa = function (t) {
      return ol(
        this,
        this.b.Pa(t).then(function (t) {
          return new tr(t);
        })
      );
    }),
    (n.fb = function (t) {
      return ol(
        this,
        this.b.fb(t).then(function () {})
      );
    }),
    (n.rb = function (t, n) {
      var e = this;
      return ol(
        this,
        Sn()
          .then(function () {
            return void 0 === n || lt(n) ? {} : Dr(new Er(n));
          })
          .then(function (n) {
            return e.b.rb(t, n);
          })
          .then(function () {})
      );
    }),
    (n.Uc = function (t, n) {
      return ol(this, Kc(this, t, n, y(this.Ya, this)));
    }),
    (n.Tc = function (t, n) {
      var e = this;
      return ol(
        this,
        Sn().then(function () {
          var i = n || ri(),
            r = ko(t, i);
          if (!(i = So(i)))
            throw new E("argument-error", "Invalid email link!");
          if (i.tenantId !== e.S()) throw new E("tenant-id-mismatch");
          return e.Ya(r);
        })
      );
    }),
    (al.prototype.render = function () {}),
    (al.prototype.reset = function () {}),
    (al.prototype.getResponse = function () {}),
    (al.prototype.execute = function () {});
  var ul = null;
  function cl(t, n) {
    return ((n = hl(n)) && t.a[n]) || null;
  }
  function hl(t) {
    return (t = void 0 === t ? 1e12 : t) ? t.toString() : null;
  }
  function ll(t, n) {
    (this.g = !1),
      (this.c = n),
      (this.a = this.b = null),
      (this.h = "invisible" !== this.c.size),
      (this.f = on(t));
    var e = this;
    (this.i = function () {
      e.execute();
    }),
      this.h ? this.execute() : re(this.f, "click", this.i);
  }
  function fl(t) {
    if (t.g) throw Error("reCAPTCHA mock was already deleted!");
  }
  function dl() {}
  function pl() {}
  (sl.prototype.render = function (t, n) {
    return (this.a[this.b.toString()] = new ll(t, n)), this.b++;
  }),
    (sl.prototype.reset = function (t) {
      var n = cl(this, t);
      (t = hl(t)), n && t && (n.delete(), delete this.a[t]);
    }),
    (sl.prototype.getResponse = function (t) {
      return (t = cl(this, t)) ? t.getResponse() : null;
    }),
    (sl.prototype.execute = function (t) {
      (t = cl(this, t)) && t.execute();
    }),
    (ll.prototype.getResponse = function () {
      return fl(this), this.b;
    }),
    (ll.prototype.execute = function () {
      fl(this);
      var t = this;
      this.a ||
        (this.a = setTimeout(function () {
          t.b = (function () {
            for (var t = 50, n = []; 0 < t; )
              n.push(
                "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                  Math.floor(62 * Math.random())
                )
              ),
                t--;
            return n.join("");
          })();
          var n = t.c.callback,
            e = t.c["expired-callback"];
          if (n)
            try {
              n(t.b);
            } catch (t) {}
          t.a = setTimeout(function () {
            if (((t.a = null), (t.b = null), e))
              try {
                e();
              } catch (t) {}
            t.h && t.execute();
          }, 6e4);
        }, 500));
    }),
    (ll.prototype.delete = function () {
      fl(this),
        (this.g = !0),
        clearTimeout(this.a),
        (this.a = null),
        se(this.f, "click", this.i);
    }),
    Hi(dl, "FACTOR_ID", "phone"),
    (pl.prototype.g = function () {
      return ul || (ul = new sl()), Sn(ul);
    }),
    (pl.prototype.c = function () {});
  var vl = null;
  function ml() {
    (this.b = s.grecaptcha ? 1 / 0 : 0),
      (this.f = null),
      (this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString());
  }
  var gl = new mt(
      yt,
      "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"
    ),
    bl = new Mi(3e4, 6e4);
  (ml.prototype.g = function (t) {
    var n = this;
    return new yn(function (e, i) {
      var r = setTimeout(function () {
        i(new E("network-request-failed"));
      }, bl.get());
      !s.grecaptcha || (t !== n.f && !n.b)
        ? ((s[n.a] = function () {
            if (s.grecaptcha) {
              n.f = t;
              var o = s.grecaptcha.render;
              (s.grecaptcha.render = function (t, e) {
                return (t = o(t, e)), n.b++, t;
              }),
                clearTimeout(r),
                e(s.grecaptcha);
            } else clearTimeout(r), i(new E("internal-error"));
            delete s[n.a];
          }),
          Sn(xa(Et(gl, { onload: n.a, hl: t || "" }))).o(function () {
            clearTimeout(r),
              i(
                new E(
                  "internal-error",
                  "Unable to load external reCAPTCHA dependencies!"
                )
              );
          }))
        : (clearTimeout(r), e(s.grecaptcha));
    });
  }),
    (ml.prototype.c = function () {
      this.b--;
    });
  var yl = null;
  function wl(t, n, e, i, r, o, a) {
    if (
      (Hi(this, "type", "recaptcha"),
      (this.c = this.f = null),
      (this.D = !1),
      (this.u = n),
      (this.g = null),
      a ? (vl || (vl = new pl()), (a = vl)) : (yl || (yl = new ml()), (a = yl)),
      (this.m = a),
      (this.a = e || { theme: "light", type: "image" }),
      (this.h = []),
      this.a[El])
    )
      throw new E(
        "argument-error",
        "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project."
      );
    if (((this.i = "invisible" === this.a[Al]), !s.document))
      throw new E(
        "operation-not-supported-in-this-environment",
        "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support."
      );
    if (!on(n) || (!this.i && on(n).hasChildNodes()))
      throw new E(
        "argument-error",
        "reCAPTCHA container is either not found or already contains inner elements!"
      );
    (this.s = new Ha(t, o || null, r || null)),
      (this.w =
        i ||
        function () {
          return null;
        });
    var u = this;
    this.l = [];
    var c = this.a[Il];
    this.a[Il] = function (t) {
      if ((kl(u, t), "function" == typeof c)) c(t);
      else if ("string" == typeof c) {
        var n = Ei(c, s);
        "function" == typeof n && n(t);
      }
    };
    var h = this.a[Tl];
    this.a[Tl] = function () {
      if ((kl(u, null), "function" == typeof h)) h();
      else if ("string" == typeof h) {
        var t = Ei(h, s);
        "function" == typeof t && t();
      }
    };
  }
  var Il = "callback",
    Tl = "expired-callback",
    El = "sitekey",
    Al = "size";
  function kl(t, n) {
    for (var e = 0; e < t.l.length; e++)
      try {
        t.l[e](n);
      } catch (t) {}
  }
  function Sl(t, n) {
    return (
      t.h.push(n),
      n.ma(function () {
        W(t.h, n);
      }),
      n
    );
  }
  function Nl(t) {
    if (t.D)
      throw new E(
        "internal-error",
        "RecaptchaVerifier instance has been destroyed."
      );
  }
  function _l(n, e, i) {
    var r = !1;
    try {
      this.b = i || t.app();
    } catch (t) {
      throw new E(
        "argument-error",
        "No firebase.app.App instance is currently initialized."
      );
    }
    if (!this.b.options || !this.b.options.apiKey)
      throw new E("invalid-api-key");
    i = this.b.options.apiKey;
    var o = this,
      a = null;
    try {
      a = this.b.auth().Ea();
    } catch (t) {}
    try {
      r = this.b.auth().settings.appVerificationDisabledForTesting;
    } catch (t) {}
    (a = t.SDK_VERSION ? Ii(t.SDK_VERSION, a) : null),
      wl.call(
        this,
        i,
        n,
        e,
        function () {
          try {
            var t = o.b.auth().ja();
          } catch (n) {
            t = null;
          }
          return t;
        },
        a,
        O(k),
        r
      );
  }
  function Ol(t, n, e, i) {
    t: {
      e = Array.prototype.slice.call(e);
      for (var r = 0, o = !1, a = 0; a < n.length; a++)
        if (n[a].optional) o = !0;
        else {
          if (o)
            throw new E(
              "internal-error",
              "Argument validator encountered a required argument after an optional argument."
            );
          r++;
        }
      if (((o = n.length), e.length < r || o < e.length))
        i =
          "Expected " +
          (r == o
            ? 1 == r
              ? "1 argument"
              : r + " arguments"
            : r + "-" + o + " arguments") +
          " but got " +
          e.length +
          ".";
      else {
        for (r = 0; r < e.length; r++)
          if (((o = n[r].optional && void 0 === e[r]), !n[r].K(e[r]) && !o)) {
            if (((n = n[r]), 0 > r || r >= Rl.length))
              throw new E(
                "internal-error",
                "Argument validator received an unsupported number of arguments."
              );
            (e = Rl[r]),
              (i =
                (i ? "" : e + " argument ") +
                (n.name ? '"' + n.name + '" ' : "") +
                "must be " +
                n.J +
                ".");
            break t;
          }
        i = null;
      }
    }
    if (i) throw new E("argument-error", t + " failed: " + i);
  }
  ((n = wl.prototype).Ga = function () {
    var t = this;
    return this.f
      ? this.f
      : (this.f = Sl(
          this,
          Sn()
            .then(function () {
              if (Si() && !pi()) return li();
              throw new E(
                "operation-not-supported-in-this-environment",
                "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment."
              );
            })
            .then(function () {
              return t.m.g(t.w());
            })
            .then(function (n) {
              return (t.g = n), Js(t.s, Ps, {});
            })
            .then(function (n) {
              t.a[El] = n.recaptchaSiteKey;
            })
            .o(function (n) {
              throw ((t.f = null), n);
            })
        ));
  }),
    (n.render = function () {
      Nl(this);
      var t = this;
      return Sl(
        this,
        this.Ga().then(function () {
          if (null === t.c) {
            var n = t.u;
            if (!t.i) {
              var e = on(n);
              (n = (function (t, n, e) {
                var i = arguments,
                  r = document,
                  o = String(i[0]),
                  a = i[1];
                if (!rn && a && (a.name || a.type)) {
                  if (
                    ((o = ["<", o]),
                    a.name && o.push(' name="', Ft(a.name), '"'),
                    a.type)
                  ) {
                    o.push(' type="', Ft(a.type), '"');
                    var s = {};
                    pt(s, a), delete s.type, (a = s);
                  }
                  o.push(">"), (o = o.join(""));
                }
                return (
                  (o = ln(r, o)),
                  a &&
                    ("string" == typeof a
                      ? (o.className = a)
                      : Array.isArray(a)
                      ? (o.className = a.join(" "))
                      : an(o, a)),
                  2 < i.length && hn(r, o, i),
                  o
                );
              })("DIV")),
                e.appendChild(n);
            }
            t.c = t.g.render(n, t.a);
          }
          return t.c;
        })
      );
    }),
    (n.verify = function () {
      Nl(this);
      var t = this;
      return Sl(
        this,
        this.render().then(function (n) {
          return new yn(function (e) {
            var i = t.g.getResponse(n);
            if (i) e(i);
            else {
              var r = function (n) {
                n &&
                  ((function (t, n) {
                    X(t.l, function (t) {
                      return t == n;
                    });
                  })(t, r),
                  e(n));
              };
              t.l.push(r), t.i && t.g.execute(t.c);
            }
          });
        })
      );
    }),
    (n.reset = function () {
      Nl(this), null !== this.c && this.g.reset(this.c);
    }),
    (n.clear = function () {
      Nl(this), (this.D = !0), this.m.c();
      for (var t = 0; t < this.h.length; t++)
        this.h[t].cancel("RecaptchaVerifier instance has been destroyed.");
      if (!this.i) {
        t = on(this.u);
        for (var n; (n = t.firstChild); ) t.removeChild(n);
      }
    }),
    T(_l, wl);
  var Rl = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(
    " "
  );
  function Pl(t, n) {
    return {
      name: t || "",
      J: "a valid string",
      optional: !!n,
      K: function (t) {
        return "string" == typeof t;
      },
    };
  }
  function Cl(t, n) {
    return {
      name: t || "",
      J: "a boolean",
      optional: !!n,
      K: function (t) {
        return "boolean" == typeof t;
      },
    };
  }
  function Dl(t, n) {
    return { name: t || "", J: "a valid object", optional: !!n, K: p };
  }
  function Ll(t, n) {
    return { name: t || "", J: "a function", optional: !!n, K: d };
  }
  function Ml(t, n) {
    return {
      name: t || "",
      J: "null",
      optional: !!n,
      K: function (t) {
        return null === t;
      },
    };
  }
  function xl(t) {
    return {
      name: t ? t + "Credential" : "credential",
      J: t ? "a valid " + t + " credential" : "a valid credential",
      optional: !1,
      K: function (n) {
        if (!n) return !1;
        var e = !t || n.providerId === t;
        return !(!n.ia || !e);
      },
    };
  }
  function jl(t, n) {
    return p(t) && "string" == typeof t.type && t.type === n && d(t.Fa);
  }
  function Ul(t) {
    return p(t) && "string" == typeof t.uid;
  }
  function Vl() {
    return {
      name: "applicationVerifier",
      J: "an implementation of firebase.auth.ApplicationVerifier",
      optional: !1,
      K: function (t) {
        return !(!t || "string" != typeof t.type || !d(t.verify));
      },
    };
  }
  function Fl(t, n, e, i) {
    return {
      name: e || "",
      J: t.J + " or " + n.J,
      optional: !!i,
      K: function (e) {
        return t.K(e) || n.K(e);
      },
    };
  }
  function ql(t, n) {
    for (var e in n) {
      var i = n[e].name;
      t[i] = Gl(i, t[e], n[e].j);
    }
  }
  function Kl(t, n) {
    for (var e in n) {
      var i = n[e].name;
      i !== e &&
        Object.defineProperty(t, i, {
          get: w(function (t) {
            return this[t];
          }, e),
          set: w(
            function (t, n, e, i) {
              Ol(t, [e], [i], !0), (this[n] = i);
            },
            i,
            e,
            n[e].gb
          ),
          enumerable: !0,
        });
    }
  }
  function Hl(t, n, e, i) {
    t[n] = Gl(n, e, i);
  }
  function Gl(t, n, e) {
    function i() {
      var t = Array.prototype.slice.call(arguments);
      return Ol(o, e, t), n.apply(this, t);
    }
    if (!e) return n;
    var r,
      o = (function (t) {
        return (t = t.split("."))[t.length - 1];
      })(t);
    for (r in n) i[r] = n[r];
    for (r in n.prototype) i.prototype[r] = n.prototype[r];
    return i;
  }
  ql(Xh.prototype, {
    fb: { name: "applyActionCode", j: [Pl("code")] },
    Pa: { name: "checkActionCode", j: [Pl("code")] },
    jb: { name: "confirmPasswordReset", j: [Pl("code"), Pl("newPassword")] },
    cc: {
      name: "createUserWithEmailAndPassword",
      j: [Pl("email"), Pl("password")],
    },
    fc: { name: "fetchSignInMethodsForEmail", j: [Pl("email")] },
    pa: { name: "getRedirectResult", j: [] },
    zc: { name: "isSignInWithEmailLink", j: [Pl("emailLink")] },
    Fc: {
      name: "onAuthStateChanged",
      j: [
        Fl(Dl(), Ll(), "nextOrObserver"),
        Ll("opt_error", !0),
        Ll("opt_completed", !0),
      ],
    },
    Gc: {
      name: "onIdTokenChanged",
      j: [
        Fl(Dl(), Ll(), "nextOrObserver"),
        Ll("opt_error", !0),
        Ll("opt_completed", !0),
      ],
    },
    rb: {
      name: "sendPasswordResetEmail",
      j: [
        Pl("email"),
        Fl(
          Dl("opt_actionCodeSettings", !0),
          Ml(null, !0),
          "opt_actionCodeSettings",
          !0
        ),
      ],
    },
    sb: {
      name: "sendSignInLinkToEmail",
      j: [Pl("email"), Dl("actionCodeSettings")],
    },
    tb: { name: "setPersistence", j: [Pl("persistence")] },
    Qc: { name: "signInAndRetrieveDataWithCredential", j: [xl()] },
    vb: { name: "signInAnonymously", j: [] },
    Ya: { name: "signInWithCredential", j: [xl()] },
    Rc: { name: "signInWithCustomToken", j: [Pl("token")] },
    Sc: {
      name: "signInWithEmailAndPassword",
      j: [Pl("email"), Pl("password")],
    },
    Tc: { name: "signInWithEmailLink", j: [Pl("email"), Pl("emailLink", !0)] },
    Uc: { name: "signInWithPhoneNumber", j: [Pl("phoneNumber"), Vl()] },
    Vc: {
      name: "signInWithPopup",
      j: [
        {
          name: "authProvider",
          J: "a valid Auth provider",
          optional: !1,
          K: function (t) {
            return !!(
              t &&
              t.providerId &&
              t.hasOwnProperty &&
              t.hasOwnProperty("isOAuthProvider")
            );
          },
        },
      ],
    },
    Wc: {
      name: "signInWithRedirect",
      j: [
        {
          name: "authProvider",
          J: "a valid Auth provider",
          optional: !1,
          K: function (t) {
            return !!(
              t &&
              t.providerId &&
              t.hasOwnProperty &&
              t.hasOwnProperty("isOAuthProvider")
            );
          },
        },
      ],
    },
    bd: {
      name: "updateCurrentUser",
      j: [
        Fl(
          {
            name: "user",
            J: "an instance of Firebase User",
            optional: !1,
            K: function (t) {
              return !!(t && t instanceof uh);
            },
          },
          Ml(),
          "user"
        ),
      ],
    },
    wb: { name: "signOut", j: [] },
    toJSON: { name: "toJSON", j: [Pl(null, !0)] },
    dd: { name: "useDeviceLanguage", j: [] },
    fd: { name: "verifyPasswordResetCode", j: [Pl("code")] },
  }),
    Kl(Xh.prototype, {
      lc: { name: "languageCode", gb: Fl(Pl(), Ml(), "languageCode") },
      ti: { name: "tenantId", gb: Fl(Pl(), Ml(), "tenantId") },
    }),
    (Xh.Persistence = Hu),
    (Xh.Persistence.LOCAL = "local"),
    (Xh.Persistence.SESSION = "session"),
    (Xh.Persistence.NONE = "none"),
    ql(uh.prototype, {
      delete: { name: "delete", j: [] },
      mc: { name: "getIdTokenResult", j: [Cl("opt_forceRefresh", !0)] },
      I: { name: "getIdToken", j: [Cl("opt_forceRefresh", !0)] },
      Ac: { name: "linkAndRetrieveDataWithCredential", j: [xl()] },
      mb: { name: "linkWithCredential", j: [xl()] },
      Bc: { name: "linkWithPhoneNumber", j: [Pl("phoneNumber"), Vl()] },
      Cc: {
        name: "linkWithPopup",
        j: [
          {
            name: "authProvider",
            J: "a valid Auth provider",
            optional: !1,
            K: function (t) {
              return !!(
                t &&
                t.providerId &&
                t.hasOwnProperty &&
                t.hasOwnProperty("isOAuthProvider")
              );
            },
          },
        ],
      },
      Dc: {
        name: "linkWithRedirect",
        j: [
          {
            name: "authProvider",
            J: "a valid Auth provider",
            optional: !1,
            K: function (t) {
              return !!(
                t &&
                t.providerId &&
                t.hasOwnProperty &&
                t.hasOwnProperty("isOAuthProvider")
              );
            },
          },
        ],
      },
      Jc: { name: "reauthenticateAndRetrieveDataWithCredential", j: [xl()] },
      pb: { name: "reauthenticateWithCredential", j: [xl()] },
      Kc: {
        name: "reauthenticateWithPhoneNumber",
        j: [Pl("phoneNumber"), Vl()],
      },
      Lc: {
        name: "reauthenticateWithPopup",
        j: [
          {
            name: "authProvider",
            J: "a valid Auth provider",
            optional: !1,
            K: function (t) {
              return !!(
                t &&
                t.providerId &&
                t.hasOwnProperty &&
                t.hasOwnProperty("isOAuthProvider")
              );
            },
          },
        ],
      },
      Mc: {
        name: "reauthenticateWithRedirect",
        j: [
          {
            name: "authProvider",
            J: "a valid Auth provider",
            optional: !1,
            K: function (t) {
              return !!(
                t &&
                t.providerId &&
                t.hasOwnProperty &&
                t.hasOwnProperty("isOAuthProvider")
              );
            },
          },
        ],
      },
      reload: { name: "reload", j: [] },
      qb: {
        name: "sendEmailVerification",
        j: [
          Fl(
            Dl("opt_actionCodeSettings", !0),
            Ml(null, !0),
            "opt_actionCodeSettings",
            !0
          ),
        ],
      },
      toJSON: { name: "toJSON", j: [Pl(null, !0)] },
      ad: { name: "unlink", j: [Pl("provider")] },
      xb: { name: "updateEmail", j: [Pl("email")] },
      yb: { name: "updatePassword", j: [Pl("password")] },
      cd: { name: "updatePhoneNumber", j: [xl("phone")] },
      zb: { name: "updateProfile", j: [Dl("profile")] },
      Ab: {
        name: "verifyBeforeUpdateEmail",
        j: [
          Pl("email"),
          Fl(
            Dl("opt_actionCodeSettings", !0),
            Ml(null, !0),
            "opt_actionCodeSettings",
            !0
          ),
        ],
      },
    }),
    ql(sl.prototype, {
      execute: { name: "execute" },
      render: { name: "render" },
      reset: { name: "reset" },
      getResponse: { name: "getResponse" },
    }),
    ql(al.prototype, {
      execute: { name: "execute" },
      render: { name: "render" },
      reset: { name: "reset" },
      getResponse: { name: "getResponse" },
    }),
    ql(yn.prototype, {
      ma: { name: "finally" },
      o: { name: "catch" },
      then: { name: "then" },
    }),
    Kl(Fc.prototype, {
      appVerificationDisabled: {
        name: "appVerificationDisabledForTesting",
        gb: Cl("appVerificationDisabledForTesting"),
      },
    }),
    ql(qc.prototype, {
      confirm: { name: "confirm", j: [Pl("verificationCode")] },
    }),
    Hl(
      eo,
      "fromJSON",
      function (t) {
        t = "string" == typeof t ? JSON.parse(t) : t;
        for (var n, e = [co, Eo, _o, ao], i = 0; i < e.length; i++)
          if ((n = e[i](t))) return n;
        return null;
      },
      [Fl(Pl(), Dl(), "json")]
    ),
    Hl(
      Ao,
      "credential",
      function (t, n) {
        return new To(t, n);
      },
      [Pl("email"), Pl("password")]
    ),
    ql(To.prototype, { v: { name: "toJSON", j: [Pl(null, !0)] } }),
    ql(po.prototype, {
      Aa: { name: "addScope", j: [Pl("scope")] },
      Ia: { name: "setCustomParameters", j: [Dl("customOAuthParameters")] },
    }),
    Hl(po, "credential", vo, [Fl(Pl(), Dl(), "token")]),
    Hl(Ao, "credentialWithLink", ko, [Pl("email"), Pl("emailLink")]),
    ql(mo.prototype, {
      Aa: { name: "addScope", j: [Pl("scope")] },
      Ia: { name: "setCustomParameters", j: [Dl("customOAuthParameters")] },
    }),
    Hl(mo, "credential", go, [Fl(Pl(), Dl(), "token")]),
    ql(bo.prototype, {
      Aa: { name: "addScope", j: [Pl("scope")] },
      Ia: { name: "setCustomParameters", j: [Dl("customOAuthParameters")] },
    }),
    Hl(bo, "credential", yo, [
      Fl(Pl(), Fl(Dl(), Ml()), "idToken"),
      Fl(Pl(), Ml(), "accessToken", !0),
    ]),
    ql(wo.prototype, {
      Ia: { name: "setCustomParameters", j: [Dl("customOAuthParameters")] },
    }),
    Hl(wo, "credential", Io, [Fl(Pl(), Dl(), "token"), Pl("secret", !0)]),
    ql(fo.prototype, {
      Aa: { name: "addScope", j: [Pl("scope")] },
      credential: {
        name: "credential",
        j: [
          Fl(Pl(), Fl(Dl(), Ml()), "optionsOrIdToken"),
          Fl(Pl(), Ml(), "accessToken", !0),
        ],
      },
      Ia: { name: "setCustomParameters", j: [Dl("customOAuthParameters")] },
    }),
    ql(so.prototype, { v: { name: "toJSON", j: [Pl(null, !0)] } }),
    ql(ro.prototype, { v: { name: "toJSON", j: [Pl(null, !0)] } }),
    Hl(Ro, "credential", Po, [Pl("verificationId"), Pl("verificationCode")]),
    ql(Ro.prototype, {
      cb: {
        name: "verifyPhoneNumber",
        j: [
          Fl(
            Pl(),
            {
              name: "phoneInfoOptions",
              J: "valid phone info options",
              optional: !1,
              K: function (t) {
                return (
                  !!t &&
                  (t.session && t.phoneNumber
                    ? jl(t.session, to) && "string" == typeof t.phoneNumber
                    : t.session && t.multiFactorHint
                    ? jl(t.session, no) && Ul(t.multiFactorHint)
                    : t.session && t.multiFactorUid
                    ? jl(t.session, no) && "string" == typeof t.multiFactorUid
                    : !!t.phoneNumber && "string" == typeof t.phoneNumber)
                );
              },
            },
            "phoneInfoOptions"
          ),
          Vl(),
        ],
      },
    }),
    ql(No.prototype, { v: { name: "toJSON", j: [Pl(null, !0)] } }),
    ql(E.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }),
    ql(Fo.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }),
    ql(Vo.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }),
    ql(Xc.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }),
    ql(Gc.prototype, {
      Pc: {
        name: "resolveSignIn",
        j: [
          {
            name: "multiFactorAssertion",
            J: "a valid multiFactorAssertion",
            optional: !1,
            K: function (t) {
              return !!t && !!t.ob;
            },
          },
        ],
      },
    }),
    ql(Qc.prototype, {
      Ob: { name: "getSession", j: [] },
      dc: {
        name: "enroll",
        j: [
          {
            name: "multiFactorAssertion",
            J: "a valid multiFactorAssertion",
            optional: !1,
            K: function (t) {
              return !!t && !!t.ob;
            },
          },
          Pl("displayName", !0),
        ],
      },
      $c: {
        name: "unenroll",
        j: [
          Fl(
            {
              name: "multiFactorInfo",
              J: "a valid multiFactorInfo",
              optional: !1,
              K: Ul,
            },
            Pl(),
            "multiFactorInfoIdentifier"
          ),
        ],
      },
    }),
    ql(_l.prototype, {
      clear: { name: "clear", j: [] },
      render: { name: "render", j: [] },
      verify: { name: "verify", j: [] },
    }),
    Hl(pr, "parseLink", Tr, [Pl("link")]),
    Hl(
      dl,
      "assertion",
      function (t) {
        return new $c(t);
      },
      [xl("phone")]
    ),
    (function () {
      if (void 0 === t || !t.INTERNAL || !t.INTERNAL.registerComponent)
        throw Error(
          "Cannot find the firebase namespace; be sure to include firebase-app.js before this library."
        );
      var n = {
        ActionCodeInfo: {
          Operation: {
            EMAIL_SIGNIN: er,
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: nr,
            VERIFY_AND_CHANGE_EMAIL: ir,
            VERIFY_EMAIL: "VERIFY_EMAIL",
          },
        },
        Auth: Xh,
        AuthCredential: eo,
        Error: E,
      };
      Hl(n, "EmailAuthProvider", Ao, []),
        Hl(n, "FacebookAuthProvider", po, []),
        Hl(n, "GithubAuthProvider", mo, []),
        Hl(n, "GoogleAuthProvider", bo, []),
        Hl(n, "TwitterAuthProvider", wo, []),
        Hl(n, "OAuthProvider", fo, [Pl("providerId")]),
        Hl(n, "SAMLAuthProvider", lo, [Pl("providerId")]),
        Hl(n, "PhoneAuthProvider", Ro, [
          {
            name: "auth",
            J: "an instance of Firebase Auth",
            optional: !0,
            K: function (t) {
              return !!(t && t instanceof Xh);
            },
          },
        ]),
        Hl(n, "RecaptchaVerifier", _l, [
          Fl(
            Pl(),
            {
              name: "",
              J: "an HTML element",
              optional: !1,
              K: function (t) {
                return !!(t && t instanceof Element);
              },
            },
            "recaptchaContainer"
          ),
          Dl("recaptchaParameters", !0),
          {
            name: "app",
            J: "an instance of Firebase App",
            optional: !0,
            K: function (n) {
              return !!(n && n instanceof t.app.App);
            },
          },
        ]),
        Hl(n, "ActionCodeURL", pr, []),
        Hl(n, "PhoneMultiFactorGenerator", dl, []),
        t.INTERNAL.registerComponent({
          name: "auth",
          instanceFactory: function (t) {
            return new Xh((t = t.getProvider("app").getImmediate()));
          },
          multipleInstances: !1,
          serviceProps: n,
          instantiationMode: "LAZY",
          type: "PUBLIC",
        }),
        t.INTERNAL.registerComponent({
          name: "auth-internal",
          instanceFactory: function (t) {
            return {
              getUid: y((t = t.getProvider("auth").getImmediate()).getUid, t),
              getToken: y(t.kc, t),
              addAuthTokenListener: y(t.bc, t),
              removeAuthTokenListener: y(t.Nc, t),
            };
          },
          multipleInstances: !1,
          instantiationMode: "LAZY",
          type: "PRIVATE",
        }),
        t.registerVersion("@firebase/auth", "0.14.2"),
        t.INTERNAL.extendNamespace({ User: uh });
    })();
}.apply(
  "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : {}
));
//# sourceMappingURL=index.esm.js.map
