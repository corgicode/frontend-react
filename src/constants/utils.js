export const noop = () => {};

export const ensureUrl = (uri) => {
    if (!uri || typeof uri !== 'string') return '';
    const url = uri.trim();
    if (url.startsWith === '/') return url;
    if (url.match(/^http(s)?:\/\//) !== null) return url;
    return 'http://' + url;
};
