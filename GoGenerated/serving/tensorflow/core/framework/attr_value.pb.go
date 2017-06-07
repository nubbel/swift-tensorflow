// Code generated by protoc-gen-go.
// source: serving/tensorflow/core/framework/attr_value.proto
// DO NOT EDIT!

/*
Package tensorflow is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/core/framework/attr_value.proto

It has these top-level messages:
	AttrValue
	NameAttrList
*/
package tensorflow

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow4 "tensorflow/core/framework"
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

// Protocol buffer representing the value for an attr used to configure an Op.
// Comment indicates the corresponding attr type.  Only the field matching the
// attr type may be filled.
type AttrValue struct {
	// Types that are valid to be assigned to Value:
	//	*AttrValue_S
	//	*AttrValue_I
	//	*AttrValue_F
	//	*AttrValue_B
	//	*AttrValue_Type
	//	*AttrValue_Shape
	//	*AttrValue_Tensor
	//	*AttrValue_List
	//	*AttrValue_Func
	//	*AttrValue_Placeholder
	Value isAttrValue_Value `protobuf_oneof:"value"`
}

func (m *AttrValue) Reset()                    { *m = AttrValue{} }
func (m *AttrValue) String() string            { return proto.CompactTextString(m) }
func (*AttrValue) ProtoMessage()               {}
func (*AttrValue) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

type isAttrValue_Value interface {
	isAttrValue_Value()
}

type AttrValue_S struct {
	S []byte `protobuf:"bytes,2,opt,name=s,proto3,oneof"`
}
type AttrValue_I struct {
	I int64 `protobuf:"varint,3,opt,name=i,oneof"`
}
type AttrValue_F struct {
	F float32 `protobuf:"fixed32,4,opt,name=f,oneof"`
}
type AttrValue_B struct {
	B bool `protobuf:"varint,5,opt,name=b,oneof"`
}
type AttrValue_Type struct {
	Type tensorflow3.DataType `protobuf:"varint,6,opt,name=type,enum=tensorflow.DataType,oneof"`
}
type AttrValue_Shape struct {
	Shape *tensorflow2.TensorShapeProto `protobuf:"bytes,7,opt,name=shape,oneof"`
}
type AttrValue_Tensor struct {
	Tensor *tensorflow4.TensorProto `protobuf:"bytes,8,opt,name=tensor,oneof"`
}
type AttrValue_List struct {
	List *AttrValue_ListValue `protobuf:"bytes,1,opt,name=list,oneof"`
}
type AttrValue_Func struct {
	Func *NameAttrList `protobuf:"bytes,10,opt,name=func,oneof"`
}
type AttrValue_Placeholder struct {
	Placeholder string `protobuf:"bytes,9,opt,name=placeholder,oneof"`
}

func (*AttrValue_S) isAttrValue_Value()           {}
func (*AttrValue_I) isAttrValue_Value()           {}
func (*AttrValue_F) isAttrValue_Value()           {}
func (*AttrValue_B) isAttrValue_Value()           {}
func (*AttrValue_Type) isAttrValue_Value()        {}
func (*AttrValue_Shape) isAttrValue_Value()       {}
func (*AttrValue_Tensor) isAttrValue_Value()      {}
func (*AttrValue_List) isAttrValue_Value()        {}
func (*AttrValue_Func) isAttrValue_Value()        {}
func (*AttrValue_Placeholder) isAttrValue_Value() {}

func (m *AttrValue) GetValue() isAttrValue_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (m *AttrValue) GetS() []byte {
	if x, ok := m.GetValue().(*AttrValue_S); ok {
		return x.S
	}
	return nil
}

func (m *AttrValue) GetI() int64 {
	if x, ok := m.GetValue().(*AttrValue_I); ok {
		return x.I
	}
	return 0
}

func (m *AttrValue) GetF() float32 {
	if x, ok := m.GetValue().(*AttrValue_F); ok {
		return x.F
	}
	return 0
}

func (m *AttrValue) GetB() bool {
	if x, ok := m.GetValue().(*AttrValue_B); ok {
		return x.B
	}
	return false
}

func (m *AttrValue) GetType() tensorflow3.DataType {
	if x, ok := m.GetValue().(*AttrValue_Type); ok {
		return x.Type
	}
	return tensorflow3.DataType_DT_INVALID
}

