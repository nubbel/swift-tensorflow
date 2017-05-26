/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.LabeledStepStats');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.StepStats');


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
proto.tensorflow.LabeledStepStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.LabeledStepStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.LabeledStepStats.displayName = 'proto.tensorflow.LabeledStepStats';
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
proto.tensorflow.LabeledStepStats.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.LabeledStepStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.LabeledStepStats} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.LabeledStepStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stepStats: (f = msg.getStepStats()) && proto.tensorflow.StepStats.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.LabeledStepStats}
 */
proto.tensorflow.LabeledStepStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.LabeledStepStats;
  return proto.tensorflow.LabeledStepStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.LabeledStepStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.LabeledStepStats}
 */
proto.tensorflow.LabeledStepStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStepId(value);
      break;
    case 2:
      var value = new proto.tensorflow.StepStats;
      reader.readMessage(value,proto.tensorflow.StepStats.deserializeBinaryFromReader);
      msg.setStepStats(value);
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
proto.tensorflow.LabeledStepStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.LabeledStepStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.LabeledStepStats} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.LabeledStepStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStepStats();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.StepStats.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 step_id = 1;
 * @return {number}
 */
proto.tensorflow.LabeledStepStats.prototype.getStepId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tensorflow.LabeledStepStats.prototype.setStepId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional StepStats step_stats = 2;
 * @return {?proto.tensorflow.StepStats}
 */
proto.tensorflow.LabeledStepStats.prototype.getStepStats = function() {
  return /** @type{?proto.tensorflow.StepStats} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.StepStats, 2));
};


/** @param {?proto.tensorflow.StepStats|undefined} value */
proto.tensorflow.LabeledStepStats.prototype.setStepStats = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.LabeledStepStats.prototype.clearStepStats = function() {
  this.setStepStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.LabeledStepStats.prototype.hasStepStats = function() {
  return jspb.Message.getField(this, 2) != null;
};


