/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.TernaryOpRequest');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.xla.ComputationDataHandle');

goog.forwardDeclare('proto.xla.TernaryOperation');

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
proto.xla.TernaryOpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xla.TernaryOpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.TernaryOpRequest.displayName = 'proto.xla.TernaryOpRequest';
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
proto.xla.TernaryOpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.TernaryOpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.TernaryOpRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.TernaryOpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    triop: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lhs: (f = msg.getLhs()) && proto.xla.ComputationDataHandle.toObject(includeInstance, f),
    rhs: (f = msg.getRhs()) && proto.xla.ComputationDataHandle.toObject(includeInstance, f),
    ehs: (f = msg.getEhs()) && proto.xla.ComputationDataHandle.toObject(includeInstance, f)
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
 * @return {!proto.xla.TernaryOpRequest}
 */
proto.xla.TernaryOpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.TernaryOpRequest;
  return proto.xla.TernaryOpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.TernaryOpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.TernaryOpRequest}
 */
proto.xla.TernaryOpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.xla.TernaryOperation} */ (reader.readEnum());
      msg.setTriop(value);
      break;
    case 3:
      var value = new proto.xla.ComputationDataHandle;
      reader.readMessage(value,proto.xla.ComputationDataHandle.deserializeBinaryFromReader);
      msg.setLhs(value);
      break;
    case 4:
      var value = new proto.xla.ComputationDataHandle;
      reader.readMessage(value,proto.xla.ComputationDataHandle.deserializeBinaryFromReader);
      msg.setRhs(value);
      break;
    case 5:
      var value = new proto.xla.ComputationDataHandle;
      reader.readMessage(value,proto.xla.ComputationDataHandle.deserializeBinaryFromReader);
      msg.setEhs(value);
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
proto.xla.TernaryOpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.TernaryOpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.TernaryOpRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.TernaryOpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTriop();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLhs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xla.ComputationDataHandle.serializeBinaryToWriter
    );
  }
  f = message.getRhs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.xla.ComputationDataHandle.serializeBinaryToWriter
    );
  }
  f = message.getEhs();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.xla.ComputationDataHandle.serializeBinaryToWriter
    );
  }
};


/**
 * optional TernaryOperation triop = 2;
 * @return {!proto.xla.TernaryOperation}
 */
proto.xla.TernaryOpRequest.prototype.getTriop = function() {
  return /** @type {!proto.xla.TernaryOperation} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.xla.TernaryOperation} value */
proto.xla.TernaryOpRequest.prototype.setTriop = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional ComputationDataHandle lhs = 3;
 * @return {?proto.xla.ComputationDataHandle}
 */
proto.xla.TernaryOpRequest.prototype.getLhs = function() {
  return /** @type{?proto.xla.ComputationDataHandle} */ (
    jspb.Message.getWrapperField(this, proto.xla.ComputationDataHandle, 3));
};


/** @param {?proto.xla.ComputationDataHandle|undefined} value */
proto.xla.TernaryOpRequest.prototype.setLhs = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.xla.TernaryOpRequest.prototype.clearLhs = function() {
  this.setLhs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.TernaryOpRequest.prototype.hasLhs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ComputationDataHandle rhs = 4;
 * @return {?proto.xla.ComputationDataHandle}
 */
proto.xla.TernaryOpRequest.prototype.getRhs = function() {
  return /** @type{?proto.xla.ComputationDataHandle} */ (
    jspb.Message.getWrapperField(this, proto.xla.ComputationDataHandle, 4));
};


/** @param {?proto.xla.ComputationDataHandle|undefined} value */
proto.xla.TernaryOpRequest.prototype.setRhs = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.xla.TernaryOpRequest.prototype.clearRhs = function() {
  this.setRhs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.TernaryOpRequest.prototype.hasRhs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ComputationDataHandle ehs = 5;
 * @return {?proto.xla.ComputationDataHandle}
 */
proto.xla.TernaryOpRequest.prototype.getEhs = function() {
  return /** @type{?proto.xla.ComputationDataHandle} */ (
    jspb.Message.getWrapperField(this, proto.xla.ComputationDataHandle, 5));
};


/** @param {?proto.xla.ComputationDataHandle|undefined} value */
proto.xla.TernaryOpRequest.prototype.setEhs = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.xla.TernaryOpRequest.prototype.clearEhs = function() {
  this.setEhs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.TernaryOpRequest.prototype.hasEhs = function() {
  return jspb.Message.getField(this, 5) != null;
};

