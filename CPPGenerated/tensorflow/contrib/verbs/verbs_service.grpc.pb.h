// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: tensorflow/contrib/verbs/verbs_service.proto
// Original file comments:
// Copyright 2017 The TensorFlow Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ==============================================================================
//
#ifndef GRPC_tensorflow_2fcontrib_2fverbs_2fverbs_5fservice_2eproto__INCLUDED
#define GRPC_tensorflow_2fcontrib_2fverbs_2fverbs_5fservice_2eproto__INCLUDED

#include "tensorflow/contrib/verbs/verbs_service.pb.h"

#include <grpc++/impl/codegen/async_stream.h>
#include <grpc++/impl/codegen/async_unary_call.h>
#include <grpc++/impl/codegen/method_handler_impl.h>
#include <grpc++/impl/codegen/proto_utils.h>
#include <grpc++/impl/codegen/rpc_method.h>
#include <grpc++/impl/codegen/service_type.h>
#include <grpc++/impl/codegen/status.h>
#include <grpc++/impl/codegen/stub_options.h>
#include <grpc++/impl/codegen/sync_stream.h>

namespace grpc {
class CompletionQueue;
class Channel;
class RpcService;
class ServerCompletionQueue;
class ServerContext;
}  // namespace grpc

namespace tensorflow {

// //////////////////////////////////////////////////////////////////////////////
//
// VerbsService
//
// //////////////////////////////////////////////////////////////////////////////
//
class VerbsService final {
 public:
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    virtual ::grpc::Status GetRemoteAddress(::grpc::ClientContext* context, const ::tensorflow::GetRemoteAddressRequest& request, ::tensorflow::GetRemoteAddressResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::tensorflow::GetRemoteAddressResponse>> AsyncGetRemoteAddress(::grpc::ClientContext* context, const ::tensorflow::GetRemoteAddressRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::tensorflow::GetRemoteAddressResponse>>(AsyncGetRemoteAddressRaw(context, request, cq));
    }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::tensorflow::GetRemoteAddressResponse>* AsyncGetRemoteAddressRaw(::grpc::ClientContext* context, const ::tensorflow::GetRemoteAddressRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status GetRemoteAddress(::grpc::ClientContext* context, const ::tensorflow::GetRemoteAddressRequest& request, ::tensorflow::GetRemoteAddressResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::tensorflow::GetRemoteAddressResponse>> AsyncGetRemoteAddress(::grpc::ClientContext* context, const ::tensorflow::GetRemoteAddressRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::tensorflow::GetRemoteAddressResponse>>(AsyncGetRemoteAddressRaw(context, request, cq));
    }

   private:
    std::shared_ptr< ::grpc::ChannelInterface> channel_;
    ::grpc::ClientAsyncResponseReader< ::tensorflow::GetRemoteAddressResponse>* AsyncGetRemoteAddressRaw(::grpc::ClientContext* context, const ::tensorflow::GetRemoteAddressRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::RpcMethod rpcmethod_GetRemoteAddress_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    virtual ::grpc::Status GetRemoteAddress(::grpc::ServerContext* context, const ::tensorflow::GetRemoteAddressRequest* request, ::tensorflow::GetRemoteAddressResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_GetRemoteAddress : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_GetRemoteAddress() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_GetRemoteAddress() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetRemoteAddress(::grpc::ServerContext* context, const ::tensorflow::GetRemoteAddressRequest* request, ::tensorflow::GetRemoteAddressResponse* response) final override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetRemoteAddress(::grpc::ServerContext* context, ::tensorflow::GetRemoteAddressRequest* request, ::grpc::ServerAsyncResponseWriter< ::tensorflow::GetRemoteAddressResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_GetRemoteAddress<Service > AsyncService;
  template <class BaseClass>
  class WithGenericMethod_GetRemoteAddress : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_GetRemoteAddress() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_GetRemoteAddress() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetRemoteAddress(::grpc::ServerContext* context, const ::tensorflow::GetRemoteAddressRequest* request, ::tensorflow::GetRemoteAddressResponse* response) final override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_GetRemoteAddress : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_GetRemoteAddress() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::StreamedUnaryHandler< ::tensorflow::GetRemoteAddressRequest, ::tensorflow::GetRemoteAddressResponse>(std::bind(&WithStreamedUnaryMethod_GetRemoteAddress<BaseClass>::StreamedGetRemoteAddress, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_GetRemoteAddress() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status GetRemoteAddress(::grpc::ServerContext* context, const ::tensorflow::GetRemoteAddressRequest* request, ::tensorflow::GetRemoteAddressResponse* response) final override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedGetRemoteAddress(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::tensorflow::GetRemoteAddressRequest,::tensorflow::GetRemoteAddressResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_GetRemoteAddress<Service > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_GetRemoteAddress<Service > StreamedService;
};

}  // namespace tensorflow


#endif  // GRPC_tensorflow_2fcontrib_2fverbs_2fverbs_5fservice_2eproto__INCLUDED
