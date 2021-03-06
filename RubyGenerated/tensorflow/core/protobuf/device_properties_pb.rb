# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/core/protobuf/device_properties.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.DeviceProperties" do
    optional :type, :string, 1
    optional :vendor, :string, 2
    optional :model, :string, 3
    optional :frequency, :int64, 4
    optional :num_cores, :int64, 5
    map :environment, :string, :string, 6
    optional :num_registers, :int64, 7
    optional :l1_cache_size, :int64, 8
    optional :l2_cache_size, :int64, 9
    optional :l3_cache_size, :int64, 10
    optional :shared_memory_size_per_multiprocessor, :int64, 11
    optional :memory_size, :int64, 12
    optional :bandwidth, :int64, 13
  end
end

module Tensorflow
  DeviceProperties = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.DeviceProperties").msgclass
end
