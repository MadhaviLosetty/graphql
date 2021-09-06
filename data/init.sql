/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE IF NOT EXISTS domains(
  name citext NOT NULL,
  domain_suffix citext NOT NULL,
  provisioning_cert text,
  provisioning_cert_storage_format varchar(40),
  provisioning_cert_key text,
  creation_date timestamp,
  created_by varchar(40),
  CONSTRAINT domainname UNIQUE(name),
  CONSTRAINT domainsuffix UNIQUE(domain_suffix)
);

CREATE TABLE IF NOT EXISTS ciraconfigs(
  cira_config_name citext NOT NULL,
  mps_server_address varchar(256),
  mps_port integer,
  user_name varchar(40),
  password varchar(63),
  common_name varchar(256),
  server_address_format integer,
  auth_method integer,
  mps_root_certificate text,
  proxydetails text,
  PRIMARY KEY (cira_config_name)
);

CREATE TABLE IF NOT EXISTS profiles(
  profile_name citext NOT NULL,
  activation varchar(20) NOT NULL,
  amt_password varchar(40),
  cira_config_name citext,
  FOREIGN KEY (cira_config_name) REFERENCES ciraconfigs (cira_config_name),
  creation_date timestamp,
  created_by varchar(40),
  mebx_password varchar(40),
  tags text [],
  dhcp_enabled BOOLEAN,
  PRIMARY KEY (profile_name)
);

CREATE TABLE IF NOT EXISTS profiles_wirelessconfigs(
  wireless_profile_name citext,
  profile_name citext,
  FOREIGN KEY (wireless_profile_name) REFERENCES wirelessconfigs(wireless_profile_name),
  FOREIGN KEY (profile_name) REFERENCES profiles(profile_name),
  priority integer,
  creation_date timestamp,
  created_by varchar(40),
  PRIMARY KEY (wireless_profile_name, profile_name, priority)
);

CREATE UNIQUE INDEX lower_name_suffix_idx ON domains ((lower(name)), (lower(domain_suffix)));