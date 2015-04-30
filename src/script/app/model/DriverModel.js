define([
    'common/model/BaseModel'
], (
    BaseModel
) => {
    class DriverModel extends BaseModel {
        constructor() {
            super();
        }
    }

    return (new DriverModel());
});
