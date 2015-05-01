define([
    'common/model/BaseModel'
], (
    BaseModel
) => {
    class BodyModel extends BaseModel {
        constructor() {
            super();
        }
    }

    return (new BodyModel());
});
