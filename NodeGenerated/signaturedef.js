/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.SignatureDef');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('proto.tensorflow.TensorInfo');


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
proto.tensorflow.SignatureDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.SignatureDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.SignatureDef.displayName = 'proto.tensorflow.SignatureDef';
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
proto.tensorflow.SignatureDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.SignatureDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.SignatureDef} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.SignatureDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputsMap: (f = msg.getInputsMap()) ? f.toObject(includeInstance, proto.tensorflow.TensorInfo.toObject) : [],
    outputsMap: (f = msg.getOutputsMap()) ? f.toObject(includeInstance, proto.tensorflow.TensorInfo.toObject) : [],
    methodName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.tensorflow.SignatureDef}
 */
proto.tensorflow.SignatureDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.SignatureDef;
  return proto.tensorflow.SignatureDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.SignatureDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.SignatureDef}
 */
proto.tensorflow.SignatureDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getInputsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tensorflow.TensorInfo.deserializeBinaryFromReader);
         });
      break;
    case 2:
      var value = msg.getOutputsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tensorflow.TensorInfo.deserializeBinaryFromReader);
         });
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
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
proto.tensorflow.SignatureDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.SignatureDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.SignatureDef} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.SignatureDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tensorflow.TensorInfo.serializeBinaryToWriter);
  }
  f = message.getOutputsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tensorflow.TensorInfo.serializeBinaryToWriter);
  }
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * map<string, TensorInfo> inputs = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tensorflow.TensorInfo>}
 */
proto.tensorflow.SignatureDef.prototype.getInputsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tensorflow.TensorInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.tensorflow.TensorInfo));
};


proto.tensorflow.SignatureDef.prototype.clearInputsMap = function() {
  this.getInputsMap().clear();
};


/**
 * map<string, TensorInfo> outputs = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tensorflow.TensorInfo>}
 */
proto.tensorflow.SignatureDef.prototype.getOutputsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tensorflow.TensorInfo>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.tensorflow.TensorInfo));
};


proto.tensorflow.SignatureDef.prototype.clearOutputsMap = function() {
  this.getOutputsMap().clear();
};


/**
 * optional string method_name = 3;
 * @return {string}
 */
proto.tensorflow.SignatureDef.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tensorflow.SignatureDef.prototype.setMethodName = function(value) {
  jspb.Message.setField(this, 3, value);
};

