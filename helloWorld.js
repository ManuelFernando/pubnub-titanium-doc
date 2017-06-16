var PubNub = require('pubnub');

var pubnub = new PubNub({
  subscribeKey: 'YOUR SUBSCRIBE KEY HERE',
  publishKey: 'YOUR PUBLISH KEY HERE'
});

function publishSampleMessage() {
  console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
  var publishConfig = {
    channel : "hello_world",
    message : "Hello from PubNub Docs!"
  }
  pubnub.publish(publishConfig, function(status, response) {
    console.log(status, response);
  })
}

pubnub.addListener({
  status: function (st) {
    if (st.category === "PNConnectedCategory") {
      publishSampleMessage();
    }
  },
  message: function (m) {
    console.log(m);
  },
  presence: function (ps) {
    console.log(ps);
  }
});

pubnub.subscribe({ channels: ['hello_world'] });
