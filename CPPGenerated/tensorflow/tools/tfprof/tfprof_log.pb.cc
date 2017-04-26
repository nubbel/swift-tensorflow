// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/tools/tfprof/tfprof_log.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "tensorflow/tools/tfprof/tfprof_log.pb.h"

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
namespace tfprof {
class OpLogEntryDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<OpLogEntry> {
} _OpLogEntry_default_instance_;
class OpLogDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<OpLog> {
} _OpLog_default_instance_;

namespace protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[2];

}  // namespace

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(OpLogEntry, _has_bits_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(OpLogEntry, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(OpLogEntry, name_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(OpLogEntry, float_ops_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(OpLogEntry, types_),
  0,
  1,
  ~0u,
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(OpLog, _has_bits_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(OpLog, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(OpLog, log_entries_),
  ~0u,
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, 7, sizeof(OpLogEntry)},
  { 10, 15, sizeof(OpLog)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_OpLogEntry_default_instance_),
  reinterpret_cast<const ::google::protobuf::Message*>(&_OpLog_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "tensorflow/tools/tfprof/tfprof_log.proto", schemas, file_default_instances, TableStruct::offsets, factory,
      file_level_metadata, NULL, NULL);
}

void protobuf_AssignDescriptorsOnce() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &protobuf_AssignDescriptors);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::internal::RegisterAllTypes(file_level_metadata, 2);
}

}  // namespace

void TableStruct::Shutdown() {
  _OpLogEntry_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
  _OpLog_default_instance_.Shutdown();
  delete file_level_metadata[1].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  _OpLogEntry_default_instance_.DefaultConstruct();
  _OpLog_default_instance_.DefaultConstruct();
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\n(tensorflow/tools/tfprof/tfprof_log.pro"
      "to\022\021tensorflow.tfprof\"<\n\nOpLogEntry\022\014\n\004n"
      "ame\030\001 \001(\t\022\021\n\tfloat_ops\030\002 \001(\003\022\r\n\005types\030\003 "
      "\003(\t\";\n\005OpLog\0222\n\013log_entries\030\001 \003(\0132\035.tens"
      "orflow.tfprof.OpLogEntry"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 184);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "tensorflow/tools/tfprof/tfprof_log.proto", &protobuf_RegisterTypes);
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

}  // namespace protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto


// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int OpLogEntry::kNameFieldNumber;
const int OpLogEntry::kFloatOpsFieldNumber;
const int OpLogEntry::kTypesFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

OpLogEntry::OpLogEntry()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.tfprof.OpLogEntry)
}
OpLogEntry::OpLogEntry(const OpLogEntry& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _has_bits_(from._has_bits_),
      _cached_size_(0),
      types_(from.types_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  name_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.has_name()) {
    name_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.name_);
  }
  float_ops_ = from.float_ops_;
  // @@protoc_insertion_point(copy_constructor:tensorflow.tfprof.OpLogEntry)
}

void OpLogEntry::SharedCtor() {
  _cached_size_ = 0;
  name_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  float_ops_ = GOOGLE_LONGLONG(0);
}

OpLogEntry::~OpLogEntry() {
  // @@protoc_insertion_point(destructor:tensorflow.tfprof.OpLogEntry)
  SharedDtor();
}

void OpLogEntry::SharedDtor() {
  name_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}

void OpLogEntry::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* OpLogEntry::descriptor() {
  protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::file_level_metadata[0].descriptor;
}

const OpLogEntry& OpLogEntry::default_instance() {
  protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::InitDefaults();
  return *internal_default_instance();
}

OpLogEntry* OpLogEntry::New(::google::protobuf::Arena* arena) const {
  OpLogEntry* n = new OpLogEntry;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void OpLogEntry::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.tfprof.OpLogEntry)
  types_.Clear();
  if (has_name()) {
    GOOGLE_DCHECK(!name_.IsDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited()));
    (*name_.UnsafeRawStringPointer())->clear();
  }
  float_ops_ = GOOGLE_LONGLONG(0);
  _has_bits_.Clear();
  _internal_metadata_.Clear();
}

