/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/python/util/protobuf/compare_test.proto
 *
 */

/// Test messages used in compare_test.py.

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

enum CompareTest_Enum: SwiftProtobuf.Enum {
  typealias RawValue = Int
  case a // = 0
  case b // = 1
  case c // = 2

  init() {
    self = .a
  }

  init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .a
    case 1: self = .b
    case 2: self = .c
    default: return nil
    }
  }

  var rawValue: Int {
    switch self {
    case .a: return 0
    case .b: return 1
    case .c: return 2
    }
  }

}

struct CompareTest_Small: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".Small"

  var strings: [String] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedStringField(value: &self.strings)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.strings.isEmpty {
      try visitor.visitRepeatedStringField(value: self.strings, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

struct CompareTest_Medium: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".Medium"

  var int32S: [Int32] = []

  var smalls: [CompareTest_Small] = []

  var groupA: [CompareTest_Medium.GroupA] = []

  var floats: [Float] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  struct GroupA: SwiftProtobuf.Message {
    static let protoMessageName: String = CompareTest_Medium.protoMessageName + ".GroupA"

    var groupB: [CompareTest_Medium.GroupA.GroupB] = []

    var unknownFields = SwiftProtobuf.UnknownStorage()

    struct GroupB: SwiftProtobuf.Message {
      static let protoMessageName: String = CompareTest_Medium.GroupA.protoMessageName + ".GroupB"

      fileprivate var _strings: String? = nil
      var strings: String {
        get {return _strings ?? String()}
        set {_strings = newValue}
      }
      var hasStrings: Bool {
        return self._strings != nil
      }
      mutating func clearStrings() {
        self._strings = nil
      }

      var unknownFields = SwiftProtobuf.UnknownStorage()

      init() {}

      public var isInitialized: Bool {
        if self._strings == nil {return false}
        return true
      }

      mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
        while let fieldNumber = try decoder.nextFieldNumber() {
          switch fieldNumber {
          case 5: try decoder.decodeSingularStringField(value: &self._strings)
          default: break
          }
        }
      }

      func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
        if let v = self._strings {
          try visitor.visitSingularStringField(value: v, fieldNumber: 5)
        }
        try unknownFields.traverse(visitor: &visitor)
      }
    }

    init() {}

    public var isInitialized: Bool {
      if !SwiftProtobuf.Internal.areAllInitialized(self.groupB) {return false}
      return true
    }

    mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 4: try decoder.decodeRepeatedGroupField(value: &self.groupB)
        default: break
        }
      }
    }

    func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
      if !self.groupB.isEmpty {
        try visitor.visitRepeatedGroupField(value: self.groupB, fieldNumber: 4)
      }
      try unknownFields.traverse(visitor: &visitor)
    }
  }

  init() {}

  public var isInitialized: Bool {
    if !SwiftProtobuf.Internal.areAllInitialized(self.groupA) {return false}
    return true
  }

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedInt32Field(value: &self.int32S)
      case 2: try decoder.decodeRepeatedMessageField(value: &self.smalls)
      case 3: try decoder.decodeRepeatedGroupField(value: &self.groupA)
      case 6: try decoder.decodeRepeatedFloatField(value: &self.floats)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.int32S.isEmpty {
      try visitor.visitRepeatedInt32Field(value: self.int32S, fieldNumber: 1)
    }
    if !self.smalls.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.smalls, fieldNumber: 2)
    }
    if !self.groupA.isEmpty {
      try visitor.visitRepeatedGroupField(value: self.groupA, fieldNumber: 3)
    }
    if !self.floats.isEmpty {
      try visitor.visitRepeatedFloatField(value: self.floats, fieldNumber: 6)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

struct CompareTest_Large: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".Large"

  var string_: String {
    get {return _storage._string_ ?? String()}
    set {_uniqueStorage()._string_ = newValue}
  }
  var hasString_: Bool {
    return _storage._string_ != nil
  }
  mutating func clearString_() {
    _storage._string_ = nil
  }

  var int64_: Int64 {
    get {return _storage._int64_ ?? 0}
    set {_uniqueStorage()._int64_ = newValue}
  }
  var hasInt64_: Bool {
    return _storage._int64_ != nil
  }
  mutating func clearInt64_() {
    _storage._int64_ = nil
  }

  var float_: Float {
    get {return _storage._float_ ?? 0}
    set {_uniqueStorage()._float_ = newValue}
  }
  var hasFloat_: Bool {
    return _storage._float_ != nil
  }
  mutating func clearFloat_() {
    _storage._float_ = nil
  }

  var bool_: Bool {
    get {return _storage._bool_ ?? false}
    set {_uniqueStorage()._bool_ = newValue}
  }
  var hasBool_: Bool {
    return _storage._bool_ != nil
  }
  mutating func clearBool_() {
    _storage._bool_ = nil
  }

  var enum_: CompareTest_Enum {
    get {return _storage._enum_ ?? CompareTest_Enum.a}
    set {_uniqueStorage()._enum_ = newValue}
  }
  var hasEnum_: Bool {
    return _storage._enum_ != nil
  }
  mutating func clearEnum_() {
    _storage._enum_ = nil
  }

  var int64S: [Int64] {
    get {return _storage._int64S}
    set {_uniqueStorage()._int64S = newValue}
  }

  var medium: CompareTest_Medium {
    get {return _storage._medium ?? CompareTest_Medium()}
    set {_uniqueStorage()._medium = newValue}
  }
  var hasMedium: Bool {
    return _storage._medium != nil
  }
  mutating func clearMedium() {
    _storage._medium = nil
  }

  var small: CompareTest_Small {
    get {return _storage._small ?? CompareTest_Small()}
    set {_uniqueStorage()._small = newValue}
  }
  var hasSmall: Bool {
    return _storage._small != nil
  }
  mutating func clearSmall() {
    _storage._small = nil
  }

  var double_: Double {
    get {return _storage._double_ ?? 0}
    set {_uniqueStorage()._double_ = newValue}
  }
  var hasDouble_: Bool {
    return _storage._double_ != nil
  }
  mutating func clearDouble_() {
    _storage._double_ = nil
  }

  var withMap: CompareTest_WithMap {
    get {return _storage._withMap ?? CompareTest_WithMap()}
    set {_uniqueStorage()._withMap = newValue}
  }
  var hasWithMap: Bool {
    return _storage._withMap != nil
  }
  mutating func clearWithMap() {
    _storage._withMap = nil
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  public var isInitialized: Bool {
    return withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if let v = _storage._medium, !v.isInitialized {return false}
      return true
    }
  }

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularStringField(value: &_storage._string_)
        case 2: try decoder.decodeSingularInt64Field(value: &_storage._int64_)
        case 3: try decoder.decodeSingularFloatField(value: &_storage._float_)
        case 4: try decoder.decodeSingularBoolField(value: &_storage._bool_)
        case 5: try decoder.decodeSingularEnumField(value: &_storage._enum_)
        case 6: try decoder.decodeRepeatedInt64Field(value: &_storage._int64S)
        case 7: try decoder.decodeSingularMessageField(value: &_storage._medium)
        case 8: try decoder.decodeSingularMessageField(value: &_storage._small)
        case 9: try decoder.decodeSingularDoubleField(value: &_storage._double_)
        case 10: try decoder.decodeSingularMessageField(value: &_storage._withMap)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if let v = _storage._string_ {
        try visitor.visitSingularStringField(value: v, fieldNumber: 1)
      }
      if let v = _storage._int64_ {
        try visitor.visitSingularInt64Field(value: v, fieldNumber: 2)
      }
      if let v = _storage._float_ {
        try visitor.visitSingularFloatField(value: v, fieldNumber: 3)
      }
      if let v = _storage._bool_ {
        try visitor.visitSingularBoolField(value: v, fieldNumber: 4)
      }
      if let v = _storage._enum_ {
        try visitor.visitSingularEnumField(value: v, fieldNumber: 5)
      }
      if !_storage._int64S.isEmpty {
        try visitor.visitRepeatedInt64Field(value: _storage._int64S, fieldNumber: 6)
      }
      if let v = _storage._medium {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 7)
      }
      if let v = _storage._small {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 8)
      }
      if let v = _storage._double_ {
        try visitor.visitSingularDoubleField(value: v, fieldNumber: 9)
      }
      if let v = _storage._withMap {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 10)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

