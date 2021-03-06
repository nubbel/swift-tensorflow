// Code generated by protoc-gen-go.
// source: serving/tensorflow/core/framework/function.proto
// DO NOT EDIT!

/*
Package tensorflow is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/core/framework/function.proto

It has these top-level messages:
	FunctionDefLibrary
	FunctionDef
	GradientDef
*/
package tensorflow

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow5 "tensorflow/core/framework"
import tensorflow6 "tensorflow/core/framework"
import tensorflow7 "tensorflow/core/framework"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// A library is a set of named functions.
type FunctionDefLibrary struct {
	Function []*FunctionDef `protobuf:"bytes,1,rep,name=function" json:"function,omitempty"`
	Gradient []*GradientDef `protobuf:"bytes,2,rep,name=gradient" json:"gradient,omitempty"`
}

func (m *FunctionDefLibrary) Reset()                    { *m = FunctionDefLibrary{} }
func (m *FunctionDefLibrary) String() string            { return proto.CompactTextString(m) }
func (*FunctionDefLibrary) ProtoMessage()               {}
func (*FunctionDefLibrary) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *FunctionDefLibrary) GetFunction() []*FunctionDef {
	if m != nil {
		return m.Function
	}
	return nil
}

func (m *FunctionDefLibrary) GetGradient() []*GradientDef {
	if m != nil {
		return m.Gradient
	}
	return nil
}

// A function can be instantiated when the runtime can bind every attr
// with a value. When a GraphDef has a call to a function, it must
// have binding for every attr defined in the signature.
//
// TODO(zhifengc):
//   * device spec, etc.
type FunctionDef struct {
	// The definition of the function's name, arguments, return values,
	// attrs etc.
	Signature *tensorflow7.OpDef `protobuf:"bytes,1,opt,name=signature" json:"signature,omitempty"`
	// Attributes specific to this function definition.
	Attr map[string]*tensorflow5.AttrValue `protobuf:"bytes,5,rep,name=attr" json:"attr,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
	// By convention, "op" in node_def is resolved by consulting with a
	// user-defined library first. If not resolved, "func" is assumed to
	// be a builtin op.
	NodeDef []*tensorflow6.NodeDef `protobuf:"bytes,3,rep,name=node_def,json=nodeDef" json:"node_def,omitempty"`
	// A mapping from the output arg names from `signature` to the
	// outputs from `node_def` that should be returned by the function.
	Ret map[string]string `protobuf:"bytes,4,rep,name=ret" json:"ret,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
}

func (m *FunctionDef) Reset()                    { *m = FunctionDef{} }
func (m *FunctionDef) String() string            { return proto.CompactTextString(m) }
func (*FunctionDef) ProtoMessage()               {}
func (*FunctionDef) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *FunctionDef) GetSignature() *tensorflow7.OpDef {
	if m != nil {
		return m.Signature
	}
	return nil
}

func (m *FunctionDef) GetAttr() map[string]*tensorflow5.AttrValue {
	if m != nil {
		return m.Attr
	}
	return nil
}

func (m *FunctionDef) GetNodeDef() []*tensorflow6.NodeDef {
	if m != nil {
		return m.NodeDef
	}
	return nil
}

func (m *FunctionDef) GetRet() map[string]string {
	if m != nil {
		return m.Ret
	}
	return nil
}

// GradientDef defines the gradient function of a function defined in
// a function library.
//
// A gradient function g (specified by gradient_func) for a function f
// (specified by function_name) must follow the following:
//
// The function 'f' must be a numerical function which takes N inputs
// and produces M outputs. Its gradient function 'g', which is a
// function taking N + M inputs and produces N outputs.
//
// I.e. if we have
//    (y1, y2, ..., y_M) = f(x1, x2, ..., x_N),
// then, g is
//    (dL/dx1, dL/dx2, ..., dL/dx_N) = g(x1, x2, ..., x_N,
//                                      dL/dy1, dL/dy2, ..., dL/dy_M),
// where L is a scalar-value function of (x1, x2, ..., xN) (e.g., the
// loss function). dL/dx_i is the partial derivative of L with respect
// to x_i.
type GradientDef struct {
	FunctionName string `protobuf:"bytes,1,opt,name=function_name,json=functionName" json:"function_name,omitempty"`
	GradientFunc string `protobuf:"bytes,2,opt,name=gradient_func,json=gradientFunc" json:"gradient_func,omitempty"`
}

func (m *GradientDef) Reset()                    { *m = GradientDef{} }
func (m *GradientDef) String() string            { return proto.CompactTextString(m) }
func (*GradientDef) ProtoMessage()               {}
func (*GradientDef) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *GradientDef) GetFunctionName() string {
	if m != nil {
		return m.FunctionName
	}
	return ""
}

func (m *GradientDef) GetGradientFunc() string {
	if m != nil {
		return m.GradientFunc
	}
	return ""
}

func init() {
	proto.RegisterType((*FunctionDefLibrary)(nil), "tensorflow.FunctionDefLibrary")
	proto.RegisterType((*FunctionDef)(nil), "tensorflow.FunctionDef")
	proto.RegisterType((*GradientDef)(nil), "tensorflow.GradientDef")
}

