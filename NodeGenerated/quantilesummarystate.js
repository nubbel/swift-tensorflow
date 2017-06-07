/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.boosted_trees.QuantileSummaryState');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.boosted_trees.QuantileEntry');


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
proto.boosted_trees.QuantileSummaryState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.boosted_trees.QuantileSummaryState.repeatedFields_, null);
};
goog.inherits(proto.boosted_trees.QuantileSummaryState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.boosted_trees.QuantileSummaryState.displayName = 'proto.boosted_trees.QuantileSummaryState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.boosted_trees.QuantileSummaryState.repeatedFields_ = [1];



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
proto.boosted_trees.QuantileSummaryState.prototype.toObject = function(opt_includeInstance) {
  return proto.boosted_trees.QuantileSummaryState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.boosted_trees.QuantileSummaryState} msg The msg instance to transform.
 * @return {!Object}
 */
proto.boosted_trees.QuantileSummaryState.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.boosted_trees.QuantileEntry.toObject, includeInstance)
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
 * @return {!proto.boosted_trees.QuantileSummaryState}
 */
proto.boosted_trees.QuantileSummaryState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.boosted_trees.QuantileSummaryState;
  return proto.boosted_trees.QuantileSummaryState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.boosted_trees.QuantileSummaryState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.boosted_trees.QuantileSummaryState}
 */
proto.boosted_trees.QuantileSummaryState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.boosted_trees.QuantileEntry;
      reader.readMessage(value,proto.boosted_trees.QuantileEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
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
proto.boosted_trees.QuantileSummaryState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.boosted_trees.QuantileSummaryState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.boosted_trees.QuantileSummaryState} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.boosted_trees.QuantileSummaryState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.boosted_trees.QuantileEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated QuantileEntry entries = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.boosted_trees.QuantileEntry>}
 */
proto.boosted_trees.QuantileSummaryState.prototype.getEntriesList = function() {
  return /** @type{!Array.<!proto.boosted_trees.QuantileEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.boosted_trees.QuantileEntry, 1));
};


/** @param {!Array.<!proto.boosted_trees.QuantileEntry>} value */
proto.boosted_trees.QuantileSummaryState.prototype.setEntriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.boosted_trees.QuantileEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.boosted_trees.QuantileEntry}
 */
proto.boosted_trees.QuantileSummaryState.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.boosted_trees.QuantileEntry, opt_index);
};


proto.boosted_trees.QuantileSummaryState.prototype.clearEntriesList = function() {
  this.setEntriesList([]);
};

