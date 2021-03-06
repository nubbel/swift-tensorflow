// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/apis/prediction_service.proto

#ifndef PROTOBUF_tensorflow_5fserving_2fapis_2fprediction_5fservice_2eproto__INCLUDED
#define PROTOBUF_tensorflow_5fserving_2fapis_2fprediction_5fservice_2eproto__INCLUDED

#include <string>

#include <google/protobuf/stubs/common.h>

#if GOOGLE_PROTOBUF_VERSION < 3002000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please update
#error your headers.
#endif
#if 3002000 < GOOGLE_PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include "tensorflow_serving/apis/classification.pb.h"
#include "tensorflow_serving/apis/get_model_metadata.pb.h"
#include "tensorflow_serving/apis/inference.pb.h"
#include "tensorflow_serving/apis/predict.pb.h"
#include "tensorflow_serving/apis/regression.pb.h"
// @@protoc_insertion_point(includes)
namespace tensorflow {
namespace serving {
class Class;
class ClassDefaultTypeInternal;
extern ClassDefaultTypeInternal _Class_default_instance_;
class ClassificationRequest;
class ClassificationRequestDefaultTypeInternal;
extern ClassificationRequestDefaultTypeInternal _ClassificationRequest_default_instance_;
class ClassificationResponse;
class ClassificationResponseDefaultTypeInternal;
extern ClassificationResponseDefaultTypeInternal _ClassificationResponse_default_instance_;
class ClassificationResult;
class ClassificationResultDefaultTypeInternal;
extern ClassificationResultDefaultTypeInternal _ClassificationResult_default_instance_;
class Classifications;
class ClassificationsDefaultTypeInternal;
extern ClassificationsDefaultTypeInternal _Classifications_default_instance_;
class GetModelMetadataRequest;
class GetModelMetadataRequestDefaultTypeInternal;
extern GetModelMetadataRequestDefaultTypeInternal _GetModelMetadataRequest_default_instance_;
class GetModelMetadataResponse;
class GetModelMetadataResponseDefaultTypeInternal;
extern GetModelMetadataResponseDefaultTypeInternal _GetModelMetadataResponse_default_instance_;
class InferenceResult;
class InferenceResultDefaultTypeInternal;
extern InferenceResultDefaultTypeInternal _InferenceResult_default_instance_;
class InferenceTask;
class InferenceTaskDefaultTypeInternal;
extern InferenceTaskDefaultTypeInternal _InferenceTask_default_instance_;
class MultiInferenceRequest;
class MultiInferenceRequestDefaultTypeInternal;
extern MultiInferenceRequestDefaultTypeInternal _MultiInferenceRequest_default_instance_;
class MultiInferenceResponse;
class MultiInferenceResponseDefaultTypeInternal;
extern MultiInferenceResponseDefaultTypeInternal _MultiInferenceResponse_default_instance_;
class PredictRequest;
class PredictRequestDefaultTypeInternal;
extern PredictRequestDefaultTypeInternal _PredictRequest_default_instance_;
class PredictResponse;
class PredictResponseDefaultTypeInternal;
extern PredictResponseDefaultTypeInternal _PredictResponse_default_instance_;
class Regression;
class RegressionDefaultTypeInternal;
extern RegressionDefaultTypeInternal _Regression_default_instance_;
class RegressionRequest;
class RegressionRequestDefaultTypeInternal;
extern RegressionRequestDefaultTypeInternal _RegressionRequest_default_instance_;
class RegressionResponse;
class RegressionResponseDefaultTypeInternal;
extern RegressionResponseDefaultTypeInternal _RegressionResponse_default_instance_;
class RegressionResult;
class RegressionResultDefaultTypeInternal;
extern RegressionResultDefaultTypeInternal _RegressionResult_default_instance_;
class SignatureDefMap;
class SignatureDefMapDefaultTypeInternal;
extern SignatureDefMapDefaultTypeInternal _SignatureDefMap_default_instance_;
}  // namespace serving
}  // namespace tensorflow

namespace tensorflow {
namespace serving {

namespace protobuf_tensorflow_5fserving_2fapis_2fprediction_5fservice_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_5fserving_2fapis_2fprediction_5fservice_2eproto

// ===================================================================


// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)


}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_5fserving_2fapis_2fprediction_5fservice_2eproto__INCLUDED
