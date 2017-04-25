# Protocol Documentation
<a name="top"/>

## Table of Contents
* [graph_explorer.proto](#graph_explorer.proto)
 * [Edge](#graph_explorer.Edge)
 * [Edge.EdgeAttrEntry](#graph_explorer.Edge.EdgeAttrEntry)
 * [Graph](#graph_explorer.Graph)
 * [Graph.EdgeAttrEntry](#graph_explorer.Graph.EdgeAttrEntry)
 * [Graph.GraphAttrEntry](#graph_explorer.Graph.GraphAttrEntry)
 * [Graph.MetanodeAttrEntry](#graph_explorer.Graph.MetanodeAttrEntry)
 * [Graph.NodeAttrEntry](#graph_explorer.Graph.NodeAttrEntry)
 * [Node](#graph_explorer.Node)
 * [Node.MetanodeAttrEntry](#graph_explorer.Node.MetanodeAttrEntry)
 * [Node.NodeAttrEntry](#graph_explorer.Node.NodeAttrEntry)
* [Scalar Value Types](#scalar-value-types)

<a name="graph_explorer.proto"/>
<p align="right"><a href="#top">Top</a></p>

## graph_explorer.proto



<a name="graph_explorer.Edge"/>
### Edge


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source | [string](#string) | optional |  |
| target | [string](#string) | optional |  |
| edge_attr | [Edge.EdgeAttrEntry](#graph_explorer.Edge.EdgeAttrEntry) | repeated |  |


<a name="graph_explorer.Edge.EdgeAttrEntry"/>
### Edge.EdgeAttrEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |


<a name="graph_explorer.Graph"/>
### Graph


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node | [Node](#graph_explorer.Node) | repeated |  |
| edge | [Edge](#graph_explorer.Edge) | repeated |  |
| node_attr | [Graph.NodeAttrEntry](#graph_explorer.Graph.NodeAttrEntry) | repeated |  |
| metanode_attr | [Graph.MetanodeAttrEntry](#graph_explorer.Graph.MetanodeAttrEntry) | repeated |  |
| edge_attr | [Graph.EdgeAttrEntry](#graph_explorer.Graph.EdgeAttrEntry) | repeated |  |
| graph_attr | [Graph.GraphAttrEntry](#graph_explorer.Graph.GraphAttrEntry) | repeated |  |


<a name="graph_explorer.Graph.EdgeAttrEntry"/>
### Graph.EdgeAttrEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |


<a name="graph_explorer.Graph.GraphAttrEntry"/>
### Graph.GraphAttrEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |


<a name="graph_explorer.Graph.MetanodeAttrEntry"/>
### Graph.MetanodeAttrEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |


<a name="graph_explorer.Graph.NodeAttrEntry"/>
### Graph.NodeAttrEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |


<a name="graph_explorer.Node"/>
### Node


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| node_attr | [Node.NodeAttrEntry](#graph_explorer.Node.NodeAttrEntry) | repeated |  |
| metanode_attr | [Node.MetanodeAttrEntry](#graph_explorer.Node.MetanodeAttrEntry) | repeated |  |


<a name="graph_explorer.Node.MetanodeAttrEntry"/>
### Node.MetanodeAttrEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |


<a name="graph_explorer.Node.NodeAttrEntry"/>
### Node.NodeAttrEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |







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
