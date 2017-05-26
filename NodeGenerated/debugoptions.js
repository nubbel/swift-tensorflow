/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.DebugOptions');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.DebugTensorWatch');


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
proto.tensorflow.DebugOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.DebugOptions.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.DebugOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.DebugOptions.displayName = 'proto.tensorflow.DebugOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.DebugOptions.repeatedFields_ = [4];



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
proto.tensorflow.DebugOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.DebugOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.DebugOptions} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.DebugOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    debugTensorWatchOptsList: jspb.Message.toObjectList(msg.getDebugTensorWatchOptsList(),
    proto.tensorflow.DebugTensorWatch.toObject, includeInstance),
    globalStep: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.tensorflow.DebugOptions}
 */
proto.tensorflow.DebugOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.DebugOptions;
  return proto.tensorflow.DebugOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.DebugOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.DebugOptions}
 */
proto.tensorflow.DebugOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.tensorflow.DebugTensorWatch;
      reader.readMessage(value,proto.tensorflow.DebugTensorWatch.deserializeBinaryFromReader);
      msg.addDebugTensorWatchOpts(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGlobalStep(value);
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
proto.tensorflow.DebugOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.DebugOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.DebugOptions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.DebugOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDebugTensorWatchOptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.tensorflow.DebugTensorWatch.serializeBinaryToWriter
    );
  }
  f = message.getGlobalStep();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * repeated DebugTensorWatch debug_tensor_watch_opts = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.DebugTensorWatch>}
 */
proto.tensorflow.DebugOptions.prototype.getDebugTensorWatchOptsList = function() {
  return /** @type{!Array.<!proto.tensorflow.DebugTensorWatch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.DebugTensorWatch, 4));
};


/** @param {!Array.<!proto.tensorflow.DebugTensorWatch>} value */
proto.tensorflow.DebugOptions.prototype.setDebugTensorWatchOptsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tensorflow.DebugTensorWatch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.DebugTensorWatch}
 */
proto.tensorflow.DebugOptions.prototype.addDebugTensorWatchOpts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tensorflow.DebugTensorWatch, opt_index);
};


proto.tensorflow.DebugOptions.prototype.clearDebugTensorWatchOptsList = function() {
  this.setDebugTensorWatchOptsList([]);
};


/**
 * optional int64 global_step = 10;
 * @return {number}
 */
proto.tensorflow.DebugOptions.prototype.getGlobalStep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.tensorflow.DebugOptions.prototype.setGlobalStep = function(value) {
  jspb.Message.setField(this, 10, value);
};


