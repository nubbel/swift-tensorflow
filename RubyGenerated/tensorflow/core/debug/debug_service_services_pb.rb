# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: tensorflow/core/debug/debug_service.proto for package 'tensorflow'
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
require 'tensorflow/core/debug/debug_service_pb'

module Tensorflow
  module EventListener
    # EventListener: Receives Event protos, e.g., from debugged TensorFlow
    # runtime(s).
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'tensorflow.EventListener'

      # Client(s) can use this RPC method to send the EventListener Event protos.
      # The Event protos can hold information such as:
      #   1) intermediate tensors from a debugged graph being executed, which can
      #      be sent from DebugIdentity ops configured with grpc URLs.
      #   2) GraphDefs of partition graphs, which can be sent from special debug
      #      ops that get executed immediately after the beginning of the graph
      #      execution.
      rpc :SendEvents, stream(Event), stream(EventReply)
    end

    Stub = Service.rpc_stub_class
  end
end
