# chmod +x cloneConvertProto.sh
printf "\033c"
echo "Fetching latest protobuf from Apple"
git clone https://github.com/apple/swift-protobuf.git
cd swift-protobuf
swift build
cp .build/debug/protoc-gen-swift ./
cd ..

printf "\033c"
read -p "WARNING - do you want to clean tensorflow directory? [y/N]" CONDITION;
if [ "$CONDITION" == "y" ] ; then
    rm -rf tensorflow
fi
echo "Fetching latest proto files from tensorflow"
#
git clone git@github.com:tensorflow/tensorflow.git
printf "\033c"
cd tensorflow
find . -type f ! -name '*.proto' -delete #remove any file not proto
find . -type d -empty -delete #remove empty directories



if ! xcode-select -p >/dev/null; then
  echo "Installing xcode command line tools";
  sudo xcode-select --install
fi

printf "\033c"
if ! which grpc_python_plugin >/dev/null; then
 echo "Installing GRPC with all plugins via brew";
 curl -fsSL https://goo.gl/getgrpc | bash -s -- --with-plugins
fi


printf "\033c"
echo  "INFO - Convert tensorflow protobuffers to "
printf  "\n\n"

echo  "1 - Swift"
echo   "2 - ObjC"
echo   "3 - Python"
echo   "4 - Ruby"
echo   "5 - Node"
echo   "6 - c#"
echo   "7 - c++"
printf  "\n\n"
printf  "[1], 2, 3, 4, 5, 6, 7"
printf  "\n\n"
read -p "" CONDITION;

if which protoc >/dev/null; then

	for file_path in $(find . -name "*.proto"); do
        DIR=$(dirname $file_path)
        #echo "$DIR"
        echo "$file_path"

        # Swift
        if [ "$CONDITION" == "1" ] ; then
          protoc --plugin=../swift-protobuf/protoc-gen-swift $file_path  --swift_out="."
        fi

        # Objective -C
        if [ "$CONDITION" == "2" ] ; then
        protoc --plugin=protoc-gen-grpc=$(which grpc_objective_c_plugin) \
        --objc_out=. \
        --grpc_out=. \
        -I . \
        -I $DIR \
        $file_path
        fi

        # Python
        if [ "$CONDITION" == "3" ] ; then
        protoc --plugin=protoc-gen-grpc=$(which  grpc_python_plugin) \
        --python_out=. \
        --grpc_out=. \
        $file_path
        fi

        # Ruby
        if [ "$CONDITION" == "4" ] ; then
        protoc --plugin=protoc-gen-grpc=$(which grpc_ruby_plugin) \
        --ruby_out=. \
        --grpc_out=. \
        $file_path
        fi

        # Node
        if [ "$CONDITION" == "5" ] ; then
        protoc --plugin=protoc-gen-grpc=$(which grpc_node_plugin) \
        --node_out=. \
        --grpc_out=. \
        $file_path
        fi

        # C#
        if [ "$CONDITION" == "6" ] ; then
        protoc --plugin=protoc-gen-grpc=$(which grpc_csharp_plugin) \
        --csharp_out=. \
        --grpc_out=. \
        $file_path
        fi

        # C++
        if [ "$CONDITION" == "7" ] ; then
        protoc --plugin=protoc-gen-grpc=$(which grpc_cpp_plugin) \
        --cpp_out=. \
        --grpc_out=. \
        $file_path
        fi


     
	done

else
  echo "warning: Protoc not installed"
fi
