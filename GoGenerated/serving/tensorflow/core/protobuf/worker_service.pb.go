// Code generated by protoc-gen-go.
// source: serving/tensorflow/core/protobuf/worker_service.proto
// DO NOT EDIT!

/*
Package tensorflow_grpc is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/core/protobuf/worker_service.proto

It has these top-level messages:
*/
package tensorflow_grpc

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tensorflow21 "tensorflow/core/protobuf"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for WorkerService service

type WorkerServiceClient interface {
	// See worker.proto for details.
	GetStatus(ctx context.Context, in *tensorflow21.GetStatusRequest, opts ...grpc.CallOption) (*tensorflow21.GetStatusResponse, error)
	// See worker.proto for details.
	CreateWorkerSession(ctx context.Context, in *tensorflow21.CreateWorkerSessionRequest, opts ...grpc.CallOption) (*tensorflow21.CreateWorkerSessionResponse, error)
	// See worker.proto for details.
	RegisterGraph(ctx context.Context, in *tensorflow21.RegisterGraphRequest, opts ...grpc.CallOption) (*tensorflow21.RegisterGraphResponse, error)
	// See worker.proto for details.
	DeregisterGraph(ctx context.Context, in *tensorflow21.DeregisterGraphRequest, opts ...grpc.CallOption) (*tensorflow21.DeregisterGraphResponse, error)
	// See worker.proto for details.
	RunGraph(ctx context.Context, in *tensorflow21.RunGraphRequest, opts ...grpc.CallOption) (*tensorflow21.RunGraphResponse, error)
	// See worker.proto for details.
	CleanupGraph(ctx context.Context, in *tensorflow21.CleanupGraphRequest, opts ...grpc.CallOption) (*tensorflow21.CleanupGraphResponse, error)
	// See worker.proto for details.
	CleanupAll(ctx context.Context, in *tensorflow21.CleanupAllRequest, opts ...grpc.CallOption) (*tensorflow21.CleanupAllResponse, error)
	// See worker.proto for details.
	RecvTensor(ctx context.Context, in *tensorflow21.RecvTensorRequest, opts ...grpc.CallOption) (*tensorflow21.RecvTensorResponse, error)
	// See worker.proto for details.
	Logging(ctx context.Context, in *tensorflow21.LoggingRequest, opts ...grpc.CallOption) (*tensorflow21.LoggingResponse, error)
	// See worker.proto for details.
	Tracing(ctx context.Context, in *tensorflow21.TracingRequest, opts ...grpc.CallOption) (*tensorflow21.TracingResponse, error)
}

type workerServiceClient struct {
	cc *grpc.ClientConn
}

func NewWorkerServiceClient(cc *grpc.ClientConn) WorkerServiceClient {
	return &workerServiceClient{cc}
}

