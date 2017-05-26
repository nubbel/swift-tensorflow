/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow_serving/config/model_server_config.proto
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

/// The type of model.
/// TODO(b/31336131): DEPRECATED.
public enum Tensorflow_Serving_ModelType: SwiftProtobuf.Enum {
  public typealias RawValue = Int
  case modelTypeUnspecified // = 0
  case tensorflow // = 1
  case other // = 2
  case UNRECOGNIZED(Int)

  public init() {
    self = .modelTypeUnspecified
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .modelTypeUnspecified
    case 1: self = .tensorflow
    case 2: self = .other
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public var rawValue: Int {
    switch self {
    case .modelTypeUnspecified: return 0
    case .tensorflow: return 1
    case .other: return 2
    case .UNRECOGNIZED(let i): return i
    }
  }

}

/// Common configuration for loading a model being served.
public struct Tensorflow_Serving_ModelConfig: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".ModelConfig"

  /// Name of the model.
  public var name: String {
    get {return _storage._name}
    set {_uniqueStorage()._name = newValue}
  }

  /// Base path to the model, excluding the version directory.
  /// E.g> for a model at /foo/bar/my_model/123, where 123 is the version, the
  /// base path is /foo/bar/my_model.
  ///
  /// (This can be changed once a model is in serving, *if* the underlying data
  /// remains the same. Otherwise there are no guarantees about whether the old
  /// or new data will be used for model versions currently loaded.)
  public var basePath: String {
    get {return _storage._basePath}
    set {_uniqueStorage()._basePath = newValue}
  }

  /// Type of model.
  /// TODO(b/31336131): DEPRECATED. Please use 'model_platform' instead.
  public var modelType: Tensorflow_Serving_ModelType {
    get {return _storage._modelType}
    set {_uniqueStorage()._modelType = newValue}
  }

  /// Type of model (e.g. "tensorflow").
  ///
  /// (This cannot be changed once a model is in serving.)
  public var modelPlatform: String {
    get {return _storage._modelPlatform}
    set {_uniqueStorage()._modelPlatform = newValue}
  }

  /// Version policy for the model indicating how many versions of the model to
  /// be served at the same time.
  /// The default option is to serve only the latest version of the model.
  ///
  /// (This can be changed once a model is in serving.)
  public var versionPolicy: Tensorflow_Serving_FileSystemStoragePathSourceConfig.VersionPolicy {
    get {return _storage._versionPolicy}
    set {_uniqueStorage()._versionPolicy = newValue}
  }

