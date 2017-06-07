/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.ConfigProto');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('proto.tensorflow.ClusterDef');
goog.require('proto.tensorflow.GPUOptions');
goog.require('proto.tensorflow.GraphOptions');
goog.require('proto.tensorflow.RPCOptions');
goog.require('proto.tensorflow.ThreadPoolOptionProto');


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
proto.tensorflow.ConfigProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.ConfigProto.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.ConfigProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.ConfigProto.displayName = 'proto.tensorflow.ConfigProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.ConfigProto.repeatedFields_ = [12,4];



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
proto.tensorflow.ConfigProto.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.ConfigProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.ConfigProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.ConfigProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceCountMap: (f = msg.getDeviceCountMap()) ? f.toObject(includeInstance, undefined) : [],
    intraOpParallelismThreads: jspb.Message.getFieldWithDefault(msg, 2, 0),
    interOpParallelismThreads: jspb.Message.getFieldWithDefault(msg, 5, 0),
    usePerSessionThreads: jspb.Message.getFieldWithDefault(msg, 9, false),
    sessionInterOpThreadPoolList: jspb.Message.toObjectList(msg.getSessionInterOpThreadPoolList(),
    proto.tensorflow.ThreadPoolOptionProto.toObject, includeInstance),
    placementPeriod: jspb.Message.getFieldWithDefault(msg, 3, 0),
    deviceFiltersList: jspb.Message.getField(msg, 4),
    gpuOptions: (f = msg.getGpuOptions()) && proto.tensorflow.GPUOptions.toObject(includeInstance, f),
    allowSoftPlacement: jspb.Message.getFieldWithDefault(msg, 7, false),
    logDevicePlacement: jspb.Message.getFieldWithDefault(msg, 8, false),
    graphOptions: (f = msg.getGraphOptions()) && proto.tensorflow.GraphOptions.toObject(includeInstance, f),
    operationTimeoutInMs: jspb.Message.getFieldWithDefault(msg, 11, 0),
    rpcOptions: (f = msg.getRpcOptions()) && proto.tensorflow.RPCOptions.toObject(includeInstance, f),
    clusterDef: (f = msg.getClusterDef()) && proto.tensorflow.ClusterDef.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.ConfigProto}
 */
proto.tensorflow.ConfigProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.ConfigProto;
  return proto.tensorflow.ConfigProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.ConfigProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.ConfigProto}
 */
proto.tensorflow.ConfigProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getDeviceCountMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32);
         });
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntraOpParallelismThreads(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInterOpParallelismThreads(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsePerSessionThreads(value);
      break;
    case 12:
      var value = new proto.tensorflow.ThreadPoolOptionProto;
      reader.readMessage(value,proto.tensorflow.ThreadPoolOptionProto.deserializeBinaryFromReader);
      msg.addSessionInterOpThreadPool(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlacementPeriod(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeviceFilters(value);
      break;
    case 6:
      var value = new proto.tensorflow.GPUOptions;
      reader.readMessage(value,proto.tensorflow.GPUOptions.deserializeBinaryFromReader);
      msg.setGpuOptions(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowSoftPlacement(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLogDevicePlacement(value);
      break;
    case 10:
      var value = new proto.tensorflow.GraphOptions;
      reader.readMessage(value,proto.tensorflow.GraphOptions.deserializeBinaryFromReader);
      msg.setGraphOptions(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationTimeoutInMs(value);
      break;
    case 13:
      var value = new proto.tensorflow.RPCOptions;
      reader.readMessage(value,proto.tensorflow.RPCOptions.deserializeBinaryFromReader);
      msg.setRpcOptions(value);
      break;
    case 14:
      var value = new proto.tensorflow.ClusterDef;
      reader.readMessage(value,proto.tensorflow.ClusterDef.deserializeBinaryFromReader);
      msg.setClusterDef(value);
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
proto.tensorflow.ConfigProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.ConfigProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.ConfigProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.ConfigProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceCountMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getIntraOpParallelismThreads();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInterOpParallelismThreads();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getUsePerSessionThreads();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getSessionInterOpThreadPoolList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.tensorflow.ThreadPoolOptionProto.serializeBinaryToWriter
    );
  }
  f = message.getPlacementPeriod();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDeviceFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getGpuOptions();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tensorflow.GPUOptions.serializeBinaryToWriter
    );
  }
  f = message.getAllowSoftPlacement();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getLogDevicePlacement();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getGraphOptions();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.tensorflow.GraphOptions.serializeBinaryToWriter
    );
  }
  f = message.getOperationTimeoutInMs();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getRpcOptions();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.tensorflow.RPCOptions.serializeBinaryToWriter
    );
  }
  f = message.getClusterDef();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.tensorflow.ClusterDef.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, int32> device_count = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.tensorflow.ConfigProto.prototype.getDeviceCountMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


proto.tensorflow.ConfigProto.prototype.clearDeviceCountMap = function() {
  this.getDeviceCountMap().clear();
};


/**
 * optional int32 intra_op_parallelism_threads = 2;
 * @return {number}
 */