struct CompareTest_Labeled: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".Labeled"

  fileprivate var _required: Int32? = nil
  var required: Int32 {
    get {return _required ?? 0}
    set {_required = newValue}
  }
  var hasRequired: Bool {
    return self._required != nil
  }
  mutating func clearRequired() {
    self._required = nil
  }

  fileprivate var _optional: Int32? = nil
  var optional: Int32 {
    get {return _optional ?? 0}
    set {_optional = newValue}
  }
  var hasOptional: Bool {
    return self._optional != nil
  }
  mutating func clearOptional() {
    self._optional = nil
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  public var isInitialized: Bool {
    if self._required == nil {return false}
    return true
  }

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt32Field(value: &self._required)
      case 2: try decoder.decodeSingularInt32Field(value: &self._optional)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._required {
      try visitor.visitSingularInt32Field(value: v, fieldNumber: 1)
    }
    if let v = self._optional {
      try visitor.visitSingularInt32Field(value: v, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

struct CompareTest_WithMap: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".WithMap"

  var valueMessage: Dictionary<Int32,CompareTest_Small> = [:]

  var valueString: Dictionary<String,String> = [:]

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufInt32,CompareTest_Small>.self, value: &self.valueMessage)
      case 2: try decoder.decodeMapField(fieldType: SwiftProtobuf._ProtobufMap<SwiftProtobuf.ProtobufString,SwiftProtobuf.ProtobufString>.self, value: &self.valueString)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.valueMessage.isEmpty {
      try visitor.visitMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufInt32,CompareTest_Small>.self, value: self.valueMessage, fieldNumber: 1)
    }
    if !self.valueString.isEmpty {
      try visitor.visitMapField(fieldType: SwiftProtobuf._ProtobufMap<SwiftProtobuf.ProtobufString,SwiftProtobuf.ProtobufString>.self, value: self.valueString, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "compare_test"

extension CompareTest_Enum: SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "A"),
    1: .same(proto: "B"),
    2: .same(proto: "C"),
  ]
}

