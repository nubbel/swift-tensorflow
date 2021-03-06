/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tensorflow.WhileContextDef');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.tensorflow.ValuesDef');


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
proto.tensorflow.WhileContextDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.WhileContextDef.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.WhileContextDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.WhileContextDef.displayName = 'proto.tensorflow.WhileContextDef';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.WhileContextDef.repeatedFields_ = [8,10];



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
proto.tensorflow.WhileContextDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.WhileContextDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.WhileContextDef} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tensorflow.WhileContextDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    contextName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parallelIterations: jspb.Message.getFieldWithDefault(msg, 2, 0),
    backProp: jspb.Message.getFieldWithDefault(msg, 3, false),
    swapMemory: jspb.Message.getFieldWithDefault(msg, 4, false),
    pivotName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    pivotForPredName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    pivotForBodyName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    loopExitNamesList: jspb.Message.getField(msg, 8),
    loopEnterNamesList: jspb.Message.getField(msg, 10),
    valuesDef: (f = msg.getValuesDef()) && proto.tensorflow.ValuesDef.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.WhileContextDef}
 */
proto.tensorflow.WhileContextDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.WhileContextDef;
  return proto.tensorflow.WhileContextDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.WhileContextDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.WhileContextDef}
 */
proto.tensorflow.WhileContextDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContextName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParallelIterations(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBackProp(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSwapMemory(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPivotName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPivotForPredName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPivotForBodyName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addLoopExitNames(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addLoopEnterNames(value);
      break;
    case 9:
      var value = new proto.tensorflow.ValuesDef;
      reader.readMessage(value,proto.tensorflow.ValuesDef.deserializeBinaryFromReader);
      msg.setValuesDef(value);
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
proto.tensorflow.WhileContextDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.WhileContextDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.WhileContextDef} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tensorflow.WhileContextDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContextName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParallelIterations();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBackProp();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSwapMemory();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPivotName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPivotForPredName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPivotForBodyName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLoopExitNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getLoopEnterNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getValuesDef();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.tensorflow.ValuesDef.serializeBinaryToWriter
    );
  }
};


/**
 * optional string context_name = 1;
 * @return {string}
 */
proto.tensorflow.WhileContextDef.prototype.getContextName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tensorflow.WhileContextDef.prototype.setContextName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 parallel_iterations = 2;
 * @return {number}
 */
proto.tensorflow.WhileContextDef.prototype.getParallelIterations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tensorflow.WhileContextDef.prototype.setParallelIterations = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool back_prop = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tensorflow.WhileContextDef.prototype.getBackProp = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.tensorflow.WhileContextDef.prototype.setBackProp = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bool swap_memory = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tensorflow.WhileContextDef.prototype.getSwapMemory = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.tensorflow.WhileContextDef.prototype.setSwapMemory = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string pivot_name = 5;
 * @return {string}
 */
proto.tensorflow.WhileContextDef.prototype.getPivotName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.tensorflow.WhileContextDef.prototype.setPivotName = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string pivot_for_pred_name = 6;
 * @return {string}
 */
proto.tensorflow.WhileContextDef.prototype.getPivotForPredName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.tensorflow.WhileContextDef.prototype.setPivotForPredName = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string pivot_for_body_name = 7;
 * @return {string}
 */
proto.tensorflow.WhileContextDef.prototype.getPivotForBodyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.tensorflow.WhileContextDef.prototype.setPivotForBodyName = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * repeated string loop_exit_names = 8;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.WhileContextDef.prototype.getLoopExitNamesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 8));
};


/** @param {!Array.<string>} value */
proto.tensorflow.WhileContextDef.prototype.setLoopExitNamesList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.WhileContextDef.prototype.addLoopExitNames = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.tensorflow.WhileContextDef.prototype.clearLoopExitNamesList = function() {
  this.setLoopExitNamesList([]);
};


/**
 * repeated string loop_enter_names = 10;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tensorflow.WhileContextDef.prototype.getLoopEnterNamesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 10));
};


/** @param {!Array.<string>} value */
proto.tensorflow.WhileContextDef.prototype.setLoopEnterNamesList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.WhileContextDef.prototype.addLoopEnterNames = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


proto.tensorflow.WhileContextDef.prototype.clearLoopEnterNamesList = function() {
  this.setLoopEnterNamesList([]);
};


/**
 * optional ValuesDef values_def = 9;
 * @return {?proto.tensorflow.ValuesDef}
 */
proto.tensorflow.WhileContextDef.prototype.getValuesDef = function() {
  return /** @type{?proto.tensorflow.ValuesDef} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.ValuesDef, 9));
};


/** @param {?proto.tensorflow.ValuesDef|undefined} value */
proto.tensorflow.WhileContextDef.prototype.setValuesDef = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.tensorflow.WhileContextDef.prototype.clearValuesDef = function() {
  this.setValuesDef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.WhileContextDef.prototype.hasValuesDef = function() {
  return jspb.Message.getField(this, 9) != null;
};


