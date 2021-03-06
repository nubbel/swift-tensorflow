/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.DeconstructTupleRequest');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.xla.GlobalDataHandle');


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
proto.xla.DeconstructTupleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xla.DeconstructTupleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.DeconstructTupleRequest.displayName = 'proto.xla.DeconstructTupleRequest';
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
proto.xla.DeconstructTupleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.DeconstructTupleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.DeconstructTupleRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.DeconstructTupleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tupleHandle: (f = msg.getTupleHandle()) && proto.xla.GlobalDataHandle.toObject(includeInstance, f)
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
 * @return {!proto.xla.DeconstructTupleRequest}
 */
proto.xla.DeconstructTupleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.DeconstructTupleRequest;
  return proto.xla.DeconstructTupleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.DeconstructTupleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.DeconstructTupleRequest}
 */
proto.xla.DeconstructTupleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.xla.GlobalDataHandle;
      reader.readMessage(value,proto.xla.GlobalDataHandle.deserializeBinaryFromReader);
      msg.setTupleHandle(value);
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
proto.xla.DeconstructTupleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.DeconstructTupleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.DeconstructTupleRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.DeconstructTupleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTupleHandle();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.xla.GlobalDataHandle.serializeBinaryToWriter
    );
  }
};


/**
 * optional GlobalDataHandle tuple_handle = 2;
 * @return {?proto.xla.GlobalDataHandle}
 */
proto.xla.DeconstructTupleRequest.prototype.getTupleHandle = function() {
  return /** @type{?proto.xla.GlobalDataHandle} */ (
    jspb.Message.getWrapperField(this, proto.xla.GlobalDataHandle, 2));
};


/** @param {?proto.xla.GlobalDataHandle|undefined} value */
proto.xla.DeconstructTupleRequest.prototype.setTupleHandle = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.xla.DeconstructTupleRequest.prototype.clearTupleHandle = function() {
  this.setTupleHandle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.xla.DeconstructTupleRequest.prototype.hasTupleHandle = function() {
  return jspb.Message.getField(this, 2) != null;
};


