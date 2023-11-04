#!/bin/bash
# Script to setup openmrs platform 2.6


modules_dir=/var/lib/OpenMRS/modules
frontend_dir=/var/lib/OpenMRS/frontend
configuration_dir=/var/lib/OpenMRS/configuration
confguration_check_sum_dir=/var/lib/OpenMRS/configuration_checksums
openmrs_war_file_dir=/var/lib/tomcat9/webapps

#script directory
current_dir=$(pwd)
script_dir=$(dirname $0)

if [ $script_dir = '.' ]
then
script_dir="$current_dir"
fi
echo script_directory: ${script_dir}

# MySQL settings
mysql_user="root"
mysql_password="test"
mysql_base_database="openmrs"



# Read MySQL password from stdin if empty
if [ -z "${mysql_password}" ]; then
  echo -n "Enter MySQL ${mysql_user} password: "
  read -s mysql_password
  echo
fi

# Check MySQL password
echo exit | mysql --user=${mysql_user} --password=${mysql_password} -B 2>/dev/null
if [ "$?" -gt 0 ]; then
  echo "MySQL ${mysql_user} password incorrect"
  exit 1
else
  echo "MySQL ${mysql_user} password correct."
fi
echo
echo "Stopping tomcat..."
echo
sudo service tomcat9 stop

echo "upgrading Concept Dictionary to the latest"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} < "${script_dir}/dictionary/kenyaemr_concepts_dump-september_07_2023.sql" 
echo

if [ "$?" -gt 0 ]; then
  echo "MYSQL encountered a problem while processing KenyaEMR concepts."
  exit 1
else
  echo "Successfully updated concept dictionary .........................."
fi


echo "Deleting liquibase entries for ETL modules updates"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} -Bse "DELETE FROM liquibasechangelog where id like 'kenyaemrChart%';"
echo

echo "Deleting liquibase entries for ML modules updates"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} -Bse "DELETE FROM liquibasechangelog where id like '%kenyaemr-ML%';"
echo

echo "Deleting address layout format"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} -Bse "DELETE FROM global_property where property like 'layout.address.format%';"


echo "Deleting Queue concept names"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} -Bse "DELETE FROM global_property where property like 'queue.priorityConceptSetName%';"

mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} -Bse "DELETE FROM global_property where property like 'queue.serviceConceptSetName%';"

mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} -Bse "DELETE FROM global_property where property like 'queue.statusConceptSetName%';"

echo "Update address template layout format"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} < "${script_dir}/scripts/addressTemplate/address_layout_format.sql" 

echo

echo "Truncate patient appontments and queue  tables"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} < "${script_dir}/scripts/HIV/patient_appointment.sql" 
echo

echo "update drugs"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} < "${script_dir}/scripts/drug/drug_2023-10-25.sql" 
echo

echo "Set location tag map for login,queues and appointment"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} < "${script_dir}/scripts/location_tag_map/location_tag_map.sql" 

echo
echo "Create appointment services"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} < "${script_dir}/scripts/appointment_service/appointment_services.sql" 

echo
echo "Create queues"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} < "${script_dir}/scripts/queue/queues.sql" 

echo "Update tablet units for drug"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} < "${script_dir}/scripts/drug/update_tablet_units.sql" 
echo

echo "Squash KenyaEMR red banner"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} < "${script_dir}/scripts/red_banner/squash_red_banner.sql"

echo "Initial setup to squash red banner"
mysql --user=${mysql_user} --password=${mysql_password} ${mysql_base_database} < "${script_dir}/scripts/initial_setup/initial_setup.sql"
echo

echo "Deleting old modules folder"
sudo rm -R modules/
echo "Uncompressing module directory ..."
sudo tar -xzf modules.tar.gz
echo "Completed uncompressing module directory"
echo

echo "Deleting old .omod files."
echo

sudo rm -R ${modules_dir}/*.omod

echo "Finished deleting old .omod files."
echo

echo "Copying new .omod files."
echo
sudo cp ${current_dir}/modules/*.omod ${modules_dir}/

echo "Finished copying new .omod files."
echo

echo "Deleting address hierarchy configuration checksum"
echo
sudo rm -R ${confguration_check_sum_dir}/

echo "Finished deleting address configurations"
echo

echo
sudo rm -R ${frontend_dir}/
sudo mkdir ${frontend_dir}
echo "Finished creating frontend directory"
echo

echo
sudo rm -R ${configuration_dir}/
sudo mkdir ${configuration_dir}
echo "Finished creating configuration directory"
echo

echo "Copying csrf guard"
sudo cp csrfguard.properties /var/lib/OpenMRS
echo
echo "Deleting old frontend assets"
sudo rm -R frontend/
echo
echo "UnCompressing frontend assets"
sudo tar -xzf frontend.tar.gz
echo "Completed uncompressing frontend assets"
echo

echo "Copying frontend assets."
echo

sudo cp -R ${current_dir}/frontend/* ${frontend_dir}/

echo "Finished copying frontend assets."
echo

echo "Copying configuration assets."
echo
sudo cp  -R "${current_dir}"/configuration/* ${configuration_dir}/
echo "Finished copying configuration assets."
echo

echo "Granting read permission to the modules directory: ${modules_dir}."
sudo chmod --recursive +r ${modules_dir}/*.omod
sudo chown tomcat:tomcat  --recursive ${modules_dir}/*.omod

echo "Granting read permission to the frontend directory: ${frontend_dir}."
sudo chmod --recursive +rw ${frontend_dir}/*
sudo chown tomcat:tomcat  --recursive ${frontend_dir}/*

echo "Granting read permission to the configuration directory: ${configuration_dir}."
sudo chmod --recursive 777 ${configuration_dir}/*
sudo chown tomcat:tomcat  --recursive ${configuration_dir}/*

echo
echo "Starting tomcat..."
echo

sudo service tomcat9 start



