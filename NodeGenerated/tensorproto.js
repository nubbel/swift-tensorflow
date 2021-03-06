/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.TensorProto');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.ResourceHandle');
goog.require('proto.tensorflow.TensorShapeProto');

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
proto.tensorflow.TensorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.TensorProto.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.TensorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.TensorProto.displayName = 'proto.tensorflow.TensorProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.TensorProto.repeatedFields_ = [13,5,6,7,8,9,10,11,12,14];



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
proto.tensorflow.TensorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.TensorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.TensorProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.TensorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    dtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tensorShape: (f = msg.getTensorShape()) && proto.tensorflow.TensorShapeProto.toObject(includeInstance, f),
    versionNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tensorContent: msg.getTensorContent_asB64(),
    halfValList: jspb.Message.getField(msg, 13),
    floatValList: jspb.Message.getRepeatedFloatingPointField(msg, 5),
    doubleValList: jspb.Message.getRepeatedFloatingPointField(msg, 6),
    intValList: jspb.Message.getField(msg, 7),
    stringValList: msg.getStringValList_asB64(),
    scomplexValList: jspb.Message.getRepeatedFloatingPointField(msg, 9),
    int64ValList: jspb.Message.getField(msg, 10),
    boolValList: jspb.Message.getField(msg, 11),
    dcomplexValList: jspb.Message.getRepeatedFloatingPointField(msg, 12),
    resourceHandleValList: jspb.Message.toObjectList(msg.getResourceHandleValList(),
    proto.tensorflow.ResourceHandle.toObject, includeInstance)
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
 * @return {!proto.tensorflow.TensorProto}
 */
proto.tensorflow.TensorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.TensorProto;
  return proto.tensorflow.TensorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.TensorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.TensorProto}
 */
proto.tensorflow.TensorProto.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTensorShape(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersionNumber(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTensorContent(value);
      break;
    case 13:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setHalfValList(value);
      break;
    case 5:
      var value = /** @type {!Array.<number>} */ (reader.readPackedFloat());
      msg.setFloatValList(value);
      break;
    case 6:
      var value = /** @type {!Array.<number>} */ (reader.readPackedDouble());
      msg.setDoubleValList(value);
      break;
    case 7:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setIntValList(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addStringVal(value);
      break;
    case 9:
      var value = /** @type {!Array.<number>} */ (reader.readPackedFloat());
      msg.setScomplexValList(value);
      break;
    case 10:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setInt64ValList(value);
      break;
    case 11:
      var value = /** @type {!Array.<boolean>} */ (reader.readPackedBool());
      msg.setBoolValList(value);
      break;
    case 12:
      var value = /** @type {!Array.<number>} */ (reader.readPackedDouble());
      msg.setDcomplexValList(value);
      break;
    case 14:
      var value = new proto.tensorflow.ResourceHandle;
      reader.readMessage(value,proto.tensorflow.ResourceHandle.deserializeBinaryFromReader);
      msg.addResourceHandleVal(value);
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
proto.tensorflow.TensorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.TensorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.TensorProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.TensorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDtype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTensorShape();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.TensorShapeProto.serializeBinaryToWriter
    );
  }
  f = message.getVersionNumber();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTensorContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getHalfValList();
  if (f.length > 0) {
    writer.writePackedInt32(
      13,
      f
    );
  }
  f = message.getFloatValList();
  if (f.length > 0) {
    writer.writePackedFloat(
      5,
      f
    );
  }
  f = message.getDoubleValList();
  if (f.length > 0) {
    writer.writePackedDouble(
      6,
      f
    );
  }
  f = message.getIntValList();
  if (f.length > 0) {
    writer.writePackedInt32(
      7,
      f
    );
  }
  f = message.getStringValList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      8,
      f
    );
  }
  f = message.getScomplexValList();
  if (f.length > 0) {
    writer.writePackedFloat(
      9,
      f
    );
  }
  f = message.getInt64ValList();
  if (f.length > 0) {
    writer.writePackedInt64(
      10,
      f
    );
  }
  f = message.getBoolValList();
  if (f.length > 0) {
    writer.writePackedBool(
      11,
      f
    );
  }
  f = message.getDcomplexValList();
  if (f.length > 0) {
    writer.writePackedDouble(
      12,
      f
    );
  }
  f = message.getResourceHandleValList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.tensorflow.ResourceHandle.serializeBinaryToWriter
    );
  }
};


/**
 * optional DataType dtype = 1;
 * @return {!proto.tensorflow.DataType}
 */
proto.tensorflow.TensorProto.prototype.getDtype = function() {
  return /** @type {!proto.tensorflow.DataType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.tensorflow.DataType} value */
proto.tensorflow.TensorProto.prototype.setDtype = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional TensorShapeProto tensor_shape = 2;
 * @return {?proto.tensorflow.TensorShapeProto}
 */
proto.tensorflow.TensorProto.prototype.getTensorShape = function() {
  return /** @type{?proto.tensorflow.TensorShapeProto} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.TensorShapeProto, 2));
};


/** @param {?proto.tensorflow.TensorShapeProto|undefined} value */
proto.tensorflow.TensorProto.prototype.setTensorShape = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.TensorProto.prototype.clearTensorShape = function() {
  this.setTensorShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.TensorProto.prototype.hasTensorShape = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 version_number = 3;
 * @return {number}
 */
proto.tensorflow.TensorProto.prototype.getVersionNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tensorflow.TensorProto.prototype.setVersionNumber = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bytes tensor_content = 4;
 * @return {string}
 */
proto.tensorflow.TensorProto.prototype.getTensorContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes tensor_content = 4;
 * This is a type-conversion wrapper around `getTensorContent()`
 * @return {string}
 */
proto.tensorflow.TensorProto.prototype.getTensorContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTensorContent()));
};


