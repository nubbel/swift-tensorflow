/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: tensorflow_serving/examples/inception_inference.proto
 *
 */

/*
 *
 * Copyright 2017, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

import Foundation
import Dispatch
import gRPC

/// Type for errors thrown from generated server code.
public enum Tensorflow_Serving_InceptionServiceServerError : Error {
  case endOfStream
}

/// To build a server, implement a class that conforms to this protocol.
public protocol Tensorflow_Serving_InceptionServiceProvider {
  func classify(request : Tensorflow_Serving_InceptionRequest, session : Tensorflow_Serving_InceptionServiceClassifySession) throws -> Tensorflow_Serving_InceptionResponse
}

/// Common properties available in each service session.
public class Tensorflow_Serving_InceptionServiceSession {
  fileprivate var handler : gRPC.Handler
  public var requestMetadata : Metadata { return handler.requestMetadata }

  public var statusCode : Int = 0
  public var statusMessage : String = "OK"
  public var initialMetadata : Metadata = Metadata()
  public var trailingMetadata : Metadata = Metadata()

  fileprivate init(handler:gRPC.Handler) {
    self.handler = handler
  }
}

// Classify (Unary)
public class Tensorflow_Serving_InceptionServiceClassifySession : Tensorflow_Serving_InceptionServiceSession {
  private var provider : Tensorflow_Serving_InceptionServiceProvider

  /// Create a session.
  fileprivate init(handler:gRPC.Handler, provider: Tensorflow_Serving_InceptionServiceProvider) {
    self.provider = provider
    super.init(handler:handler)
  }

  /// Run the session. Internal.
  fileprivate func run(queue:DispatchQueue) throws {
    try handler.receiveMessage(initialMetadata:initialMetadata) {(requestData) in
      if let requestData = requestData {
        let requestMessage = try Tensorflow_Serving_InceptionRequest(serializedData:requestData)
        let replyMessage = try self.provider.classify(request:requestMessage, session: self)
        try self.handler.sendResponse(message:replyMessage.serializedData(),
                                      statusCode:self.statusCode,
                                      statusMessage:self.statusMessage,
                                      trailingMetadata:self.trailingMetadata)
      }
    }
  }
}


/// Main server for generated service
public class Tensorflow_Serving_InceptionServiceServer {
  private var address: String
  private var server: gRPC.Server
  private var provider: Tensorflow_Serving_InceptionServiceProvider?

  /// Create a server that accepts insecure connections.
  public init(address:String,
              provider:Tensorflow_Serving_InceptionServiceProvider) {
    gRPC.initialize()
    self.address = address
    self.provider = provider
    self.server = gRPC.Server(address:address)
  }

  /// Create a server that accepts secure connections.
  public init?(address:String,
               certificateURL:URL,
               keyURL:URL,
               provider:Tensorflow_Serving_InceptionServiceProvider) {
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
        case "/tensorflow.serving.InceptionService/Classify":
          try Tensorflow_Serving_InceptionServiceClassifySession(handler:handler, provider:provider).run(queue:queue)
        default:
          break // handle unknown requests
        }
      } catch (let error) {
        print("Server error: \(error)")
      }
    }
  }
}