# Protocol Documentation
<a name="top"/>

## Table of Contents
* [learner.proto](#learner.proto)
 * [AveragingConfig](#tensorflow.boosted_trees.learner.AveragingConfig)
 * [LearnerConfig](#tensorflow.boosted_trees.learner.LearnerConfig)
 * [LearningRateConfig](#tensorflow.boosted_trees.learner.LearningRateConfig)
 * [LearningRateDropoutDrivenConfig](#tensorflow.boosted_trees.learner.LearningRateDropoutDrivenConfig)
 * [LearningRateFixedConfig](#tensorflow.boosted_trees.learner.LearningRateFixedConfig)
 * [LearningRateLineSearchConfig](#tensorflow.boosted_trees.learner.LearningRateLineSearchConfig)
 * [TreeConstraintsConfig](#tensorflow.boosted_trees.learner.TreeConstraintsConfig)
 * [TreeRegularizationConfig](#tensorflow.boosted_trees.learner.TreeRegularizationConfig)
 * [LearnerConfig.GrowingMode](#tensorflow.boosted_trees.learner.LearnerConfig.GrowingMode)
 * [LearnerConfig.MultiClassStrategy](#tensorflow.boosted_trees.learner.LearnerConfig.MultiClassStrategy)
 * [LearnerConfig.PruningMode](#tensorflow.boosted_trees.learner.LearnerConfig.PruningMode)
* [Scalar Value Types](#scalar-value-types)

<a name="learner.proto"/>
<p align="right"><a href="#top">Top</a></p>

## learner.proto



<a name="tensorflow.boosted_trees.learner.AveragingConfig"/>
### AveragingConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| average_last_n_trees | [float](#float) | optional |  |
| average_last_percent_trees | [float](#float) | optional |  |


<a name="tensorflow.boosted_trees.learner.LearnerConfig"/>
### LearnerConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| num_classes | [uint32](#uint32) | optional |  |
| feature_fraction_per_tree | [float](#float) | optional |  |
| feature_fraction_per_level | [float](#float) | optional |  |
| regularization | [TreeRegularizationConfig](#tensorflow.boosted_trees.learner.TreeRegularizationConfig) | optional |  |
| constraints | [TreeConstraintsConfig](#tensorflow.boosted_trees.learner.TreeConstraintsConfig) | optional |  |
| pruning_mode | [LearnerConfig.PruningMode](#tensorflow.boosted_trees.learner.LearnerConfig.PruningMode) | optional |  |
| growing_mode | [LearnerConfig.GrowingMode](#tensorflow.boosted_trees.learner.LearnerConfig.GrowingMode) | optional |  |
| learning_rate_tuner | [LearningRateConfig](#tensorflow.boosted_trees.learner.LearningRateConfig) | optional |  |
| multi_class_strategy | [LearnerConfig.MultiClassStrategy](#tensorflow.boosted_trees.learner.LearnerConfig.MultiClassStrategy) | optional |  |
| averaging_config | [AveragingConfig](#tensorflow.boosted_trees.learner.AveragingConfig) | optional |  |


<a name="tensorflow.boosted_trees.learner.LearningRateConfig"/>
### LearningRateConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fixed | [LearningRateFixedConfig](#tensorflow.boosted_trees.learner.LearningRateFixedConfig) | optional |  |
| dropout | [LearningRateDropoutDrivenConfig](#tensorflow.boosted_trees.learner.LearningRateDropoutDrivenConfig) | optional |  |
| line_search | [LearningRateLineSearchConfig](#tensorflow.boosted_trees.learner.LearningRateLineSearchConfig) | optional |  |


<a name="tensorflow.boosted_trees.learner.LearningRateDropoutDrivenConfig"/>
### LearningRateDropoutDrivenConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dropout_probability | [float](#float) | optional |  |
| probability_of_skipping_dropout | [float](#float) | optional |  |
| learning_rate | [float](#float) | optional |  |


<a name="tensorflow.boosted_trees.learner.LearningRateFixedConfig"/>
### LearningRateFixedConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| learning_rate | [float](#float) | optional |  |


<a name="tensorflow.boosted_trees.learner.LearningRateLineSearchConfig"/>
### LearningRateLineSearchConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_learning_rate | [float](#float) | optional |  |
| num_steps | [int32](#int32) | optional |  |


<a name="tensorflow.boosted_trees.learner.TreeConstraintsConfig"/>
### TreeConstraintsConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_tree_depth | [uint32](#uint32) | optional |  |
| min_node_weight | [float](#float) | optional |  |


<a name="tensorflow.boosted_trees.learner.TreeRegularizationConfig"/>
### TreeRegularizationConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| l1 | [float](#float) | optional |  |
| l2 | [float](#float) | optional |  |
| tree_complexity | [float](#float) | optional |  |



<a name="tensorflow.boosted_trees.learner.LearnerConfig.GrowingMode"/>
### LearnerConfig.GrowingMode


| Name | Number | Description |
| ---- | ------ | ----------- |
| WHOLE_TREE | 0 |  |
| LAYER_BY_LAYER | 1 |  |

<a name="tensorflow.boosted_trees.learner.LearnerConfig.MultiClassStrategy"/>
### LearnerConfig.MultiClassStrategy


| Name | Number | Description |
| ---- | ------ | ----------- |
| TREE_PER_CLASS | 0 |  |
| FULL_HESSIAN | 1 |  |
| DIAGONAL_HESSIAN | 2 |  |

<a name="tensorflow.boosted_trees.learner.LearnerConfig.PruningMode"/>
### LearnerConfig.PruningMode


| Name | Number | Description |
| ---- | ------ | ----------- |
| PRE_PRUNE | 0 |  |
| POST_PRUNE | 1 |  |





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
