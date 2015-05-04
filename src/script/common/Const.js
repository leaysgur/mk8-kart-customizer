define([
], (
) => {

    const DEFAULT_CUSTOMIZE = {
        DRIVER: 10101,
        BODY:   20101,
        TIRE:   30003,
        GLIDER: 40002
    };

    const SELECTED_SKELTON = {
        id: 0,
        name: '未選択',
        speed: {
            summary:     0,
            ground:      0,
            water:       0,
            air:         0,
            antiGravity: 0
        },
        acceleration: 0,
        weight: 0,
        handling: {
            summary:     0,
            ground:      0,
            water:       0,
            air:         0,
            antiGravity: 0
        },
        traction: 0,
        miniTurbo: 0
    };

    const GAUGE_MAX_VAL = 6;

    const SHARE_URL = {
        TEXT: 'おれのかんがえたさいそくのかすたまいず ',
        APP:  'twitter://post?message=',
        WEB:  'https://twitter.com/intent/tweet?text='
    };

    return {
        DEFAULT_CUSTOMIZE,
        SELECTED_SKELTON,
        GAUGE_MAX_VAL,
        SHARE_URL
    };
});

