/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.contrib.tensorboard.FileInfo');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');


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
proto.tensorflow.contrib.tensorboard.FileInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.contrib.tensorboard.FileInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.contrib.tensorboard.FileInfo.displayName = 'proto.tensorflow.contrib.tensorboard.FileInfo';
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
proto.tensorflow.contrib.tensorboard.FileInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.contrib.tensorboard.FileInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.contrib.tensorboard.FileInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.contrib.tensorboard.FileInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    filePath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    multilineStatementsMap: (f = msg.getMultilineStatementsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.tensorflow.contrib.tensorboard.FileInfo}
 */
proto.tensorflow.contrib.tensorboard.FileInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.contrib.tensorboard.FileInfo;
  return proto.tensorflow.contrib.tensorboard.FileInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.contrib.tensorboard.FileInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.contrib.tensorboard.FileInfo}
 */
proto.tensorflow.contrib.tensorboard.FileInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilePath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceCode(value);
      break;
    case 3:
      var value = msg.getMultilineStatementsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readUint32);
         });
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
proto.tensorflow.contrib.tensorboard.FileInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.contrib.tensorboard.FileInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.contrib.tensorboard.FileInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.contrib.tensorboard.FileInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilePath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMultilineStatementsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeUint32);
  }
};


/**
 * optional string file_path = 1;
 * @return {string}
 */
proto.tensorflow.contrib.tensorboard.FileInfo.prototype.getFilePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tensorflow.contrib.tensorboard.FileInfo.prototype.setFilePath = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string source_code = 2;
 * @return {string}
 */
proto.tensorflow.contrib.tensorboard.FileInfo.prototype.getSourceCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tensorflow.contrib.tensorboard.FileInfo.prototype.setSourceCode = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * map<uint32, uint32> multiline_statements = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.tensorflow.contrib.tensorboard.FileInfo.prototype.getMultilineStatementsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


proto.tensorflow.contrib.tensorboard.FileInfo.prototype.clearMultilineStatementsMap = function() {
  this.getMultilineStatementsMap().clear();
};

