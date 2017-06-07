// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: tensorflow/core/framework/function.proto
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

/// A library is a set of named functions.
public struct Tensorflow_FunctionDefLibrary: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".FunctionDefLibrary"

  public var function: [Tensorflow_FunctionDef] = []

  public var gradient: [Tensorflow_GradientDef] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  /// Used by the decoding initializers in the SwiftProtobuf library, not generally
  /// used directly. `init(serializedData:)`, `init(jsonUTF8Data:)`, and other decoding
  /// initializers are defined in the SwiftProtobuf library. See the Message and
  /// Message+*Additions` files.
  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedMessageField(value: &self.function)
      case 2: try decoder.decodeRepeatedMessageField(value: &self.gradient)
      default: break
      }
    }
  }

  /// Used by the encoding methods of the SwiftProtobuf library, not generally
  /// used directly. `Message.serializedData()`, `Message.jsonUTF8Data()`, and
  /// other serializer methods are defined in the SwiftProtobuf library. See the
  /// `Message` and `Message+*Additions` files.
  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.function.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.function, fieldNumber: 1)
    }
    if !self.gradient.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.gradient, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

/// A function can be instantiated when the runtime can bind every attr
/// with a value. When a GraphDef has a call to a function, it must
/// have binding for every attr defined in the signature.
///
/// TODO(zhifengc):
///   * device spec, etc.
public struct Tensorflow_FunctionDef: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".FunctionDef"

  /// The definition of the function's name, arguments, return values,
  /// attrs etc.
  public var signature: Tensorflow_OpDef {
    get {return _storage._signature ?? Tensorflow_OpDef()}
    set {_uniqueStorage()._signature = newValue}
  }
  /// Returns true if `signature` has been explicitly set.
  public var hasSignature: Bool {return _storage._signature != nil}
  /// Clears the value of `signature`. Subsequent reads from it will return its default value.
  public mutating func clearSignature() {_storage._signature = nil}

  /// Attributes specific to this function definition.
  public var attr: Dictionary<String,Tensorflow_AttrValue> {
    get {return _storage._attr}
    set {_uniqueStorage()._attr = newValue}
  }

  /// By convention, "op" in node_def is resolved by consulting with a
  /// user-defined library first. If not resolved, "func" is assumed to
  /// be a builtin op.
  public var nodeDef: [Tensorflow_NodeDef] {
    get {return _storage._nodeDef}
    set {_uniqueStorage()._nodeDef = newValue}
  }

  /// A mapping from the output arg names from `signature` to the
  /// outputs from `node_def` that should be returned by the function.
  public var ret: Dictionary<String,String> {
    get {return _storage._ret}
    set {_uniqueStorage()._ret = newValue}
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
        case 1: try decoder.decodeSingularMessageField(value: &_storage._signature)
        case 3: try decoder.decodeRepeatedMessageField(value: &_storage._nodeDef)
        case 4: try decoder.decodeMapField(fieldType: SwiftProtobuf._ProtobufMap<SwiftProtobuf.ProtobufString,SwiftProtobuf.ProtobufString>.self, value: &_storage._ret)
        case 5: try decoder.decodeMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufString,Tensorflow_AttrValue>.self, value: &_storage._attr)
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
      if let v = _storage._signature {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
      }
      if !_storage._nodeDef.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._nodeDef, fieldNumber: 3)
      }
      if !_storage._ret.isEmpty {
        try visitor.visitMapField(fieldType: SwiftProtobuf._ProtobufMap<SwiftProtobuf.ProtobufString,SwiftProtobuf.ProtobufString>.self, value: _storage._ret, fieldNumber: 4)
      }
      if !_storage._attr.isEmpty {
        try visitor.visitMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufString,Tensorflow_AttrValue>.self, value: _storage._attr, fieldNumber: 5)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass.defaultInstance
}

/// GradientDef defines the gradient function of a function defined in
/// a function library.
///
/// A gradient function g (specified by gradient_func) for a function f
/// (specified by function_name) must follow the following:
///
/// The function 'f' must be a numerical function which takes N inputs
/// and produces M outputs. Its gradient function 'g', which is a
/// function taking N + M inputs and produces N outputs.
///
/// I.e. if we have
///    (y1, y2, ..., y_M) = f(x1, x2, ..., x_N),
/// then, g is
///    (dL/dx1, dL/dx2, ..., dL/dx_N) = g(x1, x2, ..., x_N,
///                                      dL/dy1, dL/dy2, ..., dL/dy_M),
/// where L is a scalar-value function of (x1, x2, ..., xN) (e.g., the
/// loss function). dL/dx_i is the partial derivative of L with respect
/// to x_i.
public struct Tensorflow_GradientDef: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".GradientDef"

  /// The function name.
  public var functionName: String = String()

  /// The gradient function's name.
  public var gradientFunc: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  /// Used by the decoding initializers in the SwiftProtobuf library, not generally
  /// used directly. `init(serializedData:)`, `init(jsonUTF8Data:)`, and other decoding
  /// initializers are defined in the SwiftProtobuf library. See the Message and
  /// Message+*Additions` files.
  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.functionName)
      case 2: try decoder.decodeSingularStringField(value: &self.gradientFunc)
      default: break
      }
    }
  }

  /// Used by the encoding methods of the SwiftProtobuf library, not generally
  /// used directly. `Message.serializedData()`, `Message.jsonUTF8Data()`, and
  /// other serializer methods are defined in the SwiftProtobuf library. See the
  /// `Message` and `Message+*Additions` files.
  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.functionName.isEmpty {
      try visitor.visitSingularStringField(value: self.functionName, fieldNumber: 1)
    }
    if !self.gradientFunc.isEmpty {
      try visitor.visitSingularStringField(value: self.gradientFunc, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow"

extension Tensorflow_FunctionDefLibrary: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "function"),
    2: .same(proto: "gradient"),
  ]

  public func _protobuf_generated_isEqualTo(other: Tensorflow_FunctionDefLibrary) -> Bool {
    if self.function != other.function {return false}
    if self.gradient != other.gradient {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_FunctionDef: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "signature"),
    5: .same(proto: "attr"),
    3: .standard(proto: "node_def"),
    4: .same(proto: "ret"),
  ]

  fileprivate class _StorageClass {
    var _signature: Tensorflow_OpDef? = nil
    var _attr: Dictionary<String,Tensorflow_AttrValue> = [:]
    var _nodeDef: [Tensorflow_NodeDef] = []
    var _ret: Dictionary<String,String> = [:]

    static let defaultInstance = _StorageClass()

    private init() {}

    init(copying source: _StorageClass) {
      _signature = source._signature
      _attr = source._attr
      _nodeDef = source._nodeDef
      _ret = source._ret
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public func _protobuf_generated_isEqualTo(other: Tensorflow_FunctionDef) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._signature != other_storage._signature {return false}
        if _storage._attr != other_storage._attr {return false}
        if _storage._nodeDef != other_storage._nodeDef {return false}
        if _storage._ret != other_storage._ret {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_GradientDef: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "function_name"),
    2: .standard(proto: "gradient_func"),
  ]

  public func _protobuf_generated_isEqualTo(other: Tensorflow_GradientDef) -> Bool {
    if self.functionName != other.functionName {return false}
    if self.gradientFunc != other.gradientFunc {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}
