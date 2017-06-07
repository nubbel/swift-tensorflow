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

/// Type for errors thrown from generated client code.
internal enum Tensorflow_Serving_PredictionServiceClientError : Error {
  case endOfStream
  case invalidMessageReceived
  case error(c: CallResult)
}

/// Classify (Unary)
internal class Tensorflow_Serving_PredictionServiceClassifyCall {
  private var call : Call

  /// Create a call.
  fileprivate init(_ channel: Channel) {
    self.call = channel.makeCall("/tensorflow.serving.PredictionService/Classify")
  }

  /// Run the call. Blocks until the reply is received.
  fileprivate func run(request: Tensorflow_Serving_ClassificationRequest,
                       metadata: Metadata) throws -> Tensorflow_Serving_ClassificationResponse {
    let sem = DispatchSemaphore(value: 0)
    var returnCallResult : CallResult!
    var returnResponse : Tensorflow_Serving_ClassificationResponse?
    _ = try start(request:request, metadata:metadata) {response, callResult in
      returnResponse = response
      returnCallResult = callResult
      sem.signal()
    }
    _ = sem.wait(timeout: DispatchTime.distantFuture)
    if let returnResponse = returnResponse {
      return returnResponse
    } else {
      throw Tensorflow_Serving_PredictionServiceClientError.error(c: returnCallResult)
    }
  }

  /// Start the call. Nonblocking.
  fileprivate func start(request: Tensorflow_Serving_ClassificationRequest,
                         metadata: Metadata,
                         completion: @escaping (Tensorflow_Serving_ClassificationResponse?, CallResult)->())
    throws -> Tensorflow_Serving_PredictionServiceClassifyCall {

      let requestData = try request.serializedData()
      try call.start(.unary,
                     metadata:metadata,
                     message:requestData)
      {(callResult) in
        if let responseData = callResult.resultData,
          let response = try? Tensorflow_Serving_ClassificationResponse(serializedData:responseData) {
          completion(response, callResult)
        } else {
          completion(nil, callResult)
        }
      }
      return self
  }
}

/// Regress (Unary)
internal class Tensorflow_Serving_PredictionServiceRegressCall {
  private var call : Call

  /// Create a call.
  fileprivate init(_ channel: Channel) {
    self.call = channel.makeCall("/tensorflow.serving.PredictionService/Regress")
  }

  /// Run the call. Blocks until the reply is received.
  fileprivate func run(request: Tensorflow_Serving_RegressionRequest,
                       metadata: Metadata) throws -> Tensorflow_Serving_RegressionResponse {
    let sem = DispatchSemaphore(value: 0)
    var returnCallResult : CallResult!
    var returnResponse : Tensorflow_Serving_RegressionResponse?
    _ = try start(request:request, metadata:metadata) {response, callResult in
      returnResponse = response
      returnCallResult = callResult
      sem.signal()
    }
    _ = sem.wait(timeout: DispatchTime.distantFuture)
    if let returnResponse = returnResponse {
      return returnResponse
    } else {
      throw Tensorflow_Serving_PredictionServiceClientError.error(c: returnCallResult)
    }
  }

  /// Start the call. Nonblocking.
  fileprivate func start(request: Tensorflow_Serving_RegressionRequest,
                         metadata: Metadata,
                         completion: @escaping (Tensorflow_Serving_RegressionResponse?, CallResult)->())
    throws -> Tensorflow_Serving_PredictionServiceRegressCall {

      let requestData = try request.serializedData()
      try call.start(.unary,
                     metadata:metadata,
                     message:requestData)
      {(callResult) in
        if let responseData = callResult.resultData,
          let response = try? Tensorflow_Serving_RegressionResponse(serializedData:responseData) {
          completion(response, callResult)
        } else {
          completion(nil, callResult)
        }
      }
      return self
  }
}

/// Predict (Unary)
internal class Tensorflow_Serving_PredictionServicePredictCall {
  private var call : Call

  /// Create a call.
  fileprivate init(_ channel: Channel) {
    self.call = channel.makeCall("/tensorflow.serving.PredictionService/Predict")
  }

