/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/tools/tfprof/tfprof_options.proto
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

/// Refers to tfprof_options.h/cc for documentation.
/// Only used to pass tfprof options from Python to C++.
public struct Tensorflow_Tfprof_OptionsProto: SwiftProtobuf.Message {
  public static let protoMessageName: String = _protobuf_package + ".OptionsProto"

  fileprivate var _maxDepth: Int64? = nil
  public var maxDepth: Int64 {
    get {return _maxDepth ?? 0}
    set {_maxDepth = newValue}
  }
  public var hasMaxDepth: Bool {
    return self._maxDepth != nil
  }
  public mutating func clearMaxDepth() {
    self._maxDepth = nil
  }

  fileprivate var _minBytes: Int64? = nil
  public var minBytes: Int64 {
    get {return _minBytes ?? 0}
    set {_minBytes = newValue}
  }
  public var hasMinBytes: Bool {
    return self._minBytes != nil
  }
  public mutating func clearMinBytes() {
    self._minBytes = nil
  }

  fileprivate var _minMicros: Int64? = nil
  public var minMicros: Int64 {
    get {return _minMicros ?? 0}
    set {_minMicros = newValue}
  }
  public var hasMinMicros: Bool {
    return self._minMicros != nil
  }
  public mutating func clearMinMicros() {
    self._minMicros = nil
  }

  fileprivate var _minParams: Int64? = nil
  public var minParams: Int64 {
    get {return _minParams ?? 0}
    set {_minParams = newValue}
  }
  public var hasMinParams: Bool {
    return self._minParams != nil
  }
  public mutating func clearMinParams() {
    self._minParams = nil
  }

  fileprivate var _minFloatOps: Int64? = nil
  public var minFloatOps: Int64 {
    get {return _minFloatOps ?? 0}
    set {_minFloatOps = newValue}
  }
  public var hasMinFloatOps: Bool {
    return self._minFloatOps != nil
  }
  public mutating func clearMinFloatOps() {
    self._minFloatOps = nil
  }

  fileprivate var _minOccurrence: Int64? = nil
  public var minOccurrence: Int64 {
    get {return _minOccurrence ?? 0}
    set {_minOccurrence = newValue}
  }
  public var hasMinOccurrence: Bool {
    return self._minOccurrence != nil
  }
  public mutating func clearMinOccurrence() {
    self._minOccurrence = nil
  }

  fileprivate var _orderBy: String? = nil
  public var orderBy: String {
    get {return _orderBy ?? String()}
    set {_orderBy = newValue}
  }
  public var hasOrderBy: Bool {
    return self._orderBy != nil
  }
  public mutating func clearOrderBy() {
    self._orderBy = nil
  }

  public var accountTypeRegexes: [String] = []

  public var startNameRegexes: [String] = []

  public var trimNameRegexes: [String] = []

  public var showNameRegexes: [String] = []

  public var hideNameRegexes: [String] = []

  fileprivate var _accountDisplayedOpOnly: Bool? = nil
  public var accountDisplayedOpOnly: Bool {
    get {return _accountDisplayedOpOnly ?? false}
    set {_accountDisplayedOpOnly = newValue}
  }
  public var hasAccountDisplayedOpOnly: Bool {
    return self._accountDisplayedOpOnly != nil
  }
  public mutating func clearAccountDisplayedOpOnly() {
    self._accountDisplayedOpOnly = nil
  }

  public var select: [String] = []

  fileprivate var _output: String? = nil
  public var output: String {
    get {return _output ?? String()}
    set {_output = newValue}
  }
  public var hasOutput: Bool {
    return self._output != nil
  }
  public mutating func clearOutput() {
    self._output = nil
  }

