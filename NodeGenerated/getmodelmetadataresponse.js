/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.serving.GetModelMetadataResponse');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('proto.google.protobuf.Any');
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
proto.tensorflow.serving.GetModelMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.GetModelMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.GetModelMetadataResponse.displayName = 'proto.tensorflow.serving.GetModelMetadataResponse';
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
proto.tensorflow.serving.GetModelMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.GetModelMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.GetModelMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.serving.GetModelMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelSpec: (f = msg.getModelSpec()) && proto.tensorflow.serving.ModelSpec.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, proto.google.protobuf.Any.toObject) : []
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
 * @return {!proto.tensorflow.serving.GetModelMetadataResponse}
 */
proto.tensorflow.serving.GetModelMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.GetModelMetadataResponse;
  return proto.tensorflow.serving.GetModelMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.GetModelMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.GetModelMetadataResponse}
 */
proto.tensorflow.serving.GetModelMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Any.deserializeBinaryFromReader);
         });
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
proto.tensorflow.serving.GetModelMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.GetModelMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.GetModelMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.serving.GetModelMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.serving.ModelSpec.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Any.serializeBinaryToWriter);
  }
};


/**
 * optional ModelSpec model_spec = 1;
 * @return {?proto.tensorflow.serving.ModelSpec}
 */
proto.tensorflow.serving.GetModelMetadataResponse.prototype.getModelSpec = function() {
  return /** @type{?proto.tensorflow.serving.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.ModelSpec, 1));
};


/** @param {?proto.tensorflow.serving.ModelSpec|undefined} value */
proto.tensorflow.serving.GetModelMetadataResponse.prototype.setModelSpec = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.GetModelMetadataResponse.prototype.clearModelSpec = function() {
  this.setModelSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.GetModelMetadataResponse.prototype.hasModelSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, google.protobuf.Any> metadata = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Any>}
 */
proto.tensorflow.serving.GetModelMetadataResponse.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Any>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.google.protobuf.Any));
};


proto.tensorflow.serving.GetModelMetadataResponse.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
};