  /// Run the call. Blocks until the reply is received.
  fileprivate func run(request: Tensorflow_Serving_PredictRequest,
                       metadata: Metadata) throws -> Tensorflow_Serving_PredictResponse {
    let sem = DispatchSemaphore(value: 0)
    var returnCallResult : CallResult!
    var returnResponse : Tensorflow_Serving_PredictResponse?
    _ = try start(request:request, metadata:metadata) {response, callResult in
      returnResponse = response
      returnCallResult = callResult
      sem.signal()
    }
    _ = sem.wait(timeout: DispatchTime.distantFuture)
    if let returnResponse = returnResponse {
      return returnResponse
    } else {
      throw Tensorflow_Serving_PredictionServiceClientError.error(c: returnCallResult)
    }
  }

  /// Start the call. Nonblocking.
  fileprivate func start(request: Tensorflow_Serving_PredictRequest,
                         metadata: Metadata,
                         completion: @escaping (Tensorflow_Serving_PredictResponse?, CallResult)->())
    throws -> Tensorflow_Serving_PredictionServicePredictCall {

      let requestData = try request.serializedData()
      try call.start(.unary,
                     metadata:metadata,
                     message:requestData)
      {(callResult) in
        if let responseData = callResult.resultData,
          let response = try? Tensorflow_Serving_PredictResponse(serializedData:responseData) {
          completion(response, callResult)
        } else {
          completion(nil, callResult)
        }
      }
      return self
  }
}

/// MultiInference (Unary)
internal class Tensorflow_Serving_PredictionServiceMultiInferenceCall {
  private var call : Call

  /// Create a call.
  fileprivate init(_ channel: Channel) {
    self.call = channel.makeCall("/tensorflow.serving.PredictionService/MultiInference")
  }

  /// Run the call. Blocks until the reply is received.
  fileprivate func run(request: Tensorflow_Serving_MultiInferenceRequest,
                       metadata: Metadata) throws -> Tensorflow_Serving_MultiInferenceResponse {
    let sem = DispatchSemaphore(value: 0)
    var returnCallResult : CallResult!
    var returnResponse : Tensorflow_Serving_MultiInferenceResponse?
    _ = try start(request:request, metadata:metadata) {response, callResult in
      returnResponse = response
      returnCallResult = callResult
      sem.signal()
    }
    _ = sem.wait(timeout: DispatchTime.distantFuture)
    if let returnResponse = returnResponse {
      return returnResponse
    } else {
      throw Tensorflow_Serving_PredictionServiceClientError.error(c: returnCallResult)
    }
  }

  /// Start the call. Nonblocking.
  fileprivate func start(request: Tensorflow_Serving_MultiInferenceRequest,
                         metadata: Metadata,
                         completion: @escaping (Tensorflow_Serving_MultiInferenceResponse?, CallResult)->())
    throws -> Tensorflow_Serving_PredictionServiceMultiInferenceCall {

      let requestData = try request.serializedData()
      try call.start(.unary,
                     metadata:metadata,
                     message:requestData)
      {(callResult) in
        if let responseData = callResult.resultData,
          let response = try? Tensorflow_Serving_MultiInferenceResponse(serializedData:responseData) {
          completion(response, callResult)
        } else {
          completion(nil, callResult)
        }
      }
      return self
  }
}

/// GetModelMetadata (Unary)
internal class Tensorflow_Serving_PredictionServiceGetModelMetadataCall {
  private var call : Call

  /// Create a call.
  fileprivate init(_ channel: Channel) {
    self.call = channel.makeCall("/tensorflow.serving.PredictionService/GetModelMetadata")
  }

  /// Run the call. Blocks until the reply is received.
  fileprivate func run(request: Tensorflow_Serving_GetModelMetadataRequest,
                       metadata: Metadata) throws -> Tensorflow_Serving_GetModelMetadataResponse {
    let sem = DispatchSemaphore(value: 0)
    var returnCallResult : CallResult!
    var returnResponse : Tensorflow_Serving_GetModelMetadataResponse?
    _ = try start(request:request, metadata:metadata) {response, callResult in
      returnResponse = response
      returnCallResult = callResult
      sem.signal()
    }
    _ = sem.wait(timeout: DispatchTime.distantFuture)
    if let returnResponse = returnResponse {
      return returnResponse
    } else {
      throw Tensorflow_Serving_PredictionServiceClientError.error(c: returnCallResult)
    }
  }

