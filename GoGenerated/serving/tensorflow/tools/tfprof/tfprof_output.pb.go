// Code generated by protoc-gen-go.
// source: serving/tensorflow/tools/tfprof/tfprof_output.proto
// DO NOT EDIT!

/*
Package tensorflow_tfprof is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/tools/tfprof/tfprof_output.proto

It has these top-level messages:
	TFProfTensorProto
	TFGraphNodeProto
	TFMultiGraphNodeProto
*/
package tensorflow_tfprof

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow "tensorflow/core/framework"
import tensorflow1 "tensorflow/core/framework"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type TFProfTensorProto struct {
	Dtype *tensorflow1.DataType `protobuf:"varint,1,opt,name=dtype,enum=tensorflow.DataType" json:"dtype,omitempty"`
	// Flatten tensor in row-major.
	// Only one of the following array is set.
	ValueDouble      []float64 `protobuf:"fixed64,2,rep,name=value_double,json=valueDouble" json:"value_double,omitempty"`
	ValueInt64       []int64   `protobuf:"varint,3,rep,name=value_int64,json=valueInt64" json:"value_int64,omitempty"`
	ValueStr         []string  `protobuf:"bytes,4,rep,name=value_str,json=valueStr" json:"value_str,omitempty"`
	XXX_unrecognized []byte    `json:"-"`
}

func (m *TFProfTensorProto) Reset()                    { *m = TFProfTensorProto{} }
func (m *TFProfTensorProto) String() string            { return proto.CompactTextString(m) }
func (*TFProfTensorProto) ProtoMessage()               {}
func (*TFProfTensorProto) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *TFProfTensorProto) GetDtype() tensorflow1.DataType {
	if m != nil && m.Dtype != nil {
		return *m.Dtype
	}
	return tensorflow1.DataType_DT_INVALID
}

func (m *TFProfTensorProto) GetValueDouble() []float64 {
	if m != nil {
		return m.ValueDouble
	}
	return nil
}

func (m *TFProfTensorProto) GetValueInt64() []int64 {
	if m != nil {
		return m.ValueInt64
	}
	return nil
}

func (m *TFProfTensorProto) GetValueStr() []string {
	if m != nil {
		return m.ValueStr
	}
	return nil
}

// A node in TensorFlow graph. Used by scope/graph view.
type TFGraphNodeProto struct {
	// op name.
	Name *string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	// tensor value restored from checkpoint.
	TensorValue *TFProfTensorProto `protobuf:"bytes,15,opt,name=tensor_value,json=tensorValue" json:"tensor_value,omitempty"`
	// op execution time.
	ExecMicros *int64 `protobuf:"varint,2,opt,name=exec_micros,json=execMicros" json:"exec_micros,omitempty"`
	// Total requested bytes by the op.
	RequestedBytes *int64 `protobuf:"varint,3,opt,name=requested_bytes,json=requestedBytes" json:"requested_bytes,omitempty"`
	// Number of parameters if available.
	Parameters *int64 `protobuf:"varint,4,opt,name=parameters" json:"parameters,omitempty"`
	// Number of float operations.
	FloatOps *int64 `protobuf:"varint,13,opt,name=float_ops,json=floatOps" json:"float_ops,omitempty"`
	// Device the op is assigned to.
	// Since an op can fire multiple kernel calls, there can be multiple devices.
	Devices []string `protobuf:"bytes,10,rep,name=devices" json:"devices,omitempty"`
	// The following are the aggregated stats from all accounted children and
	// the node itself. The actual children depend on the data structure used
	// (scope, graph).
	TotalExecMicros     *int64 `protobuf:"varint,6,opt,name=total_exec_micros,json=totalExecMicros" json:"total_exec_micros,omitempty"`
	TotalRequestedBytes *int64 `protobuf:"varint,7,opt,name=total_requested_bytes,json=totalRequestedBytes" json:"total_requested_bytes,omitempty"`
	TotalParameters     *int64 `protobuf:"varint,8,opt,name=total_parameters,json=totalParameters" json:"total_parameters,omitempty"`
	TotalFloatOps       *int64 `protobuf:"varint,14,opt,name=total_float_ops,json=totalFloatOps" json:"total_float_ops,omitempty"`
	// shape information, if available.
	Shapes []*tensorflow.TensorShapeProto `protobuf:"bytes,11,rep,name=shapes" json:"shapes,omitempty"`
	// Descendants of the graph. The actual descendants depend on the data
	// structure used (scope, graph).
	Children         []*TFGraphNodeProto `protobuf:"bytes,12,rep,name=children" json:"children,omitempty"`
	XXX_unrecognized []byte              `json:"-"`
}

