// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/core/logging.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "tensorflow_serving/core/logging.pb.h"

#include <algorithm>

#include <google/protobuf/stubs/common.h>
#include <google/protobuf/stubs/port.h>
#include <google/protobuf/stubs/once.h>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/wire_format_lite_inl.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)

namespace tensorflow {
namespace serving {
class LogMetadataDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<LogMetadata> {
} _LogMetadata_default_instance_;

namespace protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[1];

}  // namespace

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(LogMetadata, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(LogMetadata, model_spec_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(LogMetadata, sampling_config_),
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, -1, sizeof(LogMetadata)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_LogMetadata_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "tensorflow_serving/core/logging.proto", schemas, file_default_instances, TableStruct::offsets, factory,
      file_level_metadata, NULL, NULL);
}

void protobuf_AssignDescriptorsOnce() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &protobuf_AssignDescriptors);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::internal::RegisterAllTypes(file_level_metadata, 1);
}

}  // namespace

void TableStruct::Shutdown() {
  _LogMetadata_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  ::tensorflow::serving::protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto::InitDefaults();
  ::tensorflow::serving::protobuf_tensorflow_5fserving_2fconfig_2flogging_5fconfig_2eproto::InitDefaults();
  _LogMetadata_default_instance_.DefaultConstruct();
  _LogMetadata_default_instance_.get_mutable()->model_spec_ = const_cast< ::tensorflow::serving::ModelSpec*>(
      ::tensorflow::serving::ModelSpec::internal_default_instance());
  _LogMetadata_default_instance_.get_mutable()->sampling_config_ = const_cast< ::tensorflow::serving::SamplingConfig*>(
      ::tensorflow::serving::SamplingConfig::internal_default_instance());
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\n%tensorflow_serving/core/logging.proto\022"
      "\022tensorflow.serving\032#tensorflow_serving/"
      "apis/model.proto\032.tensorflow_serving/con"
      "fig/logging_config.proto\"}\n\013LogMetadata\022"
      "1\n\nmodel_spec\030\001 \001(\0132\035.tensorflow.serving"
      ".ModelSpec\022;\n\017sampling_config\030\002 \001(\0132\".te"
      "nsorflow.serving.SamplingConfigB\003\370\001\001b\006pr"
      "oto3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 284);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "tensorflow_serving/core/logging.proto", &protobuf_RegisterTypes);
  ::tensorflow::serving::protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto::AddDescriptors();
  ::tensorflow::serving::protobuf_tensorflow_5fserving_2fconfig_2flogging_5fconfig_2eproto::AddDescriptors();
  ::google::protobuf::internal::OnShutdown(&TableStruct::Shutdown);
}

void AddDescriptors() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &AddDescriptorsImpl);
}
// Force AddDescriptors() to be called at static initialization time.
struct StaticDescriptorInitializer {
  StaticDescriptorInitializer() {
    AddDescriptors();
  }
} static_descriptor_initializer;

}  // namespace protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto


// ===================================================================

