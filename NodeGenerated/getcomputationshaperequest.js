/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.GetComputationShapeRequest');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.xla.ComputationHandle');


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
proto.xla.GetComputationShapeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xla.GetComputationShapeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.GetComputationShapeRequest.displayName = 'proto.xla.GetComputationShapeRequest';
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
proto.xla.GetComputationShapeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.GetComputationShapeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.GetComputationShapeRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.GetComputationShapeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    computation: (f = msg.getComputation()) && proto.xla.ComputationHandle.toObject(includeInstance, f)
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
 * @return {!proto.xla.GetComputationShapeRequest}
 */
proto.xla.GetComputationShapeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.GetComputationShapeRequest;
  return proto.xla.GetComputationShapeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.GetComputationShapeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.GetComputationShapeRequest}
 */
proto.xla.GetComputationShapeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xla.ComputationHandle;
      reader.readMessage(value,proto.xla.ComputationHandle.deserializeBinaryFromReader);
      msg.setComputation(value);
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
proto.xla.GetComputationShapeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.GetComputationShapeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.GetComputationShapeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.GetComputationShapeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComputation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xla.ComputationHandle.serializeBinaryToWriter
    );
  }
};


/**
 * optional ComputationHandle computation = 1;
 * @return {?proto.xla.ComputationHandle}
 */
proto.xla.GetComputationShapeRequest.prototype.getComputation = function() {
  return /** @type{?proto.xla.ComputationHandle} */ (
    jspb.Message.getWrapperField(this, proto.xla.ComputationHandle, 1));
};


/** @param {?proto.xla.ComputationHandle|undefined} value */
proto.xla.GetComputationShapeRequest.prototype.setComputation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.xla.GetComputationShapeRequest.prototype.clearComputation = function() {
  this.setComputation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.GetComputationShapeRequest.prototype.hasComputation = function() {
  return jspb.Message.getField(this, 1) != null;
};


