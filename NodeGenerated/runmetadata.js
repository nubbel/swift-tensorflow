/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.RunMetadata');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.CostGraphDef');
goog.require('proto.tensorflow.GraphDef');
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
proto.tensorflow.RunMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.RunMetadata.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.RunMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.RunMetadata.displayName = 'proto.tensorflow.RunMetadata';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.RunMetadata.repeatedFields_ = [3];



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
proto.tensorflow.RunMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RunMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RunMetadata} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.RunMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepStats: (f = msg.getStepStats()) && proto.tensorflow.StepStats.toObject(includeInstance, f),
    costGraph: (f = msg.getCostGraph()) && proto.tensorflow.CostGraphDef.toObject(includeInstance, f),
    partitionGraphsList: jspb.Message.toObjectList(msg.getPartitionGraphsList(),
    proto.tensorflow.GraphDef.toObject, includeInstance)
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
 * @return {!proto.tensorflow.RunMetadata}
 */
proto.tensorflow.RunMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RunMetadata;
  return proto.tensorflow.RunMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RunMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RunMetadata}
 */
proto.tensorflow.RunMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.StepStats;
      reader.readMessage(value,proto.tensorflow.StepStats.deserializeBinaryFromReader);
      msg.setStepStats(value);
      break;
    case 2:
      var value = new proto.tensorflow.CostGraphDef;
      reader.readMessage(value,proto.tensorflow.CostGraphDef.deserializeBinaryFromReader);
      msg.setCostGraph(value);
      break;
    case 3:
      var value = new proto.tensorflow.GraphDef;
      reader.readMessage(value,proto.tensorflow.GraphDef.deserializeBinaryFromReader);
      msg.addPartitionGraphs(value);
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
proto.tensorflow.RunMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RunMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RunMetadata} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.RunMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepStats();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.StepStats.serializeBinaryToWriter
    );
  }
  f = message.getCostGraph();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.CostGraphDef.serializeBinaryToWriter
    );
  }
  f = message.getPartitionGraphsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tensorflow.GraphDef.serializeBinaryToWriter
    );
  }
};


/**
 * optional StepStats step_stats = 1;
 * @return {?proto.tensorflow.StepStats}
 */
proto.tensorflow.RunMetadata.prototype.getStepStats = function() {
  return /** @type{?proto.tensorflow.StepStats} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.StepStats, 1));
};


/** @param {?proto.tensorflow.StepStats|undefined} value */
proto.tensorflow.RunMetadata.prototype.setStepStats = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.RunMetadata.prototype.clearStepStats = function() {
  this.setStepStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.RunMetadata.prototype.hasStepStats = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CostGraphDef cost_graph = 2;
 * @return {?proto.tensorflow.CostGraphDef}
 */
proto.tensorflow.RunMetadata.prototype.getCostGraph = function() {
  return /** @type{?proto.tensorflow.CostGraphDef} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.CostGraphDef, 2));
};


/** @param {?proto.tensorflow.CostGraphDef|undefined} value */
proto.tensorflow.RunMetadata.prototype.setCostGraph = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.RunMetadata.prototype.clearCostGraph = function() {
  this.setCostGraph(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.RunMetadata.prototype.hasCostGraph = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated GraphDef partition_graphs = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.GraphDef>}
 */
proto.tensorflow.RunMetadata.prototype.getPartitionGraphsList = function() {
  return /** @type{!Array.<!proto.tensorflow.GraphDef>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.GraphDef, 3));
};


/** @param {!Array.<!proto.tensorflow.GraphDef>} value */
proto.tensorflow.RunMetadata.prototype.setPartitionGraphsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tensorflow.GraphDef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.GraphDef}
 */
proto.tensorflow.RunMetadata.prototype.addPartitionGraphs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tensorflow.GraphDef, opt_index);
};


proto.tensorflow.RunMetadata.prototype.clearPartitionGraphsList = function() {
  this.setPartitionGraphsList([]);
};


