// Code generated by protoc-gen-go.
// source: serving/tensorflow/python/util/protobuf/compare_test.proto
// DO NOT EDIT!

/*
Package compare_test is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/python/util/protobuf/compare_test.proto

It has these top-level messages:
	Small
	Medium
	Large
	Labeled
	WithMap
*/
package compare_test

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

type Enum int32

const (
	Enum_A Enum = 0
	Enum_B Enum = 1
	Enum_C Enum = 2
)

var Enum_name = map[int32]string{
	0: "A",
	1: "B",
	2: "C",
}
var Enum_value = map[string]int32{
	"A": 0,
	"B": 1,
	"C": 2,
}

func (x Enum) Enum() *Enum {
	p := new(Enum)
	*p = x
	return p
}
func (x Enum) String() string {
	return proto.EnumName(Enum_name, int32(x))
}
func (x *Enum) UnmarshalJSON(data []byte) error {
	value, err := proto.UnmarshalJSONEnum(Enum_value, data, "Enum")
	if err != nil {
		return err
	}
	*x = Enum(value)
	return nil
}
func (Enum) EnumDescriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

type Small struct {
	Strings          []string `protobuf:"bytes,1,rep,name=strings" json:"strings,omitempty"`
	XXX_unrecognized []byte   `json:"-"`
}

func (m *Small) Reset()                    { *m = Small{} }
func (m *Small) String() string            { return proto.CompactTextString(m) }
func (*Small) ProtoMessage()               {}
func (*Small) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *Small) GetStrings() []string {
	if m != nil {
		return m.Strings
	}
	return nil
}

type Medium struct {
	Int32S           []int32          `protobuf:"varint,1,rep,name=int32s" json:"int32s,omitempty"`
	Smalls           []*Small         `protobuf:"bytes,2,rep,name=smalls" json:"smalls,omitempty"`
	Groupa           []*Medium_GroupA `protobuf:"group,3,rep,name=GroupA,json=groupa" json:"groupa,omitempty"`
	Floats           []float32        `protobuf:"fixed32,6,rep,name=floats" json:"floats,omitempty"`
	XXX_unrecognized []byte           `json:"-"`
}

func (m *Medium) Reset()                    { *m = Medium{} }
func (m *Medium) String() string            { return proto.CompactTextString(m) }
func (*Medium) ProtoMessage()               {}
func (*Medium) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *Medium) GetInt32S() []int32 {
	if m != nil {
		return m.Int32S
	}
	return nil
}

func (m *Medium) GetSmalls() []*Small {
	if m != nil {
		return m.Smalls
	}
	return nil
}

func (m *Medium) GetGroupa() []*Medium_GroupA {
	if m != nil {
		return m.Groupa
	}
	return nil
}

func (m *Medium) GetFloats() []float32 {
	if m != nil {
		return m.Floats
	}
	return nil
}

type Medium_GroupA struct {
	Groupb           []*Medium_GroupA_GroupB `protobuf:"group,4,rep,name=GroupB,json=groupb" json:"groupb,omitempty"`
	XXX_unrecognized []byte                  `json:"-"`
}

func (m *Medium_GroupA) Reset()                    { *m = Medium_GroupA{} }
func (m *Medium_GroupA) String() string            { return proto.CompactTextString(m) }
func (*Medium_GroupA) ProtoMessage()               {}
func (*Medium_GroupA) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1, 0} }

func (m *Medium_GroupA) GetGroupb() []*Medium_GroupA_GroupB {
	if m != nil {
		return m.Groupb
	}
	return nil
}

type Medium_GroupA_GroupB struct {
	Strings          *string `protobuf:"bytes,5,req,name=strings" json:"strings,omitempty"`
	XXX_unrecognized []byte  `json:"-"`
}

func (m *Medium_GroupA_GroupB) Reset()                    { *m = Medium_GroupA_GroupB{} }
func (m *Medium_GroupA_GroupB) String() string            { return proto.CompactTextString(m) }
func (*Medium_GroupA_GroupB) ProtoMessage()               {}
func (*Medium_GroupA_GroupB) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1, 0, 0} }

func (m *Medium_GroupA_GroupB) GetStrings() string {
	if m != nil && m.Strings != nil {
		return *m.Strings
	}
	return ""
}

