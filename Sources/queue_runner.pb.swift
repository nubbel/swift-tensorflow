/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/core/protobuf/queue_runner.proto
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

/// Protocol buffer representing a QueueRunner.
struct Tensorflow_QueueRunnerDef: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".QueueRunnerDef"

  /// Queue name.
  var queueName: String = String()

  /// A list of enqueue operations.
  var enqueueOpName: [String] = []

  /// The operation to run to close the queue.
  var closeOpName: String = String()

  /// The operation to run to cancel the queue.
  var cancelOpName: String = String()

  /// A list of exception types considered to signal a safely closed queue
  /// if raised during enqueue operations.
  var queueClosedExceptionTypes: [Tensorflow_Error_Code] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.queueName)
      case 2: try decoder.decodeRepeatedStringField(value: &self.enqueueOpName)
      case 3: try decoder.decodeSingularStringField(value: &self.closeOpName)
      case 4: try decoder.decodeSingularStringField(value: &self.cancelOpName)
      case 5: try decoder.decodeRepeatedEnumField(value: &self.queueClosedExceptionTypes)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.queueName.isEmpty {
      try visitor.visitSingularStringField(value: self.queueName, fieldNumber: 1)
    }
    if !self.enqueueOpName.isEmpty {
      try visitor.visitRepeatedStringField(value: self.enqueueOpName, fieldNumber: 2)
    }
    if !self.closeOpName.isEmpty {
      try visitor.visitSingularStringField(value: self.closeOpName, fieldNumber: 3)
    }
    if !self.cancelOpName.isEmpty {
      try visitor.visitSingularStringField(value: self.cancelOpName, fieldNumber: 4)
    }
    if !self.queueClosedExceptionTypes.isEmpty {
      try visitor.visitPackedEnumField(value: self.queueClosedExceptionTypes, fieldNumber: 5)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow"

extension Tensorflow_QueueRunnerDef: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "queue_name"),
    2: .standard(proto: "enqueue_op_name"),
    3: .standard(proto: "close_op_name"),
    4: .standard(proto: "cancel_op_name"),
    5: .standard(proto: "queue_closed_exception_types"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_QueueRunnerDef) -> Bool {
    if self.queueName != other.queueName {return false}
    if self.enqueueOpName != other.enqueueOpName {return false}
    if self.closeOpName != other.closeOpName {return false}
    if self.cancelOpName != other.cancelOpName {return false}
    if self.queueClosedExceptionTypes != other.queueClosedExceptionTypes {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}
