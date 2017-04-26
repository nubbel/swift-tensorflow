// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/apis/model.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "tensorflow_serving/apis/model.pb.h"

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
class ModelSpecDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<ModelSpec> {
} _ModelSpec_default_instance_;

namespace protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[1];

}  // namespace

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(ModelSpec, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(ModelSpec, name_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(ModelSpec, version_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(ModelSpec, signature_name_),
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, -1, sizeof(ModelSpec)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_ModelSpec_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "tensorflow_serving/apis/model.proto", schemas, file_default_instances, TableStruct::offsets, factory,
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
  _ModelSpec_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  ::google::protobuf::protobuf_google_2fprotobuf_2fwrappers_2eproto::InitDefaults();
  _ModelSpec_default_instance_.DefaultConstruct();
  _ModelSpec_default_instance_.get_mutable()->version_ = const_cast< ::google::protobuf::Int64Value*>(
      ::google::protobuf::Int64Value::internal_default_instance());
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\n#tensorflow_serving/apis/model.proto\022\022t"
      "ensorflow.serving\032\036google/protobuf/wrapp"
      "ers.proto\"_\n\tModelSpec\022\014\n\004name\030\001 \001(\t\022,\n\007"
      "version\030\002 \001(\0132\033.google.protobuf.Int64Val"
      "ue\022\026\n\016signature_name\030\003 \001(\tB\003\370\001\001b\006proto3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 199);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "tensorflow_serving/apis/model.proto", &protobuf_RegisterTypes);
  ::google::protobuf::protobuf_google_2fprotobuf_2fwrappers_2eproto::AddDescriptors();
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

}  // namespace protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto


// ===================================================================

void ModelSpec::_slow_mutable_version() {
  version_ = ::google::protobuf::Arena::CreateMessage< ::google::protobuf::Int64Value >(
      GetArenaNoVirtual());
}
::google::protobuf::Int64Value* ModelSpec::_slow_release_version() {
  if (version_ == NULL) {
    return NULL;
  } else {
    ::google::protobuf::Int64Value* temp = new ::google::protobuf::Int64Value(*version_);
    version_ = NULL;
    return temp;
  }
}
::google::protobuf::Int64Value* ModelSpec::unsafe_arena_release_version() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.ModelSpec.version)
  
  ::google::protobuf::Int64Value* temp = version_;
  version_ = NULL;
  return temp;
}
void ModelSpec::_slow_set_allocated_version(
    ::google::protobuf::Arena* message_arena, ::google::protobuf::Int64Value** version) {
    if (message_arena != NULL && 
        ::google::protobuf::Arena::GetArena(*version) == NULL) {
      message_arena->Own(*version);
    } else if (message_arena !=
               ::google::protobuf::Arena::GetArena(*version)) {
      ::google::protobuf::Int64Value* new_version = 
            ::google::protobuf::Arena::CreateMessage< ::google::protobuf::Int64Value >(
            message_arena);
      new_version->CopyFrom(**version);
      *version = new_version;
    }
}
void ModelSpec::unsafe_arena_set_allocated_version(
    ::google::protobuf::Int64Value* version) {
  if (GetArenaNoVirtual() == NULL) {
    delete version_;
  }
  version_ = version;
  if (version) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.ModelSpec.version)
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int ModelSpec::kNameFieldNumber;
const int ModelSpec::kVersionFieldNumber;
const int ModelSpec::kSignatureNameFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

ModelSpec::ModelSpec()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.serving.ModelSpec)
}
ModelSpec::ModelSpec(::google::protobuf::Arena* arena)
  : ::google::protobuf::Message(),
  _internal_metadata_(arena) {
#ifdef GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto::InitDefaults();
#endif  // GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:tensorflow.serving.ModelSpec)
}
ModelSpec::ModelSpec(const ModelSpec& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  name_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.name().size() > 0) {
    name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.name(),
      GetArenaNoVirtual());
  }
  signature_name_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.signature_name().size() > 0) {
    signature_name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.signature_name(),
      GetArenaNoVirtual());
  }
  if (from.has_version()) {
    version_ = new ::google::protobuf::Int64Value(*from.version_);
  } else {
    version_ = NULL;
  }
  // @@protoc_insertion_point(copy_constructor:tensorflow.serving.ModelSpec)
}

void ModelSpec::SharedCtor() {
  name_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  signature_name_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  version_ = NULL;
  _cached_size_ = 0;
}

ModelSpec::~ModelSpec() {
  // @@protoc_insertion_point(destructor:tensorflow.serving.ModelSpec)
  SharedDtor();
}

