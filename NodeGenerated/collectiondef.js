/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.CollectionDef');
goog.provide('proto.tensorflow.CollectionDef.AnyList');
goog.provide('proto.tensorflow.CollectionDef.BytesList');
goog.provide('proto.tensorflow.CollectionDef.FloatList');
goog.provide('proto.tensorflow.CollectionDef.Int64List');
goog.provide('proto.tensorflow.CollectionDef.NodeList');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.google.protobuf.Any');


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
proto.tensorflow.CollectionDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tensorflow.CollectionDef.oneofGroups_);
};
goog.inherits(proto.tensorflow.CollectionDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.CollectionDef.displayName = 'proto.tensorflow.CollectionDef';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensorflow.CollectionDef.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.tensorflow.CollectionDef.KindCase = {
  KIND_NOT_SET: 0,
  NODE_LIST: 1,
  BYTES_LIST: 2,
  INT64_LIST: 3,
  FLOAT_LIST: 4,
  ANY_LIST: 5
};

/**
 * @return {proto.tensorflow.CollectionDef.KindCase}
 */
proto.tensorflow.CollectionDef.prototype.getKindCase = function() {
  return /** @type {proto.tensorflow.CollectionDef.KindCase} */(jspb.Message.computeOneofCase(this, proto.tensorflow.CollectionDef.oneofGroups_[0]));
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
proto.tensorflow.CollectionDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CollectionDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CollectionDef} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.CollectionDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeList: (f = msg.getNodeList()) && proto.tensorflow.CollectionDef.NodeList.toObject(includeInstance, f),
    bytesList: (f = msg.getBytesList()) && proto.tensorflow.CollectionDef.BytesList.toObject(includeInstance, f),
    int64List: (f = msg.getInt64List()) && proto.tensorflow.CollectionDef.Int64List.toObject(includeInstance, f),
    floatList: (f = msg.getFloatList()) && proto.tensorflow.CollectionDef.FloatList.toObject(includeInstance, f),
    anyList: (f = msg.getAnyList()) && proto.tensorflow.CollectionDef.AnyList.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.CollectionDef}
 */
proto.tensorflow.CollectionDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CollectionDef;
  return proto.tensorflow.CollectionDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CollectionDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CollectionDef}
 */
proto.tensorflow.CollectionDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.CollectionDef.NodeList;
      reader.readMessage(value,proto.tensorflow.CollectionDef.NodeList.deserializeBinaryFromReader);
      msg.setNodeList(value);
      break;
    case 2:
      var value = new proto.tensorflow.CollectionDef.BytesList;
      reader.readMessage(value,proto.tensorflow.CollectionDef.BytesList.deserializeBinaryFromReader);
      msg.setBytesList(value);
      break;
    case 3:
      var value = new proto.tensorflow.CollectionDef.Int64List;
      reader.readMessage(value,proto.tensorflow.CollectionDef.Int64List.deserializeBinaryFromReader);
      msg.setInt64List(value);
      break;
    case 4:
      var value = new proto.tensorflow.CollectionDef.FloatList;
      reader.readMessage(value,proto.tensorflow.CollectionDef.FloatList.deserializeBinaryFromReader);
      msg.setFloatList(value);
      break;
    case 5:
      var value = new proto.tensorflow.CollectionDef.AnyList;
      reader.readMessage(value,proto.tensorflow.CollectionDef.AnyList.deserializeBinaryFromReader);
      msg.setAnyList(value);
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
proto.tensorflow.CollectionDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CollectionDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CollectionDef} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.CollectionDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeList();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.CollectionDef.NodeList.serializeBinaryToWriter
    );
  }
  f = message.getBytesList();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.CollectionDef.BytesList.serializeBinaryToWriter
    );
  }
  f = message.getInt64List();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tensorflow.CollectionDef.Int64List.serializeBinaryToWriter
    );
  }
  f = message.getFloatList();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tensorflow.CollectionDef.FloatList.serializeBinaryToWriter
    );
  }
  f = message.getAnyList();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tensorflow.CollectionDef.AnyList.serializeBinaryToWriter
    );
  }
};



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
proto.tensorflow.CollectionDef.NodeList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.CollectionDef.NodeList.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.CollectionDef.NodeList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.CollectionDef.NodeList.displayName = 'proto.tensorflow.CollectionDef.NodeList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.CollectionDef.NodeList.repeatedFields_ = [1];



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
proto.tensorflow.CollectionDef.NodeList.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CollectionDef.NodeList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CollectionDef.NodeList} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.CollectionDef.NodeList.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: jspb.Message.getField(msg, 1)
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
 * @return {!proto.tensorflow.CollectionDef.NodeList}
 */
proto.tensorflow.CollectionDef.NodeList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CollectionDef.NodeList;
  return proto.tensorflow.CollectionDef.NodeList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CollectionDef.NodeList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CollectionDef.NodeList}
 */
