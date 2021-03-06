/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.TensorSliceProto');
goog.provide('proto.tensorflow.TensorSliceProto.Extent');

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
proto.tensorflow.TensorSliceProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.TensorSliceProto.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.TensorSliceProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.TensorSliceProto.displayName = 'proto.tensorflow.TensorSliceProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.TensorSliceProto.repeatedFields_ = [1];



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
proto.tensorflow.TensorSliceProto.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.TensorSliceProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.TensorSliceProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.TensorSliceProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    extentList: jspb.Message.toObjectList(msg.getExtentList(),
    proto.tensorflow.TensorSliceProto.Extent.toObject, includeInstance)
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
 * @return {!proto.tensorflow.TensorSliceProto}
 */
proto.tensorflow.TensorSliceProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.TensorSliceProto;
  return proto.tensorflow.TensorSliceProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.TensorSliceProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.TensorSliceProto}
 */
proto.tensorflow.TensorSliceProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.TensorSliceProto.Extent;
      reader.readMessage(value,proto.tensorflow.TensorSliceProto.Extent.deserializeBinaryFromReader);
      msg.addExtent(value);
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
proto.tensorflow.TensorSliceProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.TensorSliceProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.TensorSliceProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.TensorSliceProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExtentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.TensorSliceProto.Extent.serializeBinaryToWriter
    );
  }
};



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
proto.tensorflow.TensorSliceProto.Extent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tensorflow.TensorSliceProto.Extent.oneofGroups_);
};
goog.inherits(proto.tensorflow.TensorSliceProto.Extent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.TensorSliceProto.Extent.displayName = 'proto.tensorflow.TensorSliceProto.Extent';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensorflow.TensorSliceProto.Extent.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.tensorflow.TensorSliceProto.Extent.HasLengthCase = {
  HAS_LENGTH_NOT_SET: 0,
  LENGTH: 2
};

/**
 * @return {proto.tensorflow.TensorSliceProto.Extent.HasLengthCase}
 */
proto.tensorflow.TensorSliceProto.Extent.prototype.getHasLengthCase = function() {
  return /** @type {proto.tensorflow.TensorSliceProto.Extent.HasLengthCase} */(jspb.Message.computeOneofCase(this, proto.tensorflow.TensorSliceProto.Extent.oneofGroups_[0]));
};



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
proto.tensorflow.TensorSliceProto.Extent.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.TensorSliceProto.Extent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.TensorSliceProto.Extent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.TensorSliceProto.Extent.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    length: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tensorflow.TensorSliceProto.Extent}
 */
proto.tensorflow.TensorSliceProto.Extent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.TensorSliceProto.Extent;
  return proto.tensorflow.TensorSliceProto.Extent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.TensorSliceProto.Extent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.TensorSliceProto.Extent}
 */
proto.tensorflow.TensorSliceProto.Extent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLength(value);
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
proto.tensorflow.TensorSliceProto.Extent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.TensorSliceProto.Extent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.TensorSliceProto.Extent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.TensorSliceProto.Extent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 start = 1;
 * @return {number}
 */
proto.tensorflow.TensorSliceProto.Extent.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tensorflow.TensorSliceProto.Extent.prototype.setStart = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 length = 2;
 * @return {number}
 */
proto.tensorflow.TensorSliceProto.Extent.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.TensorSliceProto.Extent.prototype.setLength = function(value) {
  jspb.Message.setOneofField(this, 2, proto.tensorflow.TensorSliceProto.Extent.oneofGroups_[0], value);
};


proto.tensorflow.TensorSliceProto.Extent.prototype.clearLength = function() {
  jspb.Message.setOneofField(this, 2, proto.tensorflow.TensorSliceProto.Extent.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.TensorSliceProto.Extent.prototype.hasLength = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Extent extent = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.TensorSliceProto.Extent>}
 */
proto.tensorflow.TensorSliceProto.prototype.getExtentList = function() {
  return /** @type{!Array.<!proto.tensorflow.TensorSliceProto.Extent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.TensorSliceProto.Extent, 1));
};


/** @param {!Array.<!proto.tensorflow.TensorSliceProto.Extent>} value */
proto.tensorflow.TensorSliceProto.prototype.setExtentList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.TensorSliceProto.Extent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.TensorSliceProto.Extent}
 */
proto.tensorflow.TensorSliceProto.prototype.addExtent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.TensorSliceProto.Extent, opt_index);
};


proto.tensorflow.TensorSliceProto.prototype.clearExtentList = function() {
  this.setExtentList([]);
};


