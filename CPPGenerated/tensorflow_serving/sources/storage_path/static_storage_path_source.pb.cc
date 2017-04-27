// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/sources/storage_path/static_storage_path_source.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "tensorflow_serving/sources/storage_path/static_storage_path_source.pb.h"

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
class StaticStoragePathSourceConfigDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<StaticStoragePathSourceConfig> {
} _StaticStoragePathSourceConfig_default_instance_;

namespace protobuf_tensorflow_5fserving_2fsources_2fstorage_5fpath_2fstatic_5fstorage_5fpath_5fsource_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[1];

}  // namespace

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(StaticStoragePathSourceConfig, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(StaticStoragePathSourceConfig, servable_name_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(StaticStoragePathSourceConfig, version_num_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(StaticStoragePathSourceConfig, version_path_),
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, -1, sizeof(StaticStoragePathSourceConfig)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_StaticStoragePathSourceConfig_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "tensorflow_serving/sources/storage_path/static_storage_path_source.proto", schemas, file_default_instances, TableStruct::offsets, factory,
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
  _StaticStoragePathSourceConfig_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  _StaticStoragePathSourceConfig_default_instance_.DefaultConstruct();
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\nHtensorflow_serving/sources/storage_pat"
      "h/static_storage_path_source.proto\022\022tens"
      "orflow.serving\"a\n\035StaticStoragePathSourc"
      "eConfig\022\025\n\rservable_name\030\001 \001(\t\022\023\n\013versio"
      "n_num\030\002 \001(\003\022\024\n\014version_path\030\003 \001(\tb\006proto"
      "3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 201);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "tensorflow_serving/sources/storage_path/static_storage_path_source.proto", &protobuf_RegisterTypes);
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

}  // namespace protobuf_tensorflow_5fserving_2fsources_2fstorage_5fpath_2fstatic_5fstorage_5fpath_5fsource_2eproto


// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int StaticStoragePathSourceConfig::kServableNameFieldNumber;
const int StaticStoragePathSourceConfig::kVersionNumFieldNumber;
const int StaticStoragePathSourceConfig::kVersionPathFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

StaticStoragePathSourceConfig::StaticStoragePathSourceConfig()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_5fserving_2fsources_2fstorage_5fpath_2fstatic_5fstorage_5fpath_5fsource_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.serving.StaticStoragePathSourceConfig)
}
StaticStoragePathSourceConfig::StaticStoragePathSourceConfig(const StaticStoragePathSourceConfig& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  servable_name_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.servable_name().size() > 0) {
    servable_name_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.servable_name_);
  }
  version_path_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.version_path().size() > 0) {
    version_path_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.version_path_);
  }
  version_num_ = from.version_num_;
  // @@protoc_insertion_point(copy_constructor:tensorflow.serving.StaticStoragePathSourceConfig)
}

void StaticStoragePathSourceConfig::SharedCtor() {
  servable_name_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  version_path_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  version_num_ = GOOGLE_LONGLONG(0);
  _cached_size_ = 0;
}

StaticStoragePathSourceConfig::~StaticStoragePathSourceConfig() {
  // @@protoc_insertion_point(destructor:tensorflow.serving.StaticStoragePathSourceConfig)
  SharedDtor();
}

void StaticStoragePathSourceConfig::SharedDtor() {
  servable_name_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  version_path_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}

void StaticStoragePathSourceConfig::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* StaticStoragePathSourceConfig::descriptor() {
  protobuf_tensorflow_5fserving_2fsources_2fstorage_5fpath_2fstatic_5fstorage_5fpath_5fsource_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fsources_2fstorage_5fpath_2fstatic_5fstorage_5fpath_5fsource_2eproto::file_level_metadata[0].descriptor;
}

const StaticStoragePathSourceConfig& StaticStoragePathSourceConfig::default_instance() {
  protobuf_tensorflow_5fserving_2fsources_2fstorage_5fpath_2fstatic_5fstorage_5fpath_5fsource_2eproto::InitDefaults();
  return *internal_default_instance();
}

