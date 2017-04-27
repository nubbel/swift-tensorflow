// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/debug/debug_service.proto

#ifndef PROTOBUF_tensorflow_2fcore_2fdebug_2fdebug_5fservice_2eproto__INCLUDED
#define PROTOBUF_tensorflow_2fcore_2fdebug_2fdebug_5fservice_2eproto__INCLUDED

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
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/generated_enum_reflection.h>
#include <google/protobuf/unknown_field_set.h>
#include "tensorflow/core/util/event.pb.h"
// @@protoc_insertion_point(includes)
namespace tensorflow {
class Event;
class EventDefaultTypeInternal;
extern EventDefaultTypeInternal _Event_default_instance_;
class EventReply;
class EventReplyDefaultTypeInternal;
extern EventReplyDefaultTypeInternal _EventReply_default_instance_;
class EventReply_DebugOpStateChange;
class EventReply_DebugOpStateChangeDefaultTypeInternal;
extern EventReply_DebugOpStateChangeDefaultTypeInternal _EventReply_DebugOpStateChange_default_instance_;
class LogMessage;
class LogMessageDefaultTypeInternal;
extern LogMessageDefaultTypeInternal _LogMessage_default_instance_;
class SessionLog;
class SessionLogDefaultTypeInternal;
extern SessionLogDefaultTypeInternal _SessionLog_default_instance_;
class TaggedRunMetadata;
class TaggedRunMetadataDefaultTypeInternal;
extern TaggedRunMetadataDefaultTypeInternal _TaggedRunMetadata_default_instance_;
}  // namespace tensorflow

namespace tensorflow {

namespace protobuf_tensorflow_2fcore_2fdebug_2fdebug_5fservice_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_2fcore_2fdebug_2fdebug_5fservice_2eproto

enum EventReply_DebugOpStateChange_Change {
  EventReply_DebugOpStateChange_Change_DISABLE = 0,
  EventReply_DebugOpStateChange_Change_ENABLE = 1,
  EventReply_DebugOpStateChange_Change_EventReply_DebugOpStateChange_Change_INT_MIN_SENTINEL_DO_NOT_USE_ = ::google::protobuf::kint32min,
  EventReply_DebugOpStateChange_Change_EventReply_DebugOpStateChange_Change_INT_MAX_SENTINEL_DO_NOT_USE_ = ::google::protobuf::kint32max
};
bool EventReply_DebugOpStateChange_Change_IsValid(int value);
const EventReply_DebugOpStateChange_Change EventReply_DebugOpStateChange_Change_Change_MIN = EventReply_DebugOpStateChange_Change_DISABLE;
const EventReply_DebugOpStateChange_Change EventReply_DebugOpStateChange_Change_Change_MAX = EventReply_DebugOpStateChange_Change_ENABLE;
const int EventReply_DebugOpStateChange_Change_Change_ARRAYSIZE = EventReply_DebugOpStateChange_Change_Change_MAX + 1;

const ::google::protobuf::EnumDescriptor* EventReply_DebugOpStateChange_Change_descriptor();
inline const ::std::string& EventReply_DebugOpStateChange_Change_Name(EventReply_DebugOpStateChange_Change value) {
  return ::google::protobuf::internal::NameOfEnum(
    EventReply_DebugOpStateChange_Change_descriptor(), value);
}
inline bool EventReply_DebugOpStateChange_Change_Parse(
    const ::std::string& name, EventReply_DebugOpStateChange_Change* value) {
  return ::google::protobuf::internal::ParseNamedEnum<EventReply_DebugOpStateChange_Change>(
    EventReply_DebugOpStateChange_Change_descriptor(), name, value);
}
// ===================================================================

class EventReply_DebugOpStateChange : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.EventReply.DebugOpStateChange) */ {
 public:
  EventReply_DebugOpStateChange();
  virtual ~EventReply_DebugOpStateChange();

  EventReply_DebugOpStateChange(const EventReply_DebugOpStateChange& from);

  inline EventReply_DebugOpStateChange& operator=(const EventReply_DebugOpStateChange& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const EventReply_DebugOpStateChange& default_instance();

  static inline const EventReply_DebugOpStateChange* internal_default_instance() {
    return reinterpret_cast<const EventReply_DebugOpStateChange*>(
               &_EventReply_DebugOpStateChange_default_instance_);
  }

  void Swap(EventReply_DebugOpStateChange* other);

  // implements Message ----------------------------------------------

  inline EventReply_DebugOpStateChange* New() const PROTOBUF_FINAL { return New(NULL); }

  EventReply_DebugOpStateChange* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const EventReply_DebugOpStateChange& from);
  void MergeFrom(const EventReply_DebugOpStateChange& from);
  void Clear() PROTOBUF_FINAL;
  bool IsInitialized() const PROTOBUF_FINAL;

