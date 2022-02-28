var e = Object.freeze({
  initialize: function ({
    modulePath: e = '.',
    importFunctionName: o = '__import__',
  } = {}) {
    try {
      self[o] = new Function('u', 'return import(u)');
    } catch (t) {
      const r = new URL(e, location),
        n = (e) => {
          URL.revokeObjectURL(e.src), e.remove();
        };
      (self[o] = (e) =>
        new Promise((t, l) => {
          const i = new URL(e, r);
          if (self[o].moduleMap[i]) return t(self[o].moduleMap[i]);
          const a = new Blob(
              [`import * as m from '${i}';`, `${o}.moduleMap['${i}']=m;`],
              { type: 'text/javascript' }
            ),
            c = Object.assign(document.createElement('script'), {
              type: 'module',
              src: URL.createObjectURL(a),
              onerror() {
                l(new Error(`Failed to import: ${e}`)), n(c);
              },
              onload() {
                t(self[o].moduleMap[i]), n(c);
              },
            });
          document.head.appendChild(c);
        })),
        (self[o].moduleMap = {});
    }
  },
});
e.initialize({ modulePath: 'scripts/' }), console.log('Hello bakers');
//# sourceMappingURL=app.fdc6d469.js.map