func (m *AttrValue) GetShape() *tensorflow2.TensorShapeProto {
	if x, ok := m.GetValue().(*AttrValue_Shape); ok {
		return x.Shape
	}
	return nil
}

func (m *AttrValue) GetTensor() *tensorflow4.TensorProto {
	if x, ok := m.GetValue().(*AttrValue_Tensor); ok {
		return x.Tensor
	}
	return nil
}

func (m *AttrValue) GetList() *AttrValue_ListValue {
	if x, ok := m.GetValue().(*AttrValue_List); ok {
		return x.List
	}
	return nil
}

func (m *AttrValue) GetFunc() *NameAttrList {
	if x, ok := m.GetValue().(*AttrValue_Func); ok {
		return x.Func
	}
	return nil
}

func (m *AttrValue) GetPlaceholder() string {
	if x, ok := m.GetValue().(*AttrValue_Placeholder); ok {
		return x.Placeholder
	}
	return ""
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*AttrValue) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _AttrValue_OneofMarshaler, _AttrValue_OneofUnmarshaler, _AttrValue_OneofSizer, []interface{}{
		(*AttrValue_S)(nil),
		(*AttrValue_I)(nil),
		(*AttrValue_F)(nil),
		(*AttrValue_B)(nil),
		(*AttrValue_Type)(nil),
		(*AttrValue_Shape)(nil),
		(*AttrValue_Tensor)(nil),
		(*AttrValue_List)(nil),
		(*AttrValue_Func)(nil),
		(*AttrValue_Placeholder)(nil),
	}
}

func _AttrValue_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*AttrValue)
	// value
	switch x := m.Value.(type) {
	case *AttrValue_S:
		b.EncodeVarint(2<<3 | proto.WireBytes)
		b.EncodeRawBytes(x.S)
	case *AttrValue_I:
		b.EncodeVarint(3<<3 | proto.WireVarint)
		b.EncodeVarint(uint64(x.I))
	case *AttrValue_F:
		b.EncodeVarint(4<<3 | proto.WireFixed32)
		b.EncodeFixed32(uint64(math.Float32bits(x.F)))
	case *AttrValue_B:
		t := uint64(0)
		if x.B {
			t = 1
		}
		b.EncodeVarint(5<<3 | proto.WireVarint)
		b.EncodeVarint(t)
	case *AttrValue_Type:
		b.EncodeVarint(6<<3 | proto.WireVarint)
		b.EncodeVarint(uint64(x.Type))
	case *AttrValue_Shape:
		b.EncodeVarint(7<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Shape); err != nil {
			return err
		}
	case *AttrValue_Tensor:
		b.EncodeVarint(8<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Tensor); err != nil {
			return err
		}
	case *AttrValue_List:
		b.EncodeVarint(1<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.List); err != nil {
			return err
		}
	case *AttrValue_Func:
		b.EncodeVarint(10<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Func); err != nil {
			return err
		}
	case *AttrValue_Placeholder:
		b.EncodeVarint(9<<3 | proto.WireBytes)
		b.EncodeStringBytes(x.Placeholder)
	case nil:
	default:
		return fmt.Errorf("AttrValue.Value has unexpected type %T", x)
	}
	return nil
}

