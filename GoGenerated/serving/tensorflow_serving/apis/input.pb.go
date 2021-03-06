// Code generated by protoc-gen-go.
// source: serving/tensorflow_serving/apis/input.proto
// DO NOT EDIT!

/*
Package tensorflow_serving is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow_serving/apis/input.proto

It has these top-level messages:
	ExampleList
	ExampleListWithContext
	Input
*/
package tensorflow_serving

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow1 "tensorflow/core/example"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Specifies one or more fully independent input Examples.
// See examples at:
//     https://github.com/tensorflow/tensorflow/blob/master/tensorflow/core/example/example.proto
type ExampleList struct {
	Examples []*tensorflow1.Example `protobuf:"bytes,1,rep,name=examples" json:"examples,omitempty"`
}

func (m *ExampleList) Reset()                    { *m = ExampleList{} }
func (m *ExampleList) String() string            { return proto.CompactTextString(m) }
func (*ExampleList) ProtoMessage()               {}
func (*ExampleList) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *ExampleList) GetExamples() []*tensorflow1.Example {
	if m != nil {
		return m.Examples
	}
	return nil
}

// Specifies one or more independent input Examples, with a common context
// Example.
//
// The common use case for context is to cleanly and optimally specify some
// features that are common across multiple examples.
//
// See example below with a search query as the context and multiple restaurants
// to perform some inference on.
//
// context: {
//   feature: {
//     key  : "query"
//     value: {
//       bytes_list: {
//         value: [ "pizza" ]
//       }
//     }
//   }
// }
// examples: {
//   feature: {
//     key  : "cuisine"
//     value: {
//       bytes_list: {
//         value: [ "Pizzeria" ]
//       }
//     }
//   }
// }
// examples: {
//   feature: {
//     key  : "cuisine"
//     value: {
//       bytes_list: {
//         value: [ "Taqueria" ]
//       }
//     }
//   }
// }
//
// Implementations of ExampleListWithContext merge the context Example into each
// of the Examples. Note that feature keys must not be duplicated between the
// Examples and context Example, or the behavior is undefined.
//
// See also:
//     tensorflow/core/example/example.proto
//     https://developers.google.com/protocol-buffers/docs/proto3#maps
type ExampleListWithContext struct {
	Examples []*tensorflow1.Example `protobuf:"bytes,1,rep,name=examples" json:"examples,omitempty"`
	Context  *tensorflow1.Example   `protobuf:"bytes,2,opt,name=context" json:"context,omitempty"`
}

func (m *ExampleListWithContext) Reset()                    { *m = ExampleListWithContext{} }
func (m *ExampleListWithContext) String() string            { return proto.CompactTextString(m) }
func (*ExampleListWithContext) ProtoMessage()               {}
func (*ExampleListWithContext) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *ExampleListWithContext) GetExamples() []*tensorflow1.Example {
	if m != nil {
		return m.Examples
	}
	return nil
}

func (m *ExampleListWithContext) GetContext() *tensorflow1.Example {
	if m != nil {
		return m.Context
	}
	return nil
}

type Input struct {
	// Types that are valid to be assigned to Kind:
	//	*Input_ExampleList
	//	*Input_ExampleListWithContext
	Kind isInput_Kind `protobuf_oneof:"kind"`
}

func (m *Input) Reset()                    { *m = Input{} }
func (m *Input) String() string            { return proto.CompactTextString(m) }
func (*Input) ProtoMessage()               {}
func (*Input) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

type isInput_Kind interface {
	isInput_Kind()
}

type Input_ExampleList struct {
	ExampleList *ExampleList `protobuf:"bytes,1,opt,name=example_list,json=exampleList,oneof"`
}
type Input_ExampleListWithContext struct {
	ExampleListWithContext *ExampleListWithContext `protobuf:"bytes,2,opt,name=example_list_with_context,json=exampleListWithContext,oneof"`
}

func (*Input_ExampleList) isInput_Kind()            {}
func (*Input_ExampleListWithContext) isInput_Kind() {}

func (m *Input) GetKind() isInput_Kind {
	if m != nil {
		return m.Kind
	}
	return nil
}

func (m *Input) GetExampleList() *ExampleList {
	if x, ok := m.GetKind().(*Input_ExampleList); ok {
		return x.ExampleList
	}
	return nil
}

func (m *Input) GetExampleListWithContext() *ExampleListWithContext {
	if x, ok := m.GetKind().(*Input_ExampleListWithContext); ok {
		return x.ExampleListWithContext
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*Input) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _Input_OneofMarshaler, _Input_OneofUnmarshaler, _Input_OneofSizer, []interface{}{
		(*Input_ExampleList)(nil),
		(*Input_ExampleListWithContext)(nil),
	}
}

