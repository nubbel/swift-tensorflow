/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.Feature');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.BytesList');
goog.require('proto.tensorflow.FloatList');
goog.require('proto.tensorflow.Int64List');


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
proto.tensorflow.Feature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tensorflow.Feature.oneofGroups_);
};
goog.inherits(proto.tensorflow.Feature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.Feature.displayName = 'proto.tensorflow.Feature';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensorflow.Feature.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.tensorflow.Feature.KindCase = {
  KIND_NOT_SET: 0,
  BYTES_LIST: 1,
  FLOAT_LIST: 2,
  INT64_LIST: 3
};

/**
 * @return {proto.tensorflow.Feature.KindCase}
 */
proto.tensorflow.Feature.prototype.getKindCase = function() {
  return /** @type {proto.tensorflow.Feature.KindCase} */(jspb.Message.computeOneofCase(this, proto.tensorflow.Feature.oneofGroups_[0]));
};



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
proto.tensorflow.Feature.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.Feature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.Feature} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.Feature.toObject = function(includeInstance, msg) {
  var f, obj = {
    bytesList: (f = msg.getBytesList()) && proto.tensorflow.BytesList.toObject(includeInstance, f),
    floatList: (f = msg.getFloatList()) && proto.tensorflow.FloatList.toObject(includeInstance, f),
    int64List: (f = msg.getInt64List()) && proto.tensorflow.Int64List.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.Feature}
 */
proto.tensorflow.Feature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.Feature;
  return proto.tensorflow.Feature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.Feature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.Feature}
 */
proto.tensorflow.Feature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.BytesList;
      reader.readMessage(value,proto.tensorflow.BytesList.deserializeBinaryFromReader);
      msg.setBytesList(value);
      break;
    case 2:
      var value = new proto.tensorflow.FloatList;
      reader.readMessage(value,proto.tensorflow.FloatList.deserializeBinaryFromReader);
      msg.setFloatList(value);
      break;
    case 3:
      var value = new proto.tensorflow.Int64List;
      reader.readMessage(value,proto.tensorflow.Int64List.deserializeBinaryFromReader);
      msg.setInt64List(value);
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
proto.tensorflow.Feature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.Feature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.Feature} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.Feature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBytesList();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.BytesList.serializeBinaryToWriter
    );
  }
  f = message.getFloatList();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.FloatList.serializeBinaryToWriter
    );
  }
  f = message.getInt64List();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tensorflow.Int64List.serializeBinaryToWriter
    );
  }
};


/**
 * optional BytesList bytes_list = 1;
 * @return {?proto.tensorflow.BytesList}
 */
proto.tensorflow.Feature.prototype.getBytesList = function() {
  return /** @type{?proto.tensorflow.BytesList} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.BytesList, 1));
};


/** @param {?proto.tensorflow.BytesList|undefined} value */
proto.tensorflow.Feature.prototype.setBytesList = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.tensorflow.Feature.oneofGroups_[0], value);
};


proto.tensorflow.Feature.prototype.clearBytesList = function() {
  this.setBytesList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.Feature.prototype.hasBytesList = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FloatList float_list = 2;
 * @return {?proto.tensorflow.FloatList}
 */
proto.tensorflow.Feature.prototype.getFloatList = function() {
  return /** @type{?proto.tensorflow.FloatList} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.FloatList, 2));
};


/** @param {?proto.tensorflow.FloatList|undefined} value */
proto.tensorflow.Feature.prototype.setFloatList = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.tensorflow.Feature.oneofGroups_[0], value);
};


proto.tensorflow.Feature.prototype.clearFloatList = function() {
  this.setFloatList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.Feature.prototype.hasFloatList = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Int64List int64_list = 3;
 * @return {?proto.tensorflow.Int64List}
 */
proto.tensorflow.Feature.prototype.getInt64List = function() {
  return /** @type{?proto.tensorflow.Int64List} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.Int64List, 3));
};


/** @param {?proto.tensorflow.Int64List|undefined} value */
proto.tensorflow.Feature.prototype.setInt64List = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.tensorflow.Feature.oneofGroups_[0], value);
};


proto.tensorflow.Feature.prototype.clearInt64List = function() {
  this.setInt64List(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.Feature.prototype.hasInt64List = function() {
  return jspb.Message.getField(this, 3) != null;
};


