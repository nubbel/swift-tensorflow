# Protocol Documentation
<a name="top"/>

## Table of Contents
* [trace_info.proto](#trace_info.proto)
 * [FileInfo](#tensorflow.contrib.tensorboard.FileInfo)
 * [FileInfo.MultilineStatementsEntry](#tensorflow.contrib.tensorboard.FileInfo.MultilineStatementsEntry)
 * [LineTrace](#tensorflow.contrib.tensorboard.LineTrace)
 * [OpInfo](#tensorflow.contrib.tensorboard.OpInfo)
 * [TensorInfo](#tensorflow.contrib.tensorboard.TensorInfo)
 * [TraceInfo](#tensorflow.contrib.tensorboard.TraceInfo)
* [Scalar Value Types](#scalar-value-types)

<a name="trace_info.proto"/>
<p align="right"><a href="#top">Top</a></p>

## trace_info.proto



<a name="tensorflow.contrib.tensorboard.FileInfo"/>
### FileInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_path | [string](#string) | optional |  |
| source_code | [string](#string) | optional |  |
| multiline_statements | [FileInfo.MultilineStatementsEntry](#tensorflow.contrib.tensorboard.FileInfo.MultilineStatementsEntry) | repeated |  |


<a name="tensorflow.contrib.tensorboard.FileInfo.MultilineStatementsEntry"/>
### FileInfo.MultilineStatementsEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [uint32](#uint32) | optional |  |
| value | [uint32](#uint32) | optional |  |


<a name="tensorflow.contrib.tensorboard.LineTrace"/>
### LineTrace


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_path | [string](#string) | optional |  |
| line_number | [uint32](#uint32) | optional |  |


<a name="tensorflow.contrib.tensorboard.OpInfo"/>
### OpInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| op_type | [string](#string) | optional |  |
| device | [string](#string) | optional |  |
| traceback | [LineTrace](#tensorflow.contrib.tensorboard.LineTrace) | repeated |  |
| inputs | [TensorInfo](#tensorflow.contrib.tensorboard.TensorInfo) | repeated |  |
| outputs | [TensorInfo](#tensorflow.contrib.tensorboard.TensorInfo) | repeated |  |


<a name="tensorflow.contrib.tensorboard.TensorInfo"/>
### TensorInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [int32](#int32) | repeated |  |
| dtype | [string](#string) | optional |  |
| num_bytes_per_elem | [uint32](#uint32) | optional |  |
| consumers | [string](#string) | repeated |  |


<a name="tensorflow.contrib.tensorboard.TraceInfo"/>
### TraceInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ops | [OpInfo](#tensorflow.contrib.tensorboard.OpInfo) | repeated |  |
| files | [FileInfo](#tensorflow.contrib.tensorboard.FileInfo) | repeated |  |







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
