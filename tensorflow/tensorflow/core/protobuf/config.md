# Protocol Documentation
<a name="top"/>

## Table of Contents
* [config.proto](#config.proto)
 * [ConfigProto](#tensorflow.ConfigProto)
 * [ConfigProto.DeviceCountEntry](#tensorflow.ConfigProto.DeviceCountEntry)
 * [GPUOptions](#tensorflow.GPUOptions)
 * [GraphOptions](#tensorflow.GraphOptions)
 * [OptimizerOptions](#tensorflow.OptimizerOptions)
 * [RPCOptions](#tensorflow.RPCOptions)
 * [RunMetadata](#tensorflow.RunMetadata)
 * [RunOptions](#tensorflow.RunOptions)
 * [ThreadPoolOptionProto](#tensorflow.ThreadPoolOptionProto)
 * [OptimizerOptions.GlobalJitLevel](#tensorflow.OptimizerOptions.GlobalJitLevel)
 * [OptimizerOptions.Level](#tensorflow.OptimizerOptions.Level)
 * [RunOptions.TraceLevel](#tensorflow.RunOptions.TraceLevel)
* [Scalar Value Types](#scalar-value-types)

<a name="config.proto"/>
<p align="right"><a href="#top">Top</a></p>

## config.proto



<a name="tensorflow.ConfigProto"/>
### ConfigProto


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device_count | [ConfigProto.DeviceCountEntry](#tensorflow.ConfigProto.DeviceCountEntry) | repeated |  |
| intra_op_parallelism_threads | [int32](#int32) | optional |  |
| inter_op_parallelism_threads | [int32](#int32) | optional |  |
| use_per_session_threads | [bool](#bool) | optional |  |
| session_inter_op_thread_pool | [ThreadPoolOptionProto](#tensorflow.ThreadPoolOptionProto) | repeated |  |
| placement_period | [int32](#int32) | optional |  |
| device_filters | [string](#string) | repeated |  |
| gpu_options | [GPUOptions](#tensorflow.GPUOptions) | optional |  |
| allow_soft_placement | [bool](#bool) | optional |  |
| log_device_placement | [bool](#bool) | optional |  |
| graph_options | [GraphOptions](#tensorflow.GraphOptions) | optional |  |
| operation_timeout_in_ms | [int64](#int64) | optional |  |
| rpc_options | [RPCOptions](#tensorflow.RPCOptions) | optional |  |


<a name="tensorflow.ConfigProto.DeviceCountEntry"/>
### ConfigProto.DeviceCountEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [int32](#int32) | optional |  |


<a name="tensorflow.GPUOptions"/>
### GPUOptions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| per_process_gpu_memory_fraction | [double](#double) | optional |  |
| allocator_type | [string](#string) | optional |  |
| deferred_deletion_bytes | [int64](#int64) | optional |  |
| allow_growth | [bool](#bool) | optional |  |
| visible_device_list | [string](#string) | optional |  |
| polling_active_delay_usecs | [int32](#int32) | optional |  |
| polling_inactive_delay_msecs | [int32](#int32) | optional |  |
| force_gpu_compatible | [bool](#bool) | optional |  |


<a name="tensorflow.GraphOptions"/>
### GraphOptions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| enable_recv_scheduling | [bool](#bool) | optional |  |
| optimizer_options | [OptimizerOptions](#tensorflow.OptimizerOptions) | optional |  |
| build_cost_model | [int64](#int64) | optional |  |
| build_cost_model_after | [int64](#int64) | optional |  |
| infer_shapes | [bool](#bool) | optional |  |
| place_pruned_graph | [bool](#bool) | optional |  |
| enable_bfloat16_sendrecv | [bool](#bool) | optional |  |
| timeline_step | [int32](#int32) | optional |  |
| rewrite_options | [RewriterConfig](#tensorflow.RewriterConfig) | optional |  |


<a name="tensorflow.OptimizerOptions"/>
### OptimizerOptions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| do_common_subexpression_elimination | [bool](#bool) | optional |  |
| do_constant_folding | [bool](#bool) | optional |  |
| do_function_inlining | [bool](#bool) | optional |  |
| opt_level | [OptimizerOptions.Level](#tensorflow.OptimizerOptions.Level) | optional |  |
| global_jit_level | [OptimizerOptions.GlobalJitLevel](#tensorflow.OptimizerOptions.GlobalJitLevel) | optional |  |


<a name="tensorflow.RPCOptions"/>
### RPCOptions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| use_rpc_for_inprocess_master | [bool](#bool) | optional |  |


<a name="tensorflow.RunMetadata"/>
### RunMetadata


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step_stats | [StepStats](#tensorflow.StepStats) | optional |  |
| cost_graph | [CostGraphDef](#tensorflow.CostGraphDef) | optional |  |
| partition_graphs | [GraphDef](#tensorflow.GraphDef) | repeated |  |


<a name="tensorflow.RunOptions"/>
### RunOptions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| trace_level | [RunOptions.TraceLevel](#tensorflow.RunOptions.TraceLevel) | optional |  |
| timeout_in_ms | [int64](#int64) | optional |  |
| inter_op_thread_pool | [int32](#int32) | optional |  |
| output_partition_graphs | [bool](#bool) | optional |  |
| debug_options | [DebugOptions](#tensorflow.DebugOptions) | optional |  |


<a name="tensorflow.ThreadPoolOptionProto"/>
### ThreadPoolOptionProto


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| num_threads | [int32](#int32) | optional |  |



<a name="tensorflow.OptimizerOptions.GlobalJitLevel"/>
### OptimizerOptions.GlobalJitLevel


| Name | Number | Description |
| ---- | ------ | ----------- |
| DEFAULT | 0 |  |
| OFF | -1 |  |
| ON_1 | 1 |  |
| ON_2 | 2 |  |

<a name="tensorflow.OptimizerOptions.Level"/>
### OptimizerOptions.Level


| Name | Number | Description |
| ---- | ------ | ----------- |
| L1 | 0 |  |
| L0 | -1 |  |

<a name="tensorflow.RunOptions.TraceLevel"/>
### RunOptions.TraceLevel


| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_TRACE | 0 |  |
| SOFTWARE_TRACE | 1 |  |
| HARDWARE_TRACE | 2 |  |
| FULL_TRACE | 3 |  |





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
