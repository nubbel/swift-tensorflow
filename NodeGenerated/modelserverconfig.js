/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.serving.ModelServerConfig');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.google.protobuf.Any');
goog.require('proto.tensorflow.serving.ModelConfigList');


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
proto.tensorflow.serving.ModelServerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tensorflow.serving.ModelServerConfig.oneofGroups_);
};
goog.inherits(proto.tensorflow.serving.ModelServerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.ModelServerConfig.displayName = 'proto.tensorflow.serving.ModelServerConfig';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensorflow.serving.ModelServerConfig.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.tensorflow.serving.ModelServerConfig.ConfigCase = {
  CONFIG_NOT_SET: 0,
  MODEL_CONFIG_LIST: 1,
  CUSTOM_MODEL_CONFIG: 2
};

/**
 * @return {proto.tensorflow.serving.ModelServerConfig.ConfigCase}
 */
proto.tensorflow.serving.ModelServerConfig.prototype.getConfigCase = function() {
  return /** @type {proto.tensorflow.serving.ModelServerConfig.ConfigCase} */(jspb.Message.computeOneofCase(this, proto.tensorflow.serving.ModelServerConfig.oneofGroups_[0]));
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
proto.tensorflow.serving.ModelServerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.ModelServerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.ModelServerConfig} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.serving.ModelServerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelConfigList: (f = msg.getModelConfigList()) && proto.tensorflow.serving.ModelConfigList.toObject(includeInstance, f),
    customModelConfig: (f = msg.getCustomModelConfig()) && proto.google.protobuf.Any.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.ModelServerConfig}
 */
proto.tensorflow.serving.ModelServerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.ModelServerConfig;
  return proto.tensorflow.serving.ModelServerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.ModelServerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.ModelServerConfig}
 */
proto.tensorflow.serving.ModelServerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.serving.ModelConfigList;
      reader.readMessage(value,proto.tensorflow.serving.ModelConfigList.deserializeBinaryFromReader);
      msg.setModelConfigList(value);
      break;
    case 2:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setCustomModelConfig(value);
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
proto.tensorflow.serving.ModelServerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.ModelServerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.ModelServerConfig} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.serving.ModelServerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelConfigList();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.serving.ModelConfigList.serializeBinaryToWriter
    );
  }
  f = message.getCustomModelConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModelConfigList model_config_list = 1;
 * @return {?proto.tensorflow.serving.ModelConfigList}
 */
proto.tensorflow.serving.ModelServerConfig.prototype.getModelConfigList = function() {
  return /** @type{?proto.tensorflow.serving.ModelConfigList} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.ModelConfigList, 1));
};


/** @param {?proto.tensorflow.serving.ModelConfigList|undefined} value */
proto.tensorflow.serving.ModelServerConfig.prototype.setModelConfigList = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.tensorflow.serving.ModelServerConfig.oneofGroups_[0], value);
};


proto.tensorflow.serving.ModelServerConfig.prototype.clearModelConfigList = function() {
  this.setModelConfigList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ModelServerConfig.prototype.hasModelConfigList = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Any custom_model_config = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.tensorflow.serving.ModelServerConfig.prototype.getCustomModelConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 2));
};


/** @param {?proto.google.protobuf.Any|undefined} value */
proto.tensorflow.serving.ModelServerConfig.prototype.setCustomModelConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.tensorflow.serving.ModelServerConfig.oneofGroups_[0], value);
};


proto.tensorflow.serving.ModelServerConfig.prototype.clearCustomModelConfig = function() {
  this.setCustomModelConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ModelServerConfig.prototype.hasCustomModelConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