func _AttrValue_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*AttrValue)
	switch tag {
	case 2: // value.s
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeRawBytes(true)
		m.Value = &AttrValue_S{x}
		return true, err
	case 3: // value.i
		if wire != proto.WireVarint {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeVarint()
		m.Value = &AttrValue_I{int64(x)}
		return true, err
	case 4: // value.f
		if wire != proto.WireFixed32 {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeFixed32()
		m.Value = &AttrValue_F{math.Float32frombits(uint32(x))}
		return true, err
	case 5: // value.b
		if wire != proto.WireVarint {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeVarint()
		m.Value = &AttrValue_B{x != 0}
		return true, err
	case 6: // value.type
		if wire != proto.WireVarint {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeVarint()
		m.Value = &AttrValue_Type{tensorflow3.DataType(x)}
		return true, err
	case 7: // value.shape
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(tensorflow2.TensorShapeProto)
		err := b.DecodeMessage(msg)
		m.Value = &AttrValue_Shape{msg}
		return true, err
	case 8: // value.tensor
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(tensorflow4.TensorProto)
		err := b.DecodeMessage(msg)
		m.Value = &AttrValue_Tensor{msg}
		return true, err
	case 1: // value.list
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(AttrValue_ListValue)
		err := b.DecodeMessage(msg)
		m.Value = &AttrValue_List{msg}
		return true, err
	case 10: // value.func
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(NameAttrList)
		err := b.DecodeMessage(msg)
		m.Value = &AttrValue_Func{msg}
		return true, err
	case 9: // value.placeholder
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeStringBytes()
		m.Value = &AttrValue_Placeholder{x}
		return true, err
	default:
		return false, nil
	}
}

func _AttrValue_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*AttrValue)
	// value
	switch x := m.Value.(type) {
	case *AttrValue_S:
		n += proto.SizeVarint(2<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(len(x.S)))
		n += len(x.S)
	case *AttrValue_I:
		n += proto.SizeVarint(3<<3 | proto.WireVarint)
		n += proto.SizeVarint(uint64(x.I))
	case *AttrValue_F:
		n += proto.SizeVarint(4<<3 | proto.WireFixed32)
		n += 4
	case *AttrValue_B:
		n += proto.SizeVarint(5<<3 | proto.WireVarint)
		n += 1
	case *AttrValue_Type:
		n += proto.SizeVarint(6<<3 | proto.WireVarint)
		n += proto.SizeVarint(uint64(x.Type))
	case *AttrValue_Shape:
		s := proto.Size(x.Shape)
		n += proto.SizeVarint(7<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *AttrValue_Tensor:
		s := proto.Size(x.Tensor)
		n += proto.SizeVarint(8<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *AttrValue_List:
		s := proto.Size(x.List)
		n += proto.SizeVarint(1<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *AttrValue_Func:
		s := proto.Size(x.Func)
		n += proto.SizeVarint(10<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *AttrValue_Placeholder:
		n += proto.SizeVarint(9<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(len(x.Placeholder)))
		n += len(x.Placeholder)
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

// LINT.IfChange
type AttrValue_ListValue struct {
	S      [][]byte                        `protobuf:"bytes,2,rep,name=s,proto3" json:"s,omitempty"`
	I      []int64                         `protobuf:"varint,3,rep,packed,name=i" json:"i,omitempty"`
	F      []float32                       `protobuf:"fixed32,4,rep,packed,name=f" json:"f,omitempty"`
	B      []bool                          `protobuf:"varint,5,rep,packed,name=b" json:"b,omitempty"`
	Type   []tensorflow3.DataType          `protobuf:"varint,6,rep,packed,name=type,enum=tensorflow.DataType" json:"type,omitempty"`
	Shape  []*tensorflow2.TensorShapeProto `protobuf:"bytes,7,rep,name=shape" json:"shape,omitempty"`
	Tensor []*tensorflow4.TensorProto      `protobuf:"bytes,8,rep,name=tensor" json:"tensor,omitempty"`
	Func   []*NameAttrList                 `protobuf:"bytes,9,rep,name=func" json:"func,omitempty"`
}

func (m *AttrValue_ListValue) Reset()                    { *m = AttrValue_ListValue{} }
func (m *AttrValue_ListValue) String() string            { return proto.CompactTextString(m) }
func (*AttrValue_ListValue) ProtoMessage()               {}
func (*AttrValue_ListValue) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0, 0} }

func (m *AttrValue_ListValue) GetS() [][]byte {
	if m != nil {
		return m.S
	}
	return nil
}

func (m *AttrValue_ListValue) GetI() []int64 {
	if m != nil {
		return m.I
	}
	return nil
}

func (m *AttrValue_ListValue) GetF() []float32 {
	if m != nil {
		return m.F
	}
	return nil
}

func (m *AttrValue_ListValue) GetB() []bool {
	if m != nil {
		return m.B
	}
	return nil
}

func (m *AttrValue_ListValue) GetType() []tensorflow3.DataType {
	if m != nil {
		return m.Type
	}
	return nil
}

func (m *AttrValue_ListValue) GetShape() []*tensorflow2.TensorShapeProto {
	if m != nil {
		return m.Shape
	}
	return nil
}

func (m *AttrValue_ListValue) GetTensor() []*tensorflow4.TensorProto {
	if m != nil {
		return m.Tensor
	}
	return nil
}

func (m *AttrValue_ListValue) GetFunc() []*NameAttrList {
	if m != nil {
		return m.Func
	}
	return nil
}

// A list of attr names and their values. The whole list is attached
// with a string name.  E.g., MatMul[T=float].
type NameAttrList struct {
	Name string                `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	Attr map[string]*AttrValue `protobuf:"bytes,2,rep,name=attr" json:"attr,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
}

func (m *NameAttrList) Reset()                    { *m = NameAttrList{} }
func (m *NameAttrList) String() string            { return proto.CompactTextString(m) }
func (*NameAttrList) ProtoMessage()               {}
func (*NameAttrList) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *NameAttrList) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *NameAttrList) GetAttr() map[string]*AttrValue {
	if m != nil {
		return m.Attr
	}
	return nil
}

func init() {
	proto.RegisterType((*AttrValue)(nil), "tensorflow.AttrValue")
	proto.RegisterType((*AttrValue_ListValue)(nil), "tensorflow.AttrValue.ListValue")
	proto.RegisterType((*NameAttrList)(nil), "tensorflow.NameAttrList")
}

func init() { proto.RegisterFile("serving/tensorflow/core/framework/attr_value.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 502 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x93, 0xdf, 0x6a, 0xdb, 0x30,
	0x14, 0x87, 0x23, 0xcb, 0x69, 0x63, 0x25, 0x74, 0x41, 0x6c, 0x4c, 0x98, 0xc1, 0x4c, 0x60, 0x43,
	0x6c, 0xc1, 0xde, 0xbc, 0x3f, 0x8c, 0xdd, 0x2d, 0x6c, 0x90, 0x8b, 0x51, 0x8a, 0x57, 0x76, 0x5b,
	0x9c, 0x4c, 0x6e, 0x4d, 0x1d, 0xdb, 0xc8, 0x6a, 0x4b, 0x9e, 0x60, 0xb7, 0x7b, 0x8e, 0x3d, 0xe1,
	0x2e, 0xc7, 0x39, 0x72, 0x1d, 0xc3, 0x96, 0xf6, 0x4e, 0xe7, 0xe8, 0xfb, 0x29, 0x27, 0x9f, 0x25,
	0x16, 0x37, 0x4a, 0x5f, 0xe7, 0xe5, 0x79, 0x64, 0x54, 0xd9, 0x54, 0x3a, 0x2b, 0xaa, 0x9b, 0x68,
	0x5d, 0x69, 0x15, 0x65, 0x3a, 0xdd, 0xa8, 0x9b, 0x4a, 0x5f, 0x46, 0xa9, 0x31, 0xfa, 0xec, 0x3a,
	0x2d, 0xae, 0x54, 0x58, 0xeb, 0xca, 0x54, 0x9c, 0xed, 0x58, 0xff, 0xf9, 0xfe, 0x9c, 0xdd, 0xb1,
	0x19, 0x7f, 0x7e, 0x1f, 0x77, 0xd6, 0x5c, 0xa4, 0x75, 0xfb, 0x0b, 0xfe, 0xb3, 0x3b, 0xe8, 0x6d,
	0xad, 0x1a, 0x8b, 0xcd, 0x7e, 0x0e, 0x99, 0xf7, 0xc9, 0x18, 0xfd, 0x1d, 0x86, 0xe3, 0x47, 0x8c,
	0x34, 0xc2, 0x09, 0x88, 0x9c, 0x2c, 0x07, 0x09, 0x69, 0xa0, 0xce, 0x05, 0x0d, 0x88, 0xa4, 0x50,
	0xe7, 0x50, 0x67, 0xc2, 0x0d, 0x88, 0x74, 0xa0, 0xce, 0xa0, 0x5e, 0x89, 0x61, 0x40, 0xe4, 0x08,
	0xea, 0x15, 0x7f, 0xc1, 0x5c, 0x38, 0x5c, 0x1c, 0x04, 0x44, 0x1e, 0xc5, 0x0f, 0xc3, 0xdd, 0x0c,
	0xe1, 0xe7, 0xd4, 0xa4, 0xa7, 0xdb, 0x5a, 0x2d, 0x07, 0x09, 0x32, 0xfc, 0x2d, 0x1b, 0xe2, 0xbc,
	0xe2, 0x30, 0x20, 0x72, 0x1c, 0x3f, 0xe9, 0xc3, 0xa7, 0xb8, 0xfc, 0x06, 0xdb, 0x27, 0x30, 0xe6,
	0x72, 0x90, 0x58, 0x98, 0xbf, 0x66, 0x07, 0x96, 0x13, 0x23, 0x8c, 0x3d, 0xfe, 0x37, 0x76, 0x9b,
	0x68, 0x41, 0xfe, 0x8e, 0xb9, 0x45, 0xde, 0x18, 0x41, 0x30, 0xf0, 0xb4, 0x1f, 0xe8, 0xfe, 0x79,
	0xf8, 0x35, 0x6f, 0x0c, 0xae, 0x60, 0x3e, 0xc0, 0x79, 0xc8, 0xdc, 0xec, 0xaa, 0x5c, 0x0b, 0x86,
	0x31, 0xd1, 0x8f, 0x1d, 0xa7, 0x1b, 0x05, 0x51, 0x08, 0x01, 0x0f, 0x1c, 0x9f, 0xb1, 0x71, 0x5d,
	0xa4, 0x6b, 0x75, 0x51, 0x15, 0x3f, 0x94, 0x16, 0x5e, 0x40, 0xa4, 0xb7, 0x1c, 0x24, 0xfd, 0xa6,
	0xff, 0xcb, 0x61, 0x5e, 0xf7, 0x4b, 0x7c, 0x62, 0x6d, 0x53, 0x39, 0x01, 0xd7, 0x53, 0xeb, 0x9a,
	0x4a, 0xba, 0x70, 0xa6, 0x04, 0x6c, 0x4f, 0xad, 0x6d, 0x2a, 0x1d, 0xdb, 0xc9, 0xa0, 0x03, 0xbe,
	0xa9, 0x1c, 0xd9, 0xce, 0x8a, 0xcf, 0x3b, 0xe3, 0x74, 0x9f, 0x71, 0x44, 0xad, 0xf3, 0x78, 0xe7,
	0x9c, 0xde, 0xe7, 0xfc, 0xd6, 0x78, 0xd4, 0x33, 0x4e, 0xef, 0x30, 0xde, 0xf9, 0x9e, 0xb7, 0xe2,
	0x3c, 0xc4, 0xf7, 0x8a, 0xb3, 0xda, 0x16, 0x87, 0x6c, 0x88, 0x0f, 0x63, 0xf6, 0x9b, 0xb0, 0x49,
	0x7f, 0x9f, 0x73, 0xe6, 0x96, 0xe9, 0x46, 0xe1, 0x77, 0xf3, 0x12, 0x5c, 0xf3, 0xf7, 0xcc, 0x85,
	0xb7, 0x84, 0xd6, 0xc6, 0xf1, 0x6c, 0xdf, 0xd9, 0xf8, 0x61, 0xbf, 0x94, 0x46, 0x6f, 0x13, 0xe4,
	0xfd, 0x63, 0x7b, 0xcb, 0xb1, 0xc5, 0xa7, 0x8c, 0x5e, 0xaa, 0x6d, 0x7b, 0x2e, 0x2c, 0xf9, 0xcb,
	0x76, 0x08, 0xbc, 0xfb, 0xe3, 0xf8, 0xd1, 0x7f, 0xef, 0x48, 0x62, 0x99, 0x8f, 0xce, 0x07, 0xb2,
	0x78, 0xc5, 0x44, 0xa5, 0xcf, 0xfb, 0x58, 0xf7, 0xbc, 0x16, 0x0f, 0xba, 0x04, 0x7a, 0x69, 0x4e,
	0xc8, 0x1f, 0x42, 0x56, 0x07, 0xf8, 0xde, 0xde, 0xfc, 0x0d, 0x00, 0x00, 0xff, 0xff, 0xf8, 0x00,
	0x78, 0x98, 0x2e, 0x04, 0x00, 0x00,
}