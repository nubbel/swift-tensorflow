/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/core/framework/tensor.proto
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

/// Protocol buffer representing a tensor.
struct Tensorflow_TensorProto: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".TensorProto"

  var dtype: Tensorflow_DataType {
    get {return _storage._dtype}
    set {_uniqueStorage()._dtype = newValue}
  }

  /// Shape of the tensor.  TODO(touts): sort out the 0-rank issues.
  var tensorShape: Tensorflow_TensorShapeProto {
    get {return _storage._tensorShape ?? Tensorflow_TensorShapeProto()}
    set {_uniqueStorage()._tensorShape = newValue}
  }
  var hasTensorShape: Bool {
    return _storage._tensorShape != nil
  }
  mutating func clearTensorShape() {
    _storage._tensorShape = nil
  }

  /// Version number.
  ///
  /// In version 0, if the "repeated xxx" representations contain only one
  /// element, that element is repeated to fill the shape.  This makes it easy
  /// to represent a constant Tensor with a single value.
  var versionNumber: Int32 {
    get {return _storage._versionNumber}
    set {_uniqueStorage()._versionNumber = newValue}
  }

  /// Serialized raw tensor content from either Tensor::AsProtoTensorContent or
  /// memcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation
  /// can be used for all tensor types. The purpose of this representation is to
  /// reduce serialization overhead during RPC call by avoiding serialization of
  /// many repeated small items.
  var tensorContent: Data {
    get {return _storage._tensorContent}
    set {_uniqueStorage()._tensorContent = newValue}
  }

  /// DT_HALF. Note that since protobuf has no int16 type, we'll have some
  /// pointless zero padding for each value here.
  var halfVal: [Int32] {
    get {return _storage._halfVal}
    set {_uniqueStorage()._halfVal = newValue}
  }

  /// DT_FLOAT.
  var floatVal: [Float] {
    get {return _storage._floatVal}
    set {_uniqueStorage()._floatVal = newValue}
  }

  /// DT_DOUBLE.
  var doubleVal: [Double] {
    get {return _storage._doubleVal}
    set {_uniqueStorage()._doubleVal = newValue}
  }

  /// DT_INT32, DT_INT16, DT_INT8, DT_UINT8.
  var intVal: [Int32] {
    get {return _storage._intVal}
    set {_uniqueStorage()._intVal = newValue}
  }

  /// DT_STRING
  var stringVal: [Data] {
    get {return _storage._stringVal}
    set {_uniqueStorage()._stringVal = newValue}
  }

  /// DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real
  /// and imaginary parts of i-th single precision complex.
  var scomplexVal: [Float] {
    get {return _storage._scomplexVal}
    set {_uniqueStorage()._scomplexVal = newValue}
  }

  /// DT_INT64
  var int64Val: [Int64] {
    get {return _storage._int64Val}
    set {_uniqueStorage()._int64Val = newValue}
  }

  /// DT_BOOL
  var boolVal: [Bool] {
    get {return _storage._boolVal}
    set {_uniqueStorage()._boolVal = newValue}
  }

  /// DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real
  /// and imaginary parts of i-th double precision complex.
  var dcomplexVal: [Double] {
    get {return _storage._dcomplexVal}
    set {_uniqueStorage()._dcomplexVal = newValue}
  }

  /// DT_RESOURCE
  var resourceHandleVal: [Tensorflow_ResourceHandle] {
    get {return _storage._resourceHandleVal}
    set {_uniqueStorage()._resourceHandleVal = newValue}
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularEnumField(value: &_storage._dtype)
        case 2: try decoder.decodeSingularMessageField(value: &_storage._tensorShape)
        case 3: try decoder.decodeSingularInt32Field(value: &_storage._versionNumber)
        case 4: try decoder.decodeSingularBytesField(value: &_storage._tensorContent)
        case 5: try decoder.decodeRepeatedFloatField(value: &_storage._floatVal)
        case 6: try decoder.decodeRepeatedDoubleField(value: &_storage._doubleVal)
        case 7: try decoder.decodeRepeatedInt32Field(value: &_storage._intVal)
        case 8: try decoder.decodeRepeatedBytesField(value: &_storage._stringVal)
        case 9: try decoder.decodeRepeatedFloatField(value: &_storage._scomplexVal)
        case 10: try decoder.decodeRepeatedInt64Field(value: &_storage._int64Val)
        case 11: try decoder.decodeRepeatedBoolField(value: &_storage._boolVal)
        case 12: try decoder.decodeRepeatedDoubleField(value: &_storage._dcomplexVal)
        case 13: try decoder.decodeRepeatedInt32Field(value: &_storage._halfVal)
        case 14: try decoder.decodeRepeatedMessageField(value: &_storage._resourceHandleVal)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if _storage._dtype != Tensorflow_DataType.dtInvalid {
        try visitor.visitSingularEnumField(value: _storage._dtype, fieldNumber: 1)
      }
      if let v = _storage._tensorShape {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
      }
      if _storage._versionNumber != 0 {
        try visitor.visitSingularInt32Field(value: _storage._versionNumber, fieldNumber: 3)
      }
      if !_storage._tensorContent.isEmpty {
        try visitor.visitSingularBytesField(value: _storage._tensorContent, fieldNumber: 4)
      }
      if !_storage._floatVal.isEmpty {
        try visitor.visitPackedFloatField(value: _storage._floatVal, fieldNumber: 5)
      }
      if !_storage._doubleVal.isEmpty {
        try visitor.visitPackedDoubleField(value: _storage._doubleVal, fieldNumber: 6)
      }
      if !_storage._intVal.isEmpty {
        try visitor.visitPackedInt32Field(value: _storage._intVal, fieldNumber: 7)
      }
      if !_storage._stringVal.isEmpty {
        try visitor.visitRepeatedBytesField(value: _storage._stringVal, fieldNumber: 8)
      }
      if !_storage._scomplexVal.isEmpty {
        try visitor.visitPackedFloatField(value: _storage._scomplexVal, fieldNumber: 9)
      }
      if !_storage._int64Val.isEmpty {
        try visitor.visitPackedInt64Field(value: _storage._int64Val, fieldNumber: 10)
      }
      if !_storage._boolVal.isEmpty {
        try visitor.visitPackedBoolField(value: _storage._boolVal, fieldNumber: 11)
      }
      if !_storage._dcomplexVal.isEmpty {
        try visitor.visitPackedDoubleField(value: _storage._dcomplexVal, fieldNumber: 12)
      }
      if !_storage._halfVal.isEmpty {
        try visitor.visitPackedInt32Field(value: _storage._halfVal, fieldNumber: 13)
      }
      if !_storage._resourceHandleVal.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._resourceHandleVal, fieldNumber: 14)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow"

