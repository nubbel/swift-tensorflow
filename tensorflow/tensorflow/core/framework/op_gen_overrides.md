# Protocol Documentation
<a name="top"/>

## Table of Contents
* [op_gen_overrides.proto](#op_gen_overrides.proto)
 * [OpGenOverride](#tensorflow.OpGenOverride)
 * [OpGenOverride.AttrDefault](#tensorflow.OpGenOverride.AttrDefault)
 * [OpGenOverride.Rename](#tensorflow.OpGenOverride.Rename)
 * [OpGenOverrides](#tensorflow.OpGenOverrides)
* [Scalar Value Types](#scalar-value-types)

<a name="op_gen_overrides.proto"/>
<p align="right"><a href="#top">Top</a></p>

## op_gen_overrides.proto



<a name="tensorflow.OpGenOverride"/>
### OpGenOverride


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| skip | [bool](#bool) | optional |  |
| hide | [bool](#bool) | optional |  |
| rename_to | [string](#string) | optional |  |
| alias | [string](#string) | repeated |  |
| attr_default | [OpGenOverride.AttrDefault](#tensorflow.OpGenOverride.AttrDefault) | repeated |  |
| attr_rename | [OpGenOverride.Rename](#tensorflow.OpGenOverride.Rename) | repeated |  |
| input_rename | [OpGenOverride.Rename](#tensorflow.OpGenOverride.Rename) | repeated |  |
| output_rename | [OpGenOverride.Rename](#tensorflow.OpGenOverride.Rename) | repeated |  |


<a name="tensorflow.OpGenOverride.AttrDefault"/>
### OpGenOverride.AttrDefault


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| value | [AttrValue](#tensorflow.AttrValue) | optional |  |


<a name="tensorflow.OpGenOverride.Rename"/>
### OpGenOverride.Rename


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from | [string](#string) | optional |  |
| to | [string](#string) | optional |  |


<a name="tensorflow.OpGenOverrides"/>
### OpGenOverrides


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| op | [OpGenOverride](#tensorflow.OpGenOverride) | repeated |  |







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
