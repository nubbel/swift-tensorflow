/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/core/framework/step_stats.proto
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

struct Tensorflow_AllocatorMemoryUsed: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".AllocatorMemoryUsed"

  var allocatorName: String = String()

  var totalBytes: Int64 = 0

  var peakBytes: Int64 = 0

  /// The bytes that are not deallocated.
  var liveBytes: Int64 = 0

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.allocatorName)
      case 2: try decoder.decodeSingularInt64Field(value: &self.totalBytes)
      case 3: try decoder.decodeSingularInt64Field(value: &self.peakBytes)
      case 4: try decoder.decodeSingularInt64Field(value: &self.liveBytes)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.allocatorName.isEmpty {
      try visitor.visitSingularStringField(value: self.allocatorName, fieldNumber: 1)
    }
    if self.totalBytes != 0 {
      try visitor.visitSingularInt64Field(value: self.totalBytes, fieldNumber: 2)
    }
    if self.peakBytes != 0 {
      try visitor.visitSingularInt64Field(value: self.peakBytes, fieldNumber: 3)
    }
    if self.liveBytes != 0 {
      try visitor.visitSingularInt64Field(value: self.liveBytes, fieldNumber: 4)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

/// Output sizes recorded for a single execution of a graph node.
struct Tensorflow_NodeOutput: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".NodeOutput"

  var slot: Int32 {
    get {return _storage._slot}
    set {_uniqueStorage()._slot = newValue}
  }

  var tensorDescription: Tensorflow_TensorDescription {
    get {return _storage._tensorDescription ?? Tensorflow_TensorDescription()}
    set {_uniqueStorage()._tensorDescription = newValue}
  }
  var hasTensorDescription: Bool {
    return _storage._tensorDescription != nil
  }
  mutating func clearTensorDescription() {
    _storage._tensorDescription = nil
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularInt32Field(value: &_storage._slot)
        case 3: try decoder.decodeSingularMessageField(value: &_storage._tensorDescription)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if _storage._slot != 0 {
        try visitor.visitSingularInt32Field(value: _storage._slot, fieldNumber: 1)
      }
      if let v = _storage._tensorDescription {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

/// For memory tracking.
struct Tensorflow_MemoryStats: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".MemoryStats"

  var hostTempMemorySize: Int64 = 0

  var deviceTempMemorySize: Int64 = 0

  var hostPersistentMemorySize: Int64 = 0

  var devicePersistentMemorySize: Int64 = 0

  var hostPersistentTensorAllocIds: [Int64] = []

  var devicePersistentTensorAllocIds: [Int64] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt64Field(value: &self.hostTempMemorySize)
      case 2: try decoder.decodeSingularInt64Field(value: &self.deviceTempMemorySize)
      case 3: try decoder.decodeSingularInt64Field(value: &self.hostPersistentMemorySize)
      case 4: try decoder.decodeSingularInt64Field(value: &self.devicePersistentMemorySize)
      case 5: try decoder.decodeRepeatedInt64Field(value: &self.hostPersistentTensorAllocIds)
      case 6: try decoder.decodeRepeatedInt64Field(value: &self.devicePersistentTensorAllocIds)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.hostTempMemorySize != 0 {
      try visitor.visitSingularInt64Field(value: self.hostTempMemorySize, fieldNumber: 1)
    }
    if self.deviceTempMemorySize != 0 {
      try visitor.visitSingularInt64Field(value: self.deviceTempMemorySize, fieldNumber: 2)
    }
    if self.hostPersistentMemorySize != 0 {
      try visitor.visitSingularInt64Field(value: self.hostPersistentMemorySize, fieldNumber: 3)
    }
    if self.devicePersistentMemorySize != 0 {
      try visitor.visitSingularInt64Field(value: self.devicePersistentMemorySize, fieldNumber: 4)
    }
    if !self.hostPersistentTensorAllocIds.isEmpty {
      try visitor.visitPackedInt64Field(value: self.hostPersistentTensorAllocIds, fieldNumber: 5)
    }
    if !self.devicePersistentTensorAllocIds.isEmpty {
      try visitor.visitPackedInt64Field(value: self.devicePersistentTensorAllocIds, fieldNumber: 6)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

/// Time/size stats recorded for a single execution of a graph node.
struct Tensorflow_NodeExecStats: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".NodeExecStats"

  /// TODO(tucker): Use some more compact form of node identity than
  /// the full string name.  Either all processes should agree on a
  /// global id (cost_id?) for each node, or we should use a hash of
  /// the name.
  var nodeName: String {
    get {return _storage._nodeName}
    set {_uniqueStorage()._nodeName = newValue}
  }

  var allStartMicros: Int64 {
    get {return _storage._allStartMicros}
    set {_uniqueStorage()._allStartMicros = newValue}
  }

  var opStartRelMicros: Int64 {
    get {return _storage._opStartRelMicros}
    set {_uniqueStorage()._opStartRelMicros = newValue}
  }

  var opEndRelMicros: Int64 {
    get {return _storage._opEndRelMicros}
    set {_uniqueStorage()._opEndRelMicros = newValue}
  }

  var allEndRelMicros: Int64 {
    get {return _storage._allEndRelMicros}
    set {_uniqueStorage()._allEndRelMicros = newValue}
  }

  var memory: [Tensorflow_AllocatorMemoryUsed] {
    get {return _storage._memory}
    set {_uniqueStorage()._memory = newValue}
  }

  var output: [Tensorflow_NodeOutput] {
    get {return _storage._output}
    set {_uniqueStorage()._output = newValue}
  }

  var timelineLabel: String {
    get {return _storage._timelineLabel}
    set {_uniqueStorage()._timelineLabel = newValue}
  }

  var scheduledMicros: Int64 {
    get {return _storage._scheduledMicros}
    set {_uniqueStorage()._scheduledMicros = newValue}
  }

  var threadId: UInt32 {
    get {return _storage._threadId}
    set {_uniqueStorage()._threadId = newValue}
  }

  var referencedTensor: [Tensorflow_AllocationDescription] {
    get {return _storage._referencedTensor}
    set {_uniqueStorage()._referencedTensor = newValue}
  }

  var memoryStats: Tensorflow_MemoryStats {
    get {return _storage._memoryStats ?? Tensorflow_MemoryStats()}
    set {_uniqueStorage()._memoryStats = newValue}
  }
  var hasMemoryStats: Bool {
    return _storage._memoryStats != nil
  }
  mutating func clearMemoryStats() {
    _storage._memoryStats = nil
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularStringField(value: &_storage._nodeName)
        case 2: try decoder.decodeSingularInt64Field(value: &_storage._allStartMicros)
        case 3: try decoder.decodeSingularInt64Field(value: &_storage._opStartRelMicros)
        case 4: try decoder.decodeSingularInt64Field(value: &_storage._opEndRelMicros)
        case 5: try decoder.decodeSingularInt64Field(value: &_storage._allEndRelMicros)
        case 6: try decoder.decodeRepeatedMessageField(value: &_storage._memory)
        case 7: try decoder.decodeRepeatedMessageField(value: &_storage._output)
        case 8: try decoder.decodeSingularStringField(value: &_storage._timelineLabel)
        case 9: try decoder.decodeSingularInt64Field(value: &_storage._scheduledMicros)
        case 10: try decoder.decodeSingularUInt32Field(value: &_storage._threadId)
        case 11: try decoder.decodeRepeatedMessageField(value: &_storage._referencedTensor)
        case 12: try decoder.decodeSingularMessageField(value: &_storage._memoryStats)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if !_storage._nodeName.isEmpty {
        try visitor.visitSingularStringField(value: _storage._nodeName, fieldNumber: 1)
      }
      if _storage._allStartMicros != 0 {
        try visitor.visitSingularInt64Field(value: _storage._allStartMicros, fieldNumber: 2)
      }
      if _storage._opStartRelMicros != 0 {
        try visitor.visitSingularInt64Field(value: _storage._opStartRelMicros, fieldNumber: 3)
      }
      if _storage._opEndRelMicros != 0 {
        try visitor.visitSingularInt64Field(value: _storage._opEndRelMicros, fieldNumber: 4)
      }
      if _storage._allEndRelMicros != 0 {
        try visitor.visitSingularInt64Field(value: _storage._allEndRelMicros, fieldNumber: 5)
      }
      if !_storage._memory.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._memory, fieldNumber: 6)
      }
      if !_storage._output.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._output, fieldNumber: 7)
      }
      if !_storage._timelineLabel.isEmpty {
        try visitor.visitSingularStringField(value: _storage._timelineLabel, fieldNumber: 8)
      }
      if _storage._scheduledMicros != 0 {
        try visitor.visitSingularInt64Field(value: _storage._scheduledMicros, fieldNumber: 9)
      }
      if _storage._threadId != 0 {
        try visitor.visitSingularUInt32Field(value: _storage._threadId, fieldNumber: 10)
      }
      if !_storage._referencedTensor.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._referencedTensor, fieldNumber: 11)
      }
      if let v = _storage._memoryStats {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 12)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

