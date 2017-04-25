
Ö
8tensorflow/core/grappler/costs/op_performance_data.proto
tensorflow&tensorflow/core/framework/tensor.proto,tensorflow/core/framework/tensor_shape.proto%tensorflow/core/framework/types.proto*tensorflow/core/framework/attr_value.proto"„
OpInfo
op (	Rop0
attr (2.tensorflow.OpInfo.AttrEntryRattr;
inputs (2#.tensorflow.OpInfo.TensorPropertiesRinputs;
device (2#.tensorflow.OpInfo.DevicePropertiesRdeviceN
	AttrEntry
key (	Rkey+
value (2.tensorflow.AttrValueRvalue:8¡
TensorProperties*
dtype (2.tensorflow.DataTypeRdtype2
shape (2.tensorflow.TensorShapeProtoRshape-
value (2.tensorflow.TensorProtoRvalueÉ
DeviceProperties
type (	Rtype
vendor (	Rvendor
model (	Rmodel
	frequency (R	frequency
	num_cores (RnumCoresV
environment (24.tensorflow.OpInfo.DeviceProperties.EnvironmentEntryRenvironment#
num_registers (RnumRegisters"
l1_cache_size (Rl1CacheSize"
l2_cache_size	 (Rl2CacheSize"
l3_cache_size
 (Rl3CacheSizeP
%shared_memory_size_per_multiprocessor (R!sharedMemorySizePerMultiprocessor
memory_size (R
memorySize
	bandwidth (R	bandwidth>
EnvironmentEntry
key (	Rkey
value (	Rvalue:8"ù
OpPerformance"
op (2.tensorflow.OpInfoRop
node (	Rnode2
temporary_memory_size (RtemporaryMemorySize!
compute_cost (RcomputeCost!
compute_time (RcomputeTime
memory_time (R
memoryTime-
compute_efficiency (RcomputeEfficiency+
memory_efficiency (RmemoryEfficiency?
	op_memory	 (2".tensorflow.OpPerformance.OpMemoryRopMemory÷
OpMemory#
output_memory (RoutputMemory(
host_temp_memory (RhostTempMemory,
device_temp_memory (RdeviceTempMemory4
host_persistent_memory (RhostPersistentMemory8
device_persistent_memory (RdevicePersistentMemory"U
OpPerformanceList@
op_performance (2.tensorflow.OpPerformanceRopPerformanceBøbproto3