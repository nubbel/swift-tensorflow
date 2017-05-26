# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow_serving/apis/internal/serialized_input.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.serving.internal.SerializedExampleList" do
    repeated :examples, :bytes, 1
  end
  add_message "tensorflow.serving.internal.SerializedExampleListWithContext" do
    repeated :examples, :bytes, 1
    optional :context, :bytes, 2
  end
  add_message "tensorflow.serving.internal.SerializedInput" do
    oneof :kind do
      optional :example_list, :message, 1, "tensorflow.serving.internal.SerializedExampleList"
      optional :example_list_with_context, :message, 2, "tensorflow.serving.internal.SerializedExampleListWithContext"
    end
  end
end

module Tensorflow
  module Serving
    module Internal
      SerializedExampleList = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.internal.SerializedExampleList").msgclass
      SerializedExampleListWithContext = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.internal.SerializedExampleListWithContext").msgclass
      SerializedInput = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.internal.SerializedInput").msgclass
    end
  end
end
