/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/core/example/feature.proto
 *
 */

// Protocol messages for describing features for machine learning model
// training or inference.
//
// There are three base Feature types:
//   - bytes
//   - float
//   - int64
//
// A Feature contains Lists which may hold zero or more values.  These
// lists are the base values BytesList, FloatList, Int64List.
//
// Features are organized into categories by name.  The Features message
// contains the mapping from name to Feature.
//
// Example Features for a movie recommendation application:
//   feature {
//     key: "age"
//     value { float_list {
//       value: 29.0
//     }}
//   }
//   feature {
//     key: "movie"
//     value { bytes_list {
//       value: "The Shawshank Redemption"
//       value: "Fight Club"
//     }}
//   }
//   feature {
//     key: "movie_ratings"
//     value { float_list {
//       value: 9.0
//       value: 9.7
//     }}
//   }
//   feature {
//     key: "suggestion"
//     value { bytes_list {
//       value: "Inception"
//     }}
//   }
//   feature {
//     key: "suggestion_purchased"
//     value { int64_list {
//       value: 1
//     }}
//   }
//   feature {
//     key: "purchase_price"
//     value { float_list {
//       value: 9.99
//     }}
//   }

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

/// Containers to hold repeated fundamental values.
struct Tensorflow_BytesList: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".BytesList"

  var value: [Data] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedBytesField(value: &self.value)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.value.isEmpty {
      try visitor.visitRepeatedBytesField(value: self.value, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

struct Tensorflow_FloatList: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".FloatList"

  var value: [Float] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedFloatField(value: &self.value)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.value.isEmpty {
      try visitor.visitPackedFloatField(value: self.value, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

struct Tensorflow_Int64List: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".Int64List"

  var value: [Int64] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedInt64Field(value: &self.value)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.value.isEmpty {
      try visitor.visitPackedInt64Field(value: self.value, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

/// Containers for non-sequential data.
struct Tensorflow_Feature: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".Feature"

  /// Each feature can be exactly one kind.
  var kind: OneOf_Kind? {
    get {return _storage._kind}
    set {_uniqueStorage()._kind = newValue}
  }

  var bytesList: Tensorflow_BytesList {
    get {
      if case .bytesList(let v)? = _storage._kind {return v}
      return Tensorflow_BytesList()
    }
    set {_uniqueStorage()._kind = .bytesList(newValue)}
  }

  var floatList: Tensorflow_FloatList {
    get {
      if case .floatList(let v)? = _storage._kind {return v}
      return Tensorflow_FloatList()
    }
    set {_uniqueStorage()._kind = .floatList(newValue)}
  }

  var int64List: Tensorflow_Int64List {
    get {
      if case .int64List(let v)? = _storage._kind {return v}
      return Tensorflow_Int64List()
    }
    set {_uniqueStorage()._kind = .int64List(newValue)}
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  /// Each feature can be exactly one kind.
  enum OneOf_Kind: Equatable {
    case bytesList(Tensorflow_BytesList)
    case floatList(Tensorflow_FloatList)
    case int64List(Tensorflow_Int64List)

    static func ==(lhs: Tensorflow_Feature.OneOf_Kind, rhs: Tensorflow_Feature.OneOf_Kind) -> Bool {
      switch (lhs, rhs) {
      case (.bytesList(let l), .bytesList(let r)): return l == r
      case (.floatList(let l), .floatList(let r)): return l == r
      case (.int64List(let l), .int64List(let r)): return l == r
      default: return false
      }
    }
  }

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1...3:
          if _storage._kind != nil {
            try decoder.handleConflictingOneOf()
          }
          _storage._kind = try Tensorflow_Feature.OneOf_Kind(byDecodingFrom: &decoder, fieldNumber: fieldNumber)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      try _storage._kind?.traverse(visitor: &visitor)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

struct Tensorflow_Features: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".Features"

  /// Map from feature name to feature.
  var feature: Dictionary<String,Tensorflow_Feature> = [:]

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufString,Tensorflow_Feature>.self, value: &self.feature)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.feature.isEmpty {
      try visitor.visitMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufString,Tensorflow_Feature>.self, value: self.feature, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

/// Containers for sequential data.
///
/// A FeatureList contains lists of Features.  These may hold zero or more
/// Feature values.
///
/// FeatureLists are organized into categories by name.  The FeatureLists message
/// contains the mapping from name to FeatureList.
struct Tensorflow_FeatureList: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".FeatureList"

  var feature: [Tensorflow_Feature] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedMessageField(value: &self.feature)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.feature.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.feature, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

struct Tensorflow_FeatureLists: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".FeatureLists"

  /// Map from feature name to feature list.
  var featureList: Dictionary<String,Tensorflow_FeatureList> = [:]

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufString,Tensorflow_FeatureList>.self, value: &self.featureList)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.featureList.isEmpty {
      try visitor.visitMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufString,Tensorflow_FeatureList>.self, value: self.featureList, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow"

extension Tensorflow_BytesList: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "value"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_BytesList) -> Bool {
    if self.value != other.value {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_FloatList: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "value"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_FloatList) -> Bool {
    if self.value != other.value {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Int64List: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "value"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_Int64List) -> Bool {
    if self.value != other.value {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Feature: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "bytes_list"),
    2: .standard(proto: "float_list"),
    3: .standard(proto: "int64_list"),
  ]

  fileprivate class _StorageClass {
    var _kind: Tensorflow_Feature.OneOf_Kind?

    init() {}

    init(copying source: _StorageClass) {
      _kind = source._kind
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: Tensorflow_Feature) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._kind != other_storage._kind {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Feature.OneOf_Kind {
  fileprivate init?<T: SwiftProtobuf.Decoder>(byDecodingFrom decoder: inout T, fieldNumber: Int) throws {
    switch fieldNumber {
    case 1:
      var value: Tensorflow_BytesList?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .bytesList(value)
        return
      }
    case 2:
      var value: Tensorflow_FloatList?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .floatList(value)
        return
      }
    case 3:
      var value: Tensorflow_Int64List?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .int64List(value)
        return
      }
    default:
      break
    }
    return nil
  }

  fileprivate func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    switch self {
    case .bytesList(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    case .floatList(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    case .int64List(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
    }
  }
}

extension Tensorflow_Features: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "feature"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_Features) -> Bool {
    if self.feature != other.feature {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_FeatureList: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "feature"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_FeatureList) -> Bool {
    if self.feature != other.feature {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_FeatureLists: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "feature_list"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_FeatureLists) -> Bool {
    if self.featureList != other.featureList {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}
