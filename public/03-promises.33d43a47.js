!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r={formSubmit:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function u(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}r.formSubmit.addEventListener("submit",(function(e){e.preventDefault();for(var n=parseInt(r.delay.value),t=0;t<r.amount.value;t+=1){u(t,n).then((function(e){i.Notify.success("✅ Fulfilled promise ".concat(e.position," in ").concat(e.delay,"ms"))})).catch((function(e){i.Notify.failure("❌ Rejected promise ".concat(e.position," in ").concat(e.delay,"ms"))})),n+=parseInt(r.step.value)}}))}();
//# sourceMappingURL=03-promises.33d43a47.js.map
