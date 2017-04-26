#  🚀 swift-tensorflow    


 [Tensorflow](https://www.tensorflow.org) data structures generated from [protobuf definitions](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/framework)  
 using [swift-protobuf](https://github.com/apple/swift-protobuf) &     using [swift-grpc-protobuf](https://github.com/grpc/grpc-swift)   


[RUNME.sh](RUNME.sh)  will  download latest tensorflow proto files / swift grpc and build protobuf files en masse. 


* [Tensorflow Client Service - tensorflow.client.pb.swift](Generated/tensorflow.client.pb.swift) 

```swift
/// Call methods of this class to make API calls.
public class Tensorflow_EventListenerService {
  private var channel: Channel

  /// This metadata will be sent with all requests.
  public var metadata : Metadata

  /// This property allows the service host name to be overridden.
  /// For example, it can be used to make calls to "localhost:8080"
  /// appear to be to "example.com".
  public var host : String {
    get {
      return self.channel.host
    }
    set {
      self.channel.host = newValue
    }
  }

  /// Create a client that makes insecure connections.
  public init(address: String) {
    gRPC.initialize()
    channel = Channel(address:address)
    metadata = Metadata()
  }

  /// Create a client that makes secure connections.
  public init(address: String, certificates: String?, host: String?) {
    gRPC.initialize()
    channel = Channel(address:address, certificates:certificates, host:host)
    metadata = Metadata()
  }

  /// Asynchronous. Bidirectional-streaming.
  /// Use methods on the returned object to stream messages,
  /// to wait for replies, and to close the connection.
  public func sendevents(completion: @escaping (CallResult)->())
    throws
    -> Tensorflow_EventListenerSendEventsCall {
      return try Tensorflow_EventListenerSendEventsCall(channel).start(metadata:metadata, completion:completion)
  }
}

```




* [Tensorflow GRPC Client Service - tensorflow.grpc.client.pb.swift](Generated/tensorflow.grpc.client.pb.swift) 
```swift

/// Call methods of this class to make API calls.
public class Tensorflow_Grpc_WorkerServiceService {
  private var channel: Channel

  /// This metadata will be sent with all requests.
  public var metadata : Metadata

  /// This property allows the service host name to be overridden.
  /// For example, it can be used to make calls to "localhost:8080"
  /// appear to be to "example.com".
  public var host : String {
    get {
      return self.channel.host
    }
    set {
      self.channel.host = newValue
    }
  }

  /// Create a client that makes insecure connections.
  public init(address: String) {
    gRPC.initialize()
    channel = Channel(address:address)
    metadata = Metadata()
  }

  /// Create a client that makes secure connections.
  public init(address: String, certificates: String?, host: String?) {
    gRPC.initialize()
    channel = Channel(address:address, certificates:certificates, host:host)
    metadata = Metadata()
  }

  /// Synchronous. Unary.
  public func getstatus(_ request: Tensorflow_GetStatusRequest)
    throws
    -> Tensorflow_GetStatusResponse {
      return try Tensorflow_Grpc_WorkerServiceGetStatusCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  public func getstatus(_ request: Tensorflow_GetStatusRequest,
                  completion: @escaping (Tensorflow_GetStatusResponse?, CallResult)->())
    throws
    -> Tensorflow_Grpc_WorkerServiceGetStatusCall {
      return try Tensorflow_Grpc_WorkerServiceGetStatusCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  public func createworkersession(_ request: Tensorflow_CreateWorkerSessionRequest)
    throws
    -> Tensorflow_CreateWorkerSessionResponse {
      return try Tensorflow_Grpc_WorkerServiceCreateWorkerSessionCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  public func createworkersession(_ request: Tensorflow_CreateWorkerSessionRequest,
                  completion: @escaping (Tensorflow_CreateWorkerSessionResponse?, CallResult)->())
    throws
    -> Tensorflow_Grpc_WorkerServiceCreateWorkerSessionCall {
      return try Tensorflow_Grpc_WorkerServiceCreateWorkerSessionCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  public func registergraph(_ request: Tensorflow_RegisterGraphRequest)
    throws
    -> Tensorflow_RegisterGraphResponse {
      return try Tensorflow_Grpc_WorkerServiceRegisterGraphCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  public func registergraph(_ request: Tensorflow_RegisterGraphRequest,
                  completion: @escaping (Tensorflow_RegisterGraphResponse?, CallResult)->())
    throws
    -> Tensorflow_Grpc_WorkerServiceRegisterGraphCall {
      return try Tensorflow_Grpc_WorkerServiceRegisterGraphCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  public func deregistergraph(_ request: Tensorflow_DeregisterGraphRequest)
    throws
    -> Tensorflow_DeregisterGraphResponse {
      return try Tensorflow_Grpc_WorkerServiceDeregisterGraphCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  public func deregistergraph(_ request: Tensorflow_DeregisterGraphRequest,
                  completion: @escaping (Tensorflow_DeregisterGraphResponse?, CallResult)->())
    throws
    -> Tensorflow_Grpc_WorkerServiceDeregisterGraphCall {
      return try Tensorflow_Grpc_WorkerServiceDeregisterGraphCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  public func rungraph(_ request: Tensorflow_RunGraphRequest)
    throws
    -> Tensorflow_RunGraphResponse {
      return try Tensorflow_Grpc_WorkerServiceRunGraphCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  public func rungraph(_ request: Tensorflow_RunGraphRequest,
                  completion: @escaping (Tensorflow_RunGraphResponse?, CallResult)->())
    throws
    -> Tensorflow_Grpc_WorkerServiceRunGraphCall {
      return try Tensorflow_Grpc_WorkerServiceRunGraphCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  public func cleanupgraph(_ request: Tensorflow_CleanupGraphRequest)
    throws
    -> Tensorflow_CleanupGraphResponse {
      return try Tensorflow_Grpc_WorkerServiceCleanupGraphCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  public func cleanupgraph(_ request: Tensorflow_CleanupGraphRequest,
                  completion: @escaping (Tensorflow_CleanupGraphResponse?, CallResult)->())
    throws
    -> Tensorflow_Grpc_WorkerServiceCleanupGraphCall {
      return try Tensorflow_Grpc_WorkerServiceCleanupGraphCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  public func cleanupall(_ request: Tensorflow_CleanupAllRequest)
    throws
    -> Tensorflow_CleanupAllResponse {
      return try Tensorflow_Grpc_WorkerServiceCleanupAllCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  public func cleanupall(_ request: Tensorflow_CleanupAllRequest,
                  completion: @escaping (Tensorflow_CleanupAllResponse?, CallResult)->())
    throws
    -> Tensorflow_Grpc_WorkerServiceCleanupAllCall {
      return try Tensorflow_Grpc_WorkerServiceCleanupAllCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  public func recvtensor(_ request: Tensorflow_RecvTensorRequest)
    throws
    -> Tensorflow_RecvTensorResponse {
      return try Tensorflow_Grpc_WorkerServiceRecvTensorCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  public func recvtensor(_ request: Tensorflow_RecvTensorRequest,
                  completion: @escaping (Tensorflow_RecvTensorResponse?, CallResult)->())
    throws
    -> Tensorflow_Grpc_WorkerServiceRecvTensorCall {
      return try Tensorflow_Grpc_WorkerServiceRecvTensorCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  public func logging(_ request: Tensorflow_LoggingRequest)
    throws
    -> Tensorflow_LoggingResponse {
      return try Tensorflow_Grpc_WorkerServiceLoggingCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  public func logging(_ request: Tensorflow_LoggingRequest,
                  completion: @escaping (Tensorflow_LoggingResponse?, CallResult)->())
    throws
    -> Tensorflow_Grpc_WorkerServiceLoggingCall {
      return try Tensorflow_Grpc_WorkerServiceLoggingCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  public func tracing(_ request: Tensorflow_TracingRequest)
    throws
    -> Tensorflow_TracingResponse {
      return try Tensorflow_Grpc_WorkerServiceTracingCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  public func tracing(_ request: Tensorflow_TracingRequest,
                  completion: @escaping (Tensorflow_TracingResponse?, CallResult)->())
    throws
    -> Tensorflow_Grpc_WorkerServiceTracingCall {
      return try Tensorflow_Grpc_WorkerServiceTracingCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
}

```





* [Tensorflow GRPC Server Service - tensorflow.grpc.server.pb.swift](Generated/tensorflow.grpc.server.pb.swift)    
```swift
/// To build a server, implement a class that conforms to this protocol.
public protocol Tensorflow_Grpc_WorkerServiceProvider {
  func getstatus(request : Tensorflow_GetStatusRequest, session : Tensorflow_Grpc_WorkerServiceGetStatusSession) throws -> Tensorflow_GetStatusResponse
  func createworkersession(request : Tensorflow_CreateWorkerSessionRequest, session : Tensorflow_Grpc_WorkerServiceCreateWorkerSessionSession) throws -> Tensorflow_CreateWorkerSessionResponse
  func registergraph(request : Tensorflow_RegisterGraphRequest, session : Tensorflow_Grpc_WorkerServiceRegisterGraphSession) throws -> Tensorflow_RegisterGraphResponse
  func deregistergraph(request : Tensorflow_DeregisterGraphRequest, session : Tensorflow_Grpc_WorkerServiceDeregisterGraphSession) throws -> Tensorflow_DeregisterGraphResponse
  func rungraph(request : Tensorflow_RunGraphRequest, session : Tensorflow_Grpc_WorkerServiceRunGraphSession) throws -> Tensorflow_RunGraphResponse
  func cleanupgraph(request : Tensorflow_CleanupGraphRequest, session : Tensorflow_Grpc_WorkerServiceCleanupGraphSession) throws -> Tensorflow_CleanupGraphResponse
  func cleanupall(request : Tensorflow_CleanupAllRequest, session : Tensorflow_Grpc_WorkerServiceCleanupAllSession) throws -> Tensorflow_CleanupAllResponse
  func recvtensor(request : Tensorflow_RecvTensorRequest, session : Tensorflow_Grpc_WorkerServiceRecvTensorSession) throws -> Tensorflow_RecvTensorResponse
  func logging(request : Tensorflow_LoggingRequest, session : Tensorflow_Grpc_WorkerServiceLoggingSession) throws -> Tensorflow_LoggingResponse
  func tracing(request : Tensorflow_TracingRequest, session : Tensorflow_Grpc_WorkerServiceTracingSession) throws -> Tensorflow_TracingResponse
}



/// To build a server, implement a class that conforms to this protocol.
public protocol Tensorflow_EventListenerProvider {
  func sendevents(session : Tensorflow_EventListenerSendEventsSession) throws
}

```


* [Tensorflow Server - tensorflow.server.pb.swift](Generated/tensorflow.server.pb.swift)    

```swift


/// Main server for generated service
public class Tensorflow_EventListenerServer {
  private var address: String
  private var server: gRPC.Server
  private var provider: Tensorflow_EventListenerProvider?

  /// Create a server that accepts insecure connections.
  public init(address:String,
              provider:Tensorflow_EventListenerProvider) {
    gRPC.initialize()
    self.address = address
    self.provider = provider
    self.server = gRPC.Server(address:address)
  }

  /// Create a server that accepts secure connections.
  public init?(address:String,
               certificateURL:URL,
               keyURL:URL,
               provider:Tensorflow_EventListenerProvider) {
    gRPC.initialize()
    self.address = address
    self.provider = provider
    guard
      let certificate = try? String(contentsOf: certificateURL, encoding: .utf8),
      let key = try? String(contentsOf: keyURL, encoding: .utf8)
      else {
        return nil
    }
    self.server = gRPC.Server(address:address, key:key, certs:certificate)
  }

  /// Start the server.
  public func start(queue:DispatchQueue = DispatchQueue.global()) {
    guard let provider = self.provider else {
      assert(false) // the server requires a provider
    }
    server.run {(handler) in
      print("Server received request to " + handler.host
        + " calling " + handler.method
        + " from " + handler.caller
        + " with " + String(describing:handler.requestMetadata) )

      do {
        switch handler.method {
        case "/tensorflow.EventListener/SendEvents":
          try Tensorflow_EventListenerSendEventsSession(handler:handler, provider:provider).run(queue:queue)
        default:
          break // handle unknown requests
        }
      } catch (let error) {
        print("Server error: \(error)")
      }
    }
  }
}

```





