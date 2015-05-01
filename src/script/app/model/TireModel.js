define([
    'common/Const',
    'common/model/BaseModel'
], (
    Const,
    BaseModel
) => {
    class TireModel extends BaseModel {
        constructor() {
            super();
        }

        getSelectedSkelton() {
            return Const.SELECTED_SKELTON;
        }
    }

    return (new TireModel());
});