void LogMetadata::_slow_mutable_model_spec() {
  model_spec_ = ::google::protobuf::Arena::CreateMessage< ::tensorflow::serving::ModelSpec >(
      GetArenaNoVirtual());
}
::tensorflow::serving::ModelSpec* LogMetadata::_slow_release_model_spec() {
  if (model_spec_ == NULL) {
    return NULL;
  } else {
    ::tensorflow::serving::ModelSpec* temp = new ::tensorflow::serving::ModelSpec(*model_spec_);
    model_spec_ = NULL;
    return temp;
  }
}
::tensorflow::serving::ModelSpec* LogMetadata::unsafe_arena_release_model_spec() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.LogMetadata.model_spec)
  
  ::tensorflow::serving::ModelSpec* temp = model_spec_;
  model_spec_ = NULL;
  return temp;
}
void LogMetadata::_slow_set_allocated_model_spec(
    ::google::protobuf::Arena* message_arena, ::tensorflow::serving::ModelSpec** model_spec) {
    if (message_arena != NULL && 
        ::google::protobuf::Arena::GetArena(*model_spec) == NULL) {
      message_arena->Own(*model_spec);
    } else if (message_arena !=
               ::google::protobuf::Arena::GetArena(*model_spec)) {
      ::tensorflow::serving::ModelSpec* new_model_spec = 
            ::google::protobuf::Arena::CreateMessage< ::tensorflow::serving::ModelSpec >(
            message_arena);
      new_model_spec->CopyFrom(**model_spec);
      *model_spec = new_model_spec;
    }
}
void LogMetadata::unsafe_arena_set_allocated_model_spec(
    ::tensorflow::serving::ModelSpec* model_spec) {
  if (GetArenaNoVirtual() == NULL) {
    delete model_spec_;
  }
  model_spec_ = model_spec;
  if (model_spec) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.LogMetadata.model_spec)
}
void LogMetadata::_slow_mutable_sampling_config() {
  sampling_config_ = ::google::protobuf::Arena::CreateMessage< ::tensorflow::serving::SamplingConfig >(
      GetArenaNoVirtual());
}
::tensorflow::serving::SamplingConfig* LogMetadata::_slow_release_sampling_config() {
  if (sampling_config_ == NULL) {
    return NULL;
  } else {
    ::tensorflow::serving::SamplingConfig* temp = new ::tensorflow::serving::SamplingConfig(*sampling_config_);
    sampling_config_ = NULL;
    return temp;
  }
}
::tensorflow::serving::SamplingConfig* LogMetadata::unsafe_arena_release_sampling_config() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.LogMetadata.sampling_config)
  
  ::tensorflow::serving::SamplingConfig* temp = sampling_config_;
  sampling_config_ = NULL;
  return temp;
}
void LogMetadata::_slow_set_allocated_sampling_config(
    ::google::protobuf::Arena* message_arena, ::tensorflow::serving::SamplingConfig** sampling_config) {
    if (message_arena != NULL && 
        ::google::protobuf::Arena::GetArena(*sampling_config) == NULL) {
      message_arena->Own(*sampling_config);
    } else if (message_arena !=
               ::google::protobuf::Arena::GetArena(*sampling_config)) {
      ::tensorflow::serving::SamplingConfig* new_sampling_config = 
            ::google::protobuf::Arena::CreateMessage< ::tensorflow::serving::SamplingConfig >(
            message_arena);
      new_sampling_config->CopyFrom(**sampling_config);
      *sampling_config = new_sampling_config;
    }
}
void LogMetadata::unsafe_arena_set_allocated_sampling_config(
    ::tensorflow::serving::SamplingConfig* sampling_config) {
  if (GetArenaNoVirtual() == NULL) {
    delete sampling_config_;
  }
  sampling_config_ = sampling_config;
  if (sampling_config) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.LogMetadata.sampling_config)
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int LogMetadata::kModelSpecFieldNumber;
const int LogMetadata::kSamplingConfigFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

LogMetadata::LogMetadata()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.serving.LogMetadata)
}
LogMetadata::LogMetadata(::google::protobuf::Arena* arena)
  : ::google::protobuf::Message(),
  _internal_metadata_(arena) {
#ifdef GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto::InitDefaults();
#endif  // GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:tensorflow.serving.LogMetadata)
}
LogMetadata::LogMetadata(const LogMetadata& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.has_model_spec()) {
    model_spec_ = new ::tensorflow::serving::ModelSpec(*from.model_spec_);
  } else {
    model_spec_ = NULL;
  }
  if (from.has_sampling_config()) {
    sampling_config_ = new ::tensorflow::serving::SamplingConfig(*from.sampling_config_);
  } else {
    sampling_config_ = NULL;
  }
  // @@protoc_insertion_point(copy_constructor:tensorflow.serving.LogMetadata)
}

void LogMetadata::SharedCtor() {
  ::memset(&model_spec_, 0, reinterpret_cast<char*>(&sampling_config_) -
    reinterpret_cast<char*>(&model_spec_) + sizeof(sampling_config_));
  _cached_size_ = 0;
}

LogMetadata::~LogMetadata() {
  // @@protoc_insertion_point(destructor:tensorflow.serving.LogMetadata)
  SharedDtor();
}

