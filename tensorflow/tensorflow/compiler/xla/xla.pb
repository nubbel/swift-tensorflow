
½)
!tensorflow/compiler/xla/xla.protoxla&tensorflow/compiler/xla/xla_data.proto-tensorflow/compiler/xla/service/session.proto"—
ExecutionOptions*
disable_fast_math (RdisableFastMathC
shape_with_output_layout (2
.xla.ShapeRshapeWithOutputLayout
seed (Rseed"V
SnapshotComputationRequest8
computation (2.xla.ComputationHandleRcomputation"I
SnapshotComputationResponse*
module (2.xla.SessionModuleRmodule"L
LoadComputationSnapshotRequest*
module (2.xla.SessionModuleRmodule"[
LoadComputationSnapshotResponse8
computation (2.xla.ComputationHandleRcomputation"<
GetDeviceHandlesRequest!
device_count (RdeviceCount"T
GetDeviceHandlesResponse8
device_handles (2.xla.DeviceHandleRdeviceHandles"|
TransferToClientRequest)
data (2.xla.GlobalDataHandleRdata6
shape_with_layout (2
.xla.ShapeRshapeWithLayout"B
TransferToClientResponse&
literal (2.xla.LiteralRliteral"y
TransferToServerRequest&
literal (2.xla.LiteralRliteral6
device_handle (2.xla.DeviceHandleRdeviceHandle"E
TransferToServerResponse)
data (2.xla.GlobalDataHandleRdata"\
 TransferToServerInProcessRequest
buffer (Rbuffer 
shape (2
.xla.ShapeRshape"N
!TransferToServerInProcessResponse)
data (2.xla.GlobalDataHandleRdata"e
 TransferToClientInProcessRequest)
data (2.xla.GlobalDataHandleRdata
buffer (Rbuffer"#
!TransferToClientInProcessResponse"˜
TransferToInfeedRequest&
literal (2.xla.LiteralRliteral

replica_id (R	replicaId6
device_handle (2.xla.DeviceHandleRdeviceHandle"
TransferToInfeedResponse"«
TransferFromOutfeedRequest6
shape_with_layout (2
.xla.ShapeRshapeWithLayout

replica_id (R	replicaId6
device_handle (2.xla.DeviceHandleRdeviceHandle"E
TransferFromOutfeedResponse&
literal (2.xla.LiteralRliteral"L
ResetDeviceRequest6
device_handle (2.xla.DeviceHandleRdeviceHandle"
ResetDeviceResponse"S
ComputationStatsRequest8
computation (2.xla.ComputationHandleRcomputation"G
ComputationStatsResponse+
stats (2.xla.ComputationStatsRstats"(
ComputationRequest
name (	Rname"O
ComputationResponse8
computation (2.xla.ComputationHandleRcomputation"
CreateChannelHandleRequest"K
CreateChannelHandleResponse,
channel (2.xla.ChannelHandleRchannel">
UnregisterRequest)
data (2.xla.GlobalDataHandleRdata"
UnregisterResponse"‡
SetReturnValueRequest8
computation (2.xla.ComputationHandleRcomputation4
operand (2.xla.ComputationDataHandleRoperand"
SetReturnValueResponse"‡
ExecuteRequest8
computation (2.xla.ComputationHandleRcomputation3
	arguments (2.xla.GlobalDataHandleR	arguments6
device_handle (2.xla.DeviceHandleRdeviceHandleB
execution_options (2.xla.ExecutionOptionsRexecutionOptionsJJ"I
ExecuteParallelRequest/
requests (2.xla.ExecuteRequestRrequests"q
ExecuteResponse-
output (2.xla.GlobalDataHandleRoutput/
profile (2.xla.ExecutionProfileRprofile"M
ExecuteParallelResponse2
	responses (2.xla.ExecuteResponseR	responses"Ô
ExecuteAsyncRequest8
computation (2.xla.ComputationHandleRcomputation3
	arguments (2.xla.GlobalDataHandleR	argumentsB
execution_options (2.xla.ExecutionOptionsRexecutionOptionsJJ"J
ExecuteAsyncResponse2
	execution (2.xla.ExecutionHandleR	execution"M
WaitForExecutionRequest2
	execution (2.xla.ExecutionHandleR	execution"z
WaitForExecutionResponse-
output (2.xla.GlobalDataHandleRoutput/
profile (2.xla.ExecutionProfileRprofile"ƒ
IsConstantRequest8
computation (2.xla.ComputationHandleRcomputation4
operand (2.xla.ComputationDataHandleRoperand"5
IsConstantResponse
is_constant (R
isConstant"º
ComputeConstantRequest8
computation (2.xla.ComputationHandleRcomputation4
operand (2.xla.ComputationDataHandleRoperand0
output_layout (2.xla.LayoutRoutputLayout"H
ComputeConstantResponse-
output (2.xla.GlobalDataHandleRoutput"S
DeconstructTupleRequest8
tuple_handle (2.xla.GlobalDataHandleRtupleHandle"Z
DeconstructTupleResponse>
element_handles (2.xla.GlobalDataHandleRelementHandles"Û
LoadDataRequest0
columnio_tablet_path (	RcolumnioTabletPath%
columnio_field (	RcolumnioField/
element_shape (2
.xla.ShapeRelementShape
offset (Roffset
limit (Rlimit
zip (Rzip"Ò
LoadDataResponse)
data (2.xla.GlobalDataHandleRdata)

data_shape (2
.xla.ShapeR	dataShape%
available_rows (RavailableRows
rows_loaded (R
rowsLoaded 
nanoseconds (Rnanoseconds"‚
SpecializeRequest8
computation (2.xla.ComputationHandleRcomputation3
	arguments (2.xla.GlobalDataHandleR	arguments"
SpecializeResponse"<
GetShapeRequest)
data (2.xla.GlobalDataHandleRdata"4
GetShapeResponse 
shape (2
.xla.ShapeRshape"V
GetComputationShapeRequest8
computation (2.xla.ComputationHandleRcomputation"U
GetComputationShapeResponse6
program_shape (2.xla.ProgramShapeRprogramShape":
UnpackRequest)
data (2.xla.GlobalDataHandleRdata"D
UnpackResponse2
	tied_data (2.xla.GlobalDataHandleRtiedDatabproto3