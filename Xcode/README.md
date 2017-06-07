


TROUBLESHOOTING
=============================
if you get an import No such Module SwiftProtobuf
import SwiftProtobuf

cd grpc-swift
make


if you get an import gRPC error - check the header search path

if(when) you get _deflate / deflateEnd / deflateInit2 

in targets SwiftGRPC.xcodeproj
CgRPC

add libz.tbd to Linked Frameworks And Libraries


known issue
https://github.com/grpc/grpc-swift


