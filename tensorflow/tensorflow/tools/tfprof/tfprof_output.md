# Protocol Documentation
<a name="top"/>

## Table of Contents
* [tfprof_output.proto](#tfprof_output.proto)
 * [TFProfNode](#tensorflow.tfprof.TFProfNode)
 * [TFProfTensorProto](#tensorflow.tfprof.TFProfTensorProto)
* [Scalar Value Types](#scalar-value-types)

<a name="tfprof_output.proto"/>
<p align="right"><a href="#top">Top</a></p>

## tfprof_output.proto



<a name="tensorflow.tfprof.TFProfNode"/>
### TFProfNode


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| tensor_value | [TFProfTensorProto](#tensorflow.tfprof.TFProfTensorProto) | optional |  |
| exec_micros | [int64](#int64) | optional |  |
| requested_bytes | [int64](#int64) | optional |  |
| parameters | [int64](#int64) | optional |  |
| float_ops | [int64](#int64) | optional |  |
| inputs | [int64](#int64) | optional |  |
| device | [string](#string) | optional |  |
| total_exec_micros | [int64](#int64) | optional |  |
| total_requested_bytes | [int64](#int64) | optional |  |
| total_parameters | [int64](#int64) | optional |  |
| total_float_ops | [int64](#int64) | optional |  |
| total_inputs | [int64](#int64) | optional |  |
| shapes | [TensorShapeProto](#tensorflow.TensorShapeProto) | repeated |  |
| children | [TFProfNode](#tensorflow.tfprof.TFProfNode) | repeated |  |


<a name="tensorflow.tfprof.TFProfTensorProto"/>
### TFProfTensorProto


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dtype | [DataType](#tensorflow.DataType) | optional |  |
| value_double | [double](#double) | repeated |  |
| value_int64 | [int64](#int64) | repeated |  |
| value_str | [string](#string) | repeated |  |







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
