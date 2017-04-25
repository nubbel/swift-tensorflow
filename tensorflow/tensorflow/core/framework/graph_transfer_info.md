# Protocol Documentation
<a name="top"/>

## Table of Contents
* [graph_transfer_info.proto](#graph_transfer_info.proto)
 * [GraphTransferInfo](#tensorflow.GraphTransferInfo)
 * [GraphTransferInfo.ConstNodeInfo](#tensorflow.GraphTransferInfo.ConstNodeInfo)
 * [GraphTransferInfo.GraphInputNodeInfo](#tensorflow.GraphTransferInfo.GraphInputNodeInfo)
 * [GraphTransferInfo.GraphOutputNodeInfo](#tensorflow.GraphTransferInfo.GraphOutputNodeInfo)
 * [GraphTransferInfo.NodeInfo](#tensorflow.GraphTransferInfo.NodeInfo)
 * [GraphTransferInfo.NodeInput](#tensorflow.GraphTransferInfo.NodeInput)
 * [GraphTransferInfo.NodeInputInfo](#tensorflow.GraphTransferInfo.NodeInputInfo)
 * [GraphTransferInfo.NodeOutputInfo](#tensorflow.GraphTransferInfo.NodeOutputInfo)
 * [GraphTransferInfo.Destination](#tensorflow.GraphTransferInfo.Destination)
* [Scalar Value Types](#scalar-value-types)

<a name="graph_transfer_info.proto"/>
<p align="right"><a href="#top">Top</a></p>

## graph_transfer_info.proto



<a name="tensorflow.GraphTransferInfo"/>
### GraphTransferInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_info | [GraphTransferInfo.NodeInfo](#tensorflow.GraphTransferInfo.NodeInfo) | repeated |  |
| const_node_info | [GraphTransferInfo.ConstNodeInfo](#tensorflow.GraphTransferInfo.ConstNodeInfo) | repeated |  |
| node_input_info | [GraphTransferInfo.NodeInputInfo](#tensorflow.GraphTransferInfo.NodeInputInfo) | repeated |  |
| node_output_info | [GraphTransferInfo.NodeOutputInfo](#tensorflow.GraphTransferInfo.NodeOutputInfo) | repeated |  |
| graph_input_node_info | [GraphTransferInfo.GraphInputNodeInfo](#tensorflow.GraphTransferInfo.GraphInputNodeInfo) | repeated |  |
| graph_output_node_info | [GraphTransferInfo.GraphOutputNodeInfo](#tensorflow.GraphTransferInfo.GraphOutputNodeInfo) | repeated |  |
| destination | [GraphTransferInfo.Destination](#tensorflow.GraphTransferInfo.Destination) | optional |  |


<a name="tensorflow.GraphTransferInfo.ConstNodeInfo"/>
### GraphTransferInfo.ConstNodeInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| node_id | [int32](#int32) | optional |  |
| shape | [int64](#int64) | repeated |  |
| data | [bytes](#bytes) | optional |  |
| dtype | [DataType](#tensorflow.DataType) | optional |  |


<a name="tensorflow.GraphTransferInfo.GraphInputNodeInfo"/>
### GraphTransferInfo.GraphInputNodeInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| shape | [int64](#int64) | repeated |  |
| dtype | [DataType](#tensorflow.DataType) | optional |  |


<a name="tensorflow.GraphTransferInfo.GraphOutputNodeInfo"/>
### GraphTransferInfo.GraphOutputNodeInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| shape | [int64](#int64) | repeated |  |
| dtype | [DataType](#tensorflow.DataType) | optional |  |


<a name="tensorflow.GraphTransferInfo.NodeInfo"/>
### GraphTransferInfo.NodeInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| node_id | [int32](#int32) | optional |  |
| type_name | [string](#string) | optional |  |
| soc_op_id | [int32](#int32) | optional |  |
| padding_id | [int32](#int32) | optional |  |
| input_count | [int32](#int32) | optional |  |
| output_count | [int32](#int32) | optional |  |


<a name="tensorflow.GraphTransferInfo.NodeInput"/>
### GraphTransferInfo.NodeInput


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_id | [int32](#int32) | optional |  |
| output_port | [int32](#int32) | optional |  |


<a name="tensorflow.GraphTransferInfo.NodeInputInfo"/>
### GraphTransferInfo.NodeInputInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_id | [int32](#int32) | optional |  |
| node_input | [GraphTransferInfo.NodeInput](#tensorflow.GraphTransferInfo.NodeInput) | repeated |  |


<a name="tensorflow.GraphTransferInfo.NodeOutputInfo"/>
### GraphTransferInfo.NodeOutputInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_id | [int32](#int32) | optional |  |
| max_byte_size | [int32](#int32) | repeated |  |



<a name="tensorflow.GraphTransferInfo.Destination"/>
### GraphTransferInfo.Destination


| Name | Number | Description |
| ---- | ------ | ----------- |
| NOP | 0 |  |
| HEXAGON | 1 |  |





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
