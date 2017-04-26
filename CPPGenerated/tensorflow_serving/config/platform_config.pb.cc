// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/config/platform_config.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "tensorflow_serving/config/platform_config.pb.h"

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
class PlatformConfigDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<PlatformConfig> {
} _PlatformConfig_default_instance_;
class PlatformConfigMapDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<PlatformConfigMap> {
} _PlatformConfigMap_default_instance_;

namespace protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[3];

}  // namespace

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(PlatformConfig, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(PlatformConfig, source_adapter_config_),
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(PlatformConfigMap, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(PlatformConfigMap, platform_configs_),
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, -1, sizeof(PlatformConfig)},
  { 5, -1, sizeof(PlatformConfigMap)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_PlatformConfig_default_instance_),
  reinterpret_cast<const ::google::protobuf::Message*>(&_PlatformConfigMap_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "tensorflow_serving/config/platform_config.proto", schemas, file_default_instances, TableStruct::offsets, factory,
      file_level_metadata, NULL, NULL);
}

void protobuf_AssignDescriptorsOnce() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &protobuf_AssignDescriptors);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::internal::RegisterAllTypes(file_level_metadata, 3);
  const ::google::protobuf::Descriptor* PlatformConfigMap_PlatformConfigsEntry_descriptor = protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::file_level_metadata[1].descriptor;
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedMessage(
        PlatformConfigMap_PlatformConfigsEntry_descriptor,
        ::google::protobuf::internal::MapEntry<
            ::std::string,
            ::tensorflow::serving::PlatformConfig,
            ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
            ::google::protobuf::internal::WireFormatLite::TYPE_MESSAGE,
            0>::CreateDefaultInstance(
                PlatformConfigMap_PlatformConfigsEntry_descriptor));
}

}  // namespace

void TableStruct::Shutdown() {
  _PlatformConfig_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
  _PlatformConfigMap_default_instance_.Shutdown();
  delete file_level_metadata[2].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  ::google::protobuf::protobuf_google_2fprotobuf_2fany_2eproto::InitDefaults();
  _PlatformConfig_default_instance_.DefaultConstruct();
  _PlatformConfigMap_default_instance_.DefaultConstruct();
  _PlatformConfig_default_instance_.get_mutable()->source_adapter_config_ = const_cast< ::google::protobuf::Any*>(
      ::google::protobuf::Any::internal_default_instance());
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\n/tensorflow_serving/config/platform_con"
      "fig.proto\022\022tensorflow.serving\032\031google/pr"
      "otobuf/any.proto\"E\n\016PlatformConfig\0223\n\025so"
      "urce_adapter_config\030\001 \001(\0132\024.google.proto"
      "buf.Any\"\305\001\n\021PlatformConfigMap\022T\n\020platfor"
      "m_configs\030\001 \003(\0132:.tensorflow.serving.Pla"
      "tformConfigMap.PlatformConfigsEntry\032Z\n\024P"
      "latformConfigsEntry\022\013\n\003key\030\001 \001(\t\0221\n\005valu"
      "e\030\002 \001(\0132\".tensorflow.serving.PlatformCon"
      "fig:\0028\001B\003\370\001\001b\006proto3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 380);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "tensorflow_serving/config/platform_config.proto", &protobuf_RegisterTypes);
  ::google::protobuf::protobuf_google_2fprotobuf_2fany_2eproto::AddDescriptors();
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

}  // namespace protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto


// ===================================================================

