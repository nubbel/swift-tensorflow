// Code generated by protoc-gen-go.
// source: serving/tensorflow/core/framework/remote_fused_graph_execute_info.proto
// DO NOT EDIT!

/*
Package tensorflow is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/core/framework/remote_fused_graph_execute_info.proto

It has these top-level messages:
	RemoteFusedGraphExecuteInfo
*/
package tensorflow

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow10 "tensorflow/core/framework"
import tensorflow2 "tensorflow/core/framework"
import tensorflow3 "tensorflow/core/framework"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type RemoteFusedGraphExecuteInfo_NodeType int32

const (
	RemoteFusedGraphExecuteInfo_UNUSED        RemoteFusedGraphExecuteInfo_NodeType = 0
	RemoteFusedGraphExecuteInfo_GRAPH_INPUT   RemoteFusedGraphExecuteInfo_NodeType = 1
	RemoteFusedGraphExecuteInfo_GRAPH_OUTPUT  RemoteFusedGraphExecuteInfo_NodeType = 2
	RemoteFusedGraphExecuteInfo_FUSED_NODE    RemoteFusedGraphExecuteInfo_NodeType = 3
	RemoteFusedGraphExecuteInfo_BORDER_INPUT  RemoteFusedGraphExecuteInfo_NodeType = 4
	RemoteFusedGraphExecuteInfo_BORDER_OUTPUT RemoteFusedGraphExecuteInfo_NodeType = 5
)

var RemoteFusedGraphExecuteInfo_NodeType_name = map[int32]string{
	0: "UNUSED",
	1: "GRAPH_INPUT",
	2: "GRAPH_OUTPUT",
	3: "FUSED_NODE",
	4: "BORDER_INPUT",
	5: "BORDER_OUTPUT",
}
var RemoteFusedGraphExecuteInfo_NodeType_value = map[string]int32{
	"UNUSED":        0,
	"GRAPH_INPUT":   1,
	"GRAPH_OUTPUT":  2,
	"FUSED_NODE":    3,
	"BORDER_INPUT":  4,
	"BORDER_OUTPUT": 5,
}

func (x RemoteFusedGraphExecuteInfo_NodeType) String() string {
	return proto.EnumName(RemoteFusedGraphExecuteInfo_NodeType_name, int32(x))
}
func (RemoteFusedGraphExecuteInfo_NodeType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor0, []int{0, 0}
}

// Protocol buffer representing a handle to a tensorflow resource. Handles are
// not valid across executions, but can be serialized back and forth from within
// a single run.
type RemoteFusedGraphExecuteInfo struct {
	// Definition of remote graph
	RemoteGraph *tensorflow10.GraphDef `protobuf:"bytes,1,opt,name=remote_graph,json=remoteGraph" json:"remote_graph,omitempty"`
	// Remote fused graph input node name
	GraphInputNodeName []string `protobuf:"bytes,2,rep,name=graph_input_node_name,json=graphInputNodeName" json:"graph_input_node_name,omitempty"`
	// Remote fused graph output node name
	GraphOutputNodeName []string `protobuf:"bytes,3,rep,name=graph_output_node_name,json=graphOutputNodeName" json:"graph_output_node_name,omitempty"`
	// Executor's name
	ExecutorName string `protobuf:"bytes,4,opt,name=executor_name,json=executorName" json:"executor_name,omitempty"`
	// Optional: Parameters given to the executor
	SerializedExecutorParameters []byte `protobuf:"bytes,5,opt,name=serialized_executor_parameters,json=serializedExecutorParameters,proto3" json:"serialized_executor_parameters,omitempty"`
	// Optional: Default graph input tensor shape used to allocate memory
	// before executing op
	DefaultGraphInputTensorShape []*RemoteFusedGraphExecuteInfo_TensorShapeTypeProto `protobuf:"bytes,6,rep,name=default_graph_input_tensor_shape,json=defaultGraphInputTensorShape" json:"default_graph_input_tensor_shape,omitempty"`
	// Optional: Default graph input tensor shape used to allocate memory
	// before executing op
	// TODO(satok): Remote output tensor shape once shape information is stored
	// in NodeDef
	DefaultGraphOutputTensorShape []*RemoteFusedGraphExecuteInfo_TensorShapeTypeProto `protobuf:"bytes,7,rep,name=default_graph_output_tensor_shape,json=defaultGraphOutputTensorShape" json:"default_graph_output_tensor_shape,omitempty"`
}

