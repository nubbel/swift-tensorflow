# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/core/util/example_proto_fast_parsing_test.proto

require 'google/protobuf'

require 'tensorflow/core/example/feature_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.ExampleWithExtras" do
    optional :features, :message, 1, "tensorflow.Features"
    optional :extra1, :string, 1337
    optional :extra2, :int64, 1338
    optional :extra3, :fixed32, 1339
    optional :extra4, :fixed64, 1340
    optional :extra5, :double, 1341
    repeated :extra6, :float, 1342
    optional :extra7, :message, 1343, "tensorflow.Features"
  end
end

module Tensorflow
  ExampleWithExtras = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.ExampleWithExtras").msgclass
end