void PlatformConfig::_slow_mutable_source_adapter_config() {
  source_adapter_config_ = ::google::protobuf::Arena::Create< ::google::protobuf::Any >(
      GetArenaNoVirtual());
}
::google::protobuf::Any* PlatformConfig::_slow_release_source_adapter_config() {
  if (source_adapter_config_ == NULL) {
    return NULL;
  } else {
    ::google::protobuf::Any* temp = new ::google::protobuf::Any(*source_adapter_config_);
    source_adapter_config_ = NULL;
    return temp;
  }
}
::google::protobuf::Any* PlatformConfig::unsafe_arena_release_source_adapter_config() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.PlatformConfig.source_adapter_config)
  
  ::google::protobuf::Any* temp = source_adapter_config_;
  source_adapter_config_ = NULL;
  return temp;
}
void PlatformConfig::unsafe_arena_set_allocated_source_adapter_config(
    ::google::protobuf::Any* source_adapter_config) {
  if (GetArenaNoVirtual() == NULL) {
    delete source_adapter_config_;
  }
  source_adapter_config_ = source_adapter_config;
  if (source_adapter_config) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.PlatformConfig.source_adapter_config)
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int PlatformConfig::kSourceAdapterConfigFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

PlatformConfig::PlatformConfig()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.serving.PlatformConfig)
}
PlatformConfig::PlatformConfig(::google::protobuf::Arena* arena)
  : ::google::protobuf::Message(),
  _internal_metadata_(arena) {
#ifdef GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::InitDefaults();
#endif  // GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:tensorflow.serving.PlatformConfig)
}
PlatformConfig::PlatformConfig(const PlatformConfig& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.has_source_adapter_config()) {
    source_adapter_config_ = new ::google::protobuf::Any(*from.source_adapter_config_);
  } else {
    source_adapter_config_ = NULL;
  }
  // @@protoc_insertion_point(copy_constructor:tensorflow.serving.PlatformConfig)
}

void PlatformConfig::SharedCtor() {
  source_adapter_config_ = NULL;
  _cached_size_ = 0;
}

PlatformConfig::~PlatformConfig() {
  // @@protoc_insertion_point(destructor:tensorflow.serving.PlatformConfig)
  SharedDtor();
}

void PlatformConfig::SharedDtor() {
  ::google::protobuf::Arena* arena = GetArenaNoVirtual();
  if (arena != NULL) {
    return;
  }

  if (this != internal_default_instance()) {
    delete source_adapter_config_;
  }
}

void PlatformConfig::ArenaDtor(void* object) {
  PlatformConfig* _this = reinterpret_cast< PlatformConfig* >(object);
  (void)_this;
}
void PlatformConfig::RegisterArenaDtor(::google::protobuf::Arena* arena) {
}
void PlatformConfig::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* PlatformConfig::descriptor() {
  protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::file_level_metadata[0].descriptor;
}

const PlatformConfig& PlatformConfig::default_instance() {
  protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::InitDefaults();
  return *internal_default_instance();
}

PlatformConfig* PlatformConfig::New(::google::protobuf::Arena* arena) const {
  return ::google::protobuf::Arena::CreateMessage<PlatformConfig>(arena);
}

void PlatformConfig::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.serving.PlatformConfig)
  if (GetArenaNoVirtual() == NULL && source_adapter_config_ != NULL) {
    delete source_adapter_config_;
  }
  source_adapter_config_ = NULL;
}

bool PlatformConfig::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.serving.PlatformConfig)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // .google.protobuf.Any source_adapter_config = 1;
      case 1: {
        if (tag == 10u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_source_adapter_config()));
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
  // @@protoc_insertion_point(parse_success:tensorflow.serving.PlatformConfig)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.serving.PlatformConfig)
  return false;
#undef DO_
}

void PlatformConfig::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.serving.PlatformConfig)
  // .google.protobuf.Any source_adapter_config = 1;
  if (this->has_source_adapter_config()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      1, *this->source_adapter_config_, output);
  }

  // @@protoc_insertion_point(serialize_end:tensorflow.serving.PlatformConfig)
}

::google::protobuf::uint8* PlatformConfig::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.serving.PlatformConfig)
  // .google.protobuf.Any source_adapter_config = 1;
  if (this->has_source_adapter_config()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        1, *this->source_adapter_config_, false, target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.serving.PlatformConfig)
  return target;
}

