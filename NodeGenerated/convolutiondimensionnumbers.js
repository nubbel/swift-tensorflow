/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.ConvolutionDimensionNumbers');

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
proto.xla.ConvolutionDimensionNumbers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xla.ConvolutionDimensionNumbers.repeatedFields_, null);
};
goog.inherits(proto.xla.ConvolutionDimensionNumbers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.ConvolutionDimensionNumbers.displayName = 'proto.xla.ConvolutionDimensionNumbers';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xla.ConvolutionDimensionNumbers.repeatedFields_ = [5,6];



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
proto.xla.ConvolutionDimensionNumbers.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.ConvolutionDimensionNumbers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.ConvolutionDimensionNumbers} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.ConvolutionDimensionNumbers.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchDimension: jspb.Message.getFieldWithDefault(msg, 1, 0),
    featureDimension: jspb.Message.getFieldWithDefault(msg, 2, 0),
    spatialDimensionsList: jspb.Message.getField(msg, 5),
    kernelInputFeatureDimension: jspb.Message.getFieldWithDefault(msg, 3, 0),
    kernelOutputFeatureDimension: jspb.Message.getFieldWithDefault(msg, 4, 0),
    kernelSpatialDimensionsList: jspb.Message.getField(msg, 6)
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
 * @return {!proto.xla.ConvolutionDimensionNumbers}
 */
proto.xla.ConvolutionDimensionNumbers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.ConvolutionDimensionNumbers;
  return proto.xla.ConvolutionDimensionNumbers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.ConvolutionDimensionNumbers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.ConvolutionDimensionNumbers}
 */
proto.xla.ConvolutionDimensionNumbers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBatchDimension(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeatureDimension(value);
      break;
    case 5:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setSpatialDimensionsList(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKernelInputFeatureDimension(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKernelOutputFeatureDimension(value);
      break;
    case 6:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setKernelSpatialDimensionsList(value);
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
proto.xla.ConvolutionDimensionNumbers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.ConvolutionDimensionNumbers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.ConvolutionDimensionNumbers} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.ConvolutionDimensionNumbers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchDimension();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFeatureDimension();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSpatialDimensionsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      5,
      f
    );
  }
  f = message.getKernelInputFeatureDimension();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getKernelOutputFeatureDimension();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getKernelSpatialDimensionsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 batch_dimension = 1;
 * @return {number}
 */
proto.xla.ConvolutionDimensionNumbers.prototype.getBatchDimension = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.xla.ConvolutionDimensionNumbers.prototype.setBatchDimension = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 feature_dimension = 2;
 * @return {number}
 */
proto.xla.ConvolutionDimensionNumbers.prototype.getFeatureDimension = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.xla.ConvolutionDimensionNumbers.prototype.setFeatureDimension = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated int64 spatial_dimensions = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.xla.ConvolutionDimensionNumbers.prototype.getSpatialDimensionsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 5));
};


/** @param {!Array.<number>} value */
proto.xla.ConvolutionDimensionNumbers.prototype.setSpatialDimensionsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.xla.ConvolutionDimensionNumbers.prototype.addSpatialDimensions = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.xla.ConvolutionDimensionNumbers.prototype.clearSpatialDimensionsList = function() {
  this.setSpatialDimensionsList([]);
};


/**
 * optional int64 kernel_input_feature_dimension = 3;
 * @return {number}
 */
proto.xla.ConvolutionDimensionNumbers.prototype.getKernelInputFeatureDimension = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.xla.ConvolutionDimensionNumbers.prototype.setKernelInputFeatureDimension = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 kernel_output_feature_dimension = 4;
 * @return {number}
 */
proto.xla.ConvolutionDimensionNumbers.prototype.getKernelOutputFeatureDimension = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.xla.ConvolutionDimensionNumbers.prototype.setKernelOutputFeatureDimension = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated int64 kernel_spatial_dimensions = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.xla.ConvolutionDimensionNumbers.prototype.getKernelSpatialDimensionsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 6));
};


/** @param {!Array.<number>} value */
proto.xla.ConvolutionDimensionNumbers.prototype.setKernelSpatialDimensionsList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.xla.ConvolutionDimensionNumbers.prototype.addKernelSpatialDimensions = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.xla.ConvolutionDimensionNumbers.prototype.clearKernelSpatialDimensionsList = function() {
  this.setKernelSpatialDimensionsList([]);
};


