/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/contrib/training/python/training/hparam.proto
 *
 */

// Copyright 2016 The TensorFlow Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// =============================================================================

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

/// Protocol buffer holding hyper parameters.
/// Examples of hyper parameters:
///   learning_rate = 0.1,
///   num_hidden_units = 100,
///   activations = ['relu', 'tanh']
struct Tensorflow_HParamDef: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".HParamDef"

  var hparam: Dictionary<String,Tensorflow_HParamDef.HParamType> = [:]

  var unknownFields = SwiftProtobuf.UnknownStorage()

  struct BytesList: SwiftProtobuf.Message {
    static let protoMessageName: String = Tensorflow_HParamDef.protoMessageName + ".BytesList"

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

  struct FloatList: SwiftProtobuf.Message {
    static let protoMessageName: String = Tensorflow_HParamDef.protoMessageName + ".FloatList"

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

  struct Int64List: SwiftProtobuf.Message {
    static let protoMessageName: String = Tensorflow_HParamDef.protoMessageName + ".Int64List"

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

  struct BoolList: SwiftProtobuf.Message {
    static let protoMessageName: String = Tensorflow_HParamDef.protoMessageName + ".BoolList"

    var value: [Bool] = []

    var unknownFields = SwiftProtobuf.UnknownStorage()

    init() {}

    mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeRepeatedBoolField(value: &self.value)
        default: break
        }
      }
    }

    func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
      if !self.value.isEmpty {
        try visitor.visitPackedBoolField(value: self.value, fieldNumber: 1)
      }
      try unknownFields.traverse(visitor: &visitor)
    }
  }

  struct HParamType: SwiftProtobuf.Message {
    static let protoMessageName: String = Tensorflow_HParamDef.protoMessageName + ".HParamType"

    var kind: OneOf_Kind? {
      get {return _storage._kind}
      set {_uniqueStorage()._kind = newValue}
    }

    var int64Value: Int64 {
      get {
        if case .int64Value(let v)? = _storage._kind {return v}
        return 0
      }
      set {_uniqueStorage()._kind = .int64Value(newValue)}
    }

    var floatValue: Float {
      get {
        if case .floatValue(let v)? = _storage._kind {return v}
        return 0
      }
      set {_uniqueStorage()._kind = .floatValue(newValue)}
    }

    var bytesValue: Data {
      get {
        if case .bytesValue(let v)? = _storage._kind {return v}
        return SwiftProtobuf.Internal.emptyData
      }
      set {_uniqueStorage()._kind = .bytesValue(newValue)}
    }

    var boolValue: Bool {
      get {
        if case .boolValue(let v)? = _storage._kind {return v}
        return false
      }
      set {_uniqueStorage()._kind = .boolValue(newValue)}
    }

    var int64List: Tensorflow_HParamDef.Int64List {
      get {
        if case .int64List(let v)? = _storage._kind {return v}
        return Tensorflow_HParamDef.Int64List()
      }
      set {_uniqueStorage()._kind = .int64List(newValue)}
    }

    var floatList: Tensorflow_HParamDef.FloatList {
      get {
        if case .floatList(let v)? = _storage._kind {return v}
        return Tensorflow_HParamDef.FloatList()
      }
      set {_uniqueStorage()._kind = .floatList(newValue)}
    }

    var bytesList: Tensorflow_HParamDef.BytesList {
      get {
        if case .bytesList(let v)? = _storage._kind {return v}
        return Tensorflow_HParamDef.BytesList()
      }
      set {_uniqueStorage()._kind = .bytesList(newValue)}
    }

    var boolList: Tensorflow_HParamDef.BoolList {
      get {
        if case .boolList(let v)? = _storage._kind {return v}
        return Tensorflow_HParamDef.BoolList()
      }
      set {_uniqueStorage()._kind = .boolList(newValue)}
    }

    var unknownFields = SwiftProtobuf.UnknownStorage()

    enum OneOf_Kind: Equatable {
      case int64Value(Int64)
      case floatValue(Float)
      case bytesValue(Data)
      case boolValue(Bool)
      case int64List(Tensorflow_HParamDef.Int64List)
      case floatList(Tensorflow_HParamDef.FloatList)
      case bytesList(Tensorflow_HParamDef.BytesList)
      case boolList(Tensorflow_HParamDef.BoolList)

      static func ==(lhs: Tensorflow_HParamDef.HParamType.OneOf_Kind, rhs: Tensorflow_HParamDef.HParamType.OneOf_Kind) -> Bool {
        switch (lhs, rhs) {
        case (.int64Value(let l), .int64Value(let r)): return l == r
        case (.floatValue(let l), .floatValue(let r)): return l == r
        case (.bytesValue(let l), .bytesValue(let r)): return l == r
        case (.boolValue(let l), .boolValue(let r)): return l == r
        case (.int64List(let l), .int64List(let r)): return l == r
        case (.floatList(let l), .floatList(let r)): return l == r
        case (.bytesList(let l), .bytesList(let r)): return l == r
        case (.boolList(let l), .boolList(let r)): return l == r
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
          case 1...8:
            if _storage._kind != nil {
              try decoder.handleConflictingOneOf()
            }
            _storage._kind = try Tensorflow_HParamDef.HParamType.OneOf_Kind(byDecodingFrom: &decoder, fieldNumber: fieldNumber)
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

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufString,Tensorflow_HParamDef.HParamType>.self, value: &self.hparam)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.hparam.isEmpty {
      try visitor.visitMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufString,Tensorflow_HParamDef.HParamType>.self, value: self.hparam, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow"

extension Tensorflow_HParamDef: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "hparam"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_HParamDef) -> Bool {
    if self.hparam != other.hparam {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_HParamDef.BytesList: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "value"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_HParamDef.BytesList) -> Bool {
    if self.value != other.value {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_HParamDef.FloatList: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "value"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_HParamDef.FloatList) -> Bool {
    if self.value != other.value {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_HParamDef.Int64List: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "value"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_HParamDef.Int64List) -> Bool {
    if self.value != other.value {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_HParamDef.BoolList: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "value"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_HParamDef.BoolList) -> Bool {
    if self.value != other.value {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_HParamDef.HParamType: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "int64_value"),
    2: .standard(proto: "float_value"),
    3: .standard(proto: "bytes_value"),
    7: .standard(proto: "bool_value"),
    4: .standard(proto: "int64_list"),
    5: .standard(proto: "float_list"),
    6: .standard(proto: "bytes_list"),
    8: .standard(proto: "bool_list"),
  ]

  fileprivate class _StorageClass {
    var _kind: Tensorflow_HParamDef.HParamType.OneOf_Kind?

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

  func _protobuf_generated_isEqualTo(other: Tensorflow_HParamDef.HParamType) -> Bool {
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

extension Tensorflow_HParamDef.HParamType.OneOf_Kind {
  fileprivate init?<T: SwiftProtobuf.Decoder>(byDecodingFrom decoder: inout T, fieldNumber: Int) throws {
    switch fieldNumber {
    case 1:
      var value = Int64()
      try decoder.decodeSingularInt64Field(value: &value)
      self = .int64Value(value)
      return
    case 2:
      var value = Float()
      try decoder.decodeSingularFloatField(value: &value)
      self = .floatValue(value)
      return
    case 3:
      var value = Data()
      try decoder.decodeSingularBytesField(value: &value)
      self = .bytesValue(value)
      return
    case 4:
      var value: Tensorflow_HParamDef.Int64List?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .int64List(value)
        return
      }
    case 5:
      var value: Tensorflow_HParamDef.FloatList?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .floatList(value)
        return
      }
    case 6:
      var value: Tensorflow_HParamDef.BytesList?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .bytesList(value)
        return
      }
    case 7:
      var value = Bool()
      try decoder.decodeSingularBoolField(value: &value)
      self = .boolValue(value)
      return
    case 8:
      var value: Tensorflow_HParamDef.BoolList?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .boolList(value)
        return
      }
    default:
      break
    }
    return nil
  }

  fileprivate func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    switch self {
    case .int64Value(let v):
      try visitor.visitSingularInt64Field(value: v, fieldNumber: 1)
    case .floatValue(let v):
      try visitor.visitSingularFloatField(value: v, fieldNumber: 2)
    case .bytesValue(let v):
      try visitor.visitSingularBytesField(value: v, fieldNumber: 3)
    case .int64List(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
    case .floatList(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
    case .bytesList(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 6)
    case .boolValue(let v):
      try visitor.visitSingularBoolField(value: v, fieldNumber: 7)
    case .boolList(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 8)
    }
  }
}