func init() { proto.RegisterFile("serving/tensorflow/core/framework/function.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 396 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0x4f, 0xab, 0xd3, 0x40,
	0x14, 0xc5, 0x49, 0xf2, 0x9e, 0x36, 0x37, 0x4f, 0xd1, 0x51, 0x71, 0xc8, 0xaa, 0x56, 0x90, 0xa2,
	0x90, 0x48, 0x1f, 0x8a, 0xb8, 0xb3, 0xf8, 0x67, 0x23, 0xb5, 0x64, 0xa1, 0xcb, 0x30, 0x6d, 0x6e,
	0x42, 0x68, 0x3b, 0x53, 0x26, 0xd3, 0x96, 0x6e, 0xfc, 0xae, 0x7e, 0x0b, 0x97, 0x32, 0x93, 0x4c,
	0x33, 0xe0, 0xcb, 0x6e, 0x98, 0xf9, 0x9d, 0x73, 0xee, 0xdc, 0x7b, 0xe1, 0x6d, 0x83, 0xf2, 0x58,
	0xf3, 0x2a, 0x55, 0xc8, 0x1b, 0x21, 0xcb, 0xad, 0x38, 0xa5, 0x6b, 0x21, 0x31, 0x2d, 0x25, 0xdb,
	0xe1, 0x49, 0xc8, 0x4d, 0x5a, 0x1e, 0xf8, 0x5a, 0xd5, 0x82, 0x27, 0x7b, 0x29, 0x94, 0x20, 0xd0,
	0x93, 0xf1, 0xeb, 0x61, 0x15, 0x53, 0x4a, 0xe6, 0x47, 0xb6, 0x3d, 0x60, 0xab, 0x8b, 0xa7, 0xc3,
	0x2c, 0x17, 0x05, 0xe6, 0x05, 0x96, 0x1d, 0xf9, 0x6a, 0x98, 0x14, 0xfb, 0x9e, 0x9b, 0xfc, 0x06,
	0xf2, 0xb5, 0xab, 0xed, 0x33, 0x96, 0xdf, 0xeb, 0x95, 0x64, 0xf2, 0x4c, 0x6e, 0x61, 0x64, 0x2b,
	0xa6, 0xde, 0x38, 0x98, 0x46, 0xb3, 0xe7, 0x49, 0x6f, 0x98, 0x38, 0x8a, 0xec, 0x02, 0x6a, 0x51,
	0x25, 0x59, 0x51, 0x23, 0x57, 0xd4, 0xff, 0x5f, 0xf4, 0xad, 0x7b, 0x33, 0x22, 0x0b, 0x4e, 0xfe,
	0xf8, 0x10, 0x39, 0x76, 0x24, 0x85, 0xb0, 0xa9, 0x2b, 0xce, 0xd4, 0x41, 0x22, 0xf5, 0xc6, 0xde,
	0x34, 0x9a, 0x3d, 0x76, 0x5d, 0x7e, 0xec, 0xb5, 0xbe, 0x67, 0xc8, 0x3b, 0xb8, 0xd2, 0x6d, 0xa2,
	0xd7, 0x26, 0xf1, 0xc5, 0x40, 0x99, 0xc9, 0x27, 0xa5, 0xe4, 0x17, 0xae, 0xe4, 0x39, 0x33, 0x38,
	0x49, 0x60, 0x64, 0x3b, 0x46, 0x03, 0x23, 0x7d, 0xe2, 0x4a, 0x17, 0xa2, 0x40, 0x1d, 0x74, 0x9f,
	0xb7, 0x07, 0x32, 0x83, 0x40, 0xa2, 0xa2, 0x57, 0x06, 0x1d, 0x0f, 0xa5, 0x64, 0xa8, 0xda, 0x10,
	0x0d, 0xc7, 0x0b, 0x08, 0x2f, 0xb1, 0xe4, 0x11, 0x04, 0x1b, 0x3c, 0x9b, 0x2f, 0x85, 0x99, 0x3e,
	0x92, 0x37, 0x70, 0x6d, 0x66, 0x4b, 0x7d, 0xf3, 0xcd, 0x67, 0xae, 0xa9, 0xd6, 0xfd, 0xd4, 0x8f,
	0x59, 0xcb, 0x7c, 0xf4, 0x3f, 0x78, 0xf1, 0x7b, 0x18, 0xd9, 0x80, 0x3b, 0xec, 0x9e, 0xba, 0x76,
	0xa1, 0xa3, 0x9b, 0xfc, 0x82, 0xc8, 0x69, 0x3e, 0x79, 0x09, 0x0f, 0xec, 0xcc, 0x72, 0xce, 0x76,
	0xd8, 0x99, 0xdc, 0xd8, 0xcb, 0x05, 0xdb, 0xa1, 0x86, 0xec, 0x8c, 0x72, 0xfd, 0xd0, 0xb9, 0xde,
	0xd8, 0x4b, 0xfd, 0xeb, 0x79, 0x0a, 0x54, 0xc8, 0xca, 0xad, 0xfb, 0xb2, 0x65, 0xf3, 0x87, 0xb6,
	0x2f, 0x4b, 0xbd, 0x67, 0xcd, 0xd2, 0xfb, 0xeb, 0x79, 0xab, 0x7b, 0x66, 0xe9, 0x6e, 0xff, 0x05,
	0x00, 0x00, 0xff, 0xff, 0xd1, 0x36, 0xb8, 0x0b, 0x32, 0x03, 0x00, 0x00,
}
