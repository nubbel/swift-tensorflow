# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/core/framework/graph.proto

require 'google/protobuf'

require 'tensorflow/core/framework/node_def_pb'
require 'tensorflow/core/framework/function_pb'
require 'tensorflow/core/framework/versions_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.GraphDef" do
    repeated :node, :message, 1, "tensorflow.NodeDef"
    optional :versions, :message, 4, "tensorflow.VersionDef"
    optional :version, :int32, 3
    optional :library, :message, 2, "tensorflow.FunctionDefLibrary"
  end
end

module Tensorflow
  GraphDef = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.GraphDef").msgclass
end
