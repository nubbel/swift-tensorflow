// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: tensorflow_serving/apis/model.proto
//
// For information on using the generated types, please see the documenation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that your are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

/// Metadata for an inference request such as the model name and version.
public struct Tensorflow_Serving_ModelSpec: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".ModelSpec"

  /// Required servable name.
  public var name: String {
    get {return _storage._name}
    set {_uniqueStorage()._name = newValue}
  }

  /// Optional version. If unspecified, will use the latest (numerical) version.
  /// Typically not needed unless coordinating across multiple models that were
  /// co-trained and/or have inter-dependencies on the versions used at inference
  /// time.
  public var version: SwiftProtobuf.Google_Protobuf_Int64Value {
    get {return _storage._version ?? SwiftProtobuf.Google_Protobuf_Int64Value()}
    set {_uniqueStorage()._version = newValue}
  }
  /// Returns true if `version` has been explicitly set.
  public var hasVersion: Bool {return _storage._version != nil}
  /// Clears the value of `version`. Subsequent reads from it will return its default value.
  public mutating func clearVersion() {_storage._version = nil}

  /// A named signature to evaluate. If unspecified, the default signature will
  /// be used. Note that only MultiInference will initially support this.
  public var signatureName: String {
    get {return _storage._signatureName}
    set {_uniqueStorage()._signatureName = newValue}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  /// Used by the decoding initializers in the SwiftProtobuf library, not generally
  /// used directly. `init(serializedData:)`, `init(jsonUTF8Data:)`, and other decoding
  /// initializers are defined in the SwiftProtobuf library. See the Message and
  /// Message+*Additions` files.
  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularStringField(value: &_storage._name)
        case 2: try decoder.decodeSingularMessageField(value: &_storage._version)
        case 3: try decoder.decodeSingularStringField(value: &_storage._signatureName)
        default: break
        }
      }
    }
  }

  /// Used by the encoding methods of the SwiftProtobuf library, not generally
  /// used directly. `Message.serializedData()`, `Message.jsonUTF8Data()`, and
  /// other serializer methods are defined in the SwiftProtobuf library. See the
  /// `Message` and `Message+*Additions` files.
  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if !_storage._name.isEmpty {
        try visitor.visitSingularStringField(value: _storage._name, fieldNumber: 1)
      }
      if let v = _storage._version {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
      }
      if !_storage._signatureName.isEmpty {
        try visitor.visitSingularStringField(value: _storage._signatureName, fieldNumber: 3)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass.defaultInstance
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow.serving"

extension Tensorflow_Serving_ModelSpec: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "name"),
    2: .same(proto: "version"),
    3: .standard(proto: "signature_name"),
  ]

  fileprivate class _StorageClass {
    var _name: String = String()
    var _version: SwiftProtobuf.Google_Protobuf_Int64Value? = nil
    var _signatureName: String = String()

    static let defaultInstance = _StorageClass()

    private init() {}

    init(copying source: _StorageClass) {
      _name = source._name
      _version = source._version
      _signatureName = source._signatureName
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_ModelSpec) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._name != other_storage._name {return false}
        if _storage._version != other_storage._version {return false}
        if _storage._signatureName != other_storage._signatureName {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}