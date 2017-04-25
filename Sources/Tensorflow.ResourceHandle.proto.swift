/// Generated by the Protocol Buffers 3.2.0 compiler.  DO NOT EDIT!
/// Protobuf-swift version: 3.0.13
/// Source file "resource_handle.proto"
/// Syntax "Proto3"

import Foundation
import ProtocolBuffers


public struct Tensorflow { }

public extension Tensorflow {
    public struct ResourceHandleRoot {
        public static let `default` = ResourceHandleRoot()
        public var extensionRegistry:ExtensionRegistry

        init() {
            extensionRegistry = ExtensionRegistry()
            registerAllExtensions(registry: extensionRegistry)
        }
        public func registerAllExtensions(registry: ExtensionRegistry) {
        }
    }

    /// Protocol buffer representing a handle to a tensorflow resource. Handles are
    /// not valid across executions, but can be serialized back and forth from within
    /// a single run.
    final public class ResourceHandle : GeneratedMessage {

        public static func == (lhs: Tensorflow.ResourceHandle, rhs: Tensorflow.ResourceHandle) -> Bool {
            if lhs === rhs {
                return true
            }
            var fieldCheck:Bool = (lhs.hashValue == rhs.hashValue)
            fieldCheck = fieldCheck && (lhs.hasDevice == rhs.hasDevice) && (!lhs.hasDevice || lhs.device == rhs.device)
            fieldCheck = fieldCheck && (lhs.hasContainer == rhs.hasContainer) && (!lhs.hasContainer || lhs.container == rhs.container)
            fieldCheck = fieldCheck && (lhs.hasName == rhs.hasName) && (!lhs.hasName || lhs.name == rhs.name)
            fieldCheck = fieldCheck && (lhs.hasHashCode == rhs.hasHashCode) && (!lhs.hasHashCode || lhs.hashCode == rhs.hashCode)
            fieldCheck = fieldCheck && (lhs.hasMaybeTypeName == rhs.hasMaybeTypeName) && (!lhs.hasMaybeTypeName || lhs.maybeTypeName == rhs.maybeTypeName)
            fieldCheck = (fieldCheck && (lhs.unknownFields == rhs.unknownFields))
            return fieldCheck
        }

        /// Unique name for the device containing the resource.
        public fileprivate(set) var device:String = ""
        public fileprivate(set) var hasDevice:Bool = false

        /// Container in which this resource is placed.
        public fileprivate(set) var container:String = ""
        public fileprivate(set) var hasContainer:Bool = false

        /// Unique name of this resource.
        public fileprivate(set) var name:String = ""
        public fileprivate(set) var hasName:Bool = false

        /// Hash code for the type of the resource. Is only valid in the same device
        /// and in the same execution.
        public fileprivate(set) var hashCode:UInt64 = UInt64(0)
        public fileprivate(set) var hasHashCode:Bool = false

        /// For debug-only, the name of the type pointed to by this handle, if
        /// available.
        public fileprivate(set) var maybeTypeName:String = ""
        public fileprivate(set) var hasMaybeTypeName:Bool = false

