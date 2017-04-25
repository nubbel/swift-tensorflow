# Protocol Documentation
<a name="top"/>

## Table of Contents
* [saved_tensor_slice.proto](#saved_tensor_slice.proto)
 * [SavedSlice](#tensorflow.SavedSlice)
 * [SavedSliceMeta](#tensorflow.SavedSliceMeta)
 * [SavedTensorSliceMeta](#tensorflow.SavedTensorSliceMeta)
 * [SavedTensorSlices](#tensorflow.SavedTensorSlices)
* [Scalar Value Types](#scalar-value-types)

<a name="saved_tensor_slice.proto"/>
<p align="right"><a href="#top">Top</a></p>

## saved_tensor_slice.proto



<a name="tensorflow.SavedSlice"/>
### SavedSlice


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| slice | [TensorSliceProto](#tensorflow.TensorSliceProto) | optional |  |
| data | [TensorProto](#tensorflow.TensorProto) | optional |  |


<a name="tensorflow.SavedSliceMeta"/>
### SavedSliceMeta


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| shape | [TensorShapeProto](#tensorflow.TensorShapeProto) | optional |  |
| type | [DataType](#tensorflow.DataType) | optional |  |
| slice | [TensorSliceProto](#tensorflow.TensorSliceProto) | repeated |  |


<a name="tensorflow.SavedTensorSliceMeta"/>
### SavedTensorSliceMeta


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tensor | [SavedSliceMeta](#tensorflow.SavedSliceMeta) | repeated |  |
| versions | [VersionDef](#tensorflow.VersionDef) | optional |  |


<a name="tensorflow.SavedTensorSlices"/>
### SavedTensorSlices


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| meta | [SavedTensorSliceMeta](#tensorflow.SavedTensorSliceMeta) | optional |  |
| data | [SavedSlice](#tensorflow.SavedSlice) | optional |  |







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
