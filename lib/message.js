var apis = require( './apis' );
var rongrequest = require( './rongrequest' );

exports.private = {};

exports.private.publish = exports.publish = function( fromUserId, toUserId, objectName, content, pushContent, pushData, format, callback ) {
  var requestParams = {
    fromUserId : fromUserId,
    toUserId   : toUserId,
    objectName : objectName,
    content    : typeof content === 'object' ? JSON.stringify(content) : content
  }

  var f = arguments[ arguments.length - 2 ];
  var formatSpecified = f === 'json' || f === 'xml';

  var indexOfLastParam = formatSpecified ? arguments.length - 3 : arguments.length - 2;

  callback = arguments[arguments.length - 1];

  var optionalArgs = { '4' : 'pushContent', '5' : 'pushData' };
  for( var i=4; i<=indexOfLastParam; ++i ) {
    if( optionalArgs[i] ) {
      requestParams[ optionalArgs[i] ] = arguments[i];
    }
  }

  rongrequest.request( apis['message']['private']['publish'], requestParams, formatSpecified ? f : 'json', function( err, resultText ) {
    return callback( err, resultText );
  } );
}

exports.private.publishCus = function (requestParams, fieldAndValues, callback) {
  rongrequest.requestWithSameFields(apis['message']['private']['publish'], requestParams, fieldAndValues, 'json', function (err, resultText) {
    return callback(err, resultText);
  });
}

exports.private.publish_template = function( fromUserId, toUserIDs, objectName, content, values, pushContent, pushData, format, callback ) {
  var requestParams = {
    fromUserId  : fromUserId,
    objectName  : objectName,
    content     : typeof content === 'object' ? JSON.stringify(content) : content,
    toUserId    : toUserIDs,
    values      : values,
    pushContent : pushContent,
    pushData    : pushData
  }

  rongrequest.requestWithHeaders( apis[ 'message']['private']['publish_template'], requestParams, format, { 'Content-Type' : 'application/json' }, function( err, resultText ) {
    return callback( err, resultText );
  } );
}

exports.system = {};

exports.system.publish = function( fromUserId, toUserIDs, objectName, content, pushContent, pushData, format, callback,  extra) {
  var requestParams = {
    fromUserId  : fromUserId,
    objectName  : objectName,
    content     : typeof content === 'object' ? JSON.stringify(content) : content
  }

  var f = arguments[ arguments.length - 2 ];
  var formatSpecified = f === 'json' || f === 'xml';

  var indexOfLastParam = formatSpecified ? arguments.length - 3 : arguments.length - 2;

  callback = arguments[arguments.length - 1];

  var optionalArgs = { '4' : 'pushContent', '5' : 'pushData' };
  for( var i=4; i<=indexOfLastParam; ++i ) {
    if( optionalArgs[i] ) {
      requestParams[ optionalArgs[i] ] = arguments[i];
    }
  }

  if (extra) {
    requestParams = Object.assign(extra, requestParams);
  }

  rongrequest.requestWithSameFields( apis[ 'message']['system']['publish'], requestParams, [ { field : 'toUserId', values : toUserIDs } ], formatSpecified ? f : 'json', function( err, resultText ) {
    return callback( err, resultText );
  } );
}

exports.system.publishCus = function (requestParams, fieldAndValues, callback) {
  rongrequest.requestWithSameFields(apis['message']['system']['publish'], requestParams, fieldAndValues, 'json', function (err, resultText) {
    return callback(err, resultText);
  });
}

//exports.system.publish_template = function( fromUserId, toUserIDs, objectName, values, content, pushContent, pushData, format, callback ) {
//
//}

exports.group = {};

