/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.OpPerformance');
goog.provide('proto.tensorflow.OpPerformance.OpMemory');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.OpInfo');


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
proto.tensorflow.OpPerformance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.OpPerformance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.OpPerformance.displayName = 'proto.tensorflow.OpPerformance';
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
proto.tensorflow.OpPerformance.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.OpPerformance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.OpPerformance} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.OpPerformance.toObject = function(includeInstance, msg) {
  var f, obj = {
    op: (f = msg.getOp()) && proto.tensorflow.OpInfo.toObject(includeInstance, f),
    node: jspb.Message.getFieldWithDefault(msg, 5, ""),
    temporaryMemorySize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    computeCost: jspb.Message.getFieldWithDefault(msg, 3, 0),
    computeTime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    memoryTime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    computeEfficiency: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    memoryEfficiency: +jspb.Message.getFieldWithDefault(msg, 8, 0.0),
    opMemory: (f = msg.getOpMemory()) && proto.tensorflow.OpPerformance.OpMemory.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.OpPerformance}
 */
proto.tensorflow.OpPerformance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.OpPerformance;
  return proto.tensorflow.OpPerformance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.OpPerformance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.OpPerformance}
 */
proto.tensorflow.OpPerformance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.OpInfo;
      reader.readMessage(value,proto.tensorflow.OpInfo.deserializeBinaryFromReader);
      msg.setOp(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTemporaryMemorySize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setComputeCost(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setComputeTime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemoryTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setComputeEfficiency(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMemoryEfficiency(value);
      break;
    case 9:
      var value = new proto.tensorflow.OpPerformance.OpMemory;
      reader.readMessage(value,proto.tensorflow.OpPerformance.OpMemory.deserializeBinaryFromReader);
      msg.setOpMemory(value);
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
proto.tensorflow.OpPerformance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.OpPerformance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.OpPerformance} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.OpPerformance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.OpInfo.serializeBinaryToWriter
    );
  }
  f = message.getNode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTemporaryMemorySize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getComputeCost();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getComputeTime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getMemoryTime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getComputeEfficiency();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getMemoryEfficiency();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getOpMemory();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.tensorflow.OpPerformance.OpMemory.serializeBinaryToWriter
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
proto.tensorflow.OpPerformance.OpMemory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.OpPerformance.OpMemory.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.OpPerformance.OpMemory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.OpPerformance.OpMemory.displayName = 'proto.tensorflow.OpPerformance.OpMemory';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.OpPerformance.OpMemory.repeatedFields_ = [1];



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
proto.tensorflow.OpPerformance.OpMemory.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.OpPerformance.OpMemory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.OpPerformance.OpMemory} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.OpPerformance.OpMemory.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputMemoryList: jspb.Message.getField(msg, 1),
    hostTempMemory: jspb.Message.getFieldWithDefault(msg, 2, 0),
    deviceTempMemory: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hostPersistentMemory: jspb.Message.getFieldWithDefault(msg, 4, 0),
    devicePersistentMemory: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.tensorflow.OpPerformance.OpMemory}
 */
proto.tensorflow.OpPerformance.OpMemory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.OpPerformance.OpMemory;
  return proto.tensorflow.OpPerformance.OpMemory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.OpPerformance.OpMemory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.OpPerformance.OpMemory}
 */
proto.tensorflow.OpPerformance.OpMemory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setOutputMemoryList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHostTempMemory(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeviceTempMemory(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHostPersistentMemory(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDevicePersistentMemory(value);
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
proto.tensorflow.OpPerformance.OpMemory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.OpPerformance.OpMemory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.OpPerformance.OpMemory} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.OpPerformance.OpMemory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputMemoryList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getHostTempMemory();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDeviceTempMemory();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHostPersistentMemory();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDevicePersistentMemory();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * repeated int64 output_memory = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.OpPerformance.OpMemory.prototype.getOutputMemoryList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<number>} value */
proto.tensorflow.OpPerformance.OpMemory.prototype.setOutputMemoryList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.OpPerformance.OpMemory.prototype.addOutputMemory = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.tensorflow.OpPerformance.OpMemory.prototype.clearOutputMemoryList = function() {
  this.setOutputMemoryList([]);
};


/**
 * optional int64 host_temp_memory = 2;
 * @return {number}
 */
proto.tensorflow.OpPerformance.OpMemory.prototype.getHostTempMemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.OpPerformance.OpMemory.prototype.setHostTempMemory = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 device_temp_memory = 3;
 * @return {number}
 */
proto.tensorflow.OpPerformance.OpMemory.prototype.getDeviceTempMemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tensorflow.OpPerformance.OpMemory.prototype.setDeviceTempMemory = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 host_persistent_memory = 4;
 * @return {number}
 */
proto.tensorflow.OpPerformance.OpMemory.prototype.getHostPersistentMemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.tensorflow.OpPerformance.OpMemory.prototype.setHostPersistentMemory = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 device_persistent_memory = 5;
 * @return {number}
 */
proto.tensorflow.OpPerformance.OpMemory.prototype.getDevicePersistentMemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.tensorflow.OpPerformance.OpMemory.prototype.setDevicePersistentMemory = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional OpInfo op = 1;
 * @return {?proto.tensorflow.OpInfo}
 */
proto.tensorflow.OpPerformance.prototype.getOp = function() {
  return /** @type{?proto.tensorflow.OpInfo} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.OpInfo, 1));
};


/** @param {?proto.tensorflow.OpInfo|undefined} value */
proto.tensorflow.OpPerformance.prototype.setOp = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.OpPerformance.prototype.clearOp = function() {
  this.setOp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.OpPerformance.prototype.hasOp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string node = 5;
 * @return {string}
 */
proto.tensorflow.OpPerformance.prototype.getNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.tensorflow.OpPerformance.prototype.setNode = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 temporary_memory_size = 2;
 * @return {number}
 */
proto.tensorflow.OpPerformance.prototype.getTemporaryMemorySize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.OpPerformance.prototype.setTemporaryMemorySize = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 compute_cost = 3;
 * @return {number}
 */
proto.tensorflow.OpPerformance.prototype.getComputeCost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tensorflow.OpPerformance.prototype.setComputeCost = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 compute_time = 6;
 * @return {number}
 */
proto.tensorflow.OpPerformance.prototype.getComputeTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.tensorflow.OpPerformance.prototype.setComputeTime = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int64 memory_time = 7;
 * @return {number}
 */
proto.tensorflow.OpPerformance.prototype.getMemoryTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.tensorflow.OpPerformance.prototype.setMemoryTime = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional double compute_efficiency = 4;
 * @return {number}
 */
proto.tensorflow.OpPerformance.prototype.getComputeEfficiency = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.tensorflow.OpPerformance.prototype.setComputeEfficiency = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional double memory_efficiency = 8;
 * @return {number}
 */
proto.tensorflow.OpPerformance.prototype.getMemoryEfficiency = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.tensorflow.OpPerformance.prototype.setMemoryEfficiency = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional OpMemory op_memory = 9;
 * @return {?proto.tensorflow.OpPerformance.OpMemory}
 */
proto.tensorflow.OpPerformance.prototype.getOpMemory = function() {
  return /** @type{?proto.tensorflow.OpPerformance.OpMemory} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.OpPerformance.OpMemory, 9));
};


/** @param {?proto.tensorflow.OpPerformance.OpMemory|undefined} value */
proto.tensorflow.OpPerformance.prototype.setOpMemory = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.tensorflow.OpPerformance.prototype.clearOpMemory = function() {
  this.setOpMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.OpPerformance.prototype.hasOpMemory = function() {
  return jspb.Message.getField(this, 9) != null;
};


