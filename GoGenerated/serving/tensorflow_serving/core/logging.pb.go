// Code generated by protoc-gen-go.
// source: serving/tensorflow_serving/core/logging.proto
// DO NOT EDIT!

/*
Package tensorflow_serving is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow_serving/core/logging.proto

It has these top-level messages:
	LogMetadata
*/
package tensorflow_serving

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow_serving1 "tensorflow_serving/apis"
import tensorflow_serving3 "tensorflow_serving/config"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Metadata logged along with the request logs.
type LogMetadata struct {
	ModelSpec      *tensorflow_serving1.ModelSpec      `protobuf:"bytes,1,opt,name=model_spec,json=modelSpec" json:"model_spec,omitempty"`
	SamplingConfig *tensorflow_serving3.SamplingConfig `protobuf:"bytes,2,opt,name=sampling_config,json=samplingConfig" json:"sampling_config,omitempty"`
}

func (m *LogMetadata) Reset()                    { *m = LogMetadata{} }
func (m *LogMetadata) String() string            { return proto.CompactTextString(m) }
func (*LogMetadata) ProtoMessage()               {}
func (*LogMetadata) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *LogMetadata) GetModelSpec() *tensorflow_serving1.ModelSpec {
	if m != nil {
		return m.ModelSpec
	}
	return nil
}

func (m *LogMetadata) GetSamplingConfig() *tensorflow_serving3.SamplingConfig {
	if m != nil {
		return m.SamplingConfig
	}
	return nil
}

func init() {
	proto.RegisterType((*LogMetadata)(nil), "tensorflow.serving.LogMetadata")
}

func init() { proto.RegisterFile("serving/tensorflow_serving/core/logging.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 195 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0x2d, 0x4e, 0x2d, 0x2a,
	0xcb, 0xcc, 0x4b, 0xd7, 0x2f, 0x49, 0xcd, 0x2b, 0xce, 0x2f, 0x4a, 0xcb, 0xc9, 0x2f, 0x8f, 0x87,
	0x09, 0x25, 0xe7, 0x17, 0xa5, 0xea, 0xe7, 0xe4, 0xa7, 0xa7, 0x67, 0xe6, 0xa5, 0xeb, 0x15, 0x14,
	0xe5, 0x97, 0xe4, 0x0b, 0x09, 0x21, 0x94, 0xe9, 0x41, 0x95, 0x49, 0x29, 0x63, 0xd1, 0x9a, 0x58,
	0x90, 0x59, 0xac, 0x9f, 0x9b, 0x9f, 0x92, 0x9a, 0x03, 0xd1, 0x28, 0xa5, 0x87, 0xd5, 0xfc, 0xbc,
	0xb4, 0xcc, 0x74, 0x98, 0x0d, 0xf1, 0x10, 0x2e, 0x44, 0xbd, 0xd2, 0x0c, 0x46, 0x2e, 0x6e, 0x9f,
	0xfc, 0x74, 0xdf, 0xd4, 0x92, 0xc4, 0x94, 0xc4, 0x92, 0x44, 0x21, 0x1b, 0x2e, 0x2e, 0xb0, 0x71,
	0xf1, 0xc5, 0x05, 0xa9, 0xc9, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0xdc, 0x46, 0xb2, 0x7a, 0x98, 0xae,
	0xd1, 0xf3, 0x05, 0xa9, 0x0a, 0x2e, 0x48, 0x4d, 0x0e, 0xe2, 0xcc, 0x85, 0x31, 0x85, 0xbc, 0xb9,
	0xf8, 0x8b, 0x13, 0x73, 0x0b, 0x72, 0x10, 0xd6, 0x48, 0x30, 0x81, 0x8d, 0x50, 0xc2, 0x66, 0x44,
	0x30, 0x54, 0xa9, 0x33, 0x58, 0x65, 0x10, 0x5f, 0x31, 0x0a, 0xdf, 0x89, 0xf9, 0x07, 0x23, 0x63,
	0x12, 0x1b, 0xd8, 0x99, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x8c, 0xb2, 0x85, 0xe1, 0x40,
	0x01, 0x00, 0x00,
}
