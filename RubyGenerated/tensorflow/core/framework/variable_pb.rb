# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/core/framework/variable.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.VariableDef" do
    optional :variable_name, :string, 1
    optional :initializer_name, :string, 2
    optional :snapshot_name, :string, 3
    optional :save_slice_info_def, :message, 4, "tensorflow.SaveSliceInfoDef"
    optional :is_resource, :bool, 5
  end
  add_message "tensorflow.SaveSliceInfoDef" do
    optional :full_name, :string, 1
    repeated :full_shape, :int64, 2
    repeated :var_offset, :int64, 3
    repeated :var_shape, :int64, 4
  end
end

module Tensorflow
  VariableDef = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.VariableDef").msgclass
  SaveSliceInfoDef = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.SaveSliceInfoDef").msgclass
end
