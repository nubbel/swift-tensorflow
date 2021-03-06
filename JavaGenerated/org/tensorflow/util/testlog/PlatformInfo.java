// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/util/test_log.proto

package org.tensorflow.util.testlog;

/**
 * Protobuf type {@code tensorflow.PlatformInfo}
 */
public  final class PlatformInfo extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tensorflow.PlatformInfo)
    PlatformInfoOrBuilder {
  // Use PlatformInfo.newBuilder() to construct.
  private PlatformInfo(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private PlatformInfo() {
    bits_ = "";
    linkage_ = "";
    machine_ = "";
    release_ = "";
    system_ = "";
    version_ = "";
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private PlatformInfo(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    int mutable_bitField0_ = 0;
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          default: {
            if (!input.skipField(tag)) {
              done = true;
            }
            break;
          }
          case 10: {
            java.lang.String s = input.readStringRequireUtf8();

            bits_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            linkage_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            machine_ = s;
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            release_ = s;
            break;
          }
          case 42: {
            java.lang.String s = input.readStringRequireUtf8();

            system_ = s;
            break;
          }
          case 50: {
            java.lang.String s = input.readStringRequireUtf8();

            version_ = s;
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_PlatformInfo_descriptor;
  }

  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_PlatformInfo_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.tensorflow.util.testlog.PlatformInfo.class, org.tensorflow.util.testlog.PlatformInfo.Builder.class);
  }

  public static final int BITS_FIELD_NUMBER = 1;
  private volatile java.lang.Object bits_;
  /**
   * <pre>
   * e.g. '64bit'
   * </pre>
   *
   * <code>string bits = 1;</code>
   */
  public java.lang.String getBits() {
    java.lang.Object ref = bits_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      bits_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * e.g. '64bit'
   * </pre>
   *
   * <code>string bits = 1;</code>
   */
  public com.google.protobuf.ByteString
      getBitsBytes() {
    java.lang.Object ref = bits_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      bits_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int LINKAGE_FIELD_NUMBER = 2;
  private volatile java.lang.Object linkage_;
  /**
   * <pre>
   * e.g. 'ELF'
   * </pre>
   *
   * <code>string linkage = 2;</code>
   */
  public java.lang.String getLinkage() {
    java.lang.Object ref = linkage_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      linkage_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * e.g. 'ELF'
   * </pre>
   *
   * <code>string linkage = 2;</code>
   */
  public com.google.protobuf.ByteString
      getLinkageBytes() {
    java.lang.Object ref = linkage_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      linkage_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int MACHINE_FIELD_NUMBER = 3;
  private volatile java.lang.Object machine_;
  /**
   * <pre>
   * e.g. 'i386'
   * </pre>
   *
   * <code>string machine = 3;</code>
   */
  public java.lang.String getMachine() {
    java.lang.Object ref = machine_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      machine_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * e.g. 'i386'
   * </pre>
   *
   * <code>string machine = 3;</code>
   */
  public com.google.protobuf.ByteString
      getMachineBytes() {
    java.lang.Object ref = machine_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      machine_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int RELEASE_FIELD_NUMBER = 4;
  private volatile java.lang.Object release_;
  /**
   * <pre>
   * e.g. '3.13.0-76-generic'
   * </pre>
   *
   * <code>string release = 4;</code>
   */
  public java.lang.String getRelease() {
    java.lang.Object ref = release_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      release_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * e.g. '3.13.0-76-generic'
   * </pre>
   *
   * <code>string release = 4;</code>
   */
  public com.google.protobuf.ByteString
      getReleaseBytes() {
    java.lang.Object ref = release_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      release_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int SYSTEM_FIELD_NUMBER = 5;
  private volatile java.lang.Object system_;
  /**
   * <pre>
   * e.g. 'Linux'
   * </pre>
   *
   * <code>string system = 5;</code>
   */
  public java.lang.String getSystem() {
    java.lang.Object ref = system_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      system_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * e.g. 'Linux'
   * </pre>
   *
   * <code>string system = 5;</code>
   */
  public com.google.protobuf.ByteString
      getSystemBytes() {
    java.lang.Object ref = system_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      system_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int VERSION_FIELD_NUMBER = 6;
  private volatile java.lang.Object version_;
  /**
   * <pre>
   * e.g. '#120-Ubuntu SMP Mon Jan 18 15:59:10 UTC 2016'
   * </pre>
   *
   * <code>string version = 6;</code>
   */
  public java.lang.String getVersion() {
    java.lang.Object ref = version_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      version_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * e.g. '#120-Ubuntu SMP Mon Jan 18 15:59:10 UTC 2016'
   * </pre>
   *
   * <code>string version = 6;</code>
   */
  public com.google.protobuf.ByteString
      getVersionBytes() {
    java.lang.Object ref = version_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      version_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  private byte memoizedIsInitialized = -1;
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!getBitsBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, bits_);
    }
    if (!getLinkageBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, linkage_);
    }
    if (!getMachineBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, machine_);
    }
    if (!getReleaseBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, release_);
    }
    if (!getSystemBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 5, system_);
    }
    if (!getVersionBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 6, version_);
    }
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getBitsBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, bits_);
    }
    if (!getLinkageBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, linkage_);
    }
    if (!getMachineBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, machine_);
    }
    if (!getReleaseBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, release_);
    }
    if (!getSystemBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(5, system_);
    }
    if (!getVersionBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(6, version_);
    }
    memoizedSize = size;
    return size;
  }

  private static final long serialVersionUID = 0L;
  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof org.tensorflow.util.testlog.PlatformInfo)) {
      return super.equals(obj);
    }
    org.tensorflow.util.testlog.PlatformInfo other = (org.tensorflow.util.testlog.PlatformInfo) obj;

    boolean result = true;
    result = result && getBits()
        .equals(other.getBits());
    result = result && getLinkage()
        .equals(other.getLinkage());
    result = result && getMachine()
        .equals(other.getMachine());
    result = result && getRelease()
        .equals(other.getRelease());
    result = result && getSystem()
        .equals(other.getSystem());
    result = result && getVersion()
        .equals(other.getVersion());
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + BITS_FIELD_NUMBER;
    hash = (53 * hash) + getBits().hashCode();
    hash = (37 * hash) + LINKAGE_FIELD_NUMBER;
    hash = (53 * hash) + getLinkage().hashCode();
    hash = (37 * hash) + MACHINE_FIELD_NUMBER;
    hash = (53 * hash) + getMachine().hashCode();
    hash = (37 * hash) + RELEASE_FIELD_NUMBER;
    hash = (53 * hash) + getRelease().hashCode();
    hash = (37 * hash) + SYSTEM_FIELD_NUMBER;
    hash = (53 * hash) + getSystem().hashCode();
    hash = (37 * hash) + VERSION_FIELD_NUMBER;
    hash = (53 * hash) + getVersion().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.tensorflow.util.testlog.PlatformInfo parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.util.testlog.PlatformInfo parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.PlatformInfo parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.util.testlog.PlatformInfo parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.PlatformInfo parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.util.testlog.PlatformInfo parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.PlatformInfo parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.tensorflow.util.testlog.PlatformInfo parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.PlatformInfo parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.util.testlog.PlatformInfo parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(org.tensorflow.util.testlog.PlatformInfo prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code tensorflow.PlatformInfo}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tensorflow.PlatformInfo)
      org.tensorflow.util.testlog.PlatformInfoOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_PlatformInfo_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_PlatformInfo_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.tensorflow.util.testlog.PlatformInfo.class, org.tensorflow.util.testlog.PlatformInfo.Builder.class);
    }

    // Construct using org.tensorflow.util.testlog.PlatformInfo.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    public Builder clear() {
      super.clear();
      bits_ = "";

      linkage_ = "";

      machine_ = "";

      release_ = "";

      system_ = "";

      version_ = "";

      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_PlatformInfo_descriptor;
    }

    public org.tensorflow.util.testlog.PlatformInfo getDefaultInstanceForType() {
      return org.tensorflow.util.testlog.PlatformInfo.getDefaultInstance();
    }

    public org.tensorflow.util.testlog.PlatformInfo build() {
      org.tensorflow.util.testlog.PlatformInfo result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public org.tensorflow.util.testlog.PlatformInfo buildPartial() {
      org.tensorflow.util.testlog.PlatformInfo result = new org.tensorflow.util.testlog.PlatformInfo(this);
      result.bits_ = bits_;
      result.linkage_ = linkage_;
      result.machine_ = machine_;
      result.release_ = release_;
      result.system_ = system_;
      result.version_ = version_;
      onBuilt();
      return result;
    }

    public Builder clone() {
      return (Builder) super.clone();
    }
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        Object value) {
      return (Builder) super.setField(field, value);
    }
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return (Builder) super.clearField(field);
    }
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return (Builder) super.clearOneof(oneof);
    }
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, Object value) {
      return (Builder) super.setRepeatedField(field, index, value);
    }
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        Object value) {
      return (Builder) super.addRepeatedField(field, value);
    }
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof org.tensorflow.util.testlog.PlatformInfo) {
        return mergeFrom((org.tensorflow.util.testlog.PlatformInfo)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.tensorflow.util.testlog.PlatformInfo other) {
      if (other == org.tensorflow.util.testlog.PlatformInfo.getDefaultInstance()) return this;
      if (!other.getBits().isEmpty()) {
        bits_ = other.bits_;
        onChanged();
      }
      if (!other.getLinkage().isEmpty()) {
        linkage_ = other.linkage_;
        onChanged();
      }
      if (!other.getMachine().isEmpty()) {
        machine_ = other.machine_;
        onChanged();
      }
      if (!other.getRelease().isEmpty()) {
        release_ = other.release_;
        onChanged();
      }
      if (!other.getSystem().isEmpty()) {
        system_ = other.system_;
        onChanged();
      }
      if (!other.getVersion().isEmpty()) {
        version_ = other.version_;
        onChanged();
      }
      onChanged();
      return this;
    }

    public final boolean isInitialized() {
      return true;
    }

    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      org.tensorflow.util.testlog.PlatformInfo parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.tensorflow.util.testlog.PlatformInfo) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object bits_ = "";
    /**
     * <pre>
     * e.g. '64bit'
     * </pre>
     *
     * <code>string bits = 1;</code>
     */
    public java.lang.String getBits() {
      java.lang.Object ref = bits_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        bits_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * e.g. '64bit'
     * </pre>
     *
     * <code>string bits = 1;</code>
     */
    public com.google.protobuf.ByteString
        getBitsBytes() {
      java.lang.Object ref = bits_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        bits_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * e.g. '64bit'
     * </pre>
     *
     * <code>string bits = 1;</code>
     */
    public Builder setBits(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      bits_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. '64bit'
     * </pre>
     *
     * <code>string bits = 1;</code>
     */
    public Builder clearBits() {
      
      bits_ = getDefaultInstance().getBits();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. '64bit'
     * </pre>
     *
     * <code>string bits = 1;</code>
     */
    public Builder setBitsBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      bits_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object linkage_ = "";
    /**
     * <pre>
     * e.g. 'ELF'
     * </pre>
     *
     * <code>string linkage = 2;</code>
     */
    public java.lang.String getLinkage() {
      java.lang.Object ref = linkage_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        linkage_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * e.g. 'ELF'
     * </pre>
     *
     * <code>string linkage = 2;</code>
     */
    public com.google.protobuf.ByteString
        getLinkageBytes() {
      java.lang.Object ref = linkage_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        linkage_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * e.g. 'ELF'
     * </pre>
     *
     * <code>string linkage = 2;</code>
     */
    public Builder setLinkage(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      linkage_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. 'ELF'
     * </pre>
     *
     * <code>string linkage = 2;</code>
     */
    public Builder clearLinkage() {
      
      linkage_ = getDefaultInstance().getLinkage();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. 'ELF'
     * </pre>
     *
     * <code>string linkage = 2;</code>
     */
    public Builder setLinkageBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      linkage_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object machine_ = "";
    /**
     * <pre>
     * e.g. 'i386'
     * </pre>
     *
     * <code>string machine = 3;</code>
     */
    public java.lang.String getMachine() {
      java.lang.Object ref = machine_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        machine_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * e.g. 'i386'
     * </pre>
     *
     * <code>string machine = 3;</code>
     */
    public com.google.protobuf.ByteString
        getMachineBytes() {
      java.lang.Object ref = machine_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        machine_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * e.g. 'i386'
     * </pre>
     *
     * <code>string machine = 3;</code>
     */
    public Builder setMachine(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      machine_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. 'i386'
     * </pre>
     *
     * <code>string machine = 3;</code>
     */
    public Builder clearMachine() {
      
      machine_ = getDefaultInstance().getMachine();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. 'i386'
     * </pre>
     *
     * <code>string machine = 3;</code>
     */
    public Builder setMachineBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      machine_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object release_ = "";
    /**
     * <pre>
     * e.g. '3.13.0-76-generic'
     * </pre>
     *
     * <code>string release = 4;</code>
     */
    public java.lang.String getRelease() {
      java.lang.Object ref = release_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        release_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * e.g. '3.13.0-76-generic'
     * </pre>
     *
     * <code>string release = 4;</code>
     */
    public com.google.protobuf.ByteString
        getReleaseBytes() {
      java.lang.Object ref = release_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        release_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * e.g. '3.13.0-76-generic'
     * </pre>
     *
     * <code>string release = 4;</code>
     */
    public Builder setRelease(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      release_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. '3.13.0-76-generic'
     * </pre>
     *
     * <code>string release = 4;</code>
     */
    public Builder clearRelease() {
      
      release_ = getDefaultInstance().getRelease();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. '3.13.0-76-generic'
     * </pre>
     *
     * <code>string release = 4;</code>
     */
    public Builder setReleaseBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      release_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object system_ = "";
    /**
     * <pre>
     * e.g. 'Linux'
     * </pre>
     *
     * <code>string system = 5;</code>
     */
    public java.lang.String getSystem() {
      java.lang.Object ref = system_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        system_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * e.g. 'Linux'
     * </pre>
     *
     * <code>string system = 5;</code>
     */
    public com.google.protobuf.ByteString
        getSystemBytes() {
      java.lang.Object ref = system_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        system_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * e.g. 'Linux'
     * </pre>
     *
     * <code>string system = 5;</code>
     */
    public Builder setSystem(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      system_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. 'Linux'
     * </pre>
     *
     * <code>string system = 5;</code>
     */
    public Builder clearSystem() {
      
      system_ = getDefaultInstance().getSystem();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. 'Linux'
     * </pre>
     *
     * <code>string system = 5;</code>
     */
    public Builder setSystemBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      system_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object version_ = "";
    /**
     * <pre>
     * e.g. '#120-Ubuntu SMP Mon Jan 18 15:59:10 UTC 2016'
     * </pre>
     *
     * <code>string version = 6;</code>
     */
    public java.lang.String getVersion() {
      java.lang.Object ref = version_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        version_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * e.g. '#120-Ubuntu SMP Mon Jan 18 15:59:10 UTC 2016'
     * </pre>
     *
     * <code>string version = 6;</code>
     */
    public com.google.protobuf.ByteString
        getVersionBytes() {
      java.lang.Object ref = version_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        version_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * e.g. '#120-Ubuntu SMP Mon Jan 18 15:59:10 UTC 2016'
     * </pre>
     *
     * <code>string version = 6;</code>
     */
    public Builder setVersion(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      version_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. '#120-Ubuntu SMP Mon Jan 18 15:59:10 UTC 2016'
     * </pre>
     *
     * <code>string version = 6;</code>
     */
    public Builder clearVersion() {
      
      version_ = getDefaultInstance().getVersion();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * e.g. '#120-Ubuntu SMP Mon Jan 18 15:59:10 UTC 2016'
     * </pre>
     *
     * <code>string version = 6;</code>
     */
    public Builder setVersionBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      version_ = value;
      onChanged();
      return this;
    }
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return this;
    }

    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return this;
    }


    // @@protoc_insertion_point(builder_scope:tensorflow.PlatformInfo)
  }

  // @@protoc_insertion_point(class_scope:tensorflow.PlatformInfo)
  private static final org.tensorflow.util.testlog.PlatformInfo DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.tensorflow.util.testlog.PlatformInfo();
  }

  public static org.tensorflow.util.testlog.PlatformInfo getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<PlatformInfo>
      PARSER = new com.google.protobuf.AbstractParser<PlatformInfo>() {
    public PlatformInfo parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new PlatformInfo(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<PlatformInfo> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<PlatformInfo> getParserForType() {
    return PARSER;
  }

  public org.tensorflow.util.testlog.PlatformInfo getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

