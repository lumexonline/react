export const trackPageView = (path) => {
    if (window.gtag) {
        window.gtag('event', 'page_view', {
            page_path: path,
        });
    }
};

export const trackEvent = (eventName, params = {}) => {
    if (window.gtag) {
        window.gtag('event', eventName, params);
    }
};