struct Tensorflow_DeviceStepStats: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".DeviceStepStats"

  var device: String = String()

  var nodeStats: [Tensorflow_NodeExecStats] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.device)
      case 2: try decoder.decodeRepeatedMessageField(value: &self.nodeStats)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.device.isEmpty {
      try visitor.visitSingularStringField(value: self.device, fieldNumber: 1)
    }
    if !self.nodeStats.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.nodeStats, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

struct Tensorflow_StepStats: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".StepStats"

  var devStats: [Tensorflow_DeviceStepStats] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedMessageField(value: &self.devStats)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.devStats.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.devStats, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow"

extension Tensorflow_AllocatorMemoryUsed: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "allocator_name"),
    2: .standard(proto: "total_bytes"),
    3: .standard(proto: "peak_bytes"),
    4: .standard(proto: "live_bytes"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_AllocatorMemoryUsed) -> Bool {
    if self.allocatorName != other.allocatorName {return false}
    if self.totalBytes != other.totalBytes {return false}
    if self.peakBytes != other.peakBytes {return false}
    if self.liveBytes != other.liveBytes {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_NodeOutput: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "slot"),
    3: .standard(proto: "tensor_description"),
  ]

  fileprivate class _StorageClass {
    var _slot: Int32 = 0
    var _tensorDescription: Tensorflow_TensorDescription? = nil

    init() {}

    init(copying source: _StorageClass) {
      _slot = source._slot
      _tensorDescription = source._tensorDescription
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: Tensorflow_NodeOutput) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._slot != other_storage._slot {return false}
        if _storage._tensorDescription != other_storage._tensorDescription {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_MemoryStats: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "host_temp_memory_size"),
    2: .standard(proto: "device_temp_memory_size"),
    3: .standard(proto: "host_persistent_memory_size"),
    4: .standard(proto: "device_persistent_memory_size"),
    5: .standard(proto: "host_persistent_tensor_alloc_ids"),
    6: .standard(proto: "device_persistent_tensor_alloc_ids"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_MemoryStats) -> Bool {
    if self.hostTempMemorySize != other.hostTempMemorySize {return false}
    if self.deviceTempMemorySize != other.deviceTempMemorySize {return false}
    if self.hostPersistentMemorySize != other.hostPersistentMemorySize {return false}
    if self.devicePersistentMemorySize != other.devicePersistentMemorySize {return false}
    if self.hostPersistentTensorAllocIds != other.hostPersistentTensorAllocIds {return false}
    if self.devicePersistentTensorAllocIds != other.devicePersistentTensorAllocIds {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_NodeExecStats: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "node_name"),
    2: .standard(proto: "all_start_micros"),
    3: .standard(proto: "op_start_rel_micros"),
    4: .standard(proto: "op_end_rel_micros"),
    5: .standard(proto: "all_end_rel_micros"),
    6: .same(proto: "memory"),
    7: .same(proto: "output"),
    8: .standard(proto: "timeline_label"),
    9: .standard(proto: "scheduled_micros"),
    10: .standard(proto: "thread_id"),
    11: .standard(proto: "referenced_tensor"),
    12: .standard(proto: "memory_stats"),
  ]

  fileprivate class _StorageClass {
    var _nodeName: String = String()
    var _allStartMicros: Int64 = 0
    var _opStartRelMicros: Int64 = 0
    var _opEndRelMicros: Int64 = 0
    var _allEndRelMicros: Int64 = 0
    var _memory: [Tensorflow_AllocatorMemoryUsed] = []
    var _output: [Tensorflow_NodeOutput] = []
    var _timelineLabel: String = String()
    var _scheduledMicros: Int64 = 0
    var _threadId: UInt32 = 0
    var _referencedTensor: [Tensorflow_AllocationDescription] = []
    var _memoryStats: Tensorflow_MemoryStats? = nil

    init() {}

    init(copying source: _StorageClass) {
      _nodeName = source._nodeName
      _allStartMicros = source._allStartMicros
      _opStartRelMicros = source._opStartRelMicros
      _opEndRelMicros = source._opEndRelMicros
      _allEndRelMicros = source._allEndRelMicros
      _memory = source._memory
      _output = source._output
      _timelineLabel = source._timelineLabel
      _scheduledMicros = source._scheduledMicros
      _threadId = source._threadId
      _referencedTensor = source._referencedTensor
      _memoryStats = source._memoryStats
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: Tensorflow_NodeExecStats) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._nodeName != other_storage._nodeName {return false}
        if _storage._allStartMicros != other_storage._allStartMicros {return false}
        if _storage._opStartRelMicros != other_storage._opStartRelMicros {return false}
        if _storage._opEndRelMicros != other_storage._opEndRelMicros {return false}
        if _storage._allEndRelMicros != other_storage._allEndRelMicros {return false}
        if _storage._memory != other_storage._memory {return false}
        if _storage._output != other_storage._output {return false}
        if _storage._timelineLabel != other_storage._timelineLabel {return false}
        if _storage._scheduledMicros != other_storage._scheduledMicros {return false}
        if _storage._threadId != other_storage._threadId {return false}
        if _storage._referencedTensor != other_storage._referencedTensor {return false}
        if _storage._memoryStats != other_storage._memoryStats {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_DeviceStepStats: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "device"),
    2: .standard(proto: "node_stats"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_DeviceStepStats) -> Bool {
    if self.device != other.device {return false}
    if self.nodeStats != other.nodeStats {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_StepStats: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "dev_stats"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_StepStats) -> Bool {
    if self.devStats != other.devStats {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}
