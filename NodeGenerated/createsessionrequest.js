/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.CreateSessionRequest');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.ConfigProto');
goog.require('proto.tensorflow.GraphDef');


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
proto.tensorflow.CreateSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.CreateSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.CreateSessionRequest.displayName = 'proto.tensorflow.CreateSessionRequest';
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
proto.tensorflow.CreateSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CreateSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CreateSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.CreateSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    graphDef: (f = msg.getGraphDef()) && proto.tensorflow.GraphDef.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.tensorflow.ConfigProto.toObject(includeInstance, f),
    target: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.tensorflow.CreateSessionRequest}
 */
proto.tensorflow.CreateSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CreateSessionRequest;
  return proto.tensorflow.CreateSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CreateSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CreateSessionRequest}
 */
proto.tensorflow.CreateSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.GraphDef;
      reader.readMessage(value,proto.tensorflow.GraphDef.deserializeBinaryFromReader);
      msg.setGraphDef(value);
      break;
    case 2:
      var value = new proto.tensorflow.ConfigProto;
      reader.readMessage(value,proto.tensorflow.ConfigProto.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
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
proto.tensorflow.CreateSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CreateSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CreateSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.CreateSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGraphDef();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.GraphDef.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.ConfigProto.serializeBinaryToWriter
    );
  }
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional GraphDef graph_def = 1;
 * @return {?proto.tensorflow.GraphDef}
 */
proto.tensorflow.CreateSessionRequest.prototype.getGraphDef = function() {
  return /** @type{?proto.tensorflow.GraphDef} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.GraphDef, 1));
};


/** @param {?proto.tensorflow.GraphDef|undefined} value */
proto.tensorflow.CreateSessionRequest.prototype.setGraphDef = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.CreateSessionRequest.prototype.clearGraphDef = function() {
  this.setGraphDef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.CreateSessionRequest.prototype.hasGraphDef = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConfigProto config = 2;
 * @return {?proto.tensorflow.ConfigProto}
 */
proto.tensorflow.CreateSessionRequest.prototype.getConfig = function() {
  return /** @type{?proto.tensorflow.ConfigProto} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.ConfigProto, 2));
};


/** @param {?proto.tensorflow.ConfigProto|undefined} value */
proto.tensorflow.CreateSessionRequest.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.CreateSessionRequest.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.CreateSessionRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string target = 3;
 * @return {string}
 */
proto.tensorflow.CreateSessionRequest.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tensorflow.CreateSessionRequest.prototype.setTarget = function(value) {
  jspb.Message.setField(this, 3, value);
};

