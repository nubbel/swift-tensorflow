# Protocol Documentation
<a name="top"/>

## Table of Contents
* [op_def.proto](#op_def.proto)
 * [OpDef](#tensorflow.OpDef)
 * [OpDef.ArgDef](#tensorflow.OpDef.ArgDef)
 * [OpDef.AttrDef](#tensorflow.OpDef.AttrDef)
 * [OpDeprecation](#tensorflow.OpDeprecation)
 * [OpList](#tensorflow.OpList)
* [Scalar Value Types](#scalar-value-types)

<a name="op_def.proto"/>
<p align="right"><a href="#top">Top</a></p>

## op_def.proto



<a name="tensorflow.OpDef"/>
### OpDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| input_arg | [OpDef.ArgDef](#tensorflow.OpDef.ArgDef) | repeated |  |
| output_arg | [OpDef.ArgDef](#tensorflow.OpDef.ArgDef) | repeated |  |
| attr | [OpDef.AttrDef](#tensorflow.OpDef.AttrDef) | repeated |  |
| deprecation | [OpDeprecation](#tensorflow.OpDeprecation) | optional |  |
| summary | [string](#string) | optional |  |
| description | [string](#string) | optional |  |
| is_commutative | [bool](#bool) | optional |  |
| is_aggregate | [bool](#bool) | optional |  |
| is_stateful | [bool](#bool) | optional |  |
| allows_uninitialized_input | [bool](#bool) | optional |  |


<a name="tensorflow.OpDef.ArgDef"/>
### OpDef.ArgDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| description | [string](#string) | optional |  |
| type | [DataType](#tensorflow.DataType) | optional |  |
| type_attr | [string](#string) | optional |  |
| number_attr | [string](#string) | optional |  |
| type_list_attr | [string](#string) | optional |  |
| is_ref | [bool](#bool) | optional |  |


<a name="tensorflow.OpDef.AttrDef"/>
### OpDef.AttrDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| type | [string](#string) | optional |  |
| default_value | [AttrValue](#tensorflow.AttrValue) | optional |  |
| description | [string](#string) | optional |  |
| has_minimum | [bool](#bool) | optional |  |
| minimum | [int64](#int64) | optional |  |
| allowed_values | [AttrValue](#tensorflow.AttrValue) | optional |  |


<a name="tensorflow.OpDeprecation"/>
### OpDeprecation


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [int32](#int32) | optional |  |
| explanation | [string](#string) | optional |  |


<a name="tensorflow.OpList"/>
### OpList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| op | [OpDef](#tensorflow.OpDef) | repeated |  |







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
