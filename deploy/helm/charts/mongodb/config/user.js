db.auth('admin','password')
db.createUser(
        {
                    user: "identity_user",
                    pwd: "identity_password",
                    roles: [ {role: "readWrite", db: "identity" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "secret_user",
                    pwd: "secret_password",
                    roles: [ {role: "readWrite", db: "secret" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "repository_user",
                    pwd: "repository_password",
                    roles: [ {role: "readWrite", db: "repository" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "plugin_user",
                    pwd: "plugin_password",
                    roles: [ {role: "readWrite", db: "plugin" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "config_user",
                    pwd: "config_password",
                    roles: [ {role: "readWrite", db: "config" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "inventory_user",
                    pwd: "inventory_password",
                    roles: [ {role: "readWrite", db: "inventory" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "monitoring_user",
                    pwd: "monitoring_password",
                    roles: [ {role: "readWrite", db: "monitoring" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "statistics_user",
                    pwd: "statistics_password",
                    roles: [ {role: "readWrite", db: "statistics" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "billing_user",
                    pwd: "billing_password",
                    roles: [ {role: "readWrite", db: "billing" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "notification_user",
                    pwd: "notification_password",
                    roles: [ {role: "readWrite", db: "notification" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "cost_saving_user",
                    pwd: "cost_saving_password",
                    roles: [ {role: "readWrite", db: "cost_saving" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "cost_analysis_user",
                    pwd: "cost_analysis_password",
                    roles: [ {role: "readWrite", db: "cost-analysis" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "power_scheduler_user",
                    pwd: "power_scheduler_password",
                    roles: [ {role: "readWrite", db: "power_scheduler" } ]
                }
);

db.auth('admin','password')
db.createUser(
        {
                    user: "spot_automation_user",
                    pwd: "spot_automation_password",
                    roles: [ {role: "readWrite", db: "spot_automation" } ]
                }
);

