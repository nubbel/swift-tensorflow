/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.DebugTensorWatch');

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
proto.tensorflow.DebugTensorWatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.DebugTensorWatch.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.DebugTensorWatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.DebugTensorWatch.displayName = 'proto.tensorflow.DebugTensorWatch';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.DebugTensorWatch.repeatedFields_ = [3,4];



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
proto.tensorflow.DebugTensorWatch.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.DebugTensorWatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.DebugTensorWatch} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.DebugTensorWatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outputSlot: jspb.Message.getFieldWithDefault(msg, 2, 0),
    debugOpsList: jspb.Message.getField(msg, 3),
    debugUrlsList: jspb.Message.getField(msg, 4),
    tolerateDebugOpCreationFailures: jspb.Message.getFieldWithDefault(msg, 5, false)
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
 * @return {!proto.tensorflow.DebugTensorWatch}
 */
proto.tensorflow.DebugTensorWatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.DebugTensorWatch;
  return proto.tensorflow.DebugTensorWatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.DebugTensorWatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.DebugTensorWatch}
 */
proto.tensorflow.DebugTensorWatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOutputSlot(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addDebugOps(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDebugUrls(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTolerateDebugOpCreationFailures(value);
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
proto.tensorflow.DebugTensorWatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.DebugTensorWatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.DebugTensorWatch} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.DebugTensorWatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutputSlot();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDebugOpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDebugUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getTolerateDebugOpCreationFailures();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string node_name = 1;
 * @return {string}
 */
proto.tensorflow.DebugTensorWatch.prototype.getNodeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tensorflow.DebugTensorWatch.prototype.setNodeName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 output_slot = 2;
 * @return {number}
 */
proto.tensorflow.DebugTensorWatch.prototype.getOutputSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.DebugTensorWatch.prototype.setOutputSlot = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated string debug_ops = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.DebugTensorWatch.prototype.getDebugOpsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {!Array.<string>} value */
proto.tensorflow.DebugTensorWatch.prototype.setDebugOpsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.DebugTensorWatch.prototype.addDebugOps = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.tensorflow.DebugTensorWatch.prototype.clearDebugOpsList = function() {
  this.setDebugOpsList([]);
};


/**
 * repeated string debug_urls = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.DebugTensorWatch.prototype.getDebugUrlsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 4));
};


/** @param {!Array.<string>} value */
proto.tensorflow.DebugTensorWatch.prototype.setDebugUrlsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.DebugTensorWatch.prototype.addDebugUrls = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.tensorflow.DebugTensorWatch.prototype.clearDebugUrlsList = function() {
  this.setDebugUrlsList([]);
};


/**
 * optional bool tolerate_debug_op_creation_failures = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tensorflow.DebugTensorWatch.prototype.getTolerateDebugOpCreationFailures = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.tensorflow.DebugTensorWatch.prototype.setTolerateDebugOpCreationFailures = function(value) {
  jspb.Message.setField(this, 5, value);
};


