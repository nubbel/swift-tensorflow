// Code generated by protoc-gen-go.
// source: serving/tensorflow/core/protobuf/tensorflow_server.proto
// DO NOT EDIT!

/*
Package tensorflow is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/core/protobuf/tensorflow_server.proto

It has these top-level messages:
	ServerDef
*/
package tensorflow

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow18 "tensorflow/core/protobuf"
import tensorflow16 "tensorflow/core/protobuf"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Defines the configuration of a single TensorFlow server.
type ServerDef struct {
	// The cluster of which this server is a member.
	Cluster *tensorflow16.ClusterDef `protobuf:"bytes,1,opt,name=cluster" json:"cluster,omitempty"`
	// The name of the job of which this server is a member.
	//
	// NOTE(mrry): The `cluster` field must contain a `JobDef` with a `name` field
	// that matches this name.
	JobName string `protobuf:"bytes,2,opt,name=job_name,json=jobName" json:"job_name,omitempty"`
	// The task index of this server in its job.
	//
	// NOTE: The `cluster` field must contain a `JobDef` with a matching `name`
	// and a mapping in its `tasks` field for this index.
	TaskIndex int32 `protobuf:"varint,3,opt,name=task_index,json=taskIndex" json:"task_index,omitempty"`
	// The default configuration for sessions that run on this server.
	DefaultSessionConfig *tensorflow18.ConfigProto `protobuf:"bytes,4,opt,name=default_session_config,json=defaultSessionConfig" json:"default_session_config,omitempty"`
	// The protocol to be used by this server.
	//
	// Acceptable values include: "grpc".
	Protocol string `protobuf:"bytes,5,opt,name=protocol" json:"protocol,omitempty"`
}

func (m *ServerDef) Reset()                    { *m = ServerDef{} }
func (m *ServerDef) String() string            { return proto.CompactTextString(m) }
func (*ServerDef) ProtoMessage()               {}
func (*ServerDef) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *ServerDef) GetCluster() *tensorflow16.ClusterDef {
	if m != nil {
		return m.Cluster
	}
	return nil
}

func (m *ServerDef) GetJobName() string {
	if m != nil {
		return m.JobName
	}
	return ""
}

func (m *ServerDef) GetTaskIndex() int32 {
	if m != nil {
		return m.TaskIndex
	}
	return 0
}

func (m *ServerDef) GetDefaultSessionConfig() *tensorflow18.ConfigProto {
	if m != nil {
		return m.DefaultSessionConfig
	}
	return nil
}

func (m *ServerDef) GetProtocol() string {
	if m != nil {
		return m.Protocol
	}
	return ""
}

func init() {
	proto.RegisterType((*ServerDef)(nil), "tensorflow.ServerDef")
}

func init() {
	proto.RegisterFile("serving/tensorflow/core/protobuf/tensorflow_server.proto", fileDescriptor0)
}

var fileDescriptor0 = []byte{
	// 272 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x8f, 0xbb, 0x4e, 0xc3, 0x30,
	0x14, 0x86, 0x65, 0xa0, 0xb4, 0x31, 0x4c, 0x16, 0x2a, 0x21, 0x12, 0x52, 0x84, 0x04, 0xca, 0x94,
	0x20, 0x58, 0x98, 0x4b, 0x17, 0x06, 0x50, 0x95, 0x3e, 0x80, 0x95, 0xcb, 0x71, 0xe4, 0x92, 0xf8,
	0x20, 0xdb, 0x01, 0x9e, 0x97, 0xa7, 0x60, 0x44, 0xb1, 0x5b, 0xda, 0x0e, 0x1d, 0xed, 0xef, 0xbf,
	0x9c, 0x9f, 0x3e, 0x19, 0xd0, 0x9f, 0x52, 0x35, 0x99, 0x05, 0x65, 0x50, 0x8b, 0x16, 0xbf, 0xb2,
	0x0a, 0x35, 0x64, 0x1f, 0x1a, 0x2d, 0x96, 0xbd, 0xd8, 0x01, 0x7c, 0xd0, 0x82, 0x4e, 0x1d, 0x62,
	0x74, 0x0b, 0xa2, 0xdb, 0x83, 0xee, 0x0a, 0x95, 0x90, 0x8d, 0xb7, 0x44, 0x77, 0x87, 0x65, 0x6d,
	0x6f, 0xec, 0x26, 0xfa, 0xe6, 0x87, 0xd0, 0x60, 0xe9, 0xba, 0xe6, 0x20, 0xd8, 0x3d, 0x1d, 0xaf,
	0x71, 0x48, 0x62, 0x92, 0x9c, 0x3d, 0x4c, 0xd3, 0x6d, 0x4e, 0xfa, 0xec, 0xd1, 0x1c, 0x44, 0xbe,
	0x91, 0xb1, 0x2b, 0x3a, 0x59, 0x61, 0xc9, 0x55, 0xd1, 0x41, 0x78, 0x14, 0x93, 0x24, 0xc8, 0xc7,
	0x2b, 0x2c, 0xdf, 0x8a, 0x0e, 0xd8, 0x35, 0xa5, 0xb6, 0x30, 0xef, 0x5c, 0xaa, 0x1a, 0xbe, 0xc3,
	0xe3, 0x98, 0x24, 0xa3, 0x3c, 0x18, 0x7e, 0x5e, 0x86, 0x0f, 0xf6, 0x4a, 0xa7, 0x35, 0x88, 0xa2,
	0x6f, 0x2d, 0x37, 0x60, 0x8c, 0x44, 0xc5, 0xfd, 0x82, 0xf0, 0xc4, 0x55, 0x5f, 0xee, 0x55, 0x3b,
	0xb2, 0x18, 0x4e, 0xce, 0x2f, 0xd6, 0xb6, 0xa5, 0x77, 0x79, 0xc4, 0x22, 0x3a, 0x71, 0x8b, 0x2a,
	0x6c, 0xc3, 0x91, 0x3b, 0xe4, 0xff, 0x3d, 0xcb, 0x68, 0x84, 0xba, 0xd9, 0xcd, 0xab, 0xa5, 0xb1,
	0xba, 0x57, 0x56, 0x76, 0x30, 0x3b, 0xf7, 0xfb, 0x5d, 0xb8, 0x59, 0x90, 0x5f, 0x42, 0xca, 0x53,
	0x67, 0x7d, 0xfc, 0x0b, 0x00, 0x00, 0xff, 0xff, 0x63, 0x67, 0x12, 0x20, 0xb3, 0x01, 0x00, 0x00,
}
