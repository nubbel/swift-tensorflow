# Protocol Documentation
<a name="top"/>

## Table of Contents
* [tree_config.proto](#tree_config.proto)
 * [CategoricalIdBinarySplit](#tensorflow.boosted_trees.trees.CategoricalIdBinarySplit)
 * [CategoricalIdSetMembershipBinarySplit](#tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit)
 * [DecisionTreeConfig](#tensorflow.boosted_trees.trees.DecisionTreeConfig)
 * [DecisionTreeEnsembleConfig](#tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig)
 * [DecisionTreeMetadata](#tensorflow.boosted_trees.trees.DecisionTreeMetadata)
 * [DenseFloatBinarySplit](#tensorflow.boosted_trees.trees.DenseFloatBinarySplit)
 * [Leaf](#tensorflow.boosted_trees.trees.Leaf)
 * [SparseFloatBinarySplitDefaultLeft](#tensorflow.boosted_trees.trees.SparseFloatBinarySplitDefaultLeft)
 * [SparseFloatBinarySplitDefaultRight](#tensorflow.boosted_trees.trees.SparseFloatBinarySplitDefaultRight)
 * [SparseVector](#tensorflow.boosted_trees.trees.SparseVector)
 * [TreeNode](#tensorflow.boosted_trees.trees.TreeNode)
 * [TreeNodeMetadata](#tensorflow.boosted_trees.trees.TreeNodeMetadata)
 * [Vector](#tensorflow.boosted_trees.trees.Vector)
* [Scalar Value Types](#scalar-value-types)

<a name="tree_config.proto"/>
<p align="right"><a href="#top">Top</a></p>

## tree_config.proto



<a name="tensorflow.boosted_trees.trees.CategoricalIdBinarySplit"/>
### CategoricalIdBinarySplit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| feature_column | [int32](#int32) | optional |  |
| feature_id | [int64](#int64) | optional |  |
| left_id | [int32](#int32) | optional |  |
| right_id | [int32](#int32) | optional |  |


<a name="tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit"/>
### CategoricalIdSetMembershipBinarySplit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| feature_column | [int32](#int32) | optional |  |
| feature_ids | [int64](#int64) | repeated |  |
| left_id | [int32](#int32) | optional |  |
| right_id | [int32](#int32) | optional |  |


<a name="tensorflow.boosted_trees.trees.DecisionTreeConfig"/>
### DecisionTreeConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| nodes | [TreeNode](#tensorflow.boosted_trees.trees.TreeNode) | repeated |  |


<a name="tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig"/>
### DecisionTreeEnsembleConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| trees | [DecisionTreeConfig](#tensorflow.boosted_trees.trees.DecisionTreeConfig) | repeated |  |
| tree_weights | [float](#float) | repeated |  |
| tree_metadata | [DecisionTreeMetadata](#tensorflow.boosted_trees.trees.DecisionTreeMetadata) | repeated |  |


<a name="tensorflow.boosted_trees.trees.DecisionTreeMetadata"/>
### DecisionTreeMetadata


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| num_tree_weight_updates | [int32](#int32) | optional |  |
| num_layers_grown | [int32](#int32) | optional |  |
| is_finalized | [bool](#bool) | optional |  |


<a name="tensorflow.boosted_trees.trees.DenseFloatBinarySplit"/>
### DenseFloatBinarySplit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| feature_column | [int32](#int32) | optional |  |
| threshold | [float](#float) | optional |  |
| left_id | [int32](#int32) | optional |  |
| right_id | [int32](#int32) | optional |  |


<a name="tensorflow.boosted_trees.trees.Leaf"/>
### Leaf


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vector | [Vector](#tensorflow.boosted_trees.trees.Vector) | optional |  |
| sparse_vector | [SparseVector](#tensorflow.boosted_trees.trees.SparseVector) | optional |  |


<a name="tensorflow.boosted_trees.trees.SparseFloatBinarySplitDefaultLeft"/>
### SparseFloatBinarySplitDefaultLeft


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| split | [DenseFloatBinarySplit](#tensorflow.boosted_trees.trees.DenseFloatBinarySplit) | optional |  |


<a name="tensorflow.boosted_trees.trees.SparseFloatBinarySplitDefaultRight"/>
### SparseFloatBinarySplitDefaultRight


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| split | [DenseFloatBinarySplit](#tensorflow.boosted_trees.trees.DenseFloatBinarySplit) | optional |  |


<a name="tensorflow.boosted_trees.trees.SparseVector"/>
### SparseVector


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [int32](#int32) | repeated |  |
| value | [float](#float) | repeated |  |


<a name="tensorflow.boosted_trees.trees.TreeNode"/>
### TreeNode


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| leaf | [Leaf](#tensorflow.boosted_trees.trees.Leaf) | optional |  |
| dense_float_binary_split | [DenseFloatBinarySplit](#tensorflow.boosted_trees.trees.DenseFloatBinarySplit) | optional |  |
| sparse_float_binary_split_default_left | [SparseFloatBinarySplitDefaultLeft](#tensorflow.boosted_trees.trees.SparseFloatBinarySplitDefaultLeft) | optional |  |
| sparse_float_binary_split_default_right | [SparseFloatBinarySplitDefaultRight](#tensorflow.boosted_trees.trees.SparseFloatBinarySplitDefaultRight) | optional |  |
| categorical_id_binary_split | [CategoricalIdBinarySplit](#tensorflow.boosted_trees.trees.CategoricalIdBinarySplit) | optional |  |
| categorical_id_set_membership_binary_split | [CategoricalIdSetMembershipBinarySplit](#tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit) | optional |  |
| node_metadata | [TreeNodeMetadata](#tensorflow.boosted_trees.trees.TreeNodeMetadata) | optional |  |


<a name="tensorflow.boosted_trees.trees.TreeNodeMetadata"/>
### TreeNodeMetadata


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gain | [float](#float) | optional |  |
| original_leaf | [Leaf](#tensorflow.boosted_trees.trees.Leaf) | optional |  |


<a name="tensorflow.boosted_trees.trees.Vector"/>
### Vector


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [float](#float) | repeated |  |







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
