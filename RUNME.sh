# chmod +x cloneConvertTensorflow.sh
#
#  please join grpc channel  -> 
#  https://tensorflowtalk.slack.com/
#
#
#!/bin/bash

function gitCloneGrpcSwift { 
  printf "\033c"
  echo "🚀  Fetching latest protoc-gen-swiftgrpc from Google"
  git clone https://github.com/grpc/grpc-swift.git
  cd grpc-swift
  cd Plugin
  make
  cd ..
  cd ..
}

function installProtocDoc {
  printf "\033c"
  echo "🚀  Installing protoc doc generation"
  brew update
  brew install qt5 protobuf
  brew link --force qt5
  export PROTOBUF_PREFIX=$(brew --prefix protobuf)
  git clone https://github.com/estan/protoc-gen-doc.git
  cd protoc-gen-doc
  qmake
  make
  cp protoc-gen-doc /usr/local/bin/
  cd ..
}

function installPythonProtobuffer {
  printf "\033c"
   echo "🚀  Installing GRPC with all plugins via brew";
   curl -fsSL https://goo.gl/getgrpc | bash -s -- --with-plugins
}

function cloneTensorFlowRemoveAllFilesExceptProto {
  printf "\033c"
  echo "🚀  Fetching latest proto files from github.com/tensorflow/tensorflow.git"
  #
  git clone https://github.com/tensorflow/tensorflow.git
  cd tensorflow
  find . -type f ! -name '*.proto' -delete #remove any file not proto
  find . -type d -empty -delete #remove empty directories
  cd ..
}



function cloneTensorFlowServingRemoveAllFilesExceptProto {
  printf "\033c"
  echo "🚀  Fetching latest proto files github.com/tensorflow/serving.git"
  #
  git clone https://github.com/tensorflow/serving.git
  cd serving
  find . -type f ! -name '*.proto' -delete #remove any file not proto
  find . -type d -empty -delete #remove empty directories
  cd ..
}




# GOOGLE GRPC SWIFT
if [ -d "grpc-swift" ] ; then
  printf "\033c"
 read -p "⚠️  Existing grpc-swift  detected - do you want to blow away & fetch latest code ? [y/N]" CONDITION;
  if [ "$CONDITION" == "y" ] ; then
      rm -rf grpc-swift
      gitCloneGrpcSwift
  fi
else
  gitCloneGrpcSwift
fi



# PROTOCO DOCUMENTATION
if ! which protoc-gen-doc  >/dev/null; then
  installProtocDoc
fi


if ! xcode-select -p >/dev/null; then
  echo "🚀  Installing xcode command line tools";
  sudo xcode-select --install
fi

printf "\033c"
if ! which grpc_python_plugin >/dev/null; then
 installPythonProtobuffer
fi


# TENSORFLOW
if [ -d "tensorflow" ] ; then
  printf "\033c"
  read -p "⚠️  Existing tensorflow directory detected - do you want to blow away & fetch latest code ? [y/N]" CONDITION;
  if [ "$CONDITION" == "y" ]; then
      rm -rf tensorflow 
      cloneTensorFlowRemoveAllFilesExceptProto 
  fi 
else
  cloneTensorFlowRemoveAllFilesExceptProto
fi


printf "\033c"
echo  "🚀   - TO DO A MANUAL EXPANSION OF SERVICE PROTO FILE \n\n"
echo " see https://github.com/grpc/grpc-swift/blob/574c47b6a39959ff4f2e3eda1874108f95e00fa9/Plugin/README.md"


echo  "INFO - Convert all proto buffer files to "
printf  "\n\n"

echo  "1 - Swift Tensorflow 🚀"
echo   "2 - Swift Tensorflow Serving ⛳️"

printf  "\n\n"
printf  "[1], 2"
printf  "\n\n"

read -p "" CONDITION;


if which protoc >/dev/null; then

