/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.serving.GenericSignature');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
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
proto.tensorflow.serving.GenericSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.GenericSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.GenericSignature.displayName = 'proto.tensorflow.serving.GenericSignature';
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
proto.tensorflow.serving.GenericSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.GenericSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.GenericSignature} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.serving.GenericSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapMap: (f = msg.getMapMap()) ? f.toObject(includeInstance, proto.tensorflow.serving.TensorBinding.toObject) : []
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
 * @return {!proto.tensorflow.serving.GenericSignature}
 */
proto.tensorflow.serving.GenericSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.GenericSignature;
  return proto.tensorflow.serving.GenericSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.GenericSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.GenericSignature}
 */
proto.tensorflow.serving.GenericSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tensorflow.serving.TensorBinding.deserializeBinaryFromReader);
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
proto.tensorflow.serving.GenericSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.GenericSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.GenericSignature} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.serving.GenericSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tensorflow.serving.TensorBinding.serializeBinaryToWriter);
  }
};


/**
 * map<string, TensorBinding> map = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tensorflow.serving.TensorBinding>}
 */
proto.tensorflow.serving.GenericSignature.prototype.getMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tensorflow.serving.TensorBinding>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.tensorflow.serving.TensorBinding));
};


proto.tensorflow.serving.GenericSignature.prototype.clearMapMap = function() {
  this.getMapMap().clear();
};


