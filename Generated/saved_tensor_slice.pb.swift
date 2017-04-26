/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/core/util/saved_tensor_slice.proto
 *
 */

// Protocol buffers for saved tensor slices. It's used for the brain tensor
// ops checkpoints and the V3 checkpoints in dist_belief.

// A checkpoint file is an sstable. The value for each record is a serialized
// SavedTensorSlices message (defined below).
//
// Each checkpoint file has a record with the empty key (""), which corresponds
// to a SavedTensorSlices message that contains a "meta", that serves as a
// table of contents on all the tensor slices saved in this file. Since the key
// is "", it's always the first record in each file.
//
// Each of the rest of the records in a checkpoint stores the raw data of a
// particular tensor slice, in SavedSlice format. The corresponding key is an
// ordered code that encodes the name of the tensor and the slice
// information. The name is also stored in the SaveSlice message for ease of
// debugging and manual examination.

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

/// Metadata describing the set of slices of the same tensor saved in a
/// checkpoint file.
struct Tensorflow_SavedSliceMeta: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".SavedSliceMeta"

  /// Name of the tensor.
  var name: String {
    get {return _storage._name}
    set {_uniqueStorage()._name = newValue}
  }

  /// Shape of the tensor
  var shape: Tensorflow_TensorShapeProto {
    get {return _storage._shape ?? Tensorflow_TensorShapeProto()}
    set {_uniqueStorage()._shape = newValue}
  }
  var hasShape: Bool {
    return _storage._shape != nil
  }
  mutating func clearShape() {
    _storage._shape = nil
  }

  /// Type of the tensor
  var type: Tensorflow_DataType {
    get {return _storage._type}
    set {_uniqueStorage()._type = newValue}
  }

  /// Explicit list of slices saved in the checkpoint file.
  var slice: [Tensorflow_TensorSliceProto] {
    get {return _storage._slice}
    set {_uniqueStorage()._slice = newValue}
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularStringField(value: &_storage._name)
        case 2: try decoder.decodeSingularMessageField(value: &_storage._shape)
        case 3: try decoder.decodeSingularEnumField(value: &_storage._type)
        case 4: try decoder.decodeRepeatedMessageField(value: &_storage._slice)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if !_storage._name.isEmpty {
        try visitor.visitSingularStringField(value: _storage._name, fieldNumber: 1)
      }
      if let v = _storage._shape {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
      }
      if _storage._type != Tensorflow_DataType.dtInvalid {
        try visitor.visitSingularEnumField(value: _storage._type, fieldNumber: 3)
      }
      if !_storage._slice.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._slice, fieldNumber: 4)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

