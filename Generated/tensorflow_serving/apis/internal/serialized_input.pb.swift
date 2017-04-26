/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow_serving/apis/internal/serialized_input.proto
 *
 */

// Copyright 2017 Google Inc. All Rights Reserved.
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.
//==============================================================================

// Serialized counterparts of the messages in input.proto. These protos enable
// us to keep the original tensorflow.serving.Input's structure but with the
// tensorflow.Examples in their serialized form. When combined with lazy
// parsing, this improves performance by allowing us to skip a redundant
// deserialization/serialization loop.
//
// WARNING: These are internal implementation details and not part of the public
// API.

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

public struct Tensorflow_Serving_Internal_SerializedExampleList: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".SerializedExampleList"

  public var examples: [Data] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedBytesField(value: &self.examples)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.examples.isEmpty {
      try visitor.visitRepeatedBytesField(value: self.examples, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

public struct Tensorflow_Serving_Internal_SerializedExampleListWithContext: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".SerializedExampleListWithContext"

  public var examples: [Data] = []

  public var context: Data = SwiftProtobuf.Internal.emptyData

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedBytesField(value: &self.examples)
      case 2: try decoder.decodeSingularBytesField(value: &self.context)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.examples.isEmpty {
      try visitor.visitRepeatedBytesField(value: self.examples, fieldNumber: 1)
    }
    if !self.context.isEmpty {
      try visitor.visitSingularBytesField(value: self.context, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

public struct Tensorflow_Serving_Internal_SerializedInput: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".SerializedInput"

  public var kind: OneOf_Kind? {
    get {return _storage._kind}
    set {_uniqueStorage()._kind = newValue}
  }

  public var exampleList: Tensorflow_Serving_Internal_SerializedExampleList {
    get {
      if case .exampleList(let v)? = _storage._kind {return v}
      return Tensorflow_Serving_Internal_SerializedExampleList()
    }
    set {_uniqueStorage()._kind = .exampleList(newValue)}
  }

  public var exampleListWithContext: Tensorflow_Serving_Internal_SerializedExampleListWithContext {
    get {
      if case .exampleListWithContext(let v)? = _storage._kind {return v}
      return Tensorflow_Serving_Internal_SerializedExampleListWithContext()
    }
    set {_uniqueStorage()._kind = .exampleListWithContext(newValue)}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum OneOf_Kind: Equatable {
    case exampleList(Tensorflow_Serving_Internal_SerializedExampleList)
    case exampleListWithContext(Tensorflow_Serving_Internal_SerializedExampleListWithContext)

    public static func ==(lhs: Tensorflow_Serving_Internal_SerializedInput.OneOf_Kind, rhs: Tensorflow_Serving_Internal_SerializedInput.OneOf_Kind) -> Bool {
      switch (lhs, rhs) {
      case (.exampleList(let l), .exampleList(let r)): return l == r
      case (.exampleListWithContext(let l), .exampleListWithContext(let r)): return l == r
      default: return false
      }
    }
  }

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1, 2:
          if _storage._kind != nil {
            try decoder.handleConflictingOneOf()
          }
          _storage._kind = try Tensorflow_Serving_Internal_SerializedInput.OneOf_Kind(byDecodingFrom: &decoder, fieldNumber: fieldNumber)
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      try _storage._kind?.traverse(visitor: &visitor)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow.serving.internal"

extension Tensorflow_Serving_Internal_SerializedExampleList: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "examples"),
  ]

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_Internal_SerializedExampleList) -> Bool {
    if self.examples != other.examples {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Serving_Internal_SerializedExampleListWithContext: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "examples"),
    2: .same(proto: "context"),
  ]

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_Internal_SerializedExampleListWithContext) -> Bool {
    if self.examples != other.examples {return false}
    if self.context != other.context {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Serving_Internal_SerializedInput: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "example_list"),
    2: .standard(proto: "example_list_with_context"),
  ]

  fileprivate class _StorageClass {
    var _kind: Tensorflow_Serving_Internal_SerializedInput.OneOf_Kind?

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

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_Internal_SerializedInput) -> Bool {
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

extension Tensorflow_Serving_Internal_SerializedInput.OneOf_Kind {
  fileprivate init?<T: SwiftProtobuf.Decoder>(byDecodingFrom decoder: inout T, fieldNumber: Int) throws {
    switch fieldNumber {
    case 1:
      var value: Tensorflow_Serving_Internal_SerializedExampleList?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .exampleList(value)
        return
      }
    case 2:
      var value: Tensorflow_Serving_Internal_SerializedExampleListWithContext?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .exampleListWithContext(value)
        return
      }
    default:
      break
    }
    return nil
  }

  fileprivate func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    switch self {
    case .exampleList(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    case .exampleListWithContext(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    }
  }
}