if [ "$CONDITION" == "1" ] ; then
 
 
	for file_path in $(find .  tensorflow -type f -name "*.proto" ); do
        DIR=$(dirname $file_path)
        file=$(basename $file_path)
        
        test=$file_path
        output_file=${test/.proto/.pb}
        doc_output_file=${test/.proto/.md}
        
        # Swift
        if [ "$CONDITION" == "1" ] ; then
          # https://github.com/grpc/grpc-swift/blob/574c47b6a39959ff4f2e3eda1874108f95e00fa9/Plugin/README.md
          echo  "\n🍿 protoc --plugin=./grpc-swift/Plugin/protoc-gen-swiftgrpc  \ \n--proto_path=tensorflow  \ \n--swiftgrpc_out=. \ \n$file_path \n"
          protoc --plugin=./grpc-swift/Plugin/protoc-gen-swiftgrpc   \
          --proto_path=tensorflow \
          --swiftgrpc_out=. \
          $file_path 
       
          # output swift file
          echo "\n🚀 protoc  --plugin=./grpc-swift/Plugin/protoc-gen-swift \ \n--proto_path=tensorflow  --swift_opt=Visibility=Public  \ \n $file_path \n \n" #\n--doc_out=markdown,$doc_output_file:"." \
          protoc --plugin=./grpc-swift/Plugin/protoc-gen-swift   \
          --proto_path=tensorflow \
          --swift_opt=Visibility=Public \
          --swift_out="." \
          $file_path 

          # output swift proto documentation
          echo "\n📚 protoc  --proto_path=tensorflow \ \n  --doc_out=markdown,$doc_output_file:. \ \n  $file_path  " 
          protoc  \
          --proto_path=tensorflow \
          --doc_out=markdown,$doc_output_file:"." \
          $file_path 
          # \No such file or directory -  related to directory - https://github.com/estan/protoc-gen-doc/issues/267
          
        fi
	done

    # move swift files to this directory
    #mkdir TensorflowGenerated
    #mkdir TensorflowDocumentation
    #find . -maxdepth 1 -name "*.swift" -exec mv {} TensorflowGenerated \;
    #cd tensorflow
    #find ./ -name "*.swift" -exec mv {} ../Generated \;
    #find ./ -name "*.md"  -exec mv {} ../Documentation \;
    cd ..
  fi


 if [ "$CONDITION" == "2" ] ; then


  # TENSORFLOW SERVING
  if [ -d "serving" ] ; then
    printf "\033c"
    read -p "⚠️  Existing tensorflow serving ⛳️  directory detected - do you want to blow away & fetch latest code ? [y/N]" CONDITION;
    if [ "$CONDITION" == "y" ]; then
        rm -rf tensorflow 
        cloneTensorFlowServingRemoveAllFilesExceptProto 
    fi 
  else
    cloneTensorFlowServingRemoveAllFilesExceptProto
  fi

  cp -R tensorflow/tensorflow serving

	for file_path in $(find .  serving -type f -name "*.proto" ); do
    DIR=$(dirname $file_path)
    file=$(basename $file_path)
    
    test=$file_path
    output_file=${test/.proto/.pb}
    doc_output_file=${test/.proto/.md}
    
    # Swift
    # https://github.com/grpc/grpc-swift/blob/574c47b6a39959ff4f2e3eda1874108f95e00fa9/Plugin/README.md
    echo  "\n ⛳️  protoc --plugin=./grpc-swift/Plugin/protoc-gen-swiftgrpc  \ \n--proto_path=serving  \ \n--swiftgrpc_out=. \ \n$file_path \n"
    protoc --plugin=./grpc-swift/Plugin/protoc-gen-swiftgrpc   \
    --proto_path=serving \
    --swiftgrpc_out=. \
    $file_path 

    # output swift file
    echo "\n👾 protoc --plugin=./grpc-swift/Plugin/protoc-gen-swift \ \n--proto_path=serving --swift_opt=Visibility=Public \ \n--swift_out=. \ \n $file_path \n \n" #\n--doc_out=markdown,$doc_output_file:"." \
    protoc --plugin=./grpc-swift/Plugin/protoc-gen-swift   \
    --proto_path=serving \
    --swift_opt=Visibility=Public \
    --swift_out="." \
    $file_path 

    # output swift proto documentation
    echo "\n📚 protoc  --proto_path=serving \ \n  --doc_out=markdown,$doc_output_file:. \ \n  $file_path  " 
    protoc  \
    --proto_path=serving \
    --doc_out=markdown,$doc_output_file:"." \
    $file_path 
    # \No such file or directory -  related to directory - https://github.com/estan/protoc-gen-doc/issues/267
    
	  done

    # move swift files to this directory
   mkdir Generated
   mv tensorflow tensorflow_serving Generated
   find . -maxdepth 1 -name "*.swift" -exec mv {} Generated \;
  fi

else
  echo "warning: Protoc not installed"
fi
