/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.tfcompile.Feed');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.TensorShapeProto');
goog.require('proto.tensorflow.tfcompile.TensorId');


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
proto.tensorflow.tfcompile.Feed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.tfcompile.Feed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.tfcompile.Feed.displayName = 'proto.tensorflow.tfcompile.Feed';
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
proto.tensorflow.tfcompile.Feed.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.tfcompile.Feed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.tfcompile.Feed} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.tfcompile.Feed.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.tensorflow.tfcompile.TensorId.toObject(includeInstance, f),
    shape: (f = msg.getShape()) && proto.tensorflow.TensorShapeProto.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.tensorflow.tfcompile.Feed}
 */
proto.tensorflow.tfcompile.Feed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.tfcompile.Feed;
  return proto.tensorflow.tfcompile.Feed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.tfcompile.Feed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.tfcompile.Feed}
 */
proto.tensorflow.tfcompile.Feed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.tfcompile.TensorId;
      reader.readMessage(value,proto.tensorflow.tfcompile.TensorId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.tensorflow.TensorShapeProto;
      reader.readMessage(value,proto.tensorflow.TensorShapeProto.deserializeBinaryFromReader);
      msg.setShape(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.tensorflow.tfcompile.Feed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.tfcompile.Feed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.tfcompile.Feed} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.tfcompile.Feed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.tfcompile.TensorId.serializeBinaryToWriter
    );
  }
  f = message.getShape();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.TensorShapeProto.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional TensorId id = 1;
 * @return {?proto.tensorflow.tfcompile.TensorId}
 */
proto.tensorflow.tfcompile.Feed.prototype.getId = function() {
  return /** @type{?proto.tensorflow.tfcompile.TensorId} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.tfcompile.TensorId, 1));
};


/** @param {?proto.tensorflow.tfcompile.TensorId|undefined} value */
proto.tensorflow.tfcompile.Feed.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.tfcompile.Feed.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.tfcompile.Feed.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tensorflow.TensorShapeProto shape = 2;
 * @return {?proto.tensorflow.TensorShapeProto}
 */
proto.tensorflow.tfcompile.Feed.prototype.getShape = function() {
  return /** @type{?proto.tensorflow.TensorShapeProto} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.TensorShapeProto, 2));
};


/** @param {?proto.tensorflow.TensorShapeProto|undefined} value */
proto.tensorflow.tfcompile.Feed.prototype.setShape = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.tfcompile.Feed.prototype.clearShape = function() {
  this.setShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.tfcompile.Feed.prototype.hasShape = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.tensorflow.tfcompile.Feed.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tensorflow.tfcompile.Feed.prototype.setName = function(value) {
  jspb.Message.setField(this, 3, value);
};


