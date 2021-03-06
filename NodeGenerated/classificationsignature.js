/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.serving.ClassificationSignature');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.serving.TensorBinding');


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
proto.tensorflow.serving.ClassificationSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.ClassificationSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.ClassificationSignature.displayName = 'proto.tensorflow.serving.ClassificationSignature';
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
proto.tensorflow.serving.ClassificationSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.ClassificationSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.ClassificationSignature} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.serving.ClassificationSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    input: (f = msg.getInput()) && proto.tensorflow.serving.TensorBinding.toObject(includeInstance, f),
    classes: (f = msg.getClasses()) && proto.tensorflow.serving.TensorBinding.toObject(includeInstance, f),
    scores: (f = msg.getScores()) && proto.tensorflow.serving.TensorBinding.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.ClassificationSignature}
 */
proto.tensorflow.serving.ClassificationSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.ClassificationSignature;
  return proto.tensorflow.serving.ClassificationSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.ClassificationSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.ClassificationSignature}
 */
proto.tensorflow.serving.ClassificationSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.serving.TensorBinding;
      reader.readMessage(value,proto.tensorflow.serving.TensorBinding.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 2:
      var value = new proto.tensorflow.serving.TensorBinding;
      reader.readMessage(value,proto.tensorflow.serving.TensorBinding.deserializeBinaryFromReader);
      msg.setClasses(value);
      break;
    case 3:
      var value = new proto.tensorflow.serving.TensorBinding;
      reader.readMessage(value,proto.tensorflow.serving.TensorBinding.deserializeBinaryFromReader);
      msg.setScores(value);
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
proto.tensorflow.serving.ClassificationSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.ClassificationSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.ClassificationSignature} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.serving.ClassificationSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.serving.TensorBinding.serializeBinaryToWriter
    );
  }
  f = message.getClasses();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.serving.TensorBinding.serializeBinaryToWriter
    );
  }
  f = message.getScores();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tensorflow.serving.TensorBinding.serializeBinaryToWriter
    );
  }
};


/**
 * optional TensorBinding input = 1;
 * @return {?proto.tensorflow.serving.TensorBinding}
 */
proto.tensorflow.serving.ClassificationSignature.prototype.getInput = function() {
  return /** @type{?proto.tensorflow.serving.TensorBinding} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.TensorBinding, 1));
};


/** @param {?proto.tensorflow.serving.TensorBinding|undefined} value */
proto.tensorflow.serving.ClassificationSignature.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.ClassificationSignature.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ClassificationSignature.prototype.hasInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TensorBinding classes = 2;
 * @return {?proto.tensorflow.serving.TensorBinding}
 */
proto.tensorflow.serving.ClassificationSignature.prototype.getClasses = function() {
  return /** @type{?proto.tensorflow.serving.TensorBinding} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.TensorBinding, 2));
};


/** @param {?proto.tensorflow.serving.TensorBinding|undefined} value */
proto.tensorflow.serving.ClassificationSignature.prototype.setClasses = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.serving.ClassificationSignature.prototype.clearClasses = function() {
  this.setClasses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ClassificationSignature.prototype.hasClasses = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TensorBinding scores = 3;
 * @return {?proto.tensorflow.serving.TensorBinding}
 */
proto.tensorflow.serving.ClassificationSignature.prototype.getScores = function() {
  return /** @type{?proto.tensorflow.serving.TensorBinding} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.TensorBinding, 3));
};


/** @param {?proto.tensorflow.serving.TensorBinding|undefined} value */
proto.tensorflow.serving.ClassificationSignature.prototype.setScores = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.tensorflow.serving.ClassificationSignature.prototype.clearScores = function() {
  this.setScores(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ClassificationSignature.prototype.hasScores = function() {
  return jspb.Message.getField(this, 3) != null;
};


