(function () {
    module.exports = {
        SKIP_IFRAMELY_RENDERS: true,
        port: 8061, // can be overridden by PORT env var
        RESPONSE_TIMEOUT: 5 * 1000, // ms
        DISABLE_HTTP2: true // https://github.com/itteco/iframely/issues/275
    };
})();
