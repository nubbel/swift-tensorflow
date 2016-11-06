# Protocol Documentation
<a name="top"/>

## Table of Contents
* [attr_value.proto](#attr_value.proto)
 * [AttrValue](#tensorflow.AttrValue)
 * [AttrValue.ListValue](#tensorflow.AttrValue.ListValue)
 * [NameAttrList](#tensorflow.NameAttrList)
 * [NameAttrList.AttrEntry](#tensorflow.NameAttrList.AttrEntry)
* [Scalar Value Types](#scalar-value-types)

<a name="attr_value.proto"/>
<p align="right"><a href="#top">Top</a></p>

## attr_value.proto



<a name="tensorflow.AttrValue"/>
### AttrValue


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| s | [bytes](#bytes) | optional |  |
| i | [int64](#int64) | optional |  |
| f | [float](#float) | optional |  |
| b | [bool](#bool) | optional |  |
| type | [DataType](#tensorflow.DataType) | optional |  |
| shape | [TensorShapeProto](#tensorflow.TensorShapeProto) | optional |  |
| tensor | [TensorProto](#tensorflow.TensorProto) | optional |  |
| list | [AttrValue.ListValue](#tensorflow.AttrValue.ListValue) | optional |  |
| func | [NameAttrList](#tensorflow.NameAttrList) | optional |  |
| placeholder | [string](#string) | optional |  |


<a name="tensorflow.AttrValue.ListValue"/>
### AttrValue.ListValue


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| s | [bytes](#bytes) | repeated |  |
| i | [int64](#int64) | repeated |  |
| f | [float](#float) | repeated |  |
| b | [bool](#bool) | repeated |  |
| type | [DataType](#tensorflow.DataType) | repeated |  |
| shape | [TensorShapeProto](#tensorflow.TensorShapeProto) | repeated |  |
| tensor | [TensorProto](#tensorflow.TensorProto) | repeated |  |


<a name="tensorflow.NameAttrList"/>
### NameAttrList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| attr | [NameAttrList.AttrEntry](#tensorflow.NameAttrList.AttrEntry) | repeated |  |


<a name="tensorflow.NameAttrList.AttrEntry"/>
### NameAttrList.AttrEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [AttrValue](#tensorflow.AttrValue) | optional |  |







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
