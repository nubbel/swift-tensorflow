// Code generated by protoc-gen-go.
// source: serving/tensorflow/core/framework/step_stats.proto
// DO NOT EDIT!

/*
Package tensorflow is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/core/framework/step_stats.proto

It has these top-level messages:
	AllocatorMemoryUsed
	NodeOutput
	MemoryStats
	NodeExecStats
	DeviceStepStats
	StepStats
*/
package tensorflow

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow1 "tensorflow/core/framework"
import tensorflow4 "tensorflow/core/framework"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type AllocatorMemoryUsed struct {
	AllocatorName string `protobuf:"bytes,1,opt,name=allocator_name,json=allocatorName" json:"allocator_name,omitempty"`
	// These are per-node allocator memory stats.
	TotalBytes int64 `protobuf:"varint,2,opt,name=total_bytes,json=totalBytes" json:"total_bytes,omitempty"`
	PeakBytes  int64 `protobuf:"varint,3,opt,name=peak_bytes,json=peakBytes" json:"peak_bytes,omitempty"`
	// The bytes that are not deallocated.
	LiveBytes int64 `protobuf:"varint,4,opt,name=live_bytes,json=liveBytes" json:"live_bytes,omitempty"`
	// These are snapshots of the overall allocator memory stats.
	// The number of live bytes currently allocated by the allocator.
	AllocatorBytesInUse int64 `protobuf:"varint,5,opt,name=allocator_bytes_in_use,json=allocatorBytesInUse" json:"allocator_bytes_in_use,omitempty"`
}

func (m *AllocatorMemoryUsed) Reset()                    { *m = AllocatorMemoryUsed{} }
func (m *AllocatorMemoryUsed) String() string            { return proto.CompactTextString(m) }
func (*AllocatorMemoryUsed) ProtoMessage()               {}
func (*AllocatorMemoryUsed) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *AllocatorMemoryUsed) GetAllocatorName() string {
	if m != nil {
		return m.AllocatorName
	}
	return ""
}

func (m *AllocatorMemoryUsed) GetTotalBytes() int64 {
	if m != nil {
		return m.TotalBytes
	}
	return 0
}

func (m *AllocatorMemoryUsed) GetPeakBytes() int64 {
	if m != nil {
		return m.PeakBytes
	}
	return 0
}

func (m *AllocatorMemoryUsed) GetLiveBytes() int64 {
	if m != nil {
		return m.LiveBytes
	}
	return 0
}

func (m *AllocatorMemoryUsed) GetAllocatorBytesInUse() int64 {
	if m != nil {
		return m.AllocatorBytesInUse
	}
	return 0
}

// Output sizes recorded for a single execution of a graph node.
type NodeOutput struct {
	Slot              int32                          `protobuf:"varint,1,opt,name=slot" json:"slot,omitempty"`
	TensorDescription *tensorflow4.TensorDescription `protobuf:"bytes,3,opt,name=tensor_description,json=tensorDescription" json:"tensor_description,omitempty"`
}

func (m *NodeOutput) Reset()                    { *m = NodeOutput{} }
func (m *NodeOutput) String() string            { return proto.CompactTextString(m) }
func (*NodeOutput) ProtoMessage()               {}
func (*NodeOutput) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *NodeOutput) GetSlot() int32 {
	if m != nil {
		return m.Slot
	}
	return 0
}

func (m *NodeOutput) GetTensorDescription() *tensorflow4.TensorDescription {
	if m != nil {
		return m.TensorDescription
	}
	return nil
}

// For memory tracking.
type MemoryStats struct {
	HostTempMemorySize             int64   `protobuf:"varint,1,opt,name=host_temp_memory_size,json=hostTempMemorySize" json:"host_temp_memory_size,omitempty"`
	DeviceTempMemorySize           int64   `protobuf:"varint,2,opt,name=device_temp_memory_size,json=deviceTempMemorySize" json:"device_temp_memory_size,omitempty"`
	HostPersistentMemorySize       int64   `protobuf:"varint,3,opt,name=host_persistent_memory_size,json=hostPersistentMemorySize" json:"host_persistent_memory_size,omitempty"`
	DevicePersistentMemorySize     int64   `protobuf:"varint,4,opt,name=device_persistent_memory_size,json=devicePersistentMemorySize" json:"device_persistent_memory_size,omitempty"`
	HostPersistentTensorAllocIds   []int64 `protobuf:"varint,5,rep,packed,name=host_persistent_tensor_alloc_ids,json=hostPersistentTensorAllocIds" json:"host_persistent_tensor_alloc_ids,omitempty"`
	DevicePersistentTensorAllocIds []int64 `protobuf:"varint,6,rep,packed,name=device_persistent_tensor_alloc_ids,json=devicePersistentTensorAllocIds" json:"device_persistent_tensor_alloc_ids,omitempty"`
}

func (m *MemoryStats) Reset()                    { *m = MemoryStats{} }
func (m *MemoryStats) String() string            { return proto.CompactTextString(m) }
func (*MemoryStats) ProtoMessage()               {}
func (*MemoryStats) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *MemoryStats) GetHostTempMemorySize() int64 {
	if m != nil {
		return m.HostTempMemorySize
	}
	return 0
}

func (m *MemoryStats) GetDeviceTempMemorySize() int64 {
	if m != nil {
		return m.DeviceTempMemorySize
	}
	return 0
}

func (m *MemoryStats) GetHostPersistentMemorySize() int64 {
	if m != nil {
		return m.HostPersistentMemorySize
	}
	return 0
}

func (m *MemoryStats) GetDevicePersistentMemorySize() int64 {
	if m != nil {
		return m.DevicePersistentMemorySize
	}
	return 0
}

func (m *MemoryStats) GetHostPersistentTensorAllocIds() []int64 {
	if m != nil {
		return m.HostPersistentTensorAllocIds
	}
	return nil
}

func (m *MemoryStats) GetDevicePersistentTensorAllocIds() []int64 {
	if m != nil {
		return m.DevicePersistentTensorAllocIds
	}
	return nil
}

// Time/size stats recorded for a single execution of a graph node.
type NodeExecStats struct {
	// TODO(tucker): Use some more compact form of node identity than
	// the full string name.  Either all processes should agree on a
	// global id (cost_id?) for each node, or we should use a hash of
	// the name.
	NodeName         string                               `protobuf:"bytes,1,opt,name=node_name,json=nodeName" json:"node_name,omitempty"`
	AllStartMicros   int64                                `protobuf:"varint,2,opt,name=all_start_micros,json=allStartMicros" json:"all_start_micros,omitempty"`
	OpStartRelMicros int64                                `protobuf:"varint,3,opt,name=op_start_rel_micros,json=opStartRelMicros" json:"op_start_rel_micros,omitempty"`
	OpEndRelMicros   int64                                `protobuf:"varint,4,opt,name=op_end_rel_micros,json=opEndRelMicros" json:"op_end_rel_micros,omitempty"`
	AllEndRelMicros  int64                                `protobuf:"varint,5,opt,name=all_end_rel_micros,json=allEndRelMicros" json:"all_end_rel_micros,omitempty"`
	Memory           []*AllocatorMemoryUsed               `protobuf:"bytes,6,rep,name=memory" json:"memory,omitempty"`
	Output           []*NodeOutput                        `protobuf:"bytes,7,rep,name=output" json:"output,omitempty"`
	TimelineLabel    string                               `protobuf:"bytes,8,opt,name=timeline_label,json=timelineLabel" json:"timeline_label,omitempty"`
	ScheduledMicros  int64                                `protobuf:"varint,9,opt,name=scheduled_micros,json=scheduledMicros" json:"scheduled_micros,omitempty"`
	ThreadId         uint32                               `protobuf:"varint,10,opt,name=thread_id,json=threadId" json:"thread_id,omitempty"`
	ReferencedTensor []*tensorflow1.AllocationDescription `protobuf:"bytes,11,rep,name=referenced_tensor,json=referencedTensor" json:"referenced_tensor,omitempty"`
	MemoryStats      *MemoryStats                         `protobuf:"bytes,12,opt,name=memory_stats,json=memoryStats" json:"memory_stats,omitempty"`
}

func (m *NodeExecStats) Reset()                    { *m = NodeExecStats{} }
func (m *NodeExecStats) String() string            { return proto.CompactTextString(m) }
func (*NodeExecStats) ProtoMessage()               {}
func (*NodeExecStats) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *NodeExecStats) GetNodeName() string {
	if m != nil {
		return m.NodeName
	}
	return ""
}

func (m *NodeExecStats) GetAllStartMicros() int64 {
	if m != nil {
		return m.AllStartMicros
	}
	return 0
}

func (m *NodeExecStats) GetOpStartRelMicros() int64 {
	if m != nil {
		return m.OpStartRelMicros
	}
	return 0
}

func (m *NodeExecStats) GetOpEndRelMicros() int64 {
	if m != nil {
		return m.OpEndRelMicros
	}
	return 0
}

func (m *NodeExecStats) GetAllEndRelMicros() int64 {
	if m != nil {
		return m.AllEndRelMicros
	}
	return 0
}

func (m *NodeExecStats) GetMemory() []*AllocatorMemoryUsed {
	if m != nil {
		return m.Memory
	}
	return nil
}

func (m *NodeExecStats) GetOutput() []*NodeOutput {
	if m != nil {
		return m.Output
	}
	return nil
}

func (m *NodeExecStats) GetTimelineLabel() string {
	if m != nil {
		return m.TimelineLabel
	}
	return ""
}

func (m *NodeExecStats) GetScheduledMicros() int64 {
	if m != nil {
		return m.ScheduledMicros
	}
	return 0
}

func (m *NodeExecStats) GetThreadId() uint32 {
	if m != nil {
		return m.ThreadId
	}
	return 0
}

func (m *NodeExecStats) GetReferencedTensor() []*tensorflow1.AllocationDescription {
	if m != nil {
		return m.ReferencedTensor
	}
	return nil
}

func (m *NodeExecStats) GetMemoryStats() *MemoryStats {
	if m != nil {
		return m.MemoryStats
	}
	return nil
}

type DeviceStepStats struct {
	Device    string           `protobuf:"bytes,1,opt,name=device" json:"device,omitempty"`
	NodeStats []*NodeExecStats `protobuf:"bytes,2,rep,name=node_stats,json=nodeStats" json:"node_stats,omitempty"`
}

func (m *DeviceStepStats) Reset()                    { *m = DeviceStepStats{} }
func (m *DeviceStepStats) String() string            { return proto.CompactTextString(m) }
func (*DeviceStepStats) ProtoMessage()               {}
func (*DeviceStepStats) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{4} }

func (m *DeviceStepStats) GetDevice() string {
	if m != nil {
		return m.Device
	}
	return ""
}

func (m *DeviceStepStats) GetNodeStats() []*NodeExecStats {
	if m != nil {
		return m.NodeStats
	}
	return nil
}

type StepStats struct {
	DevStats []*DeviceStepStats `protobuf:"bytes,1,rep,name=dev_stats,json=devStats" json:"dev_stats,omitempty"`
}

func (m *StepStats) Reset()                    { *m = StepStats{} }
func (m *StepStats) String() string            { return proto.CompactTextString(m) }
func (*StepStats) ProtoMessage()               {}
func (*StepStats) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{5} }

func (m *StepStats) GetDevStats() []*DeviceStepStats {
	if m != nil {
		return m.DevStats
	}
	return nil
}

func init() {
	proto.RegisterType((*AllocatorMemoryUsed)(nil), "tensorflow.AllocatorMemoryUsed")
	proto.RegisterType((*NodeOutput)(nil), "tensorflow.NodeOutput")
	proto.RegisterType((*MemoryStats)(nil), "tensorflow.MemoryStats")
	proto.RegisterType((*NodeExecStats)(nil), "tensorflow.NodeExecStats")
	proto.RegisterType((*DeviceStepStats)(nil), "tensorflow.DeviceStepStats")
	proto.RegisterType((*StepStats)(nil), "tensorflow.StepStats")
}

