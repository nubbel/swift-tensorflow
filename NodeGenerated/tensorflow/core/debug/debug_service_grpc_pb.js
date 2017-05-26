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
var tensorflow_core_debug_debug_service_pb = require('../../../tensorflow/core/debug/debug_service_pb.js');
var tensorflow_core_util_event_pb = require('../../../tensorflow/core/util/event_pb.js');

function serialize_tensorflow_Event(arg) {
  if (!(arg instanceof tensorflow_core_util_event_pb.Event)) {
    throw new Error('Expected argument of type tensorflow.Event');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_Event(buffer_arg) {
  return tensorflow_core_util_event_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_EventReply(arg) {
  if (!(arg instanceof tensorflow_core_debug_debug_service_pb.EventReply)) {
    throw new Error('Expected argument of type tensorflow.EventReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_EventReply(buffer_arg) {
  return tensorflow_core_debug_debug_service_pb.EventReply.deserializeBinary(new Uint8Array(buffer_arg));
}


// EventListener: Receives Event protos, e.g., from debugged TensorFlow
// runtime(s).
var EventListenerService = exports.EventListenerService = {
  // Client(s) can use this RPC method to send the EventListener Event protos.
  // The Event protos can hold information such as:
  //   1) intermediate tensors from a debugged graph being executed, which can
  //      be sent from DebugIdentity ops configured with grpc URLs.
  //   2) GraphDefs of partition graphs, which can be sent from special debug
  //      ops that get executed immediately after the beginning of the graph
  //      execution.
  sendEvents: {
    path: '/tensorflow.EventListener/SendEvents',
    requestStream: true,
    responseStream: true,
    requestType: tensorflow_core_util_event_pb.Event,
    responseType: tensorflow_core_debug_debug_service_pb.EventReply,
    requestSerialize: serialize_tensorflow_Event,
    requestDeserialize: deserialize_tensorflow_Event,
    responseSerialize: serialize_tensorflow_EventReply,
    responseDeserialize: deserialize_tensorflow_EventReply,
  },
};

exports.EventListenerClient = grpc.makeGenericClientConstructor(EventListenerService);
