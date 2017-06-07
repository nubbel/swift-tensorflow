/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.WindowDimension');

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
proto.xla.WindowDimension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xla.WindowDimension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.WindowDimension.displayName = 'proto.xla.WindowDimension';
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
proto.xla.WindowDimension.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.WindowDimension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.WindowDimension} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.WindowDimension.toObject = function(includeInstance, msg) {
  var f, obj = {
    size: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stride: jspb.Message.getFieldWithDefault(msg, 2, 0),
    paddingLow: jspb.Message.getFieldWithDefault(msg, 3, 0),
    paddingHigh: jspb.Message.getFieldWithDefault(msg, 4, 0),
    windowDilation: jspb.Message.getFieldWithDefault(msg, 5, 0),
    baseDilation: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.xla.WindowDimension}
 */
proto.xla.WindowDimension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.WindowDimension;
  return proto.xla.WindowDimension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.WindowDimension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.WindowDimension}
 */
proto.xla.WindowDimension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStride(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPaddingLow(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPaddingHigh(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowDilation(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBaseDilation(value);
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
proto.xla.WindowDimension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.WindowDimension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.WindowDimension} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.WindowDimension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStride();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPaddingLow();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPaddingHigh();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getWindowDilation();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getBaseDilation();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 size = 1;
 * @return {number}
 */
proto.xla.WindowDimension.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.xla.WindowDimension.prototype.setSize = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 stride = 2;
 * @return {number}
 */
proto.xla.WindowDimension.prototype.getStride = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.xla.WindowDimension.prototype.setStride = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 padding_low = 3;
 * @return {number}
 */
proto.xla.WindowDimension.prototype.getPaddingLow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.xla.WindowDimension.prototype.setPaddingLow = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 padding_high = 4;
 * @return {number}
 */
proto.xla.WindowDimension.prototype.getPaddingHigh = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.xla.WindowDimension.prototype.setPaddingHigh = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 window_dilation = 5;
 * @return {number}
 */
proto.xla.WindowDimension.prototype.getWindowDilation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.xla.WindowDimension.prototype.setWindowDilation = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 base_dilation = 6;
 * @return {number}
 */
proto.xla.WindowDimension.prototype.getBaseDilation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.xla.WindowDimension.prototype.setBaseDilation = function(value) {
  jspb.Message.setField(this, 6, value);
};

