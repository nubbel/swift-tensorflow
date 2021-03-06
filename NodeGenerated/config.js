/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.tfcompile.Config');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.tfcompile.Feed');
goog.require('proto.tensorflow.tfcompile.Fetch');


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
proto.tensorflow.tfcompile.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.tfcompile.Config.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.tfcompile.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.tfcompile.Config.displayName = 'proto.tensorflow.tfcompile.Config';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.tfcompile.Config.repeatedFields_ = [1,2];



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
proto.tensorflow.tfcompile.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.tfcompile.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.tfcompile.Config} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.tfcompile.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    feedList: jspb.Message.toObjectList(msg.getFeedList(),
    proto.tensorflow.tfcompile.Feed.toObject, includeInstance),
    fetchList: jspb.Message.toObjectList(msg.getFetchList(),
    proto.tensorflow.tfcompile.Fetch.toObject, includeInstance)
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
 * @return {!proto.tensorflow.tfcompile.Config}
 */
proto.tensorflow.tfcompile.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.tfcompile.Config;
  return proto.tensorflow.tfcompile.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.tfcompile.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.tfcompile.Config}
 */
proto.tensorflow.tfcompile.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.tfcompile.Feed;
      reader.readMessage(value,proto.tensorflow.tfcompile.Feed.deserializeBinaryFromReader);
      msg.addFeed(value);
      break;
    case 2:
      var value = new proto.tensorflow.tfcompile.Fetch;
      reader.readMessage(value,proto.tensorflow.tfcompile.Fetch.deserializeBinaryFromReader);
      msg.addFetch(value);
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
proto.tensorflow.tfcompile.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.tfcompile.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.tfcompile.Config} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.tfcompile.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.tfcompile.Feed.serializeBinaryToWriter
    );
  }
  f = message.getFetchList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tensorflow.tfcompile.Fetch.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Feed feed = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.tfcompile.Feed>}
 */
proto.tensorflow.tfcompile.Config.prototype.getFeedList = function() {
  return /** @type{!Array.<!proto.tensorflow.tfcompile.Feed>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.tfcompile.Feed, 1));
};


/** @param {!Array.<!proto.tensorflow.tfcompile.Feed>} value */
proto.tensorflow.tfcompile.Config.prototype.setFeedList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.tfcompile.Feed=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.tfcompile.Feed}
 */
proto.tensorflow.tfcompile.Config.prototype.addFeed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.tfcompile.Feed, opt_index);
};


proto.tensorflow.tfcompile.Config.prototype.clearFeedList = function() {
  this.setFeedList([]);
};


/**
 * repeated Fetch fetch = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tensorflow.tfcompile.Fetch>}
 */
proto.tensorflow.tfcompile.Config.prototype.getFetchList = function() {
  return /** @type{!Array.<!proto.tensorflow.tfcompile.Fetch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.tfcompile.Fetch, 2));
};


/** @param {!Array.<!proto.tensorflow.tfcompile.Fetch>} value */
proto.tensorflow.tfcompile.Config.prototype.setFetchList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tensorflow.tfcompile.Fetch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.tfcompile.Fetch}
 */
proto.tensorflow.tfcompile.Config.prototype.addFetch = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tensorflow.tfcompile.Fetch, opt_index);
};


proto.tensorflow.tfcompile.Config.prototype.clearFetchList = function() {
  this.setFetchList([]);
};


