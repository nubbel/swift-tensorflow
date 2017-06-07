/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.RunGraphResponse');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.CostGraphDef');
goog.require('proto.tensorflow.NamedTensorProto');
goog.require('proto.tensorflow.StepStats');


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
proto.tensorflow.RunGraphResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.RunGraphResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.RunGraphResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.RunGraphResponse.displayName = 'proto.tensorflow.RunGraphResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.RunGraphResponse.repeatedFields_ = [1];



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
proto.tensorflow.RunGraphResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RunGraphResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RunGraphResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.RunGraphResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recvList: jspb.Message.toObjectList(msg.getRecvList(),
    proto.tensorflow.NamedTensorProto.toObject, includeInstance),
    stepStats: (f = msg.getStepStats()) && proto.tensorflow.StepStats.toObject(includeInstance, f),
    costGraph: (f = msg.getCostGraph()) && proto.tensorflow.CostGraphDef.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.RunGraphResponse}
 */
proto.tensorflow.RunGraphResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RunGraphResponse;
  return proto.tensorflow.RunGraphResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RunGraphResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RunGraphResponse}
 */
proto.tensorflow.RunGraphResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.NamedTensorProto;
      reader.readMessage(value,proto.tensorflow.NamedTensorProto.deserializeBinaryFromReader);
      msg.addRecv(value);
      break;
    case 2:
      var value = new proto.tensorflow.StepStats;
      reader.readMessage(value,proto.tensorflow.StepStats.deserializeBinaryFromReader);
      msg.setStepStats(value);
      break;
    case 3:
      var value = new proto.tensorflow.CostGraphDef;
      reader.readMessage(value,proto.tensorflow.CostGraphDef.deserializeBinaryFromReader);
      msg.setCostGraph(value);
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
proto.tensorflow.RunGraphResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RunGraphResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RunGraphResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.RunGraphResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecvList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.NamedTensorProto.serializeBinaryToWriter
    );
  }
  f = message.getStepStats();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.StepStats.serializeBinaryToWriter
    );
  }
  f = message.getCostGraph();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tensorflow.CostGraphDef.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NamedTensorProto recv = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.NamedTensorProto>}
 */
proto.tensorflow.RunGraphResponse.prototype.getRecvList = function() {
  return /** @type{!Array.<!proto.tensorflow.NamedTensorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.NamedTensorProto, 1));
};


/** @param {!Array.<!proto.tensorflow.NamedTensorProto>} value */
proto.tensorflow.RunGraphResponse.prototype.setRecvList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.NamedTensorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.NamedTensorProto}
 */
proto.tensorflow.RunGraphResponse.prototype.addRecv = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.NamedTensorProto, opt_index);
};


proto.tensorflow.RunGraphResponse.prototype.clearRecvList = function() {
  this.setRecvList([]);
};


/**
 * optional StepStats step_stats = 2;
 * @return {?proto.tensorflow.StepStats}
 */
proto.tensorflow.RunGraphResponse.prototype.getStepStats = function() {
  return /** @type{?proto.tensorflow.StepStats} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.StepStats, 2));
};


/** @param {?proto.tensorflow.StepStats|undefined} value */
proto.tensorflow.RunGraphResponse.prototype.setStepStats = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.RunGraphResponse.prototype.clearStepStats = function() {
  this.setStepStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.RunGraphResponse.prototype.hasStepStats = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CostGraphDef cost_graph = 3;
 * @return {?proto.tensorflow.CostGraphDef}
 */
proto.tensorflow.RunGraphResponse.prototype.getCostGraph = function() {
  return /** @type{?proto.tensorflow.CostGraphDef} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.CostGraphDef, 3));
};


/** @param {?proto.tensorflow.CostGraphDef|undefined} value */
proto.tensorflow.RunGraphResponse.prototype.setCostGraph = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.tensorflow.RunGraphResponse.prototype.clearCostGraph = function() {
  this.setCostGraph(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.RunGraphResponse.prototype.hasCostGraph = function() {
  return jspb.Message.getField(this, 3) != null;
};

