// Code generated by protoc-gen-go.
// source: serving/tensorflow_serving/sources/storage_path/file_system_storage_path_source.proto
// DO NOT EDIT!

/*
Package tensorflow_serving is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow_serving/sources/storage_path/file_system_storage_path_source.proto

It has these top-level messages:
	FileSystemStoragePathSourceConfig
*/
package tensorflow_serving

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

// The policy to define how many versions of the servable should be
// served at the same time.
type FileSystemStoragePathSourceConfig_VersionPolicy int32

const (
	// Only serve the latest version that exists in the base path.
	// This is the default behavior.
	FileSystemStoragePathSourceConfig_LATEST_VERSION FileSystemStoragePathSourceConfig_VersionPolicy = 0
	// Serves all the versions that exist in the base path.
	FileSystemStoragePathSourceConfig_ALL_VERSIONS FileSystemStoragePathSourceConfig_VersionPolicy = 1
)

var FileSystemStoragePathSourceConfig_VersionPolicy_name = map[int32]string{
	0: "LATEST_VERSION",
	1: "ALL_VERSIONS",
}
var FileSystemStoragePathSourceConfig_VersionPolicy_value = map[string]int32{
	"LATEST_VERSION": 0,
	"ALL_VERSIONS":   1,
}

func (x FileSystemStoragePathSourceConfig_VersionPolicy) String() string {
	return proto.EnumName(FileSystemStoragePathSourceConfig_VersionPolicy_name, int32(x))
}
func (FileSystemStoragePathSourceConfig_VersionPolicy) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor0, []int{0, 0}
}

// Config proto for FileSystemStoragePathSource.
type FileSystemStoragePathSourceConfig struct {
	// The servables to monitor for new versions, and aspire.
	Servables []*FileSystemStoragePathSourceConfig_ServableToMonitor `protobuf:"bytes,5,rep,name=servables" json:"servables,omitempty"`
	// A single servable name/base_path pair to monitor.
	// DEPRECATED: Use 'servables' instead.
	// TODO(b/30898016): Stop using these fields, and ultimately remove them here.
	ServableName string `protobuf:"bytes,1,opt,name=servable_name,json=servableName" json:"servable_name,omitempty"`
	BasePath     string `protobuf:"bytes,2,opt,name=base_path,json=basePath" json:"base_path,omitempty"`
	// How long to wait between file-system polling to look for children of
	// 'base_path', in seconds.
	//
	// For testing use only: a negative value disables the polling thread.
	FileSystemPollWaitSeconds int64 `protobuf:"varint,3,opt,name=file_system_poll_wait_seconds,json=fileSystemPollWaitSeconds" json:"file_system_poll_wait_seconds,omitempty"`
	// If true, then FileSystemStoragePathSource::Create() and ::UpdateConfig()
	// fail if, for any configured servables, the file system doesn't currently
	// contain at least one version under the base path.
	// (Otherwise, it will emit a warning and keep pinging the file system to
	// check for a version to appear later.)
	FailIfZeroVersionsAtStartup bool `protobuf:"varint,4,opt,name=fail_if_zero_versions_at_startup,json=failIfZeroVersionsAtStartup" json:"fail_if_zero_versions_at_startup,omitempty"`
}

func (m *FileSystemStoragePathSourceConfig) Reset()         { *m = FileSystemStoragePathSourceConfig{} }
func (m *FileSystemStoragePathSourceConfig) String() string { return proto.CompactTextString(m) }
func (*FileSystemStoragePathSourceConfig) ProtoMessage()    {}
func (*FileSystemStoragePathSourceConfig) Descriptor() ([]byte, []int) {
	return fileDescriptor0, []int{0}
}

func (m *FileSystemStoragePathSourceConfig) GetServables() []*FileSystemStoragePathSourceConfig_ServableToMonitor {
	if m != nil {
		return m.Servables
	}
	return nil
}

func (m *FileSystemStoragePathSourceConfig) GetServableName() string {
	if m != nil {
		return m.ServableName
	}
	return ""
}

func (m *FileSystemStoragePathSourceConfig) GetBasePath() string {
	if m != nil {
		return m.BasePath
	}
	return ""
}

func (m *FileSystemStoragePathSourceConfig) GetFileSystemPollWaitSeconds() int64 {
	if m != nil {
		return m.FileSystemPollWaitSeconds
	}
	return 0
}