size_t PlatformConfig::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.serving.PlatformConfig)
  size_t total_size = 0;

  // .google.protobuf.Any source_adapter_config = 1;
  if (this->has_source_adapter_config()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        *this->source_adapter_config_);
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void PlatformConfig::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.serving.PlatformConfig)
  GOOGLE_DCHECK_NE(&from, this);
  const PlatformConfig* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const PlatformConfig>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.serving.PlatformConfig)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.serving.PlatformConfig)
    MergeFrom(*source);
  }
}

void PlatformConfig::MergeFrom(const PlatformConfig& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.serving.PlatformConfig)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.has_source_adapter_config()) {
    mutable_source_adapter_config()->::google::protobuf::Any::MergeFrom(from.source_adapter_config());
  }
}

void PlatformConfig::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.serving.PlatformConfig)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void PlatformConfig::CopyFrom(const PlatformConfig& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.serving.PlatformConfig)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool PlatformConfig::IsInitialized() const {
  return true;
}

void PlatformConfig::Swap(PlatformConfig* other) {
  if (other == this) return;
  if (GetArenaNoVirtual() == other->GetArenaNoVirtual()) {
    InternalSwap(other);
  } else {
    PlatformConfig* temp = New(GetArenaNoVirtual());
    temp->MergeFrom(*other);
    other->CopyFrom(*this);
    InternalSwap(temp);
    if (GetArenaNoVirtual() == NULL) {
      delete temp;
    }
  }
}
void PlatformConfig::UnsafeArenaSwap(PlatformConfig* other) {
  if (other == this) return;
  GOOGLE_DCHECK(GetArenaNoVirtual() == other->GetArenaNoVirtual());
  InternalSwap(other);
}
void PlatformConfig::InternalSwap(PlatformConfig* other) {
  std::swap(source_adapter_config_, other->source_adapter_config_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata PlatformConfig::GetMetadata() const {
  protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::file_level_metadata[0];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// PlatformConfig

// .google.protobuf.Any source_adapter_config = 1;
bool PlatformConfig::has_source_adapter_config() const {
  return this != internal_default_instance() && source_adapter_config_ != NULL;
}
void PlatformConfig::clear_source_adapter_config() {
  if (GetArenaNoVirtual() == NULL && source_adapter_config_ != NULL) delete source_adapter_config_;
  source_adapter_config_ = NULL;
}
const ::google::protobuf::Any& PlatformConfig::source_adapter_config() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.PlatformConfig.source_adapter_config)
  return source_adapter_config_ != NULL ? *source_adapter_config_
                         : *::google::protobuf::Any::internal_default_instance();
}
::google::protobuf::Any* PlatformConfig::mutable_source_adapter_config() {
  
  if (source_adapter_config_ == NULL) {
    _slow_mutable_source_adapter_config();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.PlatformConfig.source_adapter_config)
  return source_adapter_config_;
}
::google::protobuf::Any* PlatformConfig::release_source_adapter_config() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.PlatformConfig.source_adapter_config)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_source_adapter_config();
  } else {
    ::google::protobuf::Any* temp = source_adapter_config_;
    source_adapter_config_ = NULL;
    return temp;
  }
}
 void PlatformConfig::set_allocated_source_adapter_config(::google::protobuf::Any* source_adapter_config) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete source_adapter_config_;
  }
  if (source_adapter_config != NULL) {
    if (message_arena != NULL) {
      message_arena->Own(source_adapter_config);
    }
  }
  source_adapter_config_ = source_adapter_config;
  if (source_adapter_config) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.PlatformConfig.source_adapter_config)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// ===================================================================

#if PROTOBUF_INLINE_NOT_IN_HEADERS
#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int PlatformConfigMap::kPlatformConfigsFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

