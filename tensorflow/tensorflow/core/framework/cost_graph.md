# Protocol Documentation
<a name="top"/>

## Table of Contents
* [cost_graph.proto](#cost_graph.proto)
 * [CostGraphDef](#tensorflow.CostGraphDef)
 * [CostGraphDef.Node](#tensorflow.CostGraphDef.Node)
 * [CostGraphDef.Node.InputInfo](#tensorflow.CostGraphDef.Node.InputInfo)
 * [CostGraphDef.Node.OutputInfo](#tensorflow.CostGraphDef.Node.OutputInfo)
* [Scalar Value Types](#scalar-value-types)

<a name="cost_graph.proto"/>
<p align="right"><a href="#top">Top</a></p>

## cost_graph.proto



<a name="tensorflow.CostGraphDef"/>
### CostGraphDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node | [CostGraphDef.Node](#tensorflow.CostGraphDef.Node) | repeated |  |


<a name="tensorflow.CostGraphDef.Node"/>
### CostGraphDef.Node


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| device | [string](#string) | optional |  |
| id | [int32](#int32) | optional |  |
| input_info | [CostGraphDef.Node.InputInfo](#tensorflow.CostGraphDef.Node.InputInfo) | repeated |  |
| output_info | [CostGraphDef.Node.OutputInfo](#tensorflow.CostGraphDef.Node.OutputInfo) | repeated |  |
| temporary_memory_size | [int64](#int64) | optional |  |
| host_temp_memory_size | [int64](#int64) | optional |  |
| device_temp_memory_size | [int64](#int64) | optional |  |
| host_persistent_memory_size | [int64](#int64) | optional |  |
| device_persistent_memory_size | [int64](#int64) | optional |  |
| compute_cost | [int64](#int64) | optional |  |
| compute_time | [int64](#int64) | optional |  |
| memory_time | [int64](#int64) | optional |  |
| is_final | [bool](#bool) | optional |  |
| control_input | [int32](#int32) | repeated |  |


<a name="tensorflow.CostGraphDef.Node.InputInfo"/>
### CostGraphDef.Node.InputInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| preceding_node | [int32](#int32) | optional |  |
| preceding_port | [int32](#int32) | optional |  |


<a name="tensorflow.CostGraphDef.Node.OutputInfo"/>
### CostGraphDef.Node.OutputInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| size | [int64](#int64) | optional |  |
| alias_input_port | [int64](#int64) | optional |  |
| shape | [TensorShapeProto](#tensorflow.TensorShapeProto) | optional |  |
| dtype | [DataType](#tensorflow.DataType) | optional |  |







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
