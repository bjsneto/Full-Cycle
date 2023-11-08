USE nodedb;

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

CREATE TABLE IF NOT EXISTS people(  
    id int not null auto_increment,  
    name VARCHAR(255),  
    PRIMARY KEY(id)  
);



INSERT INTO people (name) VALUES ('Belarmino José dos Santos Neto')