  size_t ByteSizeLong() const PROTOBUF_FINAL;
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) PROTOBUF_FINAL;
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const PROTOBUF_FINAL;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      bool deterministic, ::google::protobuf::uint8* target) const PROTOBUF_FINAL;
  ::google::protobuf::uint8* SerializeWithCachedSizesToArray(::google::protobuf::uint8* output)
      const PROTOBUF_FINAL {
    return InternalSerializeWithCachedSizesToArray(
        ::google::protobuf::io::CodedOutputStream::IsDefaultSerializationDeterministic(), output);
  }
  int GetCachedSize() const PROTOBUF_FINAL { return _cached_size_; }
  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const PROTOBUF_FINAL;
  void InternalSwap(EventReply_DebugOpStateChange* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return NULL;
  }
  inline void* MaybeArenaPtr() const {
    return NULL;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const PROTOBUF_FINAL;

  // nested types ----------------------------------------------------

  typedef EventReply_DebugOpStateChange_Change Change;
  static const Change DISABLE =
    EventReply_DebugOpStateChange_Change_DISABLE;
  static const Change ENABLE =
    EventReply_DebugOpStateChange_Change_ENABLE;
  static inline bool Change_IsValid(int value) {
    return EventReply_DebugOpStateChange_Change_IsValid(value);
  }
  static const Change Change_MIN =
    EventReply_DebugOpStateChange_Change_Change_MIN;
  static const Change Change_MAX =
    EventReply_DebugOpStateChange_Change_Change_MAX;
  static const int Change_ARRAYSIZE =
    EventReply_DebugOpStateChange_Change_Change_ARRAYSIZE;
  static inline const ::google::protobuf::EnumDescriptor*
  Change_descriptor() {
    return EventReply_DebugOpStateChange_Change_descriptor();
  }
  static inline const ::std::string& Change_Name(Change value) {
    return EventReply_DebugOpStateChange_Change_Name(value);
  }
  static inline bool Change_Parse(const ::std::string& name,
      Change* value) {
    return EventReply_DebugOpStateChange_Change_Parse(name, value);
  }

  // accessors -------------------------------------------------------

  // string node_name = 2;
  void clear_node_name();
  static const int kNodeNameFieldNumber = 2;
  const ::std::string& node_name() const;
  void set_node_name(const ::std::string& value);
  #if LANG_CXX11
  void set_node_name(::std::string&& value);
  #endif
  void set_node_name(const char* value);
  void set_node_name(const char* value, size_t size);
  ::std::string* mutable_node_name();
  ::std::string* release_node_name();
  void set_allocated_node_name(::std::string* node_name);

  // string debug_op = 4;
  void clear_debug_op();
  static const int kDebugOpFieldNumber = 4;
  const ::std::string& debug_op() const;
  void set_debug_op(const ::std::string& value);
  #if LANG_CXX11
  void set_debug_op(::std::string&& value);
  #endif
  void set_debug_op(const char* value);
  void set_debug_op(const char* value, size_t size);
  ::std::string* mutable_debug_op();
  ::std::string* release_debug_op();
  void set_allocated_debug_op(::std::string* debug_op);

  // .tensorflow.EventReply.DebugOpStateChange.Change change = 1;
  void clear_change();
  static const int kChangeFieldNumber = 1;
  ::tensorflow::EventReply_DebugOpStateChange_Change change() const;
  void set_change(::tensorflow::EventReply_DebugOpStateChange_Change value);

  // int32 output_slot = 3;
  void clear_output_slot();
  static const int kOutputSlotFieldNumber = 3;
  ::google::protobuf::int32 output_slot() const;
  void set_output_slot(::google::protobuf::int32 value);

  // @@protoc_insertion_point(class_scope:tensorflow.EventReply.DebugOpStateChange)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr node_name_;
  ::google::protobuf::internal::ArenaStringPtr debug_op_;
  int change_;
  ::google::protobuf::int32 output_slot_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_2fcore_2fdebug_2fdebug_5fservice_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class EventReply : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.EventReply) */ {
 public:
  EventReply();
  virtual ~EventReply();

  EventReply(const EventReply& from);

  inline EventReply& operator=(const EventReply& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const EventReply& default_instance();

  static inline const EventReply* internal_default_instance() {
    return reinterpret_cast<const EventReply*>(
               &_EventReply_default_instance_);
  }

  void Swap(EventReply* other);

  // implements Message ----------------------------------------------

  inline EventReply* New() const PROTOBUF_FINAL { return New(NULL); }

  EventReply* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const EventReply& from);
  void MergeFrom(const EventReply& from);
  void Clear() PROTOBUF_FINAL;
  bool IsInitialized() const PROTOBUF_FINAL;

  size_t ByteSizeLong() const PROTOBUF_FINAL;
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) PROTOBUF_FINAL;
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const PROTOBUF_FINAL;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      bool deterministic, ::google::protobuf::uint8* target) const PROTOBUF_FINAL;
  ::google::protobuf::uint8* SerializeWithCachedSizesToArray(::google::protobuf::uint8* output)
      const PROTOBUF_FINAL {
    return InternalSerializeWithCachedSizesToArray(
        ::google::protobuf::io::CodedOutputStream::IsDefaultSerializationDeterministic(), output);
  }
  int GetCachedSize() const PROTOBUF_FINAL { return _cached_size_; }
  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const PROTOBUF_FINAL;
  void InternalSwap(EventReply* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return NULL;
  }
  inline void* MaybeArenaPtr() const {
    return NULL;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const PROTOBUF_FINAL;

  // nested types ----------------------------------------------------

  typedef EventReply_DebugOpStateChange DebugOpStateChange;

  // accessors -------------------------------------------------------

  // repeated .tensorflow.EventReply.DebugOpStateChange debug_op_state_changes = 1;
  int debug_op_state_changes_size() const;
  void clear_debug_op_state_changes();
  static const int kDebugOpStateChangesFieldNumber = 1;
  const ::tensorflow::EventReply_DebugOpStateChange& debug_op_state_changes(int index) const;
  ::tensorflow::EventReply_DebugOpStateChange* mutable_debug_op_state_changes(int index);
  ::tensorflow::EventReply_DebugOpStateChange* add_debug_op_state_changes();
  ::google::protobuf::RepeatedPtrField< ::tensorflow::EventReply_DebugOpStateChange >*
      mutable_debug_op_state_changes();
  const ::google::protobuf::RepeatedPtrField< ::tensorflow::EventReply_DebugOpStateChange >&
      debug_op_state_changes() const;

  // @@protoc_insertion_point(class_scope:tensorflow.EventReply)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::RepeatedPtrField< ::tensorflow::EventReply_DebugOpStateChange > debug_op_state_changes_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_2fcore_2fdebug_2fdebug_5fservice_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// EventReply_DebugOpStateChange

// .tensorflow.EventReply.DebugOpStateChange.Change change = 1;
inline void EventReply_DebugOpStateChange::clear_change() {
  change_ = 0;
}
inline ::tensorflow::EventReply_DebugOpStateChange_Change EventReply_DebugOpStateChange::change() const {
  // @@protoc_insertion_point(field_get:tensorflow.EventReply.DebugOpStateChange.change)
  return static_cast< ::tensorflow::EventReply_DebugOpStateChange_Change >(change_);
}
inline void EventReply_DebugOpStateChange::set_change(::tensorflow::EventReply_DebugOpStateChange_Change value) {
  
  change_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.EventReply.DebugOpStateChange.change)
}

