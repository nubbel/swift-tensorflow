# Protocol Documentation
<a name="top"/>

## Table of Contents
* [test_log.proto](#test_log.proto)
 * [AvailableDeviceInfo](#tensorflow.AvailableDeviceInfo)
 * [BenchmarkEntries](#tensorflow.BenchmarkEntries)
 * [BenchmarkEntry](#tensorflow.BenchmarkEntry)
 * [BenchmarkEntry.ExtrasEntry](#tensorflow.BenchmarkEntry.ExtrasEntry)
 * [BuildConfiguration](#tensorflow.BuildConfiguration)
 * [CPUInfo](#tensorflow.CPUInfo)
 * [CPUInfo.CacheSizeEntry](#tensorflow.CPUInfo.CacheSizeEntry)
 * [CommitId](#tensorflow.CommitId)
 * [EntryValue](#tensorflow.EntryValue)
 * [GPUInfo](#tensorflow.GPUInfo)
 * [MachineConfiguration](#tensorflow.MachineConfiguration)
 * [MemoryInfo](#tensorflow.MemoryInfo)
 * [PlatformInfo](#tensorflow.PlatformInfo)
 * [RunConfiguration](#tensorflow.RunConfiguration)
 * [TestResults](#tensorflow.TestResults)
 * [TestResults.BenchmarkType](#tensorflow.TestResults.BenchmarkType)
* [Scalar Value Types](#scalar-value-types)

<a name="test_log.proto"/>
<p align="right"><a href="#top">Top</a></p>

## test_log.proto



<a name="tensorflow.AvailableDeviceInfo"/>
### AvailableDeviceInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| type | [string](#string) | optional |  |
| memory_limit | [int64](#int64) | optional |  |
| physical_description | [string](#string) | optional |  |


<a name="tensorflow.BenchmarkEntries"/>
### BenchmarkEntries


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| entry | [BenchmarkEntry](#tensorflow.BenchmarkEntry) | repeated |  |


<a name="tensorflow.BenchmarkEntry"/>
### BenchmarkEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| iters | [int64](#int64) | optional |  |
| cpu_time | [double](#double) | optional |  |
| wall_time | [double](#double) | optional |  |
| throughput | [double](#double) | optional |  |
| extras | [BenchmarkEntry.ExtrasEntry](#tensorflow.BenchmarkEntry.ExtrasEntry) | repeated |  |


<a name="tensorflow.BenchmarkEntry.ExtrasEntry"/>
### BenchmarkEntry.ExtrasEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [EntryValue](#tensorflow.EntryValue) | optional |  |


<a name="tensorflow.BuildConfiguration"/>
### BuildConfiguration


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mode | [string](#string) | optional |  |
| cc_flags | [string](#string) | repeated |  |
| opts | [string](#string) | repeated |  |


<a name="tensorflow.CPUInfo"/>
### CPUInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| num_cores | [int64](#int64) | optional |  |
| num_cores_allowed | [int64](#int64) | optional |  |
| mhz_per_cpu | [double](#double) | optional |  |
| cpu_info | [string](#string) | optional |  |
| cpu_governor | [string](#string) | optional |  |
| cache_size | [CPUInfo.CacheSizeEntry](#tensorflow.CPUInfo.CacheSizeEntry) | repeated |  |


<a name="tensorflow.CPUInfo.CacheSizeEntry"/>
### CPUInfo.CacheSizeEntry


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [int64](#int64) | optional |  |


<a name="tensorflow.CommitId"/>
### CommitId


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| changelist | [int64](#int64) | optional |  |
| hash | [string](#string) | optional |  |
| snapshot | [string](#string) | optional |  |


<a name="tensorflow.EntryValue"/>
### EntryValue


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| double_value | [double](#double) | optional |  |
| string_value | [string](#string) | optional |  |


<a name="tensorflow.GPUInfo"/>
### GPUInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| model | [string](#string) | optional |  |
| uuid | [string](#string) | optional |  |
| bus_id | [string](#string) | optional |  |


<a name="tensorflow.MachineConfiguration"/>
### MachineConfiguration


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hostname | [string](#string) | optional |  |
| serial_identifier | [string](#string) | optional |  |
| platform_info | [PlatformInfo](#tensorflow.PlatformInfo) | optional |  |
| cpu_info | [CPUInfo](#tensorflow.CPUInfo) | optional |  |
| device_info | [Any](#google.protobuf.Any) | repeated |  |
| available_device_info | [AvailableDeviceInfo](#tensorflow.AvailableDeviceInfo) | repeated |  |
| memory_info | [MemoryInfo](#tensorflow.MemoryInfo) | optional |  |


<a name="tensorflow.MemoryInfo"/>
### MemoryInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total | [int64](#int64) | optional |  |
| available | [int64](#int64) | optional |  |


<a name="tensorflow.PlatformInfo"/>
### PlatformInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bits | [string](#string) | optional |  |
| linkage | [string](#string) | optional |  |
| machine | [string](#string) | optional |  |
| release | [string](#string) | optional |  |
| system | [string](#string) | optional |  |
| version | [string](#string) | optional |  |


<a name="tensorflow.RunConfiguration"/>
### RunConfiguration


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| argument | [string](#string) | repeated |  |


<a name="tensorflow.TestResults"/>
### TestResults


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| target | [string](#string) | optional |  |
| entries | [BenchmarkEntries](#tensorflow.BenchmarkEntries) | optional |  |
| build_configuration | [BuildConfiguration](#tensorflow.BuildConfiguration) | optional |  |
| commit_id | [CommitId](#tensorflow.CommitId) | optional |  |
| start_time | [int64](#int64) | optional |  |
| run_time | [double](#double) | optional |  |
| machine_configuration | [MachineConfiguration](#tensorflow.MachineConfiguration) | optional |  |
| run_configuration | [RunConfiguration](#tensorflow.RunConfiguration) | optional |  |
| name | [string](#string) | optional |  |
| benchmark_type | [TestResults.BenchmarkType](#tensorflow.TestResults.BenchmarkType) | optional |  |
| run_mode | [string](#string) | optional |  |



<a name="tensorflow.TestResults.BenchmarkType"/>
### TestResults.BenchmarkType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| CPP_MICROBENCHMARK | 1 |  |
| PYTHON_BENCHMARK | 2 |  |
| ANDROID_BENCHMARK | 3 |  |





<a name="scalar-value-types"/>
## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double"/> double |  | double | double | float |
| <a name="float"/> float |  | float | float | float |
| <a name="int32"/> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64"/> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32"/> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64"/> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32"/> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64"/> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32"/> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64"/> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32"/> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64"/> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool"/> bool |  | bool | boolean | boolean |
| <a name="string"/> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes"/> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |
