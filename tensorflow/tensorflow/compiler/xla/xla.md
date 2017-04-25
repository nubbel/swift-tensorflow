# Protocol Documentation
<a name="top"/>

## Table of Contents
* [xla.proto](#xla.proto)
 * [ComputationRequest](#xla.ComputationRequest)
 * [ComputationResponse](#xla.ComputationResponse)
 * [ComputationStatsRequest](#xla.ComputationStatsRequest)
 * [ComputationStatsResponse](#xla.ComputationStatsResponse)
 * [ComputeConstantRequest](#xla.ComputeConstantRequest)
 * [ComputeConstantResponse](#xla.ComputeConstantResponse)
 * [CreateChannelHandleRequest](#xla.CreateChannelHandleRequest)
 * [CreateChannelHandleResponse](#xla.CreateChannelHandleResponse)
 * [DeconstructTupleRequest](#xla.DeconstructTupleRequest)
 * [DeconstructTupleResponse](#xla.DeconstructTupleResponse)
 * [ExecuteAsyncRequest](#xla.ExecuteAsyncRequest)
 * [ExecuteAsyncResponse](#xla.ExecuteAsyncResponse)
 * [ExecuteParallelRequest](#xla.ExecuteParallelRequest)
 * [ExecuteParallelResponse](#xla.ExecuteParallelResponse)
 * [ExecuteRequest](#xla.ExecuteRequest)
 * [ExecuteResponse](#xla.ExecuteResponse)
 * [ExecutionOptions](#xla.ExecutionOptions)
 * [GetComputationShapeRequest](#xla.GetComputationShapeRequest)
 * [GetComputationShapeResponse](#xla.GetComputationShapeResponse)
 * [GetDeviceHandlesRequest](#xla.GetDeviceHandlesRequest)
 * [GetDeviceHandlesResponse](#xla.GetDeviceHandlesResponse)
 * [GetShapeRequest](#xla.GetShapeRequest)
 * [GetShapeResponse](#xla.GetShapeResponse)
 * [IsConstantRequest](#xla.IsConstantRequest)
 * [IsConstantResponse](#xla.IsConstantResponse)
 * [LoadComputationSnapshotRequest](#xla.LoadComputationSnapshotRequest)
 * [LoadComputationSnapshotResponse](#xla.LoadComputationSnapshotResponse)
 * [LoadDataRequest](#xla.LoadDataRequest)
 * [LoadDataResponse](#xla.LoadDataResponse)
 * [ResetDeviceRequest](#xla.ResetDeviceRequest)
 * [ResetDeviceResponse](#xla.ResetDeviceResponse)
 * [SetReturnValueRequest](#xla.SetReturnValueRequest)
 * [SetReturnValueResponse](#xla.SetReturnValueResponse)
 * [SnapshotComputationRequest](#xla.SnapshotComputationRequest)
 * [SnapshotComputationResponse](#xla.SnapshotComputationResponse)
 * [SpecializeRequest](#xla.SpecializeRequest)
 * [SpecializeResponse](#xla.SpecializeResponse)
 * [TransferFromOutfeedRequest](#xla.TransferFromOutfeedRequest)
 * [TransferFromOutfeedResponse](#xla.TransferFromOutfeedResponse)
 * [TransferToClientInProcessRequest](#xla.TransferToClientInProcessRequest)
 * [TransferToClientInProcessResponse](#xla.TransferToClientInProcessResponse)
 * [TransferToClientRequest](#xla.TransferToClientRequest)
 * [TransferToClientResponse](#xla.TransferToClientResponse)
 * [TransferToInfeedRequest](#xla.TransferToInfeedRequest)
 * [TransferToInfeedResponse](#xla.TransferToInfeedResponse)
 * [TransferToServerInProcessRequest](#xla.TransferToServerInProcessRequest)
 * [TransferToServerInProcessResponse](#xla.TransferToServerInProcessResponse)
 * [TransferToServerRequest](#xla.TransferToServerRequest)
 * [TransferToServerResponse](#xla.TransferToServerResponse)
 * [UnpackRequest](#xla.UnpackRequest)
 * [UnpackResponse](#xla.UnpackResponse)
 * [UnregisterRequest](#xla.UnregisterRequest)
 * [UnregisterResponse](#xla.UnregisterResponse)
 * [WaitForExecutionRequest](#xla.WaitForExecutionRequest)
 * [WaitForExecutionResponse](#xla.WaitForExecutionResponse)
* [Scalar Value Types](#scalar-value-types)

<a name="xla.proto"/>
<p align="right"><a href="#top">Top</a></p>

## xla.proto



<a name="xla.ComputationRequest"/>
### ComputationRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |


<a name="xla.ComputationResponse"/>
### ComputationResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |


<a name="xla.ComputationStatsRequest"/>
### ComputationStatsRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |


<a name="xla.ComputationStatsResponse"/>
### ComputationStatsResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| stats | [ComputationStats](#xla.ComputationStats) | optional |  |


<a name="xla.ComputeConstantRequest"/>
### ComputeConstantRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| output_layout | [Layout](#xla.Layout) | optional |  |


<a name="xla.ComputeConstantResponse"/>
### ComputeConstantResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| output | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |


<a name="xla.CreateChannelHandleRequest"/>
### CreateChannelHandleRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="xla.CreateChannelHandleResponse"/>
### CreateChannelHandleResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel | [ChannelHandle](#xla.ChannelHandle) | optional |  |


<a name="xla.DeconstructTupleRequest"/>
### DeconstructTupleRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tuple_handle | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |


<a name="xla.DeconstructTupleResponse"/>
### DeconstructTupleResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| element_handles | [GlobalDataHandle](#xla.GlobalDataHandle) | repeated |  |


<a name="xla.ExecuteAsyncRequest"/>
### ExecuteAsyncRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| arguments | [GlobalDataHandle](#xla.GlobalDataHandle) | repeated |  |
| execution_options | [ExecutionOptions](#xla.ExecutionOptions) | optional |  |


<a name="xla.ExecuteAsyncResponse"/>
### ExecuteAsyncResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| execution | [ExecutionHandle](#xla.ExecutionHandle) | optional |  |


<a name="xla.ExecuteParallelRequest"/>
### ExecuteParallelRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requests | [ExecuteRequest](#xla.ExecuteRequest) | repeated |  |


<a name="xla.ExecuteParallelResponse"/>
### ExecuteParallelResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| responses | [ExecuteResponse](#xla.ExecuteResponse) | repeated |  |


<a name="xla.ExecuteRequest"/>
### ExecuteRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| arguments | [GlobalDataHandle](#xla.GlobalDataHandle) | repeated |  |
| device_handle | [DeviceHandle](#xla.DeviceHandle) | optional |  |
| execution_options | [ExecutionOptions](#xla.ExecutionOptions) | optional |  |


<a name="xla.ExecuteResponse"/>
### ExecuteResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| output | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |
| profile | [ExecutionProfile](#xla.ExecutionProfile) | optional |  |


<a name="xla.ExecutionOptions"/>
### ExecutionOptions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| disable_fast_math | [bool](#bool) | optional |  |
| shape_with_output_layout | [Shape](#xla.Shape) | optional |  |
| seed | [uint64](#uint64) | optional |  |


<a name="xla.GetComputationShapeRequest"/>
### GetComputationShapeRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |


<a name="xla.GetComputationShapeResponse"/>
### GetComputationShapeResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| program_shape | [ProgramShape](#xla.ProgramShape) | optional |  |


<a name="xla.GetDeviceHandlesRequest"/>
### GetDeviceHandlesRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device_count | [int64](#int64) | optional |  |


<a name="xla.GetDeviceHandlesResponse"/>
### GetDeviceHandlesResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device_handles | [DeviceHandle](#xla.DeviceHandle) | repeated |  |


<a name="xla.GetShapeRequest"/>
### GetShapeRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |


<a name="xla.GetShapeResponse"/>
### GetShapeResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [Shape](#xla.Shape) | optional |  |


<a name="xla.IsConstantRequest"/>
### IsConstantRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |


<a name="xla.IsConstantResponse"/>
### IsConstantResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| is_constant | [bool](#bool) | optional |  |


<a name="xla.LoadComputationSnapshotRequest"/>
### LoadComputationSnapshotRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [SessionModule](#xla.SessionModule) | optional |  |


<a name="xla.LoadComputationSnapshotResponse"/>
### LoadComputationSnapshotResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |


<a name="xla.LoadDataRequest"/>
### LoadDataRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| columnio_tablet_path | [string](#string) | optional |  |
| columnio_field | [string](#string) | optional |  |
| element_shape | [Shape](#xla.Shape) | optional |  |
| offset | [int64](#int64) | optional |  |
| limit | [int64](#int64) | optional |  |
| zip | [bool](#bool) | optional |  |


<a name="xla.LoadDataResponse"/>
### LoadDataResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |
| data_shape | [Shape](#xla.Shape) | optional |  |
| available_rows | [int64](#int64) | optional |  |
| rows_loaded | [int64](#int64) | optional |  |
| nanoseconds | [int64](#int64) | optional |  |


<a name="xla.ResetDeviceRequest"/>
### ResetDeviceRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device_handle | [DeviceHandle](#xla.DeviceHandle) | optional |  |


<a name="xla.ResetDeviceResponse"/>
### ResetDeviceResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="xla.SetReturnValueRequest"/>
### SetReturnValueRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |


<a name="xla.SetReturnValueResponse"/>
### SetReturnValueResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="xla.SnapshotComputationRequest"/>
### SnapshotComputationRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |


<a name="xla.SnapshotComputationResponse"/>
### SnapshotComputationResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [SessionModule](#xla.SessionModule) | optional |  |


<a name="xla.SpecializeRequest"/>
### SpecializeRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| arguments | [GlobalDataHandle](#xla.GlobalDataHandle) | repeated |  |


<a name="xla.SpecializeResponse"/>
### SpecializeResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="xla.TransferFromOutfeedRequest"/>
### TransferFromOutfeedRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape_with_layout | [Shape](#xla.Shape) | optional |  |
| replica_id | [int64](#int64) | optional |  |
| device_handle | [DeviceHandle](#xla.DeviceHandle) | optional |  |


<a name="xla.TransferFromOutfeedResponse"/>
### TransferFromOutfeedResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| literal | [Literal](#xla.Literal) | optional |  |


<a name="xla.TransferToClientInProcessRequest"/>
### TransferToClientInProcessRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |
| buffer | [uint64](#uint64) | optional |  |


<a name="xla.TransferToClientInProcessResponse"/>
### TransferToClientInProcessResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="xla.TransferToClientRequest"/>
### TransferToClientRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |
| shape_with_layout | [Shape](#xla.Shape) | optional |  |


<a name="xla.TransferToClientResponse"/>
### TransferToClientResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| literal | [Literal](#xla.Literal) | optional |  |


<a name="xla.TransferToInfeedRequest"/>
### TransferToInfeedRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| literal | [Literal](#xla.Literal) | optional |  |
| replica_id | [int64](#int64) | optional |  |
| device_handle | [DeviceHandle](#xla.DeviceHandle) | optional |  |


<a name="xla.TransferToInfeedResponse"/>
### TransferToInfeedResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="xla.TransferToServerInProcessRequest"/>
### TransferToServerInProcessRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| buffer | [uint64](#uint64) | optional |  |
| shape | [Shape](#xla.Shape) | optional |  |


<a name="xla.TransferToServerInProcessResponse"/>
### TransferToServerInProcessResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |


<a name="xla.TransferToServerRequest"/>
### TransferToServerRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| literal | [Literal](#xla.Literal) | optional |  |
| device_handle | [DeviceHandle](#xla.DeviceHandle) | optional |  |


<a name="xla.TransferToServerResponse"/>
### TransferToServerResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |


<a name="xla.UnpackRequest"/>
### UnpackRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |


<a name="xla.UnpackResponse"/>
### UnpackResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tied_data | [GlobalDataHandle](#xla.GlobalDataHandle) | repeated |  |


<a name="xla.UnregisterRequest"/>
### UnregisterRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |


<a name="xla.UnregisterResponse"/>
### UnregisterResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |


<a name="xla.WaitForExecutionRequest"/>
### WaitForExecutionRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| execution | [ExecutionHandle](#xla.ExecutionHandle) | optional |  |


<a name="xla.WaitForExecutionResponse"/>
### WaitForExecutionResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| output | [GlobalDataHandle](#xla.GlobalDataHandle) | optional |  |
| profile | [ExecutionProfile](#xla.ExecutionProfile) | optional |  |







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
