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
var tensorflow_core_protobuf_master_pb = require('../../../tensorflow/core/protobuf/master_pb.js');

function serialize_tensorflow_CloseSessionRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.CloseSessionRequest)) {
    throw new Error('Expected argument of type tensorflow.CloseSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_CloseSessionRequest(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.CloseSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_CloseSessionResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.CloseSessionResponse)) {
    throw new Error('Expected argument of type tensorflow.CloseSessionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_CloseSessionResponse(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.CloseSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_CreateSessionRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.CreateSessionRequest)) {
    throw new Error('Expected argument of type tensorflow.CreateSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_CreateSessionRequest(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.CreateSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_CreateSessionResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.CreateSessionResponse)) {
    throw new Error('Expected argument of type tensorflow.CreateSessionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_CreateSessionResponse(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.CreateSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_ExtendSessionRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.ExtendSessionRequest)) {
    throw new Error('Expected argument of type tensorflow.ExtendSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_ExtendSessionRequest(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.ExtendSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_ExtendSessionResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.ExtendSessionResponse)) {
    throw new Error('Expected argument of type tensorflow.ExtendSessionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_ExtendSessionResponse(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.ExtendSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_ListDevicesRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.ListDevicesRequest)) {
    throw new Error('Expected argument of type tensorflow.ListDevicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_ListDevicesRequest(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.ListDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_ListDevicesResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.ListDevicesResponse)) {
    throw new Error('Expected argument of type tensorflow.ListDevicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_ListDevicesResponse(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.ListDevicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_PartialRunSetupRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.PartialRunSetupRequest)) {
    throw new Error('Expected argument of type tensorflow.PartialRunSetupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_PartialRunSetupRequest(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.PartialRunSetupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_PartialRunSetupResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.PartialRunSetupResponse)) {
    throw new Error('Expected argument of type tensorflow.PartialRunSetupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_PartialRunSetupResponse(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.PartialRunSetupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_ResetRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.ResetRequest)) {
    throw new Error('Expected argument of type tensorflow.ResetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_ResetRequest(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.ResetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_ResetResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.ResetResponse)) {
    throw new Error('Expected argument of type tensorflow.ResetResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_ResetResponse(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.ResetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_RunStepRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.RunStepRequest)) {
    throw new Error('Expected argument of type tensorflow.RunStepRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_RunStepRequest(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.RunStepRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_RunStepResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_master_pb.RunStepResponse)) {
    throw new Error('Expected argument of type tensorflow.RunStepResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_RunStepResponse(buffer_arg) {
  return tensorflow_core_protobuf_master_pb.RunStepResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// //////////////////////////////////////////////////////////////////////////////
//
// MasterService defines a TensorFlow service with which a client can
// interact to execute a distributed TensorFlow computation.
//
// A master service keeps track of multiple "master sessions". Each
// session encapsulates a computation graph and its associated state,
// and typically corresponds to a single "client session" (e.g. a
// `tensorflow::Session` instance).
//
// A session is responsible for the following:
// * assigning each node to a device (locally or remotely) using a
//   placement algorithm. This may make decisions based on collected
//   statistics from the workers in the system (e.g., memory usage,
//   bandwidth consumption, etc.)
//
// * inserting intermediate nodes and edges to support cross-device
//   and cross-process data flows and resource management.
//
// * issuing commands to workers to execute the subgraphs associated
//   with those workers.
//
// Typically, a client carries out an iterative computation
// (e.g. training) by invoking RPCs against the master in a
// client-side loop. The client first creates a client session that
// connects to a particular master (using gRPC for example). The
// master creates a corresponding master session that is hosted on
// the master and caches state between the client's invocations.
//
// After the session is established, the master returns an opaque
// handle to the client that can be used to associate the client and
// master sessions.
//
// The client may send an initial graph to the master in the
// CreateSession call, and add nodes to the graph using ExtendSession.
//
// The most frequent operation a master is "RunStep", which implements
// the `Session::Run()` API. It supports feeding in arguments,
// executing a dataflow computation, and fetching arguments.
//
// Finally, when the client no longer needs the session, it should
// close the session by invoking CloseSession, which allows the master
// to reclaim resources associated with the session. The master may
// implement a garbage collection scheme that closes sessions that
// have been inactive for some time.
//
// For example, the following pseudo-code illustrates how a client
// interacts with a master:
//
// stub = NewStub("/job:mnist/replica:0/task:0")
// {handle} = stub->CreateSession({graph_def})
// do {
//   stub->RunStep({handle, {feeds}, {fetches}})
//   // The client can evaluate a predicate locally, based on the
//   // result of `fetches`, to determine whether to terminate. For
//   // example, it might fetch the loss and evaluate whether it is less
//   // than some threshold.
// } while (!should_stop({fetches}));
// stub->CloseSession({handle})
//
// //////////////////////////////////////////////////////////////////////////////
//
var MasterServiceService = exports.MasterServiceService = {
  // Creates a session.
  createSession: {
    path: '/tensorflow.grpc.MasterService/CreateSession',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_master_pb.CreateSessionRequest,
    responseType: tensorflow_core_protobuf_master_pb.CreateSessionResponse,
    requestSerialize: serialize_tensorflow_CreateSessionRequest,
    requestDeserialize: deserialize_tensorflow_CreateSessionRequest,
    responseSerialize: serialize_tensorflow_CreateSessionResponse,
    responseDeserialize: deserialize_tensorflow_CreateSessionResponse,
  },
  // Extends a session.
  extendSession: {
    path: '/tensorflow.grpc.MasterService/ExtendSession',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_master_pb.ExtendSessionRequest,
    responseType: tensorflow_core_protobuf_master_pb.ExtendSessionResponse,
    requestSerialize: serialize_tensorflow_ExtendSessionRequest,
    requestDeserialize: deserialize_tensorflow_ExtendSessionRequest,
    responseSerialize: serialize_tensorflow_ExtendSessionResponse,
    responseDeserialize: deserialize_tensorflow_ExtendSessionResponse,
  },
  // Prepares future partial run calls.
  partialRunSetup: {
    path: '/tensorflow.grpc.MasterService/PartialRunSetup',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_master_pb.PartialRunSetupRequest,
    responseType: tensorflow_core_protobuf_master_pb.PartialRunSetupResponse,
    requestSerialize: serialize_tensorflow_PartialRunSetupRequest,
    requestDeserialize: deserialize_tensorflow_PartialRunSetupRequest,
    responseSerialize: serialize_tensorflow_PartialRunSetupResponse,
    responseDeserialize: deserialize_tensorflow_PartialRunSetupResponse,
  },
  // Drives the graph computation.
  runStep: {
    path: '/tensorflow.grpc.MasterService/RunStep',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_master_pb.RunStepRequest,
    responseType: tensorflow_core_protobuf_master_pb.RunStepResponse,
    requestSerialize: serialize_tensorflow_RunStepRequest,
    requestDeserialize: deserialize_tensorflow_RunStepRequest,
    responseSerialize: serialize_tensorflow_RunStepResponse,
    responseDeserialize: deserialize_tensorflow_RunStepResponse,
  },
  // Closes a session.
  closeSession: {
    path: '/tensorflow.grpc.MasterService/CloseSession',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_master_pb.CloseSessionRequest,
    responseType: tensorflow_core_protobuf_master_pb.CloseSessionResponse,
    requestSerialize: serialize_tensorflow_CloseSessionRequest,
    requestDeserialize: deserialize_tensorflow_CloseSessionRequest,
    responseSerialize: serialize_tensorflow_CloseSessionResponse,
    responseDeserialize: deserialize_tensorflow_CloseSessionResponse,
  },
  // List the devices usable by the master.
  listDevices: {
    path: '/tensorflow.grpc.MasterService/ListDevices',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_master_pb.ListDevicesRequest,
    responseType: tensorflow_core_protobuf_master_pb.ListDevicesResponse,
    requestSerialize: serialize_tensorflow_ListDevicesRequest,
    requestDeserialize: deserialize_tensorflow_ListDevicesRequest,
    responseSerialize: serialize_tensorflow_ListDevicesResponse,
    responseDeserialize: deserialize_tensorflow_ListDevicesResponse,
  },
  // Close and abandon all existing sessions.  Ongoing computations
  // will no longer affect fresh ones via the resources in containers listed in
  // the ResetRequest.  See ResetRequest for more details.
  reset: {
    path: '/tensorflow.grpc.MasterService/Reset',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_master_pb.ResetRequest,
    responseType: tensorflow_core_protobuf_master_pb.ResetResponse,
    requestSerialize: serialize_tensorflow_ResetRequest,
    requestDeserialize: deserialize_tensorflow_ResetRequest,
    responseSerialize: serialize_tensorflow_ResetResponse,
    responseDeserialize: deserialize_tensorflow_ResetResponse,
  },
};

exports.MasterServiceClient = grpc.makeGenericClientConstructor(MasterServiceService);