void ModelSpec::SharedDtor() {
  ::google::protobuf::Arena* arena = GetArenaNoVirtual();
  if (arena != NULL) {
    return;
  }

  name_.Destroy(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), arena);
  signature_name_.Destroy(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), arena);
  if (this != internal_default_instance()) {
    delete version_;
  }
}

void ModelSpec::ArenaDtor(void* object) {
  ModelSpec* _this = reinterpret_cast< ModelSpec* >(object);
  (void)_this;
}
void ModelSpec::RegisterArenaDtor(::google::protobuf::Arena* arena) {
}
void ModelSpec::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* ModelSpec::descriptor() {
  protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto::file_level_metadata[0].descriptor;
}

const ModelSpec& ModelSpec::default_instance() {
  protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto::InitDefaults();
  return *internal_default_instance();
}

ModelSpec* ModelSpec::New(::google::protobuf::Arena* arena) const {
  return ::google::protobuf::Arena::CreateMessage<ModelSpec>(arena);
}

void ModelSpec::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.serving.ModelSpec)
  name_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
  signature_name_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
  if (GetArenaNoVirtual() == NULL && version_ != NULL) {
    delete version_;
  }
  version_ = NULL;
}

bool ModelSpec::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.serving.ModelSpec)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // string name = 1;
      case 1: {
        if (tag == 10u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_name()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->name().data(), this->name().length(),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "tensorflow.serving.ModelSpec.name"));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // .google.protobuf.Int64Value version = 2;
      case 2: {
        if (tag == 18u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_version()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // string signature_name = 3;
      case 3: {
        if (tag == 26u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_signature_name()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->signature_name().data(), this->signature_name().length(),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "tensorflow.serving.ModelSpec.signature_name"));
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
  // @@protoc_insertion_point(parse_success:tensorflow.serving.ModelSpec)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.serving.ModelSpec)
  return false;
#undef DO_
}

void ModelSpec::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.serving.ModelSpec)
  // string name = 1;
  if (this->name().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->name().data(), this->name().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.ModelSpec.name");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      1, this->name(), output);
  }

  // .google.protobuf.Int64Value version = 2;
  if (this->has_version()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      2, *this->version_, output);
  }

  // string signature_name = 3;
  if (this->signature_name().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->signature_name().data(), this->signature_name().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.ModelSpec.signature_name");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      3, this->signature_name(), output);
  }

  // @@protoc_insertion_point(serialize_end:tensorflow.serving.ModelSpec)
}

::google::protobuf::uint8* ModelSpec::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.serving.ModelSpec)
  // string name = 1;
  if (this->name().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->name().data(), this->name().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.ModelSpec.name");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        1, this->name(), target);
  }

  // .google.protobuf.Int64Value version = 2;
  if (this->has_version()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        2, *this->version_, false, target);
  }

  // string signature_name = 3;
  if (this->signature_name().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->signature_name().data(), this->signature_name().length(),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "tensorflow.serving.ModelSpec.signature_name");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        3, this->signature_name(), target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.serving.ModelSpec)
  return target;
}

size_t ModelSpec::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.serving.ModelSpec)
  size_t total_size = 0;

  // string name = 1;
  if (this->name().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->name());
  }

  // string signature_name = 3;
  if (this->signature_name().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->signature_name());
  }

  // .google.protobuf.Int64Value version = 2;
  if (this->has_version()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        *this->version_);
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void ModelSpec::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.serving.ModelSpec)
  GOOGLE_DCHECK_NE(&from, this);
  const ModelSpec* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const ModelSpec>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.serving.ModelSpec)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.serving.ModelSpec)
    MergeFrom(*source);
  }
}

void ModelSpec::MergeFrom(const ModelSpec& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.serving.ModelSpec)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.name().size() > 0) {
    set_name(from.name());
  }
  if (from.signature_name().size() > 0) {
    set_signature_name(from.signature_name());
  }
  if (from.has_version()) {
    mutable_version()->::google::protobuf::Int64Value::MergeFrom(from.version());
  }
}

void ModelSpec::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.serving.ModelSpec)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void ModelSpec::CopyFrom(const ModelSpec& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.serving.ModelSpec)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool ModelSpec::IsInitialized() const {
  return true;
}

