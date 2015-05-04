define([
    'react'
], (
    React
) => {

    const LazyImgLoadMixin = {
        componentDidMount() {
            let imgEl  = React.findDOMNode(this).getElementsByTagName('img')[0];
            let imgSrc = imgEl.getAttribute('data-src');
            setTimeout(() => {
                imgEl.src = imgSrc;
                imgEl = imgSrc = null;
            });
        },
    };

    return LazyImgLoadMixin;
});

