// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2016 The TensorFlow Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ==============================================================================
//
'use strict';
var grpc = require('grpc');
var tensorflow_core_protobuf_worker_pb = require('../../../tensorflow/core/protobuf/worker_pb.js');

function serialize_tensorflow_CleanupAllRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.CleanupAllRequest)) {
    throw new Error('Expected argument of type tensorflow.CleanupAllRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_CleanupAllRequest(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.CleanupAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_CleanupAllResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.CleanupAllResponse)) {
    throw new Error('Expected argument of type tensorflow.CleanupAllResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_CleanupAllResponse(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.CleanupAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_CleanupGraphRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.CleanupGraphRequest)) {
    throw new Error('Expected argument of type tensorflow.CleanupGraphRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_CleanupGraphRequest(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.CleanupGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_CleanupGraphResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.CleanupGraphResponse)) {
    throw new Error('Expected argument of type tensorflow.CleanupGraphResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_CleanupGraphResponse(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.CleanupGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_CreateWorkerSessionRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.CreateWorkerSessionRequest)) {
    throw new Error('Expected argument of type tensorflow.CreateWorkerSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_CreateWorkerSessionRequest(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.CreateWorkerSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_CreateWorkerSessionResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.CreateWorkerSessionResponse)) {
    throw new Error('Expected argument of type tensorflow.CreateWorkerSessionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_CreateWorkerSessionResponse(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.CreateWorkerSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_DeregisterGraphRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.DeregisterGraphRequest)) {
    throw new Error('Expected argument of type tensorflow.DeregisterGraphRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_DeregisterGraphRequest(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.DeregisterGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_DeregisterGraphResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.DeregisterGraphResponse)) {
    throw new Error('Expected argument of type tensorflow.DeregisterGraphResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_DeregisterGraphResponse(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.DeregisterGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_GetStatusRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.GetStatusRequest)) {
    throw new Error('Expected argument of type tensorflow.GetStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_GetStatusRequest(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.GetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_GetStatusResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.GetStatusResponse)) {
    throw new Error('Expected argument of type tensorflow.GetStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_GetStatusResponse(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.GetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_LoggingRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.LoggingRequest)) {
    throw new Error('Expected argument of type tensorflow.LoggingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_LoggingRequest(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.LoggingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_LoggingResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.LoggingResponse)) {
    throw new Error('Expected argument of type tensorflow.LoggingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_LoggingResponse(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.LoggingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_RecvTensorRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.RecvTensorRequest)) {
    throw new Error('Expected argument of type tensorflow.RecvTensorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_RecvTensorRequest(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.RecvTensorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_RecvTensorResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.RecvTensorResponse)) {
    throw new Error('Expected argument of type tensorflow.RecvTensorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_RecvTensorResponse(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.RecvTensorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_RegisterGraphRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.RegisterGraphRequest)) {
    throw new Error('Expected argument of type tensorflow.RegisterGraphRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_RegisterGraphRequest(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.RegisterGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_RegisterGraphResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.RegisterGraphResponse)) {
    throw new Error('Expected argument of type tensorflow.RegisterGraphResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_RegisterGraphResponse(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.RegisterGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_RunGraphRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.RunGraphRequest)) {
    throw new Error('Expected argument of type tensorflow.RunGraphRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_RunGraphRequest(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.RunGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_RunGraphResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.RunGraphResponse)) {
    throw new Error('Expected argument of type tensorflow.RunGraphResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_RunGraphResponse(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.RunGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_TracingRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.TracingRequest)) {
    throw new Error('Expected argument of type tensorflow.TracingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_TracingRequest(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.TracingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_TracingResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_worker_pb.TracingResponse)) {
    throw new Error('Expected argument of type tensorflow.TracingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_TracingResponse(buffer_arg) {
  return tensorflow_core_protobuf_worker_pb.TracingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// //////////////////////////////////////////////////////////////////////////////
//
// WorkerService defines a TensorFlow service that executes dataflow
// graphs on a set of local devices, on behalf of a MasterService.
//
// A worker service keeps track of multiple "registered graphs". Each
// registered graph is a subgraph of a client's graph, corresponding to
// only the nodes that should execute on this worker (and any
// additional nodes necessary for inter-process communication using
// the `RecvTensor` method).
//
// //////////////////////////////////////////////////////////////////////////////
//
var WorkerServiceService = exports.WorkerServiceService = {
  // See worker.proto for details.
  getStatus: {
    path: '/tensorflow.grpc.WorkerService/GetStatus',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_worker_pb.GetStatusRequest,
    responseType: tensorflow_core_protobuf_worker_pb.GetStatusResponse,
    requestSerialize: serialize_tensorflow_GetStatusRequest,
    requestDeserialize: deserialize_tensorflow_GetStatusRequest,
    responseSerialize: serialize_tensorflow_GetStatusResponse,
    responseDeserialize: deserialize_tensorflow_GetStatusResponse,
  },
  // See worker.proto for details.
  createWorkerSession: {
    path: '/tensorflow.grpc.WorkerService/CreateWorkerSession',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_worker_pb.CreateWorkerSessionRequest,
    responseType: tensorflow_core_protobuf_worker_pb.CreateWorkerSessionResponse,
    requestSerialize: serialize_tensorflow_CreateWorkerSessionRequest,
    requestDeserialize: deserialize_tensorflow_CreateWorkerSessionRequest,
    responseSerialize: serialize_tensorflow_CreateWorkerSessionResponse,
    responseDeserialize: deserialize_tensorflow_CreateWorkerSessionResponse,
  },
  // See worker.proto for details.
  registerGraph: {
    path: '/tensorflow.grpc.WorkerService/RegisterGraph',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_worker_pb.RegisterGraphRequest,
    responseType: tensorflow_core_protobuf_worker_pb.RegisterGraphResponse,
    requestSerialize: serialize_tensorflow_RegisterGraphRequest,
    requestDeserialize: deserialize_tensorflow_RegisterGraphRequest,
    responseSerialize: serialize_tensorflow_RegisterGraphResponse,
    responseDeserialize: deserialize_tensorflow_RegisterGraphResponse,
  },
  // See worker.proto for details.
  deregisterGraph: {
    path: '/tensorflow.grpc.WorkerService/DeregisterGraph',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_worker_pb.DeregisterGraphRequest,
    responseType: tensorflow_core_protobuf_worker_pb.DeregisterGraphResponse,
    requestSerialize: serialize_tensorflow_DeregisterGraphRequest,
    requestDeserialize: deserialize_tensorflow_DeregisterGraphRequest,
    responseSerialize: serialize_tensorflow_DeregisterGraphResponse,
    responseDeserialize: deserialize_tensorflow_DeregisterGraphResponse,
  },
  // See worker.proto for details.
  runGraph: {
    path: '/tensorflow.grpc.WorkerService/RunGraph',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_worker_pb.RunGraphRequest,
    responseType: tensorflow_core_protobuf_worker_pb.RunGraphResponse,
    requestSerialize: serialize_tensorflow_RunGraphRequest,
    requestDeserialize: deserialize_tensorflow_RunGraphRequest,
    responseSerialize: serialize_tensorflow_RunGraphResponse,
    responseDeserialize: deserialize_tensorflow_RunGraphResponse,
  },
  // See worker.proto for details.
  cleanupGraph: {
    path: '/tensorflow.grpc.WorkerService/CleanupGraph',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_worker_pb.CleanupGraphRequest,
    responseType: tensorflow_core_protobuf_worker_pb.CleanupGraphResponse,
    requestSerialize: serialize_tensorflow_CleanupGraphRequest,
    requestDeserialize: deserialize_tensorflow_CleanupGraphRequest,
    responseSerialize: serialize_tensorflow_CleanupGraphResponse,
    responseDeserialize: deserialize_tensorflow_CleanupGraphResponse,
  },
  // See worker.proto for details.
  cleanupAll: {
    path: '/tensorflow.grpc.WorkerService/CleanupAll',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_worker_pb.CleanupAllRequest,
    responseType: tensorflow_core_protobuf_worker_pb.CleanupAllResponse,
    requestSerialize: serialize_tensorflow_CleanupAllRequest,
    requestDeserialize: deserialize_tensorflow_CleanupAllRequest,
    responseSerialize: serialize_tensorflow_CleanupAllResponse,
    responseDeserialize: deserialize_tensorflow_CleanupAllResponse,
  },
  // See worker.proto for details.
  recvTensor: {
    path: '/tensorflow.grpc.WorkerService/RecvTensor',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_worker_pb.RecvTensorRequest,
    responseType: tensorflow_core_protobuf_worker_pb.RecvTensorResponse,
    requestSerialize: serialize_tensorflow_RecvTensorRequest,
    requestDeserialize: deserialize_tensorflow_RecvTensorRequest,
    responseSerialize: serialize_tensorflow_RecvTensorResponse,
    responseDeserialize: deserialize_tensorflow_RecvTensorResponse,
  },
  // RecvTensor Method
  // See worker.proto for details.
  logging: {
    path: '/tensorflow.grpc.WorkerService/Logging',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_worker_pb.LoggingRequest,
    responseType: tensorflow_core_protobuf_worker_pb.LoggingResponse,
    requestSerialize: serialize_tensorflow_LoggingRequest,
    requestDeserialize: deserialize_tensorflow_LoggingRequest,
    responseSerialize: serialize_tensorflow_LoggingResponse,
    responseDeserialize: deserialize_tensorflow_LoggingResponse,
  },
  // See worker.proto for details.
  tracing: {
    path: '/tensorflow.grpc.WorkerService/Tracing',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_worker_pb.TracingRequest,
    responseType: tensorflow_core_protobuf_worker_pb.TracingResponse,
    requestSerialize: serialize_tensorflow_TracingRequest,
    requestDeserialize: deserialize_tensorflow_TracingRequest,
    responseSerialize: serialize_tensorflow_TracingResponse,
    responseDeserialize: deserialize_tensorflow_TracingResponse,
  },
};

exports.WorkerServiceClient = grpc.makeGenericClientConstructor(WorkerServiceService);
