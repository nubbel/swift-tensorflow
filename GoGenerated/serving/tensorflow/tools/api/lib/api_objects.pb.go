// Code generated by protoc-gen-go.
// source: serving/tensorflow/tools/api/lib/api_objects.proto
// DO NOT EDIT!

/*
Package third_party_tensorflow_tools_api is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/tools/api/lib/api_objects.proto

It has these top-level messages:
	TFAPIMember
	TFAPIMethod
	TFAPIModule
	TFAPIClass
	TFAPIObject
*/
package third_party_tensorflow_tools_api

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type TFAPIMember struct {
	Name             *string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	Mtype            *string `protobuf:"bytes,2,opt,name=mtype" json:"mtype,omitempty"`
	XXX_unrecognized []byte  `json:"-"`
}

func (m *TFAPIMember) Reset()                    { *m = TFAPIMember{} }
func (m *TFAPIMember) String() string            { return proto.CompactTextString(m) }
func (*TFAPIMember) ProtoMessage()               {}
func (*TFAPIMember) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *TFAPIMember) GetName() string {
	if m != nil && m.Name != nil {
		return *m.Name
	}
	return ""
}

func (m *TFAPIMember) GetMtype() string {
	if m != nil && m.Mtype != nil {
		return *m.Mtype
	}
	return ""
}

type TFAPIMethod struct {
	Name             *string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	Path             *string `protobuf:"bytes,2,opt,name=path" json:"path,omitempty"`
	Argspec          *string `protobuf:"bytes,3,opt,name=argspec" json:"argspec,omitempty"`
	XXX_unrecognized []byte  `json:"-"`
}

func (m *TFAPIMethod) Reset()                    { *m = TFAPIMethod{} }
func (m *TFAPIMethod) String() string            { return proto.CompactTextString(m) }
func (*TFAPIMethod) ProtoMessage()               {}
func (*TFAPIMethod) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *TFAPIMethod) GetName() string {
	if m != nil && m.Name != nil {
		return *m.Name
	}
	return ""
}

func (m *TFAPIMethod) GetPath() string {
	if m != nil && m.Path != nil {
		return *m.Path
	}
	return ""
}

func (m *TFAPIMethod) GetArgspec() string {
	if m != nil && m.Argspec != nil {
		return *m.Argspec
	}
	return ""
}

type TFAPIModule struct {
	Member           []*TFAPIMember `protobuf:"bytes,1,rep,name=member" json:"member,omitempty"`
	MemberMethod     []*TFAPIMethod `protobuf:"bytes,2,rep,name=member_method,json=memberMethod" json:"member_method,omitempty"`
	XXX_unrecognized []byte         `json:"-"`
}

func (m *TFAPIModule) Reset()                    { *m = TFAPIModule{} }
func (m *TFAPIModule) String() string            { return proto.CompactTextString(m) }
func (*TFAPIModule) ProtoMessage()               {}
func (*TFAPIModule) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *TFAPIModule) GetMember() []*TFAPIMember {
	if m != nil {
		return m.Member
	}
	return nil
}

func (m *TFAPIModule) GetMemberMethod() []*TFAPIMethod {
	if m != nil {
		return m.MemberMethod
	}
	return nil
}

type TFAPIClass struct {
	IsInstance       []string       `protobuf:"bytes,1,rep,name=is_instance,json=isInstance" json:"is_instance,omitempty"`
	Member           []*TFAPIMember `protobuf:"bytes,2,rep,name=member" json:"member,omitempty"`
	MemberMethod     []*TFAPIMethod `protobuf:"bytes,3,rep,name=member_method,json=memberMethod" json:"member_method,omitempty"`
	XXX_unrecognized []byte         `json:"-"`
}

func (m *TFAPIClass) Reset()                    { *m = TFAPIClass{} }
func (m *TFAPIClass) String() string            { return proto.CompactTextString(m) }
func (*TFAPIClass) ProtoMessage()               {}
func (*TFAPIClass) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *TFAPIClass) GetIsInstance() []string {
	if m != nil {
		return m.IsInstance
	}
	return nil
}

func (m *TFAPIClass) GetMember() []*TFAPIMember {
	if m != nil {
		return m.Member
	}
	return nil
}

func (m *TFAPIClass) GetMemberMethod() []*TFAPIMethod {
	if m != nil {
		return m.MemberMethod
	}
	return nil
}

type TFAPIObject struct {
	Path             *string      `protobuf:"bytes,1,opt,name=path" json:"path,omitempty"`
	TfModule         *TFAPIModule `protobuf:"bytes,2,opt,name=tf_module,json=tfModule" json:"tf_module,omitempty"`
	TfClass          *TFAPIClass  `protobuf:"bytes,3,opt,name=tf_class,json=tfClass" json:"tf_class,omitempty"`
	XXX_unrecognized []byte       `json:"-"`
}

func (m *TFAPIObject) Reset()                    { *m = TFAPIObject{} }
func (m *TFAPIObject) String() string            { return proto.CompactTextString(m) }
func (*TFAPIObject) ProtoMessage()               {}
func (*TFAPIObject) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{4} }

func (m *TFAPIObject) GetPath() string {
	if m != nil && m.Path != nil {
		return *m.Path
	}
	return ""
}

func (m *TFAPIObject) GetTfModule() *TFAPIModule {
	if m != nil {
		return m.TfModule
	}
	return nil
}