func (m *TFGraphNodeProto) Reset()                    { *m = TFGraphNodeProto{} }
func (m *TFGraphNodeProto) String() string            { return proto.CompactTextString(m) }
func (*TFGraphNodeProto) ProtoMessage()               {}
func (*TFGraphNodeProto) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *TFGraphNodeProto) GetName() string {
	if m != nil && m.Name != nil {
		return *m.Name
	}
	return ""
}

func (m *TFGraphNodeProto) GetTensorValue() *TFProfTensorProto {
	if m != nil {
		return m.TensorValue
	}
	return nil
}

func (m *TFGraphNodeProto) GetExecMicros() int64 {
	if m != nil && m.ExecMicros != nil {
		return *m.ExecMicros
	}
	return 0
}

func (m *TFGraphNodeProto) GetRequestedBytes() int64 {
	if m != nil && m.RequestedBytes != nil {
		return *m.RequestedBytes
	}
	return 0
}

func (m *TFGraphNodeProto) GetParameters() int64 {
	if m != nil && m.Parameters != nil {
		return *m.Parameters
	}
	return 0
}

func (m *TFGraphNodeProto) GetFloatOps() int64 {
	if m != nil && m.FloatOps != nil {
		return *m.FloatOps
	}
	return 0
}

func (m *TFGraphNodeProto) GetDevices() []string {
	if m != nil {
		return m.Devices
	}
	return nil
}

func (m *TFGraphNodeProto) GetTotalExecMicros() int64 {
	if m != nil && m.TotalExecMicros != nil {
		return *m.TotalExecMicros
	}
	return 0
}

func (m *TFGraphNodeProto) GetTotalRequestedBytes() int64 {
	if m != nil && m.TotalRequestedBytes != nil {
		return *m.TotalRequestedBytes
	}
	return 0
}

func (m *TFGraphNodeProto) GetTotalParameters() int64 {
	if m != nil && m.TotalParameters != nil {
		return *m.TotalParameters
	}
	return 0
}

func (m *TFGraphNodeProto) GetTotalFloatOps() int64 {
	if m != nil && m.TotalFloatOps != nil {
		return *m.TotalFloatOps
	}
	return 0
}

func (m *TFGraphNodeProto) GetShapes() []*tensorflow.TensorShapeProto {
	if m != nil {
		return m.Shapes
	}
	return nil
}

func (m *TFGraphNodeProto) GetChildren() []*TFGraphNodeProto {
	if m != nil {
		return m.Children
	}
	return nil
}

