# Protocol Documentation
<a name="top"/>

## Table of Contents
* [meta_graph.proto](#meta_graph.proto)
 * [AssetFileDef](#tensorflow.AssetFileDef)
 * [CollectionDef](#tensorflow.CollectionDef)
 * [CollectionDef.AnyList](#tensorflow.CollectionDef.AnyList)
 * [CollectionDef.BytesList](#tensorflow.CollectionDef.BytesList)
 * [CollectionDef.FloatList](#tensorflow.CollectionDef.FloatList)
 * [CollectionDef.Int64List](#tensorflow.CollectionDef.Int64List)
 * [CollectionDef.NodeList](#tensorflow.CollectionDef.NodeList)
 * [MetaGraphDef](#tensorflow.MetaGraphDef)
 * [MetaGraphDef.CollectionDefEntry](#tensorflow.MetaGraphDef.CollectionDefEntry)
 * [MetaGraphDef.MetaInfoDef](#tensorflow.MetaGraphDef.MetaInfoDef)
 * [MetaGraphDef.SignatureDefEntry](#tensorflow.MetaGraphDef.SignatureDefEntry)
 * [SignatureDef](#tensorflow.SignatureDef)
 * [SignatureDef.InputsEntry](#tensorflow.SignatureDef.InputsEntry)
 * [SignatureDef.OutputsEntry](#tensorflow.SignatureDef.OutputsEntry)
 * [TensorInfo](#tensorflow.TensorInfo)
* [Scalar Value Types](#scalar-value-types)

<a name="meta_graph.proto"/>
<p align="right"><a href="#top">Top</a></p>

## meta_graph.proto



<a name="tensorflow.AssetFileDef"/>
### AssetFileDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tensor_info | [TensorInfo](#tensorflow.TensorInfo) | optional |  |
| filename | [string](#string) | optional |  |


<a name="tensorflow.CollectionDef"/>
### CollectionDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_list | [CollectionDef.NodeList](#tensorflow.CollectionDef.NodeList) | optional |  |
| bytes_list | [CollectionDef.BytesList](#tensorflow.CollectionDef.BytesList) | optional |  |
| int64_list | [CollectionDef.Int64List](#tensorflow.CollectionDef.Int64List) | optional |  |
| float_list | [CollectionDef.FloatList](#tensorflow.CollectionDef.FloatList) | optional |  |
| any_list | [CollectionDef.AnyList](#tensorflow.CollectionDef.AnyList) | optional |  |


<a name="tensorflow.CollectionDef.AnyList"/>
### CollectionDef.AnyList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [Any](#google.protobuf.Any) | repeated |  |


<a name="tensorflow.CollectionDef.BytesList"/>
### CollectionDef.BytesList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [bytes](#bytes) | repeated |  |


<a name="tensorflow.CollectionDef.FloatList"/>
### CollectionDef.FloatList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [float](#float) | repeated |  |


<a name="tensorflow.CollectionDef.Int64List"/>
### CollectionDef.Int64List


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [int64](#int64) | repeated |  |


<a name="tensorflow.CollectionDef.NodeList"/>
### CollectionDef.NodeList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [string](#string) | repeated |  |


<a name="tensorflow.MetaGraphDef"/>
### MetaGraphDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| meta_info_def | [MetaGraphDef.MetaInfoDef](#tensorflow.MetaGraphDef.MetaInfoDef) | optional |  |
| graph_def | [GraphDef](#tensorflow.GraphDef) | optional |  |
| saver_def | [SaverDef](#tensorflow.SaverDef) | optional |  |
| collection_def | [MetaGraphDef.CollectionDefEntry](#tensorflow.MetaGraphDef.CollectionDefEntry) | repeated |  |
| signature_def | [MetaGraphDef.SignatureDefEntry](#tensorflow.MetaGraphDef.SignatureDefEntry) | repeated |  |
| asset_file_def | [AssetFileDef](#tensorflow.AssetFileDef) | repeated |  |


<a name="tensorflow.MetaGraphDef.CollectionDefEntry"/>
### MetaGraphDef.CollectionDefEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [CollectionDef](#tensorflow.CollectionDef) | optional |  |


<a name="tensorflow.MetaGraphDef.MetaInfoDef"/>
### MetaGraphDef.MetaInfoDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| meta_graph_version | [string](#string) | optional |  |
| stripped_op_list | [OpList](#tensorflow.OpList) | optional |  |
| any_info | [Any](#google.protobuf.Any) | optional |  |
| tags | [string](#string) | repeated |  |
| tensorflow_version | [string](#string) | optional |  |
| tensorflow_git_version | [string](#string) | optional |  |


<a name="tensorflow.MetaGraphDef.SignatureDefEntry"/>
### MetaGraphDef.SignatureDefEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [SignatureDef](#tensorflow.SignatureDef) | optional |  |


<a name="tensorflow.SignatureDef"/>
### SignatureDef


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inputs | [SignatureDef.InputsEntry](#tensorflow.SignatureDef.InputsEntry) | repeated |  |
| outputs | [SignatureDef.OutputsEntry](#tensorflow.SignatureDef.OutputsEntry) | repeated |  |
| method_name | [string](#string) | optional |  |


<a name="tensorflow.SignatureDef.InputsEntry"/>
### SignatureDef.InputsEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [TensorInfo](#tensorflow.TensorInfo) | optional |  |


<a name="tensorflow.SignatureDef.OutputsEntry"/>
### SignatureDef.OutputsEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [TensorInfo](#tensorflow.TensorInfo) | optional |  |


<a name="tensorflow.TensorInfo"/>
### TensorInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| dtype | [DataType](#tensorflow.DataType) | optional |  |
| tensor_shape | [TensorShapeProto](#tensorflow.TensorShapeProto) | optional |  |







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