/// Metadata describing the set of tensor slices saved in a checkpoint file.
/// It is always stored at the beginning of each checkpoint file.
struct Tensorflow_SavedTensorSliceMeta: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".SavedTensorSliceMeta"

  /// Each SavedSliceMeta describes the slices for one tensor.
  var tensor: [Tensorflow_SavedSliceMeta] {
    get {return _storage._tensor}
    set {_uniqueStorage()._tensor = newValue}
  }

  /// Compatibility version of this checkpoint.  See core/public/version.h
  /// for version history.
  var versions: Tensorflow_VersionDef {
    get {return _storage._versions ?? Tensorflow_VersionDef()}
    set {_uniqueStorage()._versions = newValue}
  }
  var hasVersions: Bool {
    return _storage._versions != nil
  }
  mutating func clearVersions() {
    _storage._versions = nil
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeRepeatedMessageField(value: &_storage._tensor)
        case 2: try decoder.decodeSingularMessageField(value: &_storage._versions)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if !_storage._tensor.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._tensor, fieldNumber: 1)
      }
      if let v = _storage._versions {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

/// Saved tensor slice: it stores the name of the tensors, the slice, and the
/// raw data.
struct Tensorflow_SavedSlice: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".SavedSlice"

  /// Name of the tensor that this slice belongs to. This must be identical to
  /// the name used to encode the key for this record.
  var name: String {
    get {return _storage._name}
    set {_uniqueStorage()._name = newValue}
  }

  /// Extent of the slice.  Must have one entry for each of the dimension of the
  /// tensor that this slice belongs to.
  var slice: Tensorflow_TensorSliceProto {
    get {return _storage._slice ?? Tensorflow_TensorSliceProto()}
    set {_uniqueStorage()._slice = newValue}
  }
  var hasSlice: Bool {
    return _storage._slice != nil
  }
  mutating func clearSlice() {
    _storage._slice = nil
  }

  /// The raw data of the slice is stored as a TensorProto. Only raw data are
  /// stored (we don't fill in fields such as dtype or tensor_shape).
  var data: Tensorflow_TensorProto {
    get {return _storage._data ?? Tensorflow_TensorProto()}
    set {_uniqueStorage()._data = newValue}
  }
  var hasData: Bool {
    return _storage._data != nil
  }
  mutating func clearData() {
    _storage._data = nil
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularStringField(value: &_storage._name)
        case 2: try decoder.decodeSingularMessageField(value: &_storage._slice)
        case 3: try decoder.decodeSingularMessageField(value: &_storage._data)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if !_storage._name.isEmpty {
        try visitor.visitSingularStringField(value: _storage._name, fieldNumber: 1)
      }
      if let v = _storage._slice {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
      }
      if let v = _storage._data {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

/// Each record in a v3 checkpoint file is a serialized SavedTensorSlices
/// message.
struct Tensorflow_SavedTensorSlices: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".SavedTensorSlices"

  /// This is only present at the first item of each checkpoint file and serves
  /// as a table of contents, listing all the tensor slices saved in this file.
  var meta: Tensorflow_SavedTensorSliceMeta {
    get {return _storage._meta ?? Tensorflow_SavedTensorSliceMeta()}
    set {_uniqueStorage()._meta = newValue}
  }
  var hasMeta: Bool {
    return _storage._meta != nil
  }
  mutating func clearMeta() {
    _storage._meta = nil
  }

  /// This exists in all but the first item of each checkpoint file.
  var data: Tensorflow_SavedSlice {
    get {return _storage._data ?? Tensorflow_SavedSlice()}
    set {_uniqueStorage()._data = newValue}
  }
  var hasData: Bool {
    return _storage._data != nil
  }
  mutating func clearData() {
    _storage._data = nil
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularMessageField(value: &_storage._meta)
        case 2: try decoder.decodeSingularMessageField(value: &_storage._data)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if let v = _storage._meta {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
      }
      if let v = _storage._data {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow"

extension Tensorflow_SavedSliceMeta: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "name"),
    2: .same(proto: "shape"),
    3: .same(proto: "type"),
    4: .same(proto: "slice"),
  ]

  fileprivate class _StorageClass {
    var _name: String = String()
    var _shape: Tensorflow_TensorShapeProto? = nil
    var _type: Tensorflow_DataType = Tensorflow_DataType.dtInvalid
    var _slice: [Tensorflow_TensorSliceProto] = []

    init() {}

    init(copying source: _StorageClass) {
      _name = source._name
      _shape = source._shape
      _type = source._type
      _slice = source._slice
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: Tensorflow_SavedSliceMeta) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._name != other_storage._name {return false}
        if _storage._shape != other_storage._shape {return false}
        if _storage._type != other_storage._type {return false}
        if _storage._slice != other_storage._slice {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_SavedTensorSliceMeta: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "tensor"),
    2: .same(proto: "versions"),
  ]

  fileprivate class _StorageClass {
    var _tensor: [Tensorflow_SavedSliceMeta] = []
    var _versions: Tensorflow_VersionDef? = nil

    init() {}

    init(copying source: _StorageClass) {
      _tensor = source._tensor
      _versions = source._versions
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: Tensorflow_SavedTensorSliceMeta) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._tensor != other_storage._tensor {return false}
        if _storage._versions != other_storage._versions {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_SavedSlice: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "name"),
    2: .same(proto: "slice"),
    3: .same(proto: "data"),
  ]

  fileprivate class _StorageClass {
    var _name: String = String()
    var _slice: Tensorflow_TensorSliceProto? = nil
    var _data: Tensorflow_TensorProto? = nil

    init() {}

    init(copying source: _StorageClass) {
      _name = source._name
      _slice = source._slice
      _data = source._data
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: Tensorflow_SavedSlice) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._name != other_storage._name {return false}
        if _storage._slice != other_storage._slice {return false}
        if _storage._data != other_storage._data {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_SavedTensorSlices: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "meta"),
    2: .same(proto: "data"),
  ]

  fileprivate class _StorageClass {
    var _meta: Tensorflow_SavedTensorSliceMeta? = nil
    var _data: Tensorflow_SavedSlice? = nil

    init() {}

    init(copying source: _StorageClass) {
      _meta = source._meta
      _data = source._data
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: Tensorflow_SavedTensorSlices) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._meta != other_storage._meta {return false}
        if _storage._data != other_storage._data {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}