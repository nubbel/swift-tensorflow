/// Generated by the Protocol Buffers 3.2.0 compiler.  DO NOT EDIT!
/// Protobuf-swift version: 3.0.13
/// Source file "worker_service.proto"
/// Syntax "Proto3"

import Foundation
import ProtocolBuffers


public struct Tensorflow { public struct Grpc { }}

public extension Tensorflow.Grpc {
    public struct WorkerServiceRoot {
        public static let `default` = WorkerServiceRoot()
        public var extensionRegistry:ExtensionRegistry

        init() {
            extensionRegistry = ExtensionRegistry()
            registerAllExtensions(registry: extensionRegistry)
            Tensorflow.WorkerRoot.default.registerAllExtensions(registry: extensionRegistry)
        }
        public func registerAllExtensions(registry: ExtensionRegistry) {
        }
    }

}

// @@protoc_insertion_point(global_scope)
