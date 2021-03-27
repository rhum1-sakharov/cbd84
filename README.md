cbd
========================

ToDO --> convert to springboot application

What is it?
-----------

This is your project! It is a sample, deployable Maven 3 project to help you get your foot in the door developing with Spring on JBoss Enterprise Application Platform 6 or JBoss AS 7.1. 

This project is setup to allow you to create a compliant Spring 3.1 application using Spring MVC, JPA 2.0 and Bean Validation 1.0. It includes a persistence unit and some sample persistence and transaction code to introduce you to database access in enterprise Java. 

The example uses the `java:jboss/datasources/SpringQuickstartDS` database, configured and deployed by the application.

System requirements
-------------------

All you need to build this project is Java 6.0 (Java SDK 1.6) or better, Maven 3.0 or better.

The application this project produces is designed to be run on JBoss Enterprise Application Platform 6 or JBoss AS 7.1. 

Start JBoss Enterprise Application Platform 6 or JBoss AS 7.1
-------------------------

1. Open a command line and navigate to the root of the JBoss server directory.
2. The following shows the command line to start the server with the web profile:

        For Linux:   JBOSS_HOME/bin/standalone.sh
        For Windows: JBOSS_HOME\bin\standalone.bat


Build and Deploy the Application
-------------------------

1. Make sure you have started the JBoss Server as described above.
2. Open a command line and navigate to the root directory of this quickstart.
3. Type this command to build and deploy the archive:

        mvn clean package jboss-as:deploy

4. This will deploy `target/cbd.war` to the running instance of the server.


Access the application 
---------------------
 
The application will be running at the following URL: <http://localhost:8080/cbd/>.


Undeploy the Archive
--------------------

1. Make sure you have started the JBoss Server as described above.
2. Open a command line and navigate to the root directory of this quickstart.
3. When you are finished testing, type this command to undeploy the archive:

        mvn jboss-as:undeploy


Debug the Application
------------------------------------

If you want to debug the source code or look at the Javadocs of any library in the project, run either of the following commands to pull them into your local repository. The IDE should then detect them.

        mvn dependency:sources
        mvn dependency:resolve -Dclassifier=javadoc
        
ADDING DATASOURCE MYSQL in JBOSS 7.1
-------------------------------------

create a module.xml in $JBOSS/modules/com/mysql/main with content below :
	
	<?xml version="1.0" encoding="UTF-8"?>
	<module xmlns="urn:jboss:module:1.1" name="com.mysql">
  <resources>
    <resource-root path="mysql-connector-java-5.1.37-bin.jar"/>
  </resources>
  <dependencies>
    <module name="javax.api"/>
    <module name="javax.transaction.api"/>
  </dependencies>
</module>

add the mysql-connector-java-5.1.37-bin.jar to the same path

add the datasource to the standalone.xml with the module name com.mysql, add the driver-class option in the driver definition

	<datasource jndi-name="java:jboss/datasources/MySqlDS" pool-name="MySqlDS" enabled="true">
                    <connection-url>jdbc:mysql://localhost:3306/test</connection-url>
                    **<driver>mysql</driver>**
                    <transaction-isolation>TRANSACTION_READ_COMMITTED</transaction-isolation>
                    <pool>
                        <min-pool-size>10</min-pool-size>
                        <max-pool-size>100</max-pool-size>
                        <prefill>true</prefill>
                    </pool>
                    <security>
                        <user-name>root</user-name>
                    </security>
                    <statement>
                        <prepared-statement-cache-size>32</prepared-statement-cache-size>
                        <share-prepared-statements>true</share-prepared-statements>
                    </statement>
                </datasource>
                <drivers>
                    **<driver name="mysql" module="com.mysql">**
                        **<driver-class>com.mysql.jdbc.Driver</driver-class>**
                        <xa-datasource-class>com.mysql.jdbc.jdbc2.optional.MysqlXADataSource</xa-datasource-class>
                    </driver>
                    <driver name="h2" module="com.h2database.h2">
                        <xa-datasource-class>org.h2.jdbcx.JdbcDataSource</xa-datasource-class>
                    </driver>
                </drivers>
            </datasources>

## START TOMCAT ON UBUNUTU SERVER :
sudo initctl start tomcat


## MOD_PROXY APACHE ON UBUNUTU SERVER
http://sharadchhetri.com/2013/08/02/how-to-install-mod_proxy-and-setup-reverse-proxy-in-apache-ubuntu/