  /// Start the call. Nonblocking.
  fileprivate func start(request: Tensorflow_Serving_GetModelMetadataRequest,
                         metadata: Metadata,
                         completion: @escaping (Tensorflow_Serving_GetModelMetadataResponse?, CallResult)->())
    throws -> Tensorflow_Serving_PredictionServiceGetModelMetadataCall {

      let requestData = try request.serializedData()
      try call.start(.unary,
                     metadata:metadata,
                     message:requestData)
      {(callResult) in
        if let responseData = callResult.resultData,
          let response = try? Tensorflow_Serving_GetModelMetadataResponse(serializedData:responseData) {
          completion(response, callResult)
        } else {
          completion(nil, callResult)
        }
      }
      return self
  }
}

/// Call methods of this class to make API calls.
internal class Tensorflow_Serving_PredictionServiceService {
  private var channel: Channel

  /// This metadata will be sent with all requests.
  internal var metadata : Metadata

  /// This property allows the service host name to be overridden.
  /// For example, it can be used to make calls to "localhost:8080"
  /// appear to be to "example.com".
  internal var host : String {
    get {
      return self.channel.host
    }
    set {
      self.channel.host = newValue
    }
  }

  /// Create a client that makes insecure connections.
  internal init(address: String) {
    gRPC.initialize()
    channel = Channel(address:address)
    metadata = Metadata()
  }

  /// Create a client that makes secure connections.
  internal init(address: String, certificates: String?, host: String?) {
    gRPC.initialize()
    channel = Channel(address:address, certificates:certificates, host:host)
    metadata = Metadata()
  }

  /// Synchronous. Unary.
  internal func classify(_ request: Tensorflow_Serving_ClassificationRequest)
    throws
    -> Tensorflow_Serving_ClassificationResponse {
      return try Tensorflow_Serving_PredictionServiceClassifyCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  internal func classify(_ request: Tensorflow_Serving_ClassificationRequest,
                  completion: @escaping (Tensorflow_Serving_ClassificationResponse?, CallResult)->())
    throws
    -> Tensorflow_Serving_PredictionServiceClassifyCall {
      return try Tensorflow_Serving_PredictionServiceClassifyCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  internal func regress(_ request: Tensorflow_Serving_RegressionRequest)
    throws
    -> Tensorflow_Serving_RegressionResponse {
      return try Tensorflow_Serving_PredictionServiceRegressCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  internal func regress(_ request: Tensorflow_Serving_RegressionRequest,
                  completion: @escaping (Tensorflow_Serving_RegressionResponse?, CallResult)->())
    throws
    -> Tensorflow_Serving_PredictionServiceRegressCall {
      return try Tensorflow_Serving_PredictionServiceRegressCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  internal func predict(_ request: Tensorflow_Serving_PredictRequest)
    throws
    -> Tensorflow_Serving_PredictResponse {
      return try Tensorflow_Serving_PredictionServicePredictCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  internal func predict(_ request: Tensorflow_Serving_PredictRequest,
                  completion: @escaping (Tensorflow_Serving_PredictResponse?, CallResult)->())
    throws
    -> Tensorflow_Serving_PredictionServicePredictCall {
      return try Tensorflow_Serving_PredictionServicePredictCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  internal func multiinference(_ request: Tensorflow_Serving_MultiInferenceRequest)
    throws
    -> Tensorflow_Serving_MultiInferenceResponse {
      return try Tensorflow_Serving_PredictionServiceMultiInferenceCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  internal func multiinference(_ request: Tensorflow_Serving_MultiInferenceRequest,
                  completion: @escaping (Tensorflow_Serving_MultiInferenceResponse?, CallResult)->())
    throws
    -> Tensorflow_Serving_PredictionServiceMultiInferenceCall {
      return try Tensorflow_Serving_PredictionServiceMultiInferenceCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
  /// Synchronous. Unary.
  internal func getmodelmetadata(_ request: Tensorflow_Serving_GetModelMetadataRequest)
    throws
    -> Tensorflow_Serving_GetModelMetadataResponse {
      return try Tensorflow_Serving_PredictionServiceGetModelMetadataCall(channel).run(request:request, metadata:metadata)
  }
  /// Asynchronous. Unary.
  internal func getmodelmetadata(_ request: Tensorflow_Serving_GetModelMetadataRequest,
                  completion: @escaping (Tensorflow_Serving_GetModelMetadataResponse?, CallResult)->())
    throws
    -> Tensorflow_Serving_PredictionServiceGetModelMetadataCall {
      return try Tensorflow_Serving_PredictionServiceGetModelMetadataCall(channel).start(request:request,
                                                 metadata:metadata,
                                                 completion:completion)
  }
}
