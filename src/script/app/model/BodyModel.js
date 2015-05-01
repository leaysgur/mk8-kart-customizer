define([
    'common/Const',
    'common/model/BaseModel'
], (
    Const,
    BaseModel
) => {
    class BodyModel extends BaseModel {
        constructor() {
            super();
        }

        getSelectedSkelton() {
            return Const.SELECTED_SKELTON;
        }
    }

    return (new BodyModel());
});
