/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.Layout');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');

goog.forwardDeclare('proto.xla.PaddingValue');

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
proto.xla.Layout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xla.Layout.repeatedFields_, null);
};
goog.inherits(proto.xla.Layout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.Layout.displayName = 'proto.xla.Layout';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xla.Layout.repeatedFields_ = [1,2];



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
proto.xla.Layout.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.Layout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.Layout} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.Layout.toObject = function(includeInstance, msg) {
  var f, obj = {
    minorToMajorList: jspb.Message.getField(msg, 1),
    paddedDimensionsList: jspb.Message.getField(msg, 2),
    paddingValue: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.xla.Layout}
 */
proto.xla.Layout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.Layout;
  return proto.xla.Layout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.Layout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.Layout}
 */
proto.xla.Layout.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setMinorToMajorList(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setPaddedDimensionsList(value);
      break;
    case 3:
      var value = /** @type {!proto.xla.PaddingValue} */ (reader.readEnum());
      msg.setPaddingValue(value);
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
proto.xla.Layout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.Layout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.Layout} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.Layout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinorToMajorList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getPaddedDimensionsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = message.getPaddingValue();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * repeated int64 minor_to_major = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.xla.Layout.prototype.getMinorToMajorList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<number>} value */
proto.xla.Layout.prototype.setMinorToMajorList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.xla.Layout.prototype.addMinorToMajor = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.xla.Layout.prototype.clearMinorToMajorList = function() {
  this.setMinorToMajorList([]);
};


/**
 * repeated int64 padded_dimensions = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.xla.Layout.prototype.getPaddedDimensionsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 2));
};


/** @param {!Array.<number>} value */
proto.xla.Layout.prototype.setPaddedDimensionsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.xla.Layout.prototype.addPaddedDimensions = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.xla.Layout.prototype.clearPaddedDimensionsList = function() {
  this.setPaddedDimensionsList([]);
};


/**
 * optional PaddingValue padding_value = 3;
 * @return {!proto.xla.PaddingValue}
 */
proto.xla.Layout.prototype.getPaddingValue = function() {
  return /** @type {!proto.xla.PaddingValue} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.xla.PaddingValue} value */
proto.xla.Layout.prototype.setPaddingValue = function(value) {
  jspb.Message.setField(this, 3, value);
};


