// Code generated by protoc-gen-go.
// source: serving/tensorflow/core/framework/device_attributes.proto
// DO NOT EDIT!

/*
Package tensorflow is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/core/framework/device_attributes.proto

It has these top-level messages:
	DeviceLocality
	DeviceAttributes
*/
package tensorflow

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

type DeviceLocality struct {
	// Optional bus locality of device.  Default value of 0 means
	// no specific locality.  Specific localities are indexed from 1.
	BusId int32 `protobuf:"varint,1,opt,name=bus_id,json=busId" json:"bus_id,omitempty"`
}

func (m *DeviceLocality) Reset()                    { *m = DeviceLocality{} }
func (m *DeviceLocality) String() string            { return proto.CompactTextString(m) }
func (*DeviceLocality) ProtoMessage()               {}
func (*DeviceLocality) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *DeviceLocality) GetBusId() int32 {
	if m != nil {
		return m.BusId
	}
	return 0
}

type DeviceAttributes struct {
	// Fully specified name of the device within a cluster.
	Name string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	// String representation of device_type.
	DeviceType string `protobuf:"bytes,2,opt,name=device_type,json=deviceType" json:"device_type,omitempty"`
	// Memory capacity of device in bytes.
	MemoryLimit int64 `protobuf:"varint,4,opt,name=memory_limit,json=memoryLimit" json:"memory_limit,omitempty"`
	// Platform-specific data about device that may be useful
	// for supporting efficient data transfers.
	Locality *DeviceLocality `protobuf:"bytes,5,opt,name=locality" json:"locality,omitempty"`
	// A device is assigned a global unique number each time it is
	// initialized. "incarnation" should never be 0.
	Incarnation uint64 `protobuf:"fixed64,6,opt,name=incarnation" json:"incarnation,omitempty"`
	// String representation of the physical device that this device maps to.
	PhysicalDeviceDesc string `protobuf:"bytes,7,opt,name=physical_device_desc,json=physicalDeviceDesc" json:"physical_device_desc,omitempty"`
}

func (m *DeviceAttributes) Reset()                    { *m = DeviceAttributes{} }
func (m *DeviceAttributes) String() string            { return proto.CompactTextString(m) }
func (*DeviceAttributes) ProtoMessage()               {}
func (*DeviceAttributes) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *DeviceAttributes) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *DeviceAttributes) GetDeviceType() string {
	if m != nil {
		return m.DeviceType
	}
	return ""
}

func (m *DeviceAttributes) GetMemoryLimit() int64 {
	if m != nil {
		return m.MemoryLimit
	}
	return 0
}

func (m *DeviceAttributes) GetLocality() *DeviceLocality {
	if m != nil {
		return m.Locality
	}
	return nil
}

func (m *DeviceAttributes) GetIncarnation() uint64 {
	if m != nil {
		return m.Incarnation
	}
	return 0
}

func (m *DeviceAttributes) GetPhysicalDeviceDesc() string {
	if m != nil {
		return m.PhysicalDeviceDesc
	}
	return ""
}

func init() {
	proto.RegisterType((*DeviceLocality)(nil), "tensorflow.DeviceLocality")
	proto.RegisterType((*DeviceAttributes)(nil), "tensorflow.DeviceAttributes")
}

func init() {
	proto.RegisterFile("serving/tensorflow/core/framework/device_attributes.proto", fileDescriptor0)
}

var fileDescriptor0 = []byte{
	// 291 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x90, 0xc1, 0x4b, 0xc3, 0x30,
	0x18, 0xc5, 0x89, 0x6e, 0x55, 0xbf, 0x8a, 0x48, 0x50, 0x09, 0x5e, 0xac, 0xbb, 0xd8, 0xd3, 0x2a,
	0x0a, 0x8a, 0x47, 0xc7, 0x2e, 0xc2, 0x0e, 0xa3, 0x78, 0x2f, 0x69, 0xfa, 0x6d, 0x06, 0xdb, 0xa4,
	0x24, 0xd9, 0x46, 0xff, 0x71, 0xf1, 0x28, 0x4b, 0x6b, 0x37, 0xbd, 0x85, 0xf7, 0x5e, 0xbe, 0xf7,
	0xe3, 0xc1, 0x8b, 0x45, 0xb3, 0x96, 0x6a, 0x99, 0x38, 0x54, 0x56, 0x9b, 0x45, 0xa9, 0x37, 0x89,
	0xd0, 0x06, 0x93, 0x85, 0xe1, 0x15, 0x6e, 0xb4, 0xf9, 0x4c, 0x0a, 0x5c, 0x4b, 0x81, 0x19, 0x77,
	0xce, 0xc8, 0x7c, 0xe5, 0xd0, 0x8e, 0x6b, 0xa3, 0x9d, 0xa6, 0xb0, 0xfb, 0x32, 0xba, 0x83, 0xb3,
	0xa9, 0x8f, 0xcd, 0xb4, 0xe0, 0xa5, 0x74, 0x0d, 0xbd, 0x84, 0x20, 0x5f, 0xd9, 0x4c, 0x16, 0x8c,
	0x44, 0x24, 0x1e, 0xa6, 0xc3, 0x7c, 0x65, 0xdf, 0x8a, 0xd1, 0x17, 0x81, 0xf3, 0x36, 0xf9, 0xda,
	0xdf, 0xa3, 0x14, 0x06, 0x8a, 0x57, 0xe8, 0x93, 0x27, 0xa9, 0x7f, 0xd3, 0x1b, 0x08, 0xbb, 0x62,
	0xd7, 0xd4, 0xc8, 0x0e, 0xbc, 0x05, 0xad, 0xf4, 0xde, 0xd4, 0x48, 0x6f, 0xe1, 0xb4, 0xc2, 0x4a,
	0x9b, 0x26, 0x2b, 0x65, 0x25, 0x1d, 0x1b, 0x44, 0x24, 0x3e, 0x4c, 0xc3, 0x56, 0x9b, 0x6d, 0x25,
	0xfa, 0x04, 0xc7, 0x65, 0xc7, 0xc3, 0x86, 0x11, 0x89, 0xc3, 0x87, 0xeb, 0xf1, 0x0e, 0x7a, 0xfc,
	0x97, 0x38, 0xed, 0xb3, 0x34, 0x82, 0x50, 0x2a, 0xc1, 0x8d, 0xe2, 0x4e, 0x6a, 0xc5, 0x82, 0x88,
	0xc4, 0x41, 0xba, 0x2f, 0xd1, 0x7b, 0xb8, 0xa8, 0x3f, 0x1a, 0x2b, 0x05, 0x2f, 0xb3, 0x0e, 0xb3,
	0x40, 0x2b, 0xd8, 0x91, 0xc7, 0xa4, 0xbf, 0x5e, 0xdb, 0x30, 0x45, 0x2b, 0x26, 0xcf, 0xc0, 0xb4,
	0x59, 0xee, 0xd7, 0xf7, 0x0b, 0x4f, 0xae, 0xfe, 0x2f, 0x32, 0xdf, 0x0e, 0x6c, 0xe7, 0xe4, 0x9b,
	0x90, 0x3c, 0xf0, 0x6b, 0x3f, 0xfe, 0x04, 0x00, 0x00, 0xff, 0xff, 0x79, 0xb0, 0x22, 0x78, 0xaa,
	0x01, 0x00, 0x00,
}