/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow/core/protobuf/tensorflow_server.proto
 *
 */

// Copyright 2016 The TensorFlow Authors. All Rights Reserved.
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

/// Defines a single job in a TensorFlow cluster.
struct Tensorflow_JobDef: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".JobDef"

  /// The name of this job.
  var name: String = String()

  /// Mapping from task ID to "hostname:port" string.
  ///
  /// If the `name` field contains "worker", and the `tasks` map contains a
  /// mapping from 7 to "example.org:2222", then the device prefix
  /// "/job:worker/task:7" will be assigned to "example.org:2222".
  ///
  /// NOTE(mrry): Currently, only a dense task ID space starting at 0 is
  /// supported.
  var tasks: Dictionary<Int32,String> = [:]

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.name)
      case 2: try decoder.decodeMapField(fieldType: SwiftProtobuf._ProtobufMap<SwiftProtobuf.ProtobufInt32,SwiftProtobuf.ProtobufString>.self, value: &self.tasks)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.name.isEmpty {
      try visitor.visitSingularStringField(value: self.name, fieldNumber: 1)
    }
    if !self.tasks.isEmpty {
      try visitor.visitMapField(fieldType: SwiftProtobuf._ProtobufMap<SwiftProtobuf.ProtobufInt32,SwiftProtobuf.ProtobufString>.self, value: self.tasks, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

/// Defines a TensorFlow cluster as a set of jobs.
struct Tensorflow_ClusterDef: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".ClusterDef"

  /// The jobs that comprise the cluster.
  var job: [Tensorflow_JobDef] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedMessageField(value: &self.job)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.job.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.job, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }
}

/// Defines the configuration of a single TensorFlow server.
struct Tensorflow_ServerDef: SwiftProtobuf.Message {
  static let protoMessageName: String = _protobuf_package + ".ServerDef"

  /// The cluster of which this server is a member.
  var cluster: Tensorflow_ClusterDef {
    get {return _storage._cluster ?? Tensorflow_ClusterDef()}
    set {_uniqueStorage()._cluster = newValue}
  }
  /// Returns true if `cluster` has been explicitly set.
  var hasCluster: Bool {return _storage._cluster != nil}
  /// Clears the value of `cluster`. Subsequent reads from it will return its default value.
  mutating func clearCluster() {_storage._cluster = nil}

  /// The name of the job of which this server is a member.
  ///
  /// NOTE(mrry): The `cluster` field must contain a `JobDef` with a `name` field
  /// that matches this name.
  var jobName: String {
    get {return _storage._jobName}
    set {_uniqueStorage()._jobName = newValue}
  }

  /// The task index of this server in its job.
  ///
  /// NOTE: The `cluster` field must contain a `JobDef` with a matching `name`
  /// and a mapping in its `tasks` field for this index.
  var taskIndex: Int32 {
    get {return _storage._taskIndex}
    set {_uniqueStorage()._taskIndex = newValue}
  }

  /// The default configuration for sessions that run on this server.
  var defaultSessionConfig: Tensorflow_ConfigProto {
    get {return _storage._defaultSessionConfig ?? Tensorflow_ConfigProto()}
    set {_uniqueStorage()._defaultSessionConfig = newValue}
  }
  /// Returns true if `defaultSessionConfig` has been explicitly set.
  var hasDefaultSessionConfig: Bool {return _storage._defaultSessionConfig != nil}
  /// Clears the value of `defaultSessionConfig`. Subsequent reads from it will return its default value.
  mutating func clearDefaultSessionConfig() {_storage._defaultSessionConfig = nil}

  /// The protocol to be used by this server.
  ///
  /// Acceptable values include: "grpc".
  var protocol_p: String {
    get {return _storage._protocol_p}
    set {_uniqueStorage()._protocol_p = newValue}
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularMessageField(value: &_storage._cluster)
        case 2: try decoder.decodeSingularStringField(value: &_storage._jobName)
        case 3: try decoder.decodeSingularInt32Field(value: &_storage._taskIndex)
        case 4: try decoder.decodeSingularMessageField(value: &_storage._defaultSessionConfig)
        case 5: try decoder.decodeSingularStringField(value: &_storage._protocol_p)
        default: break
        }
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if let v = _storage._cluster {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
      }
      if !_storage._jobName.isEmpty {
        try visitor.visitSingularStringField(value: _storage._jobName, fieldNumber: 2)
      }
      if _storage._taskIndex != 0 {
        try visitor.visitSingularInt32Field(value: _storage._taskIndex, fieldNumber: 3)
      }
      if let v = _storage._defaultSessionConfig {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
      }
      if !_storage._protocol_p.isEmpty {
        try visitor.visitSingularStringField(value: _storage._protocol_p, fieldNumber: 5)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  fileprivate var _storage = _StorageClass()
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "tensorflow"

extension Tensorflow_JobDef: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "name"),
    2: .same(proto: "tasks"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_JobDef) -> Bool {
    if self.name != other.name {return false}
    if self.tasks != other.tasks {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_ClusterDef: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "job"),
  ]

  func _protobuf_generated_isEqualTo(other: Tensorflow_ClusterDef) -> Bool {
    if self.job != other.job {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension Tensorflow_ServerDef: SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "cluster"),
    2: .standard(proto: "job_name"),
    3: .standard(proto: "task_index"),
    4: .standard(proto: "default_session_config"),
    5: .same(proto: "protocol"),
  ]

  fileprivate class _StorageClass {
    var _cluster: Tensorflow_ClusterDef? = nil
    var _jobName: String = String()
    var _taskIndex: Int32 = 0
    var _defaultSessionConfig: Tensorflow_ConfigProto? = nil
    var _protocol_p: String = String()

    init() {}

    init(copying source: _StorageClass) {
      _cluster = source._cluster
      _jobName = source._jobName
      _taskIndex = source._taskIndex
      _defaultSessionConfig = source._defaultSessionConfig
      _protocol_p = source._protocol_p
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  func _protobuf_generated_isEqualTo(other: Tensorflow_ServerDef) -> Bool {
    if _storage !== other._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((_storage, other._storage)) { (_storage, other_storage) in
        if _storage._cluster != other_storage._cluster {return false}
        if _storage._jobName != other_storage._jobName {return false}
        if _storage._taskIndex != other_storage._taskIndex {return false}
        if _storage._defaultSessionConfig != other_storage._defaultSessionConfig {return false}
        if _storage._protocol_p != other_storage._protocol_p {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if unknownFields != other.unknownFields {return false}
    return true
  }
}
