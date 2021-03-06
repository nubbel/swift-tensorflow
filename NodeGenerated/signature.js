/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.serving.Signature');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.serving.ClassificationSignature');
goog.require('proto.tensorflow.serving.GenericSignature');
goog.require('proto.tensorflow.serving.RegressionSignature');


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
proto.tensorflow.serving.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tensorflow.serving.Signature.oneofGroups_);
};
goog.inherits(proto.tensorflow.serving.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.Signature.displayName = 'proto.tensorflow.serving.Signature';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensorflow.serving.Signature.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.tensorflow.serving.Signature.TypeCase = {
  TYPE_NOT_SET: 0,
  REGRESSION_SIGNATURE: 1,
  CLASSIFICATION_SIGNATURE: 2,
  GENERIC_SIGNATURE: 3
};

/**
 * @return {proto.tensorflow.serving.Signature.TypeCase}
 */
proto.tensorflow.serving.Signature.prototype.getTypeCase = function() {
  return /** @type {proto.tensorflow.serving.Signature.TypeCase} */(jspb.Message.computeOneofCase(this, proto.tensorflow.serving.Signature.oneofGroups_[0]));
};



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
proto.tensorflow.serving.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.Signature} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.serving.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    regressionSignature: (f = msg.getRegressionSignature()) && proto.tensorflow.serving.RegressionSignature.toObject(includeInstance, f),
    classificationSignature: (f = msg.getClassificationSignature()) && proto.tensorflow.serving.ClassificationSignature.toObject(includeInstance, f),
    genericSignature: (f = msg.getGenericSignature()) && proto.tensorflow.serving.GenericSignature.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.Signature}
 */
proto.tensorflow.serving.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.Signature;
  return proto.tensorflow.serving.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.Signature}
 */
proto.tensorflow.serving.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.serving.RegressionSignature;
      reader.readMessage(value,proto.tensorflow.serving.RegressionSignature.deserializeBinaryFromReader);
      msg.setRegressionSignature(value);
      break;
    case 2:
      var value = new proto.tensorflow.serving.ClassificationSignature;
      reader.readMessage(value,proto.tensorflow.serving.ClassificationSignature.deserializeBinaryFromReader);
      msg.setClassificationSignature(value);
      break;
    case 3:
      var value = new proto.tensorflow.serving.GenericSignature;
      reader.readMessage(value,proto.tensorflow.serving.GenericSignature.deserializeBinaryFromReader);
      msg.setGenericSignature(value);
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
proto.tensorflow.serving.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.Signature} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.serving.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegressionSignature();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.serving.RegressionSignature.serializeBinaryToWriter
    );
  }
  f = message.getClassificationSignature();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.serving.ClassificationSignature.serializeBinaryToWriter
    );
  }
  f = message.getGenericSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tensorflow.serving.GenericSignature.serializeBinaryToWriter
    );
  }
};


/**
 * optional RegressionSignature regression_signature = 1;
 * @return {?proto.tensorflow.serving.RegressionSignature}
 */
proto.tensorflow.serving.Signature.prototype.getRegressionSignature = function() {
  return /** @type{?proto.tensorflow.serving.RegressionSignature} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.RegressionSignature, 1));
};


/** @param {?proto.tensorflow.serving.RegressionSignature|undefined} value */
proto.tensorflow.serving.Signature.prototype.setRegressionSignature = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.tensorflow.serving.Signature.oneofGroups_[0], value);
};


proto.tensorflow.serving.Signature.prototype.clearRegressionSignature = function() {
  this.setRegressionSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.Signature.prototype.hasRegressionSignature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClassificationSignature classification_signature = 2;
 * @return {?proto.tensorflow.serving.ClassificationSignature}
 */
proto.tensorflow.serving.Signature.prototype.getClassificationSignature = function() {
  return /** @type{?proto.tensorflow.serving.ClassificationSignature} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.ClassificationSignature, 2));
};


/** @param {?proto.tensorflow.serving.ClassificationSignature|undefined} value */
proto.tensorflow.serving.Signature.prototype.setClassificationSignature = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.tensorflow.serving.Signature.oneofGroups_[0], value);
};


proto.tensorflow.serving.Signature.prototype.clearClassificationSignature = function() {
  this.setClassificationSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.Signature.prototype.hasClassificationSignature = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GenericSignature generic_signature = 3;
 * @return {?proto.tensorflow.serving.GenericSignature}
 */
proto.tensorflow.serving.Signature.prototype.getGenericSignature = function() {
  return /** @type{?proto.tensorflow.serving.GenericSignature} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.GenericSignature, 3));
};


/** @param {?proto.tensorflow.serving.GenericSignature|undefined} value */
proto.tensorflow.serving.Signature.prototype.setGenericSignature = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.tensorflow.serving.Signature.oneofGroups_[0], value);
};


proto.tensorflow.serving.Signature.prototype.clearGenericSignature = function() {
  this.setGenericSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.Signature.prototype.hasGenericSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};


