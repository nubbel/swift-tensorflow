# chmod +x cloneConvertTensorflow.sh
#
#  please join grpc channel  -> 
#  https://tensorflowtalk.slack.com/
#
#




function gitCloneSwiftProtobuf {
printf "\033c"
 echo "Fetching latest protobuf from Apple"
 git clone https://github.com/apple/swift-protobuf.git
  cd swift-protobuf
  swift build
  cp .build/debug/protoc-gen-swift ./
  cd ..
}

function gitCloneGrpcSwift { 
  printf "\033c"
  echo "Fetching latest protoc-gen-swiftgrpc from Google"
  git clone https://github.com/grpc/grpc-swift.git
  cd grpc-swift
  cd Plugin
  make
  cp  protoc-gen-swiftgrpc /usr/local/bin
  cd ..
  cd ..
}

function installProtocDoc {
  printf "\033c"
  echo "Installing protoc doc generation"
  brew update
  brew install qt5 protobuf
  brew link --force qt5
  export PROTOBUF_PREFIX=$(brew --prefix protobuf)
  git clone https://github.com/estan/protoc-gen-doc.git
  cd protoc-gen-doc
  qmake
  make
  cp protoc-gen-doc /usr/local/bin
  cd ..
}

function installPythonProtobuffer {
  printf "\033c"
   echo "Installing GRPC with all plugins via brew";
   curl -fsSL https://goo.gl/getgrpc | bash -s -- --with-plugins
}

function cloneTensorFlowRemoveAllFilesExceptProto {
  printf "\033c"
  echo "Fetching latest proto files from tensorflow"
  #
  git clone https://github.com/tensorflow/tensorflow.git
  cd tensorflow
  find . -type f ! -name '*.proto' -delete #remove any file not proto
  find . -type d -empty -delete #remove empty directories
  cd ..
}

printf "\033c"
echo "\n\n\nINFO - we're going to do a fresh git clone of swift-protobuf + tensorflow\n";
echo "& keep the  .proto files and mass convert to swift 🚀 \n\n\n";


if [ -d "swift-protobuf" ] ; then
 read -p "⚠️  Existing swift-protobuf  detected - do you want to blow away & fetch latest code ? [Y/n]" CONDITION;
  if [ "$CONDITION" == "n" ] ; then
    echo "";
  else 
      rm -rf swift-protobuf
      gitCloneSwiftProtobuf
  fi
else
  gitCloneSwiftProtobuf
fi


# GOOGLE GRPC SWIFT
if [ -d "grpc-swift" ] ; then
  printf "\033c"
 read -p "⚠️  Existing grpc-swift  detected - do you want to blow away & fetch latest code ? [Y/n]" CONDITION;
  if [ "$CONDITION" == "n" ] ; then
    echo "";
  else 
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

# TENSORFLOW
if [ -d "tensorflow" ] ; then
  printf "\033c"
  read -p "⚠️  Existing tensorflow directory detected - do you want to blow away & fetch latest code ? [Y/n]" CONDITION;
  if [ "$CONDITION" == "n" ] ; then
    echo "ok";
  else 
      rm -rf tensorflow 
      cloneTensorFlowRemoveAllFilesExceptProto 
  fi 
else
  cloneTensorFlowRemoveAllFilesExceptProto
fi



if ! xcode-select -p >/dev/null; then
  echo "Installing xcode command line tools";
  sudo xcode-select --install
fi

printf "\033c"
if ! which grpc_python_plugin >/dev/null; then
 installPythonProtobuffer
fi


printf "\033c"
echo  "INFO - TO DO A MANUAL EXPANSION OF SERVICE PROTO FILE \n\n"
echo " see https://github.com/grpc/grpc-swift/blob/574c47b6a39959ff4f2e3eda1874108f95e00fa9/Plugin/README.md"


echo  "INFO - Convert all proto buffer files to "
printf  "\n\n"

echo  "1 - Swift 🚀"
echo   "2 - ObjC"
echo   "3 - Python"
echo   "4 - Ruby"
echo   "5 - Node"
echo   "6 - c#"
echo   "7 - c++"
echo   "A - ALL OF THE ABOVE"
printf  "\n\n"
printf  "[1], 2, 3, 4, 5, 6, 7, A"
printf  "\n\n"

read -p "" CONDITION;