PlatformConfigMap::PlatformConfigMap()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.serving.PlatformConfigMap)
}
PlatformConfigMap::PlatformConfigMap(::google::protobuf::Arena* arena)
  : ::google::protobuf::Message(),
  _internal_metadata_(arena),
  platform_configs_(arena) {
#ifdef GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::InitDefaults();
#endif  // GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:tensorflow.serving.PlatformConfigMap)
}
PlatformConfigMap::PlatformConfigMap(const PlatformConfigMap& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  const ::google::protobuf::Descriptor*& PlatformConfigMap_PlatformConfigsEntry_descriptor = protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::file_level_metadata[1].descriptor;
  platform_configs_.SetAssignDescriptorCallback(
      protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::protobuf_AssignDescriptorsOnce);
  platform_configs_.SetEntryDescriptor(
      &PlatformConfigMap_PlatformConfigsEntry_descriptor);
  platform_configs_.MergeFrom(from.platform_configs_);
  // @@protoc_insertion_point(copy_constructor:tensorflow.serving.PlatformConfigMap)
}

void PlatformConfigMap::SharedCtor() {
  const ::google::protobuf::Descriptor*& PlatformConfigMap_PlatformConfigsEntry_descriptor = protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::file_level_metadata[1].descriptor;
  platform_configs_.SetAssignDescriptorCallback(
      protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::protobuf_AssignDescriptorsOnce);
  platform_configs_.SetEntryDescriptor(
      &PlatformConfigMap_PlatformConfigsEntry_descriptor);
  _cached_size_ = 0;
}

PlatformConfigMap::~PlatformConfigMap() {
  // @@protoc_insertion_point(destructor:tensorflow.serving.PlatformConfigMap)
  SharedDtor();
}

void PlatformConfigMap::SharedDtor() {
  ::google::protobuf::Arena* arena = GetArenaNoVirtual();
  if (arena != NULL) {
    return;
  }

}

void PlatformConfigMap::ArenaDtor(void* object) {
  PlatformConfigMap* _this = reinterpret_cast< PlatformConfigMap* >(object);
  (void)_this;
}
void PlatformConfigMap::RegisterArenaDtor(::google::protobuf::Arena* arena) {
}
void PlatformConfigMap::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* PlatformConfigMap::descriptor() {
  protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::file_level_metadata[2].descriptor;
}

const PlatformConfigMap& PlatformConfigMap::default_instance() {
  protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::InitDefaults();
  return *internal_default_instance();
}

PlatformConfigMap* PlatformConfigMap::New(::google::protobuf::Arena* arena) const {
  return ::google::protobuf::Arena::CreateMessage<PlatformConfigMap>(arena);
}

void PlatformConfigMap::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.serving.PlatformConfigMap)
  platform_configs_.Clear();
}

bool PlatformConfigMap::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.serving.PlatformConfigMap)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // map<string, .tensorflow.serving.PlatformConfig> platform_configs = 1;
      case 1: {
        if (tag == 10u) {
          DO_(input->IncrementRecursionDepth());
          PlatformConfigMap_PlatformConfigsEntry::Parser< ::google::protobuf::internal::MapField<
              ::std::string, ::tensorflow::serving::PlatformConfig,
              ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
              ::google::protobuf::internal::WireFormatLite::TYPE_MESSAGE,
              0 >,
            ::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig > > parser(&platform_configs_);
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
              input, &parser));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            parser.key().data(), parser.key().length(),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "tensorflow.serving.PlatformConfigMap.PlatformConfigsEntry.key"));
        } else {
          goto handle_unusual;
        }
        input->UnsafeDecrementRecursionDepth();
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
  // @@protoc_insertion_point(parse_success:tensorflow.serving.PlatformConfigMap)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.serving.PlatformConfigMap)
  return false;
#undef DO_
}

