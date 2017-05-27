# chmod +x cloneConvertTensorflow.sh
#
#  please join grpc channel  -> 
#  https://tensorflowtalk.slack.com/
#
#
#!/bin/bash

function gitCloneGrpcSwift { 
  printf "\033c"
  echo "🚀  Fetching github.com/grpc/grpc-swift.git"
  rm -rf grpc-swift
  git clone https://github.com/grpc/grpc-swift.git
  cd grpc-swift
  make
  cd third_party 
   echo "🚀  Fetching github.com/apple/swift-protobuf.git"
  git clone https://github.com/apple/swift-protobuf.git
   echo "🚀  Fetching github.com/grpc/grpc.git"
  git clone https://github.com/grpc/grpc.git
  cd ..
  cd Plugin
  make
  cd ..
  cd ..
}


function installProtocDoc {
  printf "\033c"
  echo "🚀  Installing protoc doc generation"
  brew update
  brew install  protobuf
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


if which protoc ==/dev/null; then
 echo "🚬 warning: Protoc not installed"
 exit
fi






# TENSORFLOW
if [ -d "tensorflow" ] ; then
  read -p "⚠️  Existing tensorflow 🚀 directory detected - do you want to blow away & fetch latest code ? [y/N]" CONDITION;
  if [ "$CONDITION" == "y" ]; then
      rm -rf tensorflow 
      cloneTensorFlowRemoveAllFilesExceptProto 
  fi 
else
  cloneTensorFlowRemoveAllFilesExceptProto
fi

# TENSORFLOW SERVING
if [ -d "serving" ] ; then
  read -p "⚠️  Existing tensorflow serving ⛳️  directory detected - do you want to blow away & fetch latest code ? [y/N]" CONDITION;
  if [ "$CONDITION" == "y" ]; then
      rm -rf serving 
      cloneTensorFlowServingRemoveAllFilesExceptProto 
  fi 
else
  cloneTensorFlowServingRemoveAllFilesExceptProto
fi

cp -R tensorflow/tensorflow serving


printf "\033c"
printf  "\n\n"
printf  "\n\n"
echo  "🚀 - Generate Tensorflow + Tensorflow Serving classes  \n\n"
printf  "\n\n"
echo  "1 - Swift 🚀"
echo   "2 - ObjC"
echo   "3 - Python 🐍"
echo   "4 - Ruby 💎"
echo   "5 - Node 🎱"
echo   "6 - c#"
echo   "7 - c++"
echo   "8 - Java 🦑"
echo   "9 - Go 🐎"

printf  "\n\n"
printf  "[1], 2, 3, 4, 5, 6, 7, 8, 9"
printf  "\n\n"

read -p "" CONDITION;


# clear screen
printf "\033c"
  
# Swift
if [ "$CONDITION" == "1" ] ; then
  # GOOGLE GRPC SWIFT
  if [ -d "grpc-swift" ] ; then
  read -p "⚠️  Existing grpc-swift 📡  detected - do you want to blow away & fetch latest code ? [y/N]" CONDITION;
    if [ "$CONDITION" == "y" ] ; then
        rm -rf grpc-swift
        gitCloneGrpcSwift
    fi
  else
    gitCloneGrpcSwift
  fi
fi



# Go
if [ "$CONDITION" == "9" ] ; then
  go get google.golang.org/grpc
  go get github.com/golang/protobuf/protoc-gen-go
  go get -u github.com/golang/protobuf/{proto,protoc-gen-go}

   # move golang files to this directory
  rm -rf GoGenerated
  mkdir GoGenerated
fi



if [ "$CONDITION" == "5" ] ; then
  # move java files to this directory
  rm -rf NodeGenerated
  mkdir NodeGenerated
fi

if [ "$CONDITION" == "8" ] ; then
  # move java files to this directory
  rm -rf JavaGenerated
  mkdir JavaGenerated
fi


for file_path in $(find ./serving -type f -name "*.proto" ); do
  DIR=$(dirname $file_path)
  file=$(basename $file_path)
  
  test=$file_path
  output_file=${test/.proto/.pb}
  doc_output_file=${test/.proto/.md}
  
  if [ "$CONDITION" == "1" ] ; then
    # Swift
    # https://github.com/grpc/grpc-swift/blob/574c47b6a39959ff4f2e3eda1874108f95e00fa9/Plugin/README.md
    echo  "\n ⛳️  protoc --plugin=./grpc-swift/Plugin/protoc-gen-swiftgrpc  \ \n--proto_path=serving  \ \n--swiftgrpc_out=. \ \n$file_path \n"
    protoc --plugin=./grpc-swift/Plugin/protoc-gen-swiftgrpc   \
    --proto_path=serving \
    --swiftgrpc_out=. \
    $file_path 

#   \
    # output swift file
    echo "\n👾 protoc --plugin=./grpc-swift/Plugin/protoc-gen-swift  --swift_opt=Visibility=Public  \ \n--proto_path=serving\ \n--swift_out=. \ \n $file_path \n \n" 
    protoc --plugin=./grpc-swift/Plugin/protoc-gen-swift   \
    --swift_opt=Visibility=Public \
    --proto_path=serving \
    --swift_out="." \
    $file_path 

    # output swift proto documentation
    #echo "\n📚 protoc  --proto_path=serving \ \n  --doc_out=markdown,$doc_output_file:. \ \n  $file_path  " 
    #protoc  \
    #--proto_path=serving \
    #--doc_out=markdown,$doc_output_file:"." \
    #$file_path 
    # \No such file or directory -  related to directory - https://github.com/estan/protoc-gen-doc/issues/267
  fi


  # Objective -C
  if [ "$CONDITION" == "2" ] ; then
    protoc --plugin=protoc-gen-grpc=$(which grpc_objective_c_plugin) \
    --proto_path=serving \
    --objc_out=. \
    --grpc_out=. \
    -I . \
    -I $DIR \
    #--doc_out=markdown,$html_output_file:"." \
    #--descriptor_set_out $output_file \
    $file_path
  fi

  # Python
  if [ "$CONDITION" == "3" ] ; then
    printf "\033c"
    echo "\n🐍  protoc   protoc --plugin=protoc-gen-grpc=$(which  grpc_python_plugin)--proto_path=serving --python_out=.    --grpc_out=.  $file_path"
    protoc --plugin=protoc-gen-grpc=$(which  grpc_python_plugin) \
    --proto_path=serving \
    --python_out=. \
    --grpc_out=. \
    $file_path

  fi

  # Ruby
  if [ "$CONDITION" == "4" ] ; then
   echo "\n💎  protoc --plugin=protoc-gen-grpc=/usr/local/bin/grpc_ruby_plugin   --proto_path=serving  --ruby_out=./RubyGenerated/    --grpc_out=./RubyGenerated/  $file_path" 
    protoc --plugin=protoc-gen-grpc=$(which grpc_ruby_plugin) \
    --proto_path=serving \
    --ruby_out=./RubyGenerated/ \
    --grpc_out=./RubyGenerated/ \
    $file_path
  fi

  # Node
  if [ "$CONDITION" == "5" ] ; then
    protoc --plugin=protoc-gen-grpc=$(which grpc_node_plugin) \
    --proto_path=serving \
    --js_out=./NodeGenerated/ \
    --grpc_out=./NodeGenerated/ \
    $file_path
    #--doc_out=markdown,$html_output_file:"." \
    #--descriptor_set_out $output_file \

  fi

  # C#
  if [ "$CONDITION" == "6" ] ; then
    protoc --plugin=protoc-gen-grpc=$(which grpc_csharp_plugin) \
    --proto_path=serving \
    --csharp_out=. \
    --grpc_out=. \
    $file_path
    #--doc_out=markdown,$html_output_file:"." \
    #--descriptor_set_out $output_file \

  fi

  # C++
  if [ "$CONDITION" == "7" ] ; then
    echo "\n👾 protoc --proto_path=serving  --cpp_out=. --grpc_out=. --plugin=protoc-gen-grpc=$(which grpc_cpp_plugin)   $file_path \n \n" 
    protoc --plugin=protoc-gen-grpc=$(which grpc_cpp_plugin) \
    --proto_path=serving \
    --cpp_out=. \
    --grpc_out=. \
    $file_path
  fi

  # Java
  if [ "$CONDITION" == "8" ] ; then
  #
    echo "\n🦑  protoc --plugin=protoc-gen-grpc-java=$(which protoc-gen-grpc-java)  --proto_path=serving  --java_out=. --grpc-java_out=. $file_path " 
    protoc --plugin=protoc-gen-grpc-java=$(which protoc-gen-grpc-java)  \
    --proto_path=serving \
    --java_out=./JavaGenerated/ \
    --grpc-java_out=./JavaGenerated/ \
    $file_path
  fi

   # Go
  if [ "$CONDITION" == "9" ] ; then
  #
    echo "\n🐎  protoc --go_out=. --plugin=$(which protoc-gen-go)  --go_out=plugins=grpc:.  --proto_path=serving $file_path "
        protoc --plugin=protoc-gen-grpc-java=$(which protoc-gen-go)  \
    --proto_path=serving \
    --go_out=./GoGenerated/ \
    --grpc-go_out=./GoGenerated/ \
    $file_path
  fi

done

if [ "$CONDITION" == "1" ] ; then
  # move swift files to this directory
  rm -rf SwiftGenerated
  mkdir SwiftGenerated
  mv tensorflow tensorflow_serving SwiftGenerated
  find . -maxdepth 1 -name "*.swift" -exec mv {} SwiftGenerated \;
fi

if [ "$CONDITION" == "3" ] ; then
  # move swift files to this directory
  rm -rf PythonGenerated
  mkdir PythonGenerated
  mv tensorflow tensorflow_serving PythonGenerated
  echo "\n🐍 files can be found at PythonGenerated \n \n" 
fi

if [ "$CONDITION" == "4" ] ; then
  # move swift files to this directory
  rm -rf RubyGenerated
  mkdir RubyGenerated
  mv tensorflow tensorflow_serving RubyGenerated
  find . -maxdepth 1 -name "*.rb" -exec mv {} RubyGenerated \;
   echo "\n⛳️ files can be found at RubyGenerated \n \n" 
fi

if [ "$CONDITION" == "7" ] ; then
  # move swift files to this directory
  rm -rf CPPGenerated
  mkdir CPPGenerated
  mv tensorflow tensorflow_serving CPPGenerated
  echo "\n⛳️ files can be found at CPPGenerated \n \n" 
fi


if [ "$CONDITION" == "9" ] ; then
  # move swift files to this directory
  rm -rf GoGenerated
  mkdir GoGenerated
  mv tensorflow tensorflow_serving GoGenerated
  echo "\n⛳️ files can be found at GoGenerated \n \n" 
fi
