// Code generated by protoc-gen-go.
// source: serving/tensorflow_serving/servables/tensorflow/session_bundle_source_adapter.proto
// DO NOT EDIT!

/*
Package tensorflow_serving is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow_serving/servables/tensorflow/session_bundle_source_adapter.proto

It has these top-level messages:
	SessionBundleSourceAdapterConfig
*/
package tensorflow_serving

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow_serving1 "tensorflow_serving/servables/tensorflow"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Config proto for SessionBundleSourceAdapter.
type SessionBundleSourceAdapterConfig struct {
	Config *tensorflow_serving1.SessionBundleConfig `protobuf:"bytes,1,opt,name=config" json:"config,omitempty"`
}

func (m *SessionBundleSourceAdapterConfig) Reset()         { *m = SessionBundleSourceAdapterConfig{} }
func (m *SessionBundleSourceAdapterConfig) String() string { return proto.CompactTextString(m) }
func (*SessionBundleSourceAdapterConfig) ProtoMessage()    {}
func (*SessionBundleSourceAdapterConfig) Descriptor() ([]byte, []int) {
	return fileDescriptor0, []int{0}
}

func (m *SessionBundleSourceAdapterConfig) GetConfig() *tensorflow_serving1.SessionBundleConfig {
	if m != nil {
		return m.Config
	}
	return nil
}

func init() {
	proto.RegisterType((*SessionBundleSourceAdapterConfig)(nil), "tensorflow.serving.SessionBundleSourceAdapterConfig")
}

func init() {
	proto.RegisterFile("serving/tensorflow_serving/servables/tensorflow/session_bundle_source_adapter.proto", fileDescriptor0)
}

var fileDescriptor0 = []byte{
	// 161 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x0a, 0x2e, 0x4e, 0x2d, 0x2a,
	0xcb, 0xcc, 0x4b, 0xd7, 0x2f, 0x49, 0xcd, 0x2b, 0xce, 0x2f, 0x4a, 0xcb, 0xc9, 0x2f, 0x8f, 0x87,
	0x09, 0x81, 0xe8, 0xc4, 0xa4, 0x9c, 0xd4, 0x62, 0x24, 0x49, 0xfd, 0xe2, 0xd4, 0xe2, 0xe2, 0xcc,
	0xfc, 0xbc, 0xf8, 0xa4, 0xd2, 0xbc, 0x94, 0x9c, 0xd4, 0xf8, 0xe2, 0xfc, 0xd2, 0xa2, 0xe4, 0xd4,
	0xf8, 0xc4, 0x94, 0xc4, 0x82, 0x92, 0xd4, 0x22, 0xbd, 0x82, 0xa2, 0xfc, 0x92, 0x7c, 0x21, 0x21,
	0x84, 0x7a, 0x3d, 0xa8, 0x61, 0x52, 0xce, 0x64, 0x5a, 0x90, 0x9c, 0x9f, 0x97, 0x96, 0x99, 0x0e,
	0x31, 0x58, 0x29, 0x99, 0x4b, 0x21, 0x18, 0x22, 0xed, 0x04, 0x96, 0x0d, 0x06, 0xdb, 0xee, 0x08,
	0xb1, 0xdc, 0x19, 0xac, 0x52, 0xc8, 0x9e, 0x8b, 0x0d, 0xa2, 0x47, 0x82, 0x51, 0x81, 0x51, 0x83,
	0xdb, 0x48, 0x5d, 0x0f, 0xd3, 0x35, 0x7a, 0x28, 0xa6, 0x40, 0x34, 0x06, 0x41, 0xb5, 0x25, 0xb1,
	0x81, 0xed, 0x32, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff, 0x8f, 0x08, 0x44, 0x83, 0x1b, 0x01, 0x00,
	0x00,
}
