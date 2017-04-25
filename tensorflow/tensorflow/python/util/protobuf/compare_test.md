# Protocol Documentation
<a name="top"/>

## Table of Contents
* [compare_test.proto](#compare_test.proto)
 * [Labeled](#compare_test.Labeled)
 * [Large](#compare_test.Large)
 * [Medium](#compare_test.Medium)
 * [Medium.GroupA](#compare_test.Medium.GroupA)
 * [Medium.GroupA.GroupB](#compare_test.Medium.GroupA.GroupB)
 * [Small](#compare_test.Small)
 * [WithMap](#compare_test.WithMap)
 * [WithMap.ValueMessageEntry](#compare_test.WithMap.ValueMessageEntry)
 * [WithMap.ValueStringEntry](#compare_test.WithMap.ValueStringEntry)
 * [Enum](#compare_test.Enum)
* [Scalar Value Types](#scalar-value-types)

<a name="compare_test.proto"/>
<p align="right"><a href="#top">Top</a></p>

## compare_test.proto



<a name="compare_test.Labeled"/>
### Labeled


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| required | [int32](#int32) | required |  |
| optional | [int32](#int32) | optional |  |


<a name="compare_test.Large"/>
### Large


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_ | [string](#string) | optional |  |
| int64_ | [int64](#int64) | optional |  |
| float_ | [float](#float) | optional |  |
| bool_ | [bool](#bool) | optional |  |
| enum_ | [Enum](#compare_test.Enum) | optional |  |
| int64s | [int64](#int64) | repeated |  |
| medium | [Medium](#compare_test.Medium) | optional |  |
| small | [Small](#compare_test.Small) | optional |  |
| double_ | [double](#double) | optional |  |
| with_map | [WithMap](#compare_test.WithMap) | optional |  |


<a name="compare_test.Medium"/>
### Medium


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| int32s | [int32](#int32) | repeated |  |
| smalls | [Small](#compare_test.Small) | repeated |  |
| groupa | [Medium.GroupA](#compare_test.Medium.GroupA) | repeated |  |
| floats | [float](#float) | repeated |  |


<a name="compare_test.Medium.GroupA"/>
### Medium.GroupA


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupb | [Medium.GroupA.GroupB](#compare_test.Medium.GroupA.GroupB) | repeated |  |


<a name="compare_test.Medium.GroupA.GroupB"/>
### Medium.GroupA.GroupB


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| strings | [string](#string) | required |  |


<a name="compare_test.Small"/>
### Small


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| strings | [string](#string) | repeated |  |


<a name="compare_test.WithMap"/>
### WithMap


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value_message | [WithMap.ValueMessageEntry](#compare_test.WithMap.ValueMessageEntry) | repeated |  |
| value_string | [WithMap.ValueStringEntry](#compare_test.WithMap.ValueStringEntry) | repeated |  |


<a name="compare_test.WithMap.ValueMessageEntry"/>
### WithMap.ValueMessageEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [int32](#int32) | optional |  |
| value | [Small](#compare_test.Small) | optional |  |


<a name="compare_test.WithMap.ValueStringEntry"/>
### WithMap.ValueStringEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |



<a name="compare_test.Enum"/>
### Enum


| Name | Number | Description |
| ---- | ------ | ----------- |
| A | 0 |  |
| B | 1 |  |
| C | 2 |  |





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
