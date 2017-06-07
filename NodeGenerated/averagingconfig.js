/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.boosted_trees.learner.AveragingConfig');

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
proto.tensorflow.boosted_trees.learner.AveragingConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tensorflow.boosted_trees.learner.AveragingConfig.oneofGroups_);
};
goog.inherits(proto.tensorflow.boosted_trees.learner.AveragingConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.boosted_trees.learner.AveragingConfig.displayName = 'proto.tensorflow.boosted_trees.learner.AveragingConfig';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.ConfigCase = {
  CONFIG_NOT_SET: 0,
  AVERAGE_LAST_N_TREES: 1,
  AVERAGE_LAST_PERCENT_TREES: 2
};

/**
 * @return {proto.tensorflow.boosted_trees.learner.AveragingConfig.ConfigCase}
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.getConfigCase = function() {
  return /** @type {proto.tensorflow.boosted_trees.learner.AveragingConfig.ConfigCase} */(jspb.Message.computeOneofCase(this, proto.tensorflow.boosted_trees.learner.AveragingConfig.oneofGroups_[0]));
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
proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.boosted_trees.learner.AveragingConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.boosted_trees.learner.AveragingConfig} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    averageLastNTrees: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    averageLastPercentTrees: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.tensorflow.boosted_trees.learner.AveragingConfig}
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.boosted_trees.learner.AveragingConfig;
  return proto.tensorflow.boosted_trees.learner.AveragingConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.boosted_trees.learner.AveragingConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.boosted_trees.learner.AveragingConfig}
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAverageLastNTrees(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAverageLastPercentTrees(value);
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
proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.boosted_trees.learner.AveragingConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.boosted_trees.learner.AveragingConfig} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float average_last_n_trees = 1;
 * @return {number}
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.getAverageLastNTrees = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.setAverageLastNTrees = function(value) {
  jspb.Message.setOneofField(this, 1, proto.tensorflow.boosted_trees.learner.AveragingConfig.oneofGroups_[0], value);
};


proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.clearAverageLastNTrees = function() {
  jspb.Message.setOneofField(this, 1, proto.tensorflow.boosted_trees.learner.AveragingConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.hasAverageLastNTrees = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float average_last_percent_trees = 2;
 * @return {number}
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.getAverageLastPercentTrees = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.setAverageLastPercentTrees = function(value) {
  jspb.Message.setOneofField(this, 2, proto.tensorflow.boosted_trees.learner.AveragingConfig.oneofGroups_[0], value);
};


proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.clearAverageLastPercentTrees = function() {
  jspb.Message.setOneofField(this, 2, proto.tensorflow.boosted_trees.learner.AveragingConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.boosted_trees.learner.AveragingConfig.prototype.hasAverageLastPercentTrees = function() {
  return jspb.Message.getField(this, 2) != null;
};