exports.group.publish = function( fromUserId, toGroupId, objectName, content, pushContent, pushData, format, callback, extra ) {
  var requestParams = {
    fromUserId  : fromUserId,
    toGroupId   : toGroupId,
    objectName  : objectName,
    content     : typeof content === 'object' ? JSON.stringify(content) : content
  }

  try {
    var msgContent;
    if (typeof content === 'string') {
      msgContent = JSON.parse(content);
    } else {
      msgContent = content;
    }
    if (msgContent.mentionedInfo) {
      requestParams.isMentioned = 1;
    }
  } catch (e) {
  }

  var f = arguments[ arguments.length - 2 ];
  var formatSpecified = f === 'json' || f === 'xml';

  var indexOfLastParam = formatSpecified ? arguments.length - 3 : arguments.length - 2;

  callback = arguments[arguments.length - 1];

  var optionalArgs = { '4' : 'pushContent', '5' : 'pushData' };
  for( var i=4; i<=indexOfLastParam; ++i ) {
    if( optionalArgs[i] ) {
      requestParams[ optionalArgs[i] ] = arguments[i];
    }
  }

  if (extra) {
    requestParams = Object.assign(extra, requestParams);
  }

  rongrequest.request( apis[ 'message']['group']['publish'], requestParams, formatSpecified ? f : 'json', function( err, resultText ) {
    return callback( err, resultText );
  } );
}

exports.group.publishCus = function (requestParams, callback) {
  rongrequest.request(apis['message']['group']['publish'], requestParams, 'json', function (err, resultText) {
    return callback(err, resultText);
  });
}

exports.chatroom = {};

exports.chatroom.publish = function( fromUserId, toChatroomId, objectName, content, pushContent, pushData, format, callback ) {
  var requestParams = {
    fromUserId   : fromUserId,
    toChatroomId : toChatroomId,
    objectName   : objectName,
    content      : typeof content === 'object' ? JSON.stringify(content) : content
  }

  var f = arguments[ arguments.length - 2 ];
  var formatSpecified = f === 'json' || f === 'xml';

  var indexOfLastParam = formatSpecified ? arguments.length - 3 : arguments.length - 2;

  callback = arguments[arguments.length - 1];

  var optionalArgs = { '4' : 'pushContent', '5' : 'pushData' };
  for( var i=4; i<=indexOfLastParam; ++i ) {
    if( optionalArgs[i] ) {
      requestParams[ optionalArgs[i] ] = arguments[i];
    }
  }

  rongrequest.request( apis[ 'message']['chatroom']['publish'], requestParams, formatSpecified ? f : 'json', function( err, resultText ) {
    return callback( err, resultText );
  } );
}

//exports.discussion = {};
//exports.discussion.publish = function( fromUserId, toDiscussionId, objectName, content, pushContent, pushData, format, callback ) {
//
//}

/**
 *
 */
exports.broadcast = function( fromUserId, objectName, content, pushContent, pushData, format, callback ) {
  var requestParams = {
    fromUserId  : fromUserId,
    objectName  : objectName,
    content     : typeof content === 'object' ? JSON.stringify(content) : content
  }

  var f = arguments[ arguments.length - 2 ];
  var formatSpecified = f === 'json' || f === 'xml';

  var indexOfLastParam = formatSpecified ? arguments.length - 3 : arguments.length - 2;

  callback = arguments[arguments.length - 1];

  var optionalArgs = { '3' : 'pushContent', '4' : 'pushData' };
  for( var i=4; i<=indexOfLastParam; ++i ) {
    if( optionalArgs[i] ) {
      requestParams[ optionalArgs[i] ] = arguments[i];
    }
  }

  rongrequest.request( apis['message']['broadcast'], requestParams, formatSpecified ? f : 'json', function( err, resultText ) {
    return callback( err, resultText );
  } );
}

exports.history = function( dateString, format, callback ) {
  rongrequest.request( apis['message']['history'], {
    date : dateString
  }, format, function( err, resultText ) {
    return callback( err, resultText );
  } );
}

exports.clear = function (requestParams, callback) {
  rongrequest.request(apis['message']['clear'], requestParams, 'json', function (err, resultText) {
    return callback(err, resultText);
  });
};