// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/protobuf/worker.proto

package org.tensorflow.distruntime;

/**
 * Protobuf type {@code tensorflow.LabeledStepStats}
 */
public  final class LabeledStepStats extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tensorflow.LabeledStepStats)
    LabeledStepStatsOrBuilder {
  // Use LabeledStepStats.newBuilder() to construct.
  private LabeledStepStats(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private LabeledStepStats() {
    stepId_ = 0L;
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private LabeledStepStats(
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

            stepId_ = input.readInt64();
            break;
          }
          case 18: {
            org.tensorflow.framework.StepStats.Builder subBuilder = null;
            if (stepStats_ != null) {
              subBuilder = stepStats_.toBuilder();
            }
            stepStats_ = input.readMessage(org.tensorflow.framework.StepStats.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(stepStats_);
              stepStats_ = subBuilder.buildPartial();
            }

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
    return org.tensorflow.distruntime.WorkerProtos.internal_static_tensorflow_LabeledStepStats_descriptor;
  }

  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.tensorflow.distruntime.WorkerProtos.internal_static_tensorflow_LabeledStepStats_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.tensorflow.distruntime.LabeledStepStats.class, org.tensorflow.distruntime.LabeledStepStats.Builder.class);
  }

  public static final int STEP_ID_FIELD_NUMBER = 1;
  private long stepId_;
  /**
   * <code>int64 step_id = 1;</code>
   */
  public long getStepId() {
    return stepId_;
  }

  public static final int STEP_STATS_FIELD_NUMBER = 2;
  private org.tensorflow.framework.StepStats stepStats_;
  /**
   * <code>.tensorflow.StepStats step_stats = 2;</code>
   */
  public boolean hasStepStats() {
    return stepStats_ != null;
  }
  /**
   * <code>.tensorflow.StepStats step_stats = 2;</code>
   */
  public org.tensorflow.framework.StepStats getStepStats() {
    return stepStats_ == null ? org.tensorflow.framework.StepStats.getDefaultInstance() : stepStats_;
  }
  /**
   * <code>.tensorflow.StepStats step_stats = 2;</code>
   */
  public org.tensorflow.framework.StepStatsOrBuilder getStepStatsOrBuilder() {
    return getStepStats();
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
    if (stepId_ != 0L) {
      output.writeInt64(1, stepId_);
    }
    if (stepStats_ != null) {
      output.writeMessage(2, getStepStats());
    }
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (stepId_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(1, stepId_);
    }
    if (stepStats_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getStepStats());
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
    if (!(obj instanceof org.tensorflow.distruntime.LabeledStepStats)) {
      return super.equals(obj);
    }
    org.tensorflow.distruntime.LabeledStepStats other = (org.tensorflow.distruntime.LabeledStepStats) obj;

    boolean result = true;
    result = result && (getStepId()
        == other.getStepId());
    result = result && (hasStepStats() == other.hasStepStats());
    if (hasStepStats()) {
      result = result && getStepStats()
          .equals(other.getStepStats());
    }
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + STEP_ID_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getStepId());
    if (hasStepStats()) {
      hash = (37 * hash) + STEP_STATS_FIELD_NUMBER;
      hash = (53 * hash) + getStepStats().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.tensorflow.distruntime.LabeledStepStats parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.distruntime.LabeledStepStats parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.distruntime.LabeledStepStats parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.distruntime.LabeledStepStats parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.distruntime.LabeledStepStats parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.distruntime.LabeledStepStats parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.distruntime.LabeledStepStats parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.tensorflow.distruntime.LabeledStepStats parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.distruntime.LabeledStepStats parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.distruntime.LabeledStepStats parseFrom(
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
  public static Builder newBuilder(org.tensorflow.distruntime.LabeledStepStats prototype) {
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
   * Protobuf type {@code tensorflow.LabeledStepStats}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tensorflow.LabeledStepStats)
      org.tensorflow.distruntime.LabeledStepStatsOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.tensorflow.distruntime.WorkerProtos.internal_static_tensorflow_LabeledStepStats_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.tensorflow.distruntime.WorkerProtos.internal_static_tensorflow_LabeledStepStats_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.tensorflow.distruntime.LabeledStepStats.class, org.tensorflow.distruntime.LabeledStepStats.Builder.class);
    }

    // Construct using org.tensorflow.distruntime.LabeledStepStats.newBuilder()
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
      stepId_ = 0L;

      if (stepStatsBuilder_ == null) {
        stepStats_ = null;
      } else {
        stepStats_ = null;
        stepStatsBuilder_ = null;
      }
      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.tensorflow.distruntime.WorkerProtos.internal_static_tensorflow_LabeledStepStats_descriptor;
    }

    public org.tensorflow.distruntime.LabeledStepStats getDefaultInstanceForType() {
      return org.tensorflow.distruntime.LabeledStepStats.getDefaultInstance();
    }

    public org.tensorflow.distruntime.LabeledStepStats build() {
      org.tensorflow.distruntime.LabeledStepStats result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public org.tensorflow.distruntime.LabeledStepStats buildPartial() {
      org.tensorflow.distruntime.LabeledStepStats result = new org.tensorflow.distruntime.LabeledStepStats(this);
      result.stepId_ = stepId_;
      if (stepStatsBuilder_ == null) {
        result.stepStats_ = stepStats_;
      } else {
        result.stepStats_ = stepStatsBuilder_.build();
      }
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
      if (other instanceof org.tensorflow.distruntime.LabeledStepStats) {
        return mergeFrom((org.tensorflow.distruntime.LabeledStepStats)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.tensorflow.distruntime.LabeledStepStats other) {
      if (other == org.tensorflow.distruntime.LabeledStepStats.getDefaultInstance()) return this;
      if (other.getStepId() != 0L) {
        setStepId(other.getStepId());
      }
      if (other.hasStepStats()) {
        mergeStepStats(other.getStepStats());
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
      org.tensorflow.distruntime.LabeledStepStats parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.tensorflow.distruntime.LabeledStepStats) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private long stepId_ ;
    /**
     * <code>int64 step_id = 1;</code>
     */
    public long getStepId() {
      return stepId_;
    }
    /**
     * <code>int64 step_id = 1;</code>
     */
    public Builder setStepId(long value) {
      
      stepId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int64 step_id = 1;</code>
     */
    public Builder clearStepId() {
      
      stepId_ = 0L;
      onChanged();
      return this;
    }

    private org.tensorflow.framework.StepStats stepStats_ = null;
    private com.google.protobuf.SingleFieldBuilderV3<
        org.tensorflow.framework.StepStats, org.tensorflow.framework.StepStats.Builder, org.tensorflow.framework.StepStatsOrBuilder> stepStatsBuilder_;
    /**
     * <code>.tensorflow.StepStats step_stats = 2;</code>
     */
    public boolean hasStepStats() {
      return stepStatsBuilder_ != null || stepStats_ != null;
    }
    /**
     * <code>.tensorflow.StepStats step_stats = 2;</code>
     */
    public org.tensorflow.framework.StepStats getStepStats() {
      if (stepStatsBuilder_ == null) {
        return stepStats_ == null ? org.tensorflow.framework.StepStats.getDefaultInstance() : stepStats_;
      } else {
        return stepStatsBuilder_.getMessage();
      }
    }
    /**
     * <code>.tensorflow.StepStats step_stats = 2;</code>
     */
    public Builder setStepStats(org.tensorflow.framework.StepStats value) {
      if (stepStatsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        stepStats_ = value;
        onChanged();
      } else {
        stepStatsBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.tensorflow.StepStats step_stats = 2;</code>
     */
    public Builder setStepStats(
        org.tensorflow.framework.StepStats.Builder builderForValue) {
      if (stepStatsBuilder_ == null) {
        stepStats_ = builderForValue.build();
        onChanged();
      } else {
        stepStatsBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.tensorflow.StepStats step_stats = 2;</code>
     */
    public Builder mergeStepStats(org.tensorflow.framework.StepStats value) {
      if (stepStatsBuilder_ == null) {
        if (stepStats_ != null) {
          stepStats_ =
            org.tensorflow.framework.StepStats.newBuilder(stepStats_).mergeFrom(value).buildPartial();
        } else {
          stepStats_ = value;
        }
        onChanged();
      } else {
        stepStatsBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.tensorflow.StepStats step_stats = 2;</code>
     */
    public Builder clearStepStats() {
      if (stepStatsBuilder_ == null) {
        stepStats_ = null;
        onChanged();
      } else {
        stepStats_ = null;
        stepStatsBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.tensorflow.StepStats step_stats = 2;</code>
     */
    public org.tensorflow.framework.StepStats.Builder getStepStatsBuilder() {
      
      onChanged();
      return getStepStatsFieldBuilder().getBuilder();
    }
    /**
     * <code>.tensorflow.StepStats step_stats = 2;</code>
     */
    public org.tensorflow.framework.StepStatsOrBuilder getStepStatsOrBuilder() {
      if (stepStatsBuilder_ != null) {
        return stepStatsBuilder_.getMessageOrBuilder();
      } else {
        return stepStats_ == null ?
            org.tensorflow.framework.StepStats.getDefaultInstance() : stepStats_;
      }
    }
    /**
     * <code>.tensorflow.StepStats step_stats = 2;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        org.tensorflow.framework.StepStats, org.tensorflow.framework.StepStats.Builder, org.tensorflow.framework.StepStatsOrBuilder> 
        getStepStatsFieldBuilder() {
      if (stepStatsBuilder_ == null) {
        stepStatsBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            org.tensorflow.framework.StepStats, org.tensorflow.framework.StepStats.Builder, org.tensorflow.framework.StepStatsOrBuilder>(
                getStepStats(),
                getParentForChildren(),
                isClean());
        stepStats_ = null;
      }
      return stepStatsBuilder_;
    }
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return this;
    }

    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return this;
    }


    // @@protoc_insertion_point(builder_scope:tensorflow.LabeledStepStats)
  }

  // @@protoc_insertion_point(class_scope:tensorflow.LabeledStepStats)
  private static final org.tensorflow.distruntime.LabeledStepStats DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.tensorflow.distruntime.LabeledStepStats();
  }

  public static org.tensorflow.distruntime.LabeledStepStats getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<LabeledStepStats>
      PARSER = new com.google.protobuf.AbstractParser<LabeledStepStats>() {
    public LabeledStepStats parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new LabeledStepStats(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<LabeledStepStats> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<LabeledStepStats> getParserForType() {
    return PARSER;
  }

  public org.tensorflow.distruntime.LabeledStepStats getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

