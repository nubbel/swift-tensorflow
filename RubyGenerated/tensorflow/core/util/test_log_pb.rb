# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/core/util/test_log.proto

require 'google/protobuf'

require 'google/protobuf/any_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.EntryValue" do
    oneof :kind do
      optional :double_value, :double, 1
      optional :string_value, :string, 2
    end
  end
  add_message "tensorflow.BenchmarkEntry" do
    optional :name, :string, 1
    optional :iters, :int64, 2
    optional :cpu_time, :double, 3
    optional :wall_time, :double, 4
    optional :throughput, :double, 5
    map :extras, :string, :message, 6, "tensorflow.EntryValue"
  end
  add_message "tensorflow.BenchmarkEntries" do
    repeated :entry, :message, 1, "tensorflow.BenchmarkEntry"
  end
  add_message "tensorflow.BuildConfiguration" do
    optional :mode, :string, 1
    repeated :cc_flags, :string, 2
    repeated :opts, :string, 3
  end
  add_message "tensorflow.CommitId" do
    optional :snapshot, :string, 3
    oneof :kind do
      optional :changelist, :int64, 1
      optional :hash, :string, 2
    end
  end
  add_message "tensorflow.CPUInfo" do
    optional :num_cores, :int64, 1
    optional :num_cores_allowed, :int64, 2
    optional :mhz_per_cpu, :double, 3
    optional :cpu_info, :string, 4
    optional :cpu_governor, :string, 5
    map :cache_size, :string, :int64, 6
  end
  add_message "tensorflow.MemoryInfo" do
    optional :total, :int64, 1
    optional :available, :int64, 2
  end
  add_message "tensorflow.GPUInfo" do
    optional :model, :string, 1
    optional :uuid, :string, 2
    optional :bus_id, :string, 3
  end
  add_message "tensorflow.PlatformInfo" do
    optional :bits, :string, 1
    optional :linkage, :string, 2
    optional :machine, :string, 3
    optional :release, :string, 4
    optional :system, :string, 5
    optional :version, :string, 6
  end
  add_message "tensorflow.AvailableDeviceInfo" do
    optional :name, :string, 1
    optional :type, :string, 2
    optional :memory_limit, :int64, 3
    optional :physical_description, :string, 4
  end
  add_message "tensorflow.MachineConfiguration" do
    optional :hostname, :string, 1
    optional :serial_identifier, :string, 7
    optional :platform_info, :message, 2, "tensorflow.PlatformInfo"
    optional :cpu_info, :message, 3, "tensorflow.CPUInfo"
    repeated :device_info, :message, 4, "google.protobuf.Any"
    repeated :available_device_info, :message, 5, "tensorflow.AvailableDeviceInfo"
    optional :memory_info, :message, 6, "tensorflow.MemoryInfo"
  end
  add_message "tensorflow.RunConfiguration" do
    repeated :argument, :string, 1
  end
  add_message "tensorflow.TestResults" do
    optional :target, :string, 1
    optional :entries, :message, 2, "tensorflow.BenchmarkEntries"
    optional :build_configuration, :message, 3, "tensorflow.BuildConfiguration"
    optional :commit_id, :message, 4, "tensorflow.CommitId"
    optional :start_time, :int64, 5
    optional :run_time, :double, 6
    optional :machine_configuration, :message, 7, "tensorflow.MachineConfiguration"
    optional :run_configuration, :message, 8, "tensorflow.RunConfiguration"
    optional :name, :string, 9
    optional :benchmark_type, :enum, 10, "tensorflow.TestResults.BenchmarkType"
    optional :run_mode, :string, 11
  end
  add_enum "tensorflow.TestResults.BenchmarkType" do
    value :UNKNOWN, 0
    value :CPP_MICROBENCHMARK, 1
    value :PYTHON_BENCHMARK, 2
    value :ANDROID_BENCHMARK, 3
  end
end

module Tensorflow
  EntryValue = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.EntryValue").msgclass
  BenchmarkEntry = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.BenchmarkEntry").msgclass
  BenchmarkEntries = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.BenchmarkEntries").msgclass
  BuildConfiguration = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.BuildConfiguration").msgclass
  CommitId = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.CommitId").msgclass
  CPUInfo = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.CPUInfo").msgclass
  MemoryInfo = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.MemoryInfo").msgclass
  GPUInfo = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.GPUInfo").msgclass
  PlatformInfo = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.PlatformInfo").msgclass
  AvailableDeviceInfo = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.AvailableDeviceInfo").msgclass
  MachineConfiguration = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.MachineConfiguration").msgclass
  RunConfiguration = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.RunConfiguration").msgclass
  TestResults = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.TestResults").msgclass
  TestResults::BenchmarkType = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.TestResults.BenchmarkType").enummodule
end