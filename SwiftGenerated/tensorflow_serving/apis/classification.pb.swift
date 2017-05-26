/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow_serving/apis/classification.proto
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

/// A single class.
public struct Tensorflow_Serving_Class: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".Class"

  /// Label or name of the class.
  public var label: String = String()

  /// Score for this class (e.g., the probability the item belongs to this
  /// class).
  public var score: Float = 0

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.label)
      case 2: try decoder.decodeSingularFloatField(value: &self.score)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.label.isEmpty {
      try visitor.visitSingularStringField(value: self.label, fieldNumber: 1)
    }
    if self.score != 0 {
      try visitor.visitSingularFloatField(value: self.score, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

/// List of classes for a single item (tensorflow.Example).
public struct Tensorflow_Serving_Classifications: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".Classifications"

  public var classes: [Tensorflow_Serving_Class] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedMessageField(value: &self.classes)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.classes.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.classes, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

/// Contains one result per input example, in the same order as the input in
/// ClassificationRequest.
public struct Tensorflow_Serving_ClassificationResult: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".ClassificationResult"

  public var classifications: [Tensorflow_Serving_Classifications] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedMessageField(value: &self.classifications)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.classifications.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.classifications, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

public struct Tensorflow_Serving_ClassificationRequest: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".ClassificationRequest"

  /// Model Specification.
  public var modelSpec: Tensorflow_Serving_ModelSpec {
    get {return _storage._modelSpec ?? Tensorflow_Serving_ModelSpec()}
    set {_uniqueStorage()._modelSpec = newValue}
  }
  public var hasModelSpec: Bool {
    return _storage._modelSpec != nil
  }
  public mutating func clearModelSpec() {
    _storage._modelSpec = nil
  }

  /// Input data.
  public var input: Tensorflow_Serving_Input {
    get {return _storage._input ?? Tensorflow_Serving_Input()}
    set {_uniqueStorage()._input = newValue}
  }
  public var hasInput: Bool {
    return _storage._input != nil
  }
  public mutating func clearInput() {
    _storage._input = nil
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularMessageField(value: &_storage._modelSpec)
        case 2: try decoder.decodeSingularMessageField(value: &_storage._input)
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if let v = _storage._modelSpec {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
      }
      if let v = _storage._input {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

public struct Tensorflow_Serving_ClassificationResponse: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".ClassificationResponse"

  /// Result of the classification.
  public var result: Tensorflow_Serving_ClassificationResult {
    get {return _storage._result ?? Tensorflow_Serving_ClassificationResult()}
    set {_uniqueStorage()._result = newValue}
  }
  public var hasResult: Bool {
    return _storage._result != nil
  }
  public mutating func clearResult() {
    _storage._result = nil
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularMessageField(value: &_storage._result)
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if let v = _storage._result {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow.serving"

extension Tensorflow_Serving_Class: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "label"),
    2: .same(proto: "score"),
  ]

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_Class) -> Bool {
    if self.label != other.label {return false}
    if self.score != other.score {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Serving_Classifications: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "classes"),
  ]

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_Classifications) -> Bool {
    if self.classes != other.classes {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Serving_ClassificationResult: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "classifications"),
  ]

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_ClassificationResult) -> Bool {
    if self.classifications != other.classifications {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Serving_ClassificationRequest: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "model_spec"),
    2: .same(proto: "input"),
  ]

  fileprivate class _StorageClass {
    var _modelSpec: Tensorflow_Serving_ModelSpec? = nil
    var _input: Tensorflow_Serving_Input? = nil

    init() {}

    init(copying source: _StorageClass) {
      _modelSpec = source._modelSpec
      _input = source._input
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_ClassificationRequest) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._modelSpec != other_storage._modelSpec {return false}
        if _storage._input != other_storage._input {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Serving_ClassificationResponse: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "result"),
  ]

  fileprivate class _StorageClass {
    var _result: Tensorflow_Serving_ClassificationResult? = nil

    init() {}

    init(copying source: _StorageClass) {
      _result = source._result
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_ClassificationResponse) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._result != other_storage._result {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}