// A node that groups multiple TFGraphNodeProto.
// Depending on the 'view', the semantics of the TFmultiGraphNodeProto
// is different:
// code view: A node groups all TensorFlow graph nodes created by the
//            Python code.
// op view:   A node groups all TensorFlow graph nodes that are of type
//            of the op (e.g. MatMul, Conv2D).
type TFMultiGraphNodeProto struct {
	// Name of the node.
	Name *string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	// code execution time.
	ExecMicros *int64 `protobuf:"varint,2,opt,name=exec_micros,json=execMicros" json:"exec_micros,omitempty"`
	// Total requested bytes by the code.
	RequestedBytes *int64 `protobuf:"varint,3,opt,name=requested_bytes,json=requestedBytes" json:"requested_bytes,omitempty"`
	// Number of parameters if available.
	Parameters *int64 `protobuf:"varint,4,opt,name=parameters" json:"parameters,omitempty"`
	// Number of float operations.
	FloatOps *int64 `protobuf:"varint,5,opt,name=float_ops,json=floatOps" json:"float_ops,omitempty"`
	// The following are the aggregated stats from descendants.
	// The actual descendants depend on the data structure used.
	TotalExecMicros     *int64 `protobuf:"varint,6,opt,name=total_exec_micros,json=totalExecMicros" json:"total_exec_micros,omitempty"`
	TotalRequestedBytes *int64 `protobuf:"varint,7,opt,name=total_requested_bytes,json=totalRequestedBytes" json:"total_requested_bytes,omitempty"`
	TotalParameters     *int64 `protobuf:"varint,8,opt,name=total_parameters,json=totalParameters" json:"total_parameters,omitempty"`
	TotalFloatOps       *int64 `protobuf:"varint,9,opt,name=total_float_ops,json=totalFloatOps" json:"total_float_ops,omitempty"`
	// TensorFlow graph nodes contained by the TFMultiGraphNodeProto.
	GraphNodes []*TFGraphNodeProto `protobuf:"bytes,10,rep,name=graph_nodes,json=graphNodes" json:"graph_nodes,omitempty"`
	// Descendants of the node. The actual descendants depend on the data
	// structure used.
	Children         []*TFMultiGraphNodeProto `protobuf:"bytes,11,rep,name=children" json:"children,omitempty"`
	XXX_unrecognized []byte                   `json:"-"`
}

func (m *TFMultiGraphNodeProto) Reset()                    { *m = TFMultiGraphNodeProto{} }
func (m *TFMultiGraphNodeProto) String() string            { return proto.CompactTextString(m) }
func (*TFMultiGraphNodeProto) ProtoMessage()               {}
func (*TFMultiGraphNodeProto) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *TFMultiGraphNodeProto) GetName() string {
	if m != nil && m.Name != nil {
		return *m.Name
	}
	return ""
}

func (m *TFMultiGraphNodeProto) GetExecMicros() int64 {
	if m != nil && m.ExecMicros != nil {
		return *m.ExecMicros
	}
	return 0
}

func (m *TFMultiGraphNodeProto) GetRequestedBytes() int64 {
	if m != nil && m.RequestedBytes != nil {
		return *m.RequestedBytes
	}
	return 0
}

func (m *TFMultiGraphNodeProto) GetParameters() int64 {
	if m != nil && m.Parameters != nil {
		return *m.Parameters
	}
	return 0
}

func (m *TFMultiGraphNodeProto) GetFloatOps() int64 {
	if m != nil && m.FloatOps != nil {
		return *m.FloatOps
	}
	return 0
}

func (m *TFMultiGraphNodeProto) GetTotalExecMicros() int64 {
	if m != nil && m.TotalExecMicros != nil {
		return *m.TotalExecMicros
	}
	return 0
}

func (m *TFMultiGraphNodeProto) GetTotalRequestedBytes() int64 {
	if m != nil && m.TotalRequestedBytes != nil {
		return *m.TotalRequestedBytes
	}
	return 0
}

func (m *TFMultiGraphNodeProto) GetTotalParameters() int64 {
	if m != nil && m.TotalParameters != nil {
		return *m.TotalParameters
	}
	return 0
}

func (m *TFMultiGraphNodeProto) GetTotalFloatOps() int64 {
	if m != nil && m.TotalFloatOps != nil {
		return *m.TotalFloatOps
	}
	return 0
}

func (m *TFMultiGraphNodeProto) GetGraphNodes() []*TFGraphNodeProto {
	if m != nil {
		return m.GraphNodes
	}
	return nil
}

func (m *TFMultiGraphNodeProto) GetChildren() []*TFMultiGraphNodeProto {
	if m != nil {
		return m.Children
	}
	return nil
}

