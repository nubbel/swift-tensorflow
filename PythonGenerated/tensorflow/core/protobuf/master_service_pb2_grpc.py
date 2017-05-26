# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc
from grpc.framework.common import cardinality
from grpc.framework.interfaces.face import utilities as face_utilities

import tensorflow.core.protobuf.master_pb2 as tensorflow_dot_core_dot_protobuf_dot_master__pb2


class MasterServiceStub(object):
  """//////////////////////////////////////////////////////////////////////////////

  MasterService defines a TensorFlow service with which a client can
  interact to execute a distributed TensorFlow computation.

  A master service keeps track of multiple "master sessions". Each
  session encapsulates a computation graph and its associated state,
  and typically corresponds to a single "client session" (e.g. a
  `tensorflow::Session` instance).

  A session is responsible for the following:
  * assigning each node to a device (locally or remotely) using a
  placement algorithm. This may make decisions based on collected
  statistics from the workers in the system (e.g., memory usage,
  bandwidth consumption, etc.)

  * inserting intermediate nodes and edges to support cross-device
  and cross-process data flows and resource management.

  * issuing commands to workers to execute the subgraphs associated
  with those workers.

  Typically, a client carries out an iterative computation
  (e.g. training) by invoking RPCs against the master in a
  client-side loop. The client first creates a client session that
  connects to a particular master (using gRPC for example). The
  master creates a corresponding master session that is hosted on
  the master and caches state between the client's invocations.

  After the session is established, the master returns an opaque
  handle to the client that can be used to associate the client and
  master sessions.

  The client may send an initial graph to the master in the
  CreateSession call, and add nodes to the graph using ExtendSession.

  The most frequent operation a master is "RunStep", which implements
  the `Session::Run()` API. It supports feeding in arguments,
  executing a dataflow computation, and fetching arguments.

  Finally, when the client no longer needs the session, it should
  close the session by invoking CloseSession, which allows the master
  to reclaim resources associated with the session. The master may
  implement a garbage collection scheme that closes sessions that
  have been inactive for some time.

  For example, the following pseudo-code illustrates how a client
  interacts with a master:

  stub = NewStub("/job:mnist/replica:0/task:0")
  {handle} = stub->CreateSession({graph_def})
  do {
  stub->RunStep({handle, {feeds}, {fetches}})
  // The client can evaluate a predicate locally, based on the
  // result of `fetches`, to determine whether to terminate. For
  // example, it might fetch the loss and evaluate whether it is less
  // than some threshold.
  } while (!should_stop({fetches}));
  stub->CloseSession({handle})

  //////////////////////////////////////////////////////////////////////////////

  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CreateSession = channel.unary_unary(
        '/tensorflow.grpc.MasterService/CreateSession',
        request_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.CreateSessionRequest.SerializeToString,
        response_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.CreateSessionResponse.FromString,
        )
    self.ExtendSession = channel.unary_unary(
        '/tensorflow.grpc.MasterService/ExtendSession',
        request_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ExtendSessionRequest.SerializeToString,
        response_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ExtendSessionResponse.FromString,
        )
    self.PartialRunSetup = channel.unary_unary(
        '/tensorflow.grpc.MasterService/PartialRunSetup',
        request_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.PartialRunSetupRequest.SerializeToString,
        response_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.PartialRunSetupResponse.FromString,
        )
    self.RunStep = channel.unary_unary(
        '/tensorflow.grpc.MasterService/RunStep',
        request_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.RunStepRequest.SerializeToString,
        response_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.RunStepResponse.FromString,
        )
    self.CloseSession = channel.unary_unary(
        '/tensorflow.grpc.MasterService/CloseSession',
        request_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.CloseSessionRequest.SerializeToString,
        response_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.CloseSessionResponse.FromString,
        )
    self.ListDevices = channel.unary_unary(
        '/tensorflow.grpc.MasterService/ListDevices',
        request_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ListDevicesRequest.SerializeToString,
        response_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ListDevicesResponse.FromString,
        )
    self.Reset = channel.unary_unary(
        '/tensorflow.grpc.MasterService/Reset',
        request_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ResetRequest.SerializeToString,
        response_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ResetResponse.FromString,
        )


class MasterServiceServicer(object):
  """//////////////////////////////////////////////////////////////////////////////

  MasterService defines a TensorFlow service with which a client can
  interact to execute a distributed TensorFlow computation.

  A master service keeps track of multiple "master sessions". Each
  session encapsulates a computation graph and its associated state,
  and typically corresponds to a single "client session" (e.g. a
  `tensorflow::Session` instance).

  A session is responsible for the following:
  * assigning each node to a device (locally or remotely) using a
  placement algorithm. This may make decisions based on collected
  statistics from the workers in the system (e.g., memory usage,
  bandwidth consumption, etc.)

  * inserting intermediate nodes and edges to support cross-device
  and cross-process data flows and resource management.

  * issuing commands to workers to execute the subgraphs associated
  with those workers.

  Typically, a client carries out an iterative computation
  (e.g. training) by invoking RPCs against the master in a
  client-side loop. The client first creates a client session that
  connects to a particular master (using gRPC for example). The
  master creates a corresponding master session that is hosted on
  the master and caches state between the client's invocations.

  After the session is established, the master returns an opaque
  handle to the client that can be used to associate the client and
  master sessions.

  The client may send an initial graph to the master in the
  CreateSession call, and add nodes to the graph using ExtendSession.

  The most frequent operation a master is "RunStep", which implements
  the `Session::Run()` API. It supports feeding in arguments,
  executing a dataflow computation, and fetching arguments.

  Finally, when the client no longer needs the session, it should
  close the session by invoking CloseSession, which allows the master
  to reclaim resources associated with the session. The master may
  implement a garbage collection scheme that closes sessions that
  have been inactive for some time.

  For example, the following pseudo-code illustrates how a client
  interacts with a master:

  stub = NewStub("/job:mnist/replica:0/task:0")
  {handle} = stub->CreateSession({graph_def})
  do {
  stub->RunStep({handle, {feeds}, {fetches}})
  // The client can evaluate a predicate locally, based on the
  // result of `fetches`, to determine whether to terminate. For
  // example, it might fetch the loss and evaluate whether it is less
  // than some threshold.
  } while (!should_stop({fetches}));
  stub->CloseSession({handle})

  //////////////////////////////////////////////////////////////////////////////

  """

  def CreateSession(self, request, context):
    """Creates a session.
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ExtendSession(self, request, context):
    """Extends a session.
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def PartialRunSetup(self, request, context):
    """Prepares future partial run calls.
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def RunStep(self, request, context):
    """Drives the graph computation.
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CloseSession(self, request, context):
    """Closes a session.
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListDevices(self, request, context):
    """List the devices usable by the master.
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Reset(self, request, context):
    """Close and abandon all existing sessions.  Ongoing computations
    will no longer affect fresh ones via the resources in containers listed in
    the ResetRequest.  See ResetRequest for more details.
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_MasterServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CreateSession': grpc.unary_unary_rpc_method_handler(
          servicer.CreateSession,
          request_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.CreateSessionRequest.FromString,
          response_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.CreateSessionResponse.SerializeToString,
      ),
      'ExtendSession': grpc.unary_unary_rpc_method_handler(
          servicer.ExtendSession,
          request_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ExtendSessionRequest.FromString,
          response_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ExtendSessionResponse.SerializeToString,
      ),
      'PartialRunSetup': grpc.unary_unary_rpc_method_handler(
          servicer.PartialRunSetup,
          request_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.PartialRunSetupRequest.FromString,
          response_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.PartialRunSetupResponse.SerializeToString,
      ),
      'RunStep': grpc.unary_unary_rpc_method_handler(
          servicer.RunStep,
          request_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.RunStepRequest.FromString,
          response_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.RunStepResponse.SerializeToString,
      ),
      'CloseSession': grpc.unary_unary_rpc_method_handler(
          servicer.CloseSession,
          request_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.CloseSessionRequest.FromString,
          response_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.CloseSessionResponse.SerializeToString,
      ),
      'ListDevices': grpc.unary_unary_rpc_method_handler(
          servicer.ListDevices,
          request_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ListDevicesRequest.FromString,
          response_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ListDevicesResponse.SerializeToString,
      ),
      'Reset': grpc.unary_unary_rpc_method_handler(
          servicer.Reset,
          request_deserializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ResetRequest.FromString,
          response_serializer=tensorflow_dot_core_dot_protobuf_dot_master__pb2.ResetResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'tensorflow.grpc.MasterService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