void PlatformConfigMap::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.serving.PlatformConfigMap)
  // map<string, .tensorflow.serving.PlatformConfig> platform_configs = 1;
  if (!this->platform_configs().empty()) {
    typedef ::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >::const_pointer
        ConstPtr;
    typedef ConstPtr SortItem;
    typedef ::google::protobuf::internal::CompareByDerefFirst<SortItem> Less;
    struct Utf8Check {
      static void Check(ConstPtr p) {
        ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
          p->first.data(), p->first.length(),
          ::google::protobuf::internal::WireFormatLite::SERIALIZE,
          "tensorflow.serving.PlatformConfigMap.PlatformConfigsEntry.key");
      }
    };

    if (output->IsSerializationDeterministic() &&
        this->platform_configs().size() > 1) {
      ::google::protobuf::scoped_array<SortItem> items(
          new SortItem[this->platform_configs().size()]);
      typedef ::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >::size_type size_type;
      size_type n = 0;
      for (::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >::const_iterator
          it = this->platform_configs().begin();
          it != this->platform_configs().end(); ++it, ++n) {
        items[n] = SortItem(&*it);
      }
      ::std::sort(&items[0], &items[n], Less());
      ::google::protobuf::scoped_ptr<PlatformConfigMap_PlatformConfigsEntry> entry;
      for (size_type i = 0; i < n; i++) {
        entry.reset(platform_configs_.NewEntryWrapper(
            items[i]->first, items[i]->second));
        ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
            1, *entry, output);
        if (entry->GetArena() != NULL) {
          entry.release();
        }
        Utf8Check::Check(items[i]);
      }
    } else {
      ::google::protobuf::scoped_ptr<PlatformConfigMap_PlatformConfigsEntry> entry;
      for (::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >::const_iterator
          it = this->platform_configs().begin();
          it != this->platform_configs().end(); ++it) {
        entry.reset(platform_configs_.NewEntryWrapper(
            it->first, it->second));
        ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
            1, *entry, output);
        if (entry->GetArena() != NULL) {
          entry.release();
        }
        Utf8Check::Check(&*it);
      }
    }
  }

  // @@protoc_insertion_point(serialize_end:tensorflow.serving.PlatformConfigMap)
}

::google::protobuf::uint8* PlatformConfigMap::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.serving.PlatformConfigMap)
  // map<string, .tensorflow.serving.PlatformConfig> platform_configs = 1;
  if (!this->platform_configs().empty()) {
    typedef ::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >::const_pointer
        ConstPtr;
    typedef ConstPtr SortItem;
    typedef ::google::protobuf::internal::CompareByDerefFirst<SortItem> Less;
    struct Utf8Check {
      static void Check(ConstPtr p) {
        ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
          p->first.data(), p->first.length(),
          ::google::protobuf::internal::WireFormatLite::SERIALIZE,
          "tensorflow.serving.PlatformConfigMap.PlatformConfigsEntry.key");
      }
    };

    if (deterministic &&
        this->platform_configs().size() > 1) {
      ::google::protobuf::scoped_array<SortItem> items(
          new SortItem[this->platform_configs().size()]);
      typedef ::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >::size_type size_type;
      size_type n = 0;
      for (::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >::const_iterator
          it = this->platform_configs().begin();
          it != this->platform_configs().end(); ++it, ++n) {
        items[n] = SortItem(&*it);
      }
      ::std::sort(&items[0], &items[n], Less());
      ::google::protobuf::scoped_ptr<PlatformConfigMap_PlatformConfigsEntry> entry;
      for (size_type i = 0; i < n; i++) {
        entry.reset(platform_configs_.NewEntryWrapper(
            items[i]->first, items[i]->second));
        target = ::google::protobuf::internal::WireFormatLite::
                   InternalWriteMessageNoVirtualToArray(
                       1, *entry, deterministic, target);
;
        if (entry->GetArena() != NULL) {
          entry.release();
        }
        Utf8Check::Check(items[i]);
      }
    } else {
      ::google::protobuf::scoped_ptr<PlatformConfigMap_PlatformConfigsEntry> entry;
      for (::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >::const_iterator
          it = this->platform_configs().begin();
          it != this->platform_configs().end(); ++it) {
        entry.reset(platform_configs_.NewEntryWrapper(
            it->first, it->second));
        target = ::google::protobuf::internal::WireFormatLite::
                   InternalWriteMessageNoVirtualToArray(
                       1, *entry, deterministic, target);
;
        if (entry->GetArena() != NULL) {
          entry.release();
        }
        Utf8Check::Check(&*it);
      }
    }
  }

  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.serving.PlatformConfigMap)
  return target;
}

