/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit');

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
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.displayName = 'proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.repeatedFields_ = [2];



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
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureColumn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    featureIdsList: jspb.Message.getField(msg, 2),
    leftId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rightId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit}
 */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit;
  return proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit}
 */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeatureColumn(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setFeatureIdsList(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeftId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRightId(value);
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
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureColumn();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFeatureIdsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = message.getLeftId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRightId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 feature_column = 1;
 * @return {number}
 */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.getFeatureColumn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.setFeatureColumn = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated int64 feature_ids = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.getFeatureIdsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 2));
};


/** @param {!Array.<number>} value */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.setFeatureIdsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.addFeatureIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.clearFeatureIdsList = function() {
  this.setFeatureIdsList([]);
};


/**
 * optional int32 left_id = 3;
 * @return {number}
 */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.getLeftId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.setLeftId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 right_id = 4;
 * @return {number}
 */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.getRightId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit.prototype.setRightId = function(value) {
  jspb.Message.setField(this, 4, value);
};


