
·
%tensorflow/core/protobuf/worker.proto
tensorflowgoogle/protobuf/any.proto*tensorflow/core/framework/cost_graph.proto*tensorflow/core/framework/step_stats.proto1tensorflow/core/framework/device_attributes.proto%tensorflow/core/framework/graph.proto&tensorflow/core/framework/tensor.proto%tensorflow/core/protobuf/config.proto+tensorflow/core/protobuf/named_tensor.proto0tensorflow/core/protobuf/tensorflow_server.proto"
GetStatusRequest"^
GetStatusResponseI
device_attributes (2.tensorflow.DeviceAttributesRdeviceAttributes"y
CreateWorkerSessionRequest%
session_handle (	RsessionHandle4

server_def (2.tensorflow.ServerDefR	serverDef"
CreateWorkerSessionResponse"Ý
RegisterGraphRequest%
session_handle (	RsessionHandle1
	graph_def (2.tensorflow.GraphDefRgraphDef,
has_control_flow (BRhasControlFlow=
graph_options (2.tensorflow.GraphOptionsRgraphOptions":
RegisterGraphResponse!
graph_handle (	RgraphHandle";
DeregisterGraphRequest!
graph_handle (	RgraphHandle"
DeregisterGraphResponse"1
CleanupAllRequest
	container (	R	container"
CleanupAllResponse"Z
ExecutorOpts!
record_costs (RrecordCosts'
record_timeline (RrecordTimeline"Ÿ
RunGraphRequest!
graph_handle (	RgraphHandle
step_id (RstepId5
	exec_opts (2.tensorflow.ExecutorOptsRexecOpts0
send (2.tensorflow.NamedTensorProtoRsend
recv_key (	RrecvKey

is_partial (R	isPartial-
is_last_partial_run (RisLastPartialRun"³
RunGraphResponse0
recv (2.tensorflow.NamedTensorProtoRrecv4

step_stats (2.tensorflow.StepStatsR	stepStats7

cost_graph (2.tensorflow.CostGraphDefR	costGraph".
CleanupGraphRequest
step_id (RstepId"
CleanupGraphResponse"·
RecvTensorRequest
step_id (RstepId%
rendezvous_key (	RrendezvousKey
dma_ok (RdmaOkC
client_locality (2.tensorflow.DeviceLocalityRclientLocalityC
server_locality (2.tensorflow.DeviceLocalityRserverLocalityA
transport_options (2.google.protobuf.AnyRtransportOptions"Í
RecvTensorResponse/
tensor (2.tensorflow.TensorProtoRtensor
is_dead (RisDead*
send_start_micros (RsendStartMicrosA
transport_options (2.google.protobuf.AnyRtransportOptions"k
LoggingRequest
rpc_logging (R
rpcLogging
clear (Rclear"
fetch_step_id (RfetchStepId"a
LabeledStepStats
step_id (RstepId4

step_stats (2.tensorflow.StepStatsR	stepStats"C
LoggingResponse0
step (2.tensorflow.LabeledStepStatsRstep"‘
	TraceOpts
duration (Rduration*
use_step_profiler (RuseStepProfiler.
use_kernel_profiler (RuseKernelProfiler2
use_extended_profiler (RuseExtendedProfiler(
use_gpu_profiler (RuseGpuProfiler.
use_sample_profiler (RuseSampleProfiler"A
TracingRequest/
options (2.tensorflow.TraceOptsRoptions"
TracingResponseB/
org.tensorflow.distruntimeBWorkerProtosPøbproto3