size_t PlatformConfigMap::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.serving.PlatformConfigMap)
  size_t total_size = 0;

  // map<string, .tensorflow.serving.PlatformConfig> platform_configs = 1;
  total_size += 1 *
      ::google::protobuf::internal::FromIntSize(this->platform_configs_size());
  {
    ::google::protobuf::scoped_ptr<PlatformConfigMap_PlatformConfigsEntry> entry;
    for (::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >::const_iterator
        it = this->platform_configs().begin();
        it != this->platform_configs().end(); ++it) {
      if (entry.get() != NULL && entry->GetArena() != NULL) {
        entry.release();
      }
      entry.reset(platform_configs_.NewEntryWrapper(it->first, it->second));
      total_size += ::google::protobuf::internal::WireFormatLite::
          MessageSizeNoVirtual(*entry);
    }
    if (entry.get() != NULL && entry->GetArena() != NULL) {
      entry.release();
    }
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void PlatformConfigMap::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.serving.PlatformConfigMap)
  GOOGLE_DCHECK_NE(&from, this);
  const PlatformConfigMap* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const PlatformConfigMap>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.serving.PlatformConfigMap)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.serving.PlatformConfigMap)
    MergeFrom(*source);
  }
}

void PlatformConfigMap::MergeFrom(const PlatformConfigMap& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.serving.PlatformConfigMap)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  platform_configs_.MergeFrom(from.platform_configs_);
}

void PlatformConfigMap::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.serving.PlatformConfigMap)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void PlatformConfigMap::CopyFrom(const PlatformConfigMap& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.serving.PlatformConfigMap)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool PlatformConfigMap::IsInitialized() const {
  return true;
}

void PlatformConfigMap::Swap(PlatformConfigMap* other) {
  if (other == this) return;
  if (GetArenaNoVirtual() == other->GetArenaNoVirtual()) {
    InternalSwap(other);
  } else {
    PlatformConfigMap* temp = New(GetArenaNoVirtual());
    temp->MergeFrom(*other);
    other->CopyFrom(*this);
    InternalSwap(temp);
    if (GetArenaNoVirtual() == NULL) {
      delete temp;
    }
  }
}
void PlatformConfigMap::UnsafeArenaSwap(PlatformConfigMap* other) {
  if (other == this) return;
  GOOGLE_DCHECK(GetArenaNoVirtual() == other->GetArenaNoVirtual());
  InternalSwap(other);
}
void PlatformConfigMap::InternalSwap(PlatformConfigMap* other) {
  platform_configs_.Swap(&other->platform_configs_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata PlatformConfigMap::GetMetadata() const {
  protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fconfig_2fplatform_5fconfig_2eproto::file_level_metadata[2];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// PlatformConfigMap

// map<string, .tensorflow.serving.PlatformConfig> platform_configs = 1;
int PlatformConfigMap::platform_configs_size() const {
  return platform_configs_.size();
}
void PlatformConfigMap::clear_platform_configs() {
  platform_configs_.Clear();
}
 const ::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >&
PlatformConfigMap::platform_configs() const {
  // @@protoc_insertion_point(field_map:tensorflow.serving.PlatformConfigMap.platform_configs)
  return platform_configs_.GetMap();
}
 ::google::protobuf::Map< ::std::string, ::tensorflow::serving::PlatformConfig >*
PlatformConfigMap::mutable_platform_configs() {
  // @@protoc_insertion_point(field_mutable_map:tensorflow.serving.PlatformConfigMap.platform_configs)
  return platform_configs_.MutableMap();
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)
