/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.ServerDef');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.ClusterDef');
goog.require('proto.tensorflow.ConfigProto');


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
proto.tensorflow.ServerDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.ServerDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.ServerDef.displayName = 'proto.tensorflow.ServerDef';
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
proto.tensorflow.ServerDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.ServerDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.ServerDef} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.ServerDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    cluster: (f = msg.getCluster()) && proto.tensorflow.ClusterDef.toObject(includeInstance, f),
    jobName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    taskIndex: jspb.Message.getFieldWithDefault(msg, 3, 0),
    defaultSessionConfig: (f = msg.getDefaultSessionConfig()) && proto.tensorflow.ConfigProto.toObject(includeInstance, f),
    protocol: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.tensorflow.ServerDef}
 */
proto.tensorflow.ServerDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.ServerDef;
  return proto.tensorflow.ServerDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.ServerDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.ServerDef}
 */
proto.tensorflow.ServerDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.ClusterDef;
      reader.readMessage(value,proto.tensorflow.ClusterDef.deserializeBinaryFromReader);
      msg.setCluster(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTaskIndex(value);
      break;
    case 4:
      var value = new proto.tensorflow.ConfigProto;
      reader.readMessage(value,proto.tensorflow.ConfigProto.deserializeBinaryFromReader);
      msg.setDefaultSessionConfig(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
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
proto.tensorflow.ServerDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.ServerDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.ServerDef} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.ServerDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCluster();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.ClusterDef.serializeBinaryToWriter
    );
  }
  f = message.getJobName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTaskIndex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDefaultSessionConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tensorflow.ConfigProto.serializeBinaryToWriter
    );
  }
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClusterDef cluster = 1;
 * @return {?proto.tensorflow.ClusterDef}
 */
proto.tensorflow.ServerDef.prototype.getCluster = function() {
  return /** @type{?proto.tensorflow.ClusterDef} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.ClusterDef, 1));
};


/** @param {?proto.tensorflow.ClusterDef|undefined} value */
proto.tensorflow.ServerDef.prototype.setCluster = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.ServerDef.prototype.clearCluster = function() {
  this.setCluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.ServerDef.prototype.hasCluster = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string job_name = 2;
 * @return {string}
 */
proto.tensorflow.ServerDef.prototype.getJobName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tensorflow.ServerDef.prototype.setJobName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 task_index = 3;
 * @return {number}
 */
proto.tensorflow.ServerDef.prototype.getTaskIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tensorflow.ServerDef.prototype.setTaskIndex = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional ConfigProto default_session_config = 4;
 * @return {?proto.tensorflow.ConfigProto}
 */
proto.tensorflow.ServerDef.prototype.getDefaultSessionConfig = function() {
  return /** @type{?proto.tensorflow.ConfigProto} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.ConfigProto, 4));
};


/** @param {?proto.tensorflow.ConfigProto|undefined} value */
proto.tensorflow.ServerDef.prototype.setDefaultSessionConfig = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.tensorflow.ServerDef.prototype.clearDefaultSessionConfig = function() {
  this.setDefaultSessionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.ServerDef.prototype.hasDefaultSessionConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string protocol = 5;
 * @return {string}
 */
proto.tensorflow.ServerDef.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.tensorflow.ServerDef.prototype.setProtocol = function(value) {
  jspb.Message.setField(this, 5, value);
};

