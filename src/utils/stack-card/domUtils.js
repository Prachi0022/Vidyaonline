// Utility functions for DOM manipulation
export class Util {
  static hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
  }

  static addClass(el, className) {
    const classList = className.split(' ');
    if (el.classList) {
      el.classList.add(classList[0]);
    } else if (!this.hasClass(el, classList[0])) {
      el.className += ' ' + classList[0];
    }
    if (classList.length > 1) {
      this.addClass(el, classList.slice(1).join(' '));
    }
  }

  static removeClass(el, className) {
    const classList = className.split(' ');
    if (el.classList) {
      el.classList.remove(classList[0]);
    } else if (this.hasClass(el, classList[0])) {
      const reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
    if (classList.length > 1) {
      this.removeClass(el, classList.slice(1).join(' '));
    }
  }

  static toggleClass(el, className, bool) {
    if (bool) {
      this.addClass(el, className);
    } else {
      this.removeClass(el, className);
    }
  }

  static setAttributes(el, attrs) {
    for (const key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  static getChildrenByClassName(el, className) {
    const childrenByClass = [];
    for (let i = 0; i < el.children.length; i++) {
      if (this.hasClass(el.children[i], className)) {
        childrenByClass.push(el.children[i]);
      }
    }
    return childrenByClass;
  }

  static is(elem, selector) {
    if (selector.nodeType) {
      return elem === selector;
    }

    const qa = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];
    const length = qa.length;

    for (let i = 0; i < length; i++) {
      if (qa[i] === elem) {
        return true;
      }
    }

    return false;
  }

  static getIndexInArray(array, el) {
    return Array.prototype.indexOf.call(array, el);
  }

  static cssSupports(property, value) {
    if ('CSS' in window) {
      return CSS.supports(property, value);
    } else {
      const jsProperty = property.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
      return jsProperty in document.body.style;
    }
  }

  static extend(...args) {
    const extended = {};
    let deep = false;
    let i = 0;
    const length = args.length;

    // Check if a deep merge
    if (Object.prototype.toString.call(args[0]) === '[object Boolean]') {
      deep = args[0];
      i++;
    }

    // Merge the object into the extended object
    const merge = function (obj) {
      for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // If deep merge and property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = Util.extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
      const obj = args[i];
      if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        merge(obj);
      }
    }

    return extended;
  }

  static osHasReducedMotion() {
    if (!window.matchMedia) {
      return false;
    }
    const matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (matchMediaObj) {
      return matchMediaObj.matches;
    }
    return false; // return false if not supported
  }
}

// Animation curves
export const MathUtils = {
  easeInOutQuad: function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  },
};