StaticStoragePathSourceConfig* StaticStoragePathSourceConfig::New(::google::protobuf::Arena* arena) const {
  StaticStoragePathSourceConfig* n = new StaticStoragePathSourceConfig;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void StaticStoragePathSourceConfig::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.serving.StaticStoragePathSourceConfig)
  servable_name_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  version_path_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  version_num_ = GOOGLE_LONGLONG(0);
}

bool StaticStoragePathSourceConfig::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.serving.StaticStoragePathSourceConfig)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // string servable_name = 1;
      case 1: {
        if (tag == 10u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_servable_name()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->servable_name().data(), this->servable_name().length(),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "tensorflow.serving.StaticStoragePathSourceConfig.servable_name"));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // int64 version_num = 2;
      case 2: {
        if (tag == 16u) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::int64, ::google::protobuf::internal::WireFormatLite::TYPE_INT64>(
                 input, &version_num_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // string version_path = 3;
      case 3: {
        if (tag == 26u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_version_path()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->version_path().data(), this->version_path().length(),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "tensorflow.serving.StaticStoragePathSourceConfig.version_path"));
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
  // @@protoc_insertion_point(parse_success:tensorflow.serving.StaticStoragePathSourceConfig)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.serving.StaticStoragePathSourceConfig)
  return false;
#undef DO_
}

void StaticStoragePathSourceConfig::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.serving.StaticStoragePathSourceConfig)
  // string servable_name = 1;
  if (this->servable_name().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->servable_name().data(), this->servable_name().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.StaticStoragePathSourceConfig.servable_name");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      1, this->servable_name(), output);
  }

  // int64 version_num = 2;
  if (this->version_num() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteInt64(2, this->version_num(), output);
  }

  // string version_path = 3;
  if (this->version_path().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->version_path().data(), this->version_path().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.StaticStoragePathSourceConfig.version_path");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      3, this->version_path(), output);
  }

  // @@protoc_insertion_point(serialize_end:tensorflow.serving.StaticStoragePathSourceConfig)
}

::google::protobuf::uint8* StaticStoragePathSourceConfig::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.serving.StaticStoragePathSourceConfig)
  // string servable_name = 1;
  if (this->servable_name().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->servable_name().data(), this->servable_name().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.StaticStoragePathSourceConfig.servable_name");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        1, this->servable_name(), target);
  }

  // int64 version_num = 2;
  if (this->version_num() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteInt64ToArray(2, this->version_num(), target);
  }

  // string version_path = 3;
  if (this->version_path().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->version_path().data(), this->version_path().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.StaticStoragePathSourceConfig.version_path");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        3, this->version_path(), target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.serving.StaticStoragePathSourceConfig)
  return target;
}

size_t StaticStoragePathSourceConfig::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.serving.StaticStoragePathSourceConfig)
  size_t total_size = 0;

  // string servable_name = 1;
  if (this->servable_name().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->servable_name());
  }

  // string version_path = 3;
  if (this->version_path().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->version_path());
  }

  // int64 version_num = 2;
  if (this->version_num() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::Int64Size(
        this->version_num());
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void StaticStoragePathSourceConfig::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.serving.StaticStoragePathSourceConfig)
  GOOGLE_DCHECK_NE(&from, this);
  const StaticStoragePathSourceConfig* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const StaticStoragePathSourceConfig>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.serving.StaticStoragePathSourceConfig)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.serving.StaticStoragePathSourceConfig)
    MergeFrom(*source);
  }
}

void StaticStoragePathSourceConfig::MergeFrom(const StaticStoragePathSourceConfig& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.serving.StaticStoragePathSourceConfig)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.servable_name().size() > 0) {

    servable_name_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.servable_name_);
  }
  if (from.version_path().size() > 0) {

    version_path_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.version_path_);
  }
  if (from.version_num() != 0) {
    set_version_num(from.version_num());
  }
}

void StaticStoragePathSourceConfig::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.serving.StaticStoragePathSourceConfig)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void StaticStoragePathSourceConfig::CopyFrom(const StaticStoragePathSourceConfig& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.serving.StaticStoragePathSourceConfig)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool StaticStoragePathSourceConfig::IsInitialized() const {
  return true;
}