func init() {
	proto.RegisterType((*TFProfTensorProto)(nil), "tensorflow.tfprof.TFProfTensorProto")
	proto.RegisterType((*TFGraphNodeProto)(nil), "tensorflow.tfprof.TFGraphNodeProto")
	proto.RegisterType((*TFMultiGraphNodeProto)(nil), "tensorflow.tfprof.TFMultiGraphNodeProto")
}

func init() {
	proto.RegisterFile("serving/tensorflow/tools/tfprof/tfprof_output.proto", fileDescriptor0)
}

var fileDescriptor0 = []byte{
	// 544 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x52, 0xdd, 0x6e, 0xd3, 0x4c,
	0x10, 0x95, 0xeb, 0xb4, 0x4d, 0xc6, 0x69, 0xd2, 0xec, 0xf7, 0x55, 0x5a, 0x15, 0x04, 0x26, 0xfc,
	0x99, 0x0a, 0x25, 0x52, 0xa8, 0xb8, 0x45, 0x42, 0x21, 0x15, 0x17, 0x85, 0xc8, 0x8d, 0xb8, 0xb5,
	0xdc, 0x78, 0x9d, 0x58, 0x38, 0x5e, 0xb3, 0xbb, 0x4e, 0xc9, 0xdb, 0xf0, 0x1c, 0xbc, 0x15, 0x6f,
	0x80, 0x76, 0x36, 0xa9, 0xdd, 0x36, 0x42, 0xbd, 0x83, 0xab, 0x64, 0xcf, 0x9c, 0x33, 0x3e, 0x33,
	0x67, 0xe0, 0x8d, 0x64, 0x62, 0x99, 0x64, 0xb3, 0xbe, 0x62, 0x99, 0xe4, 0x22, 0x4e, 0xf9, 0x55,
	0x5f, 0x71, 0x9e, 0xca, 0xbe, 0x8a, 0x73, 0xc1, 0xe3, 0xf5, 0x4f, 0xc0, 0x0b, 0x95, 0x17, 0xaa,
	0x97, 0x0b, 0xae, 0x38, 0xe9, 0x94, 0xe4, 0x9e, 0xa9, 0x1f, 0xbf, 0xae, 0xe8, 0xa7, 0x5c, 0xb0,
	0x7e, 0x2c, 0xc2, 0x05, 0xbb, 0xe2, 0xe2, 0xeb, 0xba, 0x73, 0x20, 0xe7, 0x61, 0xce, 0x4c, 0x83,
	0xe3, 0xe7, 0x7f, 0x60, 0xaf, 0x72, 0x26, 0x0d, 0xad, 0xfb, 0xc3, 0x82, 0xce, 0x64, 0x34, 0x16,
	0x3c, 0x9e, 0x20, 0x7f, 0x8c, 0x5f, 0x3f, 0x81, 0xdd, 0x48, 0xb3, 0xa8, 0xe5, 0x5a, 0x5e, 0x6b,
	0xf0, 0x7f, 0xaf, 0xe2, 0x66, 0x18, 0xaa, 0x70, 0xb2, 0xca, 0x99, 0x6f, 0x28, 0xe4, 0x09, 0x34,
	0x97, 0x61, 0x5a, 0xb0, 0x20, 0xe2, 0xc5, 0x65, 0xca, 0xe8, 0x8e, 0x6b, 0x7b, 0x96, 0xef, 0x20,
	0x36, 0x44, 0x88, 0x3c, 0x06, 0xf3, 0x0c, 0x92, 0x4c, 0xbd, 0x3d, 0xa5, 0xb6, 0x6b, 0x7b, 0xb6,
	0x0f, 0x08, 0x7d, 0xd4, 0x08, 0x79, 0x00, 0x0d, 0x43, 0x90, 0x4a, 0xd0, 0x9a, 0x6b, 0x7b, 0x0d,
	0xbf, 0x8e, 0xc0, 0x85, 0x12, 0xdd, 0x9f, 0x35, 0x38, 0x9c, 0x8c, 0xce, 0x44, 0x98, 0xcf, 0x3f,
	0xf1, 0x88, 0x19, 0x87, 0x04, 0x6a, 0x59, 0xb8, 0x30, 0x06, 0x1b, 0x3e, 0xfe, 0x27, 0x67, 0xd0,
	0x5c, 0x2f, 0x02, 0xb5, 0xb4, 0xed, 0x5a, 0x9e, 0x33, 0x78, 0xd6, 0xbb, 0xb3, 0xca, 0xde, 0x9d,
	0x89, 0x7d, 0xc7, 0x90, 0xbe, 0x68, 0xa1, 0xf6, 0xcb, 0xbe, 0xb3, 0x69, 0xb0, 0x48, 0xa6, 0x82,
	0x4b, 0xba, 0xe3, 0x5a, 0xda, 0xaf, 0x86, 0xce, 0x11, 0x21, 0x2f, 0xa1, 0x2d, 0xd8, 0xb7, 0x82,
	0x49, 0xc5, 0xa2, 0xe0, 0x72, 0xa5, 0x98, 0xa4, 0x36, 0x92, 0x5a, 0xd7, 0xf0, 0x7b, 0x8d, 0x92,
	0x47, 0x00, 0x79, 0xa8, 0x17, 0xaf, 0x98, 0x90, 0xb4, 0x66, 0x1a, 0x95, 0x88, 0x1e, 0x3c, 0x4e,
	0x79, 0xa8, 0x02, 0x9e, 0x4b, 0x7a, 0x80, 0xe5, 0x3a, 0x02, 0x9f, 0x73, 0x49, 0x28, 0xec, 0x47,
	0x6c, 0x99, 0x4c, 0x99, 0xa4, 0x80, 0x3b, 0xd9, 0x3c, 0xc9, 0x09, 0x74, 0x14, 0x57, 0x61, 0x1a,
	0x54, 0x6d, 0xee, 0xa1, 0xbc, 0x8d, 0x85, 0x0f, 0xa5, 0xd7, 0x01, 0x1c, 0x19, 0xee, 0x6d, 0xc7,
	0xfb, 0xc8, 0xff, 0x0f, 0x8b, 0xfe, 0x4d, 0xdb, 0xaf, 0xe0, 0xd0, 0x68, 0x2a, 0xe6, 0xeb, 0x95,
	0xf6, 0xe3, 0x72, 0x82, 0x17, 0x60, 0xa0, 0xa0, 0x9c, 0xa3, 0x85, 0xcc, 0x03, 0x84, 0x47, 0x9b,
	0x61, 0x4e, 0x61, 0x0f, 0xcf, 0x53, 0x52, 0xc7, 0xb5, 0x3d, 0x67, 0xf0, 0xb0, 0x1a, 0x8b, 0x49,
	0xe2, 0x42, 0xd7, 0x4d, 0x1c, 0x6b, 0x2e, 0x79, 0x07, 0xf5, 0xe9, 0x3c, 0x49, 0x23, 0xc1, 0x32,
	0xda, 0x44, 0xdd, 0xd3, 0xad, 0x71, 0xde, 0xbc, 0x0e, 0xff, 0x5a, 0xd4, 0xfd, 0x65, 0xc3, 0xd1,
	0x64, 0x74, 0x5e, 0xa4, 0x2a, 0xb9, 0xc7, 0x05, 0xfd, 0xa5, 0xe0, 0x77, 0x6f, 0x05, 0xff, 0x6f,
	0xc7, 0xdb, 0xd8, 0x16, 0xef, 0x10, 0x9c, 0x99, 0xde, 0x6f, 0x90, 0xf1, 0x68, 0x7d, 0xaf, 0xf7,
	0xcc, 0x0a, 0x66, 0x9b, 0xb7, 0xee, 0x52, 0xc6, 0x6d, 0xce, 0xc4, 0xdb, 0xda, 0x62, 0x4b, 0x9e,
	0x65, 0xe6, 0xbf, 0x03, 0x00, 0x00, 0xff, 0xff, 0x24, 0x48, 0xf0, 0x28, 0x71, 0x05, 0x00, 0x00,
}