# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/core/framework/attr_value.proto

require 'google/protobuf'

require 'tensorflow/core/framework/tensor_pb'
require 'tensorflow/core/framework/tensor_shape_pb'
require 'tensorflow/core/framework/types_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.AttrValue" do
    oneof :value do
      optional :s, :bytes, 2
      optional :i, :int64, 3
      optional :f, :float, 4
      optional :b, :bool, 5
      optional :type, :enum, 6, "tensorflow.DataType"
      optional :shape, :message, 7, "tensorflow.TensorShapeProto"
      optional :tensor, :message, 8, "tensorflow.TensorProto"
      optional :list, :message, 1, "tensorflow.AttrValue.ListValue"
      optional :func, :message, 10, "tensorflow.NameAttrList"
      optional :placeholder, :string, 9
    end
  end
  add_message "tensorflow.AttrValue.ListValue" do
    repeated :s, :bytes, 2
    repeated :i, :int64, 3
    repeated :f, :float, 4
    repeated :b, :bool, 5
    repeated :type, :enum, 6, "tensorflow.DataType"
    repeated :shape, :message, 7, "tensorflow.TensorShapeProto"
    repeated :tensor, :message, 8, "tensorflow.TensorProto"
    repeated :func, :message, 9, "tensorflow.NameAttrList"
  end
  add_message "tensorflow.NameAttrList" do
    optional :name, :string, 1
    map :attr, :string, :message, 2, "tensorflow.AttrValue"
  end
end

module Tensorflow
  AttrValue = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.AttrValue").msgclass
  AttrValue::ListValue = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.AttrValue.ListValue").msgclass
  NameAttrList = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.NameAttrList").msgclass
end