func _Input_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*Input)
	// kind
	switch x := m.Kind.(type) {
	case *Input_ExampleList:
		b.EncodeVarint(1<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.ExampleList); err != nil {
			return err
		}
	case *Input_ExampleListWithContext:
		b.EncodeVarint(2<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.ExampleListWithContext); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("Input.Kind has unexpected type %T", x)
	}
	return nil
}

func _Input_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*Input)
	switch tag {
	case 1: // kind.example_list
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(ExampleList)
		err := b.DecodeMessage(msg)
		m.Kind = &Input_ExampleList{msg}
		return true, err
	case 2: // kind.example_list_with_context
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(ExampleListWithContext)
		err := b.DecodeMessage(msg)
		m.Kind = &Input_ExampleListWithContext{msg}
		return true, err
	default:
		return false, nil
	}
}

func _Input_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*Input)
	// kind
	switch x := m.Kind.(type) {
	case *Input_ExampleList:
		s := proto.Size(x.ExampleList)
		n += proto.SizeVarint(1<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *Input_ExampleListWithContext:
		s := proto.Size(x.ExampleListWithContext)
		n += proto.SizeVarint(2<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

func init() {
	proto.RegisterType((*ExampleList)(nil), "tensorflow.serving.ExampleList")
	proto.RegisterType((*ExampleListWithContext)(nil), "tensorflow.serving.ExampleListWithContext")
	proto.RegisterType((*Input)(nil), "tensorflow.serving.Input")
}

func init() { proto.RegisterFile("serving/tensorflow_serving/apis/input.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 243 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0x2e, 0x4e, 0x2d, 0x2a,
	0xcb, 0xcc, 0x4b, 0xd7, 0x2f, 0x49, 0xcd, 0x2b, 0xce, 0x2f, 0x4a, 0xcb, 0xc9, 0x2f, 0x8f, 0x87,
	0x09, 0x25, 0x16, 0x64, 0x16, 0xeb, 0x67, 0xe6, 0x15, 0x94, 0x96, 0xe8, 0x15, 0x14, 0xe5, 0x97,
	0xe4, 0x0b, 0x09, 0x21, 0x14, 0xe9, 0x41, 0x15, 0x49, 0xa9, 0x22, 0xc4, 0xf4, 0x93, 0xf3, 0x8b,
	0x52, 0xf5, 0x53, 0x2b, 0x12, 0x73, 0x0b, 0x72, 0xe0, 0x34, 0x44, 0xab, 0x92, 0x1d, 0x17, 0xb7,
	0x2b, 0x44, 0xc0, 0x27, 0xb3, 0xb8, 0x44, 0x48, 0x9f, 0x8b, 0x03, 0x2a, 0x5f, 0x2c, 0xc1, 0xa8,
	0xc0, 0xac, 0xc1, 0x6d, 0x24, 0xac, 0x87, 0x64, 0x38, 0x54, 0x69, 0x10, 0x5c, 0x91, 0x52, 0x05,
	0x97, 0x18, 0x92, 0xfe, 0xf0, 0xcc, 0x92, 0x0c, 0xe7, 0xfc, 0xbc, 0x92, 0xd4, 0x0a, 0xd2, 0x8d,
	0x12, 0xd2, 0xe5, 0x62, 0x4f, 0x86, 0xe8, 0x95, 0x60, 0x52, 0x60, 0xc4, 0xa5, 0x1e, 0xa6, 0x46,
	0xe9, 0x18, 0x23, 0x17, 0xab, 0x27, 0x28, 0x10, 0x84, 0x3c, 0xb8, 0x78, 0xa0, 0x86, 0xc4, 0xe7,
	0x64, 0x16, 0x97, 0x48, 0x30, 0x82, 0x75, 0xcb, 0xeb, 0x61, 0x86, 0x8a, 0x1e, 0x92, 0x5b, 0x9d,
	0x98, 0x34, 0x18, 0x3d, 0x18, 0x82, 0xb8, 0x53, 0x91, 0xbc, 0x9f, 0xcd, 0x25, 0x89, 0x6c, 0x52,
	0x7c, 0x79, 0x66, 0x49, 0x46, 0x3c, 0xaa, 0xa3, 0xb4, 0x08, 0x18, 0x8b, 0x14, 0x04, 0x50, 0x1b,
	0xc4, 0x52, 0xb1, 0xcb, 0xb2, 0x71, 0xb1, 0x64, 0x67, 0xe6, 0xa5, 0x38, 0x31, 0xff, 0x60, 0x64,
	0x4c, 0x62, 0x03, 0x47, 0x87, 0x31, 0x20, 0x00, 0x00, 0xff, 0xff, 0xcc, 0x7f, 0xa4, 0xd9, 0xf8,
	0x01, 0x00, 0x00,
}