func init() { proto.RegisterFile("serving/tensorflow/core/framework/step_stats.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 761 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x54, 0x6d, 0x4f, 0xdb, 0x48,
	0x10, 0x96, 0x09, 0xe4, 0x92, 0x09, 0x2f, 0x61, 0xb9, 0x03, 0x1f, 0x39, 0x8e, 0x5c, 0xa4, 0x93,
	0x82, 0xaa, 0x26, 0x6d, 0x50, 0x5b, 0x54, 0xa9, 0x1f, 0x40, 0x50, 0x89, 0x0a, 0x28, 0x32, 0xf0,
	0xd9, 0x32, 0xde, 0x01, 0x2c, 0xd6, 0x5e, 0x6b, 0x77, 0x13, 0x0a, 0xff, 0xa1, 0x3f, 0xaa, 0xff,
	0xa0, 0x3f, 0xa7, 0x1f, 0xab, 0xdd, 0x75, 0x6c, 0x27, 0x81, 0x6f, 0xeb, 0x67, 0x9e, 0x99, 0x7d,
	0x3c, 0xf3, 0xcc, 0xc2, 0x40, 0xa2, 0x18, 0x45, 0xc9, 0x6d, 0x5f, 0x61, 0x22, 0xb9, 0xb8, 0x61,
	0xfc, 0xa1, 0x1f, 0x72, 0x81, 0xfd, 0x1b, 0x11, 0xc4, 0xf8, 0xc0, 0xc5, 0x7d, 0x5f, 0x2a, 0x4c,
	0x7d, 0xa9, 0x02, 0x25, 0x7b, 0xa9, 0xe0, 0x8a, 0x13, 0x28, 0xb8, 0x9b, 0xef, 0x5f, 0xce, 0x0b,
	0x18, 0xe3, 0x61, 0xa0, 0x22, 0x9e, 0xf8, 0x14, 0x65, 0x28, 0xa2, 0x54, 0x9f, 0x6d, 0x8d, 0xcd,
	0xc1, 0xcb, 0x79, 0x36, 0x32, 0x9b, 0xd3, 0xf9, 0xe9, 0xc0, 0xda, 0xbe, 0x2d, 0xca, 0xc5, 0x29,
	0xc6, 0x5c, 0x3c, 0x5e, 0x49, 0xa4, 0xe4, 0x7f, 0x58, 0x0e, 0xc6, 0xb0, 0x9f, 0x04, 0x31, 0xba,
	0x4e, 0xdb, 0xe9, 0xd6, 0xbd, 0xa5, 0x1c, 0x3d, 0x0b, 0x62, 0x24, 0xdb, 0xd0, 0x50, 0x5c, 0x05,
	0xcc, 0xbf, 0x7e, 0x54, 0x28, 0xdd, 0xb9, 0xb6, 0xd3, 0xad, 0x78, 0x60, 0xa0, 0x03, 0x8d, 0x90,
	0x2d, 0x80, 0x14, 0x83, 0xfb, 0x2c, 0x5e, 0x31, 0xf1, 0xba, 0x46, 0xf2, 0x30, 0x8b, 0x46, 0x98,
	0x85, 0xe7, 0x6d, 0x58, 0x23, 0x36, 0xbc, 0x0b, 0xeb, 0x85, 0x0a, 0xc3, 0xf1, 0xa3, 0xc4, 0x1f,
	0x4a, 0x74, 0x17, 0x0c, 0x75, 0x2d, 0x8f, 0x1a, 0xfe, 0x71, 0x72, 0x25, 0xb1, 0x93, 0x00, 0x9c,
	0x71, 0x8a, 0x5f, 0x87, 0x2a, 0x1d, 0x2a, 0x42, 0x60, 0x5e, 0x32, 0xae, 0x8c, 0xfc, 0x05, 0xcf,
	0x9c, 0xc9, 0x09, 0x90, 0xd9, 0x86, 0x18, 0x71, 0x8d, 0xc1, 0x56, 0xaf, 0xe8, 0x62, 0xef, 0xd2,
	0x1c, 0x0f, 0x0b, 0x92, 0xb7, 0xaa, 0xa6, 0xa1, 0xce, 0xf7, 0x0a, 0x34, 0x6c, 0xe7, 0x2e, 0xf4,
	0x40, 0xc9, 0x5b, 0xf8, 0xeb, 0x8e, 0x4b, 0xe5, 0x2b, 0x8c, 0x53, 0x3f, 0x36, 0x01, 0x5f, 0x46,
	0x4f, 0xb6, 0x83, 0x15, 0x8f, 0xe8, 0xe0, 0x25, 0xc6, 0x69, 0x96, 0x13, 0x3d, 0x21, 0x79, 0x07,
	0x1b, 0x14, 0x47, 0x51, 0x88, 0xb3, 0x49, 0xb6, 0xa5, 0x7f, 0xda, 0xf0, 0x54, 0xda, 0x27, 0x68,
	0x99, 0x9b, 0x52, 0x14, 0x32, 0x92, 0x0a, 0x13, 0x35, 0x91, 0x6a, 0xbb, 0xed, 0x6a, 0xca, 0x79,
	0xce, 0x28, 0xa5, 0xef, 0xc3, 0x56, 0x76, 0xeb, 0x0b, 0x05, 0xec, 0x3c, 0x36, 0x2d, 0xe9, 0xd9,
	0x12, 0x9f, 0xa1, 0x3d, 0xad, 0x20, 0xeb, 0xac, 0x99, 0x8c, 0x1f, 0x51, 0xe9, 0x2e, 0xb4, 0x2b,
	0xdd, 0x8a, 0xf7, 0xcf, 0xa4, 0x0c, 0xdb, 0x59, 0xe3, 0xbc, 0x63, 0x2a, 0xc9, 0x17, 0xe8, 0xcc,
	0x4a, 0x99, 0xa9, 0x54, 0x35, 0x95, 0xfe, 0x9d, 0xd6, 0x33, 0x59, 0xab, 0xf3, 0x63, 0x1e, 0x96,
	0xb4, 0x01, 0x8e, 0xbe, 0x61, 0x68, 0x27, 0xd2, 0x82, 0x7a, 0xc2, 0x29, 0x96, 0x7d, 0x5c, 0xd3,
	0x80, 0xb1, 0x70, 0x17, 0x9a, 0x01, 0x63, 0x7a, 0x19, 0x85, 0xf2, 0xe3, 0x28, 0x14, 0x7c, 0xec,
	0x63, 0xbd, 0x01, 0x17, 0x1a, 0x3e, 0x35, 0x28, 0x79, 0x0d, 0x6b, 0x3c, 0xcd, 0x88, 0x02, 0xd9,
	0x98, 0x6c, 0xdb, 0xdc, 0xe4, 0xa9, 0xe1, 0x7a, 0xc8, 0x32, 0xfa, 0x0e, 0xac, 0xf2, 0xd4, 0xc7,
	0x84, 0x96, 0xc9, 0xb6, 0xa5, 0xcb, 0x3c, 0x3d, 0x4a, 0x68, 0x41, 0x7d, 0x05, 0x44, 0x6b, 0x98,
	0xe2, 0x5a, 0x8f, 0xaf, 0x04, 0x8c, 0x4d, 0x90, 0x3f, 0x40, 0xd5, 0x0e, 0xc9, 0xf4, 0xa3, 0x31,
	0xd8, 0x2e, 0x3b, 0xf6, 0x99, 0x5d, 0xf6, 0x32, 0x3a, 0xe9, 0x41, 0x95, 0x9b, 0xa5, 0x70, 0xff,
	0x30, 0x89, 0xeb, 0xe5, 0xc4, 0x62, 0x65, 0xbc, 0x8c, 0xa5, 0xdf, 0x00, 0x15, 0xc5, 0xc8, 0xa2,
	0x04, 0x7d, 0x16, 0x5c, 0x23, 0x73, 0x6b, 0xf6, 0x0d, 0x18, 0xa3, 0x27, 0x1a, 0x24, 0x3b, 0xd0,
	0x94, 0xe1, 0x1d, 0xd2, 0x21, 0x43, 0x3a, 0x96, 0x5e, 0xb7, 0xd2, 0x73, 0x3c, 0x93, 0xde, 0x82,
	0xba, 0xba, 0x13, 0x18, 0x50, 0x3f, 0xa2, 0x2e, 0xb4, 0x9d, 0xee, 0x92, 0x57, 0xb3, 0xc0, 0x31,
	0x25, 0x67, 0xb0, 0x2a, 0xf0, 0x06, 0x05, 0x26, 0x21, 0xd2, 0x6c, 0xf8, 0x6e, 0xc3, 0x28, 0xfd,
	0xef, 0x99, 0x5f, 0x8c, 0x78, 0x52, 0x5e, 0xcc, 0x66, 0x91, 0x6b, 0xfd, 0x40, 0x3e, 0xc2, 0xe2,
	0xd8, 0xcc, 0xda, 0x05, 0xee, 0xa2, 0xd9, 0xef, 0x8d, 0x72, 0xa9, 0xd2, 0xda, 0x7a, 0x8d, 0xb8,
	0xf8, 0xe8, 0x84, 0xb0, 0x72, 0x68, 0x5c, 0x76, 0xa1, 0x30, 0xb5, 0x26, 0x5a, 0x87, 0xaa, 0x35,
	0x5e, 0xe6, 0xa0, 0xec, 0x8b, 0xec, 0x01, 0x18, 0x73, 0xd9, 0x4b, 0xe6, 0x8c, 0xde, 0xbf, 0xa7,
	0x3b, 0x9b, 0x7b, 0xd1, 0x33, 0x4e, 0xb4, 0x97, 0x1c, 0x41, 0xbd, 0x28, 0xbf, 0x07, 0x75, 0x8a,
	0xa3, 0xac, 0x8a, 0x63, 0xaa, 0xb4, 0xca, 0x55, 0xa6, 0xe4, 0x78, 0x35, 0x8a, 0x23, 0x73, 0x3a,
	0x78, 0x03, 0x2e, 0x17, 0xb7, 0x65, 0x6e, 0xfe, 0xee, 0x1f, 0xac, 0xe4, 0x09, 0xe7, 0xfa, 0xb9,
	0x97, 0xe7, 0xce, 0x2f, 0xc7, 0xb9, 0xae, 0x9a, 0xb7, 0x7f, 0xf7, 0x77, 0x00, 0x00, 0x00, 0xff,
	0xff, 0x59, 0x6b, 0x63, 0x1b, 0xa9, 0x06, 0x00, 0x00,
}
