jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
    }
});
(function(window) {
    'use strict';
    var mixitup = null,
        h = null,
        jq = null;
    (function() {
        var VENDORS = ['webkit', 'moz', 'o', 'ms'],
            canary = window.document.createElement('div'),
            i = -1;
        for (i = 0; i < VENDORS.length && !window.requestAnimationFrame; i++) {
            window.requestAnimationFrame = window[VENDORS[i] + 'RequestAnimationFrame']
        }
        if (typeof canary.nextElementSibling === 'undefined') {
            Object.defineProperty(window.Element.prototype, 'nextElementSibling', {
                get: function() {
                    var el = this.nextSibling;
                    while (el) {
                        if (el.nodeType === 1) {
                            return el
                        }
                        el = el.nextSibling
                    }
                    return null
                }
            })
        }(function(ElementPrototype) {
            ElementPrototype.matches = ElementPrototype.matches || ElementPrototype.machesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.msMatchesSelector || ElementPrototype.oMatchesSelector || ElementPrototype.webkitMatchesSelector || function(selector) {
                return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1
            }
        })(window.Element.prototype);
        if (!Object.keys) {
            Object.keys = (function() {
                var hasOwnProperty = Object.prototype.hasOwnProperty,
                    hasDontEnumBug = !1,
                    dontEnums = [],
                    dontEnumsLength = -1;
                hasDontEnumBug = !({
                    toString: null
                }).propertyIsEnumerable('toString');
                dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
                dontEnumsLength = dontEnums.length;
                return function(obj) {
                    var result = [],
                        prop = '',
                        i = -1;
                    if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                        throw new TypeError('Object.keys called on non-object')
                    }
                    for (prop in obj) {
                        if (hasOwnProperty.call(obj, prop)) {
                            result.push(prop)
                        }
                    }
                    if (hasDontEnumBug) {
                        for (i = 0; i < dontEnumsLength; i++) {
                            if (hasOwnProperty.call(obj, dontEnums[i])) {
                                result.push(dontEnums[i])
                            }
                        }
                    }
                    return result
                }
            }())
        }
        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]'
            }
        }
        if (typeof Object.create !== 'function') {
            Object.create = (function(undefined) {
                var Temp = function() {};
                return function(prototype, propertiesObject) {
                    if (prototype !== Object(prototype) && prototype !== null) {
                        throw TypeError('Argument must be an object, or null')
                    }
                    Temp.prototype = prototype || {};
                    var result = new Temp();
                    Temp.prototype = null;
                    if (propertiesObject !== undefined) {
                        Object.defineProperties(result, propertiesObject)
                    }
                    if (prototype === null) {
                        result.__proto__ = null
                    }
                    return result
                }
            })()
        }
        if (!String.prototype.trim) {
            String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
            }
        }
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function(searchElement) {
                var n, k, t, len;
                if (this === null) {
                    throw new TypeError()
                }
                t = Object(this);
                len = t.length >>> 0;
                if (len === 0) {
                    return -1
                }
                n = 0;
                if (arguments.length > 1) {
                    n = Number(arguments[1]);
                    if (n !== n) {
                        n = 0
                    } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                        n = (n > 0 || -1) * Math.floor(Math.abs(n))
                    }
                }
                if (n >= len) {
                    return -1
                }
                for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
                    if (k in t && t[k] === searchElement) {
                        return k
                    }
                }
                return -1
            }
        }
        if (!Function.prototype.bind) {
            Function.prototype.bind = function(oThis) {
                var aArgs, self, FNOP, fBound;
                if (typeof this !== 'function') {
                    throw new TypeError()
                }
                aArgs = Array.prototype.slice.call(arguments, 1);
                self = this;
                FNOP = function() {};
                fBound = function() {
                    return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)))
                };
                if (this.prototype) {
                    FNOP.prototype = this.prototype
                }
                fBound.prototype = new FNOP();
                return fBound
            }
        }
        if (!window.Element.prototype.dispatchEvent) {
            window.Element.prototype.dispatchEvent = function(event) {
                try {
                    return this.fireEvent('on' + event.type, event)
                } catch (err) {}
            }
        }
    })();
    mixitup = function(container, config, foreignDoc) {
        var el = null,
            returnCollection = !1,
            instance = null,
            facade = null,
            doc = null,
            output = null,
            instances = [],
            id = '',
            elements = [],
            i = -1;
        doc = foreignDoc || window.document;
        if (returnCollection = arguments[3]) {
            returnCollection = typeof returnCollection === 'boolean'
        }
        if (typeof container === 'string') {
            elements = doc.querySelectorAll(container)
        } else if (container && typeof container === 'object' && h.isElement(container, doc)) {
            elements = [container]
        } else if (container && typeof container === 'object' && container.length) {
            elements = container
        } else {
            throw new Error(mixitup.messages.errorFactoryInvalidContainer())
        }
        if (elements.length < 1) {
            throw new Error(mixitup.messages.errorFactoryContainerNotFound())
        }
        for (i = 0; el = elements[i]; i++) {
            if (i > 0 && !returnCollection) break;
            if (!el.id) {
                id = 'MixItUp' + h.randomHex();
                el.id = id
            } else {
                id = el.id
            }
            if (mixitup.instances[id] instanceof mixitup.Mixer) {
                instance = mixitup.instances[id];
                if (!config || (config && config.debug && config.debug.showWarnings !== !1)) {
                    console.warn(mixitup.messages.warningFactoryPreexistingInstance())
                }
            } else {
                instance = new mixitup.Mixer();
                instance.attach(el, doc, id, config);
                mixitup.instances[id] = instance
            }
            facade = new mixitup.Facade(instance);
            if (config && config.debug && config.debug.enable) {
                instances.push(instance)
            } else {
                instances.push(facade)
            }
        }
        if (returnCollection) {
            output = new mixitup.Collection(instances)
        } else {
            output = instances[0]
        }
        return output
    };
    mixitup.use = function(extension) {
        mixitup.Base.prototype.callActions.call(mixitup, 'beforeUse', arguments);
        if (typeof extension === 'function' && extension.TYPE === 'mixitup-extension') {
            if (typeof mixitup.extensions[extension.NAME] === 'undefined') {
                extension(mixitup);
                mixitup.extensions[extension.NAME] = extension
            }
        } else if (extension.fn && extension.fn.jquery) {
            mixitup.libraries.$ = extension;
            mixitup.registerJqPlugin(extension)
        }
        mixitup.Base.prototype.callActions.call(mixitup, 'afterUse', arguments)
    };
    mixitup.registerJqPlugin = function($) {
        $.fn.mixItUp = function() {
            var method = arguments[0],
                config = arguments[1],
                args = Array.prototype.slice.call(arguments, 1),
                outputs = [],
                chain = [];
            chain = this.each(function() {
                var instance = null,
                    output = null;
                if (method && typeof method === 'string') {
                    instance = mixitup.instances[this.id];
                    output = instance[method].apply(instance, args);
                    if (typeof output !== 'undefined' && output !== null && typeof output.then !== 'function') outputs.push(output)
                } else {
                    mixitup(this, config)
                }
            });
            if (outputs.length) {
                return outputs.length > 1 ? outputs : outputs[0]
            } else {
                return chain
            }
        }
    };
    mixitup.instances = {};
    mixitup.extensions = {};
    mixitup.libraries = {};
    h = {
        hasClass: function(el, cls) {
            return !!el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
        },
        addClass: function(el, cls) {
            if (!this.hasClass(el, cls)) el.className += el.className ? ' ' + cls : cls
        },
        removeClass: function(el, cls) {
            if (this.hasClass(el, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                el.className = el.className.replace(reg, ' ').trim()
            }
        },
        extend: function(destination, source, deep, handleErrors) {
            var sourceKeys = [],
                key = '',
                i = -1;
            deep = deep || !1;
            handleErrors = handleErrors || !1;
            try {
                if (Array.isArray(source)) {
                    for (i = 0; i < source.length; i++) {
                        sourceKeys.push(i)
                    }
                } else if (source) {
                    sourceKeys = Object.keys(source)
                }
                for (i = 0; i < sourceKeys.length; i++) {
                    key = sourceKeys[i];
                    if (!deep || typeof source[key] !== 'object' || this.isElement(source[key])) {
                        destination[key] = source[key]
                    } else if (Array.isArray(source[key])) {
                        if (!destination[key]) {
                            destination[key] = []
                        }
                        this.extend(destination[key], source[key], deep, handleErrors)
                    } else {
                        if (!destination[key]) {
                            destination[key] = {}
                        }
                        this.extend(destination[key], source[key], deep, handleErrors)
                    }
                }
            } catch (err) {
                if (handleErrors) {
                    this.handleExtendError(err, destination)
                } else {
                    throw err
                }
            }
            return destination
        },
        handleExtendError: function(err, destination) {
            var re = /property "?(\w*)"?[,:] object/i,
                matches = null,
                erroneous = '',
                message = '',
                suggestion = '',
                probableMatch = '',
                key = '',
                mostMatchingChars = -1,
                i = -1;
            if (err instanceof TypeError && (matches = re.exec(err.message))) {
                erroneous = matches[1];
                for (key in destination) {
                    i = 0;
                    while (i < erroneous.length && erroneous.charAt(i) === key.charAt(i)) {
                        i++
                    }
                    if (i > mostMatchingChars) {
                        mostMatchingChars = i;
                        probableMatch = key
                    }
                }
                if (mostMatchingChars > 1) {
                    suggestion = mixitup.messages.errorConfigInvalidPropertySuggestion({
                        probableMatch: probableMatch
                    })
                }
                message = mixitup.messages.errorConfigInvalidProperty({
                    erroneous: erroneous,
                    suggestion: suggestion
                });
                throw new TypeError(message)
            }
            throw err
        },
        template: function(str) {
            var re = /\${([\w]*)}/g,
                dynamics = {},
                matches = null;
            while ((matches = re.exec(str))) {
                dynamics[matches[1]] = new RegExp('\\${' + matches[1] + '}', 'g')
            }
            return function(data) {
                var key = '',
                    output = str;
                data = data || {};
                for (key in dynamics) {
                    output = output.replace(dynamics[key], typeof data[key] !== 'undefined' ? data[key] : '')
                }
                return output
            }
        },
        on: function(el, type, fn, useCapture) {
            if (!el) return;
            if (el.addEventListener) {
                el.addEventListener(type, fn, useCapture)
            } else if (el.attachEvent) {
                el['e' + type + fn] = fn;
                el[type + fn] = function() {
                    el['e' + type + fn](window.event)
                };
                el.attachEvent('on' + type, el[type + fn])
            }
        },
        off: function(el, type, fn) {
            if (!el) return;
            if (el.removeEventListener) {
                el.removeEventListener(type, fn, !1)
            } else if (el.detachEvent) {
                el.detachEvent('on' + type, el[type + fn]);
                el[type + fn] = null
            }
        },
        getCustomEvent: function(eventType, detail, doc) {
            var event = null;
            doc = doc || window.document;
            if (typeof window.CustomEvent === 'function') {
                event = new window.CustomEvent(eventType, {
                    detail: detail,
                    bubbles: !0,
                    cancelable: !0
                })
            } else if (typeof doc.createEvent === 'function') {
                event = doc.createEvent('CustomEvent');
                event.initCustomEvent(eventType, !0, !0, detail)
            } else {
                event = doc.createEventObject(), event.type = eventType;
                event.returnValue = !1;
                event.cancelBubble = !1;
                event.detail = detail
            }
            return event
        },
        getOriginalEvent: function(e) {
            if (e.touches && e.touches.length) {
                return e.touches[0]
            } else if (e.changedTouches && e.changedTouches.length) {
                return e.changedTouches[0]
            } else {
                return e
            }
        },
        index: function(el, selector) {
            var i = 0;
            while ((el = el.previousElementSibling) !== null) {
                if (!selector || el.matches(selector)) {
                    ++i
                }
            }
            return i
        },
        camelCase: function(str) {
            return str.toLowerCase().replace(/([_-][a-z])/g, function($1) {
                return $1.toUpperCase().replace(/[_-]/, '')
            })
        },
        pascalCase: function(str) {
            return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1)
        },
        dashCase: function(str) {
            return str.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase()
        },
        isElement: function(el, doc) {
            doc = doc || window.document;
            if (window.HTMLElement && el instanceof window.HTMLElement) {
                return !0
            } else if (doc.defaultView && doc.defaultView.HTMLElement && el instanceof doc.defaultView.HTMLElement) {
                return !0
            } else {
                return (el !== null && el.nodeType === 1 && typeof el.nodeName === 'string')
            }
        },
        createElement: function(htmlString, doc) {
            var frag = null,
                temp = null;
            doc = doc || window.document;
            frag = doc.createDocumentFragment();
            temp = doc.createElement('div');
            temp.innerHTML = htmlString;
            while (temp.firstChild) {
                frag.appendChild(temp.firstChild)
            }
            return frag
        },
        removeWhitespace: function(node) {
            var deleting;
            while (node && node.nodeName === '#text') {
                deleting = node;
                node = node.previousSibling;
                deleting.parentElement && deleting.parentElement.removeChild(deleting)
            }
        },
        isEqualArray: function(a, b) {
            var i = a.length;
            if (i !== b.length) return !1;
            while (i--) {
                if (a[i] !== b[i]) return !1
            }
            return !0
        },
        deepEquals: function(a, b) {
            var key;
            if (typeof a === 'object' && a && typeof b === 'object' && b) {
                if (Object.keys(a).length !== Object.keys(b).length) return !1;
                for (key in a) {
                    if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return !1
                }
            } else if (a !== b) {
                return !1
            }
            return !0
        },
        arrayShuffle: function(oldArray) {
            var newArray = oldArray.slice(),
                len = newArray.length,
                i = len,
                p = -1,
                t = [];
            while (i--) {
                p = ~~(Math.random() * len);
                t = newArray[i];
                newArray[i] = newArray[p];
                newArray[p] = t
            }
            return newArray
        },
        arrayFromList: function(list) {
            var output, i;
            try {
                return Array.prototype.slice.call(list)
            } catch (err) {
                output = [];
                for (i = 0; i < list.length; i++) {
                    output.push(list[i])
                }
                return output
            }
        },
        debounce: function(func, wait, immediate) {
            var timeout;
            return function() {
                var self = this,
                    args = arguments,
                    callNow = immediate && !timeout,
                    later = null;
                later = function() {
                    timeout = null;
                    if (!immediate) {
                        func.apply(self, args)
                    }
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(self, args)
            }
        },
        position: function(element) {
            var xPosition = 0,
                yPosition = 0,
                offsetParent = element;
            while (element) {
                xPosition -= element.scrollLeft;
                yPosition -= element.scrollTop;
                if (element === offsetParent) {
                    xPosition += element.offsetLeft;
                    yPosition += element.offsetTop;
                    offsetParent = element.offsetParent
                }
                element = element.parentElement
            }
            return {
                x: xPosition,
                y: yPosition
            }
        },
        getHypotenuse: function(node1, node2) {
            var distanceX = node1.x - node2.x,
                distanceY = node1.y - node2.y;
            distanceX = distanceX < 0 ? distanceX * -1 : distanceX, distanceY = distanceY < 0 ? distanceY * -1 : distanceY;
            return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))
        },
        getIntersectionRatio: function(box1, box2) {
            var controlArea = box1.width * box1.height,
                intersectionX = -1,
                intersectionY = -1,
                intersectionArea = -1,
                ratio = -1;
            intersectionX = Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));
            intersectionY = Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));
            intersectionArea = intersectionY * intersectionX;
            ratio = intersectionArea / controlArea;
            return ratio
        },
        closestParent: function(el, selector, includeSelf, doc) {
            var parent = el.parentNode;
            doc = doc || window.document;
            if (includeSelf && el.matches(selector)) {
                return el
            }
            while (parent && parent != doc.body) {
                if (parent.matches && parent.matches(selector)) {
                    return parent
                } else if (parent.parentNode) {
                    parent = parent.parentNode
                } else {
                    return null
                }
            }
            return null
        },
        children: function(el, selector, doc) {
            var children = [],
                tempId = '';
            doc = doc || window.doc;
            if (el) {
                if (!el.id) {
                    tempId = 'Temp' + this.randomHexKey();
                    el.id = tempId
                }
                children = doc.querySelectorAll('#' + el.id + ' > ' + selector);
                if (tempId) {
                    el.removeAttribute('id')
                }
            }
            return children
        },
        clean: function(originalArray) {
            var cleanArray = [],
                i = -1;
            for (i = 0; i < originalArray.length; i++) {
                if (originalArray[i] !== '') {
                    cleanArray.push(originalArray[i])
                }
            }
            return cleanArray
        },
        defer: function(libraries) {
            var deferred = null,
                promiseWrapper = null,
                $ = null;
            promiseWrapper = new this.Deferred();
            if (mixitup.features.has.promises) {
                promiseWrapper.promise = new Promise(function(resolve, reject) {
                    promiseWrapper.resolve = resolve;
                    promiseWrapper.reject = reject
                })
            } else if (($ = (window.jQuery || libraries.$)) && typeof $.Deferred === 'function') {
                deferred = $.Deferred();
                promiseWrapper.promise = deferred.promise();
                promiseWrapper.resolve = deferred.resolve;
                promiseWrapper.reject = deferred.reject
            } else if (window.console) {
                console.warn(mixitup.messages.warningNoPromiseImplementation())
            }
            return promiseWrapper
        },
        all: function(tasks, libraries) {
            var $ = null;
            if (mixitup.features.has.promises) {
                return Promise.all(tasks)
            } else if (($ = (window.jQuery || libraries.$)) && typeof $.when === 'function') {
                return $.when.apply($, tasks).done(function() {
                    return arguments
                })
            }
            if (window.console) {
                console.warn(mixitup.messages.warningNoPromiseImplementation())
            }
            return []
        },
        getPrefix: function(el, property, vendors) {
            var i = -1,
                prefix = '';
            if (h.dashCase(property) in el.style) return '';
            for (i = 0; prefix = vendors[i]; i++) {
                if (prefix + property in el.style) {
                    return prefix.toLowerCase()
                }
            }
            return 'unsupported'
        },
        randomHex: function() {
            return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase()
        },
        getDocumentState: function(doc) {
            doc = typeof doc.body === 'object' ? doc : window.document;
            return {
                scrollTop: window.pageYOffset,
                scrollLeft: window.pageXOffset,
                docHeight: doc.documentElement.scrollHeight
            }
        },
        bind: function(obj, fn) {
            return function() {
                return fn.apply(obj, arguments)
            }
        },
        isVisible: function(el) {
            var styles = null;
            if (el.offsetParent) return !0;
            styles = window.getComputedStyle(el);
            if (styles.position === 'fixed' && styles.visibility !== 'hidden' && styles.opacity !== '0') {
                return !0
            }
            return !1
        },
        seal: function(obj) {
            if (typeof Object.seal === 'function') {
                Object.seal(obj)
            }
        },
        freeze: function(obj) {
            if (typeof Object.freeze === 'function') {
                Object.freeze(obj)
            }
        },
        compareVersions: function(control, specimen) {
            var controlParts = control.split('.'),
                specimenParts = specimen.split('.'),
                controlPart = -1,
                specimenPart = -1,
                i = -1;
            for (i = 0; i < controlParts.length; i++) {
                controlPart = parseInt(controlParts[i].replace(/[^\d.]/g, ''));
                specimenPart = parseInt(specimenParts[i].replace(/[^\d.]/g, '') || 0);
                if (specimenPart < controlPart) {
                    return !1
                } else if (specimenPart > controlPart) {
                    return !0
                }
            }
            return !0
        },
        Deferred: function() {
            this.promise = null;
            this.resolve = null;
            this.reject = null;
            this.id = h.randomHex()
        },
        isEmptyObject: function(obj) {
            var key = '';
            if (typeof Object.keys === 'function') {
                return Object.keys(obj).length === 0
            }
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return !1
                }
            }
            return !0
        },
        getClassname: function(classNames, elementName, modifier) {
            var classname = '';
            classname += classNames.block;
            if (classname.length) {
                classname += classNames.delineatorElement
            }
            classname += classNames['element' + this.pascalCase(elementName)];
            if (!modifier) return classname;
            if (classname.length) {
                classname += classNames.delineatorModifier
            }
            classname += modifier;
            return classname
        },
        getProperty: function(obj, stringKey) {
            var parts = stringKey.split('.'),
                returnCurrent = null,
                current = '',
                i = 0;
            if (!stringKey) {
                return obj
            }
            returnCurrent = function(obj) {
                if (!obj) {
                    return null
                } else {
                    return obj[current]
                }
            };
            while (i < parts.length) {
                current = parts[i];
                obj = returnCurrent(obj);
                i++
            }
            if (typeof obj !== 'undefined') {
                return obj
            } else {
                return null
            }
        }
    };
    mixitup.h = h;
    mixitup.Base = function() {};
    mixitup.Base.prototype = {
        constructor: mixitup.Base,
        callActions: function(actionName, args) {
            var self = this,
                hooks = self.constructor.actions[actionName],
                extensionName = '';
            if (!hooks || h.isEmptyObject(hooks)) return;
            for (extensionName in hooks) {
                hooks[extensionName].apply(self, args)
            }
        },
        callFilters: function(filterName, input, args) {
            var self = this,
                hooks = self.constructor.filters[filterName],
                output = input,
                extensionName = '';
            if (!hooks || h.isEmptyObject(hooks)) return output;
            args = args || [];
            for (extensionName in hooks) {
                args = h.arrayFromList(args);
                args.unshift(output);
                output = hooks[extensionName].apply(self, args)
            }
            return output
        }
    };
    mixitup.BaseStatic = function() {
        this.actions = {};
        this.filters = {};
        this.extend = function(extension) {
            h.extend(this.prototype, extension)
        };
        this.registerAction = function(hookName, extensionName, func) {
            (this.actions[hookName] = this.actions[hookName] || {})[extensionName] = func
        };
        this.registerFilter = function(hookName, extensionName, func) {
            (this.filters[hookName] = this.filters[hookName] || {})[extensionName] = func
        }
    };
    mixitup.Features = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.boxSizingPrefix = '';
        this.transformPrefix = '';
        this.transitionPrefix = '';
        this.boxSizingPrefix = '';
        this.transformProp = '';
        this.transformRule = '';
        this.transitionProp = '';
        this.perspectiveProp = '';
        this.perspectiveOriginProp = '';
        this.has = new mixitup.Has();
        this.canary = null;
        this.BOX_SIZING_PROP = 'boxSizing';
        this.TRANSITION_PROP = 'transition';
        this.TRANSFORM_PROP = 'transform';
        this.PERSPECTIVE_PROP = 'perspective';
        this.PERSPECTIVE_ORIGIN_PROP = 'perspectiveOrigin';
        this.VENDORS = ['Webkit', 'moz', 'O', 'ms'];
        this.TWEENABLE = ['opacity', 'width', 'height', 'marginRight', 'marginBottom', 'x', 'y', 'scale', 'translateX', 'translateY', 'translateZ', 'rotateX', 'rotateY', 'rotateZ'];
        this.callActions('afterConstruct')
    };
    mixitup.BaseStatic.call(mixitup.Features);
    mixitup.Features.prototype = Object.create(mixitup.Base.prototype);
    h.extend(mixitup.Features.prototype, {
        constructor: mixitup.Features,
        init: function() {
            var self = this;
            self.callActions('beforeInit', arguments);
            self.canary = document.createElement('div');
            self.setPrefixes();
            self.runTests();
            self.callActions('beforeInit', arguments)
        },
        runTests: function() {
            var self = this;
            self.callActions('beforeRunTests', arguments);
            self.has.promises = typeof window.Promise === 'function';
            self.has.transitions = self.transitionPrefix !== 'unsupported';
            self.callActions('afterRunTests', arguments);
            h.freeze(self.has)
        },
        setPrefixes: function() {
            var self = this;
            self.callActions('beforeSetPrefixes', arguments);
            self.transitionPrefix = h.getPrefix(self.canary, 'Transition', self.VENDORS);
            self.transformPrefix = h.getPrefix(self.canary, 'Transform', self.VENDORS);
            self.boxSizingPrefix = h.getPrefix(self.canary, 'BoxSizing', self.VENDORS);
            self.boxSizingProp = self.boxSizingPrefix ? self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;
            self.transitionProp = self.transitionPrefix ? self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;
            self.transformProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;
            self.transformRule = self.transformPrefix ? '-' + self.transformPrefix + '-' + self.TRANSFORM_PROP : self.TRANSFORM_PROP;
            self.perspectiveProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;
            self.perspectiveOriginProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) : self.PERSPECTIVE_ORIGIN_PROP;
            self.callActions('afterSetPrefixes', arguments)
        }
    });
    mixitup.Has = function() {
        this.transitions = !1;
        this.promises = !1;
        h.seal(this)
    };
    mixitup.features = new mixitup.Features();
    mixitup.features.init();
    mixitup.ConfigAnimation = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.enable = !0;
        this.effects = 'fade scale';
        this.effectsIn = '';
        this.effectsOut = '';
        this.duration = 600;
        this.easing = 'ease';
        this.applyPerspective = !0;
        this.perspectiveDistance = '3000px';
        this.perspectiveOrigin = '50% 50%';
        this.queue = !0;
        this.queueLimit = 3;
        this.animateResizeContainer = !0;
        this.animateResizeTargets = !1;
        this.staggerSequence = null;
        this.reverseOut = !1;
        this.nudge = !0;
        this.clampHeight = !0;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigAnimation);
    mixitup.ConfigAnimation.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigAnimation.prototype.constructor = mixitup.ConfigAnimation;
    mixitup.ConfigCallbacks = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.onMixStart = null;
        this.onMixBusy = null;
        this.onMixEnd = null;
        this.onMixFail = null;
        this.onMixClick = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigCallbacks);
    mixitup.ConfigCallbacks.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigCallbacks.prototype.constructor = mixitup.ConfigCallbacks;
    mixitup.ConfigControls = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.enable = !0;
        this.live = !1;
        this.scope = 'global';
        this.toggleLogic = 'or';
        this.toggleDefault = 'all';
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigControls);
    mixitup.ConfigControls.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigControls.prototype.constructor = mixitup.ConfigControls;
    mixitup.ConfigClassNames = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.block = 'mixitup';
        this.elementContainer = 'container';
        this.elementFilter = 'control';
        this.elementSort = 'control';
        this.elementMultimix = 'control';
        this.elementToggle = 'control';
        this.modifierActive = 'active';
        this.modifierDisabled = 'disabled';
        this.modifierFailed = 'failed';
        this.delineatorElement = '-';
        this.delineatorModifier = '-';
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigClassNames);
    mixitup.ConfigClassNames.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigClassNames.prototype.constructor = mixitup.ConfigClassNames;
    mixitup.ConfigData = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.uidKey = '';
        this.dirtyCheck = !1;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigData);
    mixitup.ConfigData.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigData.prototype.constructor = mixitup.ConfigData;
    mixitup.ConfigDebug = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.enable = !1;
        this.showWarnings = !0;
        this.fauxAsync = !1;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigDebug);
    mixitup.ConfigDebug.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigDebug.prototype.constructor = mixitup.ConfigDebug;
    mixitup.ConfigLayout = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.allowNestedTargets = !0;
        this.containerClassName = '';
        this.siblingBefore = null;
        this.siblingAfter = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigLayout);
    mixitup.ConfigLayout.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigLayout.prototype.constructor = mixitup.ConfigLayout;
    mixitup.ConfigLoad = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.filter = 'all';
        this.sort = 'default:asc';
        this.dataset = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigLoad);
    mixitup.ConfigLoad.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigLoad.prototype.constructor = mixitup.ConfigLoad;
    mixitup.ConfigSelectors = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.target = '.mix';
        this.control = '';
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigSelectors);
    mixitup.ConfigSelectors.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigSelectors.prototype.constructor = mixitup.ConfigSelectors;
    mixitup.ConfigRender = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.target = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigRender);
    mixitup.ConfigRender.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigRender.prototype.constructor = mixitup.ConfigRender;
    mixitup.ConfigTemplates = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ConfigTemplates);
    mixitup.ConfigTemplates.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigTemplates.prototype.constructor = mixitup.ConfigTemplates;
    mixitup.Config = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.animation = new mixitup.ConfigAnimation();
        this.callbacks = new mixitup.ConfigCallbacks();
        this.controls = new mixitup.ConfigControls();
        this.classNames = new mixitup.ConfigClassNames();
        this.data = new mixitup.ConfigData();
        this.debug = new mixitup.ConfigDebug();
        this.layout = new mixitup.ConfigLayout();
        this.load = new mixitup.ConfigLoad();
        this.selectors = new mixitup.ConfigSelectors();
        this.render = new mixitup.ConfigRender();
        this.templates = new mixitup.ConfigTemplates();
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.Config);
    mixitup.Config.prototype = Object.create(mixitup.Base.prototype);
    mixitup.Config.prototype.constructor = mixitup.Config;
    mixitup.MixerDom = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.document = null;
        this.body = null;
        this.container = null;
        this.parent = null;
        this.targets = [];
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.MixerDom);
    mixitup.MixerDom.prototype = Object.create(mixitup.Base.prototype);
    mixitup.MixerDom.prototype.constructor = mixitup.MixerDom;
    mixitup.UiClassNames = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.base = '';
        this.active = '';
        this.disabled = '';
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.UiClassNames);
    mixitup.UiClassNames.prototype = Object.create(mixitup.Base.prototype);
    mixitup.UiClassNames.prototype.constructor = mixitup.UiClassNames;
    mixitup.CommandDataset = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.dataset = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.CommandDataset);
    mixitup.CommandDataset.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandDataset.prototype.constructor = mixitup.CommandDataset;
    mixitup.CommandMultimix = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.filter = null;
        this.sort = null;
        this.insert = null;
        this.remove = null;
        this.changeLayout = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.CommandMultimix);
    mixitup.CommandMultimix.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandMultimix.prototype.constructor = mixitup.CommandMultimix;
    mixitup.CommandFilter = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.selector = '';
        this.collection = null;
        this.action = 'show';
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.CommandFilter);
    mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;
    mixitup.CommandSort = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.sortString = '';
        this.attribute = '';
        this.order = 'asc';
        this.collection = null;
        this.next = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.CommandSort);
    mixitup.CommandSort.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandSort.prototype.constructor = mixitup.CommandSort;
    mixitup.CommandInsert = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.index = 0;
        this.collection = [];
        this.position = 'before';
        this.sibling = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.CommandInsert);
    mixitup.CommandInsert.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandInsert.prototype.constructor = mixitup.CommandInsert;
    mixitup.CommandRemove = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.targets = [];
        this.collection = [];
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.CommandRemove);
    mixitup.CommandRemove.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandRemove.prototype.constructor = mixitup.CommandRemove;
    mixitup.CommandChangeLayout = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.containerClassName = '';
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.CommandChangeLayout);
    mixitup.CommandChangeLayout.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandChangeLayout.prototype.constructor = mixitup.CommandChangeLayout;
    mixitup.ControlDefinition = function(type, selector, live, parent) {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.type = type;
        this.selector = selector;
        this.live = live || !1;
        this.parent = parent || '';
        this.callActions('afterConstruct');
        h.freeze(this);
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.ControlDefinition);
    mixitup.ControlDefinition.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ControlDefinition.prototype.constructor = mixitup.ControlDefinition;
    mixitup.controlDefinitions = [];
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('multimix', '[data-filter][data-sort]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('filter', '[data-filter]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('sort', '[data-sort]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('toggle', '[data-toggle]'));
    mixitup.Control = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.el = null;
        this.selector = '';
        this.bound = [];
        this.pending = -1;
        this.type = '';
        this.status = 'inactive';
        this.filter = '';
        this.sort = '';
        this.canDisable = !1;
        this.handler = null;
        this.classNames = new mixitup.UiClassNames();
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.Control);
    mixitup.Control.prototype = Object.create(mixitup.Base.prototype);
    h.extend(mixitup.Control.prototype, {
        constructor: mixitup.Control,
        init: function(el, type, selector) {
            var self = this;
            this.callActions('beforeInit', arguments);
            self.el = el;
            self.type = type;
            self.selector = selector;
            if (self.selector) {
                self.status = 'live'
            } else {
                self.canDisable = typeof self.el.disable === 'boolean';
                switch (self.type) {
                    case 'filter':
                        self.filter = self.el.getAttribute('data-filter');
                        break;
                    case 'toggle':
                        self.filter = self.el.getAttribute('data-toggle');
                        break;
                    case 'sort':
                        self.sort = self.el.getAttribute('data-sort');
                        break;
                    case 'multimix':
                        self.filter = self.el.getAttribute('data-filter');
                        self.sort = self.el.getAttribute('data-sort');
                        break
                }
            }
            self.bindClick();
            mixitup.controls.push(self);
            this.callActions('afterInit', arguments)
        },
        isBound: function(mixer) {
            var self = this,
                isBound = !1;
            this.callActions('beforeIsBound', arguments);
            isBound = self.bound.indexOf(mixer) > -1;
            return self.callFilters('afterIsBound', isBound, arguments)
        },
        addBinding: function(mixer) {
            var self = this;
            this.callActions('beforeAddBinding', arguments);
            if (!self.isBound()) {
                self.bound.push(mixer)
            }
            this.callActions('afterAddBinding', arguments)
        },
        removeBinding: function(mixer) {
            var self = this,
                removeIndex = -1;
            this.callActions('beforeRemoveBinding', arguments);
            if ((removeIndex = self.bound.indexOf(mixer)) > -1) {
                self.bound.splice(removeIndex, 1)
            }
            if (self.bound.length < 1) {
                self.unbindClick();
                removeIndex = mixitup.controls.indexOf(self);
                mixitup.controls.splice(removeIndex, 1);
                if (self.status === 'active') {
                    self.renderStatus(self.el, 'inactive')
                }
            }
            this.callActions('afterRemoveBinding', arguments)
        },
        bindClick: function() {
            var self = this;
            this.callActions('beforeBindClick', arguments);
            self.handler = function(e) {
                self.handleClick(e)
            };
            h.on(self.el, 'click', self.handler);
            this.callActions('afterBindClick', arguments)
        },
        unbindClick: function() {
            var self = this;
            this.callActions('beforeUnbindClick', arguments);
            h.off(self.el, 'click', self.handler);
            self.handler = null;
            this.callActions('afterUnbindClick', arguments)
        },
        handleClick: function(e) {
            var self = this,
                button = null,
                mixer = null,
                isActive = !1,
                returnValue = void(0),
                command = {},
                clone = null,
                commands = [],
                i = -1;
            this.callActions('beforeHandleClick', arguments);
            this.pending = 0;
            mixer = self.bound[0];
            if (!self.selector) {
                button = self.el
            } else {
                button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, !0, mixer.dom.document)
            }
            if (!button) {
                self.callActions('afterHandleClick', arguments);
                return
            }
            switch (self.type) {
                case 'filter':
                    command.filter = self.filter || button.getAttribute('data-filter');
                    break;
                case 'sort':
                    command.sort = self.sort || button.getAttribute('data-sort');
                    break;
                case 'multimix':
                    command.filter = self.filter || button.getAttribute('data-filter');
                    command.sort = self.sort || button.getAttribute('data-sort');
                    break;
                case 'toggle':
                    command.filter = self.filter || button.getAttribute('data-toggle');
                    if (self.status === 'live') {
                        isActive = h.hasClass(button, self.classNames.active)
                    } else {
                        isActive = self.status === 'active'
                    }
                    break
            }
            for (i = 0; i < self.bound.length; i++) {
                clone = new mixitup.CommandMultimix();
                h.extend(clone, command);
                commands.push(clone)
            }
            commands = self.callFilters('commandsHandleClick', commands, arguments);
            self.pending = self.bound.length;
            for (i = 0; mixer = self.bound[i]; i++) {
                command = commands[i];
                if (!command) {
                    continue
                }
                if (!mixer.lastClicked) {
                    mixer.lastClicked = button
                }
                mixitup.events.fire('mixClick', mixer.dom.container, {
                    state: mixer.state,
                    instance: mixer,
                    originalEvent: e,
                    control: mixer.lastClicked
                }, mixer.dom.document);
                if (typeof mixer.config.callbacks.onMixClick === 'function') {
                    returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);
                    if (returnValue === !1) {
                        continue
                    }
                }
                if (self.type === 'toggle') {
                    isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter)
                } else {
                    mixer.multimix(command)
                }
            }
            this.callActions('afterHandleClick', arguments)
        },
        update: function(command, toggleArray) {
            var self = this,
                actions = new mixitup.CommandMultimix();
            self.callActions('beforeUpdate', arguments);
            self.pending--;
            self.pending = Math.max(0, self.pending);
            if (self.pending > 0) return;
            if (self.status === 'live') {
                self.updateLive(command, toggleArray)
            } else {
                actions.sort = self.sort;
                actions.filter = self.filter;
                self.callFilters('actionsUpdate', actions, arguments);
                self.parseStatusChange(self.el, command, actions, toggleArray)
            }
            self.callActions('afterUpdate', arguments)
        },
        updateLive: function(command, toggleArray) {
            var self = this,
                controlButtons = null,
                actions = null,
                button = null,
                i = -1;
            self.callActions('beforeUpdateLive', arguments);
            if (!self.el) return;
            controlButtons = self.el.querySelectorAll(self.selector);
            for (i = 0; button = controlButtons[i]; i++) {
                actions = new mixitup.CommandMultimix();
                switch (self.type) {
                    case 'filter':
                        actions.filter = button.getAttribute('data-filter');
                        break;
                    case 'sort':
                        actions.sort = button.getAttribute('data-sort');
                        break;
                    case 'multimix':
                        actions.filter = button.getAttribute('data-filter');
                        actions.sort = button.getAttribute('data-sort');
                        break;
                    case 'toggle':
                        actions.filter = button.getAttribute('data-toggle');
                        break
                }
                actions = self.callFilters('actionsUpdateLive', actions, arguments);
                self.parseStatusChange(button, command, actions, toggleArray)
            }
            self.callActions('afterUpdateLive', arguments)
        },
        parseStatusChange: function(button, command, actions, toggleArray) {
            var self = this,
                alias = '',
                toggle = '',
                i = -1;
            self.callActions('beforeParseStatusChange', arguments);
            switch (self.type) {
                case 'filter':
                    if (command.filter === actions.filter) {
                        self.renderStatus(button, 'active')
                    } else {
                        self.renderStatus(button, 'inactive')
                    }
                    break;
                case 'multimix':
                    if (command.sort === actions.sort && command.filter === actions.filter) {
                        self.renderStatus(button, 'active')
                    } else {
                        self.renderStatus(button, 'inactive')
                    }
                    break;
                case 'sort':
                    if (command.sort.match(/:asc/g)) {
                        alias = command.sort.replace(/:asc/g, '')
                    }
                    if (command.sort === actions.sort || alias === actions.sort) {
                        self.renderStatus(button, 'active')
                    } else {
                        self.renderStatus(button, 'inactive')
                    }
                    break;
                case 'toggle':
                    if (toggleArray.length < 1) self.renderStatus(button, 'inactive');
                    if (command.filter === actions.filter) {
                        self.renderStatus(button, 'active')
                    }
                    for (i = 0; i < toggleArray.length; i++) {
                        toggle = toggleArray[i];
                        if (toggle === actions.filter) {
                            self.renderStatus(button, 'active');
                            break
                        }
                        self.renderStatus(button, 'inactive')
                    }
                    break
            }
            self.callActions('afterParseStatusChange', arguments)
        },
        renderStatus: function(button, status) {
            var self = this;
            self.callActions('beforeRenderStatus', arguments);
            switch (status) {
                case 'active':
                    h.addClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);
                    if (self.canDisable) self.el.disabled = !1;
                    break;
                case 'inactive':
                    h.removeClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);
                    if (self.canDisable) self.el.disabled = !1;
                    break;
                case 'disabled':
                    if (self.canDisable) self.el.disabled = !0;
                    h.addClass(button, self.classNames.disabled);
                    h.removeClass(button, self.classNames.active);
                    break
            }
            if (self.status !== 'live') {
                self.status = status
            }
            self.callActions('afterRenderStatus', arguments)
        }
    });
    mixitup.controls = [];
    mixitup.StyleData = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.x = 0;
        this.y = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.marginRight = 0;
        this.marginBottom = 0;
        this.opacity = 0;
        this.scale = new mixitup.TransformData();
        this.translateX = new mixitup.TransformData();
        this.translateY = new mixitup.TransformData();
        this.translateZ = new mixitup.TransformData();
        this.rotateX = new mixitup.TransformData();
        this.rotateY = new mixitup.TransformData();
        this.rotateZ = new mixitup.TransformData();
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.StyleData);
    mixitup.StyleData.prototype = Object.create(mixitup.Base.prototype);
    mixitup.StyleData.prototype.constructor = mixitup.StyleData;
    mixitup.TransformData = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.value = 0;
        this.unit = '';
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.TransformData);
    mixitup.TransformData.prototype = Object.create(mixitup.Base.prototype);
    mixitup.TransformData.prototype.constructor = mixitup.TransformData;
    mixitup.TransformDefaults = function() {
        mixitup.StyleData.apply(this);
        this.callActions('beforeConstruct');
        this.scale.value = 0.01;
        this.scale.unit = '';
        this.translateX.value = 20;
        this.translateX.unit = 'px';
        this.translateY.value = 20;
        this.translateY.unit = 'px';
        this.translateZ.value = 20;
        this.translateZ.unit = 'px';
        this.rotateX.value = 90;
        this.rotateX.unit = 'deg';
        this.rotateY.value = 90;
        this.rotateY.unit = 'deg';
        this.rotateX.value = 90;
        this.rotateX.unit = 'deg';
        this.rotateZ.value = 180;
        this.rotateZ.unit = 'deg';
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.TransformDefaults);
    mixitup.TransformDefaults.prototype = Object.create(mixitup.StyleData.prototype);
    mixitup.TransformDefaults.prototype.constructor = mixitup.TransformDefaults;
    mixitup.transformDefaults = new mixitup.TransformDefaults();
    mixitup.EventDetail = function() {
        this.state = null;
        this.futureState = null;
        this.instance = null;
        this.originalEvent = null
    };
    mixitup.Events = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.mixStart = null;
        this.mixBusy = null;
        this.mixEnd = null;
        this.mixFail = null;
        this.mixClick = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.Events);
    mixitup.Events.prototype = Object.create(mixitup.Base.prototype);
    mixitup.Events.prototype.constructor = mixitup.Events;
    mixitup.Events.prototype.fire = function(eventType, el, detail, doc) {
        var self = this,
            event = null,
            eventDetail = new mixitup.EventDetail();
        self.callActions('beforeFire', arguments);
        if (typeof self[eventType] === 'undefined') {
            throw new Error('Event type "' + eventType + '" not found.')
        }
        eventDetail.state = new mixitup.State();
        h.extend(eventDetail.state, detail.state);
        if (detail.futureState) {
            eventDetail.futureState = new mixitup.State();
            h.extend(eventDetail.futureState, detail.futureState)
        }
        eventDetail.instance = detail.instance;
        if (detail.originalEvent) {
            eventDetail.originalEvent = detail.originalEvent
        }
        event = h.getCustomEvent(eventType, eventDetail, doc);
        self.callFilters('eventFire', event, arguments);
        el.dispatchEvent(event)
    };
    mixitup.events = new mixitup.Events();
    mixitup.QueueItem = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.args = [];
        this.instruction = null;
        this.triggerElement = null;
        this.deferred = null;
        this.isToggling = !1;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.QueueItem);
    mixitup.QueueItem.prototype = Object.create(mixitup.Base.prototype);
    mixitup.QueueItem.prototype.constructor = mixitup.QueueItem;
    mixitup.Mixer = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.config = new mixitup.Config();
        this.id = '';
        this.isBusy = !1;
        this.isToggling = !1;
        this.incPadding = !0;
        this.controls = [];
        this.targets = [];
        this.origOrder = [];
        this.cache = {};
        this.toggleArray = [];
        this.targetsMoved = 0;
        this.targetsImmovable = 0;
        this.targetsBound = 0;
        this.targetsDone = 0;
        this.staggerDuration = 0;
        this.effectsIn = null;
        this.effectsOut = null;
        this.transformIn = [];
        this.transformOut = [];
        this.queue = [];
        this.state = null;
        this.lastOperation = null;
        this.lastClicked = null;
        this.userCallback = null;
        this.userDeferred = null;
        this.dom = new mixitup.MixerDom();
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.Mixer);
    mixitup.Mixer.prototype = Object.create(mixitup.Base.prototype);
    h.extend(mixitup.Mixer.prototype, {
        constructor: mixitup.Mixer,
        attach: function(container, document, id, config) {
            var self = this,
                target = null,
                i = -1;
            self.callActions('beforeAttach', arguments);
            self.id = id;
            if (config) {
                h.extend(self.config, config, !0, !0)
            }
            self.sanitizeConfig();
            self.cacheDom(container, document);
            if (self.config.layout.containerClassName) {
                h.addClass(self.dom.container, self.config.layout.containerClassName)
            }
            if (!mixitup.features.has.transitions) {
                self.config.animation.enable = !1
            }
            if (typeof window.console === 'undefined') {
                self.config.debug.showWarnings = !1
            }
            if (self.config.data.uidKey) {
                self.config.controls.enable = !1
            }
            self.indexTargets();
            self.state = self.getInitialState();
            for (i = 0; target = self.lastOperation.toHide[i]; i++) {
                target.hide()
            }
            if (self.config.controls.enable) {
                self.initControls();
                self.updateControls({
                    filter: self.state.activeFilter,
                    sort: self.state.activeSort
                });
                self.buildToggleArray(null, self.state)
            }
            self.parseEffects();
            self.callActions('afterAttach', arguments)
        },
        sanitizeConfig: function() {
            var self = this;
            self.callActions('beforeSanitizeConfig', arguments);
            self.config.controls.scope = self.config.controls.scope.toLowerCase().trim();
            self.config.controls.toggleLogic = self.config.controls.toggleLogic.toLowerCase().trim();
            self.config.controls.toggleDefault = self.config.controls.toggleDefault.toLowerCase().trim();
            self.config.animation.effects = self.config.animation.effects.trim();
            self.callActions('afterSanitizeConfig', arguments)
        },
        getInitialState: function() {
            var self = this,
                state = new mixitup.State(),
                operation = new mixitup.Operation();
            self.callActions('beforeGetInitialState', arguments);
            state.activeContainerClassName = self.config.layout.containerClassName;
            if (self.config.load.dataset) {
                if (!self.config.data.uidKey || typeof self.config.data.uidKey !== 'string') {
                    throw new TypeError(mixitup.messages.errorConfigDataUidKeyNotSet())
                }
                operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
                operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                operation.show = self.targets.slice();
                state = self.callFilters('stateGetInitialState', state, arguments)
            } else {
                state.activeFilter = self.parseFilterArgs([self.config.load.filter]).command;
                state.activeSort = self.parseSortArgs([self.config.load.sort]).command;
                state.totalTargets = self.targets.length;
                state = self.callFilters('stateGetInitialState', state, arguments);
                if (state.activeSort.collection || state.activeSort.attribute || state.activeSort.order === 'random' || state.activeSort.order === 'desc') {
                    operation.newSort = state.activeSort;
                    self.sortOperation(operation);
                    self.printSort(!1, operation);
                    self.targets = operation.newOrder
                } else {
                    operation.startOrder = operation.newOrder = self.targets
                }
                operation.startFilter = operation.newFilter = state.activeFilter;
                operation.startSort = operation.newSort = state.activeSort;
                operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                if (operation.newFilter.selector === 'all') {
                    operation.newFilter.selector = self.config.selectors.target
                } else if (operation.newFilter.selector === 'none') {
                    operation.newFilter.selector = ''
                }
            }
            operation = self.callFilters('operationGetInitialState', operation, [state]);
            self.lastOperation = operation;
            if (operation.newFilter) {
                self.filterOperation(operation)
            }
            state = self.buildState(operation);
            return state
        },
        cacheDom: function(el, document) {
            var self = this;
            self.callActions('beforeCacheDom', arguments);
            self.dom.document = document;
            self.dom.body = self.dom.document.querySelector('body');
            self.dom.container = el;
            self.dom.parent = el;
            self.callActions('afterCacheDom', arguments)
        },
        indexTargets: function() {
            var self = this,
                target = null,
                el = null,
                dataset = null,
                i = -1;
            self.callActions('beforeIndexTargets', arguments);
            self.dom.targets = self.config.layout.allowNestedTargets ? self.dom.container.querySelectorAll(self.config.selectors.target) : h.children(self.dom.container, self.config.selectors.target, self.dom.document);
            self.dom.targets = h.arrayFromList(self.dom.targets);
            self.targets = [];
            if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) {
                throw new Error(mixitup.messages.errorDatasetPrerenderedMismatch())
            }
            if (self.dom.targets.length) {
                for (i = 0; el = self.dom.targets[i]; i++) {
                    target = new mixitup.Target();
                    target.init(el, self, dataset ? dataset[i] : void(0));
                    target.isInDom = !0;
                    self.targets.push(target)
                }
                self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ? self.dom.container : self.dom.targets[0].parentElement
            }
            self.origOrder = self.targets;
            self.callActions('afterIndexTargets', arguments)
        },
        initControls: function() {
            var self = this,
                definition = '',
                controlElements = null,
                el = null,
                parent = null,
                delagators = null,
                control = null,
                i = -1,
                j = -1;
            self.callActions('beforeInitControls', arguments);
            switch (self.config.controls.scope) {
                case 'local':
                    parent = self.dom.container;
                    break;
                case 'global':
                    parent = self.dom.document;
                    break;
                default:
                    throw new Error(mixitup.messages.errorConfigInvalidControlsScope())
            }
            for (i = 0; definition = mixitup.controlDefinitions[i]; i++) {
                if (self.config.controls.live || definition.live) {
                    if (definition.parent) {
                        delagators = self.dom[definition.parent];
                        if (!delagators || delagators.length < 0) continue;
                        if (typeof delagators.length !== 'number') {
                            delagators = [delagators]
                        }
                    } else {
                        delagators = [parent]
                    }
                    for (j = 0;
                        (el = delagators[j]); j++) {
                        control = self.getControl(el, definition.type, definition.selector);
                        self.controls.push(control)
                    }
                } else {
                    controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);
                    for (j = 0;
                        (el = controlElements[j]); j++) {
                        control = self.getControl(el, definition.type, '');
                        if (!control) continue;
                        self.controls.push(control)
                    }
                }
            }
            self.callActions('afterInitControls', arguments)
        },
        getControl: function(el, type, selector) {
            var self = this,
                control = null,
                i = -1;
            self.callActions('beforeGetControl', arguments);
            if (!selector) {
                for (i = 0; control = mixitup.controls[i]; i++) {
                    if (control.el === el && control.isBound(self)) {
                        return self.callFilters('controlGetControl', null, arguments)
                    } else if (control.el === el && control.type === type && control.selector === selector) {
                        control.addBinding(self);
                        return self.callFilters('controlGetControl', control, arguments)
                    }
                }
            }
            control = new mixitup.Control();
            control.init(el, type, selector);
            control.classNames.base = h.getClassname(self.config.classNames, type);
            control.classNames.active = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
            control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);
            control.addBinding(self);
            return self.callFilters('controlGetControl', control, arguments)
        },
        getToggleSelector: function() {
            var self = this,
                delineator = self.config.controls.toggleLogic === 'or' ? ', ' : '',
                toggleSelector = '';
            self.callActions('beforeGetToggleSelector', arguments);
            self.toggleArray = h.clean(self.toggleArray);
            toggleSelector = self.toggleArray.join(delineator);
            if (toggleSelector === '') {
                toggleSelector = self.config.controls.toggleDefault
            }
            return self.callFilters('selectorGetToggleSelector', toggleSelector, arguments)
        },
        buildToggleArray: function(command, state) {
            var self = this,
                activeFilterSelector = '';
            self.callActions('beforeBuildToggleArray', arguments);
            if (command && command.filter) {
                activeFilterSelector = command.filter.selector.replace(/\s/g, '')
            } else if (state) {
                activeFilterSelector = state.activeFilter.selector.replace(/\s/g, '')
            } else {
                return
            }
            if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === 'all') {
                activeFilterSelector = ''
            }
            if (self.config.controls.toggleLogic === 'or') {
                self.toggleArray = activeFilterSelector.split(',')
            } else {
                self.toggleArray = self.splitCompoundSelector(activeFilterSelector)
            }
            self.toggleArray = h.clean(self.toggleArray);
            self.callActions('afterBuildToggleArray', arguments)
        },
        splitCompoundSelector: function(compoundSelector) {
            var partials = compoundSelector.split(/([\.\[])/g),
                toggleArray = [],
                selector = '',
                i = -1;
            if (partials[0] === '') {
                partials.shift()
            }
            for (i = 0; i < partials.length; i++) {
                if (i % 2 === 0) {
                    selector = ''
                }
                selector += partials[i];
                if (i % 2 !== 0) {
                    toggleArray.push(selector)
                }
            }
            return toggleArray
        },
        updateControls: function(command) {
            var self = this,
                control = null,
                output = new mixitup.CommandMultimix(),
                i = -1;
            self.callActions('beforeUpdateControls', arguments);
            if (command.filter) {
                output.filter = command.filter.selector
            } else {
                output.filter = self.state.activeFilter.selector
            }
            if (command.sort) {
                output.sort = self.buildSortString(command.sort)
            } else {
                output.sort = self.buildSortString(self.state.activeSort)
            }
            if (output.filter === self.config.selectors.target) {
                output.filter = 'all'
            }
            if (output.filter === '') {
                output.filter = 'none'
            }
            h.freeze(output);
            for (i = 0; control = self.controls[i]; i++) {
                control.update(output, self.toggleArray)
            }
            self.callActions('afterUpdateControls', arguments)
        },
        buildSortString: function(command) {
            var self = this;
            var output = '';
            output += command.sortString;
            if (command.next) {
                output += ' ' + self.buildSortString(command.next)
            }
            return output
        },
        insertTargets: function(command, operation) {
            var self = this,
                nextSibling = null,
                insertionIndex = -1,
                frag = null,
                target = null,
                el = null,
                i = -1;
            self.callActions('beforeInsertTargets', arguments);
            if (typeof command.index === 'undefined') command.index = 0;
            nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
            frag = self.dom.document.createDocumentFragment();
            if (nextSibling) {
                insertionIndex = h.index(nextSibling, self.config.selectors.target)
            } else {
                insertionIndex = self.targets.length
            }
            if (command.collection) {
                for (i = 0; el = command.collection[i]; i++) {
                    if (self.dom.targets.indexOf(el) > -1) {
                        throw new Error(mixitup.messages.errorInsertPreexistingElement())
                    }
                    el.style.display = 'none';
                    frag.appendChild(el);
                    frag.appendChild(self.dom.document.createTextNode(' '));
                    if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;
                    target = new mixitup.Target();
                    target.init(el, self);
                    target.isInDom = !0;
                    self.targets.splice(insertionIndex, 0, target);
                    insertionIndex++
                }
                self.dom.parent.insertBefore(frag, nextSibling)
            }
            operation.startOrder = self.origOrder = self.targets;
            self.callActions('afterInsertTargets', arguments)
        },
        getNextSibling: function(index, sibling, position) {
            var self = this,
                element = null;
            index = Math.max(index, 0);
            if (sibling && position === 'before') {
                element = sibling
            } else if (sibling && position === 'after') {
                element = sibling.nextElementSibling || null
            } else if (self.targets.length > 0 && typeof index !== 'undefined') {
                element = (index < self.targets.length || !self.targets.length) ? self.targets[index].dom.el : self.targets[self.targets.length - 1].dom.el.nextElementSibling
            } else if (self.targets.length === 0 && self.dom.parent.children.length > 0) {
                if (self.config.layout.siblingAfter) {
                    element = self.config.layout.siblingAfter
                } else if (self.config.layout.siblingBefore) {
                    element = self.config.layout.siblingBefore.nextElementSibling
                } else {
                    self.dom.parent.children[0]
                }
            } else {
                element === null
            }
            return self.callFilters('elementGetNextSibling', element, arguments)
        },
        filterOperation: function(operation) {
            var self = this,
                testResult = !1,
                index = -1,
                action = '',
                target = null,
                i = -1;
            self.callActions('beforeFilterOperation', arguments);
            action = operation.newFilter.action;
            for (i = 0; target = operation.newOrder[i]; i++) {
                if (operation.newFilter.collection) {
                    testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1
                } else {
                    if (operation.newFilter.selector === '') {
                        testResult = !1
                    } else {
                        testResult = target.dom.el.matches(operation.newFilter.selector)
                    }
                }
                self.evaluateHideShow(testResult, target, action, operation)
            }
            if (operation.toRemove.length) {
                for (i = 0; target = operation.show[i]; i++) {
                    if (operation.toRemove.indexOf(target) > -1) {
                        operation.show.splice(i, 1);
                        if ((index = operation.toShow.indexOf(target)) > -1) {
                            operation.toShow.splice(index, 1)
                        }
                        operation.toHide.push(target);
                        operation.hide.push(target);
                        i--
                    }
                }
            }
            operation.matching = operation.show.slice();
            if (operation.show.length === 0 && operation.newFilter.selector !== '' && self.targets.length !== 0) {
                operation.hasFailed = !0
            }
            self.callActions('afterFilterOperation', arguments)
        },
        evaluateHideShow: function(testResult, target, action, operation) {
            var self = this;
            self.callActions('beforeEvaluateHideShow', arguments);
            if (testResult === !0 && action === 'show' || testResult === !1 && action === 'hide') {
                operation.show.push(target);
                !target.isShown && operation.toShow.push(target)
            } else {
                operation.hide.push(target);
                target.isShown && operation.toHide.push(target)
            }
            self.callActions('afterEvaluateHideShow', arguments)
        },
        sortOperation: function(operation) {
            var self = this;
            self.callActions('beforeSortOperation', arguments);
            operation.startOrder = self.targets;
            if (operation.newSort.collection) {
                operation.newOrder = operation.newSort.collection
            } else if (operation.newSort.order === 'random') {
                operation.newOrder = h.arrayShuffle(operation.startOrder)
            } else if (operation.newSort.attribute === '') {
                operation.newOrder = self.origOrder.slice();
                if (operation.newSort.order === 'desc') {
                    operation.newOrder.reverse()
                }
            } else {
                operation.newOrder = operation.startOrder.slice();
                operation.newOrder.sort(function(a, b) {
                    return self.compare(a, b, operation.newSort)
                })
            }
            if (h.isEqualArray(operation.newOrder, operation.startOrder)) {
                operation.willSort = !1
            }
            self.callActions('afterSortOperation', arguments)
        },
        compare: function(a, b, command) {
            var self = this,
                order = command.order,
                attrA = self.getAttributeValue(a, command.attribute),
                attrB = self.getAttributeValue(b, command.attribute);
            if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
                attrA = attrA.toLowerCase();
                attrB = attrB.toLowerCase()
            } else {
                attrA = attrA * 1;
                attrB = attrB * 1
            }
            if (attrA < attrB) {
                return order === 'asc' ? -1 : 1
            }
            if (attrA > attrB) {
                return order === 'asc' ? 1 : -1
            }
            if (attrA === attrB && command.next) {
                return self.compare(a, b, command.next)
            }
            return 0
        },
        getAttributeValue: function(target, attribute) {
            var self = this,
                value = '';
            value = target.dom.el.getAttribute('data-' + attribute);
            if (value === null) {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningInconsistentSortingAttributes({
                        attribute: 'data-' + attribute
                    }))
                }
            }
            return self.callFilters('valueGetAttributeValue', value || 0, arguments)
        },
        printSort: function(isResetting, operation) {
            var self = this,
                startOrder = isResetting ? operation.newOrder : operation.startOrder,
                newOrder = isResetting ? operation.startOrder : operation.newOrder,
                nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null,
                frag = window.document.createDocumentFragment(),
                whitespace = null,
                target = null,
                el = null,
                i = -1;
            self.callActions('beforePrintSort', arguments);
            for (i = 0; target = startOrder[i]; i++) {
                el = target.dom.el;
                if (el.style.position === 'absolute') continue;
                h.removeWhitespace(el.previousSibling);
                el.parentElement.removeChild(el)
            }
            whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;
            if (whitespace && whitespace.nodeName === '#text') {
                h.removeWhitespace(whitespace)
            }
            for (i = 0; target = newOrder[i]; i++) {
                el = target.dom.el;
                if (h.isElement(frag.lastChild)) {
                    frag.appendChild(window.document.createTextNode(' '))
                }
                frag.appendChild(el)
            }
            if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) {
                frag.insertBefore(window.document.createTextNode(' '), frag.childNodes[0])
            }
            if (nextSibling) {
                frag.appendChild(window.document.createTextNode(' '));
                self.dom.parent.insertBefore(frag, nextSibling)
            } else {
                self.dom.parent.appendChild(frag)
            }
            self.callActions('afterPrintSort', arguments)
        },
        parseSortString: function(sortString, command) {
            var self = this,
                rules = sortString.split(' '),
                current = command,
                rule = [],
                i = -1;
            for (i = 0; i < rules.length; i++) {
                rule = rules[i].split(':');
                current.sortString = rules[i];
                current.attribute = h.dashCase(rule[0]);
                current.order = rule[1] || 'asc';
                switch (current.attribute) {
                    case 'default':
                        current.attribute = '';
                        break;
                    case 'random':
                        current.attribute = '';
                        current.order = 'random';
                        break
                }
                if (!current.attribute || current.order === 'random') break;
                if (i < rules.length - 1) {
                    current.next = new mixitup.CommandSort();
                    h.freeze(current);
                    current = current.next
                }
            }
            return self.callFilters('commandsParseSort', command, arguments)
        },
        parseEffects: function() {
            var self = this,
                transformName = '',
                effectsIn = self.config.animation.effectsIn || self.config.animation.effects,
                effectsOut = self.config.animation.effectsOut || self.config.animation.effects;
            self.callActions('beforeParseEffects', arguments);
            self.effectsIn = new mixitup.StyleData();
            self.effectsOut = new mixitup.StyleData();
            self.transformIn = [];
            self.transformOut = [];
            self.effectsIn.opacity = self.effectsOut.opacity = 1;
            self.parseEffect('fade', effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect('fade', effectsOut, self.effectsOut, self.transformOut, !0);
            for (transformName in mixitup.transformDefaults) {
                if (!(mixitup.transformDefaults[transformName] instanceof mixitup.TransformData)) {
                    continue
                }
                self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
                self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, !0)
            }
            self.parseEffect('stagger', effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect('stagger', effectsOut, self.effectsOut, self.transformOut, !0);
            self.callActions('afterParseEffects', arguments)
        },
        parseEffect: function(effectName, effectString, effects, transform, isOut) {
            var self = this,
                re = /\(([^)]+)\)/,
                propIndex = -1,
                str = '',
                match = [],
                val = '',
                units = ['%', 'px', 'em', 'rem', 'vh', 'vw', 'deg'],
                unit = '',
                i = -1;
            self.callActions('beforeParseEffect', arguments);
            if (typeof effectString !== 'string') {
                throw new TypeError(mixitup.messages.errorConfigInvalidAnimationEffects())
            }
            if (effectString.indexOf(effectName) < 0) {
                if (effectName === 'stagger') {
                    self.staggerDuration = 0
                }
                return
            }
            propIndex = effectString.indexOf(effectName + '(');
            if (propIndex > -1) {
                str = effectString.substring(propIndex);
                match = re.exec(str);
                val = match[1]
            }
            switch (effectName) {
                case 'fade':
                    effects.opacity = val ? parseFloat(val) : 0;
                    break;
                case 'stagger':
                    self.staggerDuration = val ? parseFloat(val) : 100;
                    break;
                default:
                    if (isOut && self.config.animation.reverseOut && effectName !== 'scale') {
                        effects[effectName].value = (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value) * -1
                    } else {
                        effects[effectName].value = (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value)
                    }
                    if (val) {
                        for (i = 0; unit = units[i]; i++) {
                            if (val.indexOf(unit) > -1) {
                                effects[effectName].unit = unit;
                                break
                            }
                        }
                    } else {
                        effects[effectName].unit = mixitup.transformDefaults[effectName].unit
                    }
                    transform.push(effectName + '(' + effects[effectName].value + effects[effectName].unit + ')')
            }
            self.callActions('afterParseEffect', arguments)
        },
        buildState: function(operation) {
            var self = this,
                state = new mixitup.State(),
                target = null,
                i = -1;
            self.callActions('beforeBuildState', arguments);
            for (i = 0; target = self.targets[i]; i++) {
                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
                    state.targets.push(target.dom.el)
                }
            }
            for (i = 0; target = operation.matching[i]; i++) {
                state.matching.push(target.dom.el)
            }
            for (i = 0; target = operation.show[i]; i++) {
                state.show.push(target.dom.el)
            }
            for (i = 0; target = operation.hide[i]; i++) {
                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
                    state.hide.push(target.dom.el)
                }
            }
            state.id = self.id;
            state.container = self.dom.container;
            state.activeFilter = operation.newFilter;
            state.activeSort = operation.newSort;
            state.activeDataset = operation.newDataset;
            state.activeContainerClassName = operation.newContainerClassName;
            state.hasFailed = operation.hasFailed;
            state.totalTargets = self.targets.length;
            state.totalShow = operation.show.length;
            state.totalHide = operation.hide.length;
            state.totalMatching = operation.matching.length;
            state.triggerElement = operation.triggerElement;
            return self.callFilters('stateBuildState', state, arguments)
        },
        goMix: function(shouldAnimate, operation) {
            var self = this,
                deferred = null;
            self.callActions('beforeGoMix', arguments);
            if (!self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)) {
                shouldAnimate = !1
            }
            if (!operation.toShow.length && !operation.toHide.length && !operation.willSort && !operation.willChangeLayout) {
                shouldAnimate = !1
            }
            if (!operation.startState.show.length && !operation.show.length) {
                shouldAnimate = !1
            }
            mixitup.events.fire('mixStart', self.dom.container, {
                state: operation.startState,
                futureState: operation.newState,
                instance: self
            }, self.dom.document);
            if (typeof self.config.callbacks.onMixStart === 'function') {
                self.config.callbacks.onMixStart.call(self.dom.container, operation.startState, operation.newState, self)
            }
            h.removeClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));
            if (!self.userDeferred) {
                deferred = self.userDeferred = h.defer(mixitup.libraries)
            } else {
                deferred = self.userDeferred
            }
            self.isBusy = !0;
            if (!shouldAnimate || !mixitup.features.has.transitions) {
                if (self.config.debug.fauxAsync) {
                    setTimeout(function() {
                        self.cleanUp(operation)
                    }, self.config.animation.duration)
                } else {
                    self.cleanUp(operation)
                }
                return self.callFilters('promiseGoMix', deferred.promise, arguments)
            }
            if (window.pageYOffset !== operation.docState.scrollTop) {
                window.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop)
            }
            if (self.config.animation.applyPerspective) {
                self.dom.parent.style[mixitup.features.perspectiveProp] = self.config.animation.perspectiveDistance;
                self.dom.parent.style[mixitup.features.perspectiveOriginProp] = self.config.animation.perspectiveOrigin
            }
            if (self.config.animation.animateResizeContainer || operation.startHeight === operation.newHeight) {
                self.dom.parent.style.height = operation.startHeight + 'px'
            }
            if (self.config.animation.animateResizeContainer || operation.startWidth === operation.newWidth) {
                self.dom.parent.style.width = operation.startWidth + 'px'
            }
            requestAnimationFrame(function() {
                self.moveTargets(operation)
            });
            return self.callFilters('promiseGoMix', deferred.promise, arguments)
        },
        getStartMixData: function(operation) {
            var self = this,
                parentStyle = window.getComputedStyle(self.dom.parent),
                parentRect = self.dom.parent.getBoundingClientRect(),
                target = null,
                data = {},
                i = -1,
                boxSizing = parentStyle[mixitup.features.boxSizingProp];
            self.incPadding = (boxSizing === 'border-box');
            self.callActions('beforeGetStartMixData', arguments);
            for (i = 0; target = operation.show[i]; i++) {
                data = target.getPosData();
                operation.showPosData[i] = {
                    startPosData: data
                }
            }
            for (i = 0; target = operation.toHide[i]; i++) {
                data = target.getPosData();
                operation.toHidePosData[i] = {
                    startPosData: data
                }
            }
            operation.startX = parentRect.left;
            operation.startY = parentRect.top;
            operation.startHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
            operation.startWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
            self.callActions('afterGetStartMixData', arguments)
        },
        setInter: function(operation) {
            var self = this,
                target = null,
                i = -1;
            self.callActions('beforeSetInter', arguments);
            if (self.config.animation.clampHeight) {
                self.dom.parent.style.height = operation.startHeight + 'px';
                self.dom.parent.style.overflow = 'hidden'
            }
            for (i = 0; target = operation.toShow[i]; i++) {
                target.show()
            }
            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName)
            }
            self.callActions('afterSetInter', arguments)
        },
        getInterMixData: function(operation) {
            var self = this,
                target = null,
                i = -1;
            self.callActions('beforeGetInterMixData', arguments);
            for (i = 0; target = operation.show[i]; i++) {
                operation.showPosData[i].interPosData = target.getPosData()
            }
            for (i = 0; target = operation.toHide[i]; i++) {
                operation.toHidePosData[i].interPosData = target.getPosData()
            }
            self.callActions('afterGetInterMixData', arguments)
        },
        setFinal: function(operation) {
            var self = this,
                target = null,
                i = -1;
            self.callActions('beforeSetFinal', arguments);
            if (self.config.animation.clampHeight) {
                self.dom.parent.style.height = self.dom.parent.style.overflow = ''
            }
            operation.willSort && self.printSort(!1, operation);
            for (i = 0; target = operation.toHide[i]; i++) {
                target.hide()
            }
            self.callActions('afterSetFinal', arguments)
        },
        getFinalMixData: function(operation) {
            var self = this,
                parentStyle = null,
                parentRect = self.dom.parent.getBoundingClientRect(),
                target = null,
                i = -1;
            if (!self.incPadding) {
                parentStyle = window.getComputedStyle(self.dom.parent)
            }
            self.callActions('beforeGetFinalMixData', arguments);
            for (i = 0; target = operation.show[i]; i++) {
                operation.showPosData[i].finalPosData = target.getPosData()
            }
            for (i = 0; target = operation.toHide[i]; i++) {
                operation.toHidePosData[i].finalPosData = target.getPosData()
            }
            operation.newX = parentRect.left;
            operation.newY = parentRect.top;
            operation.newHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
            operation.newWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
            if (operation.willSort) {
                self.printSort(!0, operation)
            }
            for (i = 0; target = operation.toShow[i]; i++) {
                target.hide()
            }
            for (i = 0; target = operation.toHide[i]; i++) {
                target.show()
            }
            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.newContainerClassName);
                h.addClass(self.dom.container, self.config.layout.containerClassName)
            }
            self.callActions('afterGetFinalMixData', arguments)
        },
        getTweenData: function(operation) {
            var self = this,
                target = null,
                posData = null,
                effectNames = Object.getOwnPropertyNames(self.effectsIn),
                effectName = '',
                effect = null,
                widthChange = -1,
                heightChange = -1,
                i = -1,
                j = -1;
            self.callActions('beforeGetTweenData', arguments);
            for (i = 0; target = operation.show[i]; i++) {
                posData = operation.showPosData[i];
                posData.posIn = new mixitup.StyleData();
                posData.posOut = new mixitup.StyleData();
                posData.tweenData = new mixitup.StyleData();
                if (target.isShown) {
                    posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
                    posData.posIn.y = posData.startPosData.y - posData.interPosData.y
                } else {
                    posData.posIn.x = posData.posIn.y = 0
                }
                posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
                posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;
                posData.posIn.opacity = target.isShown ? 1 : self.effectsIn.opacity;
                posData.posOut.opacity = 1;
                posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
                if (!target.isShown && !self.config.animation.nudge) {
                    posData.posIn.x = posData.posOut.x;
                    posData.posIn.y = posData.posOut.y
                }
                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;
                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width = posData.startPosData.width;
                    posData.posIn.height = posData.startPosData.height;
                    widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;
                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
                    heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;
                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                    posData.posOut.width = posData.finalPosData.width;
                    posData.posOut.height = posData.finalPosData.height;
                    widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;
                    posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;
                    heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;
                    posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;
                    posData.tweenData.width = posData.posOut.width - posData.posIn.width;
                    posData.tweenData.height = posData.posOut.height - posData.posIn.height;
                    posData.tweenData.marginRight = posData.posOut.marginRight - posData.posIn.marginRight;
                    posData.tweenData.marginBottom = posData.posOut.marginBottom - posData.posIn.marginBottom
                }
                for (j = 0; effectName = effectNames[j]; j++) {
                    effect = self.effectsIn[effectName];
                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
                    posData.posIn[effectName].value = effect.value;
                    posData.posOut[effectName].value = 0;
                    posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
                    posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit
                }
            }
            for (i = 0; target = operation.toHide[i]; i++) {
                posData = operation.toHidePosData[i];
                posData.posIn = new mixitup.StyleData();
                posData.posOut = new mixitup.StyleData();
                posData.tweenData = new mixitup.StyleData();
                posData.posIn.x = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
                posData.posIn.y = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
                posData.posOut.x = self.config.animation.nudge ? 0 : posData.posIn.x;
                posData.posOut.y = self.config.animation.nudge ? 0 : posData.posIn.y;
                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;
                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width = posData.startPosData.width;
                    posData.posIn.height = posData.startPosData.height;
                    widthChange = posData.startPosData.width - posData.interPosData.width;
                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
                    heightChange = posData.startPosData.height - posData.interPosData.height;
                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange
                }
                posData.posIn.opacity = 1;
                posData.posOut.opacity = self.effectsOut.opacity;
                posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
                for (j = 0; effectName = effectNames[j]; j++) {
                    effect = self.effectsOut[effectName];
                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
                    posData.posIn[effectName].value = 0;
                    posData.posOut[effectName].value = effect.value;
                    posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
                    posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit
                }
            }
            self.callActions('afterGetTweenData', arguments)
        },
        moveTargets: function(operation) {
            var self = this,
                target = null,
                moveData = null,
                posData = null,
                statusChange = '',
                willTransition = !1,
                staggerIndex = -1,
                i = -1,
                checkProgress = self.checkProgress.bind(self);
            self.callActions('beforeMoveTargets', arguments);
            for (i = 0; target = operation.show[i]; i++) {
                moveData = new mixitup.IMoveData();
                posData = operation.showPosData[i];
                statusChange = target.isShown ? 'none' : 'show';
                willTransition = self.willTransition(statusChange, operation.hasEffect, posData.posIn, posData.posOut);
                if (willTransition) {
                    staggerIndex++
                }
                target.show();
                moveData.posIn = posData.posIn;
                moveData.posOut = posData.posOut;
                moveData.statusChange = statusChange;
                moveData.staggerIndex = staggerIndex;
                moveData.operation = operation;
                moveData.callback = willTransition ? checkProgress : null;
                target.move(moveData)
            }
            for (i = 0; target = operation.toHide[i]; i++) {
                posData = operation.toHidePosData[i];
                moveData = new mixitup.IMoveData();
                statusChange = 'hide';
                willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);
                moveData.posIn = posData.posIn;
                moveData.posOut = posData.posOut;
                moveData.statusChange = statusChange;
                moveData.staggerIndex = i;
                moveData.operation = operation;
                moveData.callback = willTransition ? checkProgress : null;
                target.move(moveData)
            }
            if (self.config.animation.animateResizeContainer) {
                self.dom.parent.style[mixitup.features.transitionProp] = 'height ' + self.config.animation.duration + 'ms ease, ' + 'width ' + self.config.animation.duration + 'ms ease ';
                requestAnimationFrame(function() {
                    self.dom.parent.style.height = operation.newHeight + 'px';
                    self.dom.parent.style.width = operation.newWidth + 'px'
                })
            }
            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName)
            }
            self.callActions('afterMoveTargets', arguments)
        },
        hasEffect: function() {
            var self = this,
                EFFECTABLES = ['scale', 'translateX', 'translateY', 'translateZ', 'rotateX', 'rotateY', 'rotateZ'],
                effectName = '',
                effect = null,
                result = !1,
                value = -1,
                i = -1;
            if (self.effectsIn.opacity !== 1) {
                return self.callFilters('resultHasEffect', !0, arguments)
            }
            for (i = 0; effectName = EFFECTABLES[i]; i++) {
                effect = self.effectsIn[effectName];
                value = (typeof effect && effect.value !== 'undefined') ? effect.value : effect;
                if (value !== 0) {
                    result = !0;
                    break
                }
            }
            return self.callFilters('resultHasEffect', result, arguments)
        },
        willTransition: function(statusChange, hasEffect, posIn, posOut) {
            var self = this,
                result = !1;
            if (!h.isVisible(self.dom.container)) {
                result = !1
            } else if ((statusChange !== 'none' && hasEffect) || posIn.x !== posOut.x || posIn.y !== posOut.y) {
                result = !0
            } else if (self.config.animation.animateResizeTargets) {
                result = (posIn.width !== posOut.width || posIn.height !== posOut.height || posIn.marginRight !== posOut.marginRight || posIn.marginTop !== posOut.marginTop)
            } else {
                result = !1
            }
            return self.callFilters('resultWillTransition', result, arguments)
        },
        checkProgress: function(operation) {
            var self = this;
            self.targetsDone++;
            if (self.targetsBound === self.targetsDone) {
                self.cleanUp(operation)
            }
        },
        cleanUp: function(operation) {
            var self = this,
                target = null,
                whitespaceBefore = null,
                whitespaceAfter = null,
                nextInQueue = null,
                i = -1;
            self.callActions('beforeCleanUp', arguments);
            self.targetsMoved = self.targetsImmovable = self.targetsBound = self.targetsDone = 0;
            for (i = 0; target = operation.show[i]; i++) {
                target.cleanUp();
                target.show()
            }
            for (i = 0; target = operation.toHide[i]; i++) {
                target.cleanUp();
                target.hide()
            }
            if (operation.willSort) {
                self.printSort(!1, operation)
            }
            self.dom.parent.style[mixitup.features.transitionProp] = self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style[mixitup.features.perspectiveProp] = self.dom.parent.style[mixitup.features.perspectiveOriginProp] = '';
            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName)
            }
            if (operation.toRemove.length) {
                for (i = 0; target = self.targets[i]; i++) {
                    if (operation.toRemove.indexOf(target) > -1) {
                        if ((whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === '#text' && (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === '#text') {
                            h.removeWhitespace(whitespaceBefore)
                        }
                        if (!operation.willSort) {
                            self.dom.parent.removeChild(target.dom.el)
                        }
                        self.targets.splice(i, 1);
                        target.isInDom = !1;
                        i--
                    }
                }
                self.origOrder = self.targets
            }
            if (operation.willSort) {
                self.targets = operation.newOrder
            }
            self.state = operation.newState;
            self.lastOperation = operation;
            self.dom.targets = self.state.targets;
            mixitup.events.fire('mixEnd', self.dom.container, {
                state: self.state,
                instance: self
            }, self.dom.document);
            if (typeof self.config.callbacks.onMixEnd === 'function') {
                self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self)
            }
            if (operation.hasFailed) {
                mixitup.events.fire('mixFail', self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);
                if (typeof self.config.callbacks.onMixFail === 'function') {
                    self.config.callbacks.onMixFail.call(self.dom.container, self.state, self)
                }
                h.addClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed))
            }
            if (typeof self.userCallback === 'function') {
                self.userCallback.call(self.dom.container, self.state, self)
            }
            if (typeof self.userDeferred.resolve === 'function') {
                self.userDeferred.resolve(self.state)
            }
            self.userCallback = null;
            self.userDeferred = null;
            self.lastClicked = null;
            self.isToggling = !1;
            self.isBusy = !1;
            if (self.queue.length) {
                self.callActions('beforeReadQueueCleanUp', arguments);
                nextInQueue = self.queue.shift();
                self.userDeferred = nextInQueue.deferred;
                self.isToggling = nextInQueue.isToggling;
                self.lastClicked = nextInQueue.triggerElement;
                if (nextInQueue.instruction.command instanceof mixitup.CommandMultimix) {
                    self.multimix.apply(self, nextInQueue.args)
                } else {
                    self.dataset.apply(self, nextInQueue.args)
                }
            }
            self.callActions('afterCleanUp', arguments)
        },
        parseMultimixArgs: function(args) {
            var self = this,
                instruction = new mixitup.UserInstruction(),
                arg = null,
                i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandMultimix();
            for (i = 0; i < args.length; i++) {
                arg = args[i];
                if (arg === null) continue;
                if (typeof arg === 'object') {
                    h.extend(instruction.command, arg)
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg
                } else if (typeof arg === 'function') {
                    instruction.callback = arg
                }
            }
            if (instruction.command.insert && !(instruction.command.insert instanceof mixitup.CommandInsert)) {
                instruction.command.insert = self.parseInsertArgs([instruction.command.insert]).command
            }
            if (instruction.command.remove && !(instruction.command.remove instanceof mixitup.CommandRemove)) {
                instruction.command.remove = self.parseRemoveArgs([instruction.command.remove]).command
            }
            if (instruction.command.filter && !(instruction.command.filter instanceof mixitup.CommandFilter)) {
                instruction.command.filter = self.parseFilterArgs([instruction.command.filter]).command
            }
            if (instruction.command.sort && !(instruction.command.sort instanceof mixitup.CommandSort)) {
                instruction.command.sort = self.parseSortArgs([instruction.command.sort]).command
            }
            if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof mixitup.CommandChangeLayout)) {
                instruction.command.changeLayout = self.parseChangeLayoutArgs([instruction.command.changeLayout]).command
            }
            instruction = self.callFilters('instructionParseMultimixArgs', instruction, arguments);
            h.freeze(instruction);
            return instruction
        },
        parseFilterArgs: function(args) {
            var self = this,
                instruction = new mixitup.UserInstruction(),
                arg = null,
                i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandFilter();
            for (i = 0; i < args.length; i++) {
                arg = args[i];
                if (typeof arg === 'string') {
                    instruction.command.selector = arg
                } else if (arg === null) {
                    instruction.command.collection = []
                } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    instruction.command.collection = [arg]
                } else if (typeof arg === 'object' && typeof arg.length !== 'undefined') {
                    instruction.command.collection = h.arrayFromList(arg)
                } else if (typeof arg === 'object') {
                    h.extend(instruction.command, arg)
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg
                } else if (typeof arg === 'function') {
                    instruction.callback = arg
                }
            }
            if (instruction.command.selector && instruction.command.collection) {
                throw new Error(mixitup.messages.errorFilterInvalidArguments())
            }
            instruction = self.callFilters('instructionParseFilterArgs', instruction, arguments);
            h.freeze(instruction);
            return instruction
        },
        parseSortArgs: function(args) {
            var self = this,
                instruction = new mixitup.UserInstruction(),
                arg = null,
                sortString = '',
                i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandSort();
            for (i = 0; i < args.length; i++) {
                arg = args[i];
                if (arg === null) continue;
                switch (typeof arg) {
                    case 'string':
                        sortString = arg;
                        break;
                    case 'object':
                        if (arg.length) {
                            instruction.command.collection = h.arrayFromList(arg)
                        }
                        break;
                    case 'boolean':
                        instruction.animate = arg;
                        break;
                    case 'function':
                        instruction.callback = arg;
                        break
                }
            }
            if (sortString) {
                instruction.command = self.parseSortString(sortString, instruction.command)
            }
            instruction = self.callFilters('instructionParseSortArgs', instruction, arguments);
            h.freeze(instruction);
            return instruction
        },
        parseInsertArgs: function(args) {
            var self = this,
                instruction = new mixitup.UserInstruction(),
                arg = null,
                i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandInsert();
            for (i = 0; i < args.length; i++) {
                arg = args[i];
                if (arg === null) continue;
                if (typeof arg === 'number') {
                    instruction.command.index = arg
                } else if (typeof arg === 'string' && ['before', 'after'].indexOf(arg) > -1) {
                    instruction.command.position = arg
                } else if (typeof arg === 'string') {
                    instruction.command.collection = h.arrayFromList(h.createElement(arg).childNodes)
                } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    !instruction.command.collection.length ? (instruction.command.collection = [arg]) : (instruction.command.sibling = arg)
                } else if (typeof arg === 'object' && arg.length) {
                    !instruction.command.collection.length ? (instruction.command.collection = arg) : instruction.command.sibling = arg[0]
                } else if (typeof arg === 'object' && arg.childNodes && arg.childNodes.length) {
                    !instruction.command.collection.length ? instruction.command.collection = h.arrayFromList(arg.childNodes) : instruction.command.sibling = arg.childNodes[0]
                } else if (typeof arg === 'object') {
                    h.extend(instruction.command, arg)
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg
                } else if (typeof arg === 'function') {
                    instruction.callback = arg
                }
            }
            if (instruction.command.index && instruction.command.sibling) {
                throw new Error(mixitup.messages.errorInsertInvalidArguments())
            }
            if (!instruction.command.collection.length && self.config.debug.showWarnings) {
                console.warn(mixitup.messages.warningInsertNoElements())
            }
            instruction = self.callFilters('instructionParseInsertArgs', instruction, arguments);
            h.freeze(instruction);
            return instruction
        },
        parseRemoveArgs: function(args) {
            var self = this,
                instruction = new mixitup.UserInstruction(),
                target = null,
                arg = null,
                i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandRemove();
            for (i = 0; i < args.length; i++) {
                arg = args[i];
                if (arg === null) continue;
                switch (typeof arg) {
                    case 'number':
                        if (self.targets[arg]) {
                            instruction.command.targets[0] = self.targets[arg]
                        }
                        break;
                    case 'string':
                        instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));
                        break;
                    case 'object':
                        if (arg && arg.length) {
                            instruction.command.collection = arg
                        } else if (h.isElement(arg, self.dom.document)) {
                            instruction.command.collection = [arg]
                        } else {
                            h.extend(instruction.command, arg)
                        }
                        break;
                    case 'boolean':
                        instruction.animate = arg;
                        break;
                    case 'function':
                        instruction.callback = arg;
                        break
                }
            }
            if (instruction.command.collection.length) {
                for (i = 0; target = self.targets[i]; i++) {
                    if (instruction.command.collection.indexOf(target.dom.el) > -1) {
                        instruction.command.targets.push(target)
                    }
                }
            }
            if (!instruction.command.targets.length && self.config.debug.showWarnings) {
                console.warn(mixitup.messages.warningRemoveNoElements())
            }
            h.freeze(instruction);
            return instruction
        },
        parseDatasetArgs: function(args) {
            var self = this,
                instruction = new mixitup.UserInstruction(),
                arg = null,
                i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandDataset();
            for (i = 0; i < args.length; i++) {
                arg = args[i];
                if (arg === null) continue;
                switch (typeof arg) {
                    case 'object':
                        if (Array.isArray(arg) || typeof arg.length === 'number') {
                            instruction.command.dataset = arg
                        } else {
                            h.extend(instruction.command, arg)
                        }
                        break;
                    case 'boolean':
                        instruction.animate = arg;
                        break;
                    case 'function':
                        instruction.callback = arg;
                        break
                }
            }
            h.freeze(instruction);
            return instruction
        },
        parseChangeLayoutArgs: function(args) {
            var self = this,
                instruction = new mixitup.UserInstruction(),
                arg = null,
                i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandChangeLayout();
            for (i = 0; i < args.length; i++) {
                arg = args[i];
                if (arg === null) continue;
                switch (typeof arg) {
                    case 'string':
                        instruction.command.containerClassName = arg;
                        break;
                    case 'object':
                        h.extend(instruction.command, arg);
                        break;
                    case 'boolean':
                        instruction.animate = arg;
                        break;
                    case 'function':
                        instruction.callback = arg;
                        break
                }
            }
            h.freeze(instruction);
            return instruction
        },
        queueMix: function(queueItem) {
            var self = this,
                deferred = null,
                toggleSelector = '';
            self.callActions('beforeQueueMix', arguments);
            deferred = h.defer(mixitup.libraries);
            if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
                queueItem.deferred = deferred;
                self.queue.push(queueItem);
                if (self.config.controls.enable) {
                    if (self.isToggling) {
                        self.buildToggleArray(queueItem.instruction.command);
                        toggleSelector = self.getToggleSelector();
                        self.updateControls({
                            filter: {
                                selector: toggleSelector
                            }
                        })
                    } else {
                        self.updateControls(queueItem.instruction.command)
                    }
                }
            } else {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningMultimixInstanceQueueFull())
                }
                deferred.resolve(self.state);
                mixitup.events.fire('mixBusy', self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);
                if (typeof self.config.callbacks.onMixBusy === 'function') {
                    self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self)
                }
            }
            return self.callFilters('promiseQueueMix', deferred.promise, arguments)
        },
        getDataOperation: function(newDataset) {
            var self = this,
                operation = new mixitup.Operation(),
                startDataset = [];
            operation = self.callFilters('operationUnmappedGetDataOperation', operation, arguments);
            if (self.dom.targets.length && !(startDataset = (self.state.activeDataset || [])).length) {
                throw new Error(mixitup.messages.errorDatasetNotSet())
            }
            operation.id = h.randomHex();
            operation.startState = self.state;
            operation.startDataset = startDataset;
            operation.newDataset = newDataset.slice();
            self.diffDatasets(operation);
            operation.startOrder = self.targets;
            operation.newOrder = operation.show;
            if (self.config.animation.enable) {
                self.getStartMixData(operation);
                self.setInter(operation);
                operation.docState = h.getDocumentState(self.dom.document);
                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);
                self.parseEffects();
                operation.hasEffect = self.hasEffect();
                self.getTweenData(operation)
            }
            self.targets = operation.show.slice();
            operation.newState = self.buildState(operation);
            Array.prototype.push.apply(self.targets, operation.toRemove);
            operation = self.callFilters('operationMappedGetDataOperation', operation, arguments);
            return operation
        },
        diffDatasets: function(operation) {
            var self = this,
                persistantStartIds = [],
                persistantNewIds = [],
                insertedTargets = [],
                data = null,
                target = null,
                el = null,
                frag = null,
                nextEl = null,
                uids = {},
                id = '',
                i = -1;
            self.callActions('beforeDiffDatasets', arguments);
            for (i = 0; data = operation.newDataset[i]; i++) {
                if (typeof(id = data[self.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
                    throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                        uidKey: self.config.data.uidKey
                    }))
                }
                if (!uids[id]) {
                    uids[id] = !0
                } else {
                    throw new Error(mixitup.messages.errorDatasetDuplicateUid({
                        uid: id
                    }))
                }
                if ((target = self.cache[id]) instanceof mixitup.Target) {
                    if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
                        el = target.render(data);
                        target.data = data;
                        if (el !== target.dom.el) {
                            if (target.isInDom) {
                                target.unbindEvents();
                                self.dom.parent.replaceChild(el, target.dom.el)
                            }
                            if (!target.isShown) {
                                el.style.display = 'none'
                            }
                            target.dom.el = el;
                            if (target.isInDom) {
                                target.bindEvents()
                            }
                        }
                    }
                    el = target.dom.el
                } else {
                    target = new mixitup.Target();
                    target.init(null, self, data);
                    target.hide()
                }
                if (!target.isInDom) {
                    if (!frag) {
                        frag = self.dom.document.createDocumentFragment()
                    }
                    if (frag.lastElementChild) {
                        frag.appendChild(self.dom.document.createTextNode(' '))
                    }
                    frag.appendChild(target.dom.el);
                    target.isInDom = !0;
                    target.unbindEvents();
                    target.bindEvents();
                    target.hide();
                    operation.toShow.push(target);
                    insertedTargets.push(target)
                } else {
                    nextEl = target.dom.el.nextElementSibling;
                    persistantNewIds.push(id);
                    if (frag) {
                        if (frag.lastElementChild) {
                            frag.appendChild(self.dom.document.createTextNode(' '))
                        }
                        self.insertDatasetFrag(frag, target.dom.el, self.targets.indexOf(target), insertedTargets);
                        frag = null
                    }
                }
                operation.show.push(target)
            }
            if (frag) {
                nextEl = nextEl || self.config.layout.siblingAfter;
                if (nextEl) {
                    frag.appendChild(self.dom.document.createTextNode(' '))
                }
                self.insertDatasetFrag(frag, nextEl, self.dom.targets.length, insertedTargets)
            }
            for (i = 0; data = operation.startDataset[i]; i++) {
                id = data[self.config.data.uidKey];
                target = self.cache[id];
                if (operation.show.indexOf(target) < 0) {
                    operation.hide.push(target);
                    operation.toHide.push(target);
                    operation.toRemove.push(target)
                } else {
                    persistantStartIds.push(id)
                }
            }
            if (!h.isEqualArray(persistantStartIds, persistantNewIds)) {
                operation.willSort = !0
            }
            self.callActions('afterDiffDatasets', arguments)
        },
        insertDatasetFrag: function(frag, nextEl, insertionIndex, targets) {
            var self = this;
            self.dom.parent.insertBefore(frag, nextEl);
            while (targets.length) {
                self.targets.splice(insertionIndex, 0, targets.shift());
                insertionIndex++
            }
        },
        willSort: function(sortCommandA, sortCommandB) {
            var self = this,
                result = !1;
            if (sortCommandA.order === 'random' || sortCommandA.attribute !== sortCommandB.attribute || sortCommandA.order !== sortCommandB.order || sortCommandA.collection !== sortCommandB.collection || (sortCommandA.next === null && sortCommandB.next) || (sortCommandA.next && sortCommandB.next === null)) {
                result = !0
            } else if (sortCommandA.next && sortCommandB.next) {
                result = self.willSort(sortCommandA.next, sortCommandB.next)
            } else {
                result = !1
            }
            return self.callFilters('resultWillSort', result, arguments)
        },
        show: function() {
            var self = this;
            return self.filter('all')
        },
        hide: function() {
            var self = this;
            return self.filter('none')
        },
        isMixing: function() {
            var self = this;
            return self.isBusy
        },
        filter: function() {
            var self = this,
                instruction = self.parseFilterArgs(arguments);
            return self.multimix({
                filter: instruction.command
            }, instruction.animate, instruction.callback)
        },
        toggleOn: function() {
            var self = this,
                instruction = self.parseFilterArgs(arguments),
                selector = instruction.command.selector,
                toggleSelector = '';
            self.isToggling = !0;
            if (self.toggleArray.indexOf(selector) < 0) {
                self.toggleArray.push(selector)
            }
            toggleSelector = self.getToggleSelector();
            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback)
        },
        toggleOff: function() {
            var self = this,
                instruction = self.parseFilterArgs(arguments),
                selector = instruction.command.selector,
                toggleSelector = '';
            self.isToggling = !0;
            self.toggleArray.splice(self.toggleArray.indexOf(selector), 1);
            toggleSelector = self.getToggleSelector();
            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback)
        },
        sort: function() {
            var self = this,
                instruction = self.parseSortArgs(arguments);
            return self.multimix({
                sort: instruction.command
            }, instruction.animate, instruction.callback)
        },
        changeLayout: function() {
            var self = this,
                instruction = self.parseChangeLayoutArgs(arguments);
            return self.multimix({
                changeLayout: instruction.command
            }, instruction.animate, instruction.callback)
        },
        dataset: function() {
            var self = this,
                instruction = self.parseDatasetArgs(arguments),
                operation = null,
                queueItem = null,
                animate = !1;
            self.callActions('beforeDataset', arguments);
            if (!self.isBusy) {
                if (instruction.callback) self.userCallback = instruction.callback;
                animate = (instruction.animate ^ self.config.animation.enable) ? instruction.animate : self.config.animation.enable;
                operation = self.getDataOperation(instruction.command.dataset);
                return self.goMix(animate, operation)
            } else {
                queueItem = new mixitup.QueueItem();
                queueItem.args = arguments;
                queueItem.instruction = instruction;
                return self.queueMix(queueItem)
            }
        },
        multimix: function() {
            var self = this,
                operation = null,
                animate = !1,
                queueItem = null,
                instruction = self.parseMultimixArgs(arguments);
            self.callActions('beforeMultimix', arguments);
            if (!self.isBusy) {
                operation = self.getOperation(instruction.command);
                if (self.config.controls.enable) {
                    if (instruction.command.filter && !self.isToggling) {
                        self.toggleArray.length = 0;
                        self.buildToggleArray(operation.command)
                    }
                    if (self.queue.length < 1) {
                        self.updateControls(operation.command)
                    }
                }
                if (instruction.callback) self.userCallback = instruction.callback;
                animate = (instruction.animate ^ self.config.animation.enable) ? instruction.animate : self.config.animation.enable;
                self.callFilters('operationMultimix', operation, arguments);
                return self.goMix(animate, operation)
            } else {
                queueItem = new mixitup.QueueItem();
                queueItem.args = arguments;
                queueItem.instruction = instruction;
                queueItem.triggerElement = self.lastClicked;
                queueItem.isToggling = self.isToggling;
                return self.queueMix(queueItem)
            }
        },
        getOperation: function(multimixCommand) {
            var self = this,
                sortCommand = multimixCommand.sort,
                filterCommand = multimixCommand.filter,
                changeLayoutCommand = multimixCommand.changeLayout,
                removeCommand = multimixCommand.remove,
                insertCommand = multimixCommand.insert,
                operation = new mixitup.Operation();
            operation = self.callFilters('operationUnmappedGetOperation', operation, arguments);
            operation.id = h.randomHex();
            operation.command = multimixCommand;
            operation.startState = self.state;
            operation.triggerElement = self.lastClicked;
            if (self.isBusy) {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningGetOperationInstanceBusy())
                }
                return null
            }
            if (insertCommand) {
                self.insertTargets(insertCommand, operation)
            }
            if (removeCommand) {
                operation.toRemove = removeCommand.targets
            }
            operation.startSort = operation.newSort = operation.startState.activeSort;
            operation.startOrder = operation.newOrder = self.targets;
            if (sortCommand) {
                operation.startSort = operation.startState.activeSort;
                operation.newSort = sortCommand;
                operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);
                if (operation.willSort) {
                    self.sortOperation(operation)
                }
            }
            operation.startFilter = operation.startState.activeFilter;
            if (filterCommand) {
                operation.newFilter = filterCommand
            } else {
                operation.newFilter = h.extend(new mixitup.CommandFilter(), operation.startFilter)
            }
            if (operation.newFilter.selector === 'all') {
                operation.newFilter.selector = self.config.selectors.target
            } else if (operation.newFilter.selector === 'none') {
                operation.newFilter.selector = ''
            }
            self.filterOperation(operation);
            operation.startContainerClassName = operation.startState.activeContainerClassName;
            if (changeLayoutCommand) {
                operation.newContainerClassName = changeLayoutCommand.containerClassName;
                if (operation.newContainerClassName !== operation.startContainerClassName) {
                    operation.willChangeLayout = !0
                }
            } else {
                operation.newContainerClassName = operation.startContainerClassName
            }
            if (self.config.animation.enable) {
                self.getStartMixData(operation);
                self.setInter(operation);
                operation.docState = h.getDocumentState(self.dom.document);
                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);
                self.parseEffects();
                operation.hasEffect = self.hasEffect();
                self.getTweenData(operation)
            }
            operation.newState = self.buildState(operation);
            return self.callFilters('operationMappedGetOperation', operation, arguments)
        },
        tween: function(operation, multiplier) {
            var target = null,
                posData = null,
                toHideIndex = -1,
                i = -1;
            multiplier = Math.min(multiplier, 1);
            multiplier = Math.max(multiplier, 0);
            for (i = 0; target = operation.show[i]; i++) {
                posData = operation.showPosData[i];
                target.applyTween(posData, multiplier)
            }
            for (i = 0; target = operation.hide[i]; i++) {
                if (target.isShown) {
                    target.hide()
                }
                if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
                    posData = operation.toHidePosData[toHideIndex];
                    if (!target.isShown) {
                        target.show()
                    }
                    target.applyTween(posData, multiplier)
                }
            }
        },
        insert: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);
            return self.multimix({
                insert: args.command
            }, args.animate, args.callback)
        },
        insertBefore: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);
            return self.insert(args.command.collection, 'before', args.command.sibling, args.animate, args.callback)
        },
        insertAfter: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);
            return self.insert(args.command.collection, 'after', args.command.sibling, args.animate, args.callback)
        },
        prepend: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);
            return self.insert(0, args.command.collection, args.animate, args.callback)
        },
        append: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);
            return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback)
        },
        remove: function() {
            var self = this,
                args = self.parseRemoveArgs(arguments);
            return self.multimix({
                remove: args.command
            }, args.animate, args.callback)
        },
        getConfig: function(stringKey) {
            var self = this,
                value = null;
            if (!stringKey) {
                value = self.config
            } else {
                value = h.getProperty(self.config, stringKey)
            }
            return self.callFilters('valueGetConfig', value, arguments)
        },
        configure: function(config) {
            var self = this;
            self.callActions('beforeConfigure', arguments);
            h.extend(self.config, config, !0, !0);
            self.callActions('afterConfigure', arguments)
        },
        getState: function() {
            var self = this,
                state = null;
            state = new mixitup.State();
            h.extend(state, self.state);
            h.freeze(state);
            return self.callFilters('stateGetState', state, arguments)
        },
        forceRefresh: function() {
            var self = this;
            self.indexTargets()
        },
        destroy: function(cleanUp) {
            var self = this,
                control = null,
                target = null,
                i = 0;
            self.callActions('beforeDestroy', arguments);
            for (i = 0; control = self.controls[i]; i++) {
                control.removeBinding(self)
            }
            for (i = 0; target = self.targets[i]; i++) {
                if (cleanUp) {
                    target.show()
                }
                target.unbindEvents()
            }
            if (self.dom.container.id.match(/^MixItUp/)) {
                self.dom.container.removeAttribute('id')
            }
            delete mixitup.instances[self.id];
            self.callActions('afterDestroy', arguments)
        }
    });
    mixitup.IMoveData = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.posIn = null;
        this.posOut = null;
        this.operation = null;
        this.callback = null;
        this.statusChange = '';
        this.duration = -1;
        this.staggerIndex = -1;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.IMoveData);
    mixitup.IMoveData.prototype = Object.create(mixitup.Base.prototype);
    mixitup.IMoveData.prototype.constructor = mixitup.IMoveData;
    mixitup.TargetDom = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.el = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.TargetDom);
    mixitup.TargetDom.prototype = Object.create(mixitup.Base.prototype);
    mixitup.TargetDom.prototype.constructor = mixitup.TargetDom;
    mixitup.Target = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.id = '';
        this.sortString = '';
        this.mixer = null;
        this.callback = null;
        this.isShown = !1;
        this.isBound = !1;
        this.isExcluded = !1;
        this.isInDom = !1;
        this.handler = null;
        this.operation = null;
        this.data = null;
        this.dom = new mixitup.TargetDom();
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.Target);
    mixitup.Target.prototype = Object.create(mixitup.Base.prototype);
    h.extend(mixitup.Target.prototype, {
        constructor: mixitup.Target,
        init: function(el, mixer, data) {
            var self = this,
                id = '';
            self.callActions('beforeInit', arguments);
            self.mixer = mixer;
            if (!el) {
                el = self.render(data)
            }
            self.cacheDom(el);
            self.bindEvents();
            if (self.dom.el.style.display !== 'none') {
                self.isShown = !0
            }
            if (data && mixer.config.data.uidKey) {
                if (typeof(id = data[mixer.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
                    throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                        uidKey: mixer.config.data.uidKey
                    }))
                }
                self.id = id;
                self.data = data;
                mixer.cache[id] = self
            }
            self.callActions('afterInit', arguments)
        },
        render: function(data) {
            var self = this,
                render = null,
                el = null,
                temp = null,
                output = '';
            self.callActions('beforeRender', arguments);
            render = self.callFilters('renderRender', self.mixer.config.render.target, arguments);
            if (typeof render !== 'function') {
                throw new TypeError(mixitup.messages.errorDatasetRendererNotSet())
            }
            output = render(data);
            if (output && typeof output === 'object' && h.isElement(output)) {
                el = output
            } else if (typeof output === 'string') {
                temp = document.createElement('div');
                temp.innerHTML = output;
                el = temp.firstElementChild
            }
            return self.callFilters('elRender', el, arguments)
        },
        cacheDom: function(el) {
            var self = this;
            self.callActions('beforeCacheDom', arguments);
            self.dom.el = el;
            self.callActions('afterCacheDom', arguments)
        },
        getSortString: function(attributeName) {
            var self = this,
                value = self.dom.el.getAttribute('data-' + attributeName) || '';
            self.callActions('beforeGetSortString', arguments);
            value = isNaN(value * 1) ? value.toLowerCase() : value * 1;
            self.sortString = value;
            self.callActions('afterGetSortString', arguments)
        },
        show: function() {
            var self = this;
            self.callActions('beforeShow', arguments);
            if (!self.isShown) {
                self.dom.el.style.display = '';
                self.isShown = !0
            }
            self.callActions('afterShow', arguments)
        },
        hide: function() {
            var self = this;
            self.callActions('beforeHide', arguments);
            if (self.isShown) {
                self.dom.el.style.display = 'none';
                self.isShown = !1
            }
            self.callActions('afterHide', arguments)
        },
        move: function(moveData) {
            var self = this;
            self.callActions('beforeMove', arguments);
            if (!self.isExcluded) {
                self.mixer.targetsMoved++
            }
            self.applyStylesIn(moveData);
            requestAnimationFrame(function() {
                self.applyStylesOut(moveData)
            });
            self.callActions('afterMove', arguments)
        },
        applyTween: function(posData, multiplier) {
            var self = this,
                propertyName = '',
                tweenData = null,
                posIn = posData.posIn,
                currentTransformValues = [],
                currentValues = new mixitup.StyleData(),
                i = -1;
            self.callActions('beforeApplyTween', arguments);
            currentValues.x = posIn.x;
            currentValues.y = posIn.y;
            if (multiplier === 0) {
                self.hide()
            } else if (!self.isShown) {
                self.show()
            }
            for (i = 0; propertyName = mixitup.features.TWEENABLE[i]; i++) {
                tweenData = posData.tweenData[propertyName];
                if (propertyName === 'x') {
                    if (!tweenData) continue;
                    currentValues.x = posIn.x + (tweenData * multiplier)
                } else if (propertyName === 'y') {
                    if (!tweenData) continue;
                    currentValues.y = posIn.y + (tweenData * multiplier)
                } else if (tweenData instanceof mixitup.TransformData) {
                    if (!tweenData.value) continue;
                    currentValues[propertyName].value = posIn[propertyName].value + (tweenData.value * multiplier);
                    currentValues[propertyName].unit = tweenData.unit;
                    currentTransformValues.push(propertyName + '(' + currentValues[propertyName].value + tweenData.unit + ')')
                } else {
                    if (!tweenData) continue;
                    currentValues[propertyName] = posIn[propertyName] + (tweenData * multiplier);
                    self.dom.el.style[propertyName] = currentValues[propertyName]
                }
            }
            if (currentValues.x || currentValues.y) {
                currentTransformValues.unshift('translate(' + currentValues.x + 'px, ' + currentValues.y + 'px)')
            }
            if (currentTransformValues.length) {
                self.dom.el.style[mixitup.features.transformProp] = currentTransformValues.join(' ')
            }
            self.callActions('afterApplyTween', arguments)
        },
        applyStylesIn: function(moveData) {
            var self = this,
                posIn = moveData.posIn,
                isFading = self.mixer.effectsIn.opacity !== 1,
                transformValues = [];
            self.callActions('beforeApplyStylesIn', arguments);
            transformValues.push('translate(' + posIn.x + 'px, ' + posIn.y + 'px)');
            if (self.mixer.config.animation.animateResizeTargets) {
                if (moveData.statusChange !== 'show') {
                    self.dom.el.style.width = posIn.width + 'px';
                    self.dom.el.style.height = posIn.height + 'px'
                }
                self.dom.el.style.marginRight = posIn.marginRight + 'px';
                self.dom.el.style.marginBottom = posIn.marginBottom + 'px'
            }
            isFading && (self.dom.el.style.opacity = posIn.opacity);
            if (moveData.statusChange === 'show') {
                transformValues = transformValues.concat(self.mixer.transformIn)
            }
            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');
            self.callActions('afterApplyStylesIn', arguments)
        },
        applyStylesOut: function(moveData) {
            var self = this,
                transitionRules = [],
                transformValues = [],
                isResizing = self.mixer.config.animation.animateResizeTargets,
                isFading = typeof self.mixer.effectsIn.opacity !== 'undefined';
            self.callActions('beforeApplyStylesOut', arguments);
            transitionRules.push(self.writeTransitionRule(mixitup.features.transformRule, moveData.staggerIndex));
            if (moveData.statusChange !== 'none') {
                transitionRules.push(self.writeTransitionRule('opacity', moveData.staggerIndex, moveData.duration))
            }
            if (isResizing) {
                transitionRules.push(self.writeTransitionRule('width', moveData.staggerIndex, moveData.duration));
                transitionRules.push(self.writeTransitionRule('height', moveData.staggerIndex, moveData.duration));
                transitionRules.push(self.writeTransitionRule('margin', moveData.staggerIndex, moveData.duration))
            }
            if (!moveData.callback) {
                self.mixer.targetsImmovable++;
                if (self.mixer.targetsMoved === self.mixer.targetsImmovable) {
                    self.mixer.cleanUp(moveData.operation)
                }
                return
            }
            self.operation = moveData.operation;
            self.callback = moveData.callback;
            !self.isExcluded && self.mixer.targetsBound++;
            self.isBound = !0;
            self.applyTransition(transitionRules);
            if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
                self.dom.el.style.width = moveData.posOut.width + 'px';
                self.dom.el.style.height = moveData.posOut.height + 'px';
                self.dom.el.style.marginRight = moveData.posOut.marginRight + 'px';
                self.dom.el.style.marginBottom = moveData.posOut.marginBottom + 'px'
            }
            if (!self.mixer.config.animation.nudge && moveData.statusChange === 'hide') {
                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)')
            }
            switch (moveData.statusChange) {
                case 'hide':
                    isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);
                    transformValues = transformValues.concat(self.mixer.transformOut);
                    break;
                case 'show':
                    isFading && (self.dom.el.style.opacity = 1)
            }
            if (self.mixer.config.animation.nudge || (!self.mixer.config.animation.nudge && moveData.statusChange !== 'hide')) {
                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)')
            }
            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');
            self.callActions('afterApplyStylesOut', arguments)
        },
        writeTransitionRule: function(property, staggerIndex, duration) {
            var self = this,
                delay = self.getDelay(staggerIndex),
                rule = '';
            rule = property + ' ' + (duration > 0 ? duration : self.mixer.config.animation.duration) + 'ms ' + delay + 'ms ' + (property === 'opacity' ? 'linear' : self.mixer.config.animation.easing);
            return self.callFilters('ruleWriteTransitionRule', rule, arguments)
        },
        getDelay: function(index) {
            var self = this,
                delay = -1;
            if (typeof self.mixer.config.animation.staggerSequence === 'function') {
                index = self.mixer.config.animation.staggerSequence.call(self, index, self.state)
            }
            delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;
            return self.callFilters('delayGetDelay', delay, arguments)
        },
        applyTransition: function(rules) {
            var self = this,
                transitionString = rules.join(', ');
            self.callActions('beforeApplyTransition', arguments);
            self.dom.el.style[mixitup.features.transitionProp] = transitionString;
            self.callActions('afterApplyTransition', arguments)
        },
        handleTransitionEnd: function(e) {
            var self = this,
                propName = e.propertyName,
                canResize = self.mixer.config.animation.animateResizeTargets;
            self.callActions('beforeHandleTransitionEnd', arguments);
            if (self.isBound && e.target.matches(self.mixer.config.selectors.target) && (propName.indexOf('transform') > -1 || propName.indexOf('opacity') > -1 || canResize && propName.indexOf('height') > -1 || canResize && propName.indexOf('width') > -1 || canResize && propName.indexOf('margin') > -1)) {
                self.callback.call(self, self.operation);
                self.isBound = !1;
                self.callback = null;
                self.operation = null
            }
            self.callActions('afterHandleTransitionEnd', arguments)
        },
        eventBus: function(e) {
            var self = this;
            self.callActions('beforeEventBus', arguments);
            switch (e.type) {
                case 'webkitTransitionEnd':
                case 'transitionend':
                    self.handleTransitionEnd(e)
            }
            self.callActions('afterEventBus', arguments)
        },
        unbindEvents: function() {
            var self = this;
            self.callActions('beforeUnbindEvents', arguments);
            h.off(self.dom.el, 'webkitTransitionEnd', self.handler);
            h.off(self.dom.el, 'transitionend', self.handler);
            self.callActions('afterUnbindEvents', arguments)
        },
        bindEvents: function() {
            var self = this,
                transitionEndEvent = '';
            self.callActions('beforeBindEvents', arguments);
            transitionEndEvent = mixitup.features.transitionPrefix === 'webkit' ? 'webkitTransitionEnd' : 'transitionend';
            self.handler = function(e) {
                return self.eventBus(e)
            };
            h.on(self.dom.el, transitionEndEvent, self.handler);
            self.callActions('afterBindEvents', arguments)
        },
        getPosData: function(getBox) {
            var self = this,
                styles = {},
                rect = null,
                posData = new mixitup.StyleData();
            self.callActions('beforeGetPosData', arguments);
            posData.x = self.dom.el.offsetLeft;
            posData.y = self.dom.el.offsetTop;
            if (self.mixer.config.animation.animateResizeTargets || getBox) {
                rect = self.dom.el.getBoundingClientRect();
                posData.top = rect.top;
                posData.right = rect.right;
                posData.bottom = rect.bottom;
                posData.left = rect.left;
                posData.width = rect.width;
                posData.height = rect.height
            }
            if (self.mixer.config.animation.animateResizeTargets) {
                styles = window.getComputedStyle(self.dom.el);
                posData.marginBottom = parseFloat(styles.marginBottom);
                posData.marginRight = parseFloat(styles.marginRight)
            }
            return self.callFilters('posDataGetPosData', posData, arguments)
        },
        cleanUp: function() {
            var self = this;
            self.callActions('beforeCleanUp', arguments);
            self.dom.el.style[mixitup.features.transformProp] = '';
            self.dom.el.style[mixitup.features.transitionProp] = '';
            self.dom.el.style.opacity = '';
            if (self.mixer.config.animation.animateResizeTargets) {
                self.dom.el.style.width = '';
                self.dom.el.style.height = '';
                self.dom.el.style.marginRight = '';
                self.dom.el.style.marginBottom = ''
            }
            self.callActions('afterCleanUp', arguments)
        }
    });
    mixitup.Collection = function(instances) {
        var instance = null,
            i = -1;
        this.callActions('beforeConstruct');
        for (i = 0; instance = instances[i]; i++) {
            this[i] = instance
        }
        this.length = instances.length;
        this.callActions('afterConstruct');
        h.freeze(this)
    };
    mixitup.BaseStatic.call(mixitup.Collection);
    mixitup.Collection.prototype = Object.create(mixitup.Base.prototype);
    h.extend(mixitup.Collection.prototype, {
        constructor: mixitup.Collection,
        mixitup: function(methodName) {
            var self = this,
                instance = null,
                args = Array.prototype.slice.call(arguments),
                tasks = [],
                i = -1;
            this.callActions('beforeMixitup');
            args.shift();
            for (i = 0; instance = self[i]; i++) {
                tasks.push(instance[methodName].apply(instance, args))
            }
            return self.callFilters('promiseMixitup', h.all(tasks, mixitup.libraries), arguments)
        }
    });
    mixitup.Operation = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.id = '';
        this.args = [];
        this.command = null;
        this.showPosData = [];
        this.toHidePosData = [];
        this.startState = null;
        this.newState = null;
        this.docState = null;
        this.willSort = !1;
        this.willChangeLayout = !1;
        this.hasEffect = !1;
        this.hasFailed = !1;
        this.triggerElement = null;
        this.show = [];
        this.hide = [];
        this.matching = [];
        this.toShow = [];
        this.toHide = [];
        this.toMove = [];
        this.toRemove = [];
        this.startOrder = [];
        this.newOrder = [];
        this.startSort = null;
        this.newSort = null;
        this.startFilter = null;
        this.newFilter = null;
        this.startDataset = null;
        this.newDataset = null;
        this.startX = 0;
        this.startY = 0;
        this.startHeight = 0;
        this.startWidth = 0;
        this.newX = 0;
        this.newY = 0;
        this.newHeight = 0;
        this.newWidth = 0;
        this.startContainerClassName = '';
        this.startDisplay = '';
        this.newContainerClassName = '';
        this.newDisplay = '';
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.Operation);
    mixitup.Operation.prototype = Object.create(mixitup.Base.prototype);
    mixitup.Operation.prototype.constructor = mixitup.Operation;
    mixitup.State = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.id = '';
        this.activeFilter = null;
        this.activeSort = null;
        this.activeContainerClassName = '';
        this.container = null;
        this.targets = [];
        this.hide = [];
        this.show = [];
        this.matching = [];
        this.totalTargets = -1;
        this.totalShow = -1;
        this.totalHide = -1;
        this.totalMatching = -1;
        this.hasFailed = !1;
        this.triggerElement = null;
        this.activeDataset = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.State);
    mixitup.State.prototype = Object.create(mixitup.Base.prototype);
    mixitup.State.prototype.constructor = mixitup.State;
    mixitup.UserInstruction = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.command = {};
        this.animate = !1;
        this.callback = null;
        this.callActions('afterConstruct');
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.UserInstruction);
    mixitup.UserInstruction.prototype = Object.create(mixitup.Base.prototype);
    mixitup.UserInstruction.prototype.constructor = mixitup.UserInstruction;
    mixitup.Messages = function() {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct');
        this.ERROR_FACTORY_INVALID_CONTAINER = '[MixItUp] An invalid selector or element reference was passed to the mixitup factory function';
        this.ERROR_FACTORY_CONTAINER_NOT_FOUND = '[MixItUp] The provided selector yielded no container element';
        this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = '[MixItUp] Invalid value for `animation.effects`';
        this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = '[MixItUp] Invalid value for `controls.scope`';
        this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';
        this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?';
        this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = '[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`';
        this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';
        this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';
        this.ERROR_INSERT_INVALID_ARGUMENTS = '[MixItUp] Please provider either an index or a sibling and position to insert, not both';
        this.ERROR_INSERT_PREEXISTING_ELEMENT = '[MixItUp] An element to be inserted already exists in the container';
        this.ERROR_FILTER_INVALID_ARGUMENTS = '[MixItUp] Please provide either a selector or collection `.filter()`, not both';
        this.ERROR_DATASET_NOT_SET = '[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`';
        this.ERROR_DATASET_PRERENDERED_MISMATCH = '[MixItUp] `load.dataset` does not match pre-rendered targets';
        this.ERROR_DATASET_RENDERER_NOT_SET = '[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`';
        this.WARNING_FACTORY_PREEXISTING_INSTANCE = '[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored.' + ' If you wish to perform additional methods on this instance, please create a reference.';
        this.WARNING_INSERT_NO_ELEMENTS = '[MixItUp] WARNING: No valid elements were passed to `.insert()`';
        this.WARNING_REMOVE_NO_ELEMENTS = '[MixItUp] WARNING: No valid elements were passed to `.remove()`';
        this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = '[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the ' + 'queue is full or queuing is disabled.';
        this.WARNING_GET_OPERATION_INSTANCE_BUSY = '[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.';
        this.WARNING_NO_PROMISE_IMPLEMENTATION = '[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install' + ' an ES6 Promise polyfill.';
        this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements' + ' which may product unexpected sort output';
        this.callActions('afterConstruct');
        this.compileTemplates();
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.Messages);
    mixitup.Messages.prototype = Object.create(mixitup.Base.prototype);
    mixitup.Messages.prototype.constructor = mixitup.Messages;
    mixitup.Messages.prototype.compileTemplates = function() {
        var errorKey = '';
        var errorMessage = '';
        for (errorKey in this) {
            if (typeof(errorMessage = this[errorKey]) !== 'string') continue;
            this[h.camelCase(errorKey)] = h.template(errorMessage)
        }
    };
    mixitup.messages = new mixitup.Messages();
    mixitup.Facade = function Mixer(mixer) {
        mixitup.Base.call(this);
        this.callActions('beforeConstruct', arguments);
        this.configure = mixer.configure.bind(mixer);
        this.show = mixer.show.bind(mixer);
        this.hide = mixer.hide.bind(mixer);
        this.filter = mixer.filter.bind(mixer);
        this.toggleOn = mixer.toggleOn.bind(mixer);
        this.toggleOff = mixer.toggleOff.bind(mixer);
        this.sort = mixer.sort.bind(mixer);
        this.changeLayout = mixer.changeLayout.bind(mixer);
        this.multimix = mixer.multimix.bind(mixer);
        this.multiMix = mixer.multimix.bind(mixer);
        this.dataset = mixer.dataset.bind(mixer);
        this.tween = mixer.tween.bind(mixer);
        this.insert = mixer.insert.bind(mixer);
        this.insertBefore = mixer.insertBefore.bind(mixer);
        this.insertAfter = mixer.insertAfter.bind(mixer);
        this.prepend = mixer.prepend.bind(mixer);
        this.append = mixer.append.bind(mixer);
        this.remove = mixer.remove.bind(mixer);
        this.destroy = mixer.destroy.bind(mixer);
        this.forceRefresh = mixer.forceRefresh.bind(mixer);
        this.isMixing = mixer.isMixing.bind(mixer);
        this.getOperation = mixer.getOperation.bind(mixer);
        this.getConfig = mixer.getConfig.bind(mixer);
        this.getState = mixer.getState.bind(mixer);
        this.callActions('afterConstruct', arguments);
        h.freeze(this);
        h.seal(this)
    };
    mixitup.BaseStatic.call(mixitup.Facade);
    mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);
    mixitup.Facade.prototype.constructor = mixitup.Facade;
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = mixitup
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            return mixitup
        })
    } else if (typeof window.mixitup === 'undefined' || typeof window.mixitup !== 'function') {
        window.mixitup = window.mixItUp = mixitup
    }
    if ((jq = window.$ || window.jQuery) && jq.fn.jquery) {
        mixitup.registerJqPlugin(jq)
    }
    mixitup.BaseStatic.call(mixitup.constructor);
    mixitup.NAME = 'mixitup';
    mixitup.CORE_VERSION = '3.1.10'
})(window);
(function($) {
    $.fn.appear = function(fn, options) {
        var settings = $.extend({
            data: undefined,
            one: !0,
            accX: 0,
            accY: 0
        }, options);
        return this.each(function() {
            var t = $(this);
            t.appeared = !1;
            if (!fn) {
                t.trigger('appear', settings.data);
                return
            }
            var w = $(window);
            var check = function() {
                if (!t.is(':visible')) {
                    t.appeared = !1;
                    return
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();
                if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
                    if (!t.appeared) t.trigger('appear', settings.data)
                } else {
                    t.appeared = !1
                }
            };
            var modifiedFn = function() {
                t.appeared = !0;
                if (settings.one) {
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1)
                }
                fn.apply(this, arguments)
            };
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);
            w.scroll(check);
            $.fn.appear.checks.push(check);
            (check)()
        })
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0)
                while (length--)($.fn.appear.checks[length])()
        },
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20)
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r
            }
        }
    })
})(jQuery);
(function($, window, document, undefined) {
    function Owl(element, options) {
        this.settings = null;
        this.options = $.extend({}, Owl.Defaults, options);
        this.$element = $(element);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                'initializing': ['busy'],
                'animating': ['busy'],
                'dragging': ['interacting']
            }
        };
        $.each(['onResize', 'onThrottledResize'], $.proxy(function(i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this)
        }, this));
        $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this)
        }, this));
        $.each(Owl.Workers, $.proxy(function(priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }
    Owl.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        fallbackEasing: 'swing',
        info: !1,
        nestedItemSelector: !1,
        itemElement: 'div',
        stageElement: 'div',
        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    };
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };
    Owl.Plugins = {};
    Owl.Workers = [{
        filter: ['width', 'settings'],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ['items', 'settings'],
        run: function() {
            this.$stage.children('.cloned').remove()
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': 'auto',
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };
            !grid && this.$stage.children().css(css);
            cache.css = css
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];
            cache.items = {
                merge: !1,
                width: width
            };
            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
                cache.items.merge = merge > 1 || cache.items.merge;
                widths[iterator] = !grid ? this._items[iterator].width() : width * merge
            }
            this._widths = widths
        }
    }, {
        filter: ['items', 'settings'],
        run: function() {
            var clones = [],
                items = this._items,
                settings = this.settings,
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';
            repeat /= 2;
            while (repeat--) {
                clones.push(this.normalize(clones.length / 2, !0));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, !0));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend
            }
            this._clones = clones;
            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage)
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];
            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl)
            }
            this._coordinates = coordinates
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function() {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };
            this.$stage.css(css)
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();
            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css)
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css)
            }
        }
    }, {
        filter: ['items'],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr('style')
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current)
        }
    }, {
        filter: ['position'],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ['width', 'position', 'items', 'settings'],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [],
                i, n;
            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;
                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i)
                }
            }
            this.$stage.children('.active').removeClass('active');
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
            if (this.settings.center) {
                this.$stage.children('.center').removeClass('center');
                this.$stage.children().eq(this.current()).addClass('center')
            }
        }
    }];
    Owl.prototype.initialize = function() {
        this.enter('initializing');
        this.trigger('initialize');
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs)
            }
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        if (this.$element.is(':visible')) {
            this.refresh()
        } else {
            this.invalidate('width')
        }
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        this.registerEventHandlers();
        this.leave('initializing');
        this.trigger('initialized')
    };
    Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;
        if (!overwrites) {
            settings = $.extend({}, this.options)
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint)
                }
            });
            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === 'function') {
                settings.stagePadding = settings.stagePadding()
            }
            delete settings.responsive;
            if (settings.responsiveClass) {
                this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match))
            }
        }
        this.trigger('change', {
            property: {
                name: 'settings',
                value: settings
            }
        });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate('settings');
        this.trigger('changed', {
            property: {
                name: 'settings',
                value: this.settings
            }
        })
    };
    Owl.prototype.optionsLogic = function() {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = !1;
            this.settings.merge = !1
        }
    };
    Owl.prototype.prepare = function(item) {
        var event = this.trigger('prepare', {
            content: item
        });
        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(item)
        }
        this.trigger('prepared', {
            content: event.data
        });
        return event.data
    };
    Owl.prototype.update = function() {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function(p) {
                return this[p]
            }, this._invalidated),
            cache = {};
        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache)
            }
            i++
        }
        this._invalidated = {};
        !this.is('valid') && this.enter('valid')
    };
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin
        }
    };
    Owl.prototype.refresh = function() {
        this.enter('refreshing');
        this.trigger('refresh');
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave('refreshing');
        this.trigger('refreshed')
    };
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    };
    Owl.prototype.onResize = function() {
        if (!this._items.length) {
            return !1
        }
        if (this._width === this.$element.width()) {
            return !1
        }
        if (!this.$element.is(':visible')) {
            return !1
        }
        this.enter('resizing');
        if (this.trigger('resize').isDefaultPrevented()) {
            this.leave('resizing');
            return !1
        }
        this.invalidate('width');
        this.refresh();
        this.leave('resizing');
        this.trigger('resized')
    };
    Owl.prototype.registerEventHandlers = function() {
        if ($.support.transition) {
            this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this))
        }
        if (this.settings.responsive !== !1) {
            this.on(window, 'resize', this._handlers.onThrottledResize)
        }
        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function() {
                return !1
            })
        }
        if (this.settings.touchDrag) {
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this))
        }
    };
    Owl.prototype.onDragStart = function(event) {
        var stage = null;
        if (event.which === 3) {
            return
        }
        if ($.support.transform) {
            stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            }
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
                y: stage.top
            }
        }
        if (this.is('animating')) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop()
            this.invalidate('position')
        }
        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
        this.speed(0);
        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);
        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));
            $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return
            }
            event.preventDefault();
            this.enter('dragging');
            this.trigger('drag')
        }, this))
    };
    Owl.prototype.onDragMove = function(event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);
        if (!this.is('dragging')) {
            return
        }
        event.preventDefault();
        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull)
        }
        this._drag.stage.current = stage;
        this.animate(stage.x)
    };
    Owl.prototype.onDragEnd = function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
        $(document).off('.owl.core');
        this.$element.removeClass(this.options.grabClass);
        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();
            this._drag.direction = direction;
            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                this._drag.target.one('click.owl.core', function() {
                    return !1
                })
            }
        }
        if (!this.is('dragging')) {
            return
        }
        this.leave('dragging');
        this.trigger('dragged')
    };
    Owl.prototype.closest = function(coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();
        if (!this.settings.freeDrag) {
            $.each(coordinates, $.proxy(function(index, value) {
                if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                    position = index
                } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1
                } else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = direction === 'left' ? index + 1 : index
                }
                return position === -1
            }, this))
        }
        if (!this.settings.loop) {
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum()
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum()
            }
        }
        return position
    };
    Owl.prototype.animate = function(coordinate) {
        var animate = this.speed() > 0;
        this.is('animating') && this.onTransitionEnd();
        if (animate) {
            this.enter('animating');
            this.trigger('translate')
        }
        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                transition: (this.speed() / 1000) + 's'
            })
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this))
        } else {
            this.$stage.css({
                left: coordinate + 'px'
            })
        }
    };
    Owl.prototype.is = function(state) {
        return this._states.current[state] && this._states.current[state] > 0
    };
    Owl.prototype.current = function(position) {
        if (position === undefined) {
            return this._current
        }
        if (this._items.length === 0) {
            return undefined
        }
        position = this.normalize(position);
        if (this._current !== position) {
            var event = this.trigger('change', {
                property: {
                    name: 'position',
                    value: position
                }
            });
            if (event.data !== undefined) {
                position = this.normalize(event.data)
            }
            this._current = position;
            this.invalidate('position');
            this.trigger('changed', {
                property: {
                    name: 'position',
                    value: this._current
                }
            })
        }
        return this._current
    };
    Owl.prototype.invalidate = function(part) {
        if ($.type(part) === 'string') {
            this._invalidated[part] = !0;
            this.is('valid') && this.leave('valid')
        }
        return $.map(this._invalidated, function(v, i) {
            return i
        })
    };
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);
        if (position === undefined) {
            return
        }
        this._speed = 0;
        this._current = position;
        this.suppress(['translate', 'translated']);
        this.animate(this.coordinates(position));
        this.release(['translate', 'translated'])
    };
    Owl.prototype.normalize = function(position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;
        if (!this.isNumeric(position) || n < 1) {
            position = undefined
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2
        }
        return position
    };
    Owl.prototype.relative = function(position) {
        position -= this._clones.length / 2;
        return this.normalize(position, !0)
    };
    Owl.prototype.maximum = function(relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator, reciprocalItemsWidth, elementWidth;
        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this._items[--iterator].width();
            elementWidth = this.$element.width();
            while (iterator--) {
                reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                    break
                }
            }
            maximum = iterator + 1
        } else if (settings.center) {
            maximum = this._items.length - 1
        } else {
            maximum = this._items.length - settings.items
        }
        if (relative) {
            maximum -= this._clones.length / 2
        }
        return Math.max(maximum, 0)
    };
    Owl.prototype.minimum = function(relative) {
        return relative ? 0 : this._clones.length / 2
    };
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice()
        }
        position = this.normalize(position, !0);
        return this._items[position]
    };
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice()
        }
        position = this.normalize(position, !0);
        return this._mergers[position]
    };
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) {
                return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
            };
        if (position === undefined) {
            return $.map(this._clones, function(v, i) {
                return map(i)
            })
        }
        return $.map(this._clones, function(v, i) {
            return v === position ? map(i) : null
        })
    };
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed
        }
        return this._speed
    };
    Owl.prototype.coordinates = function(position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;
        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                return this.coordinates(index)
            }, this))
        }
        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1
            }
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier
        } else {
            coordinate = this._coordinates[newPosition] || 0
        }
        coordinate = Math.ceil(coordinate);
        return coordinate
    };
    Owl.prototype.duration = function(from, to, factor) {
        if (factor === 0) {
            return 0
        }
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed))
    };
    Owl.prototype.to = function(position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();
        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items
            }
            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;
            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current)
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum
        } else {
            position = Math.max(minimum, Math.min(maximum, position))
        }
        this.speed(this.duration(current, position, speed));
        this.current(position);
        if (this.$element.is(':visible')) {
            this.update()
        }
    };
    Owl.prototype.next = function(speed) {
        speed = speed || !1;
        this.to(this.relative(this.current()) + 1, speed)
    };
    Owl.prototype.prev = function(speed) {
        speed = speed || !1;
        this.to(this.relative(this.current()) - 1, speed)
    };
    Owl.prototype.onTransitionEnd = function(event) {
        if (event !== undefined) {
            event.stopPropagation();
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return !1
            }
        }
        this.leave('animating');
        this.trigger('translated')
    };
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width()
        } else if (window.innerWidth) {
            width = window.innerWidth
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth
        } else {
            console.warn('Can not detect viewport width.')
        }
        return width
    };
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];
        if (content) {
            content = (content instanceof jQuery) ? content : $(content)
        }
        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector)
        }
        content.filter(function() {
            return this.nodeType === 1
        }).each($.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1)
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate('items')
    };
    Owl.prototype.add = function(content, position) {
        var current = this.relative(this._current);
        position = position === undefined ? this._items.length : this.normalize(position, !0);
        content = content instanceof jQuery ? content : $(content);
        this.trigger('add', {
            content: content,
            position: position
        });
        content = this.prepare(content);
        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1)
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1)
        }
        this._items[current] && this.reset(this._items[current].index());
        this.invalidate('items');
        this.trigger('added', {
            content: content,
            position: position
        })
    };
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, !0);
        if (position === undefined) {
            return
        }
        this.trigger('remove', {
            content: this._items[position],
            position: position
        });
        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);
        this.invalidate('items');
        this.trigger('removed', {
            content: null,
            position: position
        })
    };
    Owl.prototype.preloadAutoWidthImages = function(images) {
        images.each($.proxy(function(i, element) {
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function(e) {
                element.attr('src', e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh()
            }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'))
        }, this))
    };
    Owl.prototype.destroy = function() {
        this.$element.off('.owl.core');
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');
        if (this.settings.responsive !== !1) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, 'resize', this._handlers.onThrottledResize)
        }
        for (var i in this._plugins) {
            this._plugins[i].destroy()
        }
        this.$stage.children('.cloned').remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')).removeData('owl.carousel')
    };
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break
        }
    };
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture)
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener)
        }
    };
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture)
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener)
        }
    };
    Owl.prototype.trigger = function(name, data, namespace, state, enter) {
        var status = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            handler = $.camelCase($.grep(['on', name, namespace], function(v) {
                return v
            }).join('-').toLowerCase()),
            event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({
                relatedTarget: this
            }, status, data));
        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event)
                }
            });
            this.register({
                type: Owl.Type.Event,
                name: name
            });
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].call(this, event)
            }
        }
        return event
    };
    Owl.prototype.enter = function(name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0
            }
            this._states.current[name]++
        }, this))
    };
    Owl.prototype.leave = function(name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            this._states.current[name]--
        }, this))
    };
    Owl.prototype.register = function(object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {}
            }
            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function(e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                        return _default.apply(this, arguments)
                    }
                    return e.namespace && e.namespace.indexOf('owl') > -1
                };
                $.event.special[object.name].owl = !0
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags)
            }
            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i
            }, this))
        }
    };
    Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = !0
        }, this))
    };
    Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event]
        }, this))
    };
    Owl.prototype.pointer = function(event) {
        var result = {
            x: null,
            y: null
        };
        event = event.originalEvent || event || window.event;
        event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY
        } else {
            result.x = event.clientX;
            result.y = event.clientY
        }
        return result
    };
    Owl.prototype.isNumeric = function(number) {
        return !isNaN(parseFloat(number))
    };
    Owl.prototype.difference = function(first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        }
    };
    $.fn.owlCarousel = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this),
                data = $this.data('owl.carousel');
            if (!data) {
                data = new Owl(this, typeof option == 'object' && option);
                $this.data('owl.carousel', data);
                $.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function(i, event) {
                    data.register({
                        type: Owl.Type.Event,
                        name: event
                    });
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([event]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([event])
                        }
                    }, data))
                })
            }
            if (typeof option == 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args)
            }
        })
    };
    $.fn.owlCarousel.Constructor = Owl
})(window.Zepto || window.jQuery, window, document);
(function($, window, document, undefined) {
    var AutoRefresh = function(carousel) {
        this._core = carousel;
        this._interval = null;
        this._visible = null;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch()
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    AutoRefresh.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    };
    AutoRefresh.prototype.watch = function() {
        if (this._interval) {
            return
        }
        this._visible = this._core.$element.is(':visible');
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)
    };
    AutoRefresh.prototype.refresh = function() {
        if (this._core.$element.is(':visible') === this._visible) {
            return
        }
        this._visible = !this._visible;
        this._core.$element.toggleClass('owl-hidden', !this._visible);
        this._visible && (this._core.invalidate('width') && this._core.refresh())
    };
    AutoRefresh.prototype.destroy = function() {
        var handler, property;
        window.clearInterval(this._interval);
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh
})(window.Zepto || window.jQuery, window, document);
(function($, window, document, undefined) {
    var Lazy = function(carousel) {
        this._core = carousel;
        this._loaded = [];
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return
                }
                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return
                }
                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function(i, v) {
                            this.load(v)
                        }, this);
                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++
                    }
                }
            }, this)
        };
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    Lazy.Defaults = {
        lazyLoad: !1
    };
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');
        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return
        }
        $elements.each($.proxy(function(index, element) {
            var $element = $(element),
                image, url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
            this._core.trigger('load', {
                element: $element,
                url: url
            }, 'lazy');
            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', {
                        element: $element,
                        url: url
                    }, 'lazy')
                }, this)).attr('src', url)
            } else {
                image = new Image();
                image.onload = $.proxy(function() {
                    $element.css({
                        'background-image': 'url("' + url + '")',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', {
                        element: $element,
                        url: url
                    }, 'lazy')
                }, this);
                image.src = url
            }
        }, this));
        this._loaded.push($item.get(0))
    };
    Lazy.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy
})(window.Zepto || window.jQuery, window, document);
(function($, window, document, undefined) {
    var AutoHeight = function(carousel) {
        this._core = carousel;
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update()
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position') {
                    this.update()
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update()
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    AutoHeight.Defaults = {
        autoHeight: !1,
        autoHeightClass: 'owl-height'
    };
    AutoHeight.prototype.update = function() {
        var start = this._core._current,
            end = start + this._core.settings.items,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;
        $.each(visible, function(index, item) {
            heights.push($(item).height())
        });
        maxheight = Math.max.apply(null, heights);
        this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)
    };
    AutoHeight.prototype.destroy = function() {
        var handler, property;
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight
})(window.Zepto || window.jQuery, window, document);
(function($, window, document, undefined) {
    var Video = function(carousel) {
        this._core = carousel;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this._core.register({
                        type: 'state',
                        name: 'playing',
                        tags: ['interacting']
                    })
                }
            }, this),
            'resize.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault()
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.is('resizing')) {
                    this._core.$stage.find('.cloned .owl-video-frame').remove()
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position' && this._playing) {
                    this.stop()
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return
                }
                var $element = $(e.content).find('.owl-video');
                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content))
                }
            }, this)
        };
        this._core.options = $.extend({}, Video.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
            this.play(e)
        }, this))
    };
    Video.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    };
    Video.prototype.fetch = function(target, item) {
        var type = (function() {
                if (target.attr('data-vimeo-id')) {
                    return 'vimeo'
                } else if (target.attr('data-vzaar-id')) {
                    return 'vzaar'
                } else {
                    return 'youtube'
                }
            })(),
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');
        if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube'
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo'
            } else if (id[3].indexOf('vzaar') > -1) {
                type = 'vzaar'
            } else {
                throw new Error('Video URL not supported.')
            }
            id = id[6]
        } else {
            throw new Error('Missing video URL.')
        }
        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };
        item.attr('data-video', url);
        this.thumbnail(target, this._videos[url])
    };
    Video.prototype.thumbnail = function(target, video) {
        var tnLink, icon, path, dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function(path) {
                icon = '<div class="owl-video-play-icon"></div>';
                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>'
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>'
                }
                target.after(tnLink);
                target.after(icon)
            };
        target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy'
        }
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return !1
        }
        if (video.type === 'youtube') {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path)
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path)
                }
            })
        } else if (video.type === 'vzaar') {
            $.ajax({
                type: 'GET',
                url: '//vzaar.com/api/videos/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data.framegrab_url;
                    create(path)
                }
            })
        }
    };
    Video.prototype.stop = function() {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave('playing');
        this._core.trigger('stopped', null, 'video')
    };
    Video.prototype.play = function(event) {
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html;
        if (this._playing) {
            return
        }
        this._core.enter('playing');
        this._core.trigger('play', null, 'video');
        item = this._core.items(this._core.relative(item.index()));
        this._core.reset(item.index());
        if (video.type === 'youtube') {
            html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>'
        } else if (video.type === 'vimeo') {
            html = '<iframe src="//player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
        } else if (video.type === 'vzaar') {
            html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' + 'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>'
        }
        $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
        this._playing = item.addClass('owl-video-playing')
    };
    Video.prototype.isInFullScreen = function() {
        var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        return element && $(element).parent().hasClass('owl-video-frame')
    };
    Video.prototype.destroy = function() {
        var handler, property;
        this._core.$element.off('click.owl.video');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Video = Video
})(window.Zepto || window.jQuery, window, document);
(function($, window, document, undefined) {
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = !0;
        this.previous = undefined;
        this.next = undefined;
        this.handlers = {
            'change.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this.swapping = e.type == 'translated'
                }
            }, this),
            'translate.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap()
                }
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    Animate.Defaults = {
        animateOut: !1,
        animateIn: !1
    };
    Animate.prototype.swap = function() {
        if (this.core.settings.items !== 1) {
            return
        }
        if (!$.support.animation || !$.support.transition) {
            return
        }
        this.core.speed(0);
        var left, clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
            return
        }
        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear).css({
                'left': left + 'px'
            }).addClass('animated owl-animated-out').addClass(outgoing)
        }
        if (incoming) {
            next.one($.support.animation.end, clear).addClass('animated owl-animated-in').addClass(incoming)
        }
    };
    Animate.prototype.clear = function(e) {
        $(e.target).css({
            'left': ''
        }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd()
    };
    Animate.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate
})(window.Zepto || window.jQuery, window, document);
(function($, window, document, undefined) {
    var Autoplay = function(carousel) {
        this._core = carousel;
        this._timeout = null;
        this._paused = !1;
        this._handlers = {
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play()
                    } else {
                        this.stop()
                    }
                } else if (e.namespace && e.property.name === 'position') {
                    if (this._core.settings.autoplay) {
                        this._setAutoPlayInterval()
                    }
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play()
                }
            }, this),
            'play.owl.autoplay': $.proxy(function(e, t, s) {
                if (e.namespace) {
                    this.play(t, s)
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function(e) {
                if (e.namespace) {
                    this.stop()
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause()
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.play()
                }
            }, this),
            'touchstart.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause()
                }
            }, this),
            'touchend.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause) {
                    this.play()
                }
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options)
    };
    Autoplay.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5000,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    };
    Autoplay.prototype.play = function(timeout, speed) {
        this._paused = !1;
        if (this._core.is('rotating')) {
            return
        }
        this._core.enter('rotating');
        this._setAutoPlayInterval()
    };
    Autoplay.prototype._getNextTimeout = function(timeout, speed) {
        if (this._timeout) {
            window.clearTimeout(this._timeout)
        }
        return window.setTimeout($.proxy(function() {
            if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
                return
            }
            this._core.next(speed || this._core.settings.autoplaySpeed)
        }, this), timeout || this._core.settings.autoplayTimeout)
    };
    Autoplay.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    };
    Autoplay.prototype.stop = function() {
        if (!this._core.is('rotating')) {
            return
        }
        window.clearTimeout(this._timeout);
        this._core.leave('rotating')
    };
    Autoplay.prototype.pause = function() {
        if (!this._core.is('rotating')) {
            return
        }
        this._paused = !0
    };
    Autoplay.prototype.destroy = function() {
        var handler, property;
        this.stop();
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay
})(window.Zepto || window.jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';
    var Navigation = function(carousel) {
        this._core = carousel;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>')
                }
            }, this),
            'added.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop())
                }
            }, this),
            'remove.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1)
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.draw()
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = !0;
                    this._core.trigger('initialized', null, 'navigation')
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation')
                }
            }, this)
        };
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    Navigation.Defaults = {
        nav: !1,
        navText: ['prev', 'next'],
        navSpeed: !1,
        navElement: 'div',
        navContainer: !1,
        navContainerClass: 'owl-nav',
        navClass: ['owl-prev', 'owl-next'],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    };
    Navigation.prototype.initialize = function() {
        var override, settings = this._core.settings;
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
        this._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click', $.proxy(function(e) {
            this.prev(settings.navSpeed)
        }, this));
        this._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function(e) {
            this.next(settings.navSpeed)
        }, this));
        if (!settings.dotsData) {
            this._templates = [$('<div>').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')]
        }
        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
        this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();
            this.to(index, settings.dotsSpeed)
        }, this));
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this)
        }
    };
    Navigation.prototype.destroy = function() {
        var handler, control, property, override;
        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler])
        }
        for (control in this._controls) {
            this._controls[control].remove()
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override]
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null)
        }
    };
    Navigation.prototype.update = function() {
        var i, j, k, lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(!0),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items)
        }
        if (settings.dots || settings.slideBy == 'page') {
            this._pages = [];
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break
                    }
                    j = 0, ++k
                }
                j += this._core.mergers(this._core.relative(i))
            }
        }
    };
    Navigation.prototype.draw = function() {
        var difference, settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;
        this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
        if (settings.nav) {
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(!0));
            this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(!0))
        }
        this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;
            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''))
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]))
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove()
            }
            this._controls.$absolute.find('.active').removeClass('active');
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active')
        }
    };
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
        }
    };
    Navigation.prototype.current = function() {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function(page, index) {
            return page.start <= current && page.end >= current
        }, this)).pop()
    };
    Navigation.prototype.getPosition = function(successor) {
        var position, length, settings = this._core.settings;
        if (settings.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy
        }
        return position
    };
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(!0), speed)
    };
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(!1), speed)
    };
    Navigation.prototype.to = function(position, speed, standard) {
        var length;
        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed)
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation
})(window.Zepto || window.jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';
    var Hash = function(carousel) {
        this._core = carousel;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation')
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
                    if (!hash) {
                        return
                    }
                    this._hashes[hash] = e.content
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position') {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function(item, hash) {
                            return item === current ? hash : null
                        }).join();
                    if (!hash || window.location.hash.slice(1) === hash) {
                        return
                    }
                    window.location.hash = hash
                }
            }, this)
        };
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);
        this.$element.on(this._handlers);
        $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);
            if (position === undefined || position === this._core.current()) {
                return
            }
            this._core.to(this._core.relative(position), !1, !0)
        }, this))
    };
    Hash.Defaults = {
        URLhashListener: !1
    };
    Hash.prototype.destroy = function() {
        var handler, property;
        $(window).off('hashchange.owl.navigation');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash
})(window.Zepto || window.jQuery, window, document);
(function($, window, document, undefined) {
    var style = $('<support>').get(0).style,
        prefixes = 'Webkit Moz O ms'.split(' '),
        events = {
            transition: {
                end: {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    transition: 'transitionend'
                }
            },
            animation: {
                end: {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    animation: 'animationend'
                }
            }
        },
        tests = {
            csstransforms: function() {
                return !!test('transform')
            },
            csstransforms3d: function() {
                return !!test('perspective')
            },
            csstransitions: function() {
                return !!test('transition')
            },
            cssanimations: function() {
                return !!test('animation')
            }
        };

    function test(property, prefixed) {
        var result = !1,
            upper = property.charAt(0).toUpperCase() + property.slice(1);
        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : !0;
                return !1
            }
        });
        return result
    }

    function prefixed(property) {
        return test(property, !0)
    }
    if (tests.csstransitions()) {
        $.support.transition = new String(prefixed('transition'))
        $.support.transition.end = events.transition.end[$.support.transition]
    }
    if (tests.cssanimations()) {
        $.support.animation = new String(prefixed('animation'))
        $.support.animation.end = events.animation.end[$.support.animation]
    }
    if (tests.csstransforms()) {
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d()
    }
})(window.Zepto || window.jQuery, window, document)