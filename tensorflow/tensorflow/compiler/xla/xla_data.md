# Protocol Documentation
<a name="top"/>

## Table of Contents
* [xla_data.proto](#xla_data.proto)
 * [BinaryOpRequest](#xla.BinaryOpRequest)
 * [BroadcastRequest](#xla.BroadcastRequest)
 * [CallRequest](#xla.CallRequest)
 * [ChannelHandle](#xla.ChannelHandle)
 * [ComputationDataHandle](#xla.ComputationDataHandle)
 * [ComputationHandle](#xla.ComputationHandle)
 * [ComputationStats](#xla.ComputationStats)
 * [ConcatenateRequest](#xla.ConcatenateRequest)
 * [ConstantRequest](#xla.ConstantRequest)
 * [ConvertRequest](#xla.ConvertRequest)
 * [ConvolutionDimensionNumbers](#xla.ConvolutionDimensionNumbers)
 * [ConvolveRequest](#xla.ConvolveRequest)
 * [CrossReplicaSumRequest](#xla.CrossReplicaSumRequest)
 * [CustomCallRequest](#xla.CustomCallRequest)
 * [DeviceHandle](#xla.DeviceHandle)
 * [DynamicSliceRequest](#xla.DynamicSliceRequest)
 * [DynamicUpdateSliceRequest](#xla.DynamicUpdateSliceRequest)
 * [ExecutionHandle](#xla.ExecutionHandle)
 * [ExecutionProfile](#xla.ExecutionProfile)
 * [GetLocalShapeRequest](#xla.GetLocalShapeRequest)
 * [GetLocalShapeResponse](#xla.GetLocalShapeResponse)
 * [GetTupleElementRequest](#xla.GetTupleElementRequest)
 * [GlobalDataHandle](#xla.GlobalDataHandle)
 * [InfeedRequest](#xla.InfeedRequest)
 * [Layout](#xla.Layout)
 * [Literal](#xla.Literal)
 * [MapRequest](#xla.MapRequest)
 * [OpMetadata](#xla.OpMetadata)
 * [OpRequest](#xla.OpRequest)
 * [OpResponse](#xla.OpResponse)
 * [OutfeedRequest](#xla.OutfeedRequest)
 * [PadRequest](#xla.PadRequest)
 * [PaddingConfig](#xla.PaddingConfig)
 * [PaddingConfig.PaddingConfigDimension](#xla.PaddingConfig.PaddingConfigDimension)
 * [ParameterRequest](#xla.ParameterRequest)
 * [ProgramShape](#xla.ProgramShape)
 * [RecvRequest](#xla.RecvRequest)
 * [ReduceRequest](#xla.ReduceRequest)
 * [ReduceWindowRequest](#xla.ReduceWindowRequest)
 * [ReshapeRequest](#xla.ReshapeRequest)
 * [ReverseRequest](#xla.ReverseRequest)
 * [RngRequest](#xla.RngRequest)
 * [SelectAndScatterRequest](#xla.SelectAndScatterRequest)
 * [SendRequest](#xla.SendRequest)
 * [Shape](#xla.Shape)
 * [SliceRequest](#xla.SliceRequest)
 * [TernaryOpRequest](#xla.TernaryOpRequest)
 * [TraceRequest](#xla.TraceRequest)
 * [TransposeRequest](#xla.TransposeRequest)
 * [UnaryOpRequest](#xla.UnaryOpRequest)
 * [VariadicOpRequest](#xla.VariadicOpRequest)
 * [WhileRequest](#xla.WhileRequest)
 * [Window](#xla.Window)
 * [WindowDimension](#xla.WindowDimension)
 * [BinaryOperation](#xla.BinaryOperation)
 * [PaddingValue](#xla.PaddingValue)
 * [PrimitiveType](#xla.PrimitiveType)
 * [RandomDistribution](#xla.RandomDistribution)
 * [TernaryOperation](#xla.TernaryOperation)
 * [UnaryOperation](#xla.UnaryOperation)
 * [VariadicOperation](#xla.VariadicOperation)
* [Scalar Value Types](#scalar-value-types)

<a name="xla_data.proto"/>
<p align="right"><a href="#top">Top</a></p>

## xla_data.proto



<a name="xla.BinaryOpRequest"/>
### BinaryOpRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| binop | [BinaryOperation](#xla.BinaryOperation) | optional |  |
| lhs | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| rhs | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| broadcast_dimensions | [int64](#int64) | repeated |  |


<a name="xla.BroadcastRequest"/>
### BroadcastRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| broadcast_sizes | [int64](#int64) | repeated |  |


<a name="xla.CallRequest"/>
### CallRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| to_apply | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| operands | [ComputationDataHandle](#xla.ComputationDataHandle) | repeated |  |


<a name="xla.ChannelHandle"/>
### ChannelHandle


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| handle | [int64](#int64) | optional |  |


<a name="xla.ComputationDataHandle"/>
### ComputationDataHandle


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| handle | [int64](#int64) | optional |  |


<a name="xla.ComputationHandle"/>
### ComputationHandle


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| handle | [int64](#int64) | optional |  |


<a name="xla.ComputationStats"/>
### ComputationStats


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| flop_count | [double](#double) | optional |  |
| transcendental_count | [double](#double) | optional |  |


<a name="xla.ConcatenateRequest"/>
### ConcatenateRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operands | [ComputationDataHandle](#xla.ComputationDataHandle) | repeated |  |
| dimension | [int64](#int64) | optional |  |


<a name="xla.ConstantRequest"/>
### ConstantRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| literal | [Literal](#xla.Literal) | optional |  |


<a name="xla.ConvertRequest"/>
### ConvertRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| new_element_type | [PrimitiveType](#xla.PrimitiveType) | optional |  |


<a name="xla.ConvolutionDimensionNumbers"/>
### ConvolutionDimensionNumbers


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| batch_dimension | [int64](#int64) | optional |  |
| feature_dimension | [int64](#int64) | optional |  |
| spatial_dimensions | [int64](#int64) | repeated |  |
| kernel_input_feature_dimension | [int64](#int64) | optional |  |
| kernel_output_feature_dimension | [int64](#int64) | optional |  |
| kernel_spatial_dimensions | [int64](#int64) | repeated |  |


<a name="xla.ConvolveRequest"/>
### ConvolveRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lhs | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| rhs | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| window | [Window](#xla.Window) | optional |  |
| dimension_numbers | [ConvolutionDimensionNumbers](#xla.ConvolutionDimensionNumbers) | optional |  |


<a name="xla.CrossReplicaSumRequest"/>
### CrossReplicaSumRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |


<a name="xla.CustomCallRequest"/>
### CustomCallRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| call_target_name | [string](#string) | optional |  |
| operands | [ComputationDataHandle](#xla.ComputationDataHandle) | repeated |  |
| shape | [Shape](#xla.Shape) | optional |  |


<a name="xla.DeviceHandle"/>
### DeviceHandle


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| handle | [int64](#int64) | optional |  |


<a name="xla.DynamicSliceRequest"/>
### DynamicSliceRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| start_indices | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| slice_sizes | [int64](#int64) | repeated |  |


<a name="xla.DynamicUpdateSliceRequest"/>
### DynamicUpdateSliceRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| update | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| start_indices | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |


<a name="xla.ExecutionHandle"/>
### ExecutionHandle


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| handle | [int64](#int64) | optional |  |


<a name="xla.ExecutionProfile"/>
### ExecutionProfile


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| compilation_cache_hit | [bool](#bool) | optional |  |
| compile_time_ms | [int64](#int64) | optional |  |
| compute_cycle_count | [int64](#int64) | optional |  |
| compute_time_ns | [int64](#int64) | optional |  |
| compute_and_transfer_time_ns | [int64](#int64) | optional |  |


<a name="xla.GetLocalShapeRequest"/>
### GetLocalShapeRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |


<a name="xla.GetLocalShapeResponse"/>
### GetLocalShapeResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [Shape](#xla.Shape) | optional |  |


<a name="xla.GetTupleElementRequest"/>
### GetTupleElementRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| index | [int64](#int64) | optional |  |


<a name="xla.GlobalDataHandle"/>
### GlobalDataHandle


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| handle | [int64](#int64) | optional |  |


<a name="xla.InfeedRequest"/>
### InfeedRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [Shape](#xla.Shape) | optional |  |
| config | [bytes](#bytes) | optional |  |


<a name="xla.Layout"/>
### Layout


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| minor_to_major | [int64](#int64) | repeated |  |
| padded_dimensions | [int64](#int64) | repeated |  |
| padding_value | [PaddingValue](#xla.PaddingValue) | optional |  |


<a name="xla.Literal"/>
### Literal


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [Shape](#xla.Shape) | optional |  |
| preds | [bool](#bool) | repeated |  |
| u8s | [bytes](#bytes) | optional |  |
| s32s | [int32](#int32) | repeated |  |
| s64s | [int64](#int64) | repeated |  |
| u32s | [uint32](#uint32) | repeated |  |
| u64s | [uint64](#uint64) | repeated |  |
| f32s | [float](#float) | repeated |  |
| f64s | [double](#double) | repeated |  |
| tuple_literals | [Literal](#xla.Literal) | repeated |  |


<a name="xla.MapRequest"/>
### MapRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operands | [ComputationDataHandle](#xla.ComputationDataHandle) | repeated |  |
| to_apply | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| static_operands | [ComputationDataHandle](#xla.ComputationDataHandle) | repeated |  |


<a name="xla.OpMetadata"/>
### OpMetadata


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| op_type | [string](#string) | optional |  |
| op_name | [string](#string) | optional |  |
| source_file | [string](#string) | optional |  |
| source_line | [int32](#int32) | optional |  |


<a name="xla.OpRequest"/>
### OpRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| computation | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| metadata | [OpMetadata](#xla.OpMetadata) | optional |  |
| binary_op_request | [BinaryOpRequest](#xla.BinaryOpRequest) | optional |  |
| broadcast_request | [BroadcastRequest](#xla.BroadcastRequest) | optional |  |
| call_request | [CallRequest](#xla.CallRequest) | optional |  |
| concatenate_request | [ConcatenateRequest](#xla.ConcatenateRequest) | optional |  |
| constant_request | [ConstantRequest](#xla.ConstantRequest) | optional |  |
| convert_request | [ConvertRequest](#xla.ConvertRequest) | optional |  |
| convolve_request | [ConvolveRequest](#xla.ConvolveRequest) | optional |  |
| cross_replica_sum_request | [CrossReplicaSumRequest](#xla.CrossReplicaSumRequest) | optional |  |
| custom_call_request | [CustomCallRequest](#xla.CustomCallRequest) | optional |  |
| dynamic_slice_request | [DynamicSliceRequest](#xla.DynamicSliceRequest) | optional |  |
| dynamic_update_slice_request | [DynamicUpdateSliceRequest](#xla.DynamicUpdateSliceRequest) | optional |  |
| get_tuple_element_request | [GetTupleElementRequest](#xla.GetTupleElementRequest) | optional |  |
| infeed_request | [InfeedRequest](#xla.InfeedRequest) | optional |  |
| map_request | [MapRequest](#xla.MapRequest) | optional |  |
| pad_request | [PadRequest](#xla.PadRequest) | optional |  |
| parameter_request | [ParameterRequest](#xla.ParameterRequest) | optional |  |
| reduce_request | [ReduceRequest](#xla.ReduceRequest) | optional |  |
| reduce_window_request | [ReduceWindowRequest](#xla.ReduceWindowRequest) | optional |  |
| reshape_request | [ReshapeRequest](#xla.ReshapeRequest) | optional |  |
| reverse_request | [ReverseRequest](#xla.ReverseRequest) | optional |  |
| rng_request | [RngRequest](#xla.RngRequest) | optional |  |
| select_and_scatter_request | [SelectAndScatterRequest](#xla.SelectAndScatterRequest) | optional |  |
| slice_request | [SliceRequest](#xla.SliceRequest) | optional |  |
| ternary_op_request | [TernaryOpRequest](#xla.TernaryOpRequest) | optional |  |
| trace_request | [TraceRequest](#xla.TraceRequest) | optional |  |
| transpose_request | [TransposeRequest](#xla.TransposeRequest) | optional |  |
| unary_op_request | [UnaryOpRequest](#xla.UnaryOpRequest) | optional |  |
| variadic_op_request | [VariadicOpRequest](#xla.VariadicOpRequest) | optional |  |
| while_request | [WhileRequest](#xla.WhileRequest) | optional |  |
| send_request | [SendRequest](#xla.SendRequest) | optional |  |
| recv_request | [RecvRequest](#xla.RecvRequest) | optional |  |
| outfeed_request | [OutfeedRequest](#xla.OutfeedRequest) | optional |  |


<a name="xla.OpResponse"/>
### OpResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| output | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |


<a name="xla.OutfeedRequest"/>
### OutfeedRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [Shape](#xla.Shape) | optional |  |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| outfeed_config | [bytes](#bytes) | optional |  |


<a name="xla.PadRequest"/>
### PadRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| padding_value | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| padding_config | [PaddingConfig](#xla.PaddingConfig) | optional |  |


<a name="xla.PaddingConfig"/>
### PaddingConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dimensions | [PaddingConfig.PaddingConfigDimension](#xla.PaddingConfig.PaddingConfigDimension) | repeated |  |


<a name="xla.PaddingConfig.PaddingConfigDimension"/>
### PaddingConfig.PaddingConfigDimension


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| edge_padding_low | [int64](#int64) | optional |  |
| edge_padding_high | [int64](#int64) | optional |  |
| interior_padding | [int64](#int64) | optional |  |


<a name="xla.ParameterRequest"/>
### ParameterRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [Shape](#xla.Shape) | optional |  |
| parameter | [int64](#int64) | optional |  |
| name | [string](#string) | optional |  |


<a name="xla.ProgramShape"/>
### ProgramShape


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| parameters | [Shape](#xla.Shape) | repeated |  |
| result | [Shape](#xla.Shape) | optional |  |
| parameter_names | [string](#string) | repeated |  |


<a name="xla.RecvRequest"/>
### RecvRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [Shape](#xla.Shape) | optional |  |
| channel_handle | [ChannelHandle](#xla.ChannelHandle) | optional |  |


<a name="xla.ReduceRequest"/>
### ReduceRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| init_value | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| dimensions | [int64](#int64) | repeated |  |
| to_apply | [ComputationHandle](#xla.ComputationHandle) | optional |  |


<a name="xla.ReduceWindowRequest"/>
### ReduceWindowRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| init_value | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| window | [Window](#xla.Window) | optional |  |
| to_apply | [ComputationHandle](#xla.ComputationHandle) | optional |  |


<a name="xla.ReshapeRequest"/>
### ReshapeRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| dimensions | [int64](#int64) | repeated |  |
| new_sizes | [int64](#int64) | repeated |  |


<a name="xla.ReverseRequest"/>
### ReverseRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| dimensions | [int64](#int64) | repeated |  |


<a name="xla.RngRequest"/>
### RngRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| distribution | [RandomDistribution](#xla.RandomDistribution) | optional |  |
| parameter | [ComputationDataHandle](#xla.ComputationDataHandle) | repeated |  |
| shape | [Shape](#xla.Shape) | optional |  |


<a name="xla.SelectAndScatterRequest"/>
### SelectAndScatterRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| source | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| init_value | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| window | [Window](#xla.Window) | optional |  |
| select | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| scatter | [ComputationHandle](#xla.ComputationHandle) | optional |  |


<a name="xla.SendRequest"/>
### SendRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| channel_handle | [ChannelHandle](#xla.ChannelHandle) | optional |  |


<a name="xla.Shape"/>
### Shape


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| element_type | [PrimitiveType](#xla.PrimitiveType) | optional |  |
| dimensions | [int64](#int64) | repeated |  |
| tuple_shapes | [Shape](#xla.Shape) | repeated |  |
| layout | [Layout](#xla.Layout) | optional |  |


<a name="xla.SliceRequest"/>
### SliceRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| start_indices | [int64](#int64) | repeated |  |
| limit_indices | [int64](#int64) | repeated |  |


<a name="xla.TernaryOpRequest"/>
### TernaryOpRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| triop | [TernaryOperation](#xla.TernaryOperation) | optional |  |
| lhs | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| rhs | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| ehs | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |


<a name="xla.TraceRequest"/>
### TraceRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tag | [string](#string) | optional |  |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |


<a name="xla.TransposeRequest"/>
### TransposeRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |
| dimensions | [int64](#int64) | repeated |  |


<a name="xla.UnaryOpRequest"/>
### UnaryOpRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unop | [UnaryOperation](#xla.UnaryOperation) | optional |  |
| operand | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |


<a name="xla.VariadicOpRequest"/>
### VariadicOpRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| varop | [VariadicOperation](#xla.VariadicOperation) | optional |  |
| operands | [ComputationDataHandle](#xla.ComputationDataHandle) | repeated |  |


<a name="xla.WhileRequest"/>
### WhileRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| condition | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| body | [ComputationHandle](#xla.ComputationHandle) | optional |  |
| init | [ComputationDataHandle](#xla.ComputationDataHandle) | optional |  |


<a name="xla.Window"/>
### Window


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dimensions | [WindowDimension](#xla.WindowDimension) | repeated |  |


<a name="xla.WindowDimension"/>
### WindowDimension


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| size | [int64](#int64) | optional |  |
| stride | [int64](#int64) | optional |  |
| padding_low | [int64](#int64) | optional |  |
| padding_high | [int64](#int64) | optional |  |
| window_dilation | [int64](#int64) | optional |  |
| base_dilation | [int64](#int64) | optional |  |



<a name="xla.BinaryOperation"/>
### BinaryOperation


| Name | Number | Description |
| ---- | ------ | ----------- |
| BINOP_INVALID | 0 |  |
| BINOP_ADD | 1 |  |
| BINOP_DIV | 2 |  |
| BINOP_MUL | 3 |  |
| BINOP_SUB | 4 |  |
| BINOP_EQ | 5 |  |
| BINOP_GE | 6 |  |
| BINOP_GT | 7 |  |
| BINOP_LE | 8 |  |
| BINOP_LT | 9 |  |
| BINOP_NE | 10 |  |
| BINOP_DOT | 12 |  |
| BINOP_INDEX | 13 |  |
| BINOP_MAX | 14 |  |
| BINOP_MIN | 15 |  |
| BINOP_POW | 16 |  |
| BINOP_REM | 17 |  |
| BINOP_LOGICAL_AND | 18 |  |
| BINOP_LOGICAL_OR | 19 |  |

<a name="xla.PaddingValue"/>
### PaddingValue


| Name | Number | Description |
| ---- | ------ | ----------- |
| INVALID_PAD | 0 |  |
| ZERO_PAD | 1 |  |
| ONE_PAD | 2 |  |
| LOWEST_PAD | 3 |  |
| HIGHEST_PAD | 4 |  |
| UNKNOWN_PAD | 5 |  |

<a name="xla.PrimitiveType"/>
### PrimitiveType


| Name | Number | Description |
| ---- | ------ | ----------- |
| PRIMITIVE_TYPE_INVALID | 0 |  |
| PRED | 1 |  |
| S8 | 2 |  |
| S16 | 3 |  |
| S32 | 4 |  |
| S64 | 5 |  |
| U8 | 6 |  |
| U16 | 7 |  |
| U32 | 8 |  |
| U64 | 9 |  |
| F16 | 10 |  |
| F32 | 11 |  |
| F64 | 12 |  |
| TUPLE | 13 |  |
| OPAQUE | 14 |  |

<a name="xla.RandomDistribution"/>
### RandomDistribution


| Name | Number | Description |
| ---- | ------ | ----------- |
| RNG_INVALID | 0 |  |
| RNG_UNIFORM | 1 |  |
| RNG_NORMAL | 2 |  |
| RNG_BERNOULLI | 3 |  |

<a name="xla.TernaryOperation"/>
### TernaryOperation


| Name | Number | Description |
| ---- | ------ | ----------- |
| TRIOP_INVALID | 0 |  |
| TRIOP_SELECT | 1 |  |
| TRIOP_UPDATE | 2 |  |
| TRIOP_CLAMP | 3 |  |

<a name="xla.UnaryOperation"/>
### UnaryOperation


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNOP_INVALID | 0 |  |
| UNOP_LOGICAL_NOT | 1 |  |
| UNOP_EXP | 2 |  |
| UNOP_NEGATE | 3 |  |
| UNOP_SORT | 4 |  |
| UNOP_TANH | 5 |  |
| UNOP_LOG | 6 |  |
| UNOP_FLOOR | 7 |  |
| UNOP_CEIL | 8 |  |
| UNOP_ABS | 9 |  |
| UNOP_SIGN | 10 |  |
| UNOP_IS_FINITE | 11 |  |

<a name="xla.VariadicOperation"/>
### VariadicOperation


| Name | Number | Description |
| ---- | ------ | ----------- |
| VAROP_INVALID | 0 |  |
| VAROP_TUPLE | 1 |  |





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
