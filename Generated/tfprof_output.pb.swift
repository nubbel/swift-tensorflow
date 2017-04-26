/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/tools/tfprof/tfprof_output.proto
 *
 */

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that your are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _1: SwiftProtobuf.ProtobufAPIVersion_1 {}
  typealias Version = _1
}

struct Tensorflow_Tfprof_TFProfTensorProto: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".TFProfTensorProto"

  fileprivate var _dtype: Tensorflow_DataType? = nil
  var dtype: Tensorflow_DataType {
    get {return _dtype ?? Tensorflow_DataType.dtInvalid}
    set {_dtype = newValue}
  }
  var hasDtype: Bool {
    return self._dtype != nil
  }
  mutating func clearDtype() {
    self._dtype = nil
  }

  /// Flatten tensor in row-major.
  /// Only one of the following array is set.
  var valueDouble: [Double] = []

  var valueInt64: [Int64] = []

  var valueStr: [String] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularEnumField(value: &self._dtype)
      case 2: try decoder.decodeRepeatedDoubleField(value: &self.valueDouble)
      case 3: try decoder.decodeRepeatedInt64Field(value: &self.valueInt64)
      case 4: try decoder.decodeRepeatedStringField(value: &self.valueStr)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._dtype {
      try visitor.visitSingularEnumField(value: v, fieldNumber: 1)
    }
    if !self.valueDouble.isEmpty {
      try visitor.visitRepeatedDoubleField(value: self.valueDouble, fieldNumber: 2)
    }
    if !self.valueInt64.isEmpty {
      try visitor.visitRepeatedInt64Field(value: self.valueInt64, fieldNumber: 3)
    }
    if !self.valueStr.isEmpty {
      try visitor.visitRepeatedStringField(value: self.valueStr, fieldNumber: 4)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

struct Tensorflow_Tfprof_TFProfNode: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".TFProfNode"

  /// op name.
  var name: String {
    get {return _storage._name ?? String()}
    set {_uniqueStorage()._name = newValue}
  }
  var hasName: Bool {
    return _storage._name != nil
  }
  mutating func clearName() {
    _storage._name = nil
  }

  /// tensor value restored from checkpoint.
  var tensorValue: Tensorflow_Tfprof_TFProfTensorProto {
    get {return _storage._tensorValue ?? Tensorflow_Tfprof_TFProfTensorProto()}
    set {_uniqueStorage()._tensorValue = newValue}
  }
  var hasTensorValue: Bool {
    return _storage._tensorValue != nil
  }
  mutating func clearTensorValue() {
    _storage._tensorValue = nil
  }

  /// op execution time.
  var execMicros: Int64 {
    get {return _storage._execMicros ?? 0}
    set {_uniqueStorage()._execMicros = newValue}
  }
  var hasExecMicros: Bool {
    return _storage._execMicros != nil
  }
  mutating func clearExecMicros() {
    _storage._execMicros = nil
  }

  /// Total requested bytes by the op.
  var requestedBytes: Int64 {
    get {return _storage._requestedBytes ?? 0}
    set {_uniqueStorage()._requestedBytes = newValue}
  }
  var hasRequestedBytes: Bool {
    return _storage._requestedBytes != nil
  }
  mutating func clearRequestedBytes() {
    _storage._requestedBytes = nil
  }

  /// Number of parameters if available.
  var parameters: Int64 {
    get {return _storage._parameters ?? 0}
    set {_uniqueStorage()._parameters = newValue}
  }
  var hasParameters: Bool {
    return _storage._parameters != nil
  }
  mutating func clearParameters() {
    _storage._parameters = nil
  }

  /// Number of float operations.
  var floatOps: Int64 {
    get {return _storage._floatOps ?? 0}
    set {_uniqueStorage()._floatOps = newValue}
  }
  var hasFloatOps: Bool {
    return _storage._floatOps != nil
  }
  mutating func clearFloatOps() {
    _storage._floatOps = nil
  }

  /// Number of inputs to the op.
  var inputs: Int64 {
    get {return _storage._inputs ?? 0}
    set {_uniqueStorage()._inputs = newValue}
  }
  var hasInputs: Bool {
    return _storage._inputs != nil
  }
  mutating func clearInputs() {
    _storage._inputs = nil
  }

  /// Device the op is assigned to.
  var device: String {
    get {return _storage._device ?? String()}
    set {_uniqueStorage()._device = newValue}
  }
  var hasDevice: Bool {
    return _storage._device != nil
  }
  mutating func clearDevice() {
    _storage._device = nil
  }

  /// The following are the aggregated stats from all accounted descendants and
  /// the op itself. The actual descendants depend on the data structure used
  /// (scope, graph).
  var totalExecMicros: Int64 {
    get {return _storage._totalExecMicros ?? 0}
    set {_uniqueStorage()._totalExecMicros = newValue}
  }
  var hasTotalExecMicros: Bool {
    return _storage._totalExecMicros != nil
  }
  mutating func clearTotalExecMicros() {
    _storage._totalExecMicros = nil
  }

  var totalRequestedBytes: Int64 {
    get {return _storage._totalRequestedBytes ?? 0}
    set {_uniqueStorage()._totalRequestedBytes = newValue}
  }
  var hasTotalRequestedBytes: Bool {
    return _storage._totalRequestedBytes != nil
  }
  mutating func clearTotalRequestedBytes() {
    _storage._totalRequestedBytes = nil
  }

  var totalParameters: Int64 {
    get {return _storage._totalParameters ?? 0}
    set {_uniqueStorage()._totalParameters = newValue}
  }
  var hasTotalParameters: Bool {
    return _storage._totalParameters != nil
  }
  mutating func clearTotalParameters() {
    _storage._totalParameters = nil
  }

  var totalFloatOps: Int64 {
    get {return _storage._totalFloatOps ?? 0}
    set {_uniqueStorage()._totalFloatOps = newValue}
  }
  var hasTotalFloatOps: Bool {
    return _storage._totalFloatOps != nil
  }
  mutating func clearTotalFloatOps() {
    _storage._totalFloatOps = nil
  }

  var totalInputs: Int64 {
    get {return _storage._totalInputs ?? 0}
    set {_uniqueStorage()._totalInputs = newValue}
  }
  var hasTotalInputs: Bool {
    return _storage._totalInputs != nil
  }
  mutating func clearTotalInputs() {
    _storage._totalInputs = nil
  }

  /// shape information, if available.
  var shapes: [Tensorflow_TensorShapeProto] {
    get {return _storage._shapes}
    set {_uniqueStorage()._shapes = newValue}
  }

  /// Descendants of the graph. The actual descendants depend on the data
  /// structure used (scope, graph).
  var children: [Tensorflow_Tfprof_TFProfNode] {
    get {return _storage._children}
    set {_uniqueStorage()._children = newValue}
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularStringField(value: &_storage._name)
        case 2: try decoder.decodeSingularInt64Field(value: &_storage._execMicros)
        case 3: try decoder.decodeSingularInt64Field(value: &_storage._requestedBytes)
        case 4: try decoder.decodeSingularInt64Field(value: &_storage._parameters)
        case 5: try decoder.decodeSingularInt64Field(value: &_storage._inputs)
        case 6: try decoder.decodeSingularInt64Field(value: &_storage._totalExecMicros)
        case 7: try decoder.decodeSingularInt64Field(value: &_storage._totalRequestedBytes)
        case 8: try decoder.decodeSingularInt64Field(value: &_storage._totalParameters)
        case 9: try decoder.decodeSingularInt64Field(value: &_storage._totalInputs)
        case 10: try decoder.decodeSingularStringField(value: &_storage._device)
        case 11: try decoder.decodeRepeatedMessageField(value: &_storage._shapes)
        case 12: try decoder.decodeRepeatedMessageField(value: &_storage._children)
        case 13: try decoder.decodeSingularInt64Field(value: &_storage._floatOps)
        case 14: try decoder.decodeSingularInt64Field(value: &_storage._totalFloatOps)
        case 15: try decoder.decodeSingularMessageField(value: &_storage._tensorValue)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if let v = _storage._name {
        try visitor.visitSingularStringField(value: v, fieldNumber: 1)
      }
      if let v = _storage._execMicros {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 2)
      }
      if let v = _storage._requestedBytes {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 3)
      }
      if let v = _storage._parameters {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 4)
      }
      if let v = _storage._inputs {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 5)
      }
      if let v = _storage._totalExecMicros {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 6)
      }
      if let v = _storage._totalRequestedBytes {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 7)
      }
      if let v = _storage._totalParameters {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 8)
      }
      if let v = _storage._totalInputs {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 9)
      }
      if let v = _storage._device {
        try visitor.visitSingularStringField(value: v, fieldNumber: 10)
      }
      if !_storage._shapes.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._shapes, fieldNumber: 11)
      }
      if !_storage._children.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._children, fieldNumber: 12)
      }
      if let v = _storage._floatOps {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 13)
      }
      if let v = _storage._totalFloatOps {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 14)
      }
      if let v = _storage._tensorValue {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 15)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow.tfprof"

