# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/tensorboard/plugins/projector/projector_config.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "tensorflow.SpriteMetadata" do
    optional :image_path, :string, 1
    repeated :single_image_dim, :uint32, 2
  end
  add_message "tensorflow.EmbeddingInfo" do
    optional :tensor_name, :string, 1
    optional :metadata_path, :string, 2
    optional :bookmarks_path, :string, 3
    repeated :tensor_shape, :uint32, 4
    optional :sprite, :message, 5, "tensorflow.SpriteMetadata"
    optional :tensor_path, :string, 6
  end
  add_message "tensorflow.ProjectorConfig" do
    optional :model_checkpoint_path, :string, 1
    repeated :embeddings, :message, 2, "tensorflow.EmbeddingInfo"
    optional :model_checkpoint_dir, :string, 3
  end
end

module Tensorflow
  SpriteMetadata = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.SpriteMetadata").msgclass
  EmbeddingInfo = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.EmbeddingInfo").msgclass
  ProjectorConfig = Google::Protobuf::DescriptorPool.generated_pool.lookup("tensorflow.ProjectorConfig").msgclass
end
