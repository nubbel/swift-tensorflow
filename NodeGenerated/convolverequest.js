/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.ConvolveRequest');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.xla.ComputationDataHandle');
goog.require('proto.xla.ConvolutionDimensionNumbers');
goog.require('proto.xla.Window');


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
proto.xla.ConvolveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xla.ConvolveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.ConvolveRequest.displayName = 'proto.xla.ConvolveRequest';
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
proto.xla.ConvolveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.ConvolveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.ConvolveRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.ConvolveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lhs: (f = msg.getLhs()) && proto.xla.ComputationDataHandle.toObject(includeInstance, f),
    rhs: (f = msg.getRhs()) && proto.xla.ComputationDataHandle.toObject(includeInstance, f),
    window: (f = msg.getWindow()) && proto.xla.Window.toObject(includeInstance, f),
    dimensionNumbers: (f = msg.getDimensionNumbers()) && proto.xla.ConvolutionDimensionNumbers.toObject(includeInstance, f)
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
 * @return {!proto.xla.ConvolveRequest}
 */
proto.xla.ConvolveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.ConvolveRequest;
  return proto.xla.ConvolveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.ConvolveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.ConvolveRequest}
 */
proto.xla.ConvolveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.xla.ComputationDataHandle;
      reader.readMessage(value,proto.xla.ComputationDataHandle.deserializeBinaryFromReader);
      msg.setLhs(value);
      break;
    case 3:
      var value = new proto.xla.ComputationDataHandle;
      reader.readMessage(value,proto.xla.ComputationDataHandle.deserializeBinaryFromReader);
      msg.setRhs(value);
      break;
    case 4:
      var value = new proto.xla.Window;
      reader.readMessage(value,proto.xla.Window.deserializeBinaryFromReader);
      msg.setWindow(value);
      break;
    case 5:
      var value = new proto.xla.ConvolutionDimensionNumbers;
      reader.readMessage(value,proto.xla.ConvolutionDimensionNumbers.deserializeBinaryFromReader);
      msg.setDimensionNumbers(value);
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
proto.xla.ConvolveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.ConvolveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.ConvolveRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.ConvolveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLhs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.xla.ComputationDataHandle.serializeBinaryToWriter
    );
  }
  f = message.getRhs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xla.ComputationDataHandle.serializeBinaryToWriter
    );
  }
  f = message.getWindow();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.xla.Window.serializeBinaryToWriter
    );
  }
  f = message.getDimensionNumbers();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.xla.ConvolutionDimensionNumbers.serializeBinaryToWriter
    );
  }
};


/**
 * optional ComputationDataHandle lhs = 2;
 * @return {?proto.xla.ComputationDataHandle}
 */
proto.xla.ConvolveRequest.prototype.getLhs = function() {
  return /** @type{?proto.xla.ComputationDataHandle} */ (
    jspb.Message.getWrapperField(this, proto.xla.ComputationDataHandle, 2));
};


/** @param {?proto.xla.ComputationDataHandle|undefined} value */
proto.xla.ConvolveRequest.prototype.setLhs = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.xla.ConvolveRequest.prototype.clearLhs = function() {
  this.setLhs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.ConvolveRequest.prototype.hasLhs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ComputationDataHandle rhs = 3;
 * @return {?proto.xla.ComputationDataHandle}
 */
proto.xla.ConvolveRequest.prototype.getRhs = function() {
  return /** @type{?proto.xla.ComputationDataHandle} */ (
    jspb.Message.getWrapperField(this, proto.xla.ComputationDataHandle, 3));
};


/** @param {?proto.xla.ComputationDataHandle|undefined} value */
proto.xla.ConvolveRequest.prototype.setRhs = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.xla.ConvolveRequest.prototype.clearRhs = function() {
  this.setRhs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.ConvolveRequest.prototype.hasRhs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Window window = 4;
 * @return {?proto.xla.Window}
 */
proto.xla.ConvolveRequest.prototype.getWindow = function() {
  return /** @type{?proto.xla.Window} */ (
    jspb.Message.getWrapperField(this, proto.xla.Window, 4));
};


/** @param {?proto.xla.Window|undefined} value */
proto.xla.ConvolveRequest.prototype.setWindow = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.xla.ConvolveRequest.prototype.clearWindow = function() {
  this.setWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.ConvolveRequest.prototype.hasWindow = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ConvolutionDimensionNumbers dimension_numbers = 5;
 * @return {?proto.xla.ConvolutionDimensionNumbers}
 */
proto.xla.ConvolveRequest.prototype.getDimensionNumbers = function() {
  return /** @type{?proto.xla.ConvolutionDimensionNumbers} */ (
    jspb.Message.getWrapperField(this, proto.xla.ConvolutionDimensionNumbers, 5));
};


/** @param {?proto.xla.ConvolutionDimensionNumbers|undefined} value */
proto.xla.ConvolveRequest.prototype.setDimensionNumbers = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.xla.ConvolveRequest.prototype.clearDimensionNumbers = function() {
  this.setDimensionNumbers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.ConvolveRequest.prototype.hasDimensionNumbers = function() {
  return jspb.Message.getField(this, 5) != null;
};