extension Tensorflow_Tfprof_TFProfTensorProto: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "dtype"),
    2: .standard(proto: "value_double"),
    3: .standard(proto: "value_int64"),
    4: .standard(proto: "value_str"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_Tfprof_TFProfTensorProto) -> Bool {
    if self._dtype != other._dtype {return false}
    if self.valueDouble != other.valueDouble {return false}
    if self.valueInt64 != other.valueInt64 {return false}
    if self.valueStr != other.valueStr {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Tfprof_TFProfNode: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "name"),
    15: .standard(proto: "tensor_value"),
    2: .standard(proto: "exec_micros"),
    3: .standard(proto: "requested_bytes"),
    4: .same(proto: "parameters"),
    13: .standard(proto: "float_ops"),
    5: .same(proto: "inputs"),
    10: .same(proto: "device"),
    6: .standard(proto: "total_exec_micros"),
    7: .standard(proto: "total_requested_bytes"),
    8: .standard(proto: "total_parameters"),
    14: .standard(proto: "total_float_ops"),
    9: .standard(proto: "total_inputs"),
    11: .same(proto: "shapes"),
    12: .same(proto: "children"),
  ]

  fileprivate class _StorageClass {
    var _name: String? = nil
    var _tensorValue: Tensorflow_Tfprof_TFProfTensorProto? = nil
    var _execMicros: Int64? = nil
    var _requestedBytes: Int64? = nil
    var _parameters: Int64? = nil
    var _floatOps: Int64? = nil
    var _inputs: Int64? = nil
    var _device: String? = nil
    var _totalExecMicros: Int64? = nil
    var _totalRequestedBytes: Int64? = nil
    var _totalParameters: Int64? = nil
    var _totalFloatOps: Int64? = nil
    var _totalInputs: Int64? = nil
    var _shapes: [Tensorflow_TensorShapeProto] = []
    var _children: [Tensorflow_Tfprof_TFProfNode] = []

    init() {}

    init(copying source: _StorageClass) {
      _name = source._name
      _tensorValue = source._tensorValue
      _execMicros = source._execMicros
      _requestedBytes = source._requestedBytes
      _parameters = source._parameters
      _floatOps = source._floatOps
      _inputs = source._inputs
      _device = source._device
      _totalExecMicros = source._totalExecMicros
      _totalRequestedBytes = source._totalRequestedBytes
      _totalParameters = source._totalParameters
      _totalFloatOps = source._totalFloatOps
      _totalInputs = source._totalInputs
      _shapes = source._shapes
      _children = source._children
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: Tensorflow_Tfprof_TFProfNode) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._name != other_storage._name {return false}
        if _storage._tensorValue != other_storage._tensorValue {return false}
        if _storage._execMicros != other_storage._execMicros {return false}
        if _storage._requestedBytes != other_storage._requestedBytes {return false}
        if _storage._parameters != other_storage._parameters {return false}
        if _storage._floatOps != other_storage._floatOps {return false}
        if _storage._inputs != other_storage._inputs {return false}
        if _storage._device != other_storage._device {return false}
        if _storage._totalExecMicros != other_storage._totalExecMicros {return false}
        if _storage._totalRequestedBytes != other_storage._totalRequestedBytes {return false}
        if _storage._totalParameters != other_storage._totalParameters {return false}
        if _storage._totalFloatOps != other_storage._totalFloatOps {return false}
        if _storage._totalInputs != other_storage._totalInputs {return false}
        if _storage._shapes != other_storage._shapes {return false}
        if _storage._children != other_storage._children {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}
