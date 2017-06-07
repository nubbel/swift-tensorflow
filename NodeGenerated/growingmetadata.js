/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.boosted_trees.trees.GrowingMetadata');

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
proto.tensorflow.boosted_trees.trees.GrowingMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.boosted_trees.trees.GrowingMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.boosted_trees.trees.GrowingMetadata.displayName = 'proto.tensorflow.boosted_trees.trees.GrowingMetadata';
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
proto.tensorflow.boosted_trees.trees.GrowingMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.boosted_trees.trees.GrowingMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.boosted_trees.trees.GrowingMetadata} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.boosted_trees.trees.GrowingMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    numTreesAttempted: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numLayersAttempted: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tensorflow.boosted_trees.trees.GrowingMetadata}
 */
proto.tensorflow.boosted_trees.trees.GrowingMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.boosted_trees.trees.GrowingMetadata;
  return proto.tensorflow.boosted_trees.trees.GrowingMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.boosted_trees.trees.GrowingMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.boosted_trees.trees.GrowingMetadata}
 */
proto.tensorflow.boosted_trees.trees.GrowingMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumTreesAttempted(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumLayersAttempted(value);
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
proto.tensorflow.boosted_trees.trees.GrowingMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.boosted_trees.trees.GrowingMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.boosted_trees.trees.GrowingMetadata} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.boosted_trees.trees.GrowingMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumTreesAttempted();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNumLayersAttempted();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 num_trees_attempted = 1;
 * @return {number}
 */
proto.tensorflow.boosted_trees.trees.GrowingMetadata.prototype.getNumTreesAttempted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tensorflow.boosted_trees.trees.GrowingMetadata.prototype.setNumTreesAttempted = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 num_layers_attempted = 2;
 * @return {number}
 */
proto.tensorflow.boosted_trees.trees.GrowingMetadata.prototype.getNumLayersAttempted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.boosted_trees.trees.GrowingMetadata.prototype.setNumLayersAttempted = function(value) {
  jspb.Message.setField(this, 2, value);
};

