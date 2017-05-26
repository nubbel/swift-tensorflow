# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow_serving/apis/input.proto

require 'google/protobuf'

require 'tensorflow/core/example/example_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.serving.ExampleList" do
    repeated :examples, :message, 1, "tensorflow.Example"
  end
  add_message "tensorflow.serving.ExampleListWithContext" do
    repeated :examples, :message, 1, "tensorflow.Example"
    optional :context, :message, 2, "tensorflow.Example"
  end
  add_message "tensorflow.serving.Input" do
    oneof :kind do
      optional :example_list, :message, 1, "tensorflow.serving.ExampleList"
      optional :example_list_with_context, :message, 2, "tensorflow.serving.ExampleListWithContext"
    end
  end
end

module Tensorflow
  module Serving
    ExampleList = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.ExampleList").msgclass
    ExampleListWithContext = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.ExampleListWithContext").msgclass
    Input = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.Input").msgclass
  end
end
