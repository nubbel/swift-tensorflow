/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.TraceRequest');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.xla.ComputationDataHandle');


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
proto.xla.TraceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xla.TraceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.TraceRequest.displayName = 'proto.xla.TraceRequest';
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
proto.xla.TraceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.TraceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.TraceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.TraceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operand: (f = msg.getOperand()) && proto.xla.ComputationDataHandle.toObject(includeInstance, f)
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
 * @return {!proto.xla.TraceRequest}
 */
proto.xla.TraceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.TraceRequest;
  return proto.xla.TraceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.TraceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.TraceRequest}
 */
proto.xla.TraceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 3:
      var value = new proto.xla.ComputationDataHandle;
      reader.readMessage(value,proto.xla.ComputationDataHandle.deserializeBinaryFromReader);
      msg.setOperand(value);
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
proto.xla.TraceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.TraceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.TraceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.TraceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOperand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xla.ComputationDataHandle.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.xla.TraceRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.xla.TraceRequest.prototype.setTag = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional ComputationDataHandle operand = 3;
 * @return {?proto.xla.ComputationDataHandle}
 */
proto.xla.TraceRequest.prototype.getOperand = function() {
  return /** @type{?proto.xla.ComputationDataHandle} */ (
    jspb.Message.getWrapperField(this, proto.xla.ComputationDataHandle, 3));
};


/** @param {?proto.xla.ComputationDataHandle|undefined} value */
proto.xla.TraceRequest.prototype.setOperand = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.xla.TraceRequest.prototype.clearOperand = function() {
  this.setOperand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.TraceRequest.prototype.hasOperand = function() {
  return jspb.Message.getField(this, 3) != null;
};


