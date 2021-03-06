/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.AllocationDescription');

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
proto.tensorflow.AllocationDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.AllocationDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.AllocationDescription.displayName = 'proto.tensorflow.AllocationDescription';
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
proto.tensorflow.AllocationDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.AllocationDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.AllocationDescription} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.AllocationDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestedBytes: jspb.Message.getFieldWithDefault(msg, 1, 0),
    allocatedBytes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    allocatorName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    allocationId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hasSingleReference: jspb.Message.getFieldWithDefault(msg, 5, false),
    ptr: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.tensorflow.AllocationDescription}
 */
proto.tensorflow.AllocationDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.AllocationDescription;
  return proto.tensorflow.AllocationDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.AllocationDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.AllocationDescription}
 */
proto.tensorflow.AllocationDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequestedBytes(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAllocatedBytes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAllocatorName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAllocationId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasSingleReference(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPtr(value);
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
proto.tensorflow.AllocationDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.AllocationDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.AllocationDescription} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.AllocationDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestedBytes();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAllocatedBytes();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAllocatorName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAllocationId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getHasSingleReference();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getPtr();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional int64 requested_bytes = 1;
 * @return {number}
 */
proto.tensorflow.AllocationDescription.prototype.getRequestedBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tensorflow.AllocationDescription.prototype.setRequestedBytes = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 allocated_bytes = 2;
 * @return {number}
 */
proto.tensorflow.AllocationDescription.prototype.getAllocatedBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.AllocationDescription.prototype.setAllocatedBytes = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string allocator_name = 3;
 * @return {string}
 */
proto.tensorflow.AllocationDescription.prototype.getAllocatorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tensorflow.AllocationDescription.prototype.setAllocatorName = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 allocation_id = 4;
 * @return {number}
 */
proto.tensorflow.AllocationDescription.prototype.getAllocationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.tensorflow.AllocationDescription.prototype.setAllocationId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bool has_single_reference = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tensorflow.AllocationDescription.prototype.getHasSingleReference = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.tensorflow.AllocationDescription.prototype.setHasSingleReference = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint64 ptr = 6;
 * @return {number}
 */
proto.tensorflow.AllocationDescription.prototype.getPtr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.tensorflow.AllocationDescription.prototype.setPtr = function(value) {
  jspb.Message.setField(this, 6, value);
};


