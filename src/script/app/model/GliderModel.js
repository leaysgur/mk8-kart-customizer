define([
    'common/Const',
    'common/model/BaseModel'
], (
    Const,
    BaseModel
) => {
    class GliderModel extends BaseModel {
        constructor() {
            super();
        }

        getSelectedSkelton() {
            return Const.SELECTED_SKELTON;
        }
    }

    return (new GliderModel());
});
