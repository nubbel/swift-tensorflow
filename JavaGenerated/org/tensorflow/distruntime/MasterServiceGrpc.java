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
    comments = "Source: tensorflow/core/protobuf/master_service.proto")
public final class MasterServiceGrpc {

  private MasterServiceGrpc() {}

  public static final String SERVICE_NAME = "tensorflow.grpc.MasterService";

  // Static method descriptors that strictly reflect the proto.
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.CreateSessionRequest,
      org.tensorflow.distruntime.CreateSessionResponse> METHOD_CREATE_SESSION =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.CreateSessionRequest, org.tensorflow.distruntime.CreateSessionResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.MasterService", "CreateSession"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.CreateSessionRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.CreateSessionResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.ExtendSessionRequest,
      org.tensorflow.distruntime.ExtendSessionResponse> METHOD_EXTEND_SESSION =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.ExtendSessionRequest, org.tensorflow.distruntime.ExtendSessionResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.MasterService", "ExtendSession"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.ExtendSessionRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.ExtendSessionResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.PartialRunSetupRequest,
      org.tensorflow.distruntime.PartialRunSetupResponse> METHOD_PARTIAL_RUN_SETUP =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.PartialRunSetupRequest, org.tensorflow.distruntime.PartialRunSetupResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.MasterService", "PartialRunSetup"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.PartialRunSetupRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.PartialRunSetupResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.RunStepRequest,
      org.tensorflow.distruntime.RunStepResponse> METHOD_RUN_STEP =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.RunStepRequest, org.tensorflow.distruntime.RunStepResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.MasterService", "RunStep"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.RunStepRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.RunStepResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.CloseSessionRequest,
      org.tensorflow.distruntime.CloseSessionResponse> METHOD_CLOSE_SESSION =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.CloseSessionRequest, org.tensorflow.distruntime.CloseSessionResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.MasterService", "CloseSession"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.CloseSessionRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.CloseSessionResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.ListDevicesRequest,
      org.tensorflow.distruntime.ListDevicesResponse> METHOD_LIST_DEVICES =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.ListDevicesRequest, org.tensorflow.distruntime.ListDevicesResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.MasterService", "ListDevices"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.ListDevicesRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.ListDevicesResponse.getDefaultInstance()))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.ResetRequest,
      org.tensorflow.distruntime.ResetResponse> METHOD_RESET =
      io.grpc.MethodDescriptor.<org.tensorflow.distruntime.ResetRequest, org.tensorflow.distruntime.ResetResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "tensorflow.grpc.MasterService", "Reset"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.ResetRequest.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              org.tensorflow.distruntime.ResetResponse.getDefaultInstance()))
          .build();

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static MasterServiceStub newStub(io.grpc.Channel channel) {
    return new MasterServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static MasterServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new MasterServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary and streaming output calls on the service
   */
  public static MasterServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new MasterServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class MasterServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Creates a session.
     * </pre>
     */
    public void createSession(org.tensorflow.distruntime.CreateSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CreateSessionResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_CREATE_SESSION, responseObserver);
    }

    /**
     * <pre>
     * Extends a session.
     * </pre>
     */
    public void extendSession(org.tensorflow.distruntime.ExtendSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.ExtendSessionResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_EXTEND_SESSION, responseObserver);
    }

    /**
     * <pre>
     * Prepares future partial run calls.
     * </pre>
     */
    public void partialRunSetup(org.tensorflow.distruntime.PartialRunSetupRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.PartialRunSetupResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_PARTIAL_RUN_SETUP, responseObserver);
    }

    /**
     * <pre>
     * Drives the graph computation.
     * </pre>
     */
    public void runStep(org.tensorflow.distruntime.RunStepRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RunStepResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_RUN_STEP, responseObserver);
    }

    /**
     * <pre>
     * Closes a session.
     * </pre>
     */
    public void closeSession(org.tensorflow.distruntime.CloseSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CloseSessionResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_CLOSE_SESSION, responseObserver);
    }

    /**
     * <pre>
     * List the devices usable by the master.
     * </pre>
     */
    public void listDevices(org.tensorflow.distruntime.ListDevicesRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.ListDevicesResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_LIST_DEVICES, responseObserver);
    }

    /**
     * <pre>
     * Close and abandon all existing sessions.  Ongoing computations
     * will no longer affect fresh ones via the resources in containers listed in
     * the ResetRequest.  See ResetRequest for more details.
     * </pre>
     */
    public void reset(org.tensorflow.distruntime.ResetRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.ResetResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_RESET, responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            METHOD_CREATE_SESSION,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.CreateSessionRequest,
                org.tensorflow.distruntime.CreateSessionResponse>(
                  this, METHODID_CREATE_SESSION)))
          .addMethod(
            METHOD_EXTEND_SESSION,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.ExtendSessionRequest,
                org.tensorflow.distruntime.ExtendSessionResponse>(
                  this, METHODID_EXTEND_SESSION)))
          .addMethod(
            METHOD_PARTIAL_RUN_SETUP,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.PartialRunSetupRequest,
                org.tensorflow.distruntime.PartialRunSetupResponse>(
                  this, METHODID_PARTIAL_RUN_SETUP)))
          .addMethod(
            METHOD_RUN_STEP,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.RunStepRequest,
                org.tensorflow.distruntime.RunStepResponse>(
                  this, METHODID_RUN_STEP)))
          .addMethod(
            METHOD_CLOSE_SESSION,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.CloseSessionRequest,
                org.tensorflow.distruntime.CloseSessionResponse>(
                  this, METHODID_CLOSE_SESSION)))
          .addMethod(
            METHOD_LIST_DEVICES,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.ListDevicesRequest,
                org.tensorflow.distruntime.ListDevicesResponse>(
                  this, METHODID_LIST_DEVICES)))
          .addMethod(
            METHOD_RESET,
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.ResetRequest,
                org.tensorflow.distruntime.ResetResponse>(
                  this, METHODID_RESET)))
          .build();
    }
  }

  /**
   */
  public static final class MasterServiceStub extends io.grpc.stub.AbstractStub<MasterServiceStub> {
    private MasterServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MasterServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MasterServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MasterServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Creates a session.
     * </pre>
     */
    public void createSession(org.tensorflow.distruntime.CreateSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CreateSessionResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_CREATE_SESSION, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Extends a session.
     * </pre>
     */
    public void extendSession(org.tensorflow.distruntime.ExtendSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.ExtendSessionResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_EXTEND_SESSION, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Prepares future partial run calls.
     * </pre>
     */
    public void partialRunSetup(org.tensorflow.distruntime.PartialRunSetupRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.PartialRunSetupResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_PARTIAL_RUN_SETUP, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Drives the graph computation.
     * </pre>
     */
    public void runStep(org.tensorflow.distruntime.RunStepRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RunStepResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_RUN_STEP, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Closes a session.
     * </pre>
     */
    public void closeSession(org.tensorflow.distruntime.CloseSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CloseSessionResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_CLOSE_SESSION, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * List the devices usable by the master.
     * </pre>
     */
    public void listDevices(org.tensorflow.distruntime.ListDevicesRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.ListDevicesResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_LIST_DEVICES, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Close and abandon all existing sessions.  Ongoing computations
     * will no longer affect fresh ones via the resources in containers listed in
     * the ResetRequest.  See ResetRequest for more details.
     * </pre>
     */
    public void reset(org.tensorflow.distruntime.ResetRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.ResetResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_RESET, getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class MasterServiceBlockingStub extends io.grpc.stub.AbstractStub<MasterServiceBlockingStub> {
    private MasterServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MasterServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MasterServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MasterServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Creates a session.
     * </pre>
     */
    public org.tensorflow.distruntime.CreateSessionResponse createSession(org.tensorflow.distruntime.CreateSessionRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_CREATE_SESSION, getCallOptions(), request);
    }

    /**
     * <pre>
     * Extends a session.
     * </pre>
     */
    public org.tensorflow.distruntime.ExtendSessionResponse extendSession(org.tensorflow.distruntime.ExtendSessionRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_EXTEND_SESSION, getCallOptions(), request);
    }

    /**
     * <pre>
     * Prepares future partial run calls.
     * </pre>
     */
    public org.tensorflow.distruntime.PartialRunSetupResponse partialRunSetup(org.tensorflow.distruntime.PartialRunSetupRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_PARTIAL_RUN_SETUP, getCallOptions(), request);
    }

    /**
     * <pre>
     * Drives the graph computation.
     * </pre>
     */
    public org.tensorflow.distruntime.RunStepResponse runStep(org.tensorflow.distruntime.RunStepRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_RUN_STEP, getCallOptions(), request);
    }

    /**
     * <pre>
     * Closes a session.
     * </pre>
     */
    public org.tensorflow.distruntime.CloseSessionResponse closeSession(org.tensorflow.distruntime.CloseSessionRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_CLOSE_SESSION, getCallOptions(), request);
    }

    /**
     * <pre>
     * List the devices usable by the master.
     * </pre>
     */
    public org.tensorflow.distruntime.ListDevicesResponse listDevices(org.tensorflow.distruntime.ListDevicesRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_LIST_DEVICES, getCallOptions(), request);
    }

    /**
     * <pre>
     * Close and abandon all existing sessions.  Ongoing computations
     * will no longer affect fresh ones via the resources in containers listed in
     * the ResetRequest.  See ResetRequest for more details.
     * </pre>
     */
    public org.tensorflow.distruntime.ResetResponse reset(org.tensorflow.distruntime.ResetRequest request) {
      return blockingUnaryCall(
          getChannel(), METHOD_RESET, getCallOptions(), request);
    }
  }

  /**
   */
  public static final class MasterServiceFutureStub extends io.grpc.stub.AbstractStub<MasterServiceFutureStub> {
    private MasterServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MasterServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MasterServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MasterServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Creates a session.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.CreateSessionResponse> createSession(
        org.tensorflow.distruntime.CreateSessionRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_CREATE_SESSION, getCallOptions()), request);
    }

    /**
     * <pre>
     * Extends a session.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.ExtendSessionResponse> extendSession(
        org.tensorflow.distruntime.ExtendSessionRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_EXTEND_SESSION, getCallOptions()), request);
    }

    /**
     * <pre>
     * Prepares future partial run calls.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.PartialRunSetupResponse> partialRunSetup(
        org.tensorflow.distruntime.PartialRunSetupRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_PARTIAL_RUN_SETUP, getCallOptions()), request);
    }

    /**
     * <pre>
     * Drives the graph computation.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.RunStepResponse> runStep(
        org.tensorflow.distruntime.RunStepRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_RUN_STEP, getCallOptions()), request);
    }

    /**
     * <pre>
     * Closes a session.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.CloseSessionResponse> closeSession(
        org.tensorflow.distruntime.CloseSessionRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_CLOSE_SESSION, getCallOptions()), request);
    }

    /**
     * <pre>
     * List the devices usable by the master.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.ListDevicesResponse> listDevices(
        org.tensorflow.distruntime.ListDevicesRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_LIST_DEVICES, getCallOptions()), request);
    }

    /**
     * <pre>
     * Close and abandon all existing sessions.  Ongoing computations
     * will no longer affect fresh ones via the resources in containers listed in
     * the ResetRequest.  See ResetRequest for more details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.ResetResponse> reset(
        org.tensorflow.distruntime.ResetRequest request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_RESET, getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE_SESSION = 0;
  private static final int METHODID_EXTEND_SESSION = 1;
  private static final int METHODID_PARTIAL_RUN_SETUP = 2;
  private static final int METHODID_RUN_STEP = 3;
  private static final int METHODID_CLOSE_SESSION = 4;
  private static final int METHODID_LIST_DEVICES = 5;
  private static final int METHODID_RESET = 6;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final MasterServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(MasterServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CREATE_SESSION:
          serviceImpl.createSession((org.tensorflow.distruntime.CreateSessionRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CreateSessionResponse>) responseObserver);
          break;
        case METHODID_EXTEND_SESSION:
          serviceImpl.extendSession((org.tensorflow.distruntime.ExtendSessionRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.ExtendSessionResponse>) responseObserver);
          break;
        case METHODID_PARTIAL_RUN_SETUP:
          serviceImpl.partialRunSetup((org.tensorflow.distruntime.PartialRunSetupRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.PartialRunSetupResponse>) responseObserver);
          break;
        case METHODID_RUN_STEP:
          serviceImpl.runStep((org.tensorflow.distruntime.RunStepRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RunStepResponse>) responseObserver);
          break;
        case METHODID_CLOSE_SESSION:
          serviceImpl.closeSession((org.tensorflow.distruntime.CloseSessionRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CloseSessionResponse>) responseObserver);
          break;
        case METHODID_LIST_DEVICES:
          serviceImpl.listDevices((org.tensorflow.distruntime.ListDevicesRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.ListDevicesResponse>) responseObserver);
          break;
        case METHODID_RESET:
          serviceImpl.reset((org.tensorflow.distruntime.ResetRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.ResetResponse>) responseObserver);
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

  private static final class MasterServiceDescriptorSupplier implements io.grpc.protobuf.ProtoFileDescriptorSupplier {
    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return org.tensorflow.distruntime.MasterServiceProtos.getDescriptor();
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (MasterServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new MasterServiceDescriptorSupplier())
              .addMethod(METHOD_CREATE_SESSION)
              .addMethod(METHOD_EXTEND_SESSION)
              .addMethod(METHOD_PARTIAL_RUN_SETUP)
              .addMethod(METHOD_RUN_STEP)
              .addMethod(METHOD_CLOSE_SESSION)
              .addMethod(METHOD_LIST_DEVICES)
              .addMethod(METHOD_RESET)
              .build();
        }
      }
    }
    return result;
  }
}