func (m *RemoteFusedGraphExecuteInfo) Reset()                    { *m = RemoteFusedGraphExecuteInfo{} }
func (m *RemoteFusedGraphExecuteInfo) String() string            { return proto.CompactTextString(m) }
func (*RemoteFusedGraphExecuteInfo) ProtoMessage()               {}
func (*RemoteFusedGraphExecuteInfo) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *RemoteFusedGraphExecuteInfo) GetRemoteGraph() *tensorflow10.GraphDef {
	if m != nil {
		return m.RemoteGraph
	}
	return nil
}

func (m *RemoteFusedGraphExecuteInfo) GetGraphInputNodeName() []string {
	if m != nil {
		return m.GraphInputNodeName
	}
	return nil
}

func (m *RemoteFusedGraphExecuteInfo) GetGraphOutputNodeName() []string {
	if m != nil {
		return m.GraphOutputNodeName
	}
	return nil
}

func (m *RemoteFusedGraphExecuteInfo) GetExecutorName() string {
	if m != nil {
		return m.ExecutorName
	}
	return ""
}

func (m *RemoteFusedGraphExecuteInfo) GetSerializedExecutorParameters() []byte {
	if m != nil {
		return m.SerializedExecutorParameters
	}
	return nil
}

func (m *RemoteFusedGraphExecuteInfo) GetDefaultGraphInputTensorShape() []*RemoteFusedGraphExecuteInfo_TensorShapeTypeProto {
	if m != nil {
		return m.DefaultGraphInputTensorShape
	}
	return nil
}

func (m *RemoteFusedGraphExecuteInfo) GetDefaultGraphOutputTensorShape() []*RemoteFusedGraphExecuteInfo_TensorShapeTypeProto {
	if m != nil {
		return m.DefaultGraphOutputTensorShape
	}
	return nil
}

type RemoteFusedGraphExecuteInfo_TensorShapeTypeProto struct {
	Dtype tensorflow3.DataType          `protobuf:"varint,1,opt,name=dtype,enum=tensorflow.DataType" json:"dtype,omitempty"`
	Shape *tensorflow2.TensorShapeProto `protobuf:"bytes,2,opt,name=shape" json:"shape,omitempty"`
}

func (m *RemoteFusedGraphExecuteInfo_TensorShapeTypeProto) Reset() {
	*m = RemoteFusedGraphExecuteInfo_TensorShapeTypeProto{}
}
func (m *RemoteFusedGraphExecuteInfo_TensorShapeTypeProto) String() string {
	return proto.CompactTextString(m)
}
func (*RemoteFusedGraphExecuteInfo_TensorShapeTypeProto) ProtoMessage() {}
func (*RemoteFusedGraphExecuteInfo_TensorShapeTypeProto) Descriptor() ([]byte, []int) {
	return fileDescriptor0, []int{0, 0}
}

func (m *RemoteFusedGraphExecuteInfo_TensorShapeTypeProto) GetDtype() tensorflow3.DataType {
	if m != nil {
		return m.Dtype
	}
	return tensorflow3.DataType_DT_INVALID
}

func (m *RemoteFusedGraphExecuteInfo_TensorShapeTypeProto) GetShape() *tensorflow2.TensorShapeProto {
	if m != nil {
		return m.Shape
	}
	return nil
}

