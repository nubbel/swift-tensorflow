# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/core/util/saved_tensor_slice.proto

require 'google/protobuf'

require 'tensorflow/core/framework/tensor_shape_pb'
require 'tensorflow/core/framework/tensor_slice_pb'
require 'tensorflow/core/framework/tensor_pb'
require 'tensorflow/core/framework/types_pb'
require 'tensorflow/core/framework/versions_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.SavedSliceMeta" do
    optional :name, :string, 1
    optional :shape, :message, 2, "tensorflow.TensorShapeProto"
    optional :type, :enum, 3, "tensorflow.DataType"
    repeated :slice, :message, 4, "tensorflow.TensorSliceProto"
  end
  add_message "tensorflow.SavedTensorSliceMeta" do
    repeated :tensor, :message, 1, "tensorflow.SavedSliceMeta"
    optional :versions, :message, 2, "tensorflow.VersionDef"
  end
  add_message "tensorflow.SavedSlice" do
    optional :name, :string, 1
    optional :slice, :message, 2, "tensorflow.TensorSliceProto"
    optional :data, :message, 3, "tensorflow.TensorProto"
  end
  add_message "tensorflow.SavedTensorSlices" do
    optional :meta, :message, 1, "tensorflow.SavedTensorSliceMeta"
    optional :data, :message, 2, "tensorflow.SavedSlice"
  end
end

module Tensorflow
  SavedSliceMeta = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.SavedSliceMeta").msgclass
  SavedTensorSliceMeta = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.SavedTensorSliceMeta").msgclass
  SavedSlice = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.SavedSlice").msgclass
  SavedTensorSlices = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.SavedTensorSlices").msgclass
end