proto.tensorflow.CollectionDef.NodeList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addValue(value);
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
proto.tensorflow.CollectionDef.NodeList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CollectionDef.NodeList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CollectionDef.NodeList} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.CollectionDef.NodeList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string value = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.CollectionDef.NodeList.prototype.getValueList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<string>} value */
proto.tensorflow.CollectionDef.NodeList.prototype.setValueList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.CollectionDef.NodeList.prototype.addValue = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.tensorflow.CollectionDef.NodeList.prototype.clearValueList = function() {
  this.setValueList([]);
};



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
proto.tensorflow.CollectionDef.BytesList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.CollectionDef.BytesList.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.CollectionDef.BytesList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.CollectionDef.BytesList.displayName = 'proto.tensorflow.CollectionDef.BytesList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.CollectionDef.BytesList.repeatedFields_ = [1];



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
proto.tensorflow.CollectionDef.BytesList.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CollectionDef.BytesList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CollectionDef.BytesList} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.CollectionDef.BytesList.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: msg.getValueList_asB64()
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
 * @return {!proto.tensorflow.CollectionDef.BytesList}
 */
proto.tensorflow.CollectionDef.BytesList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CollectionDef.BytesList;
  return proto.tensorflow.CollectionDef.BytesList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CollectionDef.BytesList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CollectionDef.BytesList}
 */
proto.tensorflow.CollectionDef.BytesList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addValue(value);
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
proto.tensorflow.CollectionDef.BytesList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CollectionDef.BytesList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CollectionDef.BytesList} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.CollectionDef.BytesList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes value = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.CollectionDef.BytesList.prototype.getValueList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/**
 * repeated bytes value = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * This is a type-conversion wrapper around `getValueList()`
 * @return {!Array.<string>}
 */
proto.tensorflow.CollectionDef.BytesList.prototype.getValueList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getValueList()));
};


/**
 * repeated bytes value = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValueList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.tensorflow.CollectionDef.BytesList.prototype.getValueList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getValueList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.tensorflow.CollectionDef.BytesList.prototype.setValueList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.tensorflow.CollectionDef.BytesList.prototype.addValue = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.tensorflow.CollectionDef.BytesList.prototype.clearValueList = function() {
  this.setValueList([]);
};



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
proto.tensorflow.CollectionDef.Int64List = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.CollectionDef.Int64List.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.CollectionDef.Int64List, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.CollectionDef.Int64List.displayName = 'proto.tensorflow.CollectionDef.Int64List';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.CollectionDef.Int64List.repeatedFields_ = [1];



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
proto.tensorflow.CollectionDef.Int64List.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CollectionDef.Int64List.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CollectionDef.Int64List} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.CollectionDef.Int64List.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: jspb.Message.getField(msg, 1)
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
 * @return {!proto.tensorflow.CollectionDef.Int64List}
 */
proto.tensorflow.CollectionDef.Int64List.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CollectionDef.Int64List;
  return proto.tensorflow.CollectionDef.Int64List.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CollectionDef.Int64List} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CollectionDef.Int64List}
 */
proto.tensorflow.CollectionDef.Int64List.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt64());
      msg.setValueList(value);
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
proto.tensorflow.CollectionDef.Int64List.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CollectionDef.Int64List.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CollectionDef.Int64List} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.CollectionDef.Int64List.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 value = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.CollectionDef.Int64List.prototype.getValueList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<number>} value */
proto.tensorflow.CollectionDef.Int64List.prototype.setValueList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.CollectionDef.Int64List.prototype.addValue = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.tensorflow.CollectionDef.Int64List.prototype.clearValueList = function() {
  this.setValueList([]);
};



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
proto.tensorflow.CollectionDef.FloatList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.CollectionDef.FloatList.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.CollectionDef.FloatList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.CollectionDef.FloatList.displayName = 'proto.tensorflow.CollectionDef.FloatList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.CollectionDef.FloatList.repeatedFields_ = [1];



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
proto.tensorflow.CollectionDef.FloatList.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CollectionDef.FloatList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CollectionDef.FloatList} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.CollectionDef.FloatList.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: jspb.Message.getRepeatedFloatingPointField(msg, 1)
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
 * @return {!proto.tensorflow.CollectionDef.FloatList}
 */
proto.tensorflow.CollectionDef.FloatList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CollectionDef.FloatList;
  return proto.tensorflow.CollectionDef.FloatList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CollectionDef.FloatList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CollectionDef.FloatList}
 */
proto.tensorflow.CollectionDef.FloatList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedFloat());
      msg.setValueList(value);
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
proto.tensorflow.CollectionDef.FloatList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CollectionDef.FloatList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CollectionDef.FloatList} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.CollectionDef.FloatList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
};


/**
 * repeated float value = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tensorflow.CollectionDef.FloatList.prototype.getValueList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/** @param {!Array.<number>} value */
