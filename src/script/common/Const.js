define([
], (
) => {

    const DEFAULT_CUSTOMIZE = {
        DRIVER: 10601,
        BODY:   20114,
        TIRE:   30018,
        GLIDER: 40012
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

    return {
        DEFAULT_CUSTOMIZE,
        SELECTED_SKELTON
    };
});