bool OpLogEntry::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.tfprof.OpLogEntry)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // optional string name = 1;
      case 1: {
        if (tag == 10u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_name()));
          ::google::protobuf::internal::WireFormat::VerifyUTF8StringNamedField(
            this->name().data(), this->name().length(),
            ::google::protobuf::internal::WireFormat::PARSE,
            "tensorflow.tfprof.OpLogEntry.name");
        } else {
          goto handle_unusual;
        }
        break;
      }

      // optional int64 float_ops = 2;
      case 2: {
        if (tag == 16u) {
          set_has_float_ops();
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::int64, ::google::protobuf::internal::WireFormatLite::TYPE_INT64>(
                 input, &float_ops_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // repeated string types = 3;
      case 3: {
        if (tag == 26u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->add_types()));
          ::google::protobuf::internal::WireFormat::VerifyUTF8StringNamedField(
            this->types(this->types_size() - 1).data(),
            this->types(this->types_size() - 1).length(),
            ::google::protobuf::internal::WireFormat::PARSE,
            "tensorflow.tfprof.OpLogEntry.types");
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
        DO_(::google::protobuf::internal::WireFormat::SkipField(
              input, tag, mutable_unknown_fields()));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:tensorflow.tfprof.OpLogEntry)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.tfprof.OpLogEntry)
  return false;
#undef DO_
}

void OpLogEntry::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.tfprof.OpLogEntry)
  // optional string name = 1;
  if (has_name()) {
    ::google::protobuf::internal::WireFormat::VerifyUTF8StringNamedField(
      this->name().data(), this->name().length(),
      ::google::protobuf::internal::WireFormat::SERIALIZE,
      "tensorflow.tfprof.OpLogEntry.name");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      1, this->name(), output);
  }

  // optional int64 float_ops = 2;
  if (has_float_ops()) {
    ::google::protobuf::internal::WireFormatLite::WriteInt64(2, this->float_ops(), output);
  }

  // repeated string types = 3;
  for (int i = 0; i < this->types_size(); i++) {
    ::google::protobuf::internal::WireFormat::VerifyUTF8StringNamedField(
      this->types(i).data(), this->types(i).length(),
      ::google::protobuf::internal::WireFormat::SERIALIZE,
      "tensorflow.tfprof.OpLogEntry.types");
    ::google::protobuf::internal::WireFormatLite::WriteString(
      3, this->types(i), output);
  }

  if (_internal_metadata_.have_unknown_fields()) {
    ::google::protobuf::internal::WireFormat::SerializeUnknownFields(
        unknown_fields(), output);
  }
  // @@protoc_insertion_point(serialize_end:tensorflow.tfprof.OpLogEntry)
}

::google::protobuf::uint8* OpLogEntry::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.tfprof.OpLogEntry)
  // optional string name = 1;
  if (has_name()) {
    ::google::protobuf::internal::WireFormat::VerifyUTF8StringNamedField(
      this->name().data(), this->name().length(),
      ::google::protobuf::internal::WireFormat::SERIALIZE,
      "tensorflow.tfprof.OpLogEntry.name");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        1, this->name(), target);
  }

  // optional int64 float_ops = 2;
  if (has_float_ops()) {
    target = ::google::protobuf::internal::WireFormatLite::WriteInt64ToArray(2, this->float_ops(), target);
  }

  // repeated string types = 3;
  for (int i = 0; i < this->types_size(); i++) {
    ::google::protobuf::internal::WireFormat::VerifyUTF8StringNamedField(
      this->types(i).data(), this->types(i).length(),
      ::google::protobuf::internal::WireFormat::SERIALIZE,
      "tensorflow.tfprof.OpLogEntry.types");
    target = ::google::protobuf::internal::WireFormatLite::
      WriteStringToArray(3, this->types(i), target);
  }

  if (_internal_metadata_.have_unknown_fields()) {
    target = ::google::protobuf::internal::WireFormat::SerializeUnknownFieldsToArray(
        unknown_fields(), target);
  }
  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.tfprof.OpLogEntry)
  return target;
}