type Large struct {
	String_          *string  `protobuf:"bytes,1,opt,name=string_,json=string" json:"string_,omitempty"`
	Int64_           *int64   `protobuf:"varint,2,opt,name=int64_,json=int64" json:"int64_,omitempty"`
	Float_           *float32 `protobuf:"fixed32,3,opt,name=float_,json=float" json:"float_,omitempty"`
	Bool_            *bool    `protobuf:"varint,4,opt,name=bool_,json=bool" json:"bool_,omitempty"`
	Enum_            *Enum    `protobuf:"varint,5,opt,name=enum_,json=enum,enum=compare_test.Enum" json:"enum_,omitempty"`
	Int64S           []int64  `protobuf:"varint,6,rep,name=int64s" json:"int64s,omitempty"`
	Medium           *Medium  `protobuf:"bytes,7,opt,name=medium" json:"medium,omitempty"`
	Small            *Small   `protobuf:"bytes,8,opt,name=small" json:"small,omitempty"`
	Double_          *float64 `protobuf:"fixed64,9,opt,name=double_,json=double" json:"double_,omitempty"`
	WithMap          *WithMap `protobuf:"bytes,10,opt,name=with_map,json=withMap" json:"with_map,omitempty"`
	XXX_unrecognized []byte   `json:"-"`
}

func (m *Large) Reset()                    { *m = Large{} }
func (m *Large) String() string            { return proto.CompactTextString(m) }
func (*Large) ProtoMessage()               {}
func (*Large) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *Large) GetString_() string {
	if m != nil && m.String_ != nil {
		return *m.String_
	}
	return ""
}

func (m *Large) GetInt64_() int64 {
	if m != nil && m.Int64_ != nil {
		return *m.Int64_
	}
	return 0
}

func (m *Large) GetFloat_() float32 {
	if m != nil && m.Float_ != nil {
		return *m.Float_
	}
	return 0
}

func (m *Large) GetBool_() bool {
	if m != nil && m.Bool_ != nil {
		return *m.Bool_
	}
	return false
}

func (m *Large) GetEnum_() Enum {
	if m != nil && m.Enum_ != nil {
		return *m.Enum_
	}
	return Enum_A
}

func (m *Large) GetInt64S() []int64 {
	if m != nil {
		return m.Int64S
	}
	return nil
}

func (m *Large) GetMedium() *Medium {
	if m != nil {
		return m.Medium
	}
	return nil
}

func (m *Large) GetSmall() *Small {
	if m != nil {
		return m.Small
	}
	return nil
}

func (m *Large) GetDouble_() float64 {
	if m != nil && m.Double_ != nil {
		return *m.Double_
	}
	return 0
}

func (m *Large) GetWithMap() *WithMap {
	if m != nil {
		return m.WithMap
	}
	return nil
}

type Labeled struct {
	Required         *int32 `protobuf:"varint,1,req,name=required" json:"required,omitempty"`
	Optional         *int32 `protobuf:"varint,2,opt,name=optional" json:"optional,omitempty"`
	XXX_unrecognized []byte `json:"-"`
}

func (m *Labeled) Reset()                    { *m = Labeled{} }
func (m *Labeled) String() string            { return proto.CompactTextString(m) }
func (*Labeled) ProtoMessage()               {}
func (*Labeled) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *Labeled) GetRequired() int32 {
	if m != nil && m.Required != nil {
		return *m.Required
	}
	return 0
}

func (m *Labeled) GetOptional() int32 {
	if m != nil && m.Optional != nil {
		return *m.Optional
	}
	return 0
}

type WithMap struct {
	ValueMessage     map[int32]*Small  `protobuf:"bytes,1,rep,name=value_message,json=valueMessage" json:"value_message,omitempty" protobuf_key:"varint,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
	ValueString      map[string]string `protobuf:"bytes,2,rep,name=value_string,json=valueString" json:"value_string,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
	XXX_unrecognized []byte            `json:"-"`
}

func (m *WithMap) Reset()                    { *m = WithMap{} }
func (m *WithMap) String() string            { return proto.CompactTextString(m) }
func (*WithMap) ProtoMessage()               {}
func (*WithMap) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{4} }

func (m *WithMap) GetValueMessage() map[int32]*Small {
	if m != nil {
		return m.ValueMessage
	}
	return nil
}

func (m *WithMap) GetValueString() map[string]string {
	if m != nil {
		return m.ValueString
	}
	return nil
}