func (m *FileSystemStoragePathSourceConfig) GetFailIfZeroVersionsAtStartup() bool {
	if m != nil {
		return m.FailIfZeroVersionsAtStartup
	}
	return false
}

// A servable name and base path to look for versions of the servable.
type FileSystemStoragePathSourceConfig_ServableToMonitor struct {
	// The servable name to supply in aspired-versions callback calls. Child
	// paths of 'base_path' are considered to be versions of this servable.
	ServableName string `protobuf:"bytes,1,opt,name=servable_name,json=servableName" json:"servable_name,omitempty"`
	// The path to monitor, i.e. look for child paths of the form base_path/123.
	BasePath string `protobuf:"bytes,2,opt,name=base_path,json=basePath" json:"base_path,omitempty"`
	// The policy to determines the number of versions of the servable to be
	// served at the same time.
	VersionPolicy FileSystemStoragePathSourceConfig_VersionPolicy `protobuf:"varint,3,opt,name=version_policy,json=versionPolicy,enum=tensorflow.serving.FileSystemStoragePathSourceConfig_VersionPolicy" json:"version_policy,omitempty"`
}

func (m *FileSystemStoragePathSourceConfig_ServableToMonitor) Reset() {
	*m = FileSystemStoragePathSourceConfig_ServableToMonitor{}
}
func (m *FileSystemStoragePathSourceConfig_ServableToMonitor) String() string {
	return proto.CompactTextString(m)
}
func (*FileSystemStoragePathSourceConfig_ServableToMonitor) ProtoMessage() {}
func (*FileSystemStoragePathSourceConfig_ServableToMonitor) Descriptor() ([]byte, []int) {
	return fileDescriptor0, []int{0, 0}
}

func (m *FileSystemStoragePathSourceConfig_ServableToMonitor) GetServableName() string {
	if m != nil {
		return m.ServableName
	}
	return ""
}

func (m *FileSystemStoragePathSourceConfig_ServableToMonitor) GetBasePath() string {
	if m != nil {
		return m.BasePath
	}
	return ""
}

func (m *FileSystemStoragePathSourceConfig_ServableToMonitor) GetVersionPolicy() FileSystemStoragePathSourceConfig_VersionPolicy {
	if m != nil {
		return m.VersionPolicy
	}
	return FileSystemStoragePathSourceConfig_LATEST_VERSION
}

func init() {
	proto.RegisterType((*FileSystemStoragePathSourceConfig)(nil), "tensorflow.serving.FileSystemStoragePathSourceConfig")
	proto.RegisterType((*FileSystemStoragePathSourceConfig_ServableToMonitor)(nil), "tensorflow.serving.FileSystemStoragePathSourceConfig.ServableToMonitor")
	proto.RegisterEnum("tensorflow.serving.FileSystemStoragePathSourceConfig_VersionPolicy", FileSystemStoragePathSourceConfig_VersionPolicy_name, FileSystemStoragePathSourceConfig_VersionPolicy_value)
}

func init() {
	proto.RegisterFile("serving/tensorflow_serving/sources/storage_path/file_system_storage_path_source.proto", fileDescriptor0)
}

