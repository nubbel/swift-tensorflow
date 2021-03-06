// Code generated by protoc-gen-go.
// source: serving/tensorflow/core/framework/log_memory.proto
// DO NOT EDIT!

/*
Package tensorflow is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/core/framework/log_memory.proto

It has these top-level messages:
	MemoryLogStep
	MemoryLogTensorAllocation
	MemoryLogTensorDeallocation
	MemoryLogTensorOutput
	MemoryLogRawAllocation
	MemoryLogRawDeallocation
*/
package tensorflow

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
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

type MemoryLogStep struct {
	// Process-unique step id.
	StepId int64 `protobuf:"varint,1,opt,name=step_id,json=stepId" json:"step_id,omitempty"`
	// Handle describing the feeds and fetches of the step.
	Handle string `protobuf:"bytes,2,opt,name=handle" json:"handle,omitempty"`
}

func (m *MemoryLogStep) Reset()                    { *m = MemoryLogStep{} }
func (m *MemoryLogStep) String() string            { return proto.CompactTextString(m) }
func (*MemoryLogStep) ProtoMessage()               {}
func (*MemoryLogStep) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *MemoryLogStep) GetStepId() int64 {
	if m != nil {
		return m.StepId
	}
	return 0
}

func (m *MemoryLogStep) GetHandle() string {
	if m != nil {
		return m.Handle
	}
	return ""
}

type MemoryLogTensorAllocation struct {
	// Process-unique step id.
	StepId int64 `protobuf:"varint,1,opt,name=step_id,json=stepId" json:"step_id,omitempty"`
	// Name of the kernel making the allocation as set in GraphDef,
	// e.g., "affine2/weights/Assign".
	KernelName string `protobuf:"bytes,2,opt,name=kernel_name,json=kernelName" json:"kernel_name,omitempty"`
	// Allocated tensor details.
	Tensor *tensorflow4.TensorDescription `protobuf:"bytes,3,opt,name=tensor" json:"tensor,omitempty"`
}

func (m *MemoryLogTensorAllocation) Reset()                    { *m = MemoryLogTensorAllocation{} }
func (m *MemoryLogTensorAllocation) String() string            { return proto.CompactTextString(m) }
func (*MemoryLogTensorAllocation) ProtoMessage()               {}
func (*MemoryLogTensorAllocation) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *MemoryLogTensorAllocation) GetStepId() int64 {
	if m != nil {
		return m.StepId
	}
	return 0
}

func (m *MemoryLogTensorAllocation) GetKernelName() string {
	if m != nil {
		return m.KernelName
	}
	return ""
}

func (m *MemoryLogTensorAllocation) GetTensor() *tensorflow4.TensorDescription {
	if m != nil {
		return m.Tensor
	}
	return nil
}

type MemoryLogTensorDeallocation struct {
	// Id of the tensor buffer being deallocated, used to match to a
	// corresponding allocation.
	AllocationId int64 `protobuf:"varint,1,opt,name=allocation_id,json=allocationId" json:"allocation_id,omitempty"`
	// Name of the allocator used.
	AllocatorName string `protobuf:"bytes,2,opt,name=allocator_name,json=allocatorName" json:"allocator_name,omitempty"`
}

func (m *MemoryLogTensorDeallocation) Reset()                    { *m = MemoryLogTensorDeallocation{} }
func (m *MemoryLogTensorDeallocation) String() string            { return proto.CompactTextString(m) }
func (*MemoryLogTensorDeallocation) ProtoMessage()               {}
func (*MemoryLogTensorDeallocation) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *MemoryLogTensorDeallocation) GetAllocationId() int64 {
	if m != nil {
		return m.AllocationId
	}
	return 0
}

func (m *MemoryLogTensorDeallocation) GetAllocatorName() string {
	if m != nil {
		return m.AllocatorName
	}
	return ""
}

