# Protocol Documentation
<a name="top"/>

## Table of Contents
* [control_flow.proto](#control_flow.proto)
 * [CondContextDef](#tensorflow.CondContextDef)
 * [ValuesDef](#tensorflow.ValuesDef)
 * [ValuesDef.ExternalValuesEntry](#tensorflow.ValuesDef.ExternalValuesEntry)
 * [WhileContextDef](#tensorflow.WhileContextDef)
* [Scalar Value Types](#scalar-value-types)

<a name="control_flow.proto"/>
<p align="right"><a href="#top">Top</a></p>

## control_flow.proto



<a name="tensorflow.CondContextDef"/>
### CondContextDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context_name | [string](#string) | optional |  |
| pred_name | [string](#string) | optional |  |
| pivot_name | [string](#string) | optional |  |
| branch | [int32](#int32) | optional |  |
| values_def | [ValuesDef](#tensorflow.ValuesDef) | optional |  |


<a name="tensorflow.ValuesDef"/>
### ValuesDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [string](#string) | repeated |  |
| external_values | [ValuesDef.ExternalValuesEntry](#tensorflow.ValuesDef.ExternalValuesEntry) | repeated |  |


<a name="tensorflow.ValuesDef.ExternalValuesEntry"/>
### ValuesDef.ExternalValuesEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |


<a name="tensorflow.WhileContextDef"/>
### WhileContextDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context_name | [string](#string) | optional |  |
| parallel_iterations | [int32](#int32) | optional |  |
| back_prop | [bool](#bool) | optional |  |
| swap_memory | [bool](#bool) | optional |  |
| pivot_name | [string](#string) | optional |  |
| pivot_for_pred_name | [string](#string) | optional |  |
| pivot_for_body_name | [string](#string) | optional |  |
| loop_exit_names | [string](#string) | repeated |  |
| values_def | [ValuesDef](#tensorflow.ValuesDef) | optional |  |







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
