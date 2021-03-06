/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.MemoryStats');

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
proto.tensorflow.MemoryStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.MemoryStats.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.MemoryStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.MemoryStats.displayName = 'proto.tensorflow.MemoryStats';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.MemoryStats.repeatedFields_ = [5,6];



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
proto.tensorflow.MemoryStats.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.MemoryStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.MemoryStats} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.MemoryStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostTempMemorySize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deviceTempMemorySize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hostPersistentMemorySize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    devicePersistentMemorySize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hostPersistentTensorAllocIdsList: jspb.Message.getField(msg, 5),
    devicePersistentTensorAllocIdsList: jspb.Message.getField(msg, 6)
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
 * @return {!proto.tensorflow.MemoryStats}
 */
proto.tensorflow.MemoryStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.MemoryStats;
  return proto.tensorflow.MemoryStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.MemoryStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.MemoryStats}
 */
proto.tensorflow.MemoryStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHostTempMemorySize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeviceTempMemorySize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHostPersistentMemorySize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDevicePersistentMemorySize(value);
      break;
    case 5:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setHostPersistentTensorAllocIdsList(value);
      break;
    case 6:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setDevicePersistentTensorAllocIdsList(value);
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
proto.tensorflow.MemoryStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.MemoryStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.MemoryStats} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.MemoryStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostTempMemorySize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDeviceTempMemorySize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHostPersistentMemorySize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDevicePersistentMemorySize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getHostPersistentTensorAllocIdsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      5,
      f
    );
  }
  f = message.getDevicePersistentTensorAllocIdsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 host_temp_memory_size = 1;
 * @return {number}
 */
proto.tensorflow.MemoryStats.prototype.getHostTempMemorySize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tensorflow.MemoryStats.prototype.setHostTempMemorySize = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 device_temp_memory_size = 2;
 * @return {number}
 */
proto.tensorflow.MemoryStats.prototype.getDeviceTempMemorySize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.MemoryStats.prototype.setDeviceTempMemorySize = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 host_persistent_memory_size = 3;
 * @return {number}
 */
proto.tensorflow.MemoryStats.prototype.getHostPersistentMemorySize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tensorflow.MemoryStats.prototype.setHostPersistentMemorySize = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 device_persistent_memory_size = 4;
 * @return {number}
 */
proto.tensorflow.MemoryStats.prototype.getDevicePersistentMemorySize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.tensorflow.MemoryStats.prototype.setDevicePersistentMemorySize = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated int64 host_persistent_tensor_alloc_ids = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.MemoryStats.prototype.getHostPersistentTensorAllocIdsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 5));
};


/** @param {!Array.<number>} value */
proto.tensorflow.MemoryStats.prototype.setHostPersistentTensorAllocIdsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.MemoryStats.prototype.addHostPersistentTensorAllocIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.tensorflow.MemoryStats.prototype.clearHostPersistentTensorAllocIdsList = function() {
  this.setHostPersistentTensorAllocIdsList([]);
};


/**
 * repeated int64 device_persistent_tensor_alloc_ids = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.MemoryStats.prototype.getDevicePersistentTensorAllocIdsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 6));
};


/** @param {!Array.<number>} value */
proto.tensorflow.MemoryStats.prototype.setDevicePersistentTensorAllocIdsList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.MemoryStats.prototype.addDevicePersistentTensorAllocIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.tensorflow.MemoryStats.prototype.clearDevicePersistentTensorAllocIdsList = function() {
  this.setDevicePersistentTensorAllocIdsList([]);
};