size_t OpLogEntry::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.tfprof.OpLogEntry)
  size_t total_size = 0;

  if (_internal_metadata_.have_unknown_fields()) {
    total_size +=
      ::google::protobuf::internal::WireFormat::ComputeUnknownFieldsSize(
        unknown_fields());
  }
  // repeated string types = 3;
  total_size += 1 *
      ::google::protobuf::internal::FromIntSize(this->types_size());
  for (int i = 0; i < this->types_size(); i++) {
    total_size += ::google::protobuf::internal::WireFormatLite::StringSize(
      this->types(i));
  }

  if (_has_bits_[0 / 32] & 3u) {
    // optional string name = 1;
    if (has_name()) {
      total_size += 1 +
        ::google::protobuf::internal::WireFormatLite::StringSize(
          this->name());
    }

    // optional int64 float_ops = 2;
    if (has_float_ops()) {
      total_size += 1 +
        ::google::protobuf::internal::WireFormatLite::Int64Size(
          this->float_ops());
    }

  }
  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void OpLogEntry::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.tfprof.OpLogEntry)
  GOOGLE_DCHECK_NE(&from, this);
  const OpLogEntry* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const OpLogEntry>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.tfprof.OpLogEntry)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.tfprof.OpLogEntry)
    MergeFrom(*source);
  }
}

void OpLogEntry::MergeFrom(const OpLogEntry& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.tfprof.OpLogEntry)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  types_.MergeFrom(from.types_);
  if (from._has_bits_[0 / 32] & 3u) {
    if (from.has_name()) {
      set_has_name();
      name_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.name_);
    }
    if (from.has_float_ops()) {
      set_float_ops(from.float_ops());
    }
  }
}

void OpLogEntry::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.tfprof.OpLogEntry)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void OpLogEntry::CopyFrom(const OpLogEntry& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.tfprof.OpLogEntry)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool OpLogEntry::IsInitialized() const {
  return true;
}

void OpLogEntry::Swap(OpLogEntry* other) {
  if (other == this) return;
  InternalSwap(other);
}
void OpLogEntry::InternalSwap(OpLogEntry* other) {
  types_.UnsafeArenaSwap(&other->types_);
  name_.Swap(&other->name_);
  std::swap(float_ops_, other->float_ops_);
  std::swap(_has_bits_[0], other->_has_bits_[0]);
  _internal_metadata_.Swap(&other->_internal_metadata_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata OpLogEntry::GetMetadata() const {
  protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::file_level_metadata[0];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// OpLogEntry

// optional string name = 1;
bool OpLogEntry::has_name() const {
  return (_has_bits_[0] & 0x00000001u) != 0;
}
void OpLogEntry::set_has_name() {
  _has_bits_[0] |= 0x00000001u;
}
void OpLogEntry::clear_has_name() {
  _has_bits_[0] &= ~0x00000001u;
}
void OpLogEntry::clear_name() {
  name_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  clear_has_name();
}
const ::std::string& OpLogEntry::name() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfprof.OpLogEntry.name)
  return name_.GetNoArena();
}
void OpLogEntry::set_name(const ::std::string& value) {
  set_has_name();
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:tensorflow.tfprof.OpLogEntry.name)
}
#if LANG_CXX11
void OpLogEntry::set_name(::std::string&& value) {
  set_has_name();
  name_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:tensorflow.tfprof.OpLogEntry.name)
}
#endif
void OpLogEntry::set_name(const char* value) {
  set_has_name();
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:tensorflow.tfprof.OpLogEntry.name)
}
void OpLogEntry::set_name(const char* value, size_t size) {
  set_has_name();
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:tensorflow.tfprof.OpLogEntry.name)
}
::std::string* OpLogEntry::mutable_name() {
  set_has_name();
  // @@protoc_insertion_point(field_mutable:tensorflow.tfprof.OpLogEntry.name)
  return name_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
::std::string* OpLogEntry::release_name() {
  // @@protoc_insertion_point(field_release:tensorflow.tfprof.OpLogEntry.name)
  clear_has_name();
  return name_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
void OpLogEntry::set_allocated_name(::std::string* name) {
  if (name != NULL) {
    set_has_name();
  } else {
    clear_has_name();
  }
  name_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), name);
  // @@protoc_insertion_point(field_set_allocated:tensorflow.tfprof.OpLogEntry.name)
}

