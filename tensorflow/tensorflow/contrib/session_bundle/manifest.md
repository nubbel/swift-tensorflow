# Protocol Documentation
<a name="top"/>

## Table of Contents
* [manifest.proto](#manifest.proto)
 * [AssetFile](#tensorflow.serving.AssetFile)
 * [ClassificationSignature](#tensorflow.serving.ClassificationSignature)
 * [GenericSignature](#tensorflow.serving.GenericSignature)
 * [GenericSignature.MapEntry](#tensorflow.serving.GenericSignature.MapEntry)
 * [RegressionSignature](#tensorflow.serving.RegressionSignature)
 * [Signature](#tensorflow.serving.Signature)
 * [Signatures](#tensorflow.serving.Signatures)
 * [Signatures.NamedSignaturesEntry](#tensorflow.serving.Signatures.NamedSignaturesEntry)
 * [TensorBinding](#tensorflow.serving.TensorBinding)
* [Scalar Value Types](#scalar-value-types)

<a name="manifest.proto"/>
<p align="right"><a href="#top">Top</a></p>

## manifest.proto



<a name="tensorflow.serving.AssetFile"/>
### AssetFile


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tensor_binding | [TensorBinding](#tensorflow.serving.TensorBinding) | optional |  |
| filename | [string](#string) | optional |  |


<a name="tensorflow.serving.ClassificationSignature"/>
### ClassificationSignature


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| input | [TensorBinding](#tensorflow.serving.TensorBinding) | optional |  |
| classes | [TensorBinding](#tensorflow.serving.TensorBinding) | optional |  |
| scores | [TensorBinding](#tensorflow.serving.TensorBinding) | optional |  |


<a name="tensorflow.serving.GenericSignature"/>
### GenericSignature


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| map | [GenericSignature.MapEntry](#tensorflow.serving.GenericSignature.MapEntry) | repeated |  |


<a name="tensorflow.serving.GenericSignature.MapEntry"/>
### GenericSignature.MapEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [TensorBinding](#tensorflow.serving.TensorBinding) | optional |  |


<a name="tensorflow.serving.RegressionSignature"/>
### RegressionSignature


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| input | [TensorBinding](#tensorflow.serving.TensorBinding) | optional |  |
| output | [TensorBinding](#tensorflow.serving.TensorBinding) | optional |  |


<a name="tensorflow.serving.Signature"/>
### Signature


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| regression_signature | [RegressionSignature](#tensorflow.serving.RegressionSignature) | optional |  |
| classification_signature | [ClassificationSignature](#tensorflow.serving.ClassificationSignature) | optional |  |
| generic_signature | [GenericSignature](#tensorflow.serving.GenericSignature) | optional |  |


<a name="tensorflow.serving.Signatures"/>
### Signatures


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| default_signature | [Signature](#tensorflow.serving.Signature) | optional |  |
| named_signatures | [Signatures.NamedSignaturesEntry](#tensorflow.serving.Signatures.NamedSignaturesEntry) | repeated |  |


<a name="tensorflow.serving.Signatures.NamedSignaturesEntry"/>
### Signatures.NamedSignaturesEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [Signature](#tensorflow.serving.Signature) | optional |  |


<a name="tensorflow.serving.TensorBinding"/>
### TensorBinding


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tensor_name | [string](#string) | optional |  |







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
