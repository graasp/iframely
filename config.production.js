(function () {
    module.exports = {
        SKIP_IFRAMELY_RENDERS: true,
        port: 8061, // can be overridden by PORT env var
        RESPONSE_TIMEOUT: 5 * 1000, // ms

        // not sure which one - both appear in the code
        use_http2: false, // https://github.com/itteco/iframely/issues/275
        DISABLE_HTTP2: true // https://github.com/itteco/iframely/issues/275
    };
})();
