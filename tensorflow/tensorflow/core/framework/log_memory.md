# Protocol Documentation
<a name="top"/>

## Table of Contents
* [log_memory.proto](#log_memory.proto)
 * [MemoryLogRawAllocation](#tensorflow.MemoryLogRawAllocation)
 * [MemoryLogRawDeallocation](#tensorflow.MemoryLogRawDeallocation)
 * [MemoryLogStep](#tensorflow.MemoryLogStep)
 * [MemoryLogTensorAllocation](#tensorflow.MemoryLogTensorAllocation)
 * [MemoryLogTensorDeallocation](#tensorflow.MemoryLogTensorDeallocation)
 * [MemoryLogTensorOutput](#tensorflow.MemoryLogTensorOutput)
* [Scalar Value Types](#scalar-value-types)

<a name="log_memory.proto"/>
<p align="right"><a href="#top">Top</a></p>

## log_memory.proto



<a name="tensorflow.MemoryLogRawAllocation"/>
### MemoryLogRawAllocation


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step_id | [int64](#int64) | optional |  |
| operation | [string](#string) | optional |  |
| num_bytes | [int64](#int64) | optional |  |
| ptr | [uint64](#uint64) | optional |  |
| allocation_id | [int64](#int64) | optional |  |
| allocator_name | [string](#string) | optional |  |


<a name="tensorflow.MemoryLogRawDeallocation"/>
### MemoryLogRawDeallocation


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step_id | [int64](#int64) | optional |  |
| operation | [string](#string) | optional |  |
| allocation_id | [int64](#int64) | optional |  |
| allocator_name | [string](#string) | optional |  |
| deferred | [bool](#bool) | optional |  |


<a name="tensorflow.MemoryLogStep"/>
### MemoryLogStep


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step_id | [int64](#int64) | optional |  |
| handle | [string](#string) | optional |  |


<a name="tensorflow.MemoryLogTensorAllocation"/>
### MemoryLogTensorAllocation


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step_id | [int64](#int64) | optional |  |
| kernel_name | [string](#string) | optional |  |
| tensor | [TensorDescription](#tensorflow.TensorDescription) | optional |  |


<a name="tensorflow.MemoryLogTensorDeallocation"/>
### MemoryLogTensorDeallocation


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allocation_id | [int64](#int64) | optional |  |
| allocator_name | [string](#string) | optional |  |


<a name="tensorflow.MemoryLogTensorOutput"/>
### MemoryLogTensorOutput


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step_id | [int64](#int64) | optional |  |
| kernel_name | [string](#string) | optional |  |
| index | [int32](#int32) | optional |  |
| tensor | [TensorDescription](#tensorflow.TensorDescription) | optional |  |







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
