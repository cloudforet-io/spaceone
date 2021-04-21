# Version 1.6.4


## New addition/improvement functions

Functional stabilization BugFix applied to each MicroService

|Service|Version |
|---   |---    |
| console     		| 1.6.4.2       |
| console-api     	| 1.6.4.5      |
| identity     		|  1.6.4.1     |
| secret     		|  1.6.4     |
| repository     	| 1.6.4      |
| plugin     		|  1.6.4     |
| config     		|  1.6.4     |
| inventory     	| 1.6.4      |
| monitoring     	| 1.6.4      |
| statistics     	| 1.6.4      |
| billing     		| 1.6.4      |
| power-scheduler     	| 1.6.4       |
| supervisor     	| 1.6.4      |

## Plugin
Introducing the plug-in version compatible with SpaceONE v1.6.4.
If there is something wrong with the function, the latest update of the plugin to the version below is required.

### Compatible plugin list

|whether added|plugin type|Provider|plug-in name|version|
|:---:|---|:---:|:---:|:---:|
|-|identity.Auth|oAuth|google-oauth2|v1.1|
|-|inventory.Collector|aws|aws-trusted-advisor|v1.2|
|Updated|inventory.Collector|aws|aws-ec2|v1.10|
|Updated|inventory.Collector|aws|aws-cloud-service|v1.8.2|
|Updated|inventory.Collector|aws|aws-power-state|v1.5.1|
|-|inventory.Collector|aws|aws-personal-health-dashboard|v1.1|
|Updated|inventory.Collector|google cloud|google-cloud-compute|v1.2.5|
|Updated|inventory.Collector|google cloud|google-cloud-services|v1.1.9|
|Updated|inventory.Collector|google cloud|google-cloud-power-state|v1.1.2|
|Updated|inventory.Collector|azure|azure-vm|v1.2.1|
|Updated|inventory.Collector|azure|azure-cloud-services|v1.1.1|
|Updated|inventory.Collector|azure|azure-power-state|v1.0|
|Updated|inventory.Collector|spaceone|monitoring-metric-collector|v1.1|
|Updated|monitoring.DataSource|aws|aws-cloudwatch|v1.1|
|Updated|monitoring.DataSource|google cloud|google-cloud-stackdriver|v1.0.3|
|-|monitoring.DataSource|aws|azure-monitor|v1.0|
|-|power_scheduler.Controller|aws|aws-power-scheduler-controller|v1.4.4|
|-|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.1.2|
|-|billing.DataSource|hyperbilling|aws-hyperbilling|v1.0.2|


## Hotfix Update
|Date|Micro Service|Version|Changes|
|---|:---:|:---:|:---:|
|2021.03.10|console|1.6.4.3|Not applied search filter issue fixed |
|2021.03.10|repository|1.6.4.1|Authorization failing error fixed|
|2021.03.10|console|1.6.4.4|Service Account Creation Failed fixed|
|2021.03.12|console-api|1.6.4.6|Project tree error fixed|
|2021.03.31|console|1.6.4.5|Authorization error creating service account in some condition fixed|