void LogMetadata::SharedDtor() {
  ::google::protobuf::Arena* arena = GetArenaNoVirtual();
  if (arena != NULL) {
    return;
  }

  if (this != internal_default_instance()) {
    delete model_spec_;
  }
  if (this != internal_default_instance()) {
    delete sampling_config_;
  }
}

void LogMetadata::ArenaDtor(void* object) {
  LogMetadata* _this = reinterpret_cast< LogMetadata* >(object);
  (void)_this;
}
void LogMetadata::RegisterArenaDtor(::google::protobuf::Arena* arena) {
}
void LogMetadata::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* LogMetadata::descriptor() {
  protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto::file_level_metadata[0].descriptor;
}

const LogMetadata& LogMetadata::default_instance() {
  protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto::InitDefaults();
  return *internal_default_instance();
}

LogMetadata* LogMetadata::New(::google::protobuf::Arena* arena) const {
  return ::google::protobuf::Arena::CreateMessage<LogMetadata>(arena);
}

void LogMetadata::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.serving.LogMetadata)
  if (GetArenaNoVirtual() == NULL && model_spec_ != NULL) {
    delete model_spec_;
  }
  model_spec_ = NULL;
  if (GetArenaNoVirtual() == NULL && sampling_config_ != NULL) {
    delete sampling_config_;
  }
  sampling_config_ = NULL;
}

bool LogMetadata::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.serving.LogMetadata)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // .tensorflow.serving.ModelSpec model_spec = 1;
      case 1: {
        if (tag == 10u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_model_spec()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // .tensorflow.serving.SamplingConfig sampling_config = 2;
      case 2: {
        if (tag == 18u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_sampling_config()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0 ||
            ::google::protobuf::internal::WireFormatLite::GetTagWireType(tag) ==
            ::google::protobuf::internal::WireFormatLite::WIRETYPE_END_GROUP) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormatLite::SkipField(input, tag));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:tensorflow.serving.LogMetadata)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.serving.LogMetadata)
  return false;
#undef DO_
}

void LogMetadata::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.serving.LogMetadata)
  // .tensorflow.serving.ModelSpec model_spec = 1;
  if (this->has_model_spec()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      1, *this->model_spec_, output);
  }

  // .tensorflow.serving.SamplingConfig sampling_config = 2;
  if (this->has_sampling_config()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      2, *this->sampling_config_, output);
  }

  // @@protoc_insertion_point(serialize_end:tensorflow.serving.LogMetadata)
}

::google::protobuf::uint8* LogMetadata::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.serving.LogMetadata)
  // .tensorflow.serving.ModelSpec model_spec = 1;
  if (this->has_model_spec()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        1, *this->model_spec_, false, target);
  }

  // .tensorflow.serving.SamplingConfig sampling_config = 2;
  if (this->has_sampling_config()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        2, *this->sampling_config_, false, target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.serving.LogMetadata)
  return target;
}

size_t LogMetadata::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.serving.LogMetadata)
  size_t total_size = 0;

  // .tensorflow.serving.ModelSpec model_spec = 1;
  if (this->has_model_spec()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        *this->model_spec_);
  }

  // .tensorflow.serving.SamplingConfig sampling_config = 2;
  if (this->has_sampling_config()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        *this->sampling_config_);
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void LogMetadata::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.serving.LogMetadata)
  GOOGLE_DCHECK_NE(&from, this);
  const LogMetadata* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const LogMetadata>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.serving.LogMetadata)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.serving.LogMetadata)
    MergeFrom(*source);
  }
}

void LogMetadata::MergeFrom(const LogMetadata& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.serving.LogMetadata)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.has_model_spec()) {
    mutable_model_spec()->::tensorflow::serving::ModelSpec::MergeFrom(from.model_spec());
  }
  if (from.has_sampling_config()) {
    mutable_sampling_config()->::tensorflow::serving::SamplingConfig::MergeFrom(from.sampling_config());
  }
}

void LogMetadata::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.serving.LogMetadata)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void LogMetadata::CopyFrom(const LogMetadata& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.serving.LogMetadata)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool LogMetadata::IsInitialized() const {
  return true;
}

