# Protocol Documentation
<a name="top"/>

## Table of Contents
* [step_stats.proto](#step_stats.proto)
 * [AllocatorMemoryUsed](#tensorflow.AllocatorMemoryUsed)
 * [DeviceStepStats](#tensorflow.DeviceStepStats)
 * [MemoryStats](#tensorflow.MemoryStats)
 * [NodeExecStats](#tensorflow.NodeExecStats)
 * [NodeOutput](#tensorflow.NodeOutput)
 * [StepStats](#tensorflow.StepStats)
* [Scalar Value Types](#scalar-value-types)

<a name="step_stats.proto"/>
<p align="right"><a href="#top">Top</a></p>

## step_stats.proto



<a name="tensorflow.AllocatorMemoryUsed"/>
### AllocatorMemoryUsed


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allocator_name | [string](#string) | optional |  |
| total_bytes | [int64](#int64) | optional |  |
| peak_bytes | [int64](#int64) | optional |  |
| live_bytes | [int64](#int64) | optional |  |


<a name="tensorflow.DeviceStepStats"/>
### DeviceStepStats


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device | [string](#string) | optional |  |
| node_stats | [NodeExecStats](#tensorflow.NodeExecStats) | repeated |  |


<a name="tensorflow.MemoryStats"/>
### MemoryStats


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| host_temp_memory_size | [int64](#int64) | optional |  |
| device_temp_memory_size | [int64](#int64) | optional |  |
| host_persistent_memory_size | [int64](#int64) | optional |  |
| device_persistent_memory_size | [int64](#int64) | optional |  |
| host_persistent_tensor_alloc_ids | [int64](#int64) | repeated |  |
| device_persistent_tensor_alloc_ids | [int64](#int64) | repeated |  |


<a name="tensorflow.NodeExecStats"/>
### NodeExecStats


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_name | [string](#string) | optional |  |
| all_start_micros | [int64](#int64) | optional |  |
| op_start_rel_micros | [int64](#int64) | optional |  |
| op_end_rel_micros | [int64](#int64) | optional |  |
| all_end_rel_micros | [int64](#int64) | optional |  |
| memory | [AllocatorMemoryUsed](#tensorflow.AllocatorMemoryUsed) | repeated |  |
| output | [NodeOutput](#tensorflow.NodeOutput) | repeated |  |
| timeline_label | [string](#string) | optional |  |
| scheduled_micros | [int64](#int64) | optional |  |
| thread_id | [uint32](#uint32) | optional |  |
| referenced_tensor | [AllocationDescription](#tensorflow.AllocationDescription) | repeated |  |
| memory_stats | [MemoryStats](#tensorflow.MemoryStats) | optional |  |


<a name="tensorflow.NodeOutput"/>
### NodeOutput


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| slot | [int32](#int32) | optional |  |
| tensor_description | [TensorDescription](#tensorflow.TensorDescription) | optional |  |


<a name="tensorflow.StepStats"/>
### StepStats


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dev_stats | [DeviceStepStats](#tensorflow.DeviceStepStats) | repeated |  |







<a name="scalar-value-types"/>
## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double"/> double |  | double | double | float |
| <a name="float"/> float |  | float | float | float |
| <a name="int32"/> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64"/> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32"/> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64"/> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32"/> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64"/> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32"/> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64"/> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32"/> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64"/> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool"/> bool |  | bool | boolean | boolean |
| <a name="string"/> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes"/> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |
