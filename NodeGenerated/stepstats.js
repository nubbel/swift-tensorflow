/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.StepStats');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.DeviceStepStats');


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
proto.tensorflow.StepStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.StepStats.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.StepStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.StepStats.displayName = 'proto.tensorflow.StepStats';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.StepStats.repeatedFields_ = [1];



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
proto.tensorflow.StepStats.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.StepStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.StepStats} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.StepStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    devStatsList: jspb.Message.toObjectList(msg.getDevStatsList(),
    proto.tensorflow.DeviceStepStats.toObject, includeInstance)
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
 * @return {!proto.tensorflow.StepStats}
 */
proto.tensorflow.StepStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.StepStats;
  return proto.tensorflow.StepStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.StepStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.StepStats}
 */
proto.tensorflow.StepStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.DeviceStepStats;
      reader.readMessage(value,proto.tensorflow.DeviceStepStats.deserializeBinaryFromReader);
      msg.addDevStats(value);
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
proto.tensorflow.StepStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.StepStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.StepStats} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.StepStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.DeviceStepStats.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeviceStepStats dev_stats = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.DeviceStepStats>}
 */
proto.tensorflow.StepStats.prototype.getDevStatsList = function() {
  return /** @type{!Array.<!proto.tensorflow.DeviceStepStats>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.DeviceStepStats, 1));
};


/** @param {!Array.<!proto.tensorflow.DeviceStepStats>} value */
proto.tensorflow.StepStats.prototype.setDevStatsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.DeviceStepStats=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.DeviceStepStats}
 */
proto.tensorflow.StepStats.prototype.addDevStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.DeviceStepStats, opt_index);
};


proto.tensorflow.StepStats.prototype.clearDevStatsList = function() {
  this.setDevStatsList([]);
};


