/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.third_party.tensorflow.tools.api.TFAPIMethod');

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
proto.third_party.tensorflow.tools.api.TFAPIMethod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.third_party.tensorflow.tools.api.TFAPIMethod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.third_party.tensorflow.tools.api.TFAPIMethod.displayName = 'proto.third_party.tensorflow.tools.api.TFAPIMethod';
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
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.toObject = function(opt_includeInstance) {
  return proto.third_party.tensorflow.tools.api.TFAPIMethod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.third_party.tensorflow.tools.api.TFAPIMethod} msg The msg instance to transform.
 * @return {!Object}
 */
proto.third_party.tensorflow.tools.api.TFAPIMethod.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    path: jspb.Message.getField(msg, 2),
    argspec: jspb.Message.getField(msg, 3)
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
 * @return {!proto.third_party.tensorflow.tools.api.TFAPIMethod}
 */
proto.third_party.tensorflow.tools.api.TFAPIMethod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.third_party.tensorflow.tools.api.TFAPIMethod;
  return proto.third_party.tensorflow.tools.api.TFAPIMethod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.third_party.tensorflow.tools.api.TFAPIMethod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.third_party.tensorflow.tools.api.TFAPIMethod}
 */
proto.third_party.tensorflow.tools.api.TFAPIMethod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArgspec(value);
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
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.third_party.tensorflow.tools.api.TFAPIMethod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.third_party.tensorflow.tools.api.TFAPIMethod} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.third_party.tensorflow.tools.api.TFAPIMethod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.setPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.clearPath = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.hasPath = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string argspec = 3;
 * @return {string}
 */
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.getArgspec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.setArgspec = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.clearArgspec = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.third_party.tensorflow.tools.api.TFAPIMethod.prototype.hasArgspec = function() {
  return jspb.Message.getField(this, 3) != null;
};