// string node_name = 2;
inline void EventReply_DebugOpStateChange::clear_node_name() {
  node_name_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& EventReply_DebugOpStateChange::node_name() const {
  // @@protoc_insertion_point(field_get:tensorflow.EventReply.DebugOpStateChange.node_name)
  return node_name_.GetNoArena();
}
inline void EventReply_DebugOpStateChange::set_node_name(const ::std::string& value) {
  
  node_name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:tensorflow.EventReply.DebugOpStateChange.node_name)
}
#if LANG_CXX11
inline void EventReply_DebugOpStateChange::set_node_name(::std::string&& value) {
  
  node_name_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:tensorflow.EventReply.DebugOpStateChange.node_name)
}
#endif
inline void EventReply_DebugOpStateChange::set_node_name(const char* value) {
  
  node_name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:tensorflow.EventReply.DebugOpStateChange.node_name)
}
inline void EventReply_DebugOpStateChange::set_node_name(const char* value, size_t size) {
  
  node_name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:tensorflow.EventReply.DebugOpStateChange.node_name)
}
inline ::std::string* EventReply_DebugOpStateChange::mutable_node_name() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.EventReply.DebugOpStateChange.node_name)
  return node_name_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* EventReply_DebugOpStateChange::release_node_name() {
  // @@protoc_insertion_point(field_release:tensorflow.EventReply.DebugOpStateChange.node_name)
  
  return node_name_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void EventReply_DebugOpStateChange::set_allocated_node_name(::std::string* node_name) {
  if (node_name != NULL) {
    
  } else {
    
  }
  node_name_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), node_name);
  // @@protoc_insertion_point(field_set_allocated:tensorflow.EventReply.DebugOpStateChange.node_name)
}