// optional int64 float_ops = 2;
bool OpLogEntry::has_float_ops() const {
  return (_has_bits_[0] & 0x00000002u) != 0;
}
void OpLogEntry::set_has_float_ops() {
  _has_bits_[0] |= 0x00000002u;
}
void OpLogEntry::clear_has_float_ops() {
  _has_bits_[0] &= ~0x00000002u;
}
void OpLogEntry::clear_float_ops() {
  float_ops_ = GOOGLE_LONGLONG(0);
  clear_has_float_ops();
}
::google::protobuf::int64 OpLogEntry::float_ops() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfprof.OpLogEntry.float_ops)
  return float_ops_;
}
void OpLogEntry::set_float_ops(::google::protobuf::int64 value) {
  set_has_float_ops();
  float_ops_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.tfprof.OpLogEntry.float_ops)
}

// repeated string types = 3;
int OpLogEntry::types_size() const {
  return types_.size();
}
void OpLogEntry::clear_types() {
  types_.Clear();
}
const ::std::string& OpLogEntry::types(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.tfprof.OpLogEntry.types)
  return types_.Get(index);
}
::std::string* OpLogEntry::mutable_types(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.tfprof.OpLogEntry.types)
  return types_.Mutable(index);
}
void OpLogEntry::set_types(int index, const ::std::string& value) {
  // @@protoc_insertion_point(field_set:tensorflow.tfprof.OpLogEntry.types)
  types_.Mutable(index)->assign(value);
}
void OpLogEntry::set_types(int index, const char* value) {
  types_.Mutable(index)->assign(value);
  // @@protoc_insertion_point(field_set_char:tensorflow.tfprof.OpLogEntry.types)
}
void OpLogEntry::set_types(int index, const char* value, size_t size) {
  types_.Mutable(index)->assign(
    reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_set_pointer:tensorflow.tfprof.OpLogEntry.types)
}
::std::string* OpLogEntry::add_types() {
  // @@protoc_insertion_point(field_add_mutable:tensorflow.tfprof.OpLogEntry.types)
  return types_.Add();
}
void OpLogEntry::add_types(const ::std::string& value) {
  types_.Add()->assign(value);
  // @@protoc_insertion_point(field_add:tensorflow.tfprof.OpLogEntry.types)
}
void OpLogEntry::add_types(const char* value) {
  types_.Add()->assign(value);
  // @@protoc_insertion_point(field_add_char:tensorflow.tfprof.OpLogEntry.types)
}
void OpLogEntry::add_types(const char* value, size_t size) {
  types_.Add()->assign(reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_add_pointer:tensorflow.tfprof.OpLogEntry.types)
}
const ::google::protobuf::RepeatedPtrField< ::std::string>&
OpLogEntry::types() const {
  // @@protoc_insertion_point(field_list:tensorflow.tfprof.OpLogEntry.types)
  return types_;
}
::google::protobuf::RepeatedPtrField< ::std::string>*
OpLogEntry::mutable_types() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.tfprof.OpLogEntry.types)
  return &types_;
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int OpLog::kLogEntriesFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

OpLog::OpLog()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.tfprof.OpLog)
}
OpLog::OpLog(const OpLog& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _has_bits_(from._has_bits_),
      _cached_size_(0),
      log_entries_(from.log_entries_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  // @@protoc_insertion_point(copy_constructor:tensorflow.tfprof.OpLog)
}

void OpLog::SharedCtor() {
  _cached_size_ = 0;
}

OpLog::~OpLog() {
  // @@protoc_insertion_point(destructor:tensorflow.tfprof.OpLog)
  SharedDtor();
}

void OpLog::SharedDtor() {
}

void OpLog::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* OpLog::descriptor() {
  protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::file_level_metadata[1].descriptor;
}

const OpLog& OpLog::default_instance() {
  protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::InitDefaults();
  return *internal_default_instance();
}

OpLog* OpLog::New(::google::protobuf::Arena* arena) const {
  OpLog* n = new OpLog;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void OpLog::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.tfprof.OpLog)
  log_entries_.Clear();
  _has_bits_.Clear();
  _internal_metadata_.Clear();
}

bool OpLog::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.tfprof.OpLog)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // repeated .tensorflow.tfprof.OpLogEntry log_entries = 1;
      case 1: {
        if (tag == 10u) {
          DO_(input->IncrementRecursionDepth());
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtualNoRecursionDepth(
                input, add_log_entries()));
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
        DO_(::google::protobuf::internal::WireFormat::SkipField(
              input, tag, mutable_unknown_fields()));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:tensorflow.tfprof.OpLog)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.tfprof.OpLog)
  return false;
