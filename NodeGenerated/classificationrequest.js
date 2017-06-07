/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.serving.ClassificationRequest');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.serving.Input');
goog.require('proto.tensorflow.serving.ModelSpec');


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
proto.tensorflow.serving.ClassificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.ClassificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.ClassificationRequest.displayName = 'proto.tensorflow.serving.ClassificationRequest';
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
proto.tensorflow.serving.ClassificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.ClassificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.ClassificationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.serving.ClassificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelSpec: (f = msg.getModelSpec()) && proto.tensorflow.serving.ModelSpec.toObject(includeInstance, f),
    input: (f = msg.getInput()) && proto.tensorflow.serving.Input.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.ClassificationRequest}
 */
proto.tensorflow.serving.ClassificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.ClassificationRequest;
  return proto.tensorflow.serving.ClassificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.ClassificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.ClassificationRequest}
 */
proto.tensorflow.serving.ClassificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.serving.ModelSpec;
      reader.readMessage(value,proto.tensorflow.serving.ModelSpec.deserializeBinaryFromReader);
      msg.setModelSpec(value);
      break;
    case 2:
      var value = new proto.tensorflow.serving.Input;
      reader.readMessage(value,proto.tensorflow.serving.Input.deserializeBinaryFromReader);
      msg.setInput(value);
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
proto.tensorflow.serving.ClassificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.ClassificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.ClassificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.serving.ClassificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.serving.ModelSpec.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.serving.Input.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModelSpec model_spec = 1;
 * @return {?proto.tensorflow.serving.ModelSpec}
 */
proto.tensorflow.serving.ClassificationRequest.prototype.getModelSpec = function() {
  return /** @type{?proto.tensorflow.serving.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.ModelSpec, 1));
};


/** @param {?proto.tensorflow.serving.ModelSpec|undefined} value */
proto.tensorflow.serving.ClassificationRequest.prototype.setModelSpec = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.ClassificationRequest.prototype.clearModelSpec = function() {
  this.setModelSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ClassificationRequest.prototype.hasModelSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Input input = 2;
 * @return {?proto.tensorflow.serving.Input}
 */
proto.tensorflow.serving.ClassificationRequest.prototype.getInput = function() {
  return /** @type{?proto.tensorflow.serving.Input} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.Input, 2));
};


/** @param {?proto.tensorflow.serving.Input|undefined} value */
proto.tensorflow.serving.ClassificationRequest.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.serving.ClassificationRequest.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ClassificationRequest.prototype.hasInput = function() {
  return jspb.Message.getField(this, 2) != null;
};

