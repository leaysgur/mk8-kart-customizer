define([
], (
) => {

    let slice = Array.prototype.slice;

    class BaseModel {
        constructor() {
            this._data = [];
            this._initialized = false;
        }

        init(data) {
            if (this._initialized) { return; }
            this._data = slice.call(data);
            this._initialized = true;
        }

        selectAll() {
            return this._data;
        }

        selectById(id) {
            return this._data.filter((row) => {
                return (row.id|0) === (id|0);
            })[0] || null;
        }
    }

    return BaseModel;
});

