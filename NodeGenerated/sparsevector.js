/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.boosted_trees.trees.SparseVector');

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
proto.tensorflow.boosted_trees.trees.SparseVector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.boosted_trees.trees.SparseVector.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.boosted_trees.trees.SparseVector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.boosted_trees.trees.SparseVector.displayName = 'proto.tensorflow.boosted_trees.trees.SparseVector';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.boosted_trees.trees.SparseVector.repeatedFields_ = [1,2];



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
proto.tensorflow.boosted_trees.trees.SparseVector.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.boosted_trees.trees.SparseVector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.boosted_trees.trees.SparseVector} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.boosted_trees.trees.SparseVector.toObject = function(includeInstance, msg) {
  var f, obj = {
    indexList: jspb.Message.getField(msg, 1),
    valueList: jspb.Message.getRepeatedFloatingPointField(msg, 2)
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
 * @return {!proto.tensorflow.boosted_trees.trees.SparseVector}
 */
proto.tensorflow.boosted_trees.trees.SparseVector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.boosted_trees.trees.SparseVector;
  return proto.tensorflow.boosted_trees.trees.SparseVector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.boosted_trees.trees.SparseVector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.boosted_trees.trees.SparseVector}
 */
proto.tensorflow.boosted_trees.trees.SparseVector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setIndexList(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedFloat());
      msg.setValueList(value);
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
proto.tensorflow.boosted_trees.trees.SparseVector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.boosted_trees.trees.SparseVector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.boosted_trees.trees.SparseVector} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.boosted_trees.trees.SparseVector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndexList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = message.getValueList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
};


/**
 * repeated int32 index = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.boosted_trees.trees.SparseVector.prototype.getIndexList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<number>} value */
proto.tensorflow.boosted_trees.trees.SparseVector.prototype.setIndexList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.boosted_trees.trees.SparseVector.prototype.addIndex = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.tensorflow.boosted_trees.trees.SparseVector.prototype.clearIndexList = function() {
  this.setIndexList([]);
};


/**
 * repeated float value = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.boosted_trees.trees.SparseVector.prototype.getValueList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/** @param {!Array.<number>} value */
proto.tensorflow.boosted_trees.trees.SparseVector.prototype.setValueList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.boosted_trees.trees.SparseVector.prototype.addValue = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.tensorflow.boosted_trees.trees.SparseVector.prototype.clearValueList = function() {
  this.setValueList([]);
};

