# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/core/grappler/costs/op_performance_data.proto

require 'google/protobuf'

require 'tensorflow/core/framework/tensor_pb'
require 'tensorflow/core/framework/tensor_shape_pb'
require 'tensorflow/core/framework/types_pb'
require 'tensorflow/core/framework/attr_value_pb'
require 'tensorflow/core/protobuf/device_properties_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.OpInfo" do
    optional :op, :string, 1
    map :attr, :string, :message, 2, "tensorflow.AttrValue"
    repeated :inputs, :message, 3, "tensorflow.OpInfo.TensorProperties"
    optional :device, :message, 4, "tensorflow.DeviceProperties"
  end
  add_message "tensorflow.OpInfo.TensorProperties" do
    optional :dtype, :enum, 1, "tensorflow.DataType"
    optional :shape, :message, 2, "tensorflow.TensorShapeProto"
    optional :value, :message, 3, "tensorflow.TensorProto"
  end
  add_message "tensorflow.OpPerformance" do
    optional :op, :message, 1, "tensorflow.OpInfo"
    optional :node, :string, 5
    optional :temporary_memory_size, :int64, 2
    optional :compute_cost, :int64, 3
    optional :compute_time, :int64, 6
    optional :memory_time, :int64, 7
    optional :compute_efficiency, :double, 4
    optional :memory_efficiency, :double, 8
    optional :op_memory, :message, 9, "tensorflow.OpPerformance.OpMemory"
  end
  add_message "tensorflow.OpPerformance.OpMemory" do
    repeated :output_memory, :int64, 1
    optional :host_temp_memory, :int64, 2
    optional :device_temp_memory, :int64, 3
    optional :host_persistent_memory, :int64, 4
    optional :device_persistent_memory, :int64, 5
  end
  add_message "tensorflow.OpPerformanceList" do
    repeated :op_performance, :message, 1, "tensorflow.OpPerformance"
  end
end

module Tensorflow
  OpInfo = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.OpInfo").msgclass
  OpInfo::TensorProperties = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.OpInfo.TensorProperties").msgclass
  OpPerformance = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.OpPerformance").msgclass
  OpPerformance::OpMemory = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.OpPerformance.OpMemory").msgclass
  OpPerformanceList = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.OpPerformanceList").msgclass
end