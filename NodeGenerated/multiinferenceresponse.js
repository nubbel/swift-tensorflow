/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.serving.MultiInferenceResponse');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.serving.InferenceResult');


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
proto.tensorflow.serving.MultiInferenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.serving.MultiInferenceResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.serving.MultiInferenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.MultiInferenceResponse.displayName = 'proto.tensorflow.serving.MultiInferenceResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.serving.MultiInferenceResponse.repeatedFields_ = [1];



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
proto.tensorflow.serving.MultiInferenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.MultiInferenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.MultiInferenceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.serving.MultiInferenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.tensorflow.serving.InferenceResult.toObject, includeInstance)
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
 * @return {!proto.tensorflow.serving.MultiInferenceResponse}
 */
proto.tensorflow.serving.MultiInferenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.MultiInferenceResponse;
  return proto.tensorflow.serving.MultiInferenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.MultiInferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.MultiInferenceResponse}
 */
proto.tensorflow.serving.MultiInferenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.serving.InferenceResult;
      reader.readMessage(value,proto.tensorflow.serving.InferenceResult.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.tensorflow.serving.MultiInferenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.MultiInferenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.MultiInferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.serving.MultiInferenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.serving.InferenceResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InferenceResult results = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.serving.InferenceResult>}
 */
proto.tensorflow.serving.MultiInferenceResponse.prototype.getResultsList = function() {
  return /** @type{!Array.<!proto.tensorflow.serving.InferenceResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.serving.InferenceResult, 1));
};


/** @param {!Array.<!proto.tensorflow.serving.InferenceResult>} value */
proto.tensorflow.serving.MultiInferenceResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.serving.InferenceResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.serving.InferenceResult}
 */
proto.tensorflow.serving.MultiInferenceResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.serving.InferenceResult, opt_index);
};


proto.tensorflow.serving.MultiInferenceResponse.prototype.clearResultsList = function() {
  this.setResultsList([]);
};


