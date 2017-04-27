// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/config/log_collector_config.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "tensorflow_serving/config/log_collector_config.pb.h"

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
class LogCollectorConfigDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<LogCollectorConfig> {
} _LogCollectorConfig_default_instance_;

namespace protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[1];

}  // namespace

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(LogCollectorConfig, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(LogCollectorConfig, type_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(LogCollectorConfig, filename_prefix_),
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, -1, sizeof(LogCollectorConfig)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_LogCollectorConfig_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "tensorflow_serving/config/log_collector_config.proto", schemas, file_default_instances, TableStruct::offsets, factory,
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
  _LogCollectorConfig_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  _LogCollectorConfig_default_instance_.DefaultConstruct();
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\n4tensorflow_serving/config/log_collecto"
      "r_config.proto\022\022tensorflow.serving\";\n\022Lo"
      "gCollectorConfig\022\014\n\004type\030\001 \001(\t\022\027\n\017filena"
      "me_prefix\030\002 \001(\tB\003\370\001\001b\006proto3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 148);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "tensorflow_serving/config/log_collector_config.proto", &protobuf_RegisterTypes);
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

}  // namespace protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto


// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int LogCollectorConfig::kTypeFieldNumber;
const int LogCollectorConfig::kFilenamePrefixFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

LogCollectorConfig::LogCollectorConfig()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.serving.LogCollectorConfig)
}
LogCollectorConfig::LogCollectorConfig(::google::protobuf::Arena* arena)
  : ::google::protobuf::Message(),
  _internal_metadata_(arena) {
#ifdef GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto::InitDefaults();
#endif  // GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:tensorflow.serving.LogCollectorConfig)
}
LogCollectorConfig::LogCollectorConfig(const LogCollectorConfig& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  type_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.type().size() > 0) {
    type_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.type(),
      GetArenaNoVirtual());
  }
  filename_prefix_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.filename_prefix().size() > 0) {
    filename_prefix_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.filename_prefix(),
      GetArenaNoVirtual());
  }
  // @@protoc_insertion_point(copy_constructor:tensorflow.serving.LogCollectorConfig)
}

void LogCollectorConfig::SharedCtor() {
  type_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  filename_prefix_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  _cached_size_ = 0;
}

LogCollectorConfig::~LogCollectorConfig() {
  // @@protoc_insertion_point(destructor:tensorflow.serving.LogCollectorConfig)
  SharedDtor();
}

void LogCollectorConfig::SharedDtor() {
  ::google::protobuf::Arena* arena = GetArenaNoVirtual();
  if (arena != NULL) {
    return;
  }

  type_.Destroy(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), arena);
  filename_prefix_.Destroy(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), arena);
}

void LogCollectorConfig::ArenaDtor(void* object) {
  LogCollectorConfig* _this = reinterpret_cast< LogCollectorConfig* >(object);
  (void)_this;
}
void LogCollectorConfig::RegisterArenaDtor(::google::protobuf::Arena* arena) {
}
void LogCollectorConfig::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* LogCollectorConfig::descriptor() {
  protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto::file_level_metadata[0].descriptor;
}

const LogCollectorConfig& LogCollectorConfig::default_instance() {
  protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto::InitDefaults();
  return *internal_default_instance();
}

LogCollectorConfig* LogCollectorConfig::New(::google::protobuf::Arena* arena) const {
  return ::google::protobuf::Arena::CreateMessage<LogCollectorConfig>(arena);
}

void LogCollectorConfig::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.serving.LogCollectorConfig)
  type_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
  filename_prefix_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}

bool LogCollectorConfig::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.serving.LogCollectorConfig)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // string type = 1;
      case 1: {
        if (tag == 10u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_type()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->type().data(), this->type().length(),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "tensorflow.serving.LogCollectorConfig.type"));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // string filename_prefix = 2;
      case 2: {
        if (tag == 18u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_filename_prefix()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->filename_prefix().data(), this->filename_prefix().length(),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "tensorflow.serving.LogCollectorConfig.filename_prefix"));
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
  // @@protoc_insertion_point(parse_success:tensorflow.serving.LogCollectorConfig)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.serving.LogCollectorConfig)
  return false;
#undef DO_
}

void LogCollectorConfig::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.serving.LogCollectorConfig)
  // string type = 1;
  if (this->type().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->type().data(), this->type().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.LogCollectorConfig.type");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      1, this->type(), output);
  }

  // string filename_prefix = 2;
  if (this->filename_prefix().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->filename_prefix().data(), this->filename_prefix().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.LogCollectorConfig.filename_prefix");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      2, this->filename_prefix(), output);
  }

  // @@protoc_insertion_point(serialize_end:tensorflow.serving.LogCollectorConfig)
}

::google::protobuf::uint8* LogCollectorConfig::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.serving.LogCollectorConfig)
  // string type = 1;
  if (this->type().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->type().data(), this->type().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.LogCollectorConfig.type");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        1, this->type(), target);
  }

  // string filename_prefix = 2;
  if (this->filename_prefix().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->filename_prefix().data(), this->filename_prefix().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.LogCollectorConfig.filename_prefix");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        2, this->filename_prefix(), target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.serving.LogCollectorConfig)
  return target;
}