void LogMetadata::Swap(LogMetadata* other) {
  if (other == this) return;
  if (GetArenaNoVirtual() == other->GetArenaNoVirtual()) {
    InternalSwap(other);
  } else {
    LogMetadata* temp = New(GetArenaNoVirtual());
    temp->MergeFrom(*other);
    other->CopyFrom(*this);
    InternalSwap(temp);
    if (GetArenaNoVirtual() == NULL) {
      delete temp;
    }
  }
}
void LogMetadata::UnsafeArenaSwap(LogMetadata* other) {
  if (other == this) return;
  GOOGLE_DCHECK(GetArenaNoVirtual() == other->GetArenaNoVirtual());
  InternalSwap(other);
}
void LogMetadata::InternalSwap(LogMetadata* other) {
  std::swap(model_spec_, other->model_spec_);
  std::swap(sampling_config_, other->sampling_config_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata LogMetadata::GetMetadata() const {
  protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto::file_level_metadata[0];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// LogMetadata

// .tensorflow.serving.ModelSpec model_spec = 1;
bool LogMetadata::has_model_spec() const {
  return this != internal_default_instance() && model_spec_ != NULL;
}
void LogMetadata::clear_model_spec() {
  if (GetArenaNoVirtual() == NULL && model_spec_ != NULL) delete model_spec_;
  model_spec_ = NULL;
}
const ::tensorflow::serving::ModelSpec& LogMetadata::model_spec() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.LogMetadata.model_spec)
  return model_spec_ != NULL ? *model_spec_
                         : *::tensorflow::serving::ModelSpec::internal_default_instance();
}
::tensorflow::serving::ModelSpec* LogMetadata::mutable_model_spec() {
  
  if (model_spec_ == NULL) {
    _slow_mutable_model_spec();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.LogMetadata.model_spec)
  return model_spec_;
}
::tensorflow::serving::ModelSpec* LogMetadata::release_model_spec() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.LogMetadata.model_spec)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_model_spec();
  } else {
    ::tensorflow::serving::ModelSpec* temp = model_spec_;
    model_spec_ = NULL;
    return temp;
  }
}
 void LogMetadata::set_allocated_model_spec(::tensorflow::serving::ModelSpec* model_spec) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete model_spec_;
  }
  if (model_spec != NULL) {
    _slow_set_allocated_model_spec(message_arena, &model_spec);
  }
  model_spec_ = model_spec;
  if (model_spec) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.LogMetadata.model_spec)
}

// .tensorflow.serving.SamplingConfig sampling_config = 2;
bool LogMetadata::has_sampling_config() const {
  return this != internal_default_instance() && sampling_config_ != NULL;
}
void LogMetadata::clear_sampling_config() {
  if (GetArenaNoVirtual() == NULL && sampling_config_ != NULL) delete sampling_config_;
  sampling_config_ = NULL;
}
const ::tensorflow::serving::SamplingConfig& LogMetadata::sampling_config() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.LogMetadata.sampling_config)
  return sampling_config_ != NULL ? *sampling_config_
                         : *::tensorflow::serving::SamplingConfig::internal_default_instance();
}
::tensorflow::serving::SamplingConfig* LogMetadata::mutable_sampling_config() {
  
  if (sampling_config_ == NULL) {
    _slow_mutable_sampling_config();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.LogMetadata.sampling_config)
  return sampling_config_;
}
::tensorflow::serving::SamplingConfig* LogMetadata::release_sampling_config() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.LogMetadata.sampling_config)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_sampling_config();
  } else {
    ::tensorflow::serving::SamplingConfig* temp = sampling_config_;
    sampling_config_ = NULL;
    return temp;
  }
}
 void LogMetadata::set_allocated_sampling_config(::tensorflow::serving::SamplingConfig* sampling_config) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete sampling_config_;
  }
  if (sampling_config != NULL) {
    _slow_set_allocated_sampling_config(message_arena, &sampling_config);
  }
  sampling_config_ = sampling_config;
  if (sampling_config) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.LogMetadata.sampling_config)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)
