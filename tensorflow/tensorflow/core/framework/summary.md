# Protocol Documentation
<a name="top"/>

## Table of Contents
* [summary.proto](#summary.proto)
 * [HistogramProto](#tensorflow.HistogramProto)
 * [Summary](#tensorflow.Summary)
 * [Summary.Audio](#tensorflow.Summary.Audio)
 * [Summary.Image](#tensorflow.Summary.Image)
 * [Summary.Value](#tensorflow.Summary.Value)
 * [SummaryDescription](#tensorflow.SummaryDescription)
* [Scalar Value Types](#scalar-value-types)

<a name="summary.proto"/>
<p align="right"><a href="#top">Top</a></p>

## summary.proto



<a name="tensorflow.HistogramProto"/>
### HistogramProto


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min | [double](#double) | optional |  |
| max | [double](#double) | optional |  |
| num | [double](#double) | optional |  |
| sum | [double](#double) | optional |  |
| sum_squares | [double](#double) | optional |  |
| bucket_limit | [double](#double) | repeated |  |
| bucket | [double](#double) | repeated |  |


<a name="tensorflow.Summary"/>
### Summary


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [Summary.Value](#tensorflow.Summary.Value) | repeated |  |


<a name="tensorflow.Summary.Audio"/>
### Summary.Audio


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sample_rate | [float](#float) | optional |  |
| num_channels | [int64](#int64) | optional |  |
| length_frames | [int64](#int64) | optional |  |
| encoded_audio_string | [bytes](#bytes) | optional |  |
| content_type | [string](#string) | optional |  |


<a name="tensorflow.Summary.Image"/>
### Summary.Image


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int32](#int32) | optional |  |
| width | [int32](#int32) | optional |  |
| colorspace | [int32](#int32) | optional |  |
| encoded_image_string | [bytes](#bytes) | optional |  |


<a name="tensorflow.Summary.Value"/>
### Summary.Value


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_name | [string](#string) | optional |  |
| tag | [string](#string) | optional |  |
| simple_value | [float](#float) | optional |  |
| obsolete_old_style_histogram | [bytes](#bytes) | optional |  |
| image | [Summary.Image](#tensorflow.Summary.Image) | optional |  |
| histo | [HistogramProto](#tensorflow.HistogramProto) | optional |  |
| audio | [Summary.Audio](#tensorflow.Summary.Audio) | optional |  |
| tensor | [TensorProto](#tensorflow.TensorProto) | optional |  |


<a name="tensorflow.SummaryDescription"/>
### SummaryDescription


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type_hint | [string](#string) | optional |  |







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
