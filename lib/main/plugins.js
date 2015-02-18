var config = require('_lib/config');


/* New relic
if (config.new_relic.enabled){
    require('newrelic');
}
*/


module.exports = [
    {
        packagePath:"_lib/plugin"
//        , option: config.plugin.option

    }
]