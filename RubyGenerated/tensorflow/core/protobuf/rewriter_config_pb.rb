# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/core/protobuf/rewriter_config.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.AutoParallelOptions" do
    optional :enable, :bool, 1
    optional :num_replicas, :int32, 2
  end
  add_message "tensorflow.RewriterConfig" do
    optional :optimize_tensor_layout, :bool, 1
    optional :disable_model_pruning, :bool, 2
    optional :constant_folding, :bool, 3
    optional :memory_optimization, :enum, 4, "tensorflow.RewriterConfig.MemOptType"
    optional :auto_parallel, :message, 5, "tensorflow.AutoParallelOptions"
    repeated :optimizers, :string, 100
  end
  add_enum "tensorflow.RewriterConfig.MemOptType" do
    value :NO_MEM_OPT, 0
    value :MANUAL, 1
  end
end

module Tensorflow
  AutoParallelOptions = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.AutoParallelOptions").msgclass
  RewriterConfig = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.RewriterConfig").msgclass
  RewriterConfig::MemOptType = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.RewriterConfig.MemOptType").enummodule
end