// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2017 The TensorFlow Authors. All Rights Reserved.
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
var tensorflow_contrib_verbs_verbs_service_pb = require('../../../tensorflow/contrib/verbs/verbs_service_pb.js');

function serialize_tensorflow_GetRemoteAddressRequest(arg) {
  if (!(arg instanceof tensorflow_contrib_verbs_verbs_service_pb.GetRemoteAddressRequest)) {
    throw new Error('Expected argument of type tensorflow.GetRemoteAddressRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_GetRemoteAddressRequest(buffer_arg) {
  return tensorflow_contrib_verbs_verbs_service_pb.GetRemoteAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_GetRemoteAddressResponse(arg) {
  if (!(arg instanceof tensorflow_contrib_verbs_verbs_service_pb.GetRemoteAddressResponse)) {
    throw new Error('Expected argument of type tensorflow.GetRemoteAddressResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_GetRemoteAddressResponse(buffer_arg) {
  return tensorflow_contrib_verbs_verbs_service_pb.GetRemoteAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// //////////////////////////////////////////////////////////////////////////////
//
// VerbsService
//
// //////////////////////////////////////////////////////////////////////////////
//
var VerbsServiceService = exports.VerbsServiceService = {
  getRemoteAddress: {
    path: '/tensorflow.VerbsService/GetRemoteAddress',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_contrib_verbs_verbs_service_pb.GetRemoteAddressRequest,
    responseType: tensorflow_contrib_verbs_verbs_service_pb.GetRemoteAddressResponse,
    requestSerialize: serialize_tensorflow_GetRemoteAddressRequest,
    requestDeserialize: deserialize_tensorflow_GetRemoteAddressRequest,
    responseSerialize: serialize_tensorflow_GetRemoteAddressResponse,
    responseDeserialize: deserialize_tensorflow_GetRemoteAddressResponse,
  },
};

exports.VerbsServiceClient = grpc.makeGenericClientConstructor(VerbsServiceService);
