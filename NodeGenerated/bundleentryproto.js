/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.BundleEntryProto');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.TensorShapeProto');
goog.require('proto.tensorflow.TensorSliceProto');

goog.forwardDeclare('proto.tensorflow.DataType');

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
proto.tensorflow.BundleEntryProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.BundleEntryProto.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.BundleEntryProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.BundleEntryProto.displayName = 'proto.tensorflow.BundleEntryProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.BundleEntryProto.repeatedFields_ = [7];



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
proto.tensorflow.BundleEntryProto.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.BundleEntryProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.BundleEntryProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.BundleEntryProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    dtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shape: (f = msg.getShape()) && proto.tensorflow.TensorShapeProto.toObject(includeInstance, f),
    shardId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 4, 0),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    crc32c: jspb.Message.getFieldWithDefault(msg, 6, 0),
    slicesList: jspb.Message.toObjectList(msg.getSlicesList(),
    proto.tensorflow.TensorSliceProto.toObject, includeInstance)
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
 * @return {!proto.tensorflow.BundleEntryProto}
 */
proto.tensorflow.BundleEntryProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.BundleEntryProto;
  return proto.tensorflow.BundleEntryProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.BundleEntryProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.BundleEntryProto}
 */
proto.tensorflow.BundleEntryProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tensorflow.DataType} */ (reader.readEnum());
      msg.setDtype(value);
      break;
    case 2:
      var value = new proto.tensorflow.TensorShapeProto;
      reader.readMessage(value,proto.tensorflow.TensorShapeProto.deserializeBinaryFromReader);
      msg.setShape(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setShardId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setCrc32c(value);
      break;
    case 7:
      var value = new proto.tensorflow.TensorSliceProto;
      reader.readMessage(value,proto.tensorflow.TensorSliceProto.deserializeBinaryFromReader);
      msg.addSlices(value);
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
proto.tensorflow.BundleEntryProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.BundleEntryProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.BundleEntryProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.BundleEntryProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDtype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
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
  f = message.getShardId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getCrc32c();
  if (f !== 0) {
    writer.writeFixed32(
      6,
      f
    );
  }
  f = message.getSlicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.tensorflow.TensorSliceProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional DataType dtype = 1;
 * @return {!proto.tensorflow.DataType}
 */
proto.tensorflow.BundleEntryProto.prototype.getDtype = function() {
  return /** @type {!proto.tensorflow.DataType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.tensorflow.DataType} value */
proto.tensorflow.BundleEntryProto.prototype.setDtype = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional TensorShapeProto shape = 2;
 * @return {?proto.tensorflow.TensorShapeProto}
 */
proto.tensorflow.BundleEntryProto.prototype.getShape = function() {
  return /** @type{?proto.tensorflow.TensorShapeProto} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.TensorShapeProto, 2));
};


/** @param {?proto.tensorflow.TensorShapeProto|undefined} value */
proto.tensorflow.BundleEntryProto.prototype.setShape = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.BundleEntryProto.prototype.clearShape = function() {
  this.setShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.BundleEntryProto.prototype.hasShape = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 shard_id = 3;
 * @return {number}
 */
proto.tensorflow.BundleEntryProto.prototype.getShardId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tensorflow.BundleEntryProto.prototype.setShardId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 offset = 4;
 * @return {number}
 */
proto.tensorflow.BundleEntryProto.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.tensorflow.BundleEntryProto.prototype.setOffset = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.tensorflow.BundleEntryProto.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.tensorflow.BundleEntryProto.prototype.setSize = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional fixed32 crc32c = 6;
 * @return {number}
 */
proto.tensorflow.BundleEntryProto.prototype.getCrc32c = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.tensorflow.BundleEntryProto.prototype.setCrc32c = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * repeated TensorSliceProto slices = 7;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.TensorSliceProto>}
 */
proto.tensorflow.BundleEntryProto.prototype.getSlicesList = function() {
  return /** @type{!Array.<!proto.tensorflow.TensorSliceProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.TensorSliceProto, 7));
};


/** @param {!Array.<!proto.tensorflow.TensorSliceProto>} value */
proto.tensorflow.BundleEntryProto.prototype.setSlicesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.tensorflow.TensorSliceProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.TensorSliceProto}
 */
proto.tensorflow.BundleEntryProto.prototype.addSlices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.tensorflow.TensorSliceProto, opt_index);
};


proto.tensorflow.BundleEntryProto.prototype.clearSlicesList = function() {
  this.setSlicesList([]);
};


