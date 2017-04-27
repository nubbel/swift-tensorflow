package org.tensorflow.distruntime;

import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.4.0-SNAPSHOT)",
    comments = "Source: tensorflow/core/protobuf/worker_service.proto")
public final class WorkerServiceGrpc {

  private WorkerServiceGrpc() {}

  public static final String SERVICE_NAME = "tensorflow.grpc.WorkerService";

  // Static method descriptors that strictly reflect the proto.
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.GetStatusRequest,
      org.tensorflow.distruntime.GetStatusResponse> METHOD_GET_STATUS =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.GetStatusRequest, org.tensorflow.distruntime.GetStatusResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.WorkerService", "GetStatus"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.GetStatusRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.GetStatusResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.CreateWorkerSessionRequest,
      org.tensorflow.distruntime.CreateWorkerSessionResponse> METHOD_CREATE_WORKER_SESSION =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.CreateWorkerSessionRequest, org.tensorflow.distruntime.CreateWorkerSessionResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.WorkerService", "CreateWorkerSession"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.CreateWorkerSessionRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.CreateWorkerSessionResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.RegisterGraphRequest,
      org.tensorflow.distruntime.RegisterGraphResponse> METHOD_REGISTER_GRAPH =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.RegisterGraphRequest, org.tensorflow.distruntime.RegisterGraphResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.WorkerService", "RegisterGraph"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.RegisterGraphRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.RegisterGraphResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeregisterGraphRequest,
      org.tensorflow.distruntime.DeregisterGraphResponse> METHOD_DEREGISTER_GRAPH =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.DeregisterGraphRequest, org.tensorflow.distruntime.DeregisterGraphResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.WorkerService", "DeregisterGraph"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.DeregisterGraphRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.DeregisterGraphResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.RunGraphRequest,
      org.tensorflow.distruntime.RunGraphResponse> METHOD_RUN_GRAPH =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.RunGraphRequest, org.tensorflow.distruntime.RunGraphResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.WorkerService", "RunGraph"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.RunGraphRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.RunGraphResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupGraphRequest,
      org.tensorflow.distruntime.CleanupGraphResponse> METHOD_CLEANUP_GRAPH =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.CleanupGraphRequest, org.tensorflow.distruntime.CleanupGraphResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.WorkerService", "CleanupGraph"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.CleanupGraphRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.CleanupGraphResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupAllRequest,
      org.tensorflow.distruntime.CleanupAllResponse> METHOD_CLEANUP_ALL =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.CleanupAllRequest, org.tensorflow.distruntime.CleanupAllResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.WorkerService", "CleanupAll"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.CleanupAllRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.CleanupAllResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.RecvTensorRequest,
      org.tensorflow.distruntime.RecvTensorResponse> METHOD_RECV_TENSOR =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.RecvTensorRequest, org.tensorflow.distruntime.RecvTensorResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.WorkerService", "RecvTensor"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.RecvTensorRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.RecvTensorResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.LoggingRequest,
      org.tensorflow.distruntime.LoggingResponse> METHOD_LOGGING =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.LoggingRequest, org.tensorflow.distruntime.LoggingResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.WorkerService", "Logging"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.LoggingRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.LoggingResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.TracingRequest,
      org.tensorflow.distruntime.TracingResponse> METHOD_TRACING =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.TracingRequest, org.tensorflow.distruntime.TracingResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.WorkerService", "Tracing"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.TracingRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.TracingResponse.getDefaultInstance()))
          .build();

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static WorkerServiceStub newStub(io.grpc.Channel channel) {
    return new WorkerServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static WorkerServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new WorkerServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary and streaming output calls on the service
   */
  public static WorkerServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new WorkerServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class WorkerServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void getStatus(org.tensorflow.distruntime.GetStatusRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.GetStatusResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_GET_STATUS, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void createWorkerSession(org.tensorflow.distruntime.CreateWorkerSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CreateWorkerSessionResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_CREATE_WORKER_SESSION, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void registerGraph(org.tensorflow.distruntime.RegisterGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RegisterGraphResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_REGISTER_GRAPH, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void deregisterGraph(org.tensorflow.distruntime.DeregisterGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.DeregisterGraphResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_DEREGISTER_GRAPH, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void runGraph(org.tensorflow.distruntime.RunGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RunGraphResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_RUN_GRAPH, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void cleanupGraph(org.tensorflow.distruntime.CleanupGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupGraphResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_CLEANUP_GRAPH, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void cleanupAll(org.tensorflow.distruntime.CleanupAllRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupAllResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_CLEANUP_ALL, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void recvTensor(org.tensorflow.distruntime.RecvTensorRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RecvTensorResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_RECV_TENSOR, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void logging(org.tensorflow.distruntime.LoggingRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.LoggingResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_LOGGING, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void tracing(org.tensorflow.distruntime.TracingRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.TracingResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_TRACING, responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            METHOD_GET_STATUS,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.GetStatusRequest,
                org.tensorflow.distruntime.GetStatusResponse>(
                  this, METHODID_GET_STATUS)))
          .addMethod(
            METHOD_CREATE_WORKER_SESSION,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.CreateWorkerSessionRequest,
                org.tensorflow.distruntime.CreateWorkerSessionResponse>(
                  this, METHODID_CREATE_WORKER_SESSION)))
          .addMethod(
            METHOD_REGISTER_GRAPH,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.RegisterGraphRequest,
                org.tensorflow.distruntime.RegisterGraphResponse>(
                  this, METHODID_REGISTER_GRAPH)))
          .addMethod(
            METHOD_DEREGISTER_GRAPH,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.DeregisterGraphRequest,
                org.tensorflow.distruntime.DeregisterGraphResponse>(
                  this, METHODID_DEREGISTER_GRAPH)))
          .addMethod(
            METHOD_RUN_GRAPH,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.RunGraphRequest,
                org.tensorflow.distruntime.RunGraphResponse>(
                  this, METHODID_RUN_GRAPH)))
          .addMethod(
            METHOD_CLEANUP_GRAPH,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.CleanupGraphRequest,
                org.tensorflow.distruntime.CleanupGraphResponse>(
                  this, METHODID_CLEANUP_GRAPH)))
          .addMethod(
            METHOD_CLEANUP_ALL,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.CleanupAllRequest,
                org.tensorflow.distruntime.CleanupAllResponse>(
                  this, METHODID_CLEANUP_ALL)))
          .addMethod(
            METHOD_RECV_TENSOR,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.RecvTensorRequest,
                org.tensorflow.distruntime.RecvTensorResponse>(
                  this, METHODID_RECV_TENSOR)))
          .addMethod(
            METHOD_LOGGING,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.LoggingRequest,
                org.tensorflow.distruntime.LoggingResponse>(
                  this, METHODID_LOGGING)))
          .addMethod(
            METHOD_TRACING,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.TracingRequest,
                org.tensorflow.distruntime.TracingResponse>(
                  this, METHODID_TRACING)))
          .build();
    }
  }

  /**
   */
  public static final class WorkerServiceStub extends io.grpc.stub.AbstractStub<WorkerServiceStub> {
    private WorkerServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private WorkerServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WorkerServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new WorkerServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void getStatus(org.tensorflow.distruntime.GetStatusRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.GetStatusResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_GET_STATUS, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void createWorkerSession(org.tensorflow.distruntime.CreateWorkerSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CreateWorkerSessionResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_CREATE_WORKER_SESSION, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void registerGraph(org.tensorflow.distruntime.RegisterGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RegisterGraphResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_REGISTER_GRAPH, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void deregisterGraph(org.tensorflow.distruntime.DeregisterGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.DeregisterGraphResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_DEREGISTER_GRAPH, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void runGraph(org.tensorflow.distruntime.RunGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RunGraphResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_RUN_GRAPH, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void cleanupGraph(org.tensorflow.distruntime.CleanupGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupGraphResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_CLEANUP_GRAPH, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void cleanupAll(org.tensorflow.distruntime.CleanupAllRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupAllResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_CLEANUP_ALL, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void recvTensor(org.tensorflow.distruntime.RecvTensorRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RecvTensorResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_RECV_TENSOR, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void logging(org.tensorflow.distruntime.LoggingRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.LoggingResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_LOGGING, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void tracing(org.tensorflow.distruntime.TracingRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.TracingResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_TRACING, getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class WorkerServiceBlockingStub extends io.grpc.stub.AbstractStub<WorkerServiceBlockingStub> {
    private WorkerServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private WorkerServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WorkerServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new WorkerServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.GetStatusResponse getStatus(org.tensorflow.distruntime.GetStatusRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_GET_STATUS, getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.CreateWorkerSessionResponse createWorkerSession(org.tensorflow.distruntime.CreateWorkerSessionRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_CREATE_WORKER_SESSION, getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.RegisterGraphResponse registerGraph(org.tensorflow.distruntime.RegisterGraphRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_REGISTER_GRAPH, getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.DeregisterGraphResponse deregisterGraph(org.tensorflow.distruntime.DeregisterGraphRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_DEREGISTER_GRAPH, getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.RunGraphResponse runGraph(org.tensorflow.distruntime.RunGraphRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_RUN_GRAPH, getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.CleanupGraphResponse cleanupGraph(org.tensorflow.distruntime.CleanupGraphRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_CLEANUP_GRAPH, getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.CleanupAllResponse cleanupAll(org.tensorflow.distruntime.CleanupAllRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_CLEANUP_ALL, getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.RecvTensorResponse recvTensor(org.tensorflow.distruntime.RecvTensorRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_RECV_TENSOR, getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.LoggingResponse logging(org.tensorflow.distruntime.LoggingRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_LOGGING, getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.TracingResponse tracing(org.tensorflow.distruntime.TracingRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_TRACING, getCallOptions(), request);
    }
  }

  /**
   */
  public static final class WorkerServiceFutureStub extends io.grpc.stub.AbstractStub<WorkerServiceFutureStub> {
    private WorkerServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private WorkerServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WorkerServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new WorkerServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.GetStatusResponse> getStatus(
        org.tensorflow.distruntime.GetStatusRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_GET_STATUS, getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.CreateWorkerSessionResponse> createWorkerSession(
        org.tensorflow.distruntime.CreateWorkerSessionRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_CREATE_WORKER_SESSION, getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.RegisterGraphResponse> registerGraph(
        org.tensorflow.distruntime.RegisterGraphRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_REGISTER_GRAPH, getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.DeregisterGraphResponse> deregisterGraph(
        org.tensorflow.distruntime.DeregisterGraphRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_DEREGISTER_GRAPH, getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.RunGraphResponse> runGraph(
        org.tensorflow.distruntime.RunGraphRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_RUN_GRAPH, getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.CleanupGraphResponse> cleanupGraph(
        org.tensorflow.distruntime.CleanupGraphRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_CLEANUP_GRAPH, getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.CleanupAllResponse> cleanupAll(
        org.tensorflow.distruntime.CleanupAllRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_CLEANUP_ALL, getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.RecvTensorResponse> recvTensor(
        org.tensorflow.distruntime.RecvTensorRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_RECV_TENSOR, getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.LoggingResponse> logging(
        org.tensorflow.distruntime.LoggingRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_LOGGING, getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.TracingResponse> tracing(
        org.tensorflow.distruntime.TracingRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_TRACING, getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_STATUS = 0;
  private static final int METHODID_CREATE_WORKER_SESSION = 1;
  private static final int METHODID_REGISTER_GRAPH = 2;
  private static final int METHODID_DEREGISTER_GRAPH = 3;
  private static final int METHODID_RUN_GRAPH = 4;
  private static final int METHODID_CLEANUP_GRAPH = 5;
  private static final int METHODID_CLEANUP_ALL = 6;
  private static final int METHODID_RECV_TENSOR = 7;
  private static final int METHODID_LOGGING = 8;
  private static final int METHODID_TRACING = 9;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final WorkerServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(WorkerServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_STATUS:
          serviceImpl.getStatus((org.tensorflow.distruntime.GetStatusRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.GetStatusResponse>) responseObserver);
          break;
        case METHODID_CREATE_WORKER_SESSION:
          serviceImpl.createWorkerSession((org.tensorflow.distruntime.CreateWorkerSessionRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CreateWorkerSessionResponse>) responseObserver);
          break;
        case METHODID_REGISTER_GRAPH:
          serviceImpl.registerGraph((org.tensorflow.distruntime.RegisterGraphRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RegisterGraphResponse>) responseObserver);
          break;
        case METHODID_DEREGISTER_GRAPH:
          serviceImpl.deregisterGraph((org.tensorflow.distruntime.DeregisterGraphRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.DeregisterGraphResponse>) responseObserver);
          break;
        case METHODID_RUN_GRAPH:
          serviceImpl.runGraph((org.tensorflow.distruntime.RunGraphRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RunGraphResponse>) responseObserver);
          break;
        case METHODID_CLEANUP_GRAPH:
          serviceImpl.cleanupGraph((org.tensorflow.distruntime.CleanupGraphRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupGraphResponse>) responseObserver);
          break;
        case METHODID_CLEANUP_ALL:
          serviceImpl.cleanupAll((org.tensorflow.distruntime.CleanupAllRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupAllResponse>) responseObserver);
          break;
        case METHODID_RECV_TENSOR:
          serviceImpl.recvTensor((org.tensorflow.distruntime.RecvTensorRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RecvTensorResponse>) responseObserver);
          break;
        case METHODID_LOGGING:
          serviceImpl.logging((org.tensorflow.distruntime.LoggingRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.LoggingResponse>) responseObserver);
          break;
        case METHODID_TRACING:
          serviceImpl.tracing((org.tensorflow.distruntime.TracingRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.TracingResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static final class WorkerServiceDescriptorSupplier implements io.grpc.protobuf.ProtoFileDescriptorSupplier {
    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return org.tensorflow.distruntime.WorkerServiceProtos.getDescriptor();
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (WorkerServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new WorkerServiceDescriptorSupplier())
              .addMethod(METHOD_GET_STATUS)
              .addMethod(METHOD_CREATE_WORKER_SESSION)
              .addMethod(METHOD_REGISTER_GRAPH)
              .addMethod(METHOD_DEREGISTER_GRAPH)
              .addMethod(METHOD_RUN_GRAPH)
              .addMethod(METHOD_CLEANUP_GRAPH)
              .addMethod(METHOD_CLEANUP_ALL)
              .addMethod(METHOD_RECV_TENSOR)
              .addMethod(METHOD_LOGGING)
              .addMethod(METHOD_TRACING)
              .build();
        }
      }
    }
    return result;
  }
}
