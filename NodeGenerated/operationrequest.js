/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.OperationRequest');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.xla.ComputationDataHandle');
goog.require('proto.xla.OpRequest');
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
proto.xla.OperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xla.OperationRequest.repeatedFields_, null);
};
goog.inherits(proto.xla.OperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.OperationRequest.displayName = 'proto.xla.OperationRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xla.OperationRequest.repeatedFields_ = [3];



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
proto.xla.OperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.OperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.OperationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.OperationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputHandle: (f = msg.getOutputHandle()) && proto.xla.ComputationDataHandle.toObject(includeInstance, f),
    outputShape: (f = msg.getOutputShape()) && proto.xla.Shape.toObject(includeInstance, f),
    embeddedComputationVersionsList: jspb.Message.getField(msg, 3),
    request: (f = msg.getRequest()) && proto.xla.OpRequest.toObject(includeInstance, f)
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
 * @return {!proto.xla.OperationRequest}
 */
proto.xla.OperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.OperationRequest;
  return proto.xla.OperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.OperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.OperationRequest}
 */
proto.xla.OperationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xla.ComputationDataHandle;
      reader.readMessage(value,proto.xla.ComputationDataHandle.deserializeBinaryFromReader);
      msg.setOutputHandle(value);
      break;
    case 2:
      var value = new proto.xla.Shape;
      reader.readMessage(value,proto.xla.Shape.deserializeBinaryFromReader);
      msg.setOutputShape(value);
      break;
    case 3:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setEmbeddedComputationVersionsList(value);
      break;
    case 4:
      var value = new proto.xla.OpRequest;
      reader.readMessage(value,proto.xla.OpRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.xla.OperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.OperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.OperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.OperationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputHandle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xla.ComputationDataHandle.serializeBinaryToWriter
    );
  }
  f = message.getOutputShape();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.xla.Shape.serializeBinaryToWriter
    );
  }
  f = message.getEmbeddedComputationVersionsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.xla.OpRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ComputationDataHandle output_handle = 1;
 * @return {?proto.xla.ComputationDataHandle}
 */
proto.xla.OperationRequest.prototype.getOutputHandle = function() {
  return /** @type{?proto.xla.ComputationDataHandle} */ (
    jspb.Message.getWrapperField(this, proto.xla.ComputationDataHandle, 1));
};


/** @param {?proto.xla.ComputationDataHandle|undefined} value */
proto.xla.OperationRequest.prototype.setOutputHandle = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.xla.OperationRequest.prototype.clearOutputHandle = function() {
  this.setOutputHandle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.OperationRequest.prototype.hasOutputHandle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Shape output_shape = 2;
 * @return {?proto.xla.Shape}
 */
proto.xla.OperationRequest.prototype.getOutputShape = function() {
  return /** @type{?proto.xla.Shape} */ (
    jspb.Message.getWrapperField(this, proto.xla.Shape, 2));
};


/** @param {?proto.xla.Shape|undefined} value */
proto.xla.OperationRequest.prototype.setOutputShape = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.xla.OperationRequest.prototype.clearOutputShape = function() {
  this.setOutputShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.OperationRequest.prototype.hasOutputShape = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated int64 embedded_computation_versions = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.xla.OperationRequest.prototype.getEmbeddedComputationVersionsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 3));
};


/** @param {!Array.<number>} value */
proto.xla.OperationRequest.prototype.setEmbeddedComputationVersionsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.xla.OperationRequest.prototype.addEmbeddedComputationVersions = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.xla.OperationRequest.prototype.clearEmbeddedComputationVersionsList = function() {
  this.setEmbeddedComputationVersionsList([]);
};


/**
 * optional OpRequest request = 4;
 * @return {?proto.xla.OpRequest}
 */
proto.xla.OperationRequest.prototype.getRequest = function() {
  return /** @type{?proto.xla.OpRequest} */ (
    jspb.Message.getWrapperField(this, proto.xla.OpRequest, 4));
};


/** @param {?proto.xla.OpRequest|undefined} value */
proto.xla.OperationRequest.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.xla.OperationRequest.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.OperationRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};

