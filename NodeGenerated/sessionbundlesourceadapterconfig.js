/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.serving.SessionBundleSourceAdapterConfig');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.serving.SessionBundleConfig');


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
proto.tensorflow.serving.SessionBundleSourceAdapterConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.SessionBundleSourceAdapterConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.SessionBundleSourceAdapterConfig.displayName = 'proto.tensorflow.serving.SessionBundleSourceAdapterConfig';
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
proto.tensorflow.serving.SessionBundleSourceAdapterConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.SessionBundleSourceAdapterConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.SessionBundleSourceAdapterConfig} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.serving.SessionBundleSourceAdapterConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.tensorflow.serving.SessionBundleConfig.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.SessionBundleSourceAdapterConfig}
 */
proto.tensorflow.serving.SessionBundleSourceAdapterConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.SessionBundleSourceAdapterConfig;
  return proto.tensorflow.serving.SessionBundleSourceAdapterConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.SessionBundleSourceAdapterConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.SessionBundleSourceAdapterConfig}
 */
proto.tensorflow.serving.SessionBundleSourceAdapterConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.serving.SessionBundleConfig;
      reader.readMessage(value,proto.tensorflow.serving.SessionBundleConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.tensorflow.serving.SessionBundleSourceAdapterConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.SessionBundleSourceAdapterConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.SessionBundleSourceAdapterConfig} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.serving.SessionBundleSourceAdapterConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.serving.SessionBundleConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional SessionBundleConfig config = 1;
 * @return {?proto.tensorflow.serving.SessionBundleConfig}
 */
proto.tensorflow.serving.SessionBundleSourceAdapterConfig.prototype.getConfig = function() {
  return /** @type{?proto.tensorflow.serving.SessionBundleConfig} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.SessionBundleConfig, 1));
};


/** @param {?proto.tensorflow.serving.SessionBundleConfig|undefined} value */
proto.tensorflow.serving.SessionBundleSourceAdapterConfig.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.SessionBundleSourceAdapterConfig.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.SessionBundleSourceAdapterConfig.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};

