'use strict';

System.register(['aurelia-templating', 'aurelia-pal', 'prismjs'], function (_export, _context) {
  "use strict";

  var customAttribute, bindable, DOM, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _class3, _temp, SyntaxHighlighter;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  function clearNodeChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_prismjs) {}],
    execute: function () {
      _export('SyntaxHighlighter', SyntaxHighlighter = (_dec = customAttribute('au-syntax'), _dec2 = bindable({ primaryProperty: true }), _dec(_class = (_class2 = (_temp = _class3 = function () {
        function SyntaxHighlighter(element) {
          

          _initDefineProp(this, 'code', _descriptor, this);

          this.element = element;
        }

        SyntaxHighlighter.prototype.bind = function bind() {
          if (this.code !== undefined && this.code.length > 0) {
            clearNodeChildren(this.element);
            this.element.appendChild(DOM.createTextNode(this.code));
          }

          Prism.highlightElement(this.element);
        };

        SyntaxHighlighter.prototype.codeChanged = function codeChanged(newValue, oldValue) {
          clearNodeChildren(this.element);
          this.element.appendChild(DOM.createTextNode(newValue));
          Prism.highlightElement(this.element);
        };

        return SyntaxHighlighter;
      }(), _class3.inject = [Element], _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'code', [_dec2], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('SyntaxHighlighter', SyntaxHighlighter);
    }
  };
});