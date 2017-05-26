# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: tensorflow/core/protobuf/worker_service.proto for package 'tensorflow.grpc'
# Original file comments:
# Copyright 2016 The TensorFlow Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ==============================================================================
#

require 'grpc'
require 'tensorflow/core/protobuf/worker_service_pb'

module Tensorflow
  module Grpc
    module WorkerService
      # //////////////////////////////////////////////////////////////////////////////
      #
      # WorkerService defines a TensorFlow service that executes dataflow
      # graphs on a set of local devices, on behalf of a MasterService.
      #
      # A worker service keeps track of multiple "registered graphs". Each
      # registered graph is a subgraph of a client's graph, corresponding to
      # only the nodes that should execute on this worker (and any
      # additional nodes necessary for inter-process communication using
      # the `RecvTensor` method).
      #
      # //////////////////////////////////////////////////////////////////////////////
      #
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'tensorflow.grpc.WorkerService'

        # See worker.proto for details.
        rpc :GetStatus, Tensorflow::GetStatusRequest, Tensorflow::GetStatusResponse
        # See worker.proto for details.
        rpc :CreateWorkerSession, Tensorflow::CreateWorkerSessionRequest, Tensorflow::CreateWorkerSessionResponse
        # See worker.proto for details.
        rpc :RegisterGraph, Tensorflow::RegisterGraphRequest, Tensorflow::RegisterGraphResponse
        # See worker.proto for details.
        rpc :DeregisterGraph, Tensorflow::DeregisterGraphRequest, Tensorflow::DeregisterGraphResponse
        # See worker.proto for details.
        rpc :RunGraph, Tensorflow::RunGraphRequest, Tensorflow::RunGraphResponse
        # See worker.proto for details.
        rpc :CleanupGraph, Tensorflow::CleanupGraphRequest, Tensorflow::CleanupGraphResponse
        # See worker.proto for details.
        rpc :CleanupAll, Tensorflow::CleanupAllRequest, Tensorflow::CleanupAllResponse
        # See worker.proto for details.
        rpc :RecvTensor, Tensorflow::RecvTensorRequest, Tensorflow::RecvTensorResponse
        # RecvTensor Method
        # See worker.proto for details.
        rpc :Logging, Tensorflow::LoggingRequest, Tensorflow::LoggingResponse
        # See worker.proto for details.
        rpc :Tracing, Tensorflow::TracingRequest, Tensorflow::TracingResponse
      end

      Stub = Service.rpc_stub_class
    end
  end
end
