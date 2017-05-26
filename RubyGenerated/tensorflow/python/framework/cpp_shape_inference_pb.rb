# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/python/framework/cpp_shape_inference.proto

require 'google/protobuf'

require 'tensorflow/core/framework/types_pb'
require 'tensorflow/core/framework/tensor_shape_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.CppShapeInferenceResult" do
    optional :shape, :message, 1, "tensorflow.TensorShapeProto"
    optional :handle_shape, :message, 2, "tensorflow.TensorShapeProto"
    optional :handle_dtype, :enum, 3, "tensorflow.DataType"
  end
  add_message "tensorflow.CppShapeInferenceInputsNeeded" do
    repeated :input_tensors_needed, :int32, 1
    repeated :input_tensors_as_shapes_needed, :int32, 2
  end
end

module Tensorflow
  CppShapeInferenceResult = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.CppShapeInferenceResult").msgclass
  CppShapeInferenceInputsNeeded = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.CppShapeInferenceInputsNeeded").msgclass
end
