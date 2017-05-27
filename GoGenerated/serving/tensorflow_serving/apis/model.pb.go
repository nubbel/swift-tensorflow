// Code generated by protoc-gen-go.
// source: serving/tensorflow_serving/apis/model.proto
// DO NOT EDIT!

/*
Package tensorflow_serving is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow_serving/apis/model.proto

It has these top-level messages:
	ModelSpec
*/
package tensorflow_serving

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import google_protobuf "github.com/golang/protobuf/ptypes/wrappers"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Metadata for an inference request such as the model name and version.
type ModelSpec struct {
	// Required servable name.
	Name string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	// Optional version. If unspecified, will use the latest (numerical) version.
	// Typically not needed unless coordinating across multiple models that were
	// co-trained and/or have inter-dependencies on the versions used at inference
	// time.
	Version *google_protobuf.Int64Value `protobuf:"bytes,2,opt,name=version" json:"version,omitempty"`
	// A named signature to evaluate. If unspecified, the default signature will
	// be used. Note that only MultiInference will initially support this.
	SignatureName string `protobuf:"bytes,3,opt,name=signature_name,json=signatureName" json:"signature_name,omitempty"`
}

func (m *ModelSpec) Reset()                    { *m = ModelSpec{} }
func (m *ModelSpec) String() string            { return proto.CompactTextString(m) }
func (*ModelSpec) ProtoMessage()               {}
func (*ModelSpec) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *ModelSpec) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *ModelSpec) GetVersion() *google_protobuf.Int64Value {
	if m != nil {
		return m.Version
	}
	return nil
}

func (m *ModelSpec) GetSignatureName() string {
	if m != nil {
		return m.SignatureName
	}
	return ""
}

func init() {
	proto.RegisterType((*ModelSpec)(nil), "tensorflow.serving.ModelSpec")
}

func init() { proto.RegisterFile("serving/tensorflow_serving/apis/model.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 198 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0x2e, 0x4e, 0x2d, 0x2a,
	0xcb, 0xcc, 0x4b, 0xd7, 0x2f, 0x49, 0xcd, 0x2b, 0xce, 0x2f, 0x4a, 0xcb, 0xc9, 0x2f, 0x8f, 0x87,
	0x09, 0x25, 0x16, 0x64, 0x16, 0xeb, 0xe7, 0xe6, 0xa7, 0xa4, 0xe6, 0xe8, 0x15, 0x14, 0xe5, 0x97,
	0xe4, 0x0b, 0x09, 0x21, 0x14, 0xe9, 0x41, 0x15, 0x49, 0xc9, 0xa5, 0xe7, 0xe7, 0xa7, 0xe7, 0xa4,
	0xea, 0x83, 0x55, 0x24, 0x95, 0xa6, 0xe9, 0x97, 0x17, 0x25, 0x16, 0x14, 0xa4, 0x16, 0x15, 0x43,
	0xf4, 0x28, 0xd5, 0x72, 0x71, 0xfa, 0x82, 0x8c, 0x08, 0x2e, 0x48, 0x4d, 0x16, 0x12, 0xe2, 0x62,
	0xc9, 0x4b, 0xcc, 0x4d, 0x95, 0x60, 0x54, 0x60, 0xd4, 0xe0, 0x0c, 0x02, 0xb3, 0x85, 0x4c, 0xb9,
	0xd8, 0xcb, 0x52, 0x8b, 0x8a, 0x33, 0xf3, 0xf3, 0x24, 0x98, 0x14, 0x18, 0x35, 0xb8, 0x8d, 0xa4,
	0xf5, 0x20, 0x46, 0xea, 0xc1, 0x8c, 0xd4, 0xf3, 0xcc, 0x2b, 0x31, 0x33, 0x09, 0x4b, 0xcc, 0x29,
	0x4d, 0x0d, 0x82, 0xa9, 0x15, 0x52, 0xe5, 0xe2, 0x2b, 0xce, 0x4c, 0xcf, 0x4b, 0x2c, 0x29, 0x2d,
	0x4a, 0x8d, 0x07, 0x1b, 0xca, 0x0c, 0x36, 0x94, 0x17, 0x2e, 0xea, 0x97, 0x98, 0x9b, 0xea, 0xc4,
	0xfc, 0x83, 0x91, 0x31, 0x89, 0x0d, 0x6c, 0x92, 0x31, 0x20, 0x00, 0x00, 0xff, 0xff, 0x4a, 0x31,
	0x40, 0x3b, 0xed, 0x00, 0x00, 0x00,
}
