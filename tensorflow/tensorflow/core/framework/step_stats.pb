
Ï
*tensorflow/core/framework/step_stats.proto
tensorflow6tensorflow/core/framework/allocation_description.proto2tensorflow/core/framework/tensor_description.proto"õ
AllocatorMemoryUsed%
allocator_name (	RallocatorName
total_bytes (R
totalBytes

peak_bytes (R	peakBytes

live_bytes (R	liveBytes"n

NodeOutput
slot (RslotL
tensor_description (2.tensorflow.TensorDescriptionRtensorDescription"ç
MemoryStats1
host_temp_memory_size (RhostTempMemorySize5
device_temp_memory_size (RdeviceTempMemorySize=
host_persistent_memory_size (RhostPersistentMemorySizeA
device_persistent_memory_size (RdevicePersistentMemorySizeF
 host_persistent_tensor_alloc_ids (RhostPersistentTensorAllocIdsJ
"device_persistent_tensor_alloc_ids (RdevicePersistentTensorAllocIds"¡
NodeExecStats
	node_name (	RnodeName(
all_start_micros (RallStartMicros-
op_start_rel_micros (RopStartRelMicros)
op_end_rel_micros (RopEndRelMicros+
all_end_rel_micros (RallEndRelMicros7
memory (2.tensorflow.AllocatorMemoryUsedRmemory.
output (2.tensorflow.NodeOutputRoutput%
timeline_label (	RtimelineLabel)
scheduled_micros	 (RscheduledMicros
	thread_id
 (RthreadIdN
referenced_tensor (2!.tensorflow.AllocationDescriptionRreferencedTensor:
memory_stats (2.tensorflow.MemoryStatsRmemoryStats"c
DeviceStepStats
device (	Rdevice8

node_stats (2.tensorflow.NodeExecStatsR	nodeStats"E
	StepStats8
	dev_stats (2.tensorflow.DeviceStepStatsRdevStatsB0
org.tensorflow.frameworkBStepStatsProtosP¯bproto3