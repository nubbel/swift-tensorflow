# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow_serving/apis/model.proto

require 'google/protobuf'

require 'google/protobuf/wrappers_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.serving.ModelSpec" do
    optional :name, :string, 1
    optional :version, :message, 2, "google.protobuf.Int64Value"
    optional :signature_name, :string, 3
  end
end

module Tensorflow
  module Serving
    ModelSpec = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.ModelSpec").msgclass
  end
end