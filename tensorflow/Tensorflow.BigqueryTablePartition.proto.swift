/// Generated by the Protocol Buffers 3.2.0 compiler.  DO NOT EDIT!
/// Protobuf-swift version: 3.0.13
/// Source file "bigquery_table_partition.proto"
/// Syntax "Proto3"

import Foundation
import ProtocolBuffers


public struct Tensorflow { }

public extension Tensorflow {
    public struct BigqueryTablePartitionRoot {
        public static let `default` = BigqueryTablePartitionRoot()
        public var extensionRegistry:ExtensionRegistry

        init() {
            extensionRegistry = ExtensionRegistry()
            registerAllExtensions(registry: extensionRegistry)
        }
        public func registerAllExtensions(registry: ExtensionRegistry) {
        }
    }

    /// This proto specifies a table partition in BigQuery.
    final public class BigQueryTablePartition : GeneratedMessage {

        public static func == (lhs: Tensorflow.BigQueryTablePartition, rhs: Tensorflow.BigQueryTablePartition) -> Bool {
            if lhs === rhs {
                return true
            }
            var fieldCheck:Bool = (lhs.hashValue == rhs.hashValue)
            fieldCheck = fieldCheck && (lhs.hasStartIndex == rhs.hasStartIndex) && (!lhs.hasStartIndex || lhs.startIndex == rhs.startIndex)
            fieldCheck = fieldCheck && (lhs.hasEndIndex == rhs.hasEndIndex) && (!lhs.hasEndIndex || lhs.endIndex == rhs.endIndex)
            fieldCheck = (fieldCheck && (lhs.unknownFields == rhs.unknownFields))
            return fieldCheck
        }

        /// [start_index, end_index] specify the boundaries of a partition.
        /// If end_index is -1, every row starting from start_index is part of the
        /// partition.
        public fileprivate(set) var startIndex:Int64 = Int64(0)
        public fileprivate(set) var hasStartIndex:Bool = false

        public fileprivate(set) var endIndex:Int64 = Int64(0)
        public fileprivate(set) var hasEndIndex:Bool = false

        required public init() {
            super.init()
        }
        override public func isInitialized() -> Bool {
            return true
        }
        override public func writeTo(codedOutputStream: CodedOutputStream) throws {
            if hasStartIndex {
                try codedOutputStream.writeInt64(fieldNumber: 1, value:startIndex)
            }
            if hasEndIndex {
                try codedOutputStream.writeInt64(fieldNumber: 2, value:endIndex)
            }
            try unknownFields.writeTo(codedOutputStream: codedOutputStream)
        }
        override public func serializedSize() -> Int32 {
            var serialize_size:Int32 = memoizedSerializedSize
            if serialize_size != -1 {
             return serialize_size
            }

            serialize_size = 0
            if hasStartIndex {
                serialize_size += startIndex.computeInt64Size(fieldNumber: 1)
            }
            if hasEndIndex {
                serialize_size += endIndex.computeInt64Size(fieldNumber: 2)
            }
            serialize_size += unknownFields.serializedSize()
            memoizedSerializedSize = serialize_size
            return serialize_size
        }
        public class func getBuilder() -> Tensorflow.BigQueryTablePartition.Builder {
            return Tensorflow.BigQueryTablePartition.classBuilder() as! Tensorflow.BigQueryTablePartition.Builder
        }
        public func getBuilder() -> Tensorflow.BigQueryTablePartition.Builder {
            return classBuilder() as! Tensorflow.BigQueryTablePartition.Builder
        }
        override public class func classBuilder() -> ProtocolBuffersMessageBuilder {
            return Tensorflow.BigQueryTablePartition.Builder()
        }
        override public func classBuilder() -> ProtocolBuffersMessageBuilder {
            return Tensorflow.BigQueryTablePartition.Builder()
        }
        public func toBuilder() throws -> Tensorflow.BigQueryTablePartition.Builder {
            return try Tensorflow.BigQueryTablePartition.builderWithPrototype(prototype:self)
        }
        public class func builderWithPrototype(prototype:Tensorflow.BigQueryTablePartition) throws -> Tensorflow.BigQueryTablePartition.Builder {
            return try Tensorflow.BigQueryTablePartition.Builder().mergeFrom(other:prototype)
        }
        override public func encode() throws -> Dictionary<String,Any> {
            guard isInitialized() else {
                throw ProtocolBuffersError.invalidProtocolBuffer("Uninitialized Message")
            }

            var jsonMap:Dictionary<String,Any> = Dictionary<String,Any>()
            if hasStartIndex {
                jsonMap["startIndex"] = "\(startIndex)"
            }
            if hasEndIndex {
                jsonMap["endIndex"] = "\(endIndex)"
            }
            return jsonMap
        }
        override class public func decode(jsonMap:Dictionary<String,Any>) throws -> Tensorflow.BigQueryTablePartition {
            return try Tensorflow.BigQueryTablePartition.Builder.decodeToBuilder(jsonMap:jsonMap).build()
        }
        override class public func fromJSON(data:Data) throws -> Tensorflow.BigQueryTablePartition {
            return try Tensorflow.BigQueryTablePartition.Builder.fromJSONToBuilder(data:data).build()
        }
        override public func getDescription(indent:String) throws -> String {
            var output = ""
            if hasStartIndex {
                output += "\(indent) startIndex: \(startIndex) \n"
            }
            if hasEndIndex {
                output += "\(indent) endIndex: \(endIndex) \n"
            }
            output += unknownFields.getDescription(indent: indent)
            return output
        }
        override public var hashValue:Int {
            get {
                var hashCode:Int = 7
                if hasStartIndex {
                    hashCode = (hashCode &* 31) &+ startIndex.hashValue
                }
                if hasEndIndex {
                    hashCode = (hashCode &* 31) &+ endIndex.hashValue
                }
                hashCode = (hashCode &* 31) &+  unknownFields.hashValue
                return hashCode
            }
        }


