/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.contrib.tensorboard.TraceInfo');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.contrib.tensorboard.FileInfo');
goog.require('proto.tensorflow.contrib.tensorboard.OpInfo');


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
proto.tensorflow.contrib.tensorboard.TraceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.contrib.tensorboard.TraceInfo.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.contrib.tensorboard.TraceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.contrib.tensorboard.TraceInfo.displayName = 'proto.tensorflow.contrib.tensorboard.TraceInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.contrib.tensorboard.TraceInfo.repeatedFields_ = [1,2];



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
proto.tensorflow.contrib.tensorboard.TraceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.contrib.tensorboard.TraceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.contrib.tensorboard.TraceInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.contrib.tensorboard.TraceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    opsList: jspb.Message.toObjectList(msg.getOpsList(),
    proto.tensorflow.contrib.tensorboard.OpInfo.toObject, includeInstance),
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    proto.tensorflow.contrib.tensorboard.FileInfo.toObject, includeInstance)
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
 * @return {!proto.tensorflow.contrib.tensorboard.TraceInfo}
 */
proto.tensorflow.contrib.tensorboard.TraceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.contrib.tensorboard.TraceInfo;
  return proto.tensorflow.contrib.tensorboard.TraceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.contrib.tensorboard.TraceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.contrib.tensorboard.TraceInfo}
 */
proto.tensorflow.contrib.tensorboard.TraceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.contrib.tensorboard.OpInfo;
      reader.readMessage(value,proto.tensorflow.contrib.tensorboard.OpInfo.deserializeBinaryFromReader);
      msg.addOps(value);
      break;
    case 2:
      var value = new proto.tensorflow.contrib.tensorboard.FileInfo;
      reader.readMessage(value,proto.tensorflow.contrib.tensorboard.FileInfo.deserializeBinaryFromReader);
      msg.addFiles(value);
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
proto.tensorflow.contrib.tensorboard.TraceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.contrib.tensorboard.TraceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.contrib.tensorboard.TraceInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.contrib.tensorboard.TraceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.contrib.tensorboard.OpInfo.serializeBinaryToWriter
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tensorflow.contrib.tensorboard.FileInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OpInfo ops = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.contrib.tensorboard.OpInfo>}
 */
proto.tensorflow.contrib.tensorboard.TraceInfo.prototype.getOpsList = function() {
  return /** @type{!Array.<!proto.tensorflow.contrib.tensorboard.OpInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.contrib.tensorboard.OpInfo, 1));
};


/** @param {!Array.<!proto.tensorflow.contrib.tensorboard.OpInfo>} value */
proto.tensorflow.contrib.tensorboard.TraceInfo.prototype.setOpsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.contrib.tensorboard.OpInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.contrib.tensorboard.OpInfo}
 */
proto.tensorflow.contrib.tensorboard.TraceInfo.prototype.addOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.contrib.tensorboard.OpInfo, opt_index);
};


proto.tensorflow.contrib.tensorboard.TraceInfo.prototype.clearOpsList = function() {
  this.setOpsList([]);
};


/**
 * repeated FileInfo files = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.contrib.tensorboard.FileInfo>}
 */
proto.tensorflow.contrib.tensorboard.TraceInfo.prototype.getFilesList = function() {
  return /** @type{!Array.<!proto.tensorflow.contrib.tensorboard.FileInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.contrib.tensorboard.FileInfo, 2));
};


/** @param {!Array.<!proto.tensorflow.contrib.tensorboard.FileInfo>} value */
proto.tensorflow.contrib.tensorboard.TraceInfo.prototype.setFilesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tensorflow.contrib.tensorboard.FileInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.contrib.tensorboard.FileInfo}
 */
proto.tensorflow.contrib.tensorboard.TraceInfo.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tensorflow.contrib.tensorboard.FileInfo, opt_index);
};


proto.tensorflow.contrib.tensorboard.TraceInfo.prototype.clearFilesList = function() {
  this.setFilesList([]);
};

