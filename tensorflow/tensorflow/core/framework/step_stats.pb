
€	
*tensorflow/core/framework/step_stats.proto
tensorflow6tensorflow/core/framework/allocation_description.proto2tensorflow/core/framework/tensor_description.proto"|
AllocatorMemoryUsed%
allocator_name (	RallocatorName
total_bytes (R
totalBytes

peak_bytes (R	peakBytes"n

NodeOutput
slot (RslotL
tensor_description (2.tensorflow.TensorDescriptionRtensorDescription"…
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
referenced_tensor (2!.tensorflow.AllocationDescriptionRreferencedTensor"c
DeviceStepStats
device (	Rdevice8

node_stats (2.tensorflow.NodeExecStatsR	nodeStats"E
	StepStats8
	dev_stats (2.tensorflow.DeviceStepStatsRdevStatsB0
org.tensorflow.frameworkBStepStatsProtosPøbproto3