extension Tensorflow_TensorProto: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "dtype"),
    2: .standard(proto: "tensor_shape"),
    3: .standard(proto: "version_number"),
    4: .standard(proto: "tensor_content"),
    13: .standard(proto: "half_val"),
    5: .standard(proto: "float_val"),
    6: .standard(proto: "double_val"),
    7: .standard(proto: "int_val"),
    8: .standard(proto: "string_val"),
    9: .standard(proto: "scomplex_val"),
    10: .standard(proto: "int64_val"),
    11: .standard(proto: "bool_val"),
    12: .standard(proto: "dcomplex_val"),
    14: .standard(proto: "resource_handle_val"),
  ]

  fileprivate class _StorageClass {
    var _dtype: Tensorflow_DataType = Tensorflow_DataType.dtInvalid
    var _tensorShape: Tensorflow_TensorShapeProto? = nil
    var _versionNumber: Int32 = 0
    var _tensorContent: Data = SwiftProtobuf.Internal.emptyData
    var _halfVal: [Int32] = []
    var _floatVal: [Float] = []
    var _doubleVal: [Double] = []
    var _intVal: [Int32] = []
    var _stringVal: [Data] = []
    var _scomplexVal: [Float] = []
    var _int64Val: [Int64] = []
    var _boolVal: [Bool] = []
    var _dcomplexVal: [Double] = []
    var _resourceHandleVal: [Tensorflow_ResourceHandle] = []

    init() {}

    init(copying source: _StorageClass) {
      _dtype = source._dtype
      _tensorShape = source._tensorShape
      _versionNumber = source._versionNumber
      _tensorContent = source._tensorContent
      _halfVal = source._halfVal
      _floatVal = source._floatVal
      _doubleVal = source._doubleVal
      _intVal = source._intVal
      _stringVal = source._stringVal
      _scomplexVal = source._scomplexVal
      _int64Val = source._int64Val
      _boolVal = source._boolVal
      _dcomplexVal = source._dcomplexVal
      _resourceHandleVal = source._resourceHandleVal
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: Tensorflow_TensorProto) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._dtype != other_storage._dtype {return false}
        if _storage._tensorShape != other_storage._tensorShape {return false}
        if _storage._versionNumber != other_storage._versionNumber {return false}
        if _storage._tensorContent != other_storage._tensorContent {return false}
        if _storage._halfVal != other_storage._halfVal {return false}
        if _storage._floatVal != other_storage._floatVal {return false}
        if _storage._doubleVal != other_storage._doubleVal {return false}
        if _storage._intVal != other_storage._intVal {return false}
        if _storage._stringVal != other_storage._stringVal {return false}
        if _storage._scomplexVal != other_storage._scomplexVal {return false}
        if _storage._int64Val != other_storage._int64Val {return false}
        if _storage._boolVal != other_storage._boolVal {return false}
        if _storage._dcomplexVal != other_storage._dcomplexVal {return false}
        if _storage._resourceHandleVal != other_storage._resourceHandleVal {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}
