module.exports = function(e) {
 var t = {};
 function n(e) {
  return "" + ({
   0: "vscode-json-languageserver"
  }[e] || e) + ".js";
 }
 function r(t) {
  var r = n(t);
  var i = require(__dirname + "/" + r);
  var o = i.modules, s = i.ids;
  for (var a in o) {
   e[a] = o[a];
  }
 }
 var i = [ [ "R1Vu" ] ];
 for (var o = 0; o < i.length; ++o) {
  var s = i[o];
  for (var a = 1; a < s.length; ++a) {
   var u = s[a];
   r(u);
  }
 }
 function c(n) {
  if (t[n]) {
   return t[n].exports;
  }
  var r = t[n] = {
   i: n,
   l: false,
   exports: {}
  };
  e[n].call(r.exports, r, r.exports, c);
  r.l = true;
  return r.exports;
 }
 c.m = e;
 c.c = t;
 c.d = function(e, t, n) {
  if (!c.o(e, t)) {
   Object.defineProperty(e, t, {
    enumerable: true,
    get: n
   });
  }
 };
 c.r = function(e) {
  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
   Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
   });
  }
  Object.defineProperty(e, "__esModule", {
   value: true
  });
 };
 c.t = function(e, t) {
  if (t & 1) e = c(e);
  if (t & 8) return e;
  if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
  var n = Object.create(null);
  c.r(n);
  Object.defineProperty(n, "default", {
   enumerable: true,
   value: e
  });
  if (t & 2 && typeof e != "string") for (var r in e) c.d(n, r, function(t) {
   return e[t];
  }.bind(null, r));
  return n;
 };
 c.n = function(e) {
  var t = e && e.__esModule ? function t() {
   return e["default"];
  } : function t() {
   return e;
  };
  c.d(t, "a", t);
  return t;
 };
 c.o = function(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
 };
 c.p = "";
 return c(c.s = "R1Vu");
}({
 "+21m": function(e, t, n) {
  "use strict";
  const r = n("bzos");
  const i = n("7WL4");
  i.request = function(e) {
   return function(t, n) {
    let o;
    if (typeof t === "string") {
     o = r.parse(t);
    } else {
     o = Object.assign({}, t);
    }
    if (null == o.port) {
     o.port = 443;
    }
    o.secureEndpoint = true;
    return e.call(i, o, n);
   };
  }(i.request);
  i.get = function(e, t) {
   const n = i.request(e, t);
   n.end();
   return n;
  };
 },
 "+cRy": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("owkM");
  const i = n("C+6V");
  const o = n("CcFB");
  t.ImplementationRequest = o.ImplementationRequest;
  const s = n("8ahE");
  t.TypeDefinitionRequest = s.TypeDefinitionRequest;
  const a = n("VqZt");
  t.WorkspaceFoldersRequest = a.WorkspaceFoldersRequest;
  t.DidChangeWorkspaceFoldersNotification = a.DidChangeWorkspaceFoldersNotification;
  const u = n("sKb1");
  t.ConfigurationRequest = u.ConfigurationRequest;
  const c = n("zZpG");
  t.DocumentColorRequest = c.DocumentColorRequest;
  t.ColorPresentationRequest = c.ColorPresentationRequest;
  var f;
  (function(e) {
   function t(e) {
    let t = e;
    return r.string(t.language) || r.string(t.scheme) || r.string(t.pattern);
   }
   e.is = t;
  })(f = t.DocumentFilter || (t.DocumentFilter = {}));
  var l;
  (function(e) {
   e.type = new i.RequestType("client/registerCapability");
  })(l = t.RegistrationRequest || (t.RegistrationRequest = {}));
  var d;
  (function(e) {
   e.type = new i.RequestType("client/unregisterCapability");
  })(d = t.UnregistrationRequest || (t.UnregistrationRequest = {}));
  var h;
  (function(e) {
   e.None = 0;
   e.Full = 1;
   e.Incremental = 2;
  })(h = t.TextDocumentSyncKind || (t.TextDocumentSyncKind = {}));
  var p;
  (function(e) {
   e.type = new i.RequestType("initialize");
  })(p = t.InitializeRequest || (t.InitializeRequest = {}));
  var m;
  (function(e) {
   e.unknownProtocolVersion = 1;
  })(m = t.InitializeError || (t.InitializeError = {}));
  var v;
  (function(e) {
   e.type = new i.NotificationType("initialized");
  })(v = t.InitializedNotification || (t.InitializedNotification = {}));
  var g;
  (function(e) {
   e.type = new i.RequestType0("shutdown");
  })(g = t.ShutdownRequest || (t.ShutdownRequest = {}));
  var y;
  (function(e) {
   e.type = new i.NotificationType0("exit");
  })(y = t.ExitNotification || (t.ExitNotification = {}));
  var b;
  (function(e) {
   e.type = new i.NotificationType("workspace/didChangeConfiguration");
  })(b = t.DidChangeConfigurationNotification || (t.DidChangeConfigurationNotification = {}));
  var C;
  (function(e) {
   e.Error = 1;
   e.Warning = 2;
   e.Info = 3;
   e.Log = 4;
  })(C = t.MessageType || (t.MessageType = {}));
  var w;
  (function(e) {
   e.type = new i.NotificationType("window/showMessage");
  })(w = t.ShowMessageNotification || (t.ShowMessageNotification = {}));
  var x;
  (function(e) {
   e.type = new i.RequestType("window/showMessageRequest");
  })(x = t.ShowMessageRequest || (t.ShowMessageRequest = {}));
  var T;
  (function(e) {
   e.type = new i.NotificationType("window/logMessage");
  })(T = t.LogMessageNotification || (t.LogMessageNotification = {}));
  var _;
  (function(e) {
   e.type = new i.NotificationType("telemetry/event");
  })(_ = t.TelemetryEventNotification || (t.TelemetryEventNotification = {}));
  var S;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didOpen");
  })(S = t.DidOpenTextDocumentNotification || (t.DidOpenTextDocumentNotification = {}));
  var R;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didChange");
  })(R = t.DidChangeTextDocumentNotification || (t.DidChangeTextDocumentNotification = {}));
  var E;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didClose");
  })(E = t.DidCloseTextDocumentNotification || (t.DidCloseTextDocumentNotification = {}));
  var k;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didSave");
  })(k = t.DidSaveTextDocumentNotification || (t.DidSaveTextDocumentNotification = {}));
  var O;
  (function(e) {
   e.type = new i.NotificationType("textDocument/willSave");
  })(O = t.WillSaveTextDocumentNotification || (t.WillSaveTextDocumentNotification = {}));
  var A;
  (function(e) {
   e.type = new i.RequestType("textDocument/willSaveWaitUntil");
  })(A = t.WillSaveTextDocumentWaitUntilRequest || (t.WillSaveTextDocumentWaitUntilRequest = {}));
  var P;
  (function(e) {
   e.type = new i.NotificationType("workspace/didChangeWatchedFiles");
  })(P = t.DidChangeWatchedFilesNotification || (t.DidChangeWatchedFilesNotification = {}));
  var j;
  (function(e) {
   e.Created = 1;
   e.Changed = 2;
   e.Deleted = 3;
  })(j = t.FileChangeType || (t.FileChangeType = {}));
  var M;
  (function(e) {
   e.Create = 1;
   e.Change = 2;
   e.Delete = 4;
  })(M = t.WatchKind || (t.WatchKind = {}));
  var N;
  (function(e) {
   e.type = new i.NotificationType("textDocument/publishDiagnostics");
  })(N = t.PublishDiagnosticsNotification || (t.PublishDiagnosticsNotification = {}));
  var q;
  (function(e) {
   e.Invoked = 1;
   e.TriggerCharacter = 2;
   e.TriggerForIncompleteCompletions = 3;
  })(q = t.CompletionTriggerKind || (t.CompletionTriggerKind = {}));
  var I;
  (function(e) {
   e.type = new i.RequestType("textDocument/completion");
  })(I = t.CompletionRequest || (t.CompletionRequest = {}));
  var D;
  (function(e) {
   e.type = new i.RequestType("completionItem/resolve");
  })(D = t.CompletionResolveRequest || (t.CompletionResolveRequest = {}));
  var F;
  (function(e) {
   e.type = new i.RequestType("textDocument/hover");
  })(F = t.HoverRequest || (t.HoverRequest = {}));
  var L;
  (function(e) {
   e.type = new i.RequestType("textDocument/signatureHelp");
  })(L = t.SignatureHelpRequest || (t.SignatureHelpRequest = {}));
  var W;
  (function(e) {
   e.type = new i.RequestType("textDocument/definition");
  })(W = t.DefinitionRequest || (t.DefinitionRequest = {}));
  var V;
  (function(e) {
   e.type = new i.RequestType("textDocument/references");
  })(V = t.ReferencesRequest || (t.ReferencesRequest = {}));
  var U;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentHighlight");
  })(U = t.DocumentHighlightRequest || (t.DocumentHighlightRequest = {}));
  var $;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentSymbol");
  })($ = t.DocumentSymbolRequest || (t.DocumentSymbolRequest = {}));
  var z;
  (function(e) {
   e.type = new i.RequestType("workspace/symbol");
  })(z = t.WorkspaceSymbolRequest || (t.WorkspaceSymbolRequest = {}));
  var H;
  (function(e) {
   e.type = new i.RequestType("textDocument/codeAction");
  })(H = t.CodeActionRequest || (t.CodeActionRequest = {}));
  var B;
  (function(e) {
   e.type = new i.RequestType("textDocument/codeLens");
  })(B = t.CodeLensRequest || (t.CodeLensRequest = {}));
  var K;
  (function(e) {
   e.type = new i.RequestType("codeLens/resolve");
  })(K = t.CodeLensResolveRequest || (t.CodeLensResolveRequest = {}));
  var J;
  (function(e) {
   e.type = new i.RequestType("textDocument/formatting");
  })(J = t.DocumentFormattingRequest || (t.DocumentFormattingRequest = {}));
  var G;
  (function(e) {
   e.type = new i.RequestType("textDocument/rangeFormatting");
  })(G = t.DocumentRangeFormattingRequest || (t.DocumentRangeFormattingRequest = {}));
  var Y;
  (function(e) {
   e.type = new i.RequestType("textDocument/onTypeFormatting");
  })(Y = t.DocumentOnTypeFormattingRequest || (t.DocumentOnTypeFormattingRequest = {}));
  var Q;
  (function(e) {
   e.type = new i.RequestType("textDocument/rename");
  })(Q = t.RenameRequest || (t.RenameRequest = {}));
  var Z;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentLink");
  })(Z = t.DocumentLinkRequest || (t.DocumentLinkRequest = {}));
  var X;
  (function(e) {
   e.type = new i.RequestType("documentLink/resolve");
  })(X = t.DocumentLinkResolveRequest || (t.DocumentLinkResolveRequest = {}));
  var ee;
  (function(e) {
   e.type = new i.RequestType("workspace/executeCommand");
  })(ee = t.ExecuteCommandRequest || (t.ExecuteCommandRequest = {}));
  var te;
  (function(e) {
   e.type = new i.RequestType("workspace/applyEdit");
  })(te = t.ApplyWorkspaceEditRequest || (t.ApplyWorkspaceEditRequest = {}));
 },
 "/0p4": function(e, t) {
  e.exports = require("events");
 },
 "/7TX": function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("1vg8");
  var o;
  (function(e) {
   e.ParseError = -32700;
   e.InvalidRequest = -32600;
   e.MethodNotFound = -32601;
   e.InvalidParams = -32602;
   e.InternalError = -32603;
   e.serverErrorStart = -32099;
   e.serverErrorEnd = -32e3;
   e.ServerNotInitialized = -32002;
   e.UnknownErrorCode = -32001;
   e.RequestCancelled = -32800;
   e.MessageWriteError = 1;
   e.MessageReadError = 2;
  })(o = t.ErrorCodes || (t.ErrorCodes = {}));
  var s = function(e) {
   r(t, e);
   function t(n, r, s) {
    var a = e.call(this, r) || this;
    a.code = i.number(n) ? n : o.UnknownErrorCode;
    a.data = s;
    Object.setPrototypeOf(a, t.prototype);
    return a;
   }
   t.prototype.toJson = function() {
    return {
     code: this.code,
     message: this.message,
     data: this.data
    };
   };
   return t;
  }(Error);
  t.ResponseError = s;
  var a = function() {
   function e(e, t) {
    this._method = e;
    this._numberOfParams = t;
   }
   Object.defineProperty(e.prototype, "method", {
    get: function() {
     return this._method;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "numberOfParams", {
    get: function() {
     return this._numberOfParams;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  t.AbstractMessageType = a;
  var u = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 0) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType0 = u;
  var c = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType = c;
  var f = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType1 = f;
  var l = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 2) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType2 = l;
  var d = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 3) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType3 = d;
  var h = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 4) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType4 = h;
  var p = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 5) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType5 = p;
  var m = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 6) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType6 = m;
  var v = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 7) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType7 = v;
  var g = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 8) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType8 = g;
  var y = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 9) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.RequestType9 = y;
  var b = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType = b;
  var C = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 0) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType0 = C;
  var w = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType1 = w;
  var x = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 2) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType2 = x;
  var T = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 3) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType3 = T;
  var _ = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 4) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType4 = _;
  var S = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 5) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType5 = S;
  var R = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 6) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType6 = R;
  var E = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 7) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType7 = E;
  var k = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 8) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType8 = k;
  var O = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 9) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(a);
  t.NotificationType9 = O;
  function A(e) {
   var t = e;
   return t && i.string(t.method) && (i.string(t.id) || i.number(t.id));
  }
  t.isRequestMessage = A;
  function P(e) {
   var t = e;
   return t && i.string(t.method) && e.id === void 0;
  }
  t.isNotificationMessage = P;
  function j(e) {
   var t = e;
   return t && (t.result !== void 0 || !!t.error) && (i.string(t.id) || i.number(t.id) || t.id === null);
  }
  t.isResponseMessage = j;
 },
 "1vg8": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = Object.prototype.toString;
  function i(e) {
   return e === true || e === false;
  }
  t.boolean = i;
  function o(e) {
   return r.call(e) === "[object String]";
  }
  t.string = o;
  function s(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = s;
  function a(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = a;
  function u(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = u;
  function c(e) {
   return Array.isArray(e);
  }
  t.array = c;
  function f(e) {
   return c(e) && e.every(function(e) {
    return o(e);
   });
  }
  t.stringArray = f;
 },
 "3Z22": function(e, t, n) {
  var r = n("Qs2e");
  var i = n("ugmf");
  var o = n("bzos");
  var s = n("TDAU");
  var a = n("jK02").inherits;
  var u = n("QWwp")("http-proxy-agent");
  e.exports = c;
  function c(e) {
   if (!(this instanceof c)) return new c(e);
   if ("string" == typeof e) e = o.parse(e);
   if (!e) throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
   u("creating new HttpProxyAgent instance: %o", e);
   s.call(this, e);
   var t = Object.assign({}, e);
   this.secureProxy = t.protocol ? /^https:?$/i.test(t.protocol) : false;
   t.host = t.hostname || t.host;
   t.port = +t.port || (this.secureProxy ? 443 : 80);
   if (t.host && t.path) {
    delete t.path;
    delete t.pathname;
   }
   this.proxy = t;
  }
  a(c, s);
  c.prototype.callback = function e(t, n, s) {
   var a = this.proxy;
   var c = o.parse(t.path);
   if (null == c.protocol) c.protocol = "http:";
   if (null == c.hostname) c.hostname = n.hostname || n.host;
   if (null == c.port) c.port = n.port;
   if (c.port == 80) {
    delete c.port;
   }
   var f = o.format(c);
   t.path = f;
   if (a.auth) {
    t.setHeader("Proxy-Authorization", "Basic " + Buffer.from(a.auth).toString("base64"));
   }
   var l;
   if (this.secureProxy) {
    l = i.connect(a);
   } else {
    l = r.connect(a);
   }
   if (t._header) {
    u("regenerating stored HTTP header string for request");
    t._header = null;
    t._implicitHeader();
    if (t.output && t.output.length > 0) {
     u("patching connection write() output buffer with updated header");
     var d = t.output[0];
     var h = d.indexOf("\r\n\r\n") + 4;
     t.output[0] = t._header + d.substring(h);
     u("output buffer: %o", t.output);
    }
   }
   s(null, l);
  };
 },
 "4Wfv": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r;
  (function(e) {
   e.None = 0;
   e.First = 1;
   e.Last = 2;
  })(r = t.Touch || (t.Touch = {}));
  var i = function() {
   function e() {
    this._map = new Map();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
   }
   e.prototype.clear = function() {
    this._map.clear();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
   };
   e.prototype.isEmpty = function() {
    return !this._head && !this._tail;
   };
   Object.defineProperty(e.prototype, "size", {
    get: function() {
     return this._size;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.has = function(e) {
    return this._map.has(e);
   };
   e.prototype.get = function(e) {
    var t = this._map.get(e);
    if (!t) {
     return undefined;
    }
    return t.value;
   };
   e.prototype.set = function(e, t, n) {
    if (n === void 0) {
     n = r.None;
    }
    var i = this._map.get(e);
    if (i) {
     i.value = t;
     if (n !== r.None) {
      this.touch(i, n);
     }
    } else {
     i = {
      key: e,
      value: t,
      next: undefined,
      previous: undefined
     };
     switch (n) {
     case r.None:
      this.addItemLast(i);
      break;

     case r.First:
      this.addItemFirst(i);
      break;

     case r.Last:
      this.addItemLast(i);
      break;

     default:
      this.addItemLast(i);
      break;
     }
     this._map.set(e, i);
     this._size++;
    }
   };
   e.prototype.delete = function(e) {
    var t = this._map.get(e);
    if (!t) {
     return false;
    }
    this._map.delete(e);
    this.removeItem(t);
    this._size--;
    return true;
   };
   e.prototype.shift = function() {
    if (!this._head && !this._tail) {
     return undefined;
    }
    if (!this._head || !this._tail) {
     throw new Error("Invalid list");
    }
    var e = this._head;
    this._map.delete(e.key);
    this.removeItem(e);
    this._size--;
    return e.value;
   };
   e.prototype.forEach = function(e, t) {
    var n = this._head;
    while (n) {
     if (t) {
      e.bind(t)(n.value, n.key, this);
     } else {
      e(n.value, n.key, this);
     }
     n = n.next;
    }
   };
   e.prototype.forEachReverse = function(e, t) {
    var n = this._tail;
    while (n) {
     if (t) {
      e.bind(t)(n.value, n.key, this);
     } else {
      e(n.value, n.key, this);
     }
     n = n.previous;
    }
   };
   e.prototype.values = function() {
    var e = [];
    var t = this._head;
    while (t) {
     e.push(t.value);
     t = t.next;
    }
    return e;
   };
   e.prototype.keys = function() {
    var e = [];
    var t = this._head;
    while (t) {
     e.push(t.key);
     t = t.next;
    }
    return e;
   };
   e.prototype.addItemFirst = function(e) {
    if (!this._head && !this._tail) {
     this._tail = e;
    } else if (!this._head) {
     throw new Error("Invalid list");
    } else {
     e.next = this._head;
     this._head.previous = e;
    }
    this._head = e;
   };
   e.prototype.addItemLast = function(e) {
    if (!this._head && !this._tail) {
     this._head = e;
    } else if (!this._tail) {
     throw new Error("Invalid list");
    } else {
     e.previous = this._tail;
     this._tail.next = e;
    }
    this._tail = e;
   };
   e.prototype.removeItem = function(e) {
    if (e === this._head && e === this._tail) {
     this._head = undefined;
     this._tail = undefined;
    } else if (e === this._head) {
     this._head = e.next;
    } else if (e === this._tail) {
     this._tail = e.previous;
    } else {
     var t = e.next;
     var n = e.previous;
     if (!t || !n) {
      throw new Error("Invalid list");
     }
     t.previous = n;
     n.next = t;
    }
   };
   e.prototype.touch = function(e, t) {
    if (!this._head || !this._tail) {
     throw new Error("Invalid list");
    }
    if (t !== r.First && t !== r.Last) {
     return;
    }
    if (t === r.First) {
     if (e === this._head) {
      return;
     }
     var n = e.next;
     var i = e.previous;
     if (e === this._tail) {
      i.next = undefined;
      this._tail = i;
     } else {
      n.previous = i;
      i.next = n;
     }
     e.previous = undefined;
     e.next = this._head;
     this._head.previous = e;
     this._head = e;
    } else if (t === r.Last) {
     if (e === this._tail) {
      return;
     }
     var n = e.next;
     var i = e.previous;
     if (e === this._head) {
      n.previous = undefined;
      this._head = n;
     } else {
      n.previous = i;
      i.next = n;
     }
     e.next = undefined;
     e.previous = this._tail;
     this._tail.next = e;
     this._tail = e;
    }
   };
   return e;
  }();
  t.LinkedMap = i;
 },
 "7WL4": function(e, t) {
  e.exports = require("https");
 },
 "8ahE": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C+6V");
  var i;
  (function(e) {
   e.type = new r.RequestType("textDocument/typeDefinition");
  })(i = t.TypeDefinitionRequest || (t.TypeDefinitionRequest = {}));
 },
 ALIN: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("Qs2e");
  var i = n("uWpP");
  var o = n("vIUA");
  function s(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n;
   var s = new Promise(function(e, t) {
    n = e;
   });
   return new Promise(function(a, u) {
    var c = r.createServer(function(e) {
     c.close();
     n([ new i.SocketMessageReader(e, t), new o.SocketMessageWriter(e, t) ]);
    });
    c.on("error", u);
    c.listen(e, "127.0.0.1", function() {
     c.removeListener("error", u);
     a({
      onConnected: function() {
       return s;
      }
     });
    });
   });
  }
  t.createClientSocketTransport = s;
  function a(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n = r.createConnection(e, "127.0.0.1");
   return [ new i.SocketMessageReader(n, t), new o.SocketMessageWriter(n, t) ];
  }
  t.createServerSocketTransport = a;
 },
 AyFj: function(e, t, n) {
  "use strict";
  e.exports = function() {
   "use strict";
   var e = n("iYeQ");
   function t(e) {
    return e && typeof e.then === "function" && typeof e.catch === "function";
   }
   return function n(r, i) {
    return function() {
     for (var n = arguments.length, o = Array(n), s = 0; s < n; s++) {
      o[s] = arguments[s];
     }
     var a = i && i.multiArgs;
     var u = void 0;
     if (i && i.thisArg) {
      u = i.thisArg;
     } else if (i) {
      u = i;
     }
     return new e(function(e, n) {
      o.push(function t(r) {
       if (r) {
        return n(r);
       }
       for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) {
        o[s - 1] = arguments[s];
       }
       if (false === !!a) {
        return e(o[0]);
       }
       e(o);
      });
      var i = r.apply(u, o);
      if (t(i)) {
       e(i);
      }
     });
    };
   };
  }();
 },
 BOov: function(e, t, n) {
  "use strict";
  function r(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const i = n("C+6V");
  t.ErrorCodes = i.ErrorCodes;
  t.ResponseError = i.ResponseError;
  t.CancellationToken = i.CancellationToken;
  t.CancellationTokenSource = i.CancellationTokenSource;
  t.Disposable = i.Disposable;
  t.Event = i.Event;
  t.Emitter = i.Emitter;
  t.Trace = i.Trace;
  t.SetTraceNotification = i.SetTraceNotification;
  t.LogTraceNotification = i.LogTraceNotification;
  t.RequestType = i.RequestType;
  t.RequestType0 = i.RequestType0;
  t.NotificationType = i.NotificationType;
  t.NotificationType0 = i.NotificationType0;
  t.MessageReader = i.MessageReader;
  t.MessageWriter = i.MessageWriter;
  t.ConnectionStrategy = i.ConnectionStrategy;
  t.StreamMessageReader = i.StreamMessageReader;
  t.StreamMessageWriter = i.StreamMessageWriter;
  t.IPCMessageReader = i.IPCMessageReader;
  t.IPCMessageWriter = i.IPCMessageWriter;
  t.createClientPipeTransport = i.createClientPipeTransport;
  t.createServerPipeTransport = i.createServerPipeTransport;
  t.generateRandomPipeName = i.generateRandomPipeName;
  t.createClientSocketTransport = i.createClientSocketTransport;
  t.createServerSocketTransport = i.createServerSocketTransport;
  r(n("kmEW"));
  r(n("+cRy"));
  function o(e, t, n, r) {
   return i.createMessageConnection(e, t, n, r);
  }
  t.createProtocolConnection = o;
 },
 "C+6V": function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  function i(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var o = n("1vg8");
  var s = n("/7TX");
  t.RequestType = s.RequestType;
  t.RequestType0 = s.RequestType0;
  t.RequestType1 = s.RequestType1;
  t.RequestType2 = s.RequestType2;
  t.RequestType3 = s.RequestType3;
  t.RequestType4 = s.RequestType4;
  t.RequestType5 = s.RequestType5;
  t.RequestType6 = s.RequestType6;
  t.RequestType7 = s.RequestType7;
  t.RequestType8 = s.RequestType8;
  t.RequestType9 = s.RequestType9;
  t.ResponseError = s.ResponseError;
  t.ErrorCodes = s.ErrorCodes;
  t.NotificationType = s.NotificationType;
  t.NotificationType0 = s.NotificationType0;
  t.NotificationType1 = s.NotificationType1;
  t.NotificationType2 = s.NotificationType2;
  t.NotificationType3 = s.NotificationType3;
  t.NotificationType4 = s.NotificationType4;
  t.NotificationType5 = s.NotificationType5;
  t.NotificationType6 = s.NotificationType6;
  t.NotificationType7 = s.NotificationType7;
  t.NotificationType8 = s.NotificationType8;
  t.NotificationType9 = s.NotificationType9;
  var a = n("uWpP");
  t.MessageReader = a.MessageReader;
  t.StreamMessageReader = a.StreamMessageReader;
  t.IPCMessageReader = a.IPCMessageReader;
  t.SocketMessageReader = a.SocketMessageReader;
  var u = n("vIUA");
  t.MessageWriter = u.MessageWriter;
  t.StreamMessageWriter = u.StreamMessageWriter;
  t.IPCMessageWriter = u.IPCMessageWriter;
  t.SocketMessageWriter = u.SocketMessageWriter;
  var c = n("Z5Ki");
  t.Disposable = c.Disposable;
  t.Event = c.Event;
  t.Emitter = c.Emitter;
  var f = n("Ff8q");
  t.CancellationTokenSource = f.CancellationTokenSource;
  t.CancellationToken = f.CancellationToken;
  var l = n("4Wfv");
  i(n("qL5x"));
  i(n("ALIN"));
  var d;
  (function(e) {
   e.type = new s.NotificationType("$/cancelRequest");
  })(d || (d = {}));
  t.NullLogger = Object.freeze({
   error: function() {},
   warn: function() {},
   info: function() {},
   log: function() {}
  });
  var h;
  (function(e) {
   e[e["Off"] = 0] = "Off";
   e[e["Messages"] = 1] = "Messages";
   e[e["Verbose"] = 2] = "Verbose";
  })(h = t.Trace || (t.Trace = {}));
  (function(e) {
   function t(t) {
    t = t.toLowerCase();
    switch (t) {
    case "off":
     return e.Off;

    case "messages":
     return e.Messages;

    case "verbose":
     return e.Verbose;

    default:
     return e.Off;
    }
   }
   e.fromString = t;
   function n(t) {
    switch (t) {
    case e.Off:
     return "off";

    case e.Messages:
     return "messages";

    case e.Verbose:
     return "verbose";

    default:
     return "off";
    }
   }
   e.toString = n;
  })(h = t.Trace || (t.Trace = {}));
  var p;
  (function(e) {
   e.type = new s.NotificationType("$/setTraceNotification");
  })(p = t.SetTraceNotification || (t.SetTraceNotification = {}));
  var m;
  (function(e) {
   e.type = new s.NotificationType("$/logTraceNotification");
  })(m = t.LogTraceNotification || (t.LogTraceNotification = {}));
  var v;
  (function(e) {
   e[e["Closed"] = 1] = "Closed";
   e[e["Disposed"] = 2] = "Disposed";
   e[e["AlreadyListening"] = 3] = "AlreadyListening";
  })(v = t.ConnectionErrors || (t.ConnectionErrors = {}));
  var g = function(e) {
   r(t, e);
   function t(n, r) {
    var i = e.call(this, r) || this;
    i.code = n;
    Object.setPrototypeOf(i, t.prototype);
    return i;
   }
   return t;
  }(Error);
  t.ConnectionError = g;
  var y;
  (function(e) {
   function t(e) {
    var t = e;
    return t && o.func(t.cancelUndispatched);
   }
   e.is = t;
  })(y = t.ConnectionStrategy || (t.ConnectionStrategy = {}));
  var b;
  (function(e) {
   e[e["New"] = 1] = "New";
   e[e["Listening"] = 2] = "Listening";
   e[e["Closed"] = 3] = "Closed";
   e[e["Disposed"] = 4] = "Disposed";
  })(b || (b = {}));
  function C(e, t, n, r) {
   var i = 0;
   var a = 0;
   var u = 0;
   var y = "2.0";
   var C = undefined;
   var w = Object.create(null);
   var x = undefined;
   var T = Object.create(null);
   var _;
   var S = new l.LinkedMap();
   var R = Object.create(null);
   var E = Object.create(null);
   var k = h.Off;
   var O;
   var A = b.New;
   var P = new c.Emitter();
   var j = new c.Emitter();
   var M = new c.Emitter();
   var N = new c.Emitter();
   function q(e) {
    return "req-" + e.toString();
   }
   function I(e) {
    if (e === null) {
     return "res-unknown-" + (++u).toString();
    } else {
     return "res-" + e.toString();
    }
   }
   function D() {
    return "not-" + (++a).toString();
   }
   function F(e, t) {
    if (s.isRequestMessage(t)) {
     e.set(q(t.id), t);
    } else if (s.isResponseMessage(t)) {
     e.set(I(t.id), t);
    } else {
     e.set(D(), t);
    }
   }
   function L(e) {
    return undefined;
   }
   function W() {
    return A === b.Listening;
   }
   function V() {
    return A === b.Closed;
   }
   function U() {
    return A === b.Disposed;
   }
   function $() {
    if (A === b.New || A === b.Listening) {
     A = b.Closed;
     j.fire(undefined);
    }
   }
   function z(e) {
    P.fire([ e, undefined, undefined ]);
   }
   function H(e) {
    P.fire(e);
   }
   e.onClose($);
   e.onError(z);
   t.onClose($);
   t.onError(H);
   function B() {
    if (_ || S.size === 0) {
     return;
    }
    _ = setImmediate(function() {
     _ = undefined;
     K();
    });
   }
   function K() {
    if (S.size === 0) {
     return;
    }
    var e = S.shift();
    try {
     if (s.isRequestMessage(e)) {
      G(e);
     } else if (s.isNotificationMessage(e)) {
      Q(e);
     } else if (s.isResponseMessage(e)) {
      Y(e);
     } else {
      Z(e);
     }
    } finally {
     B();
    }
   }
   var J = function(e) {
    try {
     if (s.isNotificationMessage(e) && e.method === d.type.method) {
      var n = q(e.params.id);
      var i = S.get(n);
      if (s.isRequestMessage(i)) {
       var o = r && r.cancelUndispatched ? r.cancelUndispatched(i, L) : L(i);
       if (o && (o.error !== void 0 || o.result !== void 0)) {
        S.delete(n);
        o.id = i.id;
        te(o, e.method, Date.now());
        t.write(o);
        return;
       }
      }
     }
     F(S, e);
    } finally {
     B();
    }
   };
   function G(e) {
    if (U()) {
     return;
    }
    function n(n, r, i) {
     var o = {
      jsonrpc: y,
      id: e.id
     };
     if (n instanceof s.ResponseError) {
      o.error = n.toJson();
     } else {
      o.result = n === void 0 ? null : n;
     }
     te(o, r, i);
     t.write(o);
    }
    function r(n, r, i) {
     var o = {
      jsonrpc: y,
      id: e.id,
      error: n.toJson()
     };
     te(o, r, i);
     t.write(o);
    }
    function i(n, r, i) {
     if (n === void 0) {
      n = null;
     }
     var o = {
      jsonrpc: y,
      id: e.id,
      result: n
     };
     te(o, r, i);
     t.write(o);
    }
    ne(e);
    var a = w[e.method];
    var u;
    var c;
    if (a) {
     u = a.type;
     c = a.handler;
    }
    var l = Date.now();
    if (c || C) {
     var d = new f.CancellationTokenSource();
     var h = String(e.id);
     E[h] = d;
     try {
      var p = void 0;
      if (e.params === void 0 || u !== void 0 && u.numberOfParams === 0) {
       p = c ? c(d.token) : C(e.method, d.token);
      } else if (o.array(e.params) && (u === void 0 || u.numberOfParams > 1)) {
       p = c ? c.apply(void 0, e.params.concat([ d.token ])) : C.apply(void 0, [ e.method ].concat(e.params, [ d.token ]));
      } else {
       p = c ? c(e.params, d.token) : C(e.method, e.params, d.token);
      }
      var m = p;
      if (!p) {
       delete E[h];
       i(p, e.method, l);
      } else if (m.then) {
       m.then(function(t) {
        delete E[h];
        n(t, e.method, l);
       }, function(t) {
        delete E[h];
        if (t instanceof s.ResponseError) {
         r(t, e.method, l);
        } else if (t && o.string(t.message)) {
         r(new s.ResponseError(s.ErrorCodes.InternalError, "Request " + e.method + " failed with message: " + t.message), e.method, l);
        } else {
         r(new s.ResponseError(s.ErrorCodes.InternalError, "Request " + e.method + " failed unexpectedly without providing any details."), e.method, l);
        }
       });
      } else {
       delete E[h];
       n(p, e.method, l);
      }
     } catch (t) {
      delete E[h];
      if (t instanceof s.ResponseError) {
       n(t, e.method, l);
      } else if (t && o.string(t.message)) {
       r(new s.ResponseError(s.ErrorCodes.InternalError, "Request " + e.method + " failed with message: " + t.message), e.method, l);
      } else {
       r(new s.ResponseError(s.ErrorCodes.InternalError, "Request " + e.method + " failed unexpectedly without providing any details."), e.method, l);
      }
     }
    } else {
     r(new s.ResponseError(s.ErrorCodes.MethodNotFound, "Unhandled method " + e.method), e.method, l);
    }
   }
   function Y(e) {
    if (U()) {
     return;
    }
    if (e.id === null) {
     if (e.error) {
      n.error("Received response message without id: Error is: \n" + JSON.stringify(e.error, undefined, 4));
     } else {
      n.error("Received response message without id. No further error information provided.");
     }
    } else {
     var t = String(e.id);
     var r = R[t];
     ie(e, r);
     if (r) {
      delete R[t];
      try {
       if (e.error) {
        var i = e.error;
        r.reject(new s.ResponseError(i.code, i.message, i.data));
       } else if (e.result !== void 0) {
        r.resolve(e.result);
       } else {
        throw new Error("Should never happen.");
       }
      } catch (i) {
       if (i.message) {
        n.error("Response handler '" + r.method + "' failed with message: " + i.message);
       } else {
        n.error("Response handler '" + r.method + "' failed unexpectedly.");
       }
      }
     }
    }
   }
   function Q(e) {
    if (U()) {
     return;
    }
    var t = undefined;
    var r;
    if (e.method === d.type.method) {
     r = function(e) {
      var t = e.id;
      var n = E[String(t)];
      if (n) {
       n.cancel();
      }
     };
    } else {
     var i = T[e.method];
     if (i) {
      r = i.handler;
      t = i.type;
     }
    }
    if (r || x) {
     try {
      re(e);
      if (e.params === void 0 || t !== void 0 && t.numberOfParams === 0) {
       r ? r() : x(e.method);
      } else if (o.array(e.params) && (t === void 0 || t.numberOfParams > 1)) {
       r ? r.apply(void 0, e.params) : x.apply(void 0, [ e.method ].concat(e.params));
      } else {
       r ? r(e.params) : x(e.method, e.params);
      }
     } catch (t) {
      if (t.message) {
       n.error("Notification handler '" + e.method + "' failed with message: " + t.message);
      } else {
       n.error("Notification handler '" + e.method + "' failed unexpectedly.");
      }
     }
    } else {
     M.fire(e);
    }
   }
   function Z(e) {
    if (!e) {
     n.error("Received empty message.");
     return;
    }
    n.error("Received message which is neither a response nor a notification message:\n" + JSON.stringify(e, null, 4));
    var t = e;
    if (o.string(t.id) || o.number(t.id)) {
     var r = String(t.id);
     var i = R[r];
     if (i) {
      i.reject(new Error("The received response has neither a result nor an error property."));
     }
    }
   }
   function X(e) {
    if (k === h.Off || !O) {
     return;
    }
    var t = undefined;
    if (k === h.Verbose && e.params) {
     t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
    }
    O.log("Sending request '" + e.method + " - (" + e.id + ")'.", t);
   }
   function ee(e) {
    if (k === h.Off || !O) {
     return;
    }
    var t = undefined;
    if (k === h.Verbose) {
     if (e.params) {
      t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
     } else {
      t = "No parameters provided.\n\n";
     }
    }
    O.log("Sending notification '" + e.method + "'.", t);
   }
   function te(e, t, n) {
    if (k === h.Off || !O) {
     return;
    }
    var r = undefined;
    if (k === h.Verbose) {
     if (e.error && e.error.data) {
      r = "Error data: " + JSON.stringify(e.error.data, null, 4) + "\n\n";
     } else {
      if (e.result) {
       r = "Result: " + JSON.stringify(e.result, null, 4) + "\n\n";
      } else if (e.error === void 0) {
       r = "No result returned.\n\n";
      }
     }
    }
    O.log("Sending response '" + t + " - (" + e.id + ")'. Processing request took " + (Date.now() - n) + "ms", r);
   }
   function ne(e) {
    if (k === h.Off || !O) {
     return;
    }
    var t = undefined;
    if (k === h.Verbose && e.params) {
     t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
    }
    O.log("Received request '" + e.method + " - (" + e.id + ")'.", t);
   }
   function re(e) {
    if (k === h.Off || !O || e.method === m.type.method) {
     return;
    }
    var t = undefined;
    if (k === h.Verbose) {
     if (e.params) {
      t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
     } else {
      t = "No parameters provided.\n\n";
     }
    }
    O.log("Received notification '" + e.method + "'.", t);
   }
   function ie(e, t) {
    if (k === h.Off || !O) {
     return;
    }
    var n = undefined;
    if (k === h.Verbose) {
     if (e.error && e.error.data) {
      n = "Error data: " + JSON.stringify(e.error.data, null, 4) + "\n\n";
     } else {
      if (e.result) {
       n = "Result: " + JSON.stringify(e.result, null, 4) + "\n\n";
      } else if (e.error === void 0) {
       n = "No result returned.\n\n";
      }
     }
    }
    if (t) {
     var r = e.error ? " Request failed: " + e.error.message + " (" + e.error.code + ")." : "";
     O.log("Received response '" + t.method + " - (" + e.id + ")' in " + (Date.now() - t.timerStart) + "ms." + r, n);
    } else {
     O.log("Received response " + e.id + " without active response promise.", n);
    }
   }
   function oe() {
    if (V()) {
     throw new g(v.Closed, "Connection is closed.");
    }
    if (U()) {
     throw new g(v.Disposed, "Connection is disposed.");
    }
   }
   function se() {
    if (W()) {
     throw new g(v.AlreadyListening, "Connection is already listening");
    }
   }
   function ae() {
    if (!W()) {
     throw new Error("Call listen() first.");
    }
   }
   function ue(e) {
    if (e === void 0) {
     return null;
    } else {
     return e;
    }
   }
   function ce(e, t) {
    var n;
    var r = e.numberOfParams;
    switch (r) {
    case 0:
     n = null;
     break;

    case 1:
     n = ue(t[0]);
     break;

    default:
     n = [];
     for (var i = 0; i < t.length && i < r; i++) {
      n.push(ue(t[i]));
     }
     if (t.length < r) {
      for (var i = t.length; i < r; i++) {
       n.push(null);
      }
     }
     break;
    }
    return n;
   }
   var fe = {
    sendNotification: function(e) {
     var n = [];
     for (var r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
     }
     oe();
     var i;
     var s;
     if (o.string(e)) {
      i = e;
      switch (n.length) {
      case 0:
       s = null;
       break;

      case 1:
       s = n[0];
       break;

      default:
       s = n;
       break;
      }
     } else {
      i = e.method;
      s = ce(e, n);
     }
     var a = {
      jsonrpc: y,
      method: i,
      params: s
     };
     ee(a);
     t.write(a);
    },
    onNotification: function(e, t) {
     oe();
     if (o.func(e)) {
      x = e;
     } else if (t) {
      if (o.string(e)) {
       T[e] = {
        type: undefined,
        handler: t
       };
      } else {
       T[e.method] = {
        type: e,
        handler: t
       };
      }
     }
    },
    sendRequest: function(e) {
     var n = [];
     for (var r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
     }
     oe();
     ae();
     var a;
     var u;
     var c = undefined;
     if (o.string(e)) {
      a = e;
      switch (n.length) {
      case 0:
       u = null;
       break;

      case 1:
       if (f.CancellationToken.is(n[0])) {
        u = null;
        c = n[0];
       } else {
        u = ue(n[0]);
       }
       break;

      default:
       var l = n.length - 1;
       if (f.CancellationToken.is(n[l])) {
        c = n[l];
        if (n.length === 2) {
         u = ue(n[0]);
        } else {
         u = n.slice(0, l).map(function(e) {
          return ue(e);
         });
        }
       } else {
        u = n.map(function(e) {
         return ue(e);
        });
       }
       break;
      }
     } else {
      a = e.method;
      u = ce(e, n);
      var h = e.numberOfParams;
      c = f.CancellationToken.is(n[h]) ? n[h] : undefined;
     }
     var p = i++;
     var m = new Promise(function(e, n) {
      var r = {
       jsonrpc: y,
       id: p,
       method: a,
       params: u
      };
      var i = {
       method: a,
       timerStart: Date.now(),
       resolve: e,
       reject: n
      };
      X(r);
      try {
       t.write(r);
      } catch (e) {
       i.reject(new s.ResponseError(s.ErrorCodes.MessageWriteError, e.message ? e.message : "Unknown reason"));
       i = null;
      }
      if (i) {
       R[String(p)] = i;
      }
     });
     if (c) {
      c.onCancellationRequested(function() {
       fe.sendNotification(d.type, {
        id: p
       });
      });
     }
     return m;
    },
    onRequest: function(e, t) {
     oe();
     if (o.func(e)) {
      C = e;
     } else if (t) {
      if (o.string(e)) {
       w[e] = {
        type: undefined,
        handler: t
       };
      } else {
       w[e.method] = {
        type: e,
        handler: t
       };
      }
     }
    },
    trace: function(e, t, n) {
     if (n === void 0) {
      n = false;
     }
     k = e;
     if (k === h.Off) {
      O = undefined;
     } else {
      O = t;
     }
     if (n && !V() && !U()) {
      fe.sendNotification(p.type, {
       value: h.toString(e)
      });
     }
    },
    onError: P.event,
    onClose: j.event,
    onUnhandledNotification: M.event,
    onDispose: N.event,
    dispose: function() {
     if (U()) {
      return;
     }
     A = b.Disposed;
     N.fire(undefined);
     var n = new Error("Connection got disposed.");
     Object.keys(R).forEach(function(e) {
      R[e].reject(n);
     });
     R = Object.create(null);
     E = Object.create(null);
     S = new l.LinkedMap();
     if (o.func(t.dispose)) {
      t.dispose();
     }
     if (o.func(e.dispose)) {
      e.dispose();
     }
    },
    listen: function() {
     oe();
     se();
     A = b.Listening;
     e.listen(J);
    },
    inspect: function() {
     console.log("inspect");
    }
   };
   fe.onNotification(m.type, function(e) {
    if (k === h.Off || !O) {
     return;
    }
    O.log(e.message, k === h.Verbose ? e.verbose : undefined);
   });
   return fe;
  }
  function w(e) {
   return e.listen !== void 0 && e.read === void 0;
  }
  function x(e) {
   return e.write !== void 0 && e.end === void 0;
  }
  function T(e, n, r, i) {
   if (!r) {
    r = t.NullLogger;
   }
   var o = w(e) ? e : new a.StreamMessageReader(e);
   var s = x(n) ? n : new u.StreamMessageWriter(n);
   return C(o, s, r, i);
  }
  t.createMessageConnection = T;
 },
 COhr: function(e, t, n) {
  "use strict";
  function r(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const i = n("BOov");
  t.Event = i.Event;
  const o = n("Qhc/");
  const s = n("Jf2r");
  const a = n("Krw1");
  const u = n("mz6j");
  r(n("BOov"));
  const c = n("tGke");
  var f;
  (function(e) {
   e.uriToFilePath = c.uriToFilePath;
   e.resolveGlobalNodePath = c.resolveGlobalNodePath;
   e.resolveGlobalYarnPath = c.resolveGlobalYarnPath;
   e.resolve = c.resolve;
   e.resolveModule = c.resolveModule;
   e.resolveModule2 = c.resolveModule2;
   e.resolveModulePath = c.resolveModulePath;
  })(f = t.Files || (t.Files = {}));
  let l = false;
  let d = undefined;
  function h() {
   const e = "--clientProcessId";
   function t(e) {
    try {
     let t = parseInt(e);
     if (!isNaN(t)) {
      d = setInterval(() => {
       try {
        process.kill(t, 0);
       } catch (e) {
        process.exit(l ? 0 : 1);
       }
      }, 3e3);
     }
    } catch (e) {}
   }
   for (let n = 2; n < process.argv.length; n++) {
    let r = process.argv[n];
    if (r === e && n + 1 < process.argv.length) {
     t(process.argv[n + 1]);
     return;
    } else {
     let n = r.split("=");
     if (n[0] === e) {
      t(n[1]);
     }
    }
   }
  }
  h();
  function p(e) {
   if (e === null) {
    return void 0;
   }
   return e;
  }
  class m {
   constructor() {
    this._documents = Object.create(null);
    this._onDidChangeContent = new i.Emitter();
    this._onDidOpen = new i.Emitter();
    this._onDidClose = new i.Emitter();
    this._onDidSave = new i.Emitter();
    this._onWillSave = new i.Emitter();
   }
   get syncKind() {
    return i.TextDocumentSyncKind.Full;
   }
   get onDidChangeContent() {
    return this._onDidChangeContent.event;
   }
   get onDidOpen() {
    return this._onDidOpen.event;
   }
   get onWillSave() {
    return this._onWillSave.event;
   }
   onWillSaveWaitUntil(e) {
    this._willSaveWaitUntil = e;
   }
   get onDidSave() {
    return this._onDidSave.event;
   }
   get onDidClose() {
    return this._onDidClose.event;
   }
   get(e) {
    return this._documents[e];
   }
   all() {
    return Object.keys(this._documents).map(e => this._documents[e]);
   }
   keys() {
    return Object.keys(this._documents);
   }
   listen(e) {
    function t(e) {
     return a.func(e.update);
    }
    e.__textDocumentSync = i.TextDocumentSyncKind.Full;
    e.onDidOpenTextDocument(e => {
     let t = e.textDocument;
     let n = i.TextDocument.create(t.uri, t.languageId, t.version, t.text);
     this._documents[t.uri] = n;
     let r = Object.freeze({
      document: n
     });
     this._onDidOpen.fire(r);
     this._onDidChangeContent.fire(r);
    });
    e.onDidChangeTextDocument(e => {
     let n = e.textDocument;
     let r = e.contentChanges;
     let i = r.length > 0 ? r[r.length - 1] : undefined;
     if (i) {
      let e = this._documents[n.uri];
      if (e && t(e)) {
       if (n.version === null || n.version === void 0) {
        throw new Error(`Recevied document change event for ${n.uri} without valid version identifier`);
       }
       e.update(i, n.version);
       this._onDidChangeContent.fire(Object.freeze({
        document: e
       }));
      }
     }
    });
    e.onDidCloseTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      delete this._documents[e.textDocument.uri];
      this._onDidClose.fire(Object.freeze({
       document: t
      }));
     }
    });
    e.onWillSaveTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      this._onWillSave.fire(Object.freeze({
       document: t,
       reason: e.reason
      }));
     }
    });
    e.onWillSaveTextDocumentWaitUntil((e, t) => {
     let n = this._documents[e.textDocument.uri];
     if (n && this._willSaveWaitUntil) {
      return this._willSaveWaitUntil(Object.freeze({
       document: n,
       reason: e.reason
      }), t);
     } else {
      return [];
     }
    });
    e.onDidSaveTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      this._onDidSave.fire(Object.freeze({
       document: t
      }));
     }
    });
   }
  }
  t.TextDocuments = m;
  class v {
   constructor() {
    this._messages = Object.create(null);
   }
   add(e) {
    let t = this._messages[e];
    if (!t) {
     t = 0;
    }
    t++;
    this._messages[e] = t;
   }
   sendErrors(e) {
    Object.keys(this._messages).forEach(t => {
     e.window.showErrorMessage(t);
    });
   }
  }
  t.ErrorMessageTracker = v;
  var g;
  (function(e) {
   function t() {
    return new y();
   }
   e.create = t;
  })(g = t.BulkRegistration || (t.BulkRegistration = {}));
  class y {
   constructor() {
    this._registrations = [];
    this._registered = new Set();
   }
   add(e, t) {
    const n = a.string(e) ? e : e.method;
    if (this._registered.has(n)) {
     throw new Error(`${n} is already added to this registration`);
    }
    const r = u.generateUuid();
    this._registrations.push({
     id: r,
     method: n,
     registerOptions: t || {}
    });
    this._registered.add(n);
   }
   asRegistrationParams() {
    return {
     registrations: this._registrations
    };
   }
  }
  var b;
  (function(e) {
   function t() {
    return new C(undefined, []);
   }
   e.create = t;
  })(b = t.BulkUnregistration || (t.BulkUnregistration = {}));
  class C {
   constructor(e, t) {
    this._connection = e;
    this._unregistrations = new Map();
    t.forEach(e => {
     this._unregistrations.set(e.method, e);
    });
   }
   get isAttached() {
    return !!this._connection;
   }
   attach(e) {
    this._connection = e;
   }
   add(e) {
    this._unregistrations.set(e.method, e);
   }
   dispose() {
    let e = [];
    for (let t of this._unregistrations.values()) {
     e.push(t);
    }
    let t = {
     unregisterations: e
    };
    this._connection.sendRequest(i.UnregistrationRequest.type, t).then(undefined, e => {
     this._connection.console.info(`Bulk unregistration failed.`);
    });
   }
   disposeSingle(e) {
    const t = a.string(e) ? e : e.method;
    const n = this._unregistrations.get(t);
    if (!n) {
     return false;
    }
    let r = {
     unregisterations: [ n ]
    };
    this._connection.sendRequest(i.UnregistrationRequest.type, r).then(() => {
     this._unregistrations.delete(t);
    }, e => {
     this._connection.console.info(`Unregistering request handler for ${n.id} failed.`);
    });
    return true;
   }
  }
  class w {
   constructor() {}
   rawAttach(e) {
    this._rawConnection = e;
   }
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   fillServerCapabilities(e) {}
   initialize(e) {}
   error(e) {
    this.send(i.MessageType.Error, e);
   }
   warn(e) {
    this.send(i.MessageType.Warning, e);
   }
   info(e) {
    this.send(i.MessageType.Info, e);
   }
   log(e) {
    this.send(i.MessageType.Log, e);
   }
   send(e, t) {
    if (this._rawConnection) {
     this._rawConnection.sendNotification(i.LogMessageNotification.type, {
      type: e,
      message: t
     });
    }
   }
  }
  class x {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   showErrorMessage(e, ...t) {
    let n = {
     type: i.MessageType.Error,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n).then(p);
   }
   showWarningMessage(e, ...t) {
    let n = {
     type: i.MessageType.Warning,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n).then(p);
   }
   showInformationMessage(e, ...t) {
    let n = {
     type: i.MessageType.Info,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n).then(p);
   }
  }
  class T {
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   register(e, t, n) {
    if (e instanceof y) {
     return this.registerMany(e);
    } else if (e instanceof C) {
     return this.registerSingle1(e, t, n);
    } else {
     return this.registerSingle2(e, t);
    }
   }
   registerSingle1(e, t, n) {
    const r = a.string(t) ? t : t.method;
    const o = u.generateUuid();
    let s = {
     registrations: [ {
      id: o,
      method: r,
      registerOptions: n || {}
     } ]
    };
    if (!e.isAttached) {
     e.attach(this._connection);
    }
    return this._connection.sendRequest(i.RegistrationRequest.type, s).then(t => {
     e.add({
      id: o,
      method: r
     });
     return e;
    }, e => {
     this.connection.console.info(`Registering request handler for ${r} failed.`);
     return Promise.reject(e);
    });
   }
   registerSingle2(e, t) {
    const n = a.string(e) ? e : e.method;
    const r = u.generateUuid();
    let o = {
     registrations: [ {
      id: r,
      method: n,
      registerOptions: t || {}
     } ]
    };
    return this._connection.sendRequest(i.RegistrationRequest.type, o).then(e => {
     return i.Disposable.create(() => {
      this.unregisterSingle(r, n);
     });
    }, e => {
     this.connection.console.info(`Registering request handler for ${n} failed.`);
     return Promise.reject(e);
    });
   }
   unregisterSingle(e, t) {
    let n = {
     unregisterations: [ {
      id: e,
      method: t
     } ]
    };
    return this._connection.sendRequest(i.UnregistrationRequest.type, n).then(undefined, t => {
     this.connection.console.info(`Unregistering request handler for ${e} failed.`);
    });
   }
   registerMany(e) {
    let t = e.asRegistrationParams();
    return this._connection.sendRequest(i.RegistrationRequest.type, t).then(() => {
     return new C(this._connection, t.registrations.map(e => {
      return {
       id: e.id,
       method: e.method
      };
     }));
    }, e => {
     this.connection.console.info(`Bulk registration failed.`);
     return Promise.reject(e);
    });
   }
  }
  class _ {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   applyEdit(e) {
    function t(e) {
     return e && !!e.edit;
    }
    let n = t(e) ? e : {
     edit: e
    };
    return this._connection.sendRequest(i.ApplyWorkspaceEditRequest.type, n);
   }
  }
  const S = s.WorkspaceFoldersFeature(o.ConfigurationFeature(_));
  class R {
   constructor() {
    this._trace = i.Trace.Off;
   }
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   set trace(e) {
    this._trace = e;
   }
   log(e, t) {
    if (this._trace === i.Trace.Off) {
     return;
    }
    this._connection.sendNotification(i.LogTraceNotification.type, {
     message: e,
     verbose: this._trace === i.Trace.Verbose ? t : undefined
    });
   }
  }
  class E {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   logEvent(e) {
    this._connection.sendNotification(i.TelemetryEventNotification.type, e);
   }
  }
  function k(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineConsoleFeatures = k;
  function O(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineTelemetryFeatures = O;
  function A(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineTracerFeatures = A;
  function P(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineClientFeatures = P;
  function j(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineWindowFeatures = j;
  function M(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineWorkspaceFeatures = M;
  function N(e, t) {
   function n(e, t, n) {
    if (e && t) {
     return n(e, t);
    } else if (e) {
     return e;
    } else {
     return t;
    }
   }
   let r = {
    __brand: "features",
    console: n(e.console, t.console, k),
    tracer: n(e.tracer, t.tracer, A),
    telemetry: n(e.telemetry, t.telemetry, O),
    client: n(e.client, t.client, P),
    window: n(e.window, t.window, j),
    workspace: n(e.workspace, t.workspace, M)
   };
   return r;
  }
  t.combineFeatures = N;
  function q(e, t, n, r) {
   let o;
   let s;
   let a;
   let u;
   if (e !== void 0 && e.__brand === "features") {
    o = e;
    e = t;
    t = n;
    n = r;
   }
   if (i.ConnectionStrategy.is(e)) {
    u = e;
   } else {
    s = e;
    a = t;
    u = n;
   }
   return I(s, a, u, o);
  }
  t.createConnection = q;
  function I(e, t, n, r) {
   if (!e && !t && process.argv.length > 2) {
    let n = void 0;
    let r = void 0;
    let s = process.argv.slice(2);
    for (let a = 0; a < s.length; a++) {
     let u = s[a];
     if (u === "--node-ipc") {
      e = new i.IPCMessageReader(process);
      t = new i.IPCMessageWriter(process);
      break;
     } else if (u === "--stdio") {
      e = process.stdin;
      t = process.stdout;
      break;
     } else if (u === "--socket") {
      n = parseInt(s[a + 1]);
      break;
     } else if (u === "--pipe") {
      r = s[a + 1];
      break;
     } else {
      var o = u.split("=");
      if (o[0] === "--socket") {
       n = parseInt(o[1]);
       break;
      } else if (o[0] === "--pipe") {
       r = o[1];
       break;
      }
     }
    }
    if (n) {
     let r = i.createServerSocketTransport(n);
     e = r[0];
     t = r[1];
    } else if (r) {
     let n = i.createServerPipeTransport(r);
     e = n[0];
     t = n[1];
    }
   }
   var s = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
   if (!e) {
    throw new Error("Connection input stream is not set. " + s);
   }
   if (!t) {
    throw new Error("Connection output stream is not set. " + s);
   }
   if (a.func(e.read) && a.func(e.on)) {
    let t = e;
    t.on("end", () => {
     process.exit(l ? 0 : 1);
    });
    t.on("close", () => {
     process.exit(l ? 0 : 1);
    });
   }
   const u = r && r.console ? new (r.console(w))() : new w();
   const c = i.createProtocolConnection(e, t, u, n);
   u.rawAttach(c);
   const f = r && r.tracer ? new (r.tracer(R))() : new R();
   const h = r && r.telemetry ? new (r.telemetry(E))() : new E();
   const p = r && r.client ? new (r.client(T))() : new T();
   const m = r && r.window ? new (r.window(x))() : new x();
   const v = r && r.workspace ? new (r.workspace(S))() : new S();
   const g = [ u, f, h, p, m, v ];
   function y(e) {
    if (a.thenable(e)) {
     return e;
    } else {
     return Promise.resolve(e);
    }
   }
   let b = undefined;
   let C = undefined;
   let _ = undefined;
   let k = {
    listen: () => c.listen(),
    sendRequest: (e, ...t) => c.sendRequest(a.string(e) ? e : e.method, ...t),
    onRequest: (e, t) => c.onRequest(e, t),
    sendNotification: (e, t) => {
     const n = a.string(e) ? e : e.method;
     if (arguments.length === 1) {
      c.sendNotification(n);
     } else {
      c.sendNotification(n, t);
     }
    },
    onNotification: (e, t) => c.onNotification(e, t),
    onInitialize: e => C = e,
    onInitialized: e => c.onNotification(i.InitializedNotification.type, e),
    onShutdown: e => b = e,
    onExit: e => _ = e,
    get console() {
     return u;
    },
    get telemetry() {
     return h;
    },
    get tracer() {
     return f;
    },
    get client() {
     return p;
    },
    get window() {
     return m;
    },
    get workspace() {
     return v;
    },
    onDidChangeConfiguration: e => c.onNotification(i.DidChangeConfigurationNotification.type, e),
    onDidChangeWatchedFiles: e => c.onNotification(i.DidChangeWatchedFilesNotification.type, e),
    __textDocumentSync: undefined,
    onDidOpenTextDocument: e => c.onNotification(i.DidOpenTextDocumentNotification.type, e),
    onDidChangeTextDocument: e => c.onNotification(i.DidChangeTextDocumentNotification.type, e),
    onDidCloseTextDocument: e => c.onNotification(i.DidCloseTextDocumentNotification.type, e),
    onWillSaveTextDocument: e => c.onNotification(i.WillSaveTextDocumentNotification.type, e),
    onWillSaveTextDocumentWaitUntil: e => c.onRequest(i.WillSaveTextDocumentWaitUntilRequest.type, e),
    onDidSaveTextDocument: e => c.onNotification(i.DidSaveTextDocumentNotification.type, e),
    sendDiagnostics: e => c.sendNotification(i.PublishDiagnosticsNotification.type, e),
    onHover: e => c.onRequest(i.HoverRequest.type, e),
    onCompletion: e => c.onRequest(i.CompletionRequest.type, e),
    onCompletionResolve: e => c.onRequest(i.CompletionResolveRequest.type, e),
    onSignatureHelp: e => c.onRequest(i.SignatureHelpRequest.type, e),
    onDefinition: e => c.onRequest(i.DefinitionRequest.type, e),
    onTypeDefinition: e => c.onRequest(i.TypeDefinitionRequest.type, e),
    onImplementation: e => c.onRequest(i.ImplementationRequest.type, e),
    onReferences: e => c.onRequest(i.ReferencesRequest.type, e),
    onDocumentHighlight: e => c.onRequest(i.DocumentHighlightRequest.type, e),
    onDocumentSymbol: e => c.onRequest(i.DocumentSymbolRequest.type, e),
    onWorkspaceSymbol: e => c.onRequest(i.WorkspaceSymbolRequest.type, e),
    onCodeAction: e => c.onRequest(i.CodeActionRequest.type, e),
    onCodeLens: e => c.onRequest(i.CodeLensRequest.type, e),
    onCodeLensResolve: e => c.onRequest(i.CodeLensResolveRequest.type, e),
    onDocumentFormatting: e => c.onRequest(i.DocumentFormattingRequest.type, e),
    onDocumentRangeFormatting: e => c.onRequest(i.DocumentRangeFormattingRequest.type, e),
    onDocumentOnTypeFormatting: e => c.onRequest(i.DocumentOnTypeFormattingRequest.type, e),
    onRenameRequest: e => c.onRequest(i.RenameRequest.type, e),
    onDocumentLinks: e => c.onRequest(i.DocumentLinkRequest.type, e),
    onDocumentLinkResolve: e => c.onRequest(i.DocumentLinkResolveRequest.type, e),
    onDocumentColor: e => c.onRequest(i.DocumentColorRequest.type, e),
    onColorPresentation: e => c.onRequest(i.ColorPresentationRequest.type, e),
    onExecuteCommand: e => c.onRequest(i.ExecuteCommandRequest.type, e),
    dispose: () => c.dispose()
   };
   for (let e of g) {
    e.attach(k);
   }
   c.onRequest(i.InitializeRequest.type, e => {
    if (a.number(e.processId) && d === void 0) {
     setInterval(() => {
      try {
       process.kill(e.processId, 0);
      } catch (e) {
       process.exit(l ? 0 : 1);
      }
     }, 3e3);
    }
    if (a.string(e.trace)) {
     f.trace = i.Trace.fromString(e.trace);
    }
    for (let t of g) {
     t.initialize(e.capabilities);
    }
    if (C) {
     let t = C(e, new i.CancellationTokenSource().token);
     return y(t).then(e => {
      if (e instanceof i.ResponseError) {
       return e;
      }
      let t = e;
      if (!t) {
       t = {
        capabilities: {}
       };
      }
      let n = t.capabilities;
      if (!n) {
       n = {};
       t.capabilities = n;
      }
      if (!n.textDocumentSync) {
       n.textDocumentSync = a.number(k.__textDocumentSync) ? k.__textDocumentSync : i.TextDocumentSyncKind.None;
      } else if (!a.number(n.textDocumentSync) && !a.number(n.textDocumentSync.change)) {
       n.textDocumentSync.change = a.number(k.__textDocumentSync) ? k.__textDocumentSync : i.TextDocumentSyncKind.None;
      }
      for (let e of g) {
       e.fillServerCapabilities(n);
      }
      return t;
     });
    } else {
     let e = {
      capabilities: {
       textDocumentSync: i.TextDocumentSyncKind.None
      }
     };
     for (let t of g) {
      t.fillServerCapabilities(e.capabilities);
     }
     return e;
    }
   });
   c.onRequest(i.ShutdownRequest.type, () => {
    l = true;
    if (b) {
     return b(new i.CancellationTokenSource().token);
    } else {
     return undefined;
    }
   });
   c.onNotification(i.ExitNotification.type, () => {
    try {
     if (_) {
      _();
     }
    } finally {
     if (l) {
      process.exit(0);
     } else {
      process.exit(1);
     }
    }
   });
   c.onNotification(i.SetTraceNotification.type, e => {
    f.trace = i.Trace.fromString(e.value);
   });
   return k;
  }
  var D;
  (function(e) {
   e.all = {
    __brand: "features"
   };
  })(D = t.ProposedFeatures || (t.ProposedFeatures = {}));
 },
 CcFB: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C+6V");
  var i;
  (function(e) {
   e.type = new r.RequestType("textDocument/implementation");
  })(i = t.ImplementationRequest || (t.ImplementationRequest = {}));
 },
 E2g8: function(e, t, n) {
  (function(t, n) {
   true ? e.exports = n() : undefined;
  })(this, function() {
   "use strict";
   function e(e) {
    var t = typeof e;
    return e !== null && (t === "object" || t === "function");
   }
   function t(e) {
    return typeof e === "function";
   }
   var n = void 0;
   if (Array.isArray) {
    n = Array.isArray;
   } else {
    n = function(e) {
     return Object.prototype.toString.call(e) === "[object Array]";
    };
   }
   var r = n;
   var i = 0;
   var o = void 0;
   var s = void 0;
   var a = function e(t, n) {
    C[i] = t;
    C[i + 1] = n;
    i += 2;
    if (i === 2) {
     if (s) {
      s(w);
     } else {
      T();
     }
    }
   };
   function u(e) {
    s = e;
   }
   function c(e) {
    a = e;
   }
   var f = typeof window !== "undefined" ? window : undefined;
   var l = f || {};
   var d = l.MutationObserver || l.WebKitMutationObserver;
   var h = typeof self === "undefined" && typeof process !== "undefined" && {}.toString.call(process) === "[object process]";
   var p = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
   function m() {
    return function() {
     return process.nextTick(w);
    };
   }
   function v() {
    if (typeof o !== "undefined") {
     return function() {
      o(w);
     };
    }
    return b();
   }
   function g() {
    var e = 0;
    var t = new d(w);
    var n = document.createTextNode("");
    t.observe(n, {
     characterData: true
    });
    return function() {
     n.data = e = ++e % 2;
    };
   }
   function y() {
    var e = new MessageChannel();
    e.port1.onmessage = w;
    return function() {
     return e.port2.postMessage(0);
    };
   }
   function b() {
    var e = setTimeout;
    return function() {
     return e(w, 1);
    };
   }
   var C = new Array(1e3);
   function w() {
    for (var e = 0; e < i; e += 2) {
     var t = C[e];
     var n = C[e + 1];
     t(n);
     C[e] = undefined;
     C[e + 1] = undefined;
    }
    i = 0;
   }
   function x() {
    try {
     var e = Function("return this")().require("vertx");
     o = e.runOnLoop || e.runOnContext;
     return v();
    } catch (e) {
     return b();
    }
   }
   var T = void 0;
   if (h) {
    T = m();
   } else if (d) {
    T = g();
   } else if (p) {
    T = y();
   } else if (f === undefined && "function" === "function") {
    T = x();
   } else {
    T = b();
   }
   function _(e, t) {
    var n = this;
    var r = new this.constructor(E);
    if (r[R] === undefined) {
     Y(r);
    }
    var i = n._state;
    if (i) {
     var o = arguments[i - 1];
     a(function() {
      return B(i, r, o, n._result);
     });
    } else {
     $(n, r, e, t);
    }
    return r;
   }
   function S(e) {
    var t = this;
    if (e && typeof e === "object" && e.constructor === t) {
     return e;
    }
    var n = new t(E);
    L(n, e);
    return n;
   }
   var R = Math.random().toString(36).substring(2);
   function E() {}
   var k = void 0;
   var O = 1;
   var A = 2;
   var P = {
    error: null
   };
   function j() {
    return new TypeError("You cannot resolve a promise with itself");
   }
   function M() {
    return new TypeError("A promises callback cannot return that same promise.");
   }
   function N(e) {
    try {
     return e.then;
    } catch (e) {
     P.error = e;
     return P;
    }
   }
   function q(e, t, n, r) {
    try {
     e.call(t, n, r);
    } catch (e) {
     return e;
    }
   }
   function I(e, t, n) {
    a(function(e) {
     var r = false;
     var i = q(n, t, function(n) {
      if (r) {
       return;
      }
      r = true;
      if (t !== n) {
       L(e, n);
      } else {
       V(e, n);
      }
     }, function(t) {
      if (r) {
       return;
      }
      r = true;
      U(e, t);
     }, "Settle: " + (e._label || " unknown promise"));
     if (!r && i) {
      r = true;
      U(e, i);
     }
    }, e);
   }
   function D(e, t) {
    if (t._state === O) {
     V(e, t._result);
    } else if (t._state === A) {
     U(e, t._result);
    } else {
     $(t, undefined, function(t) {
      return L(e, t);
     }, function(t) {
      return U(e, t);
     });
    }
   }
   function F(e, n, r) {
    if (n.constructor === e.constructor && r === _ && n.constructor.resolve === S) {
     D(e, n);
    } else {
     if (r === P) {
      U(e, P.error);
      P.error = null;
     } else if (r === undefined) {
      V(e, n);
     } else if (t(r)) {
      I(e, n, r);
     } else {
      V(e, n);
     }
    }
   }
   function L(t, n) {
    if (t === n) {
     U(t, j());
    } else if (e(n)) {
     F(t, n, N(n));
    } else {
     V(t, n);
    }
   }
   function W(e) {
    if (e._onerror) {
     e._onerror(e._result);
    }
    z(e);
   }
   function V(e, t) {
    if (e._state !== k) {
     return;
    }
    e._result = t;
    e._state = O;
    if (e._subscribers.length !== 0) {
     a(z, e);
    }
   }
   function U(e, t) {
    if (e._state !== k) {
     return;
    }
    e._state = A;
    e._result = t;
    a(W, e);
   }
   function $(e, t, n, r) {
    var i = e._subscribers;
    var o = i.length;
    e._onerror = null;
    i[o] = t;
    i[o + O] = n;
    i[o + A] = r;
    if (o === 0 && e._state) {
     a(z, e);
    }
   }
   function z(e) {
    var t = e._subscribers;
    var n = e._state;
    if (t.length === 0) {
     return;
    }
    var r = void 0, i = void 0, o = e._result;
    for (var s = 0; s < t.length; s += 3) {
     r = t[s];
     i = t[s + n];
     if (r) {
      B(n, r, i, o);
     } else {
      i(o);
     }
    }
    e._subscribers.length = 0;
   }
   function H(e, t) {
    try {
     return e(t);
    } catch (e) {
     P.error = e;
     return P;
    }
   }
   function B(e, n, r, i) {
    var o = t(r), s = void 0, a = void 0, u = void 0, c = void 0;
    if (o) {
     s = H(r, i);
     if (s === P) {
      c = true;
      a = s.error;
      s.error = null;
     } else {
      u = true;
     }
     if (n === s) {
      U(n, M());
      return;
     }
    } else {
     s = i;
     u = true;
    }
    if (n._state !== k) {} else if (o && u) {
     L(n, s);
    } else if (c) {
     U(n, a);
    } else if (e === O) {
     V(n, s);
    } else if (e === A) {
     U(n, s);
    }
   }
   function K(e, t) {
    try {
     t(function t(n) {
      L(e, n);
     }, function t(n) {
      U(e, n);
     });
    } catch (t) {
     U(e, t);
    }
   }
   var J = 0;
   function G() {
    return J++;
   }
   function Y(e) {
    e[R] = J++;
    e._state = undefined;
    e._result = undefined;
    e._subscribers = [];
   }
   function Q() {
    return new Error("Array Methods must be provided an Array");
   }
   var Z = function() {
    function e(e, t) {
     this._instanceConstructor = e;
     this.promise = new e(E);
     if (!this.promise[R]) {
      Y(this.promise);
     }
     if (r(t)) {
      this.length = t.length;
      this._remaining = t.length;
      this._result = new Array(this.length);
      if (this.length === 0) {
       V(this.promise, this._result);
      } else {
       this.length = this.length || 0;
       this._enumerate(t);
       if (this._remaining === 0) {
        V(this.promise, this._result);
       }
      }
     } else {
      U(this.promise, Q());
     }
    }
    e.prototype._enumerate = function e(t) {
     for (var n = 0; this._state === k && n < t.length; n++) {
      this._eachEntry(t[n], n);
     }
    };
    e.prototype._eachEntry = function e(t, n) {
     var r = this._instanceConstructor;
     var i = r.resolve;
     if (i === S) {
      var o = N(t);
      if (o === _ && t._state !== k) {
       this._settledAt(t._state, n, t._result);
      } else if (typeof o !== "function") {
       this._remaining--;
       this._result[n] = t;
      } else if (r === ie) {
       var s = new r(E);
       F(s, t, o);
       this._willSettleAt(s, n);
      } else {
       this._willSettleAt(new r(function(e) {
        return e(t);
       }), n);
      }
     } else {
      this._willSettleAt(i(t), n);
     }
    };
    e.prototype._settledAt = function e(t, n, r) {
     var i = this.promise;
     if (i._state === k) {
      this._remaining--;
      if (t === A) {
       U(i, r);
      } else {
       this._result[n] = r;
      }
     }
     if (this._remaining === 0) {
      V(i, this._result);
     }
    };
    e.prototype._willSettleAt = function e(t, n) {
     var r = this;
     $(t, undefined, function(e) {
      return r._settledAt(O, n, e);
     }, function(e) {
      return r._settledAt(A, n, e);
     });
    };
    return e;
   }();
   function X(e) {
    return new Z(this, e).promise;
   }
   function ee(e) {
    var t = this;
    if (!r(e)) {
     return new t(function(e, t) {
      return t(new TypeError("You must pass an array to race."));
     });
    } else {
     return new t(function(n, r) {
      var i = e.length;
      for (var o = 0; o < i; o++) {
       t.resolve(e[o]).then(n, r);
      }
     });
    }
   }
   function te(e) {
    var t = this;
    var n = new t(E);
    U(n, e);
    return n;
   }
   function ne() {
    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
   }
   function re() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
   }
   var ie = function() {
    function e(t) {
     this[R] = G();
     this._result = this._state = undefined;
     this._subscribers = [];
     if (E !== t) {
      typeof t !== "function" && ne();
      this instanceof e ? K(this, t) : re();
     }
    }
    e.prototype.catch = function e(t) {
     return this.then(null, t);
    };
    e.prototype.finally = function e(t) {
     var n = this;
     var r = n.constructor;
     return n.then(function(e) {
      return r.resolve(t()).then(function() {
       return e;
      });
     }, function(e) {
      return r.resolve(t()).then(function() {
       throw e;
      });
     });
    };
    return e;
   }();
   ie.prototype.then = _;
   ie.all = X;
   ie.race = ee;
   ie.resolve = S;
   ie.reject = te;
   ie._setScheduler = u;
   ie._setAsap = c;
   ie._asap = a;
   function oe() {
    var e = void 0;
    if (typeof global !== "undefined") {
     e = global;
    } else if (typeof self !== "undefined") {
     e = self;
    } else {
     try {
      e = Function("return this")();
     } catch (e) {
      throw new Error("polyfill failed because global object is unavailable in this environment");
     }
    }
    var t = e.Promise;
    if (t) {
     var n = null;
     try {
      n = Object.prototype.toString.call(t.resolve());
     } catch (e) {}
     if (n === "[object Promise]" && !t.cast) {
      return;
     }
    }
    e.Promise = ie;
   }
   ie.polyfill = oe;
   ie.Promise = ie;
   return ie;
  });
 },
 EcMe: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("COhr");
  var i = n("L90F");
  var o = n("UmV5");
  function s(e, t, n) {
   var s = [];
   var a = [];
   var u = [];
   var c = -1;
   var f = i.createScanner(e.getText(), false);
   var l = f.scan();
   function d(e) {
    s.push(e);
    a.push(u.length);
   }
   while (l !== 17) {
    if (n && n.isCancellationRequested) {
     return null;
    }
    switch (l) {
    case 1:
    case 3:
     {
      var h = e.positionAt(f.getTokenOffset()).line;
      var p = {
       startLine: h,
       endLine: h,
       type: l === 1 ? "object" : "array"
      };
      u.push(p);
      break;
     }

    case 2:
    case 4:
     {
      var m = l === 2 ? "object" : "array";
      if (u.length > 0 && u[u.length - 1].type === m) {
       var p = u.pop();
       var v = e.positionAt(f.getTokenOffset()).line;
       if (p && v > p.startLine + 1 && c !== p.startLine) {
        p.endLine = v - 1;
        d(p);
        c = p.startLine;
       }
      }
      break;
     }

    case 13:
     {
      var h = e.positionAt(f.getTokenOffset()).line;
      var g = e.positionAt(f.getTokenOffset() + f.getTokenLength()).line;
      if (f.getTokenError() === 1 && h + 1 < e.lineCount) {
       f.setPosition(e.offsetAt(r.Position.create(h + 1, 0)));
      } else {
       if (h < g) {
        d({
         startLine: h,
         endLine: g,
         type: o.FoldingRangeType.Comment
        });
        c = h;
       }
      }
      break;
     }

    case 12:
     {
      var y = e.getText().substr(f.getTokenOffset(), f.getTokenLength());
      var b = y.match(/^\/\/\s*#(region\b)|(endregion\b)/);
      if (b) {
       var v = e.positionAt(f.getTokenOffset()).line;
       if (b[1]) {
        var p = {
         startLine: v,
         endLine: v,
         type: o.FoldingRangeType.Region
        };
        u.push(p);
       } else {
        var C = u.length - 1;
        while (C >= 0 && u[C].type !== o.FoldingRangeType.Region) {
         C--;
        }
        if (C >= 0) {
         var p = u[C];
         u.length = C;
         if (v > p.startLine && c !== p.startLine) {
          p.endLine = v;
          d(p);
          c = p.startLine;
         }
        }
       }
      }
      break;
     }
    }
    l = f.scan();
   }
   if (t && s.length > t) {
    var w = [];
    for (var x = 0, T = a; x < T.length; x++) {
     var _ = T[x];
     if (_ < 30) {
      w[_] = (w[_] || 0) + 1;
     }
    }
    var S = 0;
    var R = 0;
    for (var C = 0; C < w.length; C++) {
     var E = w[C];
     if (E) {
      if (E + S > t) {
       R = C;
       break;
      }
      S += E;
     }
    }
    s = s.filter(function(e, t) {
     return a[t] < R;
    });
   }
   return {
    ranges: s
   };
  }
  t.getFoldingRegions = s;
 },
 FGiv: function(e, t) {
  var n = 1e3;
  var r = n * 60;
  var i = r * 60;
  var o = i * 24;
  var s = o * 365.25;
  e.exports = function(e, t) {
   t = t || {};
   var n = typeof e;
   if (n === "string" && e.length > 0) {
    return a(e);
   } else if (n === "number" && isNaN(e) === false) {
    return t.long ? c(e) : u(e);
   }
   throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
  };
  function a(e) {
   e = String(e);
   if (e.length > 100) {
    return;
   }
   var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
   if (!t) {
    return;
   }
   var a = parseFloat(t[1]);
   var u = (t[2] || "ms").toLowerCase();
   switch (u) {
   case "years":
   case "year":
   case "yrs":
   case "yr":
   case "y":
    return a * s;

   case "days":
   case "day":
   case "d":
    return a * o;

   case "hours":
   case "hour":
   case "hrs":
   case "hr":
   case "h":
    return a * i;

   case "minutes":
   case "minute":
   case "mins":
   case "min":
   case "m":
    return a * r;

   case "seconds":
   case "second":
   case "secs":
   case "sec":
   case "s":
    return a * n;

   case "milliseconds":
   case "millisecond":
   case "msecs":
   case "msec":
   case "ms":
    return a;

   default:
    return undefined;
   }
  }
  function u(e) {
   if (e >= o) {
    return Math.round(e / o) + "d";
   }
   if (e >= i) {
    return Math.round(e / i) + "h";
   }
   if (e >= r) {
    return Math.round(e / r) + "m";
   }
   if (e >= n) {
    return Math.round(e / n) + "s";
   }
   return e + "ms";
  }
  function c(e) {
   return f(e, o, "day") || f(e, i, "hour") || f(e, r, "minute") || f(e, n, "second") || e + " ms";
  }
  function f(e, t, n) {
   if (e < t) {
    return;
   }
   if (e < t * 1.5) {
    return Math.floor(e / t) + " " + n;
   }
   return Math.ceil(e / t) + " " + n + "s";
  }
 },
 FMKJ: function(e, t) {
  e.exports = require("zlib");
 },
 Ff8q: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("Z5Ki");
  var i = n("1vg8");
  var o;
  (function(e) {
   e.None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: r.Event.None
   });
   e.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: r.Event.None
   });
   function t(t) {
    var n = t;
    return n && (n === e.None || n === e.Cancelled || i.boolean(n.isCancellationRequested) && !!n.onCancellationRequested);
   }
   e.is = t;
  })(o = t.CancellationToken || (t.CancellationToken = {}));
  var s = Object.freeze(function(e, t) {
   var n = setTimeout(e.bind(t), 0);
   return {
    dispose: function() {
     clearTimeout(n);
    }
   };
  });
  var a = function() {
   function e() {
    this._isCancelled = false;
   }
   e.prototype.cancel = function() {
    if (!this._isCancelled) {
     this._isCancelled = true;
     if (this._emitter) {
      this._emitter.fire(undefined);
      this._emitter = undefined;
     }
    }
   };
   Object.defineProperty(e.prototype, "isCancellationRequested", {
    get: function() {
     return this._isCancelled;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "onCancellationRequested", {
    get: function() {
     if (this._isCancelled) {
      return s;
     }
     if (!this._emitter) {
      this._emitter = new r.Emitter();
     }
     return this._emitter.event;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var u = function() {
   function e() {}
   Object.defineProperty(e.prototype, "token", {
    get: function() {
     if (!this._token) {
      this._token = new a();
     }
     return this._token;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.cancel = function() {
    if (!this._token) {
     this._token = o.Cancelled;
    } else {
     this._token.cancel();
    }
   };
   e.prototype.dispose = function() {
    this.cancel();
   };
   return e;
  }();
  t.CancellationTokenSource = u;
 },
 Jf2r: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("BOov");
  t.WorkspaceFoldersFeature = (e => {
   return class extends e {
    initialize(e) {
     let t = e.workspace;
     if (t && t.workspaceFolders) {
      this._onDidChangeWorkspaceFolders = new r.Emitter();
      this.connection.onNotification(r.DidChangeWorkspaceFoldersNotification.type, e => {
       this._onDidChangeWorkspaceFolders.fire(e.event);
      });
     }
    }
    getWorkspaceFolders() {
     return this.connection.sendRequest(r.WorkspaceFoldersRequest.type);
    }
    get onDidChangeWorkspaceFolders() {
     if (!this._onDidChangeWorkspaceFolders) {
      throw new Error("Client doesn't support sending workspace folder change events.");
     }
     if (!this._unregistration) {
      this._unregistration = this.connection.client.register(r.DidChangeWorkspaceFoldersNotification.type);
     }
     return this._onDidChangeWorkspaceFolders.event;
    }
   };
  });
 },
 KEll: function(e, t) {
  e.exports = require("http");
 },
 KWJ0: function(e, t, n) {
  var r = n("Qs2e");
  var i = n("ugmf");
  var o = n("bzos");
  var s = n("TDAU");
  var a = n("jK02").inherits;
  var u = n("QWwp")("https-proxy-agent");
  e.exports = c;
  function c(e) {
   if (!(this instanceof c)) return new c(e);
   if ("string" == typeof e) e = o.parse(e);
   if (!e) throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
   u("creating new HttpsProxyAgent instance: %o", e);
   s.call(this, e);
   var t = Object.assign({}, e);
   this.secureProxy = t.protocol ? /^https:?$/i.test(t.protocol) : false;
   t.host = t.hostname || t.host;
   t.port = +t.port || (this.secureProxy ? 443 : 80);
   if (this.secureProxy && !("ALPNProtocols" in t)) {
    t.ALPNProtocols = [ "http 1.1" ];
   }
   if (t.host && t.path) {
    delete t.path;
    delete t.pathname;
   }
   this.proxy = t;
   this.defaultPort = 443;
  }
  a(c, s);
  c.prototype.callback = function e(t, n, o) {
   var s = this.proxy;
   var a;
   if (this.secureProxy) {
    a = i.connect(s);
   } else {
    a = r.connect(s);
   }
   var c = [];
   var l = 0;
   function d() {
    var e = a.read();
    if (e) g(e); else a.once("readable", d);
   }
   function h() {
    a.removeListener("data", g);
    a.removeListener("end", m);
    a.removeListener("error", v);
    a.removeListener("close", p);
    a.removeListener("readable", d);
   }
   function p(e) {
    u("onclose had error %o", e);
   }
   function m() {
    u("onend");
   }
   function v(e) {
    h();
    o(e);
   }
   function g(e) {
    c.push(e);
    l += e.length;
    var r = Buffer.concat(c, l);
    var s = r.toString("ascii");
    if (!~s.indexOf("\r\n\r\n")) {
     u("have not received end of HTTP headers yet...");
     if (a.read) {
      d();
     } else {
      a.once("data", g);
     }
     return;
    }
    var f = s.substring(0, s.indexOf("\r\n"));
    var p = +f.split(" ")[1];
    u("got proxy server response: %o", f);
    if (200 == p) {
     var m = a;
     c = r = null;
     if (n.secureEndpoint) {
      u("upgrading proxy-connected socket to TLS connection: %o", n.host);
      n.socket = a;
      n.servername = n.servername || n.host;
      n.host = null;
      n.hostname = null;
      n.port = null;
      m = i.connect(n);
     }
     h();
     o(null, m);
    } else {
     h();
     c = r;
     t.once("socket", y);
     o(null, a);
    }
   }
   function y(e) {
    if ("function" == typeof e.ondata) {
     e.ondata(c, 0, c.length);
    } else if (e.listeners("data").length > 0) {
     e.emit("data", c);
    } else {
     throw new Error("should not happen...");
    }
    c = null;
   }
   a.on("error", v);
   a.on("close", p);
   a.on("end", m);
   if (a.read) {
    d();
   } else {
    a.once("data", g);
   }
   var b = n.host + ":" + n.port;
   var C = "CONNECT " + b + " HTTP/1.1\r\n";
   var w = Object.assign({}, s.headers);
   if (s.auth) {
    w["Proxy-Authorization"] = "Basic " + Buffer.from(s.auth).toString("base64");
   }
   var x = n.host;
   if (!f(n.port, n.secureEndpoint)) {
    x += ":" + n.port;
   }
   w["Host"] = x;
   w["Connection"] = "close";
   Object.keys(w).forEach(function(e) {
    C += e + ": " + w[e] + "\r\n";
   });
   a.write(C + "\r\n");
  };
  function f(e, t) {
   return Boolean(!t && e === 80 || t && e === 443);
  }
 },
 Krw1: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = Object.prototype.toString;
  function i(e) {
   return typeof e !== "undefined";
  }
  t.defined = i;
  function o(e) {
   return typeof e === "undefined";
  }
  t.undefined = o;
  function s(e) {
   return e === null;
  }
  t.nil = s;
  function a(e) {
   return e === true || e === false;
  }
  t.boolean = a;
  function u(e) {
   return r.call(e) === "[object String]";
  }
  t.string = u;
  function c(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = c;
  function f(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = f;
  function l(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = l;
  function d(e) {
   return Array.isArray(e);
  }
  t.array = d;
  function h(e) {
   return d(e) && e.every(e => u(e));
  }
  t.stringArray = h;
  function p(e, t) {
   return Array.isArray(e) && e.every(t);
  }
  t.typedArray = p;
  function m(e) {
   return e && l(e.then);
  }
  t.thenable = m;
 },
 L90F: function(e, t, n) {
  "use strict";
  n.r(t);
  function r(e, t) {
   if (t === void 0) {
    t = false;
   }
   var n = 0, r = e.length, a = "", u = 0, c = 16, f = 0;
   function l(t, r) {
    var i = 0;
    var o = 0;
    while (i < t || !r) {
     var s = e.charCodeAt(n);
     if (s >= 48 && s <= 57) {
      o = o * 16 + s - 48;
     } else if (s >= 65 && s <= 70) {
      o = o * 16 + s - 65 + 10;
     } else if (s >= 97 && s <= 102) {
      o = o * 16 + s - 97 + 10;
     } else {
      break;
     }
     n++;
     i++;
    }
    if (i < t) {
     o = -1;
    }
    return o;
   }
   function d(e) {
    n = e;
    a = "";
    u = 0;
    c = 16;
    f = 0;
   }
   function h() {
    var t = n;
    if (e.charCodeAt(n) === 48) {
     n++;
    } else {
     n++;
     while (n < e.length && s(e.charCodeAt(n))) {
      n++;
     }
    }
    if (n < e.length && e.charCodeAt(n) === 46) {
     n++;
     if (n < e.length && s(e.charCodeAt(n))) {
      n++;
      while (n < e.length && s(e.charCodeAt(n))) {
       n++;
      }
     } else {
      f = 3;
      return e.substring(t, n);
     }
    }
    var r = n;
    if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) {
     n++;
     if (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) {
      n++;
     }
     if (n < e.length && s(e.charCodeAt(n))) {
      n++;
      while (n < e.length && s(e.charCodeAt(n))) {
       n++;
      }
      r = n;
     } else {
      f = 3;
     }
    }
    return e.substring(t, r);
   }
   function p() {
    var t = "", i = n;
    while (true) {
     if (n >= r) {
      t += e.substring(i, n);
      f = 2;
      break;
     }
     var s = e.charCodeAt(n);
     if (s === 34) {
      t += e.substring(i, n);
      n++;
      break;
     }
     if (s === 92) {
      t += e.substring(i, n);
      n++;
      if (n >= r) {
       f = 2;
       break;
      }
      s = e.charCodeAt(n++);
      switch (s) {
      case 34:
       t += '"';
       break;

      case 92:
       t += "\\";
       break;

      case 47:
       t += "/";
       break;

      case 98:
       t += "\b";
       break;

      case 102:
       t += "\f";
       break;

      case 110:
       t += "\n";
       break;

      case 114:
       t += "\r";
       break;

      case 116:
       t += "\t";
       break;

      case 117:
       var a = l(4, true);
       if (a >= 0) {
        t += String.fromCharCode(a);
       } else {
        f = 4;
       }
       break;

      default:
       f = 5;
      }
      i = n;
      continue;
     }
     if (s >= 0 && s <= 31) {
      if (o(s)) {
       t += e.substring(i, n);
       f = 2;
       break;
      } else {
       f = 6;
      }
     }
     n++;
    }
    return t;
   }
   function m() {
    a = "";
    f = 0;
    u = n;
    if (n >= r) {
     u = r;
     return c = 17;
    }
    var t = e.charCodeAt(n);
    if (i(t)) {
     do {
      n++;
      a += String.fromCharCode(t);
      t = e.charCodeAt(n);
     } while (i(t));
     return c = 15;
    }
    if (o(t)) {
     n++;
     a += String.fromCharCode(t);
     if (t === 13 && e.charCodeAt(n) === 10) {
      n++;
      a += "\n";
     }
     return c = 14;
    }
    switch (t) {
    case 123:
     n++;
     return c = 1;

    case 125:
     n++;
     return c = 2;

    case 91:
     n++;
     return c = 3;

    case 93:
     n++;
     return c = 4;

    case 58:
     n++;
     return c = 6;

    case 44:
     n++;
     return c = 5;

    case 34:
     n++;
     a = p();
     return c = 10;

    case 47:
     var l = n - 1;
     if (e.charCodeAt(n + 1) === 47) {
      n += 2;
      while (n < r) {
       if (o(e.charCodeAt(n))) {
        break;
       }
       n++;
      }
      a = e.substring(l, n);
      return c = 12;
     }
     if (e.charCodeAt(n + 1) === 42) {
      n += 2;
      var d = false;
      while (n < r) {
       var m = e.charCodeAt(n);
       if (m === 42 && n + 1 < r && e.charCodeAt(n + 1) === 47) {
        n += 2;
        d = true;
        break;
       }
       n++;
      }
      if (!d) {
       n++;
       f = 1;
      }
      a = e.substring(l, n);
      return c = 13;
     }
     a += String.fromCharCode(t);
     n++;
     return c = 16;

    case 45:
     a += String.fromCharCode(t);
     n++;
     if (n === r || !s(e.charCodeAt(n))) {
      return c = 16;
     }

    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
     a += h();
     return c = 11;

    default:
     while (n < r && v(t)) {
      n++;
      t = e.charCodeAt(n);
     }
     if (u !== n) {
      a = e.substring(u, n);
      switch (a) {
      case "true":
       return c = 8;

      case "false":
       return c = 9;

      case "null":
       return c = 7;
      }
      return c = 16;
     }
     a += String.fromCharCode(t);
     n++;
     return c = 16;
    }
   }
   function v(e) {
    if (i(e) || o(e)) {
     return false;
    }
    switch (e) {
    case 125:
    case 93:
    case 123:
    case 91:
    case 34:
    case 58:
    case 44:
     return false;
    }
    return true;
   }
   function g() {
    var e;
    do {
     e = m();
    } while (e >= 12 && e <= 15);
    return e;
   }
   return {
    setPosition: d,
    getPosition: function() {
     return n;
    },
    scan: t ? g : m,
    getToken: function() {
     return c;
    },
    getTokenValue: function() {
     return a;
    },
    getTokenOffset: function() {
     return u;
    },
    getTokenLength: function() {
     return n - u;
    },
    getTokenError: function() {
     return f;
    }
   };
  }
  function i(e) {
   return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
  }
  function o(e) {
   return e === 10 || e === 13 || e === 8232 || e === 8233;
  }
  function s(e) {
   return e >= 48 && e <= 57;
  }
  function a(e, t, n) {
   var i;
   var o;
   var s;
   var a;
   var d;
   if (t) {
    a = t.offset;
    d = a + t.length;
    s = a;
    while (s > 0 && !l(e, s - 1)) {
     s--;
    }
    var h = d;
    while (h < e.length && !l(e, h)) {
     h++;
    }
    o = e.substring(s, h);
    i = c(o, n);
   } else {
    o = e;
    i = 0;
    s = 0;
    a = 0;
    d = e.length;
   }
   var p = f(n, e);
   var m = false;
   var v = 0;
   var g;
   if (n.insertSpaces) {
    g = u(" ", n.tabSize || 4);
   } else {
    g = "\t";
   }
   var y = r(o, false);
   var b = false;
   function C() {
    return p + u(g, i + v);
   }
   function w() {
    var e = y.scan();
    m = false;
    while (e === 15 || e === 14) {
     m = m || e === 14;
     e = y.scan();
    }
    b = e === 16 || y.getTokenError() !== 0;
    return e;
   }
   var x = [];
   function T(t, n, r) {
    if (!b && n < d && r > a && e.substring(n, r) !== t) {
     x.push({
      offset: n,
      length: r - n,
      content: t
     });
    }
   }
   var _ = w();
   if (_ !== 17) {
    var S = y.getTokenOffset() + s;
    var R = u(g, i);
    T(R, s, S);
   }
   while (_ !== 17) {
    var E = y.getTokenOffset() + y.getTokenLength() + s;
    var k = w();
    var O = "";
    while (!m && (k === 12 || k === 13)) {
     var A = y.getTokenOffset() + s;
     T(" ", E, A);
     E = y.getTokenOffset() + y.getTokenLength() + s;
     O = k === 12 ? C() : "";
     k = w();
    }
    if (k === 2) {
     if (_ !== 1) {
      v--;
      O = C();
     }
    } else if (k === 4) {
     if (_ !== 3) {
      v--;
      O = C();
     }
    } else {
     switch (_) {
     case 3:
     case 1:
      v++;
      O = C();
      break;

     case 5:
     case 12:
      O = C();
      break;

     case 13:
      if (m) {
       O = C();
      } else {
       O = " ";
      }
      break;

     case 6:
      O = " ";
      break;

     case 10:
      if (k === 6) {
       O = "";
       break;
      }

     case 7:
     case 8:
     case 9:
     case 11:
     case 2:
     case 4:
      if (k === 12 || k === 13) {
       O = " ";
      } else if (k !== 5 && k !== 17) {
       b = true;
      }
      break;

     case 16:
      b = true;
      break;
     }
     if (m && (k === 12 || k === 13)) {
      O = C();
     }
    }
    var P = y.getTokenOffset() + s;
    T(O, E, P);
    _ = k;
   }
   return x;
  }
  function u(e, t) {
   var n = "";
   for (var r = 0; r < t; r++) {
    n += e;
   }
   return n;
  }
  function c(e, t) {
   var n = 0;
   var r = 0;
   var i = t.tabSize || 4;
   while (n < e.length) {
    var o = e.charAt(n);
    if (o === " ") {
     r++;
    } else if (o === "\t") {
     r += i;
    } else {
     break;
    }
    n++;
   }
   return Math.floor(r / i);
  }
  function f(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t.charAt(n);
    if (r === "\r") {
     if (n + 1 < t.length && t.charAt(n + 1) === "\n") {
      return "\r\n";
     }
     return "\r";
    } else if (r === "\n") {
     return "\n";
    }
   }
   return e && e.eol || "\n";
  }
  function l(e, t) {
   return "\r\n".indexOf(e.charAt(t)) !== -1;
  }
  function d(e, t) {
   var n = [];
   var r = new Object();
   var i = void 0;
   var o = {
    value: {},
    offset: 0,
    length: 0,
    type: "object",
    parent: void 0
   };
   var s = false;
   function a(e, t, n, r) {
    o.value = e;
    o.offset = t;
    o.length = n;
    o.type = r;
    o.colonOffset = void 0;
    i = o;
   }
   try {
    C(e, {
     onObjectBegin: function(e, o) {
      if (t <= e) {
       throw r;
      }
      i = void 0;
      s = t > e;
      n.push("");
     },
     onObjectProperty: function(e, i, o) {
      if (t < i) {
       throw r;
      }
      a(e, i, o, "property");
      n[n.length - 1] = e;
      if (t <= i + o) {
       throw r;
      }
     },
     onObjectEnd: function(e, o) {
      if (t <= e) {
       throw r;
      }
      i = void 0;
      n.pop();
     },
     onArrayBegin: function(e, o) {
      if (t <= e) {
       throw r;
      }
      i = void 0;
      n.push(0);
     },
     onArrayEnd: function(e, o) {
      if (t <= e) {
       throw r;
      }
      i = void 0;
      n.pop();
     },
     onLiteralValue: function(e, n, i) {
      if (t < n) {
       throw r;
      }
      a(e, n, i, x(e));
      if (t <= n + i) {
       throw r;
      }
     },
     onSeparator: function(e, o, a) {
      if (t <= o) {
       throw r;
      }
      if (e === ":" && i && i.type === "property") {
       i.colonOffset = o;
       s = false;
       i = void 0;
      } else if (e === ",") {
       var u = n[n.length - 1];
       if (typeof u === "number") {
        n[n.length - 1] = u + 1;
       } else {
        s = true;
        n[n.length - 1] = "";
       }
       i = void 0;
      }
     }
    });
   } catch (e) {
    if (e !== r) {
     throw e;
    }
   }
   return {
    path: n,
    previousNode: i,
    isAtPropertyKey: s,
    matches: function(e) {
     var t = 0;
     for (var r = 0; t < e.length && r < n.length; r++) {
      if (e[t] === n[r] || e[t] === "*") {
       t++;
      } else if (e[t] !== "**") {
       return false;
      }
     }
     return t === e.length;
    }
   };
  }
  function h(e, t, n) {
   if (t === void 0) {
    t = [];
   }
   var r = null;
   var i = [];
   var o = [];
   function s(e) {
    if (Array.isArray(i)) {
     i.push(e);
    } else if (r) {
     i[r] = e;
    }
   }
   var a = {
    onObjectBegin: function() {
     var e = {};
     s(e);
     o.push(i);
     i = e;
     r = null;
    },
    onObjectProperty: function(e) {
     r = e;
    },
    onObjectEnd: function() {
     i = o.pop();
    },
    onArrayBegin: function() {
     var e = [];
     s(e);
     o.push(i);
     i = e;
     r = null;
    },
    onArrayEnd: function() {
     i = o.pop();
    },
    onLiteralValue: s,
    onError: function(e, n, r) {
     t.push({
      error: e,
      offset: n,
      length: r
     });
    }
   };
   C(e, a, n);
   return i[0];
  }
  function p(e, t, n) {
   if (t === void 0) {
    t = [];
   }
   var r = {
    type: "array",
    offset: -1,
    length: -1,
    children: [],
    parent: void 0
   };
   function i(e) {
    if (r.type === "property") {
     r.length = e - r.offset;
     r = r.parent;
    }
   }
   function o(e) {
    r.children.push(e);
    return e;
   }
   var s = {
    onObjectBegin: function(e) {
     r = o({
      type: "object",
      offset: e,
      length: -1,
      parent: r,
      children: []
     });
    },
    onObjectProperty: function(e, t, n) {
     r = o({
      type: "property",
      offset: t,
      length: -1,
      parent: r,
      children: []
     });
     r.children.push({
      type: "string",
      value: e,
      offset: t,
      length: n,
      parent: r
     });
    },
    onObjectEnd: function(e, t) {
     r.length = e + t - r.offset;
     r = r.parent;
     i(e + t);
    },
    onArrayBegin: function(e, t) {
     r = o({
      type: "array",
      offset: e,
      length: -1,
      parent: r,
      children: []
     });
    },
    onArrayEnd: function(e, t) {
     r.length = e + t - r.offset;
     r = r.parent;
     i(e + t);
    },
    onLiteralValue: function(e, t, n) {
     o({
      type: x(e),
      offset: t,
      length: n,
      parent: r,
      value: e
     });
     i(t + n);
    },
    onSeparator: function(e, t, n) {
     if (r.type === "property") {
      if (e === ":") {
       r.colonOffset = t;
      } else if (e === ",") {
       i(t);
      }
     }
    },
    onError: function(e, n, r) {
     t.push({
      error: e,
      offset: n,
      length: r
     });
    }
   };
   C(e, s, n);
   var a = r.children[0];
   if (a) {
    delete a.parent;
   }
   return a;
  }
  function m(e, t) {
   if (!e) {
    return void 0;
   }
   var n = e;
   for (var r = 0, i = t; r < i.length; r++) {
    var o = i[r];
    if (typeof o === "string") {
     if (n.type !== "object" || !Array.isArray(n.children)) {
      return void 0;
     }
     var s = false;
     for (var a = 0, u = n.children; a < u.length; a++) {
      var c = u[a];
      if (Array.isArray(c.children) && c.children[0].value === o) {
       n = c.children[1];
       s = true;
       break;
      }
     }
     if (!s) {
      return void 0;
     }
    } else {
     var f = o;
     if (n.type !== "array" || f < 0 || !Array.isArray(n.children) || f >= n.children.length) {
      return void 0;
     }
     n = n.children[f];
    }
   }
   return n;
  }
  function v(e) {
   if (!e.parent || !e.parent.children) {
    return [];
   }
   var t = v(e.parent);
   if (e.parent.type === "property") {
    var n = e.parent.children[0].value;
    t.push(n);
   } else if (e.parent.type === "array") {
    var r = e.parent.children.indexOf(e);
    if (r !== -1) {
     t.push(r);
    }
   }
   return t;
  }
  function g(e) {
   switch (e.type) {
   case "array":
    return e.children.map(g);

   case "object":
    var t = Object.create(null);
    for (var n = 0, r = e.children; n < r.length; n++) {
     var i = r[n];
     var o = i.children[1];
     if (o) {
      t[i.children[0].value] = g(o);
     }
    }
    return t;

   case "null":
   case "string":
   case "number":
   case "boolean":
    return e.value;

   default:
    return void 0;
   }
  }
  function y(e, t, n) {
   if (n === void 0) {
    n = false;
   }
   return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
  }
  function b(e, t, n) {
   if (n === void 0) {
    n = false;
   }
   if (y(e, t, n)) {
    var r = e.children;
    if (Array.isArray(r)) {
     for (var i = 0; i < r.length && r[i].offset <= t; i++) {
      var o = b(r[i], t, n);
      if (o) {
       return o;
      }
     }
    }
    return e;
   }
   return void 0;
  }
  function C(e, t, n) {
   var i = r(e, false);
   function o(e) {
    return e ? function() {
     return e(i.getTokenOffset(), i.getTokenLength());
    } : function() {
     return true;
    };
   }
   function s(e) {
    return e ? function(t) {
     return e(t, i.getTokenOffset(), i.getTokenLength());
    } : function() {
     return true;
    };
   }
   var a = o(t.onObjectBegin), u = s(t.onObjectProperty), c = o(t.onObjectEnd), f = o(t.onArrayBegin), l = o(t.onArrayEnd), d = s(t.onLiteralValue), h = s(t.onSeparator), p = o(t.onComment), m = s(t.onError);
   var v = n && n.disallowComments;
   var g = n && n.allowTrailingComma;
   function y() {
    while (true) {
     var e = i.scan();
     switch (i.getTokenError()) {
     case 4:
      b(14);
      break;

     case 5:
      b(15);
      break;

     case 3:
      b(13);
      break;

     case 1:
      if (!v) {
       b(11);
      }
      break;

     case 2:
      b(12);
      break;

     case 6:
      b(16);
      break;
     }
     switch (e) {
     case 12:
     case 13:
      if (v) {
       b(10);
      } else {
       p();
      }
      break;

     case 16:
      b(1);
      break;

     case 15:
     case 14:
      break;

     default:
      return e;
     }
    }
   }
   function b(e, t, n) {
    if (t === void 0) {
     t = [];
    }
    if (n === void 0) {
     n = [];
    }
    m(e);
    if (t.length + n.length > 0) {
     var r = i.getToken();
     while (r !== 17) {
      if (t.indexOf(r) !== -1) {
       y();
       break;
      } else if (n.indexOf(r) !== -1) {
       break;
      }
      r = y();
     }
    }
   }
   function C(e) {
    var t = i.getTokenValue();
    if (e) {
     d(t);
    } else {
     u(t);
    }
    y();
    return true;
   }
   function w() {
    switch (i.getToken()) {
    case 11:
     var e = 0;
     try {
      e = JSON.parse(i.getTokenValue());
      if (typeof e !== "number") {
       b(2);
       e = 0;
      }
     } catch (e) {
      b(2);
     }
     d(e);
     break;

    case 7:
     d(null);
     break;

    case 8:
     d(true);
     break;

    case 9:
     d(false);
     break;

    default:
     return false;
    }
    y();
    return true;
   }
   function x() {
    if (i.getToken() !== 10) {
     b(3, [], [ 2, 5 ]);
     return false;
    }
    C(false);
    if (i.getToken() === 6) {
     h(":");
     y();
     if (!S()) {
      b(4, [], [ 2, 5 ]);
     }
    } else {
     b(5, [], [ 2, 5 ]);
    }
    return true;
   }
   function T() {
    a();
    y();
    var e = false;
    while (i.getToken() !== 2 && i.getToken() !== 17) {
     if (i.getToken() === 5) {
      if (!e) {
       b(4, [], []);
      }
      h(",");
      y();
      if (i.getToken() === 2 && g) {
       break;
      }
     } else if (e) {
      b(6, [], []);
     }
     if (!x()) {
      b(4, [], [ 2, 5 ]);
     }
     e = true;
    }
    c();
    if (i.getToken() !== 2) {
     b(7, [ 2 ], []);
    } else {
     y();
    }
    return true;
   }
   function _() {
    f();
    y();
    var e = false;
    while (i.getToken() !== 4 && i.getToken() !== 17) {
     if (i.getToken() === 5) {
      if (!e) {
       b(4, [], []);
      }
      h(",");
      y();
      if (i.getToken() === 4 && g) {
       break;
      }
     } else if (e) {
      b(6, [], []);
     }
     if (!S()) {
      b(4, [], [ 4, 5 ]);
     }
     e = true;
    }
    l();
    if (i.getToken() !== 4) {
     b(8, [ 4 ], []);
    } else {
     y();
    }
    return true;
   }
   function S() {
    switch (i.getToken()) {
    case 3:
     return _();

    case 1:
     return T();

    case 10:
     return C(true);

    default:
     return w();
    }
   }
   y();
   if (i.getToken() === 17) {
    return true;
   }
   if (!S()) {
    b(4, [], []);
    return false;
   }
   if (i.getToken() !== 17) {
    b(9, [], []);
   }
   return true;
  }
  function w(e, t) {
   var n = r(e), i = [], o, s = 0, a;
   do {
    a = n.getPosition();
    o = n.scan();
    switch (o) {
    case 12:
    case 13:
    case 17:
     if (s !== a) {
      i.push(e.substring(s, a));
     }
     if (t !== void 0) {
      i.push(n.getTokenValue().replace(/[^\r\n]/g, t));
     }
     s = n.getPosition();
     break;
    }
   } while (o !== 17);
   return i.join("");
  }
  function x(e) {
   switch (typeof e) {
   case "boolean":
    return "boolean";

   case "number":
    return "number";

   case "string":
    return "string";

   default:
    return "null";
   }
  }
  function T(e, t, n) {
   return _(e, t, void 0, n);
  }
  function _(e, t, n, r, i) {
   var o = [];
   var s = p(e, o);
   var a = void 0;
   var u = void 0;
   while (t.length > 0) {
    u = t.pop();
    a = m(s, t);
    if (a === void 0 && n !== void 0) {
     if (typeof u === "string") {
      n = (R = {}, R[u] = n, R);
     } else {
      n = [ n ];
     }
    } else {
     break;
    }
   }
   if (!a) {
    if (n === void 0) {
     throw new Error("Can not delete in empty document");
    }
    return S(e, {
     offset: s ? s.offset : 0,
     length: s ? s.length : 0,
     content: JSON.stringify(n)
    }, r);
   } else if (a.type === "object" && typeof u === "string" && Array.isArray(a.children)) {
    var c = m(a, [ u ]);
    if (c !== void 0) {
     if (n === void 0) {
      if (!c.parent) {
       throw new Error("Malformed AST");
      }
      var f = a.children.indexOf(c.parent);
      var l = void 0;
      var d = c.parent.offset + c.parent.length;
      if (f > 0) {
       var h = a.children[f - 1];
       l = h.offset + h.length;
      } else {
       l = a.offset + 1;
       if (a.children.length > 1) {
        var v = a.children[1];
        d = v.offset;
       }
      }
      return S(e, {
       offset: l,
       length: d - l,
       content: ""
      }, r);
     } else {
      return S(e, {
       offset: c.offset,
       length: c.length,
       content: JSON.stringify(n)
      }, r);
     }
    } else {
     if (n === void 0) {
      return [];
     }
     var g = JSON.stringify(u) + ": " + JSON.stringify(n);
     var y = i ? i(a.children.map(function(e) {
      return e.children[0].value;
     })) : a.children.length;
     var b = void 0;
     if (y > 0) {
      var h = a.children[y - 1];
      b = {
       offset: h.offset + h.length,
       length: 0,
       content: "," + g
      };
     } else if (a.children.length === 0) {
      b = {
       offset: a.offset + 1,
       length: 0,
       content: g
      };
     } else {
      b = {
       offset: a.offset + 1,
       length: 0,
       content: g + ","
      };
     }
     return S(e, b, r);
    }
   } else if (a.type === "array" && typeof u === "number" && Array.isArray(a.children)) {
    var C = u;
    if (C === -1) {
     var g = "" + JSON.stringify(n);
     var b = void 0;
     if (a.children.length === 0) {
      b = {
       offset: a.offset + 1,
       length: 0,
       content: g
      };
     } else {
      var h = a.children[a.children.length - 1];
      b = {
       offset: h.offset + h.length,
       length: 0,
       content: "," + g
      };
     }
     return S(e, b, r);
    } else {
     if (n === void 0 && a.children.length >= 0) {
      var w = u;
      var x = a.children[w];
      var b = void 0;
      if (a.children.length === 1) {
       b = {
        offset: a.offset + 1,
        length: a.length - 2,
        content: ""
       };
      } else if (a.children.length - 1 === w) {
       var h = a.children[w - 1];
       var T = h.offset + h.length;
       var _ = a.offset + a.length;
       b = {
        offset: T,
        length: _ - 2 - T,
        content: ""
       };
      } else {
       b = {
        offset: x.offset,
        length: a.children[w + 1].offset - x.offset,
        content: ""
       };
      }
      return S(e, b, r);
     } else {
      throw new Error("Array modification not supported yet");
     }
    }
   } else {
    throw new Error("Can not add " + (typeof u !== "number" ? "index" : "property") + " to parent of type " + a.type);
   }
   var R;
  }
  function S(e, t, n) {
   var r = R(e, t);
   var i = t.offset;
   var o = t.offset + t.content.length;
   if (t.length === 0 || t.content.length === 0) {
    while (i > 0 && !l(r, i - 1)) {
     i--;
    }
    while (o < r.length && !l(r, o)) {
     o++;
    }
   }
   var s = a(r, {
    offset: i,
    length: o - i
   }, n);
   for (var u = s.length - 1; u >= 0; u--) {
    var c = s[u];
    r = R(r, c);
    i = Math.min(i, c.offset);
    o = Math.max(o, c.offset + c.length);
    o += c.content.length - c.length;
   }
   var f = e.length - (r.length - o) - i;
   return [ {
    offset: i,
    length: f,
    content: r.substring(i, o)
   } ];
  }
  function R(e, t) {
   return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
  }
  function E(e, t) {
   return "\r\n \t".indexOf(e.charAt(t)) !== -1;
  }
  n.d(t, "createScanner", function() {
   return k;
  });
  n.d(t, "getLocation", function() {
   return O;
  });
  n.d(t, "parse", function() {
   return A;
  });
  n.d(t, "parseTree", function() {
   return P;
  });
  n.d(t, "findNodeAtLocation", function() {
   return j;
  });
  n.d(t, "findNodeAtOffset", function() {
   return M;
  });
  n.d(t, "getNodePath", function() {
   return N;
  });
  n.d(t, "getNodeValue", function() {
   return q;
  });
  n.d(t, "visit", function() {
   return I;
  });
  n.d(t, "stripComments", function() {
   return D;
  });
  n.d(t, "format", function() {
   return F;
  });
  n.d(t, "modify", function() {
   return L;
  });
  n.d(t, "applyEdits", function() {
   return W;
  });
  var k = r;
  var O = d;
  var A = h;
  var P = p;
  var j = m;
  var M = b;
  var N = v;
  var q = g;
  var I = C;
  var D = w;
  function F(e, t, n) {
   return a(e, t, n);
  }
  function L(e, t, n, r) {
   return _(e, t, n, r.formattingOptions, r.getInsertionIndex);
  }
  function W(e, t) {
   for (var n = t.length - 1; n >= 0; n--) {
    e = R(e, t[n]);
   }
   return e;
  }
 },
 MxNS: function(e, t) {
  function n(e) {
   return require(e);
  }
  n.keys = function() {
   return [];
  };
  n.resolve = require.resolve;
  e.exports = n;
  n.id = "MxNS";
 },
 NOtv: function(e, t, n) {
  t = e.exports = n("lv48");
  t.log = o;
  t.formatArgs = i;
  t.save = s;
  t.load = a;
  t.useColors = r;
  t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u();
  t.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];
  function r() {
   if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
    return true;
   }
   if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
   }
   return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  t.formatters.j = function(e) {
   try {
    return JSON.stringify(e);
   } catch (e) {
    return "[UnexpectedJSONParseError]: " + e.message;
   }
  };
  function i(e) {
   var n = this.useColors;
   e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff);
   if (!n) return;
   var r = "color: " + this.color;
   e.splice(1, 0, r, "color: inherit");
   var i = 0;
   var o = 0;
   e[0].replace(/%[a-zA-Z%]/g, function(e) {
    if ("%%" === e) return;
    i++;
    if ("%c" === e) {
     o = i;
    }
   });
   e.splice(o, 0, r);
  }
  function o() {
   return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function s(e) {
   try {
    if (null == e) {
     t.storage.removeItem("debug");
    } else {
     t.storage.debug = e;
    }
   } catch (e) {}
  }
  function a() {
   var e;
   try {
    e = t.storage.debug;
   } catch (e) {}
   if (!e && typeof process !== "undefined" && "env" in process) {
    e = process.env.DEBUG;
   }
   return e;
  }
  t.enable(a());
  function u() {
   try {
    return window.localStorage;
   } catch (e) {}
  }
 },
 PJMN: function(e, t) {
  e.exports = require("crypto");
 },
 QWwp: function(e, t, n) {
  if (typeof process === "undefined" || process.type === "renderer") {
   e.exports = n("NOtv");
  } else {
   e.exports = n("YSYp");
  }
 },
 QduZ: function(e, t) {
  e.exports = require("child_process");
 },
 "Qhc/": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("BOov");
  const i = n("Krw1");
  t.ConfigurationFeature = (e => {
   return class extends e {
    getConfiguration(e) {
     if (!e) {
      return this._getConfiguration({});
     } else if (i.string(e)) {
      return this._getConfiguration({
       section: e
      });
     } else {
      return this._getConfiguration(e);
     }
    }
    _getConfiguration(e) {
     let t = {
      items: Array.isArray(e) ? e : [ e ]
     };
     return this.connection.sendRequest(r.ConfigurationRequest.type, t).then(t => {
      return Array.isArray(e) ? t : t[0];
     });
    }
   };
  });
 },
 Qs2e: function(e, t) {
  e.exports = require("net");
 },
 R1Vu: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("COhr");
  var i = n("xbEh");
  var o = n("mw/K");
  var s = n("hde3");
  var a = n("bzos");
  var u = n("fkef");
  var c = n("c6sn");
  var f = n("mH9/");
  var l = n("d4UN");
  var d = n("EcMe");
  var h = n("UmV5");
  var p;
  (function(e) {
   e.type = new r.NotificationType("json/schemaAssociations");
  })(p || (p = {}));
  var m;
  (function(e) {
   e.type = new r.RequestType("vscode/content");
  })(m || (m = {}));
  var v;
  (function(e) {
   e.type = new r.NotificationType("json/schemaContent");
  })(v || (v = {}));
  var g = r.createConnection();
  process.on("unhandledRejection", function(e) {
   console.error(c.formatError("Unhandled exception", e));
  });
  process.on("uncaughtException", function(e) {
   console.error(c.formatError("Unhandled exception", e));
  });
  console.log = g.console.log.bind(g.console);
  console.error = g.console.error.bind(g.console);
  var y = new r.TextDocuments();
  y.listen(g);
  var b = false;
  var C = false;
  g.onInitialize(function(e) {
   function t() {
    var t = [];
    for (var n = 0; n < arguments.length; n++) {
     t[n] = arguments[n];
    }
    var r = e.capabilities;
    for (var i = 0; r && i < t.length; i++) {
     r = r[t[i]];
    }
    return !!r;
   }
   b = t("textDocument", "completion", "completionItem", "snippetSupport");
   C = t("workspace", "symbol", "dynamicRegistration");
   var n = {
    textDocumentSync: y.syncKind,
    completionProvider: b ? {
     resolveProvider: true,
     triggerCharacters: [ '"', ":" ]
    } : void 0,
    hoverProvider: true,
    documentSymbolProvider: true,
    documentRangeFormattingProvider: false,
    colorProvider: true,
    foldingProvider: true
   };
   return {
    capabilities: n
   };
  });
  var w = {
   resolveRelativePath: function(e, t) {
    return a.resolve(t, e);
   }
  };
  var x = function(e) {
   if (u.startsWith(e, "file://")) {
    var t = s.default.parse(e).fsPath;
    return new Promise(function(e, n) {
     o.readFile(t, "UTF-8", function(t, r) {
      t ? n("") : e(r.toString());
     });
    });
   } else if (u.startsWith(e, "vscode://")) {
    return g.sendRequest(m.type, e).then(function(e) {
     return e;
    }, function(e) {
     return Promise.reject(e.message);
    });
   }
   if (e.indexOf("//schema.management.azure.com/") !== -1) {
    g.telemetry.logEvent({
     key: "json.schema",
     value: {
      schemaURL: e
     }
    });
   }
   var n = {
    "Accept-Encoding": "gzip, deflate"
   };
   return i.xhr({
    url: e,
    followRedirects: 5,
    headers: n
   }).then(function(e) {
    return e.responseText;
   }, function(e) {
    return Promise.reject(e.responseText || i.getErrorStatusDescription(e.status) || e.toString());
   });
  };
  var T = f.getLanguageService({
   schemaRequestService: x,
   workspaceContext: w,
   contributions: []
  });
  var _ = void 0;
  var S = void 0;
  var R = null;
  g.onDidChangeConfiguration(function(e) {
   var t = e.settings;
   i.configure(t.http && t.http.proxy, t.http && t.http.proxyStrictSSL);
   _ = t.json && t.json.schemas;
   E();
   if (C) {
    var n = t && t.json && t.json.format && t.json.format.enable;
    if (n) {
     if (!R) {
      R = g.client.register(r.DocumentRangeFormattingRequest.type, {
       documentSelector: [ {
        language: "json"
       }, {
        language: "jsonc"
       } ]
      });
     }
    } else if (R) {
     R.then(function(e) {
      return e.dispose();
     });
     R = null;
    }
   }
  });
  g.onNotification(p.type, function(e) {
   S = e;
   E();
  });
  g.onNotification(v.type, function(e) {
   T.resetSchema(e);
  });
  function E() {
   var e = {
    validate: true,
    allowComments: true,
    schemas: new Array()
   };
   if (S) {
    for (var t in S) {
     var n = S[t];
     if (Array.isArray(n)) {
      n.forEach(function(n) {
       e.schemas.push({
        uri: n,
        fileMatch: [ t ]
       });
      });
     }
    }
   }
   if (_) {
    _.forEach(function(t, n) {
     var r = t.url;
     if (!r && t.schema) {
      r = t.schema.id || "vscode://schemas/custom/" + n;
     }
     if (r) {
      e.schemas.push({
       uri: r,
       fileMatch: t.fileMatch,
       schema: t.schema
      });
     }
    });
   }
   T.configure(e);
   y.all().forEach(P);
  }
  y.onDidChangeContent(function(e) {
   P(e.document);
  });
  y.onDidClose(function(e) {
   A(e.document);
   g.sendDiagnostics({
    uri: e.document.uri,
    diagnostics: []
   });
  });
  var k = {};
  var O = 500;
  function A(e) {
   var t = k[e.uri];
   if (t) {
    clearTimeout(t);
    delete k[e.uri];
   }
  }
  function P(e) {
   A(e);
   k[e.uri] = setTimeout(function() {
    delete k[e.uri];
    j(e);
   }, O);
  }
  function j(e) {
   if (e.getText().length === 0) {
    g.sendDiagnostics({
     uri: e.uri,
     diagnostics: []
    });
    return;
   }
   var t = N(e);
   var n = e.version;
   var r = e.languageId === "jsonc" ? {
    comments: "ignore",
    trailingCommas: "ignore"
   } : {
    comments: "error",
    trailingCommas: "error"
   };
   T.doValidation(e, t, r).then(function(t) {
    setTimeout(function() {
     var r = y.get(e.uri);
     if (r && r.version === n) {
      g.sendDiagnostics({
       uri: e.uri,
       diagnostics: t
      });
     }
    }, 100);
   }, function(t) {
    g.console.error(c.formatError("Error while validating " + e.uri, t));
   });
  }
  g.onDidChangeWatchedFiles(function(e) {
   var t = false;
   e.changes.forEach(function(e) {
    if (T.resetSchema(e.uri)) {
     t = true;
    }
   });
   if (t) {
    y.all().forEach(P);
   }
  });
  var M = l.getLanguageModelCache(10, 60, function(e) {
   return T.parseJSONDocument(e);
  });
  y.onDidClose(function(e) {
   M.onDocumentRemoved(e.document);
  });
  g.onShutdown(function() {
   M.dispose();
  });
  function N(e) {
   return M.get(e);
  }
  g.onCompletion(function(e, t) {
   return c.runSafeAsync(function() {
    var t = y.get(e.textDocument.uri);
    var n = N(t);
    return T.doComplete(t, e.position, n);
   }, null, "Error while computing completions for " + e.textDocument.uri, t);
  });
  g.onCompletionResolve(function(e, t) {
   return c.runSafeAsync(function() {
    return T.doResolve(e);
   }, e, "Error while resolving completion proposal", t);
  });
  g.onHover(function(e, t) {
   return c.runSafeAsync(function() {
    var t = y.get(e.textDocument.uri);
    var n = N(t);
    return T.doHover(t, e.position, n);
   }, null, "Error while computing hover for " + e.textDocument.uri, t);
  });
  g.onDocumentSymbol(function(e, t) {
   return c.runSafe(function() {
    var t = y.get(e.textDocument.uri);
    var n = N(t);
    return T.findDocumentSymbols(t, n);
   }, [], "Error while computing document symbols for " + e.textDocument.uri, t);
  });
  g.onDocumentRangeFormatting(function(e, t) {
   return c.runSafe(function() {
    var t = y.get(e.textDocument.uri);
    return T.format(t, e.range, e.options);
   }, [], "Error while formatting range for " + e.textDocument.uri, t);
  });
  g.onDocumentColor(function(e, t) {
   return c.runSafeAsync(function() {
    var t = y.get(e.textDocument.uri);
    if (t) {
     var n = N(t);
     return T.findDocumentColors(t, n);
    }
    return Promise.resolve([]);
   }, [], "Error while computing document colors for " + e.textDocument.uri, t);
  });
  g.onColorPresentation(function(e, t) {
   return c.runSafe(function() {
    var t = y.get(e.textDocument.uri);
    if (t) {
     var n = N(t);
     return T.getColorPresentations(t, n, e.color, e.range);
    }
    return [];
   }, [], "Error while computing color presentations for " + e.textDocument.uri, t);
  });
  g.onRequest(h.FoldingRangesRequest.type, function(e, t) {
   return c.runSafe(function() {
    var n = y.get(e.textDocument.uri);
    if (n) {
     return d.getFoldingRegions(n, e.maxRanges, t);
    }
    return null;
   }, null, "Error while computing folding ranges for " + e.textDocument.uri, t);
  });
  g.listen();
 },
 TDAU: function(e, t, n) {
  "use strict";
  n("+21m");
  const r = n("jK02").inherits;
  const i = n("AyFj");
  const o = n("/0p4").EventEmitter;
  e.exports = a;
  function s(e) {
   return e && typeof e.addRequest === "function";
  }
  function a(e, t) {
   if (!(this instanceof a)) {
    return new a(e, t);
   }
   o.call(this);
   this._promisifiedCallback = false;
   let n = t;
   if ("function" === typeof e) {
    this.callback = e;
   } else if (e) {
    n = e;
   }
   this.timeout = n && n.timeout || null;
   this.options = n;
  }
  r(a, o);
  a.prototype.callback = function e(t, n) {
   throw new Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
  };
  a.prototype.addRequest = function e(t, n) {
   const r = Object.assign({}, n);
   if (null == r.host) {
    r.host = "localhost";
   }
   if (null == r.port) {
    r.port = r.secureEndpoint ? 443 : 80;
   }
   const o = Object.assign({}, this.options, r);
   if (o.host && o.path) {
    delete o.path;
   }
   delete o.agent;
   delete o.hostname;
   delete o._defaultAgent;
   delete o.defaultPort;
   delete o.createConnection;
   t._last = true;
   t.shouldKeepAlive = false;
   let a;
   let u = false;
   const c = this.timeout;
   function f(e) {
    if (t._hadError) return;
    t.emit("error", e);
    t._hadError = true;
   }
   function l() {
    a = null;
    u = true;
    const e = new Error('A "socket" was not created for HTTP request before ' + c + "ms");
    e.code = "ETIMEOUT";
    f(e);
   }
   function d(e) {
    if (u) return;
    if (a != null) {
     clearTimeout(a);
     a = null;
    }
    f(e);
   }
   function h(e) {
    if (u) return;
    if (a != null) {
     clearTimeout(a);
     a = null;
    }
    if (s(e)) {
     e.addRequest(t, o);
    } else if (e) {
     t.onSocket(e);
    } else {
     const e = new Error(`no Duplex stream was returned to agent-base for \`${t.method} ${t.path}\``);
     f(e);
    }
   }
   if (!this._promisifiedCallback && this.callback.length >= 3) {
    this.callback = i(this.callback, this);
    this._promisifiedCallback = true;
   }
   if (c > 0) {
    a = setTimeout(l, c);
   }
   try {
    Promise.resolve(this.callback(t, o)).then(h, d);
   } catch (e) {
    Promise.reject(e).catch(d);
   }
  };
 },
 UNVE: function(e, t) {
  e.exports = require("tty");
 },
 UmV5: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("BOov");
  var i;
  (function(e) {
   e["Comment"] = "comment";
   e["Imports"] = "imports";
   e["Region"] = "region";
  })(i = t.FoldingRangeType || (t.FoldingRangeType = {}));
  var o;
  (function(e) {
   e.type = new r.RequestType("textDocument/foldingRanges");
  })(o = t.FoldingRangesRequest || (t.FoldingRangesRequest = {}));
 },
 VqZt: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C+6V");
  var i;
  (function(e) {
   e.type = new r.RequestType0("workspace/workspaceFolders");
  })(i = t.WorkspaceFoldersRequest || (t.WorkspaceFoldersRequest = {}));
  var o;
  (function(e) {
   e.type = new r.NotificationType("workspace/didChangeWorkspaceFolders");
  })(o = t.DidChangeWorkspaceFoldersNotification || (t.DidChangeWorkspaceFoldersNotification = {}));
 },
 X5QW: function(e, t, n) {
  "use strict";
  e.exports = ((e, t) => {
   t = t || process.argv;
   const n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--";
   const r = t.indexOf(n + e);
   const i = t.indexOf("--");
   return r !== -1 && (i === -1 ? true : r < i);
  });
 },
 YSYp: function(e, t, n) {
  var r = n("UNVE");
  var i = n("jK02");
  t = e.exports = n("lv48");
  t.init = d;
  t.log = c;
  t.formatArgs = a;
  t.save = f;
  t.load = l;
  t.useColors = s;
  t.colors = [ 6, 2, 3, 4, 5, 1 ];
  try {
   var o = n("bAum");
   if (o && o.level >= 2) {
    t.colors = [ 20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221 ];
   }
  } catch (e) {}
  t.inspectOpts = Object.keys(process.env).filter(function(e) {
   return /^debug_/i.test(e);
  }).reduce(function(e, t) {
   var n = t.substring(6).toLowerCase().replace(/_([a-z])/g, function(e, t) {
    return t.toUpperCase();
   });
   var r = process.env[t];
   if (/^(yes|on|true|enabled)$/i.test(r)) r = true; else if (/^(no|off|false|disabled)$/i.test(r)) r = false; else if (r === "null") r = null; else r = Number(r);
   e[n] = r;
   return e;
  }, {});
  function s() {
   return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : r.isatty(process.stderr.fd);
  }
  t.formatters.o = function(e) {
   this.inspectOpts.colors = this.useColors;
   return i.inspect(e, this.inspectOpts).split("\n").map(function(e) {
    return e.trim();
   }).join(" ");
  };
  t.formatters.O = function(e) {
   this.inspectOpts.colors = this.useColors;
   return i.inspect(e, this.inspectOpts);
  };
  function a(e) {
   var n = this.namespace;
   var r = this.useColors;
   if (r) {
    var i = this.color;
    var o = "[3" + (i < 8 ? i : "8;5;" + i);
    var s = "  " + o + ";1m" + n + " " + "[0m";
    e[0] = s + e[0].split("\n").join("\n" + s);
    e.push(o + "m+" + t.humanize(this.diff) + "[0m");
   } else {
    e[0] = u() + n + " " + e[0];
   }
  }
  function u() {
   if (t.inspectOpts.hideDate) {
    return "";
   } else {
    return new Date().toISOString() + " ";
   }
  }
  function c() {
   return process.stderr.write(i.format.apply(i, arguments) + "\n");
  }
  function f(e) {
   if (null == e) {
    delete process.env.DEBUG;
   } else {
    process.env.DEBUG = e;
   }
  }
  function l() {
   return process.env.DEBUG;
  }
  function d(e) {
   e.inspectOpts = {};
   var n = Object.keys(t.inspectOpts);
   for (var r = 0; r < n.length; r++) {
    e.inspectOpts[n[r]] = t.inspectOpts[n[r]];
   }
  }
  t.enable(l());
 },
 Z5Ki: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r;
  (function(e) {
   function t(e) {
    return {
     dispose: e
    };
   }
   e.create = t;
  })(r = t.Disposable || (t.Disposable = {}));
  var i;
  (function(e) {
   var t = {
    dispose: function() {}
   };
   e.None = function() {
    return t;
   };
  })(i = t.Event || (t.Event = {}));
  var o = function() {
   function e() {}
   e.prototype.add = function(e, t, n) {
    var r = this;
    if (t === void 0) {
     t = null;
    }
    if (!this._callbacks) {
     this._callbacks = [];
     this._contexts = [];
    }
    this._callbacks.push(e);
    this._contexts.push(t);
    if (Array.isArray(n)) {
     n.push({
      dispose: function() {
       return r.remove(e, t);
      }
     });
    }
   };
   e.prototype.remove = function(e, t) {
    if (t === void 0) {
     t = null;
    }
    if (!this._callbacks) {
     return;
    }
    var n = false;
    for (var r = 0, i = this._callbacks.length; r < i; r++) {
     if (this._callbacks[r] === e) {
      if (this._contexts[r] === t) {
       this._callbacks.splice(r, 1);
       this._contexts.splice(r, 1);
       return;
      } else {
       n = true;
      }
     }
    }
    if (n) {
     throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
   };
   e.prototype.invoke = function() {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
     e[t] = arguments[t];
    }
    if (!this._callbacks) {
     return [];
    }
    var n = [], r = this._callbacks.slice(0), i = this._contexts.slice(0);
    for (var o = 0, s = r.length; o < s; o++) {
     try {
      n.push(r[o].apply(i[o], e));
     } catch (e) {
      console.error(e);
     }
    }
    return n;
   };
   e.prototype.isEmpty = function() {
    return !this._callbacks || this._callbacks.length === 0;
   };
   e.prototype.dispose = function() {
    this._callbacks = undefined;
    this._contexts = undefined;
   };
   return e;
  }();
  var s = function() {
   function e(e) {
    this._options = e;
   }
   Object.defineProperty(e.prototype, "event", {
    get: function() {
     var t = this;
     if (!this._event) {
      this._event = function(n, r, i) {
       if (!t._callbacks) {
        t._callbacks = new o();
       }
       if (t._options && t._options.onFirstListenerAdd && t._callbacks.isEmpty()) {
        t._options.onFirstListenerAdd(t);
       }
       t._callbacks.add(n, r);
       var s;
       s = {
        dispose: function() {
         t._callbacks.remove(n, r);
         s.dispose = e._noop;
         if (t._options && t._options.onLastListenerRemove && t._callbacks.isEmpty()) {
          t._options.onLastListenerRemove(t);
         }
        }
       };
       if (Array.isArray(i)) {
        i.push(s);
       }
       return s;
      };
     }
     return this._event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fire = function(e) {
    if (this._callbacks) {
     this._callbacks.invoke.call(this._callbacks, e);
    }
   };
   e.prototype.dispose = function() {
    if (this._callbacks) {
     this._callbacks.dispose();
     this._callbacks = undefined;
    }
   };
   e._noop = function() {};
   return e;
  }();
  t.Emitter = s;
 },
 bAum: function(e, t, n) {
  "use strict";
  const r = n("jle/");
  const i = n("X5QW");
  const o = process.env;
  let s;
  if (i("no-color") || i("no-colors") || i("color=false")) {
   s = false;
  } else if (i("color") || i("colors") || i("color=true") || i("color=always")) {
   s = true;
  }
  if ("FORCE_COLOR" in o) {
   s = o.FORCE_COLOR.length === 0 || parseInt(o.FORCE_COLOR, 10) !== 0;
  }
  function a(e) {
   if (e === 0) {
    return false;
   }
   return {
    level: e,
    hasBasic: true,
    has256: e >= 2,
    has16m: e >= 3
   };
  }
  function u(e) {
   if (s === false) {
    return 0;
   }
   if (i("color=16m") || i("color=full") || i("color=truecolor")) {
    return 3;
   }
   if (i("color=256")) {
    return 2;
   }
   if (e && !e.isTTY && s !== true) {
    return 0;
   }
   const t = s ? 1 : 0;
   if (process.platform === "win32") {
    const e = r.release().split(".");
    if (Number(process.versions.node.split(".")[0]) >= 8 && Number(e[0]) >= 10 && Number(e[2]) >= 10586) {
     return Number(e[2]) >= 14931 ? 3 : 2;
    }
    return 1;
   }
   if ("CI" in o) {
    if ([ "TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI" ].some(e => e in o) || o.CI_NAME === "codeship") {
     return 1;
    }
    return t;
   }
   if ("TEAMCITY_VERSION" in o) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION) ? 1 : 0;
   }
   if (o.COLORTERM === "truecolor") {
    return 3;
   }
   if ("TERM_PROGRAM" in o) {
    const e = parseInt((o.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (o.TERM_PROGRAM) {
    case "iTerm.app":
     return e >= 3 ? 3 : 2;

    case "Apple_Terminal":
     return 2;
    }
   }
   if (/-256(color)?$/i.test(o.TERM)) {
    return 2;
   }
   if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(o.TERM)) {
    return 1;
   }
   if ("COLORTERM" in o) {
    return 1;
   }
   if (o.TERM === "dumb") {
    return t;
   }
   return t;
  }
  function c(e) {
   const t = u(e);
   return a(t);
  }
  e.exports = {
   supportsColor: c,
   stdout: c(process.stdout),
   stderr: c(process.stderr)
  };
 },
 bzos: function(e, t) {
  e.exports = require("url");
 },
 c6sn: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("COhr");
  function i(e, t) {
   if (t instanceof Error) {
    var n = t;
    return e + ": " + n.message + "\n" + n.stack;
   } else if (typeof t === "string") {
    return e + ": " + t;
   } else if (t) {
    return e + ": " + t.toString();
   }
   return e;
  }
  t.formatError = i;
  function o(e, t, n, r) {
   return new Promise(function(o, s) {
    setImmediate(function() {
     if (r.isCancellationRequested) {
      o(a());
     }
     return e().then(function(e) {
      if (r.isCancellationRequested) {
       o(a());
       return;
      } else {
       o(e);
      }
     }, function(e) {
      console.error(i(n, e));
      o(t);
     });
    });
   });
  }
  t.runSafeAsync = o;
  function s(e, t, n, r) {
   return new Promise(function(o, s) {
    setImmediate(function() {
     if (r.isCancellationRequested) {
      o(a());
     } else {
      try {
       var s = e();
       if (r.isCancellationRequested) {
        o(a());
        return;
       } else {
        o(s);
       }
      } catch (e) {
       console.error(i(n, e));
       o(t);
      }
     }
    });
   });
  }
  t.runSafe = s;
  function a() {
   console.log("cancelled");
   return new r.ResponseError(r.ErrorCodes.RequestCancelled, "Request cancelled");
  }
 },
 d4UN: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e, t, n) {
   var r = {};
   var i = 0;
   var o = void 0;
   if (t > 0) {
    o = setInterval(function() {
     var e = Date.now() - t * 1e3;
     var n = Object.keys(r);
     for (var o = 0, s = n; o < s.length; o++) {
      var a = s[o];
      var u = r[a];
      if (u.cTime < e) {
       delete r[a];
       i--;
      }
     }
    }, t * 1e3);
   }
   return {
    get: function(t) {
     var o = t.version;
     var s = t.languageId;
     var a = r[t.uri];
     if (a && a.version === o && a.languageId === s) {
      a.cTime = Date.now();
      return a.languageModel;
     }
     var u = n(t);
     r[t.uri] = {
      languageModel: u,
      version: o,
      languageId: s,
      cTime: Date.now()
     };
     if (!a) {
      i++;
     }
     if (i === e) {
      var c = Number.MAX_VALUE;
      var f = null;
      for (var l in r) {
       var d = r[l];
       if (d.cTime < c) {
        f = l;
        c = d.cTime;
       }
      }
      if (f) {
       delete r[f];
       i--;
      }
     }
     return u;
    },
    onDocumentRemoved: function(e) {
     var t = e.uri;
     if (r[t]) {
      delete r[t];
      i--;
     }
    },
    dispose: function() {
     if (typeof o !== "undefined") {
      clearInterval(o);
      o = void 0;
      r = {};
      i = 0;
     }
    }
   };
  }
  t.getLanguageModelCache = r;
 },
 fkef: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e, t) {
   if (e.length < t.length) {
    return false;
   }
   for (var n = 0; n < t.length; n++) {
    if (e[n] !== t[n]) {
     return false;
    }
   }
   return true;
  }
  t.startsWith = r;
  function i(e, t) {
   var n = e.length - t.length;
   if (n > 0) {
    return e.lastIndexOf(t) === n;
   } else if (n === 0) {
    return e === t;
   } else {
    return false;
   }
  }
  t.endsWith = i;
  function o(e) {
   return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*");
  }
  t.convertSimple2RegExpPattern = o;
 },
 hde3: function(e, t, n) {
  "use strict";
  n.r(t);
  var r = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var i;
  if (typeof process === "object") {
   i = process.platform === "win32";
  } else if (typeof navigator === "object") {
   var o = navigator.userAgent;
   i = o.indexOf("Windows") >= 0;
  }
  var s = /^\w[\w\d+.-]*$/;
  var a = /^\//;
  var u = /^\/\//;
  function c(e) {
   if (e.scheme && !s.test(e.scheme)) {
    throw new Error("[UriError]: Scheme contains illegal characters.");
   }
   if (e.path) {
    if (e.authority) {
     if (!a.test(e.path)) {
      throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
     }
    } else {
     if (u.test(e.path)) {
      throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
     }
    }
   }
  }
  function f(e, t) {
   switch (e) {
   case "https":
   case "http":
   case "file":
    if (!t) {
     t = d;
    } else if (t[0] !== d) {
     t = d + t;
    }
    break;
   }
   return t;
  }
  var l = "";
  var d = "/";
  var h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  var p = function() {
   function e(e, t, n, r, i) {
    if (typeof e === "object") {
     this.scheme = e.scheme || l;
     this.authority = e.authority || l;
     this.path = e.path || l;
     this.query = e.query || l;
     this.fragment = e.fragment || l;
    } else {
     this.scheme = e || l;
     this.authority = t || l;
     this.path = f(this.scheme, n || l);
     this.query = r || l;
     this.fragment = i || l;
     c(this);
    }
   }
   e.isUri = function(t) {
    if (t instanceof e) {
     return true;
    }
    if (!t) {
     return false;
    }
    return typeof t.authority === "string" && typeof t.fragment === "string" && typeof t.path === "string" && typeof t.query === "string" && typeof t.scheme === "string";
   };
   Object.defineProperty(e.prototype, "fsPath", {
    get: function() {
     return b(this);
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.with = function(e) {
    if (!e) {
     return this;
    }
    var t = e.scheme, n = e.authority, r = e.path, i = e.query, o = e.fragment;
    if (t === void 0) {
     t = this.scheme;
    } else if (t === null) {
     t = l;
    }
    if (n === void 0) {
     n = this.authority;
    } else if (n === null) {
     n = l;
    }
    if (r === void 0) {
     r = this.path;
    } else if (r === null) {
     r = l;
    }
    if (i === void 0) {
     i = this.query;
    } else if (i === null) {
     i = l;
    }
    if (o === void 0) {
     o = this.fragment;
    } else if (o === null) {
     o = l;
    }
    if (t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment) {
     return this;
    }
    return new m(t, n, r, i, o);
   };
   e.parse = function(e) {
    var t = h.exec(e);
    if (!t) {
     return new m(l, l, l, l, l);
    }
    return new m(t[2] || l, decodeURIComponent(t[4] || l), decodeURIComponent(t[5] || l), decodeURIComponent(t[7] || l), decodeURIComponent(t[9] || l));
   };
   e.file = function(e) {
    var t = l;
    if (i) {
     e = e.replace(/\\/g, d);
    }
    if (e[0] === d && e[1] === d) {
     var n = e.indexOf(d, 2);
     if (n === -1) {
      t = e.substring(2);
      e = d;
     } else {
      t = e.substring(2, n);
      e = e.substring(n) || d;
     }
    }
    return new m("file", t, e, l, l);
   };
   e.from = function(e) {
    return new m(e.scheme, e.authority, e.path, e.query, e.fragment);
   };
   e.prototype.toString = function(e) {
    if (e === void 0) {
     e = false;
    }
    return C(this, e);
   };
   e.prototype.toJSON = function() {
    return this;
   };
   e.revive = function(t) {
    if (!t) {
     return t;
    } else if (t instanceof e) {
     return t;
    } else {
     var n = new m(t);
     n._fsPath = t.fsPath;
     n._formatted = t.external;
     return n;
    }
   };
   return e;
  }();
  t["default"] = p;
  var m = function(e) {
   r(t, e);
   function t() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._formatted = null;
    t._fsPath = null;
    return t;
   }
   Object.defineProperty(t.prototype, "fsPath", {
    get: function() {
     if (!this._fsPath) {
      this._fsPath = b(this);
     }
     return this._fsPath;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.toString = function(e) {
    if (e === void 0) {
     e = false;
    }
    if (!e) {
     if (!this._formatted) {
      this._formatted = C(this, false);
     }
     return this._formatted;
    } else {
     return C(this, true);
    }
   };
   t.prototype.toJSON = function() {
    var e = {
     $mid: 1
    };
    if (this._fsPath) {
     e.fsPath = this._fsPath;
    }
    if (this._formatted) {
     e.external = this._formatted;
    }
    if (this.path) {
     e.path = this.path;
    }
    if (this.scheme) {
     e.scheme = this.scheme;
    }
    if (this.authority) {
     e.authority = this.authority;
    }
    if (this.query) {
     e.query = this.query;
    }
    if (this.fragment) {
     e.fragment = this.fragment;
    }
    return e;
   };
   return t;
  }(p);
  var v = (w = {}, w[58] = "%3A", w[47] = "%2F", w[63] = "%3F", w[35] = "%23", w[91] = "%5B", 
  w[93] = "%5D", w[64] = "%40", w[33] = "%21", w[36] = "%24", w[38] = "%26", w[39] = "%27", 
  w[40] = "%28", w[41] = "%29", w[42] = "%2A", w[43] = "%2B", w[44] = "%2C", w[59] = "%3B", 
  w[61] = "%3D", w[32] = "%20", w);
  function g(e, t) {
   var n = undefined;
   var r = -1;
   for (var i = 0; i < e.length; i++) {
    var o = e.charCodeAt(i);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47) {
     if (r !== -1) {
      n += encodeURIComponent(e.substring(r, i));
      r = -1;
     }
     if (n !== undefined) {
      n += e.charAt(i);
     }
    } else {
     if (n === undefined) {
      n = e.substr(0, i);
     }
     var s = v[o];
     if (s !== undefined) {
      if (r !== -1) {
       n += encodeURIComponent(e.substring(r, i));
       r = -1;
      }
      n += s;
     } else if (r === -1) {
      r = i;
     }
    }
   }
   if (r !== -1) {
    n += encodeURIComponent(e.substring(r));
   }
   return n !== undefined ? n : e;
  }
  function y(e) {
   var t = undefined;
   for (var n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n);
    if (r === 35 || r === 63) {
     if (t === undefined) {
      t = e.substr(0, n);
     }
     t += v[r];
    } else {
     if (t !== undefined) {
      t += e[n];
     }
    }
   }
   return t !== undefined ? t : e;
  }
  function b(e) {
   var t;
   if (e.authority && e.path.length > 1 && e.scheme === "file") {
    t = "//" + e.authority + e.path;
   } else if (e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58) {
    t = e.path[1].toLowerCase() + e.path.substr(2);
   } else {
    t = e.path;
   }
   if (i) {
    t = t.replace(/\//g, "\\");
   }
   return t;
  }
  function C(e, t) {
   var n = !t ? g : y;
   var r = "";
   var i = e.scheme, o = e.authority, s = e.path, a = e.query, u = e.fragment;
   if (i) {
    r += i;
    r += ":";
   }
   if (o || i === "file") {
    r += d;
    r += d;
   }
   if (o) {
    var c = o.indexOf("@");
    if (c !== -1) {
     var f = o.substr(0, c);
     o = o.substr(c + 1);
     c = f.indexOf(":");
     if (c === -1) {
      r += n(f, false);
     } else {
      r += n(f.substr(0, c), false);
      r += ":";
      r += n(f.substr(c + 1), false);
     }
     r += "@";
    }
    o = o.toLowerCase();
    c = o.indexOf(":");
    if (c === -1) {
     r += n(o, false);
    } else {
     r += n(o.substr(0, c), false);
     r += o.substr(c);
    }
   }
   if (s) {
    if (s.length >= 3 && s.charCodeAt(0) === 47 && s.charCodeAt(2) === 58) {
     var l = s.charCodeAt(1);
     if (l >= 65 && l <= 90) {
      s = "/" + String.fromCharCode(l + 32) + ":" + s.substr(3);
     }
    } else if (s.length >= 2 && s.charCodeAt(1) === 58) {
     var l = s.charCodeAt(0);
     if (l >= 65 && l <= 90) {
      s = String.fromCharCode(l + 32) + ":" + s.substr(2);
     }
    }
    r += n(s, true);
   }
   if (a) {
    r += "?";
    r += n(a, false);
   }
   if (u) {
    r += "#";
    r += n(u, false);
   }
   return r;
  }
  var w;
 },
 iYeQ: function(e, t, n) {
  "use strict";
  e.exports = function() {
   "use strict";
   var e = void 0;
   function t(e) {
    return typeof e === "function";
   }
   if (global !== undefined) {
    e = global;
   } else if (window !== undefined && window.document) {
    e = window;
   } else {
    e = self;
   }
   var r = function() {
    if (!e.hasOwnProperty("Promise")) {
     return false;
    }
    var n = e.Promise;
    if (!n.hasOwnProperty("resolve") || !n.hasOwnProperty("reject")) {
     return false;
    }
    if (!n.hasOwnProperty("all") || !n.hasOwnProperty("race")) {
     return false;
    }
    return function() {
     var n = void 0;
     var r = new e.Promise(function(e) {
      n = e;
     });
     if (r) {
      return t(n);
     }
     return false;
    }();
   }();
   if (r) {
    return e.Promise;
   }
   return n("E2g8").Promise;
  }();
 },
 jK02: function(e, t) {
  e.exports = require("util");
 },
 "jle/": function(e, t) {
  e.exports = require("os");
 },
 kmEW: function(e, t, n) {
  "use strict";
  n.r(t);
  n.d(t, "Position", function() {
   return r;
  });
  n.d(t, "Range", function() {
   return i;
  });
  n.d(t, "Location", function() {
   return o;
  });
  n.d(t, "DiagnosticRelatedInformation", function() {
   return s;
  });
  n.d(t, "DiagnosticSeverity", function() {
   return a;
  });
  n.d(t, "Diagnostic", function() {
   return u;
  });
  n.d(t, "Command", function() {
   return c;
  });
  n.d(t, "TextEdit", function() {
   return f;
  });
  n.d(t, "TextDocumentEdit", function() {
   return l;
  });
  n.d(t, "WorkspaceEdit", function() {
   return d;
  });
  n.d(t, "WorkspaceChange", function() {
   return p;
  });
  n.d(t, "TextDocumentIdentifier", function() {
   return m;
  });
  n.d(t, "VersionedTextDocumentIdentifier", function() {
   return v;
  });
  n.d(t, "TextDocumentItem", function() {
   return g;
  });
  n.d(t, "MarkupKind", function() {
   return y;
  });
  n.d(t, "MarkupContent", function() {
   return b;
  });
  n.d(t, "CompletionItemKind", function() {
   return C;
  });
  n.d(t, "InsertTextFormat", function() {
   return w;
  });
  n.d(t, "CompletionItem", function() {
   return x;
  });
  n.d(t, "CompletionList", function() {
   return T;
  });
  n.d(t, "MarkedString", function() {
   return _;
  });
  n.d(t, "Hover", function() {
   return S;
  });
  n.d(t, "ParameterInformation", function() {
   return R;
  });
  n.d(t, "SignatureInformation", function() {
   return E;
  });
  n.d(t, "DocumentHighlightKind", function() {
   return k;
  });
  n.d(t, "DocumentHighlight", function() {
   return O;
  });
  n.d(t, "SymbolKind", function() {
   return A;
  });
  n.d(t, "SymbolInformation", function() {
   return P;
  });
  n.d(t, "CodeActionKind", function() {
   return j;
  });
  n.d(t, "CodeActionContext", function() {
   return M;
  });
  n.d(t, "CodeAction", function() {
   return N;
  });
  n.d(t, "CodeLens", function() {
   return q;
  });
  n.d(t, "FormattingOptions", function() {
   return I;
  });
  n.d(t, "DocumentLink", function() {
   return D;
  });
  n.d(t, "EOL", function() {
   return F;
  });
  n.d(t, "TextDocument", function() {
   return L;
  });
  n.d(t, "TextDocumentSaveReason", function() {
   return W;
  });
  var r;
  (function(e) {
   function t(e, t) {
    return {
     line: e,
     character: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.objectLiteral(t) && U.number(t.line) && U.number(t.character);
   }
   e.is = n;
  })(r || (r = {}));
  var i;
  (function(e) {
   function t(e, t, n, i) {
    if (U.number(e) && U.number(t) && U.number(n) && U.number(i)) {
     return {
      start: r.create(e, t),
      end: r.create(n, i)
     };
    } else if (r.is(e) && r.is(t)) {
     return {
      start: e,
      end: t
     };
    } else {
     throw new Error("Range#create called with invalid arguments[" + e + ", " + t + ", " + n + ", " + i + "]");
    }
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.objectLiteral(t) && r.is(t.start) && r.is(t.end);
   }
   e.is = n;
  })(i || (i = {}));
  var o;
  (function(e) {
   function t(e, t) {
    return {
     uri: e,
     range: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && i.is(t.range) && (U.string(t.uri) || U.undefined(t.uri));
   }
   e.is = n;
  })(o || (o = {}));
  var s;
  (function(e) {
   function t(e, t) {
    return {
     location: e,
     message: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && o.is(t.location) && U.string(t.message);
   }
   e.is = n;
  })(s || (s = {}));
  var a;
  (function(e) {
   e.Error = 1;
   e.Warning = 2;
   e.Information = 3;
   e.Hint = 4;
  })(a || (a = {}));
  var u;
  (function(e) {
   function t(e, t, n, r, i, o) {
    var s = {
     range: e,
     message: t
    };
    if (U.defined(n)) {
     s.severity = n;
    }
    if (U.defined(r)) {
     s.code = r;
    }
    if (U.defined(i)) {
     s.source = i;
    }
    if (U.defined(o)) {
     s.relatedInformation = o;
    }
    return s;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && i.is(t.range) && U.string(t.message) && (U.number(t.severity) || U.undefined(t.severity)) && (U.number(t.code) || U.string(t.code) || U.undefined(t.code)) && (U.string(t.source) || U.undefined(t.source)) && (U.undefined(t.relatedInformation) || U.typedArray(t.relatedInformation, s.is));
   }
   e.is = n;
  })(u || (u = {}));
  var c;
  (function(e) {
   function t(e, t) {
    var n = [];
    for (var r = 2; r < arguments.length; r++) {
     n[r - 2] = arguments[r];
    }
    var i = {
     title: e,
     command: t
    };
    if (U.defined(n) && n.length > 0) {
     i.arguments = n;
    }
    return i;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && U.string(t.title) && U.string(t.command);
   }
   e.is = n;
  })(c || (c = {}));
  var f;
  (function(e) {
   function t(e, t) {
    return {
     range: e,
     newText: t
    };
   }
   e.replace = t;
   function n(e, t) {
    return {
     range: {
      start: e,
      end: e
     },
     newText: t
    };
   }
   e.insert = n;
   function r(e) {
    return {
     range: e,
     newText: ""
    };
   }
   e.del = r;
  })(f || (f = {}));
  var l;
  (function(e) {
   function t(e, t) {
    return {
     textDocument: e,
     edits: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && v.is(t.textDocument) && Array.isArray(t.edits);
   }
   e.is = n;
  })(l || (l = {}));
  var d;
  (function(e) {
   function t(e) {
    var t = e;
    return t && (t.changes !== void 0 || t.documentChanges !== void 0) && (t.documentChanges === void 0 || U.typedArray(t.documentChanges, l.is));
   }
   e.is = t;
  })(d || (d = {}));
  var h = function() {
   function e(e) {
    this.edits = e;
   }
   e.prototype.insert = function(e, t) {
    this.edits.push(f.insert(e, t));
   };
   e.prototype.replace = function(e, t) {
    this.edits.push(f.replace(e, t));
   };
   e.prototype.delete = function(e) {
    this.edits.push(f.del(e));
   };
   e.prototype.add = function(e) {
    this.edits.push(e);
   };
   e.prototype.all = function() {
    return this.edits;
   };
   e.prototype.clear = function() {
    this.edits.splice(0, this.edits.length);
   };
   return e;
  }();
  var p = function() {
   function e(e) {
    var t = this;
    this._textEditChanges = Object.create(null);
    if (e) {
     this._workspaceEdit = e;
     if (e.documentChanges) {
      e.documentChanges.forEach(function(e) {
       var n = new h(e.edits);
       t._textEditChanges[e.textDocument.uri] = n;
      });
     } else if (e.changes) {
      Object.keys(e.changes).forEach(function(n) {
       var r = new h(e.changes[n]);
       t._textEditChanges[n] = r;
      });
     }
    }
   }
   Object.defineProperty(e.prototype, "edit", {
    get: function() {
     return this._workspaceEdit;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.getTextEditChange = function(e) {
    if (v.is(e)) {
     if (!this._workspaceEdit) {
      this._workspaceEdit = {
       documentChanges: []
      };
     }
     if (!this._workspaceEdit.documentChanges) {
      throw new Error("Workspace edit is not configured for versioned document changes.");
     }
     var t = e;
     var n = this._textEditChanges[t.uri];
     if (!n) {
      var r = [];
      var i = {
       textDocument: t,
       edits: r
      };
      this._workspaceEdit.documentChanges.push(i);
      n = new h(r);
      this._textEditChanges[t.uri] = n;
     }
     return n;
    } else {
     if (!this._workspaceEdit) {
      this._workspaceEdit = {
       changes: Object.create(null)
      };
     }
     if (!this._workspaceEdit.changes) {
      throw new Error("Workspace edit is not configured for normal text edit changes.");
     }
     var n = this._textEditChanges[e];
     if (!n) {
      var r = [];
      this._workspaceEdit.changes[e] = r;
      n = new h(r);
      this._textEditChanges[e] = n;
     }
     return n;
    }
   };
   return e;
  }();
  var m;
  (function(e) {
   function t(e) {
    return {
     uri: e
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && U.string(t.uri);
   }
   e.is = n;
  })(m || (m = {}));
  var v;
  (function(e) {
   function t(e, t) {
    return {
     uri: e,
     version: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && U.string(t.uri) && U.number(t.version);
   }
   e.is = n;
  })(v || (v = {}));
  var g;
  (function(e) {
   function t(e, t, n, r) {
    return {
     uri: e,
     languageId: t,
     version: n,
     text: r
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && U.string(t.uri) && U.string(t.languageId) && U.number(t.version) && U.string(t.text);
   }
   e.is = n;
  })(g || (g = {}));
  var y;
  (function(e) {
   e.PlainText = "plaintext";
   e.Markdown = "markdown";
  })(y || (y = {}));
  (function(e) {
   function t(t) {
    var n = t;
    return n === e.PlainText || n === e.Markdown;
   }
   e.is = t;
  })(y || (y = {}));
  var b;
  (function(e) {
   function t(e) {
    var t = e;
    return U.objectLiteral(e) && y.is(t.kind) && U.string(t.value);
   }
   e.is = t;
  })(b || (b = {}));
  var C;
  (function(e) {
   e.Text = 1;
   e.Method = 2;
   e.Function = 3;
   e.Constructor = 4;
   e.Field = 5;
   e.Variable = 6;
   e.Class = 7;
   e.Interface = 8;
   e.Module = 9;
   e.Property = 10;
   e.Unit = 11;
   e.Value = 12;
   e.Enum = 13;
   e.Keyword = 14;
   e.Snippet = 15;
   e.Color = 16;
   e.File = 17;
   e.Reference = 18;
   e.Folder = 19;
   e.EnumMember = 20;
   e.Constant = 21;
   e.Struct = 22;
   e.Event = 23;
   e.Operator = 24;
   e.TypeParameter = 25;
  })(C || (C = {}));
  var w;
  (function(e) {
   e.PlainText = 1;
   e.Snippet = 2;
  })(w || (w = {}));
  var x;
  (function(e) {
   function t(e) {
    return {
     label: e
    };
   }
   e.create = t;
  })(x || (x = {}));
  var T;
  (function(e) {
   function t(e, t) {
    return {
     items: e ? e : [],
     isIncomplete: !!t
    };
   }
   e.create = t;
  })(T || (T = {}));
  var _;
  (function(e) {
   function t(e) {
    return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
   }
   e.fromPlainText = t;
   function n(e) {
    var t = e;
    return U.string(t) || U.objectLiteral(t) && U.string(t.language) && U.string(t.value);
   }
   e.is = n;
  })(_ || (_ = {}));
  var S;
  (function(e) {
   function t(e) {
    var t = e;
    return U.objectLiteral(t) && (b.is(t.contents) || _.is(t.contents) || U.typedArray(t.contents, _.is)) && (e.range === void 0 || i.is(e.range));
   }
   e.is = t;
  })(S || (S = {}));
  var R;
  (function(e) {
   function t(e, t) {
    return t ? {
     label: e,
     documentation: t
    } : {
     label: e
    };
   }
   e.create = t;
  })(R || (R = {}));
  var E;
  (function(e) {
   function t(e, t) {
    var n = [];
    for (var r = 2; r < arguments.length; r++) {
     n[r - 2] = arguments[r];
    }
    var i = {
     label: e
    };
    if (U.defined(t)) {
     i.documentation = t;
    }
    if (U.defined(n)) {
     i.parameters = n;
    } else {
     i.parameters = [];
    }
    return i;
   }
   e.create = t;
  })(E || (E = {}));
  var k;
  (function(e) {
   e.Text = 1;
   e.Read = 2;
   e.Write = 3;
  })(k || (k = {}));
  var O;
  (function(e) {
   function t(e, t) {
    var n = {
     range: e
    };
    if (U.number(t)) {
     n.kind = t;
    }
    return n;
   }
   e.create = t;
  })(O || (O = {}));
  var A;
  (function(e) {
   e.File = 1;
   e.Module = 2;
   e.Namespace = 3;
   e.Package = 4;
   e.Class = 5;
   e.Method = 6;
   e.Property = 7;
   e.Field = 8;
   e.Constructor = 9;
   e.Enum = 10;
   e.Interface = 11;
   e.Function = 12;
   e.Variable = 13;
   e.Constant = 14;
   e.String = 15;
   e.Number = 16;
   e.Boolean = 17;
   e.Array = 18;
   e.Object = 19;
   e.Key = 20;
   e.Null = 21;
   e.EnumMember = 22;
   e.Struct = 23;
   e.Event = 24;
   e.Operator = 25;
   e.TypeParameter = 26;
  })(A || (A = {}));
  var P;
  (function(e) {
   function t(e, t, n, r, i) {
    var o = {
     name: e,
     kind: t,
     location: {
      uri: r,
      range: n
     }
    };
    if (i) {
     o.containerName = i;
    }
    return o;
   }
   e.create = t;
  })(P || (P = {}));
  var j;
  (function(e) {
   e.QuickFix = "quickfix";
   e.Refactor = "refactor";
   e.RefactorExtract = "refactor.extract";
   e.RefactorInline = "refactor.inline";
   e.RefactorRewrite = "refactor.rewrite";
   e.Source = "source";
   e.SourceOrganizeImports = "source.organizeImports";
  })(j || (j = {}));
  var M;
  (function(e) {
   function t(e, t) {
    var n = {
     diagnostics: e
    };
    if (t !== void 0 && t !== null) {
     n.only = t;
    }
    return n;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && U.typedArray(t.diagnostics, u.is) && (t.only === void 0 || U.typedArray(t.only, U.string));
   }
   e.is = n;
  })(M || (M = {}));
  var N;
  (function(e) {
   function t(e, t, n) {
    var r = {
     title: e
    };
    if (c.is(t)) {
     r.command = t;
    } else {
     r.edit = t;
    }
    if (n !== void null) {
     r.kind = n;
    }
    return r;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return t && U.string(t.title) && (t.diagnostics === void 0 || U.typedArray(t.diagnostics, u.is)) && (t.kind === void 0 || U.string(t.kind)) && (t.edit !== void 0 || t.command !== void 0) && (t.command === void 0 || c.is(t.command)) && (t.edit === void 0 || d.is(t.edit));
   }
   e.is = n;
  })(N || (N = {}));
  var q;
  (function(e) {
   function t(e, t) {
    var n = {
     range: e
    };
    if (U.defined(t)) n.data = t;
    return n;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && i.is(t.range) && (U.undefined(t.command) || c.is(t.command));
   }
   e.is = n;
  })(q || (q = {}));
  var I;
  (function(e) {
   function t(e, t) {
    return {
     tabSize: e,
     insertSpaces: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && U.number(t.tabSize) && U.boolean(t.insertSpaces);
   }
   e.is = n;
  })(I || (I = {}));
  var D = function() {
   function e() {}
   return e;
  }();
  (function(e) {
   function t(e, t, n) {
    return {
     range: e,
     target: t,
     data: n
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && i.is(t.range) && (U.undefined(t.target) || U.string(t.target));
   }
   e.is = n;
  })(D || (D = {}));
  var F = [ "\n", "\r\n", "\r" ];
  var L;
  (function(e) {
   function t(e, t, n, r) {
    return new V(e, t, n, r);
   }
   e.create = t;
   function n(e) {
    var t = e;
    return U.defined(t) && U.string(t.uri) && (U.undefined(t.languageId) || U.string(t.languageId)) && U.number(t.lineCount) && U.func(t.getText) && U.func(t.positionAt) && U.func(t.offsetAt) ? true : false;
   }
   e.is = n;
   function r(e, t) {
    var n = e.getText();
    var r = i(t, function(e, t) {
     var n = e.range.start.line - t.range.start.line;
     if (n === 0) {
      return e.range.start.character - t.range.start.character;
     }
     return n;
    });
    var o = n.length;
    for (var s = r.length - 1; s >= 0; s--) {
     var a = r[s];
     var u = e.offsetAt(a.range.start);
     var c = e.offsetAt(a.range.end);
     if (c <= o) {
      n = n.substring(0, u) + a.newText + n.substring(c, n.length);
     } else {
      throw new Error("Ovelapping edit");
     }
     o = u;
    }
    return n;
   }
   e.applyEdits = r;
   function i(e, t) {
    if (e.length <= 1) {
     return e;
    }
    var n = e.length / 2 | 0;
    var r = e.slice(0, n);
    var o = e.slice(n);
    i(r, t);
    i(o, t);
    var s = 0;
    var a = 0;
    var u = 0;
    while (s < r.length && a < o.length) {
     var c = t(r[s], o[a]);
     if (c <= 0) {
      e[u++] = r[s++];
     } else {
      e[u++] = o[a++];
     }
    }
    while (s < r.length) {
     e[u++] = r[s++];
    }
    while (a < o.length) {
     e[u++] = o[a++];
    }
    return e;
   }
  })(L || (L = {}));
  var W;
  (function(e) {
   e.Manual = 1;
   e.AfterDelay = 2;
   e.FocusOut = 3;
  })(W || (W = {}));
  var V = function() {
   function e(e, t, n, r) {
    this._uri = e;
    this._languageId = t;
    this._version = n;
    this._content = r;
    this._lineOffsets = null;
   }
   Object.defineProperty(e.prototype, "uri", {
    get: function() {
     return this._uri;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "languageId", {
    get: function() {
     return this._languageId;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "version", {
    get: function() {
     return this._version;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.getText = function(e) {
    if (e) {
     var t = this.offsetAt(e.start);
     var n = this.offsetAt(e.end);
     return this._content.substring(t, n);
    }
    return this._content;
   };
   e.prototype.update = function(e, t) {
    this._content = e.text;
    this._version = t;
    this._lineOffsets = null;
   };
   e.prototype.getLineOffsets = function() {
    if (this._lineOffsets === null) {
     var e = [];
     var t = this._content;
     var n = true;
     for (var r = 0; r < t.length; r++) {
      if (n) {
       e.push(r);
       n = false;
      }
      var i = t.charAt(r);
      n = i === "\r" || i === "\n";
      if (i === "\r" && r + 1 < t.length && t.charAt(r + 1) === "\n") {
       r++;
      }
     }
     if (n && t.length > 0) {
      e.push(t.length);
     }
     this._lineOffsets = e;
    }
    return this._lineOffsets;
   };
   e.prototype.positionAt = function(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    var t = this.getLineOffsets();
    var n = 0, i = t.length;
    if (i === 0) {
     return r.create(0, e);
    }
    while (n < i) {
     var o = Math.floor((n + i) / 2);
     if (t[o] > e) {
      i = o;
     } else {
      n = o + 1;
     }
    }
    var s = n - 1;
    return r.create(s, e - t[s]);
   };
   e.prototype.offsetAt = function(e) {
    var t = this.getLineOffsets();
    if (e.line >= t.length) {
     return this._content.length;
    } else if (e.line < 0) {
     return 0;
    }
    var n = t[e.line];
    var r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(Math.min(n + e.character, r), n);
   };
   Object.defineProperty(e.prototype, "lineCount", {
    get: function() {
     return this.getLineOffsets().length;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var U;
  (function(e) {
   var t = Object.prototype.toString;
   function n(e) {
    return typeof e !== "undefined";
   }
   e.defined = n;
   function r(e) {
    return typeof e === "undefined";
   }
   e.undefined = r;
   function i(e) {
    return e === true || e === false;
   }
   e.boolean = i;
   function o(e) {
    return t.call(e) === "[object String]";
   }
   e.string = o;
   function s(e) {
    return t.call(e) === "[object Number]";
   }
   e.number = s;
   function a(e) {
    return t.call(e) === "[object Function]";
   }
   e.func = a;
   function u(e) {
    return e !== null && typeof e === "object";
   }
   e.objectLiteral = u;
   function c(e, t) {
    return Array.isArray(e) && e.every(t);
   }
   e.typedArray = c;
  })(U || (U = {}));
 },
 lv48: function(e, t, n) {
  t = e.exports = i.debug = i["default"] = i;
  t.coerce = c;
  t.disable = a;
  t.enable = s;
  t.enabled = u;
  t.humanize = n("FGiv");
  t.instances = [];
  t.names = [];
  t.skips = [];
  t.formatters = {};
  function r(e) {
   var n = 0, r;
   for (r in e) {
    n = (n << 5) - n + e.charCodeAt(r);
    n |= 0;
   }
   return t.colors[Math.abs(n) % t.colors.length];
  }
  function i(e) {
   var n;
   function i() {
    if (!i.enabled) return;
    var e = i;
    var r = +new Date();
    var o = r - (n || r);
    e.diff = o;
    e.prev = n;
    e.curr = r;
    n = r;
    var s = new Array(arguments.length);
    for (var a = 0; a < s.length; a++) {
     s[a] = arguments[a];
    }
    s[0] = t.coerce(s[0]);
    if ("string" !== typeof s[0]) {
     s.unshift("%O");
    }
    var u = 0;
    s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
     if (n === "%%") return n;
     u++;
     var i = t.formatters[r];
     if ("function" === typeof i) {
      var o = s[u];
      n = i.call(e, o);
      s.splice(u, 1);
      u--;
     }
     return n;
    });
    t.formatArgs.call(e, s);
    var c = i.log || t.log || console.log.bind(console);
    c.apply(e, s);
   }
   i.namespace = e;
   i.enabled = t.enabled(e);
   i.useColors = t.useColors();
   i.color = r(e);
   i.destroy = o;
   if ("function" === typeof t.init) {
    t.init(i);
   }
   t.instances.push(i);
   return i;
  }
  function o() {
   var e = t.instances.indexOf(this);
   if (e !== -1) {
    t.instances.splice(e, 1);
    return true;
   } else {
    return false;
   }
  }
  function s(e) {
   t.save(e);
   t.names = [];
   t.skips = [];
   var n;
   var r = (typeof e === "string" ? e : "").split(/[\s,]+/);
   var i = r.length;
   for (n = 0; n < i; n++) {
    if (!r[n]) continue;
    e = r[n].replace(/\*/g, ".*?");
    if (e[0] === "-") {
     t.skips.push(new RegExp("^" + e.substr(1) + "$"));
    } else {
     t.names.push(new RegExp("^" + e + "$"));
    }
   }
   for (n = 0; n < t.instances.length; n++) {
    var o = t.instances[n];
    o.enabled = t.enabled(o.namespace);
   }
  }
  function a() {
   t.enable("");
  }
  function u(e) {
   if (e[e.length - 1] === "*") {
    return true;
   }
   var n, r;
   for (n = 0, r = t.skips.length; n < r; n++) {
    if (t.skips[n].test(e)) {
     return false;
    }
   }
   for (n = 0, r = t.names.length; n < r; n++) {
    if (t.names[n].test(e)) {
     return true;
    }
   }
   return false;
  }
  function c(e) {
   if (e instanceof Error) return e.stack || e.message;
   return e;
  }
 },
 "mH9/": function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n("kmEW");
  var i = n("L90F");
  function o(e, t) {
   if (e === t) {
    return true;
   }
   if (e === null || e === undefined || t === null || t === undefined) {
    return false;
   }
   if (typeof e !== typeof t) {
    return false;
   }
   if (typeof e !== "object") {
    return false;
   }
   if (Array.isArray(e) !== Array.isArray(t)) {
    return false;
   }
   var n, r;
   if (Array.isArray(e)) {
    if (e.length !== t.length) {
     return false;
    }
    for (n = 0; n < e.length; n++) {
     if (!o(e[n], t[n])) {
      return false;
     }
    }
   } else {
    var i = [];
    for (r in e) {
     i.push(r);
    }
    i.sort();
    var s = [];
    for (r in t) {
     s.push(r);
    }
    s.sort();
    if (!o(i, s)) {
     return false;
    }
    for (n = 0; n < i.length; n++) {
     if (!o(e[i[n]], t[i[n]])) {
      return false;
     }
    }
   }
   return true;
  }
  var s = n("wpTr");
  var a = n("hde3");
  var u = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var c = s["loadMessageBundle"]();
  var f;
  (function(e) {
   e[e["Undefined"] = 0] = "Undefined";
   e[e["EnumValueMismatch"] = 1] = "EnumValueMismatch";
   e[e["UnexpectedEndOfComment"] = 257] = "UnexpectedEndOfComment";
   e[e["UnexpectedEndOfString"] = 258] = "UnexpectedEndOfString";
   e[e["UnexpectedEndOfNumber"] = 259] = "UnexpectedEndOfNumber";
   e[e["InvalidUnicode"] = 260] = "InvalidUnicode";
   e[e["InvalidEscapeCharacter"] = 261] = "InvalidEscapeCharacter";
   e[e["InvalidCharacter"] = 262] = "InvalidCharacter";
   e[e["PropertyExpected"] = 513] = "PropertyExpected";
   e[e["CommaExpected"] = 514] = "CommaExpected";
   e[e["ColonExpected"] = 515] = "ColonExpected";
   e[e["ValueExpected"] = 516] = "ValueExpected";
   e[e["CommaOrCloseBacketExpected"] = 517] = "CommaOrCloseBacketExpected";
   e[e["CommaOrCloseBraceExpected"] = 518] = "CommaOrCloseBraceExpected";
   e[e["TrailingComma"] = 519] = "TrailingComma";
  })(f || (f = {}));
  var l = /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/;
  var d = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var h;
  (function(e) {
   e["Ignore"] = "ignore";
   e["Error"] = "error";
   e["Warning"] = "warning";
  })(h || (h = {}));
  var p = function() {
   function e(e, t, n) {
    this.offset = t;
    this.length = n;
    this.parent = e;
   }
   Object.defineProperty(e.prototype, "children", {
    get: function() {
     return [];
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.toString = function() {
    return "type: " + this.type + " (" + this.offset + "/" + this.length + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "");
   };
   return e;
  }();
  var m = function(e) {
   u(t, e);
   function t(t, n) {
    var r = e.call(this, t, n) || this;
    r.type = "null";
    return r;
   }
   return t;
  }(p);
  var v = function(e) {
   u(t, e);
   function t(t, n, r) {
    var i = e.call(this, t, r) || this;
    i.type = "boolean";
    i.value = n;
    return i;
   }
   return t;
  }(p);
  var g = function(e) {
   u(t, e);
   function t(t, n) {
    var r = e.call(this, t, n) || this;
    r.type = "array";
    r.items = [];
    return r;
   }
   Object.defineProperty(t.prototype, "children", {
    get: function() {
     return this.items;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(p);
  var y = function(e) {
   u(t, e);
   function t(t, n) {
    var r = e.call(this, t, n) || this;
    r.type = "number";
    r.isInteger = true;
    r.value = Number.NaN;
    return r;
   }
   return t;
  }(p);
  var b = function(e) {
   u(t, e);
   function t(t, n, r) {
    var i = e.call(this, t, n, r) || this;
    i.type = "string";
    i.value = "";
    return i;
   }
   return t;
  }(p);
  var C = function(e) {
   u(t, e);
   function t(t, n) {
    var r = e.call(this, t, n) || this;
    r.type = "property";
    r.colonOffset = -1;
    return r;
   }
   Object.defineProperty(t.prototype, "children", {
    get: function() {
     return this.valueNode ? [ this.keyNode, this.valueNode ] : [ this.keyNode ];
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(p);
  var w = function(e) {
   u(t, e);
   function t(t, n) {
    var r = e.call(this, t, n) || this;
    r.type = "object";
    r.properties = [];
    return r;
   }
   Object.defineProperty(t.prototype, "children", {
    get: function() {
     return this.properties;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(p);
  function x(e) {
   if (typeof e === "boolean") {
    return e ? {} : {
     not: {}
    };
   }
   return e;
  }
  var T;
  (function(e) {
   e[e["Key"] = 0] = "Key";
   e[e["Enum"] = 1] = "Enum";
  })(T || (T = {}));
  var _ = function() {
   function e(e, t) {
    if (e === void 0) {
     e = -1;
    }
    if (t === void 0) {
     t = null;
    }
    this.focusOffset = e;
    this.exclude = t;
    this.schemas = [];
   }
   e.prototype.add = function(e) {
    this.schemas.push(e);
   };
   e.prototype.merge = function(e) {
    (t = this.schemas).push.apply(t, e.schemas);
    var t;
   };
   e.prototype.include = function(e) {
    return (this.focusOffset === -1 || P(e, this.focusOffset)) && e !== this.exclude;
   };
   e.prototype.newSub = function() {
    return new e(-1, this.exclude);
   };
   return e;
  }();
  var S = function() {
   function e() {}
   Object.defineProperty(e.prototype, "schemas", {
    get: function() {
     return [];
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.add = function(e) {};
   e.prototype.merge = function(e) {};
   e.prototype.include = function(e) {
    return true;
   };
   e.prototype.newSub = function() {
    return this;
   };
   e.instance = new e();
   return e;
  }();
  var R = function() {
   function e() {
    this.problems = [];
    this.propertiesMatches = 0;
    this.propertiesValueMatches = 0;
    this.primaryValueMatches = 0;
    this.enumValueMatch = false;
    this.enumValues = null;
   }
   e.prototype.hasProblems = function() {
    return !!this.problems.length;
   };
   e.prototype.mergeAll = function(e) {
    var t = this;
    e.forEach(function(e) {
     t.merge(e);
    });
   };
   e.prototype.merge = function(e) {
    this.problems = this.problems.concat(e.problems);
   };
   e.prototype.mergeEnumValues = function(e) {
    if (!this.enumValueMatch && !e.enumValueMatch && this.enumValues && e.enumValues) {
     this.enumValues = this.enumValues.concat(e.enumValues);
     for (var t = 0, n = this.problems; t < n.length; t++) {
      var r = n[t];
      if (r.code === f.EnumValueMismatch) {
       r.message = c("enumWarning", "Value is not accepted. Valid values: {0}.", this.enumValues.map(function(e) {
        return JSON.stringify(e);
       }).join(", "));
      }
     }
    }
   };
   e.prototype.mergePropertyMatch = function(e) {
    this.merge(e);
    this.propertiesMatches++;
    if (e.enumValueMatch || !e.hasProblems() && e.propertiesMatches) {
     this.propertiesValueMatches++;
    }
    if (e.enumValueMatch && e.enumValues && e.enumValues.length === 1) {
     this.primaryValueMatches++;
    }
   };
   e.prototype.compare = function(e) {
    var t = this.hasProblems();
    if (t !== e.hasProblems()) {
     return t ? -1 : 1;
    }
    if (this.enumValueMatch !== e.enumValueMatch) {
     return e.enumValueMatch ? -1 : 1;
    }
    if (this.primaryValueMatches !== e.primaryValueMatches) {
     return this.primaryValueMatches - e.primaryValueMatches;
    }
    if (this.propertiesValueMatches !== e.propertiesValueMatches) {
     return this.propertiesValueMatches - e.propertiesValueMatches;
    }
    return this.propertiesMatches - e.propertiesMatches;
   };
   return e;
  }();
  function E(e) {
   switch (e) {
   case r["DiagnosticSeverity"].Error:
    return h.Error;

   case r["DiagnosticSeverity"].Warning:
    return h.Warning;

   case r["DiagnosticSeverity"].Information:
    return h.Warning;
   }
   return h.Ignore;
  }
  function k(e, t) {
   if (t === void 0) {
    t = [];
   }
   return new j(e, [], [], t);
  }
  function O(e) {
   switch (e.type) {
   case "array":
    return e.items.map(O);

   case "object":
    var t = Object.create(null);
    for (var n = 0, r = e.properties; n < r.length; n++) {
     var i = r[n];
     t[i.keyNode.value] = O(i.valueNode);
    }
    return t;

   case "string":
   case "number":
   case "boolean":
    return e.value;
   }
   return null;
  }
  function A(e) {
   if (!e.parent) {
    return [];
   }
   var t = A(e.parent);
   if (e.parent.type === "property") {
    var n = e.parent.keyNode.value;
    t.push(n);
   } else if (e.parent.type === "array") {
    var r = e.parent.items.indexOf(e);
    if (r !== -1) {
     t.push(r);
    }
   }
   return t;
  }
  function P(e, t, n) {
   if (n === void 0) {
    n = false;
   }
   return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
  }
  var j = function() {
   function e(e, t, n, r) {
    if (t === void 0) {
     t = [];
    }
    if (n === void 0) {
     n = [];
    }
    if (r === void 0) {
     r = [];
    }
    this.root = e;
    this.syntaxErrors = t;
    this.comments = n;
    this.externalDiagnostic = r;
   }
   e.prototype.getNodeFromOffset = function(e) {
    var t = function(n) {
     if (e >= n.offset && e < n.offset + n.length) {
      var r = n.children;
      for (var i = 0; i < r.length && r[i].offset <= e; i++) {
       var o = t(r[i]);
       if (o) {
        return o;
       }
      }
      return n;
     }
     return null;
    };
    return this.root && t(this.root);
   };
   e.prototype.getNodeFromOffsetEndInclusive = function(e) {
    var t = function(n) {
     if (e >= n.offset && e <= n.offset + n.length) {
      var r = n.children;
      for (var i = 0; i < r.length && r[i].offset <= e; i++) {
       var o = t(r[i]);
       if (o) {
        return o;
       }
      }
      return n;
     }
     return null;
    };
    return this.root && t(this.root);
   };
   e.prototype.visit = function(e) {
    if (this.root) {
     var t = function(n) {
      var r = e(n);
      var i = n.children;
      for (var o = 0; o < i.length && r; o++) {
       r = t(i[o]);
      }
      return r;
     };
     t(this.root);
    }
   };
   e.prototype.validate = function(e) {
    if (this.root && e) {
     var t = new R();
     M(this.root, e, t, S.instance);
     return t.problems;
    }
    return null;
   };
   e.prototype.getMatchingSchemas = function(e, t, n) {
    if (t === void 0) {
     t = -1;
    }
    if (n === void 0) {
     n = null;
    }
    var r = new _(t, n);
    if (this.root && e) {
     M(this.root, e, new R(), r);
    }
    return r.schemas;
   };
   return e;
  }();
  function M(e, t, n, r) {
   if (!e || !r.include(e)) {
    return;
   }
   switch (e.type) {
   case "object":
    m(e, t, n, r);
    break;

   case "array":
    p(e, t, n, r);
    break;

   case "string":
    u(e, t, n, r);
    break;

   case "number":
    s(e, t, n, r);
    break;

   case "property":
    return M(e.valueNode, t, n, r);
   }
   i();
   r.add({
    node: e,
    schema: t
   });
   function i() {
    function i(t) {
     return e.type === t || t === "integer" && e.type === "number" && e.isInteger;
    }
    if (Array.isArray(t.type)) {
     if (!t.type.some(i)) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       message: t.errorMessage || c("typeArrayMismatchWarning", "Incorrect type. Expected one of {0}.", t.type.join(", "))
      });
     }
    } else if (t.type) {
     if (!i(t.type)) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       message: t.errorMessage || c("typeMismatchWarning", 'Incorrect type. Expected "{0}".', t.type)
      });
     }
    }
    if (Array.isArray(t.allOf)) {
     t.allOf.forEach(function(t) {
      M(e, x(t), n, r);
     });
    }
    var s = x(t.not);
    if (s) {
     var a = new R();
     var u = r.newSub();
     M(e, s, a, u);
     if (!a.hasProblems()) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       message: c("notSchemaWarning", "Matches a schema that is not allowed.")
      });
     }
     u.schemas.forEach(function(e) {
      e.inverted = !e.inverted;
      r.add(e);
     });
    }
    var l = function(t, i) {
     var o = [];
     var s = null;
     t.forEach(function(t) {
      var n = x(t);
      var a = new R();
      var u = r.newSub();
      M(e, n, a, u);
      if (!a.hasProblems()) {
       o.push(n);
      }
      if (!s) {
       s = {
        schema: n,
        validationResult: a,
        matchingSchemas: u
       };
      } else {
       if (!i && !a.hasProblems() && !s.validationResult.hasProblems()) {
        s.matchingSchemas.merge(u);
        s.validationResult.propertiesMatches += a.propertiesMatches;
        s.validationResult.propertiesValueMatches += a.propertiesValueMatches;
       } else {
        var c = a.compare(s.validationResult);
        if (c > 0) {
         s = {
          schema: n,
          validationResult: a,
          matchingSchemas: u
         };
        } else if (c === 0) {
         s.matchingSchemas.merge(u);
         s.validationResult.mergeEnumValues(a);
        }
       }
      }
     });
     if (o.length > 1 && i) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: 1
       },
       severity: h.Warning,
       message: c("oneOfWarning", "Matches multiple schemas when only one must validate.")
      });
     }
     if (s !== null) {
      n.merge(s.validationResult);
      n.propertiesMatches += s.validationResult.propertiesMatches;
      n.propertiesValueMatches += s.validationResult.propertiesValueMatches;
      r.merge(s.matchingSchemas);
     }
     return o.length;
    };
    if (Array.isArray(t.anyOf)) {
     l(t.anyOf, false);
    }
    if (Array.isArray(t.oneOf)) {
     l(t.oneOf, true);
    }
    if (Array.isArray(t.enum)) {
     var d = O(e);
     var p = false;
     for (var m = 0, v = t.enum; m < v.length; m++) {
      var g = v[m];
      if (o(d, g)) {
       p = true;
       break;
      }
     }
     n.enumValues = t.enum;
     n.enumValueMatch = p;
     if (!p) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       code: f.EnumValueMismatch,
       message: t.errorMessage || c("enumWarning", "Value is not accepted. Valid values: {0}.", t.enum.map(function(e) {
        return JSON.stringify(e);
       }).join(", "))
      });
     }
    }
    if (t.const) {
     var d = O(e);
     if (!o(d, t.const)) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       code: f.EnumValueMismatch,
       message: t.errorMessage || c("constWarning", "Value must be {0}.", JSON.stringify(t.const))
      });
      n.enumValueMatch = false;
     } else {
      n.enumValueMatch = true;
     }
     n.enumValues = [ t.const ];
    }
    if (t.deprecationMessage && e.parent) {
     n.problems.push({
      location: {
       offset: e.parent.offset,
       length: e.parent.length
      },
      severity: h.Warning,
      message: t.deprecationMessage
     });
    }
   }
   function s(e, t, n, r) {
    var i = e.value;
    if (typeof t.multipleOf === "number") {
     if (i % t.multipleOf !== 0) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       message: c("multipleOfWarning", "Value is not divisible by {0}.", t.multipleOf)
      });
     }
    }
    function o(e, t) {
     if (typeof t === "number") {
      return t;
     }
     if (typeof t === "boolean" && t) {
      return e;
     }
     return void 0;
    }
    function s(e, t) {
     if (typeof t !== "boolean" || !t) {
      return e;
     }
     return void 0;
    }
    var a = o(t.minimum, t.exclusiveMinimum);
    if (typeof a === "number" && i <= a) {
     n.problems.push({
      location: {
       offset: e.offset,
       length: e.length
      },
      severity: h.Warning,
      message: c("exclusiveMinimumWarning", "Value is below the exclusive minimum of {0}.", a)
     });
    }
    var u = o(t.maximum, t.exclusiveMaximum);
    if (typeof u === "number" && i >= u) {
     n.problems.push({
      location: {
       offset: e.offset,
       length: e.length
      },
      severity: h.Warning,
      message: c("exclusiveMaximumWarning", "Value is above the exclusive maximum of {0}.", u)
     });
    }
    var f = s(t.minimum, t.exclusiveMinimum);
    if (typeof f === "number" && i < f) {
     n.problems.push({
      location: {
       offset: e.offset,
       length: e.length
      },
      severity: h.Warning,
      message: c("minimumWarning", "Value is below the minimum of {0}.", f)
     });
    }
    var l = s(t.maximum, t.exclusiveMaximum);
    if (typeof l === "number" && i > l) {
     n.problems.push({
      location: {
       offset: e.offset,
       length: e.length
      },
      severity: h.Warning,
      message: c("maximumWarning", "Value is above the maximum of {0}.", l)
     });
    }
   }
   function u(e, t, n, r) {
    if (t.minLength && e.value.length < t.minLength) {
     n.problems.push({
      location: {
       offset: e.offset,
       length: e.length
      },
      severity: h.Warning,
      message: c("minLengthWarning", "String is shorter than the minimum length of {0}.", t.minLength)
     });
    }
    if (t.maxLength && e.value.length > t.maxLength) {
     n.problems.push({
      location: {
       offset: e.offset,
       length: e.length
      },
      severity: h.Warning,
      message: c("maxLengthWarning", "String is longer than the maximum length of {0}.", t.maxLength)
     });
    }
    if (t.pattern) {
     var i = new RegExp(t.pattern);
     if (!i.test(e.value)) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       message: t.patternErrorMessage || t.errorMessage || c("patternWarning", 'String does not match the pattern of "{0}".', t.pattern)
      });
     }
    }
    if (t.format) {
     switch (t.format) {
     case "uri":
     case "uri-reference":
      {
       var o = void 0;
       if (!e.value) {
        o = c("uriEmpty", "URI expected.");
       } else {
        try {
         var s = a["default"].parse(e.value);
         if (!s.scheme && t.format === "uri") {
          o = c("uriSchemeMissing", "URI with a scheme is expected.");
         }
        } catch (e) {
         o = e.message;
        }
       }
       if (o) {
        n.problems.push({
         location: {
          offset: e.offset,
          length: e.length
         },
         severity: h.Warning,
         message: t.patternErrorMessage || t.errorMessage || c("uriFormatWarning", "String is not a URI: {0}", o)
        });
       }
      }
      break;

     case "email":
      {
       if (!e.value.match(d)) {
        n.problems.push({
         location: {
          offset: e.offset,
          length: e.length
         },
         severity: h.Warning,
         message: t.patternErrorMessage || t.errorMessage || c("emailFormatWarning", "String is not an e-mail address.")
        });
       }
      }
      break;

     case "color-hex":
      {
       if (!e.value.match(l)) {
        n.problems.push({
         location: {
          offset: e.offset,
          length: e.length
         },
         severity: h.Warning,
         message: t.patternErrorMessage || t.errorMessage || c("colorHexFormatWarning", "Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.")
        });
       }
      }
      break;

     default:
     }
    }
   }
   function p(e, t, n, r) {
    if (Array.isArray(t.items)) {
     var i = t.items;
     i.forEach(function(t, o) {
      var s = x(t);
      var a = new R();
      var u = e.items[o];
      if (u) {
       M(u, s, a, r);
       n.mergePropertyMatch(a);
      } else if (e.items.length >= i.length) {
       n.propertiesValueMatches++;
      }
     });
     if (e.items.length > i.length) {
      if (typeof t.additionalItems === "object") {
       for (var o = i.length; o < e.items.length; o++) {
        var s = new R();
        M(e.items[o], t.additionalItems, s, r);
        n.mergePropertyMatch(s);
       }
      } else if (t.additionalItems === false) {
       n.problems.push({
        location: {
         offset: e.offset,
         length: e.length
        },
        severity: h.Warning,
        message: c("additionalItemsWarning", "Array has too many items according to schema. Expected {0} or fewer.", i.length)
       });
      }
     }
    } else {
     var a = x(t.items);
     if (a) {
      e.items.forEach(function(e) {
       var t = new R();
       M(e, a, t, r);
       n.mergePropertyMatch(t);
      });
     }
    }
    var u = x(t.contains);
    if (u) {
     var f = e.items.some(function(e) {
      var t = new R();
      M(e, u, t, S.instance);
      return !t.hasProblems();
     });
     if (!f) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       message: t.errorMessage || c("requiredItemMissingWarning", "Array does not contain required item.", t.minItems)
      });
     }
    }
    if (t.minItems && e.items.length < t.minItems) {
     n.problems.push({
      location: {
       offset: e.offset,
       length: e.length
      },
      severity: h.Warning,
      message: c("minItemsWarning", "Array has too few items. Expected {0} or more.", t.minItems)
     });
    }
    if (t.maxItems && e.items.length > t.maxItems) {
     n.problems.push({
      location: {
       offset: e.offset,
       length: e.length
      },
      severity: h.Warning,
      message: c("maxItemsWarning", "Array has too many items. Expected {0} or fewer.", t.minItems)
     });
    }
    if (t.uniqueItems === true) {
     var l = O(e);
     var d = l.some(function(e, t) {
      return t !== l.lastIndexOf(e);
     });
     if (d) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       message: c("uniqueItemsWarning", "Array has duplicate items.")
      });
     }
    }
   }
   function m(e, t, n, r) {
    var i = Object.create(null);
    var o = [];
    e.properties.forEach(function(e) {
     var t = e.keyNode.value;
     i[t] = e.valueNode;
     o.push(t);
    });
    if (Array.isArray(t.required)) {
     t.required.forEach(function(t) {
      if (!i[t]) {
       var r = e.parent && e.parent.type === "property" && e.parent.keyNode;
       var o = r ? {
        offset: r.offset,
        length: r.length
       } : {
        offset: e.offset,
        length: 1
       };
       n.problems.push({
        location: o,
        severity: h.Warning,
        message: c("MissingRequiredPropWarning", 'Missing property "{0}".', t)
       });
      }
     });
    }
    var s = function(e) {
     var t = o.indexOf(e);
     while (t >= 0) {
      o.splice(t, 1);
      t = o.indexOf(e);
     }
    };
    if (t.properties) {
     Object.keys(t.properties).forEach(function(e) {
      s(e);
      var o = t.properties[e];
      var a = i[e];
      if (a) {
       if (typeof o === "boolean") {
        if (!o) {
         var u = a.parent;
         n.problems.push({
          location: {
           offset: u.keyNode.offset,
           length: u.keyNode.length
          },
          severity: h.Warning,
          message: t.errorMessage || c("DisallowedExtraPropWarning", "Property {0} is not allowed.", e)
         });
        } else {
         n.propertiesMatches++;
         n.propertiesValueMatches++;
        }
       } else {
        var f = new R();
        M(a, o, f, r);
        n.mergePropertyMatch(f);
       }
      }
     });
    }
    if (t.patternProperties) {
     Object.keys(t.patternProperties).forEach(function(e) {
      var a = new RegExp(e);
      o.slice(0).forEach(function(o) {
       if (a.test(o)) {
        s(o);
        var u = i[o];
        if (u) {
         var f = t.patternProperties[e];
         if (typeof f === "boolean") {
          if (!f) {
           var l = u.parent;
           n.problems.push({
            location: {
             offset: l.keyNode.offset,
             length: l.keyNode.length
            },
            severity: h.Warning,
            message: t.errorMessage || c("DisallowedExtraPropWarning", "Property {0} is not allowed.", o)
           });
          } else {
           n.propertiesMatches++;
           n.propertiesValueMatches++;
          }
         } else {
          var d = new R();
          M(u, f, d, r);
          n.mergePropertyMatch(d);
         }
        }
       }
      });
     });
    }
    if (typeof t.additionalProperties === "object") {
     o.forEach(function(e) {
      var o = i[e];
      if (o) {
       var s = new R();
       M(o, t.additionalProperties, s, r);
       n.mergePropertyMatch(s);
      }
     });
    } else if (t.additionalProperties === false) {
     if (o.length > 0) {
      o.forEach(function(e) {
       var r = i[e];
       if (r) {
        var o = r.parent;
        n.problems.push({
         location: {
          offset: o.keyNode.offset,
          length: o.keyNode.length
         },
         severity: h.Warning,
         message: t.errorMessage || c("DisallowedExtraPropWarning", "Property {0} is not allowed.", e)
        });
       }
      });
     }
    }
    if (t.maxProperties) {
     if (e.properties.length > t.maxProperties) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       message: c("MaxPropWarning", "Object has more properties than limit of {0}.", t.maxProperties)
      });
     }
    }
    if (t.minProperties) {
     if (e.properties.length < t.minProperties) {
      n.problems.push({
       location: {
        offset: e.offset,
        length: e.length
       },
       severity: h.Warning,
       message: c("MinPropWarning", "Object has fewer properties than the required number of {0}", t.minProperties)
      });
     }
    }
    if (t.dependencies) {
     Object.keys(t.dependencies).forEach(function(o) {
      var s = i[o];
      if (s) {
       var a = t.dependencies[o];
       if (Array.isArray(a)) {
        a.forEach(function(t) {
         if (!i[t]) {
          n.problems.push({
           location: {
            offset: e.offset,
            length: e.length
           },
           severity: h.Warning,
           message: c("RequiredDependentPropWarning", "Object is missing property {0} required by property {1}.", t, o)
          });
         } else {
          n.propertiesValueMatches++;
         }
        });
       } else {
        var u = x(a);
        if (u) {
         var f = new R();
         M(e, u, f, r);
         n.mergePropertyMatch(f);
        }
       }
      }
     });
    }
    var a = x(t.propertyNames);
    if (a) {
     e.properties.forEach(function(e) {
      var t = e.keyNode;
      if (t) {
       M(t, a, n, S.instance);
      }
     });
    }
   }
  }
  function N(e, t) {
   var n = [];
   var r = e.getText();
   var o = i["createScanner"](r, false);
   var s = t && t.collectComments ? [] : void 0;
   function a() {
    while (true) {
     var e = o.scan();
     p();
     switch (e) {
     case 12:
     case 13:
      if (Array.isArray(s)) {
       s.push({
        offset: o.getTokenOffset(),
        length: o.getTokenLength()
       });
      }
      break;

     case 15:
     case 14:
      break;

     default:
      return e;
     }
    }
   }
   function u(e) {
    if (o.getToken() === e) {
     a();
     return true;
    }
    return false;
   }
   function l(e, t, r) {
    if (n.length === 0 || n[n.length - 1].location.offset !== r.offset) {
     n.push({
      message: e,
      location: r,
      code: t,
      severity: h.Error
     });
    }
   }
   function d(e, t, n, i, s) {
    if (n === void 0) {
     n = null;
    }
    if (i === void 0) {
     i = [];
    }
    if (s === void 0) {
     s = [];
    }
    var u = o.getTokenOffset();
    var c = o.getTokenOffset() + o.getTokenLength();
    if (u === c && u > 0) {
     u--;
     while (u > 0 && /\s/.test(r.charAt(u))) {
      u--;
     }
     c = u + 1;
    }
    l(e, t, {
     offset: u,
     length: c - u
    });
    if (n) {
     x(n, false);
    }
    if (i.length + s.length > 0) {
     var f = o.getToken();
     while (f !== 17) {
      if (i.indexOf(f) !== -1) {
       a();
       break;
      } else if (s.indexOf(f) !== -1) {
       break;
      }
      f = a();
     }
    }
    return n;
   }
   function p() {
    switch (o.getTokenError()) {
    case 4:
     d(c("InvalidUnicode", "Invalid unicode sequence in string."), f.InvalidUnicode);
     return true;

    case 5:
     d(c("InvalidEscapeCharacter", "Invalid escape character in string."), f.InvalidEscapeCharacter);
     return true;

    case 3:
     d(c("UnexpectedEndOfNumber", "Unexpected end of number."), f.UnexpectedEndOfNumber);
     return true;

    case 1:
     d(c("UnexpectedEndOfComment", "Unexpected end of comment."), f.UnexpectedEndOfComment);
     return true;

    case 2:
     d(c("UnexpectedEndOfString", "Unexpected end of string."), f.UnexpectedEndOfString);
     return true;

    case 6:
     d(c("InvalidCharacter", "Invalid characters in string. Control characters must be escaped."), f.InvalidCharacter);
     return true;
    }
    return false;
   }
   function x(e, t) {
    e.length = o.getTokenOffset() + o.getTokenLength() - e.offset;
    if (t) {
     a();
    }
    return e;
   }
   function T(e) {
    if (o.getToken() !== 3) {
     return null;
    }
    var t = new g(e, o.getTokenOffset());
    a();
    var n = 0;
    var r = false;
    while (o.getToken() !== 4 && o.getToken() !== 17) {
     if (o.getToken() === 5) {
      if (!r) {
       d(c("ValueExpected", "Value expected"), f.ValueExpected);
      }
      var i = o.getTokenOffset();
      a();
      if (o.getToken() === 4) {
       if (r) {
        l(c("TrailingComma", "Trailing comma"), f.TrailingComma, {
         offset: i,
         length: 1
        });
       }
       continue;
      }
     } else if (r) {
      d(c("ExpectedComma", "Expected comma"), f.CommaExpected);
     }
     var s = O(t, n++);
     if (!s) {
      d(c("PropertyExpected", "Value expected"), f.ValueExpected, null, [], [ 4, 5 ]);
     } else {
      t.items.push(s);
     }
     r = true;
    }
    if (o.getToken() !== 4) {
     return d(c("ExpectedCloseBracket", "Expected comma or closing bracket"), f.CommaOrCloseBacketExpected, t);
    }
    return x(t, true);
   }
   function _(t, r) {
    var i = new C(t, o.getTokenOffset());
    var s = R(i);
    if (!s) {
     if (o.getToken() === 16) {
      d(c("DoubleQuotesExpected", "Property keys must be doublequoted"), f.Undefined);
      var u = new b(i, o.getTokenOffset(), o.getTokenLength());
      u.value = o.getTokenValue();
      s = u;
      a();
     } else {
      return null;
     }
    }
    i.keyNode = s;
    var l = r[s.value];
    if (l) {
     n.push({
      location: {
       offset: i.keyNode.offset,
       length: i.keyNode.length
      },
      message: c("DuplicateKeyWarning", "Duplicate object key"),
      code: f.Undefined,
      severity: h.Warning
     });
     if (typeof l === "object") {
      n.push({
       location: {
        offset: l.keyNode.offset,
        length: l.keyNode.length
       },
       message: c("DuplicateKeyWarning", "Duplicate object key"),
       code: f.Undefined,
       severity: h.Warning
      });
     }
     r[s.value] = true;
    } else {
     r[s.value] = i;
    }
    if (o.getToken() === 6) {
     i.colonOffset = o.getTokenOffset();
     a();
    } else {
     d(c("ColonExpected", "Colon expected"), f.ColonExpected);
     if (o.getToken() === 10 && e.positionAt(s.offset + s.length).line < e.positionAt(o.getTokenOffset()).line) {
      i.length = s.length;
      return i;
     }
    }
    var p = O(i, s.value);
    if (!p) {
     return d(c("ValueExpected", "Value expected"), f.ValueExpected, i, [], [ 2, 5 ]);
    }
    i.valueNode = p;
    i.length = p.offset + p.length - i.offset;
    return i;
   }
   function S(e) {
    if (o.getToken() !== 1) {
     return null;
    }
    var t = new w(e, o.getTokenOffset());
    var n = Object.create(null);
    a();
    var r = false;
    while (o.getToken() !== 2 && o.getToken() !== 17) {
     if (o.getToken() === 5) {
      if (!r) {
       d(c("PropertyExpected", "Property expected"), f.PropertyExpected);
      }
      var i = o.getTokenOffset();
      a();
      if (o.getToken() === 2) {
       if (r) {
        l(c("TrailingComma", "Trailing comma"), f.TrailingComma, {
         offset: i,
         length: 1
        });
       }
       continue;
      }
     } else if (r) {
      d(c("ExpectedComma", "Expected comma"), f.CommaExpected);
     }
     var s = _(t, n);
     if (!s) {
      d(c("PropertyExpected", "Property expected"), f.PropertyExpected, null, [], [ 2, 5 ]);
     } else {
      t.properties.push(s);
     }
     r = true;
    }
    if (o.getToken() !== 2) {
     return d(c("ExpectedCloseBrace", "Expected comma or closing brace"), f.CommaOrCloseBraceExpected, t);
    }
    return x(t, true);
   }
   function R(e) {
    if (o.getToken() !== 10) {
     return null;
    }
    var t = new b(e, o.getTokenOffset());
    t.value = o.getTokenValue();
    return x(t, true);
   }
   function E(e) {
    if (o.getToken() !== 11) {
     return null;
    }
    var t = new y(e, o.getTokenOffset());
    if (o.getTokenError() === 0) {
     var n = o.getTokenValue();
     try {
      var r = JSON.parse(n);
      if (typeof r !== "number") {
       return d(c("InvalidNumberFormat", "Invalid number format."), f.Undefined, t);
      }
      t.value = r;
     } catch (e) {
      return d(c("InvalidNumberFormat", "Invalid number format."), f.Undefined, t);
     }
     t.isInteger = n.indexOf(".") === -1;
    }
    return x(t, true);
   }
   function k(e) {
    var t;
    switch (o.getToken()) {
    case 7:
     return x(new m(e, o.getTokenOffset()), true);

    case 8:
     return x(new v(e, true, o.getTokenOffset()), true);

    case 9:
     return x(new v(e, false, o.getTokenOffset()), true);

    default:
     return null;
    }
   }
   function O(e, t) {
    return T(e) || S(e) || R(e) || E(e) || k(e);
   }
   var A = null;
   var P = a();
   if (P !== 17) {
    A = O(null, null);
    if (!A) {
     d(c("Invalid symbol", "Expected a JSON object, array or literal."), f.Undefined);
    } else if (o.getToken() !== 17) {
     d(c("End of file expected", "End of file expected."), f.Undefined);
    }
   }
   return new j(A, n, s);
  }
  function q(e, t, n) {
   if (e !== null && typeof e === "object") {
    var r = t + "\t";
    if (Array.isArray(e)) {
     if (e.length === 0) {
      return "[]";
     }
     var i = "[\n";
     for (var o = 0; o < e.length; o++) {
      i += r + q(e[o], r, n);
      if (o < e.length - 1) {
       i += ",";
      }
      i += "\n";
     }
     i += t + "]";
     return i;
    } else {
     var s = Object.keys(e);
     if (s.length === 0) {
      return "{}";
     }
     var i = "{\n";
     for (var o = 0; o < s.length; o++) {
      var a = s[o];
      i += r + JSON.stringify(a) + ": " + q(e[a], r, n);
      if (o < s.length - 1) {
       i += ",";
      }
      i += "\n";
     }
     i += t + "}";
     return i;
    }
   }
   return n(e);
  }
  function I(e, t) {
   if (e.length < t.length) {
    return false;
   }
   for (var n = 0; n < t.length; n++) {
    if (e[n] !== t[n]) {
     return false;
    }
   }
   return true;
  }
  function D(e, t) {
   var n = e.length - t.length;
   if (n > 0) {
    return e.lastIndexOf(t) === n;
   } else if (n === 0) {
    return e === t;
   } else {
    return false;
   }
  }
  function F(e) {
   return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*");
  }
  function L(e, t) {
   var n = "";
   while (t > 0) {
    if ((t & 1) === 1) {
     n += e;
    }
    e += e;
    t = t >>> 1;
   }
   return n;
  }
  var W = s["loadMessageBundle"]();
  var V = function() {
   function e(e, t, n) {
    if (t === void 0) {
     t = [];
    }
    this.templateVarIdCounter = 0;
    this.schemaService = e;
    this.contributions = t;
    this.promise = n || Promise;
   }
   e.prototype.doResolve = function(e) {
    for (var t = this.contributions.length - 1; t >= 0; t--) {
     if (this.contributions[t].resolveCompletion) {
      var n = this.contributions[t].resolveCompletion(e);
      if (n) {
       return n;
      }
     }
    }
    return this.promise.resolve(e);
   };
   e.prototype.doComplete = function(e, t, n) {
    var i = this;
    var o = {
     items: [],
     isIncomplete: false
    };
    var s = e.offsetAt(t);
    var a = n.getNodeFromOffsetEndInclusive(s);
    if (this.isInComment(e, a ? a.offset : 0, s)) {
     return Promise.resolve(o);
    }
    var u = this.getCurrentWord(e, s);
    var c = null;
    if (a && (a.type === "string" || a.type === "number" || a.type === "boolean" || a.type === "null")) {
     c = r["Range"].create(e.positionAt(a.offset), e.positionAt(a.offset + a.length));
    } else {
     var f = s - u.length;
     if (f > 0 && e.getText()[f - 1] === '"') {
      f--;
     }
     c = r["Range"].create(e.positionAt(f), t);
    }
    var l = {};
    var d = {
     add: function(e) {
      var t = l[e.label];
      if (!t) {
       l[e.label] = e;
       if (c) {
        e.textEdit = r["TextEdit"].replace(c, e.insertText);
       }
       o.items.push(e);
      } else if (!t.documentation) {
       t.documentation = e.documentation;
      }
     },
     setAsIncomplete: function() {
      o.isIncomplete = true;
     },
     error: function(e) {
      console.error(e);
     },
     log: function(e) {
      console.log(e);
     },
     getNumberOfProposals: function() {
      return o.items.length;
     }
    };
    return this.schemaService.getSchemaForResource(e.uri, n).then(function(t) {
     var f = [];
     var h = true;
     var p = "";
     var m = null;
     if (a) {
      if (a.type === "string") {
       var v = a.parent;
       if (v && v.type === "property" && v.keyNode === a) {
        h = !v.valueNode;
        m = v;
        p = e.getText().substr(a.offset + 1, a.length - 2);
        if (v) {
         a = v.parent;
        }
       }
      }
     }
     if (a && a.type === "object") {
      if (a.offset === s) {
       return o;
      }
      var g = a.properties;
      g.forEach(function(e) {
       if (!m || m !== e) {
        l[e.keyNode.value] = r["CompletionItem"].create("__");
       }
      });
      var y = "";
      if (h) {
       y = i.evaluateSeparatorAfter(e, e.offsetAt(c.end));
      }
      if (t) {
       i.getPropertyCompletions(t, n, a, h, y, d);
      } else {
       i.getSchemaLessPropertyCompletions(n, a, p, d);
      }
      var b = A(a);
      i.contributions.forEach(function(t) {
       var n = t.collectPropertyCompletions(e.uri, b, u, h, y === "", d);
       if (n) {
        f.push(n);
       }
      });
      if (!t && u.length > 0 && e.getText().charAt(s - u.length - 1) !== '"') {
       d.add({
        kind: r["CompletionItemKind"].Property,
        label: i.getLabelForValue(u),
        insertText: i.getInsertTextForProperty(u, null, false, y),
        insertTextFormat: r["InsertTextFormat"].Snippet,
        documentation: ""
       });
      }
     }
     var C = {};
     if (t) {
      i.getValueCompletions(t, n, a, s, e, d, C);
     } else {
      i.getSchemaLessValueCompletions(n, a, s, e, d);
     }
     if (i.contributions.length > 0) {
      i.getContributedValueCompletions(n, a, s, e, d, f);
     }
     return i.promise.all(f).then(function() {
      if (d.getNumberOfProposals() === 0) {
       var t = s;
       if (a && (a.type === "string" || a.type === "number" || a.type === "boolean" || a.type === "null")) {
        t = a.offset + a.length;
       }
       var n = i.evaluateSeparatorAfter(e, t);
       i.addFillerValueCompletions(C, n, d);
      }
      return o;
     });
    });
   };
   e.prototype.getPropertyCompletions = function(e, t, n, i, o, s) {
    var a = this;
    var u = t.getMatchingSchemas(e.schema, n.offset);
    u.forEach(function(e) {
     if (e.node === n && !e.inverted) {
      var t = e.schema.properties;
      if (t) {
       Object.keys(t).forEach(function(e) {
        var n = t[e];
        if (typeof n === "object" && !n.deprecationMessage && !n.doNotSuggest) {
         var u = {
          kind: r["CompletionItemKind"].Property,
          label: e,
          insertText: a.getInsertTextForProperty(e, n, i, o),
          insertTextFormat: r["InsertTextFormat"].Snippet,
          filterText: a.getFilterTextForValue(e),
          documentation: n.description || ""
         };
         if (D(u.insertText, "$1" + o)) {
          u.command = {
           title: "Suggest",
           command: "editor.action.triggerSuggest"
          };
         }
         s.add(u);
        }
       });
      }
     }
    });
   };
   e.prototype.getSchemaLessPropertyCompletions = function(e, t, n, i) {
    var o = this;
    var s = function(e) {
     e.properties.forEach(function(e) {
      var t = e.keyNode.value;
      i.add({
       kind: r["CompletionItemKind"].Property,
       label: t,
       insertText: o.getInsertTextForValue(t, ""),
       insertTextFormat: r["InsertTextFormat"].Snippet,
       filterText: o.getFilterTextForValue(t),
       documentation: ""
      });
     });
    };
    if (t.parent) {
     if (t.parent.type === "property") {
      var a = t.parent.keyNode.value;
      e.visit(function(e) {
       if (e.type === "property" && e !== t.parent && e.keyNode.value === a && e.valueNode && e.valueNode.type === "object") {
        s(e.valueNode);
       }
       return true;
      });
     } else if (t.parent.type === "array") {
      t.parent.items.forEach(function(e) {
       if (e.type === "object" && e !== t) {
        s(e);
       }
      });
     }
    } else if (t.type === "object") {
     i.add({
      kind: r["CompletionItemKind"].Property,
      label: "$schema",
      insertText: this.getInsertTextForProperty("$schema", null, true, ""),
      insertTextFormat: r["InsertTextFormat"].Snippet,
      documentation: "",
      filterText: this.getFilterTextForValue("$schema")
     });
    }
   };
   e.prototype.getSchemaLessValueCompletions = function(e, t, n, i, o) {
    var s = this;
    var a = n;
    if (t && (t.type === "string" || t.type === "number" || t.type === "boolean" || t.type === "null")) {
     a = t.offset + t.length;
     t = t.parent;
    }
    if (!t) {
     o.add({
      kind: this.getSuggestionKind("object"),
      label: "Empty object",
      insertText: this.getInsertTextForValue({}, ""),
      insertTextFormat: r["InsertTextFormat"].Snippet,
      documentation: ""
     });
     o.add({
      kind: this.getSuggestionKind("array"),
      label: "Empty array",
      insertText: this.getInsertTextForValue([], ""),
      insertTextFormat: r["InsertTextFormat"].Snippet,
      documentation: ""
     });
     return;
    }
    var u = this.evaluateSeparatorAfter(i, a);
    var c = function(e) {
     if (!P(e.parent, n, true)) {
      o.add({
       kind: s.getSuggestionKind(e.type),
       label: s.getLabelTextForMatchingNode(e, i),
       insertText: s.getInsertTextForMatchingNode(e, i, u),
       insertTextFormat: r["InsertTextFormat"].Snippet,
       documentation: ""
      });
     }
     if (e.type === "boolean") {
      s.addBooleanValueCompletion(!e.value, u, o);
     }
    };
    if (t.type === "property") {
     if (n > t.colonOffset) {
      var f = t.valueNode;
      if (f && (n > f.offset + f.length || f.type === "object" || f.type === "array")) {
       return;
      }
      var l = t.keyNode.value;
      e.visit(function(e) {
       if (e.type === "property" && e.keyNode.value === l && e.valueNode) {
        c(e.valueNode);
       }
       return true;
      });
      if (l === "$schema" && t.parent && !t.parent.parent) {
       this.addDollarSchemaCompletions(u, o);
      }
     }
    }
    if (t.type === "array") {
     if (t.parent && t.parent.type === "property") {
      var d = t.parent.keyNode.value;
      e.visit(function(e) {
       var t = e;
       if (e.type === "property" && t.keyNode.value === d && t.valueNode && t.valueNode.type === "array") {
        t.valueNode.items.forEach(c);
       }
       return true;
      });
     } else {
      t.items.forEach(c);
     }
    }
   };
   e.prototype.getValueCompletions = function(e, t, n, r, i, o, s) {
    var a = this;
    var u = r;
    var c = null;
    var f = null;
    if (n && (n.type === "string" || n.type === "number" || n.type === "boolean" || n.type === "null")) {
     u = n.offset + n.length;
     f = n;
     n = n.parent;
    }
    if (!n) {
     this.addSchemaValueCompletions(e.schema, "", o, s);
     return;
    }
    if (n.type === "property" && r > n.colonOffset) {
     var l = n.valueNode;
     if (l && r > l.offset + l.length) {
      return;
     }
     c = n.keyNode.value;
     n = n.parent;
    }
    if (n && (c !== null || n.type === "array")) {
     var d = this.evaluateSeparatorAfter(i, u);
     var h = t.getMatchingSchemas(e.schema, n.offset, f);
     h.forEach(function(e) {
      if (e.node === n && !e.inverted && e.schema) {
       if (n.type === "array" && e.schema.items) {
        if (Array.isArray(e.schema.items)) {
         var t = a.findItemAtOffset(n, i, r);
         if (t < e.schema.items.length) {
          a.addSchemaValueCompletions(e.schema.items[t], d, o, s);
         }
        } else {
         a.addSchemaValueCompletions(e.schema.items, d, o, s);
        }
       }
       if (e.schema.properties) {
        var u = e.schema.properties[c];
        if (u) {
         a.addSchemaValueCompletions(u, d, o, s);
        }
       }
      }
     });
     if (c === "$schema" && !n.parent) {
      this.addDollarSchemaCompletions(d, o);
     }
     if (s["boolean"]) {
      this.addBooleanValueCompletion(true, d, o);
      this.addBooleanValueCompletion(false, d, o);
     }
     if (s["null"]) {
      this.addNullValueCompletion(d, o);
     }
    }
   };
   e.prototype.getContributedValueCompletions = function(e, t, n, r, i, o) {
    if (!t) {
     this.contributions.forEach(function(e) {
      var t = e.collectDefaultCompletions(r.uri, i);
      if (t) {
       o.push(t);
      }
     });
    } else {
     if (t.type === "string" || t.type === "number" || t.type === "boolean" || t.type === "null") {
      t = t.parent;
     }
     if (t.type === "property" && n > t.colonOffset) {
      var s = t.keyNode.value;
      var a = t.valueNode;
      if (!a || n <= a.offset + a.length) {
       var u = A(t.parent);
       this.contributions.forEach(function(e) {
        var t = e.collectValueCompletions(r.uri, u, s, i);
        if (t) {
         o.push(t);
        }
       });
      }
     }
    }
   };
   e.prototype.addSchemaValueCompletions = function(e, t, n, r) {
    var i = this;
    if (typeof e === "object") {
     this.addEnumValueCompletions(e, t, n);
     this.addDefaultValueCompletions(e, t, n);
     this.collectTypes(e, r);
     if (Array.isArray(e.allOf)) {
      e.allOf.forEach(function(e) {
       return i.addSchemaValueCompletions(e, t, n, r);
      });
     }
     if (Array.isArray(e.anyOf)) {
      e.anyOf.forEach(function(e) {
       return i.addSchemaValueCompletions(e, t, n, r);
      });
     }
     if (Array.isArray(e.oneOf)) {
      e.oneOf.forEach(function(e) {
       return i.addSchemaValueCompletions(e, t, n, r);
      });
     }
    }
   };
   e.prototype.addDefaultValueCompletions = function(e, t, n, i) {
    var o = this;
    if (i === void 0) {
     i = 0;
    }
    var s = false;
    if (e.default) {
     var a = e.type;
     var u = e.default;
     for (var c = i; c > 0; c--) {
      u = [ u ];
      a = "array";
     }
     n.add({
      kind: this.getSuggestionKind(a),
      label: this.getLabelForValue(u),
      insertText: this.getInsertTextForValue(u, t),
      insertTextFormat: r["InsertTextFormat"].Snippet,
      detail: W("json.suggest.default", "Default value")
     });
     s = true;
    }
    if (Array.isArray(e.defaultSnippets)) {
     e.defaultSnippets.forEach(function(a) {
      var u = e.type;
      var c = a.body;
      var f = a.label;
      var l;
      var d;
      if (typeof c !== "undefined") {
       var h = e.type;
       for (var p = i; p > 0; p--) {
        c = [ c ];
        h = "array";
       }
       l = o.getInsertTextForSnippetValue(c, t);
       d = o.getFilterTextForSnippetValue(c);
       f = f || o.getLabelForSnippetValue(c);
      } else if (typeof a.bodyText === "string") {
       var m = "", v = "", g = "";
       for (var p = i; p > 0; p--) {
        m = m + g + "[\n";
        v = v + "\n" + g + "]";
        g += "\t";
        u = "array";
       }
       l = m + g + a.bodyText.split("\n").join("\n" + g) + v + t;
       f = f || l;
       d = l.replace(/[\n]/g, "");
      }
      n.add({
       kind: o.getSuggestionKind(u),
       label: f,
       documentation: a.description,
       insertText: l,
       insertTextFormat: r["InsertTextFormat"].Snippet,
       filterText: d
      });
      s = true;
     });
    }
    if (!s && typeof e.items === "object" && !Array.isArray(e.items)) {
     this.addDefaultValueCompletions(e.items, t, n, i + 1);
    }
   };
   e.prototype.addEnumValueCompletions = function(e, t, n) {
    if (Array.isArray(e.enum)) {
     for (var i = 0, o = e.enum.length; i < o; i++) {
      var s = e.enum[i];
      var a = e.description;
      if (e.enumDescriptions && i < e.enumDescriptions.length) {
       a = e.enumDescriptions[i];
      }
      n.add({
       kind: this.getSuggestionKind(e.type),
       label: this.getLabelForValue(s),
       insertText: this.getInsertTextForValue(s, t),
       insertTextFormat: r["InsertTextFormat"].Snippet,
       documentation: a
      });
     }
    }
   };
   e.prototype.collectTypes = function(e, t) {
    if (Array.isArray(e.enum)) {
     return;
    }
    var n = e.type;
    if (Array.isArray(n)) {
     n.forEach(function(e) {
      return t[e] = true;
     });
    } else {
     t[n] = true;
    }
   };
   e.prototype.addFillerValueCompletions = function(e, t, n) {
    if (e["object"]) {
     n.add({
      kind: this.getSuggestionKind("object"),
      label: "{}",
      insertText: this.getInsertTextForGuessedValue({}, t),
      insertTextFormat: r["InsertTextFormat"].Snippet,
      detail: W("defaults.object", "New object"),
      documentation: ""
     });
    }
    if (e["array"]) {
     n.add({
      kind: this.getSuggestionKind("array"),
      label: "[]",
      insertText: this.getInsertTextForGuessedValue([], t),
      insertTextFormat: r["InsertTextFormat"].Snippet,
      detail: W("defaults.array", "New array"),
      documentation: ""
     });
    }
   };
   e.prototype.addBooleanValueCompletion = function(e, t, n) {
    n.add({
     kind: this.getSuggestionKind("boolean"),
     label: e ? "true" : "false",
     insertText: this.getInsertTextForValue(e, t),
     insertTextFormat: r["InsertTextFormat"].Snippet,
     documentation: ""
    });
   };
   e.prototype.addNullValueCompletion = function(e, t) {
    t.add({
     kind: this.getSuggestionKind("null"),
     label: "null",
     insertText: "null" + e,
     insertTextFormat: r["InsertTextFormat"].Snippet,
     documentation: ""
    });
   };
   e.prototype.addDollarSchemaCompletions = function(e, t) {
    var n = this;
    var i = this.schemaService.getRegisteredSchemaIds(function(e) {
     return e === "http" || e === "https";
    });
    i.forEach(function(i) {
     return t.add({
      kind: r["CompletionItemKind"].Module,
      label: n.getLabelForValue(i),
      filterText: n.getFilterTextForValue(i),
      insertText: n.getInsertTextForValue(i, e),
      insertTextFormat: r["InsertTextFormat"].Snippet,
      documentation: ""
     });
    });
   };
   e.prototype.getLabelForValue = function(e) {
    var t = JSON.stringify(e);
    if (t.length > 57) {
     return t.substr(0, 57).trim() + "...";
    }
    return t;
   };
   e.prototype.getFilterTextForValue = function(e) {
    return JSON.stringify(e);
   };
   e.prototype.getFilterTextForSnippetValue = function(e) {
    return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
   };
   e.prototype.getLabelForSnippetValue = function(e) {
    var t = JSON.stringify(e);
    t = t.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
    if (t.length > 57) {
     return t.substr(0, 57).trim() + "...";
    }
    return t;
   };
   e.prototype.getInsertTextForPlainText = function(e) {
    return e.replace(/[\\\$\}]/g, "\\$&");
   };
   e.prototype.getInsertTextForValue = function(e, t) {
    var n = JSON.stringify(e, null, "\t");
    if (n === "{}") {
     return "{\n\t$1\n}" + t;
    } else if (n === "[]") {
     return "[\n\t$1\n]" + t;
    }
    return this.getInsertTextForPlainText(n + t);
   };
   e.prototype.getInsertTextForSnippetValue = function(e, t) {
    var n = function(e) {
     if (typeof e === "string") {
      if (e[0] === "^") {
       return e.substr(1);
      }
     }
     return JSON.stringify(e);
    };
    return q(e, "", n) + t;
   };
   e.prototype.getInsertTextForGuessedValue = function(e, t) {
    switch (typeof e) {
    case "object":
     if (e === null) {
      return "${1:null}" + t;
     }
     return this.getInsertTextForValue(e, t);

    case "string":
     var n = JSON.stringify(e);
     n = n.substr(1, n.length - 2);
     n = this.getInsertTextForPlainText(n);
     return '"${1:' + n + '}"' + t;

    case "number":
    case "boolean":
     return "${1:" + JSON.stringify(e) + "}" + t;
    }
    return this.getInsertTextForValue(e, t);
   };
   e.prototype.getSuggestionKind = function(e) {
    if (Array.isArray(e)) {
     var t = e;
     e = t.length > 0 ? t[0] : null;
    }
    if (!e) {
     return r["CompletionItemKind"].Value;
    }
    switch (e) {
    case "string":
     return r["CompletionItemKind"].Value;

    case "object":
     return r["CompletionItemKind"].Module;

    case "property":
     return r["CompletionItemKind"].Property;

    default:
     return r["CompletionItemKind"].Value;
    }
   };
   e.prototype.getLabelTextForMatchingNode = function(e, t) {
    switch (e.type) {
    case "array":
     return "[]";

    case "object":
     return "{}";

    default:
     var n = t.getText().substr(e.offset, e.length);
     return n;
    }
   };
   e.prototype.getInsertTextForMatchingNode = function(e, t, n) {
    switch (e.type) {
    case "array":
     return this.getInsertTextForValue([], n);

    case "object":
     return this.getInsertTextForValue({}, n);

    default:
     var r = t.getText().substr(e.offset, e.length) + n;
     return this.getInsertTextForPlainText(r);
    }
   };
   e.prototype.getInsertTextForProperty = function(e, t, n, r) {
    var i = this.getInsertTextForValue(e, "");
    if (!n) {
     return i;
    }
    var o = i + ": ";
    var s;
    var a = 0;
    if (t) {
     if (Array.isArray(t.defaultSnippets)) {
      if (t.defaultSnippets.length === 1) {
       var u = t.defaultSnippets[0].body;
       if (typeof u !== "undefined") {
        s = this.getInsertTextForSnippetValue(u, "");
       }
      }
      a += t.defaultSnippets.length;
     }
     if (t.enum) {
      if (!s && t.enum.length === 1) {
       s = this.getInsertTextForGuessedValue(t.enum[0], "");
      }
      a += t.enum.length;
     }
     if (typeof t.default !== "undefined") {
      if (!s) {
       s = this.getInsertTextForGuessedValue(t.default, "");
      }
      a++;
     }
     if (a === 0) {
      var c = Array.isArray(t.type) ? t.type[0] : t.type;
      if (!c) {
       if (t.properties) {
        c = "object";
       } else if (t.items) {
        c = "array";
       }
      }
      switch (c) {
      case "boolean":
       s = "$1";
       break;

      case "string":
       s = '"$1"';
       break;

      case "object":
       s = "{\n\t$1\n}";
       break;

      case "array":
       s = "[\n\t$1\n]";
       break;

      case "number":
      case "integer":
       s = "${1:0}";
       break;

      case "null":
       s = "${1:null}";
       break;

      default:
       return i;
      }
     }
    }
    if (!s || a > 1) {
     s = "$1";
    }
    return o + s + r;
   };
   e.prototype.getCurrentWord = function(e, t) {
    var n = t - 1;
    var r = e.getText();
    while (n >= 0 && ' \t\n\r\v":{[,]}'.indexOf(r.charAt(n)) === -1) {
     n--;
    }
    return r.substring(n + 1, t);
   };
   e.prototype.evaluateSeparatorAfter = function(e, t) {
    var n = i["createScanner"](e.getText(), true);
    n.setPosition(t);
    var r = n.scan();
    switch (r) {
    case 5:
    case 2:
    case 4:
    case 17:
     return "";

    default:
     return ",";
    }
   };
   e.prototype.findItemAtOffset = function(e, t, n) {
    var r = i["createScanner"](t.getText(), true);
    var o = e.items;
    for (var s = o.length - 1; s >= 0; s--) {
     var a = o[s];
     if (n > a.offset + a.length) {
      r.setPosition(a.offset + a.length);
      var u = r.scan();
      if (u === 5 && n >= r.getTokenOffset() + r.getTokenLength()) {
       return s + 1;
      }
      return s;
     } else if (n >= a.offset) {
      return s;
     }
    }
    return 0;
   };
   e.prototype.isInComment = function(e, t, n) {
    var r = i["createScanner"](e.getText(), false);
    r.setPosition(t);
    var o = r.scan();
    while (o !== 17 && r.getTokenOffset() + r.getTokenLength() < n) {
     o = r.scan();
    }
    return (o === 12 || o === 13) && r.getTokenOffset() <= n;
   };
   return e;
  }();
  var U = function() {
   function e(e, t, n) {
    if (t === void 0) {
     t = [];
    }
    this.schemaService = e;
    this.contributions = t;
    this.promise = n || Promise;
   }
   e.prototype.doHover = function(e, t, n) {
    var i = e.offsetAt(t);
    var o = n.getNodeFromOffset(i);
    if (!o || (o.type === "object" || o.type === "array") && i > o.offset + 1 && i < o.offset + o.length - 1) {
     return this.promise.resolve(null);
    }
    var s = o;
    if (o.type === "string") {
     var a = o.parent;
     if (a.type === "property" && a.keyNode === o) {
      o = a.valueNode;
      if (!o) {
       return this.promise.resolve(null);
      }
     }
    }
    var u = r["Range"].create(e.positionAt(s.offset), e.positionAt(s.offset + s.length));
    var c = function(e) {
     var t = {
      contents: e,
      range: u
     };
     return t;
    };
    var f = A(o);
    for (var l = this.contributions.length - 1; l >= 0; l--) {
     var d = this.contributions[l];
     var h = d.getInfoContribution(e.uri, f);
     if (h) {
      return h.then(function(e) {
       return c(e);
      });
     }
    }
    return this.schemaService.getSchemaForResource(e.uri, n).then(function(e) {
     if (e) {
      var t = n.getMatchingSchemas(e.schema, o.offset);
      var r = null;
      var i = null;
      var s = null, a = null;
      t.every(function(e) {
       if (e.node === o && !e.inverted && e.schema) {
        r = r || e.schema.title;
        i = i || e.schema.markdownDescription || $(e.schema.description);
        if (e.schema.enum) {
         var t = e.schema.enum.indexOf(O(o));
         if (e.schema.markdownEnumDescriptions) {
          s = e.schema.markdownEnumDescriptions[t];
         } else if (e.schema.enumDescriptions) {
          s = $(e.schema.enumDescriptions[t]);
         }
         if (s) {
          a = e.schema.enum[t];
          if (typeof a !== "string") {
           a = JSON.stringify(a);
          }
         }
        }
       }
       return true;
      });
      var u = "";
      if (r) {
       u = $(r);
      }
      if (i) {
       if (u.length > 0) {
        u += "\n\n";
       }
       u += i;
      }
      if (s) {
       if (u.length > 0) {
        u += "\n\n";
       }
       u += "`" + $(a) + "`: " + s;
      }
      return c([ u ]);
     }
     return null;
    });
   };
   return e;
  }();
  function $(e) {
   if (e) {
    var t = e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, "$1\n\n$3");
    return t.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
   }
   return void 0;
  }
  var z = s["loadMessageBundle"]();
  var H = function() {
   function e(e, t) {
    this.jsonSchemaService = e;
    this.promise = t;
    this.validationEnabled = true;
   }
   e.prototype.configure = function(e) {
    if (e) {
     this.validationEnabled = e.validate;
     this.commentSeverity = e.allowComments ? h.Ignore : h.Error;
    }
   };
   e.prototype.doValidation = function(e, t, n) {
    var i = this;
    if (!this.validationEnabled) {
     return this.promise.resolve([]);
    }
    var o = [];
    var s = {};
    var a = function(t) {
     if (t.severity === h.Ignore) {
      return;
     }
     var n = t.location.offset + " " + t.location.length + " " + t.message;
     if (!s[n]) {
      s[n] = true;
      var i = {
       start: e.positionAt(t.location.offset),
       end: e.positionAt(t.location.offset + t.location.length)
      };
      var a = t.severity === h.Error ? r["DiagnosticSeverity"].Error : r["DiagnosticSeverity"].Warning;
      o.push({
       severity: a,
       range: i,
       message: t.message
      });
     }
    };
    return this.jsonSchemaService.getSchemaForResource(e.uri, t).then(function(e) {
     var r = n ? n.trailingCommas : h.Error;
     var s = n ? n.comments : i.commentSeverity;
     if (e) {
      if (e.errors.length && t.root) {
       var u = t.root;
       var c = u.type === "object" ? u.properties[0] : null;
       if (c && c.keyNode.value === "$schema") {
        var l = c.valueNode || c;
        a({
         location: {
          offset: l.offset,
          length: l.length
         },
         message: e.errors[0],
         severity: h.Warning
        });
       } else {
        a({
         location: {
          offset: u.offset,
          length: 1
         },
         message: e.errors[0],
         severity: h.Warning
        });
       }
      } else {
       var d = t.validate(e.schema);
       if (d) {
        d.forEach(a);
       }
      }
      if (B(e.schema)) {
       r = s = h.Ignore;
      }
     }
     t.syntaxErrors.forEach(function(e) {
      if (e.code === f.TrailingComma) {
       e.severity = r;
      }
      a(e);
     });
     o.push.apply(o, t.externalDiagnostic);
     if (s !== h.Ignore) {
      var p = z("InvalidCommentToken", "Comments are not permitted in JSON.");
      t.comments.forEach(function(e) {
       a({
        location: e,
        severity: s,
        message: p
       });
      });
     }
     return o;
    });
   };
   return e;
  }();
  function B(e) {
   if (e && typeof e === "object") {
    if (e.allowComments) {
     return true;
    }
    if (e.allOf) {
     return e.allOf.some(B);
    }
   }
   return false;
  }
  var K = 48;
  var J = 57;
  var G = 65;
  var Y = 70;
  var Q = 97;
  var Z = 102;
  function X(e) {
   if (e < K) {
    return 0;
   }
   if (e <= J) {
    return e - K;
   }
   if (e < Q) {
    e += Q - G;
   }
   if (e >= Q && e <= Z) {
    return e - Q + 10;
   }
   return 0;
  }
  function ee(e) {
   if (e[0] !== "#") {
    return null;
   }
   switch (e.length) {
   case 4:
    return {
     red: X(e.charCodeAt(1)) * 17 / 255,
     green: X(e.charCodeAt(2)) * 17 / 255,
     blue: X(e.charCodeAt(3)) * 17 / 255,
     alpha: 1
    };

   case 5:
    return {
     red: X(e.charCodeAt(1)) * 17 / 255,
     green: X(e.charCodeAt(2)) * 17 / 255,
     blue: X(e.charCodeAt(3)) * 17 / 255,
     alpha: X(e.charCodeAt(4)) * 17 / 255
    };

   case 7:
    return {
     red: (X(e.charCodeAt(1)) * 16 + X(e.charCodeAt(2))) / 255,
     green: (X(e.charCodeAt(3)) * 16 + X(e.charCodeAt(4))) / 255,
     blue: (X(e.charCodeAt(5)) * 16 + X(e.charCodeAt(6))) / 255,
     alpha: 1
    };

   case 9:
    return {
     red: (X(e.charCodeAt(1)) * 16 + X(e.charCodeAt(2))) / 255,
     green: (X(e.charCodeAt(3)) * 16 + X(e.charCodeAt(4))) / 255,
     blue: (X(e.charCodeAt(5)) * 16 + X(e.charCodeAt(6))) / 255,
     alpha: (X(e.charCodeAt(7)) * 16 + X(e.charCodeAt(8))) / 255
    };
   }
   return null;
  }
  function te(e, t, n, r) {
   if (r === void 0) {
    r = 1;
   }
   return {
    red: e / 255,
    green: t / 255,
    blue: n / 255,
    alpha: r
   };
  }
  var ne = function() {
   function e(e) {
    this.schemaService = e;
   }
   e.prototype.findDocumentSymbols = function(e, t) {
    var n = this;
    var i = t.root;
    if (!i) {
     return null;
    }
    var o = e.uri;
    if (o === "vscode://defaultsettings/keybindings.json" || D(o.toLowerCase(), "/user/keybindings.json")) {
     if (i.type === "array") {
      var s = [];
      i.items.forEach(function(t) {
       if (t.type === "object") {
        for (var n = 0, i = t.properties; n < i.length; n++) {
         var o = i[n];
         if (o.keyNode.value === "key") {
          if (o.valueNode) {
           var a = r["Location"].create(e.uri, r["Range"].create(e.positionAt(t.offset), e.positionAt(t.offset + t.length)));
           s.push({
            name: O(o.valueNode),
            kind: r["SymbolKind"].Function,
            location: a
           });
          }
          return;
         }
        }
       }
      });
      return s;
     }
    }
    var a = function(t, i, o) {
     if (i.type === "array") {
      i.items.forEach(function(e) {
       return a(t, e, o);
      });
     } else if (i.type === "object") {
      i.properties.forEach(function(i) {
       var s = r["Location"].create(e.uri, r["Range"].create(e.positionAt(i.offset), e.positionAt(i.offset + i.length)));
       var u = i.valueNode;
       if (u) {
        var c = o ? o + "." + i.keyNode.value : i.keyNode.value;
        t.push({
         name: i.keyNode.value,
         kind: n.getSymbolKind(u.type),
         location: s,
         containerName: o
        });
        a(t, u, c);
       }
      });
     }
     return t;
    };
    var u = a([], i, void 0);
    return u;
   };
   e.prototype.getSymbolKind = function(e) {
    switch (e) {
    case "object":
     return r["SymbolKind"].Module;

    case "string":
     return r["SymbolKind"].String;

    case "number":
     return r["SymbolKind"].Number;

    case "array":
     return r["SymbolKind"].Array;

    case "boolean":
     return r["SymbolKind"].Boolean;

    default:
     return r["SymbolKind"].Variable;
    }
   };
   e.prototype.findDocumentColors = function(e, t) {
    return this.schemaService.getSchemaForResource(e.uri, t).then(function(n) {
     var i = [];
     if (n) {
      var o = t.getMatchingSchemas(n.schema);
      var s = {};
      for (var a = 0, u = o; a < u.length; a++) {
       var c = u[a];
       if (!c.inverted && c.schema && (c.schema.format === "color" || c.schema.format === "color-hex") && c.node && c.node.type === "string") {
        var f = String(c.node.offset);
        if (!s[f]) {
         var l = ee(O(c.node));
         if (l) {
          var d = r["Range"].create(e.positionAt(c.node.offset), e.positionAt(c.node.offset + c.node.length));
          i.push({
           color: l,
           range: d
          });
         }
         s[f] = true;
        }
       }
      }
     }
     return i;
    });
   };
   e.prototype.getColorPresentations = function(e, t, n, i) {
    var o = [];
    var s = Math.round(n.red * 255), a = Math.round(n.green * 255), u = Math.round(n.blue * 255);
    function c(e) {
     var t = e.toString(16);
     return t.length !== 2 ? "0" + t : t;
    }
    var f;
    if (n.alpha === 1) {
     f = "#" + c(s) + c(a) + c(u);
    } else {
     f = "#" + c(s) + c(a) + c(u) + c(Math.round(n.alpha * 255));
    }
    o.push({
     label: f,
     textEdit: r["TextEdit"].replace(i, JSON.stringify(f))
    });
    return o;
   };
   return e;
  }();
  var re = s["loadMessageBundle"]();
  var ie = {
   schemaAssociations: {},
   schemas: {
    "http://json-schema.org/draft-04/schema#": {
     title: re("schema.json", "Describes a JSON file using a schema. See json-schema.org for more info."),
     $schema: "http://json-schema.org/draft-04/schema#",
     definitions: {
      schemaArray: {
       type: "array",
       minItems: 1,
       items: {
        $ref: "#"
       }
      },
      positiveInteger: {
       type: "integer",
       minimum: 0
      },
      positiveIntegerDefault0: {
       allOf: [ {
        $ref: "#/definitions/positiveInteger"
       }, {
        default: 0
       } ]
      },
      simpleTypes: {
       type: "string",
       enum: [ "array", "boolean", "integer", "null", "number", "object", "string" ]
      },
      stringArray: {
       type: "array",
       items: {
        type: "string"
       },
       minItems: 1,
       uniqueItems: true
      }
     },
     type: "object",
     properties: {
      id: {
       type: "string",
       format: "uri",
       description: re("schema.json.id", "A unique identifier for the schema.")
      },
      $schema: {
       type: "string",
       format: "uri",
       description: re("schema.json.$schema", "The schema to verify this document against ")
      },
      title: {
       type: "string",
       description: re("schema.json.title", "A descriptive title of the element")
      },
      description: {
       type: "string",
       description: re("schema.json.description", "A long description of the element. Used in hover menus and suggestions.")
      },
      default: {
       description: re("schema.json.default", "A default value. Used by suggestions.")
      },
      multipleOf: {
       type: "number",
       minimum: 0,
       exclusiveMinimum: true,
       description: re("schema.json.multipleOf", "A number that should cleanly divide the current value (i.e. have no remainder)")
      },
      maximum: {
       type: "number",
       description: re("schema.json.maximum", "The maximum numerical value, inclusive by default.")
      },
      exclusiveMaximum: {
       type: "boolean",
       default: false,
       description: re("schema.json.exclusiveMaximum", "Makes the maximum property exclusive.")
      },
      minimum: {
       type: "number",
       description: re("schema.json.minimum", "The minimum numerical value, inclusive by default.")
      },
      exclusiveMinimum: {
       type: "boolean",
       default: false,
       description: re("schema.json.exclusiveMininum", "Makes the minimum property exclusive.")
      },
      maxLength: {
       allOf: [ {
        $ref: "#/definitions/positiveInteger"
       } ],
       description: re("schema.json.maxLength", "The maximum length of a string.")
      },
      minLength: {
       allOf: [ {
        $ref: "#/definitions/positiveIntegerDefault0"
       } ],
       description: re("schema.json.minLength", "The minimum length of a string.")
      },
      pattern: {
       type: "string",
       format: "regex",
       description: re("schema.json.pattern", "A regular expression to match the string against. It is not implicitly anchored.")
      },
      additionalItems: {
       anyOf: [ {
        type: "boolean"
       }, {
        $ref: "#"
       } ],
       default: {},
       description: re("schema.json.additionalItems", "For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.")
      },
      items: {
       anyOf: [ {
        $ref: "#"
       }, {
        $ref: "#/definitions/schemaArray"
       } ],
       default: {},
       description: re("schema.json.items", "For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.")
      },
      maxItems: {
       allOf: [ {
        $ref: "#/definitions/positiveInteger"
       } ],
       description: re("schema.json.maxItems", "The maximum number of items that can be inside an array. Inclusive.")
      },
      minItems: {
       allOf: [ {
        $ref: "#/definitions/positiveIntegerDefault0"
       } ],
       description: re("schema.json.minItems", "The minimum number of items that can be inside an array. Inclusive.")
      },
      uniqueItems: {
       type: "boolean",
       default: false,
       description: re("schema.json.uniqueItems", "If all of the items in the array must be unique. Defaults to false.")
      },
      maxProperties: {
       allOf: [ {
        $ref: "#/definitions/positiveInteger"
       } ],
       description: re("schema.json.maxProperties", "The maximum number of properties an object can have. Inclusive.")
      },
      minProperties: {
       allOf: [ {
        $ref: "#/definitions/positiveIntegerDefault0"
       } ],
       description: re("schema.json.minProperties", "The minimum number of properties an object can have. Inclusive.")
      },
      required: {
       allOf: [ {
        $ref: "#/definitions/stringArray"
       } ],
       description: re("schema.json.required", "An array of strings that lists the names of all properties required on this object.")
      },
      additionalProperties: {
       anyOf: [ {
        type: "boolean"
       }, {
        $ref: "#"
       } ],
       default: {},
       description: re("schema.json.additionalProperties", "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail.")
      },
      definitions: {
       type: "object",
       additionalProperties: {
        $ref: "#"
       },
       default: {},
       description: re("schema.json.definitions", "Not used for validation. Place subschemas here that you wish to reference inline with $ref")
      },
      properties: {
       type: "object",
       additionalProperties: {
        $ref: "#"
       },
       default: {},
       description: re("schema.json.properties", "A map of property names to schemas for each property.")
      },
      patternProperties: {
       type: "object",
       additionalProperties: {
        $ref: "#"
       },
       default: {},
       description: re("schema.json.patternProperties", "A map of regular expressions on property names to schemas for matching properties.")
      },
      dependencies: {
       type: "object",
       additionalProperties: {
        anyOf: [ {
         $ref: "#"
        }, {
         $ref: "#/definitions/stringArray"
        } ]
       },
       description: re("schema.json.dependencies", "A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.")
      },
      enum: {
       type: "array",
       minItems: 1,
       uniqueItems: true,
       description: re("schema.json.enum", "The set of literal values that are valid")
      },
      type: {
       anyOf: [ {
        $ref: "#/definitions/simpleTypes"
       }, {
        type: "array",
        items: {
         $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: true
       } ],
       description: re("schema.json.type", "Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.")
      },
      format: {
       anyOf: [ {
        type: "string",
        description: re("schema.json.format", "Describes the format expected for the value."),
        enum: [ "date-time", "uri", "email", "hostname", "ipv4", "ipv6", "regex" ]
       }, {
        type: "string"
       } ]
      },
      allOf: {
       allOf: [ {
        $ref: "#/definitions/schemaArray"
       } ],
       description: re("schema.json.allOf", "An array of schemas, all of which must match.")
      },
      anyOf: {
       allOf: [ {
        $ref: "#/definitions/schemaArray"
       } ],
       description: re("schema.json.anyOf", "An array of schemas, where at least one must match.")
      },
      oneOf: {
       allOf: [ {
        $ref: "#/definitions/schemaArray"
       } ],
       description: re("schema.json.oneOf", "An array of schemas, exactly one of which must match.")
      },
      not: {
       allOf: [ {
        $ref: "#"
       } ],
       description: re("schema.json.not", "A schema which must not match.")
      }
     },
     dependencies: {
      exclusiveMaximum: [ "maximum" ],
      exclusiveMinimum: [ "minimum" ]
     },
     default: {}
    }
   }
  };
  var oe = s["loadMessageBundle"]();
  var se = function() {
   function e(e) {
    try {
     this.patternRegExp = new RegExp(F(e) + "$");
    } catch (e) {
     this.patternRegExp = null;
    }
    this.schemas = [];
   }
   e.prototype.addSchema = function(e) {
    this.schemas.push(e);
   };
   e.prototype.matchesPattern = function(e) {
    return this.patternRegExp && this.patternRegExp.test(e);
   };
   e.prototype.getSchemas = function() {
    return this.schemas;
   };
   return e;
  }();
  var ae = function() {
   function e(e, t, n) {
    this.service = e;
    this.url = t;
    if (n) {
     this.unresolvedSchema = this.service.promise.resolve(new ue(n));
    }
   }
   e.prototype.getUnresolvedSchema = function() {
    if (!this.unresolvedSchema) {
     this.unresolvedSchema = this.service.loadSchema(this.url);
    }
    return this.unresolvedSchema;
   };
   e.prototype.getResolvedSchema = function() {
    var e = this;
    if (!this.resolvedSchema) {
     this.resolvedSchema = this.getUnresolvedSchema().then(function(t) {
      return e.service.resolveSchemaContent(t, e.url);
     });
    }
    return this.resolvedSchema;
   };
   e.prototype.clearSchema = function() {
    this.resolvedSchema = null;
    this.unresolvedSchema = null;
   };
   return e;
  }();
  var ue = function() {
   function e(e, t) {
    if (t === void 0) {
     t = [];
    }
    this.schema = e;
    this.errors = t;
   }
   return e;
  }();
  var ce = function() {
   function e(e, t) {
    if (t === void 0) {
     t = [];
    }
    this.schema = e;
    this.errors = t;
   }
   e.prototype.getSection = function(e) {
    return x(this.getSectionRecursive(e, this.schema));
   };
   e.prototype.getSectionRecursive = function(e, t) {
    var n = this;
    if (!t || typeof t === "boolean" || e.length === 0) {
     return t;
    }
    var r = e.shift();
    if (t.properties && typeof t.properties[r]) {
     return this.getSectionRecursive(e, t.properties[r]);
    } else if (t.patternProperties) {
     Object.keys(t.patternProperties).forEach(function(i) {
      var o = new RegExp(i);
      if (o.test(r)) {
       return n.getSectionRecursive(e, t.patternProperties[i]);
      }
     });
    } else if (typeof t.additionalProperties === "object") {
     return this.getSectionRecursive(e, t.additionalProperties);
    } else if (r.match("[0-9]+")) {
     if (Array.isArray(t.items)) {
      var i = parseInt(r, 10);
      if (!isNaN(i) && t.items[i]) {
       return this.getSectionRecursive(e, t.items[i]);
      }
     } else if (t.items) {
      return this.getSectionRecursive(e, t.items);
     }
    }
    return null;
   };
   return e;
  }();
  var fe = function() {
   function e(e, t, n) {
    this.contextService = t;
    this.requestService = e;
    this.promiseConstructor = n || Promise;
    this.callOnDispose = [];
    this.contributionSchemas = {};
    this.contributionAssociations = {};
    this.schemasById = {};
    this.filePatternAssociations = [];
    this.filePatternAssociationById = {};
    this.registeredSchemasIds = {};
   }
   e.prototype.getRegisteredSchemaIds = function(e) {
    return Object.keys(this.registeredSchemasIds).filter(function(t) {
     var n = a["default"].parse(t).scheme;
     return n !== "schemaservice" && (!e || e(n));
    });
   };
   Object.defineProperty(e.prototype, "promise", {
    get: function() {
     return this.promiseConstructor;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.dispose = function() {
    while (this.callOnDispose.length > 0) {
     this.callOnDispose.pop()();
    }
   };
   e.prototype.onResourceChange = function(e) {
    e = this.normalizeId(e);
    var t = this.schemasById[e];
    if (t) {
     t.clearSchema();
     return true;
    }
    return false;
   };
   e.prototype.normalizeId = function(e) {
    return a["default"].parse(e).toString();
   };
   e.prototype.setSchemaContributions = function(e) {
    var t = this;
    if (e.schemas) {
     var n = e.schemas;
     for (var r in n) {
      var i = this.normalizeId(r);
      this.contributionSchemas[i] = this.addSchemaHandle(i, n[r]);
     }
    }
    if (e.schemaAssociations) {
     var o = e.schemaAssociations;
     for (var s in o) {
      var a = o[s];
      this.contributionAssociations[s] = a;
      var u = this.getOrAddFilePatternAssociation(s);
      a.forEach(function(e) {
       var n = t.normalizeId(e);
       u.addSchema(n);
      });
     }
    }
   };
   e.prototype.addSchemaHandle = function(e, t) {
    var n = new ae(this, e, t);
    this.schemasById[e] = n;
    return n;
   };
   e.prototype.getOrAddSchemaHandle = function(e, t) {
    return this.schemasById[e] || this.addSchemaHandle(e, t);
   };
   e.prototype.getOrAddFilePatternAssociation = function(e) {
    var t = this.filePatternAssociationById[e];
    if (!t) {
     t = new se(e);
     this.filePatternAssociationById[e] = t;
     this.filePatternAssociations.push(t);
    }
    return t;
   };
   e.prototype.registerExternalSchema = function(e, t, n) {
    var r = this;
    if (t === void 0) {
     t = null;
    }
    var i = this.normalizeId(e);
    this.registeredSchemasIds[i] = true;
    if (t) {
     t.forEach(function(e) {
      r.getOrAddFilePatternAssociation(e).addSchema(i);
     });
    }
    return n ? this.addSchemaHandle(i, n) : this.getOrAddSchemaHandle(i);
   };
   e.prototype.clearExternalSchemas = function() {
    var e = this;
    this.schemasById = {};
    this.filePatternAssociations = [];
    this.filePatternAssociationById = {};
    this.registeredSchemasIds = {};
    for (var t in this.contributionSchemas) {
     this.schemasById[t] = this.contributionSchemas[t];
     this.registeredSchemasIds[t] = true;
    }
    for (var n in this.contributionAssociations) {
     var r = this.getOrAddFilePatternAssociation(n);
     this.contributionAssociations[n].forEach(function(t) {
      var n = e.normalizeId(t);
      r.addSchema(n);
     });
    }
   };
   e.prototype.getResolvedSchema = function(e) {
    var t = this.normalizeId(e);
    var n = this.schemasById[t];
    if (n) {
     return n.getResolvedSchema();
    }
    return this.promise.resolve(null);
   };
   e.prototype.loadSchema = function(e) {
    if (!this.requestService) {
     var t = oe("json.schema.norequestservice", "Unable to load schema from '{0}'. No schema request service available", le(e));
     return this.promise.resolve(new ue({}, [ t ]));
    }
    return this.requestService(e).then(function(t) {
     if (!t) {
      var n = oe("json.schema.nocontent", "Unable to load schema from '{0}': No content.", le(e));
      return new ue({}, [ n ]);
     }
     var r = {};
     var o = [];
     r = i["parse"](t, o);
     var s = o.length ? [ oe("json.schema.invalidFormat", "Unable to parse content from '{0}': Parse error at offset {1}.", le(e), o[0].offset) ] : [];
     return new ue(r, s);
    }, function(t) {
     var n = oe("json.schema.unabletoload", "Unable to load schema from '{0}': {1}", le(e), t.toString());
     return new ue({}, [ n ]);
    });
   };
   e.prototype.resolveSchemaContent = function(e, t) {
    var n = this;
    var r = e.errors.slice(0);
    var i = e.schema;
    var o = this.contextService;
    var s = function(e, t) {
     if (!t) {
      return e;
     }
     var n = e;
     if (t[0] === "/") {
      t = t.substr(1);
     }
     t.split("/").some(function(e) {
      n = n[e];
      return !n;
     });
     return n;
    };
    var a = function(e, t, n, i) {
     var o = s(t, i);
     if (o) {
      for (var a in o) {
       if (o.hasOwnProperty(a) && !e.hasOwnProperty(a)) {
        e[a] = o[a];
       }
      }
     } else {
      r.push(oe("json.schema.invalidref", "$ref '{0}' in '{1}' can not be resolved.", i, n));
     }
    };
    var u = function(e, t, i, s) {
     if (o && !/^\w+:\/\/.*/.test(t)) {
      t = o.resolveRelativePath(t, s);
     }
     t = n.normalizeId(t);
     return n.getOrAddSchemaHandle(t).getUnresolvedSchema().then(function(n) {
      if (n.errors.length) {
       var o = i ? t + "#" + i : t;
       r.push(oe("json.schema.problemloadingref", "Problems loading reference '{0}': {1}", o, n.errors[0]));
      }
      a(e, n.schema, t, i);
      return c(e, n.schema, t);
     });
    };
    var c = function(e, t, r) {
     if (!e || typeof e !== "object") {
      return Promise.resolve(null);
     }
     var i = [ e ];
     var o = [];
     var s = [];
     var c = function() {
      var e = [];
      for (var t = 0; t < arguments.length; t++) {
       e[t] = arguments[t];
      }
      for (var n = 0, r = e; n < r.length; n++) {
       var o = r[n];
       if (typeof o === "object") {
        i.push(o);
       }
      }
     };
     var f = function() {
      var e = [];
      for (var t = 0; t < arguments.length; t++) {
       e[t] = arguments[t];
      }
      for (var n = 0, r = e; n < r.length; n++) {
       var o = r[n];
       if (typeof o === "object") {
        for (var s in o) {
         var a = o[s];
         if (typeof a === "object") {
          i.push(a);
         }
        }
       }
      }
     };
     var l = function() {
      var e = [];
      for (var t = 0; t < arguments.length; t++) {
       e[t] = arguments[t];
      }
      for (var n = 0, r = e; n < r.length; n++) {
       var o = r[n];
       if (Array.isArray(o)) {
        for (var s = 0, a = o; s < a.length; s++) {
         var u = a[s];
         if (typeof u === "object") {
          i.push(u);
         }
        }
       }
      }
     };
     var d = function(e) {
      while (e.$ref) {
       var n = e.$ref.split("#", 2);
       delete e.$ref;
       if (n[0].length > 0) {
        s.push(u(e, n[0], n[1], r));
        return;
       } else {
        a(e, t, r, n[1]);
       }
      }
      c(e.items, e.additionalProperties, e.not, e.contains, e.propertyNames);
      f(e.definitions, e.properties, e.patternProperties, e.dependencies);
      l(e.anyOf, e.allOf, e.oneOf, e.items);
     };
     while (i.length) {
      var h = i.pop();
      if (o.indexOf(h) >= 0) {
       continue;
      }
      o.push(h);
      d(h);
     }
     return n.promise.all(s);
    };
    return c(i, i, t).then(function(e) {
     return new ce(i, r);
    });
   };
   e.prototype.getSchemaForResource = function(e, t) {
    if (t && t.root && t.root.type === "object") {
     var n = t.root.properties.filter(function(e) {
      return e.keyNode.value === "$schema" && e.valueNode && e.valueNode.type === "string";
     });
     if (n.length > 0) {
      var r = O(n[0].valueNode);
      if (r && I(r, ".") && this.contextService) {
       r = this.contextService.resolveRelativePath(r, e);
      }
      if (r) {
       var i = this.normalizeId(r);
       return this.getOrAddSchemaHandle(i).getResolvedSchema();
      }
     }
    }
    var o = Object.create(null);
    var s = [];
    for (var a = 0, u = this.filePatternAssociations; a < u.length; a++) {
     var c = u[a];
     if (c.matchesPattern(e)) {
      for (var f = 0, l = c.getSchemas(); f < l.length; f++) {
       var d = l[f];
       if (!o[d]) {
        s.push(d);
        o[d] = true;
       }
      }
     }
    }
    if (s.length > 0) {
     return this.createCombinedSchema(e, s).getResolvedSchema();
    }
    return this.promise.resolve(null);
   };
   e.prototype.createCombinedSchema = function(e, t) {
    if (t.length === 1) {
     return this.getOrAddSchemaHandle(t[0]);
    } else {
     var n = "schemaservice://combinedSchema/" + encodeURIComponent(e);
     var r = {
      allOf: t.map(function(e) {
       return {
        $ref: e
       };
      })
     };
     return this.addSchemaHandle(n, r);
    }
   };
   return e;
  }();
  function le(e) {
   try {
    var t = a["default"].parse(e);
    if (t.scheme === "file") {
     return t.fsPath;
    }
   } catch (e) {}
   return e;
  }
  n.d(t, "getLanguageService", function() {
   return de;
  });
  n.d(t, "TextDocument", function() {
   return r["TextDocument"];
  });
  n.d(t, "Position", function() {
   return r["Position"];
  });
  n.d(t, "CompletionItem", function() {
   return r["CompletionItem"];
  });
  n.d(t, "CompletionList", function() {
   return r["CompletionList"];
  });
  n.d(t, "Range", function() {
   return r["Range"];
  });
  n.d(t, "SymbolInformation", function() {
   return r["SymbolInformation"];
  });
  n.d(t, "Diagnostic", function() {
   return r["Diagnostic"];
  });
  n.d(t, "TextEdit", function() {
   return r["TextEdit"];
  });
  n.d(t, "FormattingOptions", function() {
   return r["FormattingOptions"];
  });
  n.d(t, "MarkedString", function() {
   return r["MarkedString"];
  });
  function de(e) {
   var t = e.promiseConstructor || Promise;
   var n = new fe(e.schemaRequestService, e.workspaceContext, t);
   n.setSchemaContributions(ie);
   var o = new V(n, e.contributions, t);
   var s = new U(n, e.contributions, t);
   var a = new ne(n);
   var u = new H(n, t);
   return {
    configure: function(e) {
     n.clearExternalSchemas();
     if (e.schemas) {
      e.schemas.forEach(function(e) {
       n.registerExternalSchema(e.uri, e.fileMatch, e.schema);
      });
     }
     u.configure(e);
    },
    resetSchema: function(e) {
     return n.onResourceChange(e);
    },
    doValidation: u.doValidation.bind(u),
    parseJSONDocument: function(e) {
     return N(e, {
      collectComments: true
     });
    },
    newJSONDocument: function(e, t) {
     return k(e, t);
    },
    doResolve: o.doResolve.bind(o),
    doComplete: o.doComplete.bind(o),
    findDocumentSymbols: a.findDocumentSymbols.bind(a),
    findColorSymbols: function(e, t) {
     return a.findDocumentColors(e, t).then(function(e) {
      return e.map(function(e) {
       return e.range;
      });
     });
    },
    findDocumentColors: a.findDocumentColors.bind(a),
    getColorPresentations: a.getColorPresentations.bind(a),
    doHover: s.doHover.bind(s),
    format: function(e, t, n) {
     var o = void 0;
     if (t) {
      var s = e.offsetAt(t.start);
      var a = e.offsetAt(t.end) - s;
      o = {
       offset: s,
       length: a
      };
     }
     var u = {
      tabSize: n ? n.tabSize : 4,
      insertSpaces: n ? n.insertSpaces : true,
      eol: "\n"
     };
     return Object(i["format"])(e.getText(), o, u).map(function(t) {
      return r["TextEdit"].replace(r["Range"].create(e.positionAt(t.offset), e.positionAt(t.offset + t.length)), t.content);
     });
    }
   };
  }
 },
 "mw/K": function(e, t) {
  e.exports = require("fs");
 },
 mz6j: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  class r {
   constructor(e) {
    this._value = e;
   }
   asHex() {
    return this._value;
   }
   equals(e) {
    return this.asHex() === e.asHex();
   }
  }
  class i extends r {
   constructor() {
    super([ i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), "-", i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), "-", "4", i._randomHex(), i._randomHex(), i._randomHex(), "-", i._oneOf(i._timeHighBits), i._randomHex(), i._randomHex(), i._randomHex(), "-", i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex() ].join(""));
   }
   static _oneOf(e) {
    return e[Math.floor(e.length * Math.random())];
   }
   static _randomHex() {
    return i._oneOf(i._chars);
   }
  }
  i._chars = [ "0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
  i._timeHighBits = [ "8", "9", "a", "b" ];
  t.empty = new r("00000000-0000-0000-0000-000000000000");
  function o() {
   return new i();
  }
  t.v4 = o;
  const s = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function a(e) {
   return s.test(e);
  }
  t.isUUID = a;
  function u(e) {
   if (!a(e)) {
    throw new Error("invalid uuid");
   }
   return new r(e);
  }
  t.parse = u;
  function c() {
   return o().asHex();
  }
  t.generateUuid = c;
 },
 owkM: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = Object.prototype.toString;
  function i(e) {
   return e === true || e === false;
  }
  t.boolean = i;
  function o(e) {
   return r.call(e) === "[object String]";
  }
  t.string = o;
  function s(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = s;
  function a(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = a;
  function u(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = u;
  function c(e) {
   return Array.isArray(e);
  }
  t.array = c;
  function f(e) {
   return c(e) && e.every(e => o(e));
  }
  t.stringArray = f;
  function l(e, t) {
   return Array.isArray(e) && e.every(t);
  }
  t.typedArray = l;
  function d(e) {
   return e && u(e.then);
  }
  t.thenable = d;
 },
 oyvS: function(e, t) {
  e.exports = require("path");
 },
 qL5x: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("oyvS");
  var i = n("jle/");
  var o = n("PJMN");
  var s = n("Qs2e");
  var a = n("uWpP");
  var u = n("vIUA");
  function c() {
   var e = o.randomBytes(21).toString("hex");
   if (process.platform === "win32") {
    return "\\\\.\\pipe\\vscode-jsonrpc-" + e + "-sock";
   } else {
    return r.join(i.tmpdir(), "vscode-" + e + ".sock");
   }
  }
  t.generateRandomPipeName = c;
  function f(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n;
   var r = new Promise(function(e, t) {
    n = e;
   });
   return new Promise(function(i, o) {
    var c = s.createServer(function(e) {
     c.close();
     n([ new a.SocketMessageReader(e, t), new u.SocketMessageWriter(e, t) ]);
    });
    c.on("error", o);
    c.listen(e, function() {
     c.removeListener("error", o);
     i({
      onConnected: function() {
       return r;
      }
     });
    });
   });
  }
  t.createClientPipeTransport = f;
  function l(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n = s.createConnection(e);
   return [ new a.SocketMessageReader(n, t), new u.SocketMessageWriter(n, t) ];
  }
  t.createServerPipeTransport = l;
 },
 sKb1: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C+6V");
  var i;
  (function(e) {
   e.type = new r.RequestType("workspace/configuration");
  })(i = t.ConfigurationRequest || (t.ConfigurationRequest = {}));
 },
 tGke: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("bzos");
  const i = n("oyvS");
  const o = n("mw/K");
  const s = n("QduZ");
  function a(e) {
   let t = r.parse(e);
   if (t.protocol !== "file:" || !t.path) {
    return undefined;
   }
   let n = t.path.split("/");
   for (var o = 0, s = n.length; o < s; o++) {
    n[o] = decodeURIComponent(n[o]);
   }
   if (process.platform === "win32" && n.length > 1) {
    let e = n[0];
    let t = n[1];
    if (e.length === 0 && t.length > 1 && t[1] === ":") {
     n.shift();
    }
   }
   return i.normalize(n.join("/"));
  }
  t.uriToFilePath = a;
  function u() {
   return process.platform === "win32";
  }
  function c(e, t) {
   let r = "NODE_PATH";
   return new Promise((o, a) => {
    let c = [];
    if (e) {
     c.push(i.join(e, "node_modules"));
    }
    s.exec("npm config get prefix", (e, f, l) => {
     if (!e) {
      let e = f.replace(/[\s\r\n]+$/, "");
      if (e.length > 0) {
       if (u()) {
        c.push(i.join(e, "node_modules"));
       } else {
        c.push(i.join(e, "lib", "node_modules"));
       }
      }
     }
     let d = u() ? ";" : ":";
     let h = process.env;
     let p = Object.create(null);
     Object.keys(h).forEach(e => p[e] = h[e]);
     if (p[r]) {
      p[r] = c.join(d) + d + p[r];
     } else {
      p[r] = c.join(d);
     }
     try {
      let r = s.fork(i.join(__dirname, "resolve.js"), [], {
       env: p,
       execArgv: []
      });
      r.on("message", e => {
       if (e.command === "resolve") {
        let i = t;
        if (e.success) {
         i = e.result;
        }
        r.send({
         command: "exit"
        });
        try {
         o(n("tduj")(i));
        } catch (e) {
         a(e);
        }
       }
      });
      let u = {
       command: "resolve",
       args: t
      };
      r.send(u);
     } catch (e) {
      a(e);
     }
    });
   });
  }
  t.resolveModule = c;
  function f(e, t, n, r) {
   const o = "NODE_PATH";
   const a = [ "var p = process;", "p.on('message',function(m){", "if(m.c==='e'){", "p.exit(0);", "}", "else if(m.c==='rs'){", "try{", "var r=require.resolve(m.a);", "p.send({c:'r',s:true,r:r});", "}", "catch(err){", "p.send({c:'r',s:false});", "}", "}", "});" ].join("");
   return new Promise((u, c) => {
    let f = process.env;
    let l = Object.create(null);
    Object.keys(f).forEach(e => l[e] = f[e]);
    if (t) {
     if (l[o]) {
      l[o] = t + i.delimiter + l[o];
     } else {
      l[o] = t;
     }
     if (r) {
      r(`NODE_PATH value is: ${l[o]}`);
     }
    }
    l["ATOM_SHELL_INTERNAL_RUN_AS_NODE"] = "1";
    try {
     let t = s.fork("", [], {
      cwd: n,
      env: l,
      execArgv: [ "-e", a ]
     });
     t.on("error", e => {
      c(e);
     });
     t.on("message", n => {
      if (n.c === "r") {
       t.send({
        c: "e"
       });
       if (n.s) {
        u(n.r);
       } else {
        c(new Error(`Failed to resolve module: ${e}`));
       }
      }
     });
     let r = {
      c: "rs",
      a: e
     };
     t.send(r);
    } catch (e) {
     c(e);
    }
   });
  }
  t.resolve = f;
  function l(e) {
   let t = "npm";
   let n = {
    encoding: "utf8"
   };
   if (u()) {
    t = "npm.cmd";
    n.shell = true;
   }
   let r = s.spawnSync(t, [ "config", "get", "prefix" ], n).stdout;
   if (!r) {
    if (e) {
     e(`'npm config get prefix' didn't return a value.`);
    }
    return undefined;
   }
   let o = r.trim();
   if (e) {
    e(`'npm config get prefix' value is: ${o}`);
   }
   if (o.length > 0) {
    if (u()) {
     return i.join(o, "node_modules");
    } else {
     return i.join(o, "lib", "node_modules");
    }
   }
   return undefined;
  }
  t.resolveGlobalNodePath = l;
  function d(e) {
   let t = "yarn";
   let n = {
    encoding: "utf8"
   };
   if (u()) {
    t = "yarn.cmd";
    n.shell = true;
   }
   let r = s.spawnSync(t, [ "global", "dir", "--json" ], n);
   let o = r.stdout;
   if (!o) {
    if (e) {
     e(`'yarn global dir' didn't return a value.`);
     if (r.stderr) {
      e(r.stderr);
     }
    }
    return undefined;
   }
   let a = o.trim().split(/\r?\n/);
   for (let e of a) {
    try {
     let t = JSON.parse(e);
     if (t.type === "log") {
      return i.join(t.data, "node_modules");
     }
    } catch (e) {}
   }
   return undefined;
  }
  t.resolveGlobalYarnPath = d;
  var h;
  (function(e) {
   let t = undefined;
   function n() {
    if (t !== void 0) {
     return t;
    }
    if (process.platform === "win32") {
     t = false;
    } else {
     t = !o.existsSync(__filename.toUpperCase()) || !o.existsSync(__filename.toLowerCase());
    }
    return t;
   }
   e.isCaseSensitive = n;
   function r(e, t) {
    if (n()) {
     return i.normalize(t).indexOf(i.normalize(e)) === 0;
    } else {
     return i.normalize(t).toLowerCase().indexOf(i.normalize(e).toLowerCase()) == 0;
    }
   }
   e.isParent = r;
  })(h = t.FileSystem || (t.FileSystem = {}));
  function p(e, t, n, r) {
   if (n) {
    if (!i.isAbsolute(n)) {
     n = i.join(e, n);
    }
    return f(t, n, n, r).then(e => {
     if (h.isParent(n, e)) {
      return e;
     } else {
      return Promise.reject(new Error(`Failed to load ${t} from node path location.`));
     }
    }).then(undefined, n => {
     return f(t, l(r), e, r);
    });
   } else {
    return f(t, l(r), e, r);
   }
  }
  t.resolveModulePath = p;
  function m(e, t, r, i) {
   return p(e, t, r, i).then(e => {
    if (i) {
     i(`Module ${t} got resolved to ${e}`);
    }
    return n("tduj")(e);
   });
  }
  t.resolveModule2 = m;
 },
 tduj: function(e, t) {
  function n(e) {
   return require(e);
  }
  n.keys = function() {
   return [];
  };
  n.resolve = require.resolve;
  e.exports = n;
  n.id = "tduj";
 },
 uWpP: function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("Z5Ki");
  var o = n("1vg8");
  var s = 8192;
  var a = new Buffer("\r", "ascii")[0];
  var u = new Buffer("\n", "ascii")[0];
  var c = "\r\n";
  var f = function() {
   function e(e) {
    if (e === void 0) {
     e = "utf8";
    }
    this.encoding = e;
    this.index = 0;
    this.buffer = new Buffer(s);
   }
   e.prototype.append = function(e) {
    var t = e;
    if (typeof e === "string") {
     var n = e;
     var r = Buffer.byteLength(n, this.encoding);
     t = new Buffer(r);
     t.write(n, 0, r, this.encoding);
    }
    if (this.buffer.length - this.index >= t.length) {
     t.copy(this.buffer, this.index, 0, t.length);
    } else {
     var i = (Math.ceil((this.index + t.length) / s) + 1) * s;
     if (this.index === 0) {
      this.buffer = new Buffer(i);
      t.copy(this.buffer, 0, 0, t.length);
     } else {
      this.buffer = Buffer.concat([ this.buffer.slice(0, this.index), t ], i);
     }
    }
    this.index += t.length;
   };
   e.prototype.tryReadHeaders = function() {
    var e = undefined;
    var t = 0;
    while (t + 3 < this.index && (this.buffer[t] !== a || this.buffer[t + 1] !== u || this.buffer[t + 2] !== a || this.buffer[t + 3] !== u)) {
     t++;
    }
    if (t + 3 >= this.index) {
     return e;
    }
    e = Object.create(null);
    var n = this.buffer.toString("ascii", 0, t).split(c);
    n.forEach(function(t) {
     var n = t.indexOf(":");
     if (n === -1) {
      throw new Error("Message header must separate key and value using :");
     }
     var r = t.substr(0, n);
     var i = t.substr(n + 1).trim();
     e[r] = i;
    });
    var r = t + 4;
    this.buffer = this.buffer.slice(r);
    this.index = this.index - r;
    return e;
   };
   e.prototype.tryReadContent = function(e) {
    if (this.index < e) {
     return null;
    }
    var t = this.buffer.toString(this.encoding, 0, e);
    var n = e;
    this.buffer.copy(this.buffer, 0, n);
    this.index = this.index - n;
    return t;
   };
   Object.defineProperty(e.prototype, "numberOfBytes", {
    get: function() {
     return this.index;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var l;
  (function(e) {
   function t(e) {
    var t = e;
    return t && o.func(t.listen) && o.func(t.dispose) && o.func(t.onError) && o.func(t.onClose) && o.func(t.onPartialMessage);
   }
   e.is = t;
  })(l = t.MessageReader || (t.MessageReader = {}));
  var d = function() {
   function e() {
    this.errorEmitter = new i.Emitter();
    this.closeEmitter = new i.Emitter();
    this.partialMessageEmitter = new i.Emitter();
   }
   e.prototype.dispose = function() {
    this.errorEmitter.dispose();
    this.closeEmitter.dispose();
   };
   Object.defineProperty(e.prototype, "onError", {
    get: function() {
     return this.errorEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireError = function(e) {
    this.errorEmitter.fire(this.asError(e));
   };
   Object.defineProperty(e.prototype, "onClose", {
    get: function() {
     return this.closeEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireClose = function() {
    this.closeEmitter.fire(undefined);
   };
   Object.defineProperty(e.prototype, "onPartialMessage", {
    get: function() {
     return this.partialMessageEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.firePartialMessage = function(e) {
    this.partialMessageEmitter.fire(e);
   };
   e.prototype.asError = function(e) {
    if (e instanceof Error) {
     return e;
    } else {
     return new Error("Reader recevied error. Reason: " + (o.string(e.message) ? e.message : "unknown"));
    }
   };
   return e;
  }();
  t.AbstractMessageReader = d;
  var h = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.readable = t;
    r.buffer = new f(n);
    r._partialMessageTimeout = 1e4;
    return r;
   }
   Object.defineProperty(t.prototype, "partialMessageTimeout", {
    get: function() {
     return this._partialMessageTimeout;
    },
    set: function(e) {
     this._partialMessageTimeout = e;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.listen = function(e) {
    var t = this;
    this.nextMessageLength = -1;
    this.messageToken = 0;
    this.partialMessageTimer = undefined;
    this.callback = e;
    this.readable.on("data", function(e) {
     t.onData(e);
    });
    this.readable.on("error", function(e) {
     return t.fireError(e);
    });
    this.readable.on("close", function() {
     return t.fireClose();
    });
   };
   t.prototype.onData = function(e) {
    this.buffer.append(e);
    while (true) {
     if (this.nextMessageLength === -1) {
      var t = this.buffer.tryReadHeaders();
      if (!t) {
       return;
      }
      var n = t["Content-Length"];
      if (!n) {
       throw new Error("Header must provide a Content-Length property.");
      }
      var r = parseInt(n);
      if (isNaN(r)) {
       throw new Error("Content-Length value must be a number.");
      }
      this.nextMessageLength = r;
     }
     var i = this.buffer.tryReadContent(this.nextMessageLength);
     if (i === null) {
      this.setPartialMessageTimer();
      return;
     }
     this.clearPartialMessageTimer();
     this.nextMessageLength = -1;
     this.messageToken++;
     var o = JSON.parse(i);
     this.callback(o);
    }
   };
   t.prototype.clearPartialMessageTimer = function() {
    if (this.partialMessageTimer) {
     clearTimeout(this.partialMessageTimer);
     this.partialMessageTimer = undefined;
    }
   };
   t.prototype.setPartialMessageTimer = function() {
    var e = this;
    this.clearPartialMessageTimer();
    if (this._partialMessageTimeout <= 0) {
     return;
    }
    this.partialMessageTimer = setTimeout(function(t, n) {
     e.partialMessageTimer = undefined;
     if (t === e.messageToken) {
      e.firePartialMessage({
       messageToken: t,
       waitingTime: n
      });
      e.setPartialMessageTimer();
     }
    }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
   };
   return t;
  }(d);
  t.StreamMessageReader = h;
  var p = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this) || this;
    n.process = t;
    var r = n.process;
    r.on("error", function(e) {
     return n.fireError(e);
    });
    r.on("close", function() {
     return n.fireClose();
    });
    return n;
   }
   t.prototype.listen = function(e) {
    this.process.on("message", e);
   };
   return t;
  }(d);
  t.IPCMessageReader = p;
  var m = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf-8";
    }
    return e.call(this, t, n) || this;
   }
   return t;
  }(h);
  t.SocketMessageReader = m;
 },
 ugmf: function(e, t) {
  e.exports = require("tls");
 },
 vIUA: function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("Z5Ki");
  var o = n("1vg8");
  var s = "Content-Length: ";
  var a = "\r\n";
  var u;
  (function(e) {
   function t(e) {
    var t = e;
    return t && o.func(t.dispose) && o.func(t.onClose) && o.func(t.onError) && o.func(t.write);
   }
   e.is = t;
  })(u = t.MessageWriter || (t.MessageWriter = {}));
  var c = function() {
   function e() {
    this.errorEmitter = new i.Emitter();
    this.closeEmitter = new i.Emitter();
   }
   e.prototype.dispose = function() {
    this.errorEmitter.dispose();
    this.closeEmitter.dispose();
   };
   Object.defineProperty(e.prototype, "onError", {
    get: function() {
     return this.errorEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireError = function(e, t, n) {
    this.errorEmitter.fire([ this.asError(e), t, n ]);
   };
   Object.defineProperty(e.prototype, "onClose", {
    get: function() {
     return this.closeEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireClose = function() {
    this.closeEmitter.fire(undefined);
   };
   e.prototype.asError = function(e) {
    if (e instanceof Error) {
     return e;
    } else {
     return new Error("Writer recevied error. Reason: " + (o.string(e.message) ? e.message : "unknown"));
    }
   };
   return e;
  }();
  t.AbstractMessageWriter = c;
  var f = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.writable = t;
    r.encoding = n;
    r.errorCount = 0;
    r.writable.on("error", function(e) {
     return r.fireError(e);
    });
    r.writable.on("close", function() {
     return r.fireClose();
    });
    return r;
   }
   t.prototype.write = function(e) {
    var t = JSON.stringify(e);
    var n = Buffer.byteLength(t, this.encoding);
    var r = [ s, n.toString(), a, a ];
    try {
     this.writable.write(r.join(""), "ascii");
     this.writable.write(t, this.encoding);
     this.errorCount = 0;
    } catch (t) {
     this.errorCount++;
     this.fireError(t, e, this.errorCount);
    }
   };
   return t;
  }(c);
  t.StreamMessageWriter = f;
  var l = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this) || this;
    n.process = t;
    n.errorCount = 0;
    n.queue = [];
    n.sending = false;
    var r = n.process;
    r.on("error", function(e) {
     return n.fireError(e);
    });
    r.on("close", function() {
     return n.fireClose;
    });
    return n;
   }
   t.prototype.write = function(e) {
    if (!this.sending && this.queue.length === 0) {
     this.doWriteMessage(e);
    } else {
     this.queue.push(e);
    }
   };
   t.prototype.doWriteMessage = function(e) {
    var t = this;
    try {
     if (this.process.send) {
      this.sending = true;
      this.process.send(e, undefined, undefined, function(n) {
       t.sending = false;
       if (n) {
        t.errorCount++;
        t.fireError(n, e, t.errorCount);
       } else {
        t.errorCount = 0;
       }
       if (t.queue.length > 0) {
        t.doWriteMessage(t.queue.shift());
       }
      });
     }
    } catch (t) {
     this.errorCount++;
     this.fireError(t, e, this.errorCount);
    }
   };
   return t;
  }(c);
  t.IPCMessageWriter = l;
  var d = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.socket = t;
    r.queue = [];
    r.sending = false;
    r.encoding = n;
    r.errorCount = 0;
    r.socket.on("error", function(e) {
     return r.fireError(e);
    });
    r.socket.on("close", function() {
     return r.fireClose();
    });
    return r;
   }
   t.prototype.write = function(e) {
    if (!this.sending && this.queue.length === 0) {
     this.doWriteMessage(e);
    } else {
     this.queue.push(e);
    }
   };
   t.prototype.doWriteMessage = function(e) {
    var t = this;
    var n = JSON.stringify(e);
    var r = Buffer.byteLength(n, this.encoding);
    var i = [ s, r.toString(), a, a ];
    try {
     this.sending = true;
     this.socket.write(i.join(""), "ascii", function(r) {
      if (r) {
       t.handleError(r, e);
      }
      try {
       t.socket.write(n, t.encoding, function(n) {
        t.sending = false;
        if (n) {
         t.handleError(n, e);
        } else {
         t.errorCount = 0;
        }
        if (t.queue.length > 0) {
         t.doWriteMessage(t.queue.shift());
        }
       });
      } catch (r) {
       t.handleError(r, e);
      }
     });
    } catch (t) {
     this.handleError(t, e);
    }
   };
   t.prototype.handleError = function(e, t) {
    this.errorCount++;
    this.fireError(e, t, this.errorCount);
   };
   return t;
  }(c);
  t.SocketMessageWriter = d;
 },
 wpTr: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("oyvS");
  var i = n("mw/K");
  var o = Object.prototype.toString;
  function s(e) {
   return typeof e !== "undefined";
  }
  function a(e) {
   return o.call(e) === "[object Number]";
  }
  function u(e) {
   return o.call(e) === "[object String]";
  }
  function c(e) {
   return e === true || e === false;
  }
  var f;
  (function(e) {
   e["file"] = "file";
   e["bundle"] = "bundle";
   e["both"] = "both";
  })(f = t.MessageFormat || (t.MessageFormat = {}));
  var l;
  (function(e) {
   function t(e) {
    var t = e;
    return t && s(t.key) && s(t.comment);
   }
   e.is = t;
  })(l || (l = {}));
  var d;
  var h;
  var p;
  var m;
  function v() {
   p = {
    locale: undefined,
    cacheLanguageResolution: true,
    messageFormat: f.bundle
   };
   if (u(process.env.VSCODE_NLS_CONFIG)) {
    try {
     var e = JSON.parse(process.env.VSCODE_NLS_CONFIG);
     if (u(e.locale)) {
      p.locale = e.locale.toLowerCase();
     }
     if (u(e._cacheRoot)) {
      p.cacheRoot = e._cacheRoot;
     }
     if (u(e._languagePackId)) {
      p.languagePackId = e._languagePackId;
     }
     if (u(e._translationsConfigFile)) {
      p.translationsConfigFile = e._translationsConfigFile;
      try {
       p.translationsConfig = n("MxNS")(p.translationsConfigFile);
      } catch (e) {}
     }
    } catch (e) {}
   }
   m = p.locale === "pseudo";
   d = undefined;
   h = Object.create(null);
  }
  v();
  function g() {
   return p.cacheRoot !== undefined && p.languagePackId !== undefined && p.translationsConfigFile !== undefined && p.translationsConfig !== undefined;
  }
  function y(e, t) {
   var n;
   if (m) {
    e = "［" + e.replace(/[aouei]/g, "$&$&") + "］";
   }
   if (t.length === 0) {
    n = e;
   } else {
    n = e.replace(/\{(\d+)\}/g, function(e, n) {
     var r = n[0];
     return typeof t[r] !== "undefined" ? t[r] : e;
    });
   }
   return n;
  }
  function b(e) {
   return function(t, n) {
    var r = [];
    for (var i = 2; i < arguments.length; i++) {
     r[i - 2] = arguments[i];
    }
    if (a(t)) {
     if (t >= e.length) {
      console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: " + new Error("").stack);
      return;
     }
     return y(e[t], r);
    } else {
     if (u(n)) {
      console.warn("Message " + n + " didn't get externalized correctly.");
      return y(n, r);
     } else {
      console.error("Broken localize call found. Stacktrace is\n: " + new Error("").stack);
     }
    }
   };
  }
  function C(e, t) {
   var n = [];
   for (var r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r];
   }
   return y(t, n);
  }
  function w(e) {
   var t;
   if (p.cacheLanguageResolution && t) {
    t = t;
   } else {
    if (m || !p.locale) {
     t = ".nls.json";
    } else {
     var n = p.locale;
     while (n) {
      var r = ".nls." + n + ".json";
      if (i.existsSync(e + r)) {
       t = r;
       break;
      } else {
       var o = n.lastIndexOf("-");
       if (o > 0) {
        n = n.substring(0, o);
       } else {
        t = ".nls.json";
        n = null;
       }
      }
     }
    }
    if (p.cacheLanguageResolution) {
     t = t;
    }
   }
   return e + t;
  }
  function x(e) {
   var t = p.locale;
   while (t) {
    var n = r.join(e, "nls.bundle." + t + ".json");
    if (i.existsSync(n)) {
     return n;
    } else {
     var o = t.lastIndexOf("-");
     if (o > 0) {
      t = t.substring(0, o);
     } else {
      t = undefined;
     }
    }
   }
   if (t === undefined) {
    var n = r.join(e, "nls.bundle.json");
    if (i.existsSync(n)) {
     return n;
    }
   }
   return undefined;
  }
  function T(e) {
   try {
    i.mkdirSync(e);
   } catch (n) {
    if (n.code === "EEXIST") {
     return;
    } else if (n.code === "ENOENT") {
     var t = r.dirname(e);
     if (t !== e) {
      T(t);
      i.mkdirSync(e);
     }
    } else {
     throw n;
    }
   }
  }
  function _(e) {
   var t = n("MxNS")(r.join(e, "nls.metadata.json"));
   var i = Object.create(null);
   for (var o in t) {
    var s = t[o];
    i[o] = s.messages;
   }
   return i;
  }
  function S(e, t) {
   var i = p.translationsConfig[e.id];
   if (!i) {
    return undefined;
   }
   var o = n("MxNS")(i).contents;
   var s = n("MxNS")(r.join(t, "nls.metadata.json"));
   var a = Object.create(null);
   for (var c in s) {
    var f = s[c];
    var l = o[e.outDir + "/" + c];
    if (l) {
     var d = [];
     for (var h = 0; h < f.keys.length; h++) {
      var m = f.keys[h];
      var v = u(m) ? m : m.key;
      var g = l[v];
      if (g === undefined) {
       g = f.messages[h];
      }
      d.push(g);
     }
     a[c] = d;
    } else {
     a[c] = f.messages;
    }
   }
   return a;
  }
  function R(e) {
   var t = new Date();
   i.utimes(e, t, t, function() {});
  }
  function E(e, t) {
   h[e] = t;
   return t;
  }
  function k(e, t) {
   var n;
   var o = r.join(p.cacheRoot, e.id + "-" + e.hash + ".json");
   var s = false;
   var a = false;
   try {
    n = JSON.parse(i.readFileSync(o, {
     encoding: "utf8",
     flag: "r"
    }));
    R(o);
    return n;
   } catch (e) {
    if (e.code === "ENOENT") {
     a = true;
    } else if (e instanceof SyntaxError) {
     console.log("Syntax error parsing message bundle: " + e.message);
     s = true;
    } else {
     throw e;
    }
   }
   n = S(e, t);
   if (!n || s) {
    return n;
   }
   if (a) {
    try {
     i.writeFileSync(o, JSON.stringify(n), {
      encoding: "utf8",
      flag: "wx"
     });
    } catch (e) {
     if (e.code === "EEXIST") {
      return n;
     }
     throw e;
    }
   }
   return n;
  }
  function O(e, t) {
   var r;
   if (g()) {
    try {
     r = k(e, t);
    } catch (e) {
     console.log("Load or create bundle failed ", e);
    }
   }
   if (!r) {
    var i = x(t);
    if (i) {
     try {
      return n("MxNS")(i);
     } catch (e) {
      console.log("Loading in the box message bundle failed.", e);
     }
    }
    try {
     r = _(t);
    } catch (e) {
     console.log("Generating default bundle from meta data failed.", e);
     r = undefined;
    }
   }
   return r;
  }
  function A(e) {
   var t;
   var n = r.dirname(e);
   while (true) {
    t = r.join(n, "nls.metadata.header.json");
    if (i.existsSync(t)) {
     break;
    }
    var o = r.dirname(n);
    if (o === n) {
     t = undefined;
     break;
    } else {
     n = o;
    }
   }
   return t;
  }
  function P(e) {
   if (!e) {
    return C;
   }
   var t = r.extname(e);
   if (t) {
    e = e.substr(0, e.length - t.length);
   }
   if (p.messageFormat === f.both || p.messageFormat === f.bundle) {
    var o = A(e);
    if (o) {
     var a = r.dirname(o);
     var u = h[a];
     if (u === undefined) {
      try {
       var c = JSON.parse(i.readFileSync(o, "utf8"));
       try {
        var l = O(c, a);
        u = E(a, l ? {
         header: c,
         nlsBundle: l
        } : null);
       } catch (e) {
        console.error("Failed to load nls bundle", e);
        u = E(a, null);
       }
      } catch (e) {
       console.error("Failed to read header file", e);
       u = E(a, null);
      }
     }
     if (u) {
      var d = e.substr(a.length + 1).replace(/\\/g, "/");
      var m = u.nlsBundle[d];
      if (m === undefined) {
       console.error("Messages for file " + e + " not found. See console for details.");
       return function() {
        return "Messages not found.";
       };
      }
      return b(m);
     }
    }
   }
   if (p.messageFormat === f.both || p.messageFormat === f.file) {
    try {
     var v = n("MxNS")(w(e));
     if (Array.isArray(v)) {
      return b(v);
     } else {
      if (s(v.messages) && s(v.keys)) {
       return b(v.messages);
      } else {
       console.error("String bundle '" + e + "' uses an unsupported format.");
       return function() {
        return "File bundle has unsupported format. See console for details";
       };
      }
     }
    } catch (e) {
     if (e.code !== "ENOENT") {
      console.error("Failed to load single file bundle", e);
     }
    }
   }
   console.error("Failed to load message bundle for file " + e);
   return function() {
    return "Failed to load message bundle. See console for details.";
   };
  }
  t.loadMessageBundle = P;
  function j(e) {
   if (e) {
    if (u(e.locale)) {
     p.locale = e.locale.toLowerCase();
     d = undefined;
     h = Object.create(null);
    }
    if (e.messageFormat !== undefined) {
     p.messageFormat = e.messageFormat;
    }
   }
   m = p.locale === "pseudo";
   return P;
  }
  t.config = j;
 },
 xbEh: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("bzos");
  var i = n("7WL4");
  var o = n("KEll");
  var s = n("3Z22");
  var a = n("KWJ0");
  var u = n("FMKJ");
  var c = n("wpTr");
  c.config(process.env["VSCODE_NLS_CONFIG"]);
  var f = c.loadMessageBundle();
  var l = null;
  var d = true;
  function h(e, t) {
   l = e;
   d = t;
  }
  t.configure = h;
  function p(e) {
   var t = b(e.url, {
    proxyUrl: l,
    strictSSL: d
   });
   e = m({}, e);
   e = m(e, {
    agent: t,
    strictSSL: d
   });
   if (typeof e.followRedirects !== "number") {
    e.followRedirects = 5;
   }
   return v(e).then(function(t) {
    return new Promise(function(n, r) {
     var i = t.res;
     var o = i;
     var s = i.headers && i.headers["content-encoding"];
     var a = false;
     if (s === "gzip") {
      var c = u.createGunzip();
      i.pipe(c);
      o = c;
     } else if (s === "deflate") {
      var l = u.createInflate();
      i.pipe(l);
      o = l;
     }
     var d = [];
     o.on("data", function(e) {
      return d.push(e);
     });
     o.on("end", function() {
      if (a) {
       return;
      }
      a = true;
      if (e.followRedirects > 0 && (i.statusCode >= 300 && i.statusCode <= 303 || i.statusCode === 307)) {
       var t = i.headers["location"];
       if (t) {
        var o = {
         type: e.type,
         url: t,
         user: e.user,
         password: e.password,
         responseType: e.responseType,
         headers: e.headers,
         timeout: e.timeout,
         followRedirects: e.followRedirects - 1,
         data: e.data
        };
        p(o).then(n, r);
        return;
       }
      }
      var s = {
       responseText: d.join(""),
       status: i.statusCode
      };
      if (i.statusCode >= 200 && i.statusCode < 300 || i.statusCode === 1223) {
       n(s);
      } else {
       r(s);
      }
     });
     o.on("error", function(t) {
      var n = {
       responseText: f("error", "Unable to access {0}. Error: {1}", e.url, t.message),
       status: 500
      };
      a = true;
      r(n);
     });
    });
   }, function(n) {
    var r;
    if (t) {
     r = f("error.cannot.connect.proxy", "Unable to connect to {0} through a proxy . Error: {1}", e.url, n.message);
    } else {
     r = f("error.cannot.connect", "Unable to connect to {0}. Error: {1}", e.url, n.message);
    }
    return Promise.reject({
     responseText: r,
     status: 404
    });
   });
  }
  t.xhr = p;
  function m(e) {
   var t = [];
   for (var n = 1; n < arguments.length; n++) {
    t[n - 1] = arguments[n];
   }
   t.forEach(function(t) {
    return Object.keys(t).forEach(function(n) {
     return e[n] = t[n];
    });
   });
   return e;
  }
  function v(e) {
   var t;
   return new Promise(function(n, s) {
    var a = r.parse(e.url);
    var u = {
     hostname: a.hostname,
     port: a.port ? parseInt(a.port) : a.protocol === "https:" ? 443 : 80,
     path: a.path,
     method: e.type || "GET",
     headers: e.headers,
     agent: e.agent,
     rejectUnauthorized: typeof e.strictSSL === "boolean" ? e.strictSSL : true
    };
    if (e.user && e.password) {
     u.auth = e.user + ":" + e.password;
    }
    var c = function(r) {
     if (r.statusCode >= 300 && r.statusCode < 400 && e.followRedirects && e.followRedirects > 0 && r.headers["location"]) {
      n(v(m({}, e, {
       url: r.headers["location"],
       followRedirects: e.followRedirects - 1
      })));
     } else {
      n({
       req: t,
       res: r
      });
     }
    };
    if (a.protocol === "https:") {
     t = i.request(u, c);
    } else {
     t = o.request(u, c);
    }
    t.on("error", s);
    if (e.timeout) {
     t.setTimeout(e.timeout);
    }
    if (e.data) {
     t.write(e.data);
    }
    t.end();
   });
  }
  function g(e) {
   if (e < 400) {
    return void 0;
   }
   switch (e) {
   case 400:
    return f("status.400", "Bad request. The request cannot be fulfilled due to bad syntax.");

   case 401:
    return f("status.401", "Unauthorized. The server is refusing to respond.");

   case 403:
    return f("status.403", "Forbidden. The server is refusing to respond.");

   case 404:
    return f("status.404", "Not Found. The requested location could not be found.");

   case 405:
    return f("status.405", "Method not allowed. A request was made using a request method not supported by that location.");

   case 406:
    return f("status.406", "Not Acceptable. The server can only generate a response that is not accepted by the client.");

   case 407:
    return f("status.407", "Proxy Authentication Required. The client must first authenticate itself with the proxy.");

   case 408:
    return f("status.408", "Request Timeout. The server timed out waiting for the request.");

   case 409:
    return f("status.409", "Conflict. The request could not be completed because of a conflict in the request.");

   case 410:
    return f("status.410", "Gone. The requested page is no longer available.");

   case 411:
    return f("status.411", 'Length Required. The "Content-Length" is not defined.');

   case 412:
    return f("status.412", "Precondition Failed. The precondition given in the request evaluated to false by the server.");

   case 413:
    return f("status.413", "Request Entity Too Large. The server will not accept the request, because the request entity is too large.");

   case 414:
    return f("status.414", "Request-URI Too Long. The server will not accept the request, because the URL is too long.");

   case 415:
    return f("status.415", "Unsupported Media Type. The server will not accept the request, because the media type is not supported.");

   case 500:
    return f("status.500", "Internal Server Error.");

   case 501:
    return f("status.501", "Not Implemented. The server either does not recognize the request method, or it lacks the ability to fulfill the request.");

   case 503:
    return f("status.503", "Service Unavailable. The server is currently unavailable (overloaded or down).");

   default:
    return f("status.416", "HTTP status code {0}", e);
   }
  }
  t.getErrorStatusDescription = g;
  function y(e) {
   if (e.protocol === "http:") {
    return process.env.HTTP_PROXY || process.env.http_proxy || null;
   } else if (e.protocol === "https:") {
    return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null;
   }
   return null;
  }
  function b(e, t) {
   if (t === void 0) {
    t = {};
   }
   var n = r.parse(e);
   var i = t.proxyUrl || y(n);
   if (!i) {
    return null;
   }
   var o = r.parse(i);
   if (!/^https?:$/.test(o.protocol)) {
    return null;
   }
   var u = {
    host: o.hostname,
    port: Number(o.port),
    auth: o.auth,
    rejectUnauthorized: typeof t.strictSSL === "boolean" ? t.strictSSL : true
   };
   return n.protocol === "http:" ? new s(u) : new a(u);
  }
 },
 zZpG: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C+6V");
  var i;
  (function(e) {
   e.type = new r.RequestType("textDocument/documentColor");
  })(i = t.DocumentColorRequest || (t.DocumentColorRequest = {}));
  var o;
  (function(e) {
   e.type = new r.RequestType("textDocument/colorPresentation");
  })(o = t.ColorPresentationRequest || (t.ColorPresentationRequest = {}));
 }
});