  /// Configures logging requests and responses, to the model.
  ///
  /// (This can be changed once a model is in serving.)
  public var loggingConfig: Tensorflow_Serving_LoggingConfig {
    get {return _storage._loggingConfig ?? Tensorflow_Serving_LoggingConfig()}
    set {_uniqueStorage()._loggingConfig = newValue}
  }
  public var hasLoggingConfig: Bool {
    return _storage._loggingConfig != nil
  }
  public mutating func clearLoggingConfig() {
    _storage._loggingConfig = nil
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularStringField(value: &_storage._name)
        case 2: try decoder.decodeSingularStringField(value: &_storage._basePath)
        case 3: try decoder.decodeSingularEnumField(value: &_storage._modelType)
        case 4: try decoder.decodeSingularStringField(value: &_storage._modelPlatform)
        case 5: try decoder.decodeSingularEnumField(value: &_storage._versionPolicy)
        case 6: try decoder.decodeSingularMessageField(value: &_storage._loggingConfig)
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if !_storage._name.isEmpty {
        try visitor.visitSingularStringField(value: _storage._name, fieldNumber: 1)
      }
      if !_storage._basePath.isEmpty {
        try visitor.visitSingularStringField(value: _storage._basePath, fieldNumber: 2)
      }
      if _storage._modelType != Tensorflow_Serving_ModelType.modelTypeUnspecified {
        try visitor.visitSingularEnumField(value: _storage._modelType, fieldNumber: 3)
      }
      if !_storage._modelPlatform.isEmpty {
        try visitor.visitSingularStringField(value: _storage._modelPlatform, fieldNumber: 4)
      }
      if _storage._versionPolicy != Tensorflow_Serving_FileSystemStoragePathSourceConfig.VersionPolicy.latestVersion {
        try visitor.visitSingularEnumField(value: _storage._versionPolicy, fieldNumber: 5)
      }
      if let v = _storage._loggingConfig {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 6)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

/// Static list of models to be loaded for serving.
public struct Tensorflow_Serving_ModelConfigList: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".ModelConfigList"

  public var config: [Tensorflow_Serving_ModelConfig] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedMessageField(value: &self.config)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.config.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.config, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

/// ModelServer config.
public struct Tensorflow_Serving_ModelServerConfig: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".ModelServerConfig"

  /// ModelServer takes either a static file-based model config list or an Any
  /// proto representing custom model config that is fetched dynamically at
  /// runtime (through network RPC, custom service, etc.).
  public var config: OneOf_Config? {
    get {return _storage._config}
    set {_uniqueStorage()._config = newValue}
  }

  public var modelConfigList: Tensorflow_Serving_ModelConfigList {
    get {
      if case .modelConfigList(let v)? = _storage._config {return v}
      return Tensorflow_Serving_ModelConfigList()
    }
    set {_uniqueStorage()._config = .modelConfigList(newValue)}
  }

  public var customModelConfig: Google_Protobuf_Any {
    get {
      if case .customModelConfig(let v)? = _storage._config {return v}
      return Google_Protobuf_Any()
    }
    set {_uniqueStorage()._config = .customModelConfig(newValue)}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  /// ModelServer takes either a static file-based model config list or an Any
  /// proto representing custom model config that is fetched dynamically at
  /// runtime (through network RPC, custom service, etc.).
  public enum OneOf_Config: Equatable {
    case modelConfigList(Tensorflow_Serving_ModelConfigList)
    case customModelConfig(Google_Protobuf_Any)

    public static func ==(lhs: Tensorflow_Serving_ModelServerConfig.OneOf_Config, rhs: Tensorflow_Serving_ModelServerConfig.OneOf_Config) -> Bool {
      switch (lhs, rhs) {
      case (.modelConfigList(let l), .modelConfigList(let r)): return l == r
      case (.customModelConfig(let l), .customModelConfig(let r)): return l == r
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
          if _storage._config != nil {
            try decoder.handleConflictingOneOf()
          }
          _storage._config = try Tensorflow_Serving_ModelServerConfig.OneOf_Config(byDecodingFrom: &decoder, fieldNumber: fieldNumber)
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      try _storage._config?.traverse(visitor: &visitor)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow.serving"

extension Tensorflow_Serving_ModelType: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "MODEL_TYPE_UNSPECIFIED"),
    1: .same(proto: "TENSORFLOW"),
    2: .same(proto: "OTHER"),
  ]
}

extension Tensorflow_Serving_ModelConfig: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "name"),
    2: .standard(proto: "base_path"),
    3: .standard(proto: "model_type"),
    4: .standard(proto: "model_platform"),
    5: .standard(proto: "version_policy"),
    6: .standard(proto: "logging_config"),
  ]

  fileprivate class _StorageClass {
    var _name: String = String()
    var _basePath: String = String()
    var _modelType: Tensorflow_Serving_ModelType = Tensorflow_Serving_ModelType.modelTypeUnspecified
    var _modelPlatform: String = String()
    var _versionPolicy: Tensorflow_Serving_FileSystemStoragePathSourceConfig.VersionPolicy = Tensorflow_Serving_FileSystemStoragePathSourceConfig.VersionPolicy.latestVersion
    var _loggingConfig: Tensorflow_Serving_LoggingConfig? = nil

    init() {}

    init(copying source: _StorageClass) {
      _name = source._name
      _basePath = source._basePath
      _modelType = source._modelType
      _modelPlatform = source._modelPlatform
      _versionPolicy = source._versionPolicy
      _loggingConfig = source._loggingConfig
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_ModelConfig) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._name != other_storage._name {return false}
        if _storage._basePath != other_storage._basePath {return false}
        if _storage._modelType != other_storage._modelType {return false}
        if _storage._modelPlatform != other_storage._modelPlatform {return false}
        if _storage._versionPolicy != other_storage._versionPolicy {return false}
        if _storage._loggingConfig != other_storage._loggingConfig {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Serving_ModelConfigList: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "config"),
  ]

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_ModelConfigList) -> Bool {
    if self.config != other.config {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Serving_ModelServerConfig: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "model_config_list"),
    2: .standard(proto: "custom_model_config"),
  ]

  fileprivate class _StorageClass {
    var _config: Tensorflow_Serving_ModelServerConfig.OneOf_Config?

    init() {}

    init(copying source: _StorageClass) {
      _config = source._config
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Serving_ModelServerConfig) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._config != other_storage._config {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_Serving_ModelServerConfig.OneOf_Config {
  fileprivate init?<T: SwiftProtobuf.Decoder>(byDecodingFrom decoder: inout T, fieldNumber: Int) throws {
    switch fieldNumber {
    case 1:
      var value: Tensorflow_Serving_ModelConfigList?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .modelConfigList(value)
        return
      }
    case 2:
      var value: Google_Protobuf_Any?
      try decoder.decodeSingularMessageField(value: &value)
      if let value = value {
        self = .customModelConfig(value)
        return
      }
    default:
      break
    }
    return nil
  }

  fileprivate func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    switch self {
    case .modelConfigList(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    case .customModelConfig(let v):
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    }
  }
}
