/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.MemoryLogStep');

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
proto.tensorflow.MemoryLogStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.MemoryLogStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.MemoryLogStep.displayName = 'proto.tensorflow.MemoryLogStep';
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
proto.tensorflow.MemoryLogStep.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.MemoryLogStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.MemoryLogStep} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.MemoryLogStep.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    handle: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.tensorflow.MemoryLogStep}
 */
proto.tensorflow.MemoryLogStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.MemoryLogStep;
  return proto.tensorflow.MemoryLogStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.MemoryLogStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.MemoryLogStep}
 */
proto.tensorflow.MemoryLogStep.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHandle(value);
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
proto.tensorflow.MemoryLogStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.MemoryLogStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.MemoryLogStep} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.MemoryLogStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHandle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 step_id = 1;
 * @return {number}
 */
proto.tensorflow.MemoryLogStep.prototype.getStepId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tensorflow.MemoryLogStep.prototype.setStepId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string handle = 2;
 * @return {string}
 */
proto.tensorflow.MemoryLogStep.prototype.getHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tensorflow.MemoryLogStep.prototype.setHandle = function(value) {
  jspb.Message.setField(this, 2, value);
};


