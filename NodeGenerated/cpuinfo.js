/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.CPUInfo');

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
proto.tensorflow.CPUInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.CPUInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.CPUInfo.displayName = 'proto.tensorflow.CPUInfo';
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
proto.tensorflow.CPUInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CPUInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CPUInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.CPUInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    numCores: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numCoresAllowed: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mhzPerCpu: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    cpuInfo: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cpuGovernor: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cacheSizeMap: (f = msg.getCacheSizeMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.tensorflow.CPUInfo}
 */
proto.tensorflow.CPUInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CPUInfo;
  return proto.tensorflow.CPUInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CPUInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CPUInfo}
 */
proto.tensorflow.CPUInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumCores(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumCoresAllowed(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMhzPerCpu(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpuInfo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpuGovernor(value);
      break;
    case 6:
      var value = msg.getCacheSizeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64);
         });
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
proto.tensorflow.CPUInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CPUInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CPUInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.CPUInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumCores();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNumCoresAllowed();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMhzPerCpu();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getCpuInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCpuGovernor();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCacheSizeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
};


/**
 * optional int64 num_cores = 1;
 * @return {number}
 */
proto.tensorflow.CPUInfo.prototype.getNumCores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tensorflow.CPUInfo.prototype.setNumCores = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 num_cores_allowed = 2;
 * @return {number}
 */
proto.tensorflow.CPUInfo.prototype.getNumCoresAllowed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.CPUInfo.prototype.setNumCoresAllowed = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional double mhz_per_cpu = 3;
 * @return {number}
 */
proto.tensorflow.CPUInfo.prototype.getMhzPerCpu = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.tensorflow.CPUInfo.prototype.setMhzPerCpu = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string cpu_info = 4;
 * @return {string}
 */
proto.tensorflow.CPUInfo.prototype.getCpuInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.tensorflow.CPUInfo.prototype.setCpuInfo = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string cpu_governor = 5;
 * @return {string}
 */
proto.tensorflow.CPUInfo.prototype.getCpuGovernor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.tensorflow.CPUInfo.prototype.setCpuGovernor = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * map<string, int64> cache_size = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.tensorflow.CPUInfo.prototype.getCacheSizeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.tensorflow.CPUInfo.prototype.clearCacheSizeMap = function() {
  this.getCacheSizeMap().clear();
};