void StaticStoragePathSourceConfig::Swap(StaticStoragePathSourceConfig* other) {
  if (other == this) return;
  InternalSwap(other);
}
void StaticStoragePathSourceConfig::InternalSwap(StaticStoragePathSourceConfig* other) {
  servable_name_.Swap(&other->servable_name_);
  version_path_.Swap(&other->version_path_);
  std::swap(version_num_, other->version_num_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata StaticStoragePathSourceConfig::GetMetadata() const {
  protobuf_tensorflow_5fserving_2fsources_2fstorage_5fpath_2fstatic_5fstorage_5fpath_5fsource_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fsources_2fstorage_5fpath_2fstatic_5fstorage_5fpath_5fsource_2eproto::file_level_metadata[0];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// StaticStoragePathSourceConfig

// string servable_name = 1;
void StaticStoragePathSourceConfig::clear_servable_name() {
  servable_name_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
const ::std::string& StaticStoragePathSourceConfig::servable_name() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.StaticStoragePathSourceConfig.servable_name)
  return servable_name_.GetNoArena();
}
void StaticStoragePathSourceConfig::set_servable_name(const ::std::string& value) {
  
  servable_name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:tensorflow.serving.StaticStoragePathSourceConfig.servable_name)
}
#if LANG_CXX11
void StaticStoragePathSourceConfig::set_servable_name(::std::string&& value) {
  
  servable_name_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:tensorflow.serving.StaticStoragePathSourceConfig.servable_name)
}
#endif
void StaticStoragePathSourceConfig::set_servable_name(const char* value) {
  
  servable_name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.StaticStoragePathSourceConfig.servable_name)
}
void StaticStoragePathSourceConfig::set_servable_name(const char* value, size_t size) {
  
  servable_name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.StaticStoragePathSourceConfig.servable_name)
}
::std::string* StaticStoragePathSourceConfig::mutable_servable_name() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.StaticStoragePathSourceConfig.servable_name)
  return servable_name_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
::std::string* StaticStoragePathSourceConfig::release_servable_name() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.StaticStoragePathSourceConfig.servable_name)
  
  return servable_name_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
void StaticStoragePathSourceConfig::set_allocated_servable_name(::std::string* servable_name) {
  if (servable_name != NULL) {
    
  } else {
    
  }
  servable_name_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), servable_name);
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.StaticStoragePathSourceConfig.servable_name)
}

// int64 version_num = 2;
void StaticStoragePathSourceConfig::clear_version_num() {
  version_num_ = GOOGLE_LONGLONG(0);
}
::google::protobuf::int64 StaticStoragePathSourceConfig::version_num() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.StaticStoragePathSourceConfig.version_num)
  return version_num_;
}
void StaticStoragePathSourceConfig::set_version_num(::google::protobuf::int64 value) {
  
  version_num_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.serving.StaticStoragePathSourceConfig.version_num)
}

// string version_path = 3;
void StaticStoragePathSourceConfig::clear_version_path() {
  version_path_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
const ::std::string& StaticStoragePathSourceConfig::version_path() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.StaticStoragePathSourceConfig.version_path)
  return version_path_.GetNoArena();
}
void StaticStoragePathSourceConfig::set_version_path(const ::std::string& value) {
  
  version_path_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:tensorflow.serving.StaticStoragePathSourceConfig.version_path)
}
#if LANG_CXX11
void StaticStoragePathSourceConfig::set_version_path(::std::string&& value) {
  
  version_path_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:tensorflow.serving.StaticStoragePathSourceConfig.version_path)
}
#endif
void StaticStoragePathSourceConfig::set_version_path(const char* value) {
  
  version_path_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.StaticStoragePathSourceConfig.version_path)
}
void StaticStoragePathSourceConfig::set_version_path(const char* value, size_t size) {
  
  version_path_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.StaticStoragePathSourceConfig.version_path)
}
::std::string* StaticStoragePathSourceConfig::mutable_version_path() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.StaticStoragePathSourceConfig.version_path)
  return version_path_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
::std::string* StaticStoragePathSourceConfig::release_version_path() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.StaticStoragePathSourceConfig.version_path)
  
  return version_path_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
void StaticStoragePathSourceConfig::set_allocated_version_path(::std::string* version_path) {
  if (version_path != NULL) {
    
  } else {
    
  }
  version_path_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), version_path);
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.StaticStoragePathSourceConfig.version_path)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)