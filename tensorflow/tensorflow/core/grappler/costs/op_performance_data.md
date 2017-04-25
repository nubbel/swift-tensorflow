# Protocol Documentation
<a name="top"/>

## Table of Contents
* [op_performance_data.proto](#op_performance_data.proto)
 * [OpInfo](#tensorflow.OpInfo)
 * [OpInfo.AttrEntry](#tensorflow.OpInfo.AttrEntry)
 * [OpInfo.DeviceProperties](#tensorflow.OpInfo.DeviceProperties)
 * [OpInfo.DeviceProperties.EnvironmentEntry](#tensorflow.OpInfo.DeviceProperties.EnvironmentEntry)
 * [OpInfo.TensorProperties](#tensorflow.OpInfo.TensorProperties)
 * [OpPerformance](#tensorflow.OpPerformance)
 * [OpPerformance.OpMemory](#tensorflow.OpPerformance.OpMemory)
 * [OpPerformanceList](#tensorflow.OpPerformanceList)
* [Scalar Value Types](#scalar-value-types)

<a name="op_performance_data.proto"/>
<p align="right"><a href="#top">Top</a></p>

## op_performance_data.proto



<a name="tensorflow.OpInfo"/>
### OpInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| op | [string](#string) | optional |  |
| attr | [OpInfo.AttrEntry](#tensorflow.OpInfo.AttrEntry) | repeated |  |
| inputs | [OpInfo.TensorProperties](#tensorflow.OpInfo.TensorProperties) | repeated |  |
| device | [OpInfo.DeviceProperties](#tensorflow.OpInfo.DeviceProperties) | optional |  |


<a name="tensorflow.OpInfo.AttrEntry"/>
### OpInfo.AttrEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [AttrValue](#tensorflow.AttrValue) | optional |  |


<a name="tensorflow.OpInfo.DeviceProperties"/>
### OpInfo.DeviceProperties


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) | optional |  |
| vendor | [string](#string) | optional |  |
| model | [string](#string) | optional |  |
| frequency | [int64](#int64) | optional |  |
| num_cores | [int64](#int64) | optional |  |
| environment | [OpInfo.DeviceProperties.EnvironmentEntry](#tensorflow.OpInfo.DeviceProperties.EnvironmentEntry) | repeated |  |
| num_registers | [int64](#int64) | optional |  |
| l1_cache_size | [int64](#int64) | optional |  |
| l2_cache_size | [int64](#int64) | optional |  |
| l3_cache_size | [int64](#int64) | optional |  |
| shared_memory_size_per_multiprocessor | [int64](#int64) | optional |  |
| memory_size | [int64](#int64) | optional |  |
| bandwidth | [int64](#int64) | optional |  |


<a name="tensorflow.OpInfo.DeviceProperties.EnvironmentEntry"/>
### OpInfo.DeviceProperties.EnvironmentEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |


<a name="tensorflow.OpInfo.TensorProperties"/>
### OpInfo.TensorProperties


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dtype | [DataType](#tensorflow.DataType) | optional |  |
| shape | [TensorShapeProto](#tensorflow.TensorShapeProto) | optional |  |
| value | [TensorProto](#tensorflow.TensorProto) | optional |  |


<a name="tensorflow.OpPerformance"/>
### OpPerformance


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| op | [OpInfo](#tensorflow.OpInfo) | optional |  |
| node | [string](#string) | optional |  |
| temporary_memory_size | [int64](#int64) | optional |  |
| compute_cost | [int64](#int64) | optional |  |
| compute_time | [int64](#int64) | optional |  |
| memory_time | [int64](#int64) | optional |  |
| compute_efficiency | [double](#double) | optional |  |
| memory_efficiency | [double](#double) | optional |  |
| op_memory | [OpPerformance.OpMemory](#tensorflow.OpPerformance.OpMemory) | optional |  |


<a name="tensorflow.OpPerformance.OpMemory"/>
### OpPerformance.OpMemory


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| output_memory | [int64](#int64) | repeated |  |
| host_temp_memory | [int64](#int64) | optional |  |
| device_temp_memory | [int64](#int64) | optional |  |
| host_persistent_memory | [int64](#int64) | optional |  |
| device_persistent_memory | [int64](#int64) | optional |  |


<a name="tensorflow.OpPerformanceList"/>
### OpPerformanceList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| op_performance | [OpPerformance](#tensorflow.OpPerformance) | repeated |  |







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