        required public init() {
            super.init()
        }
        override public func isInitialized() -> Bool {
            return true
        }
        override public func writeTo(codedOutputStream: CodedOutputStream) throws {
            if hasDevice {
                try codedOutputStream.writeString(fieldNumber: 1, value:device)
            }
            if hasContainer {
                try codedOutputStream.writeString(fieldNumber: 2, value:container)
            }
            if hasName {
                try codedOutputStream.writeString(fieldNumber: 3, value:name)
            }
            if hasHashCode {
                try codedOutputStream.writeUInt64(fieldNumber: 4, value:hashCode)
            }
            if hasMaybeTypeName {
                try codedOutputStream.writeString(fieldNumber: 5, value:maybeTypeName)
            }
            try unknownFields.writeTo(codedOutputStream: codedOutputStream)
        }
        override public func serializedSize() -> Int32 {
            var serialize_size:Int32 = memoizedSerializedSize
            if serialize_size != -1 {
             return serialize_size
            }

            serialize_size = 0
            if hasDevice {
                serialize_size += device.computeStringSize(fieldNumber: 1)
            }
            if hasContainer {
                serialize_size += container.computeStringSize(fieldNumber: 2)
            }
            if hasName {
                serialize_size += name.computeStringSize(fieldNumber: 3)
            }
            if hasHashCode {
                serialize_size += hashCode.computeUInt64Size(fieldNumber: 4)
            }
            if hasMaybeTypeName {
                serialize_size += maybeTypeName.computeStringSize(fieldNumber: 5)
            }
            serialize_size += unknownFields.serializedSize()
            memoizedSerializedSize = serialize_size
            return serialize_size
        }
        public class func getBuilder() -> Tensorflow.ResourceHandle.Builder {
            return Tensorflow.ResourceHandle.classBuilder() as! Tensorflow.ResourceHandle.Builder
        }
        public func getBuilder() -> Tensorflow.ResourceHandle.Builder {
            return classBuilder() as! Tensorflow.ResourceHandle.Builder
        }
        override public class func classBuilder() -> ProtocolBuffersMessageBuilder {
            return Tensorflow.ResourceHandle.Builder()
        }
        override public func classBuilder() -> ProtocolBuffersMessageBuilder {
            return Tensorflow.ResourceHandle.Builder()
        }
        public func toBuilder() throws -> Tensorflow.ResourceHandle.Builder {
            return try Tensorflow.ResourceHandle.builderWithPrototype(prototype:self)
        }
        public class func builderWithPrototype(prototype:Tensorflow.ResourceHandle) throws -> Tensorflow.ResourceHandle.Builder {
            return try Tensorflow.ResourceHandle.Builder().mergeFrom(other:prototype)
        }
        override public func encode() throws -> Dictionary<String,Any> {
            guard isInitialized() else {
                throw ProtocolBuffersError.invalidProtocolBuffer("Uninitialized Message")
            }

            var jsonMap:Dictionary<String,Any> = Dictionary<String,Any>()
            if hasDevice {
                jsonMap["device"] = device
            }
            if hasContainer {
                jsonMap["container"] = container
            }
            if hasName {
                jsonMap["name"] = name
            }
            if hasHashCode {
                jsonMap["hashCode"] = "\(hashCode)"
            }
            if hasMaybeTypeName {
                jsonMap["maybeTypeName"] = maybeTypeName
            }
            return jsonMap
        }
        override class public func decode(jsonMap:Dictionary<String,Any>) throws -> Tensorflow.ResourceHandle {
            return try Tensorflow.ResourceHandle.Builder.decodeToBuilder(jsonMap:jsonMap).build()
        }
        override class public func fromJSON(data:Data) throws -> Tensorflow.ResourceHandle {
            return try Tensorflow.ResourceHandle.Builder.fromJSONToBuilder(data:data).build()
        }
        override public func getDescription(indent:String) throws -> String {
            var output = ""
            if hasDevice {
                output += "\(indent) device: \(device) \n"
            }
            if hasContainer {
                output += "\(indent) container: \(container) \n"
            }
            if hasName {
                output += "\(indent) name: \(name) \n"
            }
            if hasHashCode {
                output += "\(indent) hashCode: \(hashCode) \n"
            }
            if hasMaybeTypeName {
                output += "\(indent) maybeTypeName: \(maybeTypeName) \n"
            }
            output += unknownFields.getDescription(indent: indent)
            return output
        }
        override public var hashValue:Int {
            get {
                var hashCode:Int = 7
                if hasDevice {
                    hashCode = (hashCode &* 31) &+ device.hashValue
                }
                if hasContainer {
                    hashCode = (hashCode &* 31) &+ container.hashValue
                }
                if hasName {
                    hashCode = (hashCode &* 31) &+ name.hashValue
                }
                if hasHashCode {
                    hashCode = (hashCode &* 31) &+ hashCode.hashValue
                }
                if hasMaybeTypeName {
                    hashCode = (hashCode &* 31) &+ maybeTypeName.hashValue
                }
                hashCode = (hashCode &* 31) &+  unknownFields.hashValue
                return hashCode
            }
        }


