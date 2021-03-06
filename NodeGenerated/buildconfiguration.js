/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.BuildConfiguration');

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
proto.tensorflow.BuildConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.BuildConfiguration.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.BuildConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.BuildConfiguration.displayName = 'proto.tensorflow.BuildConfiguration';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.BuildConfiguration.repeatedFields_ = [2,3];



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
proto.tensorflow.BuildConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.BuildConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.BuildConfiguration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.BuildConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ccFlagsList: jspb.Message.getField(msg, 2),
    optsList: jspb.Message.getField(msg, 3)
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
 * @return {!proto.tensorflow.BuildConfiguration}
 */
proto.tensorflow.BuildConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.BuildConfiguration;
  return proto.tensorflow.BuildConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.BuildConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.BuildConfiguration}
 */
proto.tensorflow.BuildConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCcFlags(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addOpts(value);
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
proto.tensorflow.BuildConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.BuildConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.BuildConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.BuildConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCcFlagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getOptsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string mode = 1;
 * @return {string}
 */
proto.tensorflow.BuildConfiguration.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tensorflow.BuildConfiguration.prototype.setMode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated string cc_flags = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.BuildConfiguration.prototype.getCcFlagsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 2));
};


/** @param {!Array.<string>} value */
proto.tensorflow.BuildConfiguration.prototype.setCcFlagsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.BuildConfiguration.prototype.addCcFlags = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.tensorflow.BuildConfiguration.prototype.clearCcFlagsList = function() {
  this.setCcFlagsList([]);
};


/**
 * repeated string opts = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.BuildConfiguration.prototype.getOptsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {!Array.<string>} value */
proto.tensorflow.BuildConfiguration.prototype.setOptsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.BuildConfiguration.prototype.addOpts = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.tensorflow.BuildConfiguration.prototype.clearOptsList = function() {
  this.setOptsList([]);
};


