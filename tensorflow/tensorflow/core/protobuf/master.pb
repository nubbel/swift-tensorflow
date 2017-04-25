
¶
%tensorflow/core/protobuf/master.proto
tensorflow1tensorflow/core/framework/device_attributes.proto%tensorflow/core/framework/graph.proto%tensorflow/core/protobuf/config.proto+tensorflow/core/protobuf/named_tensor.proto"z
CreateSessionRequest1
	graph_def (2.tensorflow.GraphDefRgraphDef/
config (2.tensorflow.ConfigProtoRconfig"c
CreateSessionResponse%
session_handle (	RsessionHandle#
graph_version (RgraphVersion"§
ExtendSessionRequest%
session_handle (	RsessionHandle1
	graph_def (2.tensorflow.GraphDefRgraphDef2
current_graph_version (RcurrentGraphVersion"C
ExtendSessionResponse*
new_graph_version (RnewGraphVersion"˜
RunStepRequest%
session_handle (	RsessionHandle0
feed (2.tensorflow.NamedTensorProtoRfeed
fetch (	Rfetch
target (	Rtarget0
options (2.tensorflow.RunOptionsRoptions,
partial_run_handle (	RpartialRunHandle"|
RunStepResponse4
tensor (2.tensorflow.NamedTensorProtoRtensor3
metadata (2.tensorflow.RunMetadataRmetadata"Å
PartialRunSetupRequest%
session_handle (	RsessionHandle
feed (	Rfeed
fetch (	Rfetch
target (	Rtarget"G
PartialRunSetupResponse,
partial_run_handle (	RpartialRunHandle"<
CloseSessionRequest%
session_handle (	RsessionHandle"
CloseSessionResponse"S
ResetRequest
	container (	R	container%
device_filters (	RdeviceFilters"
ResetResponse"
ListDevicesRequest"ô
ListDevicesResponse?
local_device (2.tensorflow.DeviceAttributesRlocalDeviceA
remote_device (2.tensorflow.DeviceAttributesRremoteDeviceB;
org.tensorflow.distruntimeBDistributedRuntimeProtosP¯bproto3