
�
%tensorflow/core/protobuf/master.proto
tensorflow1tensorflow/core/framework/device_attributes.proto%tensorflow/core/framework/graph.proto%tensorflow/core/protobuf/config.proto+tensorflow/core/protobuf/named_tensor.proto"z
CreateSessionRequest1
	graph_def (2.tensorflow.GraphDefRgraphDef/
config (2.tensorflow.ConfigProtoRconfig"c
CreateSessionResponse%
session_handle (	R

ExtendSessionRequest%
session_handle (	R
	graph_def (2.tensorflow.GraphDefRgraphDef2
current_graph_version (RcurrentGraphVersion"C
ExtendSessionResponse*
new_graph_version (RnewGraphVersion"�
RunStepRequest%
session_handle (	R
feed (2.tensorflow.NamedTensorProtoRfeed
fetch (	Rfetch
target (	Rtarget0
options (2.tensorflow.RunOptionsRoptions,
partial_run_handle (	RpartialRunHandle"|
RunStepResponse4
tensor (2.tensorflow.NamedTensorProtoRtensor3
metadata (2.tensorflow.RunMetadataRmetadata"�
PartialRunSetupRequest%
session_handle (	R
feed (	Rfeed
fetch (	Rfetch
target (	Rtarget"G
PartialRunSetupResponse,
partial_run_handle (	RpartialRunHandle"<
CloseSessionRequest%
session_handle (	R
CloseSessionResponse"S
ResetRequest
	container (	R	container%
device_filters (	R

ListDevicesRequest"�
ListDevicesResponse?
local_device (2.tensorflow.DeviceAttributesRlocalDeviceA

org.tensorflow.distruntimeBDistributedRuntimeProtosP�bproto3