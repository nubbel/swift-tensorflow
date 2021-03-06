# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/compiler/aot/tfcompile.proto

require 'google/protobuf'

require 'tensorflow/core/framework/tensor_shape_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.tfcompile.TensorId" do
    optional :node_name, :string, 1
    optional :output_index, :int64, 2
  end
  add_message "tensorflow.tfcompile.Feed" do
    optional :id, :message, 1, "tensorflow.tfcompile.TensorId"
    optional :shape, :message, 2, "tensorflow.TensorShapeProto"
    optional :name, :string, 3
  end
  add_message "tensorflow.tfcompile.Fetch" do
    optional :id, :message, 1, "tensorflow.tfcompile.TensorId"
    optional :name, :string, 2
  end
  add_message "tensorflow.tfcompile.Config" do
    repeated :feed, :message, 1, "tensorflow.tfcompile.Feed"
    repeated :fetch, :message, 2, "tensorflow.tfcompile.Fetch"
  end
end

module Tensorflow
  module Tfcompile
    TensorId = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.tfcompile.TensorId").msgclass
    Feed = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.tfcompile.Feed").msgclass
    Fetch = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.tfcompile.Fetch").msgclass
    Config = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.tfcompile.Config").msgclass
  end
end