/**
 * optional bytes tensor_content = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTensorContent()`
 * @return {!Uint8Array}
 */
proto.tensorflow.TensorProto.prototype.getTensorContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTensorContent()));
};


/** @param {!(string|Uint8Array)} value */
proto.tensorflow.TensorProto.prototype.setTensorContent = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated int32 half_val = 13;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.TensorProto.prototype.getHalfValList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 13));
};


/** @param {!Array.<number>} value */
proto.tensorflow.TensorProto.prototype.setHalfValList = function(value) {
  jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.TensorProto.prototype.addHalfVal = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


proto.tensorflow.TensorProto.prototype.clearHalfValList = function() {
  this.setHalfValList([]);
};


/**
 * repeated float float_val = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.TensorProto.prototype.getFloatValList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/** @param {!Array.<number>} value */
proto.tensorflow.TensorProto.prototype.setFloatValList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.TensorProto.prototype.addFloatVal = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.tensorflow.TensorProto.prototype.clearFloatValList = function() {
  this.setFloatValList([]);
};


/**
 * repeated double double_val = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.TensorProto.prototype.getDoubleValList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/** @param {!Array.<number>} value */
proto.tensorflow.TensorProto.prototype.setDoubleValList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.TensorProto.prototype.addDoubleVal = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.tensorflow.TensorProto.prototype.clearDoubleValList = function() {
  this.setDoubleValList([]);
};


/**
 * repeated int32 int_val = 7;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.TensorProto.prototype.getIntValList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 7));
};


/** @param {!Array.<number>} value */
proto.tensorflow.TensorProto.prototype.setIntValList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.TensorProto.prototype.addIntVal = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


proto.tensorflow.TensorProto.prototype.clearIntValList = function() {
  this.setIntValList([]);
};


/**
 * repeated bytes string_val = 8;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.TensorProto.prototype.getStringValList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 8));
};


/**
 * repeated bytes string_val = 8;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * This is a type-conversion wrapper around `getStringValList()`
 * @return {!Array.<string>}
 */
proto.tensorflow.TensorProto.prototype.getStringValList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getStringValList()));
};


/**
 * repeated bytes string_val = 8;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStringValList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.tensorflow.TensorProto.prototype.getStringValList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getStringValList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.tensorflow.TensorProto.prototype.setStringValList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.tensorflow.TensorProto.prototype.addStringVal = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.tensorflow.TensorProto.prototype.clearStringValList = function() {
  this.setStringValList([]);
};


/**
 * repeated float scomplex_val = 9;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.TensorProto.prototype.getScomplexValList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 9));
};


/** @param {!Array.<number>} value */
proto.tensorflow.TensorProto.prototype.setScomplexValList = function(value) {
  jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.TensorProto.prototype.addScomplexVal = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


proto.tensorflow.TensorProto.prototype.clearScomplexValList = function() {
  this.setScomplexValList([]);
};


/**
 * repeated int64 int64_val = 10;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.TensorProto.prototype.getInt64ValList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 10));
};


/** @param {!Array.<number>} value */
proto.tensorflow.TensorProto.prototype.setInt64ValList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.TensorProto.prototype.addInt64Val = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


proto.tensorflow.TensorProto.prototype.clearInt64ValList = function() {
  this.setInt64ValList([]);
};


/**
 * repeated bool bool_val = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<boolean>}
 */
proto.tensorflow.TensorProto.prototype.getBoolValList = function() {
  return /** @type {!Array.<boolean>} */ (jspb.Message.getField(this, 11));
};


/** @param {!Array.<boolean>} value */
proto.tensorflow.TensorProto.prototype.setBoolValList = function(value) {
  jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {!boolean} value
 * @param {number=} opt_index
 */
proto.tensorflow.TensorProto.prototype.addBoolVal = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


proto.tensorflow.TensorProto.prototype.clearBoolValList = function() {
  this.setBoolValList([]);
};


/**
 * repeated double dcomplex_val = 12;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.TensorProto.prototype.getDcomplexValList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 12));
};


/** @param {!Array.<number>} value */
proto.tensorflow.TensorProto.prototype.setDcomplexValList = function(value) {
  jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.TensorProto.prototype.addDcomplexVal = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


proto.tensorflow.TensorProto.prototype.clearDcomplexValList = function() {
  this.setDcomplexValList([]);
};


/**
 * repeated ResourceHandle resource_handle_val = 14;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.ResourceHandle>}
 */
proto.tensorflow.TensorProto.prototype.getResourceHandleValList = function() {
  return /** @type{!Array.<!proto.tensorflow.ResourceHandle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.ResourceHandle, 14));
};


/** @param {!Array.<!proto.tensorflow.ResourceHandle>} value */
proto.tensorflow.TensorProto.prototype.setResourceHandleValList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.tensorflow.ResourceHandle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.ResourceHandle}
 */
proto.tensorflow.TensorProto.prototype.addResourceHandleVal = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.tensorflow.ResourceHandle, opt_index);
};


proto.tensorflow.TensorProto.prototype.clearResourceHandleValList = function() {
  this.setResourceHandleValList([]);
};


