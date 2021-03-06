/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.serving.Signatures');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('proto.tensorflow.serving.Signature');


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
proto.tensorflow.serving.Signatures = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.Signatures, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.Signatures.displayName = 'proto.tensorflow.serving.Signatures';
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
proto.tensorflow.serving.Signatures.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.Signatures.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.Signatures} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.serving.Signatures.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultSignature: (f = msg.getDefaultSignature()) && proto.tensorflow.serving.Signature.toObject(includeInstance, f),
    namedSignaturesMap: (f = msg.getNamedSignaturesMap()) ? f.toObject(includeInstance, proto.tensorflow.serving.Signature.toObject) : []
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
 * @return {!proto.tensorflow.serving.Signatures}
 */
proto.tensorflow.serving.Signatures.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.Signatures;
  return proto.tensorflow.serving.Signatures.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.Signatures} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.Signatures}
 */
proto.tensorflow.serving.Signatures.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.serving.Signature;
      reader.readMessage(value,proto.tensorflow.serving.Signature.deserializeBinaryFromReader);
      msg.setDefaultSignature(value);
      break;
    case 2:
      var value = msg.getNamedSignaturesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tensorflow.serving.Signature.deserializeBinaryFromReader);
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
proto.tensorflow.serving.Signatures.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.Signatures.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.Signatures} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.serving.Signatures.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultSignature();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.serving.Signature.serializeBinaryToWriter
    );
  }
  f = message.getNamedSignaturesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tensorflow.serving.Signature.serializeBinaryToWriter);
  }
};


/**
 * optional Signature default_signature = 1;
 * @return {?proto.tensorflow.serving.Signature}
 */
proto.tensorflow.serving.Signatures.prototype.getDefaultSignature = function() {
  return /** @type{?proto.tensorflow.serving.Signature} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.Signature, 1));
};


/** @param {?proto.tensorflow.serving.Signature|undefined} value */
proto.tensorflow.serving.Signatures.prototype.setDefaultSignature = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.Signatures.prototype.clearDefaultSignature = function() {
  this.setDefaultSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.Signatures.prototype.hasDefaultSignature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, Signature> named_signatures = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tensorflow.serving.Signature>}
 */
proto.tensorflow.serving.Signatures.prototype.getNamedSignaturesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tensorflow.serving.Signature>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.tensorflow.serving.Signature));
};


proto.tensorflow.serving.Signatures.prototype.clearNamedSignaturesMap = function() {
  this.getNamedSignaturesMap().clear();
};