  fileprivate var _dumpToFile: String? = nil
  public var dumpToFile: String {
    get {return _dumpToFile ?? String()}
    set {_dumpToFile = newValue}
  }
  public var hasDumpToFile: Bool {
    return self._dumpToFile != nil
  }
  public mutating func clearDumpToFile() {
    self._dumpToFile = nil
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt64Field(value: &self._maxDepth)
      case 2: try decoder.decodeSingularInt64Field(value: &self._minBytes)
      case 3: try decoder.decodeSingularInt64Field(value: &self._minMicros)
      case 4: try decoder.decodeSingularInt64Field(value: &self._minParams)
      case 5: try decoder.decodeSingularInt64Field(value: &self._minFloatOps)
      case 7: try decoder.decodeSingularStringField(value: &self._orderBy)
      case 8: try decoder.decodeRepeatedStringField(value: &self.accountTypeRegexes)
      case 9: try decoder.decodeRepeatedStringField(value: &self.startNameRegexes)
      case 10: try decoder.decodeRepeatedStringField(value: &self.trimNameRegexes)
      case 11: try decoder.decodeRepeatedStringField(value: &self.showNameRegexes)
      case 12: try decoder.decodeRepeatedStringField(value: &self.hideNameRegexes)
      case 13: try decoder.decodeSingularBoolField(value: &self._accountDisplayedOpOnly)
      case 14: try decoder.decodeRepeatedStringField(value: &self.select)
      case 15: try decoder.decodeSingularStringField(value: &self._output)
      case 16: try decoder.decodeSingularStringField(value: &self._dumpToFile)
      case 17: try decoder.decodeSingularInt64Field(value: &self._minOccurrence)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._maxDepth {
      try visitor.visitSingularInt64Field(value: v, fieldNumber: 1)
    }
    if let v = self._minBytes {
      try visitor.visitSingularInt64Field(value: v, fieldNumber: 2)
    }
    if let v = self._minMicros {
      try visitor.visitSingularInt64Field(value: v, fieldNumber: 3)
    }
    if let v = self._minParams {
      try visitor.visitSingularInt64Field(value: v, fieldNumber: 4)
    }
    if let v = self._minFloatOps {
      try visitor.visitSingularInt64Field(value: v, fieldNumber: 5)
    }
    if let v = self._orderBy {
      try visitor.visitSingularStringField(value: v, fieldNumber: 7)
    }
    if !self.accountTypeRegexes.isEmpty {
      try visitor.visitRepeatedStringField(value: self.accountTypeRegexes, fieldNumber: 8)
    }
    if !self.startNameRegexes.isEmpty {
      try visitor.visitRepeatedStringField(value: self.startNameRegexes, fieldNumber: 9)
    }
    if !self.trimNameRegexes.isEmpty {
      try visitor.visitRepeatedStringField(value: self.trimNameRegexes, fieldNumber: 10)
    }
    if !self.showNameRegexes.isEmpty {
      try visitor.visitRepeatedStringField(value: self.showNameRegexes, fieldNumber: 11)
    }
    if !self.hideNameRegexes.isEmpty {
      try visitor.visitRepeatedStringField(value: self.hideNameRegexes, fieldNumber: 12)
    }
    if let v = self._accountDisplayedOpOnly {
      try visitor.visitSingularBoolField(value: v, fieldNumber: 13)
    }
    if !self.select.isEmpty {
      try visitor.visitRepeatedStringField(value: self.select, fieldNumber: 14)
    }
    if let v = self._output {
      try visitor.visitSingularStringField(value: v, fieldNumber: 15)
    }
    if let v = self._dumpToFile {
      try visitor.visitSingularStringField(value: v, fieldNumber: 16)
    }
    if let v = self._minOccurrence {
      try visitor.visitSingularInt64Field(value: v, fieldNumber: 17)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow.tfprof"

extension Tensorflow_Tfprof_OptionsProto: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "max_depth"),
    2: .standard(proto: "min_bytes"),
    3: .standard(proto: "min_micros"),
    4: .standard(proto: "min_params"),
    5: .standard(proto: "min_float_ops"),
    17: .standard(proto: "min_occurrence"),
    7: .standard(proto: "order_by"),
    8: .standard(proto: "account_type_regexes"),
    9: .standard(proto: "start_name_regexes"),
    10: .standard(proto: "trim_name_regexes"),
    11: .standard(proto: "show_name_regexes"),
    12: .standard(proto: "hide_name_regexes"),
    13: .standard(proto: "account_displayed_op_only"),
    14: .same(proto: "select"),
    15: .same(proto: "output"),
    16: .standard(proto: "dump_to_file"),
  ]

  public func _protobuf_generated_isEqualTo(other: Tensorflow_Tfprof_OptionsProto) -> Bool {
    if self._maxDepth != other._maxDepth {return false}
    if self._minBytes != other._minBytes {return false}
    if self._minMicros != other._minMicros {return false}
    if self._minParams != other._minParams {return false}
    if self._minFloatOps != other._minFloatOps {return false}
    if self._minOccurrence != other._minOccurrence {return false}
    if self._orderBy != other._orderBy {return false}
    if self.accountTypeRegexes != other.accountTypeRegexes {return false}
    if self.startNameRegexes != other.startNameRegexes {return false}
    if self.trimNameRegexes != other.trimNameRegexes {return false}
    if self.showNameRegexes != other.showNameRegexes {return false}
    if self.hideNameRegexes != other.hideNameRegexes {return false}
    if self._accountDisplayedOpOnly != other._accountDisplayedOpOnly {return false}
    if self.select != other.select {return false}
    if self._output != other._output {return false}
    if self._dumpToFile != other._dumpToFile {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}