// int32 output_slot = 3;
inline void EventReply_DebugOpStateChange::clear_output_slot() {
  output_slot_ = 0;
}
inline ::google::protobuf::int32 EventReply_DebugOpStateChange::output_slot() const {
  // @@protoc_insertion_point(field_get:tensorflow.EventReply.DebugOpStateChange.output_slot)
  return output_slot_;
}
inline void EventReply_DebugOpStateChange::set_output_slot(::google::protobuf::int32 value) {
  
  output_slot_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.EventReply.DebugOpStateChange.output_slot)
}

// string debug_op = 4;
inline void EventReply_DebugOpStateChange::clear_debug_op() {
  debug_op_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& EventReply_DebugOpStateChange::debug_op() const {
  // @@protoc_insertion_point(field_get:tensorflow.EventReply.DebugOpStateChange.debug_op)
  return debug_op_.GetNoArena();
}
inline void EventReply_DebugOpStateChange::set_debug_op(const ::std::string& value) {
  
  debug_op_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:tensorflow.EventReply.DebugOpStateChange.debug_op)
}
#if LANG_CXX11
inline void EventReply_DebugOpStateChange::set_debug_op(::std::string&& value) {
  
  debug_op_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:tensorflow.EventReply.DebugOpStateChange.debug_op)
}
#endif
inline void EventReply_DebugOpStateChange::set_debug_op(const char* value) {
  
  debug_op_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:tensorflow.EventReply.DebugOpStateChange.debug_op)
}
inline void EventReply_DebugOpStateChange::set_debug_op(const char* value, size_t size) {
  
  debug_op_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:tensorflow.EventReply.DebugOpStateChange.debug_op)
}
inline ::std::string* EventReply_DebugOpStateChange::mutable_debug_op() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.EventReply.DebugOpStateChange.debug_op)
  return debug_op_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* EventReply_DebugOpStateChange::release_debug_op() {
  // @@protoc_insertion_point(field_release:tensorflow.EventReply.DebugOpStateChange.debug_op)
  
  return debug_op_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void EventReply_DebugOpStateChange::set_allocated_debug_op(::std::string* debug_op) {
  if (debug_op != NULL) {
    
  } else {
    
  }
  debug_op_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), debug_op);
  // @@protoc_insertion_point(field_set_allocated:tensorflow.EventReply.DebugOpStateChange.debug_op)
}

// -------------------------------------------------------------------

// EventReply

// repeated .tensorflow.EventReply.DebugOpStateChange debug_op_state_changes = 1;
inline int EventReply::debug_op_state_changes_size() const {
  return debug_op_state_changes_.size();
}
inline void EventReply::clear_debug_op_state_changes() {
  debug_op_state_changes_.Clear();
}
inline const ::tensorflow::EventReply_DebugOpStateChange& EventReply::debug_op_state_changes(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.EventReply.debug_op_state_changes)
  return debug_op_state_changes_.Get(index);
}
inline ::tensorflow::EventReply_DebugOpStateChange* EventReply::mutable_debug_op_state_changes(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.EventReply.debug_op_state_changes)
  return debug_op_state_changes_.Mutable(index);
}
inline ::tensorflow::EventReply_DebugOpStateChange* EventReply::add_debug_op_state_changes() {
  // @@protoc_insertion_point(field_add:tensorflow.EventReply.debug_op_state_changes)
  return debug_op_state_changes_.Add();
}
inline ::google::protobuf::RepeatedPtrField< ::tensorflow::EventReply_DebugOpStateChange >*
EventReply::mutable_debug_op_state_changes() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.EventReply.debug_op_state_changes)
  return &debug_op_state_changes_;
}
inline const ::google::protobuf::RepeatedPtrField< ::tensorflow::EventReply_DebugOpStateChange >&
EventReply::debug_op_state_changes() const {
  // @@protoc_insertion_point(field_list:tensorflow.EventReply.debug_op_state_changes)
  return debug_op_state_changes_;
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)


}  // namespace tensorflow

#ifndef SWIG
namespace google {
namespace protobuf {

template <> struct is_proto_enum< ::tensorflow::EventReply_DebugOpStateChange_Change> : ::google::protobuf::internal::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::tensorflow::EventReply_DebugOpStateChange_Change>() {
  return ::tensorflow::EventReply_DebugOpStateChange_Change_descriptor();
}

}  // namespace protobuf
}  // namespace google
#endif  // SWIG

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_2fcore_2fdebug_2fdebug_5fservice_2eproto__INCLUDED