#undef DO_
}

void OpLog::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.tfprof.OpLog)
  // repeated .tensorflow.tfprof.OpLogEntry log_entries = 1;
  for (unsigned int i = 0, n = this->log_entries_size(); i < n; i++) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      1, this->log_entries(i), output);
  }

  if (_internal_metadata_.have_unknown_fields()) {
    ::google::protobuf::internal::WireFormat::SerializeUnknownFields(
        unknown_fields(), output);
  }
  // @@protoc_insertion_point(serialize_end:tensorflow.tfprof.OpLog)
}

::google::protobuf::uint8* OpLog::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.tfprof.OpLog)
  // repeated .tensorflow.tfprof.OpLogEntry log_entries = 1;
  for (unsigned int i = 0, n = this->log_entries_size(); i < n; i++) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        1, this->log_entries(i), false, target);
  }

  if (_internal_metadata_.have_unknown_fields()) {
    target = ::google::protobuf::internal::WireFormat::SerializeUnknownFieldsToArray(
        unknown_fields(), target);
  }
  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.tfprof.OpLog)
  return target;
}

size_t OpLog::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.tfprof.OpLog)
  size_t total_size = 0;

  if (_internal_metadata_.have_unknown_fields()) {
    total_size +=
      ::google::protobuf::internal::WireFormat::ComputeUnknownFieldsSize(
        unknown_fields());
  }
  // repeated .tensorflow.tfprof.OpLogEntry log_entries = 1;
  {
    unsigned int count = this->log_entries_size();
    total_size += 1UL * count;
    for (unsigned int i = 0; i < count; i++) {
      total_size +=
        ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
          this->log_entries(i));
    }
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void OpLog::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.tfprof.OpLog)
  GOOGLE_DCHECK_NE(&from, this);
  const OpLog* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const OpLog>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.tfprof.OpLog)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.tfprof.OpLog)
    MergeFrom(*source);
  }
}

void OpLog::MergeFrom(const OpLog& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.tfprof.OpLog)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  log_entries_.MergeFrom(from.log_entries_);
}

void OpLog::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.tfprof.OpLog)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void OpLog::CopyFrom(const OpLog& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.tfprof.OpLog)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool OpLog::IsInitialized() const {
  return true;
}

void OpLog::Swap(OpLog* other) {
  if (other == this) return;
  InternalSwap(other);
}
void OpLog::InternalSwap(OpLog* other) {
  log_entries_.UnsafeArenaSwap(&other->log_entries_);
  std::swap(_has_bits_[0], other->_has_bits_[0]);
  _internal_metadata_.Swap(&other->_internal_metadata_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata OpLog::GetMetadata() const {
  protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::file_level_metadata[1];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// OpLog

// repeated .tensorflow.tfprof.OpLogEntry log_entries = 1;
int OpLog::log_entries_size() const {
  return log_entries_.size();
}
void OpLog::clear_log_entries() {
  log_entries_.Clear();
}
const ::tensorflow::tfprof::OpLogEntry& OpLog::log_entries(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.tfprof.OpLog.log_entries)
  return log_entries_.Get(index);
}
::tensorflow::tfprof::OpLogEntry* OpLog::mutable_log_entries(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.tfprof.OpLog.log_entries)
  return log_entries_.Mutable(index);
}
::tensorflow::tfprof::OpLogEntry* OpLog::add_log_entries() {
  // @@protoc_insertion_point(field_add:tensorflow.tfprof.OpLog.log_entries)
  return log_entries_.Add();
}
::google::protobuf::RepeatedPtrField< ::tensorflow::tfprof::OpLogEntry >*
OpLog::mutable_log_entries() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.tfprof.OpLog.log_entries)
  return &log_entries_;
}
const ::google::protobuf::RepeatedPtrField< ::tensorflow::tfprof::OpLogEntry >&
OpLog::log_entries() const {
  // @@protoc_insertion_point(field_list:tensorflow.tfprof.OpLog.log_entries)
  return log_entries_;
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace tfprof
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)