        //Meta information declaration start

        override public class func className() -> String {
            return "Tensorflow.BigQueryTablePartition"
        }
        override public func className() -> String {
            return "Tensorflow.BigQueryTablePartition"
        }
        //Meta information declaration end

        final public class Builder : GeneratedMessageBuilder {
            fileprivate var builderResult:Tensorflow.BigQueryTablePartition = Tensorflow.BigQueryTablePartition()
            public func getMessage() -> Tensorflow.BigQueryTablePartition {
                return builderResult
            }

            required override public init () {
                super.init()
            }
            /// [start_index, end_index] specify the boundaries of a partition.
            /// If end_index is -1, every row starting from start_index is part of the
            /// partition.
            public var startIndex:Int64 {
                get {
                    return builderResult.startIndex
                }
                set (value) {
                    builderResult.hasStartIndex = true
                    builderResult.startIndex = value
                }
            }
            public var hasStartIndex:Bool {
                get {
                    return builderResult.hasStartIndex
                }
            }
            @discardableResult
            public func setStartIndex(_ value:Int64) -> Tensorflow.BigQueryTablePartition.Builder {
                self.startIndex = value
                return self
            }
            @discardableResult
            public func clearStartIndex() -> Tensorflow.BigQueryTablePartition.Builder{
                builderResult.hasStartIndex = false
                builderResult.startIndex = Int64(0)
                return self
            }
            public var endIndex:Int64 {
                get {
                    return builderResult.endIndex
                }
                set (value) {
                    builderResult.hasEndIndex = true
                    builderResult.endIndex = value
                }
            }
            public var hasEndIndex:Bool {
                get {
                    return builderResult.hasEndIndex
                }
            }
            @discardableResult
            public func setEndIndex(_ value:Int64) -> Tensorflow.BigQueryTablePartition.Builder {
                self.endIndex = value
                return self
            }
            @discardableResult
            public func clearEndIndex() -> Tensorflow.BigQueryTablePartition.Builder{
                builderResult.hasEndIndex = false
                builderResult.endIndex = Int64(0)
                return self
            }
            override public var internalGetResult:GeneratedMessage {
                get {
                    return builderResult
                }
            }
            @discardableResult
            override public func clear() -> Tensorflow.BigQueryTablePartition.Builder {
                builderResult = Tensorflow.BigQueryTablePartition()
                return self
            }
            override public func clone() throws -> Tensorflow.BigQueryTablePartition.Builder {
                return try Tensorflow.BigQueryTablePartition.builderWithPrototype(prototype:builderResult)
            }
            override public func build() throws -> Tensorflow.BigQueryTablePartition {
                try checkInitialized()
                return buildPartial()
            }
            public func buildPartial() -> Tensorflow.BigQueryTablePartition {
                let returnMe:Tensorflow.BigQueryTablePartition = builderResult
                return returnMe
            }
            @discardableResult
            public func mergeFrom(other:Tensorflow.BigQueryTablePartition) throws -> Tensorflow.BigQueryTablePartition.Builder {
                if other == Tensorflow.BigQueryTablePartition() {
                    return self
                }
                if other.hasStartIndex {
                    startIndex = other.startIndex
                }
                if other.hasEndIndex {
                    endIndex = other.endIndex
                }
                try merge(unknownField: other.unknownFields)
                return self
            }
            @discardableResult
            override public func mergeFrom(codedInputStream: CodedInputStream) throws -> Tensorflow.BigQueryTablePartition.Builder {
                return try mergeFrom(codedInputStream: codedInputStream, extensionRegistry:ExtensionRegistry())
            }
            @discardableResult
            override public func mergeFrom(codedInputStream: CodedInputStream, extensionRegistry:ExtensionRegistry) throws -> Tensorflow.BigQueryTablePartition.Builder {
                let unknownFieldsBuilder:UnknownFieldSet.Builder = try UnknownFieldSet.builderWithUnknownFields(copyFrom:self.unknownFields)
                while (true) {
                    let protobufTag = try codedInputStream.readTag()
                    switch protobufTag {
                    case 0: 
                        self.unknownFields = try unknownFieldsBuilder.build()
                        return self

                    case 8:
                        startIndex = try codedInputStream.readInt64()

                    case 16:
                        endIndex = try codedInputStream.readInt64()

                    default:
                        if (!(try parse(codedInputStream:codedInputStream, unknownFields:unknownFieldsBuilder, extensionRegistry:extensionRegistry, tag:protobufTag))) {
                            unknownFields = try unknownFieldsBuilder.build()
                            return self
                        }
                    }
                }
            }
            class override public func decodeToBuilder(jsonMap:Dictionary<String,Any>) throws -> Tensorflow.BigQueryTablePartition.Builder {
                let resultDecodedBuilder = Tensorflow.BigQueryTablePartition.Builder()
                if let jsonValueStartIndex = jsonMap["startIndex"] as? String {
                    resultDecodedBuilder.startIndex = Int64(jsonValueStartIndex)!
                } else if let jsonValueStartIndex = jsonMap["startIndex"] as? Int {
                    resultDecodedBuilder.startIndex = Int64(jsonValueStartIndex)
                }
                if let jsonValueEndIndex = jsonMap["endIndex"] as? String {
                    resultDecodedBuilder.endIndex = Int64(jsonValueEndIndex)!
                } else if let jsonValueEndIndex = jsonMap["endIndex"] as? Int {
                    resultDecodedBuilder.endIndex = Int64(jsonValueEndIndex)
                }
                return resultDecodedBuilder
            }
            override class public func fromJSONToBuilder(data:Data) throws -> Tensorflow.BigQueryTablePartition.Builder {
                let jsonData = try JSONSerialization.jsonObject(with:data, options: JSONSerialization.ReadingOptions(rawValue: 0))
                guard let jsDataCast = jsonData as? Dictionary<String,Any> else {
                  throw ProtocolBuffersError.invalidProtocolBuffer("Invalid JSON data")
                }
                return try Tensorflow.BigQueryTablePartition.Builder.decodeToBuilder(jsonMap:jsDataCast)
            }
        }

    }

}
extension Tensorflow.BigQueryTablePartition: GeneratedMessageProtocol {
    public class func parseArrayDelimitedFrom(inputStream: InputStream) throws -> Array<Tensorflow.BigQueryTablePartition> {
        var mergedArray = Array<Tensorflow.BigQueryTablePartition>()
        while let value = try parseDelimitedFrom(inputStream: inputStream) {
          mergedArray.append(value)
        }
        return mergedArray
    }
    public class func parseDelimitedFrom(inputStream: InputStream) throws -> Tensorflow.BigQueryTablePartition? {
        return try Tensorflow.BigQueryTablePartition.Builder().mergeDelimitedFrom(inputStream: inputStream)?.build()
    }
    public class func parseFrom(data: Data) throws -> Tensorflow.BigQueryTablePartition {
        return try Tensorflow.BigQueryTablePartition.Builder().mergeFrom(data: data, extensionRegistry:Tensorflow.BigqueryTablePartitionRoot.default.extensionRegistry).build()
    }
    public class func parseFrom(data: Data, extensionRegistry:ExtensionRegistry) throws -> Tensorflow.BigQueryTablePartition {
        return try Tensorflow.BigQueryTablePartition.Builder().mergeFrom(data: data, extensionRegistry:extensionRegistry).build()
    }
    public class func parseFrom(inputStream: InputStream) throws -> Tensorflow.BigQueryTablePartition {
        return try Tensorflow.BigQueryTablePartition.Builder().mergeFrom(inputStream: inputStream).build()
    }
    public class func parseFrom(inputStream: InputStream, extensionRegistry:ExtensionRegistry) throws -> Tensorflow.BigQueryTablePartition {
        return try Tensorflow.BigQueryTablePartition.Builder().mergeFrom(inputStream: inputStream, extensionRegistry:extensionRegistry).build()
    }
    public class func parseFrom(codedInputStream: CodedInputStream) throws -> Tensorflow.BigQueryTablePartition {
        return try Tensorflow.BigQueryTablePartition.Builder().mergeFrom(codedInputStream: codedInputStream).build()
    }
    public class func parseFrom(codedInputStream: CodedInputStream, extensionRegistry:ExtensionRegistry) throws -> Tensorflow.BigQueryTablePartition {
        return try Tensorflow.BigQueryTablePartition.Builder().mergeFrom(codedInputStream: codedInputStream, extensionRegistry:extensionRegistry).build()
    }
    public subscript(key: String) -> Any? {
        switch key {
        case "startIndex": return self.startIndex
        case "endIndex": return self.endIndex
        default: return nil
        }
    }
}
extension Tensorflow.BigQueryTablePartition.Builder: GeneratedMessageBuilderProtocol {
    public subscript(key: String) -> Any? {
        get { 
            switch key {
            case "startIndex": return self.startIndex
            case "endIndex": return self.endIndex
            default: return nil
            }
        }
        set (newSubscriptValue) { 
            switch key {
            case "startIndex":
                guard let newSubscriptValue = newSubscriptValue as? Int64 else {
                    return
                }
                self.startIndex = newSubscriptValue
            case "endIndex":
                guard let newSubscriptValue = newSubscriptValue as? Int64 else {
                    return
                }
                self.endIndex = newSubscriptValue
            default: return
            }
        }
    }
}

// @@protoc_insertion_point(global_scope)