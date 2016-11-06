# Protocol Documentation
<a name="top"/>

## Table of Contents
* [saver.proto](#saver.proto)
 * [SaverDef](#tensorflow.SaverDef)
 * [SaverDef.CheckpointFormatVersion](#tensorflow.SaverDef.CheckpointFormatVersion)
* [Scalar Value Types](#scalar-value-types)

<a name="saver.proto"/>
<p align="right"><a href="#top">Top</a></p>

## saver.proto



<a name="tensorflow.SaverDef"/>
### SaverDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filename_tensor_name | [string](#string) | optional |  |
| save_tensor_name | [string](#string) | optional |  |
| restore_op_name | [string](#string) | optional |  |
| max_to_keep | [int32](#int32) | optional |  |
| sharded | [bool](#bool) | optional |  |
| keep_checkpoint_every_n_hours | [float](#float) | optional |  |
| version | [SaverDef.CheckpointFormatVersion](#tensorflow.SaverDef.CheckpointFormatVersion) | optional |  |



<a name="tensorflow.SaverDef.CheckpointFormatVersion"/>
### SaverDef.CheckpointFormatVersion


| Name | Number | Description |
| ---- | ------ | ----------- |
| LEGACY | 0 |  |
| V1 | 1 |  |
| V2 | 2 |  |





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
