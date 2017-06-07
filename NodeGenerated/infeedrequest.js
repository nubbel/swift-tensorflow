/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.InfeedRequest');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.xla.Shape');


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
proto.xla.InfeedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xla.InfeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.InfeedRequest.displayName = 'proto.xla.InfeedRequest';
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
proto.xla.InfeedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.InfeedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.InfeedRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.InfeedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    shape: (f = msg.getShape()) && proto.xla.Shape.toObject(includeInstance, f),
    config: msg.getConfig_asB64()
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
 * @return {!proto.xla.InfeedRequest}
 */
proto.xla.InfeedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.InfeedRequest;
  return proto.xla.InfeedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.InfeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.InfeedRequest}
 */
proto.xla.InfeedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.xla.Shape;
      reader.readMessage(value,proto.xla.Shape.deserializeBinaryFromReader);
      msg.setShape(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setConfig(value);
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
proto.xla.InfeedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.InfeedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.InfeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.InfeedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShape();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.xla.Shape.serializeBinaryToWriter
    );
  }
  f = message.getConfig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional Shape shape = 2;
 * @return {?proto.xla.Shape}
 */
proto.xla.InfeedRequest.prototype.getShape = function() {
  return /** @type{?proto.xla.Shape} */ (
    jspb.Message.getWrapperField(this, proto.xla.Shape, 2));
};


/** @param {?proto.xla.Shape|undefined} value */
proto.xla.InfeedRequest.prototype.setShape = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.xla.InfeedRequest.prototype.clearShape = function() {
  this.setShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.InfeedRequest.prototype.hasShape = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes config = 3;
 * @return {string}
 */
proto.xla.InfeedRequest.prototype.getConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes config = 3;
 * This is a type-conversion wrapper around `getConfig()`
 * @return {string}
 */
proto.xla.InfeedRequest.prototype.getConfig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getConfig()));
};


/**
 * optional bytes config = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConfig()`
 * @return {!Uint8Array}
 */
proto.xla.InfeedRequest.prototype.getConfig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConfig()));
};


/** @param {!(string|Uint8Array)} value */
proto.xla.InfeedRequest.prototype.setConfig = function(value) {
  jspb.Message.setField(this, 3, value);
};

