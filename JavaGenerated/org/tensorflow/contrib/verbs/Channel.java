// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/contrib/verbs/verbs_service.proto

package org.tensorflow.contrib.verbs;

/**
 * Protobuf type {@code tensorflow.Channel}
 */
public  final class Channel extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tensorflow.Channel)
    ChannelOrBuilder {
  // Use Channel.newBuilder() to construct.
  private Channel(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private Channel() {
    lid_ = 0;
    qpn_ = 0;
    psn_ = 0;
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private Channel(
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
          case 8: {

            lid_ = input.readInt32();
            break;
          }
          case 16: {

            qpn_ = input.readInt32();
            break;
          }
          case 24: {

            psn_ = input.readInt32();
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
    return org.tensorflow.contrib.verbs.VerbsServiceProtos.internal_static_tensorflow_Channel_descriptor;
  }

  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.tensorflow.contrib.verbs.VerbsServiceProtos.internal_static_tensorflow_Channel_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.tensorflow.contrib.verbs.Channel.class, org.tensorflow.contrib.verbs.Channel.Builder.class);
  }

  public static final int LID_FIELD_NUMBER = 1;
  private int lid_;
  /**
   * <code>int32 lid = 1;</code>
   */
  public int getLid() {
    return lid_;
  }

  public static final int QPN_FIELD_NUMBER = 2;
  private int qpn_;
  /**
   * <code>int32 qpn = 2;</code>
   */
  public int getQpn() {
    return qpn_;
  }

  public static final int PSN_FIELD_NUMBER = 3;
  private int psn_;
  /**
   * <code>int32 psn = 3;</code>
   */
  public int getPsn() {
    return psn_;
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
    if (lid_ != 0) {
      output.writeInt32(1, lid_);
    }
    if (qpn_ != 0) {
      output.writeInt32(2, qpn_);
    }
    if (psn_ != 0) {
      output.writeInt32(3, psn_);
    }
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (lid_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(1, lid_);
    }
    if (qpn_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(2, qpn_);
    }
    if (psn_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(3, psn_);
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
    if (!(obj instanceof org.tensorflow.contrib.verbs.Channel)) {
      return super.equals(obj);
    }
    org.tensorflow.contrib.verbs.Channel other = (org.tensorflow.contrib.verbs.Channel) obj;

    boolean result = true;
    result = result && (getLid()
        == other.getLid());
    result = result && (getQpn()
        == other.getQpn());
    result = result && (getPsn()
        == other.getPsn());
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + LID_FIELD_NUMBER;
    hash = (53 * hash) + getLid();
    hash = (37 * hash) + QPN_FIELD_NUMBER;
    hash = (53 * hash) + getQpn();
    hash = (37 * hash) + PSN_FIELD_NUMBER;
    hash = (53 * hash) + getPsn();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.tensorflow.contrib.verbs.Channel parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.contrib.verbs.Channel parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.contrib.verbs.Channel parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.contrib.verbs.Channel parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.contrib.verbs.Channel parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.contrib.verbs.Channel parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.contrib.verbs.Channel parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.tensorflow.contrib.verbs.Channel parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.contrib.verbs.Channel parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.contrib.verbs.Channel parseFrom(
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
  public static Builder newBuilder(org.tensorflow.contrib.verbs.Channel prototype) {
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
   * Protobuf type {@code tensorflow.Channel}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tensorflow.Channel)
      org.tensorflow.contrib.verbs.ChannelOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.tensorflow.contrib.verbs.VerbsServiceProtos.internal_static_tensorflow_Channel_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.tensorflow.contrib.verbs.VerbsServiceProtos.internal_static_tensorflow_Channel_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.tensorflow.contrib.verbs.Channel.class, org.tensorflow.contrib.verbs.Channel.Builder.class);
    }

    // Construct using org.tensorflow.contrib.verbs.Channel.newBuilder()
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
      lid_ = 0;

      qpn_ = 0;

      psn_ = 0;

      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.tensorflow.contrib.verbs.VerbsServiceProtos.internal_static_tensorflow_Channel_descriptor;
    }

    public org.tensorflow.contrib.verbs.Channel getDefaultInstanceForType() {
      return org.tensorflow.contrib.verbs.Channel.getDefaultInstance();
    }

    public org.tensorflow.contrib.verbs.Channel build() {
      org.tensorflow.contrib.verbs.Channel result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public org.tensorflow.contrib.verbs.Channel buildPartial() {
      org.tensorflow.contrib.verbs.Channel result = new org.tensorflow.contrib.verbs.Channel(this);
      result.lid_ = lid_;
      result.qpn_ = qpn_;
      result.psn_ = psn_;
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
      if (other instanceof org.tensorflow.contrib.verbs.Channel) {
        return mergeFrom((org.tensorflow.contrib.verbs.Channel)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.tensorflow.contrib.verbs.Channel other) {
      if (other == org.tensorflow.contrib.verbs.Channel.getDefaultInstance()) return this;
      if (other.getLid() != 0) {
        setLid(other.getLid());
      }
      if (other.getQpn() != 0) {
        setQpn(other.getQpn());
      }
      if (other.getPsn() != 0) {
        setPsn(other.getPsn());
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
      org.tensorflow.contrib.verbs.Channel parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.tensorflow.contrib.verbs.Channel) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private int lid_ ;
    /**
     * <code>int32 lid = 1;</code>
     */
    public int getLid() {
      return lid_;
    }
    /**
     * <code>int32 lid = 1;</code>
     */
    public Builder setLid(int value) {
      
      lid_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int32 lid = 1;</code>
     */
    public Builder clearLid() {
      
      lid_ = 0;
      onChanged();
      return this;
    }

    private int qpn_ ;
    /**
     * <code>int32 qpn = 2;</code>
     */
    public int getQpn() {
      return qpn_;
    }
    /**
     * <code>int32 qpn = 2;</code>
     */
    public Builder setQpn(int value) {
      
      qpn_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int32 qpn = 2;</code>
     */
    public Builder clearQpn() {
      
      qpn_ = 0;
      onChanged();
      return this;
    }

    private int psn_ ;
    /**
     * <code>int32 psn = 3;</code>
     */
    public int getPsn() {
      return psn_;
    }
    /**
     * <code>int32 psn = 3;</code>
     */
    public Builder setPsn(int value) {
      
      psn_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int32 psn = 3;</code>
     */
    public Builder clearPsn() {
      
      psn_ = 0;
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


    // @@protoc_insertion_point(builder_scope:tensorflow.Channel)
  }

  // @@protoc_insertion_point(class_scope:tensorflow.Channel)
  private static final org.tensorflow.contrib.verbs.Channel DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.tensorflow.contrib.verbs.Channel();
  }

  public static org.tensorflow.contrib.verbs.Channel getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Channel>
      PARSER = new com.google.protobuf.AbstractParser<Channel>() {
    public Channel parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new Channel(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<Channel> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Channel> getParserForType() {
    return PARSER;
  }

  public org.tensorflow.contrib.verbs.Channel getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