func (c *workerServiceClient) GetStatus(ctx context.Context, in *tensorflow21.GetStatusRequest, opts ...grpc.CallOption) (*tensorflow21.GetStatusResponse, error) {
	out := new(tensorflow21.GetStatusResponse)
	err := grpc.Invoke(ctx, "/tensorflow.grpc.WorkerService/GetStatus", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerServiceClient) CreateWorkerSession(ctx context.Context, in *tensorflow21.CreateWorkerSessionRequest, opts ...grpc.CallOption) (*tensorflow21.CreateWorkerSessionResponse, error) {
	out := new(tensorflow21.CreateWorkerSessionResponse)
	err := grpc.Invoke(ctx, "/tensorflow.grpc.WorkerService/CreateWorkerSession", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerServiceClient) RegisterGraph(ctx context.Context, in *tensorflow21.RegisterGraphRequest, opts ...grpc.CallOption) (*tensorflow21.RegisterGraphResponse, error) {
	out := new(tensorflow21.RegisterGraphResponse)
	err := grpc.Invoke(ctx, "/tensorflow.grpc.WorkerService/RegisterGraph", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerServiceClient) DeregisterGraph(ctx context.Context, in *tensorflow21.DeregisterGraphRequest, opts ...grpc.CallOption) (*tensorflow21.DeregisterGraphResponse, error) {
	out := new(tensorflow21.DeregisterGraphResponse)
	err := grpc.Invoke(ctx, "/tensorflow.grpc.WorkerService/DeregisterGraph", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerServiceClient) RunGraph(ctx context.Context, in *tensorflow21.RunGraphRequest, opts ...grpc.CallOption) (*tensorflow21.RunGraphResponse, error) {
	out := new(tensorflow21.RunGraphResponse)
	err := grpc.Invoke(ctx, "/tensorflow.grpc.WorkerService/RunGraph", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerServiceClient) CleanupGraph(ctx context.Context, in *tensorflow21.CleanupGraphRequest, opts ...grpc.CallOption) (*tensorflow21.CleanupGraphResponse, error) {
	out := new(tensorflow21.CleanupGraphResponse)
	err := grpc.Invoke(ctx, "/tensorflow.grpc.WorkerService/CleanupGraph", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerServiceClient) CleanupAll(ctx context.Context, in *tensorflow21.CleanupAllRequest, opts ...grpc.CallOption) (*tensorflow21.CleanupAllResponse, error) {
	out := new(tensorflow21.CleanupAllResponse)
	err := grpc.Invoke(ctx, "/tensorflow.grpc.WorkerService/CleanupAll", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerServiceClient) RecvTensor(ctx context.Context, in *tensorflow21.RecvTensorRequest, opts ...grpc.CallOption) (*tensorflow21.RecvTensorResponse, error) {
	out := new(tensorflow21.RecvTensorResponse)
	err := grpc.Invoke(ctx, "/tensorflow.grpc.WorkerService/RecvTensor", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerServiceClient) Logging(ctx context.Context, in *tensorflow21.LoggingRequest, opts ...grpc.CallOption) (*tensorflow21.LoggingResponse, error) {
	out := new(tensorflow21.LoggingResponse)
	err := grpc.Invoke(ctx, "/tensorflow.grpc.WorkerService/Logging", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerServiceClient) Tracing(ctx context.Context, in *tensorflow21.TracingRequest, opts ...grpc.CallOption) (*tensorflow21.TracingResponse, error) {
	out := new(tensorflow21.TracingResponse)
	err := grpc.Invoke(ctx, "/tensorflow.grpc.WorkerService/Tracing", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for WorkerService service

type WorkerServiceServer interface {
	// See worker.proto for details.
	GetStatus(context.Context, *tensorflow21.GetStatusRequest) (*tensorflow21.GetStatusResponse, error)
	// See worker.proto for details.
	CreateWorkerSession(context.Context, *tensorflow21.CreateWorkerSessionRequest) (*tensorflow21.CreateWorkerSessionResponse, error)
	// See worker.proto for details.
	RegisterGraph(context.Context, *tensorflow21.RegisterGraphRequest) (*tensorflow21.RegisterGraphResponse, error)
	// See worker.proto for details.
	DeregisterGraph(context.Context, *tensorflow21.DeregisterGraphRequest) (*tensorflow21.DeregisterGraphResponse, error)
	// See worker.proto for details.
	RunGraph(context.Context, *tensorflow21.RunGraphRequest) (*tensorflow21.RunGraphResponse, error)
	// See worker.proto for details.
	CleanupGraph(context.Context, *tensorflow21.CleanupGraphRequest) (*tensorflow21.CleanupGraphResponse, error)
	// See worker.proto for details.
	CleanupAll(context.Context, *tensorflow21.CleanupAllRequest) (*tensorflow21.CleanupAllResponse, error)
	// See worker.proto for details.
	RecvTensor(context.Context, *tensorflow21.RecvTensorRequest) (*tensorflow21.RecvTensorResponse, error)
	// See worker.proto for details.
	Logging(context.Context, *tensorflow21.LoggingRequest) (*tensorflow21.LoggingResponse, error)
	// See worker.proto for details.
	Tracing(context.Context, *tensorflow21.TracingRequest) (*tensorflow21.TracingResponse, error)
}

func RegisterWorkerServiceServer(s *grpc.Server, srv WorkerServiceServer) {
	s.RegisterService(&_WorkerService_serviceDesc, srv)
}

func _WorkerService_GetStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(tensorflow21.GetStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerServiceServer).GetStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tensorflow.grpc.WorkerService/GetStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerServiceServer).GetStatus(ctx, req.(*tensorflow21.GetStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerService_CreateWorkerSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(tensorflow21.CreateWorkerSessionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerServiceServer).CreateWorkerSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tensorflow.grpc.WorkerService/CreateWorkerSession",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerServiceServer).CreateWorkerSession(ctx, req.(*tensorflow21.CreateWorkerSessionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerService_RegisterGraph_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(tensorflow21.RegisterGraphRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerServiceServer).RegisterGraph(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tensorflow.grpc.WorkerService/RegisterGraph",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerServiceServer).RegisterGraph(ctx, req.(*tensorflow21.RegisterGraphRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerService_DeregisterGraph_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(tensorflow21.DeregisterGraphRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerServiceServer).DeregisterGraph(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tensorflow.grpc.WorkerService/DeregisterGraph",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerServiceServer).DeregisterGraph(ctx, req.(*tensorflow21.DeregisterGraphRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerService_RunGraph_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(tensorflow21.RunGraphRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerServiceServer).RunGraph(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tensorflow.grpc.WorkerService/RunGraph",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerServiceServer).RunGraph(ctx, req.(*tensorflow21.RunGraphRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerService_CleanupGraph_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(tensorflow21.CleanupGraphRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerServiceServer).CleanupGraph(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tensorflow.grpc.WorkerService/CleanupGraph",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerServiceServer).CleanupGraph(ctx, req.(*tensorflow21.CleanupGraphRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerService_CleanupAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(tensorflow21.CleanupAllRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerServiceServer).CleanupAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tensorflow.grpc.WorkerService/CleanupAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerServiceServer).CleanupAll(ctx, req.(*tensorflow21.CleanupAllRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerService_RecvTensor_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(tensorflow21.RecvTensorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerServiceServer).RecvTensor(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tensorflow.grpc.WorkerService/RecvTensor",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerServiceServer).RecvTensor(ctx, req.(*tensorflow21.RecvTensorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerService_Logging_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(tensorflow21.LoggingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerServiceServer).Logging(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tensorflow.grpc.WorkerService/Logging",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerServiceServer).Logging(ctx, req.(*tensorflow21.LoggingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerService_Tracing_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(tensorflow21.TracingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerServiceServer).Tracing(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tensorflow.grpc.WorkerService/Tracing",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerServiceServer).Tracing(ctx, req.(*tensorflow21.TracingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _WorkerService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "tensorflow.grpc.WorkerService",
	HandlerType: (*WorkerServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetStatus",
			Handler:    _WorkerService_GetStatus_Handler,
		},
		{
			MethodName: "CreateWorkerSession",
			Handler:    _WorkerService_CreateWorkerSession_Handler,
		},
		{
			MethodName: "RegisterGraph",
			Handler:    _WorkerService_RegisterGraph_Handler,
		},
		{
			MethodName: "DeregisterGraph",
			Handler:    _WorkerService_DeregisterGraph_Handler,
		},
		{
			MethodName: "RunGraph",
			Handler:    _WorkerService_RunGraph_Handler,
		},
		{
			MethodName: "CleanupGraph",
			Handler:    _WorkerService_CleanupGraph_Handler,
		},
		{
			MethodName: "CleanupAll",
			Handler:    _WorkerService_CleanupAll_Handler,
		},
		{
			MethodName: "RecvTensor",
			Handler:    _WorkerService_RecvTensor_Handler,
		},
		{
			MethodName: "Logging",
			Handler:    _WorkerService_Logging_Handler,
		},
		{
			MethodName: "Tracing",
			Handler:    _WorkerService_Tracing_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "serving/tensorflow/core/protobuf/worker_service.proto",
}

func init() {
	proto.RegisterFile("serving/tensorflow/core/protobuf/worker_service.proto", fileDescriptor0)
}

var fileDescriptor0 = []byte{
	// 357 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x93, 0xd1, 0x4e, 0xc2, 0x30,
	0x14, 0x86, 0xf5, 0x06, 0xf4, 0x44, 0x42, 0x52, 0xee, 0x06, 0x28, 0x62, 0xd4, 0x3b, 0x96, 0x48,
	0x7c, 0x00, 0x86, 0x06, 0x13, 0x35, 0xc1, 0x41, 0x62, 0xe2, 0x8d, 0x19, 0xf3, 0x50, 0x17, 0x67,
	0x3b, 0xdb, 0x0e, 0x9e, 0xcb, 0x37, 0x34, 0x6e, 0x2d, 0x74, 0x3a, 0xe0, 0xf6, 0xff, 0xbf, 0xff,
	0x5b, 0xb3, 0xe4, 0xc0, 0xb5, 0x44, 0xb1, 0x88, 0x18, 0x75, 0x15, 0x32, 0xc9, 0xc5, 0x3c, 0xe6,
	0x4b, 0x37, 0xe4, 0x02, 0xdd, 0x44, 0x70, 0xc5, 0x67, 0xe9, 0xdc, 0x5d, 0x72, 0xf1, 0x81, 0xe2,
	0x35, 0xe3, 0x42, 0xec, 0x65, 0x39, 0xa9, 0xaf, 0xf1, 0x1e, 0x15, 0x49, 0xe8, 0x9c, 0xef, 0xd8,
	0xe7, 0xbb, 0xab, 0xef, 0x0a, 0xd4, 0x9e, 0xb3, 0x60, 0x92, 0xfb, 0xc8, 0x1d, 0x1c, 0x8e, 0x50,
	0x4d, 0x54, 0xa0, 0x52, 0x49, 0x5a, 0x3d, 0xcb, 0xbb, 0x8a, 0x7d, 0xfc, 0x4a, 0x51, 0x2a, 0xa7,
	0xbd, 0xa1, 0x95, 0x09, 0x67, 0x12, 0xc9, 0x1c, 0x1a, 0x43, 0x81, 0x81, 0x42, 0xf3, 0x01, 0x29,
	0x23, 0xce, 0xc8, 0x85, 0xbd, 0x2a, 0x01, 0x8c, 0xfd, 0x72, 0x27, 0xa7, 0xbf, 0x33, 0x85, 0x9a,
	0x8f, 0x34, 0x92, 0x0a, 0xc5, 0x48, 0x04, 0xc9, 0x3b, 0xe9, 0xd8, 0xcb, 0x42, 0x65, 0xdc, 0xa7,
	0x5b, 0x08, 0x6d, 0x7d, 0x81, 0xfa, 0x0d, 0x8a, 0x82, 0xb7, 0x6b, 0xaf, 0xfe, 0x94, 0xc6, 0x7c,
	0xb6, 0x95, 0xd1, 0xee, 0x5b, 0x38, 0xf0, 0x53, 0x96, 0x4b, 0x9b, 0x85, 0xa7, 0xe8, 0xd4, 0xd8,
	0x5a, 0xe5, 0xa5, 0xd6, 0x3c, 0xc1, 0xd1, 0x30, 0xc6, 0x80, 0xa5, 0x49, 0xae, 0x3a, 0x29, 0xfc,
	0x31, 0xab, 0x31, 0xba, 0xce, 0x66, 0x40, 0x2b, 0xef, 0x01, 0x74, 0x3e, 0x88, 0x63, 0xd2, 0x2e,
	0xe1, 0x07, 0x71, 0x6c, 0x74, 0xc7, 0x9b, 0x6a, 0x2d, 0x7b, 0x04, 0xf0, 0x31, 0x5c, 0x4c, 0x33,
	0xa8, 0x28, 0x5b, 0xe7, 0xa5, 0x32, 0xbb, 0xce, 0x65, 0xdd, 0x3d, 0xe2, 0x41, 0xf5, 0x81, 0x53,
	0x1a, 0x31, 0x4a, 0x1c, 0x1b, 0xd6, 0xa1, 0x11, 0x35, 0x4b, 0x3b, 0xfd, 0x24, 0x0f, 0xaa, 0x53,
	0x11, 0x84, 0xff, 0x1c, 0x3a, 0x2c, 0x75, 0xac, 0xba, 0xdc, 0xe1, 0xf5, 0xc1, 0xe1, 0x82, 0xda,
	0xc4, 0x5b, 0x24, 0x95, 0x48, 0x99, 0x8a, 0x3e, 0xd1, 0x6b, 0x14, 0xce, 0x69, 0xfc, 0x7b, 0x65,
	0x72, 0xbc, 0x3f, 0xab, 0x64, 0xf7, 0xd6, 0xff, 0x09, 0x00, 0x00, 0xff, 0xff, 0x1f, 0x63, 0x8d,
	0x91, 0xe0, 0x03, 0x00, 0x00,
}