type MemoryLogTensorOutput struct {
	// Process-unique step id.
	StepId int64 `protobuf:"varint,1,opt,name=step_id,json=stepId" json:"step_id,omitempty"`
	// Name of the kernel producing an output as set in GraphDef, e.g.,
	// "affine2/weights/Assign".
	KernelName string `protobuf:"bytes,2,opt,name=kernel_name,json=kernelName" json:"kernel_name,omitempty"`
	// Index of the output being set.
	Index int32 `protobuf:"varint,3,opt,name=index" json:"index,omitempty"`
	// Output tensor details.
	Tensor *tensorflow4.TensorDescription `protobuf:"bytes,4,opt,name=tensor" json:"tensor,omitempty"`
}

func (m *MemoryLogTensorOutput) Reset()                    { *m = MemoryLogTensorOutput{} }
func (m *MemoryLogTensorOutput) String() string            { return proto.CompactTextString(m) }
func (*MemoryLogTensorOutput) ProtoMessage()               {}
func (*MemoryLogTensorOutput) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *MemoryLogTensorOutput) GetStepId() int64 {
	if m != nil {
		return m.StepId
	}
	return 0
}

func (m *MemoryLogTensorOutput) GetKernelName() string {
	if m != nil {
		return m.KernelName
	}
	return ""
}

func (m *MemoryLogTensorOutput) GetIndex() int32 {
	if m != nil {
		return m.Index
	}
	return 0
}

func (m *MemoryLogTensorOutput) GetTensor() *tensorflow4.TensorDescription {
	if m != nil {
		return m.Tensor
	}
	return nil
}

type MemoryLogRawAllocation struct {
	// Process-unique step id.
	StepId int64 `protobuf:"varint,1,opt,name=step_id,json=stepId" json:"step_id,omitempty"`
	// Name of the operation making the allocation.
	Operation string `protobuf:"bytes,2,opt,name=operation" json:"operation,omitempty"`
	// Number of bytes in the allocation.
	NumBytes int64 `protobuf:"varint,3,opt,name=num_bytes,json=numBytes" json:"num_bytes,omitempty"`
	// Address of the allocation.
	Ptr uint64 `protobuf:"varint,4,opt,name=ptr" json:"ptr,omitempty"`
	// Id of the tensor buffer being allocated, used to match to a
	// corresponding deallocation.
	AllocationId int64 `protobuf:"varint,5,opt,name=allocation_id,json=allocationId" json:"allocation_id,omitempty"`
	// Name of the allocator used.
	AllocatorName string `protobuf:"bytes,6,opt,name=allocator_name,json=allocatorName" json:"allocator_name,omitempty"`
}

func (m *MemoryLogRawAllocation) Reset()                    { *m = MemoryLogRawAllocation{} }
func (m *MemoryLogRawAllocation) String() string            { return proto.CompactTextString(m) }
func (*MemoryLogRawAllocation) ProtoMessage()               {}
func (*MemoryLogRawAllocation) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{4} }

func (m *MemoryLogRawAllocation) GetStepId() int64 {
	if m != nil {
		return m.StepId
	}
	return 0
}

func (m *MemoryLogRawAllocation) GetOperation() string {
	if m != nil {
		return m.Operation
	}
	return ""
}

func (m *MemoryLogRawAllocation) GetNumBytes() int64 {
	if m != nil {
		return m.NumBytes
	}
	return 0
}

func (m *MemoryLogRawAllocation) GetPtr() uint64 {
	if m != nil {
		return m.Ptr
	}
	return 0
}

func (m *MemoryLogRawAllocation) GetAllocationId() int64 {
	if m != nil {
		return m.AllocationId
	}
	return 0
}

func (m *MemoryLogRawAllocation) GetAllocatorName() string {
	if m != nil {
		return m.AllocatorName
	}
	return ""
}

type MemoryLogRawDeallocation struct {
	// Process-unique step id.
	StepId int64 `protobuf:"varint,1,opt,name=step_id,json=stepId" json:"step_id,omitempty"`
	// Name of the operation making the deallocation.
	Operation string `protobuf:"bytes,2,opt,name=operation" json:"operation,omitempty"`
	// Id of the tensor buffer being deallocated, used to match to a
	// corresponding allocation.
	AllocationId int64 `protobuf:"varint,3,opt,name=allocation_id,json=allocationId" json:"allocation_id,omitempty"`
	// Name of the allocator used.
	AllocatorName string `protobuf:"bytes,4,opt,name=allocator_name,json=allocatorName" json:"allocator_name,omitempty"`
	// True if the deallocation is queued and will be performed later,
	// e.g. for GPU lazy freeing of buffers.
	Deferred bool `protobuf:"varint,5,opt,name=deferred" json:"deferred,omitempty"`
}

