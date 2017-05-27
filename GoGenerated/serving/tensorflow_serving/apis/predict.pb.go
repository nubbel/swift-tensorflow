// Code generated by protoc-gen-go.
// source: serving/tensorflow_serving/apis/predict.proto
// DO NOT EDIT!

/*
Package tensorflow_serving is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow_serving/apis/predict.proto

It has these top-level messages:
	PredictRequest
	PredictResponse
*/
package tensorflow_serving

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow3 "tensorflow/core/framework"
import tensorflow_serving1 "tensorflow_serving/apis"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// PredictRequest specifies which TensorFlow model to run, as well as
// how inputs are mapped to tensors and how outputs are filtered before
// returning to user.
type PredictRequest struct {
	// Model Specification.
	ModelSpec *tensorflow_serving1.ModelSpec `protobuf:"bytes,1,opt,name=model_spec,json=modelSpec" json:"model_spec,omitempty"`
	// Input tensors.
	// Names of input tensor are alias names. The mapping from aliases to real
	// input tensor names is expected to be stored as named generic signature
	// under the key "inputs" in the model export.
	// Each alias listed in a generic signature named "inputs" should be provided
	// exactly once in order to run the prediction.
	Inputs map[string]*tensorflow3.TensorProto `protobuf:"bytes,2,rep,name=inputs" json:"inputs,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
	// Output filter.
	// Names specified are alias names. The mapping from aliases to real output
	// tensor names is expected to be stored as named generic signature under
	// the key "outputs" in the model export.
	// Only tensors specified here will be run/fetched and returned, with the
	// exception that when none is specified, all tensors specified in the
	// named signature will be run/fetched and returned.
	OutputFilter []string `protobuf:"bytes,3,rep,name=output_filter,json=outputFilter" json:"output_filter,omitempty"`
}

func (m *PredictRequest) Reset()                    { *m = PredictRequest{} }
func (m *PredictRequest) String() string            { return proto.CompactTextString(m) }
func (*PredictRequest) ProtoMessage()               {}
func (*PredictRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *PredictRequest) GetModelSpec() *tensorflow_serving1.ModelSpec {
	if m != nil {
		return m.ModelSpec
	}
	return nil
}

func (m *PredictRequest) GetInputs() map[string]*tensorflow3.TensorProto {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *PredictRequest) GetOutputFilter() []string {
	if m != nil {
		return m.OutputFilter
	}
	return nil
}

// Response for PredictRequest on successful run.
type PredictResponse struct {
	// Output tensors.
	Outputs map[string]*tensorflow3.TensorProto `protobuf:"bytes,1,rep,name=outputs" json:"outputs,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
}

func (m *PredictResponse) Reset()                    { *m = PredictResponse{} }
func (m *PredictResponse) String() string            { return proto.CompactTextString(m) }
func (*PredictResponse) ProtoMessage()               {}
func (*PredictResponse) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *PredictResponse) GetOutputs() map[string]*tensorflow3.TensorProto {
	if m != nil {
		return m.Outputs
	}
	return nil
}

func init() {
	proto.RegisterType((*PredictRequest)(nil), "tensorflow.serving.PredictRequest")
	proto.RegisterType((*PredictResponse)(nil), "tensorflow.serving.PredictResponse")
}

func init() { proto.RegisterFile("serving/tensorflow_serving/apis/predict.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 321 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x91, 0xcd, 0x4a, 0xfb, 0x40,
	0x14, 0xc5, 0x99, 0x84, 0x7f, 0xff, 0xf4, 0xb6, 0x7e, 0x30, 0x1b, 0x43, 0x40, 0x28, 0x2d, 0x48,
	0x37, 0x9d, 0x48, 0xdd, 0x88, 0xb8, 0x12, 0x2c, 0x28, 0x88, 0x65, 0xea, 0xbe, 0xd4, 0xf4, 0x56,
	0x42, 0xd3, 0xcc, 0x38, 0x33, 0x69, 0xe9, 0x53, 0xf8, 0x2e, 0x3e, 0x9d, 0x4b, 0xc9, 0x4c, 0x62,
	0x23, 0x7e, 0xac, 0xdc, 0x5d, 0x6e, 0xce, 0xef, 0x9e, 0x73, 0x32, 0x30, 0xd0, 0xa8, 0xd6, 0x49,
	0xf6, 0x14, 0x19, 0xcc, 0xb4, 0x50, 0x8b, 0x54, 0x6c, 0xa6, 0xd5, 0x6a, 0x26, 0x13, 0x1d, 0x49,
	0x85, 0xf3, 0x24, 0x36, 0x4c, 0x2a, 0x61, 0x04, 0xa5, 0x3b, 0x19, 0x2b, 0x65, 0xe1, 0xc9, 0x6e,
	0x17, 0xc5, 0x42, 0x61, 0xb4, 0x50, 0xb3, 0x15, 0x6e, 0x84, 0x5a, 0x96, 0x47, 0x1d, 0x1b, 0xf6,
	0x7e, 0xb2, 0x58, 0x89, 0x39, 0xa6, 0x4e, 0xd4, 0x7d, 0xf1, 0x60, 0x7f, 0xec, 0x2c, 0x39, 0x3e,
	0xe7, 0xa8, 0x0d, 0xbd, 0x04, 0xb0, 0x8a, 0xa9, 0x96, 0x18, 0x07, 0xa4, 0x43, 0xfa, 0xad, 0xe1,
	0x31, 0xfb, 0x1a, 0x84, 0xdd, 0x15, 0xaa, 0x89, 0xc4, 0x98, 0x37, 0x57, 0xd5, 0x48, 0x47, 0xd0,
	0x48, 0x32, 0x99, 0x1b, 0x1d, 0x78, 0x1d, 0xbf, 0xdf, 0x1a, 0xb2, 0xef, 0xc8, 0xcf, 0x8e, 0xec,
	0xc6, 0x02, 0xd7, 0x99, 0x51, 0x5b, 0x5e, 0xd2, 0xb4, 0x07, 0x7b, 0x22, 0x37, 0x32, 0x37, 0xd3,
	0x45, 0x92, 0x1a, 0x54, 0x81, 0xdf, 0xf1, 0xfb, 0x4d, 0xde, 0x76, 0xcb, 0x91, 0xdd, 0x85, 0x1c,
	0x5a, 0x35, 0x96, 0x1e, 0x82, 0xbf, 0xc4, 0xad, 0x8d, 0xdc, 0xe4, 0xc5, 0x48, 0x07, 0xf0, 0x6f,
	0x3d, 0x4b, 0x73, 0x0c, 0x3c, 0x5b, 0xe3, 0xa8, 0x1e, 0xe6, 0xc1, 0x8e, 0xe3, 0xe2, 0x37, 0x70,
	0xa7, 0xba, 0xf0, 0xce, 0x49, 0xf7, 0x95, 0xc0, 0xc1, 0x47, 0x3e, 0x2d, 0x45, 0xa6, 0x91, 0xde,
	0xc2, 0x7f, 0xe7, 0xab, 0x03, 0x62, 0x5b, 0x9d, 0xfe, 0xda, 0xca, 0x51, 0xec, 0xde, 0x21, 0xae,
	0x57, 0x75, 0x20, 0x9c, 0x40, 0xbb, 0xfe, 0xe1, 0x4f, 0x42, 0x5f, 0xf9, 0x6f, 0x84, 0x3c, 0x36,
	0xec, 0x93, 0x9e, 0xbd, 0x07, 0x00, 0x00, 0xff, 0xff, 0x67, 0x43, 0xcd, 0x2d, 0x64, 0x02, 0x00,
	0x00,
}
