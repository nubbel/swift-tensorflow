/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.PlatformInfo');

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
proto.tensorflow.PlatformInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.PlatformInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.PlatformInfo.displayName = 'proto.tensorflow.PlatformInfo';
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
proto.tensorflow.PlatformInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.PlatformInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.PlatformInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.PlatformInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    bits: jspb.Message.getFieldWithDefault(msg, 1, ""),
    linkage: jspb.Message.getFieldWithDefault(msg, 2, ""),
    machine: jspb.Message.getFieldWithDefault(msg, 3, ""),
    release: jspb.Message.getFieldWithDefault(msg, 4, ""),
    system: jspb.Message.getFieldWithDefault(msg, 5, ""),
    version: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.tensorflow.PlatformInfo}
 */
proto.tensorflow.PlatformInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.PlatformInfo;
  return proto.tensorflow.PlatformInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.PlatformInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.PlatformInfo}
 */
proto.tensorflow.PlatformInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBits(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMachine(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelease(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystem(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
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
proto.tensorflow.PlatformInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.PlatformInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.PlatformInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.PlatformInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBits();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLinkage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMachine();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRelease();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSystem();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string bits = 1;
 * @return {string}
 */
proto.tensorflow.PlatformInfo.prototype.getBits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tensorflow.PlatformInfo.prototype.setBits = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string linkage = 2;
 * @return {string}
 */
proto.tensorflow.PlatformInfo.prototype.getLinkage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tensorflow.PlatformInfo.prototype.setLinkage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string machine = 3;
 * @return {string}
 */
proto.tensorflow.PlatformInfo.prototype.getMachine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tensorflow.PlatformInfo.prototype.setMachine = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string release = 4;
 * @return {string}
 */
proto.tensorflow.PlatformInfo.prototype.getRelease = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.tensorflow.PlatformInfo.prototype.setRelease = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string system = 5;
 * @return {string}
 */
proto.tensorflow.PlatformInfo.prototype.getSystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.tensorflow.PlatformInfo.prototype.setSystem = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string version = 6;
 * @return {string}
 */
proto.tensorflow.PlatformInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.tensorflow.PlatformInfo.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 6, value);
};