size_t LogCollectorConfig::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.serving.LogCollectorConfig)
  size_t total_size = 0;

  // string type = 1;
  if (this->type().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->type());
  }

  // string filename_prefix = 2;
  if (this->filename_prefix().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->filename_prefix());
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void LogCollectorConfig::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.serving.LogCollectorConfig)
  GOOGLE_DCHECK_NE(&from, this);
  const LogCollectorConfig* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const LogCollectorConfig>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.serving.LogCollectorConfig)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.serving.LogCollectorConfig)
    MergeFrom(*source);
  }
}

void LogCollectorConfig::MergeFrom(const LogCollectorConfig& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.serving.LogCollectorConfig)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.type().size() > 0) {
    set_type(from.type());
  }
  if (from.filename_prefix().size() > 0) {
    set_filename_prefix(from.filename_prefix());
  }
}

void LogCollectorConfig::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.serving.LogCollectorConfig)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void LogCollectorConfig::CopyFrom(const LogCollectorConfig& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.serving.LogCollectorConfig)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool LogCollectorConfig::IsInitialized() const {
  return true;
}

void LogCollectorConfig::Swap(LogCollectorConfig* other) {
  if (other == this) return;
  if (GetArenaNoVirtual() == other->GetArenaNoVirtual()) {
    InternalSwap(other);
  } else {
    LogCollectorConfig* temp = New(GetArenaNoVirtual());
    temp->MergeFrom(*other);
    other->CopyFrom(*this);
    InternalSwap(temp);
    if (GetArenaNoVirtual() == NULL) {
      delete temp;
    }
  }
}
void LogCollectorConfig::UnsafeArenaSwap(LogCollectorConfig* other) {
  if (other == this) return;
  GOOGLE_DCHECK(GetArenaNoVirtual() == other->GetArenaNoVirtual());
  InternalSwap(other);
}
void LogCollectorConfig::InternalSwap(LogCollectorConfig* other) {
  type_.Swap(&other->type_);
  filename_prefix_.Swap(&other->filename_prefix_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata LogCollectorConfig::GetMetadata() const {
  protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto::file_level_metadata[0];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// LogCollectorConfig

// string type = 1;
void LogCollectorConfig::clear_type() {
  type_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
const ::std::string& LogCollectorConfig::type() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.LogCollectorConfig.type)
  return type_.Get();
}
void LogCollectorConfig::set_type(const ::std::string& value) {
  
  type_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set:tensorflow.serving.LogCollectorConfig.type)
}
void LogCollectorConfig::set_type(const char* value) {
  
  type_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.LogCollectorConfig.type)
}
void LogCollectorConfig::set_type(const char* value,
    size_t size) {
  
  type_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.LogCollectorConfig.type)
}
::std::string* LogCollectorConfig::mutable_type() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.LogCollectorConfig.type)
  return type_.Mutable(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
::std::string* LogCollectorConfig::release_type() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.LogCollectorConfig.type)
  
  return type_.Release(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
::std::string* LogCollectorConfig::unsafe_arena_release_type() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.LogCollectorConfig.type)
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  
  return type_.UnsafeArenaRelease(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
void LogCollectorConfig::set_allocated_type(::std::string* type) {
  if (type != NULL) {
    
  } else {
    
  }
  type_.SetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), type,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.LogCollectorConfig.type)
}
void LogCollectorConfig::unsafe_arena_set_allocated_type(
    ::std::string* type) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  if (type != NULL) {
    
  } else {
    
  }
  type_.UnsafeArenaSetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      type, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.LogCollectorConfig.type)
}

// string filename_prefix = 2;
void LogCollectorConfig::clear_filename_prefix() {
  filename_prefix_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
const ::std::string& LogCollectorConfig::filename_prefix() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.LogCollectorConfig.filename_prefix)
  return filename_prefix_.Get();
}
void LogCollectorConfig::set_filename_prefix(const ::std::string& value) {
  
  filename_prefix_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set:tensorflow.serving.LogCollectorConfig.filename_prefix)
}
void LogCollectorConfig::set_filename_prefix(const char* value) {
  
  filename_prefix_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.LogCollectorConfig.filename_prefix)
}
void LogCollectorConfig::set_filename_prefix(const char* value,
    size_t size) {
  
  filename_prefix_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.LogCollectorConfig.filename_prefix)
}
::std::string* LogCollectorConfig::mutable_filename_prefix() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.LogCollectorConfig.filename_prefix)
  return filename_prefix_.Mutable(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
::std::string* LogCollectorConfig::release_filename_prefix() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.LogCollectorConfig.filename_prefix)
  
  return filename_prefix_.Release(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
::std::string* LogCollectorConfig::unsafe_arena_release_filename_prefix() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.LogCollectorConfig.filename_prefix)
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  
  return filename_prefix_.UnsafeArenaRelease(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
void LogCollectorConfig::set_allocated_filename_prefix(::std::string* filename_prefix) {
  if (filename_prefix != NULL) {
    
  } else {
    
  }
  filename_prefix_.SetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), filename_prefix,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.LogCollectorConfig.filename_prefix)
}
void LogCollectorConfig::unsafe_arena_set_allocated_filename_prefix(
    ::std::string* filename_prefix) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  if (filename_prefix != NULL) {
    
  } else {
    
  }
  filename_prefix_.UnsafeArenaSetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      filename_prefix, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.LogCollectorConfig.filename_prefix)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)