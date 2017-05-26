/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.third_party.tensorflow.tools.api.TFAPIModule');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.third_party.tensorflow.tools.api.TFAPIMember');
goog.require('proto.third_party.tensorflow.tools.api.TFAPIMethod');


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
proto.third_party.tensorflow.tools.api.TFAPIModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.third_party.tensorflow.tools.api.TFAPIModule.repeatedFields_, null);
};
goog.inherits(proto.third_party.tensorflow.tools.api.TFAPIModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.third_party.tensorflow.tools.api.TFAPIModule.displayName = 'proto.third_party.tensorflow.tools.api.TFAPIModule';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.third_party.tensorflow.tools.api.TFAPIModule.repeatedFields_ = [1,2];



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
proto.third_party.tensorflow.tools.api.TFAPIModule.prototype.toObject = function(opt_includeInstance) {
  return proto.third_party.tensorflow.tools.api.TFAPIModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.third_party.tensorflow.tools.api.TFAPIModule} msg The msg instance to transform.
 * @return {!Object}
 */
proto.third_party.tensorflow.tools.api.TFAPIModule.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberList: jspb.Message.toObjectList(msg.getMemberList(),
    proto.third_party.tensorflow.tools.api.TFAPIMember.toObject, includeInstance),
    memberMethodList: jspb.Message.toObjectList(msg.getMemberMethodList(),
    proto.third_party.tensorflow.tools.api.TFAPIMethod.toObject, includeInstance)
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
 * @return {!proto.third_party.tensorflow.tools.api.TFAPIModule}
 */
proto.third_party.tensorflow.tools.api.TFAPIModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.third_party.tensorflow.tools.api.TFAPIModule;
  return proto.third_party.tensorflow.tools.api.TFAPIModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.third_party.tensorflow.tools.api.TFAPIModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.third_party.tensorflow.tools.api.TFAPIModule}
 */
proto.third_party.tensorflow.tools.api.TFAPIModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.third_party.tensorflow.tools.api.TFAPIMember;
      reader.readMessage(value,proto.third_party.tensorflow.tools.api.TFAPIMember.deserializeBinaryFromReader);
      msg.addMember(value);
      break;
    case 2:
      var value = new proto.third_party.tensorflow.tools.api.TFAPIMethod;
      reader.readMessage(value,proto.third_party.tensorflow.tools.api.TFAPIMethod.deserializeBinaryFromReader);
      msg.addMemberMethod(value);
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
proto.third_party.tensorflow.tools.api.TFAPIModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.third_party.tensorflow.tools.api.TFAPIModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.third_party.tensorflow.tools.api.TFAPIModule} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.third_party.tensorflow.tools.api.TFAPIModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.third_party.tensorflow.tools.api.TFAPIMember.serializeBinaryToWriter
    );
  }
  f = message.getMemberMethodList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.third_party.tensorflow.tools.api.TFAPIMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TFAPIMember member = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.third_party.tensorflow.tools.api.TFAPIMember>}
 */
proto.third_party.tensorflow.tools.api.TFAPIModule.prototype.getMemberList = function() {
  return /** @type{!Array.<!proto.third_party.tensorflow.tools.api.TFAPIMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.third_party.tensorflow.tools.api.TFAPIMember, 1));
};


/** @param {!Array.<!proto.third_party.tensorflow.tools.api.TFAPIMember>} value */
proto.third_party.tensorflow.tools.api.TFAPIModule.prototype.setMemberList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.third_party.tensorflow.tools.api.TFAPIMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.third_party.tensorflow.tools.api.TFAPIMember}
 */
proto.third_party.tensorflow.tools.api.TFAPIModule.prototype.addMember = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.third_party.tensorflow.tools.api.TFAPIMember, opt_index);
};


proto.third_party.tensorflow.tools.api.TFAPIModule.prototype.clearMemberList = function() {
  this.setMemberList([]);
};


/**
 * repeated TFAPIMethod member_method = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.third_party.tensorflow.tools.api.TFAPIMethod>}
 */
proto.third_party.tensorflow.tools.api.TFAPIModule.prototype.getMemberMethodList = function() {
  return /** @type{!Array.<!proto.third_party.tensorflow.tools.api.TFAPIMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.third_party.tensorflow.tools.api.TFAPIMethod, 2));
};


/** @param {!Array.<!proto.third_party.tensorflow.tools.api.TFAPIMethod>} value */
proto.third_party.tensorflow.tools.api.TFAPIModule.prototype.setMemberMethodList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.third_party.tensorflow.tools.api.TFAPIMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.third_party.tensorflow.tools.api.TFAPIMethod}
 */
proto.third_party.tensorflow.tools.api.TFAPIModule.prototype.addMemberMethod = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.third_party.tensorflow.tools.api.TFAPIMethod, opt_index);
};


proto.third_party.tensorflow.tools.api.TFAPIModule.prototype.clearMemberMethodList = function() {
  this.setMemberMethodList([]);
};