        //Meta information declaration start

        override public class func className() -> String {
            return "Tensorflow.ResourceHandle"
        }
        override public func className() -> String {
            return "Tensorflow.ResourceHandle"
        }
        //Meta information declaration end

        final public class Builder : GeneratedMessageBuilder {
            fileprivate var builderResult:Tensorflow.ResourceHandle = Tensorflow.ResourceHandle()
            public func getMessage() -> Tensorflow.ResourceHandle {
                return builderResult
            }

            required override public init () {
                super.init()
            }
            /// Unique name for the device containing the resource.
            public var device:String {
                get {
                    return builderResult.device
                }
                set (value) {
                    builderResult.hasDevice = true
                    builderResult.device = value
                }
            }
            public var hasDevice:Bool {
                get {
                    return builderResult.hasDevice
                }
            }
            @discardableResult
            public func setDevice(_ value:String) -> Tensorflow.ResourceHandle.Builder {
                self.device = value
                return self
            }
            @discardableResult
            public func clearDevice() -> Tensorflow.ResourceHandle.Builder{
                builderResult.hasDevice = false
                builderResult.device = ""
                return self
            }
            /// Container in which this resource is placed.
            public var container:String {
                get {
                    return builderResult.container
                }
                set (value) {
                    builderResult.hasContainer = true
                    builderResult.container = value
                }
            }
            public var hasContainer:Bool {
                get {
                    return builderResult.hasContainer
                }
            }
            @discardableResult
            public func setContainer(_ value:String) -> Tensorflow.ResourceHandle.Builder {
                self.container = value
                return self
            }
            @discardableResult
            public func clearContainer() -> Tensorflow.ResourceHandle.Builder{
                builderResult.hasContainer = false
                builderResult.container = ""
                return self
            }
            /// Unique name of this resource.
            public var name:String {
                get {
                    return builderResult.name
                }
                set (value) {
                    builderResult.hasName = true
                    builderResult.name = value
                }
            }
            public var hasName:Bool {
                get {
                    return builderResult.hasName
                }
            }
            @discardableResult
            public func setName(_ value:String) -> Tensorflow.ResourceHandle.Builder {
                self.name = value
                return self
            }
            @discardableResult
            public func clearName() -> Tensorflow.ResourceHandle.Builder{
                builderResult.hasName = false
                builderResult.name = ""
                return self
            }
            /// Hash code for the type of the resource. Is only valid in the same device
            /// and in the same execution.
            public var hashCode:UInt64 {
                get {
                    return builderResult.hashCode
                }
                set (value) {
                    builderResult.hasHashCode = true
                    builderResult.hashCode = value
                }
            }
            public var hasHashCode:Bool {
                get {
                    return builderResult.hasHashCode
                }
            }
            @discardableResult
            public func setHashCode(_ value:UInt64) -> Tensorflow.ResourceHandle.Builder {
                self.hashCode = value
                return self
            }
            @discardableResult
            public func clearHashCode() -> Tensorflow.ResourceHandle.Builder{
                builderResult.hasHashCode = false
                builderResult.hashCode = UInt64(0)
                return self
            }
            /// For debug-only, the name of the type pointed to by this handle, if
            /// available.
            public var maybeTypeName:String {
                get {
                    return builderResult.maybeTypeName
                }
                set (value) {
                    builderResult.hasMaybeTypeName = true
                    builderResult.maybeTypeName = value
                }
            }
            public var hasMaybeTypeName:Bool {
                get {
                    return builderResult.hasMaybeTypeName
                }
            }
            @discardableResult
            public func setMaybeTypeName(_ value:String) -> Tensorflow.ResourceHandle.Builder {
                self.maybeTypeName = value
                return self
            }
            @discardableResult
            public func clearMaybeTypeName() -> Tensorflow.ResourceHandle.Builder{
                builderResult.hasMaybeTypeName = false
                builderResult.maybeTypeName = ""
                return self
            }
            override public var internalGetResult:GeneratedMessage {
                get {
                    return builderResult
                }
            }
            @discardableResult
            override public func clear() -> Tensorflow.ResourceHandle.Builder {
                builderResult = Tensorflow.ResourceHandle()
                return self
            }
            override public func clone() throws -> Tensorflow.ResourceHandle.Builder {
                return try Tensorflow.ResourceHandle.builderWithPrototype(prototype:builderResult)
            }
            override public func build() throws -> Tensorflow.ResourceHandle {
                try checkInitialized()
                return buildPartial()
            }
            public func buildPartial() -> Tensorflow.ResourceHandle {
                let returnMe:Tensorflow.ResourceHandle = builderResult
                return returnMe
            }
            @discardableResult
            public func mergeFrom(other:Tensorflow.ResourceHandle) throws -> Tensorflow.ResourceHandle.Builder {
                if other == Tensorflow.ResourceHandle() {
                    return self
                }
                if other.hasDevice {
                    device = other.device
                }
                if other.hasContainer {
                    container = other.container
                }
                if other.hasName {
                    name = other.name
                }
                if other.hasHashCode {
                    hashCode = other.hashCode
                }
                if other.hasMaybeTypeName {
                    maybeTypeName = other.maybeTypeName
                }
                try merge(unknownField: other.unknownFields)
                return self
            }
            @discardableResult
            override public func mergeFrom(codedInputStream: CodedInputStream) throws -> Tensorflow.ResourceHandle.Builder {
                return try mergeFrom(codedInputStream: codedInputStream, extensionRegistry:ExtensionRegistry())
            }
            @discardableResult
            override public func mergeFrom(codedInputStream: CodedInputStream, extensionRegistry:ExtensionRegistry) throws -> Tensorflow.ResourceHandle.Builder {
                let unknownFieldsBuilder:UnknownFieldSet.Builder = try UnknownFieldSet.builderWithUnknownFields(copyFrom:self.unknownFields)
                while (true) {
                    let protobufTag = try codedInputStream.readTag()
                    switch protobufTag {
                    case 0: 
                        self.unknownFields = try unknownFieldsBuilder.build()
                        return self

                    case 10:
                        device = try codedInputStream.readString()

                    case 18:
                        container = try codedInputStream.readString()

                    case 26:
                        name = try codedInputStream.readString()

                    case 32:
                        hashCode = try codedInputStream.readUInt64()

                    case 42:
                        maybeTypeName = try codedInputStream.readString()

                    default:
                        if (!(try parse(codedInputStream:codedInputStream, unknownFields:unknownFieldsBuilder, extensionRegistry:extensionRegistry, tag:protobufTag))) {
                            unknownFields = try unknownFieldsBuilder.build()
                            return self
                        }
                    }
                }
            }
            class override public func decodeToBuilder(jsonMap:Dictionary<String,Any>) throws -> Tensorflow.ResourceHandle.Builder {
                let resultDecodedBuilder = Tensorflow.ResourceHandle.Builder()
                if let jsonValueDevice = jsonMap["device"] as? String {
                    resultDecodedBuilder.device = jsonValueDevice
                }
                if let jsonValueContainer = jsonMap["container"] as? String {
                    resultDecodedBuilder.container = jsonValueContainer
                }
                if let jsonValueName = jsonMap["name"] as? String {
                    resultDecodedBuilder.name = jsonValueName
                }
                if let jsonValueHashCode = jsonMap["hashCode"] as? String {
                    resultDecodedBuilder.hashCode = UInt64(jsonValueHashCode)!
                } else if let jsonValueHashCode = jsonMap["hashCode"] as? UInt {
                    resultDecodedBuilder.hashCode = UInt64(jsonValueHashCode)
                }
                if let jsonValueMaybeTypeName = jsonMap["maybeTypeName"] as? String {
                    resultDecodedBuilder.maybeTypeName = jsonValueMaybeTypeName
                }
                return resultDecodedBuilder
            }
            override class public func fromJSONToBuilder(data:Data) throws -> Tensorflow.ResourceHandle.Builder {
                let jsonData = try JSONSerialization.jsonObject(with:data, options: JSONSerialization.ReadingOptions(rawValue: 0))
                guard let jsDataCast = jsonData as? Dictionary<String,Any> else {
                  throw ProtocolBuffersError.invalidProtocolBuffer("Invalid JSON data")
                }
                return try Tensorflow.ResourceHandle.Builder.decodeToBuilder(jsonMap:jsDataCast)
            }
        }

    }

}
extension Tensorflow.ResourceHandle: GeneratedMessageProtocol {
    public class func parseArrayDelimitedFrom(inputStream: InputStream) throws -> Array<Tensorflow.ResourceHandle> {
        var mergedArray = Array<Tensorflow.ResourceHandle>()
        while let value = try parseDelimitedFrom(inputStream: inputStream) {
          mergedArray.append(value)
        }
        return mergedArray
    }
    public class func parseDelimitedFrom(inputStream: InputStream) throws -> Tensorflow.ResourceHandle? {
        return try Tensorflow.ResourceHandle.Builder().mergeDelimitedFrom(inputStream: inputStream)?.build()
    }
    public class func parseFrom(data: Data) throws -> Tensorflow.ResourceHandle {
        return try Tensorflow.ResourceHandle.Builder().mergeFrom(data: data, extensionRegistry:Tensorflow.ResourceHandleRoot.default.extensionRegistry).build()
    }
    public class func parseFrom(data: Data, extensionRegistry:ExtensionRegistry) throws -> Tensorflow.ResourceHandle {
        return try Tensorflow.ResourceHandle.Builder().mergeFrom(data: data, extensionRegistry:extensionRegistry).build()
    }
    public class func parseFrom(inputStream: InputStream) throws -> Tensorflow.ResourceHandle {
        return try Tensorflow.ResourceHandle.Builder().mergeFrom(inputStream: inputStream).build()
    }
    public class func parseFrom(inputStream: InputStream, extensionRegistry:ExtensionRegistry) throws -> Tensorflow.ResourceHandle {
        return try Tensorflow.ResourceHandle.Builder().mergeFrom(inputStream: inputStream, extensionRegistry:extensionRegistry).build()
    }
    public class func parseFrom(codedInputStream: CodedInputStream) throws -> Tensorflow.ResourceHandle {
        return try Tensorflow.ResourceHandle.Builder().mergeFrom(codedInputStream: codedInputStream).build()
    }
    public class func parseFrom(codedInputStream: CodedInputStream, extensionRegistry:ExtensionRegistry) throws -> Tensorflow.ResourceHandle {
        return try Tensorflow.ResourceHandle.Builder().mergeFrom(codedInputStream: codedInputStream, extensionRegistry:extensionRegistry).build()
    }
    public subscript(key: String) -> Any? {
        switch key {
        case "device": return self.device
        case "container": return self.container
        case "name": return self.name
        case "hashCode": return self.hashCode
        case "maybeTypeName": return self.maybeTypeName
        default: return nil
        }
    }
}
extension Tensorflow.ResourceHandle.Builder: GeneratedMessageBuilderProtocol {
    public subscript(key: String) -> Any? {
        get { 
            switch key {
            case "device": return self.device
            case "container": return self.container
            case "name": return self.name
            case "hashCode": return self.hashCode
            case "maybeTypeName": return self.maybeTypeName
            default: return nil
            }
        }
        set (newSubscriptValue) { 
            switch key {
            case "device":
                guard let newSubscriptValue = newSubscriptValue as? String else {
                    return
                }
                self.device = newSubscriptValue
            case "container":
                guard let newSubscriptValue = newSubscriptValue as? String else {
                    return
                }
                self.container = newSubscriptValue
            case "name":
                guard let newSubscriptValue = newSubscriptValue as? String else {
                    return
                }
                self.name = newSubscriptValue
            case "hashCode":
                guard let newSubscriptValue = newSubscriptValue as? UInt64 else {
                    return
                }
                self.hashCode = newSubscriptValue
            case "maybeTypeName":
                guard let newSubscriptValue = newSubscriptValue as? String else {
                    return
                }
                self.maybeTypeName = newSubscriptValue
            default: return
            }
        }
    }
}

// @@protoc_insertion_point(global_scope)