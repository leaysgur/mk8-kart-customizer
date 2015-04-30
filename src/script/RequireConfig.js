(function(global) {

    let require = {
        urlArgs: '_=' + (new Date()).getTime(),
        baseUrl: 'dist/script',
        waitSeconds: 120,
        paths: {
           'react':        'vendor/react/react-with-addons',
           'react-router': 'vendor/react-router/build/umd/ReactRouter'
        },
        shim: {
        }
    };

    let _inNode    = 'process'  in global;
    let _inBrowser = 'document' in global;

    if (_inNode) {
        module.exports = require;
    } else if (_inBrowser) {
        global.require = require;
    }
})(typeof global !== 'undefined' ? global : window);
