/* Partytown 1.0.0 - MIT QwikDev */
!function() {
    
    const trustedType = (create, value, g) => {
        var _a;
        g = globalThis;
        if (void 0 === g._pttt) {
            g._pttt = null;
            try {
                g._pttt = (null === (_a = g.trustedTypes) || void 0 === _a ? void 0 : _a.createPolicy("partytown", {
                    createHTML: s => s,
                    createScript: s => s,
                    createScriptURL: s => s
                })) || null;
            } catch (e) {}
        }
        return g._pttt ? g._pttt[create](value) : value;
    };
    const defaultPartytownForwardPropertySettings = {
        preserveBehavior: false
    };
    const resolvePartytownForwardProperty = propertyOrPropertyWithSettings => {
        if ("string" == typeof propertyOrPropertyWithSettings) {
            return [ propertyOrPropertyWithSettings, defaultPartytownForwardPropertySettings ];
        }
        const [property, settings = defaultPartytownForwardPropertySettings] = propertyOrPropertyWithSettings;
        return [ property, {
            ...defaultPartytownForwardPropertySettings,
            ...settings
        } ];
    };
    const arrayMethods = Object.freeze((obj => {
        const properties = new Set;
        let currentObj = obj;
        do {
            Object.getOwnPropertyNames(currentObj).forEach(item => {
                "function" == typeof currentObj[item] && properties.add(item);
            });
        } while ((currentObj = Object.getPrototypeOf(currentObj)) !== Object.prototype);
        return Array.from(properties);
    })([]));
    !function(win, doc, nav, top, useAtomics, config, libPath, timeout, scripts, sandbox, mainForwardFn = win, isReady) {
        function ready() {
            if (!isReady) {
                isReady = 1;
                libPath = (config.lib || "/~partytown/") + (false !== config.debug ? "debug/" : "");
                if ("/" == libPath[0]) {
                    scripts = doc.querySelectorAll('script[type="text/partytown"]');
                    if (top != win && function() {
                        try {
                            return !!top.dispatchEvent;
                        } catch (e) {
                            return false;
                        }
                    }()) {
                        top.dispatchEvent(new CustomEvent("pt1", {
                            detail: win
                        }));
                    } else {
                        if (0 != (null == config ? void 0 : config.fallbackTimeout)) {
                            timeout = setTimeout(fallback, (null == config ? void 0 : config.fallbackTimeout) || 1e4);
                            doc.addEventListener("pt0", clearFallback);
                        }
                        useAtomics ? loadSandbox(1) : nav.serviceWorker ? nav.serviceWorker.register(trustedType("createScriptURL", libPath + (config.swPath || "partytown-sw.js")), {
                            scope: libPath
                        }).then(function(swRegistration) {
                            if (swRegistration) {
                                if (swRegistration.active) {
                                    loadSandbox();
                                } else if (swRegistration.installing) {
                                    swRegistration.installing.addEventListener("statechange", function(ev) {
                                        "activated" == ev.target.state && loadSandbox();
                                    });
                                } else {
                                    console.warn(swRegistration);
                                }
                            } else {
                                fallback();
                            }
                        }, function(e) {
                            console.error(e);
                            fallback();
                        }) : fallback();
                    }
                } else {
                    console.warn('Partytown config.lib url must start with "/"');
                }
            }
        }
        function loadSandbox(isAtomics) {
            sandbox = doc.createElement(isAtomics ? "script" : "iframe");
            win._pttab = Date.now() + (() => Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(36))();
            if (!isAtomics) {
                sandbox.style.display = "block";
                sandbox.style.width = "0";
                sandbox.style.height = "0";
                sandbox.style.border = "0";
                sandbox.style.visibility = "hidden";
                sandbox.setAttribute("aria-hidden", true);
            }
            sandbox.src = isAtomics ? trustedType("createScriptURL", libPath + "partytown-atomics.js?v=1.0.0") : libPath + "partytown-sandbox-sw.html?" + win._pttab;
            doc.querySelector(config.sandboxParent || "body").appendChild(sandbox);
        }
        function fallback(i, script) {
            console.warn("Partytown script fallback");
            clearFallback();
            top == win && (config.forward || []).map(function(forwardProps) {
                const [property] = resolvePartytownForwardProperty(forwardProps);
                delete win[property.split(".")[0]];
            });
            scripts = doc.querySelectorAll('script[type="text/partytown"]');
            for (i = 0; i < scripts.length; i++) {
                fallbackScript(scripts[i]);
            }
            "undefined" != typeof MutationObserver && new MutationObserver(function(mutations) {
                mutations.map(function(mutation) {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        var node = mutation.addedNodes[i];
                        1 == node.nodeType && ("SCRIPT" == node.nodeName && "text/partytown" == node.type ? fallbackScript(node) : node.querySelectorAll && node.querySelectorAll('script[type="text/partytown"]').forEach(fallbackScript));
                    }
                });
            }).observe(doc.documentElement, {
                childList: true,
                subtree: true
            });
            sandbox && sandbox.parentNode.removeChild(sandbox);
        }
        function fallbackScript(orgScript, script) {
            script = doc.createElement("script");
            orgScript.src ? script.src = trustedType("createScriptURL", orgScript.src) : script.innerHTML = trustedType("createHTML", orgScript.innerHTML);
            script.nonce = config.nonce;
            orgScript.type += "-x";
            doc.head.appendChild(script);
        }
        function clearFallback() {
            clearTimeout(timeout);
        }
        config = win.partytown || {};
        top == win && (config.forward || []).map(function(forwardProps) {
            const [property, {preserveBehavior: preserveBehavior}] = resolvePartytownForwardProperty(forwardProps);
            mainForwardFn = win;
            property.split(".").map(function(_, i, forwardPropsArr) {
                mainForwardFn = mainForwardFn[forwardPropsArr[i]] = i + 1 < forwardPropsArr.length ? mainForwardFn[forwardPropsArr[i]] || (propertyName => arrayMethods.includes(propertyName) ? [] : {})(forwardPropsArr[i + 1]) : (() => {
                    let originalFunction = null;
                    if (preserveBehavior) {
                        const {methodOrProperty: methodOrProperty, thisObject: thisObject} = ((window, properties) => {
                            let thisObject = window;
                            for (let i = 0; i < properties.length - 1; i += 1) {
                                thisObject = thisObject[properties[i]];
                            }
                            return {
                                thisObject: thisObject,
                                methodOrProperty: properties.length > 0 ? thisObject[properties[properties.length - 1]] : void 0
                            };
                        })(win, forwardPropsArr);
                        "function" == typeof methodOrProperty && (originalFunction = (...args) => methodOrProperty.apply(thisObject, ...args));
                    }
                    "push" == forwardPropsArr[i] && Array.isArray(mainForwardFn) && mainForwardFn.map(function(item) {
                        (win._ptf = win._ptf || []).push(forwardPropsArr, [ item ]);
                    });
                    return function() {
                        let returnValue;
                        originalFunction && (returnValue = originalFunction(arguments));
                        (win._ptf = win._ptf || []).push(forwardPropsArr, arguments);
                        return returnValue;
                    };
                })();
            });
        });
        if ("complete" == doc.readyState) {
            ready();
        } else {
            win.addEventListener("DOMContentLoaded", ready);
            win.addEventListener("load", ready);
        }
    }(window, document, navigator, top, window.crossOriginIsolated);
}();