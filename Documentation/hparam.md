# Protocol Documentation
<a name="top"/>

## Table of Contents
* [hparam.proto](#hparam.proto)
 * [HParamDef](#tensorflow.HParamDef)
 * [HParamDef.BoolList](#tensorflow.HParamDef.BoolList)
 * [HParamDef.BytesList](#tensorflow.HParamDef.BytesList)
 * [HParamDef.FloatList](#tensorflow.HParamDef.FloatList)
 * [HParamDef.HParamType](#tensorflow.HParamDef.HParamType)
 * [HParamDef.HparamEntry](#tensorflow.HParamDef.HparamEntry)
 * [HParamDef.Int64List](#tensorflow.HParamDef.Int64List)
* [Scalar Value Types](#scalar-value-types)

<a name="hparam.proto"/>
<p align="right"><a href="#top">Top</a></p>

## hparam.proto



<a name="tensorflow.HParamDef"/>
### HParamDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hparam | [HParamDef.HparamEntry](#tensorflow.HParamDef.HparamEntry) | repeated |  |


<a name="tensorflow.HParamDef.BoolList"/>
### HParamDef.BoolList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [bool](#bool) | repeated |  |


<a name="tensorflow.HParamDef.BytesList"/>
### HParamDef.BytesList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [bytes](#bytes) | repeated |  |


<a name="tensorflow.HParamDef.FloatList"/>
### HParamDef.FloatList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [float](#float) | repeated |  |


<a name="tensorflow.HParamDef.HParamType"/>
### HParamDef.HParamType


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| int64_value | [int64](#int64) | optional |  |
| float_value | [float](#float) | optional |  |
| bytes_value | [bytes](#bytes) | optional |  |
| bool_value | [bool](#bool) | optional |  |
| int64_list | [HParamDef.Int64List](#tensorflow.HParamDef.Int64List) | optional |  |
| float_list | [HParamDef.FloatList](#tensorflow.HParamDef.FloatList) | optional |  |
| bytes_list | [HParamDef.BytesList](#tensorflow.HParamDef.BytesList) | optional |  |
| bool_list | [HParamDef.BoolList](#tensorflow.HParamDef.BoolList) | optional |  |


<a name="tensorflow.HParamDef.HparamEntry"/>
### HParamDef.HparamEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [HParamDef.HParamType](#tensorflow.HParamDef.HParamType) | optional |  |


<a name="tensorflow.HParamDef.Int64List"/>
### HParamDef.Int64List


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [int64](#int64) | repeated |  |







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
