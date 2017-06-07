/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.DeviceProperties');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');


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
proto.tensorflow.DeviceProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.DeviceProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.DeviceProperties.displayName = 'proto.tensorflow.DeviceProperties';
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
proto.tensorflow.DeviceProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.DeviceProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.DeviceProperties} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.DeviceProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    vendor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    model: jspb.Message.getFieldWithDefault(msg, 3, ""),
    frequency: jspb.Message.getFieldWithDefault(msg, 4, 0),
    numCores: jspb.Message.getFieldWithDefault(msg, 5, 0),
    environmentMap: (f = msg.getEnvironmentMap()) ? f.toObject(includeInstance, undefined) : [],
    numRegisters: jspb.Message.getFieldWithDefault(msg, 7, 0),
    l1CacheSize: jspb.Message.getFieldWithDefault(msg, 8, 0),
    l2CacheSize: jspb.Message.getFieldWithDefault(msg, 9, 0),
    l3CacheSize: jspb.Message.getFieldWithDefault(msg, 10, 0),
    sharedMemorySizePerMultiprocessor: jspb.Message.getFieldWithDefault(msg, 11, 0),
    memorySize: jspb.Message.getFieldWithDefault(msg, 12, 0),
    bandwidth: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.tensorflow.DeviceProperties}
 */
proto.tensorflow.DeviceProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.DeviceProperties;
  return proto.tensorflow.DeviceProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.DeviceProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.DeviceProperties}
 */
proto.tensorflow.DeviceProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVendor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrequency(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumCores(value);
      break;
    case 6:
      var value = msg.getEnvironmentMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumRegisters(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setL1CacheSize(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setL2CacheSize(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setL3CacheSize(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSharedMemorySizePerMultiprocessor(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemorySize(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBandwidth(value);
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
proto.tensorflow.DeviceProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.DeviceProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.DeviceProperties} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.DeviceProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVendor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFrequency();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getNumCores();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getEnvironmentMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getNumRegisters();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getL1CacheSize();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getL2CacheSize();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getL3CacheSize();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getSharedMemorySizePerMultiprocessor();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getMemorySize();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getBandwidth();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.tensorflow.DeviceProperties.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tensorflow.DeviceProperties.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string vendor = 2;
 * @return {string}
 */
proto.tensorflow.DeviceProperties.prototype.getVendor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tensorflow.DeviceProperties.prototype.setVendor = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string model = 3;
 * @return {string}
 */
proto.tensorflow.DeviceProperties.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tensorflow.DeviceProperties.prototype.setModel = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 frequency = 4;
 * @return {number}
 */
proto.tensorflow.DeviceProperties.prototype.getFrequency = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.tensorflow.DeviceProperties.prototype.setFrequency = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 num_cores = 5;
 * @return {number}
 */
proto.tensorflow.DeviceProperties.prototype.getNumCores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.tensorflow.DeviceProperties.prototype.setNumCores = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * map<string, string> environment = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.tensorflow.DeviceProperties.prototype.getEnvironmentMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.tensorflow.DeviceProperties.prototype.clearEnvironmentMap = function() {
  this.getEnvironmentMap().clear();
};


/**
 * optional int64 num_registers = 7;
 * @return {number}
 */
proto.tensorflow.DeviceProperties.prototype.getNumRegisters = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.tensorflow.DeviceProperties.prototype.setNumRegisters = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int64 l1_cache_size = 8;
 * @return {number}
 */
proto.tensorflow.DeviceProperties.prototype.getL1CacheSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.tensorflow.DeviceProperties.prototype.setL1CacheSize = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional int64 l2_cache_size = 9;
 * @return {number}
 */
proto.tensorflow.DeviceProperties.prototype.getL2CacheSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.tensorflow.DeviceProperties.prototype.setL2CacheSize = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional int64 l3_cache_size = 10;
 * @return {number}
 */
proto.tensorflow.DeviceProperties.prototype.getL3CacheSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.tensorflow.DeviceProperties.prototype.setL3CacheSize = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional int64 shared_memory_size_per_multiprocessor = 11;
 * @return {number}
 */
proto.tensorflow.DeviceProperties.prototype.getSharedMemorySizePerMultiprocessor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.tensorflow.DeviceProperties.prototype.setSharedMemorySizePerMultiprocessor = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional int64 memory_size = 12;
 * @return {number}
 */
proto.tensorflow.DeviceProperties.prototype.getMemorySize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.tensorflow.DeviceProperties.prototype.setMemorySize = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional int64 bandwidth = 13;
 * @return {number}
 */
proto.tensorflow.DeviceProperties.prototype.getBandwidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.tensorflow.DeviceProperties.prototype.setBandwidth = function(value) {
  jspb.Message.setField(this, 13, value);
};