extension CompareTest_Small: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "strings"),
  ]

  func _protobuf_generated_isEqualTo(other: CompareTest_Small) -> Bool {
    if self.strings != other.strings {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension CompareTest_Medium: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "int32s"),
    2: .same(proto: "smalls"),
    3: .unique(proto: "GroupA", json: "groupa"),
    6: .same(proto: "floats"),
  ]

  func _protobuf_generated_isEqualTo(other: CompareTest_Medium) -> Bool {
    if self.int32S != other.int32S {return false}
    if self.smalls != other.smalls {return false}
    if self.groupA != other.groupA {return false}
    if self.floats != other.floats {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension CompareTest_Medium.GroupA: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    4: .unique(proto: "GroupB", json: "groupb"),
  ]

  func _protobuf_generated_isEqualTo(other: CompareTest_Medium.GroupA) -> Bool {
    if self.groupB != other.groupB {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension CompareTest_Medium.GroupA.GroupB: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    5: .same(proto: "strings"),
  ]

  func _protobuf_generated_isEqualTo(other: CompareTest_Medium.GroupA.GroupB) -> Bool {
    if self._strings != other._strings {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension CompareTest_Large: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "string_"),
    2: .standard(proto: "int64_"),
    3: .standard(proto: "float_"),
    4: .standard(proto: "bool_"),
    5: .standard(proto: "enum_"),
    6: .same(proto: "int64s"),
    7: .same(proto: "medium"),
    8: .same(proto: "small"),
    9: .standard(proto: "double_"),
    10: .standard(proto: "with_map"),
  ]

  fileprivate class _StorageClass {
    var _string_: String? = nil
    var _int64_: Int64? = nil
    var _float_: Float? = nil
    var _bool_: Bool? = nil
    var _enum_: CompareTest_Enum? = nil
    var _int64S: [Int64] = []
    var _medium: CompareTest_Medium? = nil
    var _small: CompareTest_Small? = nil
    var _double_: Double? = nil
    var _withMap: CompareTest_WithMap? = nil

    init() {}

    init(copying source: _StorageClass) {
      _string_ = source._string_
      _int64_ = source._int64_
      _float_ = source._float_
      _bool_ = source._bool_
      _enum_ = source._enum_
      _int64S = source._int64S
      _medium = source._medium
      _small = source._small
      _double_ = source._double_
      _withMap = source._withMap
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: CompareTest_Large) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._string_ != other_storage._string_ {return false}
        if _storage._int64_ != other_storage._int64_ {return false}
        if _storage._float_ != other_storage._float_ {return false}
        if _storage._bool_ != other_storage._bool_ {return false}
        if _storage._enum_ != other_storage._enum_ {return false}
        if _storage._int64S != other_storage._int64S {return false}
        if _storage._medium != other_storage._medium {return false}
        if _storage._small != other_storage._small {return false}
        if _storage._double_ != other_storage._double_ {return false}
        if _storage._withMap != other_storage._withMap {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension CompareTest_Labeled: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "required"),
    2: .same(proto: "optional"),
  ]

  func _protobuf_generated_isEqualTo(other: CompareTest_Labeled) -> Bool {
    if self._required != other._required {return false}
    if self._optional != other._optional {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension CompareTest_WithMap: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "value_message"),
    2: .standard(proto: "value_string"),
  ]

  func _protobuf_generated_isEqualTo(other: CompareTest_WithMap) -> Bool {
    if self.valueMessage != other.valueMessage {return false}
    if self.valueString != other.valueString {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}
