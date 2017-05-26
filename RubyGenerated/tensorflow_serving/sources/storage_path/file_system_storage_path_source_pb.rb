# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow_serving/sources/storage_path/file_system_storage_path_source.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.serving.FileSystemStoragePathSourceConfig" do
    repeated :servables, :message, 5, "tensorflow.serving.FileSystemStoragePathSourceConfig.ServableToMonitor"
    optional :servable_name, :string, 1
    optional :base_path, :string, 2
    optional :file_system_poll_wait_seconds, :int64, 3
    optional :fail_if_zero_versions_at_startup, :bool, 4
  end
  add_message "tensorflow.serving.FileSystemStoragePathSourceConfig.ServableToMonitor" do
    optional :servable_name, :string, 1
    optional :base_path, :string, 2
    optional :version_policy, :enum, 3, "tensorflow.serving.FileSystemStoragePathSourceConfig.VersionPolicy"
  end
  add_enum "tensorflow.serving.FileSystemStoragePathSourceConfig.VersionPolicy" do
    value :LATEST_VERSION, 0
    value :ALL_VERSIONS, 1
  end
end

module Tensorflow
  module Serving
    FileSystemStoragePathSourceConfig = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.FileSystemStoragePathSourceConfig").msgclass
    FileSystemStoragePathSourceConfig::ServableToMonitor = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.FileSystemStoragePathSourceConfig.ServableToMonitor").msgclass
    FileSystemStoragePathSourceConfig::VersionPolicy = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.serving.FileSystemStoragePathSourceConfig.VersionPolicy").enummodule
  end
end