void ModelSpec::Swap(ModelSpec* other) {
  if (other == this) return;
  if (GetArenaNoVirtual() == other->GetArenaNoVirtual()) {
    InternalSwap(other);
  } else {
    ModelSpec* temp = New(GetArenaNoVirtual());
    temp->MergeFrom(*other);
    other->CopyFrom(*this);
    InternalSwap(temp);
    if (GetArenaNoVirtual() == NULL) {
      delete temp;
    }
  }
}
void ModelSpec::UnsafeArenaSwap(ModelSpec* other) {
  if (other == this) return;
  GOOGLE_DCHECK(GetArenaNoVirtual() == other->GetArenaNoVirtual());
  InternalSwap(other);
}
void ModelSpec::InternalSwap(ModelSpec* other) {
  name_.Swap(&other->name_);
  signature_name_.Swap(&other->signature_name_);
  std::swap(version_, other->version_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata ModelSpec::GetMetadata() const {
  protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_5fserving_2fapis_2fmodel_2eproto::file_level_metadata[0];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// ModelSpec

// string name = 1;
void ModelSpec::clear_name() {
  name_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
const ::std::string& ModelSpec::name() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.ModelSpec.name)
  return name_.Get();
}
void ModelSpec::set_name(const ::std::string& value) {
  
  name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set:tensorflow.serving.ModelSpec.name)
}
void ModelSpec::set_name(const char* value) {
  
  name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.ModelSpec.name)
}
void ModelSpec::set_name(const char* value,
    size_t size) {
  
  name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.ModelSpec.name)
}
::std::string* ModelSpec::mutable_name() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.ModelSpec.name)
  return name_.Mutable(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
::std::string* ModelSpec::release_name() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.ModelSpec.name)
  
  return name_.Release(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
::std::string* ModelSpec::unsafe_arena_release_name() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.ModelSpec.name)
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  
  return name_.UnsafeArenaRelease(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
void ModelSpec::set_allocated_name(::std::string* name) {
  if (name != NULL) {
    
  } else {
    
  }
  name_.SetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), name,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.ModelSpec.name)
}
void ModelSpec::unsafe_arena_set_allocated_name(
    ::std::string* name) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  if (name != NULL) {
    
  } else {
    
  }
  name_.UnsafeArenaSetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      name, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.ModelSpec.name)
}

// .google.protobuf.Int64Value version = 2;
bool ModelSpec::has_version() const {
  return this != internal_default_instance() && version_ != NULL;
}
void ModelSpec::clear_version() {
  if (GetArenaNoVirtual() == NULL && version_ != NULL) delete version_;
  version_ = NULL;
}
const ::google::protobuf::Int64Value& ModelSpec::version() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.ModelSpec.version)
  return version_ != NULL ? *version_
                         : *::google::protobuf::Int64Value::internal_default_instance();
}
::google::protobuf::Int64Value* ModelSpec::mutable_version() {
  
  if (version_ == NULL) {
    _slow_mutable_version();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.ModelSpec.version)
  return version_;
}
::google::protobuf::Int64Value* ModelSpec::release_version() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.ModelSpec.version)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_version();
  } else {
    ::google::protobuf::Int64Value* temp = version_;
    version_ = NULL;
    return temp;
  }
}
 void ModelSpec::set_allocated_version(::google::protobuf::Int64Value* version) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete version_;
  }
  if (version != NULL) {
    _slow_set_allocated_version(message_arena, &version);
  }
  version_ = version;
  if (version) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.ModelSpec.version)
}

// string signature_name = 3;
void ModelSpec::clear_signature_name() {
  signature_name_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
const ::std::string& ModelSpec::signature_name() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.ModelSpec.signature_name)
  return signature_name_.Get();
}
void ModelSpec::set_signature_name(const ::std::string& value) {
  
  signature_name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set:tensorflow.serving.ModelSpec.signature_name)
}
void ModelSpec::set_signature_name(const char* value) {
  
  signature_name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.ModelSpec.signature_name)
}
void ModelSpec::set_signature_name(const char* value,
    size_t size) {
  
  signature_name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.ModelSpec.signature_name)
}
::std::string* ModelSpec::mutable_signature_name() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.ModelSpec.signature_name)
  return signature_name_.Mutable(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
::std::string* ModelSpec::release_signature_name() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.ModelSpec.signature_name)
  
  return signature_name_.Release(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
::std::string* ModelSpec::unsafe_arena_release_signature_name() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.ModelSpec.signature_name)
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  
  return signature_name_.UnsafeArenaRelease(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
void ModelSpec::set_allocated_signature_name(::std::string* signature_name) {
  if (signature_name != NULL) {
    
  } else {
    
  }
  signature_name_.SetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), signature_name,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.ModelSpec.signature_name)
}
void ModelSpec::unsafe_arena_set_allocated_signature_name(
    ::std::string* signature_name) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  if (signature_name != NULL) {
    
  } else {
    
  }
  signature_name_.UnsafeArenaSetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      signature_name, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.ModelSpec.signature_name)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)
