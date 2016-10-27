var WunderlistSDK = require('wunderlist');
var wunderlistAPI = new WunderlistSDK({
  'accessToken': process.env.token,
  'clientID': process.env.cid
});

wunderlistAPI.http.tasks.forList(273771570)
.then(function (tasks) {
  tasks.forEach(function(t) {
    console.log(t.title);
  });

})
.fail(function () {
  console.error('there was a problem');
})
.done(function() {
  process.exit();
});


/*
* Get the list, get the id of the list
* whose title is now, and then get the
* tasks for it.
*/
 // wunderlistAPI.http.lists.all().done(function(lists) {
 //   var nowList = lists.filter(l => l.title.toLowerCase() === 'now')[0].id;
 //   wunderlistAPI.http.tasks.forList(nowList)
 //   .then(function (tasks) {
 //     tasks.forEach(function(t) {
 //       console.log(t.title);
 //     });
 //   })
 //   .fail(function () {
 //     console.error('there was a problem');
 //   })
 //   .done(function() {
 //     process.exit();
 //   });
 // });