func (m *TFAPIObject) GetTfClass() *TFAPIClass {
	if m != nil {
		return m.TfClass
	}
	return nil
}

func init() {
	proto.RegisterType((*TFAPIMember)(nil), "third_party.tensorflow.tools.api.TFAPIMember")
	proto.RegisterType((*TFAPIMethod)(nil), "third_party.tensorflow.tools.api.TFAPIMethod")
	proto.RegisterType((*TFAPIModule)(nil), "third_party.tensorflow.tools.api.TFAPIModule")
	proto.RegisterType((*TFAPIClass)(nil), "third_party.tensorflow.tools.api.TFAPIClass")
	proto.RegisterType((*TFAPIObject)(nil), "third_party.tensorflow.tools.api.TFAPIObject")
}

func init() { proto.RegisterFile("serving/tensorflow/tools/api/lib/api_objects.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 331 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x92, 0xc1, 0x4a, 0xc3, 0x40,
	0x10, 0x86, 0x49, 0x5b, 0x6d, 0x3b, 0xd1, 0xcb, 0xe2, 0x21, 0x37, 0x4b, 0x4e, 0x3d, 0x68, 0x02,
	0xbd, 0x78, 0x16, 0x51, 0xa9, 0x20, 0x95, 0xc5, 0x7b, 0xd8, 0xa6, 0x9b, 0x76, 0x25, 0x9b, 0x5d,
	0x76, 0x47, 0xa5, 0x6f, 0xe4, 0x13, 0xf8, 0x0c, 0x3e, 0x96, 0x74, 0x92, 0xd6, 0x1c, 0x04, 0x2d,
	0x7a, 0xca, 0xcc, 0x84, 0x6f, 0x76, 0xfe, 0xf9, 0x07, 0x26, 0x5e, 0xba, 0x17, 0x55, 0x2d, 0x53,
	0x94, 0x95, 0x37, 0xae, 0x28, 0xcd, 0x6b, 0x8a, 0xc6, 0x94, 0x3e, 0x15, 0x56, 0xa5, 0xa5, 0x9a,
	0x6f, 0xbe, 0x99, 0x99, 0x3f, 0xc9, 0x1c, 0x7d, 0x62, 0x9d, 0x41, 0xc3, 0x46, 0xb8, 0x52, 0x6e,
	0x91, 0x59, 0xe1, 0x70, 0x9d, 0x7c, 0x71, 0x09, 0x71, 0x89, 0xb0, 0x2a, 0xbe, 0x80, 0xf0, 0xf1,
	0xe6, 0xf2, 0x61, 0x7a, 0x2f, 0xf5, 0x5c, 0x3a, 0xc6, 0xa0, 0x57, 0x09, 0x2d, 0xa3, 0x60, 0x14,
	0x8c, 0x87, 0x9c, 0x62, 0x76, 0x02, 0x07, 0x1a, 0xd7, 0x56, 0x46, 0x1d, 0x2a, 0xd6, 0x49, 0x3c,
	0xdb, 0x81, 0xb8, 0x32, 0x8b, 0x6f, 0x41, 0x06, 0x3d, 0x2b, 0x70, 0xd5, 0x70, 0x14, 0xb3, 0x08,
	0xfa, 0xc2, 0x2d, 0xbd, 0x95, 0x79, 0xd4, 0xa5, 0xf2, 0x36, 0x8d, 0xdf, 0x82, 0x6d, 0x47, 0xb3,
	0x78, 0x2e, 0x25, 0xbb, 0x86, 0x43, 0x4d, 0x43, 0x45, 0xc1, 0xa8, 0x3b, 0x0e, 0x27, 0xe7, 0xc9,
	0x4f, 0x62, 0x92, 0x96, 0x12, 0xde, 0xc0, 0x8c, 0xc3, 0x71, 0x1d, 0x65, 0x9a, 0x26, 0x8d, 0x3a,
	0x7b, 0x76, 0xdb, 0x40, 0xfc, 0xa8, 0xee, 0x51, 0x67, 0xf1, 0x47, 0x00, 0x40, 0x7f, 0xaf, 0x4a,
	0xe1, 0x3d, 0x3b, 0x85, 0x50, 0xf9, 0x4c, 0x55, 0x1e, 0x45, 0x95, 0x4b, 0x1a, 0x77, 0xc8, 0x41,
	0xf9, 0x69, 0x53, 0x69, 0x49, 0xe9, 0xfc, 0xab, 0x94, 0xee, 0xdf, 0xa5, 0xbc, 0x6f, 0xb7, 0x3e,
	0xa3, 0xc3, 0xd9, 0x79, 0x16, 0xb4, 0x3c, 0xbb, 0x83, 0x21, 0x16, 0x99, 0x26, 0x5b, 0xc8, 0xcc,
	0x3d, 0xde, 0x24, 0x88, 0x0f, 0xb0, 0x68, 0x5c, 0xbd, 0x85, 0x01, 0x16, 0x59, 0xbe, 0xd9, 0x1b,
	0x1d, 0x40, 0x38, 0x39, 0xfb, 0x65, 0x2b, 0xda, 0x35, 0xef, 0x63, 0x41, 0xc1, 0x67, 0x00, 0x00,
	0x00, 0xff, 0xff, 0xfe, 0x9d, 0x63, 0x71, 0x0f, 0x03, 0x00, 0x00,
}
