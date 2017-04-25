# Protocol Documentation
<a name="top"/>

## Table of Contents
* [test.proto](#test.proto)
 * [ForeignMessage](#tensorflow.test.ForeignMessage)
 * [NestedTestAllTypes](#tensorflow.test.NestedTestAllTypes)
 * [NestedTestAllTypes.MapStringToInt64Entry](#tensorflow.test.NestedTestAllTypes.MapStringToInt64Entry)
 * [TestAllTypes](#tensorflow.test.TestAllTypes)
 * [TestAllTypes.AnotherMapStringToMessageEntry](#tensorflow.test.TestAllTypes.AnotherMapStringToMessageEntry)
 * [TestAllTypes.MapBoolToMessageEntry](#tensorflow.test.TestAllTypes.MapBoolToMessageEntry)
 * [TestAllTypes.MapInt32ToMessageEntry](#tensorflow.test.TestAllTypes.MapInt32ToMessageEntry)
 * [TestAllTypes.MapInt64ToMessageEntry](#tensorflow.test.TestAllTypes.MapInt64ToMessageEntry)
 * [TestAllTypes.MapInt64ToStringEntry](#tensorflow.test.TestAllTypes.MapInt64ToStringEntry)
 * [TestAllTypes.MapStringToInt64Entry](#tensorflow.test.TestAllTypes.MapStringToInt64Entry)
 * [TestAllTypes.MapStringToMessageEntry](#tensorflow.test.TestAllTypes.MapStringToMessageEntry)
 * [TestAllTypes.NestedMessage](#tensorflow.test.TestAllTypes.NestedMessage)
 * [TestAllTypes.NestedMessage.DoubleNestedMessage](#tensorflow.test.TestAllTypes.NestedMessage.DoubleNestedMessage)
 * [TestEmptyMessage](#tensorflow.test.TestEmptyMessage)
 * [ForeignEnum](#tensorflow.test.ForeignEnum)
 * [TestAllTypes.NestedEnum](#tensorflow.test.TestAllTypes.NestedEnum)
* [Scalar Value Types](#scalar-value-types)

<a name="test.proto"/>
<p align="right"><a href="#top">Top</a></p>

## test.proto



<a name="tensorflow.test.ForeignMessage"/>
### ForeignMessage


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| c | [int32](#int32) | optional |  |


<a name="tensorflow.test.NestedTestAllTypes"/>
### NestedTestAllTypes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| child | [NestedTestAllTypes](#tensorflow.test.NestedTestAllTypes) | optional |  |
| payload | [TestAllTypes](#tensorflow.test.TestAllTypes) | optional |  |
| map_string_to_int64 | [NestedTestAllTypes.MapStringToInt64Entry](#tensorflow.test.NestedTestAllTypes.MapStringToInt64Entry) | repeated |  |


<a name="tensorflow.test.NestedTestAllTypes.MapStringToInt64Entry"/>
### NestedTestAllTypes.MapStringToInt64Entry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [int64](#int64) | optional |  |


<a name="tensorflow.test.TestAllTypes"/>
### TestAllTypes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| optional_int32 | [int32](#int32) | optional |  |
| optional_int64 | [int64](#int64) | optional |  |
| optional_uint32 | [uint32](#uint32) | optional |  |
| optional_uint64 | [uint64](#uint64) | optional |  |
| optional_sint32 | [sint32](#sint32) | optional |  |
| optional_sint64 | [sint64](#sint64) | optional |  |
| optional_fixed32 | [fixed32](#fixed32) | optional |  |
| optional_fixed64 | [fixed64](#fixed64) | optional |  |
| optional_sfixed32 | [sfixed32](#sfixed32) | optional |  |
| optional_sfixed64 | [sfixed64](#sfixed64) | optional |  |
| optional_float | [float](#float) | optional |  |
| optional_double | [double](#double) | optional |  |
| optional_bool | [bool](#bool) | optional |  |
| optional_string | [string](#string) | optional |  |
| optional_bytes | [bytes](#bytes) | optional |  |
| optional_nested_message | [TestAllTypes.NestedMessage](#tensorflow.test.TestAllTypes.NestedMessage) | optional |  |
| optional_foreign_message | [ForeignMessage](#tensorflow.test.ForeignMessage) | optional |  |
| optional_nested_enum | [TestAllTypes.NestedEnum](#tensorflow.test.TestAllTypes.NestedEnum) | optional |  |
| optional_foreign_enum | [ForeignEnum](#tensorflow.test.ForeignEnum) | optional |  |
| optional_cord | [string](#string) | optional |  |
| repeated_int32 | [int32](#int32) | repeated |  |
| repeated_int64 | [int64](#int64) | repeated |  |
| repeated_uint32 | [uint32](#uint32) | repeated |  |
| repeated_uint64 | [uint64](#uint64) | repeated |  |
| repeated_sint32 | [sint32](#sint32) | repeated |  |
| repeated_sint64 | [sint64](#sint64) | repeated |  |
| repeated_fixed32 | [fixed32](#fixed32) | repeated |  |
| repeated_fixed64 | [fixed64](#fixed64) | repeated |  |
| repeated_sfixed32 | [sfixed32](#sfixed32) | repeated |  |
| repeated_sfixed64 | [sfixed64](#sfixed64) | repeated |  |
| repeated_float | [float](#float) | repeated |  |
| repeated_double | [double](#double) | repeated |  |
| repeated_bool | [bool](#bool) | repeated |  |
| repeated_string | [string](#string) | repeated |  |
| repeated_bytes | [bytes](#bytes) | repeated |  |
| repeated_nested_message | [TestAllTypes.NestedMessage](#tensorflow.test.TestAllTypes.NestedMessage) | repeated |  |
| repeated_nested_enum | [TestAllTypes.NestedEnum](#tensorflow.test.TestAllTypes.NestedEnum) | repeated |  |
| repeated_cord | [string](#string) | repeated |  |
| oneof_uint32 | [uint32](#uint32) | optional |  |
| oneof_nested_message | [TestAllTypes.NestedMessage](#tensorflow.test.TestAllTypes.NestedMessage) | optional |  |
| oneof_string | [string](#string) | optional |  |
| oneof_bytes | [bytes](#bytes) | optional |  |
| oneof_enum | [TestAllTypes.NestedEnum](#tensorflow.test.TestAllTypes.NestedEnum) | optional |  |
| map_string_to_message | [TestAllTypes.MapStringToMessageEntry](#tensorflow.test.TestAllTypes.MapStringToMessageEntry) | repeated |  |
| map_int32_to_message | [TestAllTypes.MapInt32ToMessageEntry](#tensorflow.test.TestAllTypes.MapInt32ToMessageEntry) | repeated |  |
| map_int64_to_message | [TestAllTypes.MapInt64ToMessageEntry](#tensorflow.test.TestAllTypes.MapInt64ToMessageEntry) | repeated |  |
| map_bool_to_message | [TestAllTypes.MapBoolToMessageEntry](#tensorflow.test.TestAllTypes.MapBoolToMessageEntry) | repeated |  |
| map_string_to_int64 | [TestAllTypes.MapStringToInt64Entry](#tensorflow.test.TestAllTypes.MapStringToInt64Entry) | repeated |  |
| map_int64_to_string | [TestAllTypes.MapInt64ToStringEntry](#tensorflow.test.TestAllTypes.MapInt64ToStringEntry) | repeated |  |
| another_map_string_to_message | [TestAllTypes.AnotherMapStringToMessageEntry](#tensorflow.test.TestAllTypes.AnotherMapStringToMessageEntry) | repeated |  |
| packed_repeated_int64 | [int64](#int64) | repeated |  |


<a name="tensorflow.test.TestAllTypes.AnotherMapStringToMessageEntry"/>
### TestAllTypes.AnotherMapStringToMessageEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [TestAllTypes.NestedMessage](#tensorflow.test.TestAllTypes.NestedMessage) | optional |  |


<a name="tensorflow.test.TestAllTypes.MapBoolToMessageEntry"/>
### TestAllTypes.MapBoolToMessageEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bool](#bool) | optional |  |
| value | [TestAllTypes.NestedMessage](#tensorflow.test.TestAllTypes.NestedMessage) | optional |  |


<a name="tensorflow.test.TestAllTypes.MapInt32ToMessageEntry"/>
### TestAllTypes.MapInt32ToMessageEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [int32](#int32) | optional |  |
| value | [TestAllTypes.NestedMessage](#tensorflow.test.TestAllTypes.NestedMessage) | optional |  |


<a name="tensorflow.test.TestAllTypes.MapInt64ToMessageEntry"/>
### TestAllTypes.MapInt64ToMessageEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [int64](#int64) | optional |  |
| value | [TestAllTypes.NestedMessage](#tensorflow.test.TestAllTypes.NestedMessage) | optional |  |


<a name="tensorflow.test.TestAllTypes.MapInt64ToStringEntry"/>
### TestAllTypes.MapInt64ToStringEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [int64](#int64) | optional |  |
| value | [string](#string) | optional |  |


<a name="tensorflow.test.TestAllTypes.MapStringToInt64Entry"/>
### TestAllTypes.MapStringToInt64Entry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [int64](#int64) | optional |  |


<a name="tensorflow.test.TestAllTypes.MapStringToMessageEntry"/>
### TestAllTypes.MapStringToMessageEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [TestAllTypes.NestedMessage](#tensorflow.test.TestAllTypes.NestedMessage) | optional |  |


<a name="tensorflow.test.TestAllTypes.NestedMessage"/>
### TestAllTypes.NestedMessage


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| optional_int32 | [int32](#int32) | optional |  |
| repeated_int32 | [int32](#int32) | repeated |  |
| msg | [TestAllTypes.NestedMessage.DoubleNestedMessage](#tensorflow.test.TestAllTypes.NestedMessage.DoubleNestedMessage) | optional |  |
| optional_int64 | [int64](#int64) | optional |  |


<a name="tensorflow.test.TestAllTypes.NestedMessage.DoubleNestedMessage"/>
### TestAllTypes.NestedMessage.DoubleNestedMessage


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| optional_string | [string](#string) | optional |  |


<a name="tensorflow.test.TestEmptyMessage"/>
### TestEmptyMessage


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |



<a name="tensorflow.test.ForeignEnum"/>
### ForeignEnum


| Name | Number | Description |
| ---- | ------ | ----------- |
| FOREIGN_ZERO | 0 |  |
| FOREIGN_FOO | 4 |  |
| FOREIGN_BAR | 5 |  |
| FOREIGN_BAZ | 6 |  |

<a name="tensorflow.test.TestAllTypes.NestedEnum"/>
### TestAllTypes.NestedEnum


| Name | Number | Description |
| ---- | ------ | ----------- |
| ZERO | 0 |  |
| FOO | 1 |  |
| BAR | 2 |  |
| BAZ | 3 |  |
| NEG | -1 |  |





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
