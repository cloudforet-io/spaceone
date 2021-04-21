# Version 1.6.1


## New addition/improvement functions

### 1. Cloud cost detail history widget added

- Cloud cost history can be viewed in detail on a daily/monthly basis in the Project Dashboard.

### 2. How Garbage Collection works

- In order to update Cloud Resource changes more quickly, it has been changed in the following manner.

|SpaceONE version|GC run cycle|How GC works|
|:---:|:---:|:---:|
|~ v1.5.3|Everyday utc 00:00|<ul><li>Not collected in 24 hours Disconnected</li><li>Not collected in 48 hours Deleted</li></ul> |
|v1.6.1 ~|Executed every time the collector is in operation|<ul><li>1 collection failed Disconnected</li><li>2 collection failed Deleted</li></ul>|

### 3. Improved Cloud Resource search function
- In addition to the collected parameters, monitoring data and tags can be searched.
- To search monitoring data, Monitoring Collector needs to be added.

### 4. Other improvements

- Guide to'Copied' message when clicking the copy button on the console
- 'Assigned Role' can be searched on User Page (actual RBAC application will be scheduled later)
- Add a'Pending State' after adding a user (waiting for initial login)
- Additional support for components that do not support language change in the console

## Bug fixes

- Error in Server Multi Select
- Status inquiry error in Job Page
- 'Connect to Console' link error in Service Account
- Improvement of errors related to role search and setting in User Page
- Other Minor bugfix


## Plugin
Here are the plug-in versions compatible with SpaceOne v1.6.1.
If there is something wrong with the function, the latest update of the plugin to the version below is required.

### Compatible plugin list

|whether added|plugin type|Provider|plug-in name|version|
|:---:|---|:---:|:---:|:---:|
|-|identity.Auth|oAuth|google-oauth2|v1.1|
|Updated|inventory.Collector|aws|aws-trusted-advisor|v1.2|
|Updated|inventory.Collector|aws|aws-ec2|v1.8|
|Updated|inventory.Collector|aws|aws-cloud-service|v1.6|
|Updated|inventory.Collector|aws|plugin-aws-power-state|v1.3|
|Updated|inventory.Collector|aws|aws-personal-health-dashboard|v1.1|
|Updated|inventory.Collector|google cloud|google-cloud-compute|v1.2.1|
|Updated|inventory.Collector|google cloud|google-cloud-services|v1.1.2|
|-|inventory.Collector|google cloud|google-cloud-power-state|v1.0|
|Updated|inventory.Collector|azure|azure-vm|v1.2.1|
|Updated|inventory.Collector|azure|azure-cloud-services|v1.1|
|Updated|inventory.Collector|azure|azure-power-state|v1.3|
|-|inventory.Collector|spaceone|monitoring-metric-collector|v1.0|
|-|monitoring.DataSource|aws|aws-cloudwatch|v1.1|
|-|monitoring.DataSource|google cloud|google-cloud-stackdriver|v1.0.3|
|-|monitoring.DataSource|aws|azure-monitor|v1.0|
|-|power_scheduler.Controller|aws|aws-power-controller|v1.0|
|-|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.0.1|
|-|billing.DataSource|hyperbilling|aws-hyperbilling|v1.0.2|


## Hotfix Update
|Date|Micro Service|Version|Changes|
|---|:---:|:---:|:---:|
|2020.01.25|statistics|1.6.1.3|query bug fixed|
|2020.01.26|identity|1.6.1.1|authentication handler added|




