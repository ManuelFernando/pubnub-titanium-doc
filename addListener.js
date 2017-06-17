pubnub.addListener({
  message: function(m) {
    // handle message
    var channelName = m.channel; // The channel for which the message belongs
    var channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
    var pubTT = m.timetoken; // Publish timetoken
    var msg = m.message; // The Payload
  },
  presence: function(p) {
    // handle presence
    var action = p.action; // Can be join, leave, state-change or timeout
    var channelName = p.channel; // The channel for which the message belongs
    var occupancy = p.occupancy; // No. of users connected with the channel
    var state = p.state; // User State
    var channelGroup = p.subscription; //  The channel group or wildcard subscription match (if exists)
    var presenceEventTime = p.timestamp; // Presence event timetoken
    var uuid = p.uuid; // UUIDs of users who are connected with the channel
  },
  status: function(s) {
    // handle status
  }
});
