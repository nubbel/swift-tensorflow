/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.xla.ExecuteParallelRequest');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.xla.ExecuteRequest');


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
proto.xla.ExecuteParallelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xla.ExecuteParallelRequest.repeatedFields_, null);
};
goog.inherits(proto.xla.ExecuteParallelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.xla.ExecuteParallelRequest.displayName = 'proto.xla.ExecuteParallelRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xla.ExecuteParallelRequest.repeatedFields_ = [1];



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
proto.xla.ExecuteParallelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xla.ExecuteParallelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xla.ExecuteParallelRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.xla.ExecuteParallelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.xla.ExecuteRequest.toObject, includeInstance)
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
 * @return {!proto.xla.ExecuteParallelRequest}
 */
proto.xla.ExecuteParallelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xla.ExecuteParallelRequest;
  return proto.xla.ExecuteParallelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xla.ExecuteParallelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xla.ExecuteParallelRequest}
 */
proto.xla.ExecuteParallelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xla.ExecuteRequest;
      reader.readMessage(value,proto.xla.ExecuteRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
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
proto.xla.ExecuteParallelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xla.ExecuteParallelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xla.ExecuteParallelRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.xla.ExecuteParallelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.xla.ExecuteRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ExecuteRequest requests = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.xla.ExecuteRequest>}
 */
proto.xla.ExecuteParallelRequest.prototype.getRequestsList = function() {
  return /** @type{!Array.<!proto.xla.ExecuteRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xla.ExecuteRequest, 1));
};


/** @param {!Array.<!proto.xla.ExecuteRequest>} value */
proto.xla.ExecuteParallelRequest.prototype.setRequestsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.xla.ExecuteRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xla.ExecuteRequest}
 */
proto.xla.ExecuteParallelRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.xla.ExecuteRequest, opt_index);
};


proto.xla.ExecuteParallelRequest.prototype.clearRequestsList = function() {
  this.setRequestsList([]);
};