proto.tensorflow.CollectionDef.FloatList.prototype.setValueList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.tensorflow.CollectionDef.FloatList.prototype.addValue = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.tensorflow.CollectionDef.FloatList.prototype.clearValueList = function() {
  this.setValueList([]);
};



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
proto.tensorflow.CollectionDef.AnyList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.CollectionDef.AnyList.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.CollectionDef.AnyList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.CollectionDef.AnyList.displayName = 'proto.tensorflow.CollectionDef.AnyList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.CollectionDef.AnyList.repeatedFields_ = [1];



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
proto.tensorflow.CollectionDef.AnyList.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CollectionDef.AnyList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CollectionDef.AnyList} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.CollectionDef.AnyList.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    proto.google.protobuf.Any.toObject, includeInstance)
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
 * @return {!proto.tensorflow.CollectionDef.AnyList}
 */
proto.tensorflow.CollectionDef.AnyList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CollectionDef.AnyList;
  return proto.tensorflow.CollectionDef.AnyList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CollectionDef.AnyList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CollectionDef.AnyList}
 */
proto.tensorflow.CollectionDef.AnyList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.addValue(value);
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
proto.tensorflow.CollectionDef.AnyList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CollectionDef.AnyList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CollectionDef.AnyList} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.CollectionDef.AnyList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.Any value = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Any>}
 */
proto.tensorflow.CollectionDef.AnyList.prototype.getValueList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Any, 1));
};


/** @param {!Array.<!proto.google.protobuf.Any>} value */
proto.tensorflow.CollectionDef.AnyList.prototype.setValueList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.tensorflow.CollectionDef.AnyList.prototype.addValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.Any, opt_index);
};


proto.tensorflow.CollectionDef.AnyList.prototype.clearValueList = function() {
  this.setValueList([]);
};


/**
 * optional NodeList node_list = 1;
 * @return {?proto.tensorflow.CollectionDef.NodeList}
 */
proto.tensorflow.CollectionDef.prototype.getNodeList = function() {
  return /** @type{?proto.tensorflow.CollectionDef.NodeList} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.CollectionDef.NodeList, 1));
};


/** @param {?proto.tensorflow.CollectionDef.NodeList|undefined} value */
proto.tensorflow.CollectionDef.prototype.setNodeList = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.tensorflow.CollectionDef.oneofGroups_[0], value);
};


proto.tensorflow.CollectionDef.prototype.clearNodeList = function() {
  this.setNodeList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.CollectionDef.prototype.hasNodeList = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BytesList bytes_list = 2;
 * @return {?proto.tensorflow.CollectionDef.BytesList}
 */
proto.tensorflow.CollectionDef.prototype.getBytesList = function() {
  return /** @type{?proto.tensorflow.CollectionDef.BytesList} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.CollectionDef.BytesList, 2));
};


/** @param {?proto.tensorflow.CollectionDef.BytesList|undefined} value */
proto.tensorflow.CollectionDef.prototype.setBytesList = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.tensorflow.CollectionDef.oneofGroups_[0], value);
};


proto.tensorflow.CollectionDef.prototype.clearBytesList = function() {
  this.setBytesList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.CollectionDef.prototype.hasBytesList = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Int64List int64_list = 3;
 * @return {?proto.tensorflow.CollectionDef.Int64List}
 */
proto.tensorflow.CollectionDef.prototype.getInt64List = function() {
  return /** @type{?proto.tensorflow.CollectionDef.Int64List} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.CollectionDef.Int64List, 3));
};


/** @param {?proto.tensorflow.CollectionDef.Int64List|undefined} value */
proto.tensorflow.CollectionDef.prototype.setInt64List = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.tensorflow.CollectionDef.oneofGroups_[0], value);
};


proto.tensorflow.CollectionDef.prototype.clearInt64List = function() {
  this.setInt64List(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.CollectionDef.prototype.hasInt64List = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional FloatList float_list = 4;
 * @return {?proto.tensorflow.CollectionDef.FloatList}
 */
proto.tensorflow.CollectionDef.prototype.getFloatList = function() {
  return /** @type{?proto.tensorflow.CollectionDef.FloatList} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.CollectionDef.FloatList, 4));
};


/** @param {?proto.tensorflow.CollectionDef.FloatList|undefined} value */
proto.tensorflow.CollectionDef.prototype.setFloatList = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.tensorflow.CollectionDef.oneofGroups_[0], value);
};


proto.tensorflow.CollectionDef.prototype.clearFloatList = function() {
  this.setFloatList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.CollectionDef.prototype.hasFloatList = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AnyList any_list = 5;
 * @return {?proto.tensorflow.CollectionDef.AnyList}
 */
proto.tensorflow.CollectionDef.prototype.getAnyList = function() {
  return /** @type{?proto.tensorflow.CollectionDef.AnyList} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.CollectionDef.AnyList, 5));
};


/** @param {?proto.tensorflow.CollectionDef.AnyList|undefined} value */
proto.tensorflow.CollectionDef.prototype.setAnyList = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.tensorflow.CollectionDef.oneofGroups_[0], value);
};


proto.tensorflow.CollectionDef.prototype.clearAnyList = function() {
  this.setAnyList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.CollectionDef.prototype.hasAnyList = function() {
  return jspb.Message.getField(this, 5) != null;
};


