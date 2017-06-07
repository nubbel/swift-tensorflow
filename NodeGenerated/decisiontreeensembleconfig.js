/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.boosted_trees.trees.DecisionTreeConfig');
goog.require('proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata');
goog.require('proto.tensorflow.boosted_trees.trees.GrowingMetadata');


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
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.displayName = 'proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.repeatedFields_ = [1,2,3];



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
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    treesList: jspb.Message.toObjectList(msg.getTreesList(),
    proto.tensorflow.boosted_trees.trees.DecisionTreeConfig.toObject, includeInstance),
    treeWeightsList: jspb.Message.getRepeatedFloatingPointField(msg, 2),
    treeMetadataList: jspb.Message.toObjectList(msg.getTreeMetadataList(),
    proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata.toObject, includeInstance),
    growingMetadata: (f = msg.getGrowingMetadata()) && proto.tensorflow.boosted_trees.trees.GrowingMetadata.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig}
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig;
  return proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig}
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.boosted_trees.trees.DecisionTreeConfig;
      reader.readMessage(value,proto.tensorflow.boosted_trees.trees.DecisionTreeConfig.deserializeBinaryFromReader);
      msg.addTrees(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedFloat());
      msg.setTreeWeightsList(value);
      break;
    case 3:
      var value = new proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata;
      reader.readMessage(value,proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata.deserializeBinaryFromReader);
      msg.addTreeMetadata(value);
      break;
    case 4:
      var value = new proto.tensorflow.boosted_trees.trees.GrowingMetadata;
      reader.readMessage(value,proto.tensorflow.boosted_trees.trees.GrowingMetadata.deserializeBinaryFromReader);
      msg.setGrowingMetadata(value);
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
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTreesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.boosted_trees.trees.DecisionTreeConfig.serializeBinaryToWriter
    );
  }
  f = message.getTreeWeightsList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
  f = message.getTreeMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata.serializeBinaryToWriter
    );
  }
  f = message.getGrowingMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tensorflow.boosted_trees.trees.GrowingMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DecisionTreeConfig trees = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.boosted_trees.trees.DecisionTreeConfig>}
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.getTreesList = function() {
  return /** @type{!Array.<!proto.tensorflow.boosted_trees.trees.DecisionTreeConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.boosted_trees.trees.DecisionTreeConfig, 1));
};


/** @param {!Array.<!proto.tensorflow.boosted_trees.trees.DecisionTreeConfig>} value */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.setTreesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.boosted_trees.trees.DecisionTreeConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.boosted_trees.trees.DecisionTreeConfig}
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.addTrees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.boosted_trees.trees.DecisionTreeConfig, opt_index);
};


proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.clearTreesList = function() {
  this.setTreesList([]);
};


/**
 * repeated float tree_weights = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.getTreeWeightsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/** @param {!Array.<number>} value */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.setTreeWeightsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.addTreeWeights = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.clearTreeWeightsList = function() {
  this.setTreeWeightsList([]);
};


/**
 * repeated DecisionTreeMetadata tree_metadata = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata>}
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.getTreeMetadataList = function() {
  return /** @type{!Array.<!proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata, 3));
};


/** @param {!Array.<!proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata>} value */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.setTreeMetadataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata}
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.addTreeMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tensorflow.boosted_trees.trees.DecisionTreeMetadata, opt_index);
};


proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.clearTreeMetadataList = function() {
  this.setTreeMetadataList([]);
};


/**
 * optional GrowingMetadata growing_metadata = 4;
 * @return {?proto.tensorflow.boosted_trees.trees.GrowingMetadata}
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.getGrowingMetadata = function() {
  return /** @type{?proto.tensorflow.boosted_trees.trees.GrowingMetadata} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.boosted_trees.trees.GrowingMetadata, 4));
};


/** @param {?proto.tensorflow.boosted_trees.trees.GrowingMetadata|undefined} value */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.setGrowingMetadata = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.clearGrowingMetadata = function() {
  this.setGrowingMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig.prototype.hasGrowingMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};

