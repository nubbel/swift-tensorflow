/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow_serving/apis/prediction_service.proto
 *
 */

/*
 * Copyright 2017, gRPC Authors All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Foundation
import Dispatch
import gRPC

/// Type for errors thrown from generated server code.
internal enum Tensorflow_Serving_PredictionServiceServerError : Error {
  case endOfStream
}

/// To build a server, implement a class that conforms to this protocol.
internal protocol Tensorflow_Serving_PredictionServiceProvider {
  func classify(request : Tensorflow_Serving_ClassificationRequest, session : Tensorflow_Serving_PredictionServiceClassifySession) throws -> Tensorflow_Serving_ClassificationResponse
  func regress(request : Tensorflow_Serving_RegressionRequest, session : Tensorflow_Serving_PredictionServiceRegressSession) throws -> Tensorflow_Serving_RegressionResponse
  func predict(request : Tensorflow_Serving_PredictRequest, session : Tensorflow_Serving_PredictionServicePredictSession) throws -> Tensorflow_Serving_PredictResponse
  func multiinference(request : Tensorflow_Serving_MultiInferenceRequest, session : Tensorflow_Serving_PredictionServiceMultiInferenceSession) throws -> Tensorflow_Serving_MultiInferenceResponse
  func getmodelmetadata(request : Tensorflow_Serving_GetModelMetadataRequest, session : Tensorflow_Serving_PredictionServiceGetModelMetadataSession) throws -> Tensorflow_Serving_GetModelMetadataResponse
}

/// Common properties available in each service session.
internal class Tensorflow_Serving_PredictionServiceSession {
  fileprivate var handler : gRPC.Handler
  internal var requestMetadata : Metadata { return handler.requestMetadata }

  internal var statusCode : Int = 0
  internal var statusMessage : String = "OK"
  internal var initialMetadata : Metadata = Metadata()
  internal var trailingMetadata : Metadata = Metadata()

  fileprivate init(handler:gRPC.Handler) {
    self.handler = handler
  }
}

// Classify (Unary)
internal class Tensorflow_Serving_PredictionServiceClassifySession : Tensorflow_Serving_PredictionServiceSession {
  private var provider : Tensorflow_Serving_PredictionServiceProvider

  /// Create a session.
  fileprivate init(handler:gRPC.Handler, provider: Tensorflow_Serving_PredictionServiceProvider) {
    self.provider = provider
    super.init(handler:handler)
  }

  /// Run the session. Internal.
  fileprivate func run(queue:DispatchQueue) throws {
    try handler.receiveMessage(initialMetadata:initialMetadata) {(requestData) in
      if let requestData = requestData {
        let requestMessage = try Tensorflow_Serving_ClassificationRequest(serializedData:requestData)
        let replyMessage = try self.provider.classify(request:requestMessage, session: self)
        try self.handler.sendResponse(message:replyMessage.serializedData(),
                                      statusCode:self.statusCode,
                                      statusMessage:self.statusMessage,
                                      trailingMetadata:self.trailingMetadata)
      }
    }
  }
}

// Regress (Unary)
internal class Tensorflow_Serving_PredictionServiceRegressSession : Tensorflow_Serving_PredictionServiceSession {
  private var provider : Tensorflow_Serving_PredictionServiceProvider

  /// Create a session.
  fileprivate init(handler:gRPC.Handler, provider: Tensorflow_Serving_PredictionServiceProvider) {
    self.provider = provider
    super.init(handler:handler)
  }

  /// Run the session. Internal.
  fileprivate func run(queue:DispatchQueue) throws {
    try handler.receiveMessage(initialMetadata:initialMetadata) {(requestData) in
      if let requestData = requestData {
        let requestMessage = try Tensorflow_Serving_RegressionRequest(serializedData:requestData)
        let replyMessage = try self.provider.regress(request:requestMessage, session: self)
        try self.handler.sendResponse(message:replyMessage.serializedData(),
                                      statusCode:self.statusCode,
                                      statusMessage:self.statusMessage,
                                      trailingMetadata:self.trailingMetadata)
      }
    }
  }
}

// Predict (Unary)
internal class Tensorflow_Serving_PredictionServicePredictSession : Tensorflow_Serving_PredictionServiceSession {
  private var provider : Tensorflow_Serving_PredictionServiceProvider

  /// Create a session.
  fileprivate init(handler:gRPC.Handler, provider: Tensorflow_Serving_PredictionServiceProvider) {
    self.provider = provider
    super.init(handler:handler)
  }

  /// Run the session. Internal.
  fileprivate func run(queue:DispatchQueue) throws {
    try handler.receiveMessage(initialMetadata:initialMetadata) {(requestData) in
      if let requestData = requestData {
        let requestMessage = try Tensorflow_Serving_PredictRequest(serializedData:requestData)
        let replyMessage = try self.provider.predict(request:requestMessage, session: self)
        try self.handler.sendResponse(message:replyMessage.serializedData(),
                                      statusCode:self.statusCode,
                                      statusMessage:self.statusMessage,
                                      trailingMetadata:self.trailingMetadata)
      }
    }
  }
}

// MultiInference (Unary)
internal class Tensorflow_Serving_PredictionServiceMultiInferenceSession : Tensorflow_Serving_PredictionServiceSession {
  private var provider : Tensorflow_Serving_PredictionServiceProvider

  /// Create a session.
  fileprivate init(handler:gRPC.Handler, provider: Tensorflow_Serving_PredictionServiceProvider) {
    self.provider = provider
    super.init(handler:handler)
  }

  /// Run the session. Internal.
  fileprivate func run(queue:DispatchQueue) throws {
    try handler.receiveMessage(initialMetadata:initialMetadata) {(requestData) in
      if let requestData = requestData {
        let requestMessage = try Tensorflow_Serving_MultiInferenceRequest(serializedData:requestData)
        let replyMessage = try self.provider.multiinference(request:requestMessage, session: self)
        try self.handler.sendResponse(message:replyMessage.serializedData(),
                                      statusCode:self.statusCode,
                                      statusMessage:self.statusMessage,
                                      trailingMetadata:self.trailingMetadata)
      }
    }
  }
}

// GetModelMetadata (Unary)
internal class Tensorflow_Serving_PredictionServiceGetModelMetadataSession : Tensorflow_Serving_PredictionServiceSession {
  private var provider : Tensorflow_Serving_PredictionServiceProvider

  /// Create a session.
  fileprivate init(handler:gRPC.Handler, provider: Tensorflow_Serving_PredictionServiceProvider) {
    self.provider = provider
    super.init(handler:handler)
  }

  /// Run the session. Internal.
  fileprivate func run(queue:DispatchQueue) throws {
    try handler.receiveMessage(initialMetadata:initialMetadata) {(requestData) in
      if let requestData = requestData {
        let requestMessage = try Tensorflow_Serving_GetModelMetadataRequest(serializedData:requestData)
        let replyMessage = try self.provider.getmodelmetadata(request:requestMessage, session: self)
        try self.handler.sendResponse(message:replyMessage.serializedData(),
                                      statusCode:self.statusCode,
                                      statusMessage:self.statusMessage,
                                      trailingMetadata:self.trailingMetadata)
      }
    }
  }
}


/// Main server for generated service
internal class Tensorflow_Serving_PredictionServiceServer {
  private var address: String
  private var server: gRPC.Server
  private var provider: Tensorflow_Serving_PredictionServiceProvider?

  /// Create a server that accepts insecure connections.
  internal init(address:String,
              provider:Tensorflow_Serving_PredictionServiceProvider) {
    gRPC.initialize()
    self.address = address
    self.provider = provider
    self.server = gRPC.Server(address:address)
  }

  /// Create a server that accepts secure connections.
  internal init?(address:String,
               certificateURL:URL,
               keyURL:URL,
               provider:Tensorflow_Serving_PredictionServiceProvider) {
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
  internal func start(queue:DispatchQueue = DispatchQueue.global()) {
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
        case "/tensorflow.serving.PredictionService/Classify":
          try Tensorflow_Serving_PredictionServiceClassifySession(handler:handler, provider:provider).run(queue:queue)
        case "/tensorflow.serving.PredictionService/Regress":
          try Tensorflow_Serving_PredictionServiceRegressSession(handler:handler, provider:provider).run(queue:queue)
        case "/tensorflow.serving.PredictionService/Predict":
          try Tensorflow_Serving_PredictionServicePredictSession(handler:handler, provider:provider).run(queue:queue)
        case "/tensorflow.serving.PredictionService/MultiInference":
          try Tensorflow_Serving_PredictionServiceMultiInferenceSession(handler:handler, provider:provider).run(queue:queue)
        case "/tensorflow.serving.PredictionService/GetModelMetadata":
          try Tensorflow_Serving_PredictionServiceGetModelMetadataSession(handler:handler, provider:provider).run(queue:queue)
        default:
          break // handle unknown requests
        }
      } catch (let error) {
        print("Server error: \(error)")
      }
    }
  }
}