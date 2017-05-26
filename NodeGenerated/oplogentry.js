/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.tfprof.OpLogEntry');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.tfprof.CodeDef');


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
proto.tensorflow.tfprof.OpLogEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.tfprof.OpLogEntry.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.tfprof.OpLogEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.tfprof.OpLogEntry.displayName = 'proto.tensorflow.tfprof.OpLogEntry';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.tfprof.OpLogEntry.repeatedFields_ = [3];



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
proto.tensorflow.tfprof.OpLogEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.tfprof.OpLogEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.tfprof.OpLogEntry} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.tfprof.OpLogEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    floatOps: jspb.Message.getField(msg, 2),
    typesList: jspb.Message.getField(msg, 3),
    codeDef: (f = msg.getCodeDef()) && proto.tensorflow.tfprof.CodeDef.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.tfprof.OpLogEntry}
 */
proto.tensorflow.tfprof.OpLogEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.tfprof.OpLogEntry;
  return proto.tensorflow.tfprof.OpLogEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.tfprof.OpLogEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.tfprof.OpLogEntry}
 */
proto.tensorflow.tfprof.OpLogEntry.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFloatOps(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTypes(value);
      break;
    case 4:
      var value = new proto.tensorflow.tfprof.CodeDef;
      reader.readMessage(value,proto.tensorflow.tfprof.CodeDef.deserializeBinaryFromReader);
      msg.setCodeDef(value);
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
proto.tensorflow.tfprof.OpLogEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.tfprof.OpLogEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.tfprof.OpLogEntry} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.tfprof.OpLogEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getCodeDef();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tensorflow.tfprof.CodeDef.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tensorflow.tfprof.OpLogEntry.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tensorflow.tfprof.OpLogEntry.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.tensorflow.tfprof.OpLogEntry.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.tfprof.OpLogEntry.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 float_ops = 2;
 * @return {number}
 */
proto.tensorflow.tfprof.OpLogEntry.prototype.getFloatOps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.tfprof.OpLogEntry.prototype.setFloatOps = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.tensorflow.tfprof.OpLogEntry.prototype.clearFloatOps = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.tfprof.OpLogEntry.prototype.hasFloatOps = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string types = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.tfprof.OpLogEntry.prototype.getTypesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {!Array.<string>} value */
proto.tensorflow.tfprof.OpLogEntry.prototype.setTypesList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.tfprof.OpLogEntry.prototype.addTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.tensorflow.tfprof.OpLogEntry.prototype.clearTypesList = function() {
  this.setTypesList([]);
};


/**
 * optional CodeDef code_def = 4;
 * @return {?proto.tensorflow.tfprof.CodeDef}
 */
proto.tensorflow.tfprof.OpLogEntry.prototype.getCodeDef = function() {
  return /** @type{?proto.tensorflow.tfprof.CodeDef} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.tfprof.CodeDef, 4));
};


/** @param {?proto.tensorflow.tfprof.CodeDef|undefined} value */
proto.tensorflow.tfprof.OpLogEntry.prototype.setCodeDef = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.tensorflow.tfprof.OpLogEntry.prototype.clearCodeDef = function() {
  this.setCodeDef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.tfprof.OpLogEntry.prototype.hasCodeDef = function() {
  return jspb.Message.getField(this, 4) != null;
};


