/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/core/framework/tensor_slice.proto
 *
 */

// Protocol buffer representing slices of a tensor

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

/// Can only be interpreted if you know the corresponding TensorShape.
struct Tensorflow_TensorSliceProto: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".TensorSliceProto"

  /// Extent of the slice in all tensor dimensions.
  ///
  /// Must have one entry for each of the dimension of the tensor that this
  /// slice belongs to.  The order of sizes is the same as the order of
  /// dimensions in the TensorShape.
  var extent: [Tensorflow_TensorSliceProto.Extent] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  /// Extent of the slice in one dimension.
  struct Extent: SwiftProtobuf.Message {
    static let protoMessageName: String = Tensorflow_TensorSliceProto.protoMessageName + ".Extent"

    /// Start index of the slice, starting at 0.
    var start: Int64 = 0

    /// Length of the slice: if the length is missing or -1 we will
    /// interpret this as "everything in this dimension".  We use
    /// "oneof" to preserve information about whether the length is
    /// present without changing the serialization format from the
    /// prior proto2 version of this proto.
    var hasLength: Tensorflow_TensorSliceProto.Extent.OneOf_HasLength? = nil

    var length: Int64 {
      get {
        if case .length(let v)? = hasLength {return v}
        return 0
      }
      set {hasLength = .length(newValue)}
    }

    var unknownFields = SwiftProtobuf.UnknownStorage()

    /// Length of the slice: if the length is missing or -1 we will
    /// interpret this as "everything in this dimension".  We use
    /// "oneof" to preserve information about whether the length is
    /// present without changing the serialization format from the
    /// prior proto2 version of this proto.
    enum OneOf_HasLength: Equatable {
      case length(Int64)

      static func ==(lhs: Tensorflow_TensorSliceProto.Extent.OneOf_HasLength, rhs: Tensorflow_TensorSliceProto.Extent.OneOf_HasLength) -> Bool {
        switch (lhs, rhs) {
        case (.length(let l), .length(let r)): return l == r
        }
      }
    }

    init() {}

    mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularInt64Field(value: &self.start)
        case 2:
          if self.hasLength != nil {
            try decoder.handleConflictingOneOf()
          }
          self.hasLength = try Tensorflow_TensorSliceProto.Extent.OneOf_HasLength(byDecodingFrom: &decoder, fieldNumber: fieldNumber)
        default: break
        }
      }
    }

    func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
      if self.start != 0 {
        try visitor.visitSingularInt64Field(value: self.start, fieldNumber: 1)
      }
      try self.hasLength?.traverse(visitor: &visitor)
      try unknownFields.traverse(visitor: &visitor)
    }
  }

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedMessageField(value: &self.extent)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.extent.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.extent, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow"

extension Tensorflow_TensorSliceProto: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "extent"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_TensorSliceProto) -> Bool {
    if self.extent != other.extent {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_TensorSliceProto.Extent: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "start"),
    2: .same(proto: "length"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_TensorSliceProto.Extent) -> Bool {
    if self.start != other.start {return false}
    if self.hasLength != other.hasLength {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_TensorSliceProto.Extent.OneOf_HasLength {
  fileprivate init?<T: SwiftProtobuf.Decoder>(byDecodingFrom decoder: inout T, fieldNumber: Int) throws {
    switch fieldNumber {
    case 2:
      var value = Int64()
      try decoder.decodeSingularInt64Field(value: &value)
      self = .length(value)
      return
    default:
      break
    }
    return nil
  }

  fileprivate func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    switch self {
    case .length(let v):
      try visitor.visitSingularInt64Field(value: v, fieldNumber: 2)
    }
  }
}