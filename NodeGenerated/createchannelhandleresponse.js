/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.CreateChannelHandleResponse');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.xla.ChannelHandle');


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
proto.xla.CreateChannelHandleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xla.CreateChannelHandleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.CreateChannelHandleResponse.displayName = 'proto.xla.CreateChannelHandleResponse';
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
proto.xla.CreateChannelHandleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.CreateChannelHandleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.CreateChannelHandleResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.CreateChannelHandleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: (f = msg.getChannel()) && proto.xla.ChannelHandle.toObject(includeInstance, f)
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
 * @return {!proto.xla.CreateChannelHandleResponse}
 */
proto.xla.CreateChannelHandleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.CreateChannelHandleResponse;
  return proto.xla.CreateChannelHandleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.CreateChannelHandleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.CreateChannelHandleResponse}
 */
proto.xla.CreateChannelHandleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xla.ChannelHandle;
      reader.readMessage(value,proto.xla.ChannelHandle.deserializeBinaryFromReader);
      msg.setChannel(value);
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
proto.xla.CreateChannelHandleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.CreateChannelHandleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.CreateChannelHandleResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.CreateChannelHandleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xla.ChannelHandle.serializeBinaryToWriter
    );
  }
};


/**
 * optional ChannelHandle channel = 1;
 * @return {?proto.xla.ChannelHandle}
 */
proto.xla.CreateChannelHandleResponse.prototype.getChannel = function() {
  return /** @type{?proto.xla.ChannelHandle} */ (
    jspb.Message.getWrapperField(this, proto.xla.ChannelHandle, 1));
};


/** @param {?proto.xla.ChannelHandle|undefined} value */
proto.xla.CreateChannelHandleResponse.prototype.setChannel = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.xla.CreateChannelHandleResponse.prototype.clearChannel = function() {
  this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.CreateChannelHandleResponse.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 1) != null;
};