func (m *MemoryLogRawDeallocation) Reset()                    { *m = MemoryLogRawDeallocation{} }
func (m *MemoryLogRawDeallocation) String() string            { return proto.CompactTextString(m) }
func (*MemoryLogRawDeallocation) ProtoMessage()               {}
func (*MemoryLogRawDeallocation) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{5} }

func (m *MemoryLogRawDeallocation) GetStepId() int64 {
	if m != nil {
		return m.StepId
	}
	return 0
}

func (m *MemoryLogRawDeallocation) GetOperation() string {
	if m != nil {
		return m.Operation
	}
	return ""
}

func (m *MemoryLogRawDeallocation) GetAllocationId() int64 {
	if m != nil {
		return m.AllocationId
	}
	return 0
}

func (m *MemoryLogRawDeallocation) GetAllocatorName() string {
	if m != nil {
		return m.AllocatorName
	}
	return ""
}

func (m *MemoryLogRawDeallocation) GetDeferred() bool {
	if m != nil {
		return m.Deferred
	}
	return false
}

func init() {
	proto.RegisterType((*MemoryLogStep)(nil), "tensorflow.MemoryLogStep")
	proto.RegisterType((*MemoryLogTensorAllocation)(nil), "tensorflow.MemoryLogTensorAllocation")
	proto.RegisterType((*MemoryLogTensorDeallocation)(nil), "tensorflow.MemoryLogTensorDeallocation")
	proto.RegisterType((*MemoryLogTensorOutput)(nil), "tensorflow.MemoryLogTensorOutput")
	proto.RegisterType((*MemoryLogRawAllocation)(nil), "tensorflow.MemoryLogRawAllocation")
	proto.RegisterType((*MemoryLogRawDeallocation)(nil), "tensorflow.MemoryLogRawDeallocation")
}

