'use strict';

const adapter = getAdapdter();

class user {
    constructor() {
        const user = {

        };
    }

    findOne(id) {
        return adapter.findOne(id);
    }

    update(id, data) {
        return adapter.update(id, data);
    }
}
module.exports = new user();