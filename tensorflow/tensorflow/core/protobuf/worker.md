# Protocol Documentation
<a name="top"/>

## Table of Contents
* [worker.proto](#worker.proto)
 * [CleanupAllRequest](#tensorflow.CleanupAllRequest)
 * [CleanupAllResponse](#tensorflow.CleanupAllResponse)
 * [CleanupGraphRequest](#tensorflow.CleanupGraphRequest)
 * [CleanupGraphResponse](#tensorflow.CleanupGraphResponse)
 * [CreateWorkerSessionRequest](#tensorflow.CreateWorkerSessionRequest)
 * [CreateWorkerSessionResponse](#tensorflow.CreateWorkerSessionResponse)
 * [DeregisterGraphRequest](#tensorflow.DeregisterGraphRequest)
 * [DeregisterGraphResponse](#tensorflow.DeregisterGraphResponse)
 * [ExecutorOpts](#tensorflow.ExecutorOpts)
 * [GetStatusRequest](#tensorflow.GetStatusRequest)
 * [GetStatusResponse](#tensorflow.GetStatusResponse)
 * [LabeledStepStats](#tensorflow.LabeledStepStats)
 * [LoggingRequest](#tensorflow.LoggingRequest)
 * [LoggingResponse](#tensorflow.LoggingResponse)
 * [RecvTensorRequest](#tensorflow.RecvTensorRequest)
 * [RecvTensorResponse](#tensorflow.RecvTensorResponse)
 * [RegisterGraphRequest](#tensorflow.RegisterGraphRequest)
 * [RegisterGraphResponse](#tensorflow.RegisterGraphResponse)
 * [RunGraphRequest](#tensorflow.RunGraphRequest)
 * [RunGraphResponse](#tensorflow.RunGraphResponse)
 * [TraceOpts](#tensorflow.TraceOpts)
 * [TracingRequest](#tensorflow.TracingRequest)
 * [TracingResponse](#tensorflow.TracingResponse)
* [Scalar Value Types](#scalar-value-types)

<a name="worker.proto"/>
<p align="right"><a href="#top">Top</a></p>

## worker.proto



<a name="tensorflow.CleanupAllRequest"/>
### CleanupAllRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| container | [string](#string) | repeated |  |


<a name="tensorflow.CleanupAllResponse"/>
### CleanupAllResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="tensorflow.CleanupGraphRequest"/>
### CleanupGraphRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step_id | [int64](#int64) | optional |  |


<a name="tensorflow.CleanupGraphResponse"/>
### CleanupGraphResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="tensorflow.CreateWorkerSessionRequest"/>
### CreateWorkerSessionRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_handle | [string](#string) | optional |  |
| server_def | [ServerDef](#tensorflow.ServerDef) | optional |  |


<a name="tensorflow.CreateWorkerSessionResponse"/>
### CreateWorkerSessionResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="tensorflow.DeregisterGraphRequest"/>
### DeregisterGraphRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| graph_handle | [string](#string) | optional |  |


<a name="tensorflow.DeregisterGraphResponse"/>
### DeregisterGraphResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="tensorflow.ExecutorOpts"/>
### ExecutorOpts


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| record_costs | [bool](#bool) | optional |  |
| record_timeline | [bool](#bool) | optional |  |


<a name="tensorflow.GetStatusRequest"/>
### GetStatusRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="tensorflow.GetStatusResponse"/>
### GetStatusResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device_attributes | [DeviceAttributes](#tensorflow.DeviceAttributes) | repeated |  |


<a name="tensorflow.LabeledStepStats"/>
### LabeledStepStats


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step_id | [int64](#int64) | optional |  |
| step_stats | [StepStats](#tensorflow.StepStats) | optional |  |


<a name="tensorflow.LoggingRequest"/>
### LoggingRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rpc_logging | [bool](#bool) | optional |  |
| clear | [bool](#bool) | optional |  |
| fetch_step_id | [int64](#int64) | repeated |  |


<a name="tensorflow.LoggingResponse"/>
### LoggingResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step | [LabeledStepStats](#tensorflow.LabeledStepStats) | repeated |  |


<a name="tensorflow.RecvTensorRequest"/>
### RecvTensorRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step_id | [int64](#int64) | optional |  |
| rendezvous_key | [string](#string) | optional |  |
| dma_ok | [bool](#bool) | optional |  |
| client_locality | [DeviceLocality](#tensorflow.DeviceLocality) | optional |  |
| server_locality | [DeviceLocality](#tensorflow.DeviceLocality) | optional |  |
| transport_options | [Any](#google.protobuf.Any) | optional |  |


<a name="tensorflow.RecvTensorResponse"/>
### RecvTensorResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tensor | [TensorProto](#tensorflow.TensorProto) | optional |  |
| is_dead | [bool](#bool) | optional |  |
| send_start_micros | [int64](#int64) | optional |  |
| transport_options | [Any](#google.protobuf.Any) | optional |  |


<a name="tensorflow.RegisterGraphRequest"/>
### RegisterGraphRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_handle | [string](#string) | optional |  |
| graph_def | [GraphDef](#tensorflow.GraphDef) | optional |  |
| has_control_flow | [bool](#bool) | optional |  |
| graph_options | [GraphOptions](#tensorflow.GraphOptions) | optional |  |


<a name="tensorflow.RegisterGraphResponse"/>
### RegisterGraphResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| graph_handle | [string](#string) | optional |  |


<a name="tensorflow.RunGraphRequest"/>
### RunGraphRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| graph_handle | [string](#string) | optional |  |
| step_id | [int64](#int64) | optional |  |
| exec_opts | [ExecutorOpts](#tensorflow.ExecutorOpts) | optional |  |
| send | [NamedTensorProto](#tensorflow.NamedTensorProto) | repeated |  |
| recv_key | [string](#string) | repeated |  |
| is_partial | [bool](#bool) | optional |  |
| is_last_partial_run | [bool](#bool) | optional |  |


<a name="tensorflow.RunGraphResponse"/>
### RunGraphResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recv | [NamedTensorProto](#tensorflow.NamedTensorProto) | repeated |  |
| step_stats | [StepStats](#tensorflow.StepStats) | optional |  |
| cost_graph | [CostGraphDef](#tensorflow.CostGraphDef) | optional |  |


<a name="tensorflow.TraceOpts"/>
### TraceOpts


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| duration | [double](#double) | optional |  |
| use_step_profiler | [bool](#bool) | optional |  |
| use_kernel_profiler | [bool](#bool) | optional |  |
| use_extended_profiler | [bool](#bool) | optional |  |
| use_gpu_profiler | [bool](#bool) | optional |  |
| use_sample_profiler | [bool](#bool) | optional |  |


<a name="tensorflow.TracingRequest"/>
### TracingRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| options | [TraceOpts](#tensorflow.TraceOpts) | optional |  |


<a name="tensorflow.TracingResponse"/>
### TracingResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |







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