var fileDescriptor0 = []byte{
	// 390 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x92, 0xdf, 0x6e, 0xda, 0x30,
	0x14, 0xc6, 0x17, 0x60, 0x13, 0x78, 0x80, 0x98, 0xaf, 0xb2, 0xa1, 0x69, 0x19, 0xbb, 0x58, 0xae,
	0x82, 0xc4, 0xb4, 0xfb, 0x31, 0xc4, 0x26, 0x24, 0xc6, 0x50, 0x4c, 0xa9, 0xd4, 0x1b, 0xcb, 0x50,
	0x07, 0x5c, 0x99, 0x9c, 0xc8, 0x36, 0x20, 0xfa, 0x76, 0x7d, 0x8b, 0x3e, 0x4e, 0x95, 0x7f, 0x90,
	0x96, 0x4a, 0x95, 0x7a, 0x79, 0xce, 0xf9, 0xbe, 0xcf, 0xe7, 0x67, 0x1b, 0x5d, 0x68, 0xae, 0x76,
	0x22, 0x5c, 0x75, 0x0d, 0x0f, 0x35, 0xa8, 0x40, 0xc2, 0x9e, 0xe6, 0x2d, 0x0d, 0x5b, 0xb5, 0xe4,
	0xba, 0xab, 0x0d, 0x28, 0xb6, 0xe2, 0x34, 0x62, 0x66, 0xdd, 0x0d, 0x84, 0xe4, 0x54, 0x1f, 0xb4,
	0xe1, 0x1b, 0x5a, 0x1c, 0xd0, 0x54, 0xed, 0x45, 0x0a, 0x0c, 0x60, 0x7c, 0x8a, 0xf3, 0xb2, 0xb8,
	0xce, 0x7d, 0x05, 0x7d, 0xfd, 0x23, 0x24, 0x27, 0x89, 0x99, 0xa4, 0xde, 0x29, 0x33, 0x6b, 0x92,
	0x38, 0x07, 0x10, 0x06, 0x62, 0x85, 0x39, 0xaa, 0xc5, 0x06, 0xb6, 0x90, 0x5c, 0xdb, 0x6f, 0x9d,
	0xb2, 0xfb, 0xbe, 0xf7, 0xd7, 0x3b, 0x4f, 0xf3, 0x5e, 0x4c, 0xf2, 0x48, 0x16, 0x33, 0x83, 0x7f,
	0x10, 0x0a, 0x03, 0xca, 0x3f, 0x25, 0xe3, 0xef, 0xa8, 0x91, 0x17, 0x34, 0x64, 0x1b, 0x6e, 0x5b,
	0x8e, 0xe5, 0xd6, 0x7e, 0x97, 0x6c, 0xcb, 0xaf, 0xe7, 0x83, 0x09, 0xdb, 0x70, 0xfc, 0x05, 0xd5,
	0x16, 0x4c, 0xa7, 0x8c, 0x76, 0xe9, 0x28, 0xaa, 0xc6, 0xcd, 0xf8, 0x48, 0xfc, 0x0b, 0x7d, 0x2e,
	0xde, 0x49, 0x04, 0x52, 0xd2, 0x3d, 0x13, 0x86, 0x6a, 0xbe, 0x84, 0xf0, 0x5a, 0xdb, 0x65, 0xc7,
	0x72, 0xcb, 0xfe, 0xc7, 0xe0, 0xb8, 0xf0, 0x14, 0xa4, 0xbc, 0x64, 0xc2, 0x90, 0x54, 0x80, 0x87,
	0xc8, 0x09, 0x98, 0x90, 0x54, 0x04, 0xf4, 0x96, 0x2b, 0xa0, 0x3b, 0xae, 0xb4, 0x80, 0x50, 0x53,
	0x66, 0xa8, 0x36, 0x4c, 0x99, 0x6d, 0x64, 0x57, 0x1c, 0xcb, 0xad, 0xfa, 0xed, 0x58, 0x37, 0x0a,
	0xae, 0xb8, 0x82, 0x79, 0x26, 0xea, 0x1b, 0x92, 0x4a, 0x3e, 0xdd, 0x59, 0xe8, 0xc3, 0x19, 0x33,
	0xfe, 0xf6, 0x2c, 0xe8, 0x13, 0xc8, 0xf6, 0x19, 0x64, 0x01, 0xf0, 0x06, 0x35, 0xb3, 0x8d, 0x62,
	0x38, 0xb1, 0x3c, 0x24, 0x44, 0xcd, 0xde, 0xe0, 0x75, 0xcf, 0x92, 0x2d, 0x3e, 0x4d, 0xa2, 0xfc,
	0xc6, 0xae, 0x58, 0x76, 0x7e, 0xa2, 0xc6, 0xa3, 0x39, 0xc6, 0xa8, 0x39, 0xee, 0xcf, 0x86, 0x64,
	0x46, 0xe7, 0x43, 0x9f, 0x8c, 0xfe, 0x4f, 0x5a, 0x6f, 0x70, 0x0b, 0xd5, 0xfb, 0xe3, 0x71, 0xde,
	0x20, 0x2d, 0x6b, 0xf1, 0x2e, 0xf9, 0x75, 0x3f, 0x1e, 0x02, 0x00, 0x00, 0xff, 0xff, 0x22, 0xa9,
	0x61, 0xfd, 0xce, 0x02, 0x00, 0x00,
}