if which protoc >/dev/null; then

	for file_path in $(find tensorflow  -name "*.proto" ); do
        DIR=$(dirname $file_path)
        file=$(basename $file_path)
        
        test=$file_path
        output_file=${test/.proto/.pb}
        doc_output_file=${test/.proto/.md}
        
        # Swift
        if [ "$CONDITION" == "1" ] ; then
          # https://github.com/grpc/grpc-swift/blob/574c47b6a39959ff4f2e3eda1874108f95e00fa9/Plugin/README.md
          echo  "\n☄️ protoc --plugin=./grpc-swift/Plugin/protoc-gen-swiftgrpc \ \n--proto_path=tensorflow  \ \n--swiftgrpc_out=. \ \n$file_path \n"
          protoc --plugin=./grpc-swift/Plugin/protoc-gen-swiftgrpc  \
          --proto_path=tensorflow \
          --swiftgrpc_out=. \
          $file_path 
       
          # output swift proto documentation
          echo "\n🚀 protoc --plugin=protoc-gen-swift=$(which protoc-gen-swift)  \ \n--proto_path=tensorflow  \ \n--swift_out=. --descriptor_set_out $output_file \ \n--doc_out=markdown,$doc_output_file:"." \ \n $file_path \n \n"
          protoc --plugin=protoc-gen-swift=$(which protoc-gen-swift) \
          --proto_path=tensorflow \
          --swift_out=. \
          --descriptor_set_out $output_file \
          $file_path 
          #--doc_out=markdown,$doc_output_file:"." \some problems related to directory - https://github.com/estan/protoc-gen-doc/issues/267

          

          
        fi

        # Objective -C
        if [ "$CONDITION" == "2" ] ; then
          protoc --plugin=protoc-gen-grpc=$(which grpc_objective_c_plugin) \
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
          protoc --plugin=protoc-gen-grpc=$(which  grpc_python_plugin) \
          --python_out=. \
          --grpc_out=. \
          #--doc_out=markdown,$html_output_file:"." \
          #--descriptor_set_out $output_file \
          $file_path
        fi

        # Ruby
        if [ "$CONDITION" == "4" ] ; then
          protoc --plugin=protoc-gen-grpc=$(which grpc_ruby_plugin) \
          --ruby_out=. \
          --grpc_out=. \
          #--doc_out=markdown,$html_output_file:"." \
          #--descriptor_set_out $output_file \
          $file_path
        fi

        # Node
        if [ "$CONDITION" == "5" ] ; then
          protoc --plugin=protoc-gen-grpc=$(which grpc_node_plugin) \
          --js_out=. \
          --grpc_out=. \
          #--doc_out=markdown,$html_output_file:"." \
          #--descriptor_set_out $output_file \
          $file_path
        fi

        # C#
        if [ "$CONDITION" == "6" ] ; then
          protoc --plugin=protoc-gen-grpc=$(which grpc_csharp_plugin) \
          --csharp_out=. \
          --grpc_out=. \
          #--doc_out=markdown,$html_output_file:"." \
          #--descriptor_set_out $output_file \
          $file_path
        fi

        # C++
        if [ "$CONDITION" == "7" ] ; then
          protoc --plugin=protoc-gen-grpc=$(which grpc_cpp_plugin) \
          --cpp_out=. \
          --grpc_out=. \
          #--doc_out=markdown,$html_output_file:"." \
          #--descriptor_set_out $output_file \
          $file_path
        fi


        # ALL OF THE ABOVE
        if [ "$CONDITION" == "A" ] ; then
          protoc --plugin=grpc-swift/Plugin/protoc-gen-swiftgrpc \
          --swift_out="." \
          --descriptor_set_out $output_file \
          --doc_out=markdown,$doc_output_file:"." \
          $file_path 
          
          protoc --plugin=protoc-gen-grpc=$(which grpc_objective_c_plugin) \
          --objc_out=. \
          --grpc_out=. \
          -I . \
          -I $DIR \
          $file_path

          protoc --plugin=protoc-gen-grpc=$(which  grpc_python_plugin) \
          --python_out=. \
          --grpc_out=. \
          $file_path

          protoc --plugin=protoc-gen-grpc=$(which grpc_ruby_plugin) \
          --ruby_out=. \
          --grpc_out=. \
          $file_path

          protoc --plugin=protoc-gen-grpc=$(which grpc_node_plugin) \
          --js_out=. \
          --grpc_out=. \
          $file_path

          protoc --plugin=protoc-gen-grpc=$(which grpc_csharp_plugin) \
          --csharp_out=. \
          --grpc_out=. \
          $file_path

          protoc --plugin=protoc-gen-grpc=$(which grpc_cpp_plugin) \
          --cpp_out=. \
          --grpc_out=. \
          $file_path
        fi


     
	done
  # move swift files to this directory
  mkdir Sources
  find . -maxdepth 1 -name "*.swift" -exec mv {} Sources \;

   
else
  echo "warning: Protoc not installed"
fi
