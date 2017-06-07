/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.HistogramProto');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');


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
proto.tensorflow.HistogramProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.HistogramProto.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.HistogramProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.HistogramProto.displayName = 'proto.tensorflow.HistogramProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.HistogramProto.repeatedFields_ = [6,7];



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
proto.tensorflow.HistogramProto.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.HistogramProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.HistogramProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.HistogramProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    min: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    max: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    num: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    sum: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    sumSquares: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    bucketLimitList: jspb.Message.getRepeatedFloatingPointField(msg, 6),
    bucketList: jspb.Message.getRepeatedFloatingPointField(msg, 7)
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
 * @return {!proto.tensorflow.HistogramProto}
 */
proto.tensorflow.HistogramProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.HistogramProto;
  return proto.tensorflow.HistogramProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.HistogramProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.HistogramProto}
 */
proto.tensorflow.HistogramProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSum(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSumSquares(value);
      break;
    case 6:
      var value = /** @type {!Array.<number>} */ (reader.readPackedDouble());
      msg.setBucketLimitList(value);
      break;
    case 7:
      var value = /** @type {!Array.<number>} */ (reader.readPackedDouble());
      msg.setBucketList(value);
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
proto.tensorflow.HistogramProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.HistogramProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.HistogramProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.HistogramProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMin();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMax();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getNum();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSum();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getSumSquares();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getBucketLimitList();
  if (f.length > 0) {
    writer.writePackedDouble(
      6,
      f
    );
  }
  f = message.getBucketList();
  if (f.length > 0) {
    writer.writePackedDouble(
      7,
      f
    );
  }
};


/**
 * optional double min = 1;
 * @return {number}
 */
proto.tensorflow.HistogramProto.prototype.getMin = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.tensorflow.HistogramProto.prototype.setMin = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional double max = 2;
 * @return {number}
 */
proto.tensorflow.HistogramProto.prototype.getMax = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.tensorflow.HistogramProto.prototype.setMax = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional double num = 3;
 * @return {number}
 */
proto.tensorflow.HistogramProto.prototype.getNum = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.tensorflow.HistogramProto.prototype.setNum = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional double sum = 4;
 * @return {number}
 */
proto.tensorflow.HistogramProto.prototype.getSum = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.tensorflow.HistogramProto.prototype.setSum = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional double sum_squares = 5;
 * @return {number}
 */
proto.tensorflow.HistogramProto.prototype.getSumSquares = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.tensorflow.HistogramProto.prototype.setSumSquares = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * repeated double bucket_limit = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.HistogramProto.prototype.getBucketLimitList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/** @param {!Array.<number>} value */
proto.tensorflow.HistogramProto.prototype.setBucketLimitList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.HistogramProto.prototype.addBucketLimit = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.tensorflow.HistogramProto.prototype.clearBucketLimitList = function() {
  this.setBucketLimitList([]);
};


/**
 * repeated double bucket = 7;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.HistogramProto.prototype.getBucketList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 7));
};


/** @param {!Array.<number>} value */
proto.tensorflow.HistogramProto.prototype.setBucketList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.HistogramProto.prototype.addBucket = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


proto.tensorflow.HistogramProto.prototype.clearBucketList = function() {
  this.setBucketList([]);
};

