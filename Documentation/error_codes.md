# Protocol Documentation
<a name="top"/>

## Table of Contents
* [error_codes.proto](#error_codes.proto)
 * [Code](#tensorflow.error.Code)
* [Scalar Value Types](#scalar-value-types)

<a name="error_codes.proto"/>
<p align="right"><a href="#top">Top</a></p>

## error_codes.proto




<a name="tensorflow.error.Code"/>
### Code


| Name | Number | Description |
| ---- | ------ | ----------- |
| OK | 0 |  |
| CANCELLED | 1 |  |
| UNKNOWN | 2 |  |
| INVALID_ARGUMENT | 3 |  |
| DEADLINE_EXCEEDED | 4 |  |
| NOT_FOUND | 5 |  |
| ALREADY_EXISTS | 6 |  |
| PERMISSION_DENIED | 7 |  |
| UNAUTHENTICATED | 16 |  |
| RESOURCE_EXHAUSTED | 8 |  |
| FAILED_PRECONDITION | 9 |  |
| ABORTED | 10 |  |
| OUT_OF_RANGE | 11 |  |
| UNIMPLEMENTED | 12 |  |
| INTERNAL | 13 |  |
| UNAVAILABLE | 14 |  |
| DATA_LOSS | 15 |  |
| DO_NOT_USE_RESERVED_FOR_FUTURE_EXPANSION_USE_DEFAULT_IN_SWITCH_INSTEAD_ | 20 |  |





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