proto.tensorflow.ConfigProto.prototype.getIntraOpParallelismThreads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.ConfigProto.prototype.setIntraOpParallelismThreads = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 inter_op_parallelism_threads = 5;
 * @return {number}
 */
proto.tensorflow.ConfigProto.prototype.getInterOpParallelismThreads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.tensorflow.ConfigProto.prototype.setInterOpParallelismThreads = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional bool use_per_session_threads = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tensorflow.ConfigProto.prototype.getUsePerSessionThreads = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.tensorflow.ConfigProto.prototype.setUsePerSessionThreads = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * repeated ThreadPoolOptionProto session_inter_op_thread_pool = 12;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.ThreadPoolOptionProto>}
 */
proto.tensorflow.ConfigProto.prototype.getSessionInterOpThreadPoolList = function() {
  return /** @type{!Array.<!proto.tensorflow.ThreadPoolOptionProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.ThreadPoolOptionProto, 12));
};


/** @param {!Array.<!proto.tensorflow.ThreadPoolOptionProto>} value */
proto.tensorflow.ConfigProto.prototype.setSessionInterOpThreadPoolList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.tensorflow.ThreadPoolOptionProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.ThreadPoolOptionProto}
 */
proto.tensorflow.ConfigProto.prototype.addSessionInterOpThreadPool = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.tensorflow.ThreadPoolOptionProto, opt_index);
};


proto.tensorflow.ConfigProto.prototype.clearSessionInterOpThreadPoolList = function() {
  this.setSessionInterOpThreadPoolList([]);
};


/**
 * optional int32 placement_period = 3;
 * @return {number}
 */
proto.tensorflow.ConfigProto.prototype.getPlacementPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tensorflow.ConfigProto.prototype.setPlacementPeriod = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated string device_filters = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.ConfigProto.prototype.getDeviceFiltersList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 4));
};


/** @param {!Array.<string>} value */
proto.tensorflow.ConfigProto.prototype.setDeviceFiltersList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.ConfigProto.prototype.addDeviceFilters = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.tensorflow.ConfigProto.prototype.clearDeviceFiltersList = function() {
  this.setDeviceFiltersList([]);
};


/**
 * optional GPUOptions gpu_options = 6;
 * @return {?proto.tensorflow.GPUOptions}
 */
proto.tensorflow.ConfigProto.prototype.getGpuOptions = function() {
  return /** @type{?proto.tensorflow.GPUOptions} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.GPUOptions, 6));
};


/** @param {?proto.tensorflow.GPUOptions|undefined} value */
proto.tensorflow.ConfigProto.prototype.setGpuOptions = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.tensorflow.ConfigProto.prototype.clearGpuOptions = function() {
  this.setGpuOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.ConfigProto.prototype.hasGpuOptions = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool allow_soft_placement = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tensorflow.ConfigProto.prototype.getAllowSoftPlacement = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.tensorflow.ConfigProto.prototype.setAllowSoftPlacement = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional bool log_device_placement = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tensorflow.ConfigProto.prototype.getLogDevicePlacement = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.tensorflow.ConfigProto.prototype.setLogDevicePlacement = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional GraphOptions graph_options = 10;
 * @return {?proto.tensorflow.GraphOptions}
 */
proto.tensorflow.ConfigProto.prototype.getGraphOptions = function() {
  return /** @type{?proto.tensorflow.GraphOptions} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.GraphOptions, 10));
};


/** @param {?proto.tensorflow.GraphOptions|undefined} value */
proto.tensorflow.ConfigProto.prototype.setGraphOptions = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.tensorflow.ConfigProto.prototype.clearGraphOptions = function() {
  this.setGraphOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.ConfigProto.prototype.hasGraphOptions = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 operation_timeout_in_ms = 11;
 * @return {number}
 */
proto.tensorflow.ConfigProto.prototype.getOperationTimeoutInMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.tensorflow.ConfigProto.prototype.setOperationTimeoutInMs = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional RPCOptions rpc_options = 13;
 * @return {?proto.tensorflow.RPCOptions}
 */
proto.tensorflow.ConfigProto.prototype.getRpcOptions = function() {
  return /** @type{?proto.tensorflow.RPCOptions} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.RPCOptions, 13));
};


/** @param {?proto.tensorflow.RPCOptions|undefined} value */
proto.tensorflow.ConfigProto.prototype.setRpcOptions = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.tensorflow.ConfigProto.prototype.clearRpcOptions = function() {
  this.setRpcOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.ConfigProto.prototype.hasRpcOptions = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ClusterDef cluster_def = 14;
 * @return {?proto.tensorflow.ClusterDef}
 */
proto.tensorflow.ConfigProto.prototype.getClusterDef = function() {
  return /** @type{?proto.tensorflow.ClusterDef} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.ClusterDef, 14));
};


/** @param {?proto.tensorflow.ClusterDef|undefined} value */
proto.tensorflow.ConfigProto.prototype.setClusterDef = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


proto.tensorflow.ConfigProto.prototype.clearClusterDef = function() {
  this.setClusterDef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.ConfigProto.prototype.hasClusterDef = function() {
  return jspb.Message.getField(this, 14) != null;
};