func init() {
	proto.RegisterType((*Small)(nil), "compare_test.Small")
	proto.RegisterType((*Medium)(nil), "compare_test.Medium")
	proto.RegisterType((*Medium_GroupA)(nil), "compare_test.Medium.GroupA")
	proto.RegisterType((*Medium_GroupA_GroupB)(nil), "compare_test.Medium.GroupA.GroupB")
	proto.RegisterType((*Large)(nil), "compare_test.Large")
	proto.RegisterType((*Labeled)(nil), "compare_test.Labeled")
	proto.RegisterType((*WithMap)(nil), "compare_test.WithMap")
	proto.RegisterEnum("compare_test.Enum", Enum_name, Enum_value)
}

func init() {
	proto.RegisterFile("serving/tensorflow/python/util/protobuf/compare_test.proto", fileDescriptor0)
}

var fileDescriptor0 = []byte{
	// 584 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x92, 0xcb, 0x6e, 0xd3, 0x4c,
	0x14, 0xc7, 0xbf, 0xb1, 0x33, 0x4e, 0x72, 0xd2, 0x0f, 0x85, 0x69, 0x0b, 0xa3, 0x74, 0x33, 0x64,
	0x41, 0xcd, 0x45, 0x09, 0x4a, 0xab, 0x0a, 0x75, 0x81, 0xd4, 0xa0, 0x0a, 0x21, 0xb5, 0x9b, 0x29,
	0x82, 0xa5, 0x65, 0x93, 0x69, 0x62, 0x61, 0x7b, 0x8c, 0x3d, 0x4e, 0xd5, 0x3d, 0x0f, 0xc5, 0x23,
	0xf0, 0x48, 0x2c, 0xd1, 0x5c, 0x5a, 0x1c, 0x28, 0x5d, 0x8d, 0xff, 0xc7, 0xbf, 0xf9, 0x9f, 0x39,
	0x17, 0x38, 0xae, 0x45, 0xb5, 0x4e, 0x8b, 0xe5, 0x54, 0x89, 0xa2, 0x96, 0xd5, 0x65, 0x26, 0xaf,
	0xa6, 0xe5, 0xb5, 0x5a, 0xc9, 0x62, 0xda, 0xa8, 0x34, 0x9b, 0x96, 0x95, 0x54, 0x32, 0x69, 0x2e,
	0xa7, 0x9f, 0x65, 0x5e, 0xc6, 0x95, 0x88, 0x94, 0xa8, 0xd5, 0xc4, 0x44, 0xc9, 0x56, 0x3b, 0x36,
	0x7e, 0x02, 0xf8, 0x22, 0x8f, 0xb3, 0x8c, 0x50, 0xe8, 0xd6, 0xaa, 0x4a, 0x8b, 0x65, 0x4d, 0x11,
	0xf3, 0xc3, 0x3e, 0xbf, 0x91, 0xe3, 0x6f, 0x1e, 0x04, 0xe7, 0x62, 0x91, 0x36, 0x39, 0x79, 0x04,
	0x41, 0x5a, 0xa8, 0x83, 0x99, 0x65, 0x30, 0x77, 0x8a, 0xbc, 0x80, 0xa0, 0xd6, 0x2e, 0x35, 0xf5,
	0x98, 0x1f, 0x0e, 0x66, 0xdb, 0x93, 0x8d, 0xc4, 0x26, 0x03, 0x77, 0x08, 0x39, 0x80, 0x60, 0x59,
	0xc9, 0xa6, 0x8c, 0xa9, 0xcf, 0xfc, 0x10, 0x66, 0x7b, 0x9b, 0xb0, 0x4d, 0x35, 0x79, 0xa7, 0x91,
	0x13, 0xee, 0x50, 0x9d, 0xf9, 0x32, 0x93, 0xb1, 0xaa, 0x69, 0xc0, 0xfc, 0xd0, 0xe3, 0x4e, 0x8d,
	0x56, 0x10, 0x58, 0x92, 0x1c, 0x3b, 0xdb, 0x84, 0x76, 0x8c, 0xed, 0xf8, 0x1e, 0x5b, 0x7b, 0xcc,
	0x9d, 0x7b, 0x32, 0x1a, 0x3b, 0x97, 0x79, 0xbb, 0x0d, 0x98, 0x79, 0xed, 0x36, 0xfc, 0xf0, 0x00,
	0x9f, 0xc5, 0xd5, 0x52, 0x90, 0xc7, 0x37, 0x4c, 0x44, 0x11, 0x43, 0x61, 0x9f, 0x07, 0x56, 0x92,
	0x5d, 0xd3, 0x9e, 0xa3, 0xc3, 0x88, 0x7a, 0x0c, 0x85, 0x3e, 0xc7, 0x46, 0xe9, 0xb0, 0x79, 0x6d,
	0x44, 0x7d, 0x86, 0x42, 0x8f, 0x63, 0xa3, 0xc8, 0x36, 0xe0, 0x44, 0xca, 0x2c, 0xa2, 0x1d, 0x86,
	0xc2, 0x1e, 0xef, 0x68, 0x41, 0xf6, 0x01, 0x8b, 0xa2, 0xc9, 0x23, 0x8a, 0x19, 0x0a, 0x1f, 0xcc,
	0xc8, 0x66, 0x11, 0xa7, 0x45, 0x93, 0xf3, 0x8e, 0x06, 0xdc, 0x28, 0x8e, 0x0e, 0x6d, 0x43, 0x7c,
	0xee, 0x14, 0x79, 0x09, 0x41, 0x6e, 0x4a, 0xa5, 0x5d, 0x86, 0xc2, 0xc1, 0x6c, 0xe7, 0xae, 0x36,
	0x70, 0xc7, 0x90, 0x67, 0x80, 0xcd, 0x54, 0x68, 0xcf, 0xc0, 0x77, 0xce, 0xcd, 0x12, 0xba, 0xea,
	0x85, 0x6c, 0x92, 0x4c, 0x44, 0xb4, 0xcf, 0x50, 0x88, 0x78, 0x60, 0x25, 0x79, 0x05, 0xbd, 0xab,
	0x54, 0xad, 0xa2, 0x3c, 0x2e, 0x29, 0x18, 0x9b, 0xdd, 0x4d, 0x9b, 0x4f, 0xa9, 0x5a, 0x9d, 0xc7,
	0x25, 0xef, 0x5e, 0xd9, 0x8f, 0xf1, 0x09, 0x74, 0xcf, 0xe2, 0x44, 0x64, 0x62, 0x41, 0x46, 0xd0,
	0xab, 0xc4, 0xd7, 0x26, 0xad, 0xc4, 0x82, 0x22, 0xe6, 0x85, 0x98, 0xdf, 0x6a, 0xfd, 0x4f, 0x96,
	0x2a, 0x95, 0x45, 0x9c, 0x99, 0x86, 0x62, 0x7e, 0xab, 0xc7, 0xdf, 0x3d, 0xe8, 0x3a, 0x5f, 0x72,
	0x06, 0xff, 0xaf, 0xe3, 0xac, 0x11, 0x51, 0x2e, 0xea, 0x3a, 0x5e, 0x0a, 0xb3, 0x9c, 0x83, 0xd9,
	0xfe, 0x9d, 0xaf, 0x98, 0x7c, 0xd4, 0xe8, 0xb9, 0x25, 0x4f, 0x0b, 0x55, 0x5d, 0xf3, 0xad, 0x75,
	0x2b, 0x44, 0xde, 0x83, 0xd5, 0x91, 0x1d, 0xaa, 0xdb, 0xe8, 0xa7, 0xf7, 0x98, 0x5d, 0x18, 0xd0,
	0x7a, 0x0d, 0xd6, 0xbf, 0x23, 0xa3, 0x0f, 0xf0, 0xf0, 0xaf, 0x6c, 0x64, 0x08, 0xfe, 0x17, 0x71,
	0x6d, 0x36, 0x07, 0x73, 0xfd, 0xa9, 0x87, 0x60, 0x6e, 0x99, 0x22, 0xff, 0x35, 0x04, 0x43, 0x1c,
	0x7b, 0xaf, 0xd1, 0xe8, 0x0d, 0x0c, 0xff, 0x4c, 0xdb, 0x36, 0xed, 0x5b, 0xd3, 0x9d, 0xb6, 0x69,
	0xbf, 0x75, 0xff, 0xf9, 0x1e, 0x74, 0xf4, 0x1e, 0x11, 0x0c, 0xe8, 0x64, 0xf8, 0x9f, 0x3e, 0xe6,
	0x43, 0xa4, 0x8f, 0xb7, 0x43, 0x6f, 0xee, 0xff, 0x44, 0xe8, 0x57, 0x00, 0x00, 0x00, 0xff, 0xff,
	0x68, 0x36, 0x70, 0x3c, 0x5f, 0x04, 0x00, 0x00,
}