func init() {
	proto.RegisterType((*RemoteFusedGraphExecuteInfo)(nil), "tensorflow.RemoteFusedGraphExecuteInfo")
	proto.RegisterType((*RemoteFusedGraphExecuteInfo_TensorShapeTypeProto)(nil), "tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto")
	proto.RegisterEnum("tensorflow.RemoteFusedGraphExecuteInfo_NodeType", RemoteFusedGraphExecuteInfo_NodeType_name, RemoteFusedGraphExecuteInfo_NodeType_value)
}

func init() {
	proto.RegisterFile("serving/tensorflow/core/framework/remote_fused_graph_execute_info.proto", fileDescriptor0)
}

var fileDescriptor0 = []byte{
	// 510 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x93, 0xc1, 0x6f, 0x12, 0x41,
	0x14, 0xc6, 0x1d, 0x28, 0x68, 0x1f, 0xb4, 0xe2, 0x58, 0x0d, 0x41, 0x34, 0x6b, 0x8d, 0x09, 0x31,
	0x06, 0x22, 0x3d, 0x78, 0xf1, 0x52, 0xb2, 0x14, 0xb9, 0x00, 0x99, 0xc2, 0x79, 0x32, 0x76, 0xdf,
	0x52, 0x22, 0xec, 0x6c, 0x66, 0x67, 0x5b, 0xeb, 0xd9, 0xf8, 0x7f, 0xf8, 0x5f, 0x7a, 0x34, 0x33,
	0xb3, 0x2e, 0x4b, 0x62, 0x39, 0x79, 0xdc, 0xf7, 0x7e, 0xdf, 0xdb, 0x6f, 0xbe, 0x79, 0x03, 0xa3,
	0x04, 0xd5, 0xcd, 0x2a, 0x5a, 0xf6, 0x34, 0x46, 0x89, 0x54, 0xe1, 0x5a, 0xde, 0xf6, 0xae, 0xa4,
	0xc2, 0x5e, 0xa8, 0xc4, 0x06, 0x6f, 0xa5, 0xfa, 0xda, 0x53, 0xb8, 0x91, 0x1a, 0x79, 0x98, 0x26,
	0x18, 0xf0, 0xa5, 0x12, 0xf1, 0x35, 0xc7, 0x6f, 0x78, 0x95, 0x6a, 0xe4, 0xab, 0x28, 0x94, 0xdd,
	0x58, 0x49, 0x2d, 0x29, 0x6c, 0x07, 0xb4, 0xde, 0xde, 0x3f, 0xcc, 0xea, 0x9d, 0xa4, 0xf5, 0xfe,
	0x7e, 0xcc, 0x75, 0x78, 0x72, 0x2d, 0x62, 0xcc, 0xe8, 0x3d, 0x43, 0xf5, 0x5d, 0x8c, 0x89, 0xc3,
	0x4e, 0x7f, 0x55, 0xe1, 0x05, 0xb3, 0x8e, 0x2f, 0x8c, 0xe1, 0x91, 0xf9, 0xdf, 0xd0, 0xd9, 0x1d,
	0x47, 0xa1, 0xa4, 0x1f, 0xa1, 0x9e, 0x1d, 0xc8, 0x5a, 0x69, 0x12, 0x8f, 0x74, 0x6a, 0xfd, 0x93,
	0xee, 0x76, 0x7a, 0xd7, 0x6a, 0x7c, 0x0c, 0x59, 0xcd, 0x91, 0xf6, 0x9b, 0x7e, 0x80, 0x67, 0xee,
	0xf0, 0xab, 0x28, 0x4e, 0x35, 0x8f, 0x64, 0x80, 0x3c, 0x12, 0x1b, 0x6c, 0x96, 0xbc, 0x72, 0xe7,
	0x90, 0x51, 0xdb, 0x1c, 0x9b, 0xde, 0x44, 0x06, 0x38, 0x11, 0x1b, 0xa4, 0x67, 0xf0, 0xdc, 0x49,
	0x64, 0xaa, 0x77, 0x35, 0x65, 0xab, 0x79, 0x6a, 0xbb, 0x53, 0xdb, 0xcc, 0x45, 0x6f, 0xe0, 0xc8,
	0xc5, 0x2b, 0x95, 0x63, 0x0f, 0x3c, 0xd2, 0x39, 0x64, 0xf5, 0xbf, 0x45, 0x0b, 0xf9, 0xf0, 0x2a,
	0x41, 0xb5, 0x12, 0xeb, 0xd5, 0x77, 0x0c, 0x78, 0xce, 0xc7, 0xc2, 0x64, 0xa2, 0x51, 0x25, 0xcd,
	0x8a, 0x47, 0x3a, 0x75, 0xd6, 0xde, 0x52, 0xc3, 0x0c, 0x9a, 0xe5, 0x0c, 0xfd, 0x41, 0xc0, 0x0b,
	0x30, 0x14, 0xe9, 0x5a, 0xf3, 0xe2, 0xd9, 0x8a, 0xe9, 0x37, 0xab, 0x5e, 0xb9, 0x53, 0xeb, 0x7f,
	0x2a, 0x06, 0xb4, 0x27, 0xdf, 0xee, 0xdc, 0x62, 0x97, 0x46, 0x3a, 0xbf, 0x8b, 0x71, 0x66, 0x2e,
	0x85, 0xb5, 0xb3, 0xbf, 0x8c, 0xf2, 0x8c, 0x0a, 0x18, 0xfd, 0x49, 0xe0, 0xf5, 0xae, 0x8d, 0x2c,
	0xaf, 0x1d, 0x1f, 0x0f, 0xff, 0x83, 0x8f, 0x97, 0x45, 0x1f, 0x2e, 0xf7, 0x02, 0xd7, 0xba, 0x81,
	0x93, 0x7f, 0xc9, 0xe8, 0x3b, 0xa8, 0x04, 0x66, 0xc7, 0xec, 0xb2, 0x1c, 0xef, 0x2e, 0x8b, 0x2f,
	0xb4, 0x30, 0x24, 0x73, 0x08, 0xed, 0x43, 0xc5, 0xf9, 0x2d, 0xd9, 0xc5, 0x6a, 0x17, 0xd9, 0xc2,
	0x70, 0xe7, 0xc7, 0xa1, 0xa7, 0x11, 0x3c, 0x32, 0xd7, 0x6f, 0xc6, 0x50, 0x80, 0xea, 0x62, 0xb2,
	0xb8, 0x1c, 0xfa, 0x8d, 0x07, 0xf4, 0x31, 0xd4, 0x46, 0xec, 0x7c, 0xf6, 0x99, 0x8f, 0x27, 0xb3,
	0xc5, 0xbc, 0x41, 0x68, 0x03, 0xea, 0xae, 0x30, 0x5d, 0xcc, 0x4d, 0xa5, 0x44, 0x8f, 0x01, 0x2e,
	0x0c, 0xcd, 0x27, 0x53, 0x7f, 0xd8, 0x28, 0x1b, 0x62, 0x30, 0x65, 0xfe, 0x90, 0x65, 0x9a, 0x03,
	0xfa, 0x04, 0x8e, 0xb2, 0x4a, 0x26, 0xaa, 0x0c, 0xce, 0xa1, 0x29, 0xd5, 0xb2, 0xe8, 0x2c, 0x7f,
	0x4b, 0x03, 0x6f, 0x4f, 0xa8, 0xd6, 0xf4, 0x8c, 0xfc, 0x26, 0xe4, 0x4b, 0xd5, 0xbe, 0xb6, 0xb3,
	0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x20, 0x81, 0x79, 0x2e, 0x40, 0x04, 0x00, 0x00,
}