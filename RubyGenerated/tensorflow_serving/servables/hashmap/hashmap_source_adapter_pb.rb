# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow_serving/servables/hashmap/hashmap_source_adapter.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.serving.HashmapSourceAdapterConfig" do
    optional :format, :enum, 1, "tensorflow.serving.HashmapSourceAdapterConfig.Format"
  end
  add_enum "tensorflow.serving.HashmapSourceAdapterConfig.Format" do
    value :SIMPLE_CSV, 0
  end
end

module Tensorflow
  module Serving
    HashmapSourceAdapterConfig = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.HashmapSourceAdapterConfig").msgclass
    HashmapSourceAdapterConfig::Format = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.HashmapSourceAdapterConfig.Format").enummodule
  end
end
