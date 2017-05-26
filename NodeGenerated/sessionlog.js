/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.SessionLog');
goog.provide('proto.tensorflow.SessionLog.SessionStatus');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorflow.SessionLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.SessionLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.SessionLog.displayName = 'proto.tensorflow.SessionLog';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorflow.SessionLog.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.SessionLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.SessionLog} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.SessionLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    checkpointPath: jspb.Message.getFieldWithDefault(msg, 2, ""),
    msg: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorflow.SessionLog}
 */
proto.tensorflow.SessionLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.SessionLog;
  return proto.tensorflow.SessionLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.SessionLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.SessionLog}
 */
proto.tensorflow.SessionLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tensorflow.SessionLog.SessionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCheckpointPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorflow.SessionLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.SessionLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.SessionLog} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.SessionLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCheckpointPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.tensorflow.SessionLog.SessionStatus = {
  STATUS_UNSPECIFIED: 0,
  START: 1,
  STOP: 2,
  CHECKPOINT: 3
};

/**
 * optional SessionStatus status = 1;
 * @return {!proto.tensorflow.SessionLog.SessionStatus}
 */
proto.tensorflow.SessionLog.prototype.getStatus = function() {
  return /** @type {!proto.tensorflow.SessionLog.SessionStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.tensorflow.SessionLog.SessionStatus} value */
proto.tensorflow.SessionLog.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string checkpoint_path = 2;
 * @return {string}
 */
proto.tensorflow.SessionLog.prototype.getCheckpointPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tensorflow.SessionLog.prototype.setCheckpointPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.tensorflow.SessionLog.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tensorflow.SessionLog.prototype.setMsg = function(value) {
  jspb.Message.setField(this, 3, value);
};


