'use strict';

var bb = require('bitballoon');

console.log(process.env.BB_ACCESS_TOKEN);

bb.deploy({
    access_token: process.env.BB_ACCESS_TOKEN,
    site_id: "jadeflower968",
    dir: "public"
}, function(err, deploy) {
    if (err) { throw(err) }
});
