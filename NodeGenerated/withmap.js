/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.compare_test.WithMap');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('proto.compare_test.Small');


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
proto.compare_test.WithMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compare_test.WithMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.compare_test.WithMap.displayName = 'proto.compare_test.WithMap';
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
proto.compare_test.WithMap.prototype.toObject = function(opt_includeInstance) {
  return proto.compare_test.WithMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compare_test.WithMap} msg The msg instance to transform.
 * @return {!Object}
 */
proto.compare_test.WithMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueMessageMap: (f = msg.getValueMessageMap()) ? f.toObject(includeInstance, proto.compare_test.Small.toObject) : [],
    valueStringMap: (f = msg.getValueStringMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.compare_test.WithMap}
 */
proto.compare_test.WithMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compare_test.WithMap;
  return proto.compare_test.WithMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compare_test.WithMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compare_test.WithMap}
 */
proto.compare_test.WithMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getValueMessageMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.compare_test.Small.deserializeBinaryFromReader);
         });
      break;
    case 2:
      var value = msg.getValueStringMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
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
proto.compare_test.WithMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compare_test.WithMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compare_test.WithMap} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.compare_test.WithMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueMessageMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.compare_test.Small.serializeBinaryToWriter);
  }
  f = message.getValueStringMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<int32, Small> value_message = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.compare_test.Small>}
 */
proto.compare_test.WithMap.prototype.getValueMessageMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.compare_test.Small>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.compare_test.Small));
};


proto.compare_test.WithMap.prototype.clearValueMessageMap = function() {
  this.getValueMessageMap().clear();
};


/**
 * map<string, string> value_string = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.compare_test.WithMap.prototype.getValueStringMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


proto.compare_test.WithMap.prototype.clearValueStringMap = function() {
  this.getValueStringMap().clear();
};

