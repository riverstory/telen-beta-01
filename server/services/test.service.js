'use-strict';
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const testResource = require('../infrastructure/resources/test-resource');

function getTest (item) {
    try {
        let data = await(testResource.getTest(item));
        // let data = {
        //     status: 200,
        //     statusText : "OK",
        //     response: {
        //         "foo": "bar"
        //     }
        // };
        return data;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getTest: async(getTest)
};