func init() { proto.RegisterFile("serving/tensorflow/core/framework/log_memory.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 424 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x93, 0xcf, 0x8e, 0xd3, 0x30,
	0x10, 0xc6, 0x65, 0xd2, 0x86, 0x76, 0x96, 0x02, 0xb2, 0x60, 0x09, 0xbb, 0x20, 0xaa, 0x20, 0xa4,
	0x9e, 0x1a, 0x54, 0xc4, 0x1d, 0xaa, 0xbd, 0xac, 0x54, 0xa0, 0x32, 0xdc, 0xa3, 0xb4, 0x99, 0x86,
	0xa8, 0x89, 0x1d, 0x39, 0x0e, 0xa5, 0xef, 0xc0, 0x33, 0xf0, 0x1e, 0xbc, 0x02, 0x4f, 0xc4, 0x11,
	0x25, 0x0e, 0x71, 0xe8, 0x1f, 0xa9, 0xb0, 0xb7, 0x7c, 0x93, 0xf1, 0xcc, 0xef, 0x9b, 0xd1, 0xc0,
	0x24, 0x47, 0xf9, 0x25, 0xe6, 0x91, 0xa7, 0x90, 0xe7, 0x42, 0xae, 0x12, 0xb1, 0xf1, 0x96, 0x42,
	0xa2, 0xb7, 0x92, 0x41, 0x8a, 0x1b, 0x21, 0xd7, 0x5e, 0x22, 0x22, 0x3f, 0xc5, 0x54, 0xc8, 0xed,
	0x38, 0x93, 0x42, 0x09, 0x0a, 0x26, 0xf7, 0x62, 0x72, 0xfc, 0x9d, 0xfe, 0xe3, 0x87, 0x98, 0x2f,
	0x65, 0x9c, 0xa9, 0x58, 0x70, 0xfd, 0xde, 0x7d, 0x03, 0x83, 0x77, 0x55, 0xbd, 0x99, 0x88, 0x3e,
	0x2a, 0xcc, 0xe8, 0x23, 0xb8, 0x9d, 0x2b, 0xcc, 0xfc, 0x38, 0x74, 0xc8, 0x90, 0x8c, 0x2c, 0x66,
	0x97, 0xf2, 0x3a, 0xa4, 0xe7, 0x60, 0x7f, 0x0e, 0x78, 0x98, 0xa0, 0x73, 0x6b, 0x48, 0x46, 0x7d,
	0x56, 0x2b, 0xf7, 0x1b, 0x81, 0xc7, 0x4d, 0x89, 0x4f, 0x55, 0x9f, 0xb7, 0x49, 0x22, 0x96, 0x41,
	0xd9, 0xe5, 0x78, 0xb9, 0x67, 0x70, 0xb6, 0x46, 0xc9, 0x31, 0xf1, 0x79, 0x90, 0xfe, 0xa9, 0x09,
	0x3a, 0xf4, 0x3e, 0x48, 0x91, 0xbe, 0x06, 0x5b, 0x53, 0x3b, 0xd6, 0x90, 0x8c, 0xce, 0x26, 0x4f,
	0xc7, 0xc6, 0xde, 0x58, 0xf7, 0xb9, 0x32, 0x76, 0x58, 0x9d, 0xec, 0xc6, 0x70, 0xb9, 0x43, 0x73,
	0x85, 0x81, 0xe1, 0x79, 0x0e, 0x03, 0xa3, 0x0c, 0xd5, 0x1d, 0x13, 0xbc, 0x0e, 0xe9, 0x0b, 0xb8,
	0x5b, 0x6b, 0x21, 0xdb, 0x78, 0x83, 0x26, 0x5a, 0x12, 0xba, 0xdf, 0x09, 0x3c, 0xdc, 0xe9, 0xf5,
	0xa1, 0x50, 0x59, 0xa1, 0x6e, 0xe0, 0xfa, 0x01, 0x74, 0x63, 0x1e, 0xe2, 0xd7, 0xca, 0x74, 0x97,
	0x69, 0xd1, 0x9a, 0x45, 0xe7, 0x5f, 0x66, 0xf1, 0x93, 0xc0, 0x79, 0x03, 0xc8, 0x82, 0xcd, 0x29,
	0x7b, 0x79, 0x02, 0x7d, 0x91, 0xa1, 0xac, 0xb2, 0x6a, 0x3e, 0x13, 0xa0, 0x97, 0xd0, 0xe7, 0x45,
	0xea, 0x2f, 0xb6, 0x0a, 0xf3, 0x0a, 0xd1, 0x62, 0x3d, 0x5e, 0xa4, 0xd3, 0x52, 0xd3, 0xfb, 0x60,
	0x65, 0x4a, 0x23, 0x76, 0x58, 0xf9, 0xb9, 0x3f, 0xed, 0xee, 0x49, 0xd3, 0xb6, 0x0f, 0x4d, 0xfb,
	0x07, 0x01, 0xa7, 0x6d, 0xe6, 0xaf, 0xb5, 0xfe, 0xa7, 0x9d, 0x3d, 0x3e, 0xeb, 0x24, 0xbe, 0xce,
	0x01, 0x3e, 0x7a, 0x01, 0xbd, 0x10, 0x57, 0x28, 0x25, 0x6a, 0x9b, 0x3d, 0xd6, 0xe8, 0xe9, 0x4b,
	0x70, 0x84, 0x8c, 0xda, 0x4b, 0x6b, 0x4e, 0x73, 0x7a, 0x6f, 0x26, 0x22, 0xed, 0x6b, 0x5e, 0x5e,
	0x64, 0x3e, 0x27, 0xbf, 0x08, 0x59, 0xd8, 0xd5, 0x79, 0xbe, 0xfa, 0x1d, 0x00, 0x00, 0xff, 0xff,
	0x97, 0xf6, 0xf0, 0x01, 0x14, 0x04, 0